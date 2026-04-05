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
  title: "Opioid Detox in Arizona | Medical Detox",
  description:
    "Medically supervised opioid detox in Arizona. MAT-supported, 24/7 nursing, safe withdrawal management. Call (480) 931-3617.",
  path: "/addiction/opioid-detox",
});

const faqs = [
  {
    q: "What is medication-assisted treatment (MAT) for opioid detox?",
    a: "MAT uses FDA-approved medications like buprenorphine (Suboxone) or naltrexone (Vivitrol) alongside therapy to manage withdrawal symptoms, reduce cravings, and support long-term recovery. These medications are prescribed and monitored by our physicians as part of a comprehensive treatment plan, not as a standalone solution.",
  },
  {
    q: "How long does opioid detox take?",
    a: "Opioid detox typically lasts 5 to 14 days depending on the substance (heroin, fentanyl, or prescription opioids), duration and severity of use, and whether MAT is utilized. Fentanyl withdrawal can be more prolonged due to the drug's potency. Our medical team manages the entire process for your safety and comfort.",
  },
  {
    q: "Is opioid withdrawal dangerous?",
    a: "While opioid withdrawal is rarely life-threatening, it is intensely uncomfortable and can lead to dangerous dehydration. More importantly, the relapse risk during unsupervised withdrawal is extremely high, and relapse after a period of abstinence dramatically increases the risk of fatal overdose due to reduced tolerance. Medical supervision ensures safety and significantly improves your chances of successful detox.",
  },
  {
    q: "Do you treat fentanyl addiction specifically?",
    a: "Yes. Fentanyl has unique challenges due to its extreme potency and long-lasting presence in the body. Our medical team has specific experience managing fentanyl withdrawal, which can be more intense and prolonged than withdrawal from other opioids. We adjust our detox protocols accordingly.",
  },
  {
    q: "What happens after opioid detox?",
    a: "Detox addresses physical dependence but not the addiction itself. After detox, you transition seamlessly into our residential treatment program where the real work begins, individual therapy, group therapy, dual diagnosis treatment, and holistic healing. This immediate transition is critical because the weeks following detox represent the highest relapse risk period.",
  },
];

export default function OpioidDetoxPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/addiction/opioid-detox" cssSelectors={["[data-speakable]"]} />
      <MedicalTherapySchema
        name="Medically Supervised Opioid Detoxification"
        description="MAT-supported opioid detox with 24/7 medical monitoring for heroin, fentanyl, and prescription opioid withdrawal, followed by seamless transition to residential treatment."
        url="/addiction/opioid-detox"
        conditions={["Opioid Use Disorder", "Heroin Addiction", "Fentanyl Addiction", "Prescription Opioid Dependence"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Opioid Detox in Arizona"
        description="Safe, medically supervised opioid withdrawal with MAT support and 24/7 physician oversight, your first step to freedom."
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
              The First Step Is the Hardest. We Make It Safe.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you&apos;ve been using opioids, whether heroin, fentanyl, oxycodone, or other prescription painkillers, the fear of withdrawal is one of the biggest barriers to getting help. The physical agony of detoxing without medical support is real, and the relapse risk during unsupervised withdrawal is dangerously high.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, our medical detox program ensures you withdraw safely and with as little discomfort as possible. Our physicians use medication-assisted treatment (MAT) when appropriate, FDA-approved medications that ease withdrawal symptoms and reduce cravings, while our nursing staff monitors your vitals and comfort around the clock.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Once you&apos;re medically stable, you transition directly into our residential treatment program, same facility, same team. No gap in care, no moment where you&apos;re left vulnerable. This seamless approach is how real recovery starts.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collision */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{ src: "/images/glendale/Glendale-Room-2.jpg", alt: "DRC private room" }}
            rightImage={{ src: "/images/glendale/Glendale-Massage.jpg", alt: "DRC massage room for comfort" }}
          />
        </div>
      </section>

      {/* Withdrawal Timeline */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">What to Expect</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Opioid Withdrawal Timeline</h2>
            <div className="space-y-4">
              {[
                { phase: "8-24 Hours", title: "Early Withdrawal", desc: "Muscle aches, anxiety, agitation, tearing eyes, runny nose, sweating, insomnia. Onset timing varies, shorter-acting opioids (heroin) begin earlier than longer-acting ones (fentanyl)." },
                { phase: "1-3 Days", title: "Peak Symptoms", desc: "Nausea, vomiting, diarrhea, abdominal cramps, dilated pupils, rapid heartbeat. This is when symptoms are most intense. MAT medications significantly reduce the severity." },
                { phase: "3-7 Days", title: "Gradual Improvement", desc: "Physical symptoms begin to ease. Sleep disturbances and mood changes may persist. Medical support continues to ensure comfort and prevent complications." },
                { phase: "7-14 Days", title: "Stabilization", desc: "Acute withdrawal resolves. Your clinical team prepares you for transition into full residential treatment programming. Some post-acute symptoms (fatigue, mild mood changes) may continue to improve over weeks." },
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

      {/* Protocol */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Protocol</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Manage Opioid Detox at DRC</h2>
            <div className="space-y-6">
              {[
                { title: "Medication-Assisted Treatment (MAT)", desc: "When clinically appropriate, our physicians prescribe FDA-approved medications like buprenorphine to ease withdrawal, reduce cravings, and stabilize your body chemistry, making the process significantly more manageable." },
                { title: "24/7 Medical Monitoring", desc: "Registered nurses monitor your vitals, hydration, and symptom severity around the clock. Our physicians are available for any medical need at any hour of the day or night." },
                { title: "Comfort & Dignity", desc: "Withdrawal is hard enough without feeling like you're in a clinical ward. Our luxury facilities provide private rooms, gourmet meals, and a warm environment that preserves your dignity during the most vulnerable phase of recovery." },
                { title: "Fentanyl-Specific Protocols", desc: "Fentanyl's extreme potency requires adjusted detox protocols. Our medical team has specific experience managing fentanyl withdrawal, including extended timelines and modified medication approaches." },
                { title: "Direct Transition to Treatment", desc: "Detox without treatment is a setup for relapse. At DRC, you move seamlessly from detox into our residential program, same facility, same team, so the momentum of your recovery never stops." },
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

      {/* ── Benzo & Opioid Co-Dependence Video ──────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Expert Insight</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Benzodiazepine &amp; Opioid Co-Dependence</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/iUtvJ-oRT_s?rel=0"
              title="How do Benzodiazepine and Opioid Co-Dependence Create a More Dangerous Withdrawal Picture"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
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
                { label: "Heroin Addiction Treatment", href: "/addiction/heroin" },
                { label: "Fentanyl Addiction Treatment", href: "/addiction/fentanyl" },
                { label: "Alcohol Detox", href: "/addiction/alcohol-detox" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Residential Treatment", href: "/programs/residential" },
                { label: "DRC Scottsdale", href: "/locations/scottsdale" },
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
        { question: "What is opioid detox at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides medically supervised opioid detoxification with MAT support, 24/7 nursing care, and physician oversight. Detox typically lasts 5 to 14 days and is followed by seamless transition into residential treatment. Specialized protocols are available for fentanyl withdrawal." },
        { question: "Does Desert Recovery Centers use MAT for opioid detox?", answer: "Yes. When clinically appropriate, DRC physicians prescribe FDA-approved medications like buprenorphine (Suboxone) and naltrexone (Vivitrol) as part of medication-assisted treatment for opioid detox. MAT reduces withdrawal severity, manages cravings, and supports long-term recovery as part of a comprehensive treatment plan." },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
