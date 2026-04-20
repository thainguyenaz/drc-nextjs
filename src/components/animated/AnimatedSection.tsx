"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const animations = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  popUp: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

interface AnimatedSectionProps {
  animation?: keyof typeof animations;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function AnimatedSection({
  animation = "fadeUp",
  delay = 0,
  className,
  children,
}: AnimatedSectionProps) {
  const variant = animations[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
