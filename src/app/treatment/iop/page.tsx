import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import AEOBlock from "@/components/AEOBlock";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, InlineFAQSchema, SpeakableSchema, MedicalTherapySchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Intensive Outpatient Program (IOP) in Arizona",
  description:
    "Step down from PHP with DRC's IOP, offered 5 to 3 days per week with group therapy, Bridge Work individual sessions, and relapse prevention. Glendale and Scottsdale, AZ.",
  path: "/treatment/iop",
});

const faqs = [
  {
    q: "What is Phase 2 IOP at Desert Recovery Centers?",
    a: "Phase 2 IOP is a structured step-down from our PHP program. Clients attend 5 days per week initially, gradually reducing to 3 days per week over 4-8 weeks. Programming includes group therapy, Bridge Work individual sessions, relapse prevention, case management, and peer support, all with the same doctoral-level clinicians from earlier phases of treatment.",
  },
  {
    q: "How does IOP differ from PHP?",
    a: "PHP provides 5-6 hours of daily programming, 5 days per week. IOP starts at 5 days per week and steps down to 3 days, with 3-hour sessions. IOP gives you more time to practice recovery skills in real-world settings, work, family, daily routines, while maintaining meaningful clinical support. Bridge Work individual therapy continues from PHP into IOP to maintain therapeutic continuity.",
  },
  {
    q: "What is Bridge Work and how does it continue in IOP?",
    a: "Bridge Work is DRC's proprietary individual therapy model that follows you across every level of care. Sessions begun during residential or PHP continue seamlessly into IOP with the same clinician, ensuring no loss of therapeutic momentum. Bridge Work addresses the specific issues driving your addiction and mental health conditions with personalized, doctoral-level care.",
  },
  {
    q: "Can I work while attending IOP?",
    a: "Yes. IOP is specifically designed for clients who are returning to work, school, or family responsibilities. Sessions are scheduled to accommodate professional obligations. As you step down from 5 to 3 days per week, you gain increasing independence while maintaining the clinical structure that supports lasting recovery.",
  },
  {
    q: "Do you accept insurance for IOP?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost.",
  },
];

export default function TreatmentIOPPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/treatment/iop" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Intensive Outpatient Program (IOP), Phase 2"
        description="Phase 2 step-down IOP providing group therapy, Bridge Work individual sessions, relapse prevention, case management, and peer support over 4-8 weeks at 5 to 3 days per week."
        url="/treatment/iop"
        conditions={["Substance Use Disorders", "Depression", "Anxiety", "PTSD", "Co-Occurring Disorders"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Phase 2, Levels of Care"
        title="Intensive Outpatient Program (IOP) in Arizona"
        description="Step down from PHP with structured clinical support that fits your life, Bridge Work continues, independence grows, recovery deepens."
        bgImage="/images/glendale/Glendale-Group-Room.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Phase 2: From Stabilization to Independence
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              After the intensive stabilization of PHP, our IOP provides a structured step-down that gradually increases your independence while maintaining the clinical depth that drives lasting recovery. You&apos;ll start at 5 days per week and taper to 3 days over 4-8 weeks, building confidence in your ability to manage daily life with progressively less clinical scaffolding.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Bridge Work, DRC&apos;s proprietary individual therapy model, continues seamlessly from PHP into IOP. The same doctoral-level clinician who guided your earlier treatment stays with you, ensuring no therapeutic ground is lost in the transition. This continuity is what separates a true continuum of care from a series of disconnected programs.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Group therapy, relapse prevention, case management, and peer support round out the program, giving you a full clinical team even as your schedule opens up for work, family, and the daily routines of a recovered life.
            </p>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Therapy-Room.jpg", alt: "DRC individual therapy room" }}
            rightImage={{ src: "/images/glendale/Glendale-Group-Room.jpg", alt: "DRC group therapy session" }}
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Program Details</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What Phase 2 IOP Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "4-8 week step-down program",
                "5 days/week tapering to 3 days/week",
                "Bridge Work individual therapy (continued from PHP)",
                "Structured group therapy sessions",
                "Relapse prevention skills training",
                "Case management and discharge planning",
                "Peer support and accountability groups",
                "Psychiatric care and medication management",
                "Family therapy sessions available",
                "Aftercare and alumni network transition",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Is IOP Right for You</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">IOP May Be Right If You</h2>
            <div className="space-y-4">
              {[
                { title: "Are completing PHP and ready to step down", desc: "You've built a strong clinical foundation during PHP and are ready for more independence while continuing Bridge Work and group therapy with the same treatment team." },
                { title: "Need to return to work or school", desc: "As IOP tapers from 5 to 3 days per week, you can progressively re-engage with professional and personal responsibilities while maintaining structured clinical support." },
                { title: "Want continuity with your treatment team", desc: "Bridge Work ensures your individual therapist follows you from PHP into IOP, no starting over, no re-explaining your history, no lost momentum." },
                { title: "Are building relapse prevention skills", desc: "IOP is where you practice recovery in the real world, applying coping strategies, peer accountability, and relapse prevention skills in your actual daily environment with clinical backup." },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-xl p-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuum of Care */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">Our Full Continuum of Care</h2>
            <div className="space-y-3 mb-6">
              {[
                { level: "Phase 1, Residential", desc: "24/7 immersive treatment, 30 days", href: "/programs/residential" },
                { level: "Phase 1B, PHP", desc: "5-6 hours daily, 5 days/week, 4-6 weeks", href: "/programs/php" },
                { level: "Phase 2, IOP", desc: "3-hour sessions, 5→3 days/week, 4-8 weeks", href: "/treatment/iop", current: true },
                { level: "Aftercare", desc: "Ongoing therapy, alumni network, community support", href: "#" },
              ].map((item) => (
                <div key={item.level} className={`rounded-xl p-5 border ${item.current ? "border-gold bg-gold/5" : "border-gray-100 bg-white"}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-display font-semibold ${item.current ? "text-gold" : "text-forest"}`}>{item.level}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                    {item.current && <span className="text-xs bg-gold text-white px-3 py-1 rounded-full font-medium">You Are Here</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re stepping down from PHP or exploring IOP as your entry point, our admissions team can walk you through the process and verify your insurance in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+16233231012"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
              >
                Call (623) 323-1012
              </a>
              <Link
                href="/insurance"
                className="bg-white hover:bg-cream border border-sage/30 text-forest font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                Verify Insurance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        { question: "What is Phase 2 IOP at Desert Recovery Centers?", answer: "Desert Recovery Centers' Phase 2 IOP is a structured step-down from PHP, meeting 5 days per week initially and tapering to 3 days per week over 4-8 weeks. Available at our Joint Commission accredited Glendale and Scottsdale facilities, IOP includes Bridge Work individual therapy (continued from PHP), group therapy, relapse prevention, case management, and peer support with doctoral-level clinicians." },
        { question: "How long is IOP at Desert Recovery Centers?", answer: "Phase 2 IOP at DRC runs 4 to 8 weeks. Clients begin at 5 days per week and gradually step down to 3 days per week as they demonstrate clinical progress. Bridge Work individual therapy continues from PHP with the same clinician, ensuring therapeutic continuity across every level of care." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
