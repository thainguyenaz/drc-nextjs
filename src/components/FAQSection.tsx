export default function FAQSection({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <section aria-labelledby="faq-heading" className="py-12">
      <h2 id="faq-heading" className="text-3xl font-bold mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="border border-gray-200 rounded-lg group"
          >
            <summary className="cursor-pointer px-6 py-4 font-medium list-none flex items-center justify-between">
              <h3 className="text-lg font-semibold m-0">{faq.question}</h3>
              <span
                aria-hidden="true"
                className="ml-4 shrink-0 transition-transform group-open:rotate-180"
              >
                &#9660;
              </span>
            </summary>
            <div className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
