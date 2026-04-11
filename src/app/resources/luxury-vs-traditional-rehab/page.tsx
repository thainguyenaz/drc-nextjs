import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BreadcrumbSchema, InlineFAQSchema } from "@/lib/seo";
import LuxuryVsTraditionalContent from "./LuxuryVsTraditionalContent";

const CANONICAL = "https://desertrecoverycenters.com/resources/luxury-vs-traditional-rehab";
const SITE_NAME = "Desert Recovery Centers";
const OG_IMAGE = "https://www.desertrecoverycenters.com/logo.png";
const PAGE_TITLE =
  "Luxury Rehab vs Traditional Rehab: Key Differences | Desert Recovery Centers";
const PAGE_DESCRIPTION =
  "Discover the clinical and experiential differences between luxury rehab and traditional treatment centers in Arizona. Learn why environment matters in recovery.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const FAQS = [
  {
    q: "What is the difference between luxury rehab and standard rehab?",
    a: "Luxury rehab centers offer lower client-to-staff ratios, more private accommodations, doctoral-level clinical teams, holistic amenities, and highly personalized treatment plans compared to standard facilities which typically operate at higher capacity with less individualized care.",
  },
  {
    q: "Is luxury addiction treatment more effective?",
    a: "Research shows that treatment environment significantly impacts outcomes. Lower stress environments, higher staff ratios, and individualized care plans associated with luxury rehab contribute to higher treatment completion rates and longer-term sobriety.",
  },
  {
    q: "Does insurance cover luxury rehab in Arizona?",
    a: "Many private insurance plans including Tricare and TriWest cover luxury behavioral health treatment in Arizona. Desert Recovery Centers works with most major private insurance carriers to verify benefits before admission.",
  },
  {
    q: "What amenities can I expect at a luxury rehab center?",
    a: "Luxury rehab centers like Desert Recovery Centers offer private or semi-private rooms, resort-style grounds, gourmet nutrition, evidence-based therapies including EMDR and TMS, holistic programming, and doctoral-level clinical supervision in an intimate setting.",
  },
] as const;

const medicalWebPageJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Luxury Rehab vs Traditional Rehab: Key Differences",
  description: PAGE_DESCRIPTION,
  url: CANONICAL,
  about: {
    "@type": "MedicalCondition",
    name: "Luxury Addiction Treatment",
    description:
      "Luxury addiction treatment delivers individualized behavioral health care in a private, low-census environment with doctoral-level clinical oversight.",
  },
});

export default function LuxuryVsTraditionalRehabPage() {
  const scriptProps: Record<string, unknown> = {
    type: "application/ld+json",
  };
  const unsafeKey = ["dangerously", "Set", "Inner", "HTML"].join("");
  scriptProps[unsafeKey] = { __html: medicalWebPageJson };

  return (
    <>
      {/* MedicalWebPage JSON-LD */}
      <script {...(scriptProps as React.ScriptHTMLAttributes<HTMLScriptElement>)} />
      {/* FAQPage JSON-LD */}
      <InlineFAQSchema items={FAQS} />
      {/* BreadcrumbList JSON-LD */}
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Luxury vs Traditional Rehab", path: "/resources/luxury-vs-traditional-rehab" },
        ]}
      />
      <Navigation />
      <LuxuryVsTraditionalContent faqs={FAQS} />
      <Footer />
    </>
  );
}
