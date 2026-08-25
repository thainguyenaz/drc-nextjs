// Live verification of https://desertrecoverycenters.com/insurance against
// scripts/baselines/insurance-live-baseline.json.
//
// Run: npm run check:live
//
// This script hits PRODUCTION. It must never run in the Vercel build —
// it is deliberately not part of `npm run build`.
//
// It NEVER submits the insurance verification form. A real submit creates a
// fake lead in HubSpot and pollutes the conversion counts this baseline
// exists to protect (see tracking-inventory-2026-08-11). Endpoint liveness
// is asserted via a HEAD probe (405 = POST-only route mounted).
//
// Puppeteer is resolved from /home/openclaw/node_modules by absolute path.
// It is deliberately NOT a devDependency: this repo deploys on Vercel and a
// ~300MB browser download does not belong in the production install. The
// check only runs on the ops box, where that install already exists.
//
// TURNSTILE HEADLESS LIMITATION: Cloudflare Turnstile may decline to issue a
// token to headless Chrome (bot detection). By default this script asserts
// only that the widget script loads and the cf-turnstile-response field is
// present. Set TURNSTILE_STRICT=1 to additionally require a non-empty token
// within turnstileTokenTimeoutMs — the strict assertion is the one that
// catches the present-but-empty-token failure mode, but it can false-fail
// in headless environments.

import { createRequire } from "module";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const puppeteer = require("/home/openclaw/node_modules/puppeteer");

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseline = JSON.parse(
  readFileSync(join(__dirname, "baselines", "insurance-live-baseline.json"), "utf8")
);

const ORIGIN = new URL(baseline.url).origin;
const STRICT_TURNSTILE = process.env.TURNSTILE_STRICT === "1";
const failures = [];
const fail = (msg) => failures.push(msg);

console.log("known issues (baseline):");
for (const issue of baseline.knownIssues ?? []) console.log(`  ! ${issue}`);

// --- static checks: destination status codes, meta description, form route ---
for (const card of baseline.cards) {
  const res = await fetch(ORIGIN + card.href, { redirect: "manual" });
  if (res.status !== 200) fail(`destination ${card.href}: HTTP ${res.status}, expected 200`);
}

{
  const html = await (await fetch(baseline.url)).text();
  const m = html.match(/<meta name="description" content="([^"]*)"/);
  if (!m) fail("meta description tag not found on /insurance");
  else if (m[1] !== baseline.metaDescription)
    fail(`meta description changed:\n  expected: ${baseline.metaDescription}\n  actual:   ${m[1]}`);
}

{
  const res = await fetch(ORIGIN + "/api/insurance-verification", { method: "HEAD" });
  if (res.status === 404) fail("/api/insurance-verification returned 404 — route missing");
}

// --- browser checks ---
const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
  );
  await page.setViewport({ width: 390, height: 844, isMobile: true });

  const requests = [];
  page.on("request", (r) => requests.push(r.url()));

  await page.goto(baseline.url, { waitUntil: "networkidle2", timeout: 60000 });
  await page.mouse.move(100, 200);
  await page.evaluate(() => window.scrollBy(0, 600));
  await new Promise((r) => setTimeout(r, 13000));

  const state = await page.evaluate((cardNames) => {
    const links = Array.from(document.querySelectorAll("a")).filter(
      (a) => a.querySelector("h3") && cardNames.includes(a.querySelector("h3").textContent.trim())
    );
    const cards = links.map((a) => {
      const img = a.querySelector("img");
      const ariaLabel = a.getAttribute("aria-label");
      const accName =
        ariaLabel ||
        ((img && img.alt ? img.alt + " " : "") + a.textContent.trim().replace(/\s+/g, " "));
      return {
        name: a.querySelector("h3").textContent.trim(),
        href: a.getAttribute("href"),
        accName,
      };
    });
    const form = document.querySelector("form");
    const formFields = form
      ? Array.from(form.querySelectorAll("input,select,textarea"))
          .map((i) => i.name || i.id)
          .filter(Boolean)
      : [];
    const submitBtn = form
      ? form.querySelector('button[type="submit"], input[type="submit"]')
      : null;
    const dl = (window.dataLayer || []).map((e) => JSON.stringify(e)).join("|");
    return {
      cards,
      formPresent: !!form,
      formFields,
      submitPresent: !!submitBtn,
      submitDisabled: submitBtn ? submitBtn.disabled : null,
      dataLayer: dl,
    };
  }, baseline.cards.map((c) => c.name));

  for (const expected of baseline.cards) {
    const got = state.cards.find((c) => c.name === expected.name);
    if (!got) { fail(`card missing: ${expected.name}`); continue; }
    if (got.href !== expected.href)
      fail(`card ${expected.name}: href ${got.href}, expected ${expected.href}`);
    if (!got.accName.startsWith(expected.name))
      fail(`card ${expected.name}: accessible name does not start with carrier name: "${got.accName.slice(0, 60)}"`);
  }

  if (!state.formPresent) fail("insurance verification form not found");
  const missing = baseline.formFields.filter((f) => !state.formFields.includes(f));
  const extra = state.formFields.filter((f) => !baseline.formFields.includes(f));
  if (missing.length) fail(`form fields missing: ${missing.join(", ")}`);
  if (extra.length) fail(`form fields unexpected: ${extra.join(", ")}`);
  if (!state.submitPresent) fail("submit button not found");
  else if (state.submitDisabled) fail("submit button is disabled after page settle");

  for (const id of baseline.dataLayerIds)
    if (!state.dataLayer.includes(id)) fail(`dataLayer missing ${id}`);

  const sawAny = (needles) => requests.some((u) => needles.some((n) => u.includes(n)));
  for (const [name, needles] of Object.entries(baseline.requiredBeacons))
    if (!sawAny(needles)) fail(`beacon not observed: ${name} (${needles.join(" | ")})`);

  const cookieNames = (await page.cookies()).map((c) => c.name);
  for (const c of baseline.requiredCookies)
    if (!cookieNames.includes(c)) fail(`required cookie not set: ${c}`);

  if (STRICT_TURNSTILE) {
    const deadline = Date.now() + baseline.turnstileTokenTimeoutMs;
    let token = "";
    while (Date.now() < deadline && !token) {
      token = await page.evaluate(
        () => document.querySelector('input[name="cf-turnstile-response"]')?.value ?? ""
      );
      if (!token) await new Promise((r) => setTimeout(r, 1000));
    }
    if (!token)
      fail(`TURNSTILE_STRICT: cf-turnstile-response still empty after ${baseline.turnstileTokenTimeoutMs}ms`);
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(`\nFAIL — ${failures.length} assertion(s):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("\nPASS — all live /insurance assertions hold.");
