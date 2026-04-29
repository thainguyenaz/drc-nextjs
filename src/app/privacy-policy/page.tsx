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

            <h2>SMS Communications and TCPA Disclosure</h2>
            <p>
              Desert Recovery Centers may send SMS (text message) communications to phone numbers provided through our website forms, including the Insurance Verification form, Get Help form, and Contact form. By providing your phone number on any of our forms, you expressly consent to receive SMS messages from Desert Recovery Centers under the Telephone Consumer Protection Act (TCPA).
            </p>

            <h3>Types of Messages</h3>
            <p>You may receive the following types of SMS communications:</p>
            <ul>
              <li>Admissions follow-up and appointment coordination</li>
              <li>Insurance verification status updates</li>
              <li>Pre-admission information requests</li>
              <li>Treatment-related care coordination (HIPAA-protected — see HIPAA Notice)</li>
              <li>Marketing messages about Desert Recovery Centers programs and services</li>
            </ul>

            <h3>Message Frequency</h3>
            <p>
              Message frequency varies based on the nature of your inquiry and the stage of admissions or treatment coordination. Marketing messages are sent no more than four times per month. Operational messages (appointment reminders, admissions coordination, treatment-related communications) are sent as needed.
            </p>

            <h3>Opt-Out</h3>
            <p>
              You may opt out of SMS communications at any time by replying STOP to any message you receive from us. After replying STOP, you will receive a confirmation message and will not receive further marketing or operational SMS communications from Desert Recovery Centers, except where required for active treatment care coordination as defined under HIPAA.
            </p>
            <p>
              To re-subscribe after opting out, reply START or contact our admissions team at (480) 931-3617.
            </p>

            <h3>Message and Data Rates</h3>
            <p>
              Standard message and data rates may apply based on your wireless carrier plan. Desert Recovery Centers does not charge a fee for SMS communications, but your carrier may. Contact your wireless carrier for details on your messaging plan.
            </p>

            <h3>Carrier Liability</h3>
            <p>
              Wireless carriers, including but not limited to AT&amp;T, Verizon, T-Mobile, and Sprint, are not liable for delayed or undelivered messages sent or received through their networks. Desert Recovery Centers is not responsible for SMS messages that fail to deliver due to carrier issues, network outages, or device-related problems.
            </p>

            <h3>Help</h3>
            <p>
              For help with SMS communications, reply HELP to any message or contact our admissions team at admissions@desertrecoverycenters.com or (480) 931-3617.
            </p>

            <h3>Eligibility</h3>
            <p>
              SMS communications are available to U.S. mobile phone subscribers age 18 and older, or to a parent or legal guardian of a minor seeking treatment. By providing a phone number, you represent that you are authorized to consent to SMS communications on behalf of the phone number provided.
            </p>

            <h3>HIPAA Notice</h3>
            <p>
              SMS communications related to active treatment may include protected health information (PHI). All such communications are governed by the Desert Recovery Centers HIPAA Notice of Privacy Practices, available at /hipaa-notice. By consenting to SMS, you acknowledge that standard SMS is not an encrypted communication channel, and you accept the inherent risks of unencrypted electronic communication for routine, non-urgent care coordination.
            </p>

            <h3>Changes to This Section</h3>
            <p>
              Desert Recovery Centers may update this SMS Communications and TCPA Disclosure section from time to time. Material changes will be communicated through our website and, where required, through SMS notice to existing subscribers.
            </p>
            <p>
              For full disclosures regarding all data we collect, including SMS metadata, see the relevant sections of this Privacy Policy.
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
