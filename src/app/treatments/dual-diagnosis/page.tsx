"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalTherapySchema } from "@/lib/seo";

const approachPillars = [
  {
    name: "Integrated Assessment",
    description: "Comprehensive psychiatric evaluation that identifies all co-occurring conditions from day one — no missed diagnoses, no fragmented care.",
  },
  {
    name: "Unified Treatment Planning",
    description: "A single, cohesive treatment plan that addresses both mental health and addiction simultaneously, managed by the same clinical team.",
  },
  {
    name: "Medication Management",
    description: "Psychiatric oversight from our medical director ensures medication protocols support both mental health stability and recovery from substance use.",
  },
  {
    name: "Evidence-Based Therapies",
    description: "CBT, DBT, EMDR, and trauma-focused modalities delivered by doctoral-level clinicians trained in dual diagnosis treatment.",
  },
  {
    name: "Holistic Support",
    description: "Yoga, mindfulness, nutrition counseling, and somatic therapies address the physical and spiritual dimensions of co-occurring disorders.",
  },
  {
    name: "Aftercare Continuity",
    description: "Discharge planning that maintains integrated care — connecting clients with dual diagnosis-competent providers and support systems.",
  },
];

const commonPairings = [
  "Depression + Alcohol Use Disorder",
  "Anxiety + Benzodiazepine Dependence",
  "PTSD + Opioid Addiction",
  "Bipolar Disorder + Stimulant Abuse",
  "BPD + Polysubstance Use",
  "ADHD + Cannabis or Stimulant Misuse",
];

export default function DualDiagnosisPage() {
  const collisionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: collisionRef,
    offset: ["start end", "end start"],
  });
  const leftX = useTransform(scrollYProgress, [0, 0.4], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], [120, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <>
      <MedicalTherapySchema
        name="Dual Diagnosis Treatment"
        description="Integrated treatment for co-occurring mental health conditions and substance use disorders, addressing both simultaneously for lasting recovery."
        url="/treatments/dual-diagnosis"
        conditions={["Depression", "Anxiety", "PTSD", "Bipolar Disorder", "Borderline Personality Disorder", "ADHD", "Alcohol Use Disorder", "Opioid Addiction"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Treatment Approach"
        title="Dual Diagnosis Treatment"
        description="When mental health and addiction collide, treating one without the other is a recipe for relapse. We treat both — together."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      {/* Intro with collision */}
      <section ref={collisionRef} className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              style={{ x: leftX, opacity: imgOpacity }}
              className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/images/glendale/Glendale-Living-Room.jpg"
                alt="Comfortable living space at Desert Recovery Centers"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              style={{ x: rightX, opacity: imgOpacity }}
              className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-1317August-01-202400007-2.jpg"
                alt="Scottsdale treatment facility living area"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Understanding Dual Diagnosis
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Two Conditions. One Integrated Treatment.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nearly half of all individuals with a substance use disorder also have a co-occurring mental health condition. Depression fuels drinking. Trauma drives opioid use. Anxiety triggers benzodiazepine dependence. These conditions don&apos;t exist in isolation — and they can&apos;t be treated that way.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dual diagnosis treatment at Desert Recovery Centers is not an add-on. It is our foundation. Every client receives a comprehensive psychiatric evaluation within the first 72 hours, and every treatment plan is designed to address the full clinical picture from day one.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our clinical psychologists, psychiatrist, and medical team collaborate daily to ensure that medication management, therapy protocols, and holistic programming work in concert — not at cross-purposes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach pillars */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              The DRC Dual Diagnosis Model
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approachPillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{pillar.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common pairings collision */}
      <section className="bg-forest py-20 md:py-28 overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:w-[55%]"
            >
              <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
                Common Co-Occurring Conditions
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Conditions That Often Travel Together
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                These are among the most common dual diagnosis presentations we treat. Each pairing requires specialized clinical expertise to ensure one condition&apos;s treatment doesn&apos;t inadvertently worsen the other.
              </p>
              <ul className="space-y-4">
                {commonPairings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="md:w-[45%] w-full"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/glendale/Glendale-Therapy-Room.jpg"
                  alt="Therapy room at Desert Recovery Centers"
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Start Your Recovery
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              One Call. Both Conditions. Real Answers.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our admissions team conducts a free, confidential clinical pre-assessment that evaluates both mental health and substance use concerns. You&apos;ll know within one call whether dual diagnosis treatment is right for you — and what your insurance will cover.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+14809313617" className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Call (480) 931-3617
              </a>
              <a href="/treatments" className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                View All Therapies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Treatment Programs */}
      <section className="py-12 bg-cream border-t border-gray-100">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-forest font-display text-lg font-semibold mb-4">Related Treatment Programs</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/treatments/cbt" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">CBT Therapy</a>
              <a href="/mental-health/depression-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Depression Treatment</a>
              <a href="/addiction/alcohol" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Alcohol Addiction</a>
              <a href="/mental-health/anxiety-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Anxiety Treatment</a>
              <a href="/our-team" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Our Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="Common questions" data-speakable="true">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">What is dual diagnosis treatment at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dual diagnosis treatment at Desert Recovery Centers is an integrated approach that treats co-occurring mental health conditions and substance use disorders simultaneously. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona where every client receives a comprehensive psychiatric evaluation within the first 72 hours, and every treatment plan addresses the full clinical picture from day one.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does dual diagnosis treatment work for addiction and mental health?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dual diagnosis treatment works by addressing both conditions as interconnected rather than separate problems. A unified treatment plan combines psychiatric medication management, evidence-based therapies like CBT, DBT, and EMDR, and holistic support — all coordinated by the same clinical team to ensure treatments work in concert rather than at cross-purposes.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers dual diagnosis treatment at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dual diagnosis treatment at Desert Recovery Centers is delivered by a multidisciplinary team of doctoral-level clinicians including licensed clinical psychologists, a board-certified psychiatrist, and registered nurses. With small client-to-clinician ratios, the team collaborates daily to ensure medication management, therapy protocols, and holistic programming are aligned for each client.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
