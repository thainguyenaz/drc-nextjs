"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Get Started
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
              One Conversation Can Change Everything
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our admissions team answers every call personally. No automated systems. No call centers. Just a real person who understands.
            </p>
            <p className="text-gold text-sm font-medium mb-8">
              Most clients begin treatment within 48 hours of their first call.
            </p>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Glendale: <a href="tel:+16233231012" className="text-sage font-medium">(623) 323-1012</a></span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Scottsdale: <a href="tel:+14809313617" className="text-sage font-medium">(480) 931-3617</a></span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Phoenix: <a href="tel:+16232575384" className="text-sage font-medium">(623) 257-5384</a></span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@desertrecoverycenters.com" className="text-sage font-medium">
                  contact@desertrecoverycenters.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-forest mb-1.5">First Name</label>
                <input id="firstName" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-forest mb-1.5">Last Name</label>
                <input id="lastName" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest mb-1.5">Email</label>
              <input id="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-forest mb-1.5">Phone</label>
              <input id="phone" type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-forest mb-1.5">How can we help?</label>
              <textarea id="message" rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none" />
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer"
            >
              Submit Confidential Inquiry
            </button>
            <p className="text-xs text-gray-400 text-center">
              Protected by HIPAA &amp; 42 CFR Part 2. Your information is completely confidential.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
