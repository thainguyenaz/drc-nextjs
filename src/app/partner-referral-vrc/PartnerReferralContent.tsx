"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PartnerReferralForm from "@/components/forms/PartnerReferralForm";

const steps = [
  {
    step: "1",
    title: "Submit Patient Information",
    desc: "Use the secure form to send us the patient's contact details, insurance carrier, and clear photos of both sides of the insurance card.",
  },
  {
    step: "2",
    title: "We Verify Insurance",
    desc: "Our admissions team contacts the insurer directly to confirm coverage, deductibles, and out-of-pocket costs, typically within one hour.",
  },
  {
    step: "3",
    title: "Coordinate Admission",
    desc: "We reach back out to the referring provider with verified benefits and admission options. Most patients begin treatment within 48 hours.",
  },
];

export default function PartnerReferralContent() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Co-brand masthead: DRC + VRC partnership attribution */}
        <div className="flex justify-center mb-10 md:mb-12">
          <Image
            src="/images/partners/drc-vrc-co-brand.png"
            alt="Desert Recovery Centers and Virtue Recovery Center partnership"
            width={2172}
            height={724}
            className="max-h-32 md:max-h-40 w-auto"
            priority
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: intro + form */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Refer a Patient to Desert Recovery Centers
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Desert Recovery Centers and Virtue Recovery Center work together to coordinate care for patients who need residential, PHP, or IOP treatment for substance use and mental health conditions. This form connects you directly with our admissions team.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Submit the patient&apos;s information and insurance details below. Our team will verify benefits and contact you to coordinate admission, typically within one hour during business hours.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                For urgent referrals after hours, call us directly.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Direct line: <a href="tel:+16233050496" className="text-sage font-medium">(623) 305-0496</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Available 24/7 for urgent referrals</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                All information is protected by HIPAA and 42 CFR Part 2 federal confidentiality regulations.
              </p>
            </div>

            <PartnerReferralForm />
          </div>

          {/* Right column: How it works */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                How It Works
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4">
                Partner Referrals in 3 Steps
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
      </div>
    </section>
  );
}
