const DEFAULT_OG_IMAGE =
  "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export const pageMetadata: Record<string, PageMeta> = {
  "/": {
    title: "Luxury Addiction and Mental Health Treatment in Arizona | Desert Recovery Centers",
    description: "Joint Commission-accredited luxury addiction and mental health treatment in Glendale, Scottsdale, and Phoenix AZ. Verify insurance free.",
    canonical: "https://desertrecoverycenters.com/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/about-us/": {
    title: "About Desert Recovery Centers | Luxury Behavioral Health Arizona",
    description: "Learn about Desert Recovery Centers, a Joint Commission-accredited luxury behavioral health organization with three Arizona locations.",
    canonical: "https://desertrecoverycenters.com/about-us/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/our-team/": {
    title: "Our Clinical Team | Desert Recovery Centers Arizona",
    description: "Meet the licensed psychologists, medical doctors, nurses, and recovery specialists at Desert Recovery Centers in Arizona.",
    canonical: "https://desertrecoverycenters.com/our-team/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/": {
    title: "Mental Health Treatment Programs in Arizona | Desert Recovery Centers",
    description: "Evidence-based mental health treatment for anxiety, depression, PTSD, bipolar disorder, ADHD, OCD, and more at luxury Arizona facilities.",
    canonical: "https://desertrecoverycenters.com/mental-health/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction-treatment/": {
    title: "Addiction Treatment Programs in Arizona | Desert Recovery Centers",
    description: "Comprehensive drug and alcohol addiction treatment at luxury residential facilities in Glendale, Scottsdale, and Phoenix Arizona.",
    canonical: "https://desertrecoverycenters.com/addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/": {
    title: "Clinical and Holistic Treatment Programs | Desert Recovery Centers",
    description: "Evidence-based and holistic treatment programs including CBT, DBT, EMDR, trauma therapy, and 12-step programming at Desert Recovery Centers.",
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
    title: "Glendale Arizona Treatment Center | Desert Recovery Centers",
    description: "Luxury addiction and mental health treatment in Glendale Arizona. Pool, tennis courts, group therapy, and evidence-based clinical care.",
    canonical: "https://desertrecoverycenters.com/locations/glendale/",
    ogImage: "https://desertrecoverycenters.com/wp-content/uploads/2024/02/Glendale-Front.jpg",
  },
  "/locations/scottsdale/": {
    title: "Scottsdale Arizona Treatment Center | Desert Recovery Centers",
    description: "Luxury addiction and mental health treatment in North Scottsdale Arizona. Private suites, gym, holistic therapies, and expert clinical care.",
    canonical: "https://desertrecoverycenters.com/locations/scottsdale/",
    ogImage: "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg",
  },
  "/locations/phoenix/": {
    title: "Phoenix Arizona Treatment Center | Desert Recovery Centers",
    description: "Residential addiction and mental health treatment in Phoenix Arizona at 1623 W Moody Trail. Personalized care in a comfortable setting.",
    canonical: "https://desertrecoverycenters.com/locations/phoenix/",
    ogImage: "https://desertrecoverycenters.com/wp-content/uploads/2024/02/Phoenix-Front.jpg",
  },
  "/mental-health/anxiety-treatment/": {
    title: "Anxiety Treatment Center Arizona | Desert Recovery Centers",
    description: "Residential anxiety disorder treatment in Arizona using CBT, DBT, EMDR, and holistic therapies. Luxury inpatient care. Verify insurance free.",
    canonical: "https://desertrecoverycenters.com/mental-health/anxiety-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/depression-treatment/": {
    title: "Depression Treatment Center Arizona | Desert Recovery Centers",
    description: "Evidence-based residential depression treatment in Arizona. Dual-diagnosis care, licensed psychologists, and luxury amenities.",
    canonical: "https://desertrecoverycenters.com/mental-health/depression-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/ptsd-treatment/": {
    title: "PTSD Treatment Center Arizona | Desert Recovery Centers",
    description: "Trauma-focused PTSD treatment including EMDR, CBT, and holistic therapies at luxury inpatient facilities in Arizona.",
    canonical: "https://desertrecoverycenters.com/mental-health/ptsd-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/bipolar-disorder-treatment/": {
    title: "Bipolar Disorder Treatment Arizona | Desert Recovery Centers",
    description: "Residential bipolar disorder treatment in Arizona with medication management, CBT, DBT, and dual-diagnosis clinical care.",
    canonical: "https://desertrecoverycenters.com/mental-health/bipolar-disorder-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/adhd-add/": {
    title: "ADHD and ADD Treatment Arizona | Desert Recovery Centers",
    description: "Residential ADHD and ADD treatment in Arizona. Evidence-based behavioral therapies and personalized treatment plans at luxury facilities.",
    canonical: "https://desertrecoverycenters.com/mental-health/adhd-add/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/ocd-treatment/": {
    title: "OCD Treatment Center Arizona | Desert Recovery Centers",
    description: "Residential OCD treatment in Arizona using CBT, ERP, and evidence-based therapies at luxury behavioral health facilities.",
    canonical: "https://desertrecoverycenters.com/mental-health/ocd-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/personality-disorder-treatment/": {
    title: "Personality Disorder Treatment Arizona | Desert Recovery Centers",
    description: "Residential personality disorder treatment in Arizona with DBT, CBT, and comprehensive dual-diagnosis clinical care.",
    canonical: "https://desertrecoverycenters.com/mental-health/personality-disorder-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/mental-health/schizophrenia-treatment/": {
    title: "Schizophrenia Treatment Arizona | Desert Recovery Centers",
    description: "Residential schizophrenia treatment in Arizona with psychiatric oversight, medication management, and evidence-based therapies.",
    canonical: "https://desertrecoverycenters.com/mental-health/schizophrenia-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/alcoholism-treatment/": {
    title: "Alcohol Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential alcohol addiction treatment in Arizona with medically supervised detox, CBT, DBT, and 12-step programming.",
    canonical: "https://desertrecoverycenters.com/addiction/alcoholism-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/heroin-addiction-treatment/": {
    title: "Heroin Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Medically supervised heroin detox and residential treatment in Arizona. Expert clinical care at luxury behavioral health facilities.",
    canonical: "https://desertrecoverycenters.com/addiction/heroin-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/meth-addiction-treatment/": {
    title: "Meth Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential meth addiction treatment in Arizona with behavioral therapies, holistic care, and expert clinical staff.",
    canonical: "https://desertrecoverycenters.com/addiction/meth-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/fentanyl-addiction-treatment/": {
    title: "Fentanyl Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Medically supervised fentanyl detox and residential treatment in Arizona at luxury behavioral health facilities.",
    canonical: "https://desertrecoverycenters.com/addiction/fentanyl-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/cocaine-addiction-treatment/": {
    title: "Cocaine Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential cocaine addiction treatment in Arizona with behavioral therapies, holistic healing, and personalized care plans.",
    canonical: "https://desertrecoverycenters.com/addiction/cocaine-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/marijuana-addiction-treatment/": {
    title: "Marijuana Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential marijuana addiction treatment in Arizona using CBT, DBT, and holistic recovery programming.",
    canonical: "https://desertrecoverycenters.com/addiction/marijuana-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/prescription-drug-addiction-treatment/": {
    title: "Prescription Drug Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential prescription drug addiction treatment in Arizona with medically supervised detox and evidence-based therapies.",
    canonical: "https://desertrecoverycenters.com/addiction/prescription-drug-addiction-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/addiction/stimulant-addiction-treatment/": {
    title: "Stimulant Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Residential stimulant addiction treatment in Arizona with behavioral therapies and holistic recovery at luxury facilities.",
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
    title: "Dual Diagnosis Treatment Arizona | Desert Recovery Centers",
    description: "Integrated dual-diagnosis treatment for co-occurring addiction and mental health disorders at luxury facilities in Arizona.",
    canonical: "https://desertrecoverycenters.com/treatments/dual-diagnosis-treatment/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/trauma-therapy/": {
    title: "Trauma Therapy Arizona | Desert Recovery Centers",
    description: "EMDR, trauma-focused CBT, and holistic trauma therapies at luxury residential treatment facilities in Arizona.",
    canonical: "https://desertrecoverycenters.com/treatments/trauma-therapy/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/emdr-eye-movement-desensitization-and-reprocessing/": {
    title: "EMDR Therapy Arizona | Desert Recovery Centers",
    description: "EMDR therapy for trauma and PTSD at Desert Recovery Centers luxury residential facilities in Arizona.",
    canonical: "https://desertrecoverycenters.com/treatments/emdr-eye-movement-desensitization-and-reprocessing/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/cognitive-behavioral-therapy-cbt/": {
    title: "CBT Therapy Arizona | Desert Recovery Centers",
    description: "Cognitive behavioral therapy for addiction and mental health treatment at luxury residential facilities in Arizona.",
    canonical: "https://desertrecoverycenters.com/treatments/cognitive-behavioral-therapy-cbt/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/dialectical-behavior-therapy-dbt/": {
    title: "DBT Therapy Arizona | Desert Recovery Centers",
    description: "Dialectical behavior therapy for addiction, mental health, and personality disorders at Desert Recovery Centers Arizona.",
    canonical: "https://desertrecoverycenters.com/treatments/dialectical-behavior-therapy-dbt/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/holistic-therapies/": {
    title: "Holistic Addiction Treatment Arizona | Desert Recovery Centers",
    description: "Holistic therapies including yoga, massage, SoftWave therapy, and mindfulness at luxury treatment centers in Arizona.",
    canonical: "https://desertrecoverycenters.com/treatments/holistic-therapies/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/treatments/12-step-program/": {
    title: "12 Step Program Arizona | Desert Recovery Centers",
    description: "Integrated 12-step programming as part of comprehensive addiction recovery at Desert Recovery Centers Arizona.",
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
    title: "Get Help Now | Desert Recovery Centers Arizona",
    description: "Start your recovery journey. Call Desert Recovery Centers at (480) 931-3617 for a free confidential assessment and insurance verification.",
    canonical: "https://desertrecoverycenters.com/get-help/",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/insurance-verification/": {
    title: "Insurance Verification | Desert Recovery Centers Arizona",
    description: "Verify your insurance for addiction and mental health treatment at Desert Recovery Centers. Free, confidential, no commitment required.",
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
