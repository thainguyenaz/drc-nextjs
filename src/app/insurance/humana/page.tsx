import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Does Humana Cover Drug & Alcohol Rehab in Arizona?, Desert Recovery Centers",
  description:
    "Find out if Humana covers addiction treatment in Arizona. Learn about behavioral health benefits, Medicare Advantage coverage, and how to verify your Humana plan.",
  path: "/insurance/humana",
});

const faqs = [
  {
    q: "Does Humana insurance cover treatment at Desert Recovery Centers?",
    a: "Desert Recovery Centers is out-of-network with Humana. However, many out-of-network plans provide significant coverage for our level of care, and our admissions team will verify your specific benefits at no cost and walk you through what your coverage looks like. We are in-network with TriCare and TriWest, and offer cash-pay options. Call (480) 931-3617 for a free, confidential benefits verification.",
  },
  {
    q: "Does Humana cover residential rehab for substance abuse?",
    a: "Most Humana commercial and Marketplace plans include behavioral health benefits that cover residential substance abuse treatment when it is deemed medically necessary. Coverage details vary by plan type and benefit tier. Our admissions team can verify your specific Humana benefits at no cost, call (480) 931-3617 to get started.",
  },
  {
    q: "Does Humana Medicare Advantage cover drug and alcohol rehab?",
    a: "Humana Medicare Advantage plans generally include coverage for substance abuse treatment as part of their behavioral health benefits. Medicare requires coverage for medically necessary addiction treatment services including detox, inpatient rehab, and outpatient programs. Specific coverage details, copays, and prior authorization requirements vary by plan. Contact our team to verify your Humana Medicare Advantage benefits.",
  },
  {
    q: "Does Humana cover rehab for veterans or military families?",
    a: "Humana is one of the largest administrators of TRICARE, the military health program. If you have a Humana-administered TRICARE plan, you may have behavioral health benefits that cover addiction treatment. Humana also offers commercial plans to veterans and military families. Our team can help determine which Humana plan you carry and what it covers for substance abuse treatment.",
  },
  {
    q: "How does Humana decide what level of care to authorize?",
    a: "Humana uses clinical review criteria to determine the appropriate level of care based on the severity of your condition, medical and psychiatric comorbidities, prior treatment history, and your current living situation. Our clinical team provides comprehensive assessments and documentation to support authorization at the level of care best suited to your needs.",
  },
  {
    q: "What should I do if Humana denies my treatment request?",
    a: "If Humana issues a denial, it is not the end of the road. Our team is experienced in working through Humana\u0027s appeals process and can submit additional clinical documentation to support your case. Many initial denials are overturned on appeal. We advocate for our clients throughout the process to help ensure you receive the care you need.",
  },
];

export default function HumanaInsurancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Insurance", path: "/insurance" },
          { name: "Humana", path: "/insurance/humana" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Insurance Verification"
        title="Does Humana Cover Drug and Alcohol Rehab in Arizona?"
        description="Whether you carry Humana through your employer, the Marketplace, or a Medicare Advantage plan, you likely have benefits that can help cover addiction treatment in Arizona."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Insurance information reviewed by Desert Recovery Centers admissions team, updated April 2026
          </p>
        </div>
      </div>

      {/* Humana Coverage Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              How Humana Covers Behavioral Health and Addiction Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Humana is one of the largest health insurance providers in the United States, serving over 17 million members through commercial, Medicare Advantage, Medicaid, and military (TRICARE) plans. Humana&apos;s behavioral health benefits typically include coverage for substance use disorder treatment across multiple levels of care.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Under the Mental Health Parity and Addiction Equity Act, Humana is required to provide addiction treatment coverage comparable to coverage for medical and surgical conditions. This means that if your Humana plan covers hospital stays for physical health conditions, it must also cover residential treatment for addiction at a similar level.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Because Humana offers a wide range of plan types, each with different benefit structures, the best way to understand your coverage is to have it verified directly. Call our admissions team at{" "}
              <a href="tel:+14809313617" className="text-gold-dark font-semibold hover:underline">(480) 931-3617</a>
              {" "}and we will confirm your Humana benefits at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* Humana Plan Types */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Understanding Your Plan
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Humana Plan Types and Addiction Treatment Coverage
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Humana serves diverse populations through several distinct plan types, each with different coverage considerations:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Commercial and Employer-Sponsored Plans
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Humana&apos;s commercial plans, including those offered through employers, typically include behavioral health benefits covering the full continuum of addiction treatment. Coverage specifics, including deductibles, copays, and network restrictions, vary based on the plan your employer selected or the individual plan you purchased.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Medicare Advantage Plans
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Humana is one of the largest Medicare Advantage providers in the country. These plans are required to cover all services that Original Medicare covers, including substance abuse treatment. Many Humana Medicare Advantage plans offer additional behavioral health benefits beyond standard Medicare. Our team frequently works with Humana Medicare Advantage members and understands the specific coverage structures.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  TRICARE (Military Health Plans)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Humana Military, a subsidiary of Humana, administers TRICARE benefits for active-duty service members, veterans, and their families in the eastern United States. TRICARE provides comprehensive behavioral health coverage including substance abuse treatment. If you have a Humana-managed TRICARE plan, our admissions team can help verify your specific benefits and network requirements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  ACA Marketplace Plans
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Humana Marketplace plans are required under the Affordable Care Act to cover substance use disorder treatment as an essential health benefit. These plans must also comply with mental health parity requirements. Our team can verify your Marketplace plan details and help you understand your coverage before making any treatment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels of Care */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Treatment Options
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Levels of Care Does Humana Typically Cover?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Humana plans generally provide coverage for addiction treatment across multiple levels of care:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Medical Detoxification",
                  desc: "Medically supervised withdrawal management to safely stabilize your condition. Humana typically authorizes detox as a medically necessary acute service when clinical criteria are met.",
                },
                {
                  title: "Residential Treatment",
                  desc: "Immersive 24/7 inpatient care with structured clinical programming. Humana conducts utilization reviews during residential stays to confirm ongoing medical necessity for continued treatment.",
                },
                {
                  title: "Partial Hospitalization Program (PHP)",
                  desc: "Intensive day treatment offering a high level of clinical support, typically 5-6 hours of daily programming. PHP serves as an effective step-down from residential care or an alternative for clinically appropriate individuals.",
                },
                {
                  title: "Intensive Outpatient Program (IOP)",
                  desc: "Structured treatment sessions several times per week that provide comprehensive clinical care while allowing you to maintain daily responsibilities at home, work, or school.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Verify */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Getting Started
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How to Verify Your Humana Benefits in 3 Simple Steps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We handle the insurance verification for you, whether you have a commercial plan, Medicare Advantage, or TRICARE through Humana. Here&apos;s how it works:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Call Our Admissions Team",
                  desc: "Reach us at (480) 931-3617. Have your Humana member ID card ready if available, it helps us identify your plan type and benefits quickly.",
                },
                {
                  step: "2",
                  title: "We Verify Your Humana Benefits",
                  desc: "Our insurance specialists contact Humana directly to confirm your behavioral health coverage, network status, and any prior authorization requirements specific to your plan.",
                },
                {
                  step: "3",
                  title: "Make an Informed Decision",
                  desc: "We walk you through your coverage details in plain language, including what levels of care are covered, estimated costs, and next steps for beginning treatment.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <span className="inline-block w-10 h-10 rounded-full bg-gold/20 text-gold-dark font-display font-bold text-lg leading-10 mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DRC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Choose DRC for Humana-Covered Rehab in Arizona
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers delivers clinical excellence in a luxury healing environment, with an admissions team experienced across all Humana plan types:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Insurance team experienced with Humana commercial, Medicare Advantage, and TRICARE plans",
                "Evidence-based addiction treatment including CBT, DBT, EMDR, and trauma-informed approaches",
                "Dual diagnosis programs addressing co-occurring mental health conditions alongside addiction",
                "Three luxury residential facilities in Scottsdale, Phoenix, and Glendale, Arizona",
                "Low client-to-clinician ratios ensuring individualized, attentive care",
                "Robust aftercare planning and lifelong alumni support network",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="py-12 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm leading-relaxed text-center">
              Coverage varies by plan. Contact us to verify your benefits. The information on this page is intended for general informational purposes only and does not guarantee coverage or payment for any specific treatment. Insurance benefits are determined by your individual plan and are subject to change. Desert Recovery Centers is not affiliated with Humana or Humana Military. Please call our admissions team at{" "}
              <a href="tel:+14809313617" className="text-gold-dark font-semibold hover:underline">(480) 931-3617</a>{" "}
              for a complimentary benefits verification.
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
