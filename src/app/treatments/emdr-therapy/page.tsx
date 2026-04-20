"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalTherapySchema } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

const phases = [
  { name: "History & Preparation", description: "Building therapeutic rapport and identifying target memories for reprocessing." },
  { name: "Assessment", description: "Activating the target memory and establishing baseline measurements of disturbance." },
  { name: "Desensitization", description: "Bilateral stimulation (eye movements, tapping, or auditory tones) while the client focuses on the traumatic memory." },
  { name: "Installation", description: "Strengthening positive beliefs and adaptive cognitions to replace the negative self-beliefs tied to the trauma." },
  { name: "Body Scan", description: "Identifying and processing any residual physical tension or discomfort associated with the memory." },
  { name: "Closure & Reevaluation", description: "Ensuring emotional stability and assessing the effectiveness of reprocessing in subsequent sessions." },
];

const treatsConditions = [
  "PTSD & Complex PTSD",
  "Childhood Trauma & Abuse",
  "Sexual Assault & Domestic Violence",
  "Combat & First Responder Trauma",
  "Grief & Loss",
  "Phobias & Panic Disorders",
  "Addiction & Relapse Triggers",
  "Performance Anxiety",
];

export default function EMDRPage() {
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
      <SchemaScript schema={[getFAQSchema(faqData["emdr"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/treatments/emdr-therapy"))]} />
      <MedicalTherapySchema
        name="EMDR Therapy"
        description="Eye Movement Desensitization and Reprocessing therapy that unlocks the brain's natural ability to heal from trauma and disturbing life experiences."
        url="/treatments/emdr-therapy"
        conditions={["PTSD", "Complex PTSD", "Childhood Trauma", "Grief", "Phobias", "Panic Disorders", "Addiction", "Performance Anxiety"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/treatments/emdr-therapy")} />
      <PageHero
        eyebrow="Treatment Modality"
        title="EMDR Therapy"
        description="Eye Movement Desensitization and Reprocessing, unlocking the brain's natural ability to heal from trauma."
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
                src="/images/glendale/Glendale-Therapy-Room.jpg"
                alt="Private therapy room for EMDR sessions"
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
                src="/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg"
                alt="Serenity space at Desert Recovery Centers"
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
              Understanding EMDR
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Healing Trauma at Its Root
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              EMDR is a powerful, extensively researched psychotherapy that enables people to heal from the symptoms and emotional distress resulting from disturbing life experiences. Recognized by the World Health Organization, the American Psychological Association, and the Department of Veterans Affairs as a frontline trauma treatment, EMDR has helped millions recover from events that once felt impossible to move past.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike traditional talk therapy, EMDR does not require you to talk in detail about the traumatic event. Instead, it uses bilateral stimulation, typically guided eye movements, to activate the brain&apos;s natural information processing system, allowing traumatic memories to be reprocessed and stored in a way that no longer triggers overwhelming emotional responses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Desert Recovery Centers, EMDR is delivered exclusively by licensed clinical psychologists with specialized EMDR training, ensuring the highest standard of care for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eight phases */}
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
              The EMDR Protocol
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              How EMDR Works
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">Phase {i + 1}</span>
                <h3 className="font-display text-lg text-forest font-semibold mt-2 mb-2">{phase.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collision: conditions treated */}
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
                EMDR Treats More Than PTSD
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                While EMDR is best known for trauma and PTSD, research supports its effectiveness for a wide range of conditions rooted in disturbing life experiences. Many clients who have struggled with addiction, anxiety, or depression find that EMDR resolves the underlying trauma driving their symptoms.
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
                  src="/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg"
                  alt="Harmony therapy room at Desert Recovery Centers"
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Begin Healing
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              You Don&apos;t Have to Live With the Weight of Trauma
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              EMDR has helped combat veterans, survivors of abuse, first responders, and individuals struggling with addiction find relief from memories that once controlled their lives. Our clinical team is here to guide you through every step of the process.
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
              <a href="/treatments/trauma-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Trauma Therapy</a>
              <a href="/treatments/cbt-cognitive-behavioral-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">CBT Therapy</a>
              <a href="/mental-health/ptsd-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">PTSD Treatment</a>
              <a href="/mental-health/anxiety-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Anxiety Treatment</a>
              <a href="/treatments/holistic-therapies" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Holistic Therapies</a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="Common questions" data-speakable="true">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">What is EMDR therapy at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">EMDR (Eye Movement Desensitization and Reprocessing) at Desert Recovery Centers is an evidence-based psychotherapy that uses bilateral stimulation to help the brain reprocess traumatic memories. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona where EMDR is delivered exclusively by licensed clinical psychologists with specialized EMDR training.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does EMDR work for addiction and mental health treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">EMDR activates the brain&apos;s natural information processing system through guided eye movements, tapping, or auditory tones while the client focuses on a traumatic memory. This allows disturbing memories to be reprocessed and stored in a way that no longer triggers overwhelming emotional responses, without requiring detailed verbal recounting of the trauma.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers EMDR at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">EMDR at Desert Recovery Centers is delivered exclusively by licensed clinical psychologists with doctoral-level training and specialized EMDR certification. Small client-to-clinician ratios ensure each client receives the focused, individualized attention that effective trauma reprocessing requires.</p>
            </article>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqData["emdr"]} />
      <CTASection />
      <Footer />
    </>
  );
}
