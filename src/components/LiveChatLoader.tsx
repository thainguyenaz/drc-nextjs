"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isUntrackedPath } from "@/lib/untrackedPaths";

// Module-level, not effect-local: the effect re-runs on every pathname
// change (untracked-path check below), and the widget must only ever be
// injected once per full page load.
let injected = false;

export default function LiveChatLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // No LiveChat on untracked paths (see src/lib/untrackedPaths.ts) — the
    // widget's tracking.js reports pageviews to livechatinc.com. If the
    // visitor navigates on to a tracked page, this effect re-runs and the
    // widget loads normally.
    if (isUntrackedPath(pathname) || injected) return;

    const load = () => {
      if (injected) return;
      injected = true;

      const w = window as unknown as {
        __lc?: Record<string, unknown>;
        LiveChatWidget?: unknown;
      };
      w.__lc = w.__lc || {};
      w.__lc.license = 19366980;
      w.__lc.integration_name = "manual_onboarding";
      w.__lc.product_name = "livechat";

      const script = document.createElement("script");
      script.async = true;
      script.type = "text/javascript";
      script.src = "https://cdn.livechatinc.com/tracking.js";
      document.head.appendChild(script);
    };

    const events = ["scroll", "mousemove", "touchstart", "keydown", "click"] as const;
    const loadOnce = () => {
      load();
      cleanup();
    };
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, loadOnce));
    };

    events.forEach((e) =>
      window.addEventListener(e, loadOnce, { once: true, passive: true })
    );

    const fallback = window.setTimeout(loadOnce, 10000);

    return () => {
      cleanup();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
