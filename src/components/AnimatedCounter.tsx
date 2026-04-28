"use client";

import { useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  // Initial render = target value, no animation. Crawler-friendly and decimal-safe.
  const [value] = useState(target);
  return <span>{value}{suffix}</span>;
}
