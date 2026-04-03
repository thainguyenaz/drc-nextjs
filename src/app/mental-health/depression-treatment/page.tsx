import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Depression Treatment in Arizona — Desert Recovery Centers",
  description:
    "Comprehensive depression treatment for major depressive disorder, persistent depression, and co-occurring conditions. Residential and outpatient programs in Arizona.",
};

const faqs = [
  {
    q: "How do I know if I need professional treatment for depression?",
    a: "If depressive symptoms have persisted for more than two weeks and are interfering with your ability to work, maintain relationships, or care for yourself, professional treatment is strongly recommended. Warning signs that indicate a higher level of care include thoughts of self-harm, inability to get out of bed, significant weight changes, or turning to alcohol or drugs to cope.",
  },
  {
    q: "What types of depression do you treat?",
    a: "We treat all forms of depressive disorders including major depressive disorder (MDD), persistent depressive disorder (dysthymia), seasonal affective disorder (SAD), postpartum depression, and treatment-resistant depression. Our clinical team is also experienced in treating depression that co-occurs with anxiety, trauma, substance use disorders, and other mental health conditions.",
  },
  {
    q: "How is depression treatment different at DRC compared to outpatient therapy?",
    a: "In our residential program, you're fully immersed in your recovery — receiving daily individual therapy, group sessions, psychiatric care, and holistic treatments in a structured, supportive environment. This level of intensity can accomplish in weeks what might take months or years in weekly outpatient sessions, especially for moderate to severe depression.",
  },
  {
    q: "Will I need medication for depression?",
    a: "Not necessarily. While many clients benefit from antidepressant medication — especially during the early phase of treatment — our approach is always individualized. Our psychiatrists conduct thorough evaluations and discuss all options with you. Some clients respond well to therapy alone, while others find that a combination of medication and therapy produces the best results.",
  },
  {
    q: "What happens if my depression returns after treatment?",
    a: "Depression can be a recurring condition, which is why relapse prevention is a central part of your treatment plan. Before discharge, your clinical team develops a detailed aftercare strategy that includes ongoing therapy, lifestyle modifications, early warning sign recognition, and direct access to our alumni support network and clinical team for guidance.",
  },
];

export default function DepressionTreatmentPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="Depression Treatment"
        description="You deserve more than just getting through the day. Compassionate, clinical depression treatment that helps you feel like yourself again."
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
              When the Weight Becomes Too Much to Carry
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Depression doesn&apos;t always look like sadness. Sometimes it looks like numbness — a flat, gray emptiness where feelings used to be. Sometimes it looks like exhaustion so deep that even small tasks feel impossible. Sometimes it looks like going through the motions while feeling completely disconnected from the life you&apos;re living.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              You may have tried to push through it. Told yourself it would pass. Maybe others have told you to &quot;think positive&quot; or &quot;just exercise more.&quot; And maybe you&apos;ve started to wonder if this heaviness is just who you are now.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              It&apos;s not. Depression is a medical condition — one that changes your brain chemistry, your energy, your ability to experience joy. And with the right treatment, it responds. At Desert Recovery Centers, we&apos;ve watched hundreds of people who felt exactly the way you do right now walk out of our program feeling genuinely, durably better. That possibility exists for you too.
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
              Symptoms of Depression
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Depression affects every part of your life — mind, body, and spirit. Common symptoms include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Persistent sadness, emptiness, or hopelessness that won't lift",
                "Loss of interest or pleasure in activities you once enjoyed",
                "Fatigue and low energy, even after adequate sleep",
                "Difficulty concentrating, making decisions, or remembering things",
                "Changes in appetite — eating significantly more or less than usual",
                "Sleep disturbances — insomnia or sleeping excessively",
                "Feelings of worthlessness, guilt, or self-blame",
                "Thoughts of death, self-harm, or suicide",
              ].map((symptom, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{symptom}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-forest/5 rounded-lg p-4 border border-forest/10">
              <p className="text-forest text-sm leading-relaxed font-medium">
                If you or someone you love is experiencing thoughts of suicide, please call 988 (Suicide & Crisis Lifeline) immediately, or contact our admissions team 24/7 at (480) 931-3617.
              </p>
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
              How We Treat Depression at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our depression program goes far beyond traditional talk therapy. We combine the most effective clinical interventions with holistic healing to address depression at every level.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Comprehensive Psychiatric Evaluation",
                  desc: "Every client receives a thorough assessment by our psychiatric team to understand the biological, psychological, and social factors contributing to your depression — ensuring your treatment plan targets the actual drivers of your condition.",
                },
                {
                  title: "Individual & Group Psychotherapy",
                  desc: "Daily individual sessions with licensed psychologists, plus structured group therapy using CBT, behavioral activation, and interpersonal therapy — proven approaches that help you understand your depression and build the skills to move beyond it.",
                },
                {
                  title: "Medication Optimization",
                  desc: "Our psychiatrists specialize in finding the right medication at the right dose — and monitoring your response closely. For clients with treatment-resistant depression, we explore advanced options to find what works.",
                },
                {
                  title: "Trauma-Informed Care",
                  desc: "Unresolved trauma is one of the most common drivers of chronic depression. Our EMDR and trauma-focused therapies address these deeper wounds that may be fueling your depressive episodes.",
                },
                {
                  title: "Body-Based & Holistic Healing",
                  desc: "Exercise programming, yoga, mindfulness meditation, nutritional counseling, and art therapy — because healing the body and engaging the spirit are essential parts of lifting depression.",
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
              Real Depression Treatment, Not Just Symptom Management
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Dual Diagnosis Specialists",
                  desc: "Depression and substance use fuel each other in a devastating cycle. Our integrated approach treats both simultaneously — because treating one without the other is treating neither.",
                },
                {
                  title: "Doctor-Led Clinical Teams",
                  desc: "Your treatment is led by licensed clinical psychologists and board-certified psychiatrists, not paraprofessionals. You receive the highest standard of clinical care available in residential treatment.",
                },
                {
                  title: "A Healing Environment",
                  desc: "Depression thrives in isolation and monotony. Our luxury Arizona facilities surround you with warmth, natural beauty, and meaningful daily structure — creating conditions where healing happens naturally.",
                },
                {
                  title: "Connection & Community",
                  desc: "You'll be surrounded by others who understand what you're going through. The therapeutic community at DRC becomes a source of belonging and motivation that many of our clients describe as transformative.",
                },
                {
                  title: "Outcomes-Focused",
                  desc: "We measure progress with validated clinical instruments and adjust your plan accordingly. You'll see tangible improvement — not vague reassurances — throughout your treatment.",
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
      <CTASection />
      <Footer />
    </>
  );
}
