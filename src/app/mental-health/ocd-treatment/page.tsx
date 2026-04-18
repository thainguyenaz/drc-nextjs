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

const meta = getPageMeta("/mental-health/ocd-treatment/");

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
    q: "What is Exposure and Response Prevention (ERP)?",
    a: "ERP is the most effective therapy for OCD. It involves gradually and systematically exposing you to the thoughts, images, or situations that trigger your obsessions, while helping you resist the urge to perform compulsions. Over time, your brain learns that the feared consequences don't happen, and the anxiety naturally decreases. Our therapists are specifically trained in ERP and guide you through each step at a pace that feels manageable.",
  },
  {
    q: "Is residential treatment necessary for OCD?",
    a: "For moderate to severe OCD, especially when symptoms significantly impair daily functioning, when outpatient therapy hasn't produced sufficient improvement, or when co-occurring conditions complicate treatment, residential care provides the intensive, structured support that accelerates progress. Our residential program offers multiple ERP sessions per week plus daily therapeutic support that simply isn't possible in weekly outpatient treatment.",
  },
  {
    q: "Can OCD be cured?",
    a: "While OCD is typically considered a chronic condition, it can be managed extremely well with proper treatment. Most people who complete evidence-based treatment experience significant reduction in symptoms, many by 50-80%. The goal isn't perfection; it's freedom. We help you reach a place where OCD no longer controls your life.",
  },
  {
    q: "What if my OCD themes are embarrassing or disturbing?",
    a: "Many forms of OCD involve intrusive thoughts that feel deeply shameful, thoughts about harm, violence, inappropriate sexual content, or religious blasphemy. These are among the most common forms of OCD, and our clinicians have treated them extensively. You will never be judged for your thoughts. OCD thoughts are not reflections of who you are, they are symptoms of a treatable condition.",
  },
  {
    q: "Do you treat OCD alongside other conditions?",
    a: "Yes. OCD frequently co-occurs with anxiety disorders, depression, PTSD, eating disorders, and substance use. Our dual diagnosis approach addresses all co-occurring conditions simultaneously, which is critical because untreated co-occurring conditions undermine OCD recovery.",
  },
];

export default function OCDTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["ocd-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health/ocd-treatment")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/mental-health/ocd-treatment/#webpage","url":"https://www.desertrecoverycenters.com/mental-health/ocd-treatment/","name":"OCD Treatment Center Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <SpeakableSchema url="/mental-health/ocd-treatment" cssSelectors={["[data-speakable]"]} />
      <MedicalConditionSchema
        name="Obsessive-Compulsive Disorder (OCD)"
        description="OCD is a chronic mental health condition characterized by persistent, unwanted intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety."
        url="/mental-health/ocd-treatment"
        possibleTreatments={["Exposure and Response Prevention", "Cognitive Therapy", "Medication Management", "Mindfulness-Based Therapy", "Acceptance and Commitment Therapy"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health/ocd-treatment")} />
      <PageHero
        eyebrow="Mental Health Treatment"
        title="OCD Treatment"
        description="The thoughts don't define you. Specialized OCD treatment that breaks the cycle and gives you your life back."
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
              Trapped in a Loop You Can&apos;t Break
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              You know the thought isn&apos;t rational. You know checking that lock for the fifteenth time won&apos;t change anything. You know washing your hands again won&apos;t make the contamination fear go away, at least not for long. But the anxiety is so intense, so unbearable, that performing the ritual feels like the only way to breathe.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              OCD is one of the most misunderstood mental health conditions. It&apos;s not about being &quot;organized&quot; or &quot;particular.&quot; It&apos;s a relentless cycle of intrusive, unwanted thoughts (obsessions) followed by behaviors or mental rituals (compulsions) that temporarily relieve the distress, only for the cycle to start again, often stronger than before.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              OCD can consume hours of your day. It can make you late for work, damage your relationships, and leave you exhausted from a battle that nobody else can see. But here&apos;s what we need you to know: OCD responds remarkably well to the right treatment. At Desert Recovery Centers, we use the most effective, evidence-based approaches to help you break free from the cycle.
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
              Symptoms of OCD
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Common Obsessions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Fear of contamination from germs, chemicals, or bodily fluids",
                    "Intrusive thoughts about harming yourself or others",
                    "Excessive concern with symmetry, order, or exactness",
                    "Unwanted sexual, violent, or blasphemous thoughts",
                    "Fear of losing control or acting on unwanted impulses",
                    "Persistent doubt, 'Did I lock the door? Did I turn off the stove?'",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">Common Compulsions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Excessive handwashing, cleaning, or sanitizing",
                    "Repeated checking of locks, appliances, or switches",
                    "Counting, tapping, or repeating words or phrases",
                    "Arranging objects until they feel 'just right'",
                    "Seeking constant reassurance from others",
                    "Mental rituals: reviewing, praying, or neutralizing thoughts",
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              If obsessions and compulsions are taking up more than an hour a day or significantly interfering with your life, evidence-based treatment can help.
            </p>
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
              How We Treat OCD at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our OCD program is built around the therapies with the strongest research support, delivered by clinicians trained specifically in OCD treatment.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Exposure and Response Prevention (ERP)",
                  desc: "The gold standard for OCD treatment. Working with a trained therapist, you'll gradually face your triggers in a controlled, supportive setting while learning to sit with the discomfort without performing compulsions. Over time, your brain learns that the anxiety passes on its own.",
                },
                {
                  title: "Cognitive Therapy for OCD",
                  desc: "We help you identify and restructure the distorted beliefs that fuel your OCD, such as overestimation of threat, intolerance of uncertainty, and inflated responsibility, reducing the power these thoughts have over you.",
                },
                {
                  title: "Medication Management",
                  desc: "When indicated, our psychiatrists may prescribe SSRIs or other medications that have demonstrated efficacy for OCD. Medication can reduce the intensity of obsessions, making it easier to engage with and benefit from ERP therapy.",
                },
                {
                  title: "Mindfulness-Based Approaches",
                  desc: "Learning to observe your thoughts without reacting to them is a powerful skill for OCD recovery. Mindfulness and acceptance-based strategies complement ERP by changing your relationship with intrusive thoughts.",
                },
                {
                  title: "Dual Diagnosis Treatment",
                  desc: "OCD frequently co-occurs with depression, anxiety, and substance use. Our integrated approach ensures all conditions are treated together, giving you the strongest possible foundation for recovery.",
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
              OCD Treatment That Actually Works
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "ERP-Trained Clinicians",
                  desc: "Not all therapists are trained in ERP, and general talk therapy often makes OCD worse by providing reassurance that feeds the cycle. Our clinicians have specific training and experience in evidence-based OCD treatment.",
                },
                {
                  title: "Intensive Treatment Format",
                  desc: "Our residential program offers multiple ERP sessions per week in a structured environment, allowing you to make rapid progress that would take months or longer in traditional weekly outpatient therapy.",
                },
                {
                  title: "A Non-Judgmental Space",
                  desc: "OCD often involves thoughts that feel deeply shameful. Our clinical team has treated every form of OCD and creates a safe, compassionate environment where you can be fully honest about your symptoms without fear of judgment.",
                },
                {
                  title: "Whole-Person Support",
                  desc: "Beyond ERP, you have access to holistic therapies, fitness programming, nutritional support, and community connection that build resilience and improve your overall quality of life during and after treatment.",
                },
                {
                  title: "Sustainable Recovery Plan",
                  desc: "We teach you to be your own therapist. By the time you leave, you'll have the tools and knowledge to continue applying ERP principles independently, with an aftercare plan and alumni support to back you up.",
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
          { question: "What is OCD treatment at Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides specialized OCD treatment anchored in Exposure and Response Prevention (ERP), the gold-standard therapy for OCD. With ERP-trained clinicians, a maximum of 10 beds per facility, and doctoral-level clinical leadership, clients receive intensive, evidence-based care in a supportive residential environment." },
          { question: "How does Desert Recovery Centers treat OCD?", answer: "DRC treats OCD using Exposure and Response Prevention (ERP), cognitive therapy targeting distorted OCD beliefs, medication management with SSRIs when indicated, and mindfulness-based approaches. Multiple ERP sessions per week in a structured residential setting allow clients to make rapid progress under the guidance of specifically trained clinicians." },
          { question: "How long does OCD treatment take at Desert Recovery Centers?", answer: "Residential OCD treatment at DRC typically lasts 30 days, depending on symptom severity and co-occurring conditions. Outpatient PHP and IOP programs provide 6 to 12 weeks of continued structured support. Treatment length is individually determined based on clinical progress and response to ERP therapy." },
        ]}
      />
      <RelatedPages currentPath="/mental-health/ocd-treatment" />
      <FAQSection faqs={faqData["ocd-treatment"]} />
      <CTASection />
      <Footer />
    </>
  );
}
