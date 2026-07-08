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
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/web-development.png"
          alt="Web Development Dashboard Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
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
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/seo.png"
          alt="SEO Analytics Dashboard Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
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
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/branding.png"
          alt="Branding Presentation Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Heading to Cards spacing: mb-[64px] */}
        <div className="content-width-heading section-heading">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold spacing-eyebrow-heading">Services</p>
          </FadeUp>
          {/* H2 title scaling to 56px, gap to paragraph = 32px */}
          <AnimatedText
            text="Solutions Built for Digital Performance"
            className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground spacing-heading-paragraph"
            delay={0.1}
          />
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7]">
              We design and code clean, custom digital solutions tailored to help businesses establish a robust, high-performance web presence.
            </p>
          </FadeUp>
        </div>

        {/* Alternating flow with 80px spacing gaps */}
        <div className="flex flex-col large-feature-gap">
          {mainServices.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 grid-gap items-center"
              >
                {/* Content Left or Right based on index */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <FadeUp>
                    <span className="badge-custom border border-border bg-surface text-primary text-[9px] uppercase tracking-widest font-bold spacing-eyebrow-heading inline-block">
                      {service.tag}
                    </span>
                  </FadeUp>

                  <FadeUp delay={0.1}>
                    <h3 className="text-[36px] font-bold text-foreground spacing-heading-paragraph heading-lg tracking-tight leading-none">
                      {service.title}
                    </h3>
                  </FadeUp>

                  {/* Paragraph -> CTA gap = 48px */}
                  <FadeUp delay={0.2}>
                    <p className="text-muted text-[20px] leading-[1.7] spacing-paragraph-cta content-width-card">
                      {service.description}
                    </p>
                  </FadeUp>

                  {/* Button Height: 56px, Horizontal Padding: 32px, Radius: 16px */}
                  <FadeUp delay={0.3}>
                    <Link
                      href={service.href}
                      className="px-8 btn-custom btn-radius border border-border bg-white text-foreground hover:bg-surface transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2.5 font-semibold text-xs uppercase tracking-widest"
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
