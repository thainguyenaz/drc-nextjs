"use client";

import { motion } from "framer-motion";

const insurers = [
  { name: "Cigna", desc: "In-network coverage for residential, PHP, and IOP programs." },
  { name: "Aetna", desc: "In-network behavioral health benefits accepted across all facilities." },
  { name: "Blue Cross Blue Shield", desc: "BCBS plans accepted — including PPO and select HMO plans." },
  { name: "UnitedHealthcare", desc: "UHC commercial plans accepted for all levels of care." },
  { name: "Humana", desc: "In-network coverage for mental health and addiction treatment." },
  { name: "Tricare", desc: "Coverage accepted for active-duty service members, veterans, and dependents." },
  { name: "TriWest", desc: "TriWest Healthcare Alliance plans accepted for eligible veterans." },
];

const steps = [
  {
    step: "1",
    title: "Submit Your Information",
    desc: "Fill out the confidential form below with your insurance details — or call us directly. No obligation.",
  },
  {
    step: "2",
    title: "We Verify Your Benefits",
    desc: "Our admissions team contacts your insurer directly to determine your coverage, deductibles, and out-of-pocket costs.",
  },
  {
    step: "3",
    title: "Review Your Options",
    desc: "We walk you through your coverage in plain language — what's covered, what's not, and what financial options are available to you.",
  },
  {
    step: "4",
    title: "Begin Treatment",
    desc: "Once you're ready, most clients begin treatment within 48 hours. We handle the insurance coordination so you can focus on recovery.",
  },
];

export default function InsuranceContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Don&apos;t Let Cost Be the Reason You Don&apos;t Get Help
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The fear of what treatment will cost keeps too many people from picking up the phone. We understand. That&apos;s why our admissions team verifies your insurance benefits before you commit to anything — at no cost and with no obligation. Most of our clients discover they have significantly more coverage than they expected.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Desert Recovery Centers is in-network with most major insurance providers. Our team handles the paperwork, fights for approvals, and ensures you get the maximum benefit your plan allows.
            </p>
            <p className="text-gold text-sm font-semibold">
              Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Accepted Insurers */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Accepted Insurance
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Insurance Providers We Work With
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {insurers.map((insurer, i) => (
              <motion.div
                key={insurer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border-t-[3px] border-t-transparent hover:border-t-gold hover:shadow-xl transition-all duration-[250ms]"
              >
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  {insurer.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {insurer.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Don&apos;t see your insurance listed? Call us — we may still be able to work with your plan.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                How It Works
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Insurance Verification in 4 Steps
              </h2>
            </motion.div>
            <div className="space-y-6">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-white font-display font-bold text-lg flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-forest font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Verification Form */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Verify Your Benefits
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
                Free, Confidential Insurance Check
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Submit your information below and our admissions team will verify your benefits within hours. There is absolutely no cost, no obligation, and no pressure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                All information is protected by HIPAA and 42 CFR Part 2 federal confidentiality regulations.
              </p>
              <p className="text-gold text-sm font-semibold mb-4">
                Coverage varies by plan. Contact us to verify your benefits.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Prefer to call? <a href="tel:+14809313617" className="text-sage font-medium">(480) 931-3617</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Available 24/7 — call anytime, day or night</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ins-first" className="block text-sm font-medium text-forest mb-1.5">First Name</label>
                  <input id="ins-first" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
                </div>
                <div>
                  <label htmlFor="ins-last" className="block text-sm font-medium text-forest mb-1.5">Last Name</label>
                  <input id="ins-last" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
                </div>
              </div>
              <div>
                <label htmlFor="ins-phone" className="block text-sm font-medium text-forest mb-1.5">Phone Number</label>
                <input id="ins-phone" type="tel" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
              </div>
              <div>
                <label htmlFor="ins-email" className="block text-sm font-medium text-forest mb-1.5">Email</label>
                <input id="ins-email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
              </div>
              <div>
                <label htmlFor="ins-provider" className="block text-sm font-medium text-forest mb-1.5">Insurance Provider</label>
                <select id="ins-provider" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white">
                  <option value="">Select your insurance</option>
                  <option value="cigna">Cigna</option>
                  <option value="aetna">Aetna</option>
                  <option value="bcbs">Blue Cross Blue Shield</option>
                  <option value="uhc">UnitedHealthcare</option>
                  <option value="humana">Humana</option>
                  <option value="tricare">Tricare</option>
                  <option value="triwest">TriWest</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="ins-member-id" className="block text-sm font-medium text-forest mb-1.5">Member ID (optional)</label>
                <input id="ins-member-id" type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" placeholder="Found on your insurance card" />
              </div>
              <div>
                <label htmlFor="ins-group" className="block text-sm font-medium text-forest mb-1.5">Group Number (optional)</label>
                <input id="ins-group" type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage" />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer"
              >
                Verify My Insurance
              </button>
              <p className="text-xs text-gray-400 text-center">
                Protected by HIPAA &amp; 42 CFR Part 2. Your information is completely confidential.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Common Questions
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Insurance & Payment FAQ
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "What if my insurance isn't listed?",
                  desc: "We work with many insurance plans beyond those listed above. Call us at (480) 931-3617 and our admissions team will check your specific plan. We also offer private pay options and can discuss financing if needed.",
                },
                {
                  title: "Will my employer find out I'm in treatment?",
                  desc: "No. All treatment information is protected by HIPAA and 42 CFR Part 2 federal confidentiality regulations. Insurance claims are processed with the highest level of privacy protections available under federal law.",
                },
                {
                  title: "What does insurance typically cover?",
                  desc: "Most commercial insurance plans cover residential treatment, PHP, and IOP for mental health and substance use disorders. Your specific coverage depends on your plan, deductible, and benefits. Our team will explain your coverage in detail before you begin treatment.",
                },
                {
                  title: "Is there any cost for the insurance verification?",
                  desc: "None. Insurance verification is completely free, completely confidential, and comes with no obligation to begin treatment.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
