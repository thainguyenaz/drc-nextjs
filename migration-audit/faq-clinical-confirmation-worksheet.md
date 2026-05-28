# FAQ Clinical Confirmation Worksheet

**For:** Dr. An Nguyen, Clinical Director
**Prepared by:** drc-nextjs cutover audit
**Date prepared:** 2026-05-28
**Purpose:** A sitewide audit of the drc-nextjs FAQ rendering identified 24 pages where two FAQ components mount on the same URL and produce two visible "Frequently Asked Questions" blocks. On 7 of those pages the two FAQ blocks make factually different claims about the same question. Before any of those pages can be corrected in code, the true answer needs to be confirmed by clinical leadership. This worksheet asks for that confirmation.

## Root cause (for the record)

Every contradiction documented in this worksheet exists because each affected page has TWO sources of FAQ truth that were never reconciled:

1. A local `const faqs = [...]` array defined inline in the page's `.tsx` file, fed to one FAQ component
2. A canonical entry in the `src/data/faq-data.ts` registry under the page's slug, fed to a second FAQ component

Both components hardcode the same `<h2>Frequently Asked Questions</h2>` heading, so both blocks render on the same URL. Where the two sources disagree on facts, the user sees both claims side by side.

The 7 flip-blocking contradictions identified here are visible symptoms. The underlying pattern (dual-source FAQ truth) exists on 24 pages and is the root condition that allowed the drift to occur.

The engineering remediation, performed AFTER clinical confirmation on this worksheet, will:
- Treat `src/data/faq-data.ts` as the single source of FAQ truth sitewide
- Correct each canonical entry per the clinically-confirmed answer in this worksheet
- Migrate any clinically-valuable local questions that have no canonical equivalent into the canonical registry
- Remove every local `const faqs = [...]` array and its associated component instance, sitewide, so this drift cannot recur

The fix kills the pattern, not just the 7 visible instances.

## How to use this worksheet

1. Read each item below. The conflicting claims are quoted verbatim from the live production code.
2. Fill in the `TRUE ANSWER` line for each item with the clinically and operationally correct answer that should appear on the public website.
3. Where the conflict is between two phrasings of the same underlying fact (a length of stay range, a program cadence), one answer is sufficient.
4. **For items involving a claimed-treatment list (Items 6, 9, Q2, Q3):** the true answer is the list of conditions or treatments DRC can genuinely substantiate treating, which **may be SHORTER than either local or canonical**. Do NOT default to merging both lists into a superset. Claiming treatment for a condition DRC does not specifically program for is over-claim of the same compliance category as Item 1.
5. Return the completed worksheet to engineering. No code changes will be made until clinical confirmation is on every item.

---

## Section 1: Flip-blocking factual contradictions (7 pages, 9 items)

These items render two contradicting claims on the same public URL. They are blocking cutover to desertrecoverycenters.com until corrected.

**Reminder for claimed-treatment-list items (Items 6 and 9):** the true answer is the list DRC can genuinely substantiate treating. It may be SHORTER than either side. Do not combine into a superset; remove aspirational items.

---

### Item 1 — COMPLIANCE-FLAGGED: prescription drug detox / tapering location

**Page:** `/addiction/prescription-drug-addiction-treatment`
**Question being answered:** "Can prescription drug addiction be treated?" (local) / "What is prescription drug addiction treatment?" (canonical)

**LOCAL claim (verbatim):**
> Yes. Prescription drug addiction, whether involving opioid painkillers, benzodiazepines, or stimulants, is a treatable medical condition. At Desert Recovery Centers, our doctoral-level clinicians use medically supervised tapering, MAT, and behavioral therapy in our Arizona facilities with just 10 beds per location for safe, individualized care.

**CANONICAL claim (verbatim):**
> Prescription drug addiction treatment addresses dependence on opioid painkillers, benzodiazepines, stimulants, and other prescribed medications. Desert Recovery Centers coordinates medically supervised detox through trusted partner facilities, then provides residential care and evidence-based therapies at our Arizona locations.

**Conflict (one line):** Where medically supervised detox / tapering happens: at DRC's 10-bed Arizona facilities (local) vs at trusted partner facilities, with DRC handling residential care afterward (canonical).

**COMPLIANCE-FLAGGED:** local claim appears to contradict the documented no-in-house-detox operating model. Confirm correct operational language.

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 2 — cocaine rehab length of stay

**Page:** `/addiction/cocaine-addiction-treatment`
**Question being answered:** "How long does cocaine rehab take?"

**LOCAL claim (verbatim):**
> Cocaine rehab typically involves 30 days of residential treatment, followed by PHP and IOP for continued support. Because cocaine addiction is primarily psychological, treatment focuses on rebuilding your brain's natural reward system over time. Desert Recovery Centers customizes every treatment plan.

**CANONICAL claim (verbatim):**
> Residential cocaine addiction treatment typically ranges from 30 to 90 days. Treatment length is determined by individual clinical needs, severity of addiction, and co-occurring conditions.

**Conflict (one line):** Length of residential stay: 30 days (local) vs 30 to 90 days (canonical).

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 3 — PTSD residential length of stay

**Page:** `/mental-health/ptsd-treatment`
**Question being answered:** "How long does PTSD treatment take?" (local) / "How long is PTSD residential treatment?" (canonical)

**LOCAL claim (verbatim):**
> Residential PTSD treatment typically lasts 30 days, depending on the severity and complexity of your trauma. Some clients with complex or developmental trauma benefit from longer stays. Our outpatient PHP and IOP programs provide 6 to 12 weeks of continued support. Your clinical team adjusts the timeline based on your progress and needs.

**CANONICAL claim (verbatim):**
> PTSD residential treatment typically ranges from 30 to 90 days based on individual assessment and clinical needs.

**Conflict (one line):** Length of residential stay: 30 days (local) vs 30 to 90 days (canonical).

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 4 — marijuana rehab length of stay

**Page:** `/addiction/marijuana-addiction-treatment`
**Question being answered:** "How long does marijuana rehab take?"

**LOCAL claim (verbatim):**
> Marijuana rehab varies by severity. Some clients benefit from 30 days of residential care for a full reset, while others start with PHP or IOP. Withdrawal symptoms like insomnia and irritability typically resolve within 2 to 4 weeks. Desert Recovery Centers tailors every treatment plan to your situation.

**CANONICAL claim (verbatim):**
> Residential marijuana treatment typically ranges from 30 to 60 days. Many clients with cannabis use disorder also have co-occurring mental health conditions that benefit from extended treatment.

**Conflict (one line):** Length of residential stay: 30 days (local) vs 30 to 60 days (canonical).

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 5 — anxiety treatment length of stay

**Page:** `/mental-health/anxiety-treatment`
**Question being answered:** "How long does anxiety treatment typically take?" (local) / "How long does anxiety treatment take?" (canonical)

**LOCAL claim (verbatim):**
> Residential anxiety treatment typically ranges from 30 to 60 days, though some clients benefit from extended stays of up to 90 days. Outpatient programs (PHP and IOP) generally run 6 to 12 weeks. Your clinical team will continuously reassess your progress and adjust the timeline to ensure lasting results.

**CANONICAL claim (verbatim):**
> Residential anxiety treatment at Desert Recovery Centers typically ranges from 30 to 90 days depending on severity and individual treatment needs.

**Conflict (one line):** Length of residential stay: 30 to 60 days, extending up to 90 (local) vs 30 to 90 days as the baseline range (canonical).

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 6 — anxiety disorders claimed-treated (same page as Item 5)

**Page:** `/mental-health/anxiety-treatment`
**Question being answered:** "What types of anxiety disorders do you treat?"

**LOCAL claim (verbatim):**
> We treat the full spectrum of anxiety disorders including generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, specific phobias, agoraphobia, and separation anxiety disorder. Many of our clients also experience anxiety alongside depression or substance use, and our dual diagnosis approach addresses all conditions simultaneously.

**CANONICAL claim (verbatim):**
> We treat generalized anxiety disorder, panic disorder, social anxiety disorder, OCD, and PTSD-related anxiety using evidence-based therapies in a luxury residential setting.

**Conflict (one line):** Which anxiety disorders DRC claims to treat: local lists specific phobias + agoraphobia + separation anxiety; canonical lists OCD + PTSD-related anxiety. Overlap on 3 disorders, divergence on 4.

> _Note: confirm only the anxiety disorders DRC genuinely treats. The true list may be SHORTER than either side. Do not merge into a superset; remove any that are aspirational. Claiming treatment for a condition DRC does not specifically program for is over-claim of the same category as Item 1._

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 7 — prescription drug rehab length of stay (same page as Item 1)

**Page:** `/addiction/prescription-drug-addiction-treatment`
**Question being answered:** "How long does prescription drug rehab take?" (local) / "How long is prescription drug rehab?" (canonical)

**LOCAL claim (verbatim):**
> Treatment length depends on the medication class involved. Benzodiazepine tapering can take weeks to months. Opioid detox typically lasts 7 to 14 days, followed by 30 days of residential care. Desert Recovery Centers creates a custom timeline based on your specific substance, dosage history, and recovery goals.

**CANONICAL claim (verbatim):**
> Residential treatment for prescription drug addiction typically ranges from 30 to 90 days depending on the substance, severity of dependence, and co-occurring conditions.

**Conflict (one line):** Length of residential stay: 30 days following 7 to 14 days of detox (local) vs 30 to 90 days residential (canonical). Local also asserts in-house benzodiazepine tapering — see Item 1.

**TRUE ANSWER (clinical confirmation):** ____

---

### Item 8 — Phoenix PHP and IOP program cadence

**Page:** `/locations/phoenix-php-iop`
**Question being answered:** "What is an Intensive Outpatient Program (IOP)?" and "What is the difference between PHP and IOP?" (local) / "What is the difference between PHP and IOP at the Phoenix location?" and "How long is the IOP program at the Phoenix facility?" (canonical)

**LOCAL claim for IOP (verbatim):**
> IOP meets 3 hours per day, 3 to 5 days per week. It delivers meaningful therapy, including group sessions and individual appointments, while allowing you to maintain your daily responsibilities like work, school, and family.

**LOCAL claim for PHP / IOP comparison (verbatim):**
> PHP is more intensive. It meets 5 to 6 hours per day, 5 days per week, and is appropriate for clients who need daily clinical support. IOP meets 3 hours per day, 3 to 5 days per week, and is better suited for clients who are more stabilized or who have a strong support system at home.

**CANONICAL claim (verbatim):**
> Partial Hospitalization (PHP) provides 5 to 6 hours of structured programming per day, 5 days per week. Intensive Outpatient (IOP) is 3 to 4 hours per day, 3 to 4 days per week. Both allow clients to live at home while receiving clinical treatment.

**CANONICAL claim, IOP duration (verbatim):**
> The IOP program at the Phoenix location typically runs 8 to 12 weeks, with sessions 3 to 4 days per week.

**Conflict (one line):** Phoenix IOP cadence: 3 hours per day, 3 to 5 days per week (local) vs 3 to 4 hours per day, 3 to 4 days per week (canonical). PHP cadence agrees both sides.

**TRUE ANSWER (clinical confirmation):**
- PHP: ____ hours per day, ____ days per week
- IOP: ____ hours per day, ____ days per week, typical program length ____ weeks

---

### Item 9 — depression types claimed-treated

**Page:** `/mental-health/depression-treatment`
**Question being answered:** "What types of depression do you treat?"

**LOCAL claim (verbatim):**
> We treat all forms of depressive disorders including major depressive disorder (MDD), persistent depressive disorder (dysthymia), seasonal affective disorder (SAD), postpartum depression, and treatment-resistant depression. Our clinical team is also experienced in treating depression that co-occurs with anxiety, trauma, substance use disorders, and other mental health conditions.

**CANONICAL claim (verbatim):**
> We treat major depressive disorder, persistent depressive disorder, bipolar depression, postpartum depression, and depression co-occurring with substance use disorders.

**Conflict (one line):** Which depression types DRC claims to treat: local lists seasonal affective disorder + treatment-resistant depression; canonical lists bipolar depression + depression co-occurring with substance use. Overlap on 3 conditions, divergence on 4.

> _Note: confirm only the depression types DRC genuinely treats. The true list may be SHORTER than either side. Do not merge into a superset; remove any that are aspirational. Claiming treatment for a condition DRC does not specifically program for is over-claim of the same category as Item 1._

**TRUE ANSWER (clinical confirmation):** ____

---

## Section 2: Lower-priority / quality items (4 items)

These are not flip-blocking factual contradictions, but they are visible quality issues on the same set of pages. Including them so they are not lost.

---

### Q1 — Scottsdale length-of-stay sentence renders incomplete

**Page:** `/locations/scottsdale`
**Question being answered:** "How long does residential treatment typically last?" (local only, no canonical equivalent)

**LOCAL claim (verbatim):**
> Residential stays typically range from 30 days, depending on the severity and complexity of your condition. Your clinical team continuously evaluates your progress and adjusts the timeline to ensure you have the strongest possible foundation before stepping down to a lower level of care.

**Issue (one line):** The sentence reads "range from 30 days," with no upper bound — appears to be a missing "to N days" clause. Renders to users as a grammatically broken length-of-stay claim.

**TRUE ANSWER (clinical confirmation):** Residential stays range from ____ to ____ days. ____

---

### Q2 — Scottsdale conditions-treated list drift

**Page:** `/locations/scottsdale`
**Question being answered:** "What conditions do you treat at the Scottsdale center?" (local) / "What is treated at the Scottsdale location?" (canonical)

**LOCAL claim (verbatim):**
> We treat the full spectrum of mental health conditions and substance use disorders, including anxiety, depression, PTSD, bipolar disorder, OCD, alcohol addiction, opioid dependence, stimulant addiction, and more. Our dual diagnosis approach treats co-occurring conditions simultaneously for stronger outcomes.

**CANONICAL claim (verbatim):**
> The Scottsdale facility provides residential inpatient treatment for addiction and mental health conditions including alcohol addiction, opioid addiction, meth addiction, depression, anxiety, PTSD, bipolar disorder, and other co-occurring disorders.

**Issue (one line):** Local lists OCD + stimulant addiction (not in canonical); canonical lists meth addiction (not in local). Both lists end with "and more" / "and other," so neither is strictly exclusive, but they imply different facility specializations.

> _Note: confirm only the conditions the Scottsdale facility genuinely treats. The true list may be SHORTER than either side. Do not merge into a superset; remove any that are aspirational. Claiming treatment for a condition DRC does not specifically program for is over-claim of the same category as Item 1._

**TRUE ANSWER (clinical confirmation):** ____

---

### Q3 — personality disorders list drift

**Page:** `/mental-health/personality-disorder-treatment`
**Question being answered:** "What personality disorders do you treat?" (local) / "Does Desert Recovery Centers treat personality disorders?" (canonical)

**LOCAL claim (verbatim):**
> We treat the full range of personality disorders, with particular expertise in borderline personality disorder (BPD), which is the most common personality disorder seen in treatment settings. We also treat narcissistic personality disorder, avoidant personality disorder, dependent personality disorder, and other Cluster A, B, and C personality conditions. Treatment is always individualized based on…

**CANONICAL claim (verbatim):**
> Yes. We treat borderline personality disorder, narcissistic personality disorder, antisocial personality disorder, and other personality disorders through specialized clinical programming at our Arizona facilities.

**Issue (one line):** Local lists avoidant + dependent + Cluster A/B/C; canonical lists antisocial. Both inclusive lists, different named specializations.

> _Note: confirm only the personality disorders DRC genuinely treats. The true list may be SHORTER than either side. Do not merge into a superset; remove any that are aspirational. Claiming treatment for a condition DRC does not specifically program for is over-claim of the same category as Item 1._

**TRUE ANSWER (clinical confirmation):** ____

---

### Q4 — meth treatment therapy emphasis

**Page:** `/addiction/meth-addiction-treatment`
**Question being answered:** "Can meth addiction be treated?" (local) / "How is meth addiction treated?" (canonical)

**LOCAL claim (verbatim):**
> Yes. While methamphetamine addiction is one of the most challenging substance use disorders, it responds to evidence-based behavioral therapies. At Desert Recovery Centers, our doctoral-level clinicians use the Matrix Model, CBT, and contingency management in our Arizona facilities with just 10 beds per location for intensive, personalized care.

**CANONICAL claim (verbatim):**
> Meth addiction treatment includes residential inpatient care, behavioral therapies including CBT and DBT, holistic healing modalities, group therapy, and long-term aftercare planning.

**Issue (one line):** Local foregrounds Matrix Model + contingency management; canonical foregrounds DBT + holistic. Both behavioral, but different named therapy emphasis.

**TRUE ANSWER (clinical confirmation):** ____

---

## Notes

- All quotes above are taken verbatim from `src/data/faq-data.ts` and the per-page `const faqs = [...]` arrays inside each `page.tsx` as of 2026-05-28.
- No code changes have been made based on these conflicts. Engineering is awaiting clinical confirmation on each item before touching the affected pages.
- Once this worksheet is returned, the engineering remediation is a small per-page change (the same shape as the `/addiction/alcoholism-treatment` fix that landed in commit `5e995b6`): correct the canonical entry per the confirmed answer, migrate any clinically-valuable locally-defined questions that have no canonical equivalent, then remove the local `const faqs` array and the duplicate `<ConditionFAQ items={faqs}>` component instance. After all 7 pages are resolved, the same removal is applied to the remaining double-mount pages sitewide so the dual-source pattern is eliminated.
