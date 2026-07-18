// Hand-picked best-match videos from YouTube channel UCiXgogSH5-yTjshI9FJuxLg
// Strategy: 3 homepage, 2-3 hub pages, 1 per condition/treatment/location page

export interface VideoEntry {
  youtubeId: string;
  title: string;
  description: string;
  uploadDate: string;
}

export const videoData: Record<string, VideoEntry[]> = {
  // ── HOMEPAGE — 1 video (community stories; brand story #65 is embed-only, canonical on /about/) ──
  "/": [
    { youtubeId: "LjK58DeWTSY", title: "Desert Recovery Centers Treatment Programs", description: "Learn about addiction and mental health treatment programs at Desert Recovery Centers.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── ABOUT US — 3 videos ──
  "/about/": [
    { youtubeId: "JUSM7ErxKq8", title: "The Desert Recovery Centers Story | Luxury Dual Diagnosis Treatment in Arizona", description: "Two friends who found recovery together built the program they wished existed. This is the full DRC story.", uploadDate: "2026-07-15T17:53:04+00:00" },
    { youtubeId: "3B78Fzu6Y1M", title: "Born From an Act of Love | The Desert Recovery Centers Story", description: "It started with a phone call and a promise to do treatment differently. This is our story.", uploadDate: "2026-07-14T20:10:43+00:00" },
    { youtubeId: "bqDzL4O3WDE", title: "About Desert Recovery Centers", description: "Learn about the mission, team, and philosophy of Desert Recovery Centers in Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],

  // ── OUR TEAM — 2 videos ──
  "/our-team/": [
    { youtubeId: "gvvegeSDEGU", title: "Meet the Team at Desert Recovery Centers | Nurses, Therapists & BHTs", description: "Meet the people behind the care. Nurses, therapists, and staff, many in recovery themselves.", uploadDate: "2026-07-18T00:00:00-07:00" },
    { youtubeId: "p1e4DHF_qR0", title: "The Heartbeat of DRC: Our Staff | Dr. An Nguyen", description: "Our staff are with clients 24/7 and train every week. They are the heartbeat of DRC.", uploadDate: "2026-07-14T19:53:01+00:00" },
  ],

  // ── TEAM BIO PAGES ──
  "/team/dr-an-nguyen/": [
    { youtubeId: "MjuIDXGHwCE", title: "Why I Became a Clinical Psychologist | Dr. An Nguyen, Desert Recovery Centers", description: "Dr. An Nguyen shares why she became a clinical psychologist, and why she stands behind the care we give.", uploadDate: "2026-07-13T00:00:00-07:00" },
  ],

  // ── CONVERSION PAGES — 1 video each ──
  "/contact/": [
    { youtubeId: "_HIvKUSmGIw", title: "Just Reach Out and Call | Desert Recovery Centers", description: "Adam built his career on helping people, because he struggled too. His message: just reach out and call.", uploadDate: "2026-07-14T20:05:17+00:00" },
  ],
  "/get-help/": [
    { youtubeId: "zoqFmK0L7W0", title: "We Will Be Your Strength | Desert Recovery Centers", description: "Depression and addiction can feel lonely. Lauren has been there, and she wants you to know: we will be your strength.", uploadDate: "2026-07-14T20:00:01+00:00" },
  ],
  "/insurance/": [
    { youtubeId: "j_iBdlrFojQ", title: "Insurance and FMLA for Rehab: What You Should Know | Desert Recovery Centers", description: "Worried about work and cost? Here is how insurance and FMLA can help you get treatment, and maybe stay paid.", uploadDate: "2026-07-14T20:01:49+00:00" },
  ],
  "/resources/mental-health-assessment/": [
    { youtubeId: "UJmVdL-NDXk", title: "Get a Personalized Assessment | Desert Recovery Centers", description: "If you or someone you love is struggling, Dr. An Nguyen invites you to a personalized assessment.", uploadDate: "2026-07-14T20:03:14+00:00" },
  ],

  // ── LOCATION PAGES — 1 facility tour each ──
  "/locations/glendale/": [
    { youtubeId: "00ZDcQjXoE8", title: "Desert Recovery Centers Glendale Facility Tour", description: "Tour the Desert Recovery Centers Glendale Arizona luxury residential treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "vdI4QnsxAJQ", title: "Dylan's Story: Recovery After Grief, Homelessness, and Addiction | Desert Recovery Centers", description: "From living in his car to helping others. This is Dylan's story. Connection is the opposite of addiction.", uploadDate: "2026-07-15T00:00:00-07:00" },
    { youtubeId: "5OMQUlfAcKk", title: "A Veteran's Recovery: Chris Herrera's Story | Desert Recovery Centers", description: "A service injury. Ten years on pills. Profound loss. This is veteran Chris Herrera's story of rebuilding his life.", uploadDate: "2026-07-15T00:00:00-07:00" },
  ],
  "/locations/scottsdale/": [
    { youtubeId: "7qvyphmKNxg", title: "Desert Recovery Centers Scottsdale Facility Tour", description: "Tour the Desert Recovery Centers North Scottsdale Arizona luxury residential treatment facility.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "ANqsMXkAeGQ", title: "Mandy's Story: Hope After Bipolar and Alcohol Addiction | Desert Recovery Centers", description: "Twelve-step recovery never reached the root for Mandy. Here is how mental-health-based care changed that.", uploadDate: "2026-07-15T00:00:00-07:00" },
    { youtubeId: "yW910OrE-1k", title: "Daleny's Story: From Hopeless to a Future | Desert Recovery Centers", description: "She could not picture a month ahead. This is Daleny's story, from hopeless to a future.", uploadDate: "2026-07-15T00:00:00-07:00" },
    { youtubeId: "4ur6PUnnnMM", title: "Inside Our Church Location (Women's Facility) | Dr. An Nguyen", description: "Step inside our Church location for women. Mountain views, a sanctuary backyard, and space to heal.", uploadDate: "2026-07-13T00:00:00-07:00" },
    { youtubeId: "08UV2dP0qZo", title: "About Our Church Location (Women's Mental Health Facility) | Desert Recovery Centers", description: "Why is our Church location women-only? Gender-specific care removes barriers so women can open up and heal.", uploadDate: "2026-07-14T19:56:16+00:00" },
  ],
  "/locations/phoenix-php-iop/": [
    { youtubeId: "f244VR7NcSo", title: "Inside Our Phoenix Clinic (PHP, IOP & Outpatient) | Dr. An Nguyen", description: "A look inside our Phoenix clinic. Built for comfort, learning, and growth through PHP, IOP, and outpatient care.", uploadDate: "2026-07-13T00:00:00-07:00" },
  ],

  // ── ADDICTION HUB — 2 videos ──
  "/addiction-treatment/": [
    { youtubeId: "THSeLEff0I4", title: "Addiction Treatment Programs at Desert Recovery Centers", description: "Overview of drug and alcohol addiction treatment programs at Desert Recovery Centers Arizona.", uploadDate: "2024-10-01T00:00:00+00:00" },
    { youtubeId: "vSjFPTMiccI", title: "How Do I Know If I Need Rehab? | Desert Recovery Centers", description: "How do I know if I need rehab? If you are asking the question, this is worth two minutes.", uploadDate: "2026-07-13T00:00:00-07:00" },
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
    { youtubeId: "pc_QS4khZsw", title: "Men and Depression: You Are Not Alone | Desert Recovery Centers", description: "Society tells men not to talk about depression. Ron has a different message: you matter, and you are not alone.", uploadDate: "2026-07-14T19:58:00+00:00" },
  ],
  "/mental-health/ptsd-treatment/": [
    { youtubeId: "E8RZJNW3Q3Y", title: "How Common Is Trauma With Addiction? | Desert Recovery Centers", description: "Trauma is not what happens to you. It is what happens inside you. Here is how often trauma and addiction travel together.", uploadDate: "2026-07-13T00:00:00-07:00" },
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
  "/treatments/trauma-therapy/": [
    { youtubeId: "dF2l-9ohRZs", title: "What Is Trauma-Focused Cognitive Behavioral Therapy and How Does It Help?", description: "How trauma-focused CBT addresses PTSD and trauma in addiction recovery settings.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/holistic-therapies/": [
    { youtubeId: "t8ocXO9s9lw", title: "Why Holistic Treatment Is Required for Long-Term Success", description: "The role of holistic therapies in sustainable addiction and mental health recovery.", uploadDate: "2024-10-01T00:00:00+00:00" },
  ],
  "/treatments/dual-diagnosis-treatment/": [
    { youtubeId: "7EuzOR0lwk4", title: "Jeff's Story: Finding Mental Health First Treatment | Desert Recovery Centers", description: "Other programs treated the substance and missed the mental health. This is Jeff's story.", uploadDate: "2026-07-15T00:00:00-07:00" },
    { youtubeId: "vJ_pl06kJ_A", title: "Mental Health or Addiction: Which Comes First? | Desert Recovery Centers", description: "Mental health or addiction, which comes first? They have to be treated together. That is dual diagnosis care.", uploadDate: "2026-07-14T00:00:00-07:00" },
    { youtubeId: "oxfDeMtQUXg", title: "What Makes Us Different From Other Recovery Centers? | Dr. An Nguyen", description: "Many clients never learned CBT or DBT in past treatment. Here is why clinician-led, evidence-based care matters.", uploadDate: "2026-07-13T00:00:00-07:00" },
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
    { youtubeId: "XbxP1EnxVQg", title: "Is Addiction Treatment Confidential? | Desert Recovery Centers", description: "Is treatment confidential? Yes. HIPAA protects your information and your privacy, always.", uploadDate: "2026-07-13T00:00:00-07:00" },
    { youtubeId: "8BNDkLsa8mE", title: "Can I Have My Phone in Rehab? | Desert Recovery Centers", description: "Can I have my phone in rehab? Yes, from 5 to 7 pm each night. Here is why.", uploadDate: "2026-07-14T19:49:09+00:00" },
  ],
  "/levels-of-care/residential-treatment/": [
    { youtubeId: "sEC1mSR6Jrc", title: "The First Day of Recovery: What to Expect | Desert Recovery Centers", description: "The first day of rehab can feel scary. Here is what walking through our door is really like.", uploadDate: "2026-07-13T00:00:00-07:00" },
    { youtubeId: "aapeAd-XNpE", title: "What Can I Bring to Rehab? | Desert Recovery Centers", description: "What can I bring to rehab? Your meds, a week of clothes, and something to keep your hands busy. Here is the short list.", uploadDate: "2026-07-13T00:00:00-07:00" },
  ],
};
