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
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/mental-health/depression-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "PTSD & Trauma Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
  ],
  "/mental-health/ptsd-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/mental-health/bipolar-disorder-treatment": [
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Personality Disorder Treatment", href: "/mental-health/personality-disorder-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/mental-health/ocd-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "ADHD Treatment", href: "/mental-health/adhd-add" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/mental-health/personality-disorder-treatment": [
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/mental-health/adhd-add": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "OCD Treatment", href: "/mental-health/ocd-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/mental-health/schizophrenia-treatment": [
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],

  // ─── Addiction pages ───────────────────────────────────
  "/addiction/alcoholism-treatment": [
    { label: "Opioid Addiction Treatment", href: "/addiction/heroin-addiction-treatment" },
    { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Cost of Rehab in Arizona", href: "/resources/cost-of-rehab" },
  ],
  "/addiction/heroin-addiction-treatment": [
    { label: "Fentanyl Addiction Treatment", href: "/addiction/fentanyl-addiction-treatment" },
    { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/addiction/cocaine-addiction-treatment": [
    { label: "Stimulant Addiction Treatment", href: "/addiction/stimulant-addiction-treatment" },
    { label: "Meth Addiction Treatment", href: "/addiction/meth-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/addiction/meth-addiction-treatment": [
    { label: "Stimulant Addiction Treatment", href: "/addiction/stimulant-addiction-treatment" },
    { label: "Cocaine Addiction Treatment", href: "/addiction/cocaine-addiction-treatment" },
    { label: "Fentanyl Addiction Treatment", href: "/addiction/fentanyl-addiction-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
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
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
    { label: "What to Bring to Rehab", href: "/resources/what-to-bring" },
  ],
  "/addiction/marijuana-addiction-treatment": [
    { label: "Stimulant Addiction Treatment", href: "/addiction/stimulant-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/addiction/gambling-addiction-treatment": [
    { label: "Sex Addiction Treatment", href: "/addiction/sex-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/addiction/sex-addiction-treatment": [
    { label: "Gambling Addiction Treatment", href: "/addiction/gambling-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/addiction/stimulant-addiction-treatment": [
    { label: "Cocaine Addiction Treatment", href: "/addiction/cocaine-addiction-treatment" },
    { label: "Meth Addiction Treatment", href: "/addiction/meth-addiction-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "ADHD Treatment", href: "/mental-health/adhd-add" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],

  // ─── Treatment modalities ─────────────────────────────
  "/treatments/cbt-cognitive-behavioral-therapy": [
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/treatments/dbt-dialectical-behavior-therapy": [
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "Personality Disorder Treatment", href: "/mental-health/personality-disorder-treatment" },
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/treatments/emdr-therapy": [
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
  ],
  "/treatments/trauma-therapy": [
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
  "/treatments/dual-diagnosis-treatment": [
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Alcohol Addiction Treatment", href: "/addiction/alcoholism-treatment" },
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],
  "/treatments/holistic-therapies": [
    { label: "BridgeWork Therapy", href: "/treatments/bridgework" },
    { label: "SoftWave Therapy", href: "/treatments/softwave-therapy" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Luxury vs Standard Rehab", href: "/resources/luxury-vs-standard-rehab" },
  ],
  "/treatments/softwave-therapy": [
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    { label: "BridgeWork Therapy", href: "/treatments/bridgework" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Our Facilities", href: "/facilities/glendale" },
  ],
  "/treatments/bridgework": [
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    { label: "SoftWave Therapy", href: "/treatments/softwave-therapy" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],
};

export function getRelatedLinks(path: string): RelatedLink[] {
  return linkMap[path] ?? [];
}
