import { NextRequest, NextResponse } from "next/server";

// Returns the visitor's own first-party attribution cookies (ad click IDs and
// UTM params set by middleware, httpOnly) so a form posting cross-origin to
// the AWS forms API can include them. No form data is sent here or returned:
// only cookie values this site already holds. Used only when
// NEXT_PUBLIC_FORMS_BACKEND=aws.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIES: Record<string, string> = {
  gclid: "_dr_gclid",
  gbraid: "_dr_gbraid",
  wbraid: "_dr_wbraid",
  utm_source: "_dr_utm_source",
  utm_medium: "_dr_utm_medium",
  utm_campaign: "_dr_utm_campaign",
  utm_term: "_dr_utm_term",
  utm_content: "_dr_utm_content",
};

export async function GET(request: NextRequest) {
  const out: Record<string, string | null> = {};
  for (const [key, cookie] of Object.entries(COOKIES)) {
    out[key] = request.cookies.get(cookie)?.value ?? null;
  }
  return NextResponse.json(out, {
    headers: { "Cache-Control": "private, no-store" },
  });
}
