import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import Link from "next/link";

const SITE_URL = "https://www.desertrecoverycenters.com";
const PAGE_PATH = "/adolescent/ocd";

export const metadata: Metadata = {
  title: "Adolescent OCD Treatment | Desert Recovery Centers Phoenix",
  description:
    "OCD treatment for adolescents in Phoenix, AZ. Obsessive compulsive disorder therapy for teens ages 13 to 17. Evidence-based ERP and CBT programs. Call (623) 257-5384.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Adolescent OCD Treatment | Desert Recovery Centers Phoenix",
    description:
      "OCD treatment for adolescents in Phoenix, AZ. PHP, IOP, and outpatient programs for teens ages 13 to 17.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Desert Recovery Centers",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Adolescent", item: `${SITE_URL}/adolescent-treatment` },
    { "@type": "ListItem", position: 3, name: "OCD" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}/#webpage`,
  url: `${SITE_URL}${PAGE_PATH}`,
  name: "Adolescent OCD Treatment | Desert Recovery Centers",
  specialty: "Adolescent Psychiatry",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function AdolescentOcdPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema]} />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname(PAGE_PATH)} />
      <PageHero
        eyebrow="Adolescent Treatment"
        title="OCD in Adolescents"
        description="Obsessive compulsive disorder in teenagers is rarely what it looks like on television. It is intrusive thoughts, rituals, and the exhausting effort of managing a brain that will not quiet down."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Understanding OCD in Teenagers
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Obsessive compulsive disorder in teenagers is rarely what it looks like on television. It is intrusive thoughts, rituals, and the exhausting effort of managing a brain that will not quiet down.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, our adolescent clinical team uses evidence-based approaches including Exposure and Response Prevention and CBT to help teenagers ages 13 to 17 break the cycle of obsessions and compulsions. Our PHP, IOP, and outpatient programs provide the structured support teens need to regain control.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Family involvement is a required component of every adolescent program. You are never a bystander in your child&apos;s treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
            Get Help for Your Teenager
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            If your teenager is struggling with OCD, our admissions team is available 24/7 to answer your questions and help you take the next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+16232575384"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Call (623) 257-5384
            </a>
            <Link
              href="/adolescent-treatment"
              className="bg-forest/10 hover:bg-forest/20 text-forest font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
            >
              Back to Adolescent Program
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
