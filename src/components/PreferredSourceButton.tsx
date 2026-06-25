/**
 * Google "Preferred Sources" opt-in button.
 *
 * Links visitors to Google's source-preferences tool with the DRC domain
 * pre-filled, so they can add Desert Recovery Centers as a preferred source.
 * Deliberately low-emphasis: it must never read as a primary conversion CTA,
 * so it is excluded from admissions, ad landing, VOB, call, and contact-form
 * pages (see Footer's `showPreferredSource` prop and the blog placement).
 *
 * Two visual variants, both using existing design tokens (no new tokens):
 *  - "footer": the dark footer's white/10 "social-square" treatment.
 *  - "light":  the same subtle weight on a light background (blog body).
 */

type Variant = "footer" | "light";

const VARIANT_STYLES: Record<Variant, string> = {
  footer: "bg-white/10 hover:bg-white/20 text-white/60 hover:text-white",
  light: "bg-forest/5 hover:bg-forest/10 text-forest/70 hover:text-forest",
};

export default function PreferredSourceButton({
  variant = "footer",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href="https://google.com/preferences/source?q=desertrecoverycenters.com"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="Add Desert Recovery Centers as a preferred source on Google"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm transition-colors ${VARIANT_STYLES[variant]} ${className}`}
    >
      Add us as a preferred source on Google
    </a>
  );
}
