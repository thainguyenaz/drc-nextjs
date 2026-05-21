"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-into-view detection for CSS-driven entrance animations.
 * Replaces framer-motion's `whileInView` pattern across homepage components.
 *
 * Pair with the `.reveal-fade-up` / `.reveal-fade-left` / `.reveal-fade-right` /
 * `.reveal-fade` utility classes in globals.css. The base class starts the
 * element at opacity:0; appending `.reveal-in` when `visible` is true plays
 * the CSS animation.
 *
 * Defaults (`threshold: 0`, no `rootMargin`) intentionally match
 * framer-motion's `whileInView` defaults, so this swap is a behaviorally
 * neutral migration: the same elements animate at the same scroll position.
 *
 * Fires once. The observer disconnects on first intersection — entrance
 * animations don't replay.
 *
 * Reduced-motion: when `(prefers-reduced-motion: reduce)` matches, the hook
 * skips the observer and reports `visible: true` immediately. The CSS
 * `prefers-reduced-motion` block in globals.css zeros the animation in
 * parallel, so the element renders directly in its final state.
 *
 * JS-failure safety: reveal-* elements start at opacity:0 in CSS and depend
 * on this hook (i.e., on JS) to become visible. The <noscript> block in
 * src/app/layout.tsx overrides opacity to 1 when JS is disabled, so
 * JS-disabled users still see fully-revealed content — strictly safer than
 * the framer-motion `whileInView` this replaces, which also rendered blank
 * with JS off. A hydration crash (bundle loads but React fails to mount)
 * would still leave reveal-* elements invisible; that's the same failure
 * profile as the framer-motion implementation it replaces, not a new
 * regression. Future maintainers: if hydration-crash coverage becomes a
 * requirement, this hook's contract changes (render visible, hide on mount)
 * and the CSS default must flip accordingly.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { rootMargin?: string; threshold?: number }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  const rootMargin = options?.rootMargin;
  const threshold = options?.threshold;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold ?? 0,
        rootMargin: rootMargin ?? "0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, visible };
}
