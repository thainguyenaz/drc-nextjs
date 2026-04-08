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
  title: "Outpatient Program (OP) in Arizona",
  description:
    "Desert Recovery Centers outpatient program offers 1 to 3 days per week, 3-hour sessions for long-term mental health and addiction stabilization in Glendale, Scottsdale, and Phoenix, AZ.",
  path: "/treatment/op",
});

const faqs = [
  {
    q: "What is the Outpatient Program (OP) at Desert Recovery Centers?",
    a: "OP is the final structured phase of DRC's continuum of care. Clients attend 1-3 days per week for 3-hour sessions, focusing on long-term stabilization, community reintegration, and relapse prevention. It's designed for those who have completed IOP and are ready to maintain their recovery with less clinical scaffolding while staying connected to their treatment team.",
  },
  {
    q: "How does OP differ from IOP?",
    a: "IOP meets 5 to 3 days per week and focuses on building recovery skills during the transition from PHP. OP meets 1 to 3 days per week and focuses on long-term maintenance, sustaining the gains made in earlier phases while reintegrating fully into work, family, and community life. OP provides ongoing psychiatric support, group therapy, and individual check-ins at a frequency that supports independence.",
  },
  {
    q: "How long does the Outpatient Program last?",
    a: "OP has no fixed end date, duration is individualized based on clinical progress and personal goals. Some clients attend for a few months as a final step-down before transitioning to aftercare, while others maintain OP sessions longer for ongoing psychiatric care and accountability. Your clinical team collaborates with you to determine the right timeline.",
  },
  {
    q: "Can I work full-time while in OP?",
    a: "Yes. OP is built for clients who are fully re-engaged with work, school, and family. Sessions are scheduled to accommodate professional obligations, and the 1-3 day per week frequency means minimal disruption to your daily routine.",
  },
  {
    q: "Do you accept insurance for OP?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost.",
  },
];

export default function TreatmentOPPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/treatment/op" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Outpatient Program (OP)"
        description="Long-term outpatient program providing 1-3 days per week of group therapy, individual check-ins, psychiatric care, and community reintegration support for sustained addiction and mental health recovery."
        url="/treatment/op"
        conditions={["Substance Use Disorders", "Depression", "Anxiety", "PTSD", "Co-Occurring Disorders"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Phase 3, Levels of Care"
        title="Outpatient Program (OP) in Arizona"
        description="Long-term stabilization and community reintegration, the final structured phase before independent recovery."
        bgImage="/images/glendale/Glendale-Group-Room.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Long-Term Maintenance. Full Community Integration.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              After completing IOP, our Outpatient Program provides the ongoing clinical structure that keeps recovery on track while you fully re-engage with daily life. Meeting 1 to 3 days per week for 3-hour sessions, OP is where the skills you&apos;ve built across residential, PHP, and IOP become your daily reality, with your treatment team still within reach.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              This is the phase where independence takes the lead. You&apos;re working, managing relationships, handling stress, and doing it with the coping strategies, relapse prevention skills, and self-awareness you&apos;ve developed through DRC&apos;s continuum of care. OP sessions provide a consistent touchpoint: group therapy, individual check-ins, and ongoing psychiatric care to adjust medications and monitor progress.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Available at all three DRC locations, Glendale, Scottsdale, and Phoenix, OP ensures you have access to clinical support close to home as you build the life you&apos;ve been working toward.
            </p>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Therapy-Room.jpg", alt: "DRC individual therapy room" }}
            rightImage={{ src: "/images/glendale/Glendale-Recreation-Room-1.jpg", alt: "DRC community space" }}
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Program Details</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">What Outpatient Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Ongoing duration, individualized to your progress",
                "1-3 days per week, 3-hour sessions",
                "Group therapy for peer accountability",
                "Individual therapy check-ins",
                "Psychiatric care and medication management",
                "Relapse prevention reinforcement",
                "Case management and community resource coordination",
                "Family support and communication skills",
                "Alumni network integration",
                "Available at Glendale, Scottsdale, and Phoenix",
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
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Is OP Right for You</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">OP May Be Right If You</h2>
            <div className="space-y-4">
              {[
                { title: "Have completed IOP and are stepping down", desc: "You've progressed through IOP and are ready for less frequent sessions while maintaining the clinical connection that keeps your recovery strong." },
                { title: "Are maintaining long-term sobriety", desc: "You're stable in your recovery and need ongoing structure, not intensive intervention. OP provides the regular touchpoints that prevent drift without disrupting the life you've rebuilt." },
                { title: "Need ongoing psychiatric support", desc: "Medication management, psychiatric monitoring, and clinical check-ins continue at the frequency you need. Your psychiatric team adjusts your care plan as you progress." },
                { title: "Are reintegrating into work and family life", desc: "You're fully engaged with career, relationships, and daily responsibilities. OP's 1-3 day schedule fits around your life, not the other way around." },
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

      {/* ── Aftercare Video ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Life After Treatment</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Aftercare in Recovery</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/SEZcflDyGOU?rel=0"
              title="Aftercare in Recovery"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Reintegrating Into Real Life After Treatment</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/Qm5PSJSD6Ds?rel=0"
              title="How Do You Help Clients Reintegrate Into Real Life Successfully After Treatment"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
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
                { level: "Phase 1, Residential", desc: "24/7 immersive treatment, 30 days", href: "/programs/residential" },
                { level: "Phase 1B, PHP", desc: "5-6 hours daily, 5 days/week, 4-6 weeks", href: "/programs/php" },
                { level: "Phase 2, IOP", desc: "3-hour sessions, 5→3 days/week, 4-8 weeks", href: "/treatment/iop" },
                { level: "Phase 3, OP", desc: "3-hour sessions, 1-3 days/week, ongoing", href: "/treatment/op", current: true },
                { level: "Aftercare", desc: "Alumni network, community support, ongoing therapy", href: "#" },
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
              Ready to Continue Your Recovery?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re stepping down from IOP or looking for ongoing outpatient support, our admissions team can walk you through the process and verify your insurance in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+14809313617"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
              >
                Call (480) 931-3617
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
        { question: "What is the Outpatient Program at Desert Recovery Centers?", answer: "Desert Recovery Centers' Outpatient Program (OP) meets 1 to 3 days per week for 3-hour sessions, providing long-term stabilization and community reintegration support. Available at all three Joint Commission accredited facilities in Glendale, Scottsdale, and Phoenix, OP includes group therapy, individual check-ins, psychiatric care, relapse prevention, and alumni network integration." },
        { question: "How long is the Outpatient Program at Desert Recovery Centers?", answer: "OP at DRC has no fixed end date, duration is individualized based on clinical progress and personal goals. The program provides ongoing structure at 1-3 days per week as the final step before transitioning to independent aftercare and the DRC alumni network." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
