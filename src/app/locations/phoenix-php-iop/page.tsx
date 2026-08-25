import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema, VideoSchemas, LocalBusinessSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import { getPageMeta } from "@/data/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { faqData } from "@/data/faq-data";
import { getFAQSchema } from "@/lib/schema";
import FAQSection from "@/components/FAQSection";
import PhoenixPHPContent from "./PhoenixPHPContent";
import LeaveAReviewCTA from "@/components/LeaveAReviewCTA";

const SITE_URL = "https://desertrecoverycenters.com";

const meta = getPageMeta("/locations/phoenix-php-iop/");

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Phoenix PHP / IOP", item: `${SITE_URL}/locations/phoenix-php-iop` },
  ],
};

export default function PhoenixPhpIopPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["locations/phoenix"]), breadcrumbSchema, {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Admitted to Desert Recovery Centers Phoenix",
        "description": "The admissions process at Desert Recovery Centers Phoenix PHP and IOP program.",
        "totalTime": "PT48H",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Call Admissions", "text": "Call (623) 305-0496 any time, day or night. A live admissions specialist answers from 6 AM to 10 PM, and our line is always open after hours." },
          { "@type": "HowToStep", "position": 2, "name": "Clinical Assessment", "text": "Complete a brief 15 to 20 minute clinical assessment by phone to determine the right level of care." },
          { "@type": "HowToStep", "position": 3, "name": "Insurance Verification", "text": "The admissions team contacts your insurance provider directly and explains your coverage and costs before you commit." },
          { "@type": "HowToStep", "position": 4, "name": "Begin Treatment", "text": "Most clients begin treatment within 48 hours of their first call." },
        ],
      }]} />
      <LocalBusinessSchema index={2} />
      <SpeakableSchema url="/locations/phoenix-php-iop" cssSelectors={["[data-speakable]"]} />
      <VideoSchemas path="/locations/phoenix-php-iop/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/phoenix-php-iop")} />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Real Treatment. Real Life. All at Once."
        description="Most people cannot put their life on hold. You still have a job, a family, responsibilities that do not stop because you are struggling. Our Phoenix center was built for exactly that, delivering the same clinical depth as residential treatment, structured around the life you still have to live."
        bgImage="/images/locations/php-iop/php-iop-reception-1.jpg"
      />

      {/* All animated content sections */}
      <PhoenixPHPContent />

      <LeaveAReviewCTA
        reviewUrl="https://g.page/r/CVuiBewYiKlAEBM/review"
        supportingCopy="Share your experience with our Phoenix facility on Google."
        showQr={true}
      />

      {/* AEO Blocks */}
      <AEOBlock
        entries={[
          {
            question: "Is there a Desert Recovery Centers PHP / IOP center in Phoenix?",
            answer:
              "Yes. Desert Recovery Centers operates a dedicated outpatient treatment center at 4160 N. 108th Ave, Phoenix, AZ 85037. This location offers Partial Hospitalization (PHP), Intensive Outpatient (IOP), and Outpatient (OP). NeuroStar TMS therapy is also available on-site, provided by Desert TMS LLC, an affiliated licensed provider. It is Joint Commission accredited. Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans and offers cash-pay options; TRICARE is in-network for residential treatment, through TriWest. Contact admissions to verify TRICARE benefits for outpatient care. Call (623) 305-0496 for admissions.",
          },
          {
            question: "What outpatient mental health treatment is available in Phoenix, Arizona?",
            answer:
              "Desert Recovery Centers Phoenix offers PHP (5 to 6 hours per day, 5 days per week), IOP (3 hours per day, 3 to 5 days per week), and OP (1 to 2 sessions per week). Treatment covers depression, anxiety, PTSD, bipolar disorder, OCD, and co-occurring substance use disorders. NeuroStar TMS therapy is also available on site for treatment resistant depression, anxious depression, and OCD (add-on).",
          },
          {
            question: "Does Desert Recovery Centers Phoenix accept insurance?",
            answer:
              "Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans (Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare) and offers cash-pay options; TRICARE is in-network for residential treatment, through TriWest. Benefits are verified at no cost before treatment begins. Call (623) 305-0496 for a free insurance check.",
          },
        ]}
      />

      <FAQSection faqs={faqData["locations/phoenix"]} />
      <CTASection />
      <Footer />
    </>
  );
}
