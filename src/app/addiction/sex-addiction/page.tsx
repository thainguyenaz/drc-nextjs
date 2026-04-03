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
  title: "Sex Addiction Treatment — Desert Recovery Centers",
  description:
    "Compassionate sex addiction treatment in Arizona. Evidence-based therapy for compulsive sexual behavior in a confidential, judgment-free clinical setting.",
};

const faqs = [
  {
    question: "Can sex addiction be treated?",
    answer:
      "Yes. Compulsive sexual behavior disorder is a recognized impulse control disorder that responds to evidence-based therapy. At Desert Recovery Centers, our doctoral-level clinicians provide confidential, judgment-free treatment in our Arizona facilities with just 10 beds per location for highly personalized care.",
  },
  {
    question: "How long does sex addiction treatment take?",
    answer:
      "Sex addiction treatment typically involves 30 to 90 days of residential or outpatient care, depending on severity and co-occurring conditions. Many clients benefit from ongoing therapy after primary treatment. Desert Recovery Centers customizes every plan to your unique needs and recovery goals.",
  },
  {
    question: "Does insurance cover sex addiction treatment?",
    answer:
      "Yes, most major insurance plans cover treatment for compulsive sexual behavior at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain your out-of-pocket costs before treatment begins.",
  },
  {
    question: "What therapies are used for sex addiction?",
    answer:
      "Treatment includes CBT and psychodynamic therapy to address emotional triggers, group process therapy to break isolation, trauma-focused approaches for underlying attachment issues, and dual diagnosis care for co-occurring depression, anxiety, or substance use disorders.",
  },
];

export default function SexAddictionPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <MedicalConditionSchema
        name="Compulsive Sexual Behavior Disorder"
        description="Compulsive sexual behavior disorder is recognized by the WHO as an impulse control disorder. It involves a cycle of escalating behavior driven by the brain's reward system, with temporary relief followed by guilt, shame, and intensified urges."
        url="/addiction/sex-addiction"
        possibleTreatments={["CBT", "Psychodynamic Therapy", "Group Process Therapy", "Trauma-Informed Care", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Sex Addiction Treatment"
        description="Compulsive sexual behavior thrives in shame and secrecy. Treatment begins when you stop carrying it alone."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              You swore you&apos;d stop. You deleted the apps, cleared the history, made promises to yourself and to the people you love. But the compulsion keeps pulling you back. The behavior that once felt like relief now creates more pain than it eases — the secrecy, the double life, the risk-taking that puts your relationships, your career, and your health in jeopardy. The shame is suffocating, and it keeps you from asking for help. You&apos;re not a bad person. You&apos;re caught in a compulsive pattern that requires clinical treatment, not willpower.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we provide compassionate, confidential treatment for compulsive sexual behavior. Our clinical team understands the complexity and sensitivity of this condition, and we approach it without judgment — with the same evidence-based rigor we apply to every behavioral health condition we treat.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Compulsive Sexual Behavior
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Compulsive sexual behavior disorder is recognized by the World Health Organization as an impulse control disorder. Like other behavioral addictions, it involves a cycle of escalating behavior driven by the brain&apos;s reward system — the pursuit of sexual experiences triggers dopamine release that temporarily relieves emotional distress, but the relief is followed by guilt, shame, and an intensified urge to repeat the behavior. Compulsive pornography use, affairs, risky sexual encounters, and other patterns can all be manifestations of this condition.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Inability to control sexual behavior despite repeated attempts to stop
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Escalating patterns — needing more intense or risky experiences to feel satisfied
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using sexual behavior to cope with stress, anxiety, loneliness, or emotional pain
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Significant time spent planning, engaging in, or recovering from sexual activity
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Damaged relationships, career consequences, or legal issues due to sexual behavior
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Persistent feelings of shame, guilt, or self-loathing after acting out
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Sex Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Individual Therapy",
                  desc: "CBT and psychodynamic therapy help you understand the emotional triggers behind compulsive behavior, develop healthier coping mechanisms, and address underlying trauma or attachment issues.",
                },
                {
                  title: "Group Process Therapy",
                  desc: "Breaking isolation is a critical step. Confidential group settings provide peer connection with others navigating the same challenges, reducing shame and building accountability.",
                },
                {
                  title: "Co-Occurring Disorder Treatment",
                  desc: "Compulsive sexual behavior often co-occurs with depression, anxiety, trauma, or substance use. Our dual diagnosis approach ensures all conditions are treated together.",
                },
                {
                  title: "Relapse Prevention & Boundaries",
                  desc: "You develop a concrete plan for managing triggers, establishing healthy boundaries, rebuilding trust in relationships, and sustaining recovery in daily life.",
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
              Recovery from compulsive sexual behavior is not about eliminating sexuality — it&apos;s about reclaiming control over it. Treatment helps you develop a healthy relationship with intimacy, understand the emotional wounds driving the compulsion, and build the self-awareness to recognize and manage urges before they escalate. Our confidential residential and outpatient programs provide a safe space to do this work at your own pace, with the clinical support you need.
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
            question: "What is sex addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering confidential, evidence-based therapy for compulsive sexual behavior. With just 10 beds per facility, every client receives individualized attention from doctoral-level clinicians in a judgment-free clinical setting.",
          },
          {
            question: "How does Desert Recovery Centers treat sex addiction?",
            answer:
              "Treatment includes CBT and psychodynamic therapy, confidential group process therapy, trauma-informed care for underlying attachment issues, dual diagnosis treatment for co-occurring mental health conditions, and relapse prevention planning with healthy boundary development.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for sex addiction rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for compulsive sexual behavior treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/sex-addiction" />
      <CTASection />
      <Footer />
    </>
  );
}
