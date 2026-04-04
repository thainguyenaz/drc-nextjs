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
import Citations from "@/components/Citations";

const modalities = [
  {
    name: "EMDR",
    description: "Bilateral stimulation that helps the brain reprocess traumatic memories, reducing their emotional charge without requiring detailed verbal recounting.",
  },
  {
    name: "Trauma-Focused CBT",
    description: "Structured cognitive-behavioral approach specifically adapted for trauma, helping clients challenge trauma-related beliefs and develop healthier coping patterns.",
  },
  {
    name: "Somatic Experiencing",
    description: "Body-based therapy that addresses trauma stored in the nervous system, releasing physical tension, chronic pain, and hypervigilance.",
  },
  {
    name: "Narrative Therapy",
    description: "Helps clients externalize their trauma, reauthoring their life story from a position of strength rather than victimhood.",
  },
  {
    name: "Art & Expressive Therapies",
    description: "Creative modalities that allow trauma processing through non-verbal channels, particularly valuable when words feel inadequate.",
  },
  {
    name: "Mindfulness & Grounding",
    description: "Techniques for managing flashbacks, dissociation, and hyperarousal in real time, building a foundation of present-moment safety.",
  },
];

const traumaTypes = [
  "Childhood Abuse & Neglect",
  "Sexual Assault",
  "Domestic Violence",
  "Combat & Military Trauma",
  "First Responder PTSD",
  "Accidents & Natural Disasters",
  "Medical Trauma",
  "Complex / Developmental Trauma",
  "Grief & Traumatic Loss",
  "Intergenerational Trauma",
];

export default function TraumaTherapyPage() {
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
      <SchemaScript schema={[getFAQSchema(faqData["trauma-therapy"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/treatments/trauma-therapy"))]} />
      <MedicalTherapySchema
        name="Trauma Therapy"
        description="Comprehensive multi-modal trauma treatment combining EMDR, somatic experiencing, and trauma-focused CBT to help clients heal from disturbing life experiences."
        url="/treatments/trauma-therapy"
        conditions={["PTSD", "Complex PTSD", "Childhood Abuse", "Sexual Assault", "Domestic Violence", "Combat Trauma", "Grief", "Intergenerational Trauma"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/treatments/trauma-therapy")} />
      <PageHero
        eyebrow="Treatment Specialization"
        title="Trauma Therapy"
        description="Trauma doesn't disappear on its own. Our specialized trauma program helps you process what happened, so it stops controlling what happens next."
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
                src="/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg"
                alt="Peaceful outdoor space at Desert Recovery Centers Scottsdale"
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
                alt="Massage therapy room for somatic healing"
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
              Understanding Trauma
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Trauma Is Not What Happened to You, It&apos;s What Lives Inside You
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Trauma rewires the brain and nervous system. It changes how you perceive danger, how you relate to others, and how you cope with stress. For many, substance use becomes the only way to manage the flashbacks, hypervigilance, numbness, and emotional pain that trauma leaves behind.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Desert Recovery Centers, trauma therapy is not a single modality, it is a comprehensive, multi-modal approach designed by our clinical psychologists to meet each client exactly where they are. Some clients need the structured reprocessing of EMDR. Others benefit from the body-based release of somatic experiencing. Many need both.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our trauma program is delivered in individual and group formats, with gender-specific groups that create the safety necessary for deep healing work. Every session is led or directly supervised by a licensed clinical psychologist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modalities */}
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
              Our Modalities
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Trauma-Specific Therapeutic Approaches
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {modalities.map((mod, i) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{mod.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trauma types, collision */}
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
                Types of Trauma We Treat
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Every Trauma Story Is Different
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Whether your trauma is a single catastrophic event or years of chronic stress, our clinicians have the training and experience to help. There is no trauma too complex, too old, or too painful to address with the right therapeutic support.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {traumaTypes.map((item) => (
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
                  src="/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg"
                  alt="Peaceful therapy environment at Desert Recovery Centers"
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
              You Deserve to Heal
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Recovery From Trauma Is Possible
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              You don&apos;t have to keep surviving on autopilot. Our clinical team specializes in helping people who have been through the worst experiences imaginable find a way back to themselves. The first step is a confidential conversation.
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
              <a href="/treatments/emdr" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">EMDR Therapy</a>
              <a href="/mental-health/ptsd-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">PTSD Treatment</a>
              <a href="/treatments/dbt" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">DBT Therapy</a>
              <a href="/treatments/holistic" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Holistic Therapies</a>
              <a href="/treatments/dual-diagnosis" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Dual Diagnosis</a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="Common questions" data-speakable="true">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">What is trauma therapy at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Trauma therapy at Desert Recovery Centers is a comprehensive, multi-modal treatment program that combines EMDR, trauma-focused CBT, somatic experiencing, narrative therapy, and expressive arts therapies. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona where trauma treatment is individualized to meet each client&apos;s specific needs and trauma history.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does trauma therapy work for addiction and mental health treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Trauma therapy addresses the root causes underlying addiction and mental health symptoms. By reprocessing traumatic memories, releasing trauma stored in the nervous system, and rebuilding a sense of safety, clients can break the cycle of substance use that often serves as self-medication for unresolved trauma. Gender-specific groups create the safety necessary for deep healing work.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers trauma therapy at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every trauma therapy session at Desert Recovery Centers is led or directly supervised by a licensed clinical psychologist with specialized training in trauma treatment modalities. With small client-to-clinician ratios and gender-specific group therapy, clients receive the focused clinical attention that effective trauma processing demands.</p>
            </article>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqData["trauma-therapy"]} />
      <CTASection />
      <Footer />
      <Citations />
    </>
  );
}
