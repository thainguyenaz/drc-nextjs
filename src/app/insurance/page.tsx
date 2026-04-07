import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import InsuranceContent from "./InsuranceContent";

const insuranceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What if my insurance isn't listed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Desert Recovery Centers works with many insurance plans beyond those listed on our website. Call (480) 931-3617 and the admissions team will check your specific plan. Private pay options and financing are also available." },
    },
    {
      "@type": "Question",
      "name": "Will my employer find out I'm in treatment?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. All treatment information is protected by HIPAA and 42 CFR Part 2 federal confidentiality regulations. Insurance claims are processed with the highest level of privacy protections available under federal law." },
    },
    {
      "@type": "Question",
      "name": "What does insurance typically cover for rehab?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most commercial insurance plans cover residential treatment, PHP, and IOP for mental health and substance use disorders. Your specific coverage depends on your plan, deductible, and benefits. The Desert Recovery Centers team will explain your coverage in detail before you begin treatment." },
    },
    {
      "@type": "Question",
      "name": "Is there any cost for the insurance verification?",
      "acceptedAnswer": { "@type": "Answer", "text": "None. Insurance verification at Desert Recovery Centers is completely free, completely confidential, and comes with no obligation to begin treatment. Call (480) 931-3617 to verify your benefits." },
    },
  ],
};

export const metadata: Metadata = {
  title: "Verify Insurance for Addiction & Mental Health Treatment | DRC",
  description:
    "Verify your insurance for addiction and mental health treatment at Desert Recovery Centers. We accept most private insurance. Call (480) 931-3617.",
  alternates: { canonical: "https://desertrecoverycenters.com/insurance-verification/" },
  openGraph: {
    images: [{ url: "/images/glendale/Glendale-Front.jpg", width: 1200, height: 630, alt: "Exterior of Desert Recovery Centers luxury residential rehab facility in Glendale Arizona" }],
  },
};

export default function InsurancePage() {
  return (
    <>
      <SchemaScript schema={[insuranceFaqSchema]} />
      <Navigation />
      <PageHero
        eyebrow="Insurance"
        title="Insurance Verification"
        description="We accept employer-based group commercial insurance plans and most major carriers out-of-network. Submit your details and we'll verify your benefits."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      <InsuranceContent />
      <CTASection />
      <Footer />
    </>
  );
}
