import { NextRequest, NextResponse } from "next/server";

const PHI_QUERY_PARAMS = [
  "email",
  "phone",
  "dob",
  "date_of_birth",
  "ssn",
  "member_id",
  "policy_number",
  "insurance_id",
  "name",
  "first_name",
  "firstname",
  "last_name",
  "lastname",
  "patient_name",
];

const ATTRIBUTION_MAX_AGE = 60 * 60 * 24 * 90; // 90 days

// Ad click IDs and UTM params captured verbatim from the entry URL into
// first-party cookies, read server-side at form submit, mapped to native
// Dazos Lead fields. Semantics match the original gclid capture: set when the
// param is present, last non-empty value wins. These params appear only on the
// ad-entry hit, so last-touch here is the click that drove the visit.
const ATTRIBUTION_PARAM_COOKIES: Record<string, string> = {
  gclid: "_dr_gclid",
  gbraid: "_dr_gbraid",
  wbraid: "_dr_wbraid",
  utm_source: "_dr_utm_source",
  utm_medium: "_dr_utm_medium",
  utm_campaign: "_dr_utm_campaign",
  utm_term: "_dr_utm_term",
  utm_content: "_dr_utm_content",
};

const ATTRIBUTION_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  maxAge: ATTRIBUTION_MAX_AGE,
  path: "/",
};

// The retired /adolescent-program URL and the old /adolescent/* tree remain
// permanently removed and must return 410 Gone so crawlers de-index them (not a
// redirect to adult content, not a soft 404). /adolescent-treatment is the licensed
// adolescent IOP page (OTC20452) and is served normally.
const GONE_HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Content no longer available</title></head><body style="font-family:system-ui,sans-serif;max-width:36rem;margin:4rem auto;padding:0 1.5rem;line-height:1.6"><h1>This content is no longer available</h1><p>The page you requested has been removed. Visit our <a href="/">homepage</a> to explore our current programs.</p></body></html>`;

function isGonePath(pathname: string): boolean {
  return (
    pathname === "/adolescent-program" ||
    pathname.startsWith("/adolescent/")
  );
}

export function middleware(request: NextRequest) {
  if (isGonePath(request.nextUrl.pathname)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const url = request.nextUrl.clone();

  let phiStripped = false;
  for (const key of PHI_QUERY_PARAMS) {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      phiStripped = true;
    }
  }
  if (phiStripped) {
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();
  for (const [param, cookieName] of Object.entries(ATTRIBUTION_PARAM_COOKIES)) {
    const value = request.nextUrl.searchParams.get(param);
    if (value) {
      response.cookies.set(cookieName, value, ATTRIBUTION_COOKIE_OPTIONS);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
