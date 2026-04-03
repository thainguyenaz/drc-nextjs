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
  title: "Addiction Treatment Near Chandler, AZ",
  description:
    "Addiction treatment near Chandler, Arizona. Luxury residential rehab at DRC Phoenix, a short drive away. Call (623) 257-5384.",
  path: "/locations/chandler",
});

const faqs = [
  {
    q: "Does Desert Recovery Centers have a location in Chandler?",
    a: "We do not have a facility in Chandler, but our Phoenix location at 1623 W Moody Trail is approximately 25 to 35 minutes from most Chandler neighborhoods — making it the closest DRC facility and a convenient option for Chandler residents seeking luxury residential treatment.",
  },
  {
    q: "What types of treatment do you offer for Chandler residents?",
    a: "Our Phoenix facility offers residential treatment and outpatient programs for substance use disorders and mental health conditions. We specialize in dual diagnosis treatment, addressing conditions like alcohol addiction, opioid dependence, anxiety, depression, and PTSD simultaneously for the best possible outcomes.",
  },
  {
    q: "Do you accept insurance for Chandler residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team will check your coverage at no cost before you begin treatment.",
  },
  {
    q: "What makes the Phoenix facility a good fit for Chandler families?",
    a: "Our Phoenix location offers expanded holistic programming, unique amenities like a movie theater and pool with waterfall, and a luxury home-like environment — all within driving distance for regular family visits. The proximity means your family can participate in therapy sessions and visiting hours without significant travel burden.",
  },
  {
    q: "How quickly can someone from Chandler start treatment?",
    a: "Most clients begin treatment within 48 hours of their first call. Our admissions team is available 24/7 and handles insurance verification, clinical assessment, and intake coordination rapidly. When you're ready, we make the process as smooth as possible.",
  },
];

export default function ChandlerPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/chandler" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Chandler, Arizona"
        title="Addiction Treatment Near Chandler, Arizona"
        description="Luxury residential rehab is closer than you think. Doctoral-level addiction and mental health care a short drive from Chandler."
        bgImage="/images/general/accom-backyard.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Chandler Residents Have Access to World-Class Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;re searching for addiction or mental health treatment near Chandler, Desert Recovery Centers&apos; Phoenix facility is approximately 25 to 35 minutes away at 1623 W Moody Trail. While we don&apos;t have a Chandler location, our Phoenix center is the nearest DRC facility — and it delivers the kind of care that most people travel across the country to find.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix location combines doctoral-level clinical care — licensed psychologists, board-certified psychiatrists, and a dedicated nursing team — with expanded holistic programming and luxury amenities. It&apos;s a residential setting designed to feel like a high-end home, not a hospital, because healing happens faster when you feel genuinely comfortable and cared for.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you&apos;re dealing with alcohol, opioids, stimulants, prescription drugs, or a co-occurring mental health condition, our dual diagnosis approach treats everything together. That&apos;s what sets DRC apart from generic programs.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/general/accom-group-room.jpg",
              alt: "Desert Recovery Centers group therapy room",
            }}
            rightImage={{
              src: "/images/general/accom-backyard.jpg",
              alt: "Desert Recovery Centers outdoor area with pool",
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
              DRC Phoenix — 25 to 35 Minutes From Chandler
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
              Why Chandler Families Choose DRC Phoenix
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Manageable Distance for Family",
                  desc: "At 25 to 35 minutes from Chandler, your family can attend therapy sessions, join visiting hours, and stay actively involved in your recovery — which research shows significantly improves outcomes.",
                },
                {
                  title: "No Travel, No Delays",
                  desc: "You don't need to book flights or arrange long-distance logistics. Our proximity to Chandler means you can start treatment quickly — most clients begin within 48 hours of their first call.",
                },
                {
                  title: "Expanded Holistic Care",
                  desc: "Our Phoenix location specializes in holistic programming — art therapy, yoga, mindfulness, and unique amenities like a movie theater — complementing clinical therapies for whole-person healing.",
                },
                {
                  title: "Local Aftercare Network",
                  desc: "When treatment ends, your recovery continues. Our alumni network and aftercare resources in the Phoenix metro area keep you connected to support right here in the East Valley.",
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
              Conditions We Treat Near Chandler
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine-addiction-treatment" },
                { label: "Meth Addiction", href: "/addiction/meth-addiction-treatment" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "OCD", href: "/mental-health/ocd-treatment" },
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
          question: "Is there a Desert Recovery Centers in Chandler?",
          answer: "Desert Recovery Centers does not have a facility directly in Chandler, but our Phoenix location at 1623 W Moody Trail is approximately 25 to 35 minutes away. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential and outpatient programs with doctoral-level clinicians, making it the closest DRC facility for Chandler residents.",
        },
        {
          question: "What addiction treatment is available near Chandler, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment near Chandler at our Phoenix facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based therapies including CBT, DBT, EMDR, and dual diagnosis treatment for co-occurring conditions — all delivered by licensed psychologists and board-certified psychiatrists.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Chandler residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Chandler residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 257-5384 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
