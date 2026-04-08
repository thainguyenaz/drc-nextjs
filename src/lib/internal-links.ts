/**
 * Internal link map for topical authority.
 * Every page maps to 5 related pages for dense cross-linking.
 */

export interface RelatedLink {
  label: string;
  href: string;
}

const linkMap: Record<string, RelatedLink[]> = {
  // ─── Mental health conditions ──────────────────────────
  "/mental-health/anxiety-treatment": [
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "PTSD & Trauma Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "OCD Treatment", href: "/mental-health/ocd-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/mental-health/depression-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "PTSD & Trauma Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "Holistic Therapies", href: "/treatments/holistic" },
  ],
  "/mental-health/ptsd-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/mental-health/bipolar-disorder-treatment": [
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Personality Disorder Treatment", href: "/mental-health/personality-disorder-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/mental-health/ocd-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt" },
    { label: "ADHD Treatment", href: "/mental-health/adhd-add" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/mental-health/personality-disorder-treatment": [
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/mental-health/adhd-add": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "OCD Treatment", href: "/mental-health/ocd-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/mental-health/schizophrenia-treatment": [
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
    { label: "Holistic Therapies", href: "/treatments/holistic" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],

  // ─── Addiction pages ───────────────────────────────────
  "/addiction/alcoholism-treatment": [
    { label: "Opioid Addiction Treatment", href: "/addiction/heroin-addiction-treatment" },
    { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Cost of Rehab in Arizona", href: "/resources/cost-of-rehab" },
  ],
  "/addiction/heroin-addiction-treatment": [
    { label: "Fentanyl Addiction Treatment", href: "/addiction/fentanyl-addiction-treatment" },
    { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/addiction/cocaine-addiction-treatment": [
    { label: "Stimulant Addiction Treatment", href: "/addiction/stimulant-addiction-treatment" },
    { label: "Meth Addiction Treatment", href: "/addiction/meth-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/addiction/meth-addiction-treatment": [
    { label: "Stimulant Addiction Treatment", href: "/addiction/stimulant-addiction-treatment" },
    { label: "Cocaine Addiction Treatment", href: "/addiction/cocaine-addiction-treatment" },
    { label: "Fentanyl Addiction Treatment", href: "/addiction/fentanyl-addiction-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/addiction/fentanyl-addiction-treatment": [
    { label: "Opioid Addiction Treatment", href: "/addiction/heroin-addiction-treatment" },
    { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Insurance Coverage", href: "/insurance/cigna" },
  ],
  "/addiction/prescription-drug-addiction-treatment": [
    { label: "Opioid Addiction Treatment", href: "/addiction/heroin-addiction-treatment" },
    { label: "Fentanyl Addiction Treatment", href: "/addiction/fentanyl-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
    { label: "What to Bring to Rehab", href: "/resources/what-to-bring" },
  ],
  "/addiction/marijuana-addiction-treatment": [
    { label: "Stimulant Addiction Treatment", href: "/addiction/stimulant-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/addiction/gambling-addiction-treatment": [
    { label: "Sex Addiction Treatment", href: "/addiction/sex-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/addiction/sex-addiction-treatment": [
    { label: "Gambling Addiction Treatment", href: "/addiction/gambling-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/addiction/stimulant-addiction-treatment": [
    { label: "Cocaine Addiction Treatment", href: "/addiction/cocaine-addiction-treatment" },
    { label: "Meth Addiction Treatment", href: "/addiction/meth-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "ADHD Treatment", href: "/mental-health/adhd-add" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],

  // ─── Treatment modalities ─────────────────────────────
  "/treatments/cbt": [
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "EMDR Therapy", href: "/treatments/emdr" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/treatments/dbt": [
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Personality Disorder Treatment", href: "/mental-health/personality-disorder-treatment" },
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/treatments/emdr": [
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Holistic Therapies", href: "/treatments/holistic" },
  ],
  "/treatments/trauma-therapy": [
    { label: "EMDR Therapy", href: "/treatments/emdr" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "Holistic Therapies", href: "/treatments/holistic" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
  ],
  "/treatments/dual-diagnosis": [
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],
  "/treatments/holistic": [
    { label: "BridgeWork Therapy", href: "/treatments/bridgework" },
    { label: "SoftWave Therapy", href: "/treatments/softwave" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "Luxury vs Standard Rehab", href: "/resources/luxury-vs-standard-rehab" },
  ],
  "/treatments/softwave": [
    { label: "Holistic Therapies", href: "/treatments/holistic" },
    { label: "BridgeWork Therapy", href: "/treatments/bridgework" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Our Facilities", href: "/facilities/glendale" },
  ],
  "/treatments/bridgework": [
    { label: "Holistic Therapies", href: "/treatments/holistic" },
    { label: "SoftWave Therapy", href: "/treatments/softwave" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],
};

export function getRelatedLinks(path: string): RelatedLink[] {
  return linkMap[path] ?? [];
}
