import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Renders a copy string while preserving inline Markdown links, so the
 * internal link (to the home page) and external link (to a .gov / wiki
 * source) that each page's copy carries stay clickable and are never
 * dropped or relocated. Internal links use next/link; external links open
 * in a new tab with safe rel attributes.
 *
 * Deliberately hand-rolled rather than pulling in react-markdown: the only
 * Markdown this copy ever contains is the inline link, and a full Markdown
 * runtime in every SEO page is a bundle cost with no payoff. This is a
 * server component — no client JS ships for it at all.
 *
 * `inline` renders without a wrapping <p>, for use inside an existing
 * paragraph or list item.
 */

const SITE_URL = "https://desertrecoverycenters.com";

// [text](href) — href stops at the first closing paren, which is correct for
// the link shapes this copy uses (no parens inside URLs).
const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Gold, matching the "Verify Insurance Today" CTA (theme token `gold`,
// #C4973A); darkens to gold-dark on hover like the buttons do.
const linkClass =
  "text-gold font-medium underline underline-offset-2 hover:text-gold-dark transition-colors";

function isInternal(href: string): boolean {
  return href.startsWith("/") || href.startsWith(SITE_URL);
}

function toPath(href: string): string {
  return href.startsWith(SITE_URL) ? href.slice(SITE_URL.length) || "/" : href;
}

/** Splits a copy string into text runs and rendered anchors. */
function parse(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  // exec loop rather than matchAll: the tsconfig target predates
  // RegExpStringIterator, and this keeps the component dependency-free.
  const pattern = new RegExp(LINK_PATTERN.source, "g");
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const [full, label, href] = match;
    const start = match.index;

    if (start > cursor) nodes.push(text.slice(cursor, start));

    nodes.push(
      isInternal(href) ? (
        <Link key={key++} href={toPath(href)} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {label}
        </a>
      )
    );

    cursor = start + full.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

interface RichTextProps {
  children: string;
  className?: string;
  /** Render without a wrapping <p>. */
  inline?: boolean;
}

export default function RichText({ children, className, inline }: RichTextProps) {
  const nodes = parse(children);
  if (inline) {
    return (
      <>
        {nodes.map((node, i) => (
          <Fragment key={i}>{node}</Fragment>
        ))}
      </>
    );
  }
  return <p className={className}>{nodes}</p>;
}

/**
 * Strips Markdown links down to their label text. Use for anything that
 * feeds metadata or JSON-LD (FAQPage answers, meta descriptions) — schema
 * consumers expect plain text, while the on-page copy keeps the live link.
 */
export function stripMarkdownLinks(text: string): string {
  return text.replace(LINK_PATTERN, "$1");
}
