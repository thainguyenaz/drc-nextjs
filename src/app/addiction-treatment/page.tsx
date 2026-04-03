import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Addiction Treatment Programs — Desert Recovery Centers",
  description: "Luxury addiction treatment in Arizona for alcohol, opioids, cocaine, meth, fentanyl, prescription drugs, and behavioral addictions.",
};

export default function AddictionTreatmentPage() {
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
              Addiction is a chronic medical condition that requires specialized, evidence-based treatment. At Desert Recovery Centers, we offer a full continuum of care — from medically supervised detoxification to residential treatment, partial hospitalization (PHP), intensive outpatient (IOP), and aftercare planning.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              Our Medication-Assisted Treatment (MAT) program utilizes FDA-approved medications including Suboxone, Vivitrol, and naltrexone alongside behavioral therapies for optimal recovery outcomes.
            </p>
            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">Levels of Care</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              {[
                { name: "Residential", duration: "30–90 days", desc: "Immersive 24/7 care in our luxury facilities with structured daily programming." },
                { name: "PHP", duration: "4–6 weeks", desc: "5–6 hours of daily programming while living at home or in sober living." },
                { name: "IOP", duration: "8–12 weeks", desc: "Flexible outpatient sessions 3–4 times per week for step-down support." },
              ].map((level) => (
                <div key={level.name} className="bg-cream rounded-xl p-6 border-2 border-transparent hover:border-gold/40 transition-all">
                  <h3 className="font-display text-lg text-forest font-semibold">{level.name}</h3>
                  <p className="text-gold text-sm font-medium mt-1">{level.duration}</p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{level.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <CTASection />
      <Footer />
    </>
  );
}
