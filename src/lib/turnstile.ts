// Cloudflare Turnstile server-side token verification.
//
// checkTurnstile returns a verdict instead of a bare boolean so routes can
// treat "no token" differently from "bad token":
//
//   verified        siteverify accepted the token.
//   missing         no token was sent (widget blocked, failed, or never
//                   solved; also what a direct-POST bot sends). The lead is
//                   still accepted, as in degraded mode since 64c0f5e, but is
//                   NOT enrolled in the marketing drip.
//   not_configured  TURNSTILE_SECRET_KEY unset (local dev / key not yet
//                   provisioned). Accepted, warn-logged, not drip-enrolled.
//   invalid         a token was sent and siteverify rejected it. Rejected.
//   error           a token was sent but siteverify could not be reached or
//                   returned a non-2xx. Rejected (unchanged behaviour).

interface SiteverifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export type TurnstileVerdict =
  | "verified"
  | "missing"
  | "not_configured"
  | "invalid"
  | "error";

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function checkTurnstile(
  token: string | null | undefined,
  remoteIp: string
): Promise<TurnstileVerdict> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn(
      "TURNSTILE_SECRET_KEY unset — failing open. Set TURNSTILE_SECRET_KEY in Vercel env to enable bot verification."
    );
    return "not_configured";
  }
  if (!token) {
    // No token = widget never loaded/solved (blocked script, network failure,
    // slow device). Fail open for real users; bots that POST directly also
    // send no token, so the remaining gates are the honeypot and rate limit,
    // and the submission is kept out of the marketing drip.
    // A PRESENT token is still verified strictly below.
    console.warn(
      "Turnstile token missing — accepting submission (degraded mode), skipping drip intake."
    );
    return "missing";
  }

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
      return "error";
    }
    const data = (await res.json()) as SiteverifyResponse;
    if (data.success !== true) {
      console.warn("Turnstile verify rejected:", data["error-codes"]);
      return "invalid";
    }
    console.log(
      JSON.stringify({
        type: "turnstile_verified",
        hostname: data.hostname,
        challenge_ts: data.challenge_ts,
      })
    );
    return "verified";
  } catch (e) {
    console.error("Turnstile siteverify exception:", e);
    return "error";
  }
}

/** Reject the submission outright (400). Only a present-but-bad token. */
export function turnstileRejects(verdict: TurnstileVerdict): boolean {
  return verdict === "invalid" || verdict === "error";
}

/**
 * Whether the submission may be sent to the marketing drip intake. Only a
 * verified token qualifies; token-less (degraded) and unconfigured
 * submissions still reach admissions, but never the drip.
 */
export function turnstileAllowsDrip(verdict: TurnstileVerdict): boolean {
  return verdict === "verified";
}
