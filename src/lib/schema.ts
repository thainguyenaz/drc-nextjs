// ─── Structured Data / JSON-LD schema generators ──────────────────
// Each function returns a plain object ready to be passed to <SchemaScript />.

import { DRC_REVIEWERS, type Reviewer } from "@/lib/seo";
import { siteData } from "@/lib/site-data";

const SITE_URL = "https://desertrecoverycenters.com";
const SITE_NAME = "Desert Recovery Centers";

export function getMedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/branding/desert-recovery-centers-logo-black-2x.png`,
    image: `${SITE_URL}/images/branding/drlogo-black.png`,
    description:
      "Joint Commission accredited luxury behavioral health treatment organization in Arizona specializing in residential treatment, PHP, IOP, and outpatient programs for addiction and mental health.",
    telephone: "(623) 305-0496",
    email: "contact@desertrecoverycenters.com",
    foundingDate: "2022",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Joint Commission Accreditation" },
      { "@type": "EducationalOccupationalCredential", name: "LegitScript Certification" },
    ],
    medicalSpecialty: ["Psychiatric", "Toxicologic"],
    areaServed: { "@type": "State", name: "Arizona" },
    // The first three siteData locations are the licensed clinics whose
    // LocalBusiness+MedicalClinic nodes carry these @ids (see
    // AllLocalBusinessSchemas in seo.tsx, indexes 0-2).
    subOrganization: siteData.locations
      .slice(0, 3)
      .map((loc) => ({ "@id": `${SITE_URL}${loc.href}` })),
    address: [
      { "@type": "PostalAddress", streetAddress: "8105 W Frier Dr", addressLocality: "Glendale", addressRegion: "AZ", postalCode: "85303", addressCountry: "US" },
      { "@type": "PostalAddress", streetAddress: "23222 N Church Rd", addressLocality: "Scottsdale", addressRegion: "AZ", postalCode: "85255", addressCountry: "US" },
      { "@type": "PostalAddress", streetAddress: "4160 N 108th Ave", addressLocality: "Phoenix", addressRegion: "AZ", postalCode: "85037", addressCountry: "US" },
    ],
    sameAs: [
      "https://www.facebook.com/desertrecoverycenters/",
      "https://www.instagram.com/desertrecoverycenter/",
      "https://x.com/desertrecoverycenters",
      "https://www.youtube.com/channel/UCiXgogSH5-yTjshI9FJuxLg",
      "https://open.spotify.com/show/5thFT5DNC1exCkhmiug1Nb",
      "https://www.yelp.com/biz/desert-recovery-centers-glendale",
    ],
  };
}

export function getLocalBusinessSchema(location: {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  description: string;
  lat?: number;
  lng?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalClinic"],
    name: location.name,
    description: location.description,
    telephone: location.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    ...(location.lat && location.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.lat,
            longitude: location.lng,
          },
        }
      : {}),
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// Extracts FAQ pairs from post HTML for FAQPage emission on blog posts.
// Q = an H2/H3 ending in "?", A = the section up to the next heading,
// stripped to plain text. Answers under 40 words (thin) or over 300
// (a section, not an answer) are skipped. Extraction only — the schema
// must match visible page content; never author or reword text here.
export function extractFAQsFromContent(
  html: string
): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [];
  const parts = html.split(/(<h[23]>[^<]*<\/h[23]>)/);
  for (let i = 1; i < parts.length; i += 2) {
    const qm = parts[i].match(/^<h[23]>([^<]*\?)\s*<\/h[23]>$/);
    if (!qm) continue;
    const question = qm[1].trim();
    const answer = (parts[i + 1] || "")
      .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/g, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#x27;|&apos;|&rsquo;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&[a-z#0-9]+;/gi, " ")
      .replace(/This article is for informational purposes only[\s\S]*?\(623\) 305-0496\.?/, "")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = answer.split(/\s+/).filter(Boolean).length;
    if (wordCount < 40 || wordCount > 300) continue;
    faqs.push({ question, answer });
  }
  return faqs;
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getPersonSchema(person: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url: string;
  credentials?: string[];
  linkedIn?: string;
}) {
  return {
    "@context": "https://schema.org",
    // MDs are typed Physician as well; the gate is the credential data
    // itself, never a name or slug list.
    "@type": person.credentials?.includes("MD")
      ? ["Person", "Physician"]
      : "Person",
    "@id": person.url,
    name: person.name,
    // Empty/missing optional fields are omitted entirely: an absent field
    // means not applicable, an empty string means broken data.
    ...(person.jobTitle ? { jobTitle: person.jobTitle } : {}),
    ...(person.description ? { description: person.description } : {}),
    ...(person.image ? { image: person.image } : {}),
    url: person.url,
    ...(person.credentials?.length
      ? { hasCredential: person.credentials }
      : {}),
    ...(person.linkedIn ? { sameAs: [person.linkedIn] } : {}),
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function getVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  uploadDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    embedUrl: video.embedUrl,
    uploadDate: video.uploadDate,
  };
}

export function getYouTubeVideoSchema(video: {
  youtubeId: string;
  title: string;
  description: string;
  uploadDate: string;
  transcript?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    uploadDate: video.uploadDate,
    ...(video.transcript ? { transcript: video.transcript } : {}),
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema(article: {
  headline: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
  description: string;
  reviewer?: Reviewer;
  lastReviewed?: string;
}) {
  // reviewedBy is a WebPage property, not an Article property. Returns an
  // [Article, MedicalWebPage] pair; the MedicalWebPage carries reviewedBy
  // and points at the Article via mainEntity.
  const fullUrl = `${SITE_URL}${article.url}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${fullUrl}#article`,
      headline: article.headline,
      url: fullUrl,
      author: { "@id": `${SITE_URL}/#organization` },
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      image: article.image,
      description: article.description,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/branding/desert-recovery-centers-logo-black-2x.png`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${fullUrl}#webpage`,
      url: fullUrl,
      name: article.headline,
      ...(article.reviewer && article.reviewer !== "none"
        ? { reviewedBy: DRC_REVIEWERS[article.reviewer] }
        : {}),
      ...(article.lastReviewed ? { lastReviewed: article.lastReviewed } : {}),
      mainEntity: { "@id": `${fullUrl}#article` },
    },
  ];
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: "Luxury addiction and mental health treatment in Arizona",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
