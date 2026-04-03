import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionsGrid from "@/components/ConditionsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mental Health Treatment — Desert Recovery Centers",
  description: "Comprehensive, evidence-based mental health treatment for anxiety, depression, PTSD, bipolar disorder, OCD, and more in Arizona.",
  path: "/mental-health",
});

export default function MentalHealthPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Mental Health Treatment", path: "/mental-health" }]} />
      <Navigation />
      <PageHero
        eyebrow="Mental Health"
        title="Mental Health Treatment"
        description="Comprehensive, evidence-based care for a wide range of mental health conditions — delivered with compassion in a luxury setting."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 leading-relaxed text-lg">
              At Desert Recovery Centers, we understand that mental health conditions are complex and deeply personal. Our multidisciplinary clinical team provides individualized treatment plans that address the root causes of your condition, not just the symptoms.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              We specialize in treating co-occurring disorders, recognizing that mental health conditions often exist alongside substance use disorders. Our dual diagnosis approach ensures that both conditions are treated simultaneously for the best possible outcomes.
            </p>
            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">Our Therapeutic Approach</h2>
            <p className="text-gray-600 leading-relaxed">
              Our evidence-based therapies include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Eye Movement Desensitization and Reprocessing (EMDR), trauma-focused therapies, and holistic approaches including yoga, mindfulness, art therapy, and nutritional counseling.
            </p>
          </div>
        </div>
      </section>
      <ConditionsGrid />
      <CTASection />
      <Footer />
    </>
  );
}
