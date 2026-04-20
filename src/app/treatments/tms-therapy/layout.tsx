import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroStar TMS Therapy in Phoenix, AZ | Desert Recovery Centers",
  description:
    "Desert Recovery Centers Phoenix offers FDA-cleared NeuroStar TMS therapy for depression, anxious depression, OCD, and adolescents ages 15 and older. Drug-free. No downtime. Sessions as short as 19 minutes. Most insurance accepted. Call (602) 905-8070.",
  alternates: { canonical: "/treatments/tms-therapy" },
  keywords: [
    "TMS therapy Phoenix AZ",
    "NeuroStar TMS Phoenix",
    "TMS for depression Arizona",
    "transcranial magnetic stimulation Phoenix",
    "TMS therapy near me",
    "drug-free depression treatment Phoenix",
    "TMS for OCD Arizona",
    "adolescent TMS therapy Phoenix",
  ],
  openGraph: {
    title: "NeuroStar TMS Therapy in Phoenix, AZ | Desert Recovery Centers",
    description:
      "FDA-cleared NeuroStar TMS therapy for depression, anxious depression, OCD, and adolescents. Now available at Desert Recovery Centers Phoenix.",
    url: "/treatments/tms-therapy",
    images: [{ url: "/images/locations/phoenix/phoenix-lobby-2.jpg", width: 1200, height: 630, alt: "NeuroStar TMS therapy suite at Desert Recovery Centers Phoenix Arizona" }],
    siteName: "Desert Recovery Centers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroStar TMS Therapy in Phoenix, AZ | Desert Recovery Centers",
    description: "FDA-cleared NeuroStar TMS therapy for depression, anxious depression, OCD, and adolescents. Now available at Desert Recovery Centers Phoenix.",
  },
};

export default function TMSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
