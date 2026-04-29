import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { uploadFormConversion } from "@/lib/tracking/google-ads";
import { fireGa4Lead } from "@/lib/tracking/ga4-mp";

export const runtime = "nodejs";

const INSURANCE_NOTIFY_URL =
  "https://api.desertrecoverycenters.com/api/notifications/insurance";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rl = rateLimit(`insurance:${ip}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  const results = { hubspot: false, email: false };

  try {
    const formData = await request.formData();

    // Honeypot: silently "succeed" so bots don't learn to adapt.
    const honeypot = (formData.get("hp_check") as string | null) ?? "";
    if (honeypot.trim() !== "") {
      console.warn("Honeypot triggered on /api/insurance-verification from ip=" + ip);
      return NextResponse.json({ success: true, emailSent: false });
    }

    const turnstileToken =
      (formData.get("turnstileToken") as string | null) ||
      (formData.get("cf-turnstile-response") as string | null);
    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      console.warn(
        "[insurance-verification] 400:",
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
    const howDidYouHear = formData.get("how_did_you_hear") as string;
    const frontCard = formData.get("front_card") as File | null;
    const backCard = formData.get("back_card") as File | null;

    // Member ID is now required server-side (card uploads are optional).
    if (!memberId || memberId.trim() === "") {
      console.warn(
        "[insurance-verification] 400:",
        JSON.stringify({ reason: "missing_member_id" })
      );
      return NextResponse.json(
        { error: "Member ID is required" },
        { status: 400 }
      );
    }

    // STEP 1: HubSpot submission (primary)
    try {
      const hubspotRes = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/48050688/5fc5394d-3806-4291-a308-da475add5c6c",
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
              { name: "how_did_you_hear", value: howDidYouHear || "" },
            ],
            context: {
              pageUri: "https://desertrecoverycenters.com/insurance",
              pageName: "Insurance Verification",
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

    // STEP 2: Email + Telegram via jarvis-api notifications (secondary, never blocks)
    try {
      const relayBody = new FormData();
      relayBody.append("firstname", firstName);
      relayBody.append("lastname", lastName);
      relayBody.append("email", email);
      relayBody.append("phone", phone);
      relayBody.append("insurance_carrier", insuranceCarrier);
      relayBody.append("member_id", memberId || "");
      relayBody.append("date_of_birth", dateOfBirth);
      relayBody.append("how_did_you_hear", howDidYouHear || "");
      relayBody.append("source", "website_insurance_verification");

      if (frontCard && frontCard.size > 0) {
        relayBody.append("front_card", frontCard);
      }
      if (backCard && backCard.size > 0) {
        relayBody.append("back_card", backCard);
      }

      const relayRes = await fetch(INSURANCE_NOTIFY_URL, {
        method: "POST",
        body: relayBody,
      });

      results.email = relayRes.ok;
      if (!relayRes.ok) {
        const err = await relayRes.text();
        console.error("Insurance notify error:", relayRes.status, err);
      } else {
        console.log("Insurance notification delivered (email + telegram)");
      }
    } catch (e: unknown) {
      const err = e as Error;
      console.error("Insurance notify exception (non-blocking):", err.message);
    }

    console.log("Submission results:", results);

    if (results.hubspot) {
      const gclid = request.cookies.get("_dr_gclid")?.value ?? null;
      const gaCookie = request.cookies.get("_ga")?.value ?? null;
      const [adsResult, ga4Result] = await Promise.allSettled([
        uploadFormConversion({
          formType: "insurance_verification",
          email,
          phone,
          gclid,
        }),
        fireGa4Lead({
          formType: "insurance_verification",
          gaCookie,
          landingPage: "https://desertrecoverycenters.com/insurance",
        }),
      ]);
      console.log(
        "[insurance-verification] conversion-fire:",
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

      return NextResponse.json({
        success: true,
        emailSent: results.email,
      });
    }

    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  } catch (error) {
    console.error("Insurance verification error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
