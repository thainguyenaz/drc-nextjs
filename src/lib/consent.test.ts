import { describe, it, expect } from "vitest";
import {
  buildMarketingConsents,
  parseConsentValue,
  MARKETING_CONSENT_TEXT_VERSION,
  MARKETING_CONSENT_CHANNELS,
  CONSENT_TEXT_VERSION,
  CONSENT_TEXTS,
  SMS_CONSENT_TEXT,
  EMAIL_CONSENT_TEXT,
} from "./consent";

describe("buildMarketingConsents", () => {
  it("returns one record per marketing channel (sms + email)", () => {
    const records = buildMarketingConsents({ sms: true, email: true });
    expect(records).toHaveLength(2);
    expect(records.map((r) => r.consent_type).sort()).toEqual([
      "marketing_email",
      "marketing_sms",
    ]);
  });

  it("carries the granted flag through to every record", () => {
    expect(buildMarketingConsents({ sms: true, email: true }).every((r) => r.granted === true)).toBe(true);
    expect(buildMarketingConsents({ sms: false, email: false }).every((r) => r.granted === false)).toBe(true);
  });

  it("stamps each record with the consent text version", () => {
    for (const r of buildMarketingConsents({ sms: true, email: true })) {
      expect(r.consent_text_version).toBe(MARKETING_CONSENT_TEXT_VERSION);
    }
  });

  it("defaults captured_at to a valid ISO 8601 timestamp", () => {
    const [r] = buildMarketingConsents({ sms: true, email: true });
    expect(() => new Date(r.captured_at).toISOString()).not.toThrow();
    expect(new Date(r.captured_at).toISOString()).toBe(r.captured_at);
  });

  it("uses a provided captured_at verbatim for every record", () => {
    const at = "2026-10-05T12:00:00.000Z";
    expect(buildMarketingConsents({ sms: true, email: true }, at).every((r) => r.captured_at === at)).toBe(true);
  });

  it("records each checkbox independently", () => {
    const byType = Object.fromEntries(
      buildMarketingConsents({ sms: true, email: false }).map((r) => [r.consent_type, r.granted]),
    );
    expect(byType).toEqual({ marketing_sms: true, marketing_email: false });
    const flipped = Object.fromEntries(
      buildMarketingConsents({ sms: false, email: true }).map((r) => [r.consent_type, r.granted]),
    );
    expect(flipped).toEqual({ marketing_sms: false, marketing_email: true });
  });

  it("covers both platform marketing channels", () => {
    expect([...MARKETING_CONSENT_CHANNELS].sort()).toEqual(["marketing_email", "marketing_sms"]);
  });

  it("keeps the version within the contract's 64-char limit", () => {
    expect(MARKETING_CONSENT_TEXT_VERSION.length).toBeGreaterThan(0);
    expect(MARKETING_CONSENT_TEXT_VERSION.length).toBeLessThanOrEqual(64);
  });
});

describe("parseConsentValue", () => {
  it("passes booleans through (Get Help form sends JSON boolean)", () => {
    expect(parseConsentValue(true)).toBe(true);
    expect(parseConsentValue(false)).toBe(false);
  });

  it('reads form-data strings (Insurance form sends "true"/"false")', () => {
    expect(parseConsentValue("true")).toBe(true);
    expect(parseConsentValue("on")).toBe(true);
    expect(parseConsentValue("1")).toBe(true);
    expect(parseConsentValue("false")).toBe(false);
    expect(parseConsentValue("")).toBe(false);
    expect(parseConsentValue("nope")).toBe(false);
  });

  it("treats missing or unexpected values as not granted", () => {
    expect(parseConsentValue(undefined)).toBe(false);
    expect(parseConsentValue(null)).toBe(false);
    expect(parseConsentValue(123)).toBe(false);
  });
});

describe("consent texts", () => {
  it("is version 2026-11-18 and the deprecated alias matches", () => {
    expect(CONSENT_TEXT_VERSION).toBe("2026-11-18");
    expect(MARKETING_CONSENT_TEXT_VERSION).toBe(CONSENT_TEXT_VERSION);
  });

  it("keeps a separate text per channel", () => {
    expect(CONSENT_TEXTS.marketing_sms).toBe(SMS_CONSENT_TEXT);
    expect(CONSENT_TEXTS.marketing_email).toBe(EMAIL_CONSENT_TEXT);
    expect(SMS_CONSENT_TEXT).not.toBe(EMAIL_CONSENT_TEXT);
  });

  it("SMS text carries the A2P 10DLC required elements", () => {
    for (const phrase of [
      "Message frequency varies",
      "Message and data rates may apply",
      "Reply HELP for help",
      "STOP to opt out",
      "Consent is not a condition of purchase",
    ]) {
      expect(SMS_CONSENT_TEXT).toContain(phrase);
    }
  });

  it("email text offers unsubscribe and does not mention texts", () => {
    expect(EMAIL_CONSENT_TEXT).toContain("unsubscribe at any time");
    expect(EMAIL_CONSENT_TEXT.toLowerCase()).not.toContain("text");
  });
});
