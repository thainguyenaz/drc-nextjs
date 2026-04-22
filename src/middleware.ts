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

export function middleware(request: NextRequest) {
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
