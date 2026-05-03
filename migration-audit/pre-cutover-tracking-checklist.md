# Pre-Cutover Tracking Pipeline Checklist

**Created:** Saturday May 2, 2026 (end of session)
**For execution:** Monday May 4, 2026 onward
**Cutover target:** Saturday May 23, 2026 (21 days)
**Owner:** Thai Nguyen (CEO)

---

## Why this checklist exists

The conversion attribution pipeline is built and hooked up correctly in code, but has a known mismatch in Google Ads UI configuration that causes 67% conversion rejection (per memory entry verified 2026-05-02). The fix is partly code, partly Google Ads UI, partly verification testing.

This must ship cleanly BEFORE May 23 cutover. The day WordPress traffic switches to Next.js is the day rejection becomes a real revenue problem.

**Sign-off owner for each section:** Thai Nguyen (CEO)

---

## Section 1 — Architecture verification (CODE-ONLY, ~30 min)

### 1.1 — GCLID middleware capture
File: src/middleware.ts
- [ ] Cookie name: _dr_gclid
- [ ] Cookie max-age: 90 days
- [ ] Cookie httpOnly: true, secure: true, sameSite: lax
- [ ] Captured ONLY on first visit if cookie not already set
- [ ] PHI query params stripped before any processing

### 1.2 — API route attribution flow
Files: src/app/api/get-help/route.ts, src/app/api/insurance-verification/route.ts
- [ ] Reads _dr_gclid cookie from incoming request
- [ ] Falls back to null if absent
- [ ] Calls uploadFormConversion() with gclid + email + phone + formType
- [ ] Does NOT block form submission on conversion-upload failure

### 1.3 — Server-side upload module
File: src/lib/tracking/google-ads.ts
- [ ] Uses google-ads-api SDK
- [ ] Hashes email + phone via SHA-256
- [ ] Skips if !gclid (reason: no_gclid)
- [ ] Skips if env vars missing (reason: missing_env)
- [ ] 5-second timeout
- [ ] partial_failure: true, validate_only: false

### 1.4 — Required env vars (set in Vercel Production)
- [ ] GOOGLE_ADS_CUSTOMER_ID (8827139349)
- [ ] GOOGLE_ADS_LOGIN_CUSTOMER_ID (3090071362)
- [ ] GOOGLE_ADS_DEVELOPER_TOKEN
- [ ] GOOGLE_ADS_CLIENT_ID
- [ ] GOOGLE_ADS_CLIENT_SECRET
- [ ] GOOGLE_ADS_REFRESH_TOKEN
- [ ] GOOGLE_ADS_CONVERSION_ACTION_GET_HELP (currently 7585142764)
- [ ] GOOGLE_ADS_CONVERSION_ACTION_INSURANCE (currently 7585191106)

DO NOT paste values into chat. Just verify each is set with non-empty value in Vercel.

---

## Section 2 — KNOWN BROKEN: Conversion action type fix (~30-60 min)

### 2.1 — Identify wrong-type actions in Google Ads UI
Tools → Conversions → click 7585142764 and 7585191106
Expected wrong state: Source = "Website" / "Webpage"
Required correct state: Source = "Imported" or "Offline"

- [ ] 7585142764 current type: ___
- [ ] 7585191106 current type: ___

### 2.2 — Decision: Path A (Imported) or Path B (drop server-side)

Path A (recommended): Reconfigure as Imported
- Server-side upload becomes valid, ad-blocker resilient, GCLID-cookie attribution works
- Loses click→pageview website attribution

Path B: Keep Website type, drop server-side upload
- Simpler architecture
- Vulnerable to ~30% ad blockers, no GCLID-cookie attribution

- [ ] Decision documented: Path ___

### 2.3 — Path A execution

Cannot just change source type on existing action. Must create NEW:

1. Google Ads → Tools → Conversions → New conversion action
   - Source: Import → "Other data sources or CRMs" → "Track conversions from clicks"
   - Name: "Get Help Form (Imported)" / "Insurance Verification (Imported)"
   - Value: $500 Get Help, $1000 Insurance Verification
   - Count: One per click
   - Click-through window: 90 days
   - Attribution: Last click

- [ ] New "Get Help Form (Imported)" → ID: ___
- [ ] New "Insurance Verification (Imported)" → ID: ___

2. Update Vercel env vars to new IDs:
- [ ] GOOGLE_ADS_CONVERSION_ACTION_GET_HELP → new
- [ ] GOOGLE_ADS_CONVERSION_ACTION_INSURANCE → new
- [ ] Trigger Vercel redeploy

3. Pause OLD actions (don't delete):
- [ ] 7585142764 set to Inactive
- [ ] 7585191106 set to Inactive

4. Update memory:
- [ ] migration-audit/cutover-state.md created/updated with new IDs

---

## Section 3 — Auto-tagging verification (~5 min)

Without auto-tagging, ZERO GCLIDs flow to your site.

Google Ads → Admin → Account settings → Tracking
- [ ] Auto-tagging: Enabled

Validation: click your own ad in fresh incognito, check DevTools → Cookies for _dr_gclid
- [ ] _dr_gclid cookie set after ad click test

---

## Section 4 — End-to-end test with real GCLID (~30-45 min)

### 4.1 — Test setup
Option A: Click your own real ad ($0.50-2.00 cost). Best.
Option B: Synthetic ?gclid=test_TestGclid_2026_05_04 — tests cookie + form flow only, NOT upload acceptance (synthetic gclids get rejected by Ads API).

### 4.2 — Get-Help form test
- [ ] Incognito, click ad / paste URL
- [ ] _dr_gclid cookie set
- [ ] /get-help, fill TEST data (Test User Cutover Audit, 555-555-0001, test+cutover-audit@desertrecoverycenters.com)
- [ ] Submit
- [ ] Vercel logs show uploadFormConversion called
- [ ] Google Ads → Tools → Conversions → new action → upload received within 4-6 hrs
- [ ] Status: Accepted, not Rejected

### 4.3 — Insurance Verification form test
Same pattern via /insurance form

### 4.4 — Phone conversion test (CTM path, separate from gtag/Ads API)
- [ ] CTM set to fire Google Ads conversion when call quality meets criteria
- [ ] Adam tags test call as Qualified (4-5★)
- [ ] Google Ads conversion fires within 24 hrs

### 4.5 — Rejection rate check (24-48 hrs after testing)
Google Ads → Tools → Conversions → Diagnostic tab
- [ ] Rejection rate <5% (was 67%)
- [ ] If still >10%, investigate reason codes

---

## Section 5 — Pre-cutover final validation (May 21-22)

### 5.1 — Sample size validation
- [ ] 5+ form submissions tested with real GCLIDs over prior 2 weeks
- [ ] 3+ phone conversions tested via CTM
- [ ] Rejection rate <5%
- [ ] Conversion values match ($500 / $1000)

### 5.2 — DNS cutover readiness sign-off
- [ ] Conversion action types correct (Imported)
- [ ] Vercel env vars all set in Production
- [ ] Auto-tagging confirmed enabled
- [ ] Server-side upload tested end-to-end
- [ ] Rejection rate <5% on recent test data
- [ ] CTM phone path tested
- [ ] Memory updated with all conversion action IDs and types

### 5.3 — Cutover-day monitoring plan
- [ ] Watch Vercel logs for uploadFormConversion errors first 24 hrs
- [ ] Check Google Ads conversion volume hourly first 6 hrs after DNS flip
- [ ] If volume drops >50% from baseline, suspect tracking issue → investigate immediately

---

## Section 6 — Documentation handoff

- [ ] Final conversion action IDs documented
- [ ] migration-audit/cutover-state.md created/updated
- [ ] Note Google Ads UI changes made
- [ ] Striventa visibility into final state confirmed

---

## Open follow-ups not in this checklist

- Schema pattern consolidation (post-cutover, low ROI)
- UHC consumer brand logo (if available via UHC partner channel)
- Hero.tsx animate-bounce → motion-safe variant (5.0d follow-up)
- Trailing-slash redirect entries shadowed by global rule (Tier 1 Block A follow-up)
- Tier 1 Block B (canonical tags audit) — separate session
- Batch 5.1 (Dr. Nguyen content fixes) — separate session, send Dr. Nguyen "still good?" email first
- Tier 1 Block C (noindex removal) — May 22, 24h pre-cutover
- Migration-audit folder cleanup (decide commit/gitignore/delete)
- Inventory doc update for Flag 4 false positive

---

**Last updated:** 2026-05-02 by Claude session
**Next session opener:** "Continuing from May 2 — read migration-audit/pre-cutover-tracking-checklist.md and execute Section 1"
