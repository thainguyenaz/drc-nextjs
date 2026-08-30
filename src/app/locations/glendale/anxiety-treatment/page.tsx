import type { Metadata } from "next";
import LocationServicePage from "@/components/seo-template/LocationServicePage";
import { getLocationService } from "@/data/location-services";
import { buildMetadata } from "@/lib/seo";

const PATH = "/locations/glendale/anxiety-treatment";
const page = getLocationService(PATH)!;

export const metadata: Metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: PATH,
});

export default function GlendaleAnxietyTreatmentPage() {
  return <LocationServicePage page={page} />;
}
