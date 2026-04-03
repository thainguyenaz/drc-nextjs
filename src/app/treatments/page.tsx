import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Treatment Therapies — Desert Recovery Centers",
  description: "Evidence-based therapies including CBT, DBT, EMDR, trauma therapy, holistic therapies, and dual diagnosis treatment in Arizona.",
};

const therapies = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    href: "/treatments/understanding-cbt-cognitive-behavioral-therapy",
    description: "Identifies and changes negative thought patterns and behaviors. CBT is one of the most extensively researched therapies for both mental health and addiction.",
  },
  {
    name: "Dialectical Behavior Therapy (DBT)",
    href: "/treatments/understanding-dbt-dialectic-behavior-therapy",
    description: "Teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Particularly effective for borderline personality disorder and emotional dysregulation.",
  },
  {
    name: "EMDR",
    href: "/treatments/emdr-eye-movement-desensitization-and-reprocessing",
    description: "Eye Movement Desensitization and Reprocessing helps process traumatic memories and reduce their emotional impact. Highly effective for PTSD and trauma.",
  },
  {
    name: "Trauma Therapy",
    href: "/treatments/trauma-therapy",
    description: "Specialized approaches including somatic experiencing, trauma-focused CBT, and narrative therapy to help process and heal from traumatic experiences.",
  },
  {
    name: "Dual Diagnosis Treatment",
    href: "/treatments/dual-diagnosis-treatment",
    description: "Integrated treatment for co-occurring mental health and substance use disorders. Treating both conditions simultaneously leads to significantly better outcomes.",
  },
  {
    name: "12-Step Program",
    href: "/treatments/12-step-program",
    description: "A structured recovery framework that includes peer support, sponsorship, and a progressive set of principles for achieving and maintaining sobriety.",
  },
  {
    name: "Holistic Therapies",
    href: "/treatments/holistic-therapies",
    description: "Yoga, mindfulness meditation, art therapy, music therapy, breathwork, massage, nutrition counseling, and biofeedback/neurofeedback.",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Our Treatments"
        title="Evidence-Based Treatment Therapies"
        description="Every protocol is grounded in peer-reviewed clinical research. Our therapeutic modalities address the whole person — mind, body, and spirit."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {therapies.map((t) => (
              <a
                key={t.name}
                href={t.href}
                className="block bg-cream rounded-xl p-8 border-2 border-transparent hover:border-gold/40 hover:shadow-lg transition-all cursor-pointer"
              >
                <h3 className="font-display text-xl text-forest font-semibold mb-3">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
