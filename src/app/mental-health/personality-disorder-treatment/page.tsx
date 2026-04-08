import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { InlineFAQSchema, SpeakableSchema, MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";

const meta = getPageMeta("/mental-health/personality-disorder-treatment/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg", alt: meta.title }],
  },
};

const faqs = [
  {
    q: "What personality disorders do you treat?",
    a: "We treat the full range of personality disorders, with particular expertise in borderline personality disorder (BPD), which is the most common personality disorder seen in treatment settings. We also treat narcissistic personality disorder, avoidant personality disorder, dependent personality disorder, and other Cluster A, B, and C personality conditions. Treatment is always individualized based on your specific diagnosis and symptoms.",
  },
  {
    q: "What is DBT and why is it used for personality disorders?",
    a: "Dialectical Behavior Therapy (DBT) was originally developed specifically for borderline personality disorder and is considered the gold-standard treatment. It teaches four core skill sets: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. These skills directly address the emotional intensity, relationship difficulties, and behavioral patterns that characterize personality disorders. At DRC, DBT is delivered through individual therapy, skills groups, and real-time coaching.",
  },
  {
    q: "Can personality disorders actually be treated?",
    a: "Yes, and this is one of the most important things to know. Despite outdated beliefs that personality disorders are 'untreatable,' modern research consistently shows that with evidence-based treatment like DBT, most people with personality disorders experience significant improvement. Many clients no longer meet diagnostic criteria after completing treatment. Recovery is not only possible, it's the expected outcome with proper care.",
  },
  {
    q: "How long does treatment for personality disorders take?",
    a: "Residential treatment typically lasts 45 to 90 days for personality disorders, as these conditions require more time to develop and practice new skills. Some clients benefit from stepping down to our PHP or IOP programs for continued structure after residential treatment. Your clinical team will work with you to determine the timeline that gives you the best foundation for lasting change.",
  },
  {
    q: "Do you work with family members during treatment?",
    a: "Absolutely. Personality disorders significantly impact family relationships, and family involvement is an important part of recovery. Our family programming includes education about the condition, communication skills training, boundary-setting guidance, and joint therapy sessions, helping your loved ones understand your experience and learn how to support your recovery effectively.",
  },
];

export default function PersonalityDisorderTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["personality-disorder-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/personality-disorder-treatment")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/mental-health/personality-disorder-treatment/#webpage","url":"https://www.desertrecoverycenters.com/mental-health/personality-disorder-treatment/","name":"Personality Disorder Treatment Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/mental-health/personality-disorder-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Personality Disorders"
        description="Personality disorders are a group of mental health conditions characterized by enduring patterns of inner experience and behavior that deviate from cultural expectations, leading to distress and impaired functioning."
        url="/mental-health/personality-disorder-treatment"
        possibleTreatments={["Dialectical Behavior Therapy", "Schema Therapy", "EMDR", "Medication Management", "Family Therapy"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/personality-disorder-treatment")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="Personality Disorder Treatment"
        description="You are not your diagnosis. Compassionate, evidence-based treatment that helps you build the stable, connected life you deserve."
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
            <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              When Emotions Are Too Intense and Relationships Keep Breaking
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Maybe relationships have always been the hardest part of your life. One moment you feel deeply connected to someone; the next, you&apos;re convinced they&apos;re going to leave. You swing between needing people intensely and pushing them away. Your emotions hit like a tidal wave, and by the time they pass, there&apos;s damage you didn&apos;t intend.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Or perhaps you&apos;ve spent years feeling fundamentally different from other people, unable to connect the way others seem to, always struggling with a sense of emptiness or identity confusion that you can&apos;t quite explain.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Personality disorders are among the most misunderstood conditions in mental health. They carry heavy stigma, and too many clinicians still approach them with pessimism. But at Desert Recovery Centers, we know the truth: personality disorders respond powerfully to specialized treatment. With the right care, the patterns that have controlled your life can fundamentally change, and your relationships, your stability, and your sense of self can heal.
            </p>
            </AnimatedSection>
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
              Common Signs of Personality Disorders
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Personality disorders manifest in persistent patterns that affect how you think, feel, and relate to others. Common signs include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Intense, unstable relationships that swing between idealization and devaluation",
                "Chronic feelings of emptiness or a fragmented sense of identity",
                "Extreme emotional reactions that feel disproportionate to the situation",
                "Intense fear of abandonment, real or imagined",
                "Impulsive behaviors that provide short-term relief but long-term harm",
                "Difficulty controlling anger or experiencing chronic irritability",
                "Self-harming behaviors or recurrent suicidal thoughts",
                "Persistent distrust of others or social withdrawal and avoidance",
                "Rigid thinking patterns and difficulty adapting to change",
                "Deep sensitivity to criticism or perceived rejection",
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
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How We Treat Personality Disorders at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our personality disorder program is anchored in Dialectical Behavior Therapy, the most researched and effective treatment for these conditions, enhanced with complementary therapies for comprehensive healing.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Dialectical Behavior Therapy (DBT)",
                  desc: "Our comprehensive DBT program includes individual therapy, skills training groups, and real-time coaching. You'll develop skills in four critical areas: mindfulness (staying present), distress tolerance (surviving crises without making things worse), emotion regulation (understanding and managing intense feelings), and interpersonal effectiveness (communicating needs while maintaining relationships).",
                },
                {
                  title: "Schema Therapy",
                  desc: "Schema therapy identifies the deep, often unconscious patterns (schemas) formed in childhood that drive your current behaviors and relationship difficulties. By understanding and gradually transforming these patterns, you create lasting change at the foundation level.",
                },
                {
                  title: "Trauma-Informed Care",
                  desc: "Many personality disorders develop in response to early trauma or adverse childhood experiences. Our EMDR and trauma-focused therapies address these root causes, because healing the wound beneath the symptoms is how true recovery happens.",
                },
                {
                  title: "Medication Support",
                  desc: "While there's no medication that treats personality disorders directly, our psychiatrists can prescribe medications to manage specific symptoms like mood instability, anxiety, impulsivity, or co-occurring conditions, always as part of a broader therapeutic plan.",
                },
                {
                  title: "Therapeutic Community",
                  desc: "Living in a supportive residential community provides real-time opportunities to practice new relational skills. The connections you form with peers and staff become a living laboratory for healthier ways of relating.",
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
            </AnimatedSection>
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
              A Team That Believes in Your Recovery
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "DBT-Trained Clinical Team",
                  desc: "Our clinicians have advanced training in DBT and personality disorder treatment, not just general mental health experience. This specialization matters because personality disorders require specific therapeutic approaches that differ significantly from standard treatment.",
                },
                {
                  title: "Compassion, Not Stigma",
                  desc: "Personality disorders carry more clinical stigma than almost any other diagnosis. At DRC, we approach these conditions with the same respect and clinical rigor we bring to any condition, because we know that with the right treatment, profound change is possible.",
                },
                {
                  title: "Dual Diagnosis Expertise",
                  desc: "Substance use disorders are extremely common alongside personality disorders. Our integrated approach treats both simultaneously, breaking the cycle where emotional dysregulation drives substance use and substance use worsens emotional instability.",
                },
                {
                  title: "Longer Treatment Windows",
                  desc: "Personality disorders benefit from extended treatment. We offer flexible program lengths that allow enough time for new skills to become second nature, not just concepts you understand intellectually, but automatic responses you can rely on in real life.",
                },
                {
                  title: "Family Healing",
                  desc: "Your recovery impacts everyone who loves you. Our family programming helps repair relationships damaged by the disorder and equips your support system with the understanding and skills to foster your continued growth.",
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
          { question: "What is personality disorder treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides specialized personality disorder treatment anchored in Dialectical Behavior Therapy (DBT). With DBT-trained clinicians, doctoral-level clinical psychologists, and a maximum of 10 beds per facility, clients receive intensive, compassionate care in a therapeutic residential community." },
          { question: "How does Desert Recovery Centers treat personality disorders?", answer: "DRC treats personality disorders using comprehensive Dialectical Behavior Therapy (DBT) including individual therapy, skills groups, and real-time coaching. Treatment also incorporates schema therapy, EMDR for underlying trauma, medication support for co-occurring symptoms, and family therapy to rebuild relational patterns." },
          { question: "How long does personality disorder treatment take at Desert Recovery Centers?", answer: "Residential personality disorder treatment at DRC typically lasts 45 to 90 days, as these conditions require extended time to develop and practice new skills. Clients may step down to PHP or IOP programs for 6 to 12 weeks of continued structured support. Treatment duration is tailored to each client's progress in building lasting behavioral change." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/personality-disorder-treatment" />
      <FAQSection faqs={faqData["personality-disorder-treatment"]} />
      <CTASection />
      <Footer />
    </>
  );
}
