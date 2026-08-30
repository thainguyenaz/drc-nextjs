import type { Metadata } from "next";
import SeoPageTemplate from "@/components/seo-template/SeoPageTemplate";
import type { SeoPageCopy } from "@/components/seo-template/types";

/**
 * Visual harness for the SEO page template. Exercises every section,
 * including the optional card hub and a link inside an FAQ answer.
 *
 * Noindexed and deliberately absent from src/app/sitemap.ts — this route
 * exists for review only and must never be submitted for indexing.
 */
export const metadata: Metadata = {
  title: "SEO Template Preview",
  robots: { index: false, follow: false },
};

const copy: SeoPageCopy = {
  path: "/template-preview",
  hero: {
    eyebrow: "Serving Maricopa County, AZ",
    headline: "Addiction and Mental Health Treatment in Maricopa County",
    subtext:
      "Sample hero copy showing how a page paragraph renders, including an internal link to [Desert Recovery Centers](/) and an external one to the [National Institute on Drug Abuse](https://nida.nih.gov/).",
    image: "/images/glendale/Glendale-Back-Yard.jpg",
  },
  hub: {
    variant: "location",
    heading: "Cities We Serve in Maricopa County",
    subtext:
      "Sample hub cards. This block renders only when a page has real children of its own type.",
    items: [
      {
        name: "Glendale, AZ",
        href: "/locations/glendale",
        image: "/images/glendale/Glendale-Front.jpg",
        description: "Residential treatment in a luxury home-like setting.",
      },
      {
        name: "Scottsdale, AZ",
        href: "/locations/scottsdale",
        image: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
        description: "Residential care with north Scottsdale mountain views.",
      },
      {
        name: "Phoenix, AZ",
        href: "/locations/phoenix-php-iop",
        image: "/images/general/accom-group-room.jpg",
        description: "PHP, IOP, and outpatient programs.",
      },
    ],
  },
  benefits: {
    heading: "What Treatment in Maricopa County Looks Like",
    subheading:
      "Sample subheading copy that sits above the checkmark list and can itself carry a link back [home](/).",
    items: [
      {
        title: "Small program size",
        text: "Ten beds per residential facility, so clinicians know every client by name.",
      },
      {
        title: "Doctoral-level clinical care",
        text: "Licensed clinical psychologists lead the treatment planning.",
      },
      {
        title: "Full continuum",
        text: "Residential, PHP, IOP, and outpatient care under one organization.",
      },
    ],
    image: "/images/general/accom-backyard.jpg",
    imageAlt: "Sample benefits image",
  },
  why: {
    heading: "Why Families Choose Desert Recovery Centers",
    subheading:
      "The mirrored block: image on the right, cream background, same content structure.",
    items: [
      {
        title: "Joint Commission accredited",
        text: "Independently reviewed against national behavioral health standards.",
      },
      {
        title: "Dual diagnosis expertise",
        text: "Addiction and co-occurring mental health conditions treated together.",
      },
      {
        title: "Admissions available 24/7",
        text: "A real person answers the phone at any hour.",
      },
    ],
    image: "/images/glendale/Glendale-Group-Room.jpg",
    imageAlt: "Sample why image",
  },
  faq: {
    items: [
      {
        question: "Does a link inside an FAQ answer stay clickable?",
        answer:
          "Yes. Answers render through RichText, so this link to the [home page](/) stays live for readers while the FAQPage schema receives the plain-text version.",
      },
      {
        question: "How long is a typical stay?",
        answer:
          "Length of stay is set clinically and varies by level of care and individual progress.",
      },
      {
        question: "What happens on the first call?",
        answer:
          "A brief clinical assessment determines the appropriate level of care, followed by insurance verification.",
      },
    ],
  },
  map: {
    variant: "location",
    query: "Maricopa County, AZ",
    subtext:
      "Sample map description. The area variant embeds a place query; leaf service pages use the Google Business Profile variant instead.",
  },
};

export default function TemplatePreviewPage() {
  return <SeoPageTemplate copy={copy} />;
}
