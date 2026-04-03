import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Does Aetna Cover Drug & Alcohol Rehab in Arizona? — Desert Recovery Centers",
  description:
    "Learn if Aetna insurance covers addiction treatment in Arizona. Understand behavioral health benefits, prior authorization, and how to verify your Aetna coverage.",
  path: "/insurance/aetna",
});

const faqs = [
  {
    q: "Does Aetna cover residential rehab for addiction?",
    a: "Most Aetna plans include coverage for residential substance abuse treatment when deemed medically necessary. Aetna evaluates medical necessity using clinical criteria, and our admissions team works directly with Aetna to secure authorization for the appropriate level of care. Call us at (480) 931-3617 to verify your specific plan benefits.",
  },
  {
    q: "Does Aetna&apos;s Employee Assistance Program (EAP) cover rehab?",
    a: "Aetna EAP programs typically provide a limited number of free counseling sessions and can serve as a referral pathway to more comprehensive treatment. While EAP alone usually does not cover residential rehab, it can help initiate the process. Our team can help you understand how your EAP benefits coordinate with your broader Aetna health plan for full treatment coverage.",
  },
  {
    q: "How long will Aetna cover treatment at Desert Recovery Centers?",
    a: "The length of covered treatment depends on your plan and ongoing medical necessity reviews. Aetna uses a utilization review process where they periodically assess whether continued treatment is warranted. Our clinical team provides regular documentation to support continued stays when clinically appropriate. Coverage varies by plan — contact us to verify your benefits.",
  },
  {
    q: "Does Aetna require prior authorization before I can enter rehab?",
    a: "Yes, most Aetna plans require prior authorization for residential and intensive outpatient treatment. This process involves demonstrating that the requested level of care is medically necessary. Our admissions team manages the entire prior authorization process on your behalf, ensuring all required clinical documentation is submitted promptly.",
  },
  {
    q: "What if I have an Aetna plan through the ACA Marketplace?",
    a: "Aetna Marketplace plans are required under the Affordable Care Act to include essential health benefits, which encompass substance use disorder treatment. These plans must cover addiction treatment at parity with medical and surgical benefits. Our team can verify your specific Marketplace plan to determine your coverage details and any associated costs.",
  },
];

export default function AetnaInsurancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Insurance", path: "/insurance/aetna" },
          { name: "Aetna", path: "/insurance/aetna" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Insurance Verification"
        title="Does Aetna Cover Drug and Alcohol Rehab in Arizona?"
        description="Aetna is one of the most widely accepted insurance providers for addiction treatment. Here is what you need to know about using your Aetna benefits for rehab in Arizona."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Insurance information reviewed by Desert Recovery Centers admissions team — updated April 2026
          </p>
        </div>
      </div>

      {/* Aetna Behavioral Health Coverage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              How Aetna Covers Addiction and Behavioral Health Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Aetna provides behavioral health coverage through most of its commercial, employer-sponsored, and Marketplace plans. As one of the nation&apos;s leading insurers, Aetna is required under the Mental Health Parity and Addiction Equity Act to offer addiction treatment benefits comparable to those for physical health conditions.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Aetna has also invested significantly in behavioral health resources, including their Employee Assistance Programs (EAP), which can serve as a starting point for individuals seeking addiction treatment. Many Aetna members have access to comprehensive substance use disorder benefits that cover everything from detox through aftercare planning.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Because Aetna offers dozens of different plan types, the only way to know exactly what your plan covers is to verify your benefits directly. Call our admissions team at{" "}
              <a href="tel:+14809313617" className="text-gold-dark font-semibold hover:underline">(480) 931-3617</a>
              {" "}and we will confirm your coverage at no cost.
            </p>
          </div>
        </div>
      </section>

      {/* Prior Authorization & EAP */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Navigating Aetna
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Prior Authorization and Aetna&apos;s EAP Programs
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Two aspects of Aetna coverage that are important to understand before beginning treatment:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Prior Authorization Requirements
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Aetna typically requires prior authorization before residential or intensive outpatient treatment can begin. This means a clinical review must confirm that the requested level of care is medically necessary. Our admissions team handles this process entirely — gathering clinical documentation, submitting the request, and following up with Aetna until a determination is made.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Employee Assistance Programs (EAP)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Many employers offer Aetna EAP benefits that include a limited number of free counseling sessions and referral services. While EAP is not a substitute for comprehensive rehab, it can help you take the first step and may facilitate a smoother transition into a full treatment program. Our team can help you understand how your EAP and health plan benefits work together.
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
              What Levels of Care Does Aetna Typically Cover?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Aetna plans generally cover the full continuum of addiction treatment services, including:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Medical Detoxification",
                  desc: "Medically managed withdrawal in a supervised setting. Aetna recognizes detox as an essential first step and typically covers it when clinical criteria are met.",
                },
                {
                  title: "Residential Treatment",
                  desc: "Immersive, 24/7 inpatient care with structured therapeutic programming. Aetna authorizes residential stays based on ongoing medical necessity reviews conducted at regular intervals.",
                },
                {
                  title: "Partial Hospitalization Program (PHP)",
                  desc: "A structured day program offering intensive clinical services while allowing clients to return home or to a sober living environment in the evening.",
                },
                {
                  title: "Intensive Outpatient Program (IOP)",
                  desc: "Flexible treatment sessions multiple times per week, designed for clients stepping down from higher levels of care or those who need treatment that accommodates work and family schedules.",
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
              How to Verify Your Aetna Benefits in 3 Simple Steps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              You do not need to call Aetna yourself or spend hours deciphering your plan documents. We handle the insurance verification for you — here&apos;s how:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Call Our Admissions Team",
                  desc: "Reach us at (480) 931-3617. Have your Aetna member ID card handy if possible, though it is not required to get started.",
                },
                {
                  step: "2",
                  title: "We Contact Aetna Directly",
                  desc: "Our insurance specialists verify your behavioral health benefits, confirm authorization requirements, and determine your coverage for each level of care.",
                },
                {
                  step: "3",
                  title: "Understand Your Coverage",
                  desc: "We present your benefits in clear, straightforward terms — including any deductibles, copays, and estimated out-of-pocket costs — so you can make an informed decision.",
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
              Why Choose DRC for Aetna-Covered Rehab in Arizona
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers combines clinical excellence with a compassionate, personalized approach to addiction treatment. For Aetna members, we offer:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Dedicated insurance team experienced with Aetna prior authorization and utilization reviews",
                "Evidence-based therapies including CBT, DBT, EMDR, and trauma-informed care",
                "Dual diagnosis treatment for co-occurring anxiety, depression, PTSD, and other conditions",
                "Three luxury residential locations across the Phoenix metropolitan area",
                "Individualized treatment plans with low client-to-clinician ratios",
                "Comprehensive discharge planning and alumni support for sustained recovery",
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
              Coverage varies by plan. Contact us to verify your benefits. The information on this page is intended for general informational purposes only and does not guarantee coverage or payment for any specific treatment. Insurance benefits are determined by your individual plan and are subject to change. Desert Recovery Centers is not affiliated with Aetna. Please call our admissions team at{" "}
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
