import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import FacilityPageContent from "@/components/FacilityPageContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema, LocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Scottsdale Treatment Center, Desert Recovery Centers",
  description: "Luxury residential treatment at 23222 N Church Rd, Scottsdale, AZ. Mountain views, pool, gym, and comprehensive programs. Call (480) 931-3617.",
  path: "/facilities/scottsdale",
});

const gallery = [
  { src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg", label: "Front Entrance" },
  { src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-1317August-01-202400007-2.jpg", label: "Living Room" },
  { src: "/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg", label: "Fitness Center" },
  { src: "/images/scottsdale/DRC-KITCHEN-NORTH-SCOTTSDALE-08-01-2024-1292August-01-202400001-2.jpg", label: "Gourmet Kitchen" },
  { src: "/images/scottsdale/DRC-UPSTAIRS-MASTER-BEDROOM-NORTH-SCOTTSDALE-08-01-2024-0658August-01-202400014-2.jpg", label: "Master Bedroom" },
  { src: "/images/scottsdale/DRC-MASSAGE-ROOM-NORTH-SCOTTSDALE-08-01-2024-August-01-202400003-2.jpg", label: "Massage Room" },
  { src: "/images/scottsdale/DRC-GAME-ROOM-NORTH-SCOTTSDALE-08-01-2024-1388August-01-202400004-2.jpg", label: "Game Room" },
  { src: "/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", label: "Aerial View" },
  { src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg", label: "Outdoor Space" },
  { src: "/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg", label: "Serenity Room" },
  { src: "/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg", label: "Harmony Room" },
  { src: "/images/scottsdale/DRC-LDINNING-NORTH-SCOTTSDALE-08-01-2024-1185August-01-202400001-2.jpg", label: "Dining Area" },
];

export default function ScottsdalePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/facilities/scottsdale" }, { name: "Scottsdale", path: "/facilities/scottsdale" }]} />
      <LocalBusinessSchema index={1} />
      <Navigation />
      <PageHero
        eyebrow="Scottsdale, Arizona"
        title="Scottsdale Treatment Center"
        description="Residential mental health and addiction treatment nestled in north Scottsdale with stunning mountain views and serene desert surroundings."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
      />
      <FacilityPageContent
        name="Scottsdale"
        address="23222 N Church Rd, Scottsdale, AZ 85255"
        phone="(480) 931-3617"
        phoneTel="+14809313617"
        description="Our Scottsdale location is a recovery oasis nestled between the stunning mountains of north Scottsdale. This residential facility offers comprehensive mental health and addiction treatment programs in a serene desert setting with resort-style amenities and a dedicated clinical team."
        programs={["Residential Treatment", "PHP", "IOP"]}
        amenities={[
          "Large Swimming Pool",
          "Tennis Court",
          "Basketball Court",
          "State-of-the-Art Gym",
          "Massage Room",
          "Scenic Mountain Views",
          "Gourmet Kitchen",
          "Private Rooms",
          "Serenity Room",
          "Harmony Room",
        ]}
        videoId="7qvyphmKNxg"
        heroImage="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
        collisionImages={[
          "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg",
          "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg",
        ]}
        gallery={gallery}
        otherLocations={[
          { name: "Glendale", href: "/facilities/glendale" },
          { name: "Phoenix", href: "/facilities/phoenix" },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
