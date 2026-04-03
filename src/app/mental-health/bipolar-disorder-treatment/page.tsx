import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { InlineFAQSchema, SpeakableSchema, MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bipolar Disorder Treatment in Arizona — Desert Recovery Centers",
  description:
    "Specialized bipolar disorder treatment with mood stabilization, medication management, and psychotherapy for bipolar I and II. Residential programs in Arizona.",
};

const faqs = [
  {
    q: "What is the difference between bipolar I and bipolar II?",
    a: "Bipolar I involves full manic episodes — periods of extremely elevated mood, energy, and sometimes psychotic symptoms — that last at least seven days or require hospitalization. Bipolar II involves hypomanic episodes (less severe than full mania) alternating with major depressive episodes. Both are serious conditions, and both respond to proper treatment. Our clinical team determines the specific diagnosis during your evaluation.",
  },
  {
    q: "How important is medication in bipolar treatment?",
    a: "Medication is a cornerstone of bipolar disorder treatment. Mood stabilizers and sometimes atypical antipsychotics help prevent the extreme highs and lows that characterize the condition. At DRC, our psychiatrists work closely with you to find the right medication at the right dose, monitoring your response carefully and adjusting as needed. Medication is always combined with therapy for the best outcomes.",
  },
  {
    q: "Can bipolar disorder be managed long-term?",
    a: "Absolutely. While bipolar disorder is a lifelong condition, it can be effectively managed with the right combination of medication, therapy, lifestyle modifications, and support. Many people with bipolar disorder lead full, productive, and satisfying lives. Our program is designed to give you every tool you need for long-term stability.",
  },
  {
    q: "What if I've been misdiagnosed with depression instead of bipolar disorder?",
    a: "Misdiagnosis is extremely common with bipolar disorder — studies suggest up to 40% of people with bipolar are initially diagnosed with major depression alone. This matters because antidepressants without a mood stabilizer can actually trigger manic episodes. Our comprehensive psychiatric evaluation includes a detailed personal and family history specifically designed to catch bipolar disorder that may have been missed.",
  },
  {
    q: "Do you treat bipolar disorder with co-occurring substance use?",
    a: "Yes — this is one of our specialties. Research shows that nearly half of people with bipolar disorder also struggle with substance use. Our dual diagnosis approach treats both conditions simultaneously, which is essential because untreated substance use destabilizes mood, and untreated bipolar disorder drives continued substance use.",
  },
];

export default function BipolarTreatmentPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/mental-health/bipolar-disorder-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Bipolar Disorder"
        description="Bipolar disorder is a mood disorder characterized by alternating episodes of mania or hypomania and depression that significantly disrupt daily functioning and relationships."
        url="/mental-health/bipolar-disorder-treatment"
        possibleTreatments={["Medication Management", "Cognitive Behavioral Therapy", "Interpersonal and Social Rhythm Therapy", "Psychoeducation", "Family Therapy"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="Bipolar Disorder Treatment"
        description="Stability isn't just possible — it's within reach. Expert bipolar disorder treatment that brings balance back to your life."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Condition Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              When Your Mood Controls Your Life Instead of the Other Way Around
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              One week, you&apos;re on top of the world. Your mind is racing with ideas, you barely need sleep, everything feels possible. The next, you can&apos;t get out of bed. The energy is gone, replaced by a heaviness so dense you can barely think, let alone function.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Bipolar disorder isn&apos;t just &quot;mood swings.&quot; It&apos;s a neurological condition that sends your brain through extreme states — mania or hypomania at one end, deep depression at the other — often with devastating consequences for your relationships, career, finances, and sense of self.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The hardest part? During manic episodes, you may not even realize anything is wrong. And during depressive episodes, it&apos;s nearly impossible to imagine feeling better. This unpredictability is what makes bipolar disorder so exhausting — and why specialized treatment is essential. At Desert Recovery Centers, our clinical team has deep experience stabilizing bipolar disorder and helping you build a life that isn&apos;t dictated by your mood.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Recognizing the Signs
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Symptoms of Bipolar Disorder
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Manic / Hypomanic Episodes</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Abnormally elevated or irritable mood lasting days or weeks",
                    "Dramatically decreased need for sleep without feeling tired",
                    "Racing thoughts, rapid speech, jumping between ideas",
                    "Grandiosity — inflated self-esteem or unrealistic beliefs about abilities",
                    "Impulsive, risky behavior: spending sprees, reckless driving, risky sex",
                    "Inability to focus, starting many projects but finishing none",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Depressive Episodes</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Deep sadness, emptiness, or hopelessness lasting weeks or more",
                    "Loss of interest or pleasure in all activities",
                    "Extreme fatigue and difficulty with basic daily tasks",
                    "Difficulty concentrating, making decisions, or remembering",
                    "Changes in sleep — insomnia or sleeping excessively",
                    "Thoughts of death or suicide",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How We Treat Bipolar Disorder at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Bipolar disorder requires a precise, multi-layered treatment approach. Our program combines psychiatric stabilization with the psychotherapy and life skills training needed for sustained balance.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Psychiatric Evaluation & Medication Management",
                  desc: "Our board-certified psychiatrists conduct thorough diagnostic evaluations, develop targeted medication protocols using mood stabilizers and other appropriate medications, and monitor your response closely — adjusting as needed to achieve optimal stabilization with minimal side effects.",
                },
                {
                  title: "Cognitive Behavioral Therapy (CBT)",
                  desc: "CBT adapted for bipolar disorder helps you identify the early warning signs of mood episodes, challenge distorted thinking during both manic and depressive states, and develop strategies to maintain emotional balance.",
                },
                {
                  title: "Interpersonal & Social Rhythm Therapy (IPSRT)",
                  desc: "This specialized therapy helps you establish and maintain consistent daily routines — sleep, meals, activity, social interactions — which research shows is one of the most powerful tools for preventing bipolar mood episodes.",
                },
                {
                  title: "Psychoeducation",
                  desc: "Understanding your condition is powerful. We teach you exactly how bipolar disorder works in your brain, how to recognize your personal triggers and early warning signs, and how to build a lifestyle that supports stability.",
                },
                {
                  title: "Family Therapy & Education",
                  desc: "Bipolar disorder impacts the entire family. Our family programming educates your loved ones about the condition, rebuilds communication patterns, and creates a support system that promotes long-term stability.",
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

      {/* Why DRC */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Bipolar Treatment That Goes Beyond Stabilization
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Expert Psychiatric Care",
                  desc: "Our psychiatrists specialize in mood disorders and have extensive experience with the nuances of bipolar medication management — including clients who haven't responded to previous treatments.",
                },
                {
                  title: "Dual Diagnosis Integration",
                  desc: "Up to 60% of people with bipolar disorder also struggle with substance use. We treat both conditions in an integrated program — because stabilizing one without addressing the other leads to relapse in both.",
                },
                {
                  title: "Structured Environment",
                  desc: "Routine is medicine for bipolar disorder. Our residential program provides the consistent daily structure — regular sleep, meals, activities, and therapy — that helps regulate your biological rhythms and stabilize mood.",
                },
                {
                  title: "Comprehensive Aftercare",
                  desc: "Bipolar disorder requires ongoing management. We develop detailed discharge plans that include medication continuity, outpatient therapy connections, support group recommendations, and clear protocols for recognizing and responding to early warning signs.",
                },
                {
                  title: "Dignity & Understanding",
                  desc: "Bipolar disorder carries stigma that can make seeking help feel shameful. At DRC, you'll be met with clinical expertise and genuine compassion — by a team that understands the courage it takes to ask for help.",
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

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          { question: "What is bipolar disorder treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) offers specialized bipolar disorder treatment for both bipolar I and bipolar II. With board-certified psychiatrists, doctoral-level psychologists, and a maximum of 10 beds per facility, clients receive expert mood stabilization and intensive psychotherapy in a structured residential setting." },
          { question: "How does Desert Recovery Centers treat bipolar disorder?", answer: "DRC treats bipolar disorder through psychiatric medication management using mood stabilizers and atypical antipsychotics, Cognitive Behavioral Therapy adapted for bipolar, Interpersonal and Social Rhythm Therapy (IPSRT), psychoeducation, and family therapy. Treatment plans are individualized to address each client's specific bipolar subtype and co-occurring conditions." },
          { question: "How long does bipolar disorder treatment take at Desert Recovery Centers?", answer: "Residential bipolar disorder treatment at DRC typically lasts 30 to 90 days, allowing time for thorough medication optimization and therapeutic skill-building. Outpatient PHP and IOP programs provide 6 to 12 weeks of continued structured support. Treatment duration is tailored to each client's stabilization progress and aftercare needs." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/bipolar-disorder-treatment" />
      <CTASection />
      <Footer />
    </>
  );
}
