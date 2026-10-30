// Retired website form routes (/api/get-help, /api/insurance-verification).
//
// Since the AWS forms cutover (NEXT_PUBLIC_FORMS_BACKEND=aws) the live forms
// post straight to the AWS forms API, and nothing with form data may pass
// through a Vercel route (no BAA with Vercel). The old routes stay mounted
// but answer 410 Gone to every method they used to serve or be probed with,
// and do nothing else: the request body is never read, and there is no
// HubSpot, jarvis-api relay, Dazos, CTM, drip, GA4 or Google Ads call.
//
// The previous handlers are kept unchanged next to each route as
// legacy-route.ts (not routed). Rollback: rename legacy-route.ts back to
// route.ts.
//
// Framework-free so it is unit-tested without Next.

export const RETIRED_FORM_ROUTE_MESSAGE =
  "This form endpoint is retired. The website forms are submitted to the DRC forms service.";

const HEADERS = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex",
} as const;

export function retiredFormResponse(method: string): Response {
  if (method.toUpperCase() === "HEAD") return new Response(null, { status: 410, headers: HEADERS });
  return new Response(JSON.stringify({ error: "gone", message: RETIRED_FORM_ROUTE_MESSAGE }), {
    status: 410,
    headers: { ...HEADERS, "Content-Type": "application/json" },
  });
}
