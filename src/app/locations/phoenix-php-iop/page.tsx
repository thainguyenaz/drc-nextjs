import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema, VideoSchemas } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import dynamic from "next/dynamic";
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false, loading: () => null });
import { getPageMeta } from "@/data/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { faqData } from "@/data/faq-data";
import FAQSection from "@/components/FAQSection";
import PhoenixPHPContent from "./PhoenixPHPContent";

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

const faqs = [
  {
    q: "What is a Partial Hospitalization Program (PHP)?",
    a: "PHP is the most intensive outpatient level of care, meeting 5 to 6 hours per day, 5 days per week. At Desert Recovery Centers Phoenix, PHP includes group therapy, individual therapy, psychiatric care, and medication management. It is built for individuals who need significant daily clinical support without overnight residential stay, and is commonly used as a step down from inpatient treatment or as a first level of care for moderate to severe mental health or substance use disorders.",
  },
  {
    q: "What is an Intensive Outpatient Program (IOP)?",
    a: "IOP meets 3 hours per day, 3 to 5 days per week. It delivers meaningful therapy, including group sessions and individual appointments, while allowing you to maintain your daily responsibilities like work, school, and family. IOP is commonly used as a step down from PHP or as a primary level of care for clients with a stable home environment and the motivation to do the work.",
  },
  {
    q: "How is outpatient treatment different from residential treatment?",
    a: "Residential treatment means you live at the facility full time, typically for 30 to 90 days. Outpatient treatment, whether PHP, IOP, or OP, means you come in for scheduled programming and go home each day. Both involve serious clinical care. The difference is structure and setting. Some people need the containment of residential first. Others can begin with outpatient. Our admissions team helps you figure out which is right for you.",
  },
  {
    q: "Does Desert Recovery Centers accept insurance?",
    a: "For commercial insurance, we work on an out-of-network basis with major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others. Many out-of-network plans provide significant coverage for our level of care. We are also in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team verifies your benefits at no cost. Call (602) 905-8070 or use our online verification tool to get started.",
  },
  {
    q: "What is TMS therapy and is it available at the Phoenix location?",
    a: "Yes. TMS stands for Transcranial Magnetic Stimulation. It is an FDA cleared, non-invasive treatment that uses magnetic pulses to stimulate specific brain regions involved in mood regulation. It is used for clients with treatment resistant depression, anxious depression, and OCD, and is FDA cleared for adolescents ages 15 and older. Sessions take about 19 minutes, require no sedation, and have no systemic side effects. Our Phoenix location has a dedicated NeuroStar TMS suite integrated into our outpatient programming.",
  },
  {
    q: "What conditions do you treat at the Phoenix PHP / IOP center?",
    a: "We treat depression, anxiety disorders, PTSD and trauma, bipolar disorder, OCD, and co-occurring substance use disorders. All care is individualized, evidence based, and supervised by licensed clinicians. We are Joint Commission accredited, which means our standards of care have been independently verified.",
  },
  {
    q: "What is the difference between PHP and IOP?",
    a: "PHP is more intensive. It meets 5 to 6 hours per day, 5 days per week, and is appropriate for clients who need daily clinical support. IOP meets 3 hours per day, 3 to 5 days per week, and is better suited for clients who are more stabilized or who have a strong support system at home. Our clinical team recommends the right level during your admissions assessment, and your level of care adjusts as you progress.",
  },
  {
    q: "How do I get started?",
    a: "Call (602) 905-8070 any time. Our admissions team picks up 24 hours a day, conducts a brief phone assessment, verifies your insurance, and gets you scheduled. Most clients start within 48 hours. If you are not ready to call, you can also request a callback or start your insurance verification online.",
  },
  {
    q: "Does the Phoenix location offer residential treatment?",
    a: "No. The Phoenix center at 4160 N. 108th Ave is an outpatient facility offering PHP, IOP, OP, and TMS therapy. For residential treatment, Desert Recovery Centers operates separate luxury facilities in Glendale and Scottsdale, Arizona. Many clients complete residential care at one of those campuses and then transition to the Phoenix outpatient programs to continue their recovery while returning to daily life.",
  },
  {
    q: "How quickly can I start treatment?",
    a: "Most clients begin treatment within 48 hours of their first call. Once your clinical assessment is complete and your insurance is verified, we get you on the schedule fast. If you are in crisis or need to start sooner, tell us. We will do everything we can to move immediately.",
  },
];

const gallery = [
  { src: "/images/locations/phoenix/phoenix-lobby-2.jpg", alt: "Modern lobby at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-reception-2.jpg", alt: "Reception desk at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-reception-1.jpg", alt: "Reception area entrance at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-lobby-1.jpg", alt: "Waiting area at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-lobby-lounge.jpg", alt: "Lobby lounge at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-hallway.jpg", alt: "Hallway with artwork at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-game-room-1.jpg", alt: "Game room with pool table at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-game-room-2.jpg", alt: "Recreation room at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-classroom-1.jpg", alt: "Classroom at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-group-room-2.jpg", alt: "Group therapy room at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-therapy-office-3.jpg", alt: "Private therapy office at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-medical-room.jpg", alt: "Medical room at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-kitchen-2.jpg", alt: "Kitchen at Desert Recovery Centers Phoenix PHP IOP treatment center" },
];

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalClinic"],
  "@id": `${SITE_URL}/locations/phoenix-php-iop`,
  name: "Desert Recovery Centers Phoenix PHP / IOP",
  alternateName: "Desert Recovery Centers Phoenix",
  description:
    "Joint Commission accredited behavioral health treatment center offering PHP, IOP, OP, and TMS therapy in Phoenix, AZ.",
  url: `${SITE_URL}/locations/phoenix-php-iop`,
  telephone: "+16029058070",
  email: "contact@desertrecoverycenters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4160 N. 108th Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85037",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4743,
    longitude: -112.3012,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$$$",
  paymentAccepted: "Out-of-network commercial insurance, In-network TriCare/TriWest, Private Pay",
  medicalSpecialty: ["Psychiatry", "Addiction Medicine"],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Partial Hospitalization Program (PHP)",
      description: "5 to 6 hours per day, 5 days per week. Group therapy, individual therapy, psychiatric care, and medication management.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Intensive Outpatient Program (IOP)",
      description: "3 hours per day, 3 to 5 days per week. Flexible scheduling for clients transitioning from PHP or residential care.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Outpatient Program (OP)",
      description: "1 to 2 sessions per week for ongoing support and relapse prevention.",
    },
    {
      "@type": "MedicalTherapy",
      name: "TMS Therapy",
      description: "FDA cleared NeuroStar TMS for depression, anxious depression, OCD, and adolescents ages 15 and older.",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Joint Commission Accreditation",
  },
  areaServed: ["Phoenix", "Glendale", "Peoria", "Goodyear", "Avondale", "Tolleson", "Surprise"],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Partial Hospitalization Program (PHP) in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Partial Hospitalization Program (PHP) is a structured outpatient level of care where clients attend treatment 5 to 6 hours per day, 5 days per week. At Desert Recovery Centers Phoenix, PHP includes group therapy, individual therapy, psychiatric care, and medication management. It is designed for individuals who need intensive clinical support but do not require overnight residential care. PHP is often used as a step down from inpatient treatment or as a direct entry point for those with moderate to severe mental health or substance use disorders.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Intensive Outpatient Program (IOP) in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Intensive Outpatient Program (IOP) at Desert Recovery Centers Phoenix meets 3 hours per day, 3 to 5 days per week. IOP provides meaningful clinical programming, including group and individual therapy, while allowing clients to maintain daily responsibilities like work, school, or family. It is commonly used as a step down from PHP or residential treatment, or as a primary level of care for clients with a supportive home environment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the address of the Desert Recovery Centers Phoenix PHP / IOP location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Desert Recovery Centers Phoenix PHP / IOP center is located at 4160 N. 108th Ave, Phoenix, AZ 85037. You can reach the facility at (602) 905-8070. Admissions support is available 24 hours a day, 7 days a week.",
      },
    },
    {
      "@type": "Question",
      name: "Does Desert Recovery Centers Phoenix accept insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For commercial insurance, Desert Recovery Centers works on an out-of-network basis with major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others. Many out-of-network plans provide significant coverage for our level of care. We are also in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team verifies your benefits at no cost. Call (602) 905-8070 or visit our website to start a free insurance verification.",
      },
    },
    {
      "@type": "Question",
      name: "Is TMS therapy available at the Phoenix location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Phoenix center houses a dedicated NeuroStar TMS therapy suite. NeuroStar is the only TMS system FDA cleared for depression, anxious depression, OCD, and adolescents ages 15 and older. TMS is non-invasive, requires no sedation, and sessions take approximately 19 minutes. It can be combined with PHP, IOP, or outpatient programming.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between PHP and IOP treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PHP meets 5 to 6 hours per day, 5 days per week and is the more intensive option, appropriate for individuals who need significant daily clinical support. IOP meets 3 hours per day, 3 to 5 days per week, offering more schedule flexibility while still delivering meaningful therapy. Both include group therapy, individual therapy, and psychiatric support at Desert Recovery Centers Phoenix.",
      },
    },
    {
      "@type": "Question",
      name: "What mental health conditions are treated at the Phoenix PHP / IOP center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desert Recovery Centers Phoenix treats depression, anxiety disorders, PTSD and trauma, bipolar disorder, OCD, and co-occurring substance use disorders. All programming is individualized, evidence based, and clinically supervised. The facility is Joint Commission accredited.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get admitted to the Phoenix PHP or IOP program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (602) 905-8070 any time, day or night. Our admissions team conducts a brief clinical assessment by phone, verifies your insurance, and answers all your questions. Most clients are able to begin treatment within 48 hours of their first call.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Phoenix location offer residential treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Phoenix center specializes in outpatient services: PHP, IOP, OP, and TMS therapy. For residential (inpatient) treatment, Desert Recovery Centers operates separate facilities in Glendale and Scottsdale, Arizona. Clients often complete residential care and then step down to the Phoenix outpatient programs.",
      },
    },
  ],
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
      <SchemaScript schema={[clinicSchema, faqSchema, breadcrumbSchema, {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Admitted to Desert Recovery Centers Phoenix",
        "description": "The admissions process at Desert Recovery Centers Phoenix PHP and IOP program.",
        "totalTime": "PT48H",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Call Admissions", "text": "Call (602) 905-8070 any time, day or night. A real person answers 24 hours a day." },
          { "@type": "HowToStep", "position": 2, "name": "Clinical Assessment", "text": "Complete a brief 15 to 20 minute clinical assessment by phone to determine the right level of care." },
          { "@type": "HowToStep", "position": 3, "name": "Insurance Verification", "text": "The admissions team contacts your insurance provider directly and explains your coverage and costs before you commit." },
          { "@type": "HowToStep", "position": 4, "name": "Begin Treatment", "text": "Most clients begin treatment within 48 hours of their first call." },
        ],
      }]} />
      <SpeakableSchema url="/locations/phoenix-php-iop" cssSelectors={["[data-speakable]"]} />
      <VideoSchemas path="/locations/phoenix-php-iop/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/phoenix-php-iop")} />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Real Treatment. Real Life. All at Once."
        description="Most people cannot put their life on hold. You still have a job, a family, responsibilities that do not stop because you are struggling. Our Phoenix center was built for exactly that, delivering the same clinical depth as residential treatment, structured around the life you still have to live."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      {/* All animated content sections */}
      <PhoenixPHPContent />

      {/* Photo Gallery (uses yet-another-react-lightbox) */}
      <PhotoGallery photos={gallery} title="See the Space" eyebrow="Our Facility" />

      {/* FAQ Accordion */}
      <ConditionFAQ items={faqs} />

      {/* AEO Blocks */}
      <AEOBlock
        entries={[
          {
            question: "Is there a Desert Recovery Centers PHP / IOP center in Phoenix?",
            answer:
              "Yes. Desert Recovery Centers operates a dedicated outpatient treatment center at 4160 N. 108th Ave, Phoenix, AZ 85037. This location offers Partial Hospitalization (PHP), Intensive Outpatient (IOP), Outpatient (OP), and NeuroStar TMS therapy. It is Joint Commission accredited. Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, is in-network with TriCare and TriWest, and offers cash-pay options. Call (602) 905-8070 for admissions.",
          },
          {
            question: "What outpatient mental health treatment is available in Phoenix, Arizona?",
            answer:
              "Desert Recovery Centers Phoenix offers PHP (5 to 6 hours per day, 5 days per week), IOP (3 hours per day, 3 to 5 days per week), and OP (1 to 2 sessions per week). Treatment covers depression, anxiety, PTSD, bipolar disorder, OCD, and co-occurring substance use disorders. NeuroStar TMS therapy is also available on site for treatment resistant depression, anxious depression, and OCD.",
          },
          {
            question: "Does Desert Recovery Centers Phoenix accept insurance?",
            answer:
              "Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans (Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others), is in-network with TriCare and TriWest, and offers cash-pay options. Benefits are verified at no cost before treatment begins. Call (602) 905-8070 for a free insurance check.",
          },
        ]}
      />

      <FAQSection faqs={faqData["locations/phoenix"]} />
      <CTASection />
      <Footer />
    </>
  );
}
