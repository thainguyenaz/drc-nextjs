"use client";

import { motion } from "framer-motion";
import { Children, ReactNode } from "react";

interface AnimatedGridProps {
  className?: string;
  hoverLift?: boolean;
  children: ReactNode;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AnimatedGrid({
  className,
  hoverLift = true,
  children,
}: AnimatedGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {Children.map(children, (child) => (
        <motion.div
          variants={item}
          whileHover={hoverLift ? { y: -4, transition: { duration: 0.2 } } : undefined}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
