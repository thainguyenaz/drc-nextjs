"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalTherapySchema } from "@/lib/seo";

const techniques = [
  "Cognitive restructuring, identifying and challenging distorted thought patterns",
  "Behavioral activation, scheduling positive activities to counteract avoidance and withdrawal",
  "Exposure therapy, gradual, structured confrontation of feared situations",
  "Thought records, journaling exercises to track and reframe automatic negative thoughts",
  "Problem-solving training, systematic approaches to address real-life stressors",
  "Relapse prevention planning, identifying triggers and developing coping strategies",
];

const treatsConditions = [
  "Depression & Major Depressive Disorder",
  "Generalized Anxiety Disorder",
  "Panic Disorder & Phobias",
  "PTSD & Trauma",
  "Substance Use Disorders",
  "OCD",
  "Insomnia",
  "Eating Disorders",
];

export default function CBTPage() {
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
        name="Cognitive Behavioral Therapy (CBT)"
        description="Evidence-based psychotherapy that restructures thought patterns to create lasting behavioral change for addiction and mental health recovery."
        url="/treatments/cbt"
        conditions={["Depression", "Anxiety", "PTSD", "Substance Use Disorders", "OCD", "Panic Disorder", "Insomnia", "Eating Disorders"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Treatment Modality"
        title="Cognitive Behavioral Therapy (CBT)"
        description="The gold standard in evidence-based psychotherapy, restructuring thought patterns to create lasting behavioral change."
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
                src="/images/glendale/Glendale-Therapy-Room.jpg"
                alt="Individual therapy session at Desert Recovery Centers"
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
                alt="Group therapy room at Desert Recovery Centers"
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
              Understanding CBT
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              How Thoughts Shape Recovery
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cognitive Behavioral Therapy is built on a powerful premise: the way we think directly influences how we feel and behave. At Desert Recovery Centers, our licensed clinical psychologists use CBT to help clients identify the distorted thinking patterns that fuel anxiety, depression, addiction, and self-destructive behavior.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              CBT is structured, goal-oriented, and time-limited, which means clients begin experiencing measurable improvements within weeks. Sessions focus on developing practical skills that translate directly into everyday life, long after treatment ends.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Research consistently ranks CBT among the most effective therapies for both mental health conditions and substance use disorders. It is a cornerstone of every treatment plan at Desert Recovery Centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Techniques, collision layout */}
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
                Core Techniques
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6 leading-tight">
                What CBT Looks Like in Treatment
              </h2>
              <ul className="space-y-4">
                {techniques.map((item) => (
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
              className="md:w-[40%] w-full"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg"
                  alt="Therapy space at Desert Recovery Centers Scottsdale"
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions treated */}
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
              Conditions We Treat with CBT
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Effective Across a Wide Range of Conditions
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {treatsConditions.map((condition, i) => (
              <motion.div
                key={condition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl p-5 text-center border-t-2 border-t-transparent hover:border-t-gold hover:shadow-lg transition-all"
              >
                <p className="text-forest font-medium text-sm">{condition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CBT at DRC */}
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
              CBT Delivered by Doctoral-Level Clinicians
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike many treatment centers that rely on master&apos;s-level therapists for primary therapy, Desert Recovery Centers provides CBT led by licensed clinical psychologists. This means your treatment is guided by clinicians with the highest level of training in evidence-based interventions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              CBT at DRC is not a standalone intervention, it integrates seamlessly with DBT skills training, EMDR for trauma processing, holistic therapies, and our proprietary BridgeWork™ program to deliver comprehensive, whole-person care.
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
              <a href="/treatments/dbt" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">DBT Therapy</a>
              <a href="/treatments/emdr" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">EMDR Therapy</a>
              <a href="/mental-health/anxiety-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Anxiety Treatment</a>
              <a href="/mental-health/depression-treatment" className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors">Depression Treatment</a>
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
              <h3 className="text-forest font-semibold text-sm mb-1">What is Cognitive Behavioral Therapy (CBT) at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">CBT at Desert Recovery Centers is a structured, evidence-based psychotherapy that helps clients identify and restructure distorted thinking patterns driving addiction, anxiety, depression, and other conditions. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona where CBT is a cornerstone of every individualized treatment plan.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">How does CBT work for addiction and mental health treatment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">CBT works by teaching clients to recognize automatic negative thoughts, challenge cognitive distortions, and replace maladaptive behaviors with healthier coping strategies. Sessions are goal-oriented and time-limited, focusing on practical skills like cognitive restructuring, behavioral activation, and relapse prevention that produce measurable improvements within weeks.</p>
            </article>
            <article className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">Who delivers CBT at Desert Recovery Centers?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">CBT at Desert Recovery Centers is led by licensed clinical psychologists with doctoral-level training in evidence-based interventions. With small client-to-clinician ratios, each client receives personalized attention and clinical oversight that exceeds industry standards for residential treatment.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
