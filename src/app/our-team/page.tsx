import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema, PersonSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Team — Addiction & Mental Health Treatment Professionals",
  description: "Meet the board-certified psychiatrists, licensed therapists, and dedicated support staff at Desert Recovery Centers in Arizona.",
  path: "/our-team",
});

export default function OurTeamPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Our Team", path: "/our-team" }]} />
      <PersonSchema
        name="Dr. An Nguyen"
        jobTitle="Licensed Clinical Psychologist, Clinical Director"
        image="/images/team/Dr-An-Nguyen.jpg"
        description="Clinical Director at Desert Recovery Centers, a licensed clinical psychologist specializing in addiction and mental health treatment."
      />
      <PersonSchema
        name="Dr. Reyes Topete, MD"
        jobTitle="Medical Director"
        image="/images/team/Dr._Reyes_Topete-cropped.jpg"
        description="Medical Director at Desert Recovery Centers, overseeing psychiatric care and medication management for addiction and mental health treatment."
      />
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
