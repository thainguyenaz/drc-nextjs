# Ticket 17 — Blog content migration audit

**Date:** 2026-05-08
**Auditor:** Claude (read-only audit; no code modifications)
**Audit basis:** WordPress REST API (`https://desertrecoverycenters.com/wp-json/wp/v2/posts?per_page=100`) at audit time; drc-nextjs `main` at commit `7f2e60e`
**Connects to:** Phase 1 audit `pre-cutover-audit-2026-05-07.md` (Ticket 6 — 3 known hard-404 blog posts); cutover-readiness criterion 13 ("Blog content gap closed")

---

## TL;DR

**Status: ✓ NEARLY-CLOSED — only 3 GAPs, all of them already known.**

The audit's framing assumed the 3 hard-404 posts from Ticket 6 might indicate a broader migration gap. **Discovery contradicts that framing — the gap is exactly those 3 posts and no more.** The remaining 51 of 54 WP posts are either ported with redirect (7), redirected to a sibling blog post (30), or redirected to a topical section page (14). Criterion 13 closure requires only resolving the 3 known GAPs.

---

## Inventory

### WordPress source

- **Total posts:** 54 (all `status: "publish"`)
- **Date range:** 2025-01-02 to 2026-05-05
- **Pull method:** REST API, single page (`X-WP-Total: 54`, `X-WP-TotalPages: 1` on per_page=100)

### Next.js destination

- **Dynamic blog routes** (`/resources/blog/[slug]/` driven by `src/lib/blog.ts:21` `blogPosts: BlogPost[]`): **26 posts**
- **Standalone blog routes** (static `/blog/<name>/` pages): **3 posts**
  - `/blog/dual-diagnosis-explained`
  - `/blog/luxury-rehab-worth-it`
  - `/blog/signs-of-addiction`
- **Total Next.js blog routes:** 29

**Note:** The 3 standalone `/blog/*` routes are net-new Next.js content — none of those slugs appear in the WP inventory. They are not migration targets; they are new posts authored on Next.js.

### Redirects

`next.config.mjs` carries **108 redirect rules with `source: "/blog/<slug>"`** (counting trailing-slash and no-trailing-slash variants as separate entries). Deduplicated by source slug: ~54 unique sources, exactly matching the WP inventory size.

---

## Classification

Each of the 54 WP posts cross-referenced against (a) Next.js dynamic slugs in `blog.ts`, (b) standalone `/blog/*` routes, (c) `next.config.mjs` redirect rules.

| Category | Count | Definition |
|---|---|---|
| **MATCH+REDIRECT** | 7 | WP slug `X` has matching entry in `blog.ts` AND redirect `/blog/X` → `/resources/blog/X` exists. 1:1 port. |
| **REDIRECTED-to-sibling-blog** | 30 | WP slug `X` not in `blog.ts`; redirect `/blog/X` → `/resources/blog/<other-slug>` (consolidated to a topical sibling that does exist in `blog.ts`). |
| **REDIRECTED-to-section** | 14 | WP slug `X` not in `blog.ts`; redirect `/blog/X` → `/<other-section>/...` (e.g., `/mental-health/depression-treatment`, `/levels-of-care/detox`, `/adolescent-treatment`). |
| **GAP** | **3** | WP slug `X` not in `blog.ts`, not standalone, no redirect rule. Returns hard 404 on Next.js for `/blog/X` and `/resources/blog/X`. |

**Total: 54.** Reconciliation passes.

---

## The 3 GAP posts

All 3 GAPs are confirmed identical to **Ticket 6** (Phase 1 hard-404 blog posts). No new gaps surfaced during the broader audit.

| WP slug | Published | Title |
|---|---|---|
| `how-can-families-heal-after-years-of-chaos` | 2026-05-05 | How Can Families Heal After Years of Chaos? |
| `how-does-alcohol-interact-with-medications-for-mental-health-conditions` | 2026-04-28 | How Does Alcohol Interact with Medications for Mental Health Conditions? |
| `what-is-structural-family-therapy` | 2026-04-28 | What Is Structural Family Therapy? |

**Rule 1 sanity check passed:** Full-repo grep for each slug in `src/` and `next.config.mjs` returned zero matches. Truly missing — no hidden alternate route.

**Risk profile:** All 3 GAPs were published in the last 10 days (relative to audit date 2026-05-08). They are likely:
- Indexed by Google via the WP sitemap, or about to be (recent publish window)
- Receiving internal-link traffic from the WP `/blog` index page
- Lower-priority than evergreen high-traffic posts, but not zero-traffic

**Traffic data unavailable for this audit** — GA4 data was not consulted (out of audit scope; was flagged as needed-but-unavailable in the original Ticket 17 spec). Without traffic data, all 3 GAPs are treated as MEDIUM priority by default (recent publish + family/MH topical relevance + likely non-zero traffic).

---

## Discovery contradicts framing

The Ticket 17 spec framed the audit as testing a hypothesis: "The 3 hard-404 blog posts caught in Phase 1 (Ticket 6) suggest there may be a broader gap. Need authoritative data on the WP→Next.js blog inventory gap."

**Discovery confirms the hypothesis is false.** The blog migration is in much better shape than the framing assumed:
- 51 of 54 posts (94%) are handled — either ported (7) or redirected (44)
- The redirect coverage is comprehensive: 108 redirect rules cover both trailing-slash and no-trailing-slash variants of all redirected sources
- The 3 GAPs are exactly Ticket 6's 3 known posts; no new GAPs discovered

This is a scope-reduction finding for cutover-readiness criterion 13. The criterion can close after resolving these 3 known posts; no broader content-port effort is needed.

---

## Recommendations per GAP

For each GAP, three resolution options:

**Option A — Port content** (highest SEO retention; most effort)
Add a new entry to `src/lib/blog.ts` with full markdown content. Requires either porting the WP HTML to MDX/markdown shape, or rewriting. After port, add a `/blog/X` → `/resources/blog/X` redirect to `next.config.mjs`. SEO-equivalent to the current MATCH+REDIRECT pattern.

**Option B — Redirect to topical sibling** (medium SEO retention; low effort)
Add `{ source: "/blog/<wp-slug>", destination: "/resources/blog/<sibling-slug>" }` (and trailing-slash variant) in `next.config.mjs`. Captures inbound traffic; user lands on a topically related post. Same shape as the existing 30 REDIRECTED-to-sibling-blog entries.

**Option C — Redirect to section hub** (lowest SEO retention; lowest effort)
Same as Option B but destination is a hub like `/resources/blog` or `/mental-health/`. Same shape as the 14 REDIRECTED-to-section entries.

### GAP 1 — `how-can-families-heal-after-years-of-chaos`

**Theme:** Family healing after addiction-driven trauma.

**Topical siblings in `blog.ts`:**
- `how-drug-and-alcohol-addiction-impacts-families` (closest match — same family-impact theme)
- `how-to-talk-to-someone-about-going-to-rehab` (adjacent — family communication)

**Suggested Option B:** redirect to `/resources/blog/how-drug-and-alcohol-addiction-impacts-families`. Same parent topic, sibling already exists, low effort.
**Suggested Option C:** redirect to `/adolescent-treatment` (family-centric service hub).

### GAP 2 — `how-does-alcohol-interact-with-medications-for-mental-health-conditions`

**Theme:** Alcohol + mental-health medication interactions.

**Topical siblings in `blog.ts`:**
- `how-does-alcohol-abuse-impact-mental-and-physical-health` (closest match — alcohol/MH overlap)
- `anxiety-vs-depression-understanding-the-difference` (adjacent — MH conditions)

**Suggested Option B:** redirect to `/resources/blog/how-does-alcohol-abuse-impact-mental-and-physical-health`. Already the destination for several similar consolidated alcohol/MH posts (lines 249-272 of `next.config.mjs`).
**Suggested Option C:** redirect to `/mental-health` (MH hub).

### GAP 3 — `what-is-structural-family-therapy`

**Theme:** Specific family-therapy modality.

**Topical siblings in `blog.ts`:**
- `how-drug-and-alcohol-addiction-impacts-families` (closest match — family + therapy)
- `teen-mental-health-crisis-warning-signs-parents` (adjacent — family/teen)

**Suggested Option B:** redirect to `/resources/blog/how-drug-and-alcohol-addiction-impacts-families`. Same family-therapy umbrella.
**Suggested Option C:** redirect to `/treatments` (treatments hub) — but less ideal because structural family therapy is not on the modality list there.

### Cross-cutting recommendation

If GA4 data is consulted post-audit and any of the 3 GAPs shows meaningful organic traffic (>50 visits/month on the WP URL), prefer Option A (port) for that one. For GAPs with zero or near-zero traffic, Option B is the right balance of effort and signal preservation. Option C (hub redirect) only if neither A nor B fits.

**Default recommendation absent traffic data:** Option B for all 3, using the closest-sibling destinations listed above. Mechanical 6-line addition to `next.config.mjs` (3 sources × 2 trailing-slash variants).

---

## Cutover-readiness criterion 13 implications

Criterion 13 ("Blog content gap closed: every WordPress blog post with non-zero traffic exists on Next.js with same canonical slug, OR has an explicit redirect rule in `next.config.mjs` pointing to a topical sibling. Zero hard-404 blog URLs post-cutover.") is **3 redirect entries away from closing**.

If Option B is taken for all 3 GAPs:
- 6 lines added to `next.config.mjs` (with + without trailing slash for each source)
- Verification: curl all 3 source paths, confirm 308 → topical sibling
- Criterion 13 ✓ green

If Option A is taken for any GAP:
- Add full blog post to `blog.ts` (~50 lines per post)
- Add redirect line for that slug
- Same verification

This is a small PR (call it A13 if Option B for all 3, larger A13 if any are ported).

---

## Cross-references

- **Ticket 6** (Phase 1, `pre-cutover-audit-2026-05-07.md`): 3 hard-404 blog posts. **This audit confirms Ticket 6 captures the complete blog gap.** Ticket 6 can be closed once A13 ships.
- **Cutover-readiness criterion 13**: closes when A13 ships and curl-verification passes on the 3 source paths.
- `project_a5_followups.md` Ticket 6 entry should be updated to reference this audit and link to A13 once filed.

---

## Lines of evidence

- 54 WP posts pulled via REST API (`/tmp/wp_posts.json`, 1.7MB)
- 26 dynamic blog slugs from `src/lib/blog.ts` (`/tmp/nextjs_slugs.txt`, lines 23–1232 of blog.ts)
- 3 standalone routes from `ls src/app/blog/`
- 108 `/blog/*` redirect rules from `next.config.mjs:217-273+` (`/tmp/blog_redirect_pairs.txt`)
- Cross-reference output: `/tmp/blog_classification.json`
- Rule 1 (full-repo grep) on 3 GAP slugs: zero matches in `src/` or `next.config.mjs`

---

## Decision needed (halting here)

A13 scope decision per GAP — Option A (port) or Option B (redirect to sibling). Default recommendation is Option B for all 3 absent GA4 traffic data. After decision, A13 is a single small PR that closes criterion 13.
