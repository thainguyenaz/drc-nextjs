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
const PAGE_PATH = "/adolescent/suicidal-ideation";
const PAGE_TITLE = "Adolescent Suicidal Ideation Treatment Arizona | Teen Suicide Prevention | Desert Recovery Centers";

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` }, { "@type": "ListItem", position: 3, name: "Suicidal Ideation" }] };
const medicalWebPageSchema = { "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": `${SITE_URL}${PAGE_PATH}/#webpage`, url: `${SITE_URL}${PAGE_PATH}`, name: PAGE_TITLE, specialty: "Adolescent Psychiatry", reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } }, publisher: { "@id": `${SITE_URL}/#organization` } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "My teenager said they were not serious when they mentioned wanting to die. Should I still be concerned?", acceptedAnswer: { "@type": "Answer", text: "Yes. Disclosures of suicidal ideation, even when immediately walked back or minimized, warrant a clinical evaluation. Teenagers frequently minimize disclosures after making them due to fear of consequences or shame. The initial disclosure is clinically significant regardless of the follow-up statement." } },
  { "@type": "Question", name: "Will taking my teenager to treatment make them angry with me?", acceptedAnswer: { "@type": "Answer", text: "Possibly, in the short term. Most adolescents who receive effective treatment and stabilize recognize that their parents' decision to seek help was the right one. Your teenager's immediate anger is a manageable clinical situation. A preventable suicide is not." } },
  { "@type": "Question", name: "Does talking about suicide with my teenager give them ideas?", acceptedAnswer: { "@type": "Answer", text: "No. This is a persistent myth that is not supported by evidence. Direct, clinical conversation about suicidal ideation does not increase risk. Avoiding the conversation leaves the adolescent without support and without a pathway to help." } },
  { "@type": "Question", name: "What is the difference between suicidal ideation and a suicide attempt?", acceptedAnswer: { "@type": "Answer", text: "Suicidal ideation is thinking about suicide. A suicide attempt is a self-directed behavior intended to end one's life. Both are serious. Ideation without a prior attempt still carries meaningful risk, and ideation with a prior attempt carries significantly elevated risk. Both warrant clinical evaluation and appropriate treatment." } },
  { "@type": "Question", name: "If my teenager is in crisis right now, what should I do?", acceptedAnswer: { "@type": "Answer", text: "Call 988, the Suicide and Crisis Lifeline, or take your teenager to the nearest emergency room. If they are in immediate danger, call 911. For non-emergency clinical consultation about next steps, contact our admissions team directly at (623) 257-5384." } },
] };

const faqs = [
  { q: "My teenager said they were not serious when they mentioned wanting to die. Should I still be concerned?", a: "Yes. Disclosures of suicidal ideation, even when immediately walked back or minimized, warrant a clinical evaluation. Teenagers frequently minimize disclosures after making them due to fear of consequences or shame. The initial disclosure is clinically significant regardless of the follow-up statement." },
  { q: "Will taking my teenager to treatment make them angry with me?", a: "Possibly, in the short term. Most adolescents who receive effective treatment and stabilize recognize that their parents' decision to seek help was the right one. Your teenager's immediate anger is a manageable clinical situation. A preventable suicide is not." },
  { q: "Does talking about suicide with my teenager give them ideas?", a: "No. This is a persistent myth that is not supported by evidence. Direct, clinical conversation about suicidal ideation does not increase risk. Avoiding the conversation leaves the adolescent without support and without a pathway to help." },
  { q: "What is the difference between suicidal ideation and a suicide attempt?", a: "Suicidal ideation is thinking about suicide. A suicide attempt is a self-directed behavior intended to end one's life. Both are serious. Ideation without a prior attempt still carries meaningful risk, and ideation with a prior attempt carries significantly elevated risk. Both warrant clinical evaluation and appropriate treatment." },
  { q: "If my teenager is in crisis right now, what should I do?", a: "Call 988, the Suicide and Crisis Lifeline, or take your teenager to the nearest emergency room. If they are in immediate danger, call 911. For non-emergency clinical consultation about next steps, contact our admissions team directly at (623) 257-5384." },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent Suicidal Ideation Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://desertrecoverycenters.com/adolescent/suicidal-ideation",
};

export default function AdolescentSuicidalIdeationPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "Suicidal Ideation", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent Suicidal Ideation Treatment in Arizona" description="Every point on the spectrum of suicidal ideation requires clinical attention. The distance between passive ideation and a crisis event can be shorter than parents or teenagers expect." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent suicidal ideation is the presence of thoughts about death or suicide ranging from passive wishes to not exist to active planning, and every point on that spectrum requires immediate clinical attention. With comprehensive risk assessment, safety planning, and treatment of underlying conditions, adolescents can move from crisis to stability.
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
        <Image src="/images/adolescent/abstract/abstract-suicidal-ideation.jpg" alt="Adolescent suicidal ideation treatment Arizona" fill className="object-cover" />
      </motion.div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">Every Expression of Suicidal Thinking Deserves a Clinical Response</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Suicidal ideation in adolescents exists on a spectrum. At one end are passive thoughts about death, wishes to not wake up, or vague thoughts that others would be better off without them. At the other end is active suicidal ideation with a plan and intent. Every point on that spectrum requires clinical attention. The distance between passive ideation and a crisis event can be shorter than parents or teenagers expect.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Suicide is the second leading cause of death among adolescents in the United States. That statistic reflects what happens when suicidal ideation is not identified and treated. At Desert Recovery Centers, our clinical team is trained in adolescent suicide risk assessment, safety planning, and the treatment of the underlying conditions that drive suicidal thinking.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Understanding the Pain</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Understanding Adolescent Suicidal Ideation</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Adolescent suicidal ideation almost always reflects unbearable emotional pain and the belief that the pain is permanent, not a genuine desire to die. Most adolescents experiencing suicidal ideation want relief from pain, not death. This distinction is clinically important because it points directly to what treatment must accomplish: reduce the pain, build distress tolerance, treat underlying conditions, and restore reasons and strategies for staying safe.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Suicidal ideation in teenagers is almost always the expression of unbearable emotional pain and the belief that the pain is permanent and inescapable. It is not a statement about the value of their life. It is a statement about the limits of what they can tolerate without more support than they currently have.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Most adolescents who experience suicidal ideation do not want to die. They want relief from pain they do not know how to manage any other way. This distinction matters clinically because it points directly to what treatment needs to accomplish: reduce the pain, build the capacity to tolerate distress, address the underlying conditions, and create reasons and strategies for staying safe.</p>
          </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Treatment focuses on reducing the pain, building distress tolerance, addressing underlying conditions, and creating reasons and strategies for staying safe.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[400px]"
              >
                <Image src="/images/adolescent/clinical/clinical-suicidal-ideation.jpg" alt="Individual therapy for adolescent suicidal ideation at Desert Recovery Centers Arizona" fill className="object-cover w-full h-full object-center" />
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
              <div>
                <p className="text-gray-600 leading-relaxed text-sm">Most adolescents experiencing suicidal ideation want relief from pain, not death. Treatment focuses on reducing the pain and building distress tolerance.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden h-[380px]"
              >
                <Image src="/images/locations/phoenix/phoenix-therapy-office-2.jpg" alt="Individual therapy office at Desert Recovery Centers Phoenix" fill className="object-cover w-full h-full object-center" />
              </motion.div>
            </div>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Clinical Assessment</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Risk Factors for Adolescent Suicidal Ideation</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                The single strongest clinical predictor of a future suicide attempt is a prior suicide attempt. Additional risk factors include depression or bipolar disorder, substance use, access to lethal means, family history of suicide, recent significant loss or humiliation, LGBTQ+ identity in an unsupportive environment, and social isolation. No single risk factor determines outcome and clinical assessment by a trained professional is the only reliable way to evaluate risk.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">Clinical risk factors include:</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {["A prior suicide attempt, the single strongest predictor of future attempts", "Current depression or bipolar disorder", "Substance use", "Access to lethal means", "A family history of suicide", "Recent significant loss or humiliation", "LGBTQ+ identity in an unsupportive environment", "Social isolation"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">No single risk factor determines outcome, and the absence of risk factors does not guarantee safety. Clinical assessment by a trained professional is the only reliable way to evaluate risk.</p>
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
                <p className="text-gray-600 leading-relaxed text-sm">Clinical assessment by a trained professional is the only reliable way to evaluate risk. Our team conducts comprehensive evaluations at admission.</p>
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
          <Image src="/images/locations/phoenix/phoenix-lobby-lounge.jpg" alt="Desert Recovery Centers Phoenix outpatient facility" fill className="object-cover object-center" />
        </motion.div>
      </div>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Respond to Suicidal Ideation</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                Every adolescent admitted to Desert Recovery Centers receives a comprehensive suicide risk assessment that informs individualized safety planning throughout treatment. Evidence-based safety planning is a collaboratively built living document, not a no-harm contract, identifying warning signs, coping strategies, support contacts, crisis resources, and means restriction. Treating the underlying condition driving suicidal ideation is what produces sustainable reduction in suicidal thinking.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Every adolescent admitted to Desert Recovery Centers receives a comprehensive suicide risk assessment conducted by our clinical team. This is not a checkbox. It is a thorough clinical evaluation that informs individualized safety planning throughout the course of treatment.</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Safety planning is not a contract not to harm oneself. Research on no-harm contracts does not support their effectiveness. Evidence-based safety planning is a collaboratively built, individualized plan that identifies warning signs, internal coping strategies, social contacts who can provide support, crisis resources, and means restriction strategies. Safety plans are living documents that are revisited and updated throughout treatment.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Treatment addresses the underlying conditions driving suicidal ideation. Suicidal thinking does not exist in a vacuum. It is almost always connected to depression, trauma, hopelessness, or intolerable life circumstances. Treating the underlying condition is what reduces suicidal ideation sustainably.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">For Parents</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What to Do Right Now</h2>
            <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
              <p className="text-gray-700 leading-relaxed mt-1">
                If your teenager has disclosed suicidal thoughts, do not leave them alone, remove access to lethal means, do not promise secrecy, and contact clinical help immediately. Call 988, go to the nearest emergency room, call 911 if there is immediate danger, or call Desert Recovery Centers admissions at (623) 257-5384 for a clinical consultation. Taking suicidal ideation seriously is not overreacting. It is the appropriate and necessary response.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">If your teenager has disclosed suicidal thoughts or you are concerned about their safety, do not leave them alone. Remove access to lethal means including firearms, medications, and other potential methods. Do not promise to keep it secret. Tell them you love them and that you are going to get them help. Contact a crisis line, take them to an emergency room, or call our admissions team for a clinical consultation.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Taking suicidal ideation seriously is not overreacting. It is the appropriate response.</p>
          </AnimatedSection>
          <div className="mt-6 bg-forest/5 rounded-lg p-4 border border-forest/10">
            <p className="text-forest text-sm leading-relaxed font-medium">If your teenager is in immediate danger, call 911 or go to the nearest emergency room. You can also call 988, the Suicide &amp; Crisis Lifeline, for immediate support 24 hours a day.</p>
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
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">Your Teenager&apos;s Pain Is Not Permanent. Help Exists Right Now.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">Our admissions team is available 24 hours a day, 7 days a week. If your teenager is expressing suicidal thoughts, do not wait.</p>
          <p className="text-gold text-sm font-medium mb-10">988 Suicide &amp; Crisis Lifeline available 24/7. Desert Recovery Centers admissions: (623) 257-5384.</p>
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
