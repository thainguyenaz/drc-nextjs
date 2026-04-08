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
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";

const therapies = [
  {
    name: "Yoga & Movement",
    description: "Trauma-informed yoga classes that restore the connection between mind and body, improve flexibility, and reduce cortisol levels.",
  },
  {
    name: "Mindfulness Meditation",
    description: "Guided meditation practices that build present-moment awareness, reduce rumination, and strengthen emotional resilience.",
  },
  {
    name: "Art Therapy",
    description: "Facilitated creative expression that allows clients to process emotions non-verbally, especially valuable for trauma survivors.",
  },
  {
    name: "Music Therapy",
    description: "Structured musical experiences that regulate mood, reduce anxiety, and provide a powerful outlet for emotional expression.",
  },
  {
    name: "Breathwork",
    description: "Controlled breathing techniques that activate the parasympathetic nervous system, reducing panic, anxiety, and physiological stress responses.",
  },
  {
    name: "Massage Therapy",
    description: "Licensed therapeutic massage in our dedicated massage rooms, releasing tension stored in the body and promoting deep relaxation.",
  },
  {
    name: "Nutrition Counseling",
    description: "Personalized nutritional guidance that supports brain chemistry balance, physical recovery, and sustainable energy throughout treatment.",
  },
  {
    name: "Biofeedback & Neurofeedback",
    description: "Technology-assisted therapy that trains the brain and nervous system to self-regulate, improving sleep, focus, and emotional stability.",
  },
];

export default function HolisticPage() {
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
      <SchemaScript schema={[getFAQSchema(faqData["holistic-therapy"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/treatments/holistic-therapies"))]} />
      <MedicalTherapySchema
        name="Holistic Therapies"
        description="Evidence-informed complementary therapies including yoga, mindfulness, art therapy, and nutrition counseling that enhance clinical treatment for whole-person recovery."
        url="/treatments/holistic-therapies"
        conditions={["Substance Use Disorders", "Anxiety", "Depression", "PTSD", "Chronic Stress", "Insomnia", "Chronic Pain"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/treatments/holistic-therapies")} />
      <PageHero
        eyebrow="Whole-Person Care"
        title="Holistic Therapies"
        description="Healing the whole person, mind, body, and spirit, through evidence-informed complementary therapies that enhance clinical treatment."
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
                src="/images/glendale/Glendale-Pool.jpg"
                alt="Pool and outdoor wellness area at Desert Recovery Centers"
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
                src="/images/glendale/Glendale-Massage.jpg"
                alt="Massage therapy room at Desert Recovery Centers"
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
              Beyond Traditional Therapy
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Recovery Is More Than Talk Therapy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mental health conditions and addiction don&apos;t just live in the mind, they manifest in the body, disrupt sleep, alter nutrition, and erode spiritual well-being. True recovery requires addressing all of these dimensions simultaneously.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Desert Recovery Centers, holistic therapies are not alternatives to evidence-based clinical treatment, they are complements that amplify outcomes. Yoga reduces cortisol. Breathwork calms the nervous system. Nutrition counseling restores the biochemical foundation that medication and therapy depend on.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every holistic offering is integrated into the clinical treatment plan and overseen by our clinical team, ensuring alignment with each client&apos;s therapeutic goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Therapies grid */}
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
              Our Holistic Offerings
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Complementary Therapies at DRC
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {therapies.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl p-6 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-base text-forest font-semibold mb-2">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collision: facilities */}
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
                Our Facilities
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Environments Designed for Holistic Healing
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our luxury facilities are purpose-built for whole-person recovery. Each location features dedicated wellness spaces, massage rooms, yoga areas, meditation gardens, and state-of-the-art fitness centers, alongside the natural beauty of the Arizona desert.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Gourmet, nutritionist-designed meals fuel the body. Resort-style amenities, pools, tennis courts, basketball courts, encourage physical activity and healthy recreation. The environment itself becomes part of the healing process.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/facilities/glendale" className="text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                  Glendale
                </a>
                <a href="/facilities/scottsdale" className="text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                  Scottsdale
                </a>
                <a href="/facilities/phoenix" className="text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                  Phoenix
                </a>
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
                  src="/images/glendale/Glendale-Gym.jpg"
                  alt="State-of-the-art fitness center at Desert Recovery Centers"
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
              Heal the Whole Person
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Your Recovery Deserves More Than a Clinical Approach
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              When clinical excellence meets holistic care in a luxury environment, transformation happens. Call our admissions team to learn how our integrated approach can support your recovery.
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
              <a href="/treatments/bridgework" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">BridgeWork&trade;</a>
              <a href="/treatments/softwave-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">SoftWave Therapy</a>
              <a href="/treatments/trauma-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Trauma Therapy</a>
              <a href="/treatments/dbt-dialectical-behavior-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">DBT Therapy</a>
              <a href="/resources/luxury-vs-standard-rehab" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Luxury vs Standard Rehab</a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="Common questions" data-speakable="true">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">What are holistic therapies at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Holistic therapies at Desert Recovery Centers include yoga, mindfulness meditation, art therapy, music therapy, breathwork, massage therapy, nutrition counseling, and biofeedback. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona where holistic offerings are integrated into the clinical treatment plan and overseen by the clinical team to ensure alignment with therapeutic goals.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How do holistic therapies work for addiction and mental health treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Holistic therapies complement evidence-based clinical treatment by addressing the physical, emotional, and spiritual dimensions of recovery. Yoga reduces cortisol levels, breathwork calms the nervous system, nutrition counseling restores biochemical balance, and creative therapies provide non-verbal outlets for processing difficult emotions. These modalities amplify clinical outcomes when integrated with therapies like CBT, DBT, and EMDR.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers holistic therapies at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Holistic therapies at Desert Recovery Centers are delivered by certified practitioners in each modality, licensed massage therapists, certified yoga instructors, registered dietitians, and trained art therapists, all under the clinical oversight of our doctoral-level psychologists. Small client-to-clinician ratios ensure each client receives personalized holistic care integrated with their overall treatment plan.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <FAQSection faqs={faqData["holistic-therapy"]} />
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
