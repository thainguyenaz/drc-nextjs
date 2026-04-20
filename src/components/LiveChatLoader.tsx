"use client";

import { useEffect } from "react";

export default function LiveChatLoader() {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;

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
  }, []);

  return null;
}
