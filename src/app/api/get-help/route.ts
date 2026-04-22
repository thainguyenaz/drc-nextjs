import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

const HUBSPOT_PORTAL_ID = "48050688";
const FORM_GUIDS = {
  lp: "0babced4-b58c-4981-a2ba-a7d8bfca6fa5",
  contact: "e17b3a1d-6052-499e-8092-c1859c452c31",
} as const;

const LEAD_NOTIFY_URL =
  "https://api.desertrecoverycenters.com/api/notifications/lead";

type Variant = keyof typeof FORM_GUIDS;

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
  hp_check?: string; // honeypot
  turnstileToken?: string;
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
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: bot filled a hidden field. Silently "succeed" so the bot
  // doesn't learn to adapt; drop the record on our side.
  if (str(body.hp_check).trim() !== "") {
    console.warn("Honeypot triggered on /api/get-help from ip=" + ip);
    return NextResponse.json({ success: true });
  }

  const turnstileOk = await verifyTurnstile(body.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 });
  }

  const variant: Variant = body.variant === "contact" ? "contact" : "lp";
  const formGuid = FORM_GUIDS[variant];

  const firstName = str(body.firstName).trim();
  const lastName = str(body.lastName).trim();
  const email = str(body.email).trim();
  const phone = str(body.phone).trim();
  const seekingFor = str(body.seekingFor);
  const insuranceProvider = str(body.insuranceProvider);
  const situation = str(body.situation);

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Primary: HubSpot submission. Mirrors the payload the form used to send
  // directly from the browser.
  let hubspotOk = false;
  try {
    const hsRes = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: firstName },
            { name: "lastname", value: lastName },
            { name: "email", value: email },
            { name: "phone", value: phone },
            { name: "seeking_recovery_for", value: seekingFor },
            { name: "insurance_provider", value: insuranceProvider },
            { name: "message", value: situation },
          ],
          context: {
            pageUri: str(body.pageUri),
            pageName: str(body.pageName) || "Get Help Today",
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "I agree to allow Desert Recovery Centers to store and process my personal data.",
              communications: [
                {
                  value: true,
                  subscriptionTypeId: 999,
                  text: "I agree to receive marketing communications.",
                },
              ],
            },
          },
        }),
      }
    );
    hubspotOk = hsRes.ok;
    if (!hsRes.ok) {
      const errText = await hsRes.text();
      console.error("HubSpot error:", hsRes.status, errText);
    }
  } catch (e) {
    console.error("HubSpot exception:", e);
  }

  if (!hubspotOk) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }

  // Secondary: lead notify. Fire-and-forget; failures never block success.
  fetch(LEAD_NOTIFY_URL, {
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
    }),
  }).catch((e) => console.error("lead-notify failed (non-blocking):", e));

  return NextResponse.json({ success: true });
}
