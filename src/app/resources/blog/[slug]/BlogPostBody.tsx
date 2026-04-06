"use client";

/**
 * Renders blog post HTML content. Uses dangerouslySetInnerHTML which is safe
 * here because content is authored internally in src/lib/blog.ts, not
 * user-supplied.
 */
export default function BlogPostBody({ content }: { content: string }) {
  return (
    <article
      className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-forest prose-headings:font-semibold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-gold prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600 prose-strong:text-forest prose-em:text-gray-500"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
