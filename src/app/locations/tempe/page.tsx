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
  title: "Addiction Treatment Near Tempe, AZ",
  description:
    "Addiction treatment near Tempe, Arizona. Luxury residential rehab at DRC Phoenix, minutes away. Call (623) 257-5384 today.",
  path: "/locations/tempe",
});

const faqs = [
  {
    q: "How far is Desert Recovery Centers from Tempe?",
    a: "Our Phoenix facility at 1623 W Moody Trail is approximately 15 to 25 minutes from most Tempe neighborhoods. It's the closest DRC location to Tempe residents, offering residential and outpatient programs with expanded holistic programming.",
  },
  {
    q: "What makes the Phoenix facility unique?",
    a: "Our Phoenix location features distinctive amenities including a movie theater, pool with waterfall, gym, and massage room — along with expanded holistic programming that includes art therapy, yoga, mindfulness meditation, and nutritional counseling. It's a 5,500-square-foot facility designed for comfort and deep healing.",
  },
  {
    q: "Do you accept insurance for Tempe residents?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost.",
  },
  {
    q: "Can college students get treatment at DRC?",
    a: "Absolutely. We treat adults of all ages, including college students. Our admissions team can work with you or your family to navigate insurance, academic considerations, and the admissions process. The proximity to Tempe means family support can remain consistent throughout treatment.",
  },
  {
    q: "Do you treat both addiction and mental health conditions?",
    a: "Yes — dual diagnosis treatment is our specialty. We treat substance use disorders alongside co-occurring conditions like anxiety, depression, PTSD, bipolar disorder, and ADHD simultaneously. Research shows that integrated treatment leads to significantly better long-term outcomes than treating conditions separately.",
  },
];

export default function TempePage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/tempe" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Tempe, Arizona"
        title="Addiction Treatment Near Tempe, Arizona"
        description="Luxury residential rehab just minutes from Tempe. Evidence-based care with doctoral-level clinicians in a setting designed for healing."
        bgImage="/images/general/accom-backyard.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Tempe Residents Deserve Accessible, Quality Care
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;re searching for addiction or mental health treatment near Tempe, Desert Recovery Centers&apos; Phoenix facility is just 15 to 25 minutes away at 1623 W Moody Trail. You don&apos;t need to leave the Valley to access the caliber of care you deserve.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix location offers residential and outpatient programs with an expanded focus on holistic healing — combining evidence-based clinical therapies with wellness programming that addresses mind, body, and spirit. Licensed psychologists, board-certified psychiatrists, and a dedicated nursing team provide around-the-clock care in a luxury residential setting.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you&apos;re a working professional, a college student, or a family member watching someone you love struggle, we&apos;re here to help — and we&apos;re closer than you think.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/general/accom-gym.jpg",
              alt: "Desert Recovery Centers gym facility",
            }}
            rightImage={{
              src: "/images/general/accom-massage.jpg",
              alt: "Desert Recovery Centers massage room",
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
              DRC Phoenix — 15 to 25 Minutes From Tempe
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
              The Benefits of Treatment Near Home
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Close to Your Support System",
                  desc: "Family and friends in Tempe can visit regularly, participate in family therapy, and remain actively involved in your recovery — one of the strongest predictors of long-term success.",
                },
                {
                  title: "Seamless Outpatient Transition",
                  desc: "Step down from residential care to outpatient programming at the same Phoenix facility. No relocation, no gap in care — just continued support as you rebuild your daily life.",
                },
                {
                  title: "Expanded Holistic Programming",
                  desc: "Our Phoenix location features enhanced holistic offerings including art therapy, yoga, mindfulness, and a movie theater for therapeutic recreation — addressing healing from every angle.",
                },
                {
                  title: "Local Recovery Community",
                  desc: "Build connections with our alumni network in the Phoenix metro area. Local support groups and community resources make sustained recovery achievable long after treatment ends.",
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
              Conditions We Treat Near Tempe
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine" },
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
          question: "Is there a Desert Recovery Centers in Tempe?",
          answer: "Desert Recovery Centers does not have a facility directly in Tempe, but our Phoenix location at 1623 W Moody Trail is approximately 15 to 25 minutes away. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential and outpatient programs with expanded holistic programming.",
        },
        {
          question: "What addiction treatment is available near Tempe, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment near Tempe at our Phoenix facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and holistic therapies — delivered by licensed psychologists and board-certified psychiatrists in a luxury setting with a movie theater and pool.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Tempe residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Tempe residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 257-5384 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
