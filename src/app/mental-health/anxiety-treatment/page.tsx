import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema, MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import Citations from "@/components/Citations";
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";

const meta = getPageMeta("/mental-health/anxiety-treatment/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: meta.title }],
  },
};

const faqs = [
  {
    q: "What types of anxiety disorders do you treat?",
    a: "We treat the full spectrum of anxiety disorders including generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, specific phobias, agoraphobia, and separation anxiety disorder. Many of our clients also experience anxiety alongside depression or substance use, and our dual diagnosis approach addresses all conditions simultaneously.",
  },
  {
    q: "What does anxiety treatment at DRC look like?",
    a: "Your treatment begins with a comprehensive psychiatric evaluation to understand the nature and severity of your anxiety. From there, your clinical team designs an individualized plan that may include CBT, exposure therapy, mindfulness-based stress reduction, medication management, and somatic therapies. You'll also have access to yoga, breathwork, and other holistic modalities that directly target anxiety symptoms.",
  },
  {
    q: "How long does anxiety treatment typically take?",
    a: "Residential anxiety treatment typically ranges from 30 to 60 days, though some clients benefit from extended stays of up to 90 days. Outpatient programs (PHP and IOP) generally run 6 to 12 weeks. Your clinical team will continuously reassess your progress and adjust the timeline to ensure lasting results.",
  },
  {
    q: "Can anxiety be treated without medication?",
    a: "Yes, many clients achieve significant relief through therapy alone, particularly CBT and exposure-based therapies, which have strong research support. However, some individuals benefit from medication as part of a comprehensive plan. Our psychiatrists work closely with you to determine the best approach, and medication is never prescribed without your full understanding and consent.",
  },
  {
    q: "Will I be able to manage anxiety after treatment ends?",
    a: "Absolutely. A core goal of our program is equipping you with practical tools and coping strategies you can use for life. Before discharge, your clinical team develops a detailed aftercare plan that includes ongoing therapy referrals, relapse prevention strategies, and connection to our alumni support network.",
  },
];

export default function AnxietyTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["anxiety-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/anxiety-treatment")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/mental-health/anxiety-treatment/#webpage","url":"https://www.desertrecoverycenters.com/mental-health/anxiety-treatment/","name":"Anxiety Treatment Center Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <SpeakableSchema url="/mental-health/anxiety-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Anxiety Disorders"
        description="Anxiety disorders are a group of mental health conditions characterized by excessive fear, worry, and related behavioral disturbances that significantly impair daily functioning."
        url="/mental-health/anxiety-treatment"
        possibleTreatments={["Cognitive Behavioral Therapy", "Exposure Therapy", "Medication Management", "Mindfulness-Based Stress Reduction", "EMDR"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/anxiety-treatment")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="Anxiety Treatment"
        description="You don't have to live controlled by fear. Evidence-based anxiety treatment in a setting designed for deep, lasting healing."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Condition Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              When Anxiety Takes Over Your Life
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              You know the feeling. The tightness in your chest that arrives without warning. The racing thoughts that won&apos;t stop, no matter how hard you try to quiet them. The way a simple social situation or an upcoming event can spiral into hours of dread.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Anxiety isn&apos;t just &quot;being stressed.&quot; It&apos;s a condition that rewires the way you experience the world, making everything feel urgent, dangerous, or overwhelming. And when it goes untreated, it doesn&apos;t stay still. It grows. It takes more from you: your sleep, your relationships, your confidence, your ability to simply be present.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              If this sounds like your life, we want you to know something: this is not your fault, and it absolutely can get better. At Desert Recovery Centers, we treat anxiety not as a character flaw, but as a treatable condition that responds powerfully to the right care.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Recognizing the Signs
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Symptoms of Anxiety Disorders
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Anxiety manifests differently for everyone, but common signs include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Persistent, excessive worry that feels impossible to control",
                "Panic attacks, sudden surges of intense fear with physical symptoms",
                "Avoidance of situations, places, or people that trigger anxiety",
                "Restlessness, irritability, or feeling constantly on edge",
                "Difficulty concentrating or mind going blank",
                "Sleep disturbances, trouble falling or staying asleep",
                "Physical symptoms: rapid heartbeat, sweating, trembling, nausea",
                "Social withdrawal or isolation due to fear of judgment",
              ].map((symptom, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{symptom}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              If these symptoms are interfering with your daily life, relationships, or work, professional treatment can help you reclaim control.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How We Treat Anxiety at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our anxiety treatment program is built on the understanding that lasting relief requires more than managing symptoms, it means addressing the root causes that fuel your anxiety.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Cognitive Behavioral Therapy (CBT)",
                  desc: "The gold standard for anxiety treatment. CBT helps you identify and restructure the thought patterns that drive anxious feelings, replacing them with balanced, realistic perspectives.",
                },
                {
                  title: "Exposure & Response Prevention",
                  desc: "Gradual, guided exposure to anxiety triggers in a safe environment, helping your nervous system learn that the situations you fear are manageable and survivable.",
                },
                {
                  title: "Mindfulness & Somatic Therapies",
                  desc: "Yoga, breathwork, and body-based therapies that teach you to regulate your nervous system in real time, reducing the physical grip anxiety has on your body.",
                },
                {
                  title: "Medication Management",
                  desc: "When appropriate, our psychiatrists provide carefully monitored medication to reduce acute symptoms while therapy takes hold, always as part of a broader treatment plan, never as a standalone solution.",
                },
                {
                  title: "Holistic Wellness",
                  desc: "Nutritional counseling, exercise programming, art therapy, and nature-based activities that support whole-person healing and build resilience against future anxiety.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why DRC */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              A Different Kind of Anxiety Treatment
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Dual Diagnosis Expertise",
                  desc: "Anxiety rarely exists in isolation. Many of our clients struggle with co-occurring depression, trauma, or substance use. We treat the whole picture, not just one piece of it.",
                },
                {
                  title: "Small Client-to-Clinician Ratios",
                  desc: "You're not a number here. Our intentionally small program sizes mean you receive deeply personalized attention from licensed psychologists, psychiatrists, and therapists.",
                },
                {
                  title: "Luxury Healing Environment",
                  desc: "Recovery happens best when you feel safe and comfortable. Our Arizona facilities offer resort-level amenities, pools, fitness centers, gourmet meals, in a clinical setting designed for healing.",
                },
                {
                  title: "24/7 Clinical Support",
                  desc: "Anxiety doesn't follow a schedule. Our clinical and nursing staff are available around the clock, ensuring you have support whenever you need it, including during nighttime anxiety episodes.",
                },
                {
                  title: "Aftercare That Lasts",
                  desc: "Treatment is just the beginning. Our comprehensive aftercare planning, alumni network, and ongoing support resources are designed to protect your progress long after you leave our care.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          { question: "What is anxiety treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) offers specialized anxiety treatment programs that address generalized anxiety disorder, panic disorder, social anxiety, and phobias. With a maximum of 10 beds per facility and doctoral-level clinicians on staff, clients receive deeply individualized care in a luxury residential setting." },
          { question: "How does Desert Recovery Centers treat anxiety?", answer: "DRC treats anxiety using evidence-based modalities including Cognitive Behavioral Therapy (CBT), Exposure and Response Prevention, mindfulness-based stress reduction, somatic therapies, and medication management. Each client receives a comprehensive psychiatric evaluation followed by an individualized treatment plan designed by licensed clinical psychologists." },
          { question: "How long does anxiety treatment take at Desert Recovery Centers?", answer: "Residential anxiety treatment at DRC typically lasts 30 to 60 days, with some clients benefiting from extended stays of up to 90 days. Outpatient programs including PHP and IOP generally run 6 to 12 weeks. Treatment length is adjusted based on clinical progress and individual needs." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/anxiety-treatment" />
      <FAQSection faqs={faqData["anxiety-treatment"]} />
      <CTASection />
      <Footer />
      <Citations />
    </>
  );
}
