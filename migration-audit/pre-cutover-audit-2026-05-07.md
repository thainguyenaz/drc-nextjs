# Pre-Cutover Audit — drc-nextjs vs WordPress apex

**Date:** 2026-05-07
**Cutover target:** 2026-05-23 (16 days)
**Auditor:** Claude (read-only audit; no code modifications)
**Audit basis:** Vercel deployment at commit `cb0eec3` (A5 shipped 2026-05-07); apex `desertrecoverycenters.com` still WordPress / a8c-cdn

---

## Section A — Redirect Coverage Audit

**Status: ⚠️ FAIL — 5 critical issues block cutover**

### A.0 Source provenance

| Source | Status | URLs ingested |
|---|---|---|
| GSC indexed pages export | NOT YET PROVIDED — flagged as follow-up | 0 |
| `https://desertrecoverycenters.com/sitemap_index.xml` (Yoast) | ✅ pulled 2026-05-07 06:33Z | 124 unique paths |
| GA4 top-100 organic | NOT YET PROVIDED — flagged as follow-up | 0 |

Working set: 124 unique WP paths from sitemap_index.xml across 11 sub-sitemaps (post: 55, page: 22, treatments: 19, addiction: 10, mental-health: 8, webinar: 3, wpseo_locations: 3, team-group: 2, geo: 1, wpautoterms_page: 1, team: 0). Provenance flag: `in_sitemap=true` for all rows in `/tmp/audit/cross_ref.tsv`. GSC + GA imports remain follow-ups.

### A.1 Coverage classification (124 WP paths)

| Classification | Count | Notes |
|---|---|---|
| ✅ Covered by `next.config.mjs` redirect rule | 87 | 216 total rules, 87 unique source matches against WP paths |
| ✅ 1:1 Next.js route exists | 33 | All 32 non-homepage 1:1 matches terminate at HTTP 200 (after Vercel's trailing-slash 308 normalization) — except `/treatments/12-step-program` (see A.2 #2) |
| ❌ Hard 404 on Next.js, no redirect | 4 | **BLEED RISKS** — see A.2 below |

### A.2 Critical findings (BLOCK cutover)

#### CRITICAL #1 — 3 blog posts hard-404 on Next.js

WordPress serves these as 200; Next.js serves 404 with no redirect rule and no entry in `src/lib/blog.ts`. Every backlink, GSC-indexed entry, and Google search result for these slugs will break post-cutover.

| WP URL (200) | Next.js status | Entry in `blog.ts`? |
|---|---|---|
| `/blog/how-can-families-heal-after-years-of-chaos/` | 404 | NO |
| `/blog/how-does-alcohol-interact-with-medications-for-mental-health-conditions/` | 404 | NO |
| `/blog/what-is-structural-family-therapy/` | 404 | NO |

The repo already has 30+ explicit `/blog/SLUG → /resources/blog/SLUG` passthrough rules at `next.config.mjs:147+`. These 3 slugs were missed.

**Fix options:**
- (a) Port content into `src/lib/blog.ts` and add a passthrough rule for each
- (b) Redirect each to `/resources/blog` (blog index) — preserves no specific entity but stops the bleed
- (c) Redirect each to a topically-related existing blog post (best for ranking continuity)

**Recommendation:** (a) for high-traffic posts (need GA data), (c) for medium, (b) for low. Decision deferred pending GSC/GA traffic numbers.

#### CRITICAL #2 — `/treatments/12-step-program` is broken right now (already-shipped bug)

`src/app/treatments/12-step-program/page.tsx` calls `redirect("/treatments")` from `next/navigation` at module top level. Under static prerender (route is `○ Static` per build output), this produces a **307 response with NO `Location` header** + 31kB of `__next_error__` HTML. Behavior in browsers: undefined (some show error, some render the body). For Googlebot: likely soft-404 / skipped indexing.

The URL is also listed in `src/app/sitemap.ts:71` at priority 0.7 — so we're advertising it to Google.

**Cache state:** `x-vercel-cache: HIT, age: 73` — broken response is cached and being served.

**Fix:** delete `src/app/treatments/12-step-program/page.tsx` and add the redirect to `next.config.mjs`:
```ts
{ source: "/treatments/12-step-program", destination: "/treatments", permanent: true },
{ source: "/treatments/12-step-program/", destination: "/treatments", permanent: true },
```
Also remove the line from `src/app/sitemap.ts`. (If the page deserves real content, replace `redirect()` with the actual page body instead.)

#### CRITICAL #3 — 6 redirect rules point to non-existent destinations

`next.config.mjs:87-92` redirect to `/treatments/php` and `/treatments/iop`, neither of which exist (both 404). The correct existing routes are `/levels-of-care/php` and `/levels-of-care/iop` (both 200).

```
Line 87: /programs/php          → /treatments/php   (DEST 404)
Line 88: /programs/php/         → /treatments/php   (DEST 404)
Line 89: /programs/iop          → /treatments/iop   (DEST 404)
Line 90: /programs/iop/         → /treatments/iop   (DEST 404)
Line 91: /treatment/iop         → /treatments/iop   (DEST 404)
Line 92: /treatment/iop/        → /treatments/iop   (DEST 404)
```

**Fix:** rewrite these 6 destinations from `/treatments/{php,iop}` → `/levels-of-care/{php,iop}`.

#### CRITICAL #4 — `/locations.kml` not served on Next.js

WordPress serves a KML geo file at `/locations.kml` (200, listed in `geo-sitemap.xml`). KML files are consumed by Google Maps / Google Earth integrations and some local-SEO tools.

**Disposition:** unclear if anything actively consumes it. **Suggested action:** confirm with the GMB / local SEO owner whether the KML is referenced anywhere external (e.g., embedded in a third-party directory listing). If yes, port to Next.js (`public/locations.kml` static file, regenerable from `siteData.locations[]`). If no, redirect to `/locations` and accept minor data loss.

### A.3 Redirect destinations validity (sweep of all 47 unique destinations)

✅ 45 of 47 unique redirect destinations terminate at HTTP 200 on Vercel.
❌ 2 destinations 404 — covered above (Critical #3).

### A.4 Trailing-slash 308 hop on every WP path

Every WP URL ends with trailing slash (Yoast convention). Vercel/Next.js normalizes by 308-redirecting trailing-slash → no-trailing-slash. So crawlers/users hitting any indexed WP URL post-cutover will incur ONE 308 hop before the 200. Acceptable but flagged — handled in **Ticket 2 (trailing-slash audit)** already filed.

### A.5 Phase 1 addendum — content equivalence on top-priority pages

Selection: top-20 by priority from `src/app/sitemap.ts` (priority 1.0–0.7) plus key conversion pages. **Selection is judgment-based, not GA-based** — recommend re-running this section with GA top-100 once available.

| WP path | WP words | Next.js words | Δ% | Flags |
|---|---:|---:|---:|---|
| `/` | 1142 | 2314 | +103% | (Next.js richer) |
| `/locations/glendale/` | 209 | 1011 | +384% | (Next.js richer; WP was thin) |
| `/locations/scottsdale/` | 260 | 983 | +278% | (Next.js richer) |
| `/locations/phoenix/` → `/locations/phoenix-php-iop` | 206 | 2140 | +939% | (Next.js richer) |
| `/mental-health/` | 691 | 507 | **-27%** | **THIN-NX**; form-missing |
| `/addiction-treatment/` | 483 | 559 | +16% | form-missing |
| `/treatments/` | 405 | 498 | +23% | form-missing |
| `/facilities/` | 291 | 453 | +56% | |
| `/levels-of-care/` | 40 | 1771 | +4328% | (WP was placeholder) |
| `/adolescent-treatment/` | 40 | 2017 | +4942% | (WP was placeholder) |
| `/get-help/` | 825 | 527 | **-36%** | **THIN-NX** |
| `/insurance-verification/` | 239 | 654 | +174% | |
| `/about-us/` | 823 | 719 | **-13%** | thinner; form-missing |
| `/our-team/` | 409 | 712 | +74% | form-missing |
| `/mental-health/anxiety-treatment/` | 1027 | 1077 | +5% | form-missing |
| `/mental-health/depression-treatment/` | 962 | 1114 | +16% | form-missing |
| `/addiction/alcoholism-treatment/` | 1743 | 1104 | **-37%** | **THIN-NX**; form-missing |
| `/addiction/heroin-addiction-treatment/` | 1423 | 1114 | **-22%** | thinner; form-missing |
| `/treatments/dual-diagnosis-treatment/` | 1016 | 817 | **-20%** | thinner; form-missing |
| `/treatments/tms-therapy/` | 40 | 1418 | +3445% | (WP was placeholder); form-missing |

#### Content-equivalence findings

**HIGH-priority thinning (`THIN-NX`, >25% loss) — 3 pages:**
- `/mental-health/` (-27%) — main MH hub
- `/get-help/` (-36%) — primary conversion page; **biggest concern of all thin pages**
- `/addiction/alcoholism-treatment/` (-37%) — high-volume SEO term

**Moderate thinning (10–25% loss) — 3 pages:**
- `/about-us/` (-13%)
- `/addiction/heroin-addiction-treatment/` (-22%)
- `/treatments/dual-diagnosis-treatment/` (-20%)

**form-MISSING-NX flag (12 pages):** WP HTML contains `<form>` elements that don't appear in the curl-rendered Next.js HTML.

⚠️ **Important caveat (per your Section E note):** this is a measurement artifact risk. Next.js commonly uses client-hydrated React form components that don't appear in the initial server-rendered HTML. The flag is **inconclusive** until verified in a real browser. Recommend: open one flagged page in a browser, check whether the form actually renders post-hydration. If yes, the flag is a false positive across all 12 pages. If no, it's a real conversion-path bleed (escalate to CRITICAL).

### A.6 Phase 1 SUMMARY

| | Status |
|---|---|
| WP paths covered by redirect/route | 120 / 124 (96.8%) |
| WP paths bleeding (404 with no redirect) | 4 (3 blogs + locations.kml) |
| Already-shipped broken Next.js routes | 1 (`/treatments/12-step-program`) |
| Redirect rules with broken destinations | 6 rules → 2 distinct broken destinations |
| Top-20 content-thinning issues (THIN-NX) | 3 pages |
| Moderate content thinning (>10%) | 3 pages |
| form-MISSING-NX (needs browser verify) | 12 pages (likely measurement artifact) |

---

## Section A — Phase 1 ADDENDUM 2: WordPress Redirection plugin gap

**Status: ⚠️ FAIL — hidden rules confirmed; full export REQUIRED**

### A.7 Existing migration-audit artifacts cross-ref

| Artifact | Date | Coverage |
|---|---|---|
| `migration-audit/redirects-final.json` (86 rules) | Apr 25 | ✅ All 86 sources ARE present in `next.config.mjs` (verified) |
| `migration-audit/wordpress-urls.txt` (144 URLs) | Apr 23 | ✅ All 24 `/team/*` slugs covered by Next.js `/team/[slug]` dynamic route; no other gaps vs. sitemap |

So as of the Apr 25 snapshot, the redirect set was migrated cleanly. The risk is rules added to WP Redirection plugin **after** Apr 25 (12 days ago) OR rules missed in the Apr 25 audit.

### A.8 Magnitude probe — hidden rules confirmed

Probed 43 candidate deprecated/legacy URL patterns against apex to estimate the size of the residual gap. **Found 3 hidden Redirection-plugin rules and 1 orphan content page** that aren't in any of our 3 source artifacts.

#### CRITICAL #6 — 3 hidden short-form location redirects on apex

These currently 301-redirect to canonical location URLs on WP. They will **hard-404** post-cutover unless added to `next.config.mjs`.

| WP URL (apex 301) | Apex destination | Vercel status |
|---|---|---|
| `/glendale` | `/locations/glendale/` | **404** |
| `/scottsdale` | `/locations/scottsdale/` | **404** |
| `/phoenix` | `/locations/phoenix/` | **404** |

Likelihood these have backlinks/branded-search index entries: high (short, brandable URLs).

**Fix:** add to `next.config.mjs`:
```ts
{ source: "/glendale", destination: "/locations/glendale", permanent: true },
{ source: "/glendale/", destination: "/locations/glendale", permanent: true },
{ source: "/scottsdale", destination: "/locations/scottsdale", permanent: true },
{ source: "/scottsdale/", destination: "/locations/scottsdale", permanent: true },
{ source: "/phoenix", destination: "/locations/phoenix-php-iop", permanent: true },
{ source: "/phoenix/", destination: "/locations/phoenix-php-iop", permanent: true },
```
(Note: `/phoenix` should land at `/locations/phoenix-php-iop` per A4/A5 canonical decisions, NOT `/locations/phoenix/` like WP currently does. The WP rule points at the WP page; the Next.js rule should point at the Next.js canonical.)

#### CRITICAL #7 — `/alcohol-rehab/` orphan content page

WP serves substantive content at `/alcohol-rehab/` (HTTP 200):
- Title: "Alcohol Rehab - Luxury mental health services and addiction recovery centers located in Phoenix Arizona"
- H1: "Effective alcohol use treatment in a high end Arizona facility"

This page is **NOT** in `sitemap_index.xml`, **NOT** in `wordpress-urls.txt`, **NOT** in `redirects-final.json`, **NOT** a Next.js route, has **NO** redirect rule. It will hard-404 post-cutover. This is exactly the orphan-traffic failure mode you flagged.

**Disposition:** verify with GSC export whether this URL has organic traffic / index entries. If yes:
- Option (a): redirect to `/addiction/alcoholism-treatment` (closest topical match)
- Option (b): port content if it's distinctly valuable
- Option (c): redirect to `/addiction-treatment` hub if generic

If GSC shows no impressions in 90 days, redirect to `/addiction/alcoholism-treatment` and move on.

### A.9 Why the magnitude probe is not sufficient

The probe found 4 hidden surfaces in 43 guesses (~9% hit rate on common patterns). Real WP Redirection plugin state likely has dozens more rules I can't discover by guessing. **The authoritative source is the live plugin export.**

Post-cutover, when DNS flips, the Redirection plugin stops firing entirely. Any rule that exists in WP and is not in `next.config.mjs` becomes a hard-404 on legacy URLs. This is the **#1 SEO failure mode for platform migrations**.

---

## Hand-off: Export WordPress Redirection plugin rules

**For:** WordPress admin (Thai or designate)
**Recipient file path:** `/home/openclaw/drc-website/migration-audit/wordpress-redirection-export.json`
**Time required:** ~3 minutes
**Blocking:** YES — Phase 2 audit and cutover both blocked until this lands

### Steps

1. Log in to WP admin: `https://desertrecoverycenters.com/wp-admin/`
2. Navigate: **Tools → Redirection**
3. Click the **Import/Export** tab (top of the Redirection page)
4. In the **Export** section:
   - Module: **WordPress** (covers all standard rules) — or "All groups" if available
   - Format: **JSON** (preferred) or **CSV** (acceptable)
5. Click **Download**
6. Rename the downloaded file to `wordpress-redirection-export.json`
7. Drop it into `/home/openclaw/drc-website/migration-audit/`

### Alternative if admin access is blocked

Database-level export (requires DB access, not admin):
```sql
SELECT url, action_data, action_type, action_code
FROM wp_redirection_items
WHERE status = 'enabled'
ORDER BY url;
```
Save as `wordpress-redirection-export.json` in the same path with this shape:
```json
[ { "source": "...", "destination": "...", "code": 301 }, ... ]
```

### What I'll do once the file lands

1. Parse all enabled rules
2. Cross-reference each `source` against `next.config.mjs` redirects + Next.js routes
3. Produce a `MISSING-FROM-NEXTCFG` list and an `ALREADY-COVERED` count
4. For each missing rule, propose an exact `next.config.mjs` entry to add
5. Re-classify the audit Section A status (currently FAIL; could move to PASS if the export reveals no surprises)

### Halt

**Phase 2 (Section B — structured data) is blocked behind this export.**

Even if the export takes 3 days to arrive, that's still 13 days before cutover — plenty of buffer. But every day this slips, the post-cutover bleed risk compounds with each new external link or GSC re-crawl.

---

## Section B — Structured Data Audit (Phase 2)

**Status: ⚠️ WARN — multiple inconsistencies; A6 scope expanded; 0 parse errors**

**Sample size:** 32 page-type representatives across 19 distinct templates (home, corporate-info, conversion, location-hub, location-page, levels-hub, levels-page, treatments-hub, treatment-page, addiction-hub, addiction-page, mh-hub, mh-page, adolescent-hub, adolescent-page, rehab-near-me, resources-hub, blog-index, blog-post). All pages fetched fresh from `drc-nextjs.vercel.app` post-A7 (commit `6fe32e1`).

### B.0 Headline numbers

- ✅ **0 JSON-LD parse errors** across all 32 pages (every block is valid JSON)
- ✅ **MedicalOrganization + Organization** present on every page (sitewide via `layout.tsx` → `getMedicalOrganizationSchema()`)
- ⚠️ **6 distinct structural inconsistencies** between same-template pages
- ⚠️ **2 pages emit divergent `#clinic`-fragment LocalBusiness `@id`** (Phoenix + adolescent-treatment) — A6 scope must expand
- ⚠️ **Speakable schema coverage is uneven** (12/32 pages have it, with no clear pattern)
- ⚠️ **Some pages emit both `WebPage` and `MedicalWebPage` as separate blocks** (redundant; should be a single `@type` array)

### B.1 Schema presence matrix

Counts represent the number of times a schema type appears across all pages in that template family.

| template          | MedOrg | Org | LocalBiz | MedClinic | MedWebPage | WebPage | Breadcrumb | FAQ | HowTo | Video | Person | Article |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| home              | 1 | 1 | · | · | · | 1 | · | 1 | 1 | 3 | · | · |
| corporate-info    | 3 | 3 | · | · | · | · | 2 | 2 | · | · | 7 | · |
| conversion        | 2 | 2 | · | · | · | · | 2 | 2 | · | · | · | · |
| location-hub      | 1 | 1 | · | · | · | · | 1 | · | · | · | · | · |
| location-page     | 4 | 4 | 3 | 3 | · | 3 | 4 | 3 | 1 | 2 | · | · |
| levels-hub        | 1 | 1 | · | · | 1 | · | 1 | 1 | · | · | · | · |
| levels-page       | 4 | 4 | · | · | 4 | · | 4 | 4 | · | · | · | · |
| treatments-hub    | 1 | 1 | · | · | · | · | 1 | 1 | · | 2 | · | · |
| treatment-page    | 4 | 4 | · | · | · | · | 4 | 4 | · | · | · | · |
| addiction-hub     | 1 | 1 | · | · | · | 1 | 1 | 1 | · | 2 | · | · |
| addiction-page    | 2 | 2 | · | · | 2 | · | 2 | 2 | · | · | · | · |
| mh-hub            | 1 | 1 | · | · | · | 1 | 1 | 1 | · | 2 | · | · |
| mh-page           | 1 | 1 | · | · | 1 | 1 | 1 | 1 | · | · | · | · |
| adolescent-hub    | 1 | 1 | **1** | **1** | · | 1 | 1 | 1 | 1 | · | · | · |
| adolescent-page   | 1 | 1 | · | · | 1 | 1 | 1 | 1 | · | · | · | · |
| rehab-near-me     | 1 | 1 | 3 | 3 | · | 1 | · | 1 | · | · | · | · |
| resources-hub     | 1 | 1 | · | · | · | · | · | · | · | · | · | · |
| blog-index        | 1 | 1 | · | · | · | · | · | · | · | · | · | 1 (Blog) |
| blog-post         | 1 | 1 | · | · | · | · | 1 | · | · | · | · | 1 |

### B.2 Findings inline per page family

#### B.2.1 Home `/`
- 8 blocks total. MedicalOrganization (sitewide), WebPage (with speakable), FAQPage, HowTo, 3 VideoObject, WebSite (the `#website` entity).
- All `@id` values present where expected.
- ✅ PASS

#### B.2.2 Corporate-info family (`/about-us`, `/our-team`, `/facilities`)
- `/about-us`: **only 1 JSON-LD block** (sitewide MedicalOrganization). **No BreadcrumbList, no AboutPage, no FAQPage.** Sister pages have BreadcrumbList + FAQPage. **Outlier.**
- `/our-team`: 10 blocks (BreadcrumbList, FAQPage, MedicalOrganization, 7 Person entries). Healthy.
- `/facilities`: 3 blocks (BreadcrumbList, FAQPage, MedicalOrganization). Healthy.
- ⚠️ WARN — `/about-us` schema thin

#### B.2.3 Conversion pages (`/get-help`, `/insurance-verification`)
- Both: 3 blocks (BreadcrumbList, FAQPage, MedicalOrganization). Consistent. ✅

#### B.2.4 Location-hub (`/locations`)
- 2 blocks only (BreadcrumbList, MedicalOrganization). **No FAQPage** — sister hubs (treatments, addiction-treatment, mental-health, levels-of-care) all have FAQPage.
- ⚠️ WARN — missing FAQPage

#### B.2.5 Location-page family
- `/locations/glendale`: 6 blocks. LocalBusiness `@id = …/glendale` (no fragment), `@type = ["LocalBusiness", "MedicalClinic"]`. Speakable ✓
- `/locations/scottsdale`: 6 blocks. LocalBusiness `@id = …/scottsdale` (no fragment), `@type = ["LocalBusiness", "MedicalClinic"]`. Speakable ✓
- `/locations/phoenix-php-iop`: 6 blocks. **LocalBusiness `@id = …/phoenix-php-iop#clinic` (FRAGMENT)**, **`@type = ["MedicalClinic", "LocalBusiness"]` (REVERSED)**. Speakable ✓.
- `/locations/phoenix-living`: **only 2 blocks** (BreadcrumbList, MedicalOrganization). **No LocalBusiness, no FAQPage, no WebPage, no Speakable.** Sister location pages have these.
- ⚠️ WARN — Phoenix `#clinic` divergence (already filed as Ticket 1/A6); `/locations/phoenix-living` schema thin

#### B.2.6 Levels-of-care family
- All 4 sub-pages and the hub use `MedicalWebPage` as the page type, with `@id = …/{path}/#webpage` (URL-fragment naming convention).
- Consistent within family. No Speakable on any. No LocalBusiness (correct — levels of care are services, not facilities).
- ✅ PASS (within family) — but ⚠️ WARN cross-family (none have Speakable)

#### B.2.7 Treatments family
- Hub `/treatments`: 5 blocks (BreadcrumbList, FAQPage, MedicalOrganization, 2 VideoObject).
- 4 modality pages (CBT, dual-diagnosis, TMS, EMDR): each emits 4 blocks including `MedicalTherapy` (good — semantic match for therapy modalities). `MedicalTherapy` is correctly applied here.
- ✅ PASS

#### B.2.8 Addiction family
- Hub `/addiction-treatment`: 6 blocks (BreadcrumbList, FAQPage, MedicalOrganization, WebPage, 2 VideoObject). Speakable ✓
- 2 sub-pages (alcoholism, heroin): each 5 blocks including `MedicalCondition` + `MedicalWebPage`. **No Speakable** despite being symptom-focused content. ⚠️ Inconsistent with hub which has Speakable.
- ⚠️ WARN — addiction-pages missing Speakable

#### B.2.9 Mental Health family
- Hub `/mental-health`: 6 blocks. Speakable ✓
- `/mental-health/anxiety-treatment`: 6 blocks including BOTH `MedicalWebPage` AND `WebPage` as separate blocks. Speakable ✓
- ⚠️ WARN — `MedicalWebPage` and `WebPage` on same page emitted as 2 separate blocks (should be one block with `@type: ["WebPage", "MedicalWebPage"]`)

#### B.2.10 Adolescent family
- Hub `/adolescent-treatment`: 6 blocks including **LocalBusiness + MedicalClinic with `@id = …/adolescent-treatment#clinic`** (NEW finding — see B.3).
- `/adolescent/depression`: 5 blocks. BOTH MedicalWebPage AND WebPage as separate blocks (same redundancy as B.2.9). Speakable ✓
- ⚠️ WARN — semantic question: should `/adolescent-treatment` (a service hub, not a physical facility) emit LocalBusiness at all?

#### B.2.11 Rehab-near-me `/rehab-near-me`
- 6 blocks: MedicalOrganization, 3 LocalBusiness (Glendale, Scottsdale, Phoenix), FAQPage, WebPage with Speakable.
- **No BreadcrumbList** (rare omission; sister content pages have one).
- ⚠️ WARN — missing BreadcrumbList; phoenix-living facility absent from this directory page (only 3 of 5 facilities listed)

#### B.2.12 Resources family
- `/resources`: 1 block only (sitewide MedicalOrganization). **No BreadcrumbList, no CollectionPage, no FAQPage.**
- `/resources/blog`: 2 blocks (MedicalOrganization, **Blog**). No BreadcrumbList.
- `/resources/blog/{slug}`: 3 blocks (MedicalOrganization, BreadcrumbList, **Article**). Good.
- ⚠️ WARN — `/resources` and `/resources/blog` schema thin

### B.3 EXPANDED A6 scope finding — `#clinic` fragment is on TWO pages, not one

| Page | LocalBusiness `@id` | `@type` order |
|---|---|---|
| `/locations/glendale` | `…/locations/glendale` *(no fragment)* | `["LocalBusiness", "MedicalClinic"]` |
| `/locations/scottsdale` | `…/locations/scottsdale` *(no fragment)* | `["LocalBusiness", "MedicalClinic"]` |
| `/locations/phoenix-php-iop` | `…/locations/phoenix-php-iop#clinic` ⚠️ | `["MedicalClinic", "LocalBusiness"]` ⚠️ |
| **`/adolescent-treatment`** | **`…/adolescent-treatment#clinic`** ⚠️ | **`["MedicalClinic", "LocalBusiness"]`** ⚠️ |
| `/rehab-near-me` Phoenix block | `…/locations/phoenix-php-iop` *(no fragment)* | `["LocalBusiness", "MedicalClinic"]` |

**Recommend A6 expand to BOTH pages** (Phoenix + adolescent-treatment). For adolescent-treatment specifically, also evaluate whether LocalBusiness/MedicalClinic emission is semantically correct — the page describes a service program, not a physical clinical address; might be better expressed as `MedicalSpecialty` or `MedicalProcedure` referring to the parent organization.

### B.4 Speakable schema coverage — uneven (12/32 = 37.5%)

Pages WITH Speakable: home, 3 location pages (NOT phoenix-living), addiction-treatment hub, mental-health hub, mental-health/anxiety-treatment, adolescent-treatment, adolescent/depression, rehab-near-me. (12 pages)

Pages WITHOUT Speakable: about-us, our-team, facilities, get-help, insurance-verification, locations hub, phoenix-living, all 5 levels-of-care pages, treatments hub + 4 modality pages, addiction sub-pages (alcoholism, heroin), resources, blog index, blog post. (20 pages)

**Pattern is unclear.** Some hubs have it, some don't. Some sub-pages have it, some don't. Worth a deliberate decision: which page archetypes should carry Speakable for voice-search/AEO, and apply uniformly.

⚠️ WARN — Speakable coverage inconsistent

### B.5 WebPage / MedicalWebPage redundancy

On `/mental-health/anxiety-treatment` and `/adolescent/depression` (and likely others not directly sampled here), the page emits BOTH:
- A `["MedicalWebPage"]` block (with `@id = …#webpage`, no speakable)
- A `["WebPage"]` block (no `@id`, with speakable)

These two blocks describe the same conceptual page and should be merged into ONE block with `@type: ["WebPage", "MedicalWebPage"]`. As-emitted, they're duplicated entities for crawlers and may be why Google's RRT counts may be inflated on some templates. This pattern likely originates from two different schema generators (`MedicalWebPageSchema` and `SpeakableSchema`) being called separately on YMYL pages.

⚠️ WARN — duplicate page entities (WebPage + MedicalWebPage as separate blocks)

### B.6 SUMMARY — Section B

| | Count |
|---|---|
| Pages audited | 32 |
| JSON-LD parse errors | **0** ✅ |
| Pages missing expected schema | 6 (`/about-us`, `/locations`, `/locations/phoenix-living`, `/resources`, `/resources/blog`, `/rehab-near-me` lacks Breadcrumb) |
| Pages with `#clinic`-fragment divergent `@id` | **2** (`/locations/phoenix-php-iop`, `/adolescent-treatment`) |
| Pages with redundant WebPage+MedicalWebPage | 2 confirmed (`/mental-health/anxiety-treatment`, `/adolescent/depression`); likely more in same templates |
| Pages with Speakable | 12/32 (uneven coverage) |
| Critical errors blocking cutover | **0** (all issues are WARN-level structural inconsistencies) |

### B.7 Recommended fixes — Section B

**HIGH (worth folding into A6):**
1. Strip `#clinic` fragment + reorder `@type` on **both** `/locations/phoenix-php-iop` AND `/adolescent-treatment` (was just Phoenix pre-Phase 2)
2. Decide whether `/adolescent-treatment` should emit LocalBusiness at all — if not, remove the block; if yes, emit it consistently with location-page pattern

**MEDIUM (separate ticket — Ticket 9 candidate):**
3. Add FAQPage to `/locations` hub (matches sister hubs)
4. Add BreadcrumbList to `/rehab-near-me`
5. Decide schema floor for `/about-us`, `/resources`, `/resources/blog` (currently each has only the sitewide Organization — minimum should add BreadcrumbList + per-template main entity)
6. Resolve WebPage / MedicalWebPage duplication (merge into single `@type` array; likely a 1-line fix in `MedicalWebPageSchema` generator + `SpeakableSchema` to coordinate)
7. Decide Speakable coverage policy and apply uniformly across template families

**LOW (out of pre-cutover scope):**
8. Phoenix-living schema floor (it's PHP residential housing, not a clinic — may legitimately have lighter schema)
9. Add LocalBusiness for phoenix-living to `/rehab-near-me` if it's a discoverable facility for users (currently 3 of 5 siteData locations are listed there)

### Phase 2 — Halt point

Section B done. **0 parse errors, 0 hard cutover blockers.** All findings are structural inconsistencies — important for SEO/AEO quality, but the site won't break post-cutover from any of them.

**A6 scope expansion confirmed:** Phoenix `#clinic` divergence is on 2 pages, not just 1. Worth widening A6 to fix both before cutover.

---

## Section C — NAP Consistency Audit (Phase 3, in-site)

**Status: ✅ PASS (in-site cross-ref) / ⏸ PENDING (GMB cross-ref hand-off)**

### C.1 Source of truth — `siteData.locations[]` (5 entries)

| # | Name | Address | Phone | Phone (E.164) |
|---|---|---|---|---|
| 0 | Glendale | 8105 W Frier Dr, Glendale, AZ 85303 | (623) 323-1012 | +16233231012 |
| 1 | Scottsdale | 23222 N Church Rd, Scottsdale, AZ 85255 | (480) 931-3617 | +14809313617 |
| 2 | Phoenix PHP/IOP | 4160 N. 108th Ave, Phoenix, AZ 85037 | (602) 905-8070 | +16029058070 |
| 3 | Phoenix TMS | 4160 N. 108th Ave, Phoenix, AZ 85037 | (602) 905-8070 | +16029058070 |
| 4 | Phoenix PHP Living | 1623 W Moody Trail, Phoenix, AZ 85041 | (602) 905-8070 | +16029058070 |

3 distinct phone numbers, 4 distinct addresses (Phoenix PHP/IOP and Phoenix TMS share the same building at 4160 N. 108th Ave).

### C.2 In-site cross-reference

| Surface | Phone(s) shown | Match `siteData`? |
|---|---|---|
| Footer (`Footer.tsx:71`) | (480) 931-3617 | ✓ (used as general line per llms.txt convention) |
| `public/llms.txt:7-10` | All 3 numbers + 4 addresses listed per location | ✓ |
| `public/llms.txt:49` | (480) 931-3617 (general) | ✓ |
| JSON-LD LocalBusiness blocks (3 location pages) | Per-location phones | ✓ (verified via Phase 2 inventory) |
| JSON-LD MedicalOrganization (sitewide) | (480) 931-3617 | ✓ |

✅ **All in-site surfaces match `siteData.locations[]`**. No phone/address typos detected.

### C.3 Format normalization flags

The codebase contains two phone-display formats:
- `(623) 323-1012` (parens-and-space) — used in metadata descriptions, JSON-LD `telephone` field, footer
- `623-323-1012` (dashes-only) — used in some marketing copy (e.g., `addiction-mental-health-treatment-facilities-lp` page)

Plus the E.164 form (`+16233231012`) used in `tel:` href attributes (correct for click-to-call).

⚠️ **WARN — minor format inconsistency.** Google's NAP-consistency signal expects identical formatting across surfaces. The `(623) 323-1012` form is canonical (matches GMB display convention); the dashes-only form should be normalized. Low-priority pre-cutover; bulk find-and-replace candidate.

### C.4 GMB cross-reference — HAND-OFF NEEDED

**Cannot complete from CLI** — requires GMB admin access to pull the NAP listed on each of the 3 verified Google Business Profile listings.

**For:** GMB owner (`desertrecoverycenters@gmail.com` per memory `project_gbp_oauth_status.md`)

**Action:** for each of the 3 GBP listings (Glendale, Scottsdale, Phoenix PHP/IOP), capture the displayed:
- Business name
- Street address
- Phone number

Drop into a JSON file at `/home/openclaw/drc-website/migration-audit/gmb-nap-snapshot.json` shape:
```json
[
  { "facility": "Glendale", "gmb_name": "...", "gmb_address": "...", "gmb_phone": "..." },
  { "facility": "Scottsdale", "gmb_name": "...", "gmb_address": "...", "gmb_phone": "..." },
  { "facility": "Phoenix PHP/IOP", "gmb_name": "...", "gmb_address": "...", "gmb_phone": "..." }
]
```

I'll diff against `siteData.locations[]` and surface any mismatch.

### C.5 SUMMARY — Section C

| | Status |
|---|---|
| In-site NAP consistency (footer, JSON-LD, llms.txt, page metadata) | ✅ PASS |
| Phone format normalization | ⚠️ WARN — 2 formats coexist; low priority |
| GMB cross-reference | ⏸ PENDING — needs GMB admin export |
| Critical pre-cutover blockers | **0** |

NAP itself is solid in-site; only the GMB external-source comparison is outstanding. Ticket-13 candidate: `gmb-nap-snapshot.json` import.

---

## Phase 1 — Halt point

Reporting per your instruction. Critical fixes identified before cutover:

### CRITICAL — must fix before cutover (7 distinct fixes)
1. **3 blog posts** — port or redirect (need traffic data to choose)
2. **`/treatments/12-step-program`** — replace runtime `redirect()` with `next.config.mjs` rule + delete page file + remove from sitemap.ts
3. **6 redirect rules** at `next.config.mjs:87-92` — fix destination paths
4. **`/locations.kml`** — confirm consumer; port or redirect to `/locations`
5. **3 THIN-NX content pages** — restore content from WP versions: `/mental-health/`, `/get-help/`, `/addiction/alcoholism-treatment/`
6. **3 hidden short-form location redirects** — `/glendale`, `/scottsdale`, `/phoenix` (currently 301 on apex via WP Redirection plugin; will 404 post-cutover) — add to `next.config.mjs`
7. **`/alcohol-rehab/` orphan content page** — verify with GSC, then redirect to `/addiction/alcoholism-treatment` (or port content)

### HARD BLOCK — pending external action
- **WordPress Redirection plugin export** — required before Phase 2 audit can complete and before cutover can proceed. Hand-off procedure documented in this report. Magnitude probe found 4 hidden surfaces in 43-URL sample (~9% hit rate); real gap likely dozens more rules.

### NEEDS VERIFICATION
- `form-MISSING-NX` flag on 12 pages — open one in a real browser to confirm whether forms hydrate post-load. Cheap test, high information value.

### Imports outstanding (to refine future audit phases)
- GSC indexed pages export → re-run cross-reference; may surface URLs not in sitemap_index.xml (orphan pages, query-string variants)
- GA4 top-100 organic export → re-rank thinning concerns by actual traffic; the 3 THIN-NX pages may not all be top-traffic; conversely, some thin pages NOT in my top-20 may be high-traffic and currently invisible to this audit

### Standing by

Phase 2 (Section B — structured data audit) ready to launch on your go-ahead. **A6 PR not yet shipped** — Section B will document current state and call out A6 as the listed fix for Phoenix `#clinic` divergence.

Halt.
