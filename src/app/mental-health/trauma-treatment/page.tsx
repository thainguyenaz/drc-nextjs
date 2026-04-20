import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import AEOBlock from "@/components/AEOBlock";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, SpeakableSchema, MedicalTherapySchema } from "@/lib/seo";
import AnimatedSection from "@/components/animated/AnimatedSection";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Trauma Treatment Center in Arizona",
  description:
    "Specialized trauma treatment in Arizona using EMDR, somatic therapy & trauma-focused CBT. Call DRC at (480) 931-3617.",
  path: "/mental-health/trauma-treatment",
});


export default function TraumaTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["trauma-therapy"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/trauma-treatment"))]} />
      <SpeakableSchema url="/mental-health/trauma-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Trauma Therapy"
        description="Specialized trauma treatment using EMDR, somatic experiencing, and trauma-focused CBT to help individuals process and heal from traumatic experiences."
        url="/mental-health/trauma-treatment"
        conditions={["PTSD", "Complex Trauma", "Acute Stress Disorder", "Adjustment Disorder"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/trauma-treatment")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="Trauma Treatment Center in Arizona"
        description="You don't have to carry this alone. Specialized trauma therapy that helps your mind and body finally heal."
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

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Trauma Changes Everything. The Right Treatment Changes It Back.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Trauma doesn&apos;t just live in your memory. It lives in your body, in the way your heart races when something reminds you of what happened, in the tension you carry without realizing it, in the hypervigilance that won&apos;t let you relax even when you&apos;re safe.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Maybe you&apos;ve tried to push through it. Maybe you&apos;ve been told to &quot;move on&quot; or &quot;let it go.&quot; But trauma doesn&apos;t respond to willpower. It responds to specialized treatment that helps your brain and nervous system process what happened, so you can finally stop surviving and start living again.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Desert Recovery Centers, our trauma specialists use the most advanced, evidence-based therapies available, EMDR, somatic experiencing, trauma-focused CBT, delivered by clinicians with advanced training in trauma treatment. In our luxury residential setting, you have the safety, structure, and clinical support to do the deepest healing work of your life.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg", alt: "DRC Scottsdale serenity room" }}
            rightImage={{ src: "/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg", alt: "DRC Scottsdale harmony room" }}
          />
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Recognizing the Signs</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Signs That Trauma Is Affecting Your Life</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Flashbacks, intrusive memories, or nightmares about past events",
                "Hypervigilance, constantly scanning for danger in safe situations",
                "Emotional numbness or feeling disconnected from others",
                "Avoiding people, places, or situations that trigger memories",
                "Difficulty trusting others or maintaining close relationships",
                "Using alcohol or drugs to cope with emotional pain",
                "Chronic anxiety, anger, or irritability without clear cause",
                "Feeling fundamentally broken, ashamed, or different from others",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Trauma at DRC</h2>
            <div className="space-y-6">
              {[
                { title: "EMDR Therapy", desc: "Our trained EMDR therapists guide you through structured sessions that help your brain reprocess traumatic memories, reducing their emotional intensity and the power they hold over your daily life." },
                { title: "Trauma-Focused CBT", desc: "Cognitive behavioral therapy adapted for trauma helps you identify and restructure distorted beliefs that trauma has implanted, such as 'it was my fault' or 'the world is unsafe.'" },
                { title: "Somatic Experiencing", desc: "Trauma lives in the body, not just the mind. Somatic therapies help release the physical tension and survival energy your body has been holding, restoring your nervous system to balance." },
                { title: "Experiential Therapies", desc: "Art therapy, yoga, mindfulness meditation, and nature-based activities offer non-verbal pathways to process trauma, especially important for experiences that are difficult to put into words." },
                { title: "Dual Diagnosis Treatment", desc: "When trauma co-occurs with substance use, which it frequently does, our integrated approach treats both simultaneously. Addressing the trauma reduces the drive to self-medicate." },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
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
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Why Desert Recovery Centers</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">A Safe Place for the Hardest Work</h2>
            <div className="space-y-4">
              {[
                { title: "Trauma-Specialized Clinicians", desc: "Our licensed psychologists and therapists have advanced training in EMDR, somatic experiencing, and trauma-focused modalities. This is specialized treatment from people who understand trauma at its deepest level." },
                { title: "Safety as a Foundation", desc: "Our small program sizes, consistent clinical teams, and predictable daily structure create the stability your nervous system needs to begin healing." },
                { title: "24/7 Clinical Support", desc: "Processing trauma can surface intense emotions. Our clinical and nursing staff are available around the clock, so you're never alone with a flashback, nightmare, or overwhelming feeling." },
                { title: "Luxury Environment", desc: "Healing from trauma requires feeling genuinely safe and cared for. Our resort-level facilities in Glendale, Scottsdale, and Phoenix provide the comfort that supports deeper therapeutic work." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">Related Treatment Programs</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
                { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
                { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid Addiction", href: "/addiction/heroin-addiction-treatment" },
                { label: "Personality Disorders", href: "/mental-health/personality-disorder-treatment" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-cream rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs">Coverage varies by plan. Contact us to verify your benefits.</p>
          </div>
        </div>
      </section>
      <AEOBlock entries={[
        { question: "What is trauma treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides specialized trauma treatment using EMDR, somatic experiencing, and trauma-focused CBT. With clinicians who have advanced training in trauma modalities, a maximum of 10 beds per facility, and 24/7 clinical support, clients can safely process trauma in a structured luxury residential environment." },
        { question: "How does Desert Recovery Centers treat trauma?", answer: "DRC treats trauma using EMDR, trauma-focused Cognitive Behavioral Therapy, somatic experiencing, and experiential therapies including art therapy and yoga. Each treatment plan is individualized by licensed clinical psychologists who specialize in trauma recovery. Dual diagnosis treatment addresses co-occurring substance use simultaneously." },
      ]} />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <FAQSection faqs={faqData["trauma-therapy"]} />
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
