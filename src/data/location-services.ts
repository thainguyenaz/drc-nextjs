/**
 * Location Service pages — /locations/{city}/{service}
 *
 * Each entry is one page: a condition scoped to one of the three City Pages
 * that link down to it (/locations/scottsdale, /locations/glendale,
 * /locations/phoenix-php-iop). This file is the single source of truth for
 * the routes, the city pages' Services hubs, and the sitemap.
 *
 * COPY STATUS: entries created with placeholderCopy() are scaffolds awaiting
 * Karan's copy. Replace the whole `copy` value with the real SeoPageCopy when
 * it arrives — do not edit the placeholder in place. Grep for
 * "TODO COPY" to find every page still unwritten.
 */

import type { SeoPageCopy } from "@/components/seo-template/types";
import { locationServiceCopy } from "./location-service-copy";

export interface LocationServiceCity {
  /** Folder slug under src/app/locations. */
  slug: string;
  /** Display name used in copy and breadcrumbs, e.g. "Phoenix, AZ". */
  name: string;
  /** City name without the state, for headline interpolation. */
  shortName: string;
  /** Index into siteData.locations, for the Google Business Profile map. */
  gbpLocationIndex: number;
  /** Hero/card image for pages under this city. */
  image: string;
}

export const LOCATION_SERVICE_CITIES: Record<string, LocationServiceCity> = {
  "phoenix-php-iop": {
    slug: "phoenix-php-iop",
    name: "Phoenix, AZ",
    shortName: "Phoenix",
    gbpLocationIndex: 2,
    image: "/images/general/accom-group-room.jpg",
  },
  glendale: {
    slug: "glendale",
    name: "Glendale, AZ",
    shortName: "Glendale",
    gbpLocationIndex: 0,
    image: "/images/glendale/Glendale-Front.jpg",
  },
  scottsdale: {
    slug: "scottsdale",
    name: "Scottsdale, AZ",
    shortName: "Scottsdale",
    gbpLocationIndex: 1,
    image:
      "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
  },
};

/**
 * Batch dates, emitted as dateModified in each page's MedicalWebPage schema.
 *
 * One date per monthly batch. A page keeps the date of the batch that
 * shipped it, so adding a new batch never re-dates the pages already live.
 */
export const BATCH_DATES = {
  august2026: "2026-08-26",
  september2026: "2026-09-17",
} as const;

export type BatchDate = (typeof BATCH_DATES)[keyof typeof BATCH_DATES];

export interface LocationService {
  citySlug: string;
  serviceSlug: string;
  /** Display name of the service, e.g. "Anxiety Treatment". */
  serviceName: string;
  /** Full route, e.g. "/locations/glendale/anxiety-treatment". */
  path: string;
  metaTitle: string;
  metaDescription: string;
  /** ISO date for the page's MedicalWebPage dateModified. */
  dateModified: string;
  copy: SeoPageCopy;
}

/**
 * Scaffold copy. Deliberately obvious: every field is prefixed so an
 * unwritten page cannot be mistaken for a finished one, on the page or in a
 * grep. Carries no factual claims — real copy replaces this wholesale.
 */
function placeholderCopy(
  city: LocationServiceCity,
  serviceName: string,
  path: string
): SeoPageCopy {
  const where = `${serviceName} in ${city.shortName}`;
  return {
    path,
    hero: {
      eyebrow: `TODO COPY — ${city.name}`,
      headline: `${where}`,
      subtext: "TODO COPY: hero description pending.",
      image: city.image,
    },
    benefits: {
      heading: "TODO COPY: benefits heading",
      subheading: "TODO COPY: benefits subheading pending.",
      items: [
        { title: "TODO COPY", text: "Benefit one pending." },
        { title: "TODO COPY", text: "Benefit two pending." },
        { title: "TODO COPY", text: "Benefit three pending." },
      ],
    },
    why: {
      heading: "TODO COPY: why heading",
      subheading: "TODO COPY: why subheading pending.",
      items: [
        { title: "TODO COPY", text: "Reason one pending." },
        { title: "TODO COPY", text: "Reason two pending." },
        { title: "TODO COPY", text: "Reason three pending." },
      ],
    },
    faq: {
      items: [
        { question: "TODO COPY: question one?", answer: "Answer pending." },
        { question: "TODO COPY: question two?", answer: "Answer pending." },
        { question: "TODO COPY: question three?", answer: "Answer pending." },
      ],
    },
    map: {
      variant: "gbp",
      gbpLocationIndex: city.gbpLocationIndex,
      subtext: "TODO COPY: map description pending.",
    },
  };
}

/**
 * Card image for each service, used by the Services hub on the City Pages.
 *
 * Keyed by SERVICE, not by page, so the "Anxiety Treatment" card looks the
 * same on every city page. Deliberately drawn from images not used inside
 * any page's Benefits or Why section, so a card never duplicates the
 * artwork on the page it links to.
 */
export const SERVICE_CARD_IMAGES: Record<string, string> = {
  "anxiety-treatment": "/images/conditions/anxiety-treatment-02.webp",
  // -09 rather than the unused -10: -10 is an empty room and looked out of
  // place beside the other two cards, which show people. -09 appears only on
  // the Phoenix PTSD page, so clicking this card never lands on the same photo.
  "depression-treatment": "/images/conditions/depression-treatment-09.webp",
  // The supplied PTSD images duplicated the depression set, so this card
  // draws from that shared pool. Distinct from the depression card above.
  "ptsd-trauma-treatment": "/images/conditions/depression-treatment-07.webp",
  // Family session — the only card not showing a clinical dyad, which keeps
  // the four cards visually distinct from one another.
  "bipolar-disorder-treatment": "/images/conditions/bipolar-disorder-treatment-06.webp",
  // September '26 batch. No OCD, personality disorder, or ADHD photography
  // exists, so these three cards are reserved out of the existing pools and
  // are deliberately used on NO page — a card therefore never lands the
  // reader on its own artwork. See the image plan in location-service-copy.ts.
  "ocd-treatment": "/images/conditions/anxiety-treatment-10.webp",
  "personality-disorder-treatment": "/images/conditions/bipolar-disorder-treatment-09.webp",
  "adhd-treatment": "/images/conditions/depression-treatment-10.webp",
};

/**
 * The batch matrix: which conditions get pages in which cities, and which
 * monthly batch shipped them.
 *
 * Bipolar appears twice — Phoenix shipped in August, Glendale and Scottsdale
 * in September — because each city's pages carry that batch's dateModified.
 */
const BATCH: Array<{
  serviceSlug: string;
  serviceName: string;
  cities: string[];
  batchDate: BatchDate;
}> = [
  // ─── August '26 ────────────────────────────────────────────────
  {
    serviceSlug: "anxiety-treatment",
    serviceName: "Anxiety Treatment",
    cities: ["phoenix-php-iop", "glendale", "scottsdale"],
    batchDate: BATCH_DATES.august2026,
  },
  {
    serviceSlug: "depression-treatment",
    serviceName: "Depression Treatment",
    cities: ["phoenix-php-iop", "glendale", "scottsdale"],
    batchDate: BATCH_DATES.august2026,
  },
  {
    serviceSlug: "ptsd-trauma-treatment",
    serviceName: "PTSD and Trauma Treatment",
    cities: ["phoenix-php-iop", "glendale", "scottsdale"],
    batchDate: BATCH_DATES.august2026,
  },
  {
    serviceSlug: "bipolar-disorder-treatment",
    serviceName: "Bipolar Disorder Treatment",
    cities: ["phoenix-php-iop"],
    batchDate: BATCH_DATES.august2026,
  },

  // ─── September '26 ─────────────────────────────────────────────
  // Completes bipolar across the two residential cities, then adds three
  // new conditions. ADHD covers Phoenix and Glendale only; Scottsdale ADHD
  // was not scoped for this batch.
  {
    serviceSlug: "bipolar-disorder-treatment",
    serviceName: "Bipolar Disorder Treatment",
    cities: ["glendale", "scottsdale"],
    batchDate: BATCH_DATES.september2026,
  },
  {
    serviceSlug: "ocd-treatment",
    serviceName: "OCD Treatment",
    cities: ["phoenix-php-iop", "glendale", "scottsdale"],
    batchDate: BATCH_DATES.september2026,
  },
  {
    serviceSlug: "personality-disorder-treatment",
    serviceName: "Personality Disorder Treatment",
    cities: ["phoenix-php-iop", "glendale", "scottsdale"],
    batchDate: BATCH_DATES.september2026,
  },
  {
    serviceSlug: "adhd-treatment",
    serviceName: "ADHD Treatment",
    cities: ["phoenix-php-iop", "glendale"],
    batchDate: BATCH_DATES.september2026,
  },
];

export const locationServices: LocationService[] = BATCH.flatMap((entry) =>
  entry.cities.map((citySlug) => {
    const city = LOCATION_SERVICE_CITIES[citySlug];
    const path = `/locations/${citySlug}/${entry.serviceSlug}`;
    // Written copy wins; pages without an entry keep the TODO COPY scaffold.
    const written = locationServiceCopy[path];
    return {
      citySlug,
      serviceSlug: entry.serviceSlug,
      serviceName: entry.serviceName,
      path,
      metaTitle:
        written?.metaTitle ??
        `TODO COPY: ${entry.serviceName} in ${city.shortName} | Desert Recovery Centers`,
      metaDescription:
        written?.metaDescription ?? "TODO COPY: meta description pending.",
      dateModified: entry.batchDate,
      copy: written?.copy ?? placeholderCopy(city, entry.serviceName, path),
    };
  })
);

export function getLocationService(path: string): LocationService | undefined {
  return locationServices.find((entry) => entry.path === path);
}

/** Location Service pages under one city — drives that City Page's Services hub. */
export function getLocationServicesForCity(citySlug: string): LocationService[] {
  return locationServices.filter((entry) => entry.citySlug === citySlug);
}

/** Every Location Service route, for the sitemap. */
export function getAllLocationServicePaths(): string[] {
  return locationServices.map((entry) => entry.path);
}
