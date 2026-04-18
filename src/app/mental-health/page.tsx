import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionsGrid from "@/components/ConditionsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { BreadcrumbSchema, VideoSchemas, SpeakableSchema } from "@/lib/seo";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { getPageMeta } from "@/data/page-metadata";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import AnimatedSection from "@/components/animated/AnimatedSection";

const meta = getPageMeta("/mental-health/");

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

export default function MentalHealthPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["mental-health"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/mental-health"))]} />
      <SpeakableSchema url="/mental-health" cssSelectors={["h1", "[data-speakable]"]} />
      <BreadcrumbSchema items={[{ name: "Mental Health Treatment", path: "/mental-health" }]} />
      <VideoSchemas path="/mental-health/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/mental-health")} />
      <PageHero
        eyebrow="Mental Health"
        title="Mental Health Treatment"
        description="Comprehensive, evidence-based care for a wide range of mental health conditions, delivered with compassion in a luxury setting."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedSection>
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
            </AnimatedSection>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 max-w-container mx-auto px-6">
        <YouTubeEmbed youtubeId="s5Xb6AyDNS4" title="Mental Health Treatment at Desert Recovery Centers" />
        <YouTubeEmbed youtubeId="NEGnf9I1K2E" title="Desert Recovery Centers Mental Health Approach" />
        <YouTubeEmbed youtubeId="Q7hykWDiBSk" title="Dual Diagnosis Treatment at Desert Recovery Centers" />
      </div>

      {/* ── Mental Health Video 1 ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Understanding Treatment</span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Mental Health Recovery at DRC</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.15}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/NEGnf9I1K2E?rel=0"
                title="Mental Health Treatment at Desert Recovery Centers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ConditionsGrid />

      {/* ── Mental Health Video 2 ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Learn More</span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Your Path to Wellness</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.15}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
              <iframe
                src="https://www.youtube.com/embed/Q7hykWDiBSk?rel=0"
                title="Your Path to Mental Wellness"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Is Executive Burnout?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={0.15}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <iframe
                src="https://www.youtube.com/embed/nOBR_oQGTZU?rel=0"
                title="What Is Executive Burnout, and How Does It Correlate to High Achievers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection faqs={faqData["mental-health"]} />
      <CTASection />
      <Footer />
    </>
  );
}
