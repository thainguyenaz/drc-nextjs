"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

function TeamCard({ member, i }: { member: { name: string; title: string; image: string }; i: number }) {
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="group"
    >
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title} at Desert Recovery Centers`}
          fill
          className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-forest/85 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-end pb-8 px-4">
          <h3 className="font-display text-base text-white font-semibold text-center">{member.name}</h3>
          <p className="text-white/70 text-xs mt-1 text-center">{member.title}</p>
          <span className="mt-4 text-gold text-xs font-semibold border border-gold/50 rounded-lg px-4 py-1.5 hover:bg-gold hover:text-white transition-colors cursor-pointer">
            View Bio
          </span>
        </div>
      </div>
      <h3 className="font-display text-base text-forest font-semibold text-center">{member.name}</h3>
      <p className="text-gray-500 text-sm mt-1 text-center">{member.title}</p>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Our Team
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
            Meet Our Clinical Leadership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Board-certified psychiatrists, licensed therapists, and dedicated
            support staff committed to your recovery.
          </p>
        </motion.div>

        {/* Leadership */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center font-body text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-8"
          >
            Leadership
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {siteData.team.leadership.map((member, i) => (
              <TeamCard key={member.name} member={member} i={i} />
            ))}
          </div>
        </div>

        {/* Clinical Staff */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center font-body text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-8"
          >
            Clinical Staff
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {siteData.team.clinical.map((member, i) => (
              <TeamCard key={member.name} member={member} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
