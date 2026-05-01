"use client";

import { motion } from "framer-motion";

const MESSAGES = [
  "Акция до конца недели",
  "Бесплатная доставка от 3 000 ₽",
  "Только 12 позиций по этой цене",
  "Оплата картой и СБП",
];

export default function UrgencyStrip() {
  const repeated = [...MESSAGES, ...MESSAGES];

  return (
    <div className="bg-dark text-cream/80 overflow-hidden h-10 flex items-center">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {repeated.map((msg, i) => (
          <span key={i} className="font-inter text-xs tracking-wide flex items-center">
            <span className="px-8">{msg}</span>
            <span className="text-accent/60">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
