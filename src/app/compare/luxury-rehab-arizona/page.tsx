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
  title: "Best Luxury Rehab Centers in Arizona (2026)",
  description:
    "Compare the best luxury rehab centers in Arizona. Clinical quality, amenities, outcomes. Call DRC at (480) 931-3617.",
  path: "/compare/luxury-rehab-arizona",
});

const faqs = [
  {
    q: "What makes a rehab center 'luxury'?",
    a: "True luxury rehab goes beyond amenities. While comfortable environments matter, what distinguishes a genuine luxury program is the clinical quality: doctoral-level staff, low client-to-clinician ratios, individualized treatment plans, evidence-based therapies, and comprehensive aftercare. Pools and gourmet meals help, but they're not what heals you.",
  },
  {
    q: "How much does luxury rehab cost in Arizona?",
    a: "Costs vary significantly depending on the facility, length of stay, and level of care. Desert Recovery Centers works with most major commercial insurance plans on an out-of-network basis — many of which provide significant coverage for our level of care, meaning your out-of-pocket cost may be significantly lower than the sticker price. We are also in-network with TriCare and TriWest, and offer cash-pay options. Coverage varies by plan. Contact us to verify your benefits at no cost.",
  },
  {
    q: "Is luxury rehab more effective than standard rehab?",
    a: "What matters most for outcomes is clinical quality, individualized treatment, and program completion rates, not the amenities themselves. However, luxury programs tend to have lower client-to-staff ratios, doctoral-level clinicians, and environments that reduce dropout rates. Clients who complete treatment have dramatically better outcomes, and comfort reduces the likelihood of leaving early.",
  },
  {
    q: "Should I stay in Arizona for rehab or travel out of state?",
    a: "For most people, staying local offers significant advantages: easier family involvement, smoother transitions between levels of care, and access to a local recovery community after discharge. Research shows that family participation improves outcomes, and proximity makes that participation practical rather than theoretical.",
  },
  {
    q: "What should I look for when choosing a luxury rehab in Arizona?",
    a: "Focus on five factors: (1) clinical team credentials, are psychologists and psychiatrists leading treatment? (2) Client-to-staff ratio, smaller programs deliver more individualized care. (3) Dual diagnosis capability, can they treat co-occurring conditions simultaneously? (4) Accreditation, Joint Commission accreditation indicates quality standards. (5) Aftercare planning, how do they support you after discharge?",
  },
];

export default function LuxuryRehabArizonaPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/compare/luxury-rehab-arizona" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Arizona Treatment Guide"
        title="Best Luxury Rehab Centers in Arizona: A Complete Guide"
        description="What truly separates luxury rehab from standard programs, and how to choose the right one for your recovery."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-0068August-01-202400009-2.jpg"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              What Makes Luxury Rehab Actually Worth It
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The word &quot;luxury&quot; gets thrown around a lot in the treatment industry. Granite countertops and infinity pools look good on a website, but they don&apos;t treat addiction. What truly makes a luxury rehab worth your investment is what happens in the therapy room, not the amenities brochure.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The best luxury rehab centers combine clinical excellence, doctoral-level clinicians, evidence-based therapies, low client-to-staff ratios, with an environment that supports deep healing. The comfort reduces dropout rates. The clinical depth produces lasting results. That&apos;s the combination that matters.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This guide covers what to look for, what to avoid, and how Arizona&apos;s top programs compare, so you can make an informed decision about the most important investment of your life.
            </p>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Evaluation Criteria
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              5 Things That Actually Matter in Luxury Rehab
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "1. Clinical Team Credentials",
                  desc: "Who is leading your treatment? Licensed psychologists and board-certified psychiatrists provide a fundamentally different level of care than facilities staffed primarily by master's-level counselors. Ask about the credentials of the clinicians who will actually be directing your treatment.",
                },
                {
                  title: "2. Client-to-Staff Ratio",
                  desc: "Smaller programs deliver more individualized care. A 10-bed facility with multiple clinicians can offer a level of personal attention that's impossible in a 50- or 100-bed program. Ask how many clients are in the program at any given time.",
                },
                {
                  title: "3. Dual Diagnosis Capability",
                  desc: "The majority of people seeking treatment have both a substance use disorder and a mental health condition. Programs that treat only one, or treat them in separate tracks, miss the integrated approach that research shows produces the best outcomes.",
                },
                {
                  title: "4. Accreditation & Licensing",
                  desc: "Joint Commission accreditation means the facility meets rigorous quality and safety standards. LegitScript certification verifies advertising legitimacy. Arizona state licensing is a legal requirement. All three should be confirmed before considering any program.",
                },
                {
                  title: "5. Aftercare & Continuity",
                  desc: "Treatment doesn't end at discharge. The best programs offer step-down options (PHP, IOP), alumni support networks, and detailed aftercare plans. Ideally, you step down through levels of care with the same clinical team at the same location.",
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

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg",
              alt: "Desert Recovery Centers luxury living area",
            }}
            rightImage={{
              src: "/images/glendale/Glendale-Massage.jpg",
              alt: "Desert Recovery Centers massage therapy",
            }}
          />
        </div>
      </section>

      {/* DRC Spotlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Featured Program
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Desert Recovery Centers: Arizona&apos;s Premier Luxury Rehab
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Doctoral-Level Clinical Team",
                  desc: "Treatment directed by licensed clinical psychologists and overseen by board-certified psychiatrists. Clinical Director Dr. An Nguyen leads a team of doctoral-level clinicians across three facilities.",
                },
                {
                  title: "10-Bed Maximum Per Facility",
                  desc: "Three intimate facilities in Glendale (7,500 sq ft), Scottsdale (mountain views), and Phoenix (holistic focus), each with a maximum of 10 beds for deeply personalized care.",
                },
                {
                  title: "Integrated Dual Diagnosis Treatment",
                  desc: "Addiction and co-occurring mental health conditions are treated simultaneously by the same clinical team using evidence-based modalities: CBT, DBT, EMDR, motivational interviewing, and medication management.",
                },
                {
                  title: "Resort-Level Amenities",
                  desc: "Pools, tennis courts, basketball courts, gyms, massage rooms, gourmet meals, and unique amenities like a movie theater (Phoenix) and mountain views (Scottsdale), because comfort supports completion.",
                },
                {
                  title: "Full Continuum of Care",
                  desc: "Residential, PHP, and IOP at the same facility with the same clinical team. No disruption, no gap in care, and a seamless transition that supports long-term recovery.",
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

      {/* What to Avoid */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Red Flags
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Warning Signs in &quot;Luxury&quot; Rehab Marketing
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Amenities are highlighted more than clinical team credentials",
                "Vague language about 'holistic' care without specifying evidence-based modalities",
                "No mention of accreditation (Joint Commission, LegitScript)",
                "Large bed counts marketed as 'community' rather than admitting diluted attention",
                "No clear dual diagnosis capability despite promising to treat everything",
                "No aftercare plan or alumni support mentioned",
              ].map((flag, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">
              Explore DRC Treatment Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "DRC Scottsdale", href: "/locations/scottsdale" },
                { label: "DRC Glendale", href: "/locations/glendale" },
                { label: "DRC Phoenix", href: "/locations/phoenix" },
                { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-cream rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors">
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
          { question: "What is the best luxury rehab in Arizona?", answer: "Desert Recovery Centers is a Joint Commission accredited luxury treatment center operating three facilities in Glendale, Scottsdale, and Phoenix, Arizona. With a 10-bed maximum per location, doctoral-level clinical leadership, and integrated dual diagnosis treatment, DRC provides the clinical depth and personalized attention that defines genuine luxury rehab." },
          { question: "How much does luxury rehab cost in Arizona?", answer: "Luxury rehab costs in Arizona vary by facility and length of stay. Desert Recovery Centers works with major commercial insurance plans (Aetna, BCBS, Cigna, UnitedHealthcare, Humana, Magellan, others) on an out-of-network basis — many of which provide significant coverage that can reduce out-of-pocket costs. We are also in-network with TriCare and TriWest, and offer cash-pay options. Contact DRC at (480) 931-3617 for a free, confidential insurance verification." },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
