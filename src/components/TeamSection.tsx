"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

export default function TeamSection() {
  const allMembers = [...siteData.team.leadership, ...siteData.team.clinical];

  return (
    <section id="team" className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-4">
            Meet Our Clinical Leadership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Board-certified psychiatrists, licensed therapists, and dedicated
            support staff committed to your recovery.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="text-center"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title} at Desert Recovery Centers`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-display text-base text-forest font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
