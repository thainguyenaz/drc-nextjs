"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Paths that must load with ZERO third-party tracking. /assessment-unavailable
// is reached only by clicking the depression-assessment CTA or scanning its
// printed QR code; firing GA4 / Ads remarketing / CTM / HubSpot there records
// health-condition-suggestive intent against an identifiable visitor (counsel
// directive 2026-08-26). The old edge redirect fired zero tags on that hop;
// this preserves that property. If a visitor navigates from the interstitial
// to any other page, this component re-renders with the new pathname and the
// tags load normally.
const UNTRACKED_PATHS = ["/assessment-unavailable"];

export default function TrackingScripts() {
  const pathname = usePathname() ?? "";
  if (UNTRACKED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
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
