import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — Desert Recovery Centers",
  description:
    "Learn about Desert Recovery Centers — Joint Commission-accredited luxury behavioral health treatment in Arizona. Dual diagnosis specialists with a 10-bed maximum for personalized care.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="About Us"
        title="Heal. Restore. Thrive."
        description="Desert Recovery Centers provides luxury mental health and addiction treatment across Arizona — built on clinical excellence, guided by compassion, and designed around you."
        bgImage="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
      />
      <AboutContent />
      <CTASection />
      <Footer />
    </>
  );
}
