// ─── Structured Data / JSON-LD schema generators ──────────────────
// Each function returns a plain object ready to be passed to <SchemaScript />.

const SITE_URL = "https://desertrecoverycenters.com";
const SITE_NAME = "Desert Recovery Centers";

export function getMedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/wp-content/uploads/2024/10/desert-recovery-centers-logo-black-2x.png`,
    telephone: "(480) 931-3617",
    email: "contact@desertrecoverycenters.com",
    hasCredential: "Joint Commission Gold Seal Accreditation",
    medicalSpecialty: ["Addiction Medicine", "Psychiatry", "Mental Health"],
    areaServed: "Arizona",
    sameAs: [
      "https://www.facebook.com/desertrecoverycenters/",
      "https://www.instagram.com/desertrecoverycenter/",
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
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  credentials?: string[];
  linkedIn?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image,
    url: person.url,
    ...(person.credentials?.length
      ? { hasCredential: person.credentials }
      : {}),
    ...(person.linkedIn ? { sameAs: [person.linkedIn] } : {}),
    worksFor: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
  author: string;
  authorUrl: string;
  datePublished: string;
  dateModified: string;
  image: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    author: {
      "@type": "Person",
      name: article.author,
      url: article.authorUrl,
    },
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
        url: `${SITE_URL}/wp-content/uploads/2024/10/desert-recovery-centers-logo-black-2x.png`,
      },
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+14809313617",
    email: "contact@desertrecoverycenters.com",
    medicalSpecialty: ["Addiction Medicine", "Psychiatry", "Clinical Psychology"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Joint Commission Accreditation",
    },
    sameAs: [
      "https://www.facebook.com/desertrecoverycenters/",
      "https://www.instagram.com/desertrecoverycenter/",
      "https://www.youtube.com/channel/UCiXgogSH5-yTjshI9FJuxLg",
      "https://open.spotify.com/show/5thFT5DNC1exCkhmiug1Nb",
      "https://www.yelp.com/biz/desert-recovery-centers-glendale",
    ],
  };
}
