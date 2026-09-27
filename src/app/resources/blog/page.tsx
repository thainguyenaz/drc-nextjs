import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { blogPosts } from "@/lib/blog";
import BlogCategoryFilter from "./BlogCategoryFilter";

export const metadata: Metadata = {
  title: "Addiction and Mental Health Recovery Blog | Desert Recovery Centers",
  description:
    "Expert articles on addiction recovery, mental health treatment, holistic therapies, and family support. Written and reviewed by licensed clinicians at Desert Recovery Centers Arizona.",
  alternates: { canonical: "/resources/blog" },
  openGraph: {
    title: "Addiction and Mental Health Recovery Blog | Desert Recovery Centers",
    description:
      "Expert articles on addiction recovery, mental health treatment, holistic therapies, and family support. Written and reviewed by licensed clinicians at Desert Recovery Centers Arizona.",
    url: "/resources/blog",
    images: [{ url: "/images/glendale/Glendale-Front.jpg", width: 1200, height: 630, alt: "Desert Recovery Centers Arizona" }],
    siteName: "Desert Recovery Centers",
    locale: "en_US",
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://desertrecoverycenters.com/resources/blog#blog",
  name: "Desert Recovery Centers Recovery Blog",
  description: "Expert articles on addiction, mental health, recovery, and treatment written by licensed clinicians.",
  url: "https://desertrecoverycenters.com/resources/blog",
  publisher: { "@id": "https://desertrecoverycenters.com/#organization" },
  author: {
    "@type": "Person",
    name: "Dr. An Nguyen",
    jobTitle: "Licensed Clinical Psychologist, Clinical Director",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <SchemaScript schema={[blogSchema]} />
      <Navigation />
      <Breadcrumb
        items={[
          { name: "Home", url: "https://desertrecoverycenters.com" },
          { name: "Resources", url: "https://desertrecoverycenters.com/resources" },
          { name: "Blog", url: "https://desertrecoverycenters.com/resources/blog" },
        ]}
      />
      <PageHero
        eyebrow="Clinical Resources"
        title="Recovery Insights From Our Clinical Team"
        description="Evidence based articles on addiction, mental health, and recovery, written by licensed clinicians and reviewed by our doctoral level team."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      <BlogCategoryFilter posts={blogPosts} />
      <CTASection />
      <Footer />
    </>
  );
}
