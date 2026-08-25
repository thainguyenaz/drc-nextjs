# Compliance Standing Rules

Adopted 2026-08-25 (TRICARE claims remediation session). These bind every
content or compliance changeset in this repository, whether made by a human
or an agent.

1. **Census before copy.** Any compliance changeset produces an explicit
   file:line list reconciled against a full census BEFORE any wording is
   written. The owner approves the list before the copy is drafted.

2. **Rescan is the truth, not the list.** After applying, rescan the touched
   files AND the built HTML (`.next/server/app`) for the claim patterns. The
   pre-apply list is not trusted; the post-apply rescan is. Precedent: the
   landing-page badge sublabel ("In-Network Through TriWest", no TRICARE
   token on the line) survived every census grep and was caught only by the
   post-apply scan. The automated arm of this rule is
   `scripts/check-confirm.mjs`, which fails every Vercel build (production
   and PR previews) on unscoped payer-network claims; its test suite is
   `scripts/check-confirm.test.mjs`.

3. **Report removals.** Every rewrite reports what text was REMOVED, not
   just what was added. Compliance edits must not quietly delete conversion
   copy.

4. **No unsourced facts.** No factual claim ships without a named primary
   source and a retrieval date. A figure matching on digits is not sourced.

Ground truth for payer posture: TRICARE via TriWest is in-network for
residential treatment only. Every other payer relationship is
out-of-network; Medicare, Medicaid, and AHCCCS are not accepted.
