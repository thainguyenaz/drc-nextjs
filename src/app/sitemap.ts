import { MetadataRoute } from "next";

const SITE_URL = "https://www.desertrecoverycenters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/mental-health", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/addiction-treatment", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/treatments", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/our-team", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/facilities/glendale", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/facilities/scottsdale", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/facilities/phoenix", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insurance/cigna", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insurance/aetna", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insurance/blue-cross", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insurance/united", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insurance/humana", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resources/luxury-vs-standard-rehab", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resources/cost-of-rehab", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resources/what-to-bring", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
