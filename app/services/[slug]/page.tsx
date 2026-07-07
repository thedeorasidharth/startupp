"use client";

import { use } from "react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import FinalCTA from "@/components/home/FinalCTA";
import { CheckCircle2, Star, ShieldCheck, Zap } from "lucide-react";

const servicesData: Record<
  string,
  {
    title: string;
    description: string;
    benefits: string[];
    features: string[];
    process: { step: string; title: string; desc: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  seo: {
    title: "SEO Optimization",
    description:
      "Increase search visibility, map transactional keyword pathways, and improve code structures for better indexing.",
    benefits: [
      "Improve keyword coverage across target pages",
      "Decrease load latencies and server overhead",
      "Map user intent pathways directly to product actions",
    ],
    features: [
      "Technical Core Web Vitals Audits",
      "Semantic Topic Mapping",
      "Target Directory Structure Optimization",
      "Accessible Semantic HTML Fixes",
    ],
    process: [
      { step: "01", title: "Site Discovery", desc: "Analyzing current indexation, site structure, and page load values." },
      { step: "02", title: "Keyword Audit", desc: "Identifying relevant intent patterns and search trends." },
      { step: "03", title: "Optimization", desc: "Implementing metadata revisions, alt text, and semantic elements." },
    ],
    faqs: [
      { q: "How do you research search parameters?", a: "We target search intent mappings based on actual user query terms and search volumes." },
      { q: "Do you configure technical schema?", a: "Yes, we implement structured JSON-LD schema objects for breadcrumbs, articles, and products." },
    ],
  },
  "web-development": {
    title: "Web Development",
    description: "High-performance marketing platforms and custom interfaces coded in Next.js, React, and TypeScript.",
    benefits: [
      "Sub-second load times using static generation",
      "Tailor-made visual layouts built from scratch",
      "Type-safe typescript parameters for stability",
    ],
    features: [
      "Next.js App Router Architecture",
      "Bespoke Responsive Layouts",
      "Headless CMS Implementations",
      "Optimized Asset & Font Bundles",
    ],
    process: [
      { step: "01", title: "Framer Prototyping", desc: "We structure wireframes and interactive flows in visual screens." },
      { step: "02", title: "Next.js Build", desc: "Coded with type safety, clean classes, and reusable structures." },
      { step: "03", title: "Performance QA", desc: "Verifying load speeds, device responses, and console clarity." },
    ],
    faqs: [
      { q: "What stack do you prefer?", a: "We write Next.js, TypeScript, Tailwind CSS, and Framer Motion for stellar front-end systems." },
      { q: "How do you coordinate with CMS?", a: "We plug headless CMS engines like Sanity, letting your editors modify page content seamlessly." },
    ],
  },
  branding: {
    title: "Creative Branding",
    description: "Cohesive visual guidelines, typography schemes, and brand systems aligned to your business values.",
    benefits: [
      "Cohesive visual styling across digital media",
      "Clean guidelines for designers and developers",
      "Refined aesthetic details that construct trust",
    ],
    features: [
      "Custom Brand Style Guides",
      "Typography Schemes & Font Sets",
      "Interactive Moodboard Planning",
      "SVG Vector Icon Frameworks",
    ],
    process: [
      { step: "01", title: "Brand Identity Workshop", desc: "Identifying your primary audience preferences and core aesthetic keywords." },
      { step: "02", title: "Style Design Mockup", desc: "Creating color sets, font variations, and logotype variations." },
      { step: "03", title: "Guideline Export", desc: "Compiling vector packages, typography variables, and utility style systems." },
    ],
    faqs: [
      { q: "Do you supply SVG source vectors?", a: "Yes, all vector assets are shipped in organized SVG and Figma files." },
      { q: "Can we use these guidelines for prints?", a: "Yes, we define standard print color values (CMYK, Pantone) alongside web hex variables." },
    ],
  },
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug] || servicesData["web-development"];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero (Hero Bottom: pb-[220px]) */}
      <section className="relative pt-[180px] pb-[220px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-45" />
        
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-[16px]">Service Details</p>
          </FadeUp>
          {/* H1 style: text-[72px] */}
          <AnimatedText
            text={service.title}
            className="heading-xl text-[40px] md:text-[56px] lg:text-[72px] text-foreground mb-[28px] max-w-[850px] mx-auto"
            delay={0.1}
          />
          {/* Paragraph style: text-[20px] leading-[1.7] */}
          <FadeUp delay={0.25}>
            <p className="text-muted text-[20px] leading-[1.7] max-w-[650px] mx-auto">
              {service.description}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-[180px] bg-white border-t border-border">
        <div className="container-custom grid md:grid-cols-2 gap-[40px] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-[16px]">Pillars</p>
            {/* H2 style: text-[56px] */}
            <h2 className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-[28px]">Service Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-muted text-[20px] leading-[1.7]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[24px]">
            {/* Card padding p-10 (40px) */}
            <div className="p-10 rounded-[28px] bg-card border border-border">
              <Star className="text-primary mb-4" size={24} />
              <p className="text-foreground font-bold text-lg">Custom Layout</p>
              <p className="text-muted text-xs mt-1 leading-[1.7]">Coded from scratch for target intent.</p>
            </div>
            <div className="p-10 rounded-[28px] bg-card border border-border">
              <Zap className="text-secondary mb-4" size={24} />
              <p className="text-foreground font-bold text-lg">Clean Speed</p>
              <p className="text-muted text-xs mt-1 leading-[1.7]">Core Web Vitals optimized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="py-[180px] border-t border-border bg-background">
        <div className="container-custom">
          {/* Section Heading to Cards spacing: mb-[64px] */}
          <div className="text-center max-w-[650px] mx-auto mb-[64px]">
            {/* H2 style: text-[56px] */}
            <h2 className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-4">Core Deliverables</h2>
            <p className="text-muted text-[20px] leading-[1.7]">Structured work packages handled in detail by our development team.</p>
          </div>
          {/* Grid Gap: 40px, 4 cols lg, 2 cols md, 1 col sm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
            {service.features.map((feature, i) => (
              <div key={i} className="p-10 rounded-[28px] bg-card border border-border shadow-premium flex flex-col justify-between">
                <div>
                  <ShieldCheck className="text-primary mb-4" size={24} />
                  <h3 className="text-foreground font-bold text-base mb-2 leading-snug">{feature}</h3>
                </div>
                <p className="text-muted text-xs leading-[1.7] mt-4">Custom front-end and structure task mapped to your specific code framework.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process list */}
      <section className="py-[180px] bg-white border-t border-border">
        <div className="container-custom">
          {/* Section Heading to Cards spacing: mb-[64px] */}
          <div className="text-center max-w-[650px] mx-auto mb-[64px]">
            {/* H2 style: text-[56px] */}
            <h2 className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-4">Work Process</h2>
            <p className="text-muted text-[20px] leading-[1.7]">Three custom-mapped execution phases ensuring project coordination.</p>
          </div>
          {/* Grid Gap: 40px */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {service.process.map((p, i) => (
              <div key={i} className="p-10 rounded-[28px] bg-card border border-border relative shadow-premium">
                <span className="absolute top-4 right-6 text-3xl font-bold text-black/5">{p.step}</span>
                <h3 className="text-foreground font-bold text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-muted text-sm leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-[180px] border-t border-border bg-background">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-[64px]">
            {/* H2 style: text-[56px] */}
            <h2 className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-[24px]">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-10 rounded-[28px] bg-card border border-border shadow-premium">
                <p className="text-foreground font-bold mb-2 text-lg leading-snug">{faq.q}</p>
                <p className="text-muted text-sm leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
