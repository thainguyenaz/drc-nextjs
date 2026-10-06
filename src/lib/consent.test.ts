import { describe, it, expect } from "vitest";
import {
  buildMarketingConsents,
  parseConsentValue,
  MARKETING_CONSENT_TEXT_VERSION,
  MARKETING_CONSENT_CHANNELS,
} from "./consent";

describe("buildMarketingConsents", () => {
  it("returns one record per marketing channel (sms + email)", () => {
    const records = buildMarketingConsents(true);
    expect(records).toHaveLength(2);
    expect(records.map((r) => r.consent_type).sort()).toEqual([
      "marketing_email",
      "marketing_sms",
    ]);
  });

  it("carries the granted flag through to every record", () => {
    expect(buildMarketingConsents(true).every((r) => r.granted === true)).toBe(true);
    expect(buildMarketingConsents(false).every((r) => r.granted === false)).toBe(true);
  });

  it("stamps each record with the consent text version", () => {
    for (const r of buildMarketingConsents(true)) {
      expect(r.consent_text_version).toBe(MARKETING_CONSENT_TEXT_VERSION);
    }
  });

  it("defaults captured_at to a valid ISO 8601 timestamp", () => {
    const [r] = buildMarketingConsents(true);
    expect(() => new Date(r.captured_at).toISOString()).not.toThrow();
    expect(new Date(r.captured_at).toISOString()).toBe(r.captured_at);
  });

  it("uses a provided captured_at verbatim for every record", () => {
    const at = "2026-10-05T12:00:00.000Z";
    expect(buildMarketingConsents(true, at).every((r) => r.captured_at === at)).toBe(true);
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
