import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import FacilityPageContent from "@/components/FacilityPageContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema, LocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Glendale Treatment Center, Desert Recovery Centers",
  description: "Luxury residential treatment at 8105 W Frier Dr, Glendale, AZ. 7,500 sq ft facility with pool, gym, tennis court, and basketball court. Call (623) 323-1012.",
  path: "/facilities/glendale",
});

const gallery = [
  { src: "/images/glendale/Glendale-Front.jpg", label: "Front Entrance" },
  { src: "/images/glendale/Glendale-Pool.jpg", label: "Swimming Pool" },
  { src: "/images/glendale/Glendale-Gym.jpg", label: "Fitness Center" },
  { src: "/images/glendale/Glendale-Living-Room.jpg", label: "Living Room" },
  { src: "/images/glendale/Glendale-Room-1.jpg", label: "Private Bedroom" },
  { src: "/images/glendale/Glendale-Dining-Room.jpg", label: "Dining Room" },
  { src: "/images/glendale/Glendale-Therapy-Room.jpg", label: "Therapy Room" },
  { src: "/images/glendale/Glendale-Tennis.jpg", label: "Tennis Court" },
  { src: "/images/glendale/Glendale-Basketball.jpg", label: "Basketball Court" },
  { src: "/images/glendale/Glendale-Massage.jpg", label: "Massage Room" },
  { src: "/images/glendale/Glendale-Game-Room.jpg", label: "Game Room" },
  { src: "/images/glendale/Glendale-Kitchen.jpg", label: "Gourmet Kitchen" },
];

export default function GlendalePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/facilities/glendale" }, { name: "Glendale", path: "/facilities/glendale" }]} />
      <LocalBusinessSchema index={0} />
      <Navigation />
      <PageHero
        eyebrow="Glendale, Arizona"
        title="Glendale Treatment Center"
        description="Our flagship residential treatment center offering comprehensive mental health and addiction programs in a luxury home-like setting."
        bgImage="/images/glendale/Glendale-Front.jpg"
      />
      <FacilityPageContent
        name="Glendale"
        address="8105 W Frier Dr, Glendale, AZ 85303"
        phone="(623) 323-1012"
        phoneTel="+16233231012"
        sqft="7,500"
        description="Located in the heart of Glendale, our flagship 7,500 sq ft facility provides a serene, home-like environment for residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) programs. Every detail, from the gourmet kitchen to the private therapy rooms, is curated to support your comfort and recovery."
        programs={["Residential Treatment", "PHP", "IOP"]}
        amenities={[
          "Full-Size Basketball Court",
          "Tennis Court",
          "Swimming Pool",
          "State-of-the-Art Gym",
          "Billiards Room",
          "Massage Room",
          "Gourmet Kitchen",
          "Private Rooms",
          "Group Therapy Rooms",
          "Outdoor Recreation Areas",
        ]}
        videoId="00ZDcQjXoE8"
        heroImage="/images/glendale/Glendale-Front.jpg"
        collisionImages={[
          "/images/glendale/Glendale-Pool.jpg",
          "/images/glendale/Glendale-Living-Room.jpg",
        ]}
        gallery={gallery}
        otherLocations={[
          { name: "Scottsdale", href: "/facilities/scottsdale" },
          { name: "Phoenix", href: "/facilities/phoenix" },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
