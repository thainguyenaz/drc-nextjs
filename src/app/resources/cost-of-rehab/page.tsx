import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How Much Does Rehab Cost in Arizona?, Desert Recovery Centers",
  description:
    "Honest breakdown of rehab costs in Arizona, from outpatient to luxury residential. Learn about insurance coverage, financing options, and what affects pricing.",
  path: "/resources/cost-of-rehab",
});

const faqs = [
  {
    q: "How much does 30 days of rehab cost in Arizona?",
    a: "The cost of a 30-day rehab program in Arizona varies widely depending on the level of care. Standard outpatient programs may cost a few thousand dollars, while intensive outpatient (IOP) and partial hospitalization (PHP) programs typically range from $5,000 to $15,000. Residential treatment generally ranges from $15,000 to $40,000, and luxury residential programs can range from $30,000 to $80,000 or more. Insurance often covers a significant portion of these costs.",
  },
  {
    q: "Does insurance cover rehab in Arizona?",
    a: "Yes, most health insurance plans are required to cover substance abuse and mental health treatment under the Mental Health Parity and Addiction Equity Act. This includes employer-sponsored plans, ACA marketplace plans, and many others. Coverage specifics, including deductibles, copays, and approved lengths of stay, vary by plan. Contact your provider or reach out to Desert Recovery Centers for a free insurance verification.",
  },
  {
    q: "What if I don&apos;t have insurance for rehab?",
    a: "If you don&apos;t have adequate insurance, options still exist. Many treatment centers offer self-pay rates, payment plans, or financing arrangements. Some facilities accept sliding-scale fees based on income. Additionally, state-funded programs and nonprofit organizations may provide low-cost or free treatment options in Arizona. DRC can help you explore available options during our admissions process.",
  },
  {
    q: "Is luxury rehab covered by insurance?",
    a: "Insurance plans typically cover the clinical components of treatment regardless of the facility type. This means the therapy, psychiatric care, medical monitoring, and clinical services at a luxury facility may be covered similarly to those at a standard facility. The difference in out-of-pocket cost often relates to amenities and room accommodations. Many DRC clients are surprised by how much their insurance covers. Coverage varies by plan, contact us to verify your benefits.",
  },
  {
    q: "How does Desert Recovery Centers handle payment?",
    a: "DRC handles insurance verification on your behalf before admission, so you understand your coverage and potential out-of-pocket costs upfront. We work with all major insurance providers and advocate for maximum coverage on your behalf. For clients with out-of-pocket expenses, we discuss all available options during the admissions process to ensure cost doesn&apos;t prevent you from getting the care you need.",
  },
];

export default function CostOfRehabPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources/cost-of-rehab" },
          { name: "Cost of Rehab", path: "/resources/cost-of-rehab" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Resources"
        title="How Much Does Rehab Cost in Arizona?"
        description="Cost is the number one barrier to treatment. Here&apos;s an honest, transparent breakdown of what rehab actually costs, and how to pay for it."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              The Cost Question Everyone Asks
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;re researching rehab for yourself or someone you love, cost is probably one of the first things on your mind. That&apos;s completely understandable. Addiction treatment is a significant investment, and you deserve to know what you&apos;re looking at before making a decision.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The challenge is that rehab costs vary enormously depending on the type of program, the length of stay, the level of clinical care, and your insurance coverage. A quick Google search will give you ranges so wide they&apos;re almost meaningless.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This guide breaks it down honestly, what different levels of care cost in Arizona, what factors affect pricing, how insurance works, and how Desert Recovery Centers approaches the financial side of treatment. No hidden agendas, just clear information to help you make the best decision.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Spectrum */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Arizona Treatment Costs
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Understanding the Cost Spectrum
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Here&apos;s a general overview of what different levels of addiction treatment typically cost in Arizona. These are approximate ranges, actual costs depend on the specific program, location, and services included.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Standard Outpatient Treatment",
                  desc: "The most affordable option, standard outpatient involves attending therapy sessions a few times per week while living at home. Typical costs range from $1,000 to $5,000 for a full program. Best suited for individuals with mild substance use issues or as a step-down from more intensive care.",
                },
                {
                  title: "Intensive Outpatient Programs (IOP)",
                  desc: "IOP provides more structure than standard outpatient, typically 9 to 15 hours of programming per week, while still allowing clients to live at home. Costs generally range from $5,000 to $12,000 for a full program cycle. A strong option for people who need intensive support but have stable living situations.",
                },
                {
                  title: "Partial Hospitalization Programs (PHP)",
                  desc: "PHP offers near-full-day programming (typically 20+ hours per week) with the option to return home or to sober living in the evening. Costs typically range from $8,000 to $18,000 per month. Ideal for individuals transitioning from residential care or those who need intensive daily support.",
                },
                {
                  title: "Standard Residential Treatment",
                  desc: "Residential programs provide 24/7 care in a structured environment. Clients live at the facility for 30 days. Standard residential programs in Arizona typically range from $15,000 to $40,000 for a 30-day stay, depending on the facility and services included.",
                },
                {
                  title: "Luxury Residential Treatment",
                  desc: "Luxury residential treatment in Arizona typically ranges from $30,000 to $80,000 or more for a 30-day program, though insurance often covers a significant portion. These programs offer smaller client-to-staff ratios, more individual therapy, private accommodations, and comprehensive amenities that serve clinical purposes.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
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

      {/* What Affects Cost */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Key Factors
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Affects the Cost of Rehab?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Several factors determine what you&apos;ll actually pay for treatment. Understanding these can help you evaluate programs more effectively:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Length of stay, 30-day programs cost less than 60 or 90-day programs, but longer stays are often associated with better long-term outcomes",
                "Level of care, residential costs more than outpatient because it includes housing, meals, and 24/7 clinical support",
                "Detox requirements, medical detox adds to the cost due to the need for medical monitoring and potential medication-assisted treatment",
                "Dual diagnosis treatment, treating co-occurring mental health conditions requires additional psychiatric and therapeutic resources",
                "Staff credentials, programs staffed by doctoral-level clinicians and board-certified psychiatrists cost more but provide a higher level of clinical care",
                "Amenities and environment, private rooms, fitness facilities, and specialized programming all factor into cost but often serve clinical purposes",
                "Location, treatment centers in metropolitan areas like Phoenix typically cost more than those in rural settings",
                "Aftercare services, programs that include comprehensive discharge planning, alumni support, and follow-up care may have higher upfront costs but can reduce the risk of relapse",
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

      {/* Insurance Coverage */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Your Coverage Rights
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Insurance Coverage for Rehab
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Here&apos;s what many people don&apos;t realize: most health insurance plans are legally required to cover addiction and mental health treatment. The Mental Health Parity and Addiction Equity Act mandates that insurance companies provide behavioral health coverage at the same level as medical and surgical coverage.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              This means if your plan covers a 30-day hospital stay for a medical condition, it generally must provide comparable coverage for residential addiction treatment. In practice, this translates to real, meaningful coverage for many people.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Key insurance concepts to understand:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "In-Network vs. Out-of-Network",
                  desc: "In-network facilities have pre-negotiated rates with your insurer, typically resulting in lower out-of-pocket costs. Out-of-network facilities can still be covered, but you may pay a higher percentage. Many luxury programs work as out-of-network providers but achieve strong reimbursement rates through direct negotiation with insurers.",
                },
                {
                  title: "Deductibles and Copays",
                  desc: "You&apos;ll typically need to meet your annual deductible before insurance begins covering treatment costs. After that, most plans cover a percentage of the cost (often 70-90% in-network) with you responsible for the remaining copay or coinsurance.",
                },
                {
                  title: "Prior Authorization",
                  desc: "Many insurance plans require prior authorization before residential treatment begins. This involves your treatment team submitting clinical documentation demonstrating the medical necessity of the recommended level of care. Experienced admissions teams handle this process routinely.",
                },
                {
                  title: "Utilization Review",
                  desc: "Insurance companies periodically review whether continued treatment is medically necessary. Your clinical team advocates on your behalf during these reviews, providing documentation to support the recommended length of stay.",
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

      {/* How DRC Works With Insurance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              We Handle the Details
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How DRC Works With Insurance
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Navigating insurance for addiction treatment shouldn&apos;t be another source of stress. At Desert Recovery Centers, our admissions team handles the financial side so you can focus on what matters, getting into treatment.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Free Insurance Verification",
                  desc: "Before you commit to anything, our team verifies your benefits at no cost. We contact your insurance provider directly, review your coverage for residential and outpatient treatment, and give you a clear picture of what your plan covers.",
                },
                {
                  title: "We Work With All Major Insurers",
                  desc: "DRC works with a wide range of insurance providers. Whether you have employer-sponsored coverage, an ACA marketplace plan, or another type of insurance, our team has experience navigating the process.",
                },
                {
                  title: "We Advocate for Maximum Coverage",
                  desc: "Our utilization review team works alongside your clinical team to document medical necessity and advocate for the full length of stay your treatment requires. We don&apos;t just accept the first authorization, we push for what you need.",
                },
                {
                  title: "Transparent Out-of-Pocket Estimates",
                  desc: "Before admission, you&apos;ll know what your estimated out-of-pocket costs are. No surprises, no hidden fees. If there are costs beyond what insurance covers, we discuss all available options upfront.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-sage/10 rounded-xl p-6 border border-sage/20">
              <p className="text-forest text-sm leading-relaxed font-medium text-center">
                Coverage varies by plan. Contact us to verify your specific benefits and get a personalized cost estimate at no obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay and Financing */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Additional Options
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Self-Pay and Financing Options
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              For individuals without adequate insurance coverage, treatment is still accessible. Many programs, including DRC, offer self-pay rates and can discuss financing arrangements that make treatment financially feasible.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Healthcare financing companies also offer specific plans for addiction treatment, allowing you to spread the cost over time. Our admissions team can walk you through available options during your initial consultation. The goal is to ensure that cost doesn&apos;t prevent anyone from getting the care they need.
            </p>
          </div>
        </div>
      </section>

      {/* Cost of NOT Getting Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Real Cost
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              The Cost of Not Getting Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              While the cost of rehab is a legitimate concern, it&apos;s important to consider what untreated addiction costs over time. The financial toll of continued substance use is often far greater than the investment in treatment:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Lost wages and career damage, addiction frequently leads to job loss, missed promotions, and reduced earning potential over a lifetime",
                "Legal costs, DUIs, drug-related charges, and legal proceedings can cost tens of thousands of dollars and carry lasting consequences",
                "Healthcare expenses, emergency room visits, hospitalizations, and chronic health conditions caused by substance use add up rapidly",
                "Relationship damage, the toll on marriages, family relationships, and friendships often leads to costly divorces and fractured support systems",
                "Mental health deterioration, untreated addiction worsens co-occurring conditions like depression and anxiety, compounding the cost of eventual treatment",
                "Risk of overdose, the most devastating cost of all. Every day without treatment is a day of unnecessary risk.",
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
            <p className="text-gray-600 leading-relaxed mt-6 text-lg">
              Treatment isn&apos;t an expense, it&apos;s an investment in your life, your health, your relationships, and your future. When viewed against the ongoing costs of untreated addiction, the math becomes clear.
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
