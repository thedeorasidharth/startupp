"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Code, BarChart2, ShoppingBag, Target, Share2 } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import Link from "next/link";

const mainServices = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "We engineer custom Next.js platforms that combine modular typography with flawless mobile responsiveness. High-performance, clean-coded design structures drive immediate indexing authority while elevating conversion metrics, reflecting your brand’s commitment to technical and visual operational excellence.",
    color: "#2563EB",
    tag: "Core Engine",
    href: "#services",
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
    icon: BarChart2,
    title: "Digital Marketing Consulting",
    description:
      "Through rigorous growth planning and brand audits, we architect transactional growth frameworks. Nova Studio identifies key audience pathways to position your company ahead of standard competitors, maximizing long-term customer acquisition with scalable, high-yielding positioning strategies.",
    color: "#2563EB",
    tag: "Growth",
    href: "#services",
    graphic: (
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/helix.png"
          alt="Fintech Marketing Dashboard Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
      </div>
    ),
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "We construct headless storefronts utilizing secure checkout gateways and inventory tracking. Nova Studio optimizes layout flows to deliver friction-free buyer experiences, unlocking recurring transaction volume and building brand loyalty through design-driven customer pathways.",
    color: "#2563EB",
    tag: "Sales System",
    href: "#services",
    graphic: (
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/luminary.png"
          alt="Headless E-Commerce Storefront Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
      </div>
    ),
  },
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Deploying structured search engine campaigns, we optimize target bidding structures and search parameters. By capturing active user queries, Nova Studio drives maximum return on ad spend, utilizing meticulous conversion tracking pipelines to deliver verifiable revenue growth.",
    color: "#2563EB",
    tag: "Acquisition",
    href: "#services",
    graphic: (
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/zenith.png"
          alt="Google Ads SaaS Campaign Panel Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
      </div>
    ),
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "We elevate search presence through core web vital audits and intent keyword research. Since ranking visibility determines organic reach, our technical optimization models secure top positions, helping your enterprise build sustainable domain authority without paid ads.",
    color: "#2563EB",
    tag: "Visibility",
    href: "#services",
    graphic: (
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/seo.png"
          alt="SEO Technical Audit Analytics Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
      </div>
    ),
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Nova Studio builds editorial content programs that capture active digital communities. Because consistent identity creates industry trust, we curate design assets and manage campaigns, unlocking higher user engagement and turning basic followers into valuable brand advocates.",
    color: "#2563EB",
    tag: "Engagement",
    href: "#services",
    graphic: (
      <div className="w-full h-80 card-radius border border-border bg-card shadow-floating relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <img
          src="/images/branding.png"
          alt="Social Media Visual Brand Board Mockup"
          className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
        />
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden scroll-mt-[90px]">
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
