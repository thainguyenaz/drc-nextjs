import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import PhotoGallery from "@/components/PhotoGallery";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import AEOBlock from "@/components/AEOBlock";
import { InlineFAQSchema, SpeakableSchema } from "@/lib/seo";
import Footer from "@/components/Footer";
import RTCContent from "./RTCContent";

const SITE_URL = "https://www.desertrecoverycenters.com";

export const metadata: Metadata = {
  title: "Residential Treatment Center (RTC) Arizona | Desert Recovery Centers",
  description:
    "Desert Recovery Centers offers luxury residential treatment for addiction and mental health in Glendale and Scottsdale, Arizona. 24/7 clinical care, doctoral-level psychologists, board-certified psychiatrists. Joint Commission accredited. Insurance accepted. Call now.",
  alternates: { canonical: `${SITE_URL}/treatments/residential` },
  openGraph: {
    title: "Residential Treatment Center (RTC) Arizona | Desert Recovery Centers",
    description:
      "Desert Recovery Centers offers luxury residential treatment for addiction and mental health in Glendale and Scottsdale, Arizona. 24/7 clinical care, doctoral-level psychologists, board-certified psychiatrists. Joint Commission accredited. Insurance accepted. Call now.",
    url: `${SITE_URL}/treatments/residential`,
    images: [
      {
        url: `${SITE_URL}/images/glendale/Glendale-Front.jpg`,
        alt: "Desert Recovery Centers Glendale residential treatment facility in Arizona",
      },
    ],
    siteName: "Desert Recovery Centers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Treatment Center (RTC) Arizona | Desert Recovery Centers",
    description:
      "Desert Recovery Centers offers luxury residential treatment for addiction and mental health in Glendale and Scottsdale, Arizona. 24/7 clinical care, doctoral-level psychologists, board-certified psychiatrists. Joint Commission accredited. Insurance accepted. Call now.",
    images: [`${SITE_URL}/images/glendale/Glendale-Front.jpg`],
  },
  keywords: [
    "residential treatment center Arizona",
    "luxury rehab Arizona",
    "inpatient mental health treatment Arizona",
    "residential addiction treatment Glendale AZ",
    "residential treatment Scottsdale AZ",
    "RTC behavioral health Arizona",
    "Joint Commission accredited rehab Arizona",
    "Desert Recovery Centers residential",
  ],
};

const faqs = [
  {
    q: "What is residential treatment for addiction and mental health?",
    a: "Residential treatment, also called inpatient treatment or RTC, is a level of care where clients live at the treatment facility for the duration of their program, typically 30 to 90 days. At Desert Recovery Centers, residential treatment provides 24-hour clinical supervision, daily individual and group therapy, psychiatric care, medication management, and structured programming in a luxury home-like setting. It is appropriate for individuals whose symptoms are severe enough that outpatient care would be insufficient to keep them safe and progressing.",
  },
  {
    q: "How long does residential treatment last at Desert Recovery Centers?",
    a: "Residential treatment at Desert Recovery Centers typically lasts 30 to 90 days depending on clinical need, insurance coverage, and individual progress. The standard program is 30 days, which allows time for medical stabilization, thorough diagnostic assessment, and meaningful therapeutic work. Longer stays of 60 or 90 days are available and recommended for clients with complex presentations, co-occurring disorders, or histories of multiple treatment episodes. Length of stay is always determined by clinical criteria, not arbitrary timelines.",
  },
  {
    q: "What does a typical day look like in residential treatment?",
    a: "A typical day in residential treatment at Desert Recovery Centers includes a structured schedule of individual therapy, group therapy, psychiatric appointments, holistic activities, meals, and free time. Mornings typically begin with a community meeting and group session. Afternoons include individual therapy, specialized groups such as trauma processing or CBT skills, and holistic programming like yoga or art therapy. Evenings include peer support activities and time to reflect and decompress. The schedule is consistent because routine is itself therapeutic, particularly for individuals with mood disorders, trauma, or substance use disorders.",
  },
  {
    q: "What is the difference between residential treatment and PHP?",
    a: "Residential treatment means the client lives at the facility full time, with 24-hour supervision and a fully structured daily schedule. PHP, or Partial Hospitalization Program, is the next step down. Clients attend programming 5 to 6 hours per day, 5 days per week, but go home or to sober living in the evenings. Residential is appropriate when someone needs full containment, constant clinical oversight, or is at a level of risk that cannot be safely managed in an outpatient setting. PHP is appropriate for clients who are more stabilized but still need intensive daily clinical support.",
  },
  {
    q: "Does Desert Recovery Centers accept insurance for residential treatment?",
    a: "Yes. Desert Recovery Centers accepts most major commercial insurance plans for residential treatment, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and others. Under the Mental Health Parity and Addiction Equity Act, insurance companies are required to cover residential mental health and addiction treatment at the same level as medical care. Our admissions team verifies your benefits before treatment begins at no cost to you. Call (623) 323-1012 for a free verification.",
  },
  {
    q: "Who is on the clinical team during residential treatment?",
    a: "The Desert Recovery Centers residential clinical team includes licensed clinical psychologists with doctoral degrees who direct your treatment plan and conduct individual therapy sessions, a board-certified psychiatrist who manages medication and conducts psychiatric evaluations, registered nurses who provide 24/7 medical monitoring, and licensed therapists who facilitate group therapy and specialized treatment groups. The staff-to-client ratio is intentionally small, ensuring every client receives individualized attention every single day.",
  },
  {
    q: "What amenities are included in residential treatment at DRC?",
    a: "Residential treatment at Desert Recovery Centers is delivered in a luxury home-like setting. The Glendale facility is 7,500 square feet and includes a pool, tennis court, basketball court, gym, massage room, billiards room, gourmet kitchen, private bedrooms, group therapy rooms, and outdoor recreation areas. The Scottsdale facility offers a pool, private suites, gym, game room, massage therapy, yoga space, SoftWave therapy, outdoor recreation, and stunning mountain views. Amenities are not a distraction from treatment. They are part of healing the whole person.",
  },
  {
    q: "Can family members visit during residential treatment?",
    a: "Yes. Family involvement is an important part of residential treatment at Desert Recovery Centers. Family visits are structured and clinically guided. Families also participate in weekly family therapy sessions, psychoeducation groups, and receive regular updates from the clinical team. The timing and structure of visits are coordinated with the treatment team to ensure they support rather than disrupt the clinical process.",
  },
  {
    q: "What happens after residential treatment ends?",
    a: "Discharge planning begins on day one of residential treatment at Desert Recovery Centers. Before leaving, every client has a detailed aftercare plan that includes a step-down level of care (typically PHP or IOP), outpatient therapy connections, medication continuity, and a personalized relapse prevention plan. Many clients transition directly from our residential programs in Glendale or Scottsdale to our Phoenix PHP and IOP program, maintaining continuity of care within the DRC system. The transition out of residential is planned, supported, and never abrupt.",
  },
  {
    q: "How do I get admitted to residential treatment at Desert Recovery Centers?",
    a: "Call (623) 323-1012 any time, day or night. Our admissions team answers 24 hours a day. They conduct a brief clinical assessment by phone, verify your insurance benefits, and walk you through every step of the intake process. Most clients are admitted within 24 to 48 hours of their first call. If you are in immediate crisis, tell us. We prioritize emergency admissions and can often accommodate same-day intake.",
  },
];

const gallery = [
  { src: "/images/glendale/Glendale-Front.jpg", alt: "Front entrance of Desert Recovery Centers Glendale residential treatment facility in Arizona" },
  { src: "/images/glendale/Glendale-Living-Room.jpg", alt: "Luxury living room at Desert Recovery Centers Glendale residential rehab" },
  { src: "/images/glendale/Glendale-Pool.jpg", alt: "Pool and outdoor recreation area at Desert Recovery Centers Glendale" },
  { src: "/images/glendale/Glendale-Gym.jpg", alt: "State of the art gym at Desert Recovery Centers Glendale treatment center" },
  { src: "/images/glendale/Glendale-Kitchen.jpg", alt: "Gourmet kitchen at Desert Recovery Centers Glendale residential facility" },
  { src: "/images/glendale/Glendale-Room-1.jpg", alt: "Private bedroom at Desert Recovery Centers Glendale luxury rehab Arizona" },
  { src: "/images/glendale/Glendale-Group-Room.jpg", alt: "Group therapy room at Desert Recovery Centers Glendale" },
  { src: "/images/glendale/Glendale-Basketball.jpg", alt: "Basketball court at Desert Recovery Centers Glendale residential treatment" },
  { src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg", alt: "Front entrance of Desert Recovery Centers Scottsdale luxury residential treatment center" },
  { src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg", alt: "Luxury living area at Desert Recovery Centers Scottsdale residential rehab" },
  { src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-02-2024-0830August-02-202400010-2.jpg", alt: "Mountain view outdoor area at Desert Recovery Centers Scottsdale Arizona" },
  { src: "/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg", alt: "Gym at Desert Recovery Centers Scottsdale residential treatment center" },
];

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${SITE_URL}/treatments/residential#rtc`,
  name: "Desert Recovery Centers Residential Treatment Program",
  description:
    "Joint Commission accredited luxury residential treatment for addiction and mental health at two Arizona locations. 24/7 clinical care with doctoral-level psychologists and board-certified psychiatrists.",
  url: `${SITE_URL}/treatments/residential`,
  telephone: "+16233231012",
  email: "contact@desertrecoverycenters.com",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Joint Commission Accreditation",
  },
  availableService: [
    { "@type": "MedicalTherapy", name: "Residential Treatment", description: "24/7 supervised inpatient treatment for addiction and mental health. Typically 30 to 90 days." },
    { "@type": "MedicalTherapy", name: "Dual Diagnosis Treatment", description: "Integrated treatment for co-occurring mental health and substance use disorders." },
    { "@type": "MedicalTherapy", name: "Medical Detox Coordination", description: "Medically supervised detoxification before or during residential treatment." },
    { "@type": "MedicalTherapy", name: "Individual Therapy", description: "Multiple weekly individual sessions with a licensed doctoral-level psychologist." },
    { "@type": "MedicalTherapy", name: "Group Therapy", description: "Daily evidence-based group therapy facilitated by licensed clinicians." },
    { "@type": "MedicalTherapy", name: "Family Therapy", description: "Structured family programming including psychoeducation, joint sessions, and family support groups." },
  ],
  location: [
    {
      "@type": "Place",
      name: "DRC Glendale",
      address: { "@type": "PostalAddress", streetAddress: "8105 W Frier Dr", addressLocality: "Glendale", addressRegion: "AZ", postalCode: "85303", addressCountry: "US" },
    },
    {
      "@type": "Place",
      name: "DRC Scottsdale",
      address: { "@type": "PostalAddress", streetAddress: "23222 N Church Rd", addressLocality: "Scottsdale", addressRegion: "AZ", postalCode: "85255", addressCountry: "US" },
    },
  ],
  parentOrganization: { "@type": "Organization", name: "Desert Recovery Centers", url: SITE_URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is residential treatment for addiction and mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential treatment, also called inpatient treatment or RTC, is a level of care where clients live at the treatment facility for the duration of their program, typically 30 to 90 days. At Desert Recovery Centers, residential treatment provides 24-hour clinical supervision, daily individual and group therapy, psychiatric care, medication management, and structured programming in a luxury home-like setting. It is appropriate for individuals whose symptoms are severe enough that outpatient care would be insufficient to keep them safe and progressing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does residential treatment last at Desert Recovery Centers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential treatment at Desert Recovery Centers typically lasts 30 to 90 days depending on clinical need, insurance coverage, and individual progress. The standard program is 30 days, which allows time for medical stabilization, thorough diagnostic assessment, and meaningful therapeutic work. Longer stays of 60 or 90 days are available and recommended for clients with complex presentations, co-occurring disorders, or histories of multiple treatment episodes. Length of stay is always determined by clinical criteria, not arbitrary timelines.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical day look like in residential treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical day in residential treatment at Desert Recovery Centers includes a structured schedule of individual therapy, group therapy, psychiatric appointments, holistic activities, meals, and free time. Mornings typically begin with a community meeting and group session. Afternoons include individual therapy, specialized groups such as trauma processing or CBT skills, and holistic programming like yoga or art therapy. Evenings include peer support activities and time to reflect and decompress. The schedule is consistent because routine is itself therapeutic, particularly for individuals with mood disorders, trauma, or substance use disorders.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between residential treatment and PHP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential treatment means the client lives at the facility full time, with 24-hour supervision and a fully structured daily schedule. PHP, or Partial Hospitalization Program, is the next step down. Clients attend programming 5 to 6 hours per day, 5 days per week, but go home or to sober living in the evenings. Residential is appropriate when someone needs full containment, constant clinical oversight, or is at a level of risk that cannot be safely managed in an outpatient setting. PHP is appropriate for clients who are more stabilized but still need intensive daily clinical support.",
      },
    },
    {
      "@type": "Question",
      name: "Does Desert Recovery Centers accept insurance for residential treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Desert Recovery Centers accepts most major commercial insurance plans for residential treatment, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and others. Under the Mental Health Parity and Addiction Equity Act, insurance companies are required to cover residential mental health and addiction treatment at the same level as medical care. Our admissions team verifies your benefits before treatment begins at no cost to you. Call (623) 323-1012 for a free verification.",
      },
    },
    {
      "@type": "Question",
      name: "Who is on the clinical team during residential treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Desert Recovery Centers residential clinical team includes licensed clinical psychologists with doctoral degrees who direct your treatment plan and conduct individual therapy sessions, a board-certified psychiatrist who manages medication and conducts psychiatric evaluations, registered nurses who provide 24/7 medical monitoring, and licensed therapists who facilitate group therapy and specialized treatment groups. The staff-to-client ratio is intentionally small, ensuring every client receives individualized attention every single day.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities are included in residential treatment at DRC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential treatment at Desert Recovery Centers is delivered in a luxury home-like setting. The Glendale facility is 7,500 square feet and includes a pool, tennis court, basketball court, gym, massage room, billiards room, gourmet kitchen, private bedrooms, group therapy rooms, and outdoor recreation areas. The Scottsdale facility offers a pool, private suites, gym, game room, massage therapy, yoga space, SoftWave therapy, outdoor recreation, and stunning mountain views. Amenities are not a distraction from treatment. They are part of healing the whole person.",
      },
    },
    {
      "@type": "Question",
      name: "Can family members visit during residential treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Family involvement is an important part of residential treatment at Desert Recovery Centers. Family visits are structured and clinically guided. Families also participate in weekly family therapy sessions, psychoeducation groups, and receive regular updates from the clinical team. The timing and structure of visits are coordinated with the treatment team to ensure they support rather than disrupt the clinical process.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after residential treatment ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discharge planning begins on day one of residential treatment at Desert Recovery Centers. Before leaving, every client has a detailed aftercare plan that includes a step-down level of care (typically PHP or IOP), outpatient therapy connections, medication continuity, and a personalized relapse prevention plan. Many clients transition directly from our residential programs in Glendale or Scottsdale to our Phoenix PHP and IOP program, maintaining continuity of care within the DRC system. The transition out of residential is planned, supported, and never abrupt.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get admitted to residential treatment at Desert Recovery Centers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (623) 323-1012 any time, day or night. Our admissions team answers 24 hours a day. They conduct a brief clinical assessment by phone, verify your insurance benefits, and walk you through every step of the intake process. Most clients are admitted within 24 to 48 hours of their first call. If you are in immediate crisis, tell us. We prioritize emergency admissions and can often accommodate same-day intake.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments` },
    { "@type": "ListItem", position: 3, name: "Residential Treatment", item: `${SITE_URL}/treatments/residential` },
  ],
};

export default function ResidentialTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[clinicSchema, faqSchema, breadcrumbSchema, {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Admitted to Desert Recovery Centers",
        "description": "The admissions process at Desert Recovery Centers from first call to starting treatment.",
        "totalTime": "PT48H",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Call Admissions", "text": "Call (623) 323-1012 any time, day or night. A real person answers 24 hours a day." },
          { "@type": "HowToStep", "position": 2, "name": "Clinical Assessment", "text": "Complete a brief 15 to 20 minute clinical assessment by phone to determine the right level of care." },
          { "@type": "HowToStep", "position": 3, "name": "Insurance Verification", "text": "The admissions team contacts your insurance provider directly and explains your coverage and costs before you commit." },
          { "@type": "HowToStep", "position": 4, "name": "Begin Treatment", "text": "Most clients begin treatment within 48 hours of their first call." },
        ],
      }]} />
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/treatments/residential" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <Breadcrumb
        items={[
          { name: "Home", url: "https://desertrecoverycenters.com" },
          { name: "Treatments", url: "https://desertrecoverycenters.com/treatments" },
          { name: "Residential Treatment", url: "https://desertrecoverycenters.com/treatments/residential" },
        ]}
      />
      <PageHero
        eyebrow="Treatment Programs"
        title="Residential Treatment That Goes All the Way"
        description="Some situations require more than an appointment. When the pain is severe enough, when the risk is real enough, when outpatient is simply not enough, residential treatment is where lasting recovery begins. At Desert Recovery Centers, that means 24-hour clinical care in a setting that does not feel like a hospital."
        bgImage="/images/glendale/Glendale-Front.jpg"
      />

      <RTCContent />

      <PhotoGallery
        photos={gallery}
        title="See the Space"
        eyebrow="Our Facilities"
      />

      <ConditionFAQ
        items={faqs}
      />

      <AEOBlock
        entries={[
          {
            question: "What is residential treatment at Desert Recovery Centers?",
            answer:
              "Residential treatment at Desert Recovery Centers is a 24/7 inpatient program for addiction and mental health delivered in luxury facilities in Glendale and Scottsdale, Arizona. Programs typically last 30 to 90 days and include individual therapy with doctoral level psychologists, daily group therapy, board certified psychiatric care, 24-hour nursing, family therapy, and holistic wellness programming. Desert Recovery Centers is Joint Commission accredited and accepts most major insurance plans. Call (623) 323-1012 for admissions.",
          },
          {
            question: "How much does residential treatment cost at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers accepts most major commercial insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and others. Under the Mental Health Parity and Addiction Equity Act, residential mental health and addiction treatment must be covered at the same level as medical care. The admissions team verifies your benefits at no cost before treatment begins. Call (623) 323-1012 for a free insurance verification.",
          },
          {
            question: "Where are the Desert Recovery Centers residential treatment facilities?",
            answer:
              "Desert Recovery Centers operates two residential treatment facilities in Arizona. The Glendale campus is located at 8105 W Frier Dr, Glendale, AZ 85303 and is a 7,500 square foot facility serving the West Valley and greater Phoenix area. The Scottsdale campus is located at 23222 N Church Rd, Scottsdale, AZ 85255 in the mountains of north Scottsdale. Both are Joint Commission accredited and deliver the same doctoral level clinical programming.",
          },
        ]}
      />

      <CTASection />
      <Footer />
    </>
  );
}
