import { MetadataRoute } from "next";
import { teamMembers } from "@/data/team-data";

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

    // Facilities hub
    { path: "/facilities", priority: 0.7, changeFrequency: "monthly" },

    // Service hub pages
    { path: "/mental-health", priority: 0.8, changeFrequency: "weekly" },
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
    { path: "/addiction/alcoholism-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/heroin-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/fentanyl-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/cocaine-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/meth-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/prescription-drug-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/marijuana-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/gambling-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/sex-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/addiction/stimulant-addiction-treatment", priority: 0.7, changeFrequency: "weekly" },

    // Levels of care
    { path: "/levels-of-care", priority: 0.8, changeFrequency: "weekly" },
    { path: "/levels-of-care/detox", priority: 0.7, changeFrequency: "weekly" },
    { path: "/levels-of-care/residential-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/levels-of-care/php", priority: 0.7, changeFrequency: "weekly" },
    { path: "/levels-of-care/iop", priority: 0.7, changeFrequency: "weekly" },

    // Treatment modality pages
    { path: "/treatments/cbt-cognitive-behavioral-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/dbt-dialectical-behavior-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/emdr-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/trauma-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/holistic-therapies", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/dual-diagnosis-treatment", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/tms-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/softwave-therapy", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/bridgework", priority: 0.7, changeFrequency: "weekly" },
    { path: "/treatments/12-step-program", priority: 0.7, changeFrequency: "weekly" },

    // Adolescent program pages
    { path: "/adolescent-treatment", priority: 0.9, changeFrequency: "weekly" },
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
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/our-team", priority: 0.5, changeFrequency: "monthly" },

    // Comparison pages
    { path: "/compare/luxury-rehab-arizona", priority: 0.7, changeFrequency: "weekly" },
    { path: "/compare/drc-vs-apn", priority: 0.7, changeFrequency: "weekly" },

    // Utility pages
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/rehab-near-me", priority: 0.7, changeFrequency: "weekly" },
    { path: "/get-help", priority: 0.7, changeFrequency: "monthly" },

    // Standalone blog hub articles
    { path: "/blog/luxury-rehab-worth-it", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/signs-of-addiction", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/dual-diagnosis-explained", priority: 0.6, changeFrequency: "weekly" },

    // Resources hub & articles
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/faq", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/what-to-bring", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/detox-guide", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/addiction-detox-guide/antidepressants", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/cost-of-rehab", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/luxury-vs-traditional-rehab", priority: 0.6, changeFrequency: "weekly" },
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

  // Team member pages — generated from teamMembers so future additions auto-appear
  for (const member of teamMembers) {
    routes.push({
      path: `/team/${member.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
    });
  }

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
