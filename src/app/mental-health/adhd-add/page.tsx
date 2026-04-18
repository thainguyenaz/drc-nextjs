import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema, MedicalConditionSchema } from "@/lib/seo";
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

const meta = getPageMeta("/mental-health/adhd-add/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: meta.title }],
  },
};

const faqs = [
  {
    q: "Can adults really have ADHD?",
    a: "Absolutely. ADHD is not a childhood condition that people 'grow out of.' Research shows that approximately 60% of children with ADHD continue to experience significant symptoms into adulthood. Many adults are diagnosed for the first time in their 30s, 40s, or even later, often after years of struggling with focus, organization, and emotional regulation without understanding why.",
  },
  {
    q: "Why would someone with ADHD need residential treatment?",
    a: "Residential treatment is particularly valuable when ADHD co-occurs with substance use disorders, depression, anxiety, or other conditions that complicate outpatient management. It's also beneficial when years of untreated ADHD have led to significant life disruption. The structured environment allows for comprehensive assessment, careful medication optimization, and intensive skills training, all happening simultaneously.",
  },
  {
    q: "Do you prescribe stimulant medications for ADHD?",
    a: "When clinically appropriate, yes. Our psychiatrists are experienced in prescribing both stimulant and non-stimulant ADHD medications. For clients with co-occurring substance use disorders, we take extra care in medication selection, sometimes using non-stimulant options or closely monitored stimulant protocols. Every medication decision is individualized and discussed thoroughly with you.",
  },
  {
    q: "What's the connection between ADHD and substance use?",
    a: "Research shows that adults with untreated ADHD are significantly more likely to develop substance use disorders. Many people with ADHD unknowingly 'self-medicate' with alcohol, marijuana, cocaine, or other substances to manage symptoms like restlessness, racing thoughts, or emotional overwhelm. Treating the ADHD directly often dramatically reduces the drive to self-medicate.",
  },
  {
    q: "How is ADHD different from just being distracted or lazy?",
    a: "ADHD is a neurodevelopmental disorder, it involves measurable differences in brain structure and chemistry, particularly in areas that regulate attention, impulse control, and executive function. It's not a character flaw, lack of discipline, or intelligence issue. People with ADHD often work harder than their peers just to accomplish basic tasks. Proper treatment can be genuinely life-changing.",
  },
];

export default function ADHDTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["adhd-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/adhd-add")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/mental-health/adhd-add/#webpage","url":"https://www.desertrecoverycenters.com/mental-health/adhd-add/","name":"ADHD and ADD Treatment Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <SpeakableSchema url="/mental-health/adhd-add" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Attention-Deficit/Hyperactivity Disorder (ADHD)"
        description="ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning and development."
        url="/mental-health/adhd-add"
        possibleTreatments={["Medication Management", "Cognitive Behavioral Therapy", "Executive Function Skills Training", "Behavioral Coaching", "Psychoeducation"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/adhd-add")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="ADHD Treatment"
        description="It's not a lack of willpower. Comprehensive ADHD treatment that finally gives your brain what it needs to thrive."
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
              When Your Brain Won&apos;t Cooperate With the Life You&apos;re Trying to Live
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              You&apos;re not stupid. You&apos;re not lazy. You know what you need to do, you just can&apos;t seem to do it. The report sits untouched while your mind jumps between a dozen things. The conversation your partner is having goes in one ear and out the other, no matter how hard you try to listen. You forget appointments, lose your keys for the third time today, and feel a constant, low-grade frustration with yourself that never quite goes away.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Maybe you&apos;ve been called &quot;scattered,&quot; &quot;unreliable,&quot; or &quot;not living up to your potential&quot; your whole life. Maybe you&apos;ve internalized those messages and genuinely believe something is fundamentally wrong with you.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              There isn&apos;t. What&apos;s happening is that your brain operates differently, and when that difference goes unrecognized and untreated, it creates a cascade of challenges that affect every area of your life. At Desert Recovery Centers, we provide comprehensive ADHD assessment and treatment that addresses not just the symptoms, but the years of accumulated impact that untreated ADHD leaves behind.
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
              Symptoms of ADHD in Adults
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              ADHD in adults often looks different than in children. Common symptoms include:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Inattention</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Difficulty sustaining focus on tasks, especially ones that aren't stimulating",
                    "Frequently starting projects but struggling to finish them",
                    "Losing things constantly, keys, phone, wallet, important documents",
                    "Forgetting appointments, deadlines, and commitments",
                    "Difficulty following through on instructions or multistep tasks",
                    "Zoning out during conversations or meetings despite trying to pay attention",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Hyperactivity & Impulsivity</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Restlessness, feeling like you always need to be moving or doing something",
                    "Talking excessively or interrupting others without meaning to",
                    "Difficulty waiting your turn or being patient in slow situations",
                    "Making impulsive decisions, spending, quitting jobs, entering relationships",
                    "Emotional impulsivity, quick to anger, frustration, or overwhelm",
                    "Difficulty relaxing or 'turning off' your brain, even when exhausted",
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
            <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How We Treat ADHD at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our ADHD program combines thorough diagnostic assessment with targeted interventions that address both the neurological condition and its downstream effects on your life.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Comprehensive Assessment",
                  desc: "Accurate diagnosis is the foundation. Our clinical psychologists conduct thorough evaluations that differentiate ADHD from conditions with overlapping symptoms, anxiety, depression, bipolar disorder, sleep disorders, ensuring your treatment plan targets the right condition.",
                },
                {
                  title: "Medication Management",
                  desc: "Our psychiatrists specialize in ADHD pharmacotherapy, carefully selecting and titrating medications based on your specific symptoms, co-occurring conditions, and history. We monitor closely for efficacy and side effects, making adjustments until we find the right fit.",
                },
                {
                  title: "Cognitive Behavioral Therapy for ADHD",
                  desc: "CBT adapted specifically for ADHD targets the practical challenges, time management, organization, prioritization, procrastination, while also addressing the negative self-beliefs that years of struggling have created.",
                },
                {
                  title: "Executive Function Skills Training",
                  desc: "Structured coaching in the executive function skills that ADHD disrupts: planning, organization, time perception, working memory strategies, and impulse management, practical tools you can use immediately in daily life.",
                },
                {
                  title: "Dual Diagnosis Treatment",
                  desc: "ADHD and substance use disorders frequently co-occur. Many people with undiagnosed ADHD self-medicate with stimulants, alcohol, or marijuana. Our integrated approach treats both conditions together, addressing the ADHD that often drives the substance use.",
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
              ADHD Treatment That Sees the Whole Person
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Accurate, Thorough Diagnosis",
                  desc: "ADHD is frequently misdiagnosed or missed entirely, especially in adults and women. Our comprehensive assessment process ensures you get the right diagnosis, which is the first step toward the right treatment.",
                },
                {
                  title: "Expert Medication Management",
                  desc: "Finding the right ADHD medication at the right dose requires clinical expertise and careful monitoring. Our residential setting allows us to optimize your medication quickly and safely, something that can take months in outpatient care.",
                },
                {
                  title: "Addressing the Emotional Toll",
                  desc: "Years of untreated ADHD leave scars, shame, low self-esteem, relationship damage, career setbacks. We don't just treat the ADHD symptoms; we help you process the accumulated emotional impact and rebuild your confidence.",
                },
                {
                  title: "Structure That Works With Your Brain",
                  desc: "Our residential program provides the external structure that ADHD brains need to thrive, consistent routines, clear schedules, and an environment designed to minimize distractions while maximizing engagement.",
                },
                {
                  title: "Skills for Life After Treatment",
                  desc: "You leave with a personalized toolkit of strategies, systems, and coping mechanisms specifically designed for your ADHD profile, plus an aftercare plan that ensures continued support as you apply these skills in the real world.",
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
          { question: "What is ADHD treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides comprehensive ADHD assessment and treatment for adults. With doctoral-level clinical psychologists conducting thorough diagnostic evaluations, a maximum of 10 beds per facility, and expert psychiatric care, clients receive accurate diagnosis and individualized treatment in a structured residential setting." },
          { question: "How does Desert Recovery Centers treat ADHD?", answer: "DRC treats ADHD through comprehensive neuropsychological assessment, carefully optimized medication management using both stimulant and non-stimulant options, Cognitive Behavioral Therapy adapted for ADHD, and executive function skills training. Treatment also addresses the emotional toll of years of untreated ADHD including shame, low self-esteem, and relationship damage." },
          { question: "How long does ADHD treatment take at Desert Recovery Centers?", answer: "Residential ADHD treatment at DRC typically lasts 30 to 60 days, allowing time for thorough assessment, medication optimization, and intensive skills training. Outpatient PHP and IOP programs provide 6 to 12 weeks of continued support. The residential setting enables rapid medication optimization that would take months in outpatient care." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/adhd-add" />
      <FAQSection faqs={faqData["adhd-treatment"]} />
      <CTASection />
      <Footer />
    </>
  );
}
