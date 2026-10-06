/**
 * Marketing consent capture for the website lead forms.
 *
 * The Get Help and Insurance Verification forms each show one required checkbox
 * whose copy covers marketing text messages AND emails. Historically the
 * checkbox value was dropped before the POST and the server hardcoded consent.
 * This module builds the structured consent records the server now records for
 * every submission: one per channel, each carrying the granted flag, a
 * server-stamped captured_at, and the versioned consent text.
 *
 * Shapes mirror the platform consent contract (marketing_sms / marketing_email)
 * so these records drop straight into the CRM intake payload when the forms are
 * repointed there. Framework-free and unit-tested.
 */

/**
 * Bump when the on-form consent copy below changes. Kept in sync with the text
 * rendered in GetHelpForm and InsuranceVerificationForm.
 */
export const MARKETING_CONSENT_TEXT_VERSION = "2026-10-05";

/** Canonical consent copy; must match the text shown on both forms. */
export const MARKETING_CONSENT_TEXT =
  "By providing your phone number and email, you agree to receive marketing " +
  "text messages and/or emails from Desert Recovery Centers. Message frequency " +
  "varies. Reply STOP to unsubscribe. Message and data rates may apply.";

export type MarketingConsentType = "marketing_sms" | "marketing_email";

export interface ConsentRecord {
  consent_type: MarketingConsentType;
  granted: boolean;
  /** ISO 8601, stamped server-side when the submission is received. */
  captured_at: string;
  consent_text_version: string;
}

/** The channels the single on-form checkbox covers. */
export const MARKETING_CONSENT_CHANNELS: readonly MarketingConsentType[] = [
  "marketing_sms",
  "marketing_email",
];

/**
 * Build the structured consent records for one submission. The form checkbox is
 * a single grant covering SMS and email, so this returns one record per channel
 * with the same granted flag and timestamp.
 */
export function buildMarketingConsents(
  granted: boolean,
  capturedAt: string = new Date().toISOString(),
): ConsentRecord[] {
  return MARKETING_CONSENT_CHANNELS.map((consent_type) => ({
    consent_type,
    granted,
    captured_at: capturedAt,
    consent_text_version: MARKETING_CONSENT_TEXT_VERSION,
  }));
}

/**
 * Coerce a transmitted consent value to a boolean. Handles the JSON boolean the
 * Get Help form sends and the form-data string the Insurance form sends
 * ("true"/"on"/"1"). Anything else, including missing, is not-granted.
 */
export function parseConsentValue(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    return value === "true" || value === "on" || value === "1";
  }
  return false;
}
