import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import {
  checkTurnstile,
  turnstileAllowsDrip,
  turnstileRejects,
} from "@/lib/turnstile";
import {
  parseTurnstileTelemetry,
  turnstileClientLogLine,
} from "@/lib/turnstile-client-state";
import { uploadFormConversion } from "@/lib/tracking/google-ads";
import { fireGa4Lead } from "@/lib/tracking/ga4-mp";
import { buildMarketingConsents, parseConsentValue } from "@/lib/consent";
import { classifyPayer, enrollInDrip } from "@/lib/drip-intake";

export const runtime = "nodejs";

// Website forms no longer submit to HubSpot (Vercel PHI remediation; DRC
// is exiting HubSpot and data already there is under review, so nothing in
// HubSpot is touched). The lead reaches admissions, CTM and Dazos through
// the jarvis-api relay below, and the drip through enrollInDrip.
const LEAD_NOTIFY_URL =
  "https://api.desertrecoverycenters.com/api/notifications/lead";

interface Payload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  seekingFor?: string;
  insuranceProvider?: string;
  situation?: string;
  variant?: string;
  pageUri?: string;
  pageName?: string;
  smsConsent?: boolean; // marketing consent checkbox value (SMS + email)
  hp_check?: string; // honeypot
  turnstileToken?: string;
  // Non-PII widget telemetry (see src/lib/turnstile-client-state.ts)
  turnstileState?: unknown;
  turnstileMs?: unknown;
  turnstilePreloaded?: unknown;
  turnstileErrors?: unknown;
}

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  const rl = rateLimit(`get-help:${ip}`, 5, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      }
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    console.warn("[get-help] 400:", JSON.stringify({ reason: "invalid_body" }));
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: bot filled a hidden field. Silently "succeed" so the bot
  // doesn't learn to adapt; drop the record on our side.
  if (str(body.hp_check).trim() !== "") {
    console.warn("Honeypot triggered on /api/get-help from ip=" + ip);
    return NextResponse.json({ success: true });
  }

  const turnstile = await checkTurnstile(body.turnstileToken, ip);
  // Client widget state at submit (non-PII enum + timings) for diagnosing
  // token-less submissions. Logged for every verdict; never affects it.
  console.log(
    turnstileClientLogLine("get-help", turnstile, parseTurnstileTelemetry(body))
  );
  if (turnstileRejects(turnstile)) {
    console.warn(
      "[get-help] 400:",
      JSON.stringify({
        reason: "turnstile_failed",
        verdict: turnstile,
        tokenPresent: Boolean(body.turnstileToken),
      })
    );
    return NextResponse.json({ error: "Verification failed" }, { status: 400 });
  }


  const firstName = str(body.firstName).trim();
  const lastName = str(body.lastName).trim();
  const email = str(body.email).trim();
  const phone = str(body.phone).trim();
  const seekingFor = str(body.seekingFor);
  const insuranceProvider = str(body.insuranceProvider);
  const situation = str(body.situation);

  if (!firstName || !lastName || !email || !phone) {
    console.warn(
      "[get-help] 400:",
      JSON.stringify({
        reason: "missing_fields",
        missing: {
          firstName: !firstName,
          lastName: !lastName,
          email: !email,
          phone: !phone,
        },
      })
    );
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Lead notify via jarvis-api: the admissions email plus the CTM and Dazos
  // fan-out. With HubSpot gone this is the lead's only path to admissions,
  // so it decides success (a failure returns an error and the visitor is
  // asked to call, instead of the lead being silently lost).
  const utmSource = request.cookies.get("_dr_utm_source")?.value ?? null;
  const utmMedium = request.cookies.get("_dr_utm_medium")?.value ?? null;
  const utmCampaign = request.cookies.get("_dr_utm_campaign")?.value ?? null;
  const utmTerm = request.cookies.get("_dr_utm_term")?.value ?? null;
  const utmContent = request.cookies.get("_dr_utm_content")?.value ?? null;

  // Record the actual consent the visitor gave, as structured records (one per
  // channel), instead of discarding the checkbox value. Goes to the
  // lead-notify relay and the logs. captured_at is stamped server-side here.
  const consents = buildMarketingConsents(parseConsentValue(body.smsConsent));
  console.log(
    "[get-help] consent:",
    JSON.stringify({
      granted: consents[0]?.granted ?? false,
      types: consents.map((c) => c.consent_type),
      version: consents[0]?.consent_text_version,
    })
  );
  let notifyOk = false;
  try {
    const notifyRes = await fetch(LEAD_NOTIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "get_help_form",
        firstName,
        lastName,
        phone,
        email,
        insurance: insuranceProvider,
        seekingFor,
        message: situation,
        source: "website_get_help_form",
        consents,
        // snake_case: the jarvis-api /lead handler reads req.body.utm_* keys.
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_term: utmTerm,
        utm_content: utmContent,
      }),
    });
    if (!notifyRes.ok) {
      const errText = await notifyRes.text();
      console.error(
        "[get-help] notification failed:",
        notifyRes.status,
        errText.slice(0, 200)
      );
    } else {
      notifyOk = true;
      console.log("[get-help] notification delivered");
    }
  } catch (e: unknown) {
    const err = e as Error;
    console.error(
      "[get-help] notification exception:",
      err.message?.slice(0, 200)
    );
  }

  // Marketing drip only for Turnstile-verified submissions. Token-less
  // (degraded-mode) leads still reached the admissions alert above.
  if (!turnstileAllowsDrip(turnstile)) {
    console.log(
      "[get-help] drip intake:",
      JSON.stringify({ skipped: true, reason: `turnstile_${turnstile}` })
    );
  } else {
    try {
      const dripResult = await enrollInDrip({
        formId: "drc-website-get-help",
        firstName,
        lastName,
        email,
        phone,
        relationshipToPatient:
          seekingFor === "A Loved One" ? "other" : "self",
        payerCategory: classifyPayer(insuranceProvider),
        message: situation || undefined,
        pageUrl: str(body.pageUri) || undefined,
        utm: {
          source: utmSource,
          medium: utmMedium,
          campaign: utmCampaign,
          term: utmTerm,
          content: utmContent,
        },
        gclid: request.cookies.get("_dr_gclid")?.value ?? null,
        consents,
      });
      console.log("[get-help] drip intake:", JSON.stringify(dripResult));
    } catch (e: unknown) {
      const err = e as Error;
      console.error(
        "[get-help] drip intake exception:",
        err.message?.slice(0, 200)
      );
    }
  }

  // Admissions never got this lead: tell the visitor (the form asks them to
  // call) and don't count a conversion.
  if (!notifyOk) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }

  const gclid = request.cookies.get("_dr_gclid")?.value ?? null;
  const gaCookie = request.cookies.get("_ga")?.value ?? null;
  const [adsResult, ga4Result] = await Promise.allSettled([
    uploadFormConversion({
      formType: "get_help",
      email,
      phone,
      gclid,
    }),
    fireGa4Lead({
      formType: "get_help",
      gaCookie,
      landingPage: str(body.pageUri) || undefined,
    }),
  ]);
  console.log(
    "[get-help] conversion-fire:",
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

  return NextResponse.json({ success: true });
}
