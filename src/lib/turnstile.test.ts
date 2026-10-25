import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  checkTurnstile,
  turnstileAllowsDrip,
  turnstileRejects,
  type TurnstileVerdict,
} from "./turnstile";

const realFetch = globalThis.fetch;

function mockSiteverify(res: { ok?: boolean; status?: number; json?: unknown } | Error) {
  const fn = vi.fn(async () => {
    if (res instanceof Error) throw res;
    return {
      ok: res.ok ?? true,
      status: res.status ?? 200,
      json: async () => res.json,
    } as Response;
  });
  globalThis.fetch = fn as unknown as typeof fetch;
  return fn;
}

beforeEach(() => {
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
  process.env.TURNSTILE_SECRET_KEY = "test-secret-not-real";
});

afterEach(() => {
  globalThis.fetch = realFetch;
  delete process.env.TURNSTILE_SECRET_KEY;
  vi.restoreAllMocks();
});

describe("checkTurnstile", () => {
  it("is not_configured when the secret is unset, without calling siteverify", async () => {
    delete process.env.TURNSTILE_SECRET_KEY;
    const fetchFn = mockSiteverify({ json: { success: true } });
    expect(await checkTurnstile("tok", "1.2.3.4")).toBe("not_configured");
    expect(fetchFn).not.toHaveBeenCalled();
  });

  it("is missing for an absent or empty token, without calling siteverify", async () => {
    const fetchFn = mockSiteverify({ json: { success: true } });
    expect(await checkTurnstile(undefined, "1.2.3.4")).toBe("missing");
    expect(await checkTurnstile(null, "1.2.3.4")).toBe("missing");
    expect(await checkTurnstile("", "1.2.3.4")).toBe("missing");
    expect(fetchFn).not.toHaveBeenCalled();
  });

  it("is verified when siteverify says success", async () => {
    mockSiteverify({ json: { success: true, hostname: "example.test" } });
    expect(await checkTurnstile("tok", "1.2.3.4")).toBe("verified");
  });

  it("is invalid when siteverify rejects the token", async () => {
    mockSiteverify({ json: { success: false, "error-codes": ["invalid-input-response"] } });
    expect(await checkTurnstile("forged", "1.2.3.4")).toBe("invalid");
  });

  it("is invalid when siteverify returns a non-true success value", async () => {
    mockSiteverify({ json: {} });
    expect(await checkTurnstile("tok", "1.2.3.4")).toBe("invalid");
  });

  it("is error on a siteverify HTTP failure or network exception", async () => {
    mockSiteverify({ ok: false, status: 503 });
    expect(await checkTurnstile("tok", "1.2.3.4")).toBe("error");
    mockSiteverify(new Error("network down"));
    expect(await checkTurnstile("tok", "1.2.3.4")).toBe("error");
  });
});

describe("route decisions", () => {
  const cases: Array<[TurnstileVerdict, boolean, boolean]> = [
    // verdict,          rejects (400), drip enrollment
    ["verified", false, true],
    ["missing", false, false],
    ["not_configured", false, false],
    ["invalid", true, false],
    ["error", true, false],
  ];

  it.each(cases)("%s: rejects=%s, drip=%s", (verdict, rejects, drip) => {
    expect(turnstileRejects(verdict)).toBe(rejects);
    expect(turnstileAllowsDrip(verdict)).toBe(drip);
  });
});
