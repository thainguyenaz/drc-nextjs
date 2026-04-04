import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import AEOBlock from "@/components/AEOBlock";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, InlineFAQSchema, SpeakableSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "DRC vs APN: Compare Arizona Rehab Centers",
  description:
    "Compare Desert Recovery Centers to APN Lodge. See differences in location, clinical team, bed count, and dual diagnosis care. Call (480) 931-3617.",
  path: "/compare/drc-vs-apn",
});

const faqs = [
  {
    q: "Where is APN located compared to Desert Recovery Centers?",
    a: "APN Lodge (All Points North) is headquartered in Edwards, Colorado, requiring Arizona families to travel out of state for treatment. Desert Recovery Centers operates three facilities within Arizona: Glendale, Scottsdale, and Phoenix. Staying local allows family to participate in therapy, visit regularly, and support the recovery process without cross-country travel.",
  },
  {
    q: "How does DRC's clinical team compare?",
    a: "Desert Recovery Centers is led by doctoral-level clinicians, licensed clinical psychologists and board-certified psychiatrists, who direct treatment. Every treatment plan is overseen by Clinical Director Dr. An Nguyen, a Licensed Clinical Psychologist. This doctoral-level clinical leadership distinguishes DRC from many programs that rely primarily on master's-level counselors.",
  },
  {
    q: "What is DRC's bed count per facility?",
    a: "DRC maintains a maximum of 10 beds per facility. This intentionally small program size ensures each client receives deeply personalized attention, higher staff-to-client ratios, and a therapeutic environment where no one gets lost in the crowd.",
  },
  {
    q: "Does DRC specialize in dual diagnosis?",
    a: "Yes. Dual diagnosis treatment, simultaneously addressing mental health conditions and substance use disorders, is a core specialization at Desert Recovery Centers. Our clinical team treats the full spectrum of co-occurring conditions using integrated treatment plans, not separate tracks.",
  },
  {
    q: "Do both programs accept insurance?",
    a: "Desert Recovery Centers is in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits at no cost. We recommend verifying insurance coverage with any facility you are considering.",
  },
];

export default function DRCvsAPNPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/compare/drc-vs-apn" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Compare Treatment Centers"
        title="Desert Recovery Centers vs APN: Why Arizona Families Choose DRC"
        description="An honest comparison to help you make the best decision for your recovery."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Choosing the Right Treatment Center Matters
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              When you&apos;re comparing rehab options, you deserve clear, honest information, not marketing spin. Both Desert Recovery Centers and APN (All Points North) offer treatment for addiction and mental health conditions. But there are meaningful differences that may affect which program is right for you or your loved one.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This page presents a factual comparison to help you make an informed decision. We believe the right choice is the one that fits your clinical needs, your family&apos;s situation, and your recovery goals.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Side-by-Side Comparison
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              DRC vs APN: Key Differences
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gold/40">
                    <th className="text-left py-4 pr-4 text-forest font-semibold font-display">Factor</th>
                    <th className="text-left py-4 px-4 text-forest font-semibold font-display">Desert Recovery Centers</th>
                    <th className="text-left py-4 pl-4 text-forest font-semibold font-display">APN (All Points North)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { factor: "Location", drc: "3 facilities in Arizona (Glendale, Scottsdale, Phoenix)", apn: "Edwards, Colorado (out of state)" },
                    { factor: "Bed Count", drc: "Maximum 10 beds per facility", apn: "Larger program capacity" },
                    { factor: "Clinical Leadership", drc: "Doctoral-level psychologists + board-certified psychiatrists", apn: "Multidisciplinary clinical team" },
                    { factor: "Dual Diagnosis", drc: "Core specialization, integrated treatment", apn: "Available as part of broader offerings" },
                    { factor: "Family Involvement", drc: "Easy: local facilities allow regular visits", apn: "Requires travel to Colorado for visits" },
                    { factor: "Levels of Care", drc: "Residential, PHP, IOP", apn: "Residential, PHP, IOP, virtual" },
                    { factor: "Accreditation", drc: "Joint Commission accredited", apn: "Joint Commission accredited" },
                    { factor: "Step-Down Continuity", drc: "Same facility, same team from residential through IOP", apn: "Transition support available" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-4 pr-4 font-medium text-forest">{row.factor}</td>
                      <td className="py-4 px-4">{row.drc}</td>
                      <td className="py-4 pl-4">{row.apn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
              alt: "Desert Recovery Centers Scottsdale entrance",
            }}
            rightImage={{
              src: "/images/glendale/Glendale-Pool.jpg",
              alt: "Desert Recovery Centers Glendale pool",
            }}
          />
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What Sets DRC Apart
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Arizona Families Choose Desert Recovery Centers
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Stay in Arizona, Close to Family",
                  desc: "DRC operates three facilities within Arizona, in Glendale, Scottsdale, and Phoenix. You don't have to leave the state, and your family doesn't have to fly to Colorado for visits. Research consistently shows that family involvement improves treatment outcomes, and proximity makes that involvement practical.",
                },
                {
                  title: "10-Bed Maximum Per Facility",
                  desc: "Our intentionally small program sizes mean you receive deeply individualized attention. Your clinical team knows you by name, not by a chart number. Small programs allow for higher staff-to-client ratios and more intensive, personalized treatment.",
                },
                {
                  title: "Doctoral-Level Clinical Leadership",
                  desc: "Your treatment at DRC is led by licensed clinical psychologists with doctoral degrees, not master's-level counselors. Board-certified psychiatrists provide medication management, and our clinical director, a Licensed Clinical Psychologist, oversees all treatment quality.",
                },
                {
                  title: "Dual Diagnosis Specialization",
                  desc: "Treating addiction without addressing underlying mental health conditions, or vice versa, leads to relapse. Dual diagnosis treatment is not a feature we offer; it's the foundation our entire program is built on.",
                },
                {
                  title: "Seamless Continuum of Care",
                  desc: "At DRC, you can step down from residential treatment to PHP to IOP at the same facility with the same clinical team. This continuity eliminates the disruption and risk that comes with transitioning between separate programs or providers.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Links */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What We Treat
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Explore Our Treatment Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
                { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Dual Diagnosis Treatment", href: "/treatments" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-white rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs">Coverage varies by plan. Contact us to verify your benefits.</p>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          { question: "How does Desert Recovery Centers compare to APN?", answer: "Desert Recovery Centers operates three luxury treatment facilities in Arizona (Glendale, Scottsdale, Phoenix) with a 10-bed maximum per location and doctoral-level clinical leadership. APN (All Points North) operates from Edwards, Colorado. DRC specializes in dual diagnosis treatment and allows Arizona families to stay local for regular family involvement." },
          { question: "Does Desert Recovery Centers have smaller programs than APN?", answer: "Yes. DRC maintains a maximum of 10 beds per facility, creating an intimate treatment environment with high staff-to-client ratios. This small program size allows for deeply personalized treatment plans directed by licensed clinical psychologists and board-certified psychiatrists." },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
