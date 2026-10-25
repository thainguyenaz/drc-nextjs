// Turnstile widget state shared by the browser forms and the API routes.
//
// Pure logic only (no DOM, no React) so it can be unit-tested and imported by
// both sides:
//
//   - the forms' useTurnstile hook uses the fallback / retry policy below to
//     decide when the submit button may be enabled without a token;
//   - the forms send a small non-PII telemetry block with every submission
//     (widget state at submit time, ms since the form mounted, whether the
//     Turnstile script was already on the page, error count);
//   - the API routes sanitize that block with parseTurnstileTelemetry and log
//     it next to the server verdict, so a token-less submission can be traced
//     to a cause (script never loaded, widget errored, interactive challenge
//     never completed, still solving, ...).

export const TURNSTILE_CLIENT_STATES = [
  "loading", // api.js not loaded yet (or never loaded)
  "rendering", // widget rendered, invisible solve in progress
  "interactive", // widget is showing a challenge the visitor must click
  "ready", // token issued and current
  "expired", // token expired, auto-refresh in flight
  "timeout", // interactive challenge timed out, widget reset
  "error", // widget error (retry pending or exhausted)
  "unsupported", // browser not supported by Turnstile
  "load_failed", // api.js failed to load (blocked, offline, CSP)
  "not_configured", // no site key in this build
] as const;

export type TurnstileClientState = (typeof TURNSTILE_CLIENT_STATES)[number];

const STATE_SET: ReadonlySet<string> = new Set(TURNSTILE_CLIENT_STATES);

export function isTurnstileClientState(v: unknown): v is TurnstileClientState {
  return typeof v === "string" && STATE_SET.has(v);
}

// Explicit rendering: the implicit mode scans the DOM for .cf-turnstile only
// once, when api.js loads, so a form mounted later (client-side navigation)
// was never rendered and could only ever submit without a token.
export const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js";

/** Script/widget not up yet: same 12s budget the forms used before. */
export const LOAD_FALLBACK_MS = 12_000;
/** Widget rendered and solving invisibly: give slow devices longer. */
export const SOLVE_FALLBACK_MS = 20_000;
/** Visitor has a checkbox to click: give them time before failing open. */
export const INTERACTIVE_FALLBACK_MS = 45_000;
/** Expired/timeout/error with a reset in flight: re-arm the original budget. */
export const RECOVERY_FALLBACK_MS = 12_000;
/** Bounded widget resets after an error-callback before failing open. */
export const MAX_ERROR_RETRIES = 2;
/** How long submit waits for an in-flight invisible solve to finish. */
export const SUBMIT_TOKEN_WAIT_MS = 4_000;

/**
 * Ms to wait in `state` before enabling submit without a token (degraded
 * mode). 0 = degrade immediately; null = no fallback needed (token ready).
 * The timer is re-armed on every state change, so each state gets its own
 * budget, but every non-ready state has a finite one: a real visitor is never
 * blocked indefinitely.
 */
export function degradeAfterMs(state: TurnstileClientState): number | null {
  switch (state) {
    case "ready":
    case "not_configured":
      return null;
    case "unsupported":
    case "load_failed":
      return 0;
    case "loading":
      return LOAD_FALLBACK_MS;
    case "rendering":
      return SOLVE_FALLBACK_MS;
    case "interactive":
      return INTERACTIVE_FALLBACK_MS;
    case "expired":
    case "timeout":
    case "error":
      return RECOVERY_FALLBACK_MS;
  }
}

export type ErrorAction =
  | { action: "retry"; delayMs: number }
  | { action: "degrade" };

/** errorCount = number of error-callbacks so far, including this one. */
export function nextErrorAction(errorCount: number): ErrorAction {
  if (errorCount <= MAX_ERROR_RETRIES) {
    return { action: "retry", delayMs: errorCount <= 1 ? 1_500 : 4_000 };
  }
  return { action: "degrade" };
}

/** States in which a token may still arrive in the next few seconds. */
export function shouldWaitForToken(state: TurnstileClientState): boolean {
  return (
    state === "loading" ||
    state === "rendering" ||
    state === "expired"
  );
}

export interface TurnstileTelemetry {
  turnstileState: TurnstileClientState;
  /** Whole ms since the form mounted (clamped). */
  turnstileMs: number;
  /** api.js was already on the page when the form mounted (client nav). */
  turnstilePreloaded: boolean;
  turnstileErrors: number;
}

const MAX_MS = 6 * 60 * 60 * 1000; // 6h; anything longer is clamped
const MAX_ERRORS = 99;

function clampInt(n: number, max: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(Math.round(n), max);
}

export function buildTurnstileTelemetry(input: {
  state: TurnstileClientState;
  mountedAt: number;
  now: number;
  preloaded: boolean;
  errorCount: number;
}): TurnstileTelemetry {
  return {
    turnstileState: input.state,
    turnstileMs: clampInt(input.now - input.mountedAt, MAX_MS),
    turnstilePreloaded: input.preloaded,
    turnstileErrors: clampInt(input.errorCount, MAX_ERRORS),
  };
}

export interface ParsedTurnstileTelemetry {
  /** "absent" = client sent no state (old cached bundle, direct POST). */
  state: TurnstileClientState | "absent" | "unrecognized";
  ms: number | null;
  preloaded: boolean | null;
  errors: number | null;
}

function toNumber(v: unknown): number | null {
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v === "string" && /^\d{1,12}$/.test(v)) return Number(v);
  return null;
}

function toBool(v: unknown): boolean | null {
  if (v === true || v === "true") return true;
  if (v === false || v === "false") return false;
  return null;
}

/**
 * Server-side: sanitize the client telemetry for logging. Accepts JSON values
 * (get-help) or FormData strings (insurance). Only whitelisted enum values and
 * clamped integers come out, so nothing a client sends is logged verbatim.
 */
export function parseTurnstileTelemetry(raw: {
  turnstileState?: unknown;
  turnstileMs?: unknown;
  turnstilePreloaded?: unknown;
  turnstileErrors?: unknown;
}): ParsedTurnstileTelemetry {
  const s = raw.turnstileState;
  const state =
    s === undefined || s === null || s === ""
      ? "absent"
      : isTurnstileClientState(s)
        ? s
        : "unrecognized";
  const ms = toNumber(raw.turnstileMs);
  const errors = toNumber(raw.turnstileErrors);
  return {
    state,
    ms: ms === null ? null : clampInt(ms, MAX_MS),
    preloaded: toBool(raw.turnstilePreloaded),
    errors: errors === null ? null : clampInt(errors, MAX_ERRORS),
  };
}

/** One structured log line per submission: server verdict + client state. */
export function turnstileClientLogLine(
  route: "get-help" | "insurance-verification",
  verdict: string,
  parsed: ParsedTurnstileTelemetry
): string {
  return JSON.stringify({
    type: "turnstile_client",
    route,
    verdict,
    state: parsed.state,
    ms: parsed.ms,
    preloaded: parsed.preloaded,
    errors: parsed.errors,
  });
}
