"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdolescentImage3() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, transition: { duration: 0.6 } }}
      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
    >
      <Image
        src="/images/adolescent/parent-teen-family-therapy-session-behavioral-health.jpg"
        alt="Parent and teenager meeting with a clinical team member during family therapy at Desert Recovery Centers adolescent PHP IOP program"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}
