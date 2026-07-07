"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Shopify",
  "Sanity CMS", "PostgreSQL", "Framer Motion", "GSAP", "Git", "Vercel",
];

export default function TrustedBrands() {
  return (
    <section className="py-16 border-y border-border relative overflow-hidden bg-white">
      <div className="container-custom mb-8">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted font-bold">
          Technologies We Use to Build Modern Web Products
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden gap-16">
          <motion.div
            className="flex gap-16 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...techs, ...techs].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-primary transition-colors duration-300" />
                <span className="text-xl font-semibold text-muted hover:text-foreground transition-colors duration-300 tracking-tight"
                  style={{ fontFamily: "var(--font-clash, 'Inter', sans-serif)" }}>
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
