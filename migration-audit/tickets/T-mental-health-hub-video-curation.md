# T-mental-health-hub-video-curation

**Status:** deferred (daylight task)
**Scope:** small to medium (1 file change, content curation prerequisite)
**Gating:** NON-blocking for cutover (per Thai 2026-05-31)
**Created:** 2026-05-31

## Background

The /mental-health/ hub page currently embeds 4 distinct YouTube videos across
6 embed slots, producing 2 duplicate renders:
- NEGnf9I1K2E appears in the 3-up grid AND in the "Mental Health Recovery at DRC" section.
- Q7hykWDiBSk appears in the 3-up grid AND in the "Your Path to Wellness" section.

The 4 distinct videos are: s5Xb6AyDNS4, NEGnf9I1K2E, Q7hykWDiBSk, nOBR_oQGTZU.

## Why deferred

Resolving this well requires:
1. Browsing the DRC YouTube channel to identify the best-fit videos per section.
2. Editorial judgment on which videos belong where, by content and clinical intent.
3. Deciding whether to add new videos to fill all 6 slots cleanly, or reduce the
   number of embed slots to fit the 4 existing videos.

None of this is engineering work; all of it is Thai's curation call and benefits
from being done in daylight rather than at the end of a long working session.

## Scope (when picked up)

- Inventory DRC YouTube videos relevant to each section.
- Decide per section: keep, replace, or remove the embed.
- Update src/app/mental-health/page.tsx with final video assignments.
- Verify each section has a unique video (no page-internal duplicates).
- Optional: review whether the 3-up grid section adds value or is noise.

## Acceptance Criteria

- Each video on /mental-health/ appears exactly once across all sections.
- Video selections are thematically aligned to each section heading.
- No page-internal duplicates.

## Out of Scope

- Other pages with video embeds (separate audit).
- Video schema (already emitted via <VideoSchemas>; no change needed).
