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
  title: "Luxury Rehab Near North Scottsdale, AZ",
  description:
    "Luxury addiction & mental health rehab minutes from North Scottsdale. Doctoral-level care at DRC. Call (480) 931-3617 today.",
  path: "/locations/north-scottsdale",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from North Scottsdale?",
    a: "Our Scottsdale facility at 23222 N Church Rd is located directly in the North Scottsdale area. Most residents of North Scottsdale are within a 5 to 15-minute drive, making it one of the most convenient luxury treatment options available without having to leave your community.",
  },
  {
    q: "What types of treatment do you offer near North Scottsdale?",
    a: "Our Scottsdale location offers residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) programs for both mental health conditions and substance use disorders. We specialize in dual diagnosis treatment, addressing conditions like anxiety, depression, PTSD, and addiction simultaneously.",
  },
  {
    q: "Do you accept insurance at the Scottsdale location?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team will check your coverage at no cost before you begin treatment.",
  },
  {
    q: "Can my family visit during treatment?",
    a: "Absolutely. Family involvement is an important part of the recovery process, and proximity to North Scottsdale makes regular visitation easy. We offer designated visiting hours and a structured family therapy program that includes education sessions, joint therapy, and support groups.",
  },
  {
    q: "What makes DRC different from other rehabs near North Scottsdale?",
    a: "Desert Recovery Centers is led by a doctoral-level clinical team — licensed psychologists and board-certified psychiatrists, not paraprofessionals. Combined with our luxury amenities, small client-to-clinician ratios, and evidence-based dual diagnosis approach, we deliver a caliber of care that most facilities in the Scottsdale area simply cannot match.",
  },
];

export default function NorthScottsdalePage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/north-scottsdale" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="North Scottsdale, Arizona"
        title="Luxury Rehab Near North Scottsdale, Arizona"
        description="Doctoral-level addiction and mental health treatment just minutes from your doorstep — in a luxury setting you have to see to believe."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Treatment Close to Home in North Scottsdale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you are searching for addiction or mental health treatment near North Scottsdale, Desert Recovery Centers is minutes away at 23222 N Church Rd in Scottsdale. You do not have to travel far to access doctoral-level care in a luxury setting.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Scottsdale facility sits nestled against stunning mountain views in the heart of North Scottsdale — a 5 to 15-minute drive for most residents. That proximity matters more than you might think. When your loved ones can visit easily, when your support system stays close, recovery outcomes improve dramatically.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              You don&apos;t need to fly across the country or check into a remote facility far from everyone who cares about you. World-class treatment is right here in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
              alt: "Desert Recovery Centers Scottsdale front entrance",
            }}
            rightImage={{
              src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg",
              alt: "Desert Recovery Centers Scottsdale luxury living area",
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
              DRC Scottsdale — 5 to 15 Minutes From North Scottsdale
            </h2>
            <div className="bg-cream rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
              <p className="text-gray-600 text-sm">23222 N Church Rd, Scottsdale, AZ 85255</p>
              <a href="tel:+14809313617" className="text-gold font-semibold text-lg block mt-2">(480) 931-3617</a>
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
                {["Pool", "Tennis Court", "Basketball Court", "State-of-the-Art Gym", "Massage Room", "Mountain Views", "Gourmet Kitchen", "Private Rooms"].map((a) => (
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
              The Advantage of Treatment Close to Home
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Easy Family Visitation",
                  desc: "Your loved ones can visit regularly without the burden of travel. Research consistently shows that family involvement improves treatment outcomes and long-term recovery rates.",
                },
                {
                  title: "Smoother Transition to Outpatient Care",
                  desc: "When you step down from residential to PHP or IOP, you're already close to home. No relocation, no disruption — just continued care with the same clinical team in a familiar setting.",
                },
                {
                  title: "Local Aftercare Connections",
                  desc: "Our alumni network, support groups, and aftercare resources are right here in the Scottsdale area. Staying connected to your recovery community is easier when it's in your own backyard.",
                },
                {
                  title: "Reduced Barriers to Entry",
                  desc: "The closer treatment is, the fewer excuses your mind can create to avoid getting help. Sometimes eliminating the travel barrier is what makes the difference between reaching out and putting it off another day.",
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
              Conditions We Treat Near North Scottsdale
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
                { label: "OCD", href: "/mental-health/ocd-treatment" },
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Cocaine & Stimulant Addiction", href: "/addiction/cocaine-addiction-treatment" },
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
          question: "Is there a Desert Recovery Centers in North Scottsdale?",
          answer: "Yes, Desert Recovery Centers has a facility located directly in the North Scottsdale area at 23222 N Church Rd, Scottsdale, AZ 85255. Most North Scottsdale residents are within a 5 to 15-minute drive. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential, PHP, and IOP programs.",
        },
        {
          question: "What addiction treatment is available near North Scottsdale, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment in North Scottsdale. As a Joint Commission accredited luxury treatment center in Arizona, we provide residential treatment, partial hospitalization, and intensive outpatient programs with evidence-based therapies including CBT, DBT, EMDR, and dual diagnosis treatment — delivered by licensed psychologists and board-certified psychiatrists.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for North Scottsdale residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for North Scottsdale residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (480) 931-3617 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
