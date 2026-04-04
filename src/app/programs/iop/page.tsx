import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import AEOBlock from "@/components/AEOBlock";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, InlineFAQSchema, SpeakableSchema, MedicalTherapySchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Intensive Outpatient Program (IOP) in AZ",
  description:
    "IOP program in Arizona. 3-4 sessions per week, work-compatible schedule. Call Desert Recovery Centers at (480) 931-3617.",
  path: "/programs/iop",
});

const faqs = [
  {
    q: "What is an Intensive Outpatient Program (IOP)?",
    a: "IOP is a structured treatment program that meets 3-4 times per week for approximately 3 hours per session, typically over 8-12 weeks. It provides meaningful clinical support, individual therapy, group therapy, psychiatric care, while allowing you to maintain work, school, and family responsibilities. It's the most flexible level of intensive treatment.",
  },
  {
    q: "Can I work while in IOP?",
    a: "Yes, IOP is specifically designed to be compatible with work and other daily responsibilities. Sessions are scheduled to accommodate professional schedules. Many clients continue working, attending school, or caring for family while in IOP, applying what they learn in treatment directly to their daily lives.",
  },
  {
    q: "What is the difference between PHP and IOP?",
    a: "PHP provides 5-6 hours of daily programming, 5 days per week, a more intensive schedule that limits other commitments. IOP meets 3-4 times per week for about 3 hours, allowing you to maintain work and daily life while receiving structured clinical support. IOP is often a step-down from PHP, though you can enter IOP directly based on your clinical assessment.",
  },
  {
    q: "Do you accept insurance for IOP?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost.",
  },
  {
    q: "What happens after IOP?",
    a: "After completing IOP, you transition to ongoing outpatient therapy and connect with our alumni support network. Your clinical team develops a comprehensive aftercare plan before you complete the program, including therapy referrals, support group recommendations, relapse prevention strategies, and alumni community access.",
  },
];

export default function IOPPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/programs/iop" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Intensive Outpatient Program (IOP)"
        description="Flexible intensive treatment meeting 3-4 times per week, providing structured clinical support for addiction and mental health conditions while maintaining daily responsibilities."
        url="/programs/iop"
        conditions={["Substance Use Disorders", "Depression", "Anxiety", "PTSD", "Co-Occurring Disorders"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Levels of Care"
        title="Intensive Outpatient Program (IOP) in Arizona"
        description="Structured clinical support that works with your life, not against it. Recovery without putting everything on hold."
        bgImage="/images/glendale/Glendale-Group-Room.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Real Treatment That Fits Your Real Life
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Not everyone can, or needs to, step away from daily life for residential treatment. Our Intensive Outpatient Program provides the clinical depth of an evidence-based treatment program in a schedule that allows you to keep working, caring for your family, and maintaining the responsibilities you can&apos;t set aside.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Meeting 3-4 times per week for approximately 3 hours per session, IOP delivers individual therapy with licensed psychologists, structured group sessions, psychiatric care, and holistic programming, the same caliber of treatment our residential clients receive, adapted to a flexible format.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you&apos;re stepping down from residential or PHP, or entering treatment for the first time, IOP provides the structure and clinical support you need to build lasting recovery while living your life.
            </p>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Therapy-Room.jpg", alt: "DRC therapy room" }}
            rightImage={{ src: "/images/glendale/Glendale-Recreation-Room-1.jpg", alt: "DRC recreation room" }}
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Program Details</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What IOP Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "3-4 sessions per week, ~3 hours each",
                "8-12 week program duration",
                "Individual therapy with a licensed psychologist",
                "Structured group therapy sessions",
                "Psychiatric care and medication management",
                "Evidence-based modalities: CBT, DBT, EMDR",
                "Relapse prevention skills training",
                "Family therapy sessions available",
                "Holistic programming: mindfulness, wellness",
                "Comprehensive aftercare planning",
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
                { title: "Are stepping down from residential or PHP", desc: "You've built a strong foundation and are ready for more independence while maintaining structured clinical support during the transition." },
                { title: "Need to keep working during treatment", desc: "Your job, business, or professional responsibilities require your presence. IOP's flexible schedule allows you to maintain your career while getting the help you need." },
                { title: "Have a stable home environment", desc: "You have a safe, supportive living situation and don't need 24/7 supervision, but you do need more than weekly therapy to maintain your recovery." },
                { title: "Are building long-term recovery skills", desc: "IOP is where you practice recovery in real life, applying coping strategies, healthy communication, and relapse prevention skills in your actual daily environment." },
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

      {/* ── IOP Videos ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Inside IOP</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Does a Weekly IOP Schedule Look Like?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/jGflpdsrC4I?rel=0"
              title="What Does a Weekly IOP Schedule Typically Look Like"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Why Is Stepping Down Gradually So Important?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/Rkj3tsy-eZ8?rel=0"
              title="Why Is Stepping Down Gradually So Important In Recovery"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
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
                { level: "Residential", desc: "24/7 immersive treatment, 30 days", href: "/programs/residential" },
                { level: "PHP", desc: "5-6 hours daily, 5 days/week, 4-6 weeks", href: "/programs/php" },
                { level: "IOP", desc: "3 hours, 3-4 days/week, 8-12 weeks", href: "/programs/iop", current: true },
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
            <p className="text-gray-500 text-xs">Coverage varies by plan. Contact us to verify your benefits.</p>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        { question: "What is IOP at Desert Recovery Centers?", answer: "Desert Recovery Centers' Intensive Outpatient Program (IOP) meets 3-4 times per week for approximately 3 hours per session, typically over 8-12 weeks. Available at our Joint Commission accredited Glendale and Scottsdale facilities, IOP includes individual therapy with licensed psychologists, group therapy, psychiatric care, and holistic programming in a schedule compatible with work and daily responsibilities." },
        { question: "Can I work while in IOP at Desert Recovery Centers?", answer: "Yes. IOP at DRC is specifically designed to accommodate work, school, and family responsibilities. Sessions are scheduled to minimize conflict with professional obligations. Many clients maintain their careers while receiving structured clinical support for addiction and mental health conditions." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
