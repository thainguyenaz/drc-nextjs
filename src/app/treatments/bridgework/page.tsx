"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalTherapySchema } from "@/lib/seo";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

const includes = [
  "1-2 additional focused sessions per week with a therapist under the direction of our clinical psychologists",
  "Brief, structured sessions between formal therapy, designed to reinforce and apply what clients learn",
  "Focused on accountability, psychoeducation, and real-life application of clinical skills",
  "Reinforcement of CBT, DBT, trauma processing, coping skills, and recovery strategies",
  "Real-time coaching to help clients use therapeutic tools when they need them most",
];

const isNot = [
  "Not case management or administrative check-ins",
  "Not a replacement for primary individual therapy sessions",
  "Not peer support, BridgeWork is clinician-led and clinically supervised",
];

const idealFor = [
  "Trauma histories that create barriers to applying skills under stress",
  "Emotional dysregulation that overwhelms coping strategies between sessions",
  "ADHD and executive functioning challenges that make skill transfer difficult",
  "Difficulty bridging the gap between therapeutic insight and real-world behavior change",
  "Relapse vulnerability driven by poor impulse control or habitual patterns",
  "Clients who have been through treatment before and need deeper skill integration",
];

export default function BridgeWorkPage() {
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
      <SchemaScript schema={[getFAQSchema(faqData["bridgework"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/treatments/bridgework"))]} />
      <MedicalTherapySchema
        name="BridgeWork&trade;"
        description="Proprietary clinical psychologist-led skill integration program that bridges the gap between therapeutic insight and real-world behavioral change."
        url="/treatments/bridgework"
        conditions={["Substance Use Disorders", "Emotional Dysregulation", "Trauma", "ADHD", "Relapse Vulnerability", "Impulse Control Disorders"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/treatments/bridgework")} />
      <PageHero
        eyebrow="Proprietary Program"
        title={`BridgeWork™`}
        description="Clinical psychologist-led skill integration, where therapeutic insight becomes real-world action. Exclusive to Desert Recovery Centers."
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
                src="/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg"
                alt="BridgeWork therapy session environment"
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
                src="/images/glendale/Glendale-Group-Room.jpg"
                alt="Group therapy room for skill integration sessions"
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
              Exclusive to Desert Recovery Centers
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              The Gap Between Insight and Action
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In traditional residential treatment, clients attend individual therapy, group therapy, and perhaps a skills group. But there&apos;s a critical gap that most programs overlook: the space between learning a skill and actually using it under pressure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              BridgeWork™ was developed in-house by the clinical team at Desert Recovery Centers to fill this exact gap. It offers 1-2 additional focused sessions per week with a therapist under the direct supervision of our clinical psychologists, sessions designed specifically to help clients practice, apply, and internalize therapeutic tools in real time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              BridgeWork™ is one of the only clinical psychologist-led skill integration programs in the region, and it is available exclusively at Desert Recovery Centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What it includes, collision */}
      <section className="bg-forest py-20 md:py-28 overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:w-[60%]"
            >
              <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
                What It Includes
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Structured Skill Integration
              </h2>
              <ul className="space-y-4 mb-10">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <span className="text-white font-body text-sm font-semibold uppercase tracking-wide mb-3 block">
                What It Is Not
              </span>
              <ul className="space-y-3">
                {isNot.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="md:w-[40%] w-full"
            >
              <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg"
                  alt="Harmony therapy room, BridgeWork program"
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-gold/90 text-white text-xs font-semibold px-4 py-2 rounded-lg">
                    BridgeWork™ Program
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal for */}
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
              Ideal Candidates
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Who Benefits Most from BridgeWork™
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {idealFor.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
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
              Only at Desert Recovery Centers
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Where Therapy Becomes Practice
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              BridgeWork™ represents our belief that knowing what to do and being able to do it under pressure are two different things. This program closes that gap, and it&apos;s available only at Desert Recovery Centers.
            </p>
            <p className="text-gold text-sm font-medium italic mb-8">
              BridgeWork™ is one of the only clinical psychologist-led skill integration programs in the region.
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
              <a href="/treatments/holistic-therapies" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Holistic Therapies</a>
              <a href="/treatments/softwave-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">SoftWave Therapy</a>
              <a href="/treatments/cbt-cognitive-behavioral-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">CBT Therapy</a>
              <a href="/treatments/dual-diagnosis-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Dual Diagnosis</a>
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
              <h3 className="text-forest font-semibold text-sm mb-1">What is BridgeWork&trade; at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">BridgeWork&trade; is a proprietary skill integration program developed in-house by the clinical team at Desert Recovery Centers, a Joint Commission accredited luxury treatment center in Arizona. It provides 1 to 2 additional focused sessions per week that help clients practice, apply, and internalize therapeutic tools in real time, bridging the gap between learning a skill and using it under pressure.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does BridgeWork&trade; work for addiction and mental health treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">BridgeWork&trade; fills a critical gap that most treatment programs overlook: the space between learning a therapeutic skill and actually applying it under real-world pressure. Through structured sessions focused on accountability, psychoeducation, and real-life application, clients reinforce CBT, DBT, trauma processing, and coping strategies, increasing the likelihood that skills learned in therapy translate into lasting behavioral change.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers BridgeWork&trade; at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">BridgeWork&trade; sessions are led by therapists under the direct supervision of licensed clinical psychologists. It is one of the only clinical psychologist-led skill integration programs in the region, with small client-to-clinician ratios ensuring personalized coaching and support. BridgeWork&trade; is available exclusively at Desert Recovery Centers.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <FAQSection faqs={faqData["bridgework"]} />
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
