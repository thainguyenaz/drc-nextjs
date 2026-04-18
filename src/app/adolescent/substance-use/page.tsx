"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedSection from "@/components/animated/AnimatedSection";
import Image from "next/image";

const SITE_URL = "https://www.desertrecoverycenters.com";
const PAGE_PATH = "/adolescent/substance-use";
const PAGE_TITLE = "Adolescent Substance Use Treatment Arizona | Teen Drug and Alcohol Treatment | Desert Recovery Centers";

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` }, { "@type": "ListItem", position: 3, name: "Substance Use" }] };
const medicalWebPageSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": `${SITE_URL}${PAGE_PATH}/#webpage`, url: `${SITE_URL}${PAGE_PATH}`, name: PAGE_TITLE, specialty: "Adolescent Psychiatry", reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } }, publisher: { "@id": `${SITE_URL}/#organization` } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "My teenager says they can stop on their own. Do they really need residential treatment?", acceptedAnswer: { "@type": "Answer", text: "The ability to stop without help varies significantly based on the substance, the duration and intensity of use, and the severity of underlying conditions. An honest clinical assessment is the only way to determine the appropriate level of care. Self-assessment of substance use severity is frequently inaccurate, particularly in adolescents. If your teenager's use has continued despite consequences, if there is a co-occurring mental health condition, or if safety is a concern, a clinical evaluation is warranted." } },
  { "@type": "Question", name: "Is marijuana really a problem?", acceptedAnswer: { "@type": "Answer", text: "Legal status does not determine clinical impact. The adolescent brain is in an active developmental period through the mid-twenties. Regular marijuana use during adolescence is associated with impaired memory and learning, increased risk for psychosis in genetically predisposed individuals, and higher rates of addiction compared to adult-onset use. For teenagers with anxiety or depression, marijuana often worsens symptoms over time despite providing short-term relief." } },
  { "@type": "Question", name: "What if my teenager is resistant to treatment?", acceptedAnswer: { "@type": "Answer", text: "Resistance is common and expected. Adolescents rarely self-identify as needing help. Our admissions team is experienced in working with families navigating resistant teenagers and can advise on how to approach the conversation. Motivational Interviewing within the program is designed to meet adolescents where they are and build intrinsic motivation over time." } },
  { "@type": "Question", name: "Do you treat adolescents who have overdosed?", acceptedAnswer: { "@type": "Answer", text: "Yes. A prior overdose or near-overdose is a significant indicator of the severity of the situation and often the catalyst for a family seeking residential care. Our medical team is qualified to manage medically complex admissions." } },
] };

const faqs = [
  { q: "My teenager says they can stop on their own. Do they really need residential treatment?", a: "The ability to stop without help varies significantly based on the substance, the duration and intensity of use, and the severity of underlying conditions. An honest clinical assessment is the only way to determine the appropriate level of care. Self-assessment of substance use severity is frequently inaccurate, particularly in adolescents. If your teenager's use has continued despite consequences, if there is a co-occurring mental health condition, or if safety is a concern, a clinical evaluation is warranted." },
  { q: "Is marijuana really a problem?", a: "Legal status does not determine clinical impact. The adolescent brain is in an active developmental period through the mid-twenties. Regular marijuana use during adolescence is associated with impaired memory and learning, increased risk for psychosis in genetically predisposed individuals, and higher rates of addiction compared to adult-onset use. For teenagers with anxiety or depression, marijuana often worsens symptoms over time despite providing short-term relief." },
  { q: "What if my teenager is resistant to treatment?", a: "Resistance is common and expected. Adolescents rarely self-identify as needing help. Our admissions team is experienced in working with families navigating resistant teenagers and can advise on how to approach the conversation. Motivational Interviewing within the program is designed to meet adolescents where they are and build intrinsic motivation over time." },
  { q: "Do you treat adolescents who have overdosed?", a: "Yes. A prior overdose or near-overdose is a significant indicator of the severity of the situation and often the catalyst for a family seeking residential care. Our medical team is qualified to manage medically complex admissions." },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent Substance Use Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://desertrecoverycenters.com/adolescent/substance-use",
};

export default function AdolescentSubstanceUsePage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "Substance Use", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent Substance Use Treatment in Arizona" description="Adolescent substance use is rarely just substance use. There is almost always a mental health condition underneath it. We treat both simultaneously." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent substance use almost always has an underlying mental health condition driving it, including anxiety, depression, trauma, or ADHD that the teenager is attempting to self-medicate. Dual diagnosis residential treatment addressing both the substance use and the underlying condition simultaneously produces the most durable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Abstract Divider */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[200px] md:h-[250px] overflow-hidden"
      >
        <Image src="/images/adolescent/abstract/abstract-substance-use.jpg" alt="Adolescent substance use treatment Arizona" fill className="object-cover" />
      </motion.div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">The Substance Use Is Visible. What Drove It Usually Is Not.</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Adolescent substance use is rarely just substance use. Alcohol, marijuana, prescription drugs, and increasingly, fentanyl-contaminated substances, are most often tools that a teenager discovered worked for managing something else. Anxiety that became unbearable. Depression that nothing else touched. Trauma responses that disrupted sleep and concentration. Social anxiety that disappeared after two drinks. ADHD that felt manageable with stimulants that were not prescribed.</p>
            <p className="text-gray-600 leading-relaxed text-lg">The substance use is visible. What drove a teenager to it is usually not. Treatment that addresses only the substance use without identifying and treating the underlying condition leaves the original problem intact. Relapse rates for adolescents treated without dual diagnosis care reflect this consistently.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Critical Context</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">The Fentanyl Reality</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                The illicit drug supply is contaminated with fentanyl at levels that make any non-prescribed pill or powder potentially fatal for adolescents. Teenagers who believe they are taking Xanax, Adderall, or MDMA are frequently taking fentanyl pressed into an indistinguishable pill. There is no safe experimentation in the current adolescent substance use environment. One pill can be fatal.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">The adolescent substance use landscape has changed in ways that make the stakes categorically higher than a decade ago. The illicit drug supply is contaminated with fentanyl at levels that make any non-prescribed pill or powder potentially fatal. Teenagers who believe they are taking Xanax, Adderall, or MDMA are frequently taking fentanyl pressed into a pill that is indistinguishable from a pharmaceutical. There is no safe experimentation in this environment. One pill can be fatal.</p>
            <p className="text-gray-600 leading-relaxed text-lg">This is not hyperbole. It is the current reality of adolescent substance use in Arizona and across the United States.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[380px]"
              >
                <Image src="/images/locations/phoenix/phoenix-group-room-2.jpg" alt="Group therapy room at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full object-center" />
              </motion.div>
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">The stakes of adolescent substance use have never been higher. Our residential program provides the intensive care teenagers need in this environment.</p>
              </div>
            </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Recognizing the Signs</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How Adolescent Substance Use Presents</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Adolescent substance use frequently goes undetected for longer than parents expect because teenagers are skilled at concealment and the early signs are easy to attribute to normal adolescent behavior. Common indicators include changes in friend groups, declining grades, withdrawal from family, unexplained money, changes in hygiene, and mood shifts that are more pronounced and less clearly connected to identifiable events. Many families reach treatment not after discovering use but after a crisis.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">Substance use in teenagers often goes undetected longer than parents expect. Common signs include:</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {["Changes in friend groups", "Declining grades", "Withdrawal from family", "Changes in sleep patterns", "Unexplained money or missing items", "Changes in hygiene and appearance", "Mood shifts that are more pronounced and less clearly connected to identifiable triggers"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">Many families arrive at treatment not because they discovered substance use but because of a crisis, an arrest, an overdose, or a mental health hospitalization where substance use was identified as part of the picture.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Early identification and intervention make a significant difference in adolescent substance use outcomes. Our admissions team can help assess the right level of care.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[380px]"
              >
                <Image src="/images/locations/phoenix/phoenix-therapy-room.jpg" alt="Therapy room at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full object-center" />
              </motion.div>
            </div>
        </div></div>
      </section>

      {/* Facility Banner */}
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full h-96 rounded-2xl overflow-hidden my-16"
        >
          <Image src="/images/locations/phoenix/phoenix-lobby-lounge.jpg" alt="Desert Recovery Centers Phoenix outpatient facility" fill className="object-cover object-center" />
        </motion.div>
      </div>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent Substance Use</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Desert Recovery Centers treats adolescent substance use and the underlying mental health condition simultaneously from day one, not sequentially. This dual diagnosis approach is the clinical standard because substance use and mental health conditions in adolescents are inseparable. Treatment includes Motivational Interviewing, individual and group therapy, family therapy, medical management, and a structured aftercare and relapse prevention plan.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Our dual diagnosis residential program treats substance use and the underlying mental health condition simultaneously. This is not sequential. We do not stabilize the substance use and then begin mental health treatment. Both are addressed from day one because they are inseparable. We do not use punitive or confrontational approaches. The evidence does not support them and they are particularly counterproductive with adolescents.</p>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { title: "Comprehensive Dual Diagnosis Assessment", desc: "At admission, identifying every layer of what is present so treatment addresses the full clinical picture." },
              { title: "Individual Therapy", desc: "Targeting both substance use and co-occurring conditions with licensed clinicians who specialize in adolescent dual diagnosis." },
              { title: "Group Therapy", desc: "With age-appropriate peers, providing connection and reducing the isolation that fuels both substance use and mental health symptoms." },
              { title: "Motivational Interviewing", desc: "Building internal motivation for change rather than relying on external pressure, which is particularly effective with adolescents." },
              { title: "Family Therapy", desc: "Addressing family system dynamics that may be contributing to use, and building the communication patterns needed for recovery at home." },
              { title: "Medical Management", desc: "Including medication-assisted treatment where clinically appropriate under Dr. Topete's supervision." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/adolescent/clinical/clinical-substance-use.jpg" alt="Family therapy for adolescent substance use treatment at Desert Recovery Centers Arizona" fill className="object-cover w-full h-full object-center" />
              </motion.div>
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Our dual diagnosis approach treats substance use and the underlying mental health condition simultaneously from day one because they are inseparable.</p>
              </div>
            </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection><span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Common Questions</span><h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Frequently Asked Questions</h2></AnimatedSection>
          <div className="space-y-6">{faqs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="border-l-2 border-gold/40 pl-6"><h3 className="font-display text-lg text-forest font-semibold mb-2">{item.q}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.a}</p></motion.div>))}</div>
        </div></div>
      </section>

      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">The Stakes Are Too High to Wait</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">Our admissions team is available 24 hours a day, 7 days a week.</p>
          <p className="text-gold text-sm font-medium mb-10">Most adolescents begin treatment within 48 hours of the first call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+16232575384" className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer">Call (623) 257-5384</a>
            <Link href="/adolescent-treatment" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center">Back to Adolescent Program</Link>
          </div>
        </motion.div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
