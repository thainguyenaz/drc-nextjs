// Paths that must load with ZERO third-party tags — no GA4, no Google Ads
// remarketing, no CallTrackingMetrics, no HubSpot, no LiveChat.
//
// /assessment-unavailable is reached only by clicking the depression-
// assessment CTA or scanning its printed QR code, so a pageview alone
// reveals health-condition-suggestive intent (counsel directive 2026-08-26).
// The old edge redirect to Neuronetics fired zero tags on that hop; these
// paths preserve that property.
//
// CTM stays off this page PERMANENTLY — owner decision 2026-08-26. Callers
// from this page are identified by depression-assessment intent; attributing
// them would create a Google Ads call-conversion record keyed to
// mental-health intent. Unattributed calls from this page are the intended
// outcome, not an attribution gap to fix. Do not re-add number swapping here.
export const UNTRACKED_PATHS = ["/assessment-unavailable"];

export function isUntrackedPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return UNTRACKED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}
