import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Addiction Treatment Programs — Desert Recovery Centers",
  description:
    "Evidence-based addiction treatment in Arizona for alcohol, opioids, cocaine, meth, fentanyl, prescription drugs, and behavioral addictions. Residential, PHP, and IOP programs available.",
};

export default function AddictionPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Addiction Treatment Programs"
        description="From medically supervised detox to long-term recovery support, our addiction programs are built on science, guided by compassion."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              You already know something has to change. The cycle of using, hiding, and recovering just enough to do it all over again — it takes everything from you. Your relationships, your health, the version of yourself you actually want to be. If you&apos;re reading this, you&apos;re already looking for a way out. That matters.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat addiction as the chronic medical condition it is — not a moral failing, not a lack of willpower. Our clinical team builds individualized treatment plans that address the root causes driving your substance use, using FDA-approved Medication-Assisted Treatment (MAT) alongside proven behavioral therapies.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Levels of Care
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              {[
                {
                  name: "Residential",
                  duration: "30\u201390 days",
                  desc: "Immersive 24/7 care in our luxury facilities with structured daily programming, individual therapy, and group sessions.",
                },
                {
                  name: "PHP",
                  duration: "4\u20136 weeks",
                  desc: "5\u20136 hours of daily programming while living at home or in sober living, providing structure with flexibility.",
                },
                {
                  name: "IOP",
                  duration: "8\u201312 weeks",
                  desc: "Flexible outpatient sessions 3\u20134 times per week for step-down support as you rebuild daily life.",
                },
              ].map((level) => (
                <div
                  key={level.name}
                  className="bg-cream rounded-xl p-6 border-2 border-transparent hover:border-gold/40 transition-all"
                >
                  <h3 className="font-display text-lg text-forest font-semibold">
                    {level.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mt-1">
                    {level.duration}
                  </p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {level.desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every person who walks through our doors receives a comprehensive clinical assessment. From there, your treatment team — psychiatrists, psychologists, licensed therapists, and nursing staff — designs a plan tailored to your specific needs. Therapies include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), EMDR, motivational interviewing, 12-step facilitation, and holistic modalities like yoga, mindfulness, and nutritional counseling.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <CTASection />
      <Footer />
    </>
  );
}
