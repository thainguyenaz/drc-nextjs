import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Desert Recovery Centers",
  description:
    "Contact Desert Recovery Centers. Three luxury facilities in Glendale, Scottsdale, and Phoenix, Arizona. Available 24/7 for confidential consultations.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Contact Us"
        title="We're Here When You're Ready"
        description="One conversation can change everything. Reach out to our admissions team — available 24/7, always confidential."
        bgImage="/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-02-2024-0830August-02-202400010-2.jpg"
      />
      <ContactContent />
      <CTASection />
      <Footer />
    </>
  );
}
