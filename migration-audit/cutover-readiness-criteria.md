# Cutover Readiness Criteria

**Date:** 2026-05-07
**Owner:** Thai
**Purpose:** Defines the conditions under which DNS cutover from WordPress apex to Next.js (Vercel) proceeds. Cutover is **not date-driven** — it is criteria-driven. The previously planned 2026-05-23 date is now superseded by this checklist.

---

## Readiness checklist

Cutover proceeds when **all** of the following are true:

1. **All audit phases (Sections A through I) close as PASS or WARN.** Zero CRITICAL findings outstanding.
   - NOT-GREEN 2026-05-27. Open: sub-task B (THIN-NX content gap, 3 pages) and Sections F/G/H execution. Closed: sub-task A (/alcohol-rehab/ hard-404).
     - Sub-task A CLOSED 2026-05-27: /alcohol-rehab/ hard-404, no 301. Evidence: GSC URL Inspection "unknown to Google", Last crawl N/A, no referring sitemaps; Performance 3-mo "Page contains alcohol-rehab" = 0 clicks / 0 impressions / empty queries. Residual direct-referral risk theoretical, caught reactively via criterion 9.
     - Sub-task B OPEN: content gap on /mental-health, /get-help, /addiction/alcoholism-treatment. Under investigation 2026-05-27 (gap re-verification + GSC traffic check in progress).
     - Sections F/G/H execution still pending.
2. **All open Tickets shipped** (currently 13, 14, 15, and any surfaced during Phases 4-9). No "blocked on content port" rules in `next.config.mjs`.
   - GREEN 2026-05-26 - Tickets 13, 14 shipped; Ticket 15 closed as won't-do (0 hits/30d, redirect to /resources in place); no blocked-on-content-port rules in next.config.mjs.
3. **Every lead-capture form on the site tested end-to-end.** Confirmed: form submits successfully, HubSpot contact created, and Admissions notified by email and Telegram. Test minimum: contact form, admissions form, insurance verification form, partner referral form, any landing-page form.

   _Note: Dazos integration is post-cutover, gated on HubSpot-assisted form migration. HubSpot remains in the live form-submit path until then._
   - PENDING-EXTERNAL 2026-05-26 - requires form E2E test (HubSpot contact + Admissions email/Telegram), verification in progress.
4. **Every internal link audited for 200 response** (not 308, not 404). No internal link should redirect-hop or break.
   - GREEN 2026-05-26 - blog.ts:98 links fixed (commit 6f33fe7); b6 Cat 3 finding and trailing-slash flags resolved; verified live, /get-help and /insurance both return HTTP 200 direct.
5. **Lighthouse scores on top 20 pages by traffic match or exceed WordPress baseline.** No regression on Performance, Accessibility, Best Practices, or SEO category scores.
   - PENDING-EXTERNAL 2026-05-26 - requires Lighthouse run vs WordPress baseline.
6. **JSON-LD Rich Results Test passes on every page template:** single-location, multi-location hub, treatment, addiction, mental-health, blog post, learning page, podcast, home, get-help, adolescent, levels-of-care, facilities, resources. Zero errors. Warnings documented and reviewed.
   - PENDING-EXTERNAL 2026-05-26 - requires Google Rich Results Test on page templates.
7. **llms.txt audited and updated** to reflect current site structure post-A6/A7/A8. Verified accurate for AEO/GEO ranking signals.
   - GREEN 2026-05-26 - llms.txt updated: 7 Key Pages, adolescent callout, Phoenix outpatient phone added (commit 7d65939); Leadership block em dashes removed; D.1 gaps closed.
8. **GMB NAP cross-reference complete.** All 3 location listings (Glendale, Scottsdale, Phoenix PHP/IOP) match siteData and JSON-LD exactly: business name, street address, phone number formatting.
   - PENDING-EXTERNAL 2026-05-26 - requires GMB NAP cross-check on 3 listings.
9. **Vercel 404 monitoring set up** and 24 hours of post-fix traffic shows zero unexpected 404s.
   - PENDING-EXTERNAL 2026-05-26 - requires Vercel 404 monitoring, 24h post-flip.
10. **DNS TTL set to the GoDaddy provider minimum of 600 seconds for at least 7 days before cutover, so rollback is reasonably fast if needed.** Note: GoDaddy enforces a hard 600s floor; a 300s TTL is not achievable on this provider.
    - GREEN 2026-05-26 - TTL confirmed at 600s via dig (GoDaddy provider minimum, 300s not achievable); 600s setting held since early-May cutover prep, well past the 7-day window.
11. **Rollback procedure documented and dry-run tested.**
    - NOT-GREEN 2026-05-26 - rollback documented but dry-run never executed.
12. **HubSpot form integration verified.** Every live HubSpot form on WordPress has a matching working implementation on Next.js. Test submission for each form confirms contact creation in HubSpot. Drip workflows continue firing without disruption.
    - PENDING-EXTERNAL 2026-05-26 - HubSpot form verification pending, see criterion 3.
13. **Blog content gap closed.** Every WordPress blog post with non-zero traffic exists on Next.js with the same canonical slug, OR has an explicit redirect rule in `next.config.mjs` pointing to a topical sibling. Zero hard-404 blog URLs post-cutover. — **✓ GREEN 2026-05-08** (closed by A13, commit `cd362bf`; audit `46896b1` confirmed the gap was 3 posts, all Option B redirected to topical siblings; 51 of 54 WP posts handled, 6 line additions to `next.config.mjs`).

When all 13 criteria are green, cutover proceeds on the next Tuesday morning Arizona time.

---

## Phase scope reference

The audit phases referenced in criterion 1 follow the structure below. Sections A, B, C are complete (see `pre-cutover-audit-2026-05-07.md`). Sections D through I are scheduled.

### Phase 4 — Section D (AEO/GEO expanded)

- D.1 — `llms.txt` freshness, accuracy, depth, AEO best practices
- D.2 — FAQ schema coverage on every page that should have it
- D.3 — Speakable schema coverage policy review (Ticket 11)
- D.4 — BreadcrumbList schema on every non-home page
- D.5 — HowTo schema on procedural content (admissions, insurance verification, intake)
- D.6 — Article and BlogPosting schema on blog/learning pages
- D.7 — VideoObject schema on every page with embedded video
- D.8 — Service and MedicalProcedure schema on treatment pages
- D.9 — Review and AggregateRating schema on testimonial surfaces
- D.10 — Statistic and Claim schema for evidence-based content
- D.11 — SameAs entity linking from Organization to social profiles, GMB, Wikidata, Crunchbase
- D.12 — Open Graph and Twitter Card meta on every page
- D.13 — Canonical URL declarations match `@id` values match sitemap entries
- D.14 — Author and reviewedBy attributions on YMYL medical content for E-E-A-T signal

### Phase 5 — Section E (lead capture and forms)

- E.1 — Test every lead-capture form end-to-end. Confirm submission arrives in Dazos.
- E.2 — Test every CTA button. Verify destination URL is correct and resolves 200.
- E.3 — Test every phone number link (`tel:` hrefs).
- E.4 — Test LiveChat widget loads and is functional.
- E.5 — Test CTM tracking number swapping is firing correctly.

### Phase 6 — Section F.0 (internal link audit)

Inserted before performance phase. Catches link-rot before users hit it.

- F.0.1 — Crawl every page on Next.js. Extract every internal link. Test each for 200 response.
- F.0.2 — Flag internal links that redirect via `next.config.mjs` rules — should be updated to direct canonical links.
- F.0.3 — Flag internal links that 404.
- F.0.4 — Output: comprehensive internal-link health report.

### Phase 7 — Section F (performance)

Lighthouse + Core Web Vitals comparison. Tied to criterion 5.

### Phase 8 — Section G (404 monitoring, expanded)

- G.1 — Vercel logs setup for production 404 capture
- G.2 — Daily 404 report (first 30 days post-cutover)
- G.3 — Simulate top-100 referrers from GA4 / GSC and verify 200 on each
- G.4 — Document escalation procedure when an unexpected 404 is detected

### Phase 9 — Section H (post-cutover validation)

GSC re-submit, sitemap ping, indexation tracking, search-console rich-results recheck.

### Section I — Full rollback plan

- I.1 — DNS rollback procedure (NS swap back to WP / apex provider)
- I.2 — 5-minute TTL pre-staging window (criterion 10)
- I.3 — Dry-run test plan
- I.4 — Cutover-day monitoring playbook

---

## How this supersedes prior dates

- The prior cutover target of **2026-05-23** is voided. References to that date in audit docs and tickets should read "TBD — cutover when readiness criteria met (see `cutover-readiness-criteria.md`)".
- "Land before cutover" sequencing in tickets remains valid; the binding constraint is now criteria-met, not calendar.
- Once criteria 1-13 are all green, cutover proceeds on the next Tuesday morning AZ time. The week-of-cutover decision is owner-discretionary.
