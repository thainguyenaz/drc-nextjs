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
const PAGE_PATH = "/adolescent/depression";
const PAGE_TITLE = "Adolescent Depression Treatment | Desert Recovery Centers Arizona";


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` },
    { "@type": "ListItem", position: 3, name: "Depression" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}/#webpage`,
  url: `${SITE_URL}${PAGE_PATH}`,
  name: PAGE_TITLE,
  specialty: "Adolescent Psychiatry",
  reviewedBy: {
    "@type": "Person",
    name: "Dr. An Nguyen",
    jobTitle: "Licensed Clinical Psychologist, Clinical Director",
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my teenager needs residential treatment for depression rather than outpatient therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential treatment is appropriate when your teenager is not safe at home, when outpatient therapy has not produced meaningful improvement after a reasonable trial, when depression is severe enough to interfere significantly with daily functioning, or when there are co-occurring conditions that require a higher level of clinical support. Our admissions team can help you assess the right level of care at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Is adolescent depression treatable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Depression is one of the most treatable mental health conditions. With the right clinical intervention, the majority of adolescents with depression experience significant improvement. The key is accurate diagnosis, appropriate level of care, and treatment that addresses any co-occurring conditions simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "Will my teenager be in treatment with adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our adolescent program is separate from our adult residential program. Teenagers are treated in an age-appropriate environment with peers in the same life stage.",
      },
    },
    {
      "@type": "Question",
      name: "Does insurance cover adolescent residential depression treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desert Recovery Centers is in-network with Tricare and TriWest. We work with most major commercial insurance carriers and can verify your benefits before admission. We do not accept Medicaid or Medicare.",
      },
    },
    {
      "@type": "Question",
      name: "How long does residential treatment for adolescent depression typically last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Length of stay varies based on clinical need. Our team conducts ongoing assessment throughout treatment and works with your insurance carrier on utilization review. Most adolescent residential stays range from 30 to 90 days depending on the complexity of the case.",
      },
    },
  ],
};

const faqs = [
  {
    q: "How do I know if my teenager needs residential treatment for depression rather than outpatient therapy?",
    a: "Residential treatment is appropriate when your teenager is not safe at home, when outpatient therapy has not produced meaningful improvement after a reasonable trial, when depression is severe enough to interfere significantly with daily functioning, or when there are co-occurring conditions that require a higher level of clinical support. Our admissions team can help you assess the right level of care at no cost.",
  },
  {
    q: "Is adolescent depression treatable?",
    a: "Yes. Depression is one of the most treatable mental health conditions. With the right clinical intervention, the majority of adolescents with depression experience significant improvement. The key is accurate diagnosis, appropriate level of care, and treatment that addresses any co-occurring conditions simultaneously.",
  },
  {
    q: "Will my teenager be in treatment with adults?",
    a: "No. Our adolescent program is separate from our adult residential program. Teenagers are treated in an age-appropriate environment with peers in the same life stage.",
  },
  {
    q: "Does insurance cover adolescent residential depression treatment?",
    a: "Desert Recovery Centers is in-network with Tricare and TriWest. We work with most major commercial insurance carriers and can verify your benefits before admission. We do not accept Medicaid or Medicare.",
  },
  {
    q: "How long does residential treatment for adolescent depression typically last?",
    a: "Length of stay varies based on clinical need. Our team conducts ongoing assessment throughout treatment and works with your insurance carrier on utilization review. Most adolescent residential stays range from 30 to 90 days depending on the complexity of the case.",
  },
];

const speakableSchema = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Adolescent Depression Treatment in Arizona",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".definition-block", ".faq-section", ".quick-answer"],
  },
  url: "https://drc-nextjs.vercel.app/adolescent/depression",
};

export default function AdolescentDepressionPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema, speakableSchema]} />
      <Navigation />
      <Breadcrumb
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` },
          { name: "Depression", url: `${SITE_URL}${PAGE_PATH}` },
        ]}
      />
      <PageHero
        eyebrow="Adolescent Treatment"
        title="Adolescent Depression Treatment in Arizona"
        description="Depression in teenagers is not the same as depression in adults. At Desert Recovery Centers, we treat adolescent depression in a residential setting designed specifically for the complexity of teenage mental health."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Definition Block */}
      <section className="definition-block" style={{ background: "#F5EFE6", borderLeft: "4px solid #C4973A", padding: "24px" }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#1C2B1E" }}>CLINICAL DEFINITION</span>
            <p className="font-display text-lg md:text-xl mt-2" style={{ color: "#1C2B1E" }}>
              Adolescent depression is a clinical mood disorder that presents primarily as irritability, withdrawal, and loss of motivation in teenagers, not simply sadness. It is the leading cause of disability in teenagers worldwide and it is highly treatable with the right level of care.
            </p>
          </div>
        </div>
      </section>

      {/* Condition Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                When Depression Wears a Different Mask
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Depression in teenagers is not the same as depression in adults. Most people picture sadness. What they miss is the irritability, the anger, the sudden withdrawal from friends and family, the grades that quietly collapse, the kid who used to love soccer and now does not get off the couch. Adolescent depression wears many masks and most of them do not look like grief.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, we treat adolescent depression in a residential setting designed specifically for the complexity of teenage mental health. Our clinical team, led by Licensed Clinical Psychologist Dr. An Nguyen and Medical Director Dr. Reyes Topete MD, understands how depression in adolescents differs from adult presentations and how to treat it accordingly.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How Depression Presents */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Recognizing the Signs
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                How Depression Presents in Adolescents
              </h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Adolescent depression most commonly presents as irritability, withdrawal from friends and activities, declining grades, and changes in sleep, not as visible sadness. Many teenagers with depression are first misidentified as having behavioral or attitude problems before the underlying condition is recognized. A clinical evaluation is the only reliable way to distinguish adolescent depression from behavioral issues.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Adolescent depression rarely announces itself clearly. Parents often describe a gradual shift over months before anything looks clinically significant. Common presentations include:
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Persistent irritability or anger that feels out of proportion",
                "Withdrawal from friends, family, and activities the teenager previously enjoyed",
                "Declining academic performance and school refusal",
                "Changes in sleep patterns including hypersomnia or insomnia",
                "Physical complaints including headaches and stomachaches with no medical cause",
                "Expressions of hopelessness or worthlessness",
              ].map((symptom, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{symptom}</p>
                </motion.div>
              ))}
            </div>
            <AnimatedSection delay={0.2}>
              <p className="text-gray-600 leading-relaxed mt-6 text-sm">
                Many adolescents with depression are first identified as having behavioral problems or attitude issues. They are disciplined rather than evaluated. By the time a family reaches us, they have often spent months or years trying consequences, restrictions, and conversations that did not work because the underlying condition was never treated.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Co-occurring Conditions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                The Full Picture
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Co-occurring Conditions
              </h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  The majority of adolescents with depression have at least one co-occurring condition including anxiety, ADHD, trauma, or substance use. Treating depression without identifying and addressing what is co-occurring produces incomplete results. Comprehensive dual diagnosis assessment at admission is standard practice at Desert Recovery Centers.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Adolescent depression rarely travels alone. The majority of teenagers we treat for depression have at least one co-occurring condition including anxiety disorders, ADHD, PTSD from adverse childhood experiences, or substance use that began as self-medication. Our residential program conducts a comprehensive dual diagnosis assessment at admission so that every layer of what is happening gets addressed, not just the most visible symptom.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Approach
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                How We Treat Adolescent Depression
              </h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Desert Recovery Centers treats adolescent depression using Cognitive Behavioral Therapy, Dialectical Behavior Therapy, individual and family therapy, medication management, and NeuroStar TMS therapy for adolescents who have not responded to medication alone. Every adolescent receives an individualized treatment plan, not a standardized protocol. Treatment is led by Licensed Clinical Psychologist Dr. An Nguyen and Medical Director Dr. Reyes Topete MD.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our treatment approach integrates evidence-based therapies proven effective for adolescent depression. We do not use a one-size-fits-all protocol. Every adolescent receives an individualized treatment plan built around their specific presentation, history, and family context.
              </p>
            </AnimatedSection>
            <div className="space-y-6">
              {[
                { title: "Cognitive Behavioral Therapy", desc: "To identify and restructure distorted thinking patterns that maintain depressive episodes in adolescents." },
                { title: "Dialectical Behavior Therapy", desc: "For emotional regulation and distress tolerance, critical skills for teenagers who experience intense emotions without adequate coping strategies." },
                { title: "Individual Therapy", desc: "With licensed clinicians who specialize in adolescent mental health and understand the developmental context of teenage depression." },
                { title: "Family Therapy", desc: "To repair and strengthen the support system at home. Long-term recovery depends on what happens at home after discharge." },
                { title: "Medication Management", desc: "When clinically indicated, under the supervision of Dr. Topete, with careful monitoring of response and side effects in the adolescent population." },
                { title: "NeuroStar TMS Therapy", desc: "For adolescents who have not responded adequately to medication alone. FDA cleared for treatment-resistant depression." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-l-2 border-gold/40 pl-6"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Parents Can Expect */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                For Parents
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                What Parents Can Expect
              </h2>
              <div className="quick-answer" style={{ background: "#FAF7F2", borderLeft: "3px solid #C4973A", padding: "16px 20px", marginBottom: "24px" }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">QUICK ANSWER</span>
                <p className="text-gray-700 leading-relaxed mt-1">
                  Residential treatment for adolescent depression provides intensive daily clinical care in a structured therapeutic environment separate from the adult program. Family involvement is built into treatment because long-term recovery depends on what happens at home after discharge. Parents receive regular updates, participate in family therapy, and help build the discharge and aftercare plan before their teenager leaves care.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Residential treatment for adolescent depression is not a last resort. It is the appropriate level of care when outpatient therapy is not enough, when safety is a concern, or when the home environment needs to stabilize alongside the adolescent. Our Glendale and Scottsdale residential facilities provide a structured, therapeutic environment where teenagers receive intensive daily treatment while remaining in a safe, supportive setting.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Family involvement is built into the program. We do not treat adolescents in isolation from the family system because long-term recovery depends on what happens at home after discharge. Parents receive regular updates, participate in family therapy sessions, and work with our team on a discharge and aftercare plan before their teenager leaves our care.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Common Questions
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>
            <div className="space-y-6">
              {faqs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="border-l-2 border-gold/40 pl-6"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adolescent CTA */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
            Your Teenager Does Not Have to Keep Suffering
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Depression is treatable. Our admissions team is available 24 hours a day, 7 days a week to help you understand your options and take the next step for your child.
          </p>
          <p className="text-gold text-sm font-medium mb-10">
            Most adolescents begin treatment within 48 hours of the first call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+16233231012"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Call (623) 323-1012
            </a>
            <Link
              href="/adolescent-treatment"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
            >
              Back to Adolescent Program
            </Link>
          </div>
        </motion.div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
