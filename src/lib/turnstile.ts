// Cloudflare Turnstile server-side token verification.
//
// Fails OPEN if TURNSTILE_SECRET_KEY is unset: local dev and the first
// Vercel deploy must not block leads while keys are being provisioned.
// A warning is logged so the gap is visible.

interface SiteverifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: string | null | undefined,
  remoteIp: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn(
      "TURNSTILE_SECRET_KEY unset — failing open. Set TURNSTILE_SECRET_KEY in Vercel env to enable bot verification."
    );
    return true;
  }
  if (!token) return false;

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
      remoteip: remoteIp,
    });
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) {
      console.error("Turnstile siteverify HTTP error:", res.status);
      return false;
    }
    const data = (await res.json()) as SiteverifyResponse;
    if (!data.success) {
      console.warn("Turnstile verify rejected:", data["error-codes"]);
    }
    return data.success === true;
  } catch (e) {
    console.error("Turnstile siteverify exception:", e);
    return false;
  }
}
