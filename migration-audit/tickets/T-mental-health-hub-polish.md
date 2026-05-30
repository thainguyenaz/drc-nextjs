# T-mental-health-hub-polish

**Status:** in progress
**Scope:** small (2 file changes: src/lib/site-data.ts + src/components/ConditionsGrid.tsx)
**Gating:** pre-cutover (criterion 1, Thread B.4 replacement)
**Created:** 2026-05-31

## Background

Thread B.4 of cutover criterion 1 originally tracked T-mental-health-rebuild,
an un-written ticket framed against the May 7 audit's 27% body-text deficit on
/mental-health/ (691 to 507 words). Per Thai's 2026-05-31 decision the 27%
deficit is deprioritized (hub-page-not-parity-target, matching the /get-help
precedent), so criterion 1 no longer blocks on B.4. This polish ticket replaces
T-mental-health-rebuild and addresses three concrete, documented gaps surfaced
during the B.4 investigation, scoped to ship cleanly before cutover.

## Shared-component note (3B)

The /mental-health/ hub and the homepage (src/app/page.tsx) both render the
shared <ConditionsGrid /> component, and both read siteData.mentalHealth.
Per Thai's 2026-05-31 decision (Option 3B), these fixes are applied at the
single source of truth and intentionally affect BOTH pages.

## Scope (3 fixes)

### Fix 1: Rename the "PTSD & Trauma" card to "PTSD"
- siteData.mentalHealth: rename card "PTSD & Trauma" to "PTSD".
- Rewrite its description to be PTSD-specific, drawn from the existing
  /mental-health/ptsd-treatment page content (not inferred). Trauma-modality
  framing moves to the new Trauma Therapy card (Fix 2).

### Fix 2: Add a "Trauma Therapy" card
- New siteData.mentalHealth entry, inserted after the PTSD card.
- name: "Trauma Therapy"
- href: "/treatments/trauma-therapy" (the Cluster A canonical, per
  T-trauma-cluster-canonical-decision; NOT the deprecated
  /mental-health/trauma-treatment URL, which now 301-redirects).
- description: grounded in the /treatments/trauma-therapy page content.

### Fix 3: Resolve the duplicate "Mental Health Treatment" heading
- The hub h1 (PageHero title) and the ConditionsGrid section h2 both read
  "Mental Health Treatment." The h2/eyebrow live in ConditionsGrid.tsx.
- ConditionsGrid.tsx: change the section h2 from "Mental Health Treatment" to
  "Conditions We Treat", and the eyebrow above it from "Conditions We Treat" to
  "Specialized Care".

## Acceptance Criteria

- siteData.mentalHealth contains 9 entries with Trauma Therapy included.
- /mental-health/ and / both render 9 condition cards.
- "PTSD" card present, "Trauma Therapy" card present, no "PTSD & Trauma" card.
- Trauma Therapy card href is /treatments/trauma-therapy.
- ConditionsGrid section h2 is "Conditions We Treat"; eyebrow is "Specialized Care".
- /mental-health/ h1 is still "Mental Health Treatment"; no h1/h2 identical-text collision.
- Anti-AI policy compliant on the two new descriptions and the two new headings.
- next build clean; production JSON-LD unchanged.

## Out of Scope

- Duplicate video embeds: tracked in T-mental-health-hub-video-curation.
- The 27% body-text deficit: deprioritized per Thai 2026-05-31 (hub-page-not-parity-target).
- Cluster A canonical / redirect details: tracked in T-trauma-cluster-canonical-decision.
- ConditionIcon switch: untouched; the PTSD and Trauma Therapy cards use the default icon (accepted per Thai 2026-05-31).
- Any condition-page-level content rewrites.
