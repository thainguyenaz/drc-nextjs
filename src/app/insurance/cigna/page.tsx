import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Does Cigna Cover Drug & Alcohol Rehab in Arizona?, Desert Recovery Centers",
  description:
    "Find out if Cigna insurance covers addiction treatment and rehab in Arizona. Learn about in-network benefits, levels of care, and how to verify your coverage.",
  path: "/insurance/cigna",
});

const faqs = [
  {
    q: "Does Cigna cover inpatient rehab for drug and alcohol addiction?",
    a: "Most Cigna plans include coverage for inpatient (residential) substance abuse treatment when it is deemed medically necessary. The extent of coverage depends on your specific plan, including factors like your deductible, copay, and whether the facility is in-network. Contact our admissions team at (480) 931-3617 to verify your specific Cigna benefits.",
  },
  {
    q: "Does Cigna insurance cover treatment at Desert Recovery Centers?",
    a: "Desert Recovery Centers is out-of-network with Cigna. However, many out-of-network plans provide significant coverage for our level of care, and our admissions team will verify your specific benefits at no cost and walk you through what your coverage looks like. We are in-network with TriCare and TriWest, and offer cash-pay options. Call (480) 931-3617 for a free, confidential benefits verification.",
  },
  {
    q: "How much will I pay out of pocket with Cigna insurance?",
    a: "Out-of-pocket costs vary depending on your plan&apos;s deductible, copay or coinsurance percentages, and whether you have met your annual out-of-pocket maximum. We never want cost to be a barrier to treatment, which is why our team works directly with Cigna to help you understand your financial responsibility before admission.",
  },
  {
    q: "Does Cigna require prior authorization for rehab?",
    a: "Many Cigna plans do require prior authorization before beginning residential or intensive outpatient treatment. Our admissions team handles the prior authorization process on your behalf, working directly with Cigna to obtain approval so you can focus on getting well rather than navigating insurance paperwork.",
  },
  {
    q: "What if my Cigna plan denies coverage for treatment?",
    a: "If your initial request is denied, it does not necessarily mean you cannot receive treatment. Our team is experienced in working with Cigna&apos;s appeals process and can advocate on your behalf. We also help explore alternative payment options and financial assistance to ensure you can access the care you need.",
  },
];

export default function CignaInsurancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Insurance", path: "/insurance" },
          { name: "Cigna", path: "/insurance/cigna" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Insurance Verification"
        title="Does Cigna Cover Drug and Alcohol Rehab in Arizona?"
        description="If you have Cigna insurance and are searching for addiction treatment in Arizona, the answer is most likely yes, with some important details to understand first."
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

      {/* Cigna Behavioral Health Coverage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              How Cigna Covers Behavioral Health and Addiction Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Cigna is one of the largest health insurance providers in the United States, and the majority of Cigna plans include behavioral health benefits that cover substance abuse and addiction treatment. Under the Mental Health Parity and Addiction Equity Act, Cigna is required to provide addiction treatment coverage that is comparable to coverage for medical and surgical conditions.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              This means that if you carry a Cigna plan, whether through your employer, the Health Insurance Marketplace, or a private policy, you likely have coverage for drug and alcohol rehab. However, the specifics of that coverage, including which facilities are in-network, how many days are approved, and what your out-of-pocket costs will be, depend entirely on the details of your individual plan.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              That&apos;s why we encourage you to call our admissions team at{" "}
              <a href="tel:+14809313617" className="text-gold-dark font-semibold hover:underline">(480) 931-3617</a>
              . We verify your Cigna benefits at no cost and walk you through exactly what your plan covers before you make any decisions.
            </p>
          </div>
        </div>
      </section>

      {/* In-Network vs Out-of-Network */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Understanding Your Plan
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              In-Network vs. Out-of-Network Coverage with Cigna
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              One of the biggest factors affecting your rehab coverage is whether the treatment facility is in-network or out-of-network with your Cigna plan. Here&apos;s what that means for you:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  In-Network Benefits
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When you receive treatment at an in-network facility, Cigna has pre-negotiated rates with the provider. This typically means lower out-of-pocket costs, including reduced copays and coinsurance. Your deductible also tends to be lower for in-network care.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Out-of-Network Benefits
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Many Cigna plans also offer out-of-network benefits, though at a higher cost to you. If Desert Recovery Centers is out-of-network with your specific plan, you may still receive substantial coverage, our team can help you understand the difference and explore options to minimize your financial responsibility.
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
              What Levels of Care Does Cigna Typically Cover?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Cigna plans generally provide coverage across the full continuum of addiction treatment, including:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Medical Detoxification",
                  desc: "Medically supervised detox to safely manage withdrawal symptoms. Cigna typically covers detox as a medically necessary first step in addiction treatment.",
                },
                {
                  title: "Residential Treatment",
                  desc: "24/7 inpatient care in a structured therapeutic environment. Coverage duration depends on medical necessity as determined through Cigna\u0027s utilization review process.",
                },
                {
                  title: "Partial Hospitalization Program (PHP)",
                  desc: "Intensive day treatment typically involving 5-6 hours of programming daily. PHP serves as a step-down from residential or a higher level of outpatient care.",
                },
                {
                  title: "Intensive Outpatient Program (IOP)",
                  desc: "Structured treatment sessions several times per week, allowing you to maintain work or family obligations while receiving comprehensive care.",
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
              How to Verify Your Cigna Benefits in 3 Simple Steps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We handle the insurance verification for you, there&apos;s no need to navigate this alone. Here&apos;s how it works:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Call Our Admissions Team",
                  desc: "Reach us at (480) 931-3617. Our team is available to take your call and begin the process immediately.",
                },
                {
                  step: "2",
                  title: "We Verify Your Benefits",
                  desc: "We contact Cigna directly, confirm your coverage details, and determine what levels of care are approved under your specific plan.",
                },
                {
                  step: "3",
                  title: "Review Your Options",
                  desc: "We walk you through your coverage, explain any out-of-pocket costs, and help you make an informed decision about treatment.",
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
              Why Choose DRC for Cigna-Covered Rehab in Arizona
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers provides clinically excellent addiction treatment across three Arizona locations. When you choose DRC, you benefit from:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Experienced admissions team that handles all Cigna verification and prior authorization",
                "Evidence-based treatment including CBT, DBT, EMDR, and trauma-informed care",
                "Dual diagnosis expertise for co-occurring mental health conditions",
                "Luxury residential facilities in Scottsdale and Glendale, plus an outpatient center in Phoenix",
                "Small client-to-clinician ratios for personalized attention",
                "Comprehensive aftercare planning to support long-term recovery",
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
              Coverage varies by plan. Contact us to verify your benefits. The information on this page is intended for general informational purposes only and does not guarantee coverage or payment for any specific treatment. Insurance benefits are determined by your individual plan and are subject to change. Desert Recovery Centers is not affiliated with Cigna. Please call our admissions team at{" "}
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
