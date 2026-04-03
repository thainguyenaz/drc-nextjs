import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alcohol Addiction Treatment — Desert Recovery Centers",
  description:
    "Evidence-based alcohol addiction treatment in Arizona. Medically supervised detox, residential care, PHP, and IOP for alcohol use disorder.",
};

export default function AlcoholAddictionPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Alcohol Addiction Treatment"
        description="Medically supervised detox and comprehensive care for alcohol use disorder — because you deserve more than white-knuckling your way through another day."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              Maybe it started as a way to unwind. A glass of wine after work, a few beers on the weekend. But somewhere along the way, the line moved. Now you&apos;re drinking to feel normal. You&apos;re hiding bottles, making excuses, waking up with dread instead of rest. The people closest to you are pulling away — or they&apos;ve already gone. You&apos;re not weak. You&apos;re caught in a cycle that rewires your brain chemistry, and breaking free takes more than willpower alone.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat alcohol use disorder as the medical condition it is. Our clinical team has helped hundreds of individuals move from dependence to recovery through structured, evidence-based care.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Alcohol Use Disorder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Alcohol use disorder (AUD) is a chronic condition characterized by an inability to control drinking despite negative consequences. Prolonged alcohol use changes brain chemistry — particularly the GABA and glutamate systems — creating physical dependence that makes quitting dangerous without medical supervision. Withdrawal symptoms can range from anxiety and tremors to life-threatening seizures, which is why medically managed detox is a critical first step.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Drinking more than you intend to, or for longer than planned
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Failed attempts to cut back or stop on your own
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Experiencing withdrawal symptoms — shaking, sweating, nausea, or anxiety — when you don&apos;t drink
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Neglecting responsibilities, relationships, or health because of alcohol
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Needing to drink more to get the same effect (tolerance)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Continuing to drink despite knowing it&apos;s causing harm
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Alcohol Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Medically Supervised Detox",
                  desc: "24/7 medical monitoring with medications to manage withdrawal safely. Our nursing staff and psychiatrists ensure your comfort and safety throughout the detox process.",
                },
                {
                  title: "Medication-Assisted Treatment",
                  desc: "FDA-approved medications such as naltrexone and acamprosate can help reduce cravings and support long-term sobriety when combined with therapy.",
                },
                {
                  title: "Individual & Group Therapy",
                  desc: "CBT, DBT, motivational interviewing, and process groups address the psychological patterns and emotional triggers behind drinking.",
                },
                {
                  title: "Co-Occurring Disorder Treatment",
                  desc: "Many people with AUD also experience depression, anxiety, or trauma. Our dual diagnosis approach treats both conditions simultaneously for stronger outcomes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-cream rounded-xl p-6 border-2 border-transparent hover:border-gold/40 transition-all"
                >
                  <h3 className="font-display text-lg text-forest font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              What Recovery Looks Like Here
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Recovery from alcohol addiction is not a straight line, and we don&apos;t treat it like one. Your treatment plan is built around your history, your triggers, and your goals. From residential care with 24/7 support to step-down programs that help you practice sobriety in the real world, we walk beside you through every stage. Our aftercare planning connects you with ongoing support, alumni networks, and community resources to sustain your progress long after treatment ends.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <CTASection />
      <Footer />
    </>
  );
}
