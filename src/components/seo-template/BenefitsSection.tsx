import SplitSection from "./SplitSection";
import type { BenefitsCopy } from "./types";

/** Benefits: image on the left, content on the right. White background. */
export default function BenefitsSection({ benefits }: { benefits: BenefitsCopy }) {
  return (
    <SplitSection
      eyebrow={benefits.eyebrow ?? "Benefits"}
      heading={benefits.heading}
      subheading={benefits.subheading}
      items={benefits.items}
      image={benefits.image}
      imageAlt={benefits.imageAlt}
    />
  );
}
