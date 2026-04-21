# Session log — faq-dedupe-2026-04-20-2220

## 2026-04-20 → 2026-04-21 (branch state)

### What's done on this branch

**Phase 1 — original FAQ consolidation sweep** (commits `15a8441` → `4fdc626`, 26 commits)
Dedupe direction: every page with dual FAQ rendering had its inline `const faqs = [...]` array + `ConditionFAQ` component removed; `FAQSection` + shared `faqData` retained as single source of truth. Inline questions merged into `faqData[<key>]`. Affects 19 condition pages + 3 location pages + 2 treatment pages + homepage.

**Phase 2 — factual corrections** (commit `db4ec7b`, single commit)
10 targeted rewrites on `src/data/faq-data.ts`, each reviewed per-Q by Thai:
- Glendale Q2/Q3: removed false PHP/IOP claims (residential only)
- Glendale Q4: added partner-detox handoff clarification
- Glendale Q6: Dr. Topete reframed as Medical Director covering all AZ facilities (not Glendale-specific); unverified board-cert claim removed
- Scottsdale Q2/Q3: removed false PHP/IOP claims; "female residential" explicitly disclosed; partner-detox handoff added; condition list expanded to match Glendale's (equivalent clinical scope)
- Scottsdale Q6 + Homepage Q2: fixed "30 days" → "30 to 90 days" grammar/range bug
- Homepage Q7: removed unverified alumni claims (monthly events / check-in calls / private community); replaced with honest aftercare description
- Phoenix Q5 (NeuroStar TMS): adolescent FDA indication corrected to MDD-only (15-21); adult OCD clearance preserved; TRD parenthetical kept for SEO

**Verification:**
- `npx tsc --noEmit` — passes
- `npm run build` — passes
- All 19 condition pages render a single FAQ block (schema mainEntity == rendered count)
- PageSpeed mobile on branch: Homepage 88 / Fentanyl 96 / Glendale 86
- Accessibility 94-97; Best Practices 100; SEO 100

**Vercel preview:** https://drc-nextjs-git-faq-dedupe-2026-04-20-2220-thainguyenazs-projects.vercel.app

---

### What's pending (for next session)

1. **Thai final review of Vercel preview** — especially /locations/glendale, /locations/scottsdale, /locations/phoenix-php-iop, and the homepage FAQ.
2. **Merge to main** — deliberately not done; waiting on Thai's explicit approval.
3. **Near-duplicate dedupe sub-batch** — paused, not started. Known near-dup pairs to review:
   - `trauma-therapy` Q3 (EMDR) vs existing EMDR Q
   - `locations/phoenix` Q7 vs existing PHP-vs-IOP Q
   - `fentanyl-addiction-treatment` insurance pair
   - `ptsd-treatment` EMDR/timeline pairs
   - Scattered near-dups across other condition pages
4. **llms.txt post-dedupe update** — flagged acceptable for now but should be refreshed after merge.
5. **Post-merge content verification pass** — canary check of drc-nextjs.vercel.app before DNS cutover.

---

### Key pointers

- `src/data/faq-data.ts` is single source of truth for all FAQ content post-merge.
- `FAQSection.tsx` and `ConditionFAQ.tsx` both retained — `FAQSection` used site-wide, `ConditionFAQ` may still be used on pages outside the 19 condition scope (verify before any future deletion).
- Ground truth pinned for location copy:
  - Glendale = male residential only, no PHP/IOP, no detox (partner handoff)
  - Scottsdale = female residential only, no PHP/IOP, no detox (partner handoff)
  - Phoenix = PHP/IOP/TMS outpatient only, no residential
  - Dr. Reyes Topete, MD = Medical Director, covers multiple locations
  - Alumni program = contact list only currently; events/calls/community are future scope
  - NeuroStar TMS adolescent FDA = MDD only (15-21); adult = MDD, anxious depression with MDD, OCD
