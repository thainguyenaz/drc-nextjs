# B6: Internal Link Audit

**Date**: 2026-05-15
**Scope**: drc-website source tree at HEAD `e5f933b` (B5 Phase 1 /api/health endpoint)
**Workstream**: B6 - audit-only pre-cutover hygiene check
**Author tools**: grep + Python categorization helper at `/tmp/b6_phase1b_categorize.py`

---

## Executive summary

A full audit of internal hrefs in drc-website source found a clean codebase from a link-hygiene perspective. Of 128 internal href occurrences across 32 source files, 123 resolve to valid Next.js routes (96.1% pass rate). One stale WordPress-era path was found in blog post body content (`/insurance-verification/` in the BridgeWork post at `src/lib/blog.ts:98`), which 404s for any reader following the call-to-action. Two trailing-slash inconsistencies and three dynamic-route template-literal patterns were flagged for daylight cleanup. No generic broken targets, no slug-typo errors, and no anchor-link breakage were found. The single user-facing 404 (Cat 3 finding) pre-dates this audit and is not a B5 regression; cutover does not make it worse but it should be resolved pre-cutover if a redirect target can be chosen.

---

## Methodology

### What was audited

All internal href occurrences across `src/` matching one of:
- `<Link href="/...">` JSX (Next.js Link component)
- `<a href="/...">` raw anchor tags, including inline HTML strings inside TypeScript data files
- `href={` ` `/...` ` `}` template-literal expressions
- Absolute `https://desertrecoverycenters.com/...` hrefs (zero found)

Extensions scanned: `.tsx`, `.jsx`, `.ts`, `.js`.

Each href was normalized (query string and hash stripped) and compared against a route registry built by enumerating every `page.{tsx,jsx,ts,js,mdx}` file in `src/app/`.

### Route registry

- 87 page files total in `src/app/`
- 85 static routes
- 2 dynamic routes: `/resources/blog/[slug]`, `/team/[slug]`
- 1 Pages Router leftover surfaced incidentally: `src/pages/_error.tsx` (see [Out of scope](#out-of-scope))

### Categorization rules

1. Exact route match: PASS
2. Dynamic-route match (href starts with `/resources/blog/<x>` or `/team/<x>`): PASS, slug assumed valid
3. Not a match, and WP-era pattern hit: Category 3
4. Not a match, and first-2-path-segments match an existing route: Category 2
5. Not a match, no pattern hit, no 2-segment prefix match: Category 1
6. Anchor fragment (`#`) in href: Category 4 (pre-confirmed empty in Phase 1A)

### What was excluded with reasoning

- **MDX, JSON, MD data files**: Phase 1A confirmed zero internal hrefs in these formats (no matches for `href="/`, `"url": "/`, or `](/path)` patterns).
- **Anchor IDs**: Phase 1A confirmed zero internal hrefs use anchor fragments, so Category 4 was pre-confirmed empty and the anchor-ID enumeration step was skipped.
- **Trailing-slash hrefs**: per audit decision, surfaced into a separate daylight ticket rather than Category 1. Trailing-slash hrefs that resolve via deslash-form are cosmetic only; those that fail both ways are also flagged in the categorization tables.
- **Template-literal hrefs**: not traced across runtime values. Listed for manual review.
- **External outbound links**: out of scope for internal-link audit.
- **Slug validity for dynamic routes**: not verified. `/resources/blog/[slug]` matches any sub-path; whether each slug corresponds to an actual blog post is a separate audit.

---

## Findings table

| Category | Count | Cutover Blocker |
|---|---|---|
| PASSED (route exists) | 123 | n/a |
| Category 1: broken target | 0 | n/a |
| Category 2: wrong slug | 0 | n/a |
| Category 3: stale WordPress path | 1 | YES (1) |
| Category 4: anchor-link breakage | 0 (pre-confirmed) | n/a |
| Trailing-slash hrefs | 2 | no (cosmetic) |
| Template-literal hrefs (manual review) | 3 | no |
| **Total scanned** | **128** | |

---

## Detailed findings

### Category 3: stale WordPress paths

| Source | Href | WP Pattern Matched | Cutover Blocker |
|---|---|---|---|
| `src/lib/blog.ts:98` | `/insurance-verification/` | `/insurance-verification` | YES |

Context: BridgeWork blog post body. Line 98 reads (paraphrased): "You can also complete our [insurance verification](/insurance-verification/) to understand your coverage options". The href 404s on the current site. No `/insurance-verification` route exists in the registry. The form-submission pipeline lives at `/api/insurance-verification` (an API endpoint, not a page route) and is embedded elsewhere on the site.

Fix mechanism note: the href lives inside a string literal in a TypeScript data file (blog post body stored as inline HTML), not a JSX `<Link>` element. Edit the `<a href="...">` string directly.

Pre-existing finding: this has been broken since the BridgeWork post shipped, well before any B5 or B6 work. Cutover does not increase impact.

### Trailing-slash hrefs

| Source | Href | Note |
|---|---|---|
| `src/lib/blog.ts:98` | `/get-help/` | deslash-pass (cosmetic only - `/get-help` is a valid route) |
| `src/lib/blog.ts:98` | `/insurance-verification/` | also-cat3 (genuinely broken regardless of slash) |

Both findings are on the same blog.ts line as the Category 3 entry. The project uses `trailingSlash:false` (Next.js default). The `/get-help/` href likely works in production via Vercel normalization but is cosmetically inconsistent with the project convention.

### Template-literal hrefs (manual review)

| Source | Pattern |
|---|---|
| `src/app/resources/blog/BlogCategoryFilter.tsx:102` | `/resources/blog/${post.slug}` |
| `src/app/resources/blog/[slug]/page.tsx:175` | `/resources/blog/${r.slug}` |
| `src/app/resources/blog/[slug]/page.tsx:216` | `/resources/blog/${r.slug}` |

All three resolve to the dynamic route `/resources/blog/[slug]` at runtime. Functionally correct under the assumption that `post.slug` and `r.slug` originate from the blog data registry (which they do, based on the file paths and component contexts). Manual sanity check recommended; no immediate concern.

### Category 1, Category 2, Category 4: empty

No findings. Documented for completeness.

---

## Daylight tickets filed

| Ticket | Priority | Scope |
|---|---|---|
| T-b6-stale-wp-paths | MEDIUM | 1 finding, `src/lib/blog.ts:98` `/insurance-verification/`; choose redirect target then edit string |
| T-b6-trailing-slash-hrefs | LOW | 2 findings, both `src/lib/blog.ts:98`; coordinates with existing T-treatments-trailing-slash-canonical-cluster |
| T-b6-template-literal-hrefs-manual-review | LOW | 3 findings, all `/resources/blog/${slug}` patterns; trace data source to confirm slug validity |
| T-b6-pages-router-_error-cleanup | LOW | Pages Router leftover at `src/pages/_error.tsx`; delete when convenient |

---

## Recommendations

### Pre-cutover (desirable, not blocking)

- **T-b6-stale-wp-paths**: choose redirect target for `/insurance-verification/` and edit `src/lib/blog.ts:98`. Three candidate targets:
  1. `/insurance` (insurance carrier landing pages)
  2. `/get-help` (primary contact and form pipeline)
  3. New standalone `/insurance-verification` page wrapping the existing API endpoint

  Decision belongs in a daylight session, not a fatigue-window. This ticket can move from MEDIUM to closed pre-cutover or be deferred to post-cutover daylight cleanup. Both options are acceptable.

### Post-cutover (daylight cleanup)

- **T-b6-trailing-slash-hrefs**: bundle with T-treatments-trailing-slash-canonical-cluster for site-wide trailing-slash normalization pass.
- **T-b6-template-literal-hrefs-manual-review**: confirm dynamic-route slug sources, close ticket if all paths trace to blog data registry.
- **T-b6-pages-router-_error-cleanup**: delete `src/pages/_error.tsx` (and empty `src/pages/` directory if no other files remain) after verifying no imports reference it.

### Not recommended

- No file edits tonight. Audit-only commitment held.
- No fix-forward despite the user-visible 404 finding. The single Cat 3 entry pre-dates this session, is unchanged by cutover, and the fix requires a target-choice decision that belongs in daylight.

---

## Out of scope

- **Anchor-link breakage** (Category 4): pre-confirmed empty in Phase 1A; zero internal hrefs use `#` fragments.
- **Template-literal runtime tracing**: flagged for manual review only; not auto-traced.
- **External outbound links**: not in scope for internal-link audit.
- **Dynamic-route slug existence**: `/resources/blog/[slug]` and `/team/[slug]` matches treat any sub-path as PASS. Slug-to-content mapping is a separate audit.
- **CMS-side coordination for trailing slashes**: handled by existing T-treatments-trailing-slash-canonical-cluster.

---

## Audit deliverables

- This report: `docs/b6-link-audit-2026-05-15.md`
- TSV outputs for each category at `/tmp/b6_cat{1,2,3}_*.tsv`, `/tmp/b6_trailing_slash.tsv`, `/tmp/b6_template_literal.tsv`
- Route registry: `/tmp/b6_routes_static_only.txt` (85 static routes)
- Categorization helper: `/tmp/b6_phase1b_categorize.py`

No source files were modified. drc-website HEAD remains at `e5f933b`.
