# Batch 5 Phase A — FAQ Inventory

Generated: 2026-05-02
Repo state: drc-nextjs @ 6438714 (Batch 4.8 — CSP allowlist for LiveChat audio)
Scope: READ-ONLY. No source-code modifications. Inventory only.

## Summary

- Total FAQ surfaces found: **72 unique pages** (one shared data file consumed by 35 of those pages)
- Total Q&A renderings across all surfaces: **~497** (counting each rendered Q&A on each URL)
- Unique authored Q&As across all surfaces: **~492** (faqData reused on a 2nd URL accounts for one 5-Q&A duplicate cluster)
- Surfaces with JSON-LD FAQPage schema: **53** (35 via `getFAQSchema(faqData[…])`, 9 inline schema-only, 9 inline w/ `InlineFAQSchema`/raw schema)
- Shared FAQ data files: **1** — `src/data/faq-data.ts` (36 keys, 186 Q&As, 1 unused key)
- Cross-page duplicate clusters identified: **6 major clusters** (insurance, treatment-duration, "can X be treated", therapy definitions, "what makes DRC different", phone/intake)
- Verbatim cross-URL duplicates: **1** (faqData["trauma-therapy"] rendered identically on /mental-health/trauma-treatment AND /treatments/trauma-therapy)
- YMYL accuracy flags raised: **9** (1 phone-number inconsistency, 1 incomplete-sentence in /resources/faq, 1 unused data key, 6 specificity flags)

### Rendering paths in use (architecture map)

| Path | Component | Files |
|---|---|---|
| Shared data + `FAQSection` (React) + `getFAQSchema` (JSON-LD) | `src/components/FAQSection.tsx` | 35 pages consume `faqData[<key>]` |
| Inline data + `ConditionFAQ` (React) | `src/components/ConditionFAQ.tsx` | 43 pages render `const faqs = […]` |
| Inline data + `FAQAccordion` (React) | `src/components/FAQAccordion.tsx` | 1 page (`/resources/faq`) |
| Inline data + `AEOBlock` (visible plain HTML, not accordion) | `src/components/AEOBlock.tsx` | 1 page (`/`) — also via faqData["homepage"] |
| Inline data + `InlineFAQSchema` (JSON-LD only, custom React rendering) | `src/lib/seo.tsx` | 1 page (`/treatments/tms-therapy`) |
| Inline data + raw `@type: FAQPage` schema (custom React rendering) | per-page | 9 pages: /facilities, /get-help, /insurance, /locations/phoenix-php-iop, all 9 /adolescent/* pages |
| Inline data + `getFAQSchema()` helper (custom React rendering) | per-page | 1 page (`/addiction-mental-health-treatment-facilities-lp`) |
| Inline data + custom JSON-LD + custom rendering | per-page | 1 page (`/resources/luxury-vs-traditional-rehab`, uses `const FAQS`) |

### Pages that render BOTH a shared `faqData` block AND an inline `const faqs` block

These pages display TWO separate FAQ accordions on a single URL — a topical inline block above the "Frequently Asked Questions" shared block. Crawlers see two `FAQPage` JSON-LD blocks per URL:

- /addiction/alcoholism-treatment, /cocaine, /fentanyl, /gambling, /heroin, /marijuana, /meth, /prescription, /sex, /stimulant (10 pages)
- /addiction-treatment (no inline block)
- /locations/glendale, /locations/scottsdale, /locations/phoenix-php-iop (3 pages)
- /mental-health/adhd-add, /anxiety, /bipolar, /depression, /ocd, /personality, /ptsd, /schizophrenia, /trauma (9 pages)
- /treatments/bridgework, /cbt-cognitive-behavioral-therapy, /dbt-dialectical-behavior-therapy, /dual-diagnosis-treatment, /emdr-therapy, /holistic-therapies, /softwave-therapy, /trauma-therapy (8 pages)

**30 pages with double-FAQ rendering.**

## FAQ Surface Catalog

### Pages that render `faqData["<key>"]` only (no inline `const faqs`)

#### 1. src/app/page.tsx
- URL: /
- Q&A count: 12
- Data source: `faqData["homepage"]` rendered via `AEOBlock` + JSON-LD via `getFAQSchema`
- Questions (verbatim from faqData):
  1. What is Desert Recovery Centers?
  2. Where are Desert Recovery Centers locations?
  3. Does Desert Recovery Centers accept insurance?
  4. What does Desert Recovery Centers treat?
  5. How many beds does Desert Recovery Centers have?
  6. Is Desert Recovery Centers accredited?
  7. What makes Desert Recovery Centers different from other rehabs?
  8. What is Joint Commission accreditation?
  9. What is dual diagnosis treatment?
  10. How do I start treatment at Desert Recovery Centers?
  11. What amenities does Desert Recovery Centers have?
  12. Does Desert Recovery Centers treat military veterans and accept TriCare?

#### 2. src/app/our-team/page.tsx
- URL: /our-team
- Q&A count: 5
- Data source: `faqData["our-team"]` via `FAQSection`
- Questions:
  1. Who leads the clinical team at Desert Recovery Centers?
  2. What credentials do therapists at Desert Recovery Centers hold?
  3. Will I see the same therapist throughout my treatment?
  4. How many clients does each clinician work with?
  5. Does the team have experience with dual diagnosis treatment?

#### 3. src/app/contact/page.tsx
- URL: /contact
- Q&A count: 5
- Data source: `faqData["contact"]` via `FAQSection`
- Questions:
  1. How do I get started with treatment at Desert Recovery Centers?
  2. Does Desert Recovery Centers verify insurance before admission?
  3. Where are Desert Recovery Centers locations?
  4. Is my inquiry confidential?
  5. What information should I have ready when I call?

#### 4. src/app/addiction-treatment/page.tsx
- URL: /addiction-treatment
- Q&A count: 5
- Data source: `faqData["addiction-treatment"]` via `FAQSection`
- Questions:
  1. What types of addiction does Desert Recovery Centers treat?
  2. Does Desert Recovery Centers accept insurance?
  3. How long is the addiction treatment program?
  4. What makes Desert Recovery Centers different from other rehabs in Arizona?
  5. Is detox available at Desert Recovery Centers?

#### 5. src/app/mental-health/page.tsx
- URL: /mental-health
- Q&A count: 5
- Data source: `faqData["mental-health"]` via `FAQSection`
- Questions:
  1. What mental health conditions do you treat?
  2. Is mental health treatment covered by insurance?
  3. Do you treat co-occurring mental health and addiction disorders?
  4. What therapies are used in mental health treatment?
  5. How do I get admitted for mental health treatment?

#### 6. src/app/treatments/page.tsx
- URL: /treatments
- Q&A count: 5
- Data source: `faqData["treatments"]` via `FAQSection`
- Questions:
  1. What therapies does Desert Recovery Centers use?
  2. What is cognitive behavioral therapy (CBT)?
  3. What is dialectical behavior therapy (DBT)?
  4. What is EMDR therapy?
  5. What is dual diagnosis treatment?

#### 7. src/app/treatments/dual-diagnosis-treatment/page.tsx
- URL: /treatments/dual-diagnosis-treatment
- Q&A count: 5
- Data source: `faqData["dual-diagnosis-treatment"]` via `FAQSection`
- Questions:
  1. What is dual diagnosis treatment?
  2. Why is dual diagnosis treatment important?
  3. Does Desert Recovery Centers specialize in dual diagnosis?
  4. Does insurance cover dual diagnosis treatment?
  5. How long is dual diagnosis treatment?

#### 8. src/app/treatments/cbt-cognitive-behavioral-therapy/page.tsx
- URL: /treatments/cbt-cognitive-behavioral-therapy
- Q&A count: 5
- Data source: `faqData["cbt-therapy"]` via `FAQSection`
- Questions:
  1. What is cognitive behavioral therapy (CBT)?
  2. What conditions does CBT treat?
  3. How does CBT work for addiction treatment?
  4. Who delivers CBT at Desert Recovery Centers?
  5. How long does CBT take to show results?

#### 9. src/app/treatments/dbt-dialectical-behavior-therapy/page.tsx
- URL: /treatments/dbt-dialectical-behavior-therapy
- Q&A count: 5
- Data source: `faqData["dbt-therapy"]` via `FAQSection`
- Questions:
  1. What is dialectical behavior therapy (DBT)?
  2. What conditions is DBT used for?
  3. How does DBT differ from CBT?
  4. Who delivers DBT at Desert Recovery Centers?
  5. Does insurance cover DBT treatment?

#### 10. src/app/treatments/emdr-therapy/page.tsx
- URL: /treatments/emdr-therapy
- Q&A count: 5
- Data source: `faqData["emdr"]` via `FAQSection`
- Questions:
  1. What is EMDR therapy?
  2. How does EMDR work?
  3. How many EMDR sessions are typically needed?
  4. Is EMDR effective for trauma and PTSD?
  5. Does insurance cover EMDR therapy?

#### 11. src/app/treatments/holistic-therapies/page.tsx
- URL: /treatments/holistic-therapies
- Q&A count: 5
- Data source: `faqData["holistic-therapy"]` via `FAQSection`
- Questions:
  1. What holistic therapies does Desert Recovery Centers offer?
  2. Are holistic therapies a replacement for clinical treatment?
  3. How does yoga help with addiction and mental health recovery?
  4. Is nutrition counseling part of treatment at DRC?
  5. Does insurance cover holistic therapies at Desert Recovery Centers?

#### 12. src/app/treatments/softwave-therapy/page.tsx
- URL: /treatments/softwave-therapy
- Q&A count: 5
- Data source: `faqData["softwave-therapy"]` via `FAQSection`
- Questions:
  1. What is SoftWave therapy?
  2. How does SoftWave therapy support addiction recovery?
  3. What conditions does SoftWave treat?
  4. What does a SoftWave session involve?
  5. Is SoftWave therapy available at all Desert Recovery Centers locations?

#### 13. src/app/treatments/trauma-therapy/page.tsx
- URL: /treatments/trauma-therapy
- Q&A count: 5
- Data source: `faqData["trauma-therapy"]` via `FAQSection`  ← **VERBATIM DUPLICATE on /mental-health/trauma-treatment** (see Cluster Report)
- Questions:
  1. What trauma therapies are offered?
  2. Can trauma and addiction be treated together?
  3. What is EMDR for trauma?
  4. How long does trauma therapy take?
  5. Does insurance cover trauma therapy?

#### 14. src/app/treatments/bridgework/page.tsx
- URL: /treatments/bridgework
- Q&A count: 5
- Data source: `faqData["bridgework"]` via `FAQSection` (this page also imports ConditionFAQ but it is not used to render an inline `faqs` array)
- Questions:
  1. What is BridgeWork at Desert Recovery Centers?
  2. How is BridgeWork different from regular therapy?
  3. Who delivers BridgeWork sessions?
  4. Who benefits most from BridgeWork?
  5. Is BridgeWork covered by insurance?

### Pages with both `faqData` AND an inline `const faqs` block (DOUBLE-RENDER)

For each, lists Q&As from BOTH surfaces. faqData questions come from `src/data/faq-data.ts`; inline come from each page file.

#### 15. src/app/locations/glendale/page.tsx
- URL: /locations/glendale
- Q&A count: 5 (faqData) + 8 (inline) = 13
- Data sources: `faqData["locations/glendale"]` via `FAQSection`; `const faqs = [...]` via `ConditionFAQ`
- Questions (faqData):
  1. Where is the Desert Recovery Centers Glendale location?
  2. What addictions are treated at the Glendale location?
  3. What insurance does the Glendale location accept?
  4. Is the Glendale facility Joint Commission accredited?
  5. What amenities are at the Glendale location?
- Questions (inline):
  1. Where is the Glendale facility located?
  2. Why is Glendale considered your flagship facility?
  3. What programs are available at the Glendale location?
  4. What conditions do you treat at the Glendale center?
  5. Do you accept insurance at the Glendale location?
  6. What is the clinical team like at Glendale?
  7. Can my family visit the Glendale facility?
  8. How quickly can I start treatment at Glendale?

#### 16. src/app/locations/scottsdale/page.tsx
- URL: /locations/scottsdale
- Q&A count: 5 (faqData) + 8 (inline) = 13
- Data sources: `faqData["locations/scottsdale"]` + `const faqs`
- Questions (faqData):
  1. Where is the Desert Recovery Centers Scottsdale location?
  2. What is treated at the Scottsdale location?
  3. Does the Scottsdale location accept insurance?
  4. Is the Scottsdale facility Joint Commission accredited?
  5. What amenities are at the Scottsdale facility?
- Questions (inline):
  1. Where exactly is the Scottsdale facility?
  2. What programs are available at the Scottsdale location?
  3. What conditions do you treat at the Scottsdale center?
  4. Do you accept insurance at the Scottsdale location?
  5. What is the clinical team like at Scottsdale?
  6. How long does residential treatment typically last?
  7. Can family members visit the Scottsdale facility?
  8. What makes the Scottsdale location different from other DRC facilities?

#### 17. src/app/locations/phoenix-php-iop/page.tsx
- URL: /locations/phoenix-php-iop
- Q&A count: 5 (faqData) + 10 (inline) = 15
- Data sources: `faqData["locations/phoenix"]` + `const faqs` + raw `@type: FAQPage` schema
- Questions (faqData):
  1. Where is the Desert Recovery Centers Phoenix location?
  2. What is treated at the Phoenix location?
  3. Does the Phoenix location accept insurance?
  4. What is the difference between PHP and IOP at the Phoenix location?
  5. How long is the IOP program at the Phoenix facility?
- Questions (inline):
  1. What is a Partial Hospitalization Program (PHP)?
  2. What is an Intensive Outpatient Program (IOP)?
  3. How is outpatient treatment different from residential treatment?
  4. Does Desert Recovery Centers accept insurance?
  5. What is TMS therapy and is it available at the Phoenix location?
  6. What conditions do you treat at the Phoenix PHP / IOP center?
  7. What is the difference between PHP and IOP?
  8. How do I get started?
  9. Does the Phoenix location offer residential treatment?
  10. How quickly can I start treatment?

#### 18-27. /addiction/* pages (10 pages, each 5 faqData + 4 inline = 9)

Each page consumes `faqData["<slug>"]` via FAQSection AND renders `const faqs = […]` via ConditionFAQ. faqData Q&As are listed verbatim from `src/data/faq-data.ts`; inline Q&As from each page file.

**18. src/app/addiction/alcoholism-treatment/page.tsx — /addiction/alcoholism-treatment** (faqData["alcoholism-treatment"])
- faqData: What does alcohol addiction treatment include? / How long is alcohol rehab? / Does insurance cover alcohol rehab? / Is medically supervised alcohol detox available? / Does Desert Recovery Centers treat alcoholism?
- inline: Can alcohol addiction be treated? / How long does alcohol rehab take? / Does insurance cover alcohol addiction treatment? / What medications are used for alcohol withdrawal?

**19. src/app/addiction/cocaine-addiction-treatment/page.tsx — /addiction/cocaine-addiction-treatment**
- faqData: What is cocaine addiction treatment? / How long does cocaine rehab take? / What are cocaine withdrawal symptoms? / What therapies are used for cocaine addiction? / Does insurance cover cocaine addiction treatment?
- inline: Can cocaine addiction be treated? / How long does cocaine rehab take? / Does insurance cover cocaine addiction treatment? / What therapies are used for cocaine addiction?

**20. src/app/addiction/fentanyl-addiction-treatment/page.tsx — /addiction/fentanyl-addiction-treatment**
- faqData: How dangerous is fentanyl withdrawal? / What treatment is used for fentanyl addiction? / Does insurance cover fentanyl treatment? / What is the fentanyl withdrawal timeline? / Is medically supervised detox needed for fentanyl?
- inline: Can fentanyl addiction be treated? / How long does fentanyl rehab take? / Does insurance cover fentanyl addiction treatment? / What medications are used for fentanyl withdrawal?

**21. src/app/addiction/gambling-addiction-treatment/page.tsx — /addiction/gambling-addiction-treatment**
- faqData: Can gambling addiction be treated? / How long does gambling addiction rehab take? / Does insurance cover gambling addiction treatment? / What therapies are used for gambling addiction? / How do I get started with gambling addiction treatment?
- inline: Can gambling addiction be treated? / How long does gambling addiction rehab take? / Does insurance cover gambling addiction treatment? / What therapies are used for gambling addiction?

**22. src/app/addiction/heroin-addiction-treatment/page.tsx — /addiction/heroin-addiction-treatment**
- faqData: How is heroin addiction treated? / Is heroin detox medically supervised? / What is the success rate for heroin treatment? / What is MAT for heroin addiction? / Does insurance cover heroin addiction treatment?
- inline: Can heroin addiction be treated? / How long does heroin rehab take? / Does insurance cover heroin addiction treatment? / What medications are used for heroin withdrawal?

**23. src/app/addiction/marijuana-addiction-treatment/page.tsx — /addiction/marijuana-addiction-treatment**
- faqData: What is marijuana addiction treatment? / Can you become addicted to marijuana? / How long does marijuana rehab take? / What are marijuana withdrawal symptoms? / Does insurance cover marijuana addiction treatment?
- inline: Can marijuana addiction be treated? / How long does marijuana rehab take? / Does insurance cover marijuana addiction treatment? / Is marijuana really addictive?

**24. src/app/addiction/meth-addiction-treatment/page.tsx — /addiction/meth-addiction-treatment**
- faqData: How is meth addiction treated? / How long does meth addiction treatment take? / Does insurance cover meth rehab? / What are meth withdrawal symptoms? / What therapies are used for meth addiction?
- inline: Can meth addiction be treated? / How long does meth rehab take? / Does insurance cover meth addiction treatment? / What therapies are used for meth withdrawal?

**25. src/app/addiction/prescription-drug-addiction-treatment/page.tsx — /addiction/prescription-drug-addiction-treatment**
- faqData: What is prescription drug addiction treatment? / Does Desert Recovery Centers treat prescription drug addiction? / Is medically supervised detox needed for prescription drugs? / How long is prescription drug rehab? / Does insurance cover prescription drug rehab?
- inline: Can prescription drug addiction be treated? / How long does prescription drug rehab take? / Does insurance cover prescription drug addiction treatment? / What medications are used for prescription drug withdrawal?

**26. src/app/addiction/sex-addiction-treatment/page.tsx — /addiction/sex-addiction-treatment**
- faqData: Can sex addiction be treated? / How long does sex addiction treatment take? / Does insurance cover sex addiction treatment? / What therapies are used for sex addiction? / Is sex addiction treatment confidential?
- inline: Can sex addiction be treated? / How long does sex addiction treatment take? / Does insurance cover sex addiction treatment? / What therapies are used for sex addiction?

**27. src/app/addiction/stimulant-addiction-treatment/page.tsx — /addiction/stimulant-addiction-treatment**
- faqData (4 only — note shorter array): What is stimulant addiction? / How long does stimulant addiction treatment take? / Does insurance cover stimulant addiction treatment? / What makes Desert Recovery Centers' stimulant treatment different?
- inline: What is stimulant addiction? / How long does stimulant addiction treatment take? / Does insurance cover stimulant addiction treatment? / What makes Desert Recovery Centers' stimulant treatment different?

> **Note (#27):** stimulant-addiction-treatment has IDENTICAL questions in faqData and inline arrays — likely accidental near-duplicate. Worth checking whether one was meant to be authoritative.

#### 28-36. /mental-health/* condition pages

Each page consumes `faqData["<slug>"]` via FAQSection AND renders `const faqs = [...]` via ConditionFAQ.

**28. src/app/mental-health/anxiety-treatment/page.tsx — /mental-health/anxiety-treatment** (faqData["anxiety-treatment"])
- faqData: What types of anxiety disorders do you treat? / What therapies are used for anxiety treatment? / How long does anxiety treatment take? / Does insurance cover anxiety treatment? / Is inpatient treatment necessary for anxiety?
- inline: What types of anxiety disorders do you treat? / What does anxiety treatment at DRC look like? / How long does anxiety treatment typically take? / Can anxiety be treated without medication? / Will I be able to manage anxiety after treatment ends?

**29. /mental-health/depression-treatment** (faqData["depression-treatment"])
- faqData: What types of depression do you treat? / What depression treatments are offered? / Can depression be treated alongside addiction? / Is residential depression treatment covered by insurance? / How long is depression treatment at Desert Recovery Centers?
- inline: How do I know if I need professional treatment for depression? / What types of depression do you treat? / How is depression treatment different at DRC compared to outpatient therapy? / Will I need medication for depression? / What happens if my depression returns after treatment?

**30. /mental-health/ptsd-treatment** (faqData["ptsd-treatment"])
- faqData: What PTSD treatments does Desert Recovery Centers offer? / Can PTSD be treated alongside addiction? / How long is PTSD residential treatment? / What is EMDR therapy for PTSD? / Does Desert Recovery Centers treat trauma?
- inline: Do I need a formal PTSD diagnosis to get treatment? / What is EMDR and how does it work? / Is it safe to process trauma in a residential setting? / What types of trauma do you treat? / How long does PTSD treatment take?

**31. /mental-health/bipolar-disorder-treatment** (faqData["bipolar-disorder-treatment"])
- faqData: How is bipolar disorder treated at Desert Recovery Centers? / Can bipolar disorder and addiction be treated together? / Is bipolar disorder treatment covered by insurance? / What medications are used for bipolar disorder? / Does Desert Recovery Centers treat bipolar disorder?
- inline: What is the difference between bipolar I and bipolar II? / How important is medication in bipolar treatment? / Can bipolar disorder be managed long-term? / What if I've been misdiagnosed with depression instead of bipolar disorder? / Do you treat bipolar disorder with co-occurring substance use?

**32. /mental-health/ocd-treatment** (faqData["ocd-treatment"])
- faqData: What is OCD treatment? / Does Desert Recovery Centers treat OCD? / What therapies are used for OCD? / How long is OCD treatment at Desert Recovery Centers? / Does insurance cover OCD treatment?
- inline: What is Exposure and Response Prevention (ERP)? / Is residential treatment necessary for OCD? / Can OCD be cured? / What if my OCD themes are embarrassing or disturbing? / Do you treat OCD alongside other conditions?

**33. /mental-health/adhd-add** (faqData["adhd-treatment"])
- faqData: Does Desert Recovery Centers treat ADHD in adults? / How common is ADHD and addiction co-occurrence? / What therapies are used for ADHD treatment? / Does insurance cover ADHD treatment? / What does ADHD treatment look like at DRC?
- inline: Can adults really have ADHD? / Why would someone with ADHD need residential treatment? / Do you prescribe stimulant medications for ADHD? / What's the connection between ADHD and substance use? / How is ADHD different from just being distracted or lazy?

**34. /mental-health/personality-disorder-treatment** (faqData["personality-disorder-treatment"])
- faqData: What is personality disorder treatment? / Does Desert Recovery Centers treat personality disorders? / What is DBT for personality disorders? / Can personality disorders be treated alongside addiction? / Does insurance cover personality disorder treatment?
- inline: What personality disorders do you treat? / What is DBT and why is it used for personality disorders? / Can personality disorders actually be treated? / How long does treatment for personality disorders take? / Do you work with family members during treatment?

**35. /mental-health/schizophrenia-treatment** (faqData["schizophrenia-treatment"])
- faqData: What is schizophrenia treatment? / Does Desert Recovery Centers treat schizophrenia? / What medications are used for schizophrenia? / Is inpatient treatment recommended for schizophrenia? / Does insurance cover schizophrenia treatment?
- inline: What is schizophrenia, exactly? / Is schizophrenia dangerous? / How important is medication in schizophrenia treatment? / Can someone with schizophrenia live independently? / Do you treat schizoaffective disorder as well?

**36. /mental-health/trauma-treatment** (faqData["trauma-therapy"] ← shared with /treatments/trauma-therapy)
- faqData (DUPLICATE of /treatments/trauma-therapy): What trauma therapies are offered? / Can trauma and addiction be treated together? / What is EMDR for trauma? / How long does trauma therapy take? / Does insurance cover trauma therapy?
- inline: What types of trauma do you treat? / What is the difference between trauma treatment and PTSD treatment? / How does EMDR work for trauma? / Is residential treatment necessary for trauma? / Do you treat trauma alongside substance use disorders?

### Pages that render inline `const faqs` ONLY (no faqData consumption)

#### 37. src/app/resources/faq/page.tsx — /resources/faq (master FAQ page)
- Q&A count: 30 (across 6 named categories)
- Data source: inline `const categories = [...]` via `FAQAccordion`
- Categories + questions:
  - **Admissions** (6): What types of insurance do you accept? / How do I know if I need residential vs. outpatient treatment? / What should I expect on my first day? / Is the admissions process confidential? / Can I tour the facility before committing to treatment? / How quickly can I start treatment?
  - **Insurance & Cost** (3): How much does treatment cost without insurance? / Will my insurance cover the full cost of treatment? / Do you offer payment plans?
  - **Treatment** (8): How long does treatment typically last? / Do you treat both mental health and addiction? / What does a typical day look like in residential treatment? / What therapeutic modalities do you use? / What credentials do your therapists have? / Do you offer gender-specific groups? / Do you use medication-assisted treatment (MAT)? / What if I relapse during or after treatment?
  - **Facilities & Daily Life** (5): Can I have my phone during treatment? / What should I bring to treatment? / How do you handle medical needs during treatment? / What are the facilities like? / Can I work during IOP?
  - **Family Involvement** (4): Can family members visit during treatment? / What is your visitation policy? / Do you offer family therapy? / How can I support my loved one during treatment?
  - **Aftercare & Alumni** (4): What happens after I complete treatment? / Do you provide aftercare support? / Do you help with sober living placement? / What is your approach to relapse prevention?

#### 38. src/app/insurance/page.tsx — /insurance (parent insurance page)
- Q&A count: 4
- Data source: raw inline `@type: FAQPage` schema (no React rendering — schema only)
- Questions:
  1. What if my insurance isn't listed?
  2. Will my employer find out I'm in treatment?
  3. What does insurance typically cover for rehab?
  4. Is there any cost for the insurance verification?

#### 39. src/app/facilities/page.tsx — /facilities
- Q&A count: 5
- Data source: raw inline `@type: FAQPage` schema + custom React rendering driven from same `faqSchema.mainEntity`
- Questions:
  1. Where are Desert Recovery Centers facilities located?
  2. How many beds does Desert Recovery Centers have?
  3. Are the facilities gender-specific?
  4. Are the facilities Joint Commission accredited?
  5. Can I tour the facilities before starting treatment?

#### 40. src/app/get-help/page.tsx — /get-help
- Q&A count: 5
- Data source: raw inline `@type: FAQPage` schema + custom React rendering
- Questions:
  1. How do I start treatment at Desert Recovery Centers?
  2. What should I bring to treatment?
  3. Is the admissions process confidential?
  4. How quickly can I be admitted?
  5. What if I am not sure I need treatment?

#### 41. src/app/resources/luxury-vs-traditional-rehab/page.tsx — /resources/luxury-vs-traditional-rehab
- Q&A count: 4
- Data source: inline `const FAQS = [...]` (uppercase) + custom `MedicalWebPage` JSON-LD + `LuxuryVsTraditionalContent` component
- Questions:
  1. What is the difference between luxury rehab and standard rehab?
  2. Is luxury addiction treatment more effective?
  3. Does insurance cover luxury rehab in Arizona?
  4. What amenities can I expect at a luxury rehab center?

#### 42. src/app/resources/luxury-vs-standard-rehab/page.tsx — /resources/luxury-vs-standard-rehab
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Is luxury rehab actually better than standard rehab?
  2. Does insurance cover luxury rehab?
  3. How long is a typical stay in luxury rehab?
  4. What makes Desert Recovery Centers different from national luxury rehab chains?
  5. Are the amenities in luxury rehab really necessary for recovery?

#### 43. src/app/resources/cost-of-rehab/page.tsx — /resources/cost-of-rehab
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. How much does 30 days of rehab cost in Arizona?
  2. Does insurance cover rehab in Arizona?
  3. What if I don&apos;t have insurance for rehab?
  4. Is luxury rehab covered by insurance?
  5. How does Desert Recovery Centers handle payment?

#### 44. src/app/resources/detox-guide/page.tsx — /resources/detox-guide
- Q&A count: 6
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Is detox painful?
  2. How long does detox take?
  3. Can I detox at home?
  4. What happens after detox is complete?
  5. Does insurance cover medical detox?
  6. What medications are used during detox?

#### 45. src/app/resources/intervention-guide/page.tsx — /resources/intervention-guide
- Q&A count: 6
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. How long does it take to plan an intervention?
  2. What if my loved one refuses to go to treatment?
  3. Should children be included in an intervention?
  4. Can we do an intervention without a professional?
  5. How much does an intervention cost?
  6. What should I do if the person becomes angry during the intervention?

#### 46. src/app/resources/what-to-bring/page.tsx — /resources/what-to-bring
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Can I bring my phone to rehab?
  2. What if I forget something important?
  3. Can I bring my own medications to rehab?
  4. How much clothing should I pack for rehab?
  5. Are there things that will be confiscated at intake?

#### 47. src/app/resources/addiction-detox-guide/antidepressants/page.tsx — /resources/addiction-detox-guide/antidepressants
- Q&A count: 8
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. How long does it take to wean off antidepressants?
  2. Can I stop antidepressants cold turkey?
  3. What are the most common antidepressant withdrawal symptoms?
  4. What is a typical taper schedule for Prozac?
  5. How do I deal with brain zaps during withdrawal?
  6. What if my depression returns during the taper?
  7. When should I call a doctor during antidepressant withdrawal?
  8. Does insurance cover supervised antidepressant discontinuation?

#### 48. src/app/insurance/aetna/page.tsx — /insurance/aetna
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Does Aetna cover residential rehab for addiction?
  2. Does Aetna's Employee Assistance Program (EAP) cover rehab?
  3. How long will Aetna cover treatment at Desert Recovery Centers?
  4. Does Aetna require prior authorization before I can enter rehab?
  5. What if I have an Aetna plan through the ACA Marketplace?

#### 49. src/app/insurance/blue-cross/page.tsx — /insurance/blue-cross
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Does Blue Cross Blue Shield of Arizona cover addiction treatment?
  2. Can I use an out-of-state BCBS plan for rehab in Arizona?
  3. What is the difference between BCBS PPO and HMO for rehab coverage?
  4. Does my federal BCBS plan (FEP) cover rehab?
  5. How many days of rehab will BCBS cover?

#### 50. src/app/insurance/cigna/page.tsx — /insurance/cigna
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Does Cigna cover inpatient rehab for drug and alcohol addiction?
  2. Is Desert Recovery Centers in-network with Cigna?
  3. How much will I pay out of pocket with Cigna insurance?
  4. Does Cigna require prior authorization for rehab?
  5. What if my Cigna plan denies coverage for treatment?

#### 51. src/app/insurance/humana/page.tsx — /insurance/humana
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Does Humana cover residential rehab for substance abuse?
  2. Does Humana Medicare Advantage cover drug and alcohol rehab?
  3. Does Humana cover rehab for veterans or military families?
  4. How does Humana decide what level of care to authorize?
  5. What should I do if Humana denies my treatment request?

#### 52. src/app/insurance/united/page.tsx — /insurance/united
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Does United Healthcare cover inpatient drug rehab?
  2. What is Optum and how does it affect my UHC rehab coverage?
  3. Does my employer-sponsored UHC plan cover rehab differently than a Marketplace plan?
  4. How does UHC determine medical necessity for addiction treatment?
  5. What if United Healthcare only approves a shorter stay than recommended?

#### 53. src/app/levels-of-care/page.tsx — /levels-of-care
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. What are the different levels of addiction treatment?
  2. What is the difference between PHP and IOP?
  3. Do I need detox before residential treatment?
  4. How do I know which level of care I need?
  5. Does insurance cover all levels of care?

#### 54. src/app/levels-of-care/detox/page.tsx — /levels-of-care/detox
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. What is drug and alcohol detox?
  2. How long does detox take?
  3. Is detox safe?
  4. Does insurance cover detox in Arizona?
  5. What happens after detox?

#### 55. src/app/levels-of-care/iop/page.tsx — /levels-of-care/iop
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. What is an intensive outpatient program?
  2. How many hours per week is IOP?
  3. Is IOP effective for addiction?
  4. Does insurance cover IOP in Arizona?
  5. Can I work while in IOP?

#### 56. src/app/levels-of-care/php/page.tsx — /levels-of-care/php
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. What is a partial hospitalization program?
  2. How is PHP different from inpatient treatment?
  3. How long is PHP?
  4. Does insurance cover PHP in Arizona?
  5. Who is PHP right for?

#### 57. src/app/levels-of-care/residential-treatment/page.tsx — /levels-of-care/residential-treatment
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. What is residential addiction treatment?
  2. How long is inpatient rehab?
  3. What is included in residential treatment?
  4. Does insurance cover residential rehab in Arizona?
  5. How is DRC different from other rehabs?

#### 58. src/app/adolescent-treatment/page.tsx — /adolescent-treatment
- Q&A count: 10
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. My teenager refuses to go to treatment. What do I do?
  2. Will my teenager be in groups with adults?
  3. Can my teenager keep going to school during treatment?
  4. How are parents involved?
  5. What if my teenager has tried therapy before and it did not help?
  6. Does insurance cover adolescent mental health treatment?
  7. Is TMS therapy safe for teenagers?
  8. How long does adolescent treatment take?
  9. What happens if my teenager has a crisis during treatment?
  10. How do I know if my teenager needs PHP versus IOP?

#### 59-67. /adolescent/* condition pages (9 pages)

Each page renders `const faqs` inline (no faqData consumption) AND has raw inline `@type: FAQPage` JSON-LD.

**59. /adolescent/depression** (5): How do I know if my teenager needs residential treatment for depression rather than outpatient therapy? / Is adolescent depression treatable? / Will my teenager be in treatment with adults? / Does insurance cover adolescent residential depression treatment? / How long does residential treatment for adolescent depression typically last?

**60. /adolescent/anxiety** (4): What is the difference between normal teenage worry and an anxiety disorder? / What is school refusal and is it treatable? / Can anxiety cause physical symptoms in teenagers? / Will my teenager be able to keep up with school during residential treatment?

**61. /adolescent/adhd** (3): My teenager was diagnosed with ADHD years ago and is on medication. Why are they still struggling? / Can ADHD cause emotional outbursts? / Is residential treatment appropriate for ADHD?

**62. /adolescent/bipolar** (3): How is bipolar disorder different from normal teenage mood swings? / Can teenagers be diagnosed with bipolar disorder? / My teenager was diagnosed with bipolar disorder but I am not sure the diagnosis is right. What should I do?

**63. /adolescent/ocd** (3): My teenager has intrusive thoughts that horrify them. Does that mean they are dangerous? / How do I know if my teenager has OCD or just anxiety? / Is OCD curable?

**64. /adolescent/ptsd-trauma** (3): My teenager has never talked about anything traumatic happening. Could they still have PTSD? / What is the difference between trauma and PTSD? / Can trauma treatment make things worse before they get better?

**65. /adolescent/self-harm** (3): My teenager says they self harm to feel better, not to die. Should I still be worried? / Will talking about self harm make it worse or give my teenager ideas? / How do I respond when I discover my teenager has been self harming?

**66. /adolescent/suicidal-ideation** (5): My teenager said they were not serious when they mentioned wanting to die. Should I still be concerned? / Will taking my teenager to treatment make them angry with me? / Does talking about suicide with my teenager give them ideas? / What is the difference between suicidal ideation and a suicide attempt? / If my teenager is in crisis right now, what should I do?

**67. /adolescent/substance-use** (4): My teenager says they can stop on their own. Do they really need residential treatment? / Is marijuana really a problem? / What if my teenager is resistant to treatment? / Do you treat adolescents who have overdosed?

#### 68. src/app/compare/drc-vs-apn/page.tsx — /compare/drc-vs-apn
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. Where is APN located compared to Desert Recovery Centers?
  2. How does DRC's clinical team compare?
  3. What is DRC's bed count per facility?
  4. Does DRC specialize in dual diagnosis?
  5. Do both programs accept insurance?

#### 69. src/app/compare/luxury-rehab-arizona/page.tsx — /compare/luxury-rehab-arizona
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ`
- Questions:
  1. What makes a rehab center 'luxury'?
  2. How much does luxury rehab cost in Arizona?
  3. Is luxury rehab more effective than standard rehab?
  4. Should I stay in Arizona for rehab or travel out of state?
  5. What should I look for when choosing a luxury rehab in Arizona?

#### 70. src/app/rehab-near-me/page.tsx — /rehab-near-me
- Q&A count: 5
- Data source: inline `const faqs` via `ConditionFAQ` + `getFAQSchema` JSON-LD
- Questions:
  1. How many locations does Desert Recovery Centers have?
  2. Which DRC location is closest to me?
  3. Can I tour a facility before committing?
  4. How quickly can I start treatment?
  5. Do all three locations accept the same insurance?

#### 71. src/app/treatments/tms-therapy/page.tsx — /treatments/tms-therapy
- Q&A count: 6
- Data source: inline `const faqs` via custom rendering + `InlineFAQSchema` (only page using this helper)
- Questions:
  1. What is TMS therapy and how does it differ from other treatments?
  2. Is TMS covered by insurance?
  3. How long does a TMS treatment course take?
  4. Can TMS be combined with my current therapy or medication?
  5. Is TMS safe?
  6. Is NeuroStar TMS therapy available now at Desert Recovery Centers?

#### 72. src/app/addiction-mental-health-treatment-facilities-lp/page.tsx — /addiction-mental-health-treatment-facilities-lp
- Q&A count: 3
- Data source: inline `const faqs` via custom rendering + `getFAQSchema` JSON-LD
- Questions:
  1. How fast can I be admitted to Desert Recovery Centers?
  2. What does the admissions process look like?
  3. What insurance plans do you accept?

## Shared Data Files

### src/data/faq-data.ts
- Type: `Record<string, Array<{ question: string; answer: string }>>`
- Total keys: 36
- Total Q&As: 186 (5 per key for most; homepage=12; stimulant-addiction-treatment=4)
- Consumed by: 35 distinct pages (one key, "trauma-therapy", consumed by 2 pages)
- **UNUSED key: "about-us"** (5 Q&As authored but rendered nowhere — no /about-us page exists in the route tree; possibly orphaned from a prior nav redesign)

Keys (slug → consuming page → Q&A count):
- `homepage` → `/` (12)
- `our-team` → `/our-team` (5)
- `contact` → `/contact` (5)
- `addiction-treatment` → `/addiction-treatment` (5)
- `mental-health` → `/mental-health` (5)
- `treatments` → `/treatments` (5)
- `bridgework` → `/treatments/bridgework` (5)
- `cbt-therapy` → `/treatments/cbt-cognitive-behavioral-therapy` (5)
- `dbt-therapy` → `/treatments/dbt-dialectical-behavior-therapy` (5)
- `dual-diagnosis-treatment` → `/treatments/dual-diagnosis-treatment` (5)
- `emdr` → `/treatments/emdr-therapy` (5)
- `holistic-therapy` → `/treatments/holistic-therapies` (5)
- `softwave-therapy` → `/treatments/softwave-therapy` (5)
- `trauma-therapy` → `/treatments/trauma-therapy` AND `/mental-health/trauma-treatment` (5; **duplicate render**)
- `locations/glendale` → `/locations/glendale` (5)
- `locations/scottsdale` → `/locations/scottsdale` (5)
- `locations/phoenix` → `/locations/phoenix-php-iop` (5)
- `anxiety-treatment` → `/mental-health/anxiety-treatment` (5)
- `depression-treatment` → `/mental-health/depression-treatment` (5)
- `ptsd-treatment` → `/mental-health/ptsd-treatment` (5)
- `bipolar-disorder-treatment` → `/mental-health/bipolar-disorder-treatment` (5)
- `ocd-treatment` → `/mental-health/ocd-treatment` (5)
- `adhd-treatment` → `/mental-health/adhd-add` (5)
- `personality-disorder-treatment` → `/mental-health/personality-disorder-treatment` (5)
- `schizophrenia-treatment` → `/mental-health/schizophrenia-treatment` (5)
- `alcoholism-treatment` → `/addiction/alcoholism-treatment` (5)
- `heroin-addiction-treatment` → `/addiction/heroin-addiction-treatment` (5)
- `meth-addiction-treatment` → `/addiction/meth-addiction-treatment` (5)
- `fentanyl-addiction-treatment` → `/addiction/fentanyl-addiction-treatment` (5)
- `cocaine-addiction-treatment` → `/addiction/cocaine-addiction-treatment` (5)
- `marijuana-addiction-treatment` → `/addiction/marijuana-addiction-treatment` (5)
- `prescription-drug-addiction-treatment` → `/addiction/prescription-drug-addiction-treatment` (5)
- `stimulant-addiction-treatment` → `/addiction/stimulant-addiction-treatment` (4 — array short by one)
- `gambling-addiction-treatment` → `/addiction/gambling-addiction-treatment` (5)
- `sex-addiction-treatment` → `/addiction/sex-addiction-treatment` (5)
- `about-us` → **UNUSED** (5)

## Duplicate / Cluster Report

### Cluster A: trauma-therapy verbatim duplicate (HIGH PRIORITY — same JSON-LD on two URLs)
- faqData["trauma-therapy"] (5 Q&As) is rendered identically on:
  - /treatments/trauma-therapy
  - /mental-health/trauma-treatment
- Both URLs emit the same `FAQPage` JSON-LD payload.
- Recommended action: pick a canonical (most likely /treatments/trauma-therapy since it matches the slug) and either drop the FAQ block on the other URL or stop emitting the JSON-LD on the non-canonical one to avoid duplicate-content signals.

### Cluster B: stimulant-addiction-treatment near-self-duplicate
- faqData["stimulant-addiction-treatment"] (4 Q&As) and the inline `const faqs` array on /addiction/stimulant-addiction-treatment use the SAME 4 question titles. Two accordions render the same list. (Answers may differ — not inspected verbatim per the YMYL gate.)
- Recommended action: collapse to one block. Pick faqData (canonical) or the inline (page-specific) and delete the other.

### Cluster C: "Does insurance cover [X]?" pattern (50+ instances)
Every faqData treatment key plus most inline arrays carry an insurance question. Variants observed:
- "Does insurance cover X treatment?" (most addiction inline pages)
- "Does X cover residential rehab for addiction?" (insurance carrier pages)
- "Is X treatment covered by insurance?" (some mental-health pages)
- "Does insurance cover rehab in Arizona?" (cost-of-rehab, /resources)
- Answer consistency: NOT VERIFIED (per YMYL gate, did not deeply inspect answers; this is high-priority for Phase B review).
- Recommended action: factor a canonical "insurance coverage" Q&A into the central data and reference it from each page; OR keep page-specific phrasing but audit answers for consistency with the master /insurance page.

### Cluster D: Treatment-duration questions
- "How long is X treatment?" / "How long does X rehab take?" appears 30+ times across faqData and inline.
- Verbatim duplicates: many slug-specific variants ("How long does heroin rehab take?", "How long does meth rehab take?")
- Answer divergence: durations vary by condition (30-90 days, 30-60 days, 60-90 days, "30 days") — divergence may be clinically appropriate but should be reviewed for consistency where the same condition appears on multiple pages (e.g. anxiety appears in faqData["anxiety-treatment"] AND inline on /mental-health/anxiety-treatment).
- Recommended action: Phase B should cross-check durations on each pair of overlapping surfaces. NO EDITS WITHOUT THAI REVIEW.

### Cluster E: "Can [X] be treated?" / "Does Desert Recovery Centers treat [X]?"
- ~15 addiction/mental-health inline arrays open with this question.
- Often a near-paraphrase of an "Is X treatable?" or "Does DRC treat X?" question already in the corresponding faqData entry.
- Recommended action: pick one phrasing per condition and dedupe.

### Cluster F: Therapy definitions (CBT/DBT/EMDR/MAT)
- "What is CBT?" appears in: faqData["treatments"], faqData["cbt-therapy"], inline on /resources/faq Treatment section, mentioned in Cluster D pages.
- "What is DBT?" / "What is EMDR?" — similar pattern.
- Verbatim or near-verbatim repetition. These are good "speakable" candidates so duplication may be intentional for AEO; but the JSON-LD repetition on multiple URLs may dilute signals.

### Cluster G: Phone & admissions intake
- Variants of "How do I start treatment?" / "How quickly can I be admitted?" / "Is the admissions process confidential?" appear on:
  - /, /contact, /get-help, /resources/faq, /addiction-mental-health-treatment-facilities-lp, /rehab-near-me, multiple addiction pages
- Each surface uses a slightly different phrasing of the same answer. Phone numbers vary (see YMYL Flag 1).

## YMYL Flag List

> **Per the YMYL gate, NO edits are proposed. These are flagged for Thai's review only.**

### Flag 1 — Phone-number inconsistency (REVIEW URGENT)
- **Location**: `src/data/faq-data.ts`
- Specifically: `faqData["homepage"]` Q10 ("How do I start treatment at Desert Recovery Centers?") and `faqData["about-us"]` Q3 both list **(623) 323-1012** as the primary intake number, while every other key in the same file (and most inline arrays) lists **(480) 931-3617** as the primary intake number.
- (623) 323-1012 is the Glendale facility direct line; (480) 931-3617 is the Scottsdale and general-admissions line.
- Severity: **REVIEW URGENT** — phone routing disagreement on the homepage FAQ vs. every other surface is a customer-experience and attribution risk (CTM source split).
- Note: `faqData["homepage"]` Q2 itself lists ALL THREE numbers correctly with their facilities. The inconsistency is only in Q10 (homepage) and Q3 (about-us, unused).

### Flag 2 — Incomplete-sentence answer in /resources/faq
- **Location**: `src/app/resources/faq/page.tsx` line 67-68 (Treatment category, "How long does treatment typically last?")
- Answer text begins: *"Treatment duration varies by individual need. Residential programs typically range from 30 days. PHP runs 4-6 weeks…"*
- The phrase "typically range from 30 days." appears truncated (likely meant "30 to 60 days" or "30 to 90 days" given other surfaces use "30 to 90 days"). Reads as a grammatical error in YMYL copy.
- Severity: **REVIEW URGENT** — this is the master FAQ page; the broken sentence is the most prominent treatment-duration claim on the site.

### Flag 3 — Unused faqData key "about-us"
- **Location**: `src/data/faq-data.ts` lines 201-207
- 5 Q&As about company history, accreditations, insurance, bed counts, differentiation are authored but never rendered (no /about-us route exists).
- Severity: low — dead content; harmless until referenced. Worth deleting OR creating the page.

### Flag 4 — Double-rendering of FAQPage JSON-LD on 30 URLs
- 30 pages emit two separate FAQPage JSON-LD blocks (one from `getFAQSchema(faqData[…])`, one from the inline `const faqs` if rendered with `getFAQSchema` or `InlineFAQSchema`).
- Note: most pages with both inline + faqData only emit one schema (the faqData one); the inline ConditionFAQ block has no JSON-LD attached. Only specific pages emit two — needs a per-page audit. The /locations/phoenix-php-iop page is confirmed to emit two (one inline schema in raw JSON, one via getFAQSchema).
- Severity: medium — Google guidance discourages duplicate FAQPage schema on a single URL.

---

## RESOLUTION NOTE — Flag 4 (added 2026-05-02 by Batch 5.2 Phase A audit)

**Status:** RESOLVED — false positive

**Audit findings:**
- Built-HTML inspection: 60 URLs emit FAQPage schema; ALL emit exactly ONE <script type="application/ld+json"> with @type:FAQPage. Zero true double-emits.
- The "30 URLs double-emit" claim from this Phase A inventory was caused by counting raw "FAQPage" substring occurrences without distinguishing the JSON-LD script tag from the Next.js RSC flight payload (self.__next_f.push). The flight payload is a normal hydration artifact and Google does not parse it as a second schema.
- Specific case: /locations/phoenix-php-iop has TWO FAQ-related data structures in source (const faqs for visual <ConditionFAQ /> + const faqSchema for JSON-LD), but only faqSchema flows to the <SchemaScript> output. Inventory analyst conflated these.

**Action taken:** None required. No code changes shipped for Flag 4.

**Optional follow-up (not recommended pre-cutover):** 12 pages currently use inline `const faqSchema = {...}` blocks; could migrate to centralized getFAQSchema() helper in src/lib/schema.ts for code consistency. Pure DRY refactor with no SEO/UX value. Defer to post-cutover technical-debt cleanup.

### Flag 5 — Specific treatment-duration claims
- Throughout faqData and inline arrays: "30 to 90 days", "30 to 60 days", "60 to 90 days", "8 to 12 weeks IOP", "4 to 6 weeks PHP", "5 to 6 hours per day, 5 days per week".
- These are time-bounded clinical claims; if challenged, must be defensible. Joint Commission / LegitScript audits typically expect these match the actual program.
- Severity: medium — flag for clinical review (Dr. An Nguyen) before any edits.

### Flag 6 — Specific clinical statistics
- `faqData["marijuana-addiction-treatment"]` Q2 answer: *"Approximately 9% of marijuana users develop dependence, and the rate is higher among those who begin using in adolescence or use daily."*
- `faqData["stimulant-addiction-treatment"]` Q1 answer: cites neurological "downregulation" mechanism.
- Specific percentages and biological mechanisms — citation-worthy under YMYL/E-E-A-T but no on-page citation present.
- Severity: medium — flag for Dr. Nguyen review; not urgent unless audited.

### Flag 7 — Medication brand names mentioned in Q&A answers
- Mentioned: buprenorphine (Suboxone), naltrexone (Vivitrol), Adderall, Ritalin, Prozac (in /resources/addiction-detox-guide/antidepressants).
- /resources/addiction-detox-guide/antidepressants Q4 specifically asks "What is a typical taper schedule for Prozac?" — answers will need rigorous YMYL review since taper schedules are medical advice.
- Severity: REVIEW URGENT for the Prozac taper Q&A specifically; medium for other brand mentions.

### Flag 8 — Bed-count claims
- `faqData["homepage"]` Q5: "Each Desert Recovery Centers facility maintains a maximum of 10 residential beds."
- `faqData["about-us"]` Q4: "approximately 10 beds per residential facility across our Glendale and Scottsdale locations."
- /facilities schema Q2: "Total residential capacity is 20 beds across Glendale and Scottsdale."
- All three are internally consistent (10 + 10 = 20) but the precision varies ("maximum 10", "approximately 10", "10 beds per facility"). Audit-worthy.
- Severity: low.

### Flag 9 — TriCare/TriWest in-network claim
- `faqData["homepage"]` Q3 answer: *"DRC is also in-network with Tricare and TriWest."*
- A specific in-network claim. If TriCare/TriWest credentialing changed, this must be updated.
- Severity: medium — flag for verification with admissions team.

## Phase B Recommendation

Before any consolidation edits, Phase B should be split into TWO sub-phases:

### Phase B.1 — YMYL fixes ONLY (require Thai approval per fix)
Each item below requires explicit "approved to commit and push" from Thai before editing. NO bulk edits.

1. **Phone-number reconciliation (Flag 1)**: confirm whether `faqData["homepage"]` Q10 should use (480) 931-3617 (matching every other key) and whether `faqData["about-us"]` should be deleted entirely (Flag 3). Single tiny edit, one PR.
2. **Incomplete-sentence fix (Flag 2)**: confirm correct duration phrasing for /resources/faq Treatment Q1 and patch. Single line edit.
3. **Prozac taper Q&A clinical review (Flag 7)**: route to Dr. Nguyen for verbatim approval of `/resources/addiction-detox-guide/antidepressants` Q4 answer before any other action. May also want clinical-review of other antidepressant Q&As on that page.

### Phase B.2 — Consolidation/dedup work (only after B.1 is clear)
This phase has higher edit blast radius. Recommend Thai review the full inventory above before authorizing scope.

4. **Resolve trauma-therapy duplicate (Cluster A)**: pick canonical URL between /treatments/trauma-therapy and /mental-health/trauma-treatment, drop the duplicate FAQ rendering on the other.
5. **Resolve stimulant near-duplicate (Cluster B)**: collapse the two identically-titled FAQ blocks on /addiction/stimulant-addiction-treatment into one.
6. **Audit double-FAQ rendering on 30 pages (Cluster Report header)**: decide whether the dual-accordion pattern (ConditionFAQ above + FAQSection below) is intentional UX or accidental drift. If consolidating, the architecture decision is: do we keep faqData (centralized) and remove inline, or keep inline (page-specific) and retire faqData? A hybrid keeps both but only emits ONE JSON-LD schema per URL.
7. **Insurance Q&A canonicalization (Cluster C)**: define a canonical `insurance-coverage` block in faqData and reference it from all addiction/mental-health pages. Audit answer text for cross-page consistency before consolidating.
8. **Therapy-definition deduplication (Cluster F)**: CBT/DBT/EMDR definitions appear on 5+ surfaces each. Consider: a single canonical definitions block (`faqData["definitions/cbt"]` etc.) referenced via component composition rather than duplicated.
9. **Decide fate of "about-us" key (Flag 3)**: build a /about-us page that consumes it, OR delete the dead key.
10. **JSON-LD audit (Flag 4)**: confirm no URL is emitting two FAQPage schemas. /locations/phoenix-php-iop is the most likely offender.

### What NOT to do in Phase B (recommended exclusions)

- Do NOT silently rephrase or "improve" YMYL Q&A copy. Per memory `feedback_ymyl_factual_corrections`, surface discrepancies and wait for explicit approval.
- Do NOT delete /resources/faq content; it's the master AEO surface.
- Do NOT delete adolescent/* inline arrays; those parent-facing Q&As are deliberately page-specific (different audience from clinical addiction pages).
- Do NOT change phone numbers in bulk; coordinate with the CTM source-breakdown work (see memory `project_ctm_source_breakdown`).

### Estimated scope sizes for Phase B planning

- Phase B.1 (YMYL fixes): 3 atomic PRs, each <10 lines diff, but each requires explicit pre-approval. ~1-2 hours work elapsed.
- Phase B.2 (consolidation): much larger — touches up to 60 page files. Should be broken into ≥4 PRs (trauma-therapy fix, stimulant collapse, double-render audit, therapy-definition dedup). ~1-2 days work elapsed.

**STAND-DOWN until Thai reviews this inventory and explicitly authorizes Phase B scope.**
