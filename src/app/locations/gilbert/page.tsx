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
  title: "Drug & Alcohol Rehab Near Gilbert, AZ",
  description:
    "Drug and alcohol rehab near Gilbert, Arizona. Luxury residential treatment at DRC Phoenix. Call (623) 257-5384 for help today.",
  path: "/locations/gilbert",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from Gilbert?",
    a: "Our Phoenix facility at 1623 W Moody Trail is approximately 30 to 40 minutes from most Gilbert neighborhoods. While not right next door, it's the closest DRC facility and offers a level of luxury residential treatment that's worth the drive.",
  },
  {
    q: "What substances do you treat at the Phoenix location?",
    a: "We treat all forms of substance use disorders including alcohol, opioids, heroin, fentanyl, cocaine, methamphetamine, prescription drugs, and marijuana. Our dual diagnosis approach also addresses co-occurring mental health conditions like anxiety, depression, PTSD, and bipolar disorder simultaneously.",
  },
  {
    q: "Do you accept insurance for Gilbert residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost to you.",
  },
  {
    q: "What is the admissions process like?",
    a: "Getting started is simple. Call our 24/7 admissions line at (623) 257-5384. We'll verify your insurance, conduct a brief clinical pre-assessment over the phone, and coordinate your intake. Most clients begin treatment within 48 hours. We handle the logistics so you can focus on getting help.",
  },
  {
    q: "Can family members from Gilbert visit during treatment?",
    a: "Absolutely. We encourage family involvement and offer designated visiting hours plus a structured family therapy program. At 30 to 40 minutes from Gilbert, your loved ones can participate regularly without excessive travel burden.",
  },
];

export default function GilbertPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/gilbert" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Gilbert, Arizona"
        title="Drug and Alcohol Rehab Near Gilbert, Arizona"
        description="Luxury residential rehab with doctoral-level care, serving Gilbert families at our Phoenix facility."
        bgImage="/images/general/accom-backyard.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Gilbert Families Deserve Real Treatment Options
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Finding quality drug and alcohol rehab near Gilbert can feel challenging. Most luxury residential programs are hours away or out of state. Desert Recovery Centers changes that equation — our Phoenix facility at 1623 W Moody Trail is approximately 30 to 40 minutes from Gilbert, putting doctoral-level care within practical reach.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix location offers residential and outpatient programs with expanded holistic programming, unique amenities like a movie theater and pool with waterfall, and a clinical team led by licensed psychologists and board-certified psychiatrists. This isn&apos;t cookie-cutter rehab — it&apos;s individualized, evidence-based treatment in a setting designed for deep healing.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you or a loved one is facing addiction, a mental health crisis, or both, we&apos;re here to help — and closer than you might expect.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/general/accom-massage.jpg",
              alt: "Desert Recovery Centers massage therapy room",
            }}
            rightImage={{
              src: "/images/general/accom-gym.jpg",
              alt: "Desert Recovery Centers fitness center",
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
              DRC Phoenix — 30 to 40 Minutes From Gilbert
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
              Why Gilbert Families Trust DRC Phoenix
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Family-Accessible Treatment",
                  desc: "At 30 to 40 minutes from Gilbert, your family can participate in visiting hours and family therapy sessions regularly — maintaining the connection that research shows is one of the strongest predictors of recovery success.",
                },
                {
                  title: "Worth the Drive",
                  desc: "Our doctoral-level clinical team, evidence-based dual diagnosis approach, and luxury amenities deliver a caliber of care that simply isn't available at most area facilities. A 30-minute drive for world-class treatment is a small investment.",
                },
                {
                  title: "Comprehensive Holistic Programming",
                  desc: "Our Phoenix facility offers expanded holistic offerings — art therapy, yoga, mindfulness meditation, nutritional counseling, and therapeutic recreation — addressing healing at every level.",
                },
                {
                  title: "Phoenix Metro Recovery Network",
                  desc: "After treatment, you'll have access to our alumni network, support groups, and aftercare resources throughout the Phoenix metro area — keeping Gilbert residents connected to their recovery community.",
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
              Conditions We Treat Near Gilbert
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Heroin & Opioid Addiction", href: "/addiction/heroin-addiction-treatment" },
                { label: "Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Meth Addiction", href: "/addiction/meth-addiction-treatment" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Personality Disorders", href: "/mental-health/personality-disorder-treatment" },
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
          question: "Is there a Desert Recovery Centers in Gilbert?",
          answer: "Desert Recovery Centers does not have a facility directly in Gilbert, but our Phoenix location at 1623 W Moody Trail is approximately 30 to 40 minutes away. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential and outpatient programs with doctoral-level clinicians, making it the closest DRC facility for Gilbert residents.",
        },
        {
          question: "What addiction treatment is available near Gilbert, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive drug and alcohol rehab near Gilbert at our Phoenix facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and holistic therapies — all delivered by licensed psychologists and board-certified psychiatrists in a luxury residential setting.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Gilbert residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Gilbert residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 257-5384 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
