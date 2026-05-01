"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSale() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#1a1614]">
      {/* Background image placeholder — replace src with real photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(27, 22, 20, 0.15) 0%,
            rgba(27, 22, 20, 0.45) 60%,
            rgba(27, 22, 20, 0.75) 100%
          ), url('/hero-placeholder.jpg')`,
          backgroundColor: "#3d2e28",
        }}
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B2724]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          {/* Sale label */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4 font-fraunces italic text-[#B5453B] text-base tracking-widest uppercase"
          >
            Распродажа
          </motion.span>

          {/* Headline */}
          <h1 className="text-hero font-fraunces font-bold text-white leading-[1.05] mb-4">
            До&nbsp;−50%<br />
            <span className="font-light italic">на шёлковые</span><br />
            халаты
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-white/70 text-base md:text-lg mb-8 font-light">
            Остатки уходят быстро — успей выбрать
          </p>

          {/* CTA */}
          <motion.a
            href="#deals"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-3 group"
          >
            Смотреть все скидки
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 right-8 md:right-12 lg:right-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-inter text-white/40 text-xs tracking-widest uppercase rotate-90 origin-center">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Mobile sticky CTA — appears on scroll via StickyBuyBar component */}
    </section>
  );
}
