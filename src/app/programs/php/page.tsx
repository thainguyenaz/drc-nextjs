import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import AEOBlock from "@/components/AEOBlock";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, InlineFAQSchema, SpeakableSchema, MedicalTherapySchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partial Hospitalization Program (PHP) in AZ",
  description:
    "PHP program in Arizona. 5-6 hours daily, step-down from residential or standalone entry. Call DRC at (480) 931-3617.",
  path: "/programs/php",
});

const faqs = [
  {
    q: "What is a Partial Hospitalization Program (PHP)?",
    a: "PHP is a structured outpatient program that provides 5-6 hours of daily clinical programming, typically 5 days per week for 4-6 weeks. It's more intensive than traditional outpatient therapy but allows you to return home or to a sober living environment in the evenings. It's often used as a step-down from residential treatment or as an entry point for those who need intensive care but don't require 24/7 supervision.",
  },
  {
    q: "What is the daily schedule for PHP?",
    a: "A typical PHP day includes individual therapy, group therapy sessions, psychoeducation, skills training, and holistic wellness activities. Programming runs approximately 5-6 hours, usually during daytime hours. You'll have access to the same evidence-based therapies and doctoral-level clinicians as our residential program.",
  },
  {
    q: "Can I enter PHP without doing residential treatment first?",
    a: "Yes. While many clients step down from residential to PHP, you can enter PHP directly if your clinical assessment determines it's the appropriate level of care. PHP is ideal for individuals with moderate symptoms who have a stable living environment and don't require 24/7 medical supervision.",
  },
  {
    q: "Do you accept insurance for PHP?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost.",
  },
  {
    q: "What happens after PHP is complete?",
    a: "Most clients step down from PHP to our Intensive Outpatient Program (IOP), which meets 3-4 times per week. This gradual step-down approach gives you increasing independence while maintaining clinical support. Your clinical team develops a comprehensive aftercare plan before you complete the program.",
  },
];

export default function PHPPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/programs/php" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Partial Hospitalization Program (PHP)"
        description="Structured day program providing 5-6 hours of daily clinical programming for addiction and mental health conditions, used as a step-down from residential or standalone intensive treatment."
        url="/programs/php"
        conditions={["Substance Use Disorders", "Depression", "Anxiety", "PTSD", "Bipolar Disorder"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Levels of Care"
        title="Partial Hospitalization Program (PHP) in Arizona"
        description="Intensive daily treatment with the flexibility to go home in the evening, the bridge between residential care and independent living."
        bgImage="/images/glendale/Glendale-Group-Room.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Intensive Treatment. Real-World Practice.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Partial Hospitalization Program provides the clinical intensity of residential treatment, daily individual therapy, group sessions, psychiatric care, while allowing you to return home or to a sober living environment each evening. It&apos;s the ideal level of care for those who have completed residential treatment and are ready for more independence, or for those whose condition requires intensive support but not 24/7 supervision.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              With 5-6 hours of structured programming daily, 5 days per week, PHP gives you the opportunity to apply what you&apos;re learning in therapy to real-world situations, relationships, work, daily routines, while still having the safety net of daily clinical contact with your treatment team.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At DRC, PHP clients receive the same caliber of doctoral-level care, evidence-based therapies, and personalized attention as our residential clients. The only difference is where you sleep.
            </p>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Group-Room.jpg", alt: "DRC group therapy room" }}
            rightImage={{ src: "/images/glendale/Glendale-Workspace.jpg", alt: "DRC workspace" }}
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Program Details</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What PHP Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "5-6 hours of daily programming, 5 days per week",
                "Individual therapy with a licensed psychologist",
                "Structured group therapy sessions",
                "Psychiatric care and medication management",
                "Evidence-based modalities: CBT, DBT, EMDR",
                "Holistic programming: yoga, mindfulness, art therapy",
                "Psychoeducation and life skills training",
                "Weekly treatment plan reviews",
                "Family therapy sessions",
                "Aftercare and step-down planning",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Is PHP Right for You</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">PHP May Be Right If You</h2>
            <div className="space-y-4">
              {[
                { title: "Are stepping down from residential treatment", desc: "You've completed residential care and are ready for more independence while maintaining intensive clinical support during the day." },
                { title: "Need intensive care but have a stable home", desc: "Your condition requires more than weekly therapy, but you have a safe, supportive living situation and don't need 24/7 supervision." },
                { title: "Want to practice recovery skills in real life", desc: "PHP lets you apply coping strategies, communication skills, and healthy routines in your actual daily life, with clinical support the next morning if challenges arise." },
                { title: "Are managing co-occurring conditions", desc: "Dual diagnosis treatment benefits from intensive daily contact. PHP provides the frequency needed to manage both addiction and mental health conditions effectively." },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-xl p-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Continuum of Care Video ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Better Outcomes</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">How Outcomes Improve With a Full Continuum of Care</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/Il5BV-EYP3E?rel=0"
              title="How Do Outcomes Improve When Clients Follow a Full Continuum of Care"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What If You Need to Step Back Up?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/YRgC19rPIho?rel=0"
              title="What Happens If Someone Needs to Step Back Up to a Higher Level of Care"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">Related Programs</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Residential Treatment", href: "/programs/residential" },
                { label: "Intensive Outpatient (IOP)", href: "/programs/iop" },
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
                { label: "DRC Glendale", href: "/locations/glendale" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-white rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs">Coverage varies by plan. Contact us to verify your benefits.</p>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        { question: "What is PHP at Desert Recovery Centers?", answer: "Desert Recovery Centers' Partial Hospitalization Program (PHP) provides 5-6 hours of daily clinical programming, 5 days per week, at our Joint Commission accredited facilities in Glendale and Scottsdale. Led by doctoral-level clinicians, PHP includes individual therapy, group therapy, psychiatric care, and holistic programming, serving as a step-down from residential or standalone intensive treatment." },
        { question: "How long is the PHP program at Desert Recovery Centers?", answer: "PHP at DRC typically runs 4 to 6 weeks, with programming 5 days per week for 5-6 hours daily. Treatment duration is individualized based on clinical progress. After PHP, most clients step down to Intensive Outpatient (IOP) for continued support with the same clinical team." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
