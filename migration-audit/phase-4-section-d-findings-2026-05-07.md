# Phase 4 — Section D Findings (AEO/GEO Expanded)

**Date:** 2026-05-07
**Auditor:** Claude (read-only audit; no code modifications)
**Audit basis:** drc-nextjs main at commit `4a61efc` (Q1 docs); 86 page.tsx routes, 37 sitemap entries, 37 page-metadata entries, 37 video-data entries
**Scope:** D.1 through D.14 — AEO/GEO schema coverage, llms.txt, OG/Twitter, canonical alignment, E-E-A-T signals
**Companion docs:** `pre-cutover-audit-2026-05-07.md` (Sections A-C), `cutover-readiness-criteria.md` (criterion 1 closes when this report's CRITICALs reach zero)

---

## Executive summary

**Status: ⚠️ FAIL — 2 CRITICAL, 7 IMPORTANT, 4 LOW findings.** Two of the criticals are pre-cutover blockers per `cutover-readiness-criteria.md` criterion 1.

| ID | Finding | Severity | Pre-cutover blocker? |
|---|---|---|---|
| D.13.a | 3 treatment layouts emit canonical to non-existent WP slugs (CBT, DBT, EMDR) | **CRITICAL** | YES |
| D.7 | 31 of 37 pages with video content have no `<VideoSchemas>` wiring | **CRITICAL** | YES |
| D.4 | `/about` page has no schema, no breadcrumb, no canonical | IMPORTANT | YES |
| D.14 | 19 YMYL pages missing `reviewedBy` E-E-A-T attribution | IMPORTANT | YES |
| D.11.a | Organization `sameAs` missing Twitter/X (exists in siteData.social) | IMPORTANT | NO |
| D.5 | Procedural resources pages missing HowTo (intervention, assessment, get-help, insurance) | IMPORTANT | NO |
| D.1 | `llms.txt` missing 7+ key pages, lacks adolescent program details | IMPORTANT | NO |
| D.13.b | Trailing-slash 3-way mismatch (sitemap/`@id`/canonical) — duplicate of Ticket 2 | IMPORTANT | YES (via Ticket 2) |
| D.2 | 3 schema-thin pages: `/resources` hub, `/resources/blog` hub, `/about` | IMPORTANT | NO |
| D.9 | Zero `Review`/`AggregateRating` schema despite GoogleReviews component rendering Google data | LOW | NO |
| D.10 | Zero `Statistic`/`Claim` schema | LOW | NO |
| D.11.b | 4 of 5 locations have empty `sameAs` arrays; no GBP CIDs anywhere | LOW | NO |
| D.6 | Standalone blog pages use `Article` (not `BlogPosting` or `MedicalScholarlyArticle`) | LOW | NO |

The current Tickets 10, 11, 12 (filed during Phase 2, Section B) overlap with several findings here — see "Cross-references" at end.

---

## D.1 — llms.txt freshness, accuracy, depth

**File:** `public/llms.txt` (52 lines, last touched 2026-05-06).

**Status: ⚠️ WARN — accurate but incomplete.**

**Verified accurate:**
- Joint Commission accreditation, LegitScript certification, ADHS license claim ✓
- Glendale ZIP 85303 ✓ (matches siteData)
- Scottsdale ZIP 85255 ✓
- Phoenix outpatient ZIP 85037 ✓
- Phoenix sober living ZIP 85041 ✓ (post B-2 fix from 85085 — verified)
- Insurance posture: out-of-network commercial, in-network TriCare/TriWest ✓
- Cash-pay accepted, Medicaid/Medicare not accepted ✓

**Gaps to fix before cutover:**

1. **Key Pages section — 7 important pages missing.** Currently lists 7. Should also list:
   - `/our-team` — E-E-A-T: clinician credentials matter for medical AEO grounding
   - `/levels-of-care` — answers "what is PHP/IOP/residential" verticals
   - `/treatments` — modality menu (CBT, DBT, EMDR, TMS, etc.)
   - `/facilities` — physical-tour content for visual AEO
   - `/get-help` — admissions/intake entry surface
   - `/contact` — direct contact info
   - `/rehab-near-me` — geo-AEO pivot page
2. **Services section needs adolescent callout.** Line 35 lists "residential treatment (10-bed max per facility), PHP, IOP, outpatient, NeuroStar TMS" — no mention that the Phoenix location offers a dedicated adolescent (ages 13–17) program. Adolescent treatment is a distinct AEO vertical; bots will under-rank if it's only mentioned in the Key Pages list.
3. **Phone-number disambiguation.** Line 49 shows "General: (480) 931-3617" but the Phoenix outpatient line is `(602) 905-8070` (per siteData and JSON-LD). Add a "Phoenix outpatient: (602) 905-8070" line so AEO bots returning intent-specific phone numbers don't collapse them.
4. **Leadership name formatting.** Line 23 lists "Dr. Reyes Topete MD" but the rendered name on /our-team is "Dr. Reyes Topete, M.D." — minor consistency nit; bots cross-reference Wikipedia/PubMed style. Standardize to "Dr. Reyes Topete, M.D.".

**Optional improvements:**

5. Add a `## Common Questions` section with 5–10 high-AEO Q/A pairs (admissions process, insurance verification, what to expect first day, etc.) — gives AEO bots quotable structured answers.
6. Add a `## Cutover & Indexing` note for during the migration window: "DRC is migrating to Next.js on Vercel; structured data and content unchanged" — helps AEO crawlers handle the apex flip without confusion.

---

## D.2 — FAQPage schema coverage

**Status: ✓ PASS with 3 gaps.** 50 pages emit `InlineFAQSchema` or `getFAQSchema`. Coverage on the high-traffic surfaces (treatment, addiction, mental-health, adolescent, locations, levels-of-care) is complete.

**Gap pages (no FAQ schema, but should likely have one):**
- `/about` — could surface the "Founded by …", "Joint Commission?", "10-bed max?" Q/A as FAQ
- `/resources` (hub) — overlaps Ticket 12 (schema-thin page)
- `/resources/blog` (hub) — has Blog schema only, no FAQ
- `/our-team` — could surface "Who is your clinical director?" type Q/A
- Standalone blog pages (`/blog/luxury-rehab-worth-it`, `/blog/dual-diagnosis-explained`, `/blog/signs-of-addiction`) — Article schema only, no FAQ; lower priority

---

## D.3 — Speakable schema coverage policy

**Status: TICKET 11 ALREADY FILED — DEFERRED.** 28 of 86 page.tsx routes emit `SpeakableSchema`. Coverage is inconsistent: home, mental-health, addiction, adolescent, locations, compare ✓; insurance, levels-of-care, treatments, resources, blog ✗.

No new finding; refer to Ticket 11 (`project_a5_followups.md`). Voice-search/AEO policy decision pending.

---

## D.4 — BreadcrumbList coverage

**Status: ⚠️ WARN.** 75 of 86 page.tsx routes emit a BreadcrumbList. Home is correctly excluded.

**Gap pages (BreadcrumbList missing, should likely have one):**
- `/about` — IMPORTANT (this is also schema-thin, has no schema at all)
- `/addiction-mental-health-treatment-facilities-lp` — campaign LP; lower priority but trivial to add
- `/resources/blog` (hub) — should be Home > Resources > Blog

Pre-cutover blocker because `/about` is a high-traffic destination from organic + branded search.

---

## D.5 — HowTo schema on procedural content

**Status: ⚠️ WARN.** Currently 3 pages emit HowTo: home, adolescent-treatment, locations/phoenix-php-iop — all reuse the same admissions-process block.

**Procedural pages missing HowTo (genuine HowTo candidates):**
1. `/get-help` — admissions/intake page; the home admissions HowTo should also live here at minimum
2. `/insurance` (hub) — insurance verification is a procedural multi-step process worth marking up
3. `/resources/intervention-guide` — strongly procedural (planning an intervention is a stepwise process); HIGH-VALUE AEO target
4. `/resources/mental-health-assessment` — procedural self-assessment flow
5. `/resources/what-to-bring` — packing checklist; can be modeled as ItemList rather than HowTo (alternative)

`/resources/intervention-guide` is the highest-value HowTo candidate because "how to do an intervention" is a genuine AEO query with high purchase intent and no current HowTo on the page.

---

## D.6 — Article and BlogPosting schema

**Status: ✓ PASS.** Both blog routes emit Article schema with `author`, `datePublished`, `dateModified`, `publisher`, `image`, `description`. Dynamic route also includes `medicalAudience` and `reviewedBy`.

**Minor observations (LOW):**
- All blog pages use `@type: "Article"`. For medical content, `MedicalScholarlyArticle` or `BlogPosting` is more semantically precise. Schema.org accepts either; Google parses both. Not a finding, but consider for future.
- Standalone blog pages (`/blog/luxury-rehab-worth-it`, etc.) use `getArticleSchema` from `schema.ts` which does NOT include `reviewedBy`. Dynamic blog pages (`/resources/blog/[slug]`) use inline schema which DOES include `reviewedBy`. Inconsistency — either lift `reviewedBy` into `getArticleSchema` or migrate standalone posts to use the inline shape. See D.14.

---

## D.7 — VideoObject schema coverage

**Status: ⛔ CRITICAL.** Only 6 of 37 video-data paths emit VideoSchemas.

`src/data/video-data.ts` declares video metadata for 37 paths. `<VideoSchemas path="..." />` is currently wired on 6 pages: home, locations/glendale, locations/scottsdale, treatments (hub), mental-health (hub), addiction-treatment (hub).

**31 paths have video data but no schema emission:**

```
/about-us/
/locations/phoenix-php-iop/        ← also part of A6.a fix
/mental-health/anxiety-treatment/
/mental-health/depression-treatment/
/mental-health/ptsd-treatment/
/mental-health/bipolar-disorder-treatment/
/mental-health/adhd-add/
/mental-health/ocd-treatment/
/mental-health/personality-disorder-treatment/
/mental-health/schizophrenia-treatment/
/mental-health/trauma-treatment/
/addiction/alcoholism-treatment/
/addiction/heroin-addiction-treatment/
/addiction/fentanyl-addiction-treatment/
/addiction/cocaine-addiction-treatment/
/addiction/meth-addiction-treatment/
/addiction/marijuana-addiction-treatment/
/addiction/prescription-drug-addiction-treatment/
/addiction/gambling-addiction-treatment/
/addiction/stimulant-addiction-treatment/
/treatments/cbt-cognitive-behavioral-therapy/
/treatments/dbt-dialectical-behavior-therapy/
/treatments/emdr-therapy/
/treatments/trauma-therapy/
/treatments/holistic-therapies/
/treatments/dual-diagnosis-treatment/
/treatments/tms-therapy/
/treatments/softwave-therapy/
/treatments/bridgework/
/resources/detox-guide/
/resources/faq/
```

The `<VideoSchemas path="..." />` component is a one-line add per page. Fix is mechanical; impact is structured-data signal on 31 video-rich pages that are currently shipping video content with no JSON-LD wrapper.

Pre-cutover blocker: Google Rich Results Test will not flag video content on these pages, missing the Video carousel/snippet eligibility.

**Note:** A6.a already plans to add `<VideoSchemas path="/locations/phoenix-php-iop/" />` to that one page. The other 30 should be a separate cleanup PR (call it A9 — "VideoSchemas wiring sweep").

---

## D.8 — Service and MedicalProcedure schema

**Status: ⚠️ WARN.** No standalone `Service` or `MedicalProcedure` blocks anywhere in the repo.

The closest existing pattern: `availableService: [{...MedicalTherapy}, ...]` nested under LocalBusiness on location pages and adolescent-treatment. That's appropriate for clinic-scoped services but doesn't surface the *therapy* as an entity in its own right.

**A6.b plan adds the first MedicalProcedure** (`#program` on adolescent-treatment) per Option B. Suggests a broader pattern: each `/treatments/*` modality page (CBT, DBT, EMDR, TMS, SoftWave, etc.) should emit a top-level MedicalTherapy or MedicalProcedure entity with `@id` ending in `#therapy` or `#procedure`, anchored to `${SITE_URL}/#organization`. This gives Google a clean entity graph: Organization → provides → MedicalTherapy → relevantCondition → MedicalCondition.

Defer to post-cutover unless A6.b succeeds and you want to extend the pattern.

---

## D.9 — Review and AggregateRating schema

**Status: ⚠️ WARN — ZERO usage.** Grep for `AggregateRating`, `ratingValue`, `reviewCount` returns no matches in `src/app/`.

`src/components/GoogleReviews.tsx` renders 5-star ratings and review text from a Google Places API response (visible to users), but emits no JSON-LD. Each location's `LocalBusiness` block could carry an `aggregateRating` derived from the same data:

```
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: location.rating,
  reviewCount: location.totalReviews,
}
```

**Risk of *not* doing this:** stars-in-search-results eligibility depends on AggregateRating in JSON-LD. The site renders the data visibly but Google can't index it for rich results.

**Risk of doing it carelessly:** Google's review schema policy requires reviews to be either first-party content or aggregated from genuine reviewers. Pulling AggregateRating from the Google Places API of *your own* GBP listing is borderline — Google explicitly flags "self-serving" reviews. The safe path is to anchor `aggregateRating` to the `@id` of the LocalBusiness and pull from a third-party review aggregator (Yelp, Healthgrades), not from your own GBP.

**Recommendation:** defer to post-cutover. Needs legal/compliance review to avoid a manual structured-data penalty for "self-serving reviews."

---

## D.10 — Statistic / Claim / Dataset schema

**Status: ⚠️ WARN — ZERO usage.** Grep returns no matches.

Pages that emit verifiable statistics in body copy:
- "10-bed maximum per facility" (multiple pages)
- "Joint Commission accredited" (sitewide)
- "FDA cleared NeuroStar TMS for adolescents 15+" (TMS, adolescent pages)
- "Mental Health Parity and Addiction Equity Act" (adolescent, insurance)
- 48-hour admissions claim (HowTo schema covers timing, but not the claim itself)

`Statistic` is a relatively new schema.org type with weaker AEO traction than FAQ/HowTo. `Claim` (from ClaimReview) is fact-check schema and not appropriate here.

**Recommendation:** defer indefinitely. Low ROI vs. effort. Revisit only if Google rolls out a "verified statistic" rich-result feature.

---

## D.11 — SameAs entity linking

**Status: ⚠️ WARN — partial coverage with one IMPORTANT gap.**

**Organization `sameAs` (`src/lib/schema.ts:32-38`):** 5 entries — Facebook, Instagram, YouTube, Spotify, Yelp.

### D.11.a (IMPORTANT) — Twitter/X missing

`siteData.social.twitter = "https://x.com/desertrecoverycenters"` exists in `src/lib/site-data.ts:7` but is NOT in the Organization `sameAs` array. Either:

- Add `https://x.com/desertrecoverycenters` to Organization.sameAs (recommended), OR
- Remove `siteData.social.twitter` if the account is dormant/abandoned

Inconsistency between the Organization entity graph and the visible footer/social links. Search engines reading sameAs use it to build the entity knowledge graph; missing X means the entity graph is incomplete.

### D.11.b (LOW) — Locations sameAs sparse

- Glendale: 1 sameAs (Yelp Glendale)
- Scottsdale: empty
- Phoenix PHP/IOP: empty
- Phoenix TMS: empty
- Phoenix Living: empty

Each LocalBusiness should have its corresponding GBP/Maps URL in `sameAs`:
- Glendale GBP CID: `ChIJIY0JCJR3K4cR2AsN2S1SMsw` (visible in `GoogleReviews.tsx:21`)
- Scottsdale GBP CID: `ChIJhwUwqWFrK4cRcJizcuP0hCI` (line 23)
- Phoenix PHP/IOP GBP CID: `ChIJP_eZSIRAK4cRrE5xwNZoYdA` (line 25)
- Yelp listings for Scottsdale and Phoenix (if they exist)

Defer to post-cutover. Mechanical update once GBP URLs are confirmed.

### D.11.c (LOW) — Wikidata, Crunchbase, LinkedIn

Organization sameAs could include:
- LinkedIn company page (if exists — needs verification)
- Wikidata entry (likely none yet — would need creation)
- Crunchbase entry (likely none yet)

These improve entity-graph robustness but aren't pre-cutover blockers.

---

## D.12 — Open Graph and Twitter Card meta

**Status: ✓ PASS for most pages, with /about gap.**

**Twitter Card** is set globally in `src/app/layout.tsx:36-38` as `card: "summary_large_image"`. All pages inherit. Title/description/image fall through to OpenGraph fields. Not a finding — global default is correct.

**OpenGraph:** most pages set `openGraph` via `getPageMeta` → `buildMetadata` flow OR inline. All sampled pages emit `og:title`, `og:description`, `og:url`, `og:image`. ✓

**`/about` gap (covered in D.4):** missing canonical, openGraph, alternates entirely. The metadataBase from layout.tsx provides metadataBase, but Next.js does NOT auto-emit a `<link rel="canonical">` without explicit `alternates.canonical`. So /about ships with no canonical declaration in the head — Google will infer one but it's a soft signal vs. an explicit declaration. Pre-cutover blocker.

---

## D.13 — Canonical URL declarations match `@id` values match sitemap entries

**Status: ⛔ CRITICAL.** Two sub-findings.

### D.13.a (CRITICAL) — 3 treatment pages emit canonical to non-existent URLs

`src/data/page-metadata.ts` contains keys for the *WordPress* slugs (legacy) but the *Next.js* routes use shorter slugs. Three layout files call `getPageMeta()` with the WP key, returning a canonical URL that 404s:

| Layout file | Calls `getPageMeta(...)` with | Real Next.js route | Canonical emitted |
|---|---|---|---|
| `treatments/emdr-therapy/layout.tsx:4` | `/treatments/emdr-eye-movement-desensitization-and-reprocessing/` | `/treatments/emdr-therapy/` | `…/treatments/emdr-eye-movement-desensitization-and-reprocessing/` (404 on Next.js) |
| `treatments/cbt-cognitive-behavioral-therapy/layout.tsx:4` | `/treatments/cognitive-behavioral-therapy-cbt/` | `/treatments/cbt-cognitive-behavioral-therapy/` | `…/treatments/cognitive-behavioral-therapy-cbt/` (404 on Next.js) |
| `treatments/dbt-dialectical-behavior-therapy/layout.tsx:4` | `/treatments/dialectical-behavior-therapy-dbt/` | `/treatments/dbt-dialectical-behavior-therapy/` | `…/treatments/dialectical-behavior-therapy-dbt/` (404 on Next.js) |

**Impact:** Google receives `<link rel="canonical">` pointing to a URL that returns 404. After cutover, the page itself returns 200 but its declared canonical is broken. Google will likely deindex these pages within days.

**Fix:** either (a) update the page-metadata key to match the Next.js route, or (b) update each layout to call `getPageMeta()` with the actual route. (a) is cleaner because it keeps page-metadata.ts as the single source of truth keyed on real routes.

**Note:** there's a legitimate reason these WP slugs exist in page-metadata — the redirects from WP slugs map *to* the new Next.js slugs. But the canonical of the destination should be the destination URL, not the source URL.

**Also note:** `treatments/tms-therapy/layout.tsx:7` uses `canonical: "/treatments/tms-therapy"` — relative-path canonical (no https://, no trailing slash). Next.js will resolve via metadataBase but it's inconsistent with all other layouts which use absolute URLs. LOW-priority cleanup.

### D.13.b (IMPORTANT, dup of Ticket 2) — Trailing-slash 3-way mismatch

Already filed as Ticket 2 in `project_a5_followups.md`. Reaffirming for completeness:
- `sitemap.ts` entries: NO trailing slash
- LocalBusiness `@id`/`url` (via `siteData.locations[].href`): NO trailing slash
- `<link rel="canonical">` (via `pageMetadata` keys): WITH trailing slash

Same canonical entity emitted with two different URL formats across structured data and head meta. Vercel 308-normalizes trailing-slash variants to no-slash, so the page itself resolves cleanly — but the *declared* canonical mismatches the *@id*. Pre-cutover blocker per Ticket 2.

---

## D.14 — Author and reviewedBy attributions on YMYL medical content

**Status: ⛔ MAJOR GAP.** 19 YMYL pages have no `reviewedBy` or `author` E-E-A-T signal.

**Pages with `reviewedBy` (good — anchored to Dr. An Nguyen):**
- All 8 mental-health subpages except trauma-treatment (via `MedicalWebPageSchema`)
- All 8 addiction subpages except gambling, sex (via `MedicalWebPageSchema`)
- All 9 adolescent subpages (inline reviewedBy)
- All 5 levels-of-care pages (inline reviewedBy)
- Dynamic `/resources/blog/[slug]` (inline reviewedBy)

**Pages MISSING `reviewedBy` (YMYL gaps):**

| Page | Schema status | E-E-A-T impact |
|---|---|---|
| `/mental-health/trauma-treatment` | No MedicalWebPage at all | HIGH — clinical condition page |
| `/addiction/gambling-addiction-treatment` | No MedicalWebPage | HIGH — clinical condition page |
| `/addiction/sex-addiction-treatment` | No MedicalWebPage | HIGH — clinical condition page |
| `/treatments/bridgework` | No reviewedBy | MEDIUM |
| `/treatments/cbt-cognitive-behavioral-therapy` | No reviewedBy | HIGH — clinical therapy |
| `/treatments/dbt-dialectical-behavior-therapy` | No reviewedBy | HIGH |
| `/treatments/dual-diagnosis-treatment` | No reviewedBy | HIGH |
| `/treatments/emdr-therapy` | No reviewedBy | HIGH |
| `/treatments/holistic-therapies` | No reviewedBy | MEDIUM |
| `/treatments/softwave-therapy` | No reviewedBy | MEDIUM |
| `/treatments/tms-therapy` | No reviewedBy | HIGH |
| `/treatments/trauma-therapy` | No reviewedBy | HIGH |
| `/resources/blog` (hub) | No reviewedBy | LOW (hub) |
| `/resources/cost-of-rehab` | No reviewedBy | MEDIUM |
| `/resources/detox-guide` | No reviewedBy | HIGH — medical detox info |
| `/resources/faq` | No reviewedBy | MEDIUM |
| `/resources/intervention-guide` | No reviewedBy | MEDIUM |
| `/resources/luxury-vs-standard-rehab` | No reviewedBy | LOW |
| `/resources/luxury-vs-traditional-rehab` | No reviewedBy | LOW |
| `/resources/mental-health-assessment` | No reviewedBy | HIGH — assessment content |
| `/resources/what-to-bring` | No reviewedBy | LOW |
| `/resources/page` (hub) | No reviewedBy | LOW (hub) |
| `/resources/addiction-detox-guide/antidepressants` | No reviewedBy | HIGH — drug-specific |

**Standalone blog pages** (`/blog/luxury-rehab-worth-it`, `/blog/dual-diagnosis-explained`, `/blog/signs-of-addiction`) emit `getArticleSchema` from `schema.ts` which has *no `reviewedBy` field*. Inconsistent with the dynamic `/resources/blog/[slug]` route. Either lift `reviewedBy` into `getArticleSchema`, or refactor standalone blog pages to use the inline pattern.

**Recommendation (sequenced):**
1. **HIGH-impact YMYL fixes (pre-cutover):** add `MedicalWebPageSchema` to the 3 condition pages currently missing it (trauma-treatment, gambling, sex). Mechanical — same call shape used on the 16 pages that have it.
2. **Treatment modality `reviewedBy` (pre-cutover):** add `MedicalWebPageSchema` (or inline reviewedBy) to all 9 `/treatments/*` modality pages. CBT/DBT/EMDR/TMS especially are high-traffic clinical-claim surfaces.
3. **Resources subpages reviewedBy (post-cutover OK):** detox-guide, mental-health-assessment, addiction-detox-guide/antidepressants are genuine YMYL — should have `reviewedBy`. Others (what-to-bring, luxury-vs-standard) are less critical.
4. **Standalone blog reviewedBy (post-cutover OK):** lift `reviewedBy` into `getArticleSchema` and pass `defaultReviewer` from `blog-defaults.ts`.

---

## Cross-references with prior Phase 2 tickets

- **Ticket 10 (WebPage + MedicalWebPage merge):** D.13.a is upstream — fix the canonical mismatch first, then Ticket 10 schema architecture rewrite.
- **Ticket 11 (Speakable policy):** D.3 deferred to that ticket.
- **Ticket 12 (Schema-thin pages):** D.2 and D.4 expand the Ticket 12 list — `/about`, `/resources` hub, `/resources/blog` hub all confirmed schema-thin.

---

## Pre-cutover punch list (criterion 1 closure)

To close `cutover-readiness-criteria.md` criterion 1 ("All audit phases close as PASS or WARN. Zero CRITICAL findings outstanding."), the following must ship:

1. **A6.a + A6.b (Q2 in queue)** — phoenix-php-iop wiring + adolescent-treatment MedicalProcedure
2. **D.13.a fix** — correct page-metadata keys for CBT/DBT/EMDR (3 layouts emit broken canonicals) — call this A10
3. **D.7 fix (A9)** — wire `<VideoSchemas path="..." />` on the 30 missing pages (excluding phoenix-php-iop which is in A6.a)
4. **D.4 + D.12 fix** — add canonical, OG, breadcrumb, basic schema to `/about` — call this A11
5. **D.14 high-impact fix** — add `MedicalWebPageSchema` to 3 missing condition pages + 9 treatment modality pages — call this A12
6. **D.11.a fix** — Twitter/X to Organization sameAs (one-line in `schema.ts`) — bundle into A11

Estimated PR count: 4 new PRs (A9, A10, A11, A12) + A6 already queued.

Estimated implementation: A9 mechanical (1 hour), A10 mechanical (15 min), A11 small (30 min), A12 medium (2 hours).

After these ship, Section D recloses as PASS.

---

## Lines of evidence

- 86 page.tsx files audited (`find src/app -name page.tsx | wc -l`)
- 37 page-metadata entries (`grep -c '^\s*"/.*":' src/data/page-metadata.ts`)
- 37 video-data entries (`grep '": \[' src/data/video-data.ts | wc -l`)
- 6 `<VideoSchemas>` usages (`grep -rn 'VideoSchemas' src/app/`)
- 50 FAQ schema usages (combined `InlineFAQSchema` + `getFAQSchema`)
- 75 BreadcrumbList usages
- 28 SpeakableSchema usages
- 16 MedicalWebPageSchema usages
- 0 AggregateRating, 0 Statistic, 0 standalone MedicalProcedure usages
