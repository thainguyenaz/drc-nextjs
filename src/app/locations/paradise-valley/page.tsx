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
  title: "Luxury Rehab Near Paradise Valley, AZ",
  description:
    "Luxury rehab near Paradise Valley, Arizona. Residential addiction & mental health treatment at DRC Scottsdale. Call (480) 931-3617.",
  path: "/locations/paradise-valley",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from Paradise Valley?",
    a: "Our Scottsdale facility at 23222 N Church Rd is approximately 20 to 30 minutes from Paradise Valley, depending on traffic. Located in north Scottsdale with mountain views, it's the closest DRC location and one of the most convenient luxury treatment options in the greater Scottsdale area.",
  },
  {
    q: "What level of care do you provide near Paradise Valley?",
    a: "Our Scottsdale location offers residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP). We treat both mental health conditions and substance use disorders, with a specialization in dual diagnosis — meaning we address co-occurring conditions simultaneously for better long-term outcomes.",
  },
  {
    q: "Do you accept insurance for Paradise Valley residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost to you.",
  },
  {
    q: "What amenities does the Scottsdale facility offer?",
    a: "Our Scottsdale center features a pool, tennis court, basketball court, state-of-the-art gym, massage room, gourmet kitchen, private rooms, and stunning mountain views. It's a luxury residential environment designed to support deep healing in the most comfortable setting possible.",
  },
  {
    q: "Can I continue outpatient treatment after residential care?",
    a: "Absolutely. Many clients step down from residential treatment to our PHP or IOP programs at the same Scottsdale location. This continuity of care — same clinical team, same environment — supports a smoother transition and stronger long-term recovery.",
  },
];

export default function ParadiseValleyPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/paradise-valley" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Paradise Valley, Arizona"
        title="Luxury Rehab Near Paradise Valley, Arizona"
        description="World-class addiction and mental health treatment a short drive from Paradise Valley — where clinical excellence meets luxury."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-0068August-01-202400009-2.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Paradise Valley Residents Deserve World-Class Care
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              When you or someone you love is struggling with addiction or a mental health condition, the last thing you need is another obstacle. Desert Recovery Centers brings doctoral-level treatment to your doorstep — our Scottsdale facility at 23222 N Church Rd is just 20 to 30 minutes from Paradise Valley.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Paradise Valley is known for its commitment to quality of life. We share that commitment. Our Scottsdale location offers a level of clinical sophistication and physical comfort that matches the standards you expect — licensed psychologists, board-certified psychiatrists, evidence-based therapies, and resort-level amenities in a private, discreet setting.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              You don&apos;t have to compromise between convenience and quality. The treatment you deserve is right here.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg",
              alt: "Desert Recovery Centers Scottsdale outdoor area",
            }}
            rightImage={{
              src: "/images/scottsdale/DRC-MASSAGE-ROOM-NORTH-SCOTTSDALE-08-01-2024-August-01-202400003-2.jpg",
              alt: "Desert Recovery Centers Scottsdale massage room",
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
              DRC Scottsdale — Your Nearest Facility
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
              Close Enough for Your Family to Stay Involved
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Regular Family Visits",
                  desc: "At just 20 to 30 minutes from Paradise Valley, your spouse, parents, or children can participate in family therapy sessions and visit during designated hours without major disruption to their own routines.",
                },
                {
                  title: "Seamless Step-Down Care",
                  desc: "Transition from residential treatment to PHP or IOP at the same facility without relocating. Continuity with your clinical team improves outcomes and makes the adjustment smoother.",
                },
                {
                  title: "Privacy & Discretion",
                  desc: "Our north Scottsdale location offers the privacy that Paradise Valley residents value — a discreet, residential setting that looks and feels like a luxury home, not an institution.",
                },
                {
                  title: "Local Recovery Community",
                  desc: "Build connections with our alumni network right here in the Scottsdale area. Long-term recovery thrives on local support systems you can access long after treatment ends.",
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
              Conditions We Treat Near Paradise Valley
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
                { label: "Personality Disorders", href: "/mental-health/personality-disorder-treatment" },
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Prescription Drug Addiction", href: "/addiction/prescription-drugs" },
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
          question: "Is there a Desert Recovery Centers in Paradise Valley?",
          answer: "Desert Recovery Centers does not have a facility directly in Paradise Valley, but our Scottsdale location at 23222 N Church Rd is approximately 20 to 30 minutes away. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential, PHP, and IOP programs with mountain views and resort-level amenities.",
        },
        {
          question: "What addiction treatment is available near Paradise Valley, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment near Paradise Valley at our Scottsdale facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and holistic therapies — delivered by licensed psychologists and board-certified psychiatrists in a private, discreet setting.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Paradise Valley residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Paradise Valley residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (480) 931-3617 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
