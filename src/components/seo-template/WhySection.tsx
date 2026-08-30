import SplitSection from "./SplitSection";
import type { WhyCopy } from "./types";

/** Why: mirror of Benefits — image on the right, cream background. */
export default function WhySection({ why }: { why: WhyCopy }) {
  return (
    <SplitSection
      eyebrow={why.eyebrow ?? "Why Us"}
      heading={why.heading}
      subheading={why.subheading}
      items={why.items}
      image={why.image}
      imageAlt={why.imageAlt}
      reverse
      background
    />
  );
}
