import { Metadata } from "next";
import { getPageMeta } from "@/data/page-metadata";

const meta = getPageMeta("/treatments/trauma-therapy/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg", alt: meta.title }],
  },
};

export default function TraumaTherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
