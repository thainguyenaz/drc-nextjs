import CardHub from "./CardHub";
import {
  LOCATION_SERVICE_CITIES,
  SERVICE_CARD_IMAGES,
  getLocationServicesForCity,
} from "@/data/location-services";

/**
 * The Services hub a City Page shows to link down to its Location Service
 * pages (/locations/{city}/{service}).
 *
 * Renders nothing when the city has no Location Service pages yet, so it is
 * safe to mount on a City Page ahead of its first batch.
 *
 * Card thumbnails come from SERVICE_CARD_IMAGES, keyed by service, so the
 * same service shows the same card art on every City Page. Falls back to
 * the city image if a service has no card image registered.
 */
export default function CityServicesHub({
  citySlug,
  heading,
  subtext,
}: {
  citySlug: string;
  /** Defaults to "Mental Health Services in {City}". */
  heading?: string;
  subtext?: string;
}) {
  const city = LOCATION_SERVICE_CITIES[citySlug];
  const services = getLocationServicesForCity(citySlug);
  if (!city || services.length === 0) return null;

  return (
    <CardHub
      hub={{
        variant: "service",
        heading: heading ?? `Mental Health Services in ${city.shortName}`,
        subtext,
        items: services.map((service) => ({
          name: service.serviceName,
          href: service.path,
          image: SERVICE_CARD_IMAGES[service.serviceSlug] ?? city.image,
        })),
      }}
    />
  );
}
