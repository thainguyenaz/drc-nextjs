import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { BreadcrumbSchema, PersonSchema } from "@/lib/seo";
import { getPageMeta } from "@/data/page-metadata";

const meta = getPageMeta("/our-team/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg", alt: meta.title }],
  },
};

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
        title="The People Behind Your Recovery"
        description="Doctoral-level clinicians, board-certified physicians, and compassionate professionals, every member of our team is here because they believe in the work."
        bgImage="/images/general/DRC-OUR-TEAM.jpg"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, you&apos;re not treated by rotating staff or contract clinicians. You&apos;re treated by a dedicated team of licensed psychologists, psychiatrists, therapists, and medical professionals who know your name, your history, and your goals. Our intentionally small program sizes, a maximum of 10 beds per facility, make this level of personalized care possible.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Every clinician on our team brings specialized expertise in dual diagnosis treatment, evidence-based therapies, and trauma-informed care. Together, they collaborate daily to ensure your treatment plan evolves as you do. <strong className="text-forest">Heal. Restore. Thrive.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Team is Different */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What Sets Our Team Apart
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Clinical Excellence at Every Level
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Doctoral-Level Clinical Leadership",
                  desc: "Our Clinical Director and psychology staff hold doctoral degrees with specialized training in addiction, trauma, and co-occurring disorders. Your treatment plan is designed by the most qualified clinicians in the field.",
                },
                {
                  title: "Board-Certified Medical Director",
                  desc: "Our Medical Director oversees all psychiatric care, medication management, and medical detox protocols, ensuring your physical and mental health are addressed with equal rigor.",
                },
                {
                  title: "Dedicated Treatment Teams",
                  desc: "You won't see a different therapist each week. Your treatment team stays consistent throughout your stay, building the therapeutic relationship that drives real progress.",
                },
                {
                  title: "Daily Clinical Collaboration",
                  desc: "Our psychologists, psychiatrists, nurses, and behavioral health professionals meet daily to review progress, adjust treatment plans, and coordinate care, ensuring nothing falls through the cracks.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
      <Footer />
    </>
  );
}
