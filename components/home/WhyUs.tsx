"use client";

import { Zap, Lightbulb, Eye, BarChart2, Layers, HeartHandshake } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work in structured sprints to ship projects efficiently without compromise.",
    color: "#2563EB",
  },
  {
    icon: Lightbulb,
    title: "Creative Integrity",
    description: "We build fully original interfaces in Figma and code them cleanly from scratch.",
    color: "#6366F1",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Real-time Slack workspace check-ins and shared boards to keep you aligned.",
    color: "#F97316",
  },
  {
    icon: BarChart2,
    title: "Performance Focus",
    description: "Strict optimization for search indexation speeds and conversion layout design.",
    color: "#2563EB",
  },
  {
    icon: Layers,
    title: "Flexible Systems",
    description: "Fully custom Next.js architectures that grow and scale alongside your team.",
    color: "#6366F1",
  },
  {
    icon: HeartHandshake,
    title: "Partner Approach",
    description: "Ongoing support and long-term advice to adapt your system as goals shift.",
    color: "#F97316",
  },
];

export default function WhyUs() {
  return (
    <section className="py-[180px] bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-custom">
        {/* Header (Section Heading to Cards spacing: mb-[64px]) */}
        <div className="max-w-[650px] mb-[64px]">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Values</p>
          </FadeUp>
          {/* H2 title strictly scaling to 56px */}
          <AnimatedText
            text="Why Work With Nova Studio"
            className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[28px]"
            delay={0.1}
          />
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7]">
              We focus on premium visual design, modern web standards, and absolute transparency. Here is how we build trust.
            </p>
          </FadeUp>
        </div>

        {/* Horizontal Card Layout (Strict p-10 (40px) card padding, card radius 28px) */}
        <div className="space-y-[24px]">
          {reasons.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.05}>
              <motion.div
                className="relative rounded-[28px] border border-border bg-white shadow-premium p-10 group hover:shadow-floating transition-all duration-300"
                whileHover={{ x: 6 }}
              >
                <div className="flex flex-col md:flex-row gap-[24px] md:items-center justify-between">
                  <div className="flex items-center gap-[24px]">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}08` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 leading-snug">{item.title}</h3>
                      <p className="text-muted text-sm leading-[1.7] max-w-[550px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Standardized decorative check tag */}
                  <span className="text-[10px] uppercase font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/10 tracking-widest block text-center md:inline-block">
                    Standard Practice
                  </span>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
