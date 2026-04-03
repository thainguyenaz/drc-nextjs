export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-forest">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
          Your Recovery Starts With One Call
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Our admissions team is available 24 hours a day, 7 days a week.
          Whether you&apos;re ready to start treatment or just have questions,
          we&apos;re here for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+14809313617"
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
          >
            Call (480) 931-3617
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
          >
            Verify Insurance Online
          </a>
        </div>
      </div>
    </section>
  );
}
