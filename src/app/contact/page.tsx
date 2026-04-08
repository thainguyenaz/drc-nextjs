import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Get Help for Addiction & Mental Health Today | Desert Recovery Centers",
  description:
    "Ready to start your recovery? Contact Desert Recovery Centers today. Luxury addiction and mental health treatment in Arizona. Call (480) 931-3617.",
  alternates: { canonical: "https://desertrecoverycenters.com/get-help/" },
  openGraph: {
    images: [{ url: "/images/glendale/Glendale-Front.jpg", width: 1200, height: 630, alt: "Exterior of Desert Recovery Centers luxury residential rehab facility in Glendale Arizona" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["contact"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/contact"))]} />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/contact")} />
      <PageHero
        eyebrow="Contact Us"
        title="We're Here When You're Ready"
        description="One conversation can change everything. Reach out to our admissions team, available 24/7, always confidential."
        bgImage="/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-02-2024-0830August-02-202400010-2.jpg"
      />
      <ContactContent />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <FAQSection faqs={faqData["contact"]} />
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
