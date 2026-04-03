"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface LocationCollisionProps {
  leftImage: { src: string; alt: string };
  rightImage: { src: string; alt: string };
}

export default function LocationCollision({ leftImage, rightImage }: LocationCollisionProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.4], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], [120, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-8 mb-16">
      <motion.div
        style={{ x: leftX, opacity: imgOpacity }}
        className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
      >
        <Image
          src={leftImage.src}
          alt={leftImage.alt}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <motion.div
        style={{ x: rightX, opacity: imgOpacity }}
        className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
      >
        <Image
          src={rightImage.src}
          alt={rightImage.alt}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
