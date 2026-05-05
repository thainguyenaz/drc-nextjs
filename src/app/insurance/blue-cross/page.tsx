import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Does Blue Cross Blue Shield Cover Rehab in Arizona?, Desert Recovery Centers",
  description:
    "Learn if BCBS covers drug and alcohol rehab in Arizona. Understand PPO vs HMO plans, BCBS of Arizona benefits, and how to verify your coverage for treatment.",
  path: "/insurance/blue-cross",
});

const faqs = [
  {
    q: "Does Blue Cross Blue Shield of Arizona cover addiction treatment?",
    a: "Blue Cross Blue Shield of Arizona (BCBSAZ) plans typically include behavioral health benefits that cover substance abuse treatment. As a local BCBS affiliate, BCBSAZ maintains its own provider network for Arizona residents. Coverage specifics depend on your plan type and benefit tier. Call us at (480) 931-3617 to verify your BCBSAZ benefits at no cost.",
  },
  {
    q: "Can I use an out-of-state BCBS plan for rehab in Arizona?",
    a: "Yes, in many cases you can. Blue Cross Blue Shield operates a national network called the BlueCard Program, which allows members of one BCBS affiliate to access providers in another state. If you hold a BCBS plan from outside Arizona, our team can verify whether your specific plan provides coverage for treatment at our Arizona facilities.",
  },
  {
    q: "What is the difference between BCBS PPO and HMO for rehab coverage?",
    a: "PPO plans generally offer more flexibility, allowing you to see out-of-network providers at a higher cost share. HMO plans typically require you to stay within a specific network and may require referrals from a primary care physician. PPO plans often provide broader access to residential treatment facilities. Our team can help clarify which type of plan you have and what it covers.",
  },
  {
    q: "Does my federal BCBS plan (FEP) cover rehab?",
    a: "The Federal Employee Program (FEP) Blue Cross Blue Shield plan provides broad behavioral health benefits, including substance abuse treatment. FEP plans are known for offering strong mental health and addiction coverage. Our admissions team is experienced in working with FEP plans and can verify your specific benefits quickly.",
  },
  {
    q: "How many days of rehab will BCBS cover?",
    a: "The number of covered days varies by plan and is determined through medical necessity reviews. BCBS conducts utilization reviews at regular intervals during treatment to assess whether continued care is warranted. Our clinical team provides thorough documentation to support authorization for the full duration of treatment your condition requires. Coverage varies by plan, contact us to verify your benefits.",
  },
];

export default function BlueCrossInsurancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Insurance", path: "/insurance" },
          { name: "Blue Cross Blue Shield", path: "/insurance/blue-cross" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Insurance Verification"
        title="Does Blue Cross Blue Shield Cover Rehab in Arizona?"
        description="Blue Cross Blue Shield is the most widely held insurance in America. If you carry a BCBS plan, you likely have behavioral health benefits that can help cover addiction treatment."
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

      {/* BCBS Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Understanding Blue Cross Blue Shield Coverage for Rehab
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Blue Cross Blue Shield (BCBS) is a federation of 34 independent companies that together insure more than 115 million Americans. Because of this structure, BCBS coverage for addiction treatment can vary significantly depending on which affiliate issued your plan, whether it&apos;s an employer-sponsored or individual policy, and what benefit tier you selected.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The good news is that under the Mental Health Parity and Addiction Equity Act and the Affordable Care Act, virtually all BCBS plans are required to include substance use disorder treatment as an essential health benefit. This means your plan almost certainly provides some level of coverage for drug and alcohol rehab.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The question is not usually whether you have coverage, it&apos;s understanding the details. That&apos;s where we come in. Call our admissions team at{" "}
              <a href="tel:+14809313617" className="text-gold-dark font-semibold hover:underline">(480) 931-3617</a>
              {" "}and we will verify your BCBS benefits completely free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* BCBS Plan Types */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Plan Considerations
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              BCBS Plan Types and What They Mean for Rehab Coverage
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              BCBS offers several plan types, each with different implications for addiction treatment coverage:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  PPO Plans (Preferred Provider Organization)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PPO plans offer the greatest flexibility for rehab coverage. You can typically access both in-network and out-of-network providers without a referral. While in-network care costs less, you still receive meaningful coverage for out-of-network treatment, making PPO plans ideal for accessing specialized addiction facilities.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  HMO Plans (Health Maintenance Organization)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  HMO plans generally require you to use in-network providers and may require a referral from your primary care physician before beginning treatment. Coverage for out-of-network facilities is typically limited. DRC is out-of-network with BCBS commercial plans (we are in-network with TriCare and TriWest). For BCBS HMO members, that typically means out-of-network coverage is limited. Our team will verify your specific benefits at no cost.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Federal Employee Program (FEP)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The BCBS Federal Employee Program covers millions of federal workers and retirees. FEP plans are known for strong behavioral health benefits and typically provide broad coverage for substance abuse treatment, including residential, PHP, and IOP levels of care.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  BCBS of Arizona (Local Plans)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you are an Arizona resident with a BCBSAZ plan, you may benefit from local network arrangements that can reduce your out-of-pocket costs for treatment at Arizona-based facilities. Our admissions team is well-versed in BCBSAZ plan structures and can quickly clarify your benefits.
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
              What Levels of Care Does BCBS Typically Cover?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Most Blue Cross Blue Shield plans provide coverage across the full spectrum of addiction treatment:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Medical Detoxification",
                  desc: "Medically supervised withdrawal management to safely manage withdrawal symptoms. BCBS typically covers detox as a medically necessary acute service.",
                },
                {
                  title: "Residential Treatment",
                  desc: "Round-the-clock inpatient care in a structured therapeutic community. BCBS authorizes residential stays based on clinical criteria and periodic utilization reviews.",
                },
                {
                  title: "Partial Hospitalization Program (PHP)",
                  desc: "Intensive day treatment with 5-6 hours of daily programming, providing a step-down from residential care while maintaining a high level of clinical support.",
                },
                {
                  title: "Intensive Outpatient Program (IOP)",
                  desc: "Structured treatment sessions several times per week that allow you to live at home or in sober living while receiving evidence-based addiction care.",
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
              How to Verify Your BCBS Benefits in 3 Simple Steps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              With so many BCBS plan variations, verifying your benefits on your own can feel overwhelming. We handle the insurance verification for you, call our admissions team and let us do the work:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Call Our Admissions Team",
                  desc: "Reach us at (480) 931-3617. If you have your BCBS member ID card available, that helps us get started faster, but it is not required.",
                },
                {
                  step: "2",
                  title: "We Verify with Your BCBS Affiliate",
                  desc: "We identify which BCBS affiliate issued your plan, verify your behavioral health benefits, and confirm coverage for each level of care we offer.",
                },
                {
                  step: "3",
                  title: "Get a Clear Picture",
                  desc: "We explain your benefits in plain language, what is covered, what your estimated costs will be, and what steps are needed to begin treatment.",
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
              Why Choose DRC for BCBS-Covered Rehab in Arizona
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers offers premium addiction treatment across three Arizona locations, with an admissions team experienced in navigating BCBS plans of all types:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Insurance specialists experienced with BCBS affiliates nationwide and BCBS of Arizona",
                "DRC residential treatment through IOP and aftercare, with detox coordinated at trusted partner facilities",
                "Evidence-based treatment including CBT, DBT, EMDR, and holistic therapies",
                "Dual diagnosis programs for co-occurring mental health and substance use disorders",
                "Luxury residential facilities in Scottsdale and Glendale, plus an outpatient center in Phoenix",
                "Personalized treatment with small client-to-clinician ratios and 24/7 clinical support",
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
              Coverage varies by plan. Contact us to verify your benefits. The information on this page is intended for general informational purposes only and does not guarantee coverage or payment for any specific treatment. Insurance benefits are determined by your individual plan and the BCBS affiliate that issued it. Desert Recovery Centers is not affiliated with Blue Cross Blue Shield. Please call our admissions team at{" "}
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
