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
    { path: "/locations/glendale", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations/scottsdale", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations/phoenix", priority: 0.9, changeFrequency: "weekly" },

    // Hub pages
    { path: "/mental-health", priority: 0.8, changeFrequency: "weekly" },
    { path: "/addiction-treatment", priority: 0.8, changeFrequency: "weekly" },
    { path: "/treatments", priority: 0.8, changeFrequency: "weekly" },
    { path: "/locations", priority: 0.8, changeFrequency: "weekly" },

    // Condition pages, mental health
    { path: "/mental-health/anxiety-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/depression-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/ptsd-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/bipolar-disorder-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/ocd-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/personality-disorder-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/adhd-add", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/schizophrenia-treatment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health/trauma-treatment", priority: 0.7, changeFrequency: "monthly" },

    // Condition pages, addiction
    { path: "/addiction/alcohol", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/heroin", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/fentanyl", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/cocaine", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/meth", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/prescription-drugs", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/marijuana", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/gambling", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/sex-addiction", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/stimulants", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/opioid-detox", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addiction/alcohol-detox", priority: 0.7, changeFrequency: "monthly" },

    // Treatment pages
    { path: "/treatments/cbt", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/dbt", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/emdr", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/trauma-therapy", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/holistic", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/dual-diagnosis", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/tms-therapy", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/softwave", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatments/bridgework", priority: 0.7, changeFrequency: "monthly" },

    // Program pages
    { path: "/programs/residential", priority: 0.7, changeFrequency: "monthly" },
    { path: "/programs/php", priority: 0.7, changeFrequency: "monthly" },
    { path: "/programs/iop", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatment/iop", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatment/op", priority: 0.7, changeFrequency: "monthly" },
    { path: "/treatment/family-program", priority: 0.7, changeFrequency: "monthly" },

    // Team & About
    { path: "/about-us", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/our-team", priority: 0.6, changeFrequency: "monthly" },

    // Insurance pages
    { path: "/insurance", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insurance/aetna", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insurance/blue-cross", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insurance/cigna", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insurance/united", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insurance/humana", priority: 0.7, changeFrequency: "monthly" },

    // Blog & resources
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/luxury-rehab-worth-it", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/signs-of-addiction", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog/dual-diagnosis-explained", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/faq", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/what-to-bring", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/detox-guide", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/cost-of-rehab", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/luxury-vs-standard-rehab", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/intervention-guide", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/mental-health-assessment", priority: 0.6, changeFrequency: "weekly" },

    // Other pages
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/addiction", priority: 0.7, changeFrequency: "monthly" },
    { path: "/rehab-near-me", priority: 0.7, changeFrequency: "monthly" },
    { path: "/adolescent-program", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/phoenix-living", priority: 0.7, changeFrequency: "monthly" },
    { path: "/facilities/glendale", priority: 0.8, changeFrequency: "weekly" },
    { path: "/facilities/scottsdale", priority: 0.8, changeFrequency: "weekly" },
    { path: "/facilities/phoenix", priority: 0.8, changeFrequency: "weekly" },
    { path: "/compare/luxury-rehab-arizona", priority: 0.6, changeFrequency: "monthly" },
    { path: "/compare/drc-vs-apn", priority: 0.6, changeFrequency: "monthly" },

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
