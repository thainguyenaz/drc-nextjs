import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { MedicalWebPageSchema } from "@/lib/seo";
import SeoPageTemplate from "./SeoPageTemplate";
import { stripMarkdownLinks } from "./RichText";
import type { LocationService } from "@/data/location-services";

/**
 * Renders one Location Service page: JSON-LD plus the shared SEO template.
 * Every /locations/{city}/{service} route is a thin wrapper around this, so
 * the schema wiring lives in exactly one place.
 *
 * FAQ answers are stripped of Markdown links for the FAQPage schema — the
 * live link stays on the page, the schema gets plain text.
 */
export default function LocationServicePage({ page }: { page: LocationService }) {
  const breadcrumbs = getBreadcrumbsFromPathname(page.path);
  const faqsForSchema = page.copy.faq.items.map((item) => ({
    question: item.question,
    answer: stripMarkdownLinks(item.answer),
  }));

  return (
    <>
      <SchemaScript
        schema={[getFAQSchema(faqsForSchema), getBreadcrumbSchema(breadcrumbs)]}
      />
      {/* reviewer="none": this repo gates reviewer credit on an actual
          review record (commit 4fd2808). Switch to a named reviewer only
          once one has reviewed the page. */}
      <MedicalWebPageSchema
        url={page.path}
        name={page.metaTitle}
        dateModified={page.dateModified}
        reviewer="none"
      />
      <SeoPageTemplate copy={page.copy} />
    </>
  );
}
