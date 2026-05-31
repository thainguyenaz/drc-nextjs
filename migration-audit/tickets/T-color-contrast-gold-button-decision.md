# T-color-contrast-gold-button-decision

**Status:** open, deferred to daylight session
**Scope:** medium to large (brand visual decision + mechanical migration)
**Gating:** NON-blocking for cutover
**Created:** 2026-05-31

## Background

Tonight's Lighthouse audit flagged three color-contrast patterns failing WCAG AA
on the drc-nextjs public site. Two were mechanical text-color fixes and shipped
this session (see "Cross-reference" below). The third, the gold call-to-action
button, is held back here because it is a brand visual decision, not a safe
mechanical swap.

The pattern: solid bg-gold (#C4973A) with text-white renders at about 2.68:1
contrast. WCAG AA needs 4.5:1 for body text and 3.0:1 for large text. The gold
button text fails even the large-text bar.

## Why deferred

Changing the primary CTA color is a brand and conversion decision. It needs Thai
sharp plus a design review, not an hour-15 mechanical class swap. The gold button
is the main conversion surface across the whole site, so a wrong call here is
visible everywhere and risks the contrast fix looking off-brand or hurting
click-through.

## Scope of the deferred work

65 occurrences of solid bg-gold with text-white across 46 files, almost all
primary CTAs: "Get Help", "Call (602) ...", "Verify Insurance", "Explore
Facility", form submit buttons, and the sitewide Navigation CTA (desktop and
mobile). Two related forms also exist and are listed for completeness:

- bg-gold/90 translucent badges with text-white: 3 occurrences (BridgeWork.tsx,
  FacilityPageContent.tsx, treatments/bridgework/page.tsx). Same contrast issue.
- hover:bg-gold hover:text-white (gold background only on hover): 2 occurrences
  (TeamSection.tsx, contact/ContactContent.tsx). Fails only on hover, transient.

Full file list lives in tonight's enumeration. The 46-file solid set is the core
work.

## Decision points needed

1. Text color on gold. Replace text-white with a dark brand token. text-forest
   (#1C2B1E) is the in-system dark color and gives strong contrast on gold. cream
   and sage are too light or mid to help.
2. Or change the gold value itself. Darkening the gold token (currently #C4973A,
   gold-dark is #A97E2E) so white text passes. Note bg-gold-dark with white is
   about 3.0:1, still under the 4.5 body-text bar, so a deeper value is needed.
   This token is consumed by 124 files / 882 gold-utility occurrences, so a token
   change ripples far past the buttons (headings, dividers, borders, accents).
3. Or rethink the button treatment entirely (outline, different fill, etc.).

Pick one direction before any migration. Option 1 (dark text on existing gold)
is the most contained: it touches only the button sites and leaves the brand gold
unchanged.

## Cross-reference

Shipped this session in the same contrast workstream (commit a11y: WCAG AA
contrast fixes):
- text-gray-400 to text-gray-600 sitewide (18 occurrences, 13 files)
- text-white/40 to text-white/70 on real text (4 occurrences: Footer copyright
  and legal-link wrapper, PhoenixPHP disclaimer, Adolescent disclaimer)
- hover:text-white/60 to hover:text-white/90 on the 3 Footer legal-link hovers

SVG decorative icons at text-white/40 (Hero.tsx, BridgeWork.tsx,
treatments/bridgework/page.tsx) were intentionally left untouched. Decorative
non-text, different contrast rules, subtle design intent.
