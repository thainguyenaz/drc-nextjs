/**
 * AEO (Answer Engine Optimization) Block
 *
 * Renders crawlable Q&A content in a visually minimal section at the bottom of pages.
 * Designed to give AI systems (ChatGPT, Perplexity, Claude, Gemini) direct,
 * cite-able answers to common queries about Desert Recovery Centers.
 *
 * Each entry is an <article> with semantic headings so crawlers can parse them,
 * while the soft styling keeps them from competing with primary page content.
 */

interface AEOEntry {
  question: string;
  answer: string;
}

export default function AEOBlock({ entries }: { entries: AEOEntry[] }) {
  return (
    <section
      className="py-12 bg-white border-t border-gray-100"
      aria-label="Common questions about Desert Recovery Centers"
      data-speakable="true"
    >
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {entries.map((entry, i) => (
            <article key={i} className="border-l-2 border-gold/30 pl-5">
              <h3 className="text-forest font-semibold text-sm mb-1">{entry.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{entry.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
