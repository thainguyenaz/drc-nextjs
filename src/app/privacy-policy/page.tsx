import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy, Desert Recovery Centers",
  description: "Desert Recovery Centers privacy policy. Learn how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <Navigation />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-sage">
            <p className="text-lg text-stone-600 leading-relaxed">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <h2>Information We Collect</h2>
            <p>
              Desert Recovery Centers collects personal information that you voluntarily provide when you contact us, submit forms on our website, or use our insurance verification tool. This may include your name, phone number, email address, insurance information, and details about the care you are seeking.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, verify insurance coverage, provide treatment services, and improve our website experience. We do not sell your personal information to third parties.
            </p>

            <h2>Information Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmitted through our website is encrypted using industry-standard SSL/TLS protocols.
            </p>

            <h2>HIPAA Compliance</h2>
            <p>
              As a healthcare provider, Desert Recovery Centers complies with the Health Insurance Portability and Accountability Act (HIPAA). Protected health information (PHI) is handled in accordance with federal regulations. Please see our <a href="/hipaa-notice" className="text-sage hover:text-gold">HIPAA Notice</a> for more details.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to improve functionality and analyze usage patterns. You can control cookie preferences through your browser settings.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how your information is handled, please contact us at <a href="tel:+14809313617" className="text-sage hover:text-gold">(480) 931-3617</a> or email us at <a href="mailto:info@desertrecoverycenters.com" className="text-sage hover:text-gold">info@desertrecoverycenters.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
