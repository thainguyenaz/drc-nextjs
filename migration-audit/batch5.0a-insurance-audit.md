# Batch 5.0a Phase A — Insurance Language Audit

Generated: 2026-05-02
Repo state: drc-nextjs @ 50132c1 (Batch 5.0 — surgical YMYL fixes)
Source of truth: **Commercial insurance = OUT-OF-NETWORK. TriCare + TriWest = IN-NETWORK.**
Authority: Thai (CEO) confirmed network status 2026-05-02 post-Batch-5.0 smoke test.

## Summary

- Total surfaces with insurance-related claims: **~75** (across ~40 files)
- **Category 1 (False in-network claims, MUST FIX)**: **19 surfaces**
- **Category 2 (Vague misleading "we accept", MUST FIX)**: **~45 surfaces** (10 addiction/* pages share an identical CTA + FAQPage schema pair = 20; rest are unique)
- **Category 3 (TriCare/TriWest mentions, VERIFY)**: **11 surfaces** (all factually true; some paired with Cat 1 sentences — the commercial portion needs fixing, the TriCare/TriWest portion stays)
- **Category 4 (Verify-benefits CTAs)**: **~35 standalone CTAs** (mostly fine in isolation; flagged where adjacent to Cat 1/2 text)
- **Category 5 (Schema/metadata)**: **6 surfaces** (1 MedicalClinic `paymentAccepted` field + 5 page metadata descriptions). All FAQPage JSON-LD that re-emits Cat 1/2 text is captured under those categories.
- Total Phase B fixes anticipated: **60-70 unique text changes** across **~40 files**

### Source-of-truth replacement language (for Phase B reference)

| Slot | Approved replacement |
|---|---|
| **LONG FORM** (insurance pages, dedicated copy blocks) | Desert Recovery Centers works with most major commercial insurance plans on an out-of-network basis — many of which provide significant coverage for our level of care. We are also in-network with TriCare and TriWest. Our admissions team will verify your specific benefits at no cost and walk you through what your coverage looks like. |
| **TIGHT FORM** (FAQ answers, hero sections) | Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, and is in-network with TriCare and TriWest. Our admissions team verifies your benefits at no cost. |
| **Q&A "What insurance do you accept?"** | For commercial insurance, we work on an out-of-network basis with major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and others. Many out-of-network plans provide significant coverage for our level of care. We are also in-network with TriCare and TriWest. Our admissions team will verify your specific benefits at no cost and walk you through what your coverage looks like. |
| **CASH-PAY VARIANT** (where surface mentions cash-pay) | Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, is in-network with TriCare and TriWest, and offers cash-pay options. Our admissions team will verify your specific benefits at no cost. |

---

## Category 1: False In-Network Claims (MUST FIX — HIGH PRIORITY)

> **Regulatory exposure**: federal No Surprises Act, Joint Commission accreditation, LegitScript certification, patient-lawsuit basis. Each of these surfaces affirmatively asserts DRC is in-network with one or more commercial carriers — false per source of truth.

### Surface 1.1 — `src/data/faq-data.ts:276` (homepage Q3, JSON-LD + visible AEO block)
- Surface type: shared FAQ data file consumed by `/` (homepage) via `faqData["homepage"]` → `getFAQSchema` JSON-LD + `AEOBlock` visible HTML
- Current text: `"Yes, Desert Recovery Centers accepts most major private and commercial insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and Humana. DRC is also in-network with Tricare and TriWest. Coverage varies by plan, the admissions team verifies benefits at no cost."`
- Severity: **HIGH** — homepage FAQ JSON-LD seen by every Google crawl
- Approved replacement: **Q&A form** (preserves the TriCare/TriWest in-network mention)

### Surface 1.2 — `src/app/locations/glendale/page.tsx:87` (inline ConditionFAQ Q&A)
- Current text: `"Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost before you begin treatment."`
- Severity: **HIGH** — Glendale location page Q&A
- Approved replacement: **TIGHT FORM**

### Surface 1.3 — `src/app/locations/scottsdale/page.tsx:83` (inline ConditionFAQ Q&A)
- Current text: `"Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost before you begin treatment."`
- Severity: **HIGH**
- Approved replacement: **TIGHT FORM**

### Surface 1.4 — `src/app/rehab-near-me/page.tsx:91` (inline ConditionFAQ Q&A + getFAQSchema)
- Current text: `"Yes, all DRC locations are in-network with the same major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost."`
- Severity: **HIGH** — also emits as JSON-LD via `getFAQSchema`
- Approved replacement: **TIGHT FORM**

### Surface 1.5 — `src/app/compare/luxury-rehab-arizona/page.tsx:26` (inline ConditionFAQ Q&A)
- Current text: `"Costs vary significantly depending on the facility, length of stay, and level of care. However, many luxury programs, including Desert Recovery Centers, are in-network with major insurance providers. This means your out-of-pocket cost may be significantly lower than the sticker price. Coverage varies by plan. Contact us to verify your benefits at no cost."`
- Severity: **HIGH** — also affects "out-of-pocket cost may be significantly lower" implication
- Approved replacement: **CASH-PAY VARIANT** (this Q is about cost) — but the answer needs custom rewrite preserving cost-discussion frame; defer to Thai for exact text in Phase B

### Surface 1.6 — `src/app/compare/luxury-rehab-arizona/page.tsx:237` (FAQPage JSON-LD schema)
- Current text: `{ question: "How much does luxury rehab cost in Arizona?", answer: "Luxury rehab costs in Arizona vary by facility and length of stay. Many programs, including Desert Recovery Centers, are in-network with major insurance providers (Aetna, BCBS, Cigna, UnitedHealthcare), which can significantly reduce out-of-pocket costs. Contact DRC at (480) 931-3617 for a free, confidential insurance verification." }`
- Severity: **HIGH** — Google-visible JSON-LD
- Approved replacement: rework with **CASH-PAY VARIANT** framing; defer to Thai for exact text

### Surface 1.7 — `src/app/compare/drc-vs-apn/page.tsx:38` (inline ConditionFAQ Q&A)
- Current text: `"Desert Recovery Centers is in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits at no cost. We recommend verifying insurance coverage with any facility you are considering."`
- Severity: **HIGH** — comparison page implies DRC has in-network advantage
- Approved replacement: **TIGHT FORM**

### Surface 1.8 — `src/app/insurance/InsuranceContent.tsx:7` (visible UI card on /insurance)
- Current text (card label): `{ name: "Cigna", desc: "In-network coverage for residential, PHP, and IOP programs." }`
- Severity: **HIGH** — visible card claiming carrier-specific in-network status
- Approved replacement: change `desc` to `"Out-of-network coverage available; many plans cover our level of care. We verify benefits at no cost."` (Phase B confirms exact card-length wording)

### Surface 1.9 — `src/app/insurance/InsuranceContent.tsx:8` (visible UI card on /insurance)
- Current text (card label): `{ name: "Aetna", desc: "In-network behavioral health benefits accepted across all facilities." }`
- Severity: **HIGH**
- Approved replacement: same card-length OON wording as 1.8

### Surface 1.10 — `src/app/insurance/InsuranceContent.tsx:11` (visible UI card on /insurance)
- Current text (card label): `{ name: "Humana", desc: "In-network coverage for mental health and addiction treatment." }`
- Severity: **HIGH**
- Approved replacement: same card-length OON wording

### Surface 1.11 — `src/app/resources/faq/page.tsx:22` (Q&A "What types of insurance do you accept?")
- Current text: `"Desert Recovery Centers is in-network with most major insurance providers, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and many more. Our admissions team will verify your benefits at no cost and walk you through your coverage before you begin treatment."`
- Severity: **HIGH** — master FAQ page; visible accordion + master AEO surface
- Approved replacement: **Q&A form**

### Surface 1.12 — `src/app/resources/detox-guide/page.tsx:35` (inline ConditionFAQ Q&A)
- Current text: `"Yes, most major insurance plans cover medically necessary detoxification services. Desert Recovery Centers is in-network with many major insurance providers, and our admissions team will verify your benefits and explain your coverage at no cost before you begin treatment. We work to minimize out-of-pocket costs and eliminate financial barriers to care."`
- Severity: **HIGH** — detox-specific page
- Approved replacement: **TIGHT FORM** (with detox-coverage framing kept)

### Surface 1.13 — `src/app/resources/addiction-detox-guide/antidepressants/page.tsx:47` (inline ConditionFAQ Q&A)
- Current text: `"Most major insurance plans cover medically supervised antidepressant discontinuation when it is part of a broader mental health or dual diagnosis treatment program. Desert Recovery Centers is in-network with many major insurance providers, and our admissions team will verify your benefits and explain your coverage at no cost before you begin."`
- Severity: **HIGH**
- Approved replacement: **TIGHT FORM** (with antidepressant-coverage framing kept)

### Surface 1.14 — `src/app/addiction-mental-health-treatment-facilities-lp/page.tsx:35` (LP page inline Q&A + getFAQSchema)
- Current text: `"Desert Recovery Centers is in-network or works with most major commercial plans, including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, and TRICARE. We offer free insurance verification and will tell you your out-of-pocket cost before you commit to anything."`
- Severity: **HIGH** — Ads landing page, conversion-critical, also in JSON-LD
- Note: groups TRICARE in commercial-carriers list — TRICARE in-network claim is true but needs separation
- Approved replacement: **Q&A form**

### Surface 1.15 — `src/app/insurance/blue-cross/page.tsx:114` (educational copy, hedged claim)
- Current text: `"HMO plans generally require you to use in-network providers and may require a referral from your primary care physician before beginning treatment. Coverage for out-of-network facilities is typically limited. Our team can help determine if DRC is in-network with your BCBS HMO plan."`
- Severity: **MEDIUM** — hedged, not affirmative, but the closing sentence implies DRC may be in-network with some BCBS plans
- Approved replacement: replace last sentence with `"DRC is out-of-network with BCBS commercial plans (we are in-network with TriCare and TriWest). For BCBS HMO members, that typically means out-of-network coverage is limited. Our team will verify your specific benefits at no cost."`

### Surface 1.16 — `src/app/adolescent/depression/page.tsx:78` (raw FAQPage JSON-LD `text` field)
- Current text: `"Desert Recovery Centers is in-network with Tricare and TriWest. We work with most major commercial insurance carriers and can verify your benefits before admission. We do not accept Medicaid or Medicare."`
- Severity: **MEDIUM** — TriCare/TriWest portion is TRUE; "We work with most major commercial insurance carriers" is vague-misleading because it doesn't say OON
- Approved replacement: `"Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, and is in-network with TriCare and TriWest. We do not accept Medicaid or Medicare. Our admissions team verifies your benefits at no cost."`

### Surface 1.17 — `src/app/adolescent/depression/page.tsx:107` (inline Q&A duplicate of 1.16)
- Current text: same as 1.16
- Severity: **MEDIUM**
- Approved replacement: same as 1.16

### Surface 1.18 — `src/app/insurance/aetna/page.tsx:52` (page hero description prop)
- Current text: `description="Aetna is one of the most widely accepted insurance providers for addiction treatment. Here is what you need to know about using your Aetna benefits for rehab in Arizona."`
- Severity: **MEDIUM** — implies DRC accepts Aetna (true only as OON); "widely accepted" is industry-true but reader will infer DRC accepts in-network
- Approved replacement: `"Aetna is one of the most widely held insurance plans in Arizona. Desert Recovery Centers works with Aetna on an out-of-network basis. Here is what you need to know about using your Aetna benefits for rehab in Arizona."`

### Surface 1.19 — `public/llms.txt:16` (AI-readable site description)
- Current text (line in bullet list of facts about DRC): `"- Tricare/TriWest in-network"`
- Severity: **LOW** — this line is TRUE. But the surrounding lines in llms.txt may set expectations that need OON disclosure for commercial carriers. Need to read llms.txt fully in Phase B and ensure it carries the correct commercial-OON framing alongside.
- Approved replacement: keep this line; ADD adjacent line: `"- Commercial insurance accepted on out-of-network basis (Aetna, BCBS, Cigna, UHC, Humana)"`

---

## Category 2: Vague But Misleading (MUST FIX)

> "Most major insurance accepted" / "We accept most private insurance" without OON disclosure. These don't claim "in-network" but most readers infer in-network from "accept" — the regulatory bar requires explicit OON disclosure when accepting out-of-network only.

### 2.1 — `src/data/faq-data.ts:4` (faqData["addiction-treatment"] Q2)
- Current text: `"Yes. Desert Recovery Centers accepts most major private insurance plans. We offer free insurance verification. Call (480) 931-3617 or submit our online form to confirm your benefits at no cost."`
- Approved replacement: **Q&A form** (this is the canonical "Does DRC accept insurance?" Q&A)

### 2.2 — `src/data/faq-data.ts:101` (faqData["locations/glendale"] Q3)
- Current text: `"The Glendale location accepts most major private insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Call (623) 323-1012 for a free insurance verification."`
- Approved replacement: **TIGHT FORM** with Glendale phone: `"The Glendale location accepts out-of-network coverage from most major commercial insurance plans (Aetna, BCBS, Cigna, UnitedHealthcare, others), and is in-network with TriCare and TriWest. Call (623) 323-1012 for a free insurance verification."`

### 2.3 — `src/data/faq-data.ts:109` (faqData["locations/scottsdale"] Q3)
- Current text: `"Yes. Most major private insurance plans are accepted including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Call (480) 931-3617 for a free benefits verification."`
- Approved replacement: same pattern as 2.2 with Scottsdale phone

### 2.4 — `src/data/faq-data.ts:117` (faqData["locations/phoenix"] Q3)
- Current text: `"Yes. Most major private insurance plans are accepted at our Phoenix facility. Call (602) 905-8070 for a free verification."`
- Approved replacement: same pattern with Phoenix phone

### 2.5 — `src/app/locations/glendale/page.tsx:330-331` (FAQPage JSON-LD schema)
- Current text: `{ question: "Does Desert Recovery Centers accept insurance for Glendale residents?", answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Glendale residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 323-1012 for a free insurance check." }`
- Approved replacement: **Q&A form** with Glendale phone

### 2.6 — `src/app/locations/scottsdale/page.tsx:329-330` (FAQPage JSON-LD schema)
- Current text: `{ question: "Does Desert Recovery Centers accept insurance for Scottsdale residents?", answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Scottsdale residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (480) 931-3617 for a free insurance check." }`
- Approved replacement: **Q&A form** with Scottsdale phone

### 2.7 — `src/app/locations/phoenix-php-iop/page.tsx:75-76` (inline ConditionFAQ Q&A)
- Current text: `q: "Does Desert Recovery Centers accept insurance?", a: "Yes. We accept most major commercial insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and many others. Our team verifies your benefits before you start, at no cost to you, and walks you through exactly what is covered. Call (602) 905-8070 or use our online verification tool to get started."`
- Approved replacement: **Q&A form** with Phoenix phone

### 2.8 — `src/app/locations/phoenix-php-iop/page.tsx:213-216` (FAQPage JSON-LD schema)
- Current text: same answer as 2.7 in JSON-LD form
- Approved replacement: same as 2.7

### 2.9 — `src/app/locations/phoenix-php-iop/page.tsx:321-323` (second FAQPage JSON-LD)
- Current text: `"Yes. Desert Recovery Centers accepts most major commercial insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and others. Benefits are verified at no cost before treatment begins. Call (602) 905-8070 for a free insurance check."`
- Approved replacement: **TIGHT FORM** with Phoenix phone

### 2.10 — `src/app/locations/phoenix-php-iop/PhoenixPHPContent.tsx:759` (visible CTA)
- Current text: `"We accept most major insurance plans. Your benefits are verified before you start, at no cost to you."`
- Approved replacement: **TIGHT FORM** (without phone)

### 2.11 — `src/app/locations/phoenix-php-iop/PhoenixPHPContent.tsx:184-189` (visible carrier list with logos)
- Current text (array members): `"Blue Cross Blue Shield"`, `"Aetna"`, `"Cigna"`, `"UnitedHealthcare"`, `"Humana"`, `"Magellan"`
- Severity: **MEDIUM** — listed without qualifier; reader infers in-network. Need to verify Magellan is actually accepted (per Thai earlier audit it wasn't called out as in-network or OON; flag for verification)
- Approved replacement: keep list, ADD heading/subhead: "We work with these commercial carriers on an out-of-network basis (TriCare and TriWest are in-network)." OR add visible OON badge.

### 2.12 — `src/app/adolescent-treatment/page.tsx:20, 26, 43` (3 metadata fields)
- Current text (line 20 description, repeated at 26, 43): `"Desert Recovery Centers offers PHP, IOP, and outpatient treatment programs for adolescents ages 13 to 17 in Phoenix, AZ. Clinically supervised, parent-involved, school-compatible care. Joint Commission accredited. Insurance accepted. Call 24/7."`
- Approved replacement: replace `"Insurance accepted."` with `"Out-of-network commercial insurance and TriCare/TriWest accepted."`

### 2.13 — `src/app/adolescent-treatment/AdolescentContent.tsx:114` (visible heading text)
- Current text (in features array): `"Insurance Accepted"`
- Approved replacement: `"Insurance — OON & TriCare/TriWest"` (or similar — Phase B confirms heading length)

### 2.14 — `src/app/adolescent-treatment/AdolescentContent.tsx:120-125` (visible carrier list)
- Current text (array members): `"Blue Cross Blue Shield"`, `"Aetna"`, `"Cigna"`, `"UnitedHealthcare"`, `"Humana"`, `"Magellan"`
- Severity: **MEDIUM** — same Magellan flag as 2.11
- Approved replacement: same as 2.11 (add OON disclosure heading/subhead)

### 2.15 — `src/app/insurance/page.tsx:42` (page metadata description)
- Current text: `"Verify your insurance for addiction and mental health treatment at Desert Recovery Centers. We accept most private insurance. Call (480) 931-3617."`
- Approved replacement: replace `"We accept most private insurance"` with `"Out-of-network commercial coverage and in-network TriCare/TriWest"`

### 2.16 — `src/app/insurance/page.tsx:58` (PageHero description prop) — ALREADY CORRECT
- Current text: `"We accept employer-based group commercial insurance plans and most major carriers out-of-network. Submit your details and we'll verify your benefits."`
- Severity: **NONE** — this is correctly worded with explicit OON disclosure. Worth highlighting as the model phrasing for Phase B.
- Approved replacement: leave as-is or refine to add TriCare/TriWest mention

### 2.17 — `src/app/insurance/InsuranceContent.tsx:51` (visible body copy on /insurance) — ALREADY CORRECT
- Current text: `"We accept employer-based group commercial insurance plans and most major carriers out-of-network. Once you submit your insurance details, we can verify your benefits and explain your coverage."`
- Severity: **NONE** — same as 2.16. Worth highlighting; this is what the carrier cards (Cat 1.8-1.10) directly contradict.

### 2.18 — `src/app/insurance/InsuranceContent.tsx:54` (visible body copy)
- Current text: `"We do not accept Medicaid, or state-funded insurance. We can work with you on a self-pay option if you don't have health insurance."`
- Severity: **LOW** — accurate but worth augmenting for completeness
- Approved replacement (optional polish): `"We do not accept Medicaid, Medicare, or state-funded insurance. We can work with you on a self-pay option if you don't have health insurance."`

### 2.19 — `src/app/addiction-mental-health-treatment-facilities-lp/page.tsx:16, 95` (LP metadata + CTA)
- Current text (line 16 description): `"Luxury addiction and mental health treatment in Arizona. Same-day admissions available. Insurance accepted. Joint Commission accredited. Call (480) 931-3617."`
- Current text (line 95 CTA): `"Same-day admissions available. Insurance accepted."`
- Approved replacement: replace `"Insurance accepted"` with `"Out-of-network insurance accepted, in-network TriCare/TriWest"`

### 2.20 through 2.29 — `/addiction/*/page.tsx` (10 pages, identical pattern)

Each of the 10 addiction pages has TWO Cat 2 surfaces: a visible CTA + an FAQPage JSON-LD answer. All 10 use the same template. Pattern:

- Visible CTA (typically line ~166-185): `"We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits."`
- FAQPage JSON-LD (typically line ~200-243): `question: "Does Desert Recovery Centers accept insurance for [drug] rehab?", answer: "Yes, Desert Recovery Centers accepts most major insurance plans for [drug name] addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins."`

**Files affected:**
- 2.20 — `src/app/addiction/alcoholism-treatment/page.tsx:168, 241-243`
- 2.21 — `src/app/addiction/cocaine-addiction-treatment/page.tsx:169, 200-202`
- 2.22 — `src/app/addiction/fentanyl-addiction-treatment/page.tsx:169, 200-202`
- 2.23 — `src/app/addiction/gambling-addiction-treatment/page.tsx:166, 206-208`
- 2.24 — `src/app/addiction/heroin-addiction-treatment/page.tsx:169, 200-202`
- 2.25 — `src/app/addiction/marijuana-addiction-treatment/page.tsx:169, 200-202`
- 2.26 — `src/app/addiction/meth-addiction-treatment/page.tsx:169, 200-202`
- 2.27 — `src/app/addiction/prescription-drug-addiction-treatment/page.tsx:167, 207-209`
- 2.28 — `src/app/addiction/sex-addiction-treatment/page.tsx:166, 187-189`
- 2.29 — `src/app/addiction/stimulant-addiction-treatment/page.tsx:79, 184, 205-207` (extra "Most major insurance accepted" at line 79)

Approved replacement (CTA): **TIGHT FORM** condensed: `"We accept out-of-network commercial coverage and are in-network with TriCare/TriWest. Coverage varies by plan. Contact us to verify your benefits at no cost."`
Approved replacement (FAQPage answer): **TIGHT FORM** with drug-specific framing preserved.

### 2.30 — `src/app/levels-of-care/detox/page.tsx:51-52` (Q&A about detox coverage)
- Current text: `"Most major insurance plans cover medically necessary detoxification services in Arizona, including plans from Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many others. The Mental Health Parity and Addiction Equity Act requires insurers to cover substance use treatment at the same level as other medical conditions. Our admissions team at Desert Recovery Centers will verify your insurance benefits and explain your coverage before you begin treatment. Call (480) 931-3617 for a free, confidential insurance verification."`
- Severity: **MEDIUM** — careful: this is true ("plans cover detox") but reader will infer DRC is in-network with the listed carriers. Borderline.
- Approved replacement: keep MHPAEA framing; add OON disclosure sentence: `"Note: Desert Recovery Centers works with these commercial carriers on an out-of-network basis; we are in-network with TriCare and TriWest."`

### 2.31 — `src/app/levels-of-care/php/page.tsx:54-55` (Q&A)
- Current text: similar pattern to 2.30 for PHP coverage
- Approved replacement: same OON-disclosure addition

### 2.32 — `src/app/levels-of-care/iop/page.tsx:54-55` (Q&A)
- Current text: similar pattern for IOP
- Approved replacement: same OON-disclosure addition

### 2.33 — `src/app/levels-of-care/page.tsx:57-58, 437-439` (Q&A + FAQPage schema)
- Current text: `"Most major insurance plans in Arizona cover all medically necessary levels of addiction and mental health treatment, including detox, residential, PHP, IOP, and outpatient services..."`
- Approved replacement: same OON-disclosure addition; replace JSON-LD copy at line 439 too

### 2.34 — `src/app/levels-of-care/residential-treatment/page.tsx:55-56, 405-411` (Q&A + body copy)
- Current text (Q&A): `"Most major insurance plans provide coverage for residential addiction treatment in Arizona, including Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many others. Coverage levels and out-of-pocket costs vary by plan..."`
- Current text (body copy line 405-411): `"Regarding insurance coverage, most major health insurance ... with a wide range of insurers including Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many others."`
- Approved replacement: same OON-disclosure addition for both surfaces

### 2.35 — `src/app/treatments/tms-therapy/layout.tsx:6` (page metadata description)
- Current text: `"Desert Recovery Centers Phoenix offers FDA-cleared NeuroStar TMS therapy for depression, anxious depression, OCD, and adolescents ages 15 and older. Drug-free. No downtime. Sessions as short as 19 minutes. Most insurance accepted. Call (602) 905-8070."`
- Approved replacement: replace `"Most insurance accepted"` with `"Out-of-network commercial coverage and in-network TriCare/TriWest"`

### 2.36 — `src/app/treatments/tms-therapy/page.tsx:324` (visible CTA)
- Current text: `"FDA-cleared, drug free, non invasive treatment for depression, anxious depression, and OCD. Now available at our Phoenix outpatient center. Most insurance accepted. Sessions as short as 19 minutes."`
- Approved replacement: same as 2.35

### 2.37 — `src/app/treatments/tms-therapy/page.tsx:104` (TMS Q&A)
- Current text: `"Most major insurance plans now cover TMS therapy for Major Depressive Disorder, including Medicare and Tricare. Over 300 million Americans have coverage for NeuroStar TMS. Coverage varies by plan. Contact us to verify your benefits."`
- Severity: **MEDIUM** — Medicare reference — DRC does NOT accept Medicare per `adolescent/depression` Q&A. Industry-true that Medicare covers TMS, but reader infers DRC accepts Medicare. **This is a separate inconsistency**.
- Approved replacement: drop Medicare reference or clarify: `"Most major insurance plans now cover TMS therapy for Major Depressive Disorder. Desert Recovery Centers works with commercial plans on an out-of-network basis and is in-network with TriCare. Note: we do not accept Medicare or Medicaid. Coverage varies by plan. Contact us to verify your benefits."`

### 2.38 — `src/app/treatments/tms-therapy/page.tsx:93` (visible TMS marketing copy)
- Current text: `"Over 300 million people have insurance plans that cover NeuroStar therapy including Medicare and Tricare"`
- Severity: **MEDIUM** — same Medicare-acceptance implication
- Approved replacement: defer to Phase B; the source is industry-fact about NeuroStar coverage. Could keep as factual statement about NeuroStar without implying DRC accepts those plans.

### 2.39 — `src/app/resources/faq/page.tsx:21` (Q text)
- Current text (Q): `"What types of insurance do you accept?"`
- Severity: **LOW** — Q text is fine; A is the problem (covered in 1.11)
- Approved replacement: keep Q text as-is

### 2.40 — `src/app/resources/luxury-vs-traditional-rehab/LuxuryVsTraditionalContent.tsx:49` (visible comparison label)
- Current text (in luxury-vs-standard comparison object): `luxury: "Most private insurance accepted"`
- Approved replacement: `luxury: "OON commercial insurance + in-network TriCare/TriWest"`

### 2.41 — `src/app/resources/luxury-vs-traditional-rehab/page.tsx:47` (FAQ answer)
- Current text: `"Many private insurance plans including Tricare and TriWest cover luxury behavioral health treatment in Arizona. Desert Recovery Centers works with most major private insurance carriers to verify benefits before admission."`
- Severity: **MEDIUM** — TriCare/TriWest are NOT private insurance (they're military health programs); also vague on OON
- Approved replacement: rework using **TIGHT FORM**, separate TriCare/TriWest from "private insurance" framing

### 2.42 — `src/app/resources/ResourcesContent.tsx:212` (visible CTA)
- Current text: `"We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits."`
- Approved replacement: **TIGHT FORM** condensed (CTA-length)

### 2.43 — `src/app/about/AboutContent.tsx:292` (visible CTA)
- Current text: same as 2.42
- Approved replacement: same as 2.42

### 2.44 — `src/app/contact/ContactCTA.tsx:32` (visible CTA — appears on /contact and possibly other pages)
- Current text: same as 2.42
- Approved replacement: same as 2.42

### 2.45 — `src/components/TrustBar.tsx:5` (sitewide TrustBar — appears on EVERY page that includes TrustBar)
- Current text (label in icons array): `{ label: "Most Insurance Accepted", icon: "..." }`
- Severity: **HIGH-IMPACT** (sitewide footprint via component reuse)
- Approved replacement: `{ label: "OON & TriCare/TriWest Accepted", icon: "..." }` or similar tight phrasing

### 2.46 — `src/lib/blog.ts:859` (blog featured-image alt text)
- Current text: `featuredImageAlt: "Desert Recovery Centers Phoenix facility accepting insurance for addiction treatment"`
- Severity: **LOW** — alt text, search-only impact
- Approved replacement: low priority; could read `"Desert Recovery Centers Phoenix facility working with out-of-network insurance for addiction treatment"`

### 2.47 — `src/data/page-metadata.ts:236` (insurance page metadata)
- Current text: `description: "Verify your insurance for addiction and mental health treatment at Desert Recovery Centers. We accept most private insurance. Call (480) 931-3617."`
- Approved replacement: same as 2.15 — replace `"We accept most private insurance"` with OON-disclosure phrasing

### 2.48 — `src/lib/blog.ts:885-887` (blog post body content)
- Current text: educational paragraph defining "in network vs out of network", ending: `"Desert Recovery Centers works with a wide range of insurance providers and can help you determine whether we are in network with your specific plan. Even if we are out of network, your plan may still cover a significant portion of the cost..."`
- Severity: **LOW-MEDIUM** — hedged ("can help you determine whether we are in network") but creates expectation that DRC IS in-network with some plans
- Approved replacement: replace last sentence with explicit `"Desert Recovery Centers is out-of-network with all commercial insurance carriers. We are in-network with TriCare and TriWest. Even on an out-of-network basis, your plan may still cover a significant portion of the cost..."`

---

## Category 3: TriCare/TriWest Mentions (VERIFY)

> All TriCare/TriWest in-network claims confirmed TRUE per source of truth. No corrections needed to the TriCare/TriWest portion. The issue is when these are paired with Cat 1/2 commercial-carrier claims — the commercial portion needs Phase B fixes; TriCare/TriWest portion stays.

### 3.1 — `src/data/faq-data.ts:276` — Pair with Cat 1.1 (homepage Q3)
- TriCare/TriWest claim: `"DRC is also in-network with Tricare and TriWest"` ✓ TRUE
- Action: KEEP this clause; replace surrounding commercial in-network claim per 1.1

### 3.2 — `src/data/faq-data.ts:285` — homepage Q12 (military veterans Q&A)
- TriCare/TriWest claim: `"contacting our admissions team at (480) 931-3617 to discuss your specific insurance coverage including TriCare benefits and options"` ✓ TRUE
- Action: KEEP as-is; this Q&A doesn't make false claims

### 3.3 — `src/app/insurance/InsuranceContent.tsx:12` — Tricare card
- Claim: `{ name: "Tricare", desc: "Coverage accepted for active-duty service members, veterans, and dependents." }` ✓ TRUE
- Action: KEEP; could add `"In-network"` qualifier for symmetry with Cat 1.8-1.10 fixes: `desc: "In-network for active-duty service members, veterans, and dependents."`

### 3.4 — `src/app/insurance/InsuranceContent.tsx:13` — TriWest card
- Claim: `{ name: "TriWest", desc: "TriWest Healthcare Alliance plans accepted for eligible veterans." }` ✓ TRUE
- Action: KEEP; add `"In-network"` qualifier as 3.3

### 3.5 — `src/app/adolescent/depression/page.tsx:78, 107` — Pair with Cat 1.16, 1.17
- TriCare/TriWest claim: `"in-network with Tricare and TriWest"` ✓ TRUE
- Action: KEEP this clause; replace `"We work with most major commercial insurance carriers"` per 1.16, 1.17

### 3.6 — `src/app/resources/luxury-vs-traditional-rehab/page.tsx:47` — Pair with Cat 2.41
- TriCare/TriWest claim: `"Many private insurance plans including Tricare and TriWest cover luxury behavioral health treatment"` — TRUE that they cover treatment, but TriCare/TriWest are not "private insurance"
- Action: REWORD to separate from "private insurance" framing; pair with Cat 2.41 fix

### 3.7 — `src/app/addiction-mental-health-treatment-facilities-lp/page.tsx:35, 231-234` — Pair with Cat 1.14
- Claim: `"in-network or works with most major commercial plans, including ... TRICARE"` (line 35) — groups TRICARE with commercial; TRICARE in-network is true but the lump-grouping is misleading
- Visual badge (line 231-234): `aria-label="TRICARE accepted"` and visible `TRICARE` badge ✓ TRUE
- Action: KEEP visual TRICARE badge; rework line 35 per 1.14 to separate TRICARE/TriWest in-network from commercial OON

### 3.8 — `src/app/insurance/humana/page.tsx:27, 73, 119-122, 193, 243` — Humana-administered TRICARE
- Multiple references to Humana administering TRICARE benefits — factually true, no DRC in-network claim made
- Action: KEEP as-is; these are educational about Humana/TRICARE relationship, not DRC network claims

### 3.9 — `src/app/treatments/tms-therapy/page.tsx:93, 104` — Medicare + Tricare TMS coverage
- Claim: `"Over 300 million people have insurance plans that cover NeuroStar therapy including Medicare and Tricare"`
- TriCare portion ✓ TRUE; Medicare reference creates inconsistency with Medicaid/Medicare exclusion (covered in Cat 2.37, 2.38)
- Action: pair with Cat 2.37/2.38 fixes

### 3.10 — `public/llms.txt:16` — Pair with Cat 1.19
- Claim: `"- Tricare/TriWest in-network"` ✓ TRUE
- Action: KEEP; ADD adjacent line per 1.19 disclosing commercial-OON status

### 3.11 — `public/llms.txt:41` (insurance reference line)
- Current text: `"- [Insurance](https://desertrecoverycenters.com/insurance): Verify insurance coverage for treatment (Aetna, BCBS, Cigna, United, Humana, Tricare)"`
- Severity: LOW-MEDIUM — lists carriers without OON qualifier; LLMs may infer in-network
- Action: REPLACE with `"- [Insurance](https://desertrecoverycenters.com/insurance): Verify out-of-network commercial coverage (Aetna, BCBS, Cigna, UHC, Humana) and in-network TriCare/TriWest benefits"`

---

## Category 4: Verify-Benefits CTAs (REVIEW FOR CONTEXT)

> Standalone CTAs ("Verify Your Benefits", "Free Insurance Verification") are FINE in isolation. They become problematic only when adjacent to false in-network claims. Phase B should leave standalone CTAs alone unless they ship inside a Cat 1/2 surface.

The grep returned 210 lines for verify-benefits phrasing. Most fall into these patterns (no individual fix needed):

- `"Verify Insurance"` button labels — sitewide, no claim, leave alone
- `"Free Insurance Verification"` page headings — fine in isolation
- `"Our admissions team will verify your benefits at no cost"` — standalone variant fine
- "We Verify Your Benefits" — InsuranceContent.tsx:24, cigna/page.tsx:188 — fine in isolation
- Phone-anchored verification CTAs (e.g. `"Call (480) 931-3617 to verify your benefits"`) — fine

### 4.1 — `src/app/insurance/page.tsx:32-34` (FAQPage JSON-LD)
- Current text: `{ "@type": "Question", "name": "Is there any cost for the insurance verification?", "acceptedAnswer": { "@type": "Answer", "text": "None. Insurance verification at Desert Recovery Centers is completely free, completely confidential, and comes with no obligation to begin treatment. Call (480) 931-3617 to verify your benefits." } }`
- Severity: NONE — accurate standalone Q&A
- Action: KEEP as-is

### 4.2 — `src/app/insurance/InsuranceContent.tsx:24` (visible heading)
- Current text: `title: "We Verify Your Benefits"`
- Severity: NONE
- Action: KEEP as-is

### 4.3 — `src/app/insurance/InsuranceContent.tsx:96` (visible heading "Accepted Insurance")
- Current text: `"Accepted Insurance"`
- Severity: LOW — followed by carrier cards (Cat 1.8-1.10 false claims)
- Action: optionally rename to `"Insurance We Work With"` or `"Insurance Coverage"` for accuracy when card text is fixed

### 4.4 — `src/app/insurance/aetna/page.tsx:79-81` (Q&A wrap-up text)
- Current text: `"Because Aetna offers dozens of different plan types, the only way to know exactly what your plan covers is to verify your benefits directly. Call our admissions team at ... and we will confirm your coverage at no cost."`
- Severity: NONE — careful "verify your benefits directly" wording
- Action: KEEP as-is

(All other 200+ verify-benefits CTAs are similar standalone instances with no false claims; they don't need individual review.)

---

## Category 5: Schema / Metadata

### 5.1 — `src/app/locations/phoenix-php-iop/page.tsx:151` (MedicalClinic JSON-LD `paymentAccepted`)
- Current text: `paymentAccepted: "Insurance, Private Pay"`
- Severity: LOW — vague, reader-friendly. Not strictly false but doesn't disclose OON.
- Approved replacement: `paymentAccepted: "Out-of-network commercial insurance, In-network TriCare/TriWest, Private Pay"` — verify schema.org compliance for `paymentAccepted` (it's a free-text field per schema.org spec, so this is OK)

### 5.2 — `src/data/page-metadata.ts:236` — covered in Cat 2.47

### 5.3 — `src/app/insurance/page.tsx:42` — covered in Cat 2.15

### 5.4 — `src/app/insurance/aetna/page.tsx:52` — covered in Cat 1.18

### 5.5 — `src/app/treatments/tms-therapy/layout.tsx:6` — covered in Cat 2.35

### 5.6 — `src/app/addiction-mental-health-treatment-facilities-lp/page.tsx:16` — covered in Cat 2.19

### 5.7 — `src/app/adolescent-treatment/page.tsx:20, 26, 43` — covered in Cat 2.12

> **No `acceptsInsurance` or `HealthInsurance` schema fields exist anywhere in the repo.** All schema-equivalent insurance claims are either (a) JSON-LD FAQPage answer text (captured under Cat 1/2 by line) or (b) `paymentAccepted` (5.1). No structured-data-only fixes are needed beyond what's already listed.

---

## Phase B Recommendation

### Estimated scope
- **Files affected**: ~40
- **Text changes**: 60-70 unique edits (10 addiction/* pages share an identical pattern → can be patched as one logical change but counts as 20 line edits across files; the rest are unique)
- **Estimated CC time**: 4-6 hours of focused editing + 1 hour build/verify + 30 min production verification = ~6-8h elapsed for a single batch
- **PR strategy**: probably ONE atomic PR is correct here despite the size, because:
  1. Inconsistent network status disclosure across pages is itself a regulatory issue
  2. Splitting the fix means some pages briefly have correct disclosure while others don't
  3. The smallest-blast-radius unit is "all surfaces simultaneously"

### Top-priority surfaces (highest patient impact + regulatory exposure)

1. **`src/data/faq-data.ts:276`** (homepage FAQ) — every homepage visitor + Google rich result
2. **`src/components/TrustBar.tsx:5`** ("Most Insurance Accepted" sitewide trust badge) — appears on EVERY page that includes TrustBar
3. **`src/app/insurance/InsuranceContent.tsx:7-11`** (Cigna/Aetna/Humana "In-network" cards) — directly contradict the OON-correct hero copy on the same page
4. **`src/app/resources/faq/page.tsx:22`** (master FAQ "What insurance do you accept") — primary AEO surface
5. **`src/app/locations/glendale/page.tsx:87, 330-331`** + **`scottsdale/page.tsx:83, 329-330`** + **`phoenix-php-iop/page.tsx:75-76, 213-216, 321-323`** — location pages have inline Q&As + 1-2 FAQPage JSON-LDs each, all repeating false claims; high local-SEO impact

### Recommended Phase B sequencing

**Phase B.1 (atomic, all changes shipped together)**:
1. Patch `src/data/faq-data.ts` (4 keys: homepage, locations/glendale, locations/scottsdale, locations/phoenix, addiction-treatment) — single file, ~5 line edits
2. Patch `src/app/insurance/InsuranceContent.tsx` (3 carrier cards: Cigna, Aetna, Humana, plus 2 TriCare/TriWest cards for symmetry) — single file
3. Patch `src/components/TrustBar.tsx` (1 label) — single file, sitewide ripple
4. Patch all 10 `/addiction/*` pages — uniform pattern, identical text swap × 10 files
5. Patch all 5 `/insurance/*` carrier pages where false claims exist (focus on `aetna/page.tsx:52` hero, `blue-cross/page.tsx:114` HMO sentence)
6. Patch all 3 location pages (glendale, scottsdale, phoenix-php-iop) — 2-3 surfaces each
7. Patch `/rehab-near-me`, `/compare/luxury-rehab-arizona`, `/compare/drc-vs-apn` — 1-2 surfaces each
8. Patch `/resources/faq`, `/resources/detox-guide`, `/resources/cost-of-rehab`, `/resources/addiction-detox-guide/antidepressants`, `/resources/luxury-vs-traditional-rehab` — 1 surface each
9. Patch `/levels-of-care/*` (5 pages) — 1 surface each
10. Patch `/adolescent-treatment` + `/adolescent/depression` — 2-4 surfaces
11. Patch `/treatments/tms-therapy/*` — 3 surfaces
12. Patch `/addiction-mental-health-treatment-facilities-lp` — 2 surfaces
13. Patch `/about/AboutContent.tsx`, `/contact/ContactCTA.tsx`, `/resources/ResourcesContent.tsx` — 1 surface each (visible CTAs)
14. Patch metadata files: `src/data/page-metadata.ts`, `src/app/insurance/page.tsx`, `src/app/treatments/tms-therapy/layout.tsx`, `src/app/adolescent-treatment/page.tsx` (metadata + repeat usage)
15. Patch `src/lib/blog.ts:885-887` (blog post body educational paragraph) and `:859` (alt text)
16. Patch `public/llms.txt:16, 41` (AI-readable site description)
17. Patch `src/app/locations/phoenix-php-iop/page.tsx:151` (MedicalClinic `paymentAccepted` field)
18. Verify TriCare/TriWest cards (3.3, 3.4) display in-network qualifier

**Phase B.2 (post-merge verification)**:
- Production crawl to confirm zero remaining "in-network with [commercial carrier]" strings in public HTML
- Submit Google Rich Results re-test for /resources/faq and / (homepage) FAQPage JSON-LDs
- Update any lingering Magellan references with explicit accepted/not-accepted clarification (Phase B prerequisite: Thai confirms Magellan status)

### Pre-Phase-B blockers (need Thai confirmation)

1. **Magellan acceptance status**: PhoenixPHPContent.tsx:189 + AdolescentContent.tsx:125 list Magellan as accepted carrier without qualifier. Confirm: in-network, OON, or not accepted at all?
2. **TMS Medicare reference** (Cat 2.37, 2.38): treatments/tms-therapy says NeuroStar/TMS is covered by Medicare — DRC does NOT accept Medicare. Confirm: drop Medicare reference entirely, OR clarify DRC TMS available for non-Medicare patients only?
3. **Card-length text for InsuranceContent.tsx carrier cards** (Cat 1.8-1.10): the existing card desc is 8-12 words. Confirm preferred replacement card-length wording (suggestion in entries above is one option).
4. **Compare-page cost-framed answers** (Cat 1.5, 1.6): these answers blend OON network status with cost-savings claim ("out-of-pocket cost may be significantly lower"). Phase B replacement needs to preserve cost-framing while fixing network status — defer custom wording to Thai.

### What NOT to do in Phase B

- Do NOT remove TriCare/TriWest in-network claims (they are TRUE).
- Do NOT remove brand-name carrier mentions (Aetna/BCBS/Cigna/UHC/Humana) — DRC does work with them, just on OON basis.
- Do NOT delete the standalone "Verify Benefits" CTAs — they're accurate and conversion-critical.
- Do NOT modify the carefully-worded `/insurance/page.tsx:58` and `InsuranceContent.tsx:51` body copy that already says "out-of-network" — these are the model.
- Do NOT modify the carefully-worded `/insurance/aetna|blue-cross|cigna|humana|united` educational copy explaining "in-network vs out-of-network" as concepts (lines like blue-cross:106, cigna:95-114) — these teach the user the concept and are accurate. Only the AFFIRMATIVE network-status claims need fixing.
- Do NOT touch faqData line 99, 101 phone numbers (Glendale-specific tracking line is correct in Glendale-context).

---

**STAND-DOWN until Thai reviews this audit and authorizes Phase B scope.**
