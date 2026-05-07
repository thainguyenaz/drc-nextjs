# Cutover Readiness Criteria

**Date:** 2026-05-07
**Owner:** Thai
**Purpose:** Defines the conditions under which DNS cutover from WordPress apex to Next.js (Vercel) proceeds. Cutover is **not date-driven** — it is criteria-driven. The previously planned 2026-05-23 date is now superseded by this checklist.

---

## Readiness checklist

Cutover proceeds when **all** of the following are true:

1. **All audit phases (Sections A through I) close as PASS or WARN.** Zero CRITICAL findings outstanding.
2. **All open Tickets shipped** (currently 13, 14, 15, and any surfaced during Phases 4-9). No "blocked on content port" rules in `next.config.mjs`.
3. **Every lead-capture form on the site tested end-to-end.** Confirmed submission arrival in Dazos via the CTM → Dazos → Kipu attribution chain. Test minimum: contact form, admissions form, insurance verification form, partner referral form, any landing-page form.
4. **Every internal link audited for 200 response** (not 308, not 404). No internal link should redirect-hop or break.
5. **Lighthouse scores on top 20 pages by traffic match or exceed WordPress baseline.** No regression on Performance, Accessibility, Best Practices, or SEO category scores.
6. **JSON-LD Rich Results Test passes on every page template:** single-location, multi-location hub, treatment, addiction, mental-health, blog post, learning page, podcast, home, get-help, adolescent, levels-of-care, facilities, resources. Zero errors. Warnings documented and reviewed.
7. **llms.txt audited and updated** to reflect current site structure post-A6/A7/A8. Verified accurate for AEO/GEO ranking signals.
8. **GMB NAP cross-reference complete.** All 3 location listings (Glendale, Scottsdale, Phoenix PHP/IOP) match siteData and JSON-LD exactly: business name, street address, phone number formatting.
9. **Vercel 404 monitoring set up** and 24 hours of post-fix traffic shows zero unexpected 404s.
10. **DNS TTL set to 5 minutes for at least 7 days before cutover**, so rollback is fast if needed.
11. **Rollback procedure documented and dry-run tested.**

When all 11 criteria are green, cutover proceeds on the next Tuesday morning Arizona time.

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
- Once criteria 1-11 are all green, cutover proceeds on the next Tuesday morning AZ time. The week-of-cutover decision is owner-discretionary.
