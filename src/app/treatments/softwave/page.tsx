"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalTherapySchema } from "@/lib/seo";

const benefits = [
  {
    name: "Pain Reduction",
    description: "Unfocused shockwaves stimulate the body's natural pain relief mechanisms, reducing chronic and acute pain without medication.",
  },
  {
    name: "Decreased Inflammation",
    description: "Activates anti-inflammatory pathways at the cellular level, addressing the root cause of many pain conditions.",
  },
  {
    name: "Accelerated Tissue Repair",
    description: "Stimulates stem cell activation and increases blood flow to damaged tissues, promoting faster natural healing.",
  },
  {
    name: "Improved Mobility",
    description: "Reduces stiffness and scar tissue, restoring range of motion and physical function.",
  },
  {
    name: "Non-Invasive Treatment",
    description: "No surgery, no needles, no medication, each session takes 10-15 minutes with zero downtime.",
  },
  {
    name: "Supports Recovery",
    description: "Physical pain is a major relapse trigger. By addressing pain without opioids, SoftWave supports sustainable recovery.",
  },
];

const treatsConditions = [
  "Chronic Back & Neck Pain",
  "Joint Pain & Arthritis",
  "Plantar Fasciitis",
  "Tendinitis & Tendinopathy",
  "Sports Injuries",
  "Post-Surgical Pain",
  "Neuropathy",
  "Musculoskeletal Pain",
];

export default function SoftWavePage() {
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
        name="SoftWave Therapy"
        description="FDA-cleared tissue regeneration technology that reduces pain and inflammation without medication, supporting addiction recovery by breaking the pain-opioid cycle."
        url="/treatments/softwave"
        conditions={["Chronic Pain", "Joint Pain", "Neuropathy", "Tendinitis", "Musculoskeletal Pain", "Post-Surgical Pain", "Plantar Fasciitis"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Advanced Therapy"
        title="SoftWave Therapy"
        description="FDA-cleared tissue regeneration technology, reducing pain and inflammation without medication, supporting recovery from the inside out."
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
                src="/images/glendale/Glendale-Gym.jpg"
                alt="Wellness and fitness area at Desert Recovery Centers"
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
                src="/images/general/accom-massage.jpg"
                alt="Treatment room at Desert Recovery Centers"
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
              Understanding SoftWave
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Pain Management Without Opioids
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SoftWave Tissue Regeneration Technology uses patented unfocused shockwave therapy to stimulate the body&apos;s natural healing processes at the cellular level. Unlike traditional shockwave devices, SoftWave&apos;s proprietary electrohydraulic technology produces a broad, unfocused wave that treats a larger area more safely and effectively.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For individuals in recovery, chronic pain is one of the most dangerous relapse triggers. Many people initially turned to opioids to manage legitimate pain conditions. SoftWave provides a powerful alternative, addressing pain at its source without the risks of medication dependence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Desert Recovery Centers is one of the only residential treatment programs in Arizona to offer SoftWave therapy as part of an integrated treatment plan. Sessions are quick, painless, and require no recovery time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits grid */}
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
              Clinical Benefits
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              How SoftWave Supports Recovery
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{b.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions, collision */}
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
                Conditions Treated
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Pain Conditions That Respond to SoftWave
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                SoftWave has demonstrated clinical effectiveness for a wide range of musculoskeletal and pain conditions. Many clients report significant improvement after just 1-3 sessions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {treatsConditions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
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
                  src="/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg"
                  alt="Fitness and wellness center at Desert Recovery Centers Scottsdale"
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
              Advanced Pain Relief
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Break the Pain-Addiction Cycle
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chronic pain doesn&apos;t have to be managed with addictive substances. SoftWave therapy at Desert Recovery Centers offers a safe, effective, medication-free path to pain relief, supporting your recovery from every angle.
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
              <a href="/treatments/holistic" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Holistic Therapies</a>
              <a href="/treatments/bridgework" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">BridgeWork&trade;</a>
              <a href="/treatments/trauma-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Trauma Therapy</a>
              <a href="/mental-health/ptsd-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">PTSD Treatment</a>
              <a href="/facilities/glendale" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Glendale Facility</a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="Common questions" data-speakable="true">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">What is SoftWave therapy at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">SoftWave therapy at Desert Recovery Centers is an FDA-cleared tissue regeneration technology that uses unfocused shockwaves to reduce pain and inflammation without medication. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona and one of the only residential programs in the state to offer SoftWave as part of an integrated treatment plan.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does SoftWave therapy work for addiction treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">SoftWave therapy supports addiction recovery by addressing chronic pain, one of the most dangerous relapse triggers, without opioids or other addictive medications. The patented electrohydraulic technology stimulates stem cell activation, increases blood flow to damaged tissues, and activates anti-inflammatory pathways at the cellular level. Sessions take 10 to 15 minutes with zero downtime.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers SoftWave therapy at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">SoftWave therapy at Desert Recovery Centers is administered by trained clinical staff under the oversight of our doctoral-level clinical team. Small client-to-clinician ratios ensure each client&apos;s pain management needs are assessed individually and integrated with their broader treatment plan for addiction and mental health recovery.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
