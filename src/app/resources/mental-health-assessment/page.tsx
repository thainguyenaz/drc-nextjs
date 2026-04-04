import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import SelfAssessmentTool from "@/components/SelfAssessmentTool";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Mental Health Assessment, DRC",
  description:
    "Take a free, confidential mental health self-assessment. 10 questions to help you understand your symptoms and explore treatment options in Arizona.",
  path: "/resources/mental-health-assessment",
});

export default function MentalHealthAssessmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Mental Health Assessment", path: "/resources/mental-health-assessment" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Self-Assessment Tool"
        title="Free Mental Health Assessment"
        description="A brief, confidential self-assessment to help you understand your symptoms, and whether professional support could make a difference."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
      />

      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Developed under the guidance of Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              How Are You Really Doing?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              It can be difficult to know when normal stress, sadness, or anxiety has crossed into something that needs professional attention. This brief self-assessment is designed to help you reflect on your recent experiences and determine whether reaching out for support might be a helpful next step.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The questions below are based on widely used clinical screening tools. They are not a diagnosis, only a licensed professional can provide that, but they can help you gauge whether your symptoms warrant a conversation with a clinician.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Your answers are completely private. Nothing is stored, recorded, or transmitted. This tool runs entirely in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Tool */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SelfAssessmentTool />
          </div>
        </div>
      </section>

      {/* Disclaimer and resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream rounded-xl p-6 border border-gold/20 mb-8">
              <h3 className="font-display text-lg text-forest font-semibold mb-3">Important Disclaimer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This assessment is for informational purposes only and is not a medical diagnosis. It is not intended to replace a professional clinical evaluation. Please consult a qualified healthcare professional for a comprehensive assessment of your mental health. If you are in immediate danger or experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
              </p>
            </div>

            <h3 className="font-display text-lg text-forest font-semibold mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Anxiety Treatment", href: "/mental-health/anxiety-treatment" },
                { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                { label: "Dual Diagnosis", href: "/treatments/dual-diagnosis" },
                { label: "Our Treatment Approach", href: "/treatments" },
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
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
