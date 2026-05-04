import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Does United Healthcare Cover Rehab in Arizona?, Desert Recovery Centers",
  description:
    "Find out if UHC covers drug and alcohol rehab in Arizona. Learn about Optum behavioral health, medical necessity criteria, and how to verify your UHC benefits.",
  path: "/insurance/united",
});

const faqs = [
  {
    q: "Does UnitedHealthcare insurance cover treatment at Desert Recovery Centers?",
    a: "Desert Recovery Centers is out-of-network with UnitedHealthcare. However, many out-of-network plans provide significant coverage for our level of care, and our admissions team will verify your specific benefits at no cost and walk you through what your coverage looks like. We are in-network with TriCare and TriWest, and offer cash-pay options. Call (480) 931-3617 for a free, confidential benefits verification.",
  },
  {
    q: "Does United Healthcare cover inpatient drug rehab?",
    a: "Most United Healthcare plans include coverage for inpatient substance abuse treatment when it meets UHC\u0027s medical necessity criteria. UHC uses clinical guidelines managed through Optum to determine the appropriate level of care. Our admissions team works directly with Optum to secure authorization for treatment. Call (480) 931-3617 to verify your specific benefits.",
  },
  {
    q: "What is Optum and how does it affect my UHC rehab coverage?",
    a: "Optum is United Healthcare\u0027s behavioral health management company. When you seek addiction treatment under a UHC plan, Optum handles the clinical review process, including prior authorization and utilization management. Our team is experienced in working with Optum\u0027s specific requirements and documentation standards to help ensure your treatment is approved.",
  },
  {
    q: "Does my employer-sponsored UHC plan cover rehab differently than a Marketplace plan?",
    a: "Yes, there can be significant differences. Employer-sponsored plans vary widely based on what the employer selected during plan design. Some offer generous behavioral health benefits while others have more restrictions. ACA Marketplace UHC plans are required to include substance use disorder coverage as an essential health benefit. Either way, our team can verify your exact coverage.",
  },
  {
    q: "How does UHC determine medical necessity for addiction treatment?",
    a: "UHC, through Optum, uses established clinical criteria (similar to ASAM guidelines) to evaluate whether a specific level of care is medically necessary. Factors considered include the severity of your substance use, co-occurring medical or psychiatric conditions, previous treatment history, and your living environment. Our clinical team documents these factors thoroughly to support your authorization.",
  },
  {
    q: "What if United Healthcare only approves a shorter stay than recommended?",
    a: "If UHC initially authorizes fewer days than our clinical team recommends, we conduct concurrent reviews throughout your treatment to demonstrate ongoing medical necessity. Our team submits updated clinical documentation at each review point to support continued authorization. If a determination is unfavorable, we assist with the appeals process on your behalf.",
  },
];

export default function UnitedInsurancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Insurance", path: "/insurance" },
          { name: "United Healthcare", path: "/insurance/united" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Insurance Verification"
        title="Does United Healthcare Cover Rehab in Arizona?"
        description="United Healthcare insures more Americans than any other company. If you carry a UHC plan, here is how your benefits can help cover addiction treatment at Desert Recovery Centers."
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

      {/* UHC Coverage Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              How United Healthcare Covers Addiction Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              United Healthcare (UHC) is the largest health insurance company in the United States, covering more than 50 million members through employer-sponsored, individual, Medicare, and Medicaid plans. The vast majority of UHC plans include behavioral health benefits that cover substance use disorder treatment.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              UHC manages its behavioral health benefits through Optum, a subsidiary that oversees clinical reviews, prior authorizations, and network management for mental health and addiction services. Understanding how Optum operates is key to navigating your UHC coverage, and it&apos;s something our admissions team does every day.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Rather than spending hours on hold with UHC or Optum, let our team verify your benefits for you. Call{" "}
              <a href="tel:+14809313617" className="text-gold-dark font-semibold hover:underline">(480) 931-3617</a>
              {" "}and we will have a clear picture of your coverage within hours.
            </p>
          </div>
        </div>
      </section>

      {/* Optum and Medical Necessity */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              How UHC Works
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Optum Behavioral Health and Medical Necessity Criteria
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Two key aspects of UHC coverage that are important to understand:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  The Optum Network
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Optum manages UHC&apos;s behavioral health provider network and handles all clinical authorizations for substance abuse treatment. When you seek addiction care under a UHC plan, Optum reviews the clinical information to determine whether treatment is authorized and at what level of care. Our admissions team communicates directly with Optum and understands their specific documentation requirements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Medical Necessity Determinations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UHC requires that addiction treatment meet medical necessity criteria before coverage is approved. These criteria consider the severity of your condition, risk of withdrawal complications, co-occurring disorders, and previous treatment outcomes. Our clinical team conducts thorough assessments and provides detailed documentation to support authorization at the appropriate level of care.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  Employer-Sponsored vs. Marketplace Plans
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UHC employer-sponsored plans vary based on the benefit package selected by your employer. Some offer robust behavioral health coverage while others may have higher cost-sharing requirements. UHC Marketplace plans purchased through the ACA exchange are required to include substance use disorder treatment as an essential health benefit, often with strong parity protections.
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
              What Levels of Care Does United Healthcare Typically Cover?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              UHC plans generally cover the full continuum of addiction treatment when medical necessity criteria are met:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Medical Detoxification",
                  desc: "Medically supervised detox to safely manage withdrawal. UHC typically covers detox as an acute medical service, often with fewer authorization hurdles than other levels of care.",
                },
                {
                  title: "Residential Treatment",
                  desc: "Comprehensive inpatient care with 24/7 clinical supervision. UHC authorizes residential treatment through Optum, with concurrent reviews typically occurring every 3-7 days to assess ongoing medical necessity.",
                },
                {
                  title: "Partial Hospitalization Program (PHP)",
                  desc: "Intensive structured treatment during the day, offering a clinical intensity close to residential care while allowing you to return to a supportive living environment each evening.",
                },
                {
                  title: "Intensive Outpatient Program (IOP)",
                  desc: "Flexible treatment sessions multiple times per week, designed to maintain therapeutic momentum while accommodating work, school, or family commitments.",
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
              How to Verify Your UHC Benefits in 3 Simple Steps
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Navigating UHC and Optum on your own can be confusing. We handle the insurance verification for you, here&apos;s what to expect:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Call Our Admissions Team",
                  desc: "Reach us at (480) 931-3617. If you have your UHC member ID card available, that helps speed up the process.",
                },
                {
                  step: "2",
                  title: "We Work with Optum",
                  desc: "Our insurance specialists contact Optum directly to verify your behavioral health benefits, confirm network status, and initiate prior authorization if needed.",
                },
                {
                  step: "3",
                  title: "Know Your Options",
                  desc: "We explain your coverage in clear terms, including deductibles, copays, authorized levels of care, and any estimated out-of-pocket costs.",
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
              Why Choose DRC for UHC-Covered Rehab in Arizona
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers provides clinically rigorous addiction treatment with an admissions team that understands the UHC and Optum authorization process inside and out:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Admissions team experienced with Optum\u0027s authorization and concurrent review process",
                "Clinical documentation standards that support medical necessity at every review point",
                "Evidence-based treatment including CBT, DBT, EMDR, and medication-assisted treatment",
                "Dual diagnosis expertise for co-occurring depression, anxiety, PTSD, and bipolar disorder",
                "Two premium residential facilities in the Phoenix metro area (Glendale and Scottsdale), plus an outpatient center in Phoenix",
                "Comprehensive aftercare planning and alumni support network",
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
              Coverage varies by plan. Contact us to verify your benefits. The information on this page is intended for general informational purposes only and does not guarantee coverage or payment for any specific treatment. Insurance benefits are determined by your individual plan and are subject to change. Desert Recovery Centers is not affiliated with United Healthcare or Optum. Please call our admissions team at{" "}
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
