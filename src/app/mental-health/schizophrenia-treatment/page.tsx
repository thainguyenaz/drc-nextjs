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

const meta = getPageMeta("/mental-health/schizophrenia-treatment/");

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
    q: "What is schizophrenia, exactly?",
    a: "Schizophrenia is a chronic brain disorder that affects how a person thinks, feels, and perceives reality. It can cause hallucinations (seeing or hearing things others don't), delusions (strongly held false beliefs), disorganized thinking, and difficulties with motivation and emotional expression. It affects about 1% of the population and typically emerges in late adolescence to early adulthood. With proper treatment, many people with schizophrenia lead meaningful, stable lives.",
  },
  {
    q: "Is schizophrenia dangerous?",
    a: "This is one of the most harmful myths about schizophrenia. People with schizophrenia are far more likely to be victims of violence than perpetrators. The condition is a medical disorder, not a personality trait or moral failing. The vast majority of people with schizophrenia are not violent. With proper treatment and support, people with schizophrenia live safely and productively in their communities.",
  },
  {
    q: "How important is medication in schizophrenia treatment?",
    a: "Antipsychotic medication is the cornerstone of schizophrenia treatment and is essential for most individuals. These medications help manage positive symptoms (hallucinations, delusions) and reduce the risk of relapse. Our psychiatrists work carefully to find the most effective medication with the fewest side effects, and we monitor your response closely throughout treatment.",
  },
  {
    q: "Can someone with schizophrenia live independently?",
    a: "Many people with well-managed schizophrenia live independently, hold jobs, maintain relationships, and pursue their goals. The key is consistent treatment, particularly medication adherence, combined with ongoing support. Our program prepares you with the skills, medication stability, and support connections needed for the most independent life possible.",
  },
  {
    q: "Do you treat schizoaffective disorder as well?",
    a: "Yes. Schizoaffective disorder, which combines symptoms of schizophrenia with a mood disorder (depression or bipolar disorder), is within our clinical expertise. Treatment follows a similar integrated approach, with particular attention to managing both the psychotic and mood components of the condition.",
  },
];

export default function SchizophreniaTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["schizophrenia-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/schizophrenia-treatment")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/mental-health/schizophrenia-treatment/#webpage","url":"https://www.desertrecoverycenters.com/mental-health/schizophrenia-treatment/","name":"Schizophrenia Treatment Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <SpeakableSchema url="/mental-health/schizophrenia-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Schizophrenia"
        description="Schizophrenia is a chronic brain disorder affecting perception, thinking, and behavior, characterized by hallucinations, delusions, disorganized thinking, and diminished motivation."
        url="/mental-health/schizophrenia-treatment"
        possibleTreatments={["Antipsychotic Medication Management", "Cognitive Behavioral Therapy for Psychosis", "Social Skills Training", "Family Psychoeducation", "Life Skills Training"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/schizophrenia-treatment")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="Schizophrenia Treatment"
        description="A diagnosis is not a destiny. Integrated psychiatric care that helps you build a stable, meaningful life."
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
              When Reality Feels Unreliable
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Schizophrenia is one of the most misunderstood conditions in all of medicine. The media portrays it as something to fear. Society stigmatizes it. And too often, the people living with it, and the families who love them, are left feeling isolated, hopeless, and unsure where to turn.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you or someone you love is experiencing symptoms of schizophrenia, hearing voices, holding beliefs that others don&apos;t share, struggling to organize thoughts, withdrawing from life, know this: schizophrenia is a treatable medical condition. Not a life sentence. Not a lost cause. A condition that responds to expert psychiatric care.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Desert Recovery Centers, our psychiatric team brings deep experience in treating schizophrenia spectrum disorders. We combine medication management with therapeutic support, life skills training, and family education to help stabilize symptoms and build the foundation for a life worth living.
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
              Symptoms of Schizophrenia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Schizophrenia symptoms are typically categorized as positive (added experiences), negative (diminished abilities), and cognitive:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Positive Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Hallucinations, hearing voices, seeing things, or sensing things others don't",
                    "Delusions, fixed false beliefs, such as being persecuted, surveilled, or having special powers",
                    "Disorganized speech, jumping between unrelated topics, incoherent communication",
                    "Disorganized or unusual behavior, unpredictable agitation, odd postures, catatonia",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Negative Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Flat affect, reduced emotional expression in face, voice, or gestures",
                    "Avolition, loss of motivation to initiate or sustain activities",
                    "Social withdrawal, pulling away from relationships and interactions",
                    "Anhedonia, inability to experience pleasure from normally enjoyable activities",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Cognitive Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Difficulty with attention, concentration, and working memory",
                    "Impaired executive functioning, trouble planning, organizing, and problem-solving",
                    "Slowed processing speed affecting daily tasks and communication",
                    "Difficulty understanding and using information to make decisions",
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
              How We Treat Schizophrenia at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our schizophrenia treatment program provides the integrated psychiatric, therapeutic, and practical support needed for meaningful stabilization and recovery.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Psychiatric Assessment & Medication Management",
                  desc: "Our board-certified psychiatrists conduct comprehensive evaluations and develop individualized medication protocols using antipsychotic medications. We monitor your response meticulously, adjusting type, dosage, and combinations to achieve optimal symptom control with minimal side effects.",
                },
                {
                  title: "Cognitive Behavioral Therapy for Psychosis (CBTp)",
                  desc: "This specialized form of CBT is designed for people experiencing psychotic symptoms. It helps you develop strategies to test and challenge delusional beliefs, manage distressing hallucinations, and reduce the emotional impact of symptoms that may persist despite medication.",
                },
                {
                  title: "Social Skills & Life Skills Training",
                  desc: "Schizophrenia can erode social confidence and daily living skills. Our structured programming rebuilds these competencies, communication, self-care, household management, vocational readiness, restoring your ability to function independently.",
                },
                {
                  title: "Family Psychoeducation",
                  desc: "Family support is one of the strongest predictors of positive outcomes in schizophrenia. Our family programming provides thorough education about the condition, communication strategies, crisis planning, and emotional support for family members who are navigating their own grief and adjustment.",
                },
                {
                  title: "Dual Diagnosis Integration",
                  desc: "Substance use disorders affect nearly half of people with schizophrenia and dramatically worsen outcomes. Our integrated approach treats both conditions simultaneously, stabilizing psychotic symptoms while addressing the substance use that can trigger relapse.",
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
              Compassionate, Expert Care for Schizophrenia
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Experienced Psychiatric Team",
                  desc: "Our psychiatrists and psychologists have specific experience treating schizophrenia spectrum disorders, understanding the nuances of medication management, the importance of therapeutic rapport, and the patience this condition requires.",
                },
                {
                  title: "Structured, Stable Environment",
                  desc: "Predictability and routine are therapeutic for schizophrenia. Our residential program provides consistent daily structure, reducing the environmental chaos that can worsen symptoms and supporting the stability your brain needs to heal.",
                },
                {
                  title: "Dignity & Respect",
                  desc: "Schizophrenia carries enormous stigma. At DRC, you or your loved one will be treated with the same clinical respect and genuine care that we extend to every client, because a diagnosis doesn't diminish a person's worth.",
                },
                {
                  title: "Comprehensive Discharge Planning",
                  desc: "Continuity of care is critical for schizophrenia. We develop detailed discharge plans that include medication management transitions, outpatient therapy connections, community support resources, and clear protocols for recognizing and responding to early signs of relapse.",
                },
                {
                  title: "Family as Partners",
                  desc: "We view family members as essential partners in recovery. Our family education, therapy, and ongoing support help create a home environment that fosters stability and reduces the risk of relapse, because recovery doesn't happen in isolation.",
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
          { question: "What is schizophrenia treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides integrated psychiatric care for schizophrenia and schizoaffective disorder. With board-certified psychiatrists experienced in schizophrenia spectrum disorders, a maximum of 10 beds per facility, and 24/7 clinical support, clients receive expert medication management and therapeutic support in a structured, dignified residential environment." },
          { question: "How does Desert Recovery Centers treat schizophrenia?", answer: "DRC treats schizophrenia through careful antipsychotic medication management, Cognitive Behavioral Therapy for Psychosis (CBTp), social skills and life skills training, family psychoeducation, and dual diagnosis treatment for co-occurring substance use. Treatment plans are individualized by experienced psychiatrists who specialize in schizophrenia spectrum disorders." },
          { question: "How long does schizophrenia treatment take at Desert Recovery Centers?", answer: "Residential schizophrenia treatment at DRC typically lasts 30 days, providing time for thorough medication stabilization and skills development. Outpatient PHP and IOP programs offer 6 to 12 weeks of continued structured support. Comprehensive discharge planning ensures continuity of psychiatric care and community support after residential treatment." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/schizophrenia-treatment" />
      <FAQSection faqs={faqData["schizophrenia-treatment"]} />
      <CTASection />
      <Footer />
    </>
  );
}
