import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import FacilityPageContent from "@/components/FacilityPageContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema, LocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Phoenix Treatment Center — Desert Recovery Centers",
  description: "Residential and outpatient treatment at 1623 W Moody Trail, Phoenix, AZ. 5,500 sq ft with movie theater, pool with waterfall, and gym. Call (623) 257-5384.",
  path: "/facilities/phoenix",
});

const gallery = [
  { src: "/images/general/accom-backyard.jpg", label: "Outdoor Space" },
  { src: "/images/general/accom-bedroom.jpg", label: "Private Bedroom" },
  { src: "/images/general/accom-massage.jpg", label: "Massage Room" },
  { src: "/images/general/accom-recreation.jpg", label: "Recreation Room" },
  { src: "/images/general/accom-group-room.jpg", label: "Group Room" },
  { src: "/images/general/accom-gym.jpg", label: "Fitness Center" },
];

export default function PhoenixPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/facilities/phoenix" }, { name: "Phoenix", path: "/facilities/phoenix" }]} />
      <LocalBusinessSchema index={2} />
      <Navigation />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Phoenix Treatment Center"
        description="Residential and outpatient services with expanded holistic programming in our 5,500 sq ft Phoenix facility."
        bgImage="/images/general/accom-backyard.jpg"
      />
      <FacilityPageContent
        name="Phoenix"
        address="1623 W Moody Trail, Phoenix, AZ 85041"
        phone="(623) 257-5384"
        phoneTel="+16232575384"
        sqft="5,500"
        description="Our Phoenix location provides residential and outpatient services with expanded holistic programming. The 5,500 sq ft facility features unique amenities including a full movie theater and a pool with waterfall, creating a truly resort-like recovery experience."
        programs={["Residential Treatment", "Outpatient"]}
        amenities={[
          "Full Movie Theater",
          "Pool with Waterfall",
          "State-of-the-Art Gym",
          "Massage Room",
          "Gourmet Kitchen & Dining",
          "Private Rooms",
          "Outdoor Recreation Areas",
          "Group Therapy Rooms",
        ]}
        videoId="rMkEYhoW-kE"
        heroImage="/images/general/accom-backyard.jpg"
        collisionImages={[
          "/images/general/accom-recreation.jpg",
          "/images/general/accom-bedroom.jpg",
        ]}
        gallery={gallery}
        otherLocations={[
          { name: "Glendale", href: "/facilities/glendale" },
          { name: "Scottsdale", href: "/facilities/scottsdale" },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
