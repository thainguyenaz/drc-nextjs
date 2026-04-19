const DEFAULT_OG_IMAGE =
  "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export const pageMetadata: Record<string, PageMeta> = {
  "/": {
    title: "Luxury Addiction & Mental Health Treatment in Arizona | Desert Recovery Centers",
    description: "Luxury addiction and mental health treatment in Arizona. Joint Commission accredited, dual diagnosis care. Verify insurance today. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/about-us/": {
    title: "About Desert Recovery Centers | Luxury Rehab in Arizona",
    description: "Learn about Desert Recovery Centers — Joint Commission accredited luxury rehab in Arizona. Founded by clinicians with personal ties to recovery. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/about-us/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/our-team/": {
    title: "Addiction & Mental Health Treatment Team | Desert Recovery Centers",
    description: "Meet our licensed psychologists, medical directors, and recovery specialists at Desert Recovery Centers Arizona. Experts in dual diagnosis treatment.",
    canonical: "https://desertrecoverycenters.com/our-team/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/": {
    title: "Luxury Mental Health Treatment Center in Arizona | Desert Recovery Centers",
    description: "Expert mental health treatment in Arizona. CBT, DBT, EMDR, trauma therapy and dual diagnosis care. Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction-treatment/": {
    title: "Residential Addiction Treatment Centers in Arizona | Desert Recovery Centers",
    description: "Luxury residential addiction treatment in Arizona. Alcohol, opioids, meth, heroin and more. Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/": {
    title: "Evidence-Based Addiction & Mental Health Treatment Services | DRC",
    description: "CBT, DBT, EMDR, trauma therapy, dual diagnosis and holistic treatments in Arizona. Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/facilities/": {
    title: "Luxury Treatment Facilities in Arizona | Desert Recovery Centers",
    description: "Tour our three luxury behavioral health facilities in Glendale, Scottsdale, and Phoenix Arizona. Joint Commission accredited.",
    canonical: "https://desertrecoverycenters.com/facilities/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/locations/glendale/": {
    title: "Luxury Rehab & Mental Health Treatment in Glendale, AZ | DRC",
    description: "Residential addiction and mental health treatment in Glendale, AZ. 10-bed luxury facility, Joint Commission accredited. Call (623) 323-1012.",
    canonical: "https://desertrecoverycenters.com/locations/glendale/",
    ogImage: "https://desertrecoverycenters.com/images/glendale/Glendale-Front.jpg",
  },
  "/locations/scottsdale/": {
    title: "Luxury Rehab & Mental Health Treatment in Scottsdale, AZ | DRC",
    description: "Residential addiction and mental health treatment in Scottsdale, AZ. Luxury mountain-view facility, Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/locations/scottsdale/",
    ogImage: "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
  },
  "/locations/phoenix/": {
    title: "PHP & IOP Mental Health and Addiction Treatment in Phoenix, AZ | DRC",
    description: "Partial hospitalization and intensive outpatient addiction and mental health treatment in Phoenix, AZ. Call (623) 257-5384 to verify insurance.",
    canonical: "https://desertrecoverycenters.com/locations/phoenix/",
    ogImage: "https://desertrecoverycenters.com/images/locations/phoenix/phoenix-entry.jpg",
  },
  "/mental-health/anxiety-treatment/": {
    title: "Anxiety Treatment Center in Arizona | Desert Recovery Centers",
    description: "Residential anxiety treatment in Arizona. Evidence-based CBT and DBT therapies, luxury setting, dual diagnosis care. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/anxiety-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/depression-treatment/": {
    title: "Depression Treatment Center in Arizona | Desert Recovery Centers",
    description: "Inpatient and outpatient depression treatment in Arizona. Personalized care plans, licensed psychologists, luxury setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/depression-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/ptsd-treatment/": {
    title: "PTSD Treatment Center in Arizona | Desert Recovery Centers",
    description: "Trauma and PTSD treatment in Arizona. EMDR, CBT, dual diagnosis care in a luxury residential setting. Call (480) 931-3617 to start today.",
    canonical: "https://desertrecoverycenters.com/mental-health/ptsd-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/bipolar-disorder-treatment/": {
    title: "Bipolar Disorder Treatment Center in Arizona | Desert Recovery Centers",
    description: "Bipolar disorder treatment in Arizona. Psychiatric care, evidence-based therapy, dual diagnosis. Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/bipolar-disorder-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/adhd-add/": {
    title: "ADHD Treatment for Adults in Arizona | Desert Recovery Centers",
    description: "Adult ADHD treatment in Arizona. Evidence-based therapy, co-occurring disorder care, luxury facility. Call (480) 931-3617 to verify insurance.",
    canonical: "https://desertrecoverycenters.com/mental-health/adhd-add/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/ocd-treatment/": {
    title: "OCD Treatment Center in Arizona | Desert Recovery Centers",
    description: "OCD treatment in Arizona. CBT, ERP therapy, dual diagnosis care in a luxury residential setting. Licensed psychologists on staff. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/ocd-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/personality-disorder-treatment/": {
    title: "Personality Disorder Treatment in Arizona | Desert Recovery Centers",
    description: "DBT-based personality disorder treatment in Arizona. Dual diagnosis, licensed psychologists, luxury residential care. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/personality-disorder-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/schizophrenia-treatment/": {
    title: "Schizophrenia Treatment Center in Arizona | Desert Recovery Centers",
    description: "Inpatient schizophrenia treatment in Arizona. Psychiatric care, medication management, evidence-based therapy. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/mental-health/schizophrenia-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/alcoholism-treatment/": {
    title: "Alcohol Addiction Treatment & Rehab in Arizona | Desert Recovery Centers",
    description: "Residential alcohol addiction treatment in Arizona. Medical detox, dual diagnosis, luxury setting. Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/addiction/alcoholism-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/heroin-addiction-treatment/": {
    title: "Heroin Addiction Treatment Center in Arizona | Desert Recovery Centers",
    description: "Residential heroin addiction treatment in Arizona. Medical detox, MAT support, evidence-based therapies. Call (480) 931-3617 today.",
    canonical: "https://desertrecoverycenters.com/addiction/heroin-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/meth-addiction-treatment/": {
    title: "Meth Addiction Treatment Center in Arizona | Desert Recovery Centers",
    description: "Residential meth addiction treatment in Arizona. Evidence-based therapy, dual diagnosis care, luxury setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/addiction/meth-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/fentanyl-addiction-treatment/": {
    title: "Fentanyl Addiction Treatment Center in Arizona | Desert Recovery Centers",
    description: "Fentanyl addiction treatment in Arizona. Safe medical detox, dual diagnosis, luxury residential care. Call (480) 931-3617 to start today.",
    canonical: "https://desertrecoverycenters.com/addiction/fentanyl-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/cocaine-addiction-treatment/": {
    title: "Cocaine Addiction Treatment Center in Arizona | Desert Recovery Centers",
    description: "Cocaine addiction treatment in Arizona. CBT, dual diagnosis care, luxury residential facility. Joint Commission accredited. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/addiction/cocaine-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/marijuana-addiction-treatment/": {
    title: "Marijuana Addiction Treatment Center in Arizona | Desert Recovery Centers",
    description: "Marijuana addiction treatment in Arizona. Evidence-based therapy, dual diagnosis, luxury residential setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/addiction/marijuana-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/prescription-drug-addiction-treatment/": {
    title: "Prescription Drug Addiction Treatment in Arizona | Desert Recovery Centers",
    description: "Prescription drug addiction treatment in Arizona. Opioid, benzo and stimulant dependency care. Dual diagnosis, luxury setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/addiction/prescription-drug-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/stimulant-addiction-treatment/": {
    title: "Stimulant Addiction Treatment Center in Arizona | Desert Recovery Centers",
    description: "Stimulant addiction treatment in Arizona. Residential care, dual diagnosis, evidence-based therapies. Call (480) 931-3617 to verify insurance.",
    canonical: "https://desertrecoverycenters.com/addiction/stimulant-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/gambling-addiction-treatment/": {
    title: "Gambling Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential gambling addiction treatment in Arizona. Behavioral therapies and personalized recovery plans at Desert Recovery Centers.",
    canonical: "https://desertrecoverycenters.com/addiction/gambling-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/sex-addiction-treatment/": {
    title: "Sex Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential sex addiction treatment in Arizona using evidence-based behavioral therapies and individualized care plans.",
    canonical: "https://desertrecoverycenters.com/addiction/sex-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/dual-diagnosis-treatment/": {
    title: "Dual Diagnosis Treatment Center Arizona | Desert Recovery Centers",
    description: "Dual diagnosis treatment in Arizona. Co-occurring addiction and mental health disorders treated simultaneously. Luxury setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/dual-diagnosis-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/trauma-therapy/": {
    title: "Trauma Therapy Center in Arizona | Desert Recovery Centers",
    description: "Trauma therapy in Arizona. EMDR, CBT, somatic therapy in a luxury residential setting. Dual diagnosis care. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/trauma-therapy/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/emdr-eye-movement-desensitization-and-reprocessing/": {
    title: "EMDR Therapy for Trauma & PTSD in Arizona | Desert Recovery Centers",
    description: "EMDR therapy in Arizona for trauma, PTSD, and addiction. Licensed psychologists, luxury residential setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/emdr-eye-movement-desensitization-and-reprocessing/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/cognitive-behavioral-therapy-cbt/": {
    title: "Cognitive Behavioral Therapy (CBT) for Addiction & Mental Health | DRC",
    description: "CBT therapy in Arizona for addiction and mental health. Evidence-based, personalized treatment plans. Luxury residential setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/understanding-cbt-cognitive-behavioral-therapy/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/dialectical-behavior-therapy-dbt/": {
    title: "Dialectical Behavior Therapy (DBT) in Arizona | Desert Recovery Centers",
    description: "DBT therapy in Arizona for addiction, personality disorders, and mental health. Luxury residential care. Licensed psychologists. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/understanding-dbt-dialectic-behavior-therapy/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/holistic-therapies/": {
    title: "Holistic Addiction & Mental Health Therapies in Arizona | DRC",
    description: "Holistic therapies in Arizona — yoga, massage, chiropractic, personal training, and more. Combined with clinical care. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/holistic-therapies/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/12-step-program/": {
    title: "12-Step Program for Addiction Recovery in Arizona | Desert Recovery Centers",
    description: "12-step addiction recovery program in Arizona. Combined with evidence-based clinical care. Luxury residential setting. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/treatments/12-step-program/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/softwave-therapy/": {
    title: "SoftWave Therapy Arizona | Desert Recovery Centers",
    description: "SoftWave therapy for pain management and physical wellness as part of holistic addiction recovery at Desert Recovery Centers.",
    canonical: "https://desertrecoverycenters.com/treatments/softwave-therapy/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/get-help/": {
    title: "Get Help for Addiction & Mental Health Today | Desert Recovery Centers",
    description: "Ready to start your recovery? Contact Desert Recovery Centers today. Luxury addiction and mental health treatment in Arizona. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/get-help/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/insurance-verification/": {
    title: "Verify Insurance for Addiction & Mental Health Treatment | DRC",
    description: "Verify your insurance for addiction and mental health treatment at Desert Recovery Centers. We accept most private insurance. Call (480) 931-3617.",
    canonical: "https://desertrecoverycenters.com/insurance-verification/",
    ogImage: DEFAULT_OG_IMAGE,
  },
};

export function getPageMeta(pathname: string): PageMeta {
  return (
    pageMetadata[pathname] ??
    pageMetadata["/"]!
  );
}
