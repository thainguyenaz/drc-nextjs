import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InsuranceContent from "./InsuranceContent";

export const metadata: Metadata = {
  title: "Insurance Verification, Desert Recovery Centers",
  description:
    "Verify your insurance coverage for addiction and mental health treatment at Desert Recovery Centers. We accept Cigna, Aetna, BCBS, UnitedHealthcare, Humana, Tricare, and TriWest.",
};

export default function InsurancePage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Insurance"
        title="Insurance Verification"
        description="Most clients pay little to nothing out of pocket. Let our admissions team verify your benefits, it takes less than five minutes."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      <InsuranceContent />
      <CTASection />
      <Footer />
    </>
  );
}
