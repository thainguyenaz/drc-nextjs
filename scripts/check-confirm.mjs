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
import { pathToFileURL } from "node:url";

// Credential-claim words (narrowed 2026-08-24): specialty-certification
// phrasing only — "board certified"/"board-certified"/"board eligible"/
// "diplomate". The desert-tms gate also bans "Joint Commission", the
// "accredit" stem, and "Outpatient Treatment Center"; those are NOT ported
// here because they are likely true attributes of DRC. A word gate is only
// valid where the word is always false for that entity — a gate that fails
// on true statements gets switched off, and then catches nothing.
const CREDENTIAL_CLAIM_WORDS =
  /board[ -]certified(?! \(PMHNP-BC\))|board[ -]eligible|\bdiplomate\b/i;

// Unscoped payer-network claim gate (2026-08-25, TRICARE Block 3 ruling;
// hardened same day after adversarial review): encode the patterns, not the
// memory. Every census in the Block 2 session missed at least one claim
// variant — the landing-page badge sublabel read "In-Network Through
// TriWest" with no TRICARE token on the line, and the prozac/zoloft pages
// scope AFTER TriWest ("through TriWest for residential treatment").
//
// Rule A (TRICARE/TriWest): any "in-network" whose SENTENCE contains a
// TRICARE/TriWest token must also contain "residential" in that sentence.
// The window is trimmed at sentence boundaries because raw proximity is
// spoofable: "Our residential program is beautiful. We are in-network with
// TRICARE through TriWest." passed the naive +/-120 window on the strength
// of the unrelated prior sentence. The qualifier must live in the claim's
// own sentence. Where no sentence punctuation exists (badge labels, table
// cells), the raw window applies — that is the lp:280 class.
//
// Rule B (all other payers): DRC is out-of-network with every commercial
// carrier and does not accept Medicare/Medicaid/AHCCCS, so a first-person
// "in-network <payer>" adjacency is always a false claim — no scope saves
// it. Payer list mirrors PAYER_NAMES in src/lib/blog-validate.ts minus
// TRICARE/TriWest. Two narrowing conditions, both earned by false
// positives on real pages:
// - Adjacency (not co-occurrence): compliant copy lists commercial payers
//   in the same sentence as the scoped TRICARE claim ("...(Aetna, Cigna),
//   is in-network with TRICARE for residential treatment...").
// - First-person subject (we/our/DRC/Desert Recovery) required before the
//   match: the insurance explainer pages use "whether the treatment
//   facility is in-network or out-of-network with your Cigna plan" —
//   educational third-person copy, not a claim about DRC. Cost: a
//   subject-free false claim ("now in-network for Cigna members") slips
//   Rule B; acceptable because a gate that fails on true educational
//   statements gets switched off, and then catches nothing.
const IN_NETWORK = /in[ -]network/gi;
const TRICARE_TOKEN = /tricare|triwest/i;
const SCOPE_TOKEN = /residential/i;
const NON_TRICARE_PAYER =
  /\b(?:AHCCCS|Medicaid|Medicare|Humana|Magellan|Beacon|Cigna|Aetna|UnitedHealthcare|United\s*Health|UHC|BCBS|Blue\s*Cross|Blue\s*Shield|Health\s*Net|Optum|Anthem|Carelon)\b/i;
const FIRST_PERSON_SUBJECT = /\b(?:we|our|DRC|Desert\s+Recovery)\b/i;
const CLAIM_WINDOW = 200;

// Block-level closers become sentence boundaries BEFORE tags are stripped:
// a heading has no period, so "Residential Treatment</h2><p>DRC is
// in-network with TRICARE..." would otherwise smear the heading's
// "Residential" into the claim's window (adversarial case A3). Inline
// closers (span, a, strong) are NOT boundaries — the lp:280 badge class
// spans sibling inline elements and must stay in one segment.
function stripTags(s) {
  return s
    .replace(/<\/(?:h[1-6]|p|li|td|th|div|section|article|figcaption)>|<br\s*\/?>/gi, ". ")
    .replace(/<[^>]*>/g, " ");
}

// +/-CLAIM_WINDOW around the match, then trimmed to the nearest sentence
// boundary on each side. No boundary in range -> raw window stands.
function sentenceWindow(text, idx, len) {
  let start = Math.max(0, idx - CLAIM_WINDOW);
  let end = Math.min(text.length, idx + len + CLAIM_WINDOW);
  const left = text.slice(start, idx);
  const lb = Math.max(left.lastIndexOf("."), left.lastIndexOf("!"), left.lastIndexOf("?"));
  if (lb !== -1) start = start + lb + 1;
  const right = text.slice(idx + len, end);
  const rb = right.search(/[.!?]/);
  if (rb !== -1) end = idx + len + rb + 1;
  return { window: text.slice(start, end), start };
}

export function unscopedNetworkClaims(content) {
  const text = stripTags(content);
  const hits = [];
  for (const m of text.matchAll(IN_NETWORK)) {
    const { window: w, start } = sentenceWindow(text, m.index, m[0].length);
    // Rule A: TRICARE claim missing its residential scope
    if (TRICARE_TOKEN.test(w) && !SCOPE_TOKEN.test(w)) {
      hits.push(w.replace(/\s+/g, " ").trim().slice(0, 140));
      continue;
    }
    // Rule B: first-person in-network claim adjacent to a payer we are
    // never in-network with. Skip when a TRICARE token sits between (that
    // is Rule A territory).
    const after = text.slice(m.index, m.index + m[0].length + 60);
    const adj = after.match(NON_TRICARE_PAYER);
    const before = text.slice(start, m.index);
    if (
      adj &&
      !TRICARE_TOKEN.test(after.slice(0, adj.index)) &&
      FIRST_PERSON_SUBJECT.test(before)
    ) {
      hits.push(after.replace(/\s+/g, " ").trim().slice(0, 140));
    }
  }
  return hits;
}

const RENDERED_ONLY_DIRS = [".next/server/app"];
const RENDERED_EXTS = new Set([".html", ".rsc", ".body"]);

// Strict on EVERY Vercel build — production AND PR/branch previews — so a
// reviewer looking at a preview deploy gets the compliance signal before
// merge (Block 5 PR-gated publishing depends on this). Local builds warn
// unless CHECK_PLACEHOLDERS=strict.
const strict =
  !!process.env.VERCEL ||
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

// Importable for scripts/check-confirm.test.mjs; the scan below only runs
// when this file is executed directly (the build chain does that).
const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (!isMain) {
  /* imported for tests — no scan */
} else {

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
  "\ncheck-confirm: issues present (allowed on non-Vercel local builds). Vercel builds — production, main, and PR previews — will fail until resolved."
);

}
