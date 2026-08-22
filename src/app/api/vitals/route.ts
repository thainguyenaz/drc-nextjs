// CLS field-data beacon sink. Zero PHI by construction: accepts only a
// whitelisted set of fields (pathname + CSS selector, numbers), never logs
// the raw body, the referrer, or the client IP.
export async function POST(req: Request) {
  const text = await req.text();
  if (text.length > 2048) return new Response(null, { status: 413 });

  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return new Response(null, { status: 204 });
  }
  if (typeof raw !== "object" || raw === null) return new Response(null, { status: 204 });
  const b = raw as Record<string, unknown>;

  const num = (v: unknown): number | null => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };

  const value = num(b.value);
  if (value === null) return new Response(null, { status: 204 });

  const entry = {
    type: "web-vitals-cls",
    value,
    time: num(b.time),
    largestShiftValue: num(b.largestShiftValue),
    element: String(b.element ?? "").slice(0, 200),
    url: String(b.url ?? "").split("?")[0].split("#")[0],
    ts: new Date().toISOString(),
  };
  console.log(JSON.stringify(entry));
  return new Response(null, { status: 204 });
}
