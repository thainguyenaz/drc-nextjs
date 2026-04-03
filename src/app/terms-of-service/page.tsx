import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — Desert Recovery Centers",
  description: "Terms of service for the Desert Recovery Centers website. Please read these terms carefully before using our site.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Terms of Service", path: "/terms-of-service" }]} />
      <Navigation />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using our website."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-sage">
            <p className="text-lg text-stone-600 leading-relaxed">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Desert Recovery Centers website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2>Website Use</h2>
            <p>
              This website is intended to provide general information about Desert Recovery Centers and our treatment programs. The content on this website is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions regarding a medical condition.
            </p>

            <h2>Not Emergency Services</h2>
            <p>
              Desert Recovery Centers does not provide emergency medical services. If you are experiencing a medical emergency, please call 911 immediately.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the property of Desert Recovery Centers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Desert Recovery Centers makes no warranties or representations about the accuracy or completeness of the content on this website. We are not liable for any damages arising from your use of or inability to use this website.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after any changes constitutes acceptance of the updated terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these terms, please contact us at <a href="tel:+14809313617" className="text-sage hover:text-gold">(480) 931-3617</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
