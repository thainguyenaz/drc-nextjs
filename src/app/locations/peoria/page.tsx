import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Drug & Alcohol Rehab Near Peoria, AZ",
  description:
    "Drug and alcohol rehab near Peoria, Arizona. Evidence-based treatment at DRC Glendale. Call (623) 323-1012 for a free assessment.",
  path: "/locations/peoria",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from Peoria?",
    a: "Our Glendale facility at 8105 W Frier Dr is approximately 15 to 25 minutes from most Peoria neighborhoods. It's the closest DRC location to Peoria residents, offering residential, PHP, and IOP programs in a 7,500 square foot luxury setting.",
  },
  {
    q: "What substances do you treat at the Glendale facility?",
    a: "We treat all forms of substance use disorders including alcohol, opioids, fentanyl, heroin, cocaine, methamphetamine, prescription drugs, and marijuana. Our medically supervised approach ensures safe detox when needed, followed by comprehensive therapeutic treatment.",
  },
  {
    q: "Do you accept insurance for Peoria residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — we'll check your coverage at no cost before you begin treatment.",
  },
  {
    q: "What does treatment at the Glendale facility look like?",
    a: "A typical day includes morning mindfulness or yoga, individual therapy with a licensed psychologist, group therapy sessions, psychoeducation, recreational activities, and evening reflection. You'll also have access to our basketball court, tennis court, pool, gym, and massage room.",
  },
  {
    q: "Can my family visit while I'm in treatment?",
    a: "Yes. We encourage family involvement as a key part of the recovery process. Our Glendale facility is close enough to Peoria that your loved ones can visit during designated hours and participate in our family therapy program without significant travel burden.",
  },
];

export default function PeoriaPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Peoria, Arizona"
        title="Drug and Alcohol Rehab Near Peoria, Arizona"
        description="Evidence-based addiction and mental health treatment just minutes from Peoria at our flagship Glendale facility."
        bgImage="/images/glendale/Gelndale-Front-1.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Quality Rehab Without Leaving the West Valley
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;re searching for drug or alcohol rehab near Peoria, you don&apos;t have to look far. Desert Recovery Centers&apos; flagship Glendale facility is just 15 to 25 minutes away at 8105 W Frier Dr — close enough to keep your family involved, far enough to give you the focus and space you need to heal.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our 7,500-square-foot residential facility offers the kind of care that most people associate with out-of-state luxury rehabs — doctoral-level clinicians, evidence-based therapies, resort-style amenities — right here in the West Valley. No flights. No long drives. Just world-class treatment in your own community.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you&apos;re struggling with alcohol, opioids, stimulants, or a co-occurring mental health condition, our dual diagnosis approach treats the whole person — not just the substance.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/glendale/Glendale-Pool.jpg",
              alt: "Desert Recovery Centers Glendale pool area",
            }}
            rightImage={{
              src: "/images/glendale/Glendale-Living-Room.jpg",
              alt: "Desert Recovery Centers Glendale living room",
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
              DRC Glendale — 15 to 25 Minutes From Peoria
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
              Why Peoria Families Choose DRC Glendale
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Family-Friendly Distance",
                  desc: "At 15 to 25 minutes from Peoria, your family can attend therapy sessions, participate in visiting hours, and stay engaged in your recovery without major disruption to their daily lives.",
                },
                {
                  title: "Continuity of Care",
                  desc: "Step down from residential treatment to PHP or IOP at the same Glendale facility. Same clinical team, same environment — a seamless transition that supports your progress.",
                },
                {
                  title: "West Valley Recovery Network",
                  desc: "Our alumni community and aftercare resources are based right here in the West Valley. Local connections make long-term recovery sustainable.",
                },
                {
                  title: "Flagship Facility",
                  desc: "Our Glendale location is our flagship center — 7,500 square feet of luxury residential treatment with the full range of amenities and programming.",
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
              Conditions We Treat Near Peoria
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Heroin Addiction", href: "/addiction/heroin-addiction-treatment" },
                { label: "Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Meth Addiction", href: "/addiction/meth-addiction-treatment" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
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
      <CTASection />
      <Footer />
    </>
  );
}
