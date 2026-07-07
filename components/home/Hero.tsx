"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/common/MagneticButton";

function GridPattern() {
  return (
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
  );
}

function FloatingMockup() {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="w-[420px] h-[260px] rounded-2xl bg-white shadow-floating border border-border/80 overflow-hidden flex flex-col">
          <div className="h-8 bg-surface flex items-center px-4 gap-1.5 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="flex-1 mx-4 h-4 rounded bg-background border border-border flex items-center justify-center px-2">
              <span className="text-[9px] text-muted font-medium tracking-tight">novastudio.com</span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-6 w-1/2 bg-primary/5 rounded-lg border border-primary/10" />
              <div className="h-2 w-full bg-border/60 rounded-sm" />
              <div className="h-2 w-5/6 bg-border/60 rounded-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 rounded-xl border border-border bg-background p-3 flex flex-col justify-between">
                <span className="text-[8px] text-muted uppercase font-bold tracking-wider">Design</span>
                <span className="text-xs font-bold text-foreground">Figma Precision</span>
              </div>
              <div className="h-16 rounded-xl border border-border bg-background p-3 flex flex-col justify-between">
                <span className="text-[8px] text-muted uppercase font-bold tracking-wider">Code</span>
                <span className="text-xs font-bold text-foreground">Next.js Framework</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-12 -right-4 bg-white border border-border shadow-premium rounded-2xl p-4 w-40"
      >
        <p className="text-[8px] uppercase tracking-widest text-muted font-bold mb-1">Performance</p>
        <p className="text-base font-bold text-foreground">100/100 Speed</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute -bottom-4 -left-6 bg-white border border-border shadow-premium rounded-2xl p-4 w-44"
      >
        <p className="text-[8px] uppercase tracking-widest text-primary font-bold mb-1">Status</p>
        <p className="text-sm font-semibold text-foreground">Ready to Launch</p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pb-[220px]">
      <GridPattern />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[150px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 pt-36"
      >
        <div className="grid lg:grid-cols-2 gap-[40px] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-xs text-muted mb-[32px] font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Building Digital Brands That People Remember
            </motion.div>

            {/* H1 Headline (Heading -> Paragraph gap = 32px) */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="heading-xl text-[44px] md:text-[58px] lg:text-[72px] text-foreground mb-[32px] max-w-[650px] tracking-tight leading-none font-bold"
            >
              We Build <span className="text-primary">Bespoke</span> Digital Experiences.
            </motion.h1>

            {/* Paragraph (Paragraph -> CTA gap = 48px, max-width = 650px, text size = 20px) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-muted text-[20px] leading-[1.7] mb-[48px] max-w-[650px] font-medium"
            >
              From custom SEO mapping and high-performance Web Development to original Figma Brand Strategies, we construct elegant systems for digital positioning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-[16px]"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="h-[56px] px-[32px] rounded-[16px] bg-primary text-white font-semibold text-sm uppercase tracking-widest hover:bg-primary/95 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-[10px] shadow-sm"
                >
                  Start Project
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/portfolio"
                  className="h-[56px] px-[32px] rounded-[16px] border border-border bg-white text-foreground font-semibold text-sm uppercase tracking-widest hover:bg-surface transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-[10px]"
                >
                  View Work
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="relative h-[480px] hidden lg:block">
            <FloatingMockup />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
