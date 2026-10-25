"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  TURNSTILE_SCRIPT_SRC,
  buildTurnstileTelemetry,
  degradeAfterMs,
  nextErrorAction,
  shouldWaitForToken,
  SUBMIT_TOKEN_WAIT_MS,
  type TurnstileClientState,
  type TurnstileTelemetry,
} from "@/lib/turnstile-client-state";

// Explicit-render Cloudflare Turnstile for the lead forms.
//
// Why explicit: with implicit rendering (class="cf-turnstile"), api.js scans
// the DOM once when it loads. After a client-side navigation (e.g. homepage ->
// nav "Get Help"), the script is already loaded, so the new form's widget was
// never rendered: no token, "Verifying..." for 12s, then a token-less
// degraded submit. Here each form renders its own widget into a ref'd
// container on mount and removes it on unmount, so it works however the form
// was reached, and two forms on one page cannot collide on global callbacks.

interface TurnstileRenderOptions {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  "refresh-expired"?: "auto" | "manual" | "never";
  "refresh-timeout"?: "auto" | "manual" | "never";
  retry?: "auto" | "never";
  callback?: (token: string) => void;
  "error-callback"?: (code?: string) => boolean | void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
  "before-interactive-callback"?: () => void;
  "after-interactive-callback"?: () => void;
  "unsupported-callback"?: () => void;
}

interface TurnstileApi {
  render: (container: HTMLElement, opts: TurnstileRenderOptions) => string | undefined;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
}

type TurnstileWindow = Window & {
  turnstile?: TurnstileApi;
  __drcTurnstileOnload?: () => void;
};

const SCRIPT_ID = "cf-turnstile-script";
const ONLOAD_CB = "__drcTurnstileOnload";

let loader: Promise<TurnstileApi> | null = null;

/** Load api.js once per page (explicit mode); shared by every form. */
function loadTurnstile(): Promise<TurnstileApi> {
  const w = window as TurnstileWindow;
  if (w.turnstile) return Promise.resolve(w.turnstile);
  if (loader) return loader;
  loader = new Promise<TurnstileApi>((resolve, reject) => {
    w[ONLOAD_CB] = () => {
      if (w.turnstile) resolve(w.turnstile);
      else reject(new Error("turnstile onload without api"));
    };
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = `${TURNSTILE_SCRIPT_SRC}?render=explicit&onload=${ONLOAD_CB}`;
    s.async = true;
    s.defer = true;
    s.onerror = () => {
      // Allow a later mount (e.g. next navigation) to try again.
      loader = null;
      s.remove();
      reject(new Error("turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
  return loader;
}

export interface UseTurnstile {
  /**
   * Callback ref for an empty <div>; the widget renders into it and is
   * removed when the div unmounts (e.g. the form is replaced by the thank-you
   * view), so no orphaned widget is left polling a detached container.
   */
  containerRef: (el: HTMLDivElement | null) => void;
  /** A current token has been issued. */
  ready: boolean;
  /** Submit may proceed without a token (fallback; never blocks forever). */
  degraded: boolean;
  /** Current token, waiting briefly if an invisible solve is in flight. */
  getToken: () => Promise<string>;
  /** Non-PII widget state for the server log. Call after getToken(). */
  telemetry: () => TurnstileTelemetry;
  /** Tokens are single-use: get a fresh one before a retry after an error. */
  reset: () => void;
}

export function useTurnstile(siteKey: string | undefined): UseTurnstile {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [state, setStateValue] = useState<TurnstileClientState>(
    siteKey ? "loading" : "not_configured"
  );
  const [degraded, setDegraded] = useState(false);

  const stateRef = useRef<TurnstileClientState>(state);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const mountedAtRef = useRef(0);
  const preloadedRef = useRef(false);
  const errorCountRef = useRef(0);
  const waitersRef = useRef<Array<(token: string) => void>>([]);

  const setState = useCallback((s: TurnstileClientState) => {
    stateRef.current = s;
    setStateValue(s);
  }, []);

  useEffect(() => {
    if (!siteKey || !container) return;
    const w = window as TurnstileWindow;
    if (!mountedAtRef.current) {
      mountedAtRef.current = performance.now();
      preloadedRef.current = Boolean(w.turnstile);
    }
    errorCountRef.current = 0;
    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const flushWaiters = (token: string) => {
      const waiters = waitersRef.current;
      waitersRef.current = [];
      for (const fn of waiters) fn(token);
    };

    loadTurnstile()
      .then((ts) => {
        if (cancelled) return;
        setState("rendering");
        widgetIdRef.current = ts.render(container, {
          sitekey: siteKey,
          theme: "light",
          size: "flexible",
          "refresh-expired": "auto",
          "refresh-timeout": "auto",
          // Retries are bounded by nextErrorAction below instead.
          retry: "never",
          callback: (token) => {
            errorCountRef.current = 0;
            setState("ready");
            setDegraded(false);
            flushWaiters(token);
          },
          "expired-callback": () => {
            // refresh-expired=auto re-issues; callback fires again.
            setState("expired");
          },
          "before-interactive-callback": () => setState("interactive"),
          "after-interactive-callback": () => {
            if (stateRef.current === "interactive") setState("rendering");
          },
          "timeout-callback": () => {
            // Interactive challenge not completed in time; refresh-timeout=auto
            // presents a fresh one.
            setState("timeout");
          },
          "unsupported-callback": () => {
            setState("unsupported");
            setDegraded(true);
            flushWaiters("");
          },
          "error-callback": () => {
            errorCountRef.current += 1;
            setState("error");
            flushWaiters("");
            const next = nextErrorAction(errorCountRef.current);
            if (next.action === "retry") {
              if (retryTimer) clearTimeout(retryTimer);
              retryTimer = setTimeout(() => {
                const id = widgetIdRef.current;
                if (cancelled || !id) return;
                setState("rendering");
                ts.reset(id);
              }, next.delayMs);
            } else {
              setDegraded(true);
            }
            return true; // handled; suppress Turnstile's console error
          },
        });
        if (!widgetIdRef.current) {
          setState("error");
          setDegraded(true);
        }
      })
      .catch(() => {
        if (cancelled) return;
        setState("load_failed");
        setDegraded(true);
        flushWaiters("");
      });

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
      flushWaiters("");
      const id = widgetIdRef.current;
      widgetIdRef.current = undefined;
      if (id) {
        try {
          w.turnstile?.remove(id);
        } catch {
          // widget already gone
        }
      }
    };
  }, [siteKey, container, setState]);

  // State-aware fallback: re-armed on every state change. Replaces the old
  // blind 12s timer, which enabled submit while a widget was still solving or
  // waiting for the visitor's click.
  useEffect(() => {
    if (!siteKey || degraded) return;
    const ms = degradeAfterMs(state);
    if (ms === null) return;
    const t = setTimeout(() => setDegraded(true), ms);
    return () => clearTimeout(t);
  }, [siteKey, state, degraded]);

  const getToken = useCallback(async (): Promise<string> => {
    if (!siteKey) return "";
    const w = window as TurnstileWindow;
    const id = widgetIdRef.current;
    const current = id ? w.turnstile?.getResponse(id) : undefined;
    if (current) return current;
    if (!shouldWaitForToken(stateRef.current)) return "";
    return new Promise<string>((resolve) => {
      const timer = setTimeout(() => {
        waitersRef.current = waitersRef.current.filter((fn) => fn !== done);
        resolve("");
      }, SUBMIT_TOKEN_WAIT_MS);
      const done = (token: string) => {
        clearTimeout(timer);
        resolve(token);
      };
      waitersRef.current.push(done);
    });
  }, [siteKey]);

  const telemetry = useCallback(
    (): TurnstileTelemetry =>
      buildTurnstileTelemetry({
        state: stateRef.current,
        mountedAt: mountedAtRef.current,
        now: performance.now(),
        preloaded: preloadedRef.current,
        errorCount: errorCountRef.current,
      }),
    []
  );

  const reset = useCallback(() => {
    const w = window as TurnstileWindow;
    const id = widgetIdRef.current;
    if (!id || !w.turnstile) return;
    setState("rendering");
    try {
      w.turnstile.reset(id);
    } catch {
      // ignore; fallback timer still applies
    }
  }, [setState]);

  return {
    containerRef: setContainer,
    ready: state === "ready",
    degraded,
    getToken,
    telemetry,
    reset,
  };
}
