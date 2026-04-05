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
import AnimatedSection from "@/components/animated/AnimatedSection";

export const metadata: Metadata = buildMetadata({
  title: "Alcohol Detox in Arizona | Medical Detox",
  description:
    "Medically supervised alcohol detox in Arizona. 24/7 nursing, physician oversight, safe withdrawal. Call (480) 931-3617 now.",
  path: "/addiction/alcohol-detox",
});

const faqs = [
  {
    q: "Is alcohol withdrawal dangerous?",
    a: "Yes, alcohol withdrawal can be medically dangerous and in severe cases, life-threatening. Symptoms can range from anxiety, tremors, and nausea to seizures and delirium tremens (DTs). This is why medically supervised detox is critical, never attempt to stop heavy drinking abruptly without medical support. Our clinical team monitors your vitals around the clock and manages symptoms safely.",
  },
  {
    q: "How long does alcohol detox take?",
    a: "Alcohol detox typically lasts 5 to 10 days, though the timeline varies based on the severity of dependence, length of use, overall health, and whether co-occurring conditions are present. Acute withdrawal symptoms usually peak within 24 to 72 hours and gradually improve. Our medical team manages the entire process to ensure your safety and comfort.",
  },
  {
    q: "What medications are used during alcohol detox?",
    a: "Our physicians may use benzodiazepines to prevent seizures and manage anxiety, anticonvulsants, medications to control nausea and blood pressure, and nutritional supplementation (particularly thiamine and folate). All medication protocols are individualized based on your specific symptoms and medical history.",
  },
  {
    q: "What happens after detox is complete?",
    a: "Detox is only the first step, it addresses the physical dependence but not the underlying addiction. After detox, clients transition directly into our residential treatment program where the real therapeutic work begins: individual therapy, group therapy, dual diagnosis treatment, and holistic healing. This seamless transition from detox to treatment is a key advantage of our program.",
  },
  {
    q: "Do you accept insurance for alcohol detox?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost and can often get you started within 48 hours.",
  },
];

export default function AlcoholDetoxPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/addiction/alcohol-detox" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Medically Supervised Alcohol Detoxification"
        description="24/7 medically supervised alcohol detox with physician oversight, medication management, and seamless transition to residential addiction treatment."
        url="/addiction/alcohol-detox"
        conditions={["Alcohol Use Disorder", "Alcohol Dependence", "Alcohol Withdrawal Syndrome"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Alcohol Detox in Arizona"
        description="Safe, medically supervised alcohol withdrawal with 24/7 physician oversight, the first step toward lasting recovery."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              You Cannot Do This Safely Alone
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;ve been drinking heavily and you&apos;re thinking about stopping, please read this carefully: alcohol withdrawal can be life-threatening. Unlike most other substances, stopping alcohol abruptly after prolonged heavy use can cause seizures, delirium tremens, and in rare cases, death. This is not meant to scare you, it&apos;s meant to protect you.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Medically supervised detox ensures that your withdrawal is managed safely, with round-the-clock monitoring by physicians and nurses who specialize in addiction medicine. At Desert Recovery Centers, detox isn&apos;t an isolated event, it&apos;s the first step in a comprehensive treatment journey, with seamless transition into our residential program once you&apos;re medically stabilized.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              If you&apos;re ready to stop drinking, we can help you do it safely. Most clients begin treatment within 48 hours of their first call.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Room-1.jpg", alt: "DRC private room for detox comfort" }}
            rightImage={{ src: "/images/glendale/Glendale-Therapy-Room.jpg", alt: "DRC therapy room" }}
          />
        </div>
      </section>

      {/* Withdrawal Timeline */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">What to Expect</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Alcohol Withdrawal Timeline</h2>
            <div className="space-y-4">
              {[
                { phase: "6-12 Hours", title: "Early Withdrawal", desc: "Anxiety, insomnia, nausea, tremors, sweating. Our medical team begins monitoring and may start medications to prevent escalation." },
                { phase: "12-48 Hours", title: "Peak Symptoms", desc: "Withdrawal symptoms typically intensify. Risk of seizures is highest during this window. 24/7 medical monitoring and medication management are critical." },
                { phase: "48-72 Hours", title: "Acute Phase", desc: "For severe cases, delirium tremens can develop, involving confusion, hallucinations, and dangerous vital sign changes. Our medical team is prepared to manage all complications." },
                { phase: "5-10 Days", title: "Resolution & Stabilization", desc: "Acute symptoms gradually resolve. Mood and sleep begin to normalize. Your clinical team prepares you for transition into residential treatment programming." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold font-semibold text-xs bg-gold/10 px-3 py-1 rounded-full">{item.phase}</span>
                    <h3 className="font-display text-lg text-forest font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Detox Protocol */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Protocol</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Manage Alcohol Detox at DRC</h2>
            <div className="space-y-6">
              {[
                { title: "24/7 Medical Monitoring", desc: "Registered nurses monitor your vitals, symptoms, and comfort around the clock. Our physicians are available for any medical need at any hour." },
                { title: "Individualized Medication Protocols", desc: "Our medical team develops a personalized medication plan to manage withdrawal symptoms safely, including seizure prevention, anxiety management, and nutritional support." },
                { title: "Comfort-Focused Environment", desc: "Detox is physically and emotionally challenging. Our luxury facilities provide private rooms, gourmet meals, and a calm environment that reduces the distress of the process." },
                { title: "Seamless Treatment Transition", desc: "Once medically stabilized, you transition directly into our residential treatment program, same facility, same team. No gap, no disruption, no having to start over somewhere else." },
                { title: "Dual Diagnosis Assessment", desc: "During detox, our psychiatric team begins evaluating for co-occurring mental health conditions. This early assessment ensures your residential treatment plan addresses everything from day one." },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">Related Treatment Programs</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Alcohol Addiction Treatment", href: "/addiction/alcohol" },
                { label: "Opioid Detox", href: "/addiction/opioid-detox" },
                { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
                { label: "Residential Treatment", href: "/programs/residential" },
                { label: "DRC Glendale", href: "/locations/glendale" },
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
      <AEOBlock entries={[
        { question: "What is alcohol detox at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides medically supervised alcohol detoxification with 24/7 nursing care and physician oversight. Detox typically lasts 5 to 10 days, followed by seamless transition into residential treatment. All three facilities (Glendale, Scottsdale, Phoenix) offer detox services with a maximum of 10 beds per location." },
        { question: "Is alcohol detox dangerous without medical supervision?", answer: "Yes. Alcohol withdrawal can cause seizures, delirium tremens, and in severe cases can be life-threatening. Medically supervised detox at Desert Recovery Centers ensures safe withdrawal management with individualized medication protocols, 24/7 vital sign monitoring, and immediate medical intervention when needed." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
