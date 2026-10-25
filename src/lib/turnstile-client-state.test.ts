import { describe, expect, it } from "vitest";
import {
  INTERACTIVE_FALLBACK_MS,
  LOAD_FALLBACK_MS,
  MAX_ERROR_RETRIES,
  SOLVE_FALLBACK_MS,
  TURNSTILE_CLIENT_STATES,
  buildTurnstileTelemetry,
  degradeAfterMs,
  isTurnstileClientState,
  nextErrorAction,
  parseTurnstileTelemetry,
  shouldWaitForToken,
  turnstileClientLogLine,
} from "./turnstile-client-state";

describe("degradeAfterMs", () => {
  it("never needs a fallback once a token is ready or Turnstile is off", () => {
    expect(degradeAfterMs("ready")).toBeNull();
    expect(degradeAfterMs("not_configured")).toBeNull();
  });

  it("fails open immediately when the widget cannot work at all", () => {
    expect(degradeAfterMs("load_failed")).toBe(0);
    expect(degradeAfterMs("unsupported")).toBe(0);
  });

  it("keeps the 12s budget while loading, longer while solving or interactive", () => {
    expect(degradeAfterMs("loading")).toBe(LOAD_FALLBACK_MS);
    expect(LOAD_FALLBACK_MS).toBe(12_000);
    expect(degradeAfterMs("rendering")).toBe(SOLVE_FALLBACK_MS);
    expect(degradeAfterMs("interactive")).toBe(INTERACTIVE_FALLBACK_MS);
    expect(SOLVE_FALLBACK_MS).toBeGreaterThan(LOAD_FALLBACK_MS);
    expect(INTERACTIVE_FALLBACK_MS).toBeGreaterThan(SOLVE_FALLBACK_MS);
  });

  it("gives every non-ready state a finite budget, so submit is never blocked forever", () => {
    for (const s of TURNSTILE_CLIENT_STATES) {
      if (s === "ready" || s === "not_configured") continue;
      const ms = degradeAfterMs(s);
      expect(ms, s).not.toBeNull();
      expect(ms!, s).toBeGreaterThanOrEqual(0);
      expect(ms!, s).toBeLessThanOrEqual(60_000);
    }
  });
});

describe("nextErrorAction", () => {
  it("retries a bounded number of times with backoff, then degrades", () => {
    expect(nextErrorAction(1)).toEqual({ action: "retry", delayMs: 1_500 });
    expect(nextErrorAction(2)).toEqual({ action: "retry", delayMs: 4_000 });
    expect(MAX_ERROR_RETRIES).toBe(2);
    expect(nextErrorAction(3)).toEqual({ action: "degrade" });
    expect(nextErrorAction(50)).toEqual({ action: "degrade" });
  });
});

describe("shouldWaitForToken", () => {
  it("waits only when a token could still arrive without visitor action", () => {
    expect(shouldWaitForToken("loading")).toBe(true);
    expect(shouldWaitForToken("rendering")).toBe(true);
    expect(shouldWaitForToken("expired")).toBe(true);
    expect(shouldWaitForToken("interactive")).toBe(false);
    expect(shouldWaitForToken("error")).toBe(false);
    expect(shouldWaitForToken("load_failed")).toBe(false);
    expect(shouldWaitForToken("ready")).toBe(false);
  });
});

describe("buildTurnstileTelemetry", () => {
  it("reports whole ms since mount and clamps nonsense", () => {
    expect(
      buildTurnstileTelemetry({
        state: "rendering",
        mountedAt: 1000.25,
        now: 4321.75,
        preloaded: true,
        errorCount: 1,
      })
    ).toEqual({
      turnstileState: "rendering",
      turnstileMs: 3322,
      turnstilePreloaded: true,
      turnstileErrors: 1,
    });
    const t = buildTurnstileTelemetry({
      state: "ready",
      mountedAt: 5000,
      now: 10,
      preloaded: false,
      errorCount: -3,
    });
    expect(t.turnstileMs).toBe(0);
    expect(t.turnstileErrors).toBe(0);
  });
});

describe("parseTurnstileTelemetry", () => {
  it("round-trips the client block sent as JSON", () => {
    const sent = buildTurnstileTelemetry({
      state: "interactive",
      mountedAt: 0,
      now: 61_000,
      preloaded: true,
      errorCount: 0,
    });
    expect(parseTurnstileTelemetry(sent)).toEqual({
      state: "interactive",
      ms: 61_000,
      preloaded: true,
      errors: 0,
    });
  });

  it("accepts FormData strings", () => {
    expect(
      parseTurnstileTelemetry({
        turnstileState: "load_failed",
        turnstileMs: "12034",
        turnstilePreloaded: "false",
        turnstileErrors: "0",
      })
    ).toEqual({ state: "load_failed", ms: 12034, preloaded: false, errors: 0 });
  });

  it("marks a missing block as absent (old bundle or direct POST)", () => {
    expect(parseTurnstileTelemetry({})).toEqual({
      state: "absent",
      ms: null,
      preloaded: null,
      errors: null,
    });
  });

  it("never passes client-supplied free text through", () => {
    const p = parseTurnstileTelemetry({
      turnstileState: "someone@example.test",
      turnstileMs: "12; drop",
      turnstilePreloaded: "yes",
      turnstileErrors: { n: 1 },
    });
    expect(p).toEqual({ state: "unrecognized", ms: null, preloaded: null, errors: null });
    expect(isTurnstileClientState("someone@example.test")).toBe(false);
  });

  it("clamps huge values", () => {
    const p = parseTurnstileTelemetry({ turnstileMs: 1e15, turnstileErrors: 1e6 });
    expect(p.ms).toBe(6 * 60 * 60 * 1000);
    expect(p.errors).toBe(99);
  });
});

describe("turnstileClientLogLine", () => {
  it("emits one structured JSON line", () => {
    const line = turnstileClientLogLine(
      "get-help",
      "missing",
      parseTurnstileTelemetry({ turnstileState: "loading", turnstileMs: 15000 })
    );
    expect(JSON.parse(line)).toEqual({
      type: "turnstile_client",
      route: "get-help",
      verdict: "missing",
      state: "loading",
      ms: 15000,
      preloaded: null,
      errors: null,
    });
  });
});
