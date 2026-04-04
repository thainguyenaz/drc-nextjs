import { Metadata } from "next";
import { siteData } from "./site-data";
import { videoData } from "@/data/video-data";
import { getYouTubeVideoSchema } from "./schema";

const SITE_URL = "https://www.desertrecoverycenters.com";
const SITE_NAME = "Desert Recovery Centers";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// ─── Metadata helper ────────────────────────────────────────────────
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage ?? DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage ?? DEFAULT_OG_IMAGE],
    },
  };
}

// ─── JSON-LD helpers ────────────────────────────────────────────────

/**
 * Renders a JSON-LD script tag. Uses dangerouslySetInnerHTML which is safe here
 * because we only serialize our own static site data via JSON.stringify (no user input).
 */
function ld(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return ld({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: siteData.email,
    sameAs: [
      siteData.social.facebook,
      siteData.social.instagram,
      siteData.social.twitter,
      "https://www.google.com/maps/place/Desert+Recovery+Centers+-+Glendale",
      "https://www.google.com/maps/place/Desert+Recovery+Centers+-+Scottsdale",
      "https://www.google.com/maps/place/Desert+Recovery+Centers+-+Phoenix",
      "https://www.legitscript.com/websites/?checker_keywords=desertrecoverycenters.com",
      "https://www.jointcommission.org",
    ],
    contactPoint: siteData.locations.map((loc) => ({
      "@type": "ContactPoint",
      telephone: loc.phoneTel,
      contactType: "admissions",
      areaServed: "US",
      availableLanguage: "English",
    })),
  });
}

export function LocalBusinessSchema({ index }: { index: number }) {
  const loc = siteData.locations[index];
  const parts = loc.address.split(", ");
  const street = parts[0];
  const city = parts[1];
  const stateZip = parts[2] ?? "AZ";
  const [state, zip] = stateZip.split(" ");

  return ld({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalClinic"],
    "@id": `${SITE_URL}/facilities/${loc.name.toLowerCase()}`,
    name: `Desert Recovery Centers - ${loc.name}`,
    image: `${SITE_URL}${loc.image}`,
    url: `${SITE_URL}/facilities/${loc.name.toLowerCase()}`,
    telephone: loc.phone,
    email: siteData.email,
    description: loc.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: "US",
    },
    priceRange: "$$$$",
    openingHours: "Mo-Su 00:00-24:00",
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(loc.sameAs?.length ? { sameAs: loc.sameAs } : {}),
  });
}

export function AllLocalBusinessSchemas() {
  return (
    <>
      <LocalBusinessSchema index={0} />
      <LocalBusinessSchema index={1} />
      <LocalBusinessSchema index={2} />
    </>
  );
}

export function FAQPageSchema() {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  });
}

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  return ld({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  });
}

export function PersonSchema({
  name,
  jobTitle,
  image,
  description,
}: {
  name: string;
  jobTitle: string;
  image: string;
  description?: string;
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image: `${SITE_URL}${image}`,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(description ? { description } : {}),
  });
}

// ─── AEO / Answer Engine Optimization schemas ──────────────────────

/** Inline FAQPage schema, accepts {q,a} or {question,answer} shaped items */
export function InlineFAQSchema({
  items,
}: {
  items: readonly ({ q: string; a: string } | { question: string; answer: string })[];
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => {
      const q = "q" in faq ? faq.q : faq.question;
      const a = "a" in faq ? faq.a : faq.answer;
      return {
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      };
    }),
  });
}

/** SpeakableSpecification schema, marks CSS selectors as voice-readable */
export function SpeakableSchema({ url, cssSelectors }: { url: string; cssSelectors: string[] }) {
  return ld({
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}${url}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  });
}

/** MedicalCondition schema for condition pages */
export function MedicalConditionSchema({
  name,
  description,
  url,
  possibleTreatments,
}: {
  name: string;
  description: string;
  url: string;
  possibleTreatments: string[];
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name,
    description,
    url: `${SITE_URL}${url}`,
    possibleTreatment: possibleTreatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t,
    })),
  });
}

/** MedicalTherapy schema for treatment pages */
export function MedicalTherapySchema({
  name,
  description,
  url,
  conditions,
}: {
  name: string;
  description: string;
  url: string;
  conditions?: string[];
}) {
  return ld({
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name,
    description,
    url: `${SITE_URL}${url}`,
    medicineSystem: "https://schema.org/WesternConventional",
    ...(conditions?.length
      ? {
          relevantCondition: conditions.map((c) => ({
            "@type": "MedicalCondition",
            name: c,
          })),
        }
      : {}),
  });
}

/**
 * VideoObject schemas for a given page path.
 * Safe usage of dangerouslySetInnerHTML: only serializes our own static
 * video data via JSON.stringify, no user-supplied HTML content.
 */
export function VideoSchemas({ path }: { path: string }) {
  const videos = videoData[path];
  if (!videos?.length) return null;
  return (
    <>
      {videos.map((v) => (
        <script
          key={v.youtubeId}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getYouTubeVideoSchema(v)),
          }}
        />
      ))}
    </>
  );
}
