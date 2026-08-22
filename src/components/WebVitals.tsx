"use client";

import { useEffect } from "react";
import { onCLS } from "web-vitals/attribution";

export default function WebVitals() {
  useEffect(() => {
    onCLS((metric) => {
      const a = metric.attribution;
      const body = JSON.stringify({
        value: metric.value,
        element: a.largestShiftTarget,
        time: a.largestShiftTime,
        largestShiftValue: a.largestShiftValue,
        url: location.pathname,
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/vitals", body);
      } else {
        fetch("/api/vitals", { method: "POST", body, keepalive: true }).catch(() => {});
      }
    });
  }, []);

  return null;
}
