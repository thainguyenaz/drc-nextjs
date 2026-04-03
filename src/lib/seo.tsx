import { Metadata } from "next";
import { siteData } from "./site-data";

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
    sameAs: [siteData.social.facebook, siteData.social.instagram, siteData.social.twitter],
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
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/facilities/${loc.name.toLowerCase()}`,
    name: `Desert Recovery Centers — ${loc.name}`,
    image: `${SITE_URL}${loc.image}`,
    url: `${SITE_URL}/facilities/${loc.name.toLowerCase()}`,
    telephone: loc.phoneTel,
    email: siteData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city,
      addressRegion: state,
      postalCode: zip,
      addressCountry: "US",
    },
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
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
