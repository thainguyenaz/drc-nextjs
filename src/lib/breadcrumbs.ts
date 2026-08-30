const SITE_URL = "https://desertrecoverycenters.com";

function titleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Slug → label overrides for segments that title-casing gets wrong:
 * acronyms it lowercases ("Ptsd", "Php", "Iop", "Tms") and slugs that carry
 * a level-of-care suffix the breadcrumb should not repeat
 * ("phoenix-php-iop" reads as "Phoenix" under Locations).
 *
 * Keyed by segment, not by full path — a segment means the same thing
 * wherever it appears in this site.
 */
const SEGMENT_LABELS: Record<string, string> = {
  "phoenix-php-iop": "Phoenix",
  "phoenix-living": "Phoenix PHP Living",
  "ptsd-trauma-treatment": "PTSD & Trauma Treatment",
  "ptsd-treatment": "PTSD Treatment",
  "php": "PHP",
  "iop": "IOP",
  "adhd-add": "ADHD & ADD",
  "ocd-treatment": "OCD Treatment",
  "tms-therapy": "TMS Therapy",
  "emdr-therapy": "EMDR Therapy",
  "cbt-cognitive-behavioral-therapy": "CBT",
  "dbt-dialectical-behavior-therapy": "DBT",
  "faq": "FAQ",
  "hipaa-notice": "HIPAA Notice",
};

export function getBreadcrumbsFromPathname(
  pathname: string
): Array<{ name: string; url: string }> {
  const items: Array<{ name: string; url: string }> = [
    { name: "Home", url: SITE_URL },
  ];

  const segments = pathname
    .replace(/^\/|\/$/g, "")
    .split("/")
    .filter(Boolean);

  let path = "";
  for (const segment of segments) {
    path += `/${segment}`;
    const name = SEGMENT_LABELS[segment] ?? titleCase(segment.replace(/-/g, " "));
    items.push({ name, url: `${SITE_URL}${path}` });
  }

  return items;
}
