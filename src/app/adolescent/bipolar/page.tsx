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

export default function AdolescentBipolarPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "Bipolar Disorder", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent Bipolar Disorder Treatment in Arizona" description="Bipolar disorder in adolescents is one of the most misdiagnosed conditions in teenage mental health. The average time from first symptoms to accurate diagnosis is ten years." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

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
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Critical Distinction</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">The Risk of Misdiagnosis</h2>
            <p className="text-gray-600 leading-relaxed text-lg">Adolescents with bipolar disorder are frequently misdiagnosed with depression and treated with antidepressants without a mood stabilizer. In some individuals with bipolar disorder, antidepressants without a mood stabilizer can precipitate manic episodes or accelerate cycling. Accurate diagnosis is not just a clinical nicety. It has direct treatment implications.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent Bipolar Disorder</h2>
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
