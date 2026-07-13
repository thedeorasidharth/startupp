"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";
import Link from "next/link";

const faqs = [
  {
    q: "How long does a typical web project take?",
    a: "Custom front-end projects usually take 3 to 6 weeks depending on page count. We map milestones in wireframes before coding.",
  },
  {
    q: "What technical stack do you develop on?",
    a: "We develop on React frameworks, primarily Next.js with TypeScript and Tailwind CSS, coupled with headless CMS integrations (like Sanity) for flexible editor usage.",
  },
  {
    q: "Do you build custom designs or use templates?",
    a: "We code 100% custom layouts. Every graphic asset is styled specifically for your audience, ensuring a premium result.",
  },
  {
    q: "How do we coordinate during development?",
    a: "We maintain shared boards and have bi-weekly check-ins. You will always have a direct line to our development squad.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeUp delay={index * 0.05}>
      <div className="border-b border-border/60">
        <button
          className="w-full flex items-center justify-between spacing-accordion text-left group"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className={`text-[20px] font-semibold transition-colors duration-300 pr-8 ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
            {faq.q}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              open ? "bg-primary/10 rotate-0" : "bg-black/5 rotate-0"
            }`}
          >
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
              <Plus size={16} className={open ? "text-primary" : "text-muted"} />
            </motion.div>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: "hidden" }}
            >
              <p className="pb-6 text-muted text-sm leading-[1.7] content-width-paragraph">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden scroll-mt-[90px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-[40px] items-start">
          {/* Left Sticky Panel */}
          <div className="lg:sticky lg:top-32 max-w-[450px] section-heading-sticky">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold spacing-eyebrow-heading">FAQ</p>
            </FadeUp>
            {/* H2 title scaling strictly to 56px, gap to paragraph = 32px */}
            <AnimatedText
              text="Common Questions About Our Work"
              className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground spacing-heading-paragraph"
              delay={0.1}
            />
            <FadeUp delay={0.25}>
              <p className="text-muted text-[20px] leading-[1.7] spacing-paragraph-cta">
                Learn about how we collaborate, our standard design timelines, and how we handle development setups.
              </p>
            </FadeUp>
            {/* Button height: 56px, horizontal px-8 */}
            <FadeUp delay={0.4}>
              <Link
                href="#contact"
                className="px-8 btn-custom btn-radius border border-border bg-white text-foreground font-semibold text-xs uppercase tracking-widest hover:bg-surface transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2.5"
              >
                Ask a Question
              </Link>
            </FadeUp>
          </div>

          {/* Right Accordion Minimal Lists */}
          <div className="border-t border-border/60">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
