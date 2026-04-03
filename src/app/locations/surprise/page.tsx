import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, InlineFAQSchema, SpeakableSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";

export const metadata: Metadata = buildMetadata({
  title: "Addiction Treatment Near Surprise, AZ",
  description:
    "Addiction treatment near Surprise, Arizona. Luxury residential rehab at DRC Glendale, 20 min away. Call (623) 323-1012 now.",
  path: "/locations/surprise",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from Surprise, Arizona?",
    a: "Our Glendale facility at 8105 W Frier Dr is approximately 20 to 30 minutes from most Surprise neighborhoods. It's the closest DRC location and offers residential, PHP, and IOP programs in a luxury 7,500 square foot facility.",
  },
  {
    q: "What types of addiction do you treat?",
    a: "We treat all substance use disorders including alcohol, opioids, heroin, fentanyl, cocaine, methamphetamine, prescription drugs, and marijuana. We also treat behavioral addictions and co-occurring mental health conditions through our dual diagnosis program.",
  },
  {
    q: "Do you accept insurance for Surprise residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team will check your coverage at no cost.",
  },
  {
    q: "What makes DRC different from other rehabs in the West Valley?",
    a: "Our clinical team is led by licensed psychologists and board-certified psychiatrists — not counselors or paraprofessionals. Combined with our luxury amenities, evidence-based therapies, small client-to-clinician ratios, and dual diagnosis specialization, we deliver care that most area facilities cannot match.",
  },
  {
    q: "How quickly can I start treatment?",
    a: "Most clients begin treatment within 48 hours of their first call. Our admissions team is available 24/7, and we handle insurance verification, clinical assessment, and intake coordination rapidly so there's no unnecessary delay when you're ready to get help.",
  },
];

export default function SurprisePage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/surprise" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Surprise, Arizona"
        title="Addiction Treatment Near Surprise, Arizona"
        description="Luxury rehab is closer than you think. Doctoral-level addiction and mental health care just 20 minutes from Surprise."
        bgImage="/images/glendale/Glendale-Back-Yard.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Surprise Residents Don&apos;t Have to Go Far for Help
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              When addiction or a mental health crisis hits, the idea of researching treatment centers across the state — or across the country — can feel overwhelming. If you&apos;re in Surprise, Arizona, you have a world-class option just 20 to 30 minutes away.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Desert Recovery Centers&apos; Glendale facility at 8105 W Frier Dr is the closest luxury residential treatment center to Surprise. Our 7,500-square-foot facility offers the clinical depth of a top-tier program — licensed psychologists, board-certified psychiatrists, evidence-based therapies — wrapped in a setting that feels like home, not a hospital.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you&apos;re struggling with alcohol, opioids, stimulants, or a co-occurring mental health condition like anxiety or depression, our dual diagnosis approach addresses everything at once. That&apos;s how real recovery starts.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/glendale/Glendale-Basketball.jpg",
              alt: "Desert Recovery Centers Glendale basketball court",
            }}
            rightImage={{
              src: "/images/glendale/Glendale-Therapy-Room.jpg",
              alt: "Desert Recovery Centers Glendale therapy room",
            }}
          />
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Your Nearest DRC Location
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              DRC Glendale — 20 to 30 Minutes From Surprise
            </h2>
            <div className="bg-cream rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
              <p className="text-gray-600 text-sm">8105 W Frier Dr, Glendale, AZ 85303</p>
              <a href="tel:+16233231012" className="text-gold font-semibold text-lg block mt-2">(623) 323-1012</a>
              <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
            </div>
            <div className="mb-8">
              <h3 className="font-display text-xl text-forest font-semibold mb-4">Programs Offered</h3>
              <div className="flex flex-wrap gap-3">
                {["Residential Treatment", "Partial Hospitalization (PHP)", "Intensive Outpatient (IOP)"].map((p) => (
                  <span key={p} className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full">{p}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Basketball Court", "Tennis Court", "Pool", "State-of-the-Art Gym", "Billiards Room", "Massage Room", "Gourmet Kitchen", "7,500 Sq Ft Facility"].map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Proximity Matters */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Location Matters
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Choosing a Nearby Rehab Makes a Difference
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Family Can Stay Involved",
                  desc: "At 20 to 30 minutes from Surprise, your family can participate in therapy sessions, attend visiting hours, and be part of your recovery without long commutes or travel costs.",
                },
                {
                  title: "Faster Access to Care",
                  desc: "When you're ready for help, distance shouldn't slow you down. Our proximity to Surprise means you can begin treatment the same day you make the decision — most clients start within 48 hours.",
                },
                {
                  title: "Smooth Step-Down Transitions",
                  desc: "Move from residential to outpatient care at the same Glendale facility. Same team, same location, no disruption — just continued support as you build independence.",
                },
                {
                  title: "Local Aftercare Support",
                  desc: "Our alumni network and aftercare resources are based in the West Valley. When you leave treatment, your recovery community is right here — not hundreds of miles away.",
                },
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

      {/* Treatment Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What We Treat
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Conditions We Treat Near Surprise
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Heroin Addiction", href: "/addiction/heroin" },
                { label: "Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Meth Addiction", href: "/addiction/meth" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "ADHD", href: "/mental-health/adhd-add" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-cream rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors"
                >
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        {
          question: "Is there a Desert Recovery Centers in Surprise?",
          answer: "Desert Recovery Centers does not have a facility directly in Surprise, but our Glendale location at 8105 W Frier Dr is approximately 20 to 30 minutes away. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential, PHP, and IOP programs in a 7,500-square-foot facility.",
        },
        {
          question: "What addiction treatment is available near Surprise, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment near Surprise at our Glendale facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and holistic therapies — delivered by licensed psychologists and board-certified psychiatrists.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Surprise residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Surprise residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 323-1012 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
