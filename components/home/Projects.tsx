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
  },
  {
    id: 2,
    title: "Luminary Store",
    category: "E-Commerce Experience",
    description: "Built a fully custom storefront integrated with headless catalog APIs, optimizing mobile performance metrics.",
    tags: ["Next.js", "Framer Motion", "Headless E-Com"],
    color: "#2563EB",
  },
  {
    id: 3,
    title: "Zenith Workspace",
    category: "SaaS Dashboard Layout",
    description: "Created a minimalist analytics tool layout with dark/light themes, focusing on accessible interface controls.",
    tags: ["Figma Mockups", "TypeScript", "Tailwind"],
    color: "#2563EB",
  },
];

export default function Projects() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Header (Section Heading to Cards spacing: mb-[64px]) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px] mb-[64px]">
          <div className="max-w-[650px]">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Featured Work</p>
            </FadeUp>
            {/* H2 title strictly scaling to 56px, gap to paragraph/next = 32px */}
            <AnimatedText
              text="Projects We Have Crafted"
              className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[32px]"
              delay={0.1}
            />
          </div>
          <FadeUp delay={0.3}>
            <Link
              href="/portfolio"
              className="h-[56px] px-[32px] rounded-[16px] border border-border bg-white text-foreground hover:bg-surface transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-[10px] font-bold text-xs uppercase tracking-widest mb-[40px] md:mb-0"
            >
              View Portfolio
              <ArrowUpRight size={14} className="text-primary" />
            </Link>
          </FadeUp>
        </div>

        {/* Projects Grid (Card -> Card gap = 32px (gap-8)) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.1}>
              <div className="rounded-[28px] border border-border bg-card overflow-hidden shadow-premium hover:shadow-floating transition-all duration-300 flex flex-col h-full">
                
                {/* Large visual mockup display */}
                <div
                  className="h-64 relative flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}08, ${project.color}03)` }}
                >
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  
                  {/* High fidelity mockup sketch panel */}
                  <div className="w-[85%] h-5/6 rounded-t-xl bg-white border border-border/85 p-4 flex flex-col justify-between shadow-floating translate-y-12">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-2 h-2 rounded-full bg-border" />
                      <div className="w-12 h-1.5 bg-border rounded-sm" />
                    </div>
                    <div className="space-y-1.5 pt-2 flex-1">
                      <div className="h-2 w-full bg-primary/5 rounded-sm" />
                      <div className="h-2 w-4/5 bg-border/40 rounded-sm" />
                    </div>
                    <div className="h-6 bg-surface border border-border/60 rounded-md" />
                  </div>
                </div>

                {/* Content Area with strict p-10 (40px) padding */}
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] text-primary font-bold uppercase tracking-widest block mb-[12px]">{project.category}</span>
                    <h3 className="text-[24px] font-bold text-foreground mb-[16px] heading-lg leading-none">{project.title}</h3>
                    <p className="text-muted text-sm leading-[1.7] mb-6">{project.description}</p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    <button
                      className="h-[56px] px-[32px] w-full rounded-[16px] border border-border bg-white text-foreground hover:bg-surface font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-[10px]"
                    >
                      Live Preview
                      <ArrowUpRight size={14} className="text-primary" />
                    </button>
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
