// Ship gate, ported from desert-tms scripts/check-confirm.mjs (2026-08-23)
// after 45 unverified "board-certified" instances accumulated in this repo
// with no word gate. This port carries the CREDENTIAL_CLAIM_WORDS check only:
// the desert-tms entity-firewall words (addiction, recovery, ...) are this
// site's core vocabulary, and its fictitious-price words gate a pricing model
// this site does not publish.
//
// WHY THIS WORD LIST DIFFERS FROM DESERT TMS (ruling 2026-08-24): a word
// gate is only valid where the word is always false for that entity.
// Desert TMS holds no accreditation and no facility license, so "Joint
// Commission", "accredit*", and "Outpatient Treatment Center" are gated
// there. DRC likely holds both, so gating them here would fail builds on
// true statements — and a gate that fails on true statements gets switched
// off. Those claims are governed instead by the source-on-record rule
// below, not by vocabulary.
//
// Principle (desert-tms CLAUDE.md, 2026-08-23): the word gate catches
// prohibited VOCABULARY, not inherited facts. Passing it does not make a
// claim true. Every factual claim about the business — licensure,
// accreditation, certification, staffing — needs a named source and a
// retrieval date on record before it ships.
//
// Scanned only over rendered page payloads (.html/.rsc/.body), not JS
// bundles, so framework-internal strings cannot false-positive.
//
// KNOWN EXCEPTION under review: "PMHNP-BC" (Ian Dy, src/lib/seo.tsx) is the
// ANCC credential NAME, kept by directive 2026-08-23 pending ANCC
// verification. It contains "Board Certified", so the regex below uses a
// lookahead to exempt exactly the "Board Certified (PMHNP-BC)" form and
// nothing else.
//
// Strictness: hard-fail when the build is production (VERCEL_ENV=production),
// on the main branch (VERCEL_GIT_COMMIT_REF=main), or when
// CHECK_PLACEHOLDERS=strict. Other local/branch-preview builds warn and pass.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

// Credential-claim words (narrowed 2026-08-24): specialty-certification
// phrasing only — "board certified"/"board-certified"/"board eligible"/
// "diplomate". The desert-tms gate also bans "Joint Commission", the
// "accredit" stem, and "Outpatient Treatment Center"; those are NOT ported
// here because they are likely true attributes of DRC. A word gate is only
// valid where the word is always false for that entity — a gate that fails
// on true statements gets switched off, and then catches nothing.
const CREDENTIAL_CLAIM_WORDS =
  /board[ -]certified(?! \(PMHNP-BC\))|board[ -]eligible|\bdiplomate\b/i;

// Unscoped payer-network claim gate (2026-08-25, TRICARE Block 3 ruling):
// encode the patterns, not the memory. Every census in the Block 2 session
// missed at least one claim variant — the landing-page badge sublabel read
// "In-Network Through TriWest" with no TRICARE token on the line, and the
// prozac/zoloft pages scope AFTER TriWest ("through TriWest for residential
// treatment"). A token-list grep cannot enumerate orderings, so this checks
// co-occurrence instead: any "in-network" within WINDOW chars of a
// TRICARE/TriWest token must have "residential" inside the same window.
// Both compliant orderings pass; every unscoped variant, with or without
// the TRICARE word on the line, fails.
const IN_NETWORK = /in[ -]network/gi;
const PAYER_TOKEN = /tricare|triwest/i;
const SCOPE_TOKEN = /residential/i;
const CLAIM_WINDOW = 120;

function unscopedNetworkClaims(content) {
  const hits = [];
  for (const m of content.matchAll(IN_NETWORK)) {
    const start = Math.max(0, m.index - CLAIM_WINDOW);
    const windowText = content.slice(start, m.index + m[0].length + CLAIM_WINDOW);
    if (PAYER_TOKEN.test(windowText) && !SCOPE_TOKEN.test(windowText)) {
      hits.push(windowText.replace(/\s+/g, " ").trim().slice(0, 140));
    }
  }
  return hits;
}

const RENDERED_ONLY_DIRS = [".next/server/app"];
const RENDERED_EXTS = new Set([".html", ".rsc", ".body"]);

const strict =
  process.env.VERCEL_ENV === "production" ||
  process.env.VERCEL_GIT_COMMIT_REF === "main" ||
  process.env.CHECK_PLACEHOLDERS === "strict";

function* walk(dir, exts) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p, exts);
    else if (exts.has(extname(p))) yield p;
  }
}

const credentialHits = [];
const networkHits = [];
for (const dir of RENDERED_ONLY_DIRS) {
  for (const file of walk(dir, RENDERED_EXTS)) {
    const content = readFileSync(file, "utf8");
    const c = content.match(CREDENTIAL_CLAIM_WORDS);
    if (c) credentialHits.push({ file, word: c[0] });
    for (const w of unscopedNetworkClaims(content)) {
      networkHits.push({ file, word: w });
    }
  }
}

if (credentialHits.length === 0 && networkHits.length === 0) {
  console.log(
    "check-confirm: no credential-claim words, no unscoped payer-network claims in build output."
  );
  process.exit(0);
}

function report(hits, kind) {
  const summary = new Map();
  for (const hit of hits) {
    if (!summary.has(hit.word)) summary.set(hit.word, new Set());
    summary.get(hit.word).add(hit.file);
  }
  for (const [word, files] of summary) {
    console.error(`\n${kind} "${word}" found in ${files.size} build file(s):`);
    for (const f of [...files].slice(0, 8)) console.error(`  ${f}`);
    if (files.size > 8) console.error(`  ...and ${files.size - 8} more`);
  }
}
report(credentialHits, "CREDENTIAL-CLAIM WORD");
report(networkHits, "UNSCOPED PAYER-NETWORK CLAIM");

if (strict) {
  console.error(
    "\ncheck-confirm: FAILING build (production/main/strict). A credential claim or an unscoped payer-network claim is in rendered output. Remove it, scope it to residential treatment, or record the source and add a documented exception."
  );
  process.exit(1);
}
console.warn(
  "\ncheck-confirm: issues present (allowed on local/branch-preview builds). Production and main-branch builds will fail until resolved."
);
