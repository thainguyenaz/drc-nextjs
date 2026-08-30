/**
 * Copy shapes for the SEO page types built each month.
 *
 * Section order (SeoPageTemplate renders in this order, skipping any section
 * whose copy is not provided). The card hub, when present, ALWAYS sits
 * directly BELOW the hero:
 *
 *  County (Nested Broad Stroke):  Hero → Locations hub → Benefits → Why → FAQ → Map (area)
 *  City   (Broad Stroke):         Hero → Services hub  → Benefits → Why → FAQ → Map (area)
 *  Location Service / Primary:    Hero →                 Benefits → Why → FAQ → Map (GBP)
 *
 * Copy fields marked "RichText" accept inline Markdown links and must
 * preserve them exactly where they were placed — see RichText.tsx.
 */

export interface HeroCopy {
  /** Gold eyebrow above the H1, e.g. "Serving Maricopa County, AZ". */
  eyebrow: string;
  /** The page H1. */
  headline: string;
  /** RichText. Supporting paragraph under the H1. */
  subtext: string;
  /**
   * Background image path under /public. Defaults to the same Scottsdale
   * drone shot the home page hero uses.
   */
  image?: string;
  /** Decorative by default — the hero image sits behind copy. */
  imageAlt?: string;
  /** Italic line under the CTAs. Defaults to the home page tagline. */
  tagline?: string;
}

/** One checkmark row: a bold lead-in title and its supporting description. */
export interface SplitItem {
  title: string;
  /** RichText. */
  text: string;
}

/**
 * Benefits and Why share the same two-column image + content layout and
 * render as mirror images: Benefits has the image on the left, Why on the right.
 */
export interface SplitCopy {
  /** Badge text above the heading. Defaults to "Benefits" / "Why Us". */
  eyebrow?: string;
  heading: string;
  /** RichText. Supporting line under the heading, above the bullets. */
  subheading?: string;
  items: SplitItem[];
  image?: string;
  imageAlt?: string;
}

export type BenefitsCopy = SplitCopy;
export type WhyCopy = SplitCopy;

export interface HubItem {
  name: string;
  href: string;
  /** Card thumbnail — an area image (location hub) or service image (service hub). */
  image?: string;
  /** Optional supporting line under the card name. */
  description?: string;
}

export interface HubCopy {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  items: HubItem[];
  /** "location" → "Explore Service Area" cards; "service" → "Explore Service". */
  variant: "location" | "service";
}

export interface MapCopy {
  /** Defaults to "Find Us". */
  eyebrow?: string;
  /** Defaults to "Our Service Area" (location) / "Our Google Business Profile" (gbp). */
  heading?: string;
  /** RichText. The map description paragraph. */
  subtext?: string;
  /**
   * "location" (default) embeds the area map driven by `query`
   * (e.g. "Mesa, AZ") — used on county and city pages.
   * "gbp" embeds a Desert Recovery Centers facility instead — used on
   * Location Service and Primary Service pages.
   */
  variant?: "location" | "gbp";
  /** Place/area query for the "location" variant. */
  query?: string;
  /**
   * Which siteData.locations entry to embed for the "gbp" variant.
   * 0 = Glendale (default), 1 = Scottsdale, 2 = Phoenix PHP/IOP.
   */
  gbpLocationIndex?: number;
}

export interface FaqCopy {
  /** Defaults to "Frequently Asked Questions". */
  title?: string;
  subtitle?: string;
  /** Answers are RichText — links placed in an answer stay clickable for
   *  users and are stripped to plain text for the FAQPage JSON-LD. */
  items: { question: string; answer: string }[];
}

export interface SeoPageCopy {
  hero: HeroCopy;
  hub?: HubCopy;
  benefits: BenefitsCopy;
  why: WhyCopy;
  faq: FaqCopy;
  map: MapCopy;
  /** Path for the Breadcrumb trail and RelatedPages lookup, e.g. "/service-areas/maricopa-county-az". */
  path: string;
}
