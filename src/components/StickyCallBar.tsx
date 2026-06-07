import React from "react";

/**
 * StickyCallBar
 *
 * Reusable, mobile-only tap-to-call bar pinned to the bottom of the viewport.
 * Hidden on desktop (md and up). Renders the phone number as a tel: link so the
 * global CallTrackingMetrics script (//517993.tctm.co/t.js, loaded in the root
 * layout) swaps both the displayed number and the tel: href at runtime for
 * tracked/paid sessions. Pass the SAME display/href the host page uses for its
 * main call button so CTM swaps every instance identically. Do not hardcode a
 * different number here.
 */
type StickyCallBarProps = {
  phoneDisplay: string;
  phoneHref: string;
  /** Optional short label shown before the number. */
  label?: string;
};

export default function StickyCallBar({
  phoneDisplay,
  phoneHref,
  label = "Call Admissions",
}: StickyCallBarProps) {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-gold-dark/30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Call admissions"
    >
      <a
        href={phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold hover:bg-gold-dark text-white font-semibold text-base px-5 py-3.5 transition-colors"
        aria-label={`${label}: call Desert Recovery Centers at ${phoneDisplay}`}
      >
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.27 1.06l-2.1 2.1a12 12 0 005.3 5.3l2.1-2.1a1 1 0 011.06-.27l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
          />
        </svg>
        <span>
          {label}: {phoneDisplay}
        </span>
      </a>
    </div>
  );
}
