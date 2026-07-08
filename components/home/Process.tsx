"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map out your business objectives, target buyer profiles, competitor landscapes, and site architecture.",
  },
  {
    number: "02",
    title: "Research",
    description: "Digging into keyword intent, search volumes, and conversion patterns to form a solid data strategy.",
  },
  {
    number: "03",
    title: "Planning",
    description: "We plot site maps, wireframe navigation routes, and align on timeline milestones and project scope.",
  },
  {
    number: "04",
    title: "Design",
    description: "Designing bespoke Figma mockups matching your brand parameters. We polish visual details before coding.",
  },
  {
    number: "05",
    title: "Development",
    description: "Coding your pages in Next.js. We implement TypeScript type-safety, clean markup, and optimized assets.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Rigorous responsive testing across browsers, setting up analytics, configuring SEO schema, and go-live.",
  },
];

function StepRow({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="flex gap-[32px] items-start spacing-timeline-step border-b border-border/60 relative group"
    >
      <span className="text-xs font-bold text-primary tracking-widest shrink-0 w-8">
        {step.number}
      </span>

      <div className="flex-1 grid md:grid-cols-[1fr_2fr] gap-[24px]">
        <h3 className="text-[20px] font-bold text-foreground leading-none tracking-tight group-hover:text-primary transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-muted text-sm leading-[1.7] max-w-[500px]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-[40px] items-start">
          
          {/* Left Sticky Panel */}
          <div className="lg:sticky lg:top-32 max-w-[450px] section-heading-sticky">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold spacing-eyebrow-heading">Our Process</p>
            </FadeUp>
            {/* H2 title scaling to 56px, gap to paragraph = 32px */}
            <AnimatedText
              text="Bespoke Design, Strict Development"
              className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground spacing-heading-paragraph leading-none"
              delay={0.1}
            />
            <FadeUp delay={0.25}>
              <p className="text-muted text-[20px] leading-[1.7]">
                We believe in structured execution. Six phases planned, checked, and delivered with total clarity.
              </p>
            </FadeUp>
          </div>

          {/* Right Checklist */}
          <div className="border-t border-border">
            {steps.map((step, i) => (
              <StepRow key={step.number} step={step} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
