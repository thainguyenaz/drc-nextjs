# Ticket 18 — HubSpot Form Integration Audit

**Date:** 2026-05-08
**Scope:** Cutover-readiness criterion 12 — verify every live HubSpot form on WordPress has a matching working implementation on Next.js.
**Mode:** Read-only audit. No code changes proposed in this document.

---

## Executive summary

WordPress has **10 live HubSpot forms** (per WP plugin admin inventory).
Next.js has **3 HubSpot form GUID integrations** (all Portal `48050688`) across **2 form components**.

This is **many-to-few consolidation, not a 1:1 mapping** — the audit framing in criterion 12 ("every live HubSpot form has a matching implementation") assumed direct parity. Discovery shows the cutover plan deliberately retires several legacy LPs by collapsing them to non-form pages, while two LP families (`/partner-referral`, `/call-center-clone`) are pre-staged via redirects to **destinations that 404 today** and are expected to land via in-flight tickets 13, 14, 15.

**Cutover-blocking issues:** 2 (Partner Referral + Call Center, both blocked on Ticket 13).
**Intentional retirements:** 2 (Webinars LP + Drug & Alcohol Detox LP — main LP collapsed; Ticket 14 ports the thank-you sub-page only).
**Decisions needed:** 3 (Intervention Services LP, Get Help LP, Call Tracking) — see Section 5.
**Confirmed working:** 3 (Insurance Verification, New Contact Us, Get Help With Insurance).

---

## 1. Next.js form architecture (ground truth)

### Form components

| Component | Path | Submission method | Variants |
|---|---|---|---|
| `GetHelpForm` | `src/components/forms/GetHelpForm.tsx` | POST JSON → `/api/get-help` | `lp` (default), `contact` |
| `InsuranceVerificationForm` | `src/components/forms/InsuranceVerificationForm.tsx` | POST `multipart/form-data` → `/api/insurance-verification` | none |

Both components: client-rendered, Cloudflare Turnstile gate, honeypot field (`hp_check`), thank-you state inline.

### API routes (server-side HubSpot bridge)

| Route | File | HubSpot integration |
|---|---|---|
| `/api/get-help` | `src/app/api/get-help/route.ts` | Server-side POST → `https://api.hsforms.com/submissions/v3/integration/submit/{portal}/{form}` |
| `/api/insurance-verification` | `src/app/api/insurance-verification/route.ts` | Server-side POST → same HubSpot v3 endpoint |
| `/api/lead-notify` | `src/app/api/lead-notify/route.ts` | Proxy → `https://api.desertrecoverycenters.com/api/notifications/lead` (jarvis-api email + Telegram). Not a HubSpot route. |

Both HubSpot routes additionally fire Google Ads Enhanced Conversions (`uploadFormConversion`) and GA4 Measurement Protocol (`fireGa4Lead`) on success, plus secondary lead-notify webhook to jarvis-api.

### Configured HubSpot identifiers

| Variable | Source | Value |
|---|---|---|
| `HUBSPOT_PORTAL_ID` | hardcoded in `get-help/route.ts:9` | `48050688` (✓ matches `MEMORY.md` — `NA2/48050688` is the live portal as of 2026-04-26 rotation) |
| Portal also in `insurance-verification/route.ts:78` (URL inline) | hardcoded | `48050688` |
| `FORM_GUIDS.lp` (Get Help LP variant) | hardcoded `get-help/route.ts:11` | `0babced4-b58c-4981-a2ba-a7d8bfca6fa5` |
| `FORM_GUIDS.contact` (Get Help contact variant) | hardcoded `get-help/route.ts:12` | `e17b3a1d-6052-499e-8092-c1859c452c31` |
| Insurance Verification GUID | hardcoded `insurance-verification/route.ts:78` | `5fc5394d-3806-4291-a308-da475add5c6c` |

**Code smell — flag, do not fix in this audit:** `.env.local` has 4 matching `NEXT_PUBLIC_HUBSPOT_*` env vars (portal + 3 form IDs) whose values match the hardcoded constants exactly, but **no code reads them**. They are dead. This is a minor maintainability issue, not a routing risk. Consider switching to env-driven config in a follow-up so portal rotations don't require code edits.

### Page coverage (which Next.js routes render which form)

| Page | Form rendered |
|---|---|
| `/` (homepage) | `InsuranceVerificationForm` (dynamic import) |
| `/insurance` | `InsuranceVerificationForm` |
| `/get-help` | `InsuranceVerificationForm` ← name suggests GetHelpForm, but uses Insurance form |
| `/contact` | `GetHelpForm variant="contact"` |
| `/addiction-mental-health-treatment-facilities-lp` | `InsuranceVerificationForm` |
| `/addiction/stimulant-addiction-treatment` | `InsuranceVerificationForm` |

**`GetHelpForm variant="lp"` is configured but never invoked** by any page. The `lp` form GUID (`0babced4-...`) is the component default if no `variant` prop is passed, but every current invocation explicitly passes `variant="contact"`. Treat the lp GUID as wired-but-dormant — not dead, but functionally unused today.

---

## 2. WP → Next.js form mapping

| # | WP form name | Next.js implementation | Routing | Risk |
|---|---|---|---|---|
| 1 | Website - Get Help - With Insurance Fields | `InsuranceVerificationForm` (multiple pages) | HubSpot API GUID `5fc5394d-...` | LOW |
| 2 | DRC Partner Referral Form | **NONE** — `/partner-referral` redirects to `/partner-referral-vrc` which **does not exist as a Next.js route** | Pre-staged redirect, destination 404 today; **Ticket 13 pending** | **HIGH (cutover blocker)** |
| 3 | Website - Webinars - LP | **NONE** — `/webinars-lp` redirects to `/resources` (no form on destination) | Intentional LP retirement | LOW (intentional) |
| 4 | Website - Intervention Services - LP | **NONE** — only `/resources/intervention-guide` exists, which is a guide/FAQ page with no form. No redirect rule found in `next.config.mjs` for `/intervention-services-lp` or similar. | **Unknown — see Section 5** | **MEDIUM (decision needed)** |
| 5 | Website - Drug & Alcohol Detox - LP | **NONE** on main LP — `/drug-alcohol-detox-lp` redirects to `/levels-of-care/detox` (no form on destination). Sub-page `/drug-alcohol-detox-lp/thank-you` is queued via **Ticket 14** but does not exist yet. | Intentional main-LP retirement; thank-you sub-page pending | LOW (intentional, but Ticket 14 still owes the thank-you page) |
| 6 | New contact us form (Jun 19 2025) | `GetHelpForm variant="contact"` @ `/contact` | HubSpot API GUID `e17b3a1d-...` | LOW |
| 7 | Website - Call Center Form | **NONE** — `/call-center-clone` redirects to `/partner-referral-vrc` which **does not exist as a Next.js route** | Pre-staged redirect, destination 404 today; **Ticket 13 pending** | **HIGH (cutover blocker — same dependency as #2)** |
| 8 | Call Tracking | **Likely not a website form** — name suggests CTM (CallTrackingMetrics) integration with HubSpot, not a Next.js page form. No grep match in `src/`. | Out of scope for Next.js cutover if CTM-driven | **UNKNOWN — confirm with WP HubSpot dashboard whether this form has a website embed or is API-fed by CTM** |
| 9 | Website - Insurance Verification | `InsuranceVerificationForm` @ `/insurance` | HubSpot API GUID `5fc5394d-...` | LOW |
| 10 | Website - Get Help - LP | **None on a dedicated LP** — `/get-help` exists but renders `InsuranceVerificationForm`, not `GetHelpForm variant="lp"`. The lp form GUID is configured in code but no page calls it. | Form GUID dormant; LP page exists but renders a different form than the WP equivalent | **MEDIUM (intentional consolidation? or a gap)** |

---

## 3. Cross-reference matrix (compact)

```
WP form                                 →  Next.js form         →  HubSpot GUID
─────────────────────────────────────────────────────────────────────────────────
1. Get Help With Insurance Fields       →  InsuranceVerForm     →  5fc5394d-...   ✓
2. DRC Partner Referral                 →  (none — Ticket 13)   →  N/A            ✗
3. Webinars LP                          →  (retired)            →  N/A            ⊘
4. Intervention Services LP             →  (unknown)            →  N/A            ?
5. Drug & Alcohol Detox LP              →  (retired)            →  N/A            ⊘
6. New Contact Us (Jun 2025)            →  GetHelpForm contact  →  e17b3a1d-...   ✓
7. Call Center Form                     →  (none — Ticket 13)   →  N/A            ✗
8. Call Tracking                        →  (likely CTM-side)    →  N/A            ?
9. Insurance Verification               →  InsuranceVerForm     →  5fc5394d-...   ✓
10. Get Help LP                         →  (lp GUID dormant)    →  0babced4-...   ⚠

Legend: ✓ working   ✗ blocker   ⊘ intentional retirement   ? needs decision   ⚠ partial
```

---

## 4. Risk classification (cutover impact)

### HIGH — cutover blockers (2)
- **#2 DRC Partner Referral Form** — depends on Ticket 13 (`/partner-referral-vrc` Next.js page not yet built). Without the destination, `/partner-referral` 404s post-cutover and the partner referral channel goes dark.
- **#7 Website - Call Center Form** — same Ticket 13 dependency. `/call-center-clone` redirects to `/partner-referral-vrc` which doesn't exist.

### INTENTIONAL RETIREMENT (2)
- **#3 Webinars LP** — `/webinars-lp` → `/resources`. The LP form is gone by design; users reach webinar content through the Resources hub. **Risk: any HubSpot drip workflows tied to this form will stop firing post-cutover.** Verify in HubSpot whether this form drives any downstream automation.
- **#5 Drug & Alcohol Detox LP (main page)** — `/drug-alcohol-detox-lp` → `/levels-of-care/detox`. Same retirement pattern. Same risk: any drip workflow dependency. The thank-you sub-page is queued via Ticket 14 and is a separate concern.

### MEDIUM — decisions needed (2)
- **#4 Intervention Services LP** — no redirect rule, no Next.js form, only `/resources/intervention-guide` (FAQ page). Either:
  - (a) Treat as a documented retirement (add redirect rule + accept loss of form), OR
  - (b) Build a Next.js LP with form (defer cutover until landed).
  Recommend deciding before cutover.
- **#10 Get Help LP** — `/get-help` exists but renders Insurance form, not the WP "Get Help LP" form. The lp form GUID is wired in code but dormant. Either:
  - (a) Treat as intentional consolidation (document and accept the form-shape change), OR
  - (b) Switch `/get-help` to render `<GetHelpForm />` (uses lp variant by default), restoring the original lead-capture shape.
  Recommend deciding before cutover.

### UNKNOWN — needs verification (1)
- **#8 Call Tracking** — almost certainly a CTM-side integration (CallTrackingMetrics → HubSpot via API), not a website form embed. **Action:** verify in WP HubSpot dashboard whether this form has any embed code or is purely API-fed. If purely API-fed, it's out of scope for the website cutover.

### LOW — confirmed working (3)
- **#1 Get Help With Insurance Fields** — InsuranceVerificationForm
- **#6 New Contact Us** — GetHelpForm variant=contact
- **#9 Insurance Verification** — InsuranceVerificationForm

---

## 5. Audit-framing contradictions (Rule 5)

The cutover-readiness criterion 12 is framed as: *"Every live HubSpot form on WordPress has a matching working implementation on Next.js."* Discovery surfaced three structural mismatches the framing did not anticipate:

### 5.1 Many-to-few consolidation, not 1:1 parity
The cutover plan deliberately consolidates 10 WP forms into ~3 form shapes on Next.js. Several legacy LPs (Webinars, Drug & Alcohol Detox LP, possibly Intervention Services LP, possibly Get Help LP) are intentionally retired by redirecting to non-form pages. **Criterion 12 should be amended** to read something like: *"Every live HubSpot form on WordPress is either (a) preserved with a working Next.js implementation, OR (b) explicitly documented as retired with the destination page accepted as form-less."* As written, criterion 12 cannot pass — items #3, #5, possibly #4, #10 will permanently fail strict 1:1 parity.

### 5.2 HubSpot drip workflow continuity is not auditable from the repo
Criterion 12 also says *"Drip workflows continue firing without disruption."* Whether each retired form has downstream HubSpot workflows tied to it is **not visible from drc-website code** — that lives in HubSpot's portal admin. **Action:** Thai or admissions team to audit HubSpot portal `48050688` workflows for dependencies on the retired form GUIDs (Webinars LP, Drug & Alcohol Detox LP — and whatever GUIDs back forms #4, #8, #10 in WP). Without this audit, criterion 12 cannot be marked GREEN even after the Next.js side is verified.

### 5.3 Cutover-blocking dependency on tickets 13/14/15 is implicit, not surfaced in criterion 12
The next.config.mjs comments reveal that `/partner-referral`, `/call-center-clone`, `/drug-alcohol-detox-lp/thank-you`, `/on-demand-webinars` redirect to destinations that 404 today, awaiting Tickets 13/14/15. This is a real cutover blocker for forms #2 and #7. Criterion 12 doesn't currently reference Tickets 13/14/15, so its GREEN status is not visible from the criterion alone. **Recommend** explicitly listing Tickets 13/14/15 as criterion-12 dependencies.

---

## 6. Recommended next actions (not committed in this audit)

1. **Resolve Tickets 13, 14, 15 status.** If not started, schedule before cutover. Forms #2 and #7 are blocked on these.
2. **Make decisions on forms #4 (Intervention Services LP) and #10 (Get Help LP):** retire-and-redirect, or build/wire form.
3. **Verify form #8 (Call Tracking)** scope: WP embed or pure CTM/API? If embed, audit further; if API, out of scope.
4. **HubSpot portal admin audit (out-of-repo):** List drip workflows tied to each of the 10 form GUIDs. Confirm retired forms' workflows can stop firing without business impact.
5. **Amend cutover-readiness criterion 12** to accept documented retirements, and to explicitly cite Tickets 13/14/15 as dependencies.
6. **Code hygiene followup (low priority):** switch hardcoded HubSpot constants in `get-help/route.ts` and `insurance-verification/route.ts` to read from `process.env.HUBSPOT_PORTAL_ID` etc. — `.env.local` already has the values; the code just doesn't read them. Reduces risk of future portal-rotation drift.

---

## 7. Files inspected

- `src/components/forms/GetHelpForm.tsx`
- `src/components/forms/InsuranceVerificationForm.tsx`
- `src/app/api/get-help/route.ts`
- `src/app/api/insurance-verification/route.ts`
- `src/app/api/lead-notify/route.ts`
- `src/app/insurance/InsuranceContent.tsx`
- `src/app/page.tsx` (homepage)
- `src/app/get-help/page.tsx`
- `src/app/contact/ContactContent.tsx`
- `src/app/addiction-mental-health-treatment-facilities-lp/page.tsx`
- `src/app/addiction/stimulant-addiction-treatment/page.tsx`
- `src/app/resources/intervention-guide/page.tsx`
- `next.config.mjs` (redirect rules)
- `migration-audit/url-parity.md`
- `migration-audit/wp_redirects_clean.json`
- `migration-audit/wordpress-urls.txt`
- `migration-audit/cutover-readiness-criteria.md`
- `.env.local` (HubSpot env var presence — values not logged)

## 8. Methodology notes (Rule 1, Rule 5)

- **Full-repo grep for HubSpot routing** (Rule 1): `grep -ri "hubspot|hbspt|hsforms|js.hsforms.net|forms.hsforms.com" src/` — only 2 hits, both in API routes. No client-side embed scripts. No additional integrations elsewhere.
- **Full-repo grep for form components**: `grep -lE "<form\b|<Form\b|onSubmit=" src/` — only 2 form files (`GetHelpForm.tsx`, `InsuranceVerificationForm.tsx`). Other matches in src/components/* are UI primitives, not lead-capture forms.
- **Audit framing contradiction surfaced** (Rule 5): WP-form-count framing assumed 1:1; code reality is 10:3 consolidation. Documented in Section 5 rather than silently re-framed.
