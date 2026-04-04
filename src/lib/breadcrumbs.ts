const SITE_URL = "https://desertrecoverycenters.com";

function titleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

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
    const name = titleCase(segment.replace(/-/g, " "));
    items.push({ name, url: `${SITE_URL}${path}` });
  }

  return items;
}
