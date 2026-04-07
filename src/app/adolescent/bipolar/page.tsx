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
const PAGE_PATH = "/adolescent/bipolar";
const PAGE_TITLE = "Adolescent Bipolar Disorder Treatment Arizona | Teen Bipolar | Desert Recovery Centers";

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` }, { "@type": "ListItem", position: 3, name: "Bipolar Disorder" }] };
const medicalWebPageSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": `${SITE_URL}${PAGE_PATH}/#webpage`, url: `${SITE_URL}${PAGE_PATH}`, name: PAGE_TITLE, specialty: "Adolescent Psychiatry", reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } }, publisher: { "@id": `${SITE_URL}/#organization` } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "How is bipolar disorder different from normal teenage mood swings?", acceptedAnswer: { "@type": "Answer", text: "Normal adolescent mood variability is responsive to events, shorter in duration, and does not produce the level of impairment associated with bipolar episodes. Bipolar mood episodes are more prolonged, more severe, less clearly tied to external triggers, and associated with marked changes in sleep, energy, thinking, and behavior that are distinct from the adolescent's baseline functioning." } },
  { "@type": "Question", name: "Can teenagers be diagnosed with bipolar disorder?", acceptedAnswer: { "@type": "Answer", text: "Yes. Bipolar disorder can and does present in adolescence. Early-onset bipolar disorder is associated with more complex presentations and greater diagnostic difficulty, which is why it is so frequently missed. An accurate diagnosis requires a thorough longitudinal history, not just a snapshot of current symptoms." } },
  { "@type": "Question", name: "My teenager was diagnosed with bipolar disorder but I am not sure the diagnosis is right. What should I do?", acceptedAnswer: { "@type": "Answer", text: "A diagnostic evaluation from a qualified psychiatrist or psychologist with experience in adolescent mood disorders is appropriate. Our clinical team conducts comprehensive diagnostic assessments at admission and is experienced in differentiating bipolar disorder from other conditions with overlapping presentations." } },
] };

const faqs = [
  { q: "How is bipolar disorder different from normal teenage mood swings?", a: "Normal adolescent mood variability is responsive to events, shorter in duration, and does not produce the level of impairment associated with bipolar episodes. Bipolar mood episodes are more prolonged, more severe, less clearly tied to external triggers, and associated with marked changes in sleep, energy, thinking, and behavior that are distinct from the adolescent's baseline functioning." },
  { q: "Can teenagers be diagnosed with bipolar disorder?", a: "Yes. Bipolar disorder can and does present in adolescence. Early-onset bipolar disorder is associated with more complex presentations and greater diagnostic difficulty, which is why it is so frequently missed. An accurate diagnosis requires a thorough longitudinal history, not just a snapshot of current symptoms." },
  { q: "My teenager was diagnosed with bipolar disorder but I am not sure the diagnosis is right. What should I do?", a: "A diagnostic evaluation from a qualified psychiatrist or psychologist with experience in adolescent mood disorders is appropriate. Our clinical team conducts comprehensive diagnostic assessments at admission and is experienced in differentiating bipolar disorder from other conditions with overlapping presentations." },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent Bipolar Disorder Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://drc-nextjs.vercel.app/adolescent/bipolar",
};

export default function AdolescentBipolarPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "Bipolar Disorder", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent Bipolar Disorder Treatment in Arizona" description="Bipolar disorder in adolescents is one of the most misdiagnosed conditions in teenage mental health. The average time from first symptoms to accurate diagnosis is ten years." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent bipolar disorder is a mood condition characterized by episodic shifts between depression and elevated or mixed mood states that is frequently misdiagnosed as behavioral problems for years before accurate identification. With proper diagnosis and treatment, adolescents with bipolar disorder can achieve sustained stability.
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
        className="relative w-full h-[300px] overflow-hidden"
      >
        <Image src="/images/adolescent/abstract/abstract-bipolar.jpg" alt="Adolescent bipolar disorder treatment Arizona" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 43, 30, 0.2)" }} />
      </motion.div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">Years of Misdiagnosis End Here</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Bipolar disorder in adolescents is one of the most misdiagnosed conditions in teenage mental health. Mood episodes in teenagers are frequently attributed to normal adolescent moodiness, behavioral problems, or willful defiance for years before an accurate diagnosis is made. During that time, the adolescent cycles through episodes without appropriate treatment, relationships deteriorate, academic records suffer, and families exhaust themselves trying to manage what they do not understand.</p>
            <p className="text-gray-600 leading-relaxed text-lg">The average time from first symptoms to accurate diagnosis of bipolar disorder is ten years. For adolescents, that gap means the entirety of high school and the early years of adulthood can pass before anyone identifies what is actually happening.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Recognizing the Signs</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How Bipolar Disorder Presents in Adolescents</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Adolescent bipolar disorder frequently presents as hypomania and mixed episodes rather than full mania, making it significantly harder to recognize than adult presentations. Elevated mood states are often not identified as symptoms because they feel like relief after a depressive episode. Key warning signs include depression unresponsive to antidepressants, reduced need for sleep without fatigue, grandiosity, racing thoughts, and mood shifts that are episodic rather than continuous.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Adolescent bipolar disorder does not always present with the dramatic manic episodes depicted in popular media. Teenagers can experience hypomania, a less severe elevation in mood that does not reach full mania but still produces significant impairment and poor decision-making. Mixed episodes, where features of depression and mania occur simultaneously, are common in adolescents and particularly difficult to recognize and manage.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Depressive episodes in bipolar disorder look like depression. The critical differentiator is the history of elevated mood states, which teenagers and their families often do not identify as a symptom because elevated mood can feel like finally feeling normal or finally having energy after a depressive episode.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {["Depression that has not responded to antidepressants", "Episodes of markedly reduced need for sleep without fatigue", "Periods of grandiosity or inflated self-assessment", "Racing thoughts and rapid speech", "Dramatically increased goal-directed activity", "Mood shifts that are episodic rather than continuous"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/locations/phoenix/phoenix-therapy-room.jpg" alt="Therapy room at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full" />
              </motion.div>
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Our clinical team understands the complexity of adolescent bipolar presentations and conducts thorough longitudinal assessments for accurate diagnosis.</p>
              </div>
            </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Critical Distinction</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">The Risk of Misdiagnosis</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Adolescents with bipolar disorder are frequently misdiagnosed with depression and treated with antidepressants without a mood stabilizer, which can precipitate manic episodes or accelerate cycling in some individuals. Accurate diagnosis has direct treatment implications, not just labeling implications. The average time from first bipolar symptoms to accurate diagnosis is ten years.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg">Adolescents with bipolar disorder are frequently misdiagnosed with depression and treated with antidepressants without a mood stabilizer. In some individuals with bipolar disorder, antidepressants without a mood stabilizer can precipitate manic episodes or accelerate cycling. Accurate diagnosis is not just a clinical nicety. It has direct treatment implications.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Accurate diagnosis has direct treatment implications. Our team is experienced in differentiating bipolar disorder from conditions with overlapping presentations.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/locations/phoenix/phoenix-group-room-2.jpg" alt="Group therapy room at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full" />
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
          <Image src="/images/locations/phoenix/phoenix-lobby-lounge.jpg" alt="Desert Recovery Centers Phoenix outpatient facility" fill className="object-cover" />
        </motion.div>
      </div>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent Bipolar Disorder</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Desert Recovery Centers treats adolescent bipolar disorder with mood stabilizer medication management under Dr. Topete&apos;s supervision, psychoeducation for the adolescent and family, Interpersonal and Social Rhythm Therapy to stabilize circadian rhythms that affect mood cycling, and Cognitive Behavioral Therapy for depression and anxiety components. Family education on recognizing early warning signs is an essential component of treatment. Stability requires both medication and psychotherapy working together.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Treatment for adolescent bipolar disorder requires a sophisticated clinical approach. Family education is essential. Families of adolescents with bipolar disorder need to understand the condition, recognize early warning signs of episodes, and know how to respond in ways that support stability rather than escalate conflict.</p>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { title: "Medication Management", desc: "Under Dr. Topete's supervision, mood stabilizers and careful monitoring form the foundation of bipolar treatment in adolescents." },
              { title: "Psychoeducation", desc: "For both the adolescent and the family, building understanding of the condition and what to expect over time." },
              { title: "Interpersonal and Social Rhythm Therapy", desc: "Stabilizing circadian rhythms and daily routines that directly affect mood cycling." },
              { title: "Cognitive Behavioral Therapy", desc: "Addressing the depression and anxiety components that commonly accompany bipolar disorder in adolescents." },
              { title: "Family Therapy", desc: "Building the skills and understanding families need to support stability at home after discharge." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">An Accurate Diagnosis Changes Everything</h2>
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
