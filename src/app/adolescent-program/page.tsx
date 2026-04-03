"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AdolescentProgramPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1200);
  };

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-forest"
          style={{
            backgroundImage: "url(/images/general/DRC-MENTAL-HEALTH.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(28,43,30,0.93) 0%, rgba(28,43,30,0.8) 100%)" }}
        />
        <div className="relative z-10 text-center max-w-container mx-auto px-6 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold font-body text-xs tracking-[0.25em] uppercase font-semibold">Coming Soon</span>
            </motion.div>

            <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Adolescent Mental Health Treatment Program
              <span className="block text-gold/90 mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold">Coming Soon</span>
            </h1>
            <p className="text-white/70 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Age-specific PHP, IOP, and OP programs designed for teens ages 13&#8211;17, with family integration and school coordination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Levels of Care</span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">Programs for Teens Ages 13&#8211;17</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "PHP", subtitle: "Partial Hospitalization", desc: "Structured daily clinical programming with evidence-based therapies tailored for adolescents. 5-6 hours per day, 5 days per week." },
              { name: "IOP", subtitle: "Intensive Outpatient", desc: "Step-down program with real-world skill building. 3-4 sessions per week designed to work around school schedules." },
              { name: "OP", subtitle: "Outpatient", desc: "Ongoing maintenance and community support. 1-3 sessions per week for long-term stabilization and continued growth." },
            ].map((program) => (
              <div key={program.name} className="bg-cream rounded-2xl p-8 border-2 border-transparent hover:border-gold/40 transition-all text-center">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-display text-xl font-bold">{program.name}</span>
                </div>
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{program.subtitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Family Integration ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Family-Centered Care</span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-8">Family Integration at Every Level</h2>
            <div className="space-y-4">
              {[
                { title: "Parents Involved at Every Level of Care", desc: "From intake to aftercare, parents and guardians are active participants in their teen's treatment. You'll understand the clinical plan, participate in sessions, and learn how to support recovery at home." },
                { title: "Weekly Family Therapy Sessions", desc: "Structured family therapy addresses communication breakdowns, rebuilds trust, and helps the entire family develop healthier dynamics. Our clinicians guide these sessions with evidence-based approaches." },
                { title: "School Coordination and Academic Support", desc: "We coordinate directly with your teen's school to minimize academic disruption. Treatment schedules are designed around school commitments, and we provide documentation and support for academic accommodations." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TMS for Adolescents ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Advanced Treatment</span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
              TMS for Adolescents &mdash; Ages 15 and Older
            </h2>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-10">
              NeuroStar TMS is the only system FDA-cleared for adolescents ages 15 and older with treatment-resistant depression. A safe, non-invasive option when medication alone isn&apos;t enough.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                "FDA-cleared for patients ages 15 and older since 2008",
                "Clinically proven for treatment-resistant depression in teens",
                "Safe, non-invasive — no medication required",
                "Sessions fit around school schedules",
                "No sedation, no recovery time",
                "No impact on daily activities",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Waitlist Form ────────────────────────────────────── */}
      <section id="waitlist" className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Join the Waitlist</span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
                Be Among the First Families to Access This Program
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our adolescent program is in development. Join the waitlist and our clinical team will reach out personally when we begin accepting families.
              </p>
            </div>

            {formStatus === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cream rounded-2xl p-10 text-center border border-gold/20"
              >
                <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-display text-2xl text-forest font-semibold mb-2">You&apos;re on the Waitlist</h3>
                <p className="text-gray-600">Our clinical team will reach out personally when the adolescent program becomes available. Thank you.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-8 border border-gray-100 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-forest mb-1.5">Parent/Guardian Name</label>
                    <input id="parentName" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white" />
                  </div>
                  <div>
                    <label htmlFor="teenName" className="block text-sm font-medium text-forest mb-1.5">Teen First Name</label>
                    <input id="teenName" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="teenAge" className="block text-sm font-medium text-forest mb-1.5">Teen Age</label>
                    <select id="teenAge" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white">
                      <option value="">Select</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-forest mb-1.5">Phone</label>
                    <input id="phone" type="tel" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest mb-1.5">Email</label>
                    <input id="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage bg-white" />
                  </div>
                </div>
                <div>
                  <label htmlFor="needs" className="block text-sm font-medium text-forest mb-1.5">Tell Us About Your Teen&apos;s Needs</label>
                  <textarea id="needs" rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none bg-white" />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-base py-4 rounded-xl transition-colors cursor-pointer disabled:opacity-60"
                >
                  {formStatus === "sending" ? "Submitting..." : "Join the Adolescent Waitlist"}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Protected by HIPAA &amp; 42 CFR Part 2. Your information is completely confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
