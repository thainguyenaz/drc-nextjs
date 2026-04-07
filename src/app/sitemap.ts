import { MetadataRoute } from "next";

const SITE_URL = "https://desertrecoverycenters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  }[] = [
    // Homepage
    { path: "/", priority: 1.0, changeFrequency: "daily" },

    // Location pages
    { path: "/locations", priority: 0.8, changeFrequency: "weekly" },
    { path: "/locations/glendale", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations/scottsdale", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations/phoenix", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations/phoenix-php-iop", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations/phoenix-living", priority: 0.7, changeFrequency: "monthly" },

    // Facility pages
    { path: "/facilities/glendale", priority: 0.8, changeFrequency: "weekly" },
    { path: "/facilities/scottsdale", priority: 0.8, changeFrequency: "weekly" },
    { path: "/facilities/phoenix", priority: 0.8, changeFrequency: "weekly" },

    // Service hub pages
    { path: "/mental-health", priority: 0.8, changeFrequency: "weekly" },
    { path: "/addiction", priority: 0.8, changeFrequency: "weekly" },
    { path: "/addiction-treatment", priority: 0.8, changeFrequency: "weekly" },
    { path: "/treatments", priority: 0.8, changeFrequency: "weekly" },

    // Mental health condition pages
    { path: "/mental-health/anxiety-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/depression-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/ptsd-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/bipolar-disorder-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/ocd-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/personality-disorder-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/adhd-add", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/schizophrenia-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/mental-health/trauma-treatment", priority: 0.7, changeFrequency: "weekly" },

    // Addiction condition pages
    { path: "/addiction/alcohol", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/heroin", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/fentanyl", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/cocaine", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/meth", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/prescription-drugs", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/marijuana", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/gambling", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/sex-addiction", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/stimulants", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/opioid-detox", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/alcohol-detox", priority: 0.7, changeFrequency: "weekly" },

    // Treatment modality pages
    { path: "/treatments/residential", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/cbt", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/dbt", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/emdr", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/trauma-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/holistic", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/dual-diagnosis", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/tms-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/softwave", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/bridgework", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/12-step-program", priority: 0.7, changeFrequency: "weekly" },

    // Program / level-of-care pages
    { path: "/programs/residential", priority: 0.7, changeFrequency: "weekly" },
    { path: "/programs/php", priority: 0.7, changeFrequency: "weekly" },
    { path: "/programs/iop", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatment/iop", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatment/op", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatment/family-program", priority: 0.7, changeFrequency: "weekly" },

    // Adolescent program pages
    { path: "/adolescent-treatment", priority: 0.9, changeFrequency: "weekly" },
    { path: "/adolescent-program", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/depression", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/anxiety", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/substance-use", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/adhd", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/ocd", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/self-harm", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/bipolar", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/suicidal-ideation", priority: 0.7, changeFrequency: "weekly" },
    { path: "/adolescent/ptsd-trauma", priority: 0.7, changeFrequency: "weekly" },

    // Insurance pages
    { path: "/insurance", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance/aetna", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance/blue-cross", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance/cigna", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance/united", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance/humana", priority: 0.7, changeFrequency: "weekly" },

    // Team & About pages
    { path: "/about-us", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/our-team", priority: 0.5, changeFrequency: "monthly" },

    // Comparison pages
    { path: "/compare/luxury-rehab-arizona", priority: 0.7, changeFrequency: "weekly" },
    { path: "/compare/drc-vs-apn", priority: 0.7, changeFrequency: "weekly" },

    // Utility pages
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/rehab-near-me", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance-verification", priority: 0.7, changeFrequency: "monthly" },
    { path: "/get-help", priority: 0.7, changeFrequency: "monthly" },

    // Blog hub
    { path: "/blog", priority: 0.6, changeFrequency: "daily" },
    { path: "/blog/luxury-rehab-worth-it", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/signs-of-addiction", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/dual-diagnosis-explained", priority: 0.6, changeFrequency: "weekly" },

    // Resources hub & articles
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/faq", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/what-to-bring", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/detox-guide", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/cost-of-rehab", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/luxury-vs-standard-rehab", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/intervention-guide", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/mental-health-assessment", priority: 0.6, changeFrequency: "weekly" },

    // Resources blog
    { path: "/resources/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/resources/blog/how-does-alcohol-abuse-impact-mental-and-physical-health", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/do-drug-addicts-and-alcoholics-crave-dopamine", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/how-does-an-addicts-brain-work", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/risks-of-drug-or-alcohol-detox-why-you-need-professional-help", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/why-holistic-treatment-is-required-for-long-term-recovery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/how-drug-and-alcohol-addiction-impacts-families", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/is-addiction-a-spiritual-disease", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/can-quitting-weed-cause-anxiety", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/what-is-sex-addiction", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/what-is-partial-hospitalization-php-program", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/what-is-intensive-outpatient-iop-program", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/tms-therapy-for-depression-what-to-expect", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/teen-mental-health-crisis-warning-signs-parents", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/how-to-talk-to-someone-about-going-to-rehab", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/dual-diagnosis-mental-health-and-addiction", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/what-to-expect-in-residential-treatment-first-week", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/how-insurance-covers-addiction-mental-health-treatment", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/anxiety-vs-depression-understanding-the-difference", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/ptsd-and-addiction-connection", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/gray-area-drinking-am-i-an-alcoholic", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/how-long-does-rehab-take", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/neurostar-tms-vs-antidepressants", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/luxury-rehab-vs-standard-rehab-clinical-differences", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/blog/fentanyl-addiction-crisis-arizona", priority: 0.6, changeFrequency: "monthly" },

    // Legal pages
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
    { path: "/hipaa-notice", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
