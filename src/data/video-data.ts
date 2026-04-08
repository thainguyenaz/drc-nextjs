// Hand-picked best-match videos from YouTube channel UCiXgogSH5-yTjshI9FJuxLg
// Strategy: 3 homepage, 2-3 hub pages, 1 per condition/treatment/location page

export interface VideoEntry {
  youtubeId: string;
  title: string;
  description: string;
  uploadDate: string;
}

export const videoData: Record<string, VideoEntry[]> = {
  // ── HOMEPAGE — 3 videos (overview, patient story, treatment overview) ──
  "/": [
    { youtubeId: "6x9IQq6h9Rk", title: "Desert Recovery Centers Overview", description: "An overview of Desert Recovery Centers luxury addiction and mental health treatment facilities in Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "5SPU81P8iko", title: "Desert Recovery Centers Patient Stories", description: "Hear from clients who have recovered at Desert Recovery Centers in Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "LjK58DeWTSY", title: "Desert Recovery Centers Treatment Programs", description: "Learn about addiction and mental health treatment programs at Desert Recovery Centers.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── ABOUT US — 1 video ──
  "/about-us/": [
    { youtubeId: "bqDzL4O3WDE", title: "About Desert Recovery Centers", description: "Learn about the mission, team, and philosophy of Desert Recovery Centers in Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── LOCATION PAGES — 1 facility tour each ──
  "/locations/glendale/": [
    { youtubeId: "00ZDcQjXoE8", title: "Desert Recovery Centers Glendale Facility Tour", description: "Tour the Desert Recovery Centers Glendale Arizona luxury residential treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/locations/scottsdale/": [
    { youtubeId: "7qvyphmKNxg", title: "Desert Recovery Centers Scottsdale Facility Tour", description: "Tour the Desert Recovery Centers North Scottsdale Arizona luxury residential treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/locations/phoenix/": [
    { youtubeId: "rMkEYhoW-kE", title: "Desert Recovery Centers Phoenix Facility Tour", description: "Tour the Desert Recovery Centers Phoenix Arizona PHP, IOP, and outpatient treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── ADDICTION HUB — 2 videos ──
  "/addiction-treatment/": [
    { youtubeId: "THSeLEff0I4", title: "Addiction Treatment Programs at Desert Recovery Centers", description: "Overview of drug and alcohol addiction treatment programs at Desert Recovery Centers Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "9-8VxGYFlE0", title: "What Is High-Functioning Addiction and Why Is It So Hard to Recognize?", description: "Understanding high-functioning addiction and why it often goes undetected until crisis.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],

  // ── MENTAL HEALTH HUB — 2 videos ──
  "/mental-health/": [
    { youtubeId: "s5Xb6AyDNS4", title: "Mental Health Treatment at Desert Recovery Centers", description: "Overview of mental health treatment programs at Desert Recovery Centers Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "NEGnf9I1K2E", title: "Desert Recovery Centers Mental Health Approach", description: "How Desert Recovery Centers approaches holistic mental health treatment.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── TREATMENTS HUB — 2 videos ──
  "/treatments/": [
    { youtubeId: "SEZcflDyGOU", title: "Treatment Programs at Desert Recovery Centers", description: "Overview of clinical and holistic treatment programs offered at Desert Recovery Centers Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "v3cEgF6yARY", title: "Overview of DRC Levels of Care", description: "An overview of Desert Recovery Centers levels of care including residential, PHP, IOP, and outpatient.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],

  // ── MENTAL HEALTH CONDITION PAGES — 1 video each ──
  "/mental-health/anxiety-treatment/": [
    { youtubeId: "BBqDg2--6BY", title: "Does Alcohol Worsen Anxiety Disorders?", description: "How alcohol use impacts anxiety disorders and why treating both together leads to better outcomes.", uploadDate: "2025-02-01T00:00:00+00:00" },
  ],
  "/mental-health/depression-treatment/": [
    { youtubeId: "GehgubrjdFg", title: "Can Alcohol Consumption Lead to Depression?", description: "The relationship between alcohol use and depression, and why integrated treatment is essential.", uploadDate: "2025-02-01T00:00:00+00:00" },
  ],
  "/mental-health/ptsd-treatment/": [
    { youtubeId: "DhLGvWwqGX4", title: "What Is EMDR Therapy for PTSD?", description: "How EMDR therapy helps treat PTSD and trauma at Desert Recovery Centers.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/mental-health/bipolar-disorder-treatment/": [
    { youtubeId: "ieL-jXdg47M", title: "What Is the Relationship Between Alcohol Use and Bipolar Disorder?", description: "How alcohol use disorder and bipolar disorder interact and why dual diagnosis treatment is essential.", uploadDate: "2025-02-01T00:00:00+00:00" },
  ],
  "/mental-health/adhd-add/": [
    { youtubeId: "bCy_9foYy6A", title: "How Does Behavioral Therapy Help With ADHD and Addiction?", description: "Understanding ADHD treatment approaches and stimulant addiction in clinical settings.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/mental-health/ocd-treatment/": [
    { youtubeId: "W8WKhAAhPM0", title: "How Is Treatment Individualized Rather Than One Size Fits All?", description: "How Desert Recovery Centers creates individualized treatment plans for OCD and co-occurring conditions.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/mental-health/personality-disorder-treatment/": [
    { youtubeId: "Q05B4qCyK-w", title: "What to Say to Someone Struggling With a Mental Health Disorder", description: "Guidance for supporting someone with a personality disorder or mental health condition.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/mental-health/schizophrenia-treatment/": [
    { youtubeId: "rH2AgymLCh8", title: "Can Alcohol Consumption Lead to Psychosis?", description: "The link between alcohol use and psychosis, and treatment approaches for co-occurring psychotic disorders.", uploadDate: "2025-02-01T00:00:00+00:00" },
  ],
  "/mental-health/trauma-treatment/": [
    { youtubeId: "xVYH_9v8xDE", title: "How Does Trauma Impact Addiction Recovery Outcomes?", description: "Understanding how unresolved trauma affects addiction recovery and why trauma-informed care matters.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── ADDICTION CONDITION PAGES — 1 video each ──
  "/addiction/alcoholism-treatment/": [
    { youtubeId: "-IAFRFF8DCQ", title: "How Does Alcohol Affect Mental Health?", description: "The impact of alcohol on mental health and why integrated dual diagnosis treatment is critical.", uploadDate: "2025-02-01T00:00:00+00:00" },
  ],
  "/addiction/heroin-addiction-treatment/": [
    { youtubeId: "iUtvJ-oRT_s", title: "How Do Benzodiazepine and Opioid Co-Dependence Create a More Dangerous Withdrawal?", description: "Understanding the dangers of opioid co-dependence and why medical detox is essential.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/addiction/fentanyl-addiction-treatment/": [
    { youtubeId: "TlAJvaoXrlw", title: "What Makes Fentanyl Withdrawal Uniquely Dangerous Compared to Other Opioids?", description: "Why fentanyl withdrawal requires specialized medical detox and treatment.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/addiction/cocaine-addiction-treatment/": [
    { youtubeId: "FObOcPKSfH8", title: "Do Drug Addicts and Alcoholics Crave Dopamine?", description: "Understanding dopamine and reward pathways in cocaine and stimulant addiction.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/addiction/meth-addiction-treatment/": [
    { youtubeId: "TE0bw1_Pwqo", title: "How Does Prescription Stimulant Abuse Differ From Street Meth in Treatment Needs?", description: "Comparing meth and prescription stimulant addiction and their treatment approaches.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/addiction/marijuana-addiction-treatment/": [
    { youtubeId: "-kdPgVZItgY", title: "Why Do Many Marijuana Addicts Underestimate Their Dependence?", description: "Understanding marijuana addiction and why dependence is often underestimated.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/addiction/prescription-drug-addiction-treatment/": [
    { youtubeId: "asfcDVPgO1Y", title: "How Do Prescription Drugs Affect Your Brain?", description: "The neurological effects of prescription drug abuse and paths to recovery.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/addiction/gambling-addiction-treatment/": [
    { youtubeId: "Vgb-tnoS8R0", title: "What Are the Warning Signs That Gambling Has Crossed From Recreation to Addiction?", description: "Recognizing gambling addiction warning signs and when to seek treatment.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/addiction/stimulant-addiction-treatment/": [
    { youtubeId: "TE0bw1_Pwqo", title: "How Does Prescription Stimulant Abuse Differ From Street Meth?", description: "Understanding stimulant addiction including Adderall, meth, and cocaine treatment needs.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],

  // ── TREATMENT MODALITY PAGES — 1 video each ──
  "/treatments/cbt-cognitive-behavioral-therapy/": [
    { youtubeId: "xHVfalKfRp0", title: "What Is Cognitive Behavioral Therapy and How Does It Improve Mental Health?", description: "How CBT works to change negative thought patterns in addiction and mental health treatment.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/dbt-dialectical-behavior-therapy/": [
    { youtubeId: "1llruRMnal8", title: "How Meditation Can Help With Addictive Cravings and Behaviors", description: "Mindfulness and DBT-based approaches to managing cravings and emotional regulation.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/emdr-therapy/": [
    { youtubeId: "DhLGvWwqGX4", title: "What Is EMDR Therapy for PTSD?", description: "How EMDR therapy helps process traumatic memories and supports addiction recovery.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/trauma-therapy/": [
    { youtubeId: "dF2l-9ohRZs", title: "What Is Trauma-Focused Cognitive Behavioral Therapy and How Does It Help?", description: "How trauma-focused CBT addresses PTSD and trauma in addiction recovery settings.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/holistic-therapies/": [
    { youtubeId: "t8ocXO9s9lw", title: "Why Holistic Treatment Is Required for Long-Term Success", description: "The role of holistic therapies in sustainable addiction and mental health recovery.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/dual-diagnosis-treatment/": [
    { youtubeId: "Il5BV-EYP3E", title: "How Do Outcomes Improve When Clients Follow a Full Continuum of Care?", description: "Why dual diagnosis treatment across a full continuum of care leads to better recovery outcomes.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/treatments/tms-therapy/": [
    { youtubeId: "OssO8dpYk2E", title: "How Does SoftWave Therapy Work for Addiction?", description: "Innovative therapy approaches including TMS and SoftWave for addiction and mental health.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/softwave-therapy/": [
    { youtubeId: "PkH82oa6HkA", title: "How Does SoftWave Therapy Work for Addiction?", description: "SoftWave tissue regeneration therapy for addiction recovery support.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/bridgework/": [
    { youtubeId: "Kg1jBDrT3KI", title: "Changing Behaviors By Developing Healthy Coping Mechanisms", description: "How behavioral change and healthy coping mechanisms support long-term recovery.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── RESOURCE PAGES ──
  "/resources/detox-guide/": [
    { youtubeId: "CkFNzie3Xp0", title: "What Happens During a Medical Detox Process?", description: "A guide to what happens during medically supervised detox for drugs and alcohol.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/resources/faq/": [
    { youtubeId: "vo7puKDwMek", title: "Why a Luxury Treatment Center?", description: "Answering common questions about luxury addiction treatment at Desert Recovery Centers.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
};
