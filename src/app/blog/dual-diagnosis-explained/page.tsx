import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import MedicalReview from "@/components/MedicalReview";
import Breadcrumb from "@/components/Breadcrumb";
import Citations from "@/components/Citations";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { defaultAuthor, defaultReviewer } from "@/data/blog-defaults";
import { buildMetadata } from "@/lib/seo";

const SITE_URL = "https://desertrecoverycenters.com";
const POST_TITLE = "What Is Dual Diagnosis?";
const DATE_PUBLISHED = "2026-03-01";
const DATE_MODIFIED = "2026-03-01";
const POST_DESCRIPTION =
  "Understand co-occurring disorders: when mental health and addiction overlap. Learn why integrated dual diagnosis treatment leads to better outcomes.";

export const metadata: Metadata = buildMetadata({
  title: "What Is Dual Diagnosis?, DRC",
  description: POST_DESCRIPTION,
  path: "/blog/dual-diagnosis-explained",
});

export default function DualDiagnosisExplainedPage() {
  const articleSchema = getArticleSchema({
    headline: POST_TITLE,
    author: defaultAuthor.name,
    authorUrl: `${SITE_URL}${defaultAuthor.url}`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    image: "https://desertrecoverycenters.com/wp-content/uploads/2024/12/DRC-BALCONY-SCOTTSDALE-08-01-2024-Optimized.jpg",
    description: POST_DESCRIPTION,
  });

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: POST_TITLE, url: `${SITE_URL}/blog/dual-diagnosis-explained` },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SchemaScript schema={[articleSchema, breadcrumbSchema]} />
      <Navigation />

      <div className="bg-white">
        <div className="max-w-container mx-auto px-6 pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <PageHero
        eyebrow="Educational Resource"
        title={POST_TITLE}
        description="Understanding co-occurring disorders, and why treating both conditions simultaneously is the key to lasting recovery."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />

      <div className="bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 mt-4">
              Last Updated:{" "}
              {new Date(DATE_MODIFIED).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <MedicalReview
              reviewer={defaultReviewer.name}
              credentials={defaultReviewer.credentials}
              reviewerUrl={defaultReviewer.url}
            />
          </div>
        </div>
      </div>

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Two Conditions, One Disease Process
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Dual diagnosis, also called co-occurring disorders, refers to the simultaneous presence of a mental health condition and a substance use disorder in the same individual. It is not a rare phenomenon. According to the Substance Abuse and Mental Health Services Administration (SAMHSA), approximately 9.2 million adults in the United States have a co-occurring disorder. Nearly half of all people who seek treatment for addiction also meet the diagnostic criteria for at least one mental health condition.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Despite its prevalence, dual diagnosis remains widely misunderstood, by the public, by families, and even by many treatment providers. The result is that millions of people receive treatment for only one of their conditions, leading to incomplete recovery and high rates of relapse.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Understanding dual diagnosis is not just an academic exercise. It is the difference between treatment that works and treatment that fails.
            </p>
          </div>
        </div>
      </section>

      {/* Why they co-occur */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Connection
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Mental Health and Addiction So Often Co-Occur
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mental health conditions and substance use disorders are not simply correlated, they are deeply interconnected through shared neurobiology, environmental risk factors, and behavioral feedback loops:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Self-Medication",
                  desc: "The most common pathway to dual diagnosis. A person with untreated depression uses alcohol to numb the pain. Someone with anxiety discovers that benzodiazepines quiet the noise. A trauma survivor finds that opioids are the only thing that makes the flashbacks stop. The substance provides temporary relief, but it worsens the underlying condition over time, creating a vicious cycle of escalating use and deepening mental illness.",
                },
                {
                  title: "Shared Neurobiology",
                  desc: "Mental health conditions and addiction affect many of the same brain circuits, particularly those governing reward, stress response, impulse control, and emotional regulation. Genetic factors that predispose a person to one condition often predispose them to the other. This is why conditions like depression, PTSD, and bipolar disorder carry significantly elevated risk for developing substance use disorders.",
                },
                {
                  title: "Substance-Induced Mental Health Symptoms",
                  desc: "Chronic substance use can trigger or unmask mental health conditions that may not have manifested otherwise. Chronic marijuana use can trigger psychotic symptoms. Stimulant abuse can produce anxiety and paranoia. Alcohol, a central nervous system depressant, can cause or worsen depression. In some cases, the mental health symptoms resolve with sustained sobriety; in others, they persist and require ongoing treatment.",
                },
                {
                  title: "Environmental Overlap",
                  desc: "Childhood trauma, adverse childhood experiences (ACEs), chronic stress, poverty, and social isolation are risk factors for both mental health conditions and addiction. A person who grows up in an environment saturated with these stressors is at elevated risk for developing both conditions, not because of personal weakness, but because of the cumulative neurobiological toll of chronic adversity.",
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

      {/* Common pairings */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Common Presentations
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              The Most Common Dual Diagnosis Pairings
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { pair: "Depression + Alcohol Use Disorder", note: "Alcohol is a depressant that provides temporary euphoria but deepens depression over time." },
                { pair: "Anxiety + Benzodiazepine Dependence", note: "Prescribed for anxiety relief, benzodiazepines create physical dependence within weeks." },
                { pair: "PTSD + Opioid Addiction", note: "Opioids numb the hyperarousal and emotional pain of unprocessed trauma." },
                { pair: "Bipolar Disorder + Stimulant Abuse", note: "Stimulants may be used to prolong manic states or counteract depressive episodes." },
                { pair: "Borderline Personality Disorder + Polysubstance Use", note: "The emotional dysregulation of BPD drives impulsive substance use across multiple substances." },
                { pair: "ADHD + Cannabis or Stimulant Misuse", note: "Undiagnosed ADHD leads many to self-medicate with substances that temporarily improve focus." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-cream rounded-xl p-5 border border-gray-100"
                >
                  <h3 className="font-display text-base text-forest font-semibold mb-2">{item.pair}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why integrated treatment matters */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Treatment Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Integrated Treatment Is Essential
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Historically, mental health and addiction were treated as separate conditions by separate providers in separate systems. A person might complete a 30-day rehab program for their addiction, only to return home with their depression untreated, and relapse within weeks because the pain that drove the substance use was never addressed.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Integrated treatment, where both conditions are treated simultaneously by the same clinical team, is now the gold standard endorsed by the National Institute on Drug Abuse (NIDA), SAMHSA, and the American Psychiatric Association. The evidence is clear: individuals who receive integrated dual diagnosis treatment have significantly better outcomes than those treated for only one condition.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Desert Recovery Centers, dual diagnosis is not a specialty track. It is the foundation of every treatment plan. Every client receives a comprehensive psychiatric evaluation within the first 72 hours, and every treatment plan is designed to address all diagnosed conditions from day one.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "One Clinical Team, One Plan",
                  desc: "The same team of psychologists, psychiatrists, and therapists manages both your mental health and addiction treatment, ensuring medications, therapy protocols, and holistic programming are coordinated rather than contradictory.",
                },
                {
                  title: "Evidence-Based Modalities",
                  desc: "CBT, DBT, EMDR, trauma-focused therapies, and our proprietary BridgeWork™ program are all delivered by doctoral-level clinicians with specific training in dual diagnosis treatment.",
                },
                {
                  title: "Medication Management",
                  desc: "Our medical director ensures that psychiatric medications support both mental health stability and addiction recovery, a nuanced clinical judgment that requires specialized expertise.",
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

      {/* Closing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              If This Sounds Like You or Someone You Love
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Dual diagnosis is not a death sentence. It is a treatable medical condition that responds well to comprehensive, evidence-based care. But it requires the right kind of treatment, integrated, clinically sophisticated, and delivered by providers who understand the complex interplay between mental health and addiction.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Desert Recovery Centers is one of Arizona&apos;s leading dual diagnosis treatment providers. Our clinical team, led by doctoral-level psychologists and a board-certified psychiatrist, treats both conditions from the same treatment plan, in the same clinical setting, with the same team. No fragmented care. No gaps. No falling through the cracks.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+14809313617" className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Call (480) 931-3617
              </a>
              <a href="/treatments/dual-diagnosis-treatment" className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Dual Diagnosis Treatment
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-display text-lg text-forest font-semibold mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
                  { label: "Signs of Addiction", href: "/blog/signs-of-addiction" },
                  { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                  { label: "PTSD Treatment", href: "/mental-health/ptsd-treatment" },
                  { label: "Rehab FAQ", href: "/resources/faq" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Citations />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
