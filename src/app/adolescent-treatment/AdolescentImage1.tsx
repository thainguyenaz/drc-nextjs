"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdolescentImage1() {
  const [entered, setEntered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setEntered(true)}
      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
    >
      <motion.div
        animate={entered ? { scale: [1, 1.012, 1] } : {}}
        transition={
          entered
            ? { duration: 9, repeat: Infinity, ease: "easeInOut", repeatType: "loop" as const }
            : {}
        }
        whileHover={{ scale: 1.03, transition: { duration: 0.6 } }}
        className="relative w-full h-full overflow-hidden rounded-[inherit]"
      >
        <Image
          src="/images/adolescent/teen-individual-therapy-session-phoenix-az.jpg"
          alt="Licensed therapist conducting an individual therapy session with a teenager at Desert Recovery Centers adolescent outpatient program in Phoenix Arizona"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}
