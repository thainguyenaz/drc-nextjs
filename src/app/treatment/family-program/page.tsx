import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Family Program — Desert Recovery Centers",
  description:
    "Family therapy and education program at Desert Recovery Centers. Structural family therapy, recovery coaching, and support for families navigating addiction and mental health treatment in Arizona.",
  path: "/treatment/family-program",
});

export default function FamilyProgramPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Treatment", path: "/treatments" }, { name: "Family Program", path: "/treatment/family-program" }]} />
      <Navigation />
      <PageHero
        eyebrow="Treatment Programs"
        title="Family Program"
        description="Addiction and mental health conditions affect the entire family. Our Family Program equips loved ones with the understanding, skills, and support to heal together."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Healing Doesn&apos;t Happen in Isolation
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              When someone you love is struggling with addiction or a mental health condition, the impact ripples through the entire family. Trust erodes, communication breaks down, and everyone develops their own coping mechanisms — some healthy, many not. Recovery that doesn&apos;t address these family dynamics is incomplete.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, our Family Program brings loved ones into the treatment process through structured family therapy sessions, psychoeducation, and ongoing support. We use evidence-based approaches including Structural Family Therapy to help families understand the disease model of addiction, rebuild communication, establish healthy boundaries, and develop a shared recovery plan.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Families are not the problem — they are part of the solution. Our clinical team works with your family to repair relationships and build the foundation for lasting recovery.
            </p>
          </div>
        </div>
      </section>

      {/* What the Program Includes */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Program Details</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What the Family Program Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Structural family therapy sessions",
                "Psychoeducation on addiction and mental health",
                "Communication and boundary-setting skills",
                "Understanding enabling vs. supporting",
                "Family recovery planning",
                "CRAFT-based intervention guidance",
                "Ongoing family support during treatment",
                "Aftercare resources for families",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Family Therapy Videos ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Expert Insight</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Is Structural Family Therapy?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/NX9Duj89o3o?rel=0"
              title="What Is Structural Family Therapy, and Why Is It Helpful for Families of Addicts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">The Stages of Family Recovery</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/xRhjvq3Jk5s?rel=0"
              title="What Are the Stages of Family Recovery, Even When the Addict is Still Active"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Is CRAFT?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/Gqb-9IG8Q8U?rel=0"
              title="What Is CRAFT, and How Does It Work Better Than Confrontation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
