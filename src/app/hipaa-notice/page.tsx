import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "HIPAA Notice — Desert Recovery Centers",
  description: "Desert Recovery Centers HIPAA Notice of Privacy Practices. Learn how your protected health information may be used and disclosed.",
  path: "/hipaa-notice",
});

export default function HipaaNoticePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "HIPAA Notice", path: "/hipaa-notice" }]} />
      <Navigation />
      <PageHero
        eyebrow="Legal"
        title="HIPAA Notice of Privacy Practices"
        description="How your protected health information may be used and disclosed."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-sage">
            <p className="text-lg text-stone-600 leading-relaxed">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <p>
              This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>

            <h2>Our Commitment to Your Privacy</h2>
            <p>
              Desert Recovery Centers is committed to protecting the privacy of your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and 42 CFR Part 2, which provides additional protections for substance use disorder treatment records.
            </p>

            <h2>How We May Use Your Information</h2>
            <p>We may use and disclose your PHI for the following purposes:</p>
            <ul>
              <li><strong>Treatment:</strong> To provide, coordinate, and manage your healthcare and related services.</li>
              <li><strong>Payment:</strong> To obtain payment for services provided to you, including billing your insurance company.</li>
              <li><strong>Healthcare Operations:</strong> To support our business activities, including quality assessment, staff training, and licensing.</li>
            </ul>

            <h2>42 CFR Part 2 Protections</h2>
            <p>
              Federal law (42 CFR Part 2) provides additional confidentiality protections for information related to substance use disorder treatment. Your substance use disorder treatment records cannot be disclosed without your written consent except in limited circumstances permitted by law.
            </p>

            <h2>Your Rights</h2>
            <ul>
              <li>Request restrictions on certain uses and disclosures of your PHI</li>
              <li>Receive confidential communications of your PHI</li>
              <li>Inspect and obtain a copy of your PHI</li>
              <li>Request amendments to your PHI</li>
              <li>Receive an accounting of disclosures of your PHI</li>
              <li>Obtain a paper copy of this notice upon request</li>
            </ul>

            <h2>Contact Our Privacy Officer</h2>
            <p>
              If you have questions about this notice or wish to exercise your rights, please contact our Privacy Officer at <a href="tel:+14809313617" className="text-sage hover:text-gold">(480) 931-3617</a> or email <a href="mailto:info@desertrecoverycenters.com" className="text-sage hover:text-gold">info@desertrecoverycenters.com</a>.
            </p>

            <h2>Filing a Complaint</h2>
            <p>
              If you believe your privacy rights have been violated, you may file a complaint with Desert Recovery Centers or with the U.S. Department of Health and Human Services Office for Civil Rights. You will not be retaliated against for filing a complaint.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
