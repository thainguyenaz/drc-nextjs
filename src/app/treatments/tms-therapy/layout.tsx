import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "TMS Therapy with NeuroStar Coming to Desert Recovery Centers | Arizona",
  description:
    "Desert Recovery Centers is bringing NeuroStar TMS therapy to Arizona. Join the waitlist for this FDA-cleared, drug-free depression treatment. Call (480) 931-3617.",
  path: "/treatments/tms-therapy",
});

export default function TMSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
