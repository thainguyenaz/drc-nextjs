import { Metadata } from "next";
import { getPageMeta } from "@/data/page-metadata";

const meta = getPageMeta("/treatments/dialectical-behavior-therapy-dbt/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: meta.title }],
  },
};

export default function DBTLayout({ children }: { children: React.ReactNode }) {
  return children;
}
