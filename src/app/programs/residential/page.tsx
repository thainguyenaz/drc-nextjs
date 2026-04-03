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
  title: "Residential Treatment in Arizona | 30-90 Day",
  description:
    "Luxury residential rehab in Arizona. 30-90 day programs, 10-bed max, doctoral-level care. Call (480) 931-3617 to start.",
  path: "/programs/residential",
});

const faqs = [
  {
    q: "How long is residential treatment at DRC?",
    a: "Residential treatment typically ranges from 30 to 90 days depending on the severity of your condition, treatment response, and clinical needs. Your clinical team continuously evaluates your progress and adjusts the timeline to ensure you have the strongest possible foundation before stepping down. Some clients benefit from stays beyond 90 days for complex conditions.",
  },
  {
    q: "What does a typical day look like in residential treatment?",
    a: "A typical day includes morning mindfulness or yoga, individual therapy with a licensed psychologist, group therapy sessions, psychoeducation, recreational activities, gourmet meals, and evening reflection. You'll also have personal time for journaling, exercise, and relaxation. Weekends include family visiting hours and experiential activities.",
  },
  {
    q: "Can I bring my phone and personal belongings?",
    a: "We have guidelines around electronics to support your focus on recovery. During the initial phase of treatment, phone use may be limited to designated times. Personal belongings are welcome within our policies. Our admissions team provides a detailed packing list before your arrival.",
  },
  {
    q: "What is the difference between residential and inpatient treatment?",
    a: "Residential treatment at DRC takes place in a home-like luxury environment, not a hospital. You live at the facility and receive structured daily programming, but the atmosphere is warm and comfortable — not clinical. The clinical intensity is comparable to inpatient care, but the environment supports healing in a fundamentally different way.",
  },
  {
    q: "Do you accept insurance for residential treatment?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost before you begin treatment.",
  },
];

export default function ResidentialTreatmentPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/programs/residential" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Residential Treatment Program"
        description="Luxury residential treatment providing 24/7 immersive care with doctoral-level clinicians, evidence-based therapies, and holistic programming for addiction and mental health conditions."
        url="/programs/residential"
        conditions={["Substance Use Disorders", "Depression", "Anxiety", "PTSD", "Bipolar Disorder", "Co-Occurring Disorders"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Levels of Care"
        title="Residential Treatment Program in Arizona"
        description="Immersive, 24/7 luxury residential care with doctoral-level clinicians — the foundation for lasting recovery."
        bgImage="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Full Immersion. Total Focus. Real Results.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Residential treatment is our most intensive level of care — and for many people, it&apos;s the difference between trying to recover and actually recovering. You live at one of our three Arizona facilities, removed from the triggers, stressors, and routines that keep the cycle going, and immerse yourself fully in the work of healing.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Every day is structured around evidence-based therapy — individual sessions with licensed psychologists, group therapy, psychiatric care, and holistic programming. Our doctoral-level clinical team designs your treatment plan around your specific diagnosis, history, and goals. With a maximum of 10 beds per facility, you receive a level of personal attention that larger programs simply cannot deliver.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This isn&apos;t 30 days of marking time. It&apos;s 30 to 90 days of intensive, purposeful work that gives you the foundation to sustain recovery for life.
            </p>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Living-Room.jpg", alt: "DRC luxury living area" }}
            rightImage={{ src: "/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg", alt: "DRC gym facility" }}
          />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">What&apos;s Included</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Your Residential Program Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Daily individual therapy with a licensed psychologist",
                "Structured group therapy sessions",
                "Psychiatric evaluation and medication management",
                "24/7 nursing and clinical support",
                "Holistic therapies: yoga, mindfulness, art therapy",
                "Gourmet meals and nutritional counseling",
                "Family therapy and visiting hours",
                "Comprehensive aftercare planning",
                "Resort-level amenities (pool, gym, recreation)",
                "Individualized treatment plan reviewed weekly",
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
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Is This Right for You</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Residential Treatment May Be Right If You</h2>
            <div className="space-y-4">
              {[
                { title: "Need intensive clinical support", desc: "Your condition is moderate to severe, and weekly outpatient therapy hasn't been enough. You need daily therapy, psychiatric care, and round-the-clock support." },
                { title: "Have a co-occurring condition", desc: "You're dealing with both a substance use disorder and a mental health condition. Dual diagnosis requires the integrated, intensive approach that residential treatment provides." },
                { title: "Need to break free from your environment", desc: "Your current living situation, social circle, or daily routine keeps pulling you back into unhealthy patterns. Residential treatment removes those triggers." },
                { title: "Have tried outpatient without success", desc: "You've attempted outpatient treatment or self-directed recovery and it hasn't worked. Residential provides the structure and intensity needed for a breakthrough." },
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

      {/* Locations */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">Residential Treatment Locations</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { name: "DRC Glendale", detail: "Flagship, 7,500 sq ft", phone: "(623) 323-1012", href: "/locations/glendale" },
                { name: "DRC Scottsdale", detail: "Mountain views", phone: "(480) 931-3617", href: "/locations/scottsdale" },
                { name: "DRC Phoenix", detail: "Holistic focus", phone: "(623) 257-5384", href: "/locations/phoenix" },
              ].map((loc) => (
                <Link key={loc.href} href={loc.href} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gold/30 transition-colors block">
                  <h3 className="font-display text-forest font-semibold mb-1">{loc.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{loc.detail}</p>
                  <p className="text-gold font-semibold text-sm">{loc.phone}</p>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs">Coverage varies by plan. Contact us to verify your benefits.</p>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        { question: "What is residential treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides residential treatment programs lasting 30 to 90 days across three facilities in Glendale, Scottsdale, and Phoenix. With a maximum of 10 beds per location, doctoral-level clinical leadership, and daily individual therapy, clients receive intensive, personalized care for addiction and mental health conditions in a luxury environment." },
        { question: "How long is residential treatment at Desert Recovery Centers?", answer: "Residential treatment at DRC typically lasts 30 to 90 days, depending on the severity and complexity of each client's condition. Treatment plans are reviewed weekly and adjusted based on measurable clinical progress. After residential care, clients can step down to PHP or IOP at the same facility with the same clinical team." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
