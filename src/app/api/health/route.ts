import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Public health endpoint for cutover-verify. No auth required because
// it exposes only env-var presence booleans (not values) and HTTP
// status codes from self-calls.
//
// Self-calls hit POST-only form routes via HEAD. Next.js returns 405
// Method Not Allowed for mounted routes that do not export HEAD/GET,
// so the caller treats any non-404 numeric status as "route mounted".
// A 404 means the route file was deleted or the deploy is broken.
// AbortController gives each probe a 3-second budget so this endpoint
// stays well under 10s overall even if every form endpoint hangs.

type EndpointStatus = number | "timeout" | "error";

const FORM_ENDPOINTS = [
  "insurance_verification",
  "partner_referral",
  "get_help",
] as const;

const ENDPOINT_PATHS: Record<(typeof FORM_ENDPOINTS)[number], string> = {
  insurance_verification: "/api/insurance-verification",
  partner_referral: "/api/partner-referral",
  get_help: "/api/get-help",
};

// Env vars reported in the response. Includes optional ones for
// observability even when they are stubbed by design.
const REPORTED_ENV_VARS = [
  "GA4_MEASUREMENT_ID",
  "GA4_API_SECRET",
  "GOOGLE_ADS_CONVERSION_ACTION_GET_HELP",
  "GOOGLE_ADS_CONVERSION_ACTION_INSURANCE",
  "GOOGLE_ADS_CONVERSION_ACTION_PARTNER_REFERRAL",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY",
] as const;

// Subset of reported vars whose absence flips status to "degraded".
// GOOGLE_ADS_CONVERSION_ACTION_PARTNER_REFERRAL is intentionally not
// required because it is gated by B12 per T13 D7.
const REQUIRED_ENV_VARS = [
  "GA4_MEASUREMENT_ID",
  "GA4_API_SECRET",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY",
] as const;

async function probeEndpoint(url: string): Promise<EndpointStatus> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3_000);
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      cache: "no-store",
    });
    return res.status;
  } catch (e: unknown) {
    const err = e as { name?: string };
    if (err?.name === "AbortError") return "timeout";
    return "error";
  } finally {
    clearTimeout(timer);
  }
}

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;

  const probes = await Promise.all(
    FORM_ENDPOINTS.map(async (key) => {
      const status = await probeEndpoint(`${origin}${ENDPOINT_PATHS[key]}`);
      return [key, status] as const;
    })
  );
  const formEndpoints = Object.fromEntries(probes) as Record<
    (typeof FORM_ENDPOINTS)[number],
    EndpointStatus
  >;

  const envVarsPresent = Object.fromEntries(
    REPORTED_ENV_VARS.map((name) => [name, Boolean(process.env[name])])
  ) as Record<(typeof REPORTED_ENV_VARS)[number], boolean>;

  // "healthy" requires every form endpoint to be a mounted route
  // (numeric status other than 404) and every required env var to be
  // set. Timeout or error on a probe counts as degraded because the
  // caller cannot prove the route is mounted.
  const allEndpointsMounted = FORM_ENDPOINTS.every((key) => {
    const s = formEndpoints[key];
    return typeof s === "number" && s !== 404;
  });
  const allRequiredEnvPresent = REQUIRED_ENV_VARS.every(
    (name) => envVarsPresent[name]
  );
  const status: "healthy" | "degraded" =
    allEndpointsMounted && allRequiredEnvPresent ? "healthy" : "degraded";

  return NextResponse.json(
    {
      status,
      timestamp: new Date().toISOString(),
      deployed_sha: process.env.VERCEL_GIT_COMMIT_SHA ?? "unknown",
      build_time: process.env.VERCEL_DEPLOYMENT_CREATED_AT ?? null,
      form_endpoints: formEndpoints,
      env_vars_present: envVarsPresent,
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
