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

const modules = [
  {
    name: "Mindfulness",
    description: "Learning to observe thoughts and emotions without judgment, staying present rather than reacting impulsively.",
  },
  {
    name: "Distress Tolerance",
    description: "Building resilience to withstand painful situations without resorting to self-destructive behaviors or substances.",
  },
  {
    name: "Emotion Regulation",
    description: "Understanding, labeling, and managing intense emotions so they inform rather than control decisions.",
  },
  {
    name: "Interpersonal Effectiveness",
    description: "Communicating needs clearly, setting boundaries, and maintaining self-respect in relationships.",
  },
];

const idealFor = [
  "Borderline Personality Disorder",
  "Chronic Suicidal Ideation",
  "Self-Harm Behaviors",
  "Emotional Dysregulation",
  "Substance Use Disorders",
  "Eating Disorders",
  "PTSD & Complex Trauma",
  "Bipolar Disorder",
];

export default function DBTPage() {
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
      <SchemaScript schema={[getFAQSchema(faqData["dbt-therapy"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/treatments/dbt"))]} />
      <MedicalTherapySchema
        name="Dialectical Behavior Therapy (DBT)"
        description="Skills-based psychotherapy that balances acceptance and change, helping clients navigate intense emotions without self-destruction."
        url="/treatments/dbt"
        conditions={["Borderline Personality Disorder", "Emotional Dysregulation", "Substance Use Disorders", "Self-Harm", "PTSD", "Bipolar Disorder", "Eating Disorders", "Chronic Suicidal Ideation"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/treatments/dbt")} />
      <PageHero
        eyebrow="Treatment Modality"
        title="Dialectical Behavior Therapy (DBT)"
        description="Balancing acceptance and change, building the skills to navigate intense emotions without self-destruction."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      {/* Intro with collision scroll */}
      <section ref={collisionRef} className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              style={{ x: leftX, opacity: imgOpacity }}
              className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg"
                alt="Comfortable therapy space at Desert Recovery Centers"
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
                alt="Group therapy at Desert Recovery Centers"
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
              Understanding DBT
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              When Emotions Feel Unmanageable
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dialectical Behavior Therapy was originally developed by Dr. Marsha Linehan for individuals with borderline personality disorder, but its effectiveness extends far beyond. DBT is now a first-line treatment for anyone who experiences emotions so intensely that they overwhelm coping capacity, leading to impulsive decisions, substance use, self-harm, or relationship destruction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The word &quot;dialectical&quot; refers to the balance between two opposing truths: accepting yourself as you are right now, while simultaneously working to change behaviors that cause suffering. This paradox is at the heart of DBT and what makes it transformative.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Desert Recovery Centers, DBT is delivered in both individual and group formats by licensed clinical psychologists, creating a comprehensive skill-building experience that clients carry with them long after discharge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four modules */}
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
              The Four Pillars
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Core DBT Skill Modules
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-xl text-forest font-semibold mb-3">{mod.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collision: content left + image right */}
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
                Conditions Treated
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                Who Benefits Most from DBT
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                DBT is particularly effective for individuals who experience emotions at a higher intensity than most, whose emotional responses escalate quickly, and who take longer to return to baseline. If traditional talk therapy has felt insufficient, DBT may be the missing piece.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {idealFor.map((item) => (
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
              className="md:w-[40%] w-full"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg"
                  alt="Serenity room at Desert Recovery Centers Scottsdale"
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why DRC */}
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
              Why Desert Recovery Centers
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              DBT Skills That Last a Lifetime
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our DBT program goes beyond weekly skills groups. Clients at Desert Recovery Centers receive individual DBT-informed therapy, structured skills training groups, and real-time coaching through our BridgeWork™ program, ensuring that skills are not just learned, but practiced and internalized.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every DBT session is led or supervised by a licensed clinical psychologist with specialized training in dialectical behavior therapy. This level of clinical oversight is rare in residential treatment and reflects our commitment to evidence-based excellence.
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
              <a href="/treatments/trauma-therapy" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Trauma Therapy</a>
              <a href="/mental-health/personality-disorder-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Personality Disorders</a>
              <a href="/mental-health/bipolar-disorder-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Bipolar Disorder</a>
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
              <h3 className="text-forest font-semibold text-sm mb-1">What is Dialectical Behavior Therapy (DBT) at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">DBT at Desert Recovery Centers is a comprehensive skills-based psychotherapy that teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona where DBT is delivered in both individual and group formats as part of an integrated treatment plan.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does DBT work for addiction and mental health treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">DBT works by balancing two core principles: accepting yourself as you are while simultaneously working to change destructive behaviors. Through four skill modules, mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness, clients learn to manage overwhelming emotions, tolerate pain without substance use, and build healthier relationships.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers DBT at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every DBT session at Desert Recovery Centers is led or supervised by a licensed clinical psychologist with specialized training in dialectical behavior therapy. With small client-to-clinician ratios, clients receive individualized attention during both skills training groups and one-on-one therapy sessions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <FAQSection faqs={faqData["dbt-therapy"]} />
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
