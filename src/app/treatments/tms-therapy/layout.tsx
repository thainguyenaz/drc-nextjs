import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroStar TMS Therapy in Phoenix, AZ | DRC",
  description:
    "NeuroStar TMS in Phoenix: FDA-cleared for depression, anxious depression, and OCD (add-on) in adults; add-on for adolescents 15-21. Call (623) 305-0496.",
  alternates: { canonical: "/treatments/tms-therapy" },
  keywords: [
    "TMS therapy Phoenix AZ",
    "NeuroStar TMS Phoenix",
    "TMS for depression Arizona",
    "transcranial magnetic stimulation Phoenix",
    "TMS therapy near me",
    "drug-free depression treatment Phoenix",
    "TMS for OCD Arizona",
    "TMS for adolescents Phoenix",
  ],
  openGraph: {
    title: "NeuroStar TMS Therapy in Phoenix, AZ | Desert Recovery Centers",
    description:
      "FDA-cleared NeuroStar TMS for depression, anxious depression, and OCD (add-on) in adults; add-on therapy for adolescents 15-21. Desert Recovery Centers Phoenix.",
    url: "/treatments/tms-therapy",
    images: [{ url: "/images/locations/phoenix/phoenix-lobby-2.jpg", width: 1200, height: 630, alt: "NeuroStar TMS therapy suite at Desert Recovery Centers Phoenix Arizona" }],
    siteName: "Desert Recovery Centers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroStar TMS Therapy in Phoenix, AZ | Desert Recovery Centers",
    description: "FDA-cleared NeuroStar TMS for depression, anxious depression, and OCD (add-on) in adults; add-on therapy for adolescents 15-21. Desert Recovery Centers Phoenix.",
  },
};

export default function TMSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
