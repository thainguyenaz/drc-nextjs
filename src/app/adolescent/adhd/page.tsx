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
const PAGE_PATH = "/adolescent/adhd";
const PAGE_TITLE = "Adolescent ADHD Treatment Arizona | Teen ADHD With Co-occurring Conditions | Desert Recovery Centers";

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` }, { "@type": "ListItem", position: 3, name: "ADHD" }] };
const medicalWebPageSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": `${SITE_URL}${PAGE_PATH}/#webpage`, url: `${SITE_URL}${PAGE_PATH}`, name: PAGE_TITLE, specialty: "Adolescent Psychiatry", reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } }, publisher: { "@id": `${SITE_URL}/#organization` } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "My teenager was diagnosed with ADHD years ago and is on medication. Why are they still struggling?", acceptedAnswer: { "@type": "Answer", text: "Medication addresses the core symptoms of ADHD but does not treat depression, anxiety, trauma, or the emotional consequences of years of struggle. If your teenager is still significantly impaired on medication, a comprehensive reassessment is warranted to identify what else is present and what level of care is appropriate." } },
  { "@type": "Question", name: "Can ADHD cause emotional outbursts?", acceptedAnswer: { "@type": "Answer", text: "Yes. Emotional dysregulation is a well-documented feature of ADHD. Teenagers with ADHD often experience emotions more intensely and have less capacity to regulate them. This is neurological, not behavioral. It responds to treatment that targets emotional regulation specifically, such as DBT skills training." } },
  { "@type": "Question", name: "Is residential treatment appropriate for ADHD?", acceptedAnswer: { "@type": "Answer", text: "Residential treatment is appropriate when ADHD has significant co-occurring conditions that have not responded to outpatient care, when substance use has developed, when safety is a concern, or when the family system needs intensive support alongside the adolescent. ADHD alone rarely requires residential care. ADHD with depression, substance use, and a family in crisis frequently does." } },
] };

const faqs = [
  { q: "My teenager was diagnosed with ADHD years ago and is on medication. Why are they still struggling?", a: "Medication addresses the core symptoms of ADHD but does not treat depression, anxiety, trauma, or the emotional consequences of years of struggle. If your teenager is still significantly impaired on medication, a comprehensive reassessment is warranted to identify what else is present and what level of care is appropriate." },
  { q: "Can ADHD cause emotional outbursts?", a: "Yes. Emotional dysregulation is a well-documented feature of ADHD. Teenagers with ADHD often experience emotions more intensely and have less capacity to regulate them. This is neurological, not behavioral. It responds to treatment that targets emotional regulation specifically, such as DBT skills training." },
  { q: "Is residential treatment appropriate for ADHD?", a: "Residential treatment is appropriate when ADHD has significant co-occurring conditions that have not responded to outpatient care, when substance use has developed, when safety is a concern, or when the family system needs intensive support alongside the adolescent. ADHD alone rarely requires residential care. ADHD with depression, substance use, and a family in crisis frequently does." },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent ADHD Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://drc-nextjs.vercel.app/adolescent/adhd",
};

export default function AdolescentAdhdPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "ADHD", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent ADHD Treatment in Arizona" description="ADHD in adolescence is frequently misunderstood as a focus problem. It is more accurate to describe it as a regulation problem that rarely travels alone." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent ADHD is a regulation disorder affecting attention, emotion, impulse, and effort that is frequently accompanied by depression, anxiety, and trauma by the time a teenager reaches residential care. Comprehensive dual diagnosis treatment addressing all co-occurring conditions produces the best outcomes.
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
        <Image src="/images/adolescent/abstract/abstract-adhd.jpg" alt="Adolescent ADHD treatment Arizona" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 43, 30, 0.2)" }} />
      </motion.div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">More Than a Focus Problem</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">ADHD in adolescence is frequently misunderstood as a focus problem. It is more accurate to describe it as a regulation problem. Teenagers with ADHD struggle to regulate attention, emotion, impulse, and effort. They can hyperfocus on something genuinely interesting for hours and cannot sustain attention on something important for twenty minutes. They know what they need to do and cannot make themselves start. They feel things more intensely than their peers and have less capacity to manage what they feel.</p>
            <p className="text-gray-600 leading-relaxed text-lg">By adolescence, most teenagers with ADHD have accumulated years of academic struggle, disciplinary consequences, and feedback that frames their symptoms as character flaws. Lazy. Careless. Not trying hard enough. The neurological reality of ADHD is that the prefrontal cortex, responsible for executive function, develops more slowly. This is not a choice. It is neurodevelopment.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">The Full Picture</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">ADHD Rarely Travels Alone</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  The majority of adolescents in residential treatment for ADHD have at least one co-occurring condition including depression from years of failure and criticism, anxiety from chronic disorganization, unaddressed trauma, or substance use that began as self-medication. Treating ADHD with medication alone without addressing what is co-occurring leaves the original pain intact. Comprehensive dual diagnosis treatment is the only approach that produces durable results.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">This is the clinical reality that residential treatment exists to address. The majority of adolescents we see with ADHD have at least one co-occurring condition. Depression develops from years of failure, criticism, and falling short of potential. Anxiety develops from the chronic experience of disorganization and unpredictability. Trauma histories are common and frequently unaddressed. Substance use often begins as self-medication, particularly with stimulants or marijuana.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Treating ADHD in isolation, without addressing the depression, anxiety, or trauma that has accumulated on top of it, produces incomplete results. The ADHD medication helps with focus but does not address the shame, the learned helplessness, or the substance use that developed in the gap.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Comprehensive dual diagnosis treatment addressing all co-occurring conditions produces the most durable results for adolescents with ADHD.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/locations/phoenix/phoenix-therapy-room.jpg" alt="Therapy room at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full" />
              </motion.div>
            </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Often Missed</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How ADHD Presents in Adolescent Girls</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  ADHD in adolescent girls is systematically underdiagnosed because girls more frequently present with inattentive type, which is less visible than hyperactive or impulsive presentations. Girls with ADHD develop compensatory strategies that mask symptoms for years until the cost of compensation becomes unsustainable. Many arrive at residential treatment with depression, anxiety, and a years-long belief that something is fundamentally wrong with them.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg">ADHD in girls is systematically underdiagnosed. Girls with ADHD more frequently present with inattentive type, which is less visible than hyperactive or impulsive presentations. They are described as spacey, scattered, or anxious. They develop compensatory strategies that mask symptoms for years. By adolescence, the compensation cost is significant. Many girls with undiagnosed ADHD reach us with depression, anxiety, and a profound sense that something is wrong with them without knowing what.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/locations/phoenix/phoenix-group-room-2.jpg" alt="Group therapy room at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full" />
              </motion.div>
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">ADHD in girls is systematically underdiagnosed. Our clinical team is trained to recognize inattentive presentations that are often missed.</p>
              </div>
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
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent ADHD</h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Desert Recovery Centers treats adolescent ADHD by addressing the full clinical picture including medication management, therapy for the emotional consequences of years with an unmanaged condition, executive function and emotional regulation skills building, and family therapy. We do not treat ADHD without assessing for and treating co-occurring conditions. That is the only approach that produces lasting improvement.
                </p>
              </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Our approach to adolescent ADHD addresses the full clinical picture. We do not treat ADHD without assessing for and treating what is co-occurring. That is the only approach that produces durable results.</p>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { title: "Medication Management", desc: "Under Dr. Topete's supervision, addressing the core neurological component with careful monitoring of response and side effects." },
              { title: "Individual and Group Therapy", desc: "Addressing the emotional and psychological consequences of years living with an unmanaged condition, including shame, learned helplessness, and damaged self-concept." },
              { title: "Executive Function Skills Building", desc: "Practical skills in organization, time management, emotional regulation, and distress tolerance that address the functional deficits of ADHD." },
              { title: "Family Therapy", desc: "Addressing the patterns that have developed around the ADHD in the home environment, rebuilding communication and expectations." },
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
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">ADHD Is Manageable. The Conditions Around It Are Treatable.</h2>
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
