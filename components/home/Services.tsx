"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Code, Palette } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import Link from "next/link";

const mainServices = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performance, beautifully custom-crafted Next.js marketing websites and complex web applications built from scratch with React and TypeScript. We optimize bundle sizes and code structures for clean responsive rendering.",
    color: "#2563EB",
    tag: "Core Engine",
    href: "/services/web-development",
    graphic: (
      <div className="w-full h-80 rounded-[28px] border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="w-4/5 h-2/3 rounded-xl bg-white border border-border/85 p-5 flex flex-col justify-between shadow-premium translate-y-6">
          <div className="flex gap-1.5 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-16 h-2 bg-border rounded-sm" />
          </div>
          <div className="h-2 w-full bg-primary/5 rounded-sm border border-primary/10" />
          <div className="h-10 w-full bg-surface border border-border rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Increase organic traffic and ranking keywords through mapping user intent, in-depth keyword analysis, and rigorous technical page audits. We build custom directory schemas and structure semantic markup to help bots index your details.",
    color: "#2563EB",
    tag: "Visibility",
    href: "/services/seo",
    graphic: (
      <div className="w-full h-80 rounded-[28px] border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="w-4/5 h-2/3 rounded-xl bg-white border border-border/85 p-5 flex flex-col justify-between shadow-premium translate-y-6">
          <div className="h-6 w-1/3 bg-border rounded-lg" />
          <div className="flex gap-1 items-end h-16 pt-2">
            {[3, 5, 4, 7, 6, 9].map((h, i) => (
              <div key={i} className="flex-1 bg-primary rounded-sm" style={{ height: `${h * 10}%` }} />
            ))}
          </div>
          <div className="h-2 w-full bg-border/60 rounded-sm" />
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Visual identity frameworks, custom typography schemes, style guidelines, and color palettes that make your company stand out. We organize SVG assets and code variables in sync with Figma layouts.",
    color: "#2563EB",
    tag: "Design",
    href: "/services/branding",
    graphic: (
      <div className="w-full h-80 rounded-[28px] border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center text-2xl shadow-premium text-primary mx-auto mb-4">
            ✦
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Nova Identity System</p>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Heading to Cards spacing: mb-[64px] */}
        <div className="max-w-[650px] mb-[64px]">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Services</p>
          </FadeUp>
          {/* H2 title scaling to 56px, gap to paragraph = 32px */}
          <AnimatedText
            text="Solutions Built for Digital Performance"
            className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[32px]"
            delay={0.1}
          />
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7]">
              We design and code clean, custom digital solutions tailored to help businesses establish a robust, high-performance web presence.
            </p>
          </FadeUp>
        </div>

        {/* Alternating flow with 128px spacing gaps */}
        <div className="space-y-[128px]">
          {mainServices.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 gap-[40px] items-center"
              >
                {/* Content Left or Right based on index */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <FadeUp>
                    <span className="px-3.5 py-1.5 rounded-full border border-border bg-surface text-primary text-[9px] uppercase tracking-widest font-bold mb-[24px] inline-block">
                      {service.tag}
                    </span>
                  </FadeUp>

                  <FadeUp delay={0.1}>
                    <h3 className="text-[36px] font-bold text-foreground mb-[24px] heading-lg tracking-tight leading-none">
                      {service.title}
                    </h3>
                  </FadeUp>

                  {/* Paragraph -> CTA gap = 40px */}
                  <FadeUp delay={0.2}>
                    <p className="text-muted text-[20px] leading-[1.7] mb-[40px] max-w-[580px]">
                      {service.description}
                    </p>
                  </FadeUp>

                  {/* Button Height: 56px, Horizontal Padding: 32px, Radius: 16px */}
                  <FadeUp delay={0.3}>
                    <Link
                      href={service.href}
                      className="h-[56px] px-[32px] rounded-[16px] border border-border bg-white text-foreground hover:bg-surface transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-[10px] font-bold text-xs uppercase tracking-widest"
                    >
                      Explore Service
                      <ArrowUpRight size={14} className="text-primary" />
                    </Link>
                  </FadeUp>
                </div>

                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <FadeUp delay={0.2}>
                    {service.graphic}
                  </FadeUp>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
