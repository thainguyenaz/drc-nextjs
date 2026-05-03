"use client";

import { motion } from "framer-motion";
import GetHelpForm from "@/components/forms/GetHelpForm";

const locations = [
  {
    name: "Glendale",
    address: "8105 W Frier Dr, Glendale, AZ 85303",
    phone: "(623) 323-1012",
    phoneTel: "+16233231012",
    programs: ["Residential", "PHP", "IOP", "OP", "Detox"],
    mapQuery: "8105+W+Frier+Dr+Glendale+AZ+85303",
  },
  {
    name: "Scottsdale",
    address: "23222 N Church Rd, Scottsdale, AZ 85255",
    phone: "(480) 931-3617",
    phoneTel: "+14809313617",
    programs: ["Residential", "PHP", "IOP", "OP"],
    mapQuery: "23222+N+Church+Rd+Scottsdale+AZ+85255",
  },
  {
    name: "Phoenix PHP/IOP",
    address: "4160 N. 108th Ave, Phoenix, AZ 85037",
    phone: "(602) 905-8070",
    phoneTel: "+16029058070",
    programs: ["PHP", "IOP", "OP", "TMS"],
    mapQuery: "4160+N+108th+Ave+Phoenix+AZ+85037",
  },
  {
    name: "Phoenix TMS",
    address: "4160 N. 108th Ave, Phoenix, AZ 85037",
    phone: "(602) 905-8070",
    phoneTel: "+16029058070",
    programs: ["TMS Therapy"],
    mapQuery: "4160+N+108th+Ave+Phoenix+AZ+85037",
  },
  {
    name: "Phoenix PHP Living",
    address: "1623 W Moody Trail, Phoenix, AZ 85041",
    phone: "(602) 905-8070",
    phoneTel: "+16029058070",
    programs: ["PHP Living", "Sober Living"],
    mapQuery: "1623+W+Moody+Trail+Phoenix+AZ+85041",
  },
];

export default function ContactContent() {
  return (
    <>
      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Get in Touch
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
                One Conversation Can Change Everything
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our admissions team answers every call personally. No automated systems. No call centers. Just a real person who understands what you&apos;re going through and can walk you through your options.
              </p>
              <p className="text-gold text-sm font-medium mb-8">
                Most clients begin treatment within 48 hours of their first call.
              </p>

              <div className="space-y-4 text-sm text-gray-600 mb-8">
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
                  <span>Phoenix: <a href="tel:+16029058070" className="text-sage font-medium">(602) 905-8070</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:admissions@desertrecoverycenters.com" className="text-sage font-medium">
                    admissions@desertrecoverycenters.com
                  </a>
                </div>
              </div>

              <p className="text-gray-500 text-xs">
                All inquiries are protected by HIPAA &amp; 42 CFR Part 2.
              </p>
            </motion.div>

            <div>
              <GetHelpForm variant="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
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
              Our Locations
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
              Five Locations Across Arizona
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each facility offers the same clinical excellence in a luxury residential setting designed for healing.
            </p>
          </motion.div>

          <div className="space-y-12">
            {locations.map((location, i) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="grid md:grid-cols-2">
                  {/* Location Details */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      {location.name} Facility
                    </span>
                    <h3 className="font-display text-2xl text-forest font-semibold mb-4">
                      Desert Recovery Centers, {location.name}
                    </h3>

                    <div className="space-y-3 text-sm text-gray-600 mb-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${location.phoneTel}`} className="text-sage font-medium">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:contact@desertrecoverycenters.com" className="text-sage font-medium">
                          contact@desertrecoverycenters.com
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {location.programs.map((program) => (
                        <span
                          key={program}
                          className="text-xs font-medium text-forest bg-cream px-3 py-1.5 rounded-lg border border-gray-100"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gray-100 min-h-[300px] md:min-h-0 flex items-center justify-center relative">
                    <div className="text-center p-6">
                      <svg className="w-12 h-12 text-sage/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-400 text-sm font-medium mb-3">{location.address}</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-gold text-sm font-semibold border border-gold/50 rounded-lg px-4 py-2 hover:bg-gold hover:text-white transition-colors"
                      >
                        Open in Google Maps &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
