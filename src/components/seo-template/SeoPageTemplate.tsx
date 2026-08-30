import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import RelatedPages from "@/components/RelatedPages";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import SeoHero from "./SeoHero";
import CardHub from "./CardHub";
import BenefitsSection from "./BenefitsSection";
import WhySection from "./WhySection";
import SeoFaqSection from "./SeoFaqSection";
import MapSection from "./MapSection";
import type { SeoPageCopy } from "./types";

/**
 * Shared body for every monthly SEO page. Header, hero and footer are the
 * same ones the home page uses.
 *
 * The card hub is optional — it renders only when the page has real children
 * of its own type — and when present it always sits directly BELOW the hero:
 *
 *   County (Nested Broad Stroke): hero + hub(location) + benefits + why + faq + map (area)
 *   City   (Broad Stroke):        hero + hub(service)  + benefits + why + faq + map (area)
 *   Location / Primary Service:   hero +                 benefits + why + faq + map (GBP)
 *
 * Metadata and JSON-LD stay in the page component, not here.
 */
export default function SeoPageTemplate({ copy }: { copy: SeoPageCopy }) {
  const hasHub = Boolean(copy.hub && copy.hub.items.length > 0);

  return (
    <>
      <Navigation />
      {/* Absolutely positioned to overlay the hero — must precede it,
          matching every other page in the app. */}
      <Breadcrumb items={getBreadcrumbsFromPathname(copy.path)} />
      <SeoHero hero={copy.hero} />
      {hasHub && <CardHub hub={copy.hub!} />}
      <BenefitsSection benefits={copy.benefits} />
      <WhySection why={copy.why} />
      <SeoFaqSection faq={copy.faq} />
      <MapSection map={copy.map} />
      <RelatedPages currentPath={copy.path} />
      <CTASection />
      <Footer />
    </>
  );
}
