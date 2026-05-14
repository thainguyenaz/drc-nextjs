import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { uploadFormConversion } from "@/lib/tracking/google-ads";
import { fireGa4Lead } from "@/lib/tracking/ga4-mp";

export const runtime = "nodejs";

const INSURANCE_NOTIFY_URL =
  "https://api.desertrecoverycenters.com/api/notifications/insurance";

const HUBSPOT_PORTAL_ID = "48050688";
const HUBSPOT_FORM_GUID = "9bb92a90-3e2d-48d3-a7be-91fed4e466ed";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rl = rateLimit(`partner-referral:${ip}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  const results = { hubspot: false, email: false };
  let relayError: string | null = null;

  try {
    const formData = await request.formData();

    // Honeypot: silently "succeed" so bots don't learn to adapt.
    const honeypot = (formData.get("hp_check") as string | null) ?? "";
    if (honeypot.trim() !== "") {
      console.warn("Honeypot triggered on /api/partner-referral from ip=" + ip);
      return NextResponse.json({ success: true, emailSent: false });
    }

    const turnstileToken =
      (formData.get("turnstileToken") as string | null) ||
      (formData.get("cf-turnstile-response") as string | null);
    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      console.warn(
        "[partner-referral] 400:",
        JSON.stringify({
          reason: "turnstile_failed",
          tokenPresent: Boolean(turnstileToken),
        })
      );
      return NextResponse.json(
        { error: "Verification failed" },
        { status: 400 }
      );
    }

    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const insuranceCarrier = formData.get("insurance_carrier") as string;
    const memberId = formData.get("member_id") as string;
    const dateOfBirth = formData.get("date_of_birth") as string;
    const frontCard = formData.get("front_card") as File | null;
    const backCard = formData.get("back_card") as File | null;

    // Server-side required-field guards.
    const required: Record<string, string> = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      insurance_carrier: insuranceCarrier,
      member_id: memberId,
      date_of_birth: dateOfBirth,
    };
    for (const [name, value] of Object.entries(required)) {
      if (!value || value.trim() === "") {
        console.warn(
          "[partner-referral] 400:",
          JSON.stringify({ reason: "missing_field", field: name })
        );
        return NextResponse.json(
          { error: `${name} is required` },
          { status: 400 }
        );
      }
    }

    // Card images REQUIRED for partner referrals (looser than insurance route - partner
    // referrers always have the card, so we enforce upload here rather than leaving optional).
    if (!frontCard || frontCard.size === 0) {
      console.warn(
        "[partner-referral] 400:",
        JSON.stringify({ reason: "missing_front_card" })
      );
      return NextResponse.json(
        { error: "Front of insurance card is required" },
        { status: 400 }
      );
    }
    if (!backCard || backCard.size === 0) {
      console.warn(
        "[partner-referral] 400:",
        JSON.stringify({ reason: "missing_back_card" })
      );
      return NextResponse.json(
        { error: "Back of insurance card is required" },
        { status: 400 }
      );
    }

    // STEP 1: HubSpot submission (primary).
    try {
      const hubspotRes = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: firstName },
              { name: "lastname", value: lastName },
              { name: "email", value: email },
              { name: "phone", value: phone },
              { name: "insurance_carrier", value: insuranceCarrier },
              { name: "member_id", value: memberId || "" },
              { name: "date_of_birth", value: dateOfBirth },
            ],
            context: {
              pageUri: "https://desertrecoverycenters.com/partner-referral-vrc",
              pageName: "Partner Referral | Desert Recovery Centers",
            },
          }),
        }
      );
      results.hubspot = hubspotRes.ok;
      if (!hubspotRes.ok) {
        const err = await hubspotRes.text();
        console.error("HubSpot error:", hubspotRes.status, err);
      }
    } catch (e) {
      console.error("HubSpot exception:", e);
    }

    // STEP 2: Email + Telegram via jarvis-api notifications (secondary, never blocks).
    // Reuses /api/notifications/insurance endpoint with distinct source string per D8 decision.
    const relaySource = "website_partner_referral_vrc";
    let filesAttached = 0;
    const fieldsAttempted = 8;
    try {
      const relayBody = new FormData();
      relayBody.append("firstname", firstName);
      relayBody.append("lastname", lastName);
      relayBody.append("email", email);
      relayBody.append("phone", phone);
      relayBody.append("insurance_carrier", insuranceCarrier);
      relayBody.append("member_id", memberId || "");
      relayBody.append("date_of_birth", dateOfBirth);
      relayBody.append("source", relaySource);

      if (frontCard && frontCard.size > 0) {
        relayBody.append("front_card", frontCard);
        filesAttached += 1;
      }
      if (backCard && backCard.size > 0) {
        relayBody.append("back_card", backCard);
        filesAttached += 1;
      }

      const relayRes = await fetch(INSURANCE_NOTIFY_URL, {
        method: "POST",
        body: relayBody,
      });

      results.email = relayRes.ok;
      if (!relayRes.ok) {
        const errText = await relayRes.text();
        relayError = `HTTP ${relayRes.status}: ${errText.slice(0, 300)}`;
        console.error("[partner-referral] relay failed:", {
          error: relayError,
          source: relaySource,
          fields_attempted: fieldsAttempted,
        });
      } else {
        console.log("[partner-referral] relay delivered:", {
          emailOk: true,
          filesAttached,
          source: relaySource,
        });
      }
    } catch (e: unknown) {
      const err = e as Error;
      relayError = err.message;
      console.error("[partner-referral] relay failed:", {
        error: err.message,
        source: relaySource,
        fields_attempted: fieldsAttempted,
      });
    }

    console.log("Submission results:", results);

    if (results.hubspot) {
      const gclid = request.cookies.get("_dr_gclid")?.value ?? null;
      const gaCookie = request.cookies.get("_ga")?.value ?? null;
      const [adsResult, ga4Result] = await Promise.allSettled([
        uploadFormConversion({
          formType: "partner_referral",
          email,
          phone,
          gclid,
        }),
        fireGa4Lead({
          formType: "partner_referral",
          gaCookie,
          landingPage: "https://desertrecoverycenters.com/partner-referral-vrc",
        }),
      ]);
      console.log(
        "[partner-referral] conversion-fire:",
        JSON.stringify({
          ads:
            adsResult.status === "fulfilled"
              ? adsResult.value
              : { error: String(adsResult.reason).slice(0, 200) },
          ga4:
            ga4Result.status === "fulfilled"
              ? ga4Result.value
              : { error: String(ga4Result.reason).slice(0, 200) },
        })
      );

      if (results.email) {
        return NextResponse.json({
          success: true,
          emailSent: true,
        });
      }

      return NextResponse.json(
        {
          success: true,
          hubspotSubmitted: true,
          emailSent: false,
          warning:
            "We got the referral but had trouble notifying our team. Please call (480) 931-3617 so we can verify the patient's benefits right away.",
          relayError,
        },
        { status: 207 }
      );
    }

    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  } catch (error) {
    console.error("Partner referral error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
