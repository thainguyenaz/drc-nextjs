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

  // ── ABOUT US — 3 videos ──
  "/about/": [
    { youtubeId: "JUSM7ErxKq8", title: "The Desert Recovery Centers Story | Luxury Dual Diagnosis Treatment in Arizona", description: "Two friends who found recovery together built the program they wished existed. This is the full DRC story.", uploadDate: "2026-07-15T17:53:04+00:00" },
    { youtubeId: "3B78Fzu6Y1M", title: "Born From an Act of Love | The Desert Recovery Centers Story", description: "It started with a phone call and a promise to do treatment differently. This is our story.", uploadDate: "2026-07-14" },
    { youtubeId: "bqDzL4O3WDE", title: "About Desert Recovery Centers", description: "Learn about the mission, team, and philosophy of Desert Recovery Centers in Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── OUR TEAM — 1 video ──
  "/our-team/": [
    { youtubeId: "-UvsmwUSjag", title: "Meet the Team at Desert Recovery Centers | Nurses, Therapists & BHTs", description: "Meet the people behind the care. Nurses, therapists, and staff, many in recovery themselves.", uploadDate: "2026-07-15T18:16:49+00:00" },
  ],

  // ── LOCATION PAGES — 1 facility tour each ──
  "/locations/glendale/": [
    { youtubeId: "00ZDcQjXoE8", title: "Desert Recovery Centers Glendale Facility Tour", description: "Tour the Desert Recovery Centers Glendale Arizona luxury residential treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "vdI4QnsxAJQ", title: "Dylan's Story: Recovery After Grief, Homelessness, and Addiction | Desert Recovery Centers", description: "From living in his car to helping others. This is Dylan's story. Connection is the opposite of addiction.", uploadDate: "2026-07-15" },
    { youtubeId: "5OMQUlfAcKk", title: "A Veteran's Recovery: Chris Herrera's Story | Desert Recovery Centers", description: "A service injury. Ten years on pills. Profound loss. This is veteran Chris Herrera's story of rebuilding his life.", uploadDate: "2026-07-15" },
  ],
  "/locations/scottsdale/": [
    { youtubeId: "7qvyphmKNxg", title: "Desert Recovery Centers Scottsdale Facility Tour", description: "Tour the Desert Recovery Centers North Scottsdale Arizona luxury residential treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "ANqsMXkAeGQ", title: "Mandy's Story: Hope After Bipolar and Alcohol Addiction | Desert Recovery Centers", description: "Twelve-step recovery never reached the root for Mandy. Here is how mental-health-based care changed that.", uploadDate: "2026-07-15" },
    { youtubeId: "yW910OrE-1k", title: "Daleny's Story: From Hopeless to a Future | Desert Recovery Centers", description: "She could not picture a month ahead. This is Daleny's story, from hopeless to a future.", uploadDate: "2026-07-15" },
  ],
  "/locations/phoenix-php-iop/": [
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
    { youtubeId: "7EuzOR0lwk4", title: "Jeff's Story: Finding Mental Health First Treatment | Desert Recovery Centers", description: "Other programs treated the substance and missed the mental health. This is Jeff's story.", uploadDate: "2026-07-15" },
  ],
  "/treatments/tms-therapy/": [
    { youtubeId: "4yWqQ_VVzgE", title: "NeuroStar TMS Therapy, How It Works", description: "How NeuroStar TMS therapy works as an FDA-cleared, non-invasive treatment for depression. Video courtesy of NeuroStar.", uploadDate: "2022-11-22T00:00:00+00:00" },
    { youtubeId: "CrJz9g0ssZQ", title: "NeuroStar TMS Therapy Patient Experience", description: "A NeuroStar TMS patient shares their experience with the therapy and how it changed their life. Video courtesy of NeuroStar. Individual results may vary; featured patients are not necessarily patients of Desert Recovery Centers.", uploadDate: "2021-04-26T00:00:00+00:00" },
    { youtubeId: "rcj4Tzbc34g", title: "NeuroStar TMS Therapy Results, Patient Testimonial", description: "Hear how NeuroStar TMS therapy helped a patient when medication alone was not enough. Video courtesy of NeuroStar. Individual results may vary; featured patients are not necessarily patients of Desert Recovery Centers.", uploadDate: "2021-08-05T00:00:00+00:00" },
    { youtubeId: "1Bed8b5DQBQ", title: "Life After NeuroStar TMS Therapy, Patient Experience", description: "A NeuroStar TMS patient describes their experience with treatment and the impact on their daily life. Video courtesy of NeuroStar. Individual results may vary; featured patients are not necessarily patients of Desert Recovery Centers.", uploadDate: "2021-04-24T00:00:00+00:00" },
  ],
  "/treatments/softwave-therapy/": [
    { youtubeId: "PkH82oa6HkA", title: "How Does SoftWave Therapy Work for Addiction?", description: "SoftWave tissue regeneration therapy for addiction recovery support.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/bridgework/": [
    { youtubeId: "xlS4ux4JNT8", title: "What Is BridgeWork Therapy? | Desert Recovery Centers", description: "BridgeWork therapy connects what clients learn in session to real life, with a coach walking clients through the skills at Desert Recovery Centers in Arizona.", uploadDate: "2026-07-15T18:11:57+00:00" },
  ],

  // ── RESOURCE PAGES ──
  "/resources/detox-guide/": [
    { youtubeId: "CkFNzie3Xp0", title: "What Happens During a Medical Detox Process?", description: "A guide to what happens during medically supervised detox for drugs and alcohol.", uploadDate: "2025-03-01T00:00:00+00:00" },
  ],
  "/resources/faq/": [
    { youtubeId: "vo7puKDwMek", title: "Why a Luxury Treatment Center?", description: "Answering common questions about luxury addiction treatment at Desert Recovery Centers.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
};
