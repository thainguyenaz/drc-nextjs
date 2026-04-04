import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { BreadcrumbSchema, VideoSchemas } from "@/lib/seo";
import { getPageMeta } from "@/data/page-metadata";

const meta = getPageMeta("/treatments/");

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

const therapies = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    href: "/treatments/cbt",
    description: "Identifies and changes negative thought patterns and behaviors. CBT is one of the most extensively researched therapies for both mental health and addiction.",
  },
  {
    name: "Dialectical Behavior Therapy (DBT)",
    href: "/treatments/dbt",
    description: "Teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Particularly effective for borderline personality disorder and emotional dysregulation.",
  },
  {
    name: "EMDR",
    href: "/treatments/emdr",
    description: "Eye Movement Desensitization and Reprocessing helps process traumatic memories and reduce their emotional impact. Highly effective for PTSD and trauma.",
  },
  {
    name: "Trauma Therapy",
    href: "/treatments/trauma-therapy",
    description: "Specialized approaches including somatic experiencing, trauma-focused CBT, and narrative therapy to help process and heal from traumatic experiences.",
  },
  {
    name: "Dual Diagnosis Treatment",
    href: "/treatments/dual-diagnosis",
    description: "Integrated treatment for co-occurring mental health and substance use disorders. Treating both conditions simultaneously leads to significantly better outcomes.",
  },
  {
    name: "Holistic Therapies",
    href: "/treatments/holistic",
    description: "Yoga, mindfulness meditation, art therapy, music therapy, breathwork, massage, nutrition counseling, and biofeedback/neurofeedback.",
  },
  {
    name: "SoftWave Therapy",
    href: "/treatments/softwave",
    description: "Advanced tissue regeneration technology using unfocused shockwave therapy to reduce pain, decrease inflammation, and accelerate the body's natural healing process.",
  },
  {
    name: "BridgeWork™",
    href: "/treatments/bridgework",
    description: "Our proprietary clinical psychologist-led skill integration program. Brief structured sessions that bridge the gap between therapeutic insight and real-world application.",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Treatments", path: "/treatments" }]} />
      <VideoSchemas path="/treatments/" />
      <Navigation />
      <PageHero
        eyebrow="Our Treatments"
        title="Evidence-Based Treatment Therapies"
        description="Every protocol is grounded in peer-reviewed clinical research. Our therapeutic modalities address the whole person, mind, body, and spirit."
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
      {/* ── DRC Levels of Care Overview ────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Levels of Care</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Overview of DRC&apos;s Levels of Care</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/v3cEgF6yARY?rel=0"
              title="Overview of the New DRC Levels of Care and What That Looks Like"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* ── Treatment Therapies Videos ────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">How Treatment Is Individualized at DRC</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/W8WKhAAhPM0?rel=0"
              title="How Is Treatment Individualized Rather Than One Size Fits All"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Are the 12 Steps?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/8O27euQ82cY?rel=0"
              title="What Are the 12 Steps and How Do They Help Addicts and Alcoholics Recover"
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
