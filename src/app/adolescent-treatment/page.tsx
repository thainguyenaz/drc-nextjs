import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import Footer from "@/components/Footer";
import { InlineFAQSchema, SpeakableSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import AdolescentContent from "./AdolescentContent";
import AdolescentChecklist from "./AdolescentChecklist";

const SITE_URL = "https://www.desertrecoverycenters.com";

export const metadata: Metadata = {
  title:
    "Adolescent Mental Health and Addiction Treatment | Desert Recovery Centers Phoenix",
  description:
    "Desert Recovery Centers offers PHP, IOP, and outpatient treatment programs for adolescents ages 13 to 17 in Phoenix, AZ. Clinically supervised, parent-involved, school-compatible care. Joint Commission accredited. Insurance accepted. Call 24/7.",
  alternates: { canonical: `${SITE_URL}/adolescent-treatment` },
  openGraph: {
    title:
      "Adolescent Mental Health and Addiction Treatment | Desert Recovery Centers Phoenix",
    description:
      "Desert Recovery Centers offers PHP, IOP, and outpatient treatment programs for adolescents ages 13 to 17 in Phoenix, AZ. Clinically supervised, parent-involved, school-compatible care. Joint Commission accredited. Insurance accepted. Call 24/7.",
    url: `${SITE_URL}/adolescent-treatment`,
    images: [
      {
        url: `${SITE_URL}/images/locations/phoenix/phoenix-lobby-2.jpg`,
        alt: "Desert Recovery Centers Phoenix adolescent treatment center lobby",
      },
    ],
    siteName: "Desert Recovery Centers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Adolescent Mental Health and Addiction Treatment | Desert Recovery Centers Phoenix",
    description:
      "PHP, IOP, and outpatient treatment for adolescents ages 13 to 17 in Phoenix, AZ. Joint Commission accredited. Insurance accepted.",
    images: [`${SITE_URL}/images/locations/phoenix/phoenix-lobby-2.jpg`],
  },
  keywords: [
    "adolescent mental health treatment Phoenix",
    "teen IOP Phoenix AZ",
    "adolescent PHP Phoenix",
    "teen depression treatment Arizona",
    "teenage anxiety treatment Phoenix",
    "adolescent addiction treatment Arizona",
    "TMS therapy teens Phoenix",
    "outpatient treatment for teenagers Arizona",
  ],
};

const faqs = [
  {
    q: "My teenager refuses to go to treatment. What do I do?",
    a: "This is the most common thing parents tell us, and it almost never means what it sounds like. Teenagers who refuse treatment are not refusing to get better. They are scared, ashamed, or convinced that nothing will help. Our admissions team has extensive experience helping parents navigate this conversation. Call us before you decide it is not possible. We have helped hundreds of families get their teenager through that door, and we can help you too.",
  },
  {
    q: "Will my teenager be in groups with adults?",
    a: "No. This is a clinical standard, not a preference. Adolescent group therapy at Desert Recovery Centers is age specific. Your teenager will only participate in therapeutic groups with peers their own age. Adult and adolescent programming do not mix.",
  },
  {
    q: "Can my teenager keep going to school during treatment?",
    a: "Yes, and we actively support this. Our IOP and outpatient programs offer scheduling around school hours. For teens in PHP, our clinical team works directly with schools to coordinate academic accommodations, communicate with teachers and counselors, and ensure your teenager does not fall irreparably behind while in treatment.",
  },
  {
    q: "How are parents involved?",
    a: "Deeply and consistently. Family therapy is a required component of every adolescent program, not an add on. You participate in weekly sessions with your teenager's therapist. You receive regular clinical updates. You are educated on what your teenager is experiencing and what you can do at home. You are never a bystander in your child's treatment.",
  },
  {
    q: "What if my teenager has tried therapy before and it did not help?",
    a: "Weekly outpatient therapy is very different from PHP or IOP level of care. The frequency, the clinical intensity, the peer component, and the family involvement create a fundamentally different treatment experience. Many of the adolescents we serve have had prior therapy experiences that felt inadequate. That does not mean treatment cannot work. It means they needed a higher level of care than they were getting.",
  },
  {
    q: "Does insurance cover adolescent mental health treatment?",
    a: "Yes. Under the Mental Health Parity and Addiction Equity Act, insurance companies are legally required to cover mental health treatment at the same level as physical health treatment. Most major commercial plans cover adolescent PHP and IOP. Our team verifies your teenager's specific benefits before treatment begins, at no cost to you. Call (623) 257-5384 to start.",
  },
  {
    q: "Is TMS therapy safe for teenagers?",
    a: "Yes. NeuroStar TMS is FDA cleared specifically for adolescents ages 15 and older. It has been studied extensively in the adolescent population and has a strong safety and efficacy profile. There is no medication involved, no sedation, and no systemic side effects. The most common side effect is mild scalp discomfort during the first few sessions, which typically resolves quickly.",
  },
  {
    q: "How long does adolescent treatment take?",
    a: "It depends on the level of care and your teenager's individual needs. PHP typically runs 4 to 6 weeks before a step down to IOP. IOP typically runs 6 to 8 weeks. Outpatient can continue for months as a maintenance and relapse prevention support. Your teenager's clinical team reviews progress weekly and adjusts the plan accordingly. There is no arbitrary timeline. Treatment continues until the clinical goals are met.",
  },
  {
    q: "What happens if my teenager has a crisis during treatment?",
    a: "Our clinical staff is trained in adolescent crisis intervention and safety planning. If your teenager is in acute crisis during treatment, the team responds immediately and determines whether a higher level of care, including inpatient hospitalization, is needed. You are contacted and involved at every step. We do not handle crises in isolation.",
  },
  {
    q: "How do I know if my teenager needs PHP versus IOP?",
    a: "Our admissions team makes this determination during the initial phone assessment based on the severity of your teenager's symptoms, their current level of functioning, what support exists at home, and what has been tried before. You do not need to know the answer before you call. That is what the assessment is for.",
  },
];

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${SITE_URL}/adolescent-treatment#clinic`,
  name: "Desert Recovery Centers Adolescent Treatment Program",
  description:
    "Joint Commission accredited adolescent mental health and addiction treatment in Phoenix, AZ. PHP, IOP, and outpatient programs for teens ages 13 to 17. Parent involvement required. TMS therapy FDA cleared for ages 15 and older.",
  url: `${SITE_URL}/adolescent-treatment`,
  telephone: "+16232575384",
  email: "contact@desertrecoverycenters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4160 N. 108th Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85037",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Adolescent Partial Hospitalization Program (PHP)",
      description:
        "Intensive daily outpatient treatment for teens, 5 to 6 hours per day, 5 days per week.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Adolescent Intensive Outpatient Program (IOP)",
      description:
        "3 hours per day, 3 to 5 days per week. School compatible scheduling available.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Adolescent Outpatient Program (OP)",
      description:
        "1 to 2 sessions per week for ongoing support and relapse prevention.",
    },
    {
      "@type": "MedicalTherapy",
      name: "TMS Therapy for Adolescents",
      description:
        "FDA cleared NeuroStar TMS for adolescents ages 15 and older with treatment-resistant depression.",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Joint Commission Accreditation",
  },
  areaServed: [
    "Phoenix",
    "Glendale",
    "Peoria",
    "Goodyear",
    "Avondale",
    "Tolleson",
    "Surprise",
    "Scottsdale",
    "Tempe",
    "Chandler",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Desert Recovery Centers",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Desert Recovery Centers treat adolescents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Desert Recovery Centers offers PHP, IOP, and outpatient treatment programs for adolescents ages 13 to 17 at our Phoenix location at 4160 N. 108th Ave. Programs are clinically supervised, school compatible, and require active parent involvement throughout treatment.",
      },
    },
    {
      "@type": "Question",
      name: "What is adolescent PHP treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adolescent PHP, or Partial Hospitalization Program, is a structured outpatient level of care where teens attend treatment 5 to 6 hours per day, 5 days per week. It includes individual therapy, group therapy with age-appropriate peers, family therapy, psychiatric evaluation, and medication management. PHP is appropriate for adolescents in active crisis or stepping down from a higher level of care who do not require overnight hospitalization.",
      },
    },
    {
      "@type": "Question",
      name: "What is adolescent IOP treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adolescent IOP, or Intensive Outpatient Program, meets 3 hours per day, 3 to 5 days per week. It is designed to be compatible with school schedules, with morning or after-school options. IOP includes group therapy, individual therapy, and family sessions, and is appropriate for teens who are stabilized but still need structured clinical support.",
      },
    },
    {
      "@type": "Question",
      name: "What age range does the adolescent program serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desert Recovery Centers serves adolescents ages 13 to 17 in our PHP, IOP, and outpatient programs. TMS therapy is FDA cleared for adolescents ages 15 and older and is available at our Phoenix location.",
      },
    },
    {
      "@type": "Question",
      name: "Will my teenager be in groups with adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Adolescent group therapy at Desert Recovery Centers is age specific. Teens participate in therapeutic groups with peers their own age, not with adult clients. This is a clinical standard and an important part of why adolescent-specific programming exists separately from adult treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Can my teenager keep going to school during treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our IOP and outpatient programs are designed with school schedules in mind. We offer scheduling options that allow adolescents to attend school while participating in treatment. For teens in PHP, our clinical team works with families and schools to coordinate academic accommodations and communication during the treatment period.",
      },
    },
    {
      "@type": "Question",
      name: "How are parents involved in adolescent treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parent involvement is not optional at Desert Recovery Centers. It is a required and central part of adolescent treatment. Parents participate in weekly family therapy sessions, receive regular clinical updates from the treatment team, and are educated on how to support their teenager's recovery at home. We treat the family system, not just the teenager.",
      },
    },
    {
      "@type": "Question",
      name: "What mental health conditions do you treat in teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We treat adolescent depression, anxiety disorders, PTSD and trauma, OCD, ADHD, bipolar disorder, self-harm behaviors, suicidal ideation, and co-occurring substance use. All treatment is individualized and delivered by licensed clinicians with specific training in adolescent mental health.",
      },
    },
    {
      "@type": "Question",
      name: "Is TMS therapy available for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NeuroStar TMS is FDA cleared for adolescents ages 15 and older with treatment-resistant depression. Our Phoenix location has a dedicated TMS suite integrated into the outpatient program, so TMS sessions can be scheduled alongside your teenager's therapy and psychiatric appointments.",
      },
    },
    {
      "@type": "Question",
      name: "Does insurance cover adolescent mental health treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most major commercial insurance plans cover adolescent mental health and addiction treatment, including PHP and IOP levels of care. Under the Mental Health Parity and Addiction Equity Act, insurance companies are required to cover mental health treatment at the same level as medical treatment. Our admissions team verifies your teen's benefits at no cost before treatment begins. Call (623) 257-5384 for a free verification.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get my teenager into treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (623) 257-5384 any time, day or night. Our admissions team conducts a brief clinical assessment by phone to understand your teenager's history, symptoms, and what has been tried before. We verify insurance, answer all your questions, and get your teen scheduled. Most adolescents begin treatment within 48 hours of the first call.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Adolescent Treatment",
      item: `${SITE_URL}/adolescent-treatment`,
    },
  ],
};

export default function AdolescentTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[clinicSchema, faqSchema, breadcrumbSchema]} />
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema
        url="/adolescent-treatment"
        cssSelectors={["[data-speakable]"]}
      />
      <Navigation />
      <Breadcrumb
        items={getBreadcrumbsFromPathname("/adolescent-treatment")}
      />
      <PageHero
        eyebrow="Phoenix, Arizona &middot; Ages 13 to 17"
        title="Your Teenager Is Struggling. You Are Not Out of Options."
        description="When your child is in pain and you do not know what to do next, the answer is not to wait and see. Desert Recovery Centers offers clinically supervised PHP, IOP, and outpatient treatment programs built specifically for adolescents, designed to fit around school, family, and real life."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      {/* All animated content sections — checklist injected between empathy opener and programs */}
      <AdolescentContent checklistSlot={<AdolescentChecklist />} />

      {/* FAQ Accordion */}
      <ConditionFAQ items={faqs} />

      {/* AEO Blocks */}
      <AEOBlock
        entries={[
          {
            question:
              "Does Desert Recovery Centers offer adolescent mental health treatment?",
            answer:
              "Yes. Desert Recovery Centers offers PHP, IOP, and outpatient treatment programs for adolescents ages 13 to 17 at our Phoenix location at 4160 N. 108th Ave, Phoenix, AZ 85037. Programs are clinically supervised by licensed adolescent clinicians, require active parent involvement, and are designed to be compatible with school schedules. TMS therapy is available for teens ages 15 and older. The facility is Joint Commission accredited. Call (623) 257-5384 for admissions 24 hours a day.",
          },
          {
            question:
              "What is the best outpatient mental health treatment for teenagers in Phoenix?",
            answer:
              "Desert Recovery Centers Phoenix offers PHP (5 to 6 hours per day, 5 days per week), IOP (3 hours per day, 3 to 5 days per week), and outpatient (1 to 2 sessions per week) programs specifically for adolescents ages 13 to 17. Treatment includes individual therapy, age specific group therapy, family therapy, psychiatric evaluation, and medication management. NeuroStar TMS therapy is available for teens 15 and older with treatment resistant depression.",
          },
          {
            question:
              "Does insurance cover teen mental health treatment in Arizona?",
            answer:
              "Yes. Under the Mental Health Parity and Addiction Equity Act, insurance companies are required to cover mental health treatment at the same level as physical health treatment. Most major commercial plans cover adolescent PHP and IOP. Desert Recovery Centers verifies your teenager's benefits at no cost before treatment begins. Call (623) 257-5384 for a free insurance verification.",
          },
        ]}
      />

      <Footer />
    </>
  );
}
