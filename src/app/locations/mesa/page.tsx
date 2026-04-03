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
  title: "Addiction Treatment Near Mesa, AZ",
  description:
    "Addiction treatment near Mesa, Arizona. Luxury residential rehab at DRC Phoenix with holistic care. Call (623) 257-5384.",
  path: "/locations/mesa",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from Mesa?",
    a: "Our Phoenix facility at 1623 W Moody Trail is approximately 25 to 35 minutes from most Mesa neighborhoods. It's the closest DRC location to Mesa residents, offering residential and outpatient programs with expanded holistic programming in a luxury setting.",
  },
  {
    q: "What types of treatment do you offer for Mesa residents?",
    a: "Our Phoenix location offers residential treatment and outpatient programs for both substance use disorders and mental health conditions. We specialize in dual diagnosis treatment — addressing addiction and co-occurring conditions like depression, anxiety, PTSD, and bipolar disorder simultaneously.",
  },
  {
    q: "Do you accept insurance for Mesa residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost to you.",
  },
  {
    q: "What amenities does the Phoenix facility offer?",
    a: "Our Phoenix center features a movie theater, pool with waterfall, state-of-the-art gym, massage room, and gourmet kitchen. The 5,500-square-foot facility was designed to feel like a luxury home, not a clinical institution — supporting deeper healing through comfort and dignity.",
  },
  {
    q: "How quickly can I begin treatment from Mesa?",
    a: "Most clients begin treatment within 48 hours of their first call. Our 24/7 admissions team handles insurance verification, clinical assessment, and intake coordination quickly so there's no unnecessary delay when you're ready to start.",
  },
];

export default function MesaPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Mesa, Arizona"
        title="Addiction Treatment Near Mesa, Arizona"
        description="Luxury rehab with doctoral-level care, just a short drive from Mesa. Addiction and mental health treatment that changes lives."
        bgImage="/images/general/accom-backyard.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Mesa Residents Have a Better Option
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;re looking for addiction or mental health treatment near Mesa, you don&apos;t have to settle for distant facilities or generic programs. Desert Recovery Centers&apos; Phoenix location at 1623 W Moody Trail is approximately 25 to 35 minutes from Mesa — close enough for regular family visits, far enough to provide the fresh start you need.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix facility offers expanded holistic programming alongside evidence-based clinical therapies — a combination that treats the whole person. Licensed psychologists, board-certified psychiatrists, and a dedicated nursing staff provide care around the clock in a luxury setting featuring a movie theater, pool with waterfall, and resort-level amenities.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Mesa is the third-largest city in Arizona, but quality addiction treatment options are limited. DRC changes that. We bring doctoral-level care and a luxury healing environment within easy reach of the East Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/general/accom-recreation.jpg",
              alt: "Desert Recovery Centers recreation area",
            }}
            rightImage={{
              src: "/images/general/accom-bedroom.jpg",
              alt: "Desert Recovery Centers private bedroom",
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
              DRC Phoenix — 25 to 35 Minutes From Mesa
            </h2>
            <div className="bg-cream rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
              <p className="text-gray-600 text-sm">1623 W Moody Trail, Phoenix, AZ 85041</p>
              <a href="tel:+16232575384" className="text-gold font-semibold text-lg block mt-2">(623) 257-5384</a>
              <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
            </div>
            <div className="mb-8">
              <h3 className="font-display text-xl text-forest font-semibold mb-4">Programs Offered</h3>
              <div className="flex flex-wrap gap-3">
                {["Residential Treatment", "Outpatient Programs"].map((p) => (
                  <span key={p} className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full">{p}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Movie Theater", "Pool with Waterfall", "State-of-the-Art Gym", "Massage Room", "Gourmet Kitchen", "5,500 Sq Ft Facility", "Holistic Programming", "Private Rooms"].map((a) => (
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
              Why Mesa Families Choose DRC Phoenix
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Accessible Family Involvement",
                  desc: "At 25 to 35 minutes from Mesa, family members can attend therapy sessions, visit during designated hours, and remain closely involved in your recovery without major disruption.",
                },
                {
                  title: "Holistic Healing Approach",
                  desc: "Our Phoenix facility specializes in expanded holistic programming — art therapy, yoga, mindfulness, nutritional counseling — alongside evidence-based clinical therapies for comprehensive whole-person healing.",
                },
                {
                  title: "Continuity of Outpatient Care",
                  desc: "Transition seamlessly from residential to outpatient care at the same Phoenix location. Same clinical team, same environment — maximizing your long-term recovery success.",
                },
                {
                  title: "East Valley Recovery Network",
                  desc: "Our alumni community and aftercare resources extend throughout the Phoenix metro area, including Mesa. Local recovery support makes sustained sobriety achievable.",
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
              Conditions We Treat Near Mesa
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine-addiction-treatment" },
                { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
                { label: "Schizophrenia", href: "/mental-health/schizophrenia-treatment" },
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
