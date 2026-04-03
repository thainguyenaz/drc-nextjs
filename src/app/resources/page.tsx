import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Recovery Resources — Desert Recovery Centers",
  description:
    "Free resources for addiction and mental health recovery. Detox guides, mental health assessments, blog articles, podcast episodes, and treatment comparisons.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Resources"
        title="Recovery Resources"
        description="Education is part of healing. Explore our library of guides, assessments, and insights designed to help you make informed decisions about treatment."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      <ResourcesContent />
      <CTASection />
      <Footer />
    </>
  );
}
