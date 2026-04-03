import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team — Addiction & Mental Health Treatment Professionals",
  description: "Meet the board-certified psychiatrists, licensed therapists, and dedicated support staff at Desert Recovery Centers in Arizona.",
};

export default function OurTeamPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Our Team"
        title="Addiction & Mental Health Treatment Professionals"
        description="Board-certified psychiatrists, licensed therapists, and dedicated support staff committed to your recovery."
        bgImage="/images/general/DRC-OUR-TEAM.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600 leading-relaxed text-lg">
              Our clinical team brings together decades of combined experience in addiction medicine, psychiatry, psychology, nursing, and behavioral health. Every member of our staff is dedicated to providing compassionate, individualized care that addresses the whole person.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
      <Footer />
    </>
  );
}
