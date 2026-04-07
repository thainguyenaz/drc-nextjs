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
const PAGE_PATH = "/adolescent/self-harm";
const PAGE_TITLE = "Adolescent Self Harm Treatment Arizona | Teen Cutting and Self Injury | Desert Recovery Centers";

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` }, { "@type": "ListItem", position: 3, name: "Self Harm" }] };
const medicalWebPageSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": `${SITE_URL}${PAGE_PATH}/#webpage`, url: `${SITE_URL}${PAGE_PATH}`, name: PAGE_TITLE, specialty: "Adolescent Psychiatry", reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } }, publisher: { "@id": `${SITE_URL}/#organization` } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "My teenager says they self harm to feel better, not to die. Should I still be worried?", acceptedAnswer: { "@type": "Answer", text: "Yes, and your concern is appropriate. Non-suicidal self injury is a serious clinical issue regardless of suicidal intent. It indicates your teenager is experiencing emotional pain they do not have adequate tools to manage. It also carries physical risk and is associated with elevated risk for future suicidal ideation. It requires clinical treatment." } },
  { "@type": "Question", name: "Will talking about self harm make it worse or give my teenager ideas?", acceptedAnswer: { "@type": "Answer", text: "No. This is a common concern and it is not supported by evidence. Clinical assessment and treatment of self harm does not increase the behavior. Avoidance of the topic, however, leaves the adolescent without support and without better alternatives. Open, non-judgmental clinical conversation is the foundation of effective treatment." } },
  { "@type": "Question", name: "How do I respond when I discover my teenager has been self harming?", acceptedAnswer: { "@type": "Answer", text: "Stay calm. Respond with concern rather than anger or punishment. Do not demand they explain themselves immediately. Let them know you love them and that you are going to get them help. Then contact a clinical professional who specializes in adolescent mental health. The most important thing you can do in that moment is not escalate and not minimize." } },
] };

const faqs = [
  { q: "My teenager says they self harm to feel better, not to die. Should I still be worried?", a: "Yes, and your concern is appropriate. Non-suicidal self injury is a serious clinical issue regardless of suicidal intent. It indicates your teenager is experiencing emotional pain they do not have adequate tools to manage. It also carries physical risk and is associated with elevated risk for future suicidal ideation. It requires clinical treatment." },
  { q: "Will talking about self harm make it worse or give my teenager ideas?", a: "No. This is a common concern and it is not supported by evidence. Clinical assessment and treatment of self harm does not increase the behavior. Avoidance of the topic, however, leaves the adolescent without support and without better alternatives. Open, non-judgmental clinical conversation is the foundation of effective treatment." },
  { q: "How do I respond when I discover my teenager has been self harming?", a: "Stay calm. Respond with concern rather than anger or punishment. Do not demand they explain themselves immediately. Let them know you love them and that you are going to get them help. Then contact a clinical professional who specializes in adolescent mental health. The most important thing you can do in that moment is not escalate and not minimize." },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent Self Harm Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://drc-nextjs.vercel.app/adolescent/self-harm",
};

export default function AdolescentSelfHarmPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "Self Harm", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent Self Harm Treatment in Arizona" description="Self harm in adolescents is not manipulation. It is a dysregulated coping mechanism that responds to clinical treatment." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent self harm is a dysregulated coping mechanism, not manipulation, in which a teenager manages unbearable emotional pain through physical means because they have not yet developed more adaptive strategies. With Dialectical Behavior Therapy and residential support, adolescents learn to manage emotional pain without self injury.
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
        <Image src="/images/adolescent/abstract/abstract-self-harm.jpg" alt="Adolescent self harm treatment Arizona" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 43, 30, 0.2)" }} />
      </motion.div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">Not Manipulation. A Coping Mechanism.</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Adolescent self harm serves different functions for different teenagers including converting emotional pain into manageable physical pain, producing dissociative relief from overwhelming emotion, self-punishment connected to shame or depression, or stimulation when emotional numbness has become unbearable. Identifying the specific function self harm serves for a particular adolescent is the first clinical task because treatment that does not address the function will not produce durable behavior change. Self harm is a symptom, not a character problem.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Self harm in adolescents is not manipulation. This is the most important thing to understand before anything else. Cutting, burning, scratching, and other forms of non-suicidal self injury are a dysregulated coping mechanism. The adolescent has found a way to manage emotional pain that works in the short term and causes harm in the process. The behavior makes sense within the context of a nervous system that has not yet developed more adaptive ways to tolerate intense emotion.</p>
            <p className="text-gray-600 leading-relaxed text-lg">When parents discover self harm, the instinct is often panic, anger, or both. Both reactions are understandable. Neither is helpful in that moment. What is helpful is understanding that self harm is a clinical issue that requires clinical treatment, not consequences.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Self harm is a clinical issue that requires clinical treatment, not consequences. Our team provides compassionate, evidence-based care.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/adolescent/adolescent-group-therapy-program-desert-recovery-centers.jpg" alt="Group therapy for adolescent self harm treatment at Desert Recovery Centers Arizona" fill className="object-cover w-full h-full" />
              </motion.div>
            </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Important Context</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Self Harm and Suicidal Ideation</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Non-suicidal self injury is clinically distinct from suicidal behavior but the two frequently co-occur. Adolescents who self harm carry elevated risk for suicidal ideation and require thorough suicide risk assessment. Desert Recovery Centers conducts comprehensive risk assessment at admission and throughout treatment and maintains individualized safety plans for every adolescent in care.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">Non-suicidal self injury is clinically distinct from suicidal behavior, but the two can coexist. Adolescents who self harm have elevated risk for suicidal ideation and should receive a thorough risk assessment. Our clinical team conducts comprehensive suicide risk assessment at admission and throughout treatment, maintaining individualized safety plans for every adolescent in our care.</p>
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
                <Image src="/images/adolescent/teen-individual-therapy-session-phoenix-az.jpg" alt="Individual therapy for adolescent self harm at Desert Recovery Centers" fill className="object-cover w-full h-full" />
              </motion.div>
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Our clinical team conducts comprehensive suicide risk assessment at admission and throughout treatment for every adolescent in our care.</p>
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
          <Image src="/images/adolescent/adolescent-outpatient-treatment-center-phoenix-arizona.jpg" alt="Desert Recovery Centers self harm treatment facility Arizona" fill className="object-cover" />
        </motion.div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent Self Harm</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Dialectical Behavior Therapy is the most evidence-supported treatment for adolescent self harm and was designed specifically to address the emotional dysregulation and crisis behaviors that drive self injury. Residential treatment provides the intensity and around-the-clock clinical support that adolescents with active self harm typically need because weekly outpatient sessions are insufficient when the urge to self harm occurs at 11pm. Family members learn the DBT framework and how to respond to self harm in ways that support rather than inadvertently reinforce the behavior.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Dialectical Behavior Therapy is the most evidence-supported treatment for adolescent self harm. DBT was designed specifically to address the emotional dysregulation and crisis behaviors that drive self injury. Our residential program provides the intensity and structure that adolescents with active self harm often need. Skills learned in a weekly outpatient session are not sufficient when the urge to self harm occurs at 11pm on a Tuesday. Residential treatment provides round-the-clock clinical support and the opportunity to practice skills with immediate guidance.</p>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { title: "Distress Tolerance", desc: "Building the capacity to survive emotional crises without resorting to self injury, using skills that can be deployed immediately in moments of acute pain." },
              { title: "Emotional Regulation", desc: "Understanding and managing the intense emotional experiences that drive the urge to self harm." },
              { title: "Mindfulness", desc: "Developing present-moment awareness that creates space between the urge and the action." },
              { title: "Interpersonal Effectiveness", desc: "Building the communication and relationship skills that reduce the isolation and conflict that often trigger episodes." },
              { title: "Family Integration", desc: "Parents learn the DBT framework, how to respond to self harm disclosures in ways that do not reinforce the behavior, and how to support their teenager's use of skills at home after discharge." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection><span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Common Questions</span><h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Frequently Asked Questions</h2></AnimatedSection>
          <div className="space-y-6">{faqs.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="border-l-2 border-gold/40 pl-6"><h3 className="font-display text-lg text-forest font-semibold mb-2">{item.q}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.a}</p></motion.div>))}</div>
        </div></div>
      </section>

      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">There Are Better Ways to Manage the Pain</h2>
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
