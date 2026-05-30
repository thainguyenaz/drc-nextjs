# T-trauma-cluster-canonical-decision

**Status:** decided, implementation in progress
**Scope:** small to medium (canonical decision + redirect)
**Gating:** NON-blocking for cutover
**Created:** 2026-05-31
**Decided:** 2026-05-31 (Thai) — Option B

## Background

drc-nextjs has three trauma-adjacent pages with overlapping clinical territory:
- /mental-health/ptsd-treatment (faqData["ptsd-treatment"], distinct content)
- /mental-health/trauma-treatment (faqData["trauma-therapy"])
- /treatments/trauma-therapy (faqData["trauma-therapy"])

Per batch5-faq-inventory.md:15, faqData["trauma-therapy"] renders identically on
/mental-health/trauma-treatment AND /treatments/trauma-therapy (the Cluster A
duplicate-content issue flagged in the May 7 audit, recommendation line 836: pick
a canonical URL, drop the duplicate render). /mental-health/ptsd-treatment is a
distinct PTSD-specific page and is NOT part of the duplicate render.

## Decision: Option B

**/treatments/trauma-therapy is canonical. /mental-health/trauma-treatment
301-redirects to it.**

### Rationale (evidence at decision time)

- The site already treats trauma-therapy as the trauma canonical: next.config.mjs
  has /trauma -> /treatments/trauma-therapy (permanent).
- Inbound internal-link equity favors trauma-therapy: ~20 editorial href
  references (including global Navigation and 5 sibling treatment pages) vs
  /mental-health/trauma-treatment, which had no editorial inbound links (only
  sitemap.ts + video-data.ts referenced it). It was effectively orphaned.
- Lowest disruption: redirecting the orphaned page away requires updating only
  sitemap + video-data, not the navigation or content cross-links.
- Schema typing: both trauma pages are MedicalTherapy (modality). ptsd-treatment
  is MedicalCondition (condition), so merging into ptsd (Option D) was a semantic
  mismatch and rejected.

## Implementation (this sequence, Commit 2)

1. next.config.mjs: add permanent 301 for /mental-health/trauma-treatment and the
   trailing-slash variant, both to /treatments/trauma-therapy.
2. src/app/sitemap.ts: remove the /mental-health/trauma-treatment entry.
3. src/data/video-data.ts: remove the /mental-health/trauma-treatment keyed block.
4. Do NOT delete src/app/mental-health/trauma-treatment/page.tsx. Next.js 14.2.35
   runs next.config.mjs redirects() at the routing layer before the app-router
   page is matched, so the 301 fires and the page route is never reached.

## Acceptance Criteria

- /mental-health/trauma-treatment returns 301 to /treatments/trauma-therapy.
- /treatments/trauma-therapy returns 200 with content intact.
- No two pages render identical faqData blocks (the duplicate pair is resolved by
  the redirect; ptsd-treatment was already distinct).
- No sitemap entry for the redirected URL.
- Hub cards link to the canonical URL only (handled in T-mental-health-hub-polish).

## Out of Scope

- Other Cluster A/B/C duplicate-content issues (separate audit).
- Content rewrites on the canonical page.
