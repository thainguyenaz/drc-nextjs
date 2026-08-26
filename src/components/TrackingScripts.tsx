"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { isUntrackedPath } from "@/lib/untrackedPaths";

// Skips GA4 / Ads / CTM / HubSpot entirely on untracked paths — see
// src/lib/untrackedPaths.ts for the list and the counsel rationale
// (including the permanent CTM exclusion). If a visitor navigates from an
// untracked page to any other page, this component re-renders with the new
// pathname and the tags load normally.
export default function TrackingScripts() {
  const pathname = usePathname();
  if (isUntrackedPath(pathname)) {
    return null;
  }

  return (
    <>
      {/* TRACKING SCRIPT LOADING ORDER — conversion-critical, not
          perf-cosmetic. Constraints, learned the hard way:
          - gtag (GA4 + AW) must load before form conversion events fire.
            lazyOnload dropped conversions when submitters fired the
            thank-you page_view before gtag existed; reverted in 0bf825a
            (Aug 1 2026).
          - CTM t.js re-configures AW-16468277860 at runtime for call
            conversion attribution, so the Ads tag must exist before CTM
            initializes.
          - CTM must not be beforeInteractive: tried in 5eb2d54, reverted
            within hours in 9f29f05 (Jul 29 2026).
          Verify any strategy change against the form-submit baseline in
          tracking-inventory-2026-08-11 before shipping. */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MSPF0DPVK"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'linker', {"domains":["desertrecoverycenters.com"]});
          gtag('set', 'developer_id.dZTNiMT', true);
          gtag('config', 'G-0MSPF0DPVK');
          gtag('config', 'AW-16468277860');`}
      </Script>
      <Script
        src="//517993.tctm.co/t.js"
        strategy="afterInteractive"
        async
      />
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/48050688.js"
        strategy="lazyOnload"
        async
        defer
      />
    </>
  );
}
