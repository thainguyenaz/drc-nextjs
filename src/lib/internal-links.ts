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
    { label: "Luxury vs Traditional Rehab", href: "/resources/luxury-vs-traditional-rehab" },
  ],
  "/treatments/softwave-therapy": [
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    { label: "BridgeWork Therapy", href: "/treatments/bridgework" },
    { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
    { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Our Facilities", href: "/locations/glendale" },
  ],
  "/treatments/bridgework": [
    { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    { label: "SoftWave Therapy", href: "/treatments/softwave-therapy" },
    { label: "CBT Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
    { label: "Our Clinical Team", href: "/our-team" },
  ],

  // ─── Location Service pages (city-scoped conditions) ───
  "/locations/phoenix-php-iop/anxiety-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Our Phoenix Center", href: "/locations/phoenix-php-iop" },
    { label: "Anxiety Treatment in Glendale", href: "/locations/glendale/anxiety-treatment" },
    { label: "Anxiety Treatment in Scottsdale", href: "/locations/scottsdale/anxiety-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
  ],
  "/locations/glendale/anxiety-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Our Glendale Facility", href: "/locations/glendale" },
    { label: "Anxiety Treatment in Phoenix", href: "/locations/phoenix-php-iop/anxiety-treatment" },
    { label: "Anxiety Treatment in Scottsdale", href: "/locations/scottsdale/anxiety-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
  ],
  "/locations/scottsdale/anxiety-treatment": [
    { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
    { label: "Our Scottsdale Facility", href: "/locations/scottsdale" },
    { label: "Anxiety Treatment in Phoenix", href: "/locations/phoenix-php-iop/anxiety-treatment" },
    { label: "Anxiety Treatment in Glendale", href: "/locations/glendale/anxiety-treatment" },
    { label: "Cognitive Behavioral Therapy", href: "/treatments/cbt-cognitive-behavioral-therapy" },
  ],
  "/locations/phoenix-php-iop/depression-treatment": [
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Our Phoenix Center", href: "/locations/phoenix-php-iop" },
    { label: "Depression Treatment in Glendale", href: "/locations/glendale/depression-treatment" },
    { label: "Depression Treatment in Scottsdale", href: "/locations/scottsdale/depression-treatment" },
    { label: "TMS Therapy", href: "/treatments/tms-therapy" },
  ],
  "/locations/glendale/depression-treatment": [
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Our Glendale Facility", href: "/locations/glendale" },
    { label: "Depression Treatment in Phoenix", href: "/locations/phoenix-php-iop/depression-treatment" },
    { label: "Depression Treatment in Scottsdale", href: "/locations/scottsdale/depression-treatment" },
    { label: "TMS Therapy", href: "/treatments/tms-therapy" },
  ],
  "/locations/scottsdale/depression-treatment": [
    { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
    { label: "Our Scottsdale Facility", href: "/locations/scottsdale" },
    { label: "Depression Treatment in Phoenix", href: "/locations/phoenix-php-iop/depression-treatment" },
    { label: "Depression Treatment in Glendale", href: "/locations/glendale/depression-treatment" },
    { label: "TMS Therapy", href: "/treatments/tms-therapy" },
  ],
  "/locations/phoenix-php-iop/ptsd-trauma-treatment": [
    { label: "PTSD & Trauma Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Our Phoenix Center", href: "/locations/phoenix-php-iop" },
    { label: "PTSD and Trauma Treatment in Glendale", href: "/locations/glendale/ptsd-trauma-treatment" },
    { label: "PTSD and Trauma Treatment in Scottsdale", href: "/locations/scottsdale/ptsd-trauma-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
  ],
  "/locations/glendale/ptsd-trauma-treatment": [
    { label: "PTSD & Trauma Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Our Glendale Facility", href: "/locations/glendale" },
    { label: "PTSD and Trauma Treatment in Phoenix", href: "/locations/phoenix-php-iop/ptsd-trauma-treatment" },
    { label: "PTSD and Trauma Treatment in Scottsdale", href: "/locations/scottsdale/ptsd-trauma-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
  ],
  "/locations/scottsdale/ptsd-trauma-treatment": [
    { label: "PTSD & Trauma Treatment", href: "/mental-health/ptsd-treatment" },
    { label: "Our Scottsdale Facility", href: "/locations/scottsdale" },
    { label: "PTSD and Trauma Treatment in Phoenix", href: "/locations/phoenix-php-iop/ptsd-trauma-treatment" },
    { label: "PTSD and Trauma Treatment in Glendale", href: "/locations/glendale/ptsd-trauma-treatment" },
    { label: "EMDR Therapy", href: "/treatments/emdr-therapy" },
  ],
  "/locations/phoenix-php-iop/bipolar-disorder-treatment": [
    { label: "Bipolar Disorder Treatment", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "Our Phoenix Center", href: "/locations/phoenix-php-iop" },
    { label: "DBT Therapy", href: "/treatments/dbt-dialectical-behavior-therapy" },
    { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
  ],
};

export function getRelatedLinks(path: string): RelatedLink[] {
  return linkMap[path] ?? [];
}
