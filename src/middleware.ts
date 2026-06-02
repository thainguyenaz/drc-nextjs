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

const GCLID_COOKIE = "_dr_gclid";
const GCLID_MAX_AGE = 60 * 60 * 24 * 90;

// Adolescent treatment is not a licensed service. These paths are permanently
// removed and must return 410 Gone so crawlers de-index them (not a redirect to
// adult content, not a soft 404). Covers the retired /adolescent-program URL too.
const GONE_HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Content no longer available</title></head><body style="font-family:system-ui,sans-serif;max-width:36rem;margin:4rem auto;padding:0 1.5rem;line-height:1.6"><h1>This content is no longer available</h1><p>The page you requested has been removed. Visit our <a href="/">homepage</a> to explore our current programs.</p></body></html>`;

function isGonePath(pathname: string): boolean {
  return (
    pathname === "/adolescent-treatment" ||
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

  const incomingGclid = request.nextUrl.searchParams.get("gclid");
  const response = NextResponse.next();
  if (incomingGclid && !request.cookies.get(GCLID_COOKIE)) {
    response.cookies.set(GCLID_COOKIE, incomingGclid, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: GCLID_MAX_AGE,
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
