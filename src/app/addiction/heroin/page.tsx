import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { InlineFAQSchema, MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import ConditionFAQ from "@/components/ConditionFAQ";

export const metadata: Metadata = {
  title: "Heroin Addiction Treatment — Desert Recovery Centers",
  description:
    "Heroin addiction treatment in Arizona with medically supervised detox, MAT programs, and comprehensive residential care.",
};

const faqs = [
  {
    question: "Can heroin addiction be treated?",
    answer:
      "Yes. Heroin addiction is a treatable medical condition. At Desert Recovery Centers, our doctoral-level clinicians use medically supervised detox combined with medication-assisted treatment (MAT) and behavioral therapy. Our Arizona facilities maintain just 10 beds per location for individualized, high-quality care.",
  },
  {
    question: "How long does heroin rehab take?",
    answer:
      "Heroin detox typically lasts 7 to 14 days, followed by 30 to 90 days of residential treatment. Many clients benefit from extended MAT and step-down care through PHP and IOP. Desert Recovery Centers tailors every treatment timeline to your unique situation and recovery goals.",
  },
  {
    question: "Does insurance cover heroin addiction treatment?",
    answer:
      "Yes, most major insurance plans cover heroin addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and walk you through any out-of-pocket costs before you begin.",
  },
  {
    question: "What medications are used for heroin withdrawal?",
    answer:
      "Medically supervised heroin detox may include buprenorphine (Suboxone), naltrexone (Vivitrol), and comfort medications for pain, nausea, and insomnia. Our dual diagnosis approach also treats co-occurring conditions like depression, anxiety, and PTSD alongside opioid dependence.",
  },
];

export default function HeroinAddictionPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <MedicalConditionSchema
        name="Opioid/Heroin Addiction"
        description="Heroin addiction is a severe opioid use disorder characterized by rapid physical dependence and intense withdrawal. Heroin binds to opioid receptors, flooding the system with dopamine and creating dependence often within days of regular use."
        url="/addiction/heroin"
        possibleTreatments={["MAT (Suboxone, Vivitrol)", "CBT", "EMDR", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Heroin Addiction Treatment"
        description="Heroin takes everything — your health, your relationships, your sense of self. Treatment gives you a real path back."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              You&apos;re tired. Tired of the hustle — finding it, using it, coming down, and doing it all over again just to feel okay. Tired of the lies, the track marks you try to cover, the look on your family&apos;s face when they figure it out. Heroin has narrowed your entire world down to one thing, and everything else has fallen away. You didn&apos;t plan for this. Nobody does.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we&apos;ve worked with hundreds of people in exactly your situation. Our heroin addiction treatment program combines medically supervised detox with long-term behavioral therapy and MAT to give you the strongest possible foundation for recovery.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Heroin Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Heroin binds to opioid receptors in the brain, flooding the system with dopamine and creating an intense rush followed by a warm, sedated state. With repeated use, the brain stops producing adequate dopamine on its own, leaving you dependent on heroin just to avoid the agony of withdrawal. Physical dependence develops rapidly, and the psychological grip — the belief that you cannot cope without it — becomes equally powerful. Many heroin users originally started with prescription opioids before transitioning to heroin due to cost and availability.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using heroin daily or needing it to function normally
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Experiencing severe withdrawal — body aches, nausea, diarrhea, insomnia, restless legs
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Injecting, smoking, or snorting increasing amounts to get the same effect
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Health complications — infections, abscesses, collapsed veins, or overdose
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Loss of employment, housing, or meaningful relationships
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Previous attempts to quit that ended in relapse
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Heroin Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Medically Supervised Detox",
                  desc: "Our medical team manages withdrawal with comfort medications and 24/7 monitoring, keeping you safe during the most physically demanding phase of recovery.",
                },
                {
                  title: "Medication-Assisted Treatment (MAT)",
                  desc: "Suboxone (buprenorphine/naloxone), Vivitrol (naltrexone), and methadone stabilize brain chemistry and dramatically reduce cravings and relapse risk.",
                },
                {
                  title: "Individual & Group Therapy",
                  desc: "CBT, motivational interviewing, and process groups help you understand the patterns behind your use, develop new coping mechanisms, and build connection with peers in recovery.",
                },
                {
                  title: "Holistic & Experiential Therapies",
                  desc: "Yoga, mindfulness meditation, art therapy, and nutritional counseling rebuild physical health and teach your brain to find calm and reward without substances.",
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
              Heroin recovery isn&apos;t about going back to who you were before — it&apos;s about building someone stronger. After detox, you&apos;ll move into a structured residential program where daily therapy, peer support, and wellness activities help you rediscover what matters. As you stabilize, you&apos;ll step down through PHP and IOP, gradually re-engaging with work, family, and community. Our aftercare team ensures you&apos;re never without support when you need it.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question: "What is heroin addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona providing medically supervised detox and MAT programs for heroin and opioid dependence. With only 10 beds per facility, clients receive intensive, personalized care from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat heroin addiction?",
            answer:
              "Treatment includes medically supervised detox, medication-assisted treatment with Suboxone and Vivitrol, individual and group therapy (CBT, motivational interviewing), EMDR for trauma, holistic therapies, and dual diagnosis care for co-occurring mental health conditions.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for heroin rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for heroin addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/heroin" />
      <CTASection />
      <Footer />
    </>
  );
}
