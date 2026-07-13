"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Helix Platform",
    category: "Fintech Platform",
    description: "Designed a clean, custom design system in Figma and coded the front-end in Next.js, implementing custom responsive dashboards.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    color: "#2563EB",
    image: "/images/helix.png",
  },
  {
    id: 2,
    title: "Luminary Store",
    category: "E-Commerce Experience",
    description: "Built a fully custom storefront integrated with headless catalog APIs, optimizing mobile performance metrics.",
    tags: ["Next.js", "Framer Motion", "Headless E-Com"],
    color: "#2563EB",
    image: "/images/luminary.png",
  },
  {
    id: 3,
    title: "Zenith Workspace",
    category: "SaaS Dashboard Layout",
    description: "Created a minimalist analytics tool layout with dark/light themes, focusing on accessible interface controls.",
    tags: ["Figma Mockups", "TypeScript", "Tailwind"],
    color: "#2563EB",
    image: "/images/zenith.png",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="section-padding bg-background relative overflow-hidden scroll-mt-[90px]">
      <div className="container-custom relative z-10">
        
        {/* Header (Section Heading to Cards spacing: mb-[64px]) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 section-heading">
          <div className="content-width-heading">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold spacing-eyebrow-heading">Featured Work</p>
            </FadeUp>
            {/* H2 title strictly scaling to 56px, gap to paragraph/next = 32px */}
            <AnimatedText
              text="Projects We Have Crafted"
              className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground spacing-heading-paragraph"
              delay={0.1}
            />
          </div>
          <FadeUp delay={0.3}>
            <Link
              href="#portfolio"
              className="px-8 btn-custom btn-radius border border-border bg-white text-foreground hover:bg-surface transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2.5 font-semibold text-xs uppercase tracking-widest mb-10 md:mb-0"
            >
              View Portfolio
              <ArrowUpRight size={14} className="text-primary" />
            </Link>
          </FadeUp>
        </div>

        {/* Projects Grid (Card -> Card gap = 32px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 spacing-card-card">
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.1}>
              <div className="card-radius border border-border bg-card overflow-hidden shadow-premium hover:shadow-floating transition-all duration-300 flex flex-col h-full">
                
                {/* Large visual mockup display */}
                <div className="h-64 relative overflow-hidden bg-muted/5 flex items-center justify-center p-6 border-b border-border/50">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-premium border border-border/40 relative z-10"
                  />
                </div>

                {/* Content Area with strict p-10 (40px) padding */}
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] text-primary font-bold uppercase tracking-widest block spacing-eyebrow-heading">{project.category}</span>
                    <h3 className="text-[24px] font-bold text-foreground spacing-heading-paragraph heading-lg leading-none">{project.title}</h3>
                    <p className="text-muted text-sm leading-[1.7] mb-8">{project.description}</p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold px-3 py-1 rounded-full border border-border bg-surface text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button height: 56px, horizontal padding: 32px, rounded: 16px */}
                    <Link
                      href="#portfolio"
                      className="btn-custom btn-radius px-8 w-full border border-border bg-white text-foreground hover:bg-surface font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5"
                    >
                      Live Preview
                      <ArrowUpRight size={14} className="text-primary" />
                    </Link>
                  </div>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
