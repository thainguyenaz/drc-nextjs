// Build guard: the website forms only deliver when the browser posts to the
// AWS forms API. That path is chosen at BUILD time by two NEXT_PUBLIC_ vars
// (see src/lib/forms-backend.ts resolveFormsBackend). If either is missing or
// malformed, resolveFormsBackend fails safe to "vercel" and every submission
// hits the retired /api/{get-help,insurance-verification} routes (410 Gone) —
// 100% silent lead loss with only a generic on-page error. This guard turns
// that misconfiguration into a failed build instead of a shipped regression.
//
// Gating mirrors scripts/check-confirm.mjs: hard-fail on a production build
// (VERCEL_ENV=production), on the main branch (VERCEL_GIT_COMMIT_REF=main), or
// when FORMS_ENV_STRICT=strict. Other local/branch-preview builds warn and
// pass, so a dev can still build in vercel/dev mode.

const BACKEND = process.env.NEXT_PUBLIC_FORMS_BACKEND;
const API_BASE = process.env.NEXT_PUBLIC_FORMS_API_BASE;

// Exact copy of isHttpsOrigin() in src/lib/forms-backend.ts — keep in sync.
function isHttpsOrigin(v) {
  if (!v) return false;
  try {
    const u = new URL(v);
    return u.protocol === "https:" && (u.pathname === "/" || u.pathname === "") && !u.search;
  } catch {
    return false;
  }
}

const problems = [];
if (BACKEND !== "aws") {
  problems.push(`NEXT_PUBLIC_FORMS_BACKEND must be "aws" (got ${JSON.stringify(BACKEND ?? null)})`);
}
if (!isHttpsOrigin(API_BASE)) {
  problems.push(
    `NEXT_PUBLIC_FORMS_API_BASE must be a bare https origin ` +
      `(e.g. https://forms.desertrecoverycenters.com) (got ${JSON.stringify(API_BASE ?? null)})`
  );
}

if (problems.length === 0) {
  console.log("[check-forms-env] OK — forms backend = aws, api base is a valid https origin.");
  process.exit(0);
}

const strict =
  process.env.VERCEL_ENV === "production" ||
  process.env.VERCEL_GIT_COMMIT_REF === "main" ||
  process.env.FORMS_ENV_STRICT === "strict";

const msg =
  "[check-forms-env] forms would fall back to the retired Vercel 410 routes (silent lead loss):\n  - " +
  problems.join("\n  - ");

if (strict) {
  console.error(msg + "\nFailing the build. Set both vars in the Vercel Production environment.");
  process.exit(1);
}

console.warn(msg + "\n(non-production build: warning only, not failing)");
process.exit(0);
