/**
 * Consent capture for the website lead forms.
 *
 * The Get Help and Insurance Verification forms each show TWO separate,
 * optional checkboxes (unchecked by default, never required to submit):
 *   - SMS: text messages about the visitor's inquiry (A2P 10DLC opt-in).
 *   - Email: emails about programs and resources.
 * Each checkbox is its own grant. The forms send them as `smsConsent` and
 * `emailConsent` (booleans) to the forms API.
 *
 * The on-form copy lives here and both forms render it from these constants,
 * so the text a visitor saw and the text recorded with their consent cannot
 * drift apart. Bump CONSENT_TEXT_VERSION whenever either text changes.
 *
 * Record shapes mirror the platform consent contract (marketing_sms /
 * marketing_email). Framework-free and unit-tested.
 */

/** Bump when either consent text below changes. */
export const CONSENT_TEXT_VERSION = "2026-11-18";

/**
 * @deprecated alias kept for existing importers; use CONSENT_TEXT_VERSION.
 */
export const MARKETING_CONSENT_TEXT_VERSION = CONSENT_TEXT_VERSION;

/** SMS checkbox copy (approved 2026-11-09, A2P 10DLC resubmission). */
export const SMS_CONSENT_TEXT =
  "By checking this box, you consent to receive text messages from Desert Recovery Centers " +
  "about your inquiry, including replies about treatment, insurance, and scheduling. " +
  "Message frequency varies. Message and data rates may apply. Reply HELP for help or " +
  "STOP to opt out. Consent is not a condition of purchase.";

/** Email checkbox copy (approved 2026-11-18). */
export const EMAIL_CONSENT_TEXT =
  "I'd like to receive emails from Desert Recovery Centers about programs and resources. " +
  "You can unsubscribe at any time.";

export type MarketingConsentType = "marketing_sms" | "marketing_email";

/** The exact text shown for each channel's checkbox, at CONSENT_TEXT_VERSION. */
export const CONSENT_TEXTS: Readonly<Record<MarketingConsentType, string>> = {
  marketing_sms: SMS_CONSENT_TEXT,
  marketing_email: EMAIL_CONSENT_TEXT,
};

export interface ConsentRecord {
  consent_type: MarketingConsentType;
  granted: boolean;
  /** ISO 8601, stamped server-side when the submission is received. */
  captured_at: string;
  consent_text_version: string;
}

/** One checkbox per channel. */
export const MARKETING_CONSENT_CHANNELS: readonly MarketingConsentType[] = [
  "marketing_sms",
  "marketing_email",
];

export interface ConsentGrants {
  sms: boolean;
  email: boolean;
}

/**
 * Build the structured consent records for one submission: one record per
 * channel, each carrying its own checkbox's granted flag.
 */
export function buildMarketingConsents(
  grants: ConsentGrants,
  capturedAt: string = new Date().toISOString(),
): ConsentRecord[] {
  const granted: Record<MarketingConsentType, boolean> = {
    marketing_sms: grants.sms,
    marketing_email: grants.email,
  };
  return MARKETING_CONSENT_CHANNELS.map((consent_type) => ({
    consent_type,
    granted: granted[consent_type],
    captured_at: capturedAt,
    consent_text_version: CONSENT_TEXT_VERSION,
  }));
}

/**
 * Coerce a transmitted consent value to a boolean. Handles JSON booleans and
 * form-data strings ("true"/"on"/"1"). Anything else, including missing, is
 * not-granted.
 */
export function parseConsentValue(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    return value === "true" || value === "on" || value === "1";
  }
  return false;
}
