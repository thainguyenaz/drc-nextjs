import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import PartnerReferralContent from "./PartnerReferralContent";
import { getBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

const partnerReferralFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly will DRC respond after I submit a referral?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our admissions team will verify the patient's insurance benefits and contact the referring provider within one hour during business hours. For urgent referrals after hours, call (623) 305-0496." },
    },
    {
      "@type": "Question",
      "name": "What information do I need to submit a referral?",
      "acceptedAnswer": { "@type": "Answer", "text": "Patient name, date of birth, contact information, insurance carrier, and clear photos of both sides of the insurance card. Member ID is helpful but not required." },
    },
  ],
};

export const metadata: Metadata = {
  title: "Partner Referral | Desert Recovery Centers",
  description:
    "Refer a patient to Desert Recovery Centers. Submit patient and insurance details and our admissions team will verify benefits and coordinate admission within the hour. Call (623) 305-0496.",
  alternates: { canonical: "https://desertrecoverycenters.com/partner-referral-vrc" },
  openGraph: {
    images: [{ url: "/images/general/DRC-TREATMENTS.jpg", width: 1200, height: 630, alt: "Desert Recovery Centers Partner Referral" }],
  },
};

export default function PartnerReferralVrcPage() {
  return (
    <>
      <SchemaScript schema={[partnerReferralFaqSchema, getBreadcrumbSchema(getBreadcrumbsFromPathname("/partner-referral-vrc"))]} />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/partner-referral-vrc")} />
      {/* TODO (Phase F): co-brand the hero with Virtue Recovery Center logo once Thai provides asset.
          Logo will live at public/images/partners/virtue-recovery-center.png (path pending).
          Likely surface: extend PageHero with optional partnerLogo prop, or render a small logo
          row beneath the hero title. */}
      <PageHero
        eyebrow="For Referring Providers"
        title="Partner Referral"
        description="Submit a patient referral. Desert Recovery Centers and Virtue Recovery Center coordinate admission and benefits verification within the hour."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      <PartnerReferralContent />
      <CTASection />
      <Footer />
    </>
  );
}
