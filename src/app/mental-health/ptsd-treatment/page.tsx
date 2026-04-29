import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema, MedicalConditionSchema, MedicalWebPageSchema } from "@/lib/seo";
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

const meta = getPageMeta("/mental-health/ptsd-treatment/");

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
    q: "Do I need a formal PTSD diagnosis to get treatment?",
    a: "No. You don't need a diagnosis to reach out. Many people experience significant trauma-related symptoms without meeting the full clinical criteria for PTSD. Our clinical team conducts a thorough evaluation during the admissions process and designs a treatment plan based on your specific symptoms and experiences, whether you have a formal diagnosis or not.",
  },
  {
    q: "What is EMDR and how does it work?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain reprocess traumatic memories so they no longer trigger intense emotional and physical reactions. During sessions, your therapist guides you through bilateral stimulation (typically eye movements) while you recall distressing memories, allowing your brain to integrate them in a way that reduces their emotional charge.",
  },
  {
    q: "Is it safe to process trauma in a residential setting?",
    a: "Yes, in many ways, residential treatment is the safest place to do deep trauma work. You have 24/7 clinical support, a structured daily routine, and no external stressors. If a therapy session brings up intense emotions, your clinical team is immediately available to help you process and stabilize. Many clients find they can go deeper faster in residential treatment than they ever could in weekly outpatient sessions.",
  },
  {
    q: "What types of trauma do you treat?",
    a: "We treat all forms of trauma including childhood abuse and neglect, sexual assault, combat and military trauma, domestic violence, first responder trauma, serious accidents, witnessing violence, and complex trauma from prolonged adverse experiences. Our clinicians are experienced with both single-incident trauma and complex, developmental trauma.",
  },
  {
    q: "How long does PTSD treatment take?",
    a: "Residential PTSD treatment typically lasts 30 days, depending on the severity and complexity of your trauma. Some clients with complex or developmental trauma benefit from longer stays. Our outpatient PHP and IOP programs provide 6 to 12 weeks of continued support. Your clinical team adjusts the timeline based on your progress and needs.",
  },
];

export default function PTSDTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["ptsd-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/ptsd-treatment"))]} />
      <MedicalWebPageSchema url="/mental-health/ptsd-treatment" name="PTSD Treatment Center Arizona | Desert Recovery Centers" dateModified="2026-04-05" />
      <SpeakableSchema url="/mental-health/ptsd-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Post-Traumatic Stress Disorder (PTSD)"
        description="PTSD is a psychiatric condition triggered by experiencing or witnessing traumatic events, characterized by flashbacks, hyperarousal, avoidance, and negative changes in mood and cognition."
        url="/mental-health/ptsd-treatment"
        possibleTreatments={["EMDR", "Trauma-Focused CBT", "Somatic Experiencing", "Medication Management", "Experiential Therapy"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/ptsd-treatment")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="PTSD & Trauma Treatment"
        description="What happened to you doesn't have to define you. Specialized trauma therapy that helps you heal at the deepest level."
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
              Living With Trauma You Can&apos;t Outrun
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              You&apos;ve tried to move on. Maybe you&apos;ve told yourself it was a long time ago, that you should be over it by now. But your body hasn&apos;t forgotten. The flashbacks still come. The nightmares still wake you. Certain sounds, smells, or situations still send you right back to the moment you&apos;re trying so hard to leave behind.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Post-traumatic stress disorder isn&apos;t a sign of weakness. It&apos;s your nervous system doing exactly what it was designed to do, protect you from danger. The problem is that it can&apos;t tell the difference between the original threat and the present moment. So it keeps you on high alert, keeps you braced for impact, long after the danger has passed.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Desert Recovery Centers, our trauma specialists use the most advanced, evidence-based therapies available to help your brain and body finally process what happened, so you can stop surviving and start living again.
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
              Symptoms of PTSD & Trauma
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              PTSD symptoms typically fall into four categories. You may experience some or all of these:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Re-Experiencing</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Vivid flashbacks that feel like reliving the event",
                    "Intrusive, unwanted memories of the trauma",
                    "Nightmares or disturbing dreams",
                    "Intense emotional or physical reactions to trauma reminders",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Avoidance</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Avoiding places, people, or activities that trigger memories",
                    "Emotional numbing or feeling detached from others",
                    "Inability or refusal to talk about the traumatic event",
                    "Loss of interest in previously enjoyed activities",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Hyperarousal</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Being easily startled or constantly on guard",
                    "Difficulty sleeping or concentrating",
                    "Irritability, angry outbursts, or aggressive behavior",
                    "Hypervigilance, scanning for danger in safe situations",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Negative Changes in Thinking & Mood</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Persistent feelings of guilt, shame, or self-blame",
                    "Distorted beliefs about yourself or the world",
                    "Difficulty trusting others or maintaining relationships",
                    "Feeling emotionally flat or unable to experience joy",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              How We Treat PTSD at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our trauma program is built by clinicians who specialize in trauma, not generalists who treat it on the side. Every modality we use has robust evidence behind it.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "EMDR (Eye Movement Desensitization & Reprocessing)",
                  desc: "Our trained EMDR therapists guide you through structured sessions that help your brain reprocess traumatic memories, reducing their emotional intensity and the power they hold over your daily life.",
                },
                {
                  title: "Trauma-Focused CBT",
                  desc: "Cognitive behavioral therapy adapted specifically for trauma, helping you identify and restructure the distorted beliefs that trauma has planted, such as 'it was my fault' or 'the world is unsafe.'",
                },
                {
                  title: "Somatic Experiencing",
                  desc: "Trauma lives in the body, not just the mind. Somatic therapies help release the physical tension and survival energy your body has been holding, restoring your nervous system to a state of balance.",
                },
                {
                  title: "Dual Diagnosis Treatment",
                  desc: "Many people with PTSD turn to substances to manage symptoms. Our integrated approach treats both the trauma and any co-occurring substance use or mental health conditions simultaneously.",
                },
                {
                  title: "Experiential & Holistic Therapies",
                  desc: "Art therapy, equine-assisted activities, yoga, and mindfulness meditation offer non-verbal pathways to process trauma, especially important for experiences that are difficult to put into words.",
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
              A Safe Place to Do the Hardest Work of Your Life
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Trauma-Specialized Clinicians",
                  desc: "Our licensed psychologists and therapists have advanced training in EMDR, somatic experiencing, and trauma-focused modalities. This isn't general therapy, it's specialized treatment from people who understand trauma at its deepest level.",
                },
                {
                  title: "Safety as a Foundation",
                  desc: "Trauma treatment only works when you feel safe. Our small program sizes, consistent clinical teams, and predictable daily structure create the stability your nervous system needs to begin healing.",
                },
                {
                  title: "24/7 Support for Difficult Moments",
                  desc: "Processing trauma can bring up intense emotions. Our clinical and nursing staff are available around the clock, so you're never alone with a flashback, a nightmare, or an overwhelming feeling.",
                },
                {
                  title: "Confidential & Respectful",
                  desc: "We treat veterans, first responders, professionals, and individuals from all walks of life. Your privacy is fiercely protected, and your experiences are met with clinical expertise, never judgment.",
                },
                {
                  title: "Healing Beyond the Diagnosis",
                  desc: "We don't just reduce your PTSD symptoms. We help you rebuild trust, restore relationships, and reconnect with the parts of yourself that trauma tried to take away.",
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
          { question: "What is PTSD treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides specialized PTSD and trauma treatment led by clinicians with advanced training in trauma-focused modalities. With a maximum of 10 beds per facility and 24/7 clinical support, clients can safely process trauma in a structured, luxury residential environment." },
          { question: "How does Desert Recovery Centers treat PTSD?", answer: "DRC treats PTSD using EMDR (Eye Movement Desensitization and Reprocessing), trauma-focused Cognitive Behavioral Therapy, somatic experiencing, and experiential therapies including art therapy and yoga. Each treatment plan is individualized by licensed clinical psychologists who specialize in trauma recovery." },
          { question: "How long does PTSD treatment take at Desert Recovery Centers?", answer: "Residential PTSD treatment at DRC typically lasts 30 days, depending on the severity and complexity of the trauma. Clients with complex or developmental trauma may benefit from extended stays. Outpatient PHP and IOP programs provide 6 to 12 weeks of continued support after residential care." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/ptsd-treatment" />
      <FAQSection faqs={faqData["ptsd-treatment"]} />
      <CTASection />
      <Footer />
      <Citations />
    </>
  );
}
