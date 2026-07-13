"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import MagneticButton from "@/components/common/MagneticButton";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative section-padding overflow-hidden bg-white">
      {/* Soft background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/2 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="container-custom relative z-10 text-center">
        {/* Badge */}
        <FadeUp>
          <div className="inline-flex items-center gap-2 badge-custom bg-surface border border-border shadow-sm text-xs text-muted spacing-eyebrow-heading font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Accepting projects for this quarter
          </div>
        </FadeUp>

        {/* H1 Headline (Heading -> Paragraph gap = 32px) */}
        <AnimatedText
          text="Ready to Build Something Incredible?"
          className="heading-xl text-[40px] md:text-[56px] lg:text-[72px] text-foreground spacing-heading-paragraph content-width-heading mx-auto leading-none tracking-tight font-bold"
          delay={0.1}
        />

        {/* Paragraph (Paragraph -> CTA gap = 48px, max-width = 650px, text size = 20px) */}
        <FadeUp delay={0.35}>
          <p className="text-muted text-[20px] leading-[1.7] content-width-paragraph mx-auto spacing-paragraph-cta font-medium">
            Let's turn your vision into a custom digital experience. Book a free project consultation to discuss your requirements.
          </p>
        </FadeUp>

        {/* CTAs (Height: 56px, Padding: px-[32px], rounded-[16px]) */}
        <FadeUp delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <MagneticButton>
              <Link
                href="#contact"
                className="px-8 btn-custom btn-radius bg-primary text-white font-semibold text-xs uppercase tracking-widest hover:bg-primary/95 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Calendar size={16} />
                Book Consultation
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#portfolio"
                className="px-8 btn-custom btn-radius border border-border bg-white text-foreground font-semibold text-xs uppercase tracking-widest hover:bg-surface transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5"
              >
                View Our Work
              </Link>
            </MagneticButton>
          </div>
        </FadeUp>

        {/* Trust indicators */}
        <FadeUp delay={0.65}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-border">
            {[
              { label: "Bespoke Design", icon: "✓" },
              { label: "Clean Code", icon: "✓" },
              { label: "Direct Support", icon: "✓" },
              { label: "Transparent Milestones", icon: "✓" },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted font-semibold">
                <span className="text-primary font-bold">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
