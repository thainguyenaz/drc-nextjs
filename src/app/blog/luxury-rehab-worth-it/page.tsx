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
const POST_TITLE = "Is Luxury Rehab Worth the Cost?";
const DATE_PUBLISHED = "2026-02-15";
const DATE_MODIFIED = "2026-02-15";
const POST_DESCRIPTION =
  "Honest analysis of luxury rehab costs vs outcomes. Learn what separates genuine clinical excellence from resort amenities and marketing.";

export const metadata: Metadata = buildMetadata({
  title: "Is Luxury Rehab Worth It?, DRC",
  description: POST_DESCRIPTION,
  path: "/blog/luxury-rehab-worth-it",
});

export default function LuxuryRehabWorthItPage() {
  const articleSchema = getArticleSchema({
    headline: POST_TITLE,
    author: defaultAuthor.name,
    authorUrl: `${SITE_URL}${defaultAuthor.url}`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    image:
      "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
    description: POST_DESCRIPTION,
  });

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: POST_TITLE, url: `${SITE_URL}/blog/luxury-rehab-worth-it` },
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
        eyebrow="Honest Analysis"
        title={POST_TITLE}
        description="A balanced, evidence-based look at whether luxury treatment programs deliver better outcomes, and what to look for if you are considering one."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
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
              The Question Everyone Asks
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              &quot;Is luxury rehab worth it?&quot; is one of the most common questions families ask when researching treatment options, and it deserves an honest answer.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The short answer is: it depends entirely on what &quot;luxury&quot; means at a specific facility. A beautiful building with a swimming pool and gourmet meals is meaningless if the clinical program behind it is thin, staffed by under-qualified therapists, or relying on a one-size-fits-all treatment model. Conversely, a program that combines genuine clinical depth with a healing environment can produce outcomes that far exceed standard residential treatment.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The distinction is not between expensive and affordable. It is between programs that use &quot;luxury&quot; as a marketing term and programs where the environment, staffing, and clinical model work together to create conditions for deep, lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* What luxury usually means */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Setting the Record Straight
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What &quot;Luxury Rehab&quot; Typically Means
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In the treatment industry, &quot;luxury&quot; is an unregulated term. Any facility can call itself luxury. Here is what you will typically find:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4">Amenities (Most Programs)</h3>
                <div className="space-y-3">
                  {[
                    "Private or semi-private rooms",
                    "Swimming pool, gym, outdoor spaces",
                    "Gourmet or chef-prepared meals",
                    "Yoga, meditation, spa services",
                    "Scenic location or property",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4">Clinical Depth (Fewer Programs)</h3>
                <div className="space-y-3">
                  {[
                    "Doctoral-level clinicians leading therapy",
                    "Low client-to-therapist ratios (under 6:1)",
                    "Comprehensive psychiatric evaluation on intake",
                    "Integrated dual diagnosis treatment",
                    "Multiple evidence-based modalities (CBT, DBT, EMDR)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              The amenities column is table stakes for any program calling itself luxury. The clinical depth column is where the real difference lies, and where many luxury programs fall short.
            </p>
          </div>
        </div>
      </section>

      {/* When luxury IS worth it */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Evidence
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              When Luxury Rehab Is Worth the Investment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Research supports several factors that are more commonly found in well-run luxury programs and that are directly associated with better treatment outcomes:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Lower Client-to-Clinician Ratios",
                  desc: "Standard residential programs often operate with 12-20 clients per therapist. High-quality luxury programs maintain ratios of 4-6 clients per clinician. The difference is profound: more individual therapy sessions, more personalized treatment planning, and more clinical attention to the specific factors driving each person's addiction and mental health symptoms. Research in the Journal of Substance Abuse Treatment consistently finds that treatment intensity and individualization are among the strongest predictors of positive outcomes.",
                },
                {
                  title: "Higher Clinical Qualifications",
                  desc: "Many standard programs rely primarily on master's-level therapists and peer counselors for the majority of direct clinical care. The best luxury programs employ doctoral-level psychologists, board-certified psychiatrists, and clinicians with specialized training in evidence-based modalities like EMDR, DBT, and trauma-focused CBT. The difference in clinical expertise translates directly into more accurate diagnoses, more effective treatment plans, and better outcomes, particularly for clients with complex presentations like dual diagnosis or treatment-resistant conditions.",
                },
                {
                  title: "Comfort Reduces Dropout Rates",
                  desc: "One of the most practical arguments for luxury treatment is retention. Treatment only works if the person stays long enough for it to work. The National Institute on Drug Abuse (NIDA) identifies treatment duration as one of the most critical factors in successful recovery, with longer stays consistently producing better outcomes. Comfortable living conditions, quality food, physical amenities, and a non-institutional environment reduce the resistance, restlessness, and discomfort that cause many people to leave treatment prematurely.",
                },
                {
                  title: "Privacy and Confidentiality",
                  desc: "For executives, professionals, public figures, and others whose careers or reputations depend on confidentiality, the discrete, residential setting of a luxury program removes a significant barrier to seeking treatment. A person who would never enter a large institutional facility may accept help in a small, private, home-like environment. The best treatment in the world is useless if the person never walks through the door.",
                },
                {
                  title: "Holistic Integration",
                  desc: "Well-run luxury programs integrate holistic modalities, yoga, nutrition counseling, fitness programming, massage therapy, mindfulness, as clinical tools rather than recreational add-ons. When these modalities are overseen by the clinical team and integrated into the treatment plan, they address the physical and somatic dimensions of addiction that talk therapy alone cannot reach.",
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

      {/* Red flags */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Buyer Beware
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Red Flags When Evaluating Luxury Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "The website emphasizes amenities and location over clinical credentials and treatment modalities",
                "They cannot name the specific evidence-based therapies used or the qualifications of the clinicians delivering them",
                "Client-to-therapist ratios are above 8:1 or are not disclosed",
                "There is no psychiatrist on staff or available for comprehensive psychiatric evaluation",
                "The program does not offer integrated dual diagnosis treatment",
                "Marketing materials use words like \"painless,\" \"effortless,\" or suggest rapid transformation",
                "They are not accredited by the Joint Commission or CARF",
                "The program cannot explain their aftercare planning process in detail",
              ].map((flag, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-red-300 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRC's approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Sets Desert Recovery Centers Apart
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We built Desert Recovery Centers on the conviction that a truly luxury treatment program should be defined by clinical excellence, not just beautiful surroundings. Here is what that looks like in practice:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "10-Bed Maximum Per Facility",
                  desc: "Our intentionally small program sizes mean you are never lost in a crowd. Every client receives deeply personalized attention from licensed clinical psychologists, a board-certified psychiatrist, and a dedicated care team.",
                },
                {
                  title: "Doctoral-Level Clinical Staff",
                  desc: "Your primary therapy is delivered by or under the direct supervision of licensed clinical psychologists, the highest clinical qualification in behavioral health. This is rare in residential treatment and reflects our commitment to clinical rigor.",
                },
                {
                  title: "Comprehensive Dual Diagnosis",
                  desc: "Every client receives a full psychiatric evaluation within 72 hours. Every treatment plan addresses all diagnosed conditions from day one. No fragmented care.",
                },
                {
                  title: "Evidence-Based Modalities",
                  desc: "CBT, DBT, EMDR, trauma-focused therapies, somatic experiencing, and our proprietary BridgeWork™ skill integration program, all delivered by clinicians with specialized training in each modality.",
                },
                {
                  title: "Joint Commission Accredited",
                  desc: "Our facilities meet the highest standards for patient safety, clinical quality, and organizational performance, independently verified by the same body that accredits the nation's top hospitals.",
                },
                {
                  title: "Luxury That Serves Recovery",
                  desc: "Our Arizona facilities feature pools, gyms, tennis and basketball courts, massage rooms, gourmet kitchens, and private bedrooms, not as marketing points, but as tools that support physical health, reduce dropout rates, and create the comfort necessary for deep healing work.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-cream rounded-xl p-6 border border-gray-100"
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

      {/* Conclusion */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              The Bottom Line
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Is luxury rehab worth the cost? If &quot;luxury&quot; means a beautiful facility with thin clinical programming, the answer is no. You are paying for an expensive vacation that will not address the medical condition that brought you there.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              But if &quot;luxury&quot; means a program that combines genuine clinical depth, doctoral-level clinicians, low ratios, integrated dual diagnosis treatment, multiple evidence-based modalities, with an environment designed to support healing, reduce dropout, and restore dignity to the treatment experience, then the answer is yes. The investment in the right luxury program can produce outcomes that justify the cost many times over, in health, in relationships, in career, and in quality of life.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              The key is knowing what to look for, and asking the right questions before you commit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+14809313617" className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Call (480) 931-3617
              </a>
              <a href="/facilities/scottsdale" className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Tour Our Facilities
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-display text-lg text-forest font-semibold mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Our Facilities", href: "/facilities/glendale" },
                  { label: "Treatment Therapies", href: "/treatments" },
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
                  { label: "Rehab FAQ", href: "/resources/faq" },
                  { label: "Signs of Addiction", href: "/blog/signs-of-addiction" },
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
