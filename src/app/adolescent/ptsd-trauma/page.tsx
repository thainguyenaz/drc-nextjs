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

const SITE_URL = "https://www.desertrecoverycenters.com";
const PAGE_PATH = "/adolescent/ptsd-trauma";
const PAGE_TITLE = "Adolescent PTSD and Trauma Treatment Arizona | Desert Recovery Centers";


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` },
    { "@type": "ListItem", position: 3, name: "PTSD and Trauma" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}/#webpage`,
  url: `${SITE_URL}${PAGE_PATH}`,
  name: PAGE_TITLE,
  specialty: "Adolescent Psychiatry",
  reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "My teenager has never talked about anything traumatic happening. Could they still have PTSD?", acceptedAnswer: { "@type": "Answer", text: "Yes. Many adolescents with trauma histories do not disclose spontaneously, particularly if the trauma involved abuse, shame, or situations where they were told to stay silent. Some adolescents are not consciously aware of the connection between their symptoms and their history. A thorough clinical assessment can identify trauma responses even when the teenager has not described a specific event." } },
    { "@type": "Question", name: "What is the difference between trauma and PTSD?", acceptedAnswer: { "@type": "Answer", text: "Trauma is the experience. PTSD is a clinical diagnosis that occurs when trauma responses persist, cause significant distress, and interfere with functioning. Not everyone who experiences trauma develops PTSD, but all trauma deserves clinical attention, particularly in adolescents whose brains are still developing." } },
    { "@type": "Question", name: "Can trauma treatment make things worse before they get better?", acceptedAnswer: { "@type": "Answer", text: "Trauma treatment done correctly is paced carefully to avoid overwhelming the adolescent. We use a phase-based approach that builds safety and coping skills before any trauma processing begins. In a residential setting, we have the clinical support available around the clock to manage distress as it arises." } },
  ],
};

const faqs = [
  { q: "My teenager has never talked about anything traumatic happening. Could they still have PTSD?", a: "Yes. Many adolescents with trauma histories do not disclose spontaneously, particularly if the trauma involved abuse, shame, or situations where they were told to stay silent. Some adolescents are not consciously aware of the connection between their symptoms and their history. A thorough clinical assessment can identify trauma responses even when the teenager has not described a specific event." },
  { q: "What is the difference between trauma and PTSD?", a: "Trauma is the experience. PTSD is a clinical diagnosis that occurs when trauma responses persist, cause significant distress, and interfere with functioning. Not everyone who experiences trauma develops PTSD, but all trauma deserves clinical attention, particularly in adolescents whose brains are still developing." },
  { q: "Can trauma treatment make things worse before they get better?", a: "Trauma treatment done correctly is paced carefully to avoid overwhelming the adolescent. We use a phase-based approach that builds safety and coping skills before any trauma processing begins. In a residential setting, we have the clinical support available around the clock to manage distress as it arises." },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent PTSD and Trauma Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://drc-nextjs.vercel.app/adolescent/ptsd-trauma",
};

export default function AdolescentPtsdTraumaPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "PTSD and Trauma", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent PTSD and Trauma Treatment in Arizona" description="Trauma in adolescents does not always look like trauma. It looks like behavior. The trauma underneath is invisible until someone looks for it." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent PTSD is a clinical response to traumatic experience that rewires the developing brain and presents as behavioral and emotional dysregulation, not simply as memory of the event. With trauma-informed residential treatment, adolescents can process trauma and restore stable functioning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">When Behavior Is the Symptom, Not the Problem</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Trauma in adolescents does not always look like trauma. It looks like a teenager who cannot sit still in class, who explodes at minor frustrations, who cannot sleep, who has been suspended three times this semester. It looks like withdrawal, numbness, risky behavior, and relationships that keep falling apart. The behavior is visible. The trauma underneath it is invisible until someone looks for it.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Unprocessed trauma rewires the developing adolescent brain. The limbic system remains on high alert. The prefrontal cortex, still developing through adolescence, cannot regulate the emotional responses that trauma has conditioned. What parents and schools see is behavior. What is actually happening is neurobiology.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Sources of Trauma</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What Causes Adolescent PTSD</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Adolescent PTSD can result from abuse, neglect, bullying, accidents, loss of a caregiver, community violence, or the cumulative effect of adverse childhood experiences over time. A single event can produce PTSD and so can chronic exposure to an environment where safety was never reliable. Desert Recovery Centers assesses adverse childhood experiences at admission for every adolescent we treat.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed mb-6">Trauma in adolescents comes from many sources. A single event can produce PTSD. So can chronic exposure to a difficult environment where safety was never reliable.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {["Physical, emotional, or sexual abuse", "Neglect", "Witnessing domestic violence", "Bullying including cyberbullying", "Serious accidents or medical events", "Sudden loss of a parent or caregiver", "Community violence", "Accumulation of adverse childhood experiences over time"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">Adverse childhood experiences, known as ACEs, have been extensively studied. The research is clear: the higher the ACE score, the greater the risk for mental health conditions, substance use, and physical health problems in adolescence and adulthood. We assess ACEs at admission for every adolescent we treat.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Recognizing the Signs</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How Trauma Presents in Adolescents</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  PTSD in teenagers most commonly presents as hypervigilance, emotional dysregulation, avoidance, concentration problems that resemble ADHD, dissociation, and substance use, not as flashbacks and nightmares. Many adolescents with trauma histories have been evaluated for ADHD or behavioral disorders without anyone assessing what happened to them. The behavior is visible. The trauma underneath it requires someone to look for it.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">PTSD in teenagers often does not fit the textbook picture of flashbacks and nightmares, though those can be present. More commonly it presents as hypervigilance and an inability to relax or feel safe, emotional dysregulation and anger that seems disproportionate, avoidance of people, places, or situations associated with the trauma, concentration problems that look like ADHD, dissociation, self-harm as a coping mechanism, and substance use to numb symptoms.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Many adolescents we treat have been evaluated for ADHD, depression, or behavioral disorders without anyone asking what happened to them.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent Trauma</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Desert Recovery Centers uses a phase-based trauma treatment approach that builds safety and coping skills before any trauma processing begins. Evidence-based modalities include Trauma-Focused Cognitive Behavioral Therapy, EMDR where clinically appropriate, and somatic approaches that address the body&apos;s stored trauma responses. Every aspect of the treatment environment is shaped by trauma-informed principles.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Trauma treatment requires safety before processing. We do not rush adolescents into trauma work before they have the skills and stability to tolerate it. Every staff interaction, every clinical decision, and every aspect of the treatment environment is shaped by trauma-informed principles.</p>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { title: "Stabilization and Skills Building", desc: "Establishing safety and building the coping skills necessary to tolerate trauma processing without becoming overwhelmed." },
              { title: "Trauma-Focused Cognitive Behavioral Therapy", desc: "A structured, evidence-based approach to processing traumatic experiences and restructuring trauma-related beliefs." },
              { title: "EMDR", desc: "Where clinically appropriate, to process traumatic memories and reduce the emotional charge associated with them." },
              { title: "Somatic Approaches", desc: "Working with the body's stored trauma responses, because trauma lives in the nervous system, not just in memory." },
              { title: "Individual and Group Therapy", desc: "Within a trauma-informed care framework that prioritizes safety, choice, and collaboration at every step." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection><span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Common Questions</span><h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Frequently Asked Questions</h2></AnimatedSection>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">Trauma Does Not Have to Define Your Teenager&apos;s Future</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">Our admissions team is available 24 hours a day, 7 days a week.</p>
          <p className="text-gold text-sm font-medium mb-10">Most adolescents begin treatment within 48 hours of the first call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+16233231012" className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer">Call (623) 323-1012</a>
            <Link href="/adolescent-treatment" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center">Back to Adolescent Program</Link>
          </div>
        </motion.div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
