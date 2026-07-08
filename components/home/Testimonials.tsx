"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Helix Finance",
    text: "Nova Studio completely transformed our digital presence. In 6 months, our organic traffic grew by 320% and we went from page 5 to #1 on Google for our main keyword. The ROI has been extraordinary.",
    rating: 5,
    avatar: "SM",
    color: "#2563EB",
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Founder",
    company: "Luminary Store",
    text: "We hired Nova Studio for a Shopify rebuild and SEO strategy. Best decision we've made. Revenue from organic search doubled in 4 months. Their attention to detail and communication is unmatched.",
    rating: 5,
    avatar: "JO",
    color: "#FF7A00",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Zenith Realty",
    text: "The branding work Nova delivered completely elevated our market positioning. We went from being 'just another agency' to the premium choice in our city. Lead quality has increased dramatically.",
    rating: 5,
    avatar: "PS",
    color: "#2563EB",
  },
  {
    id: 4,
    name: "Marcus Chen",
    role: "Co-Founder",
    company: "Apex SaaS",
    text: "From the initial strategy call to launch day, Nova Studio was exceptional. They built our entire digital ecosystem — website, SEO, paid ads. We hit our 12-month user targets in just 5 months.",
    rating: 5,
    avatar: "MC",
    color: "#FF7A00",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 section-heading">
          <div>
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold spacing-eyebrow-heading">Client Love</p>
            </FadeUp>
            <AnimatedText
              text="What Our Clients Say About Us"
              className="heading-lg text-4xl md:text-5xl text-foreground content-width-heading"
              delay={0.1}
            />
          </div>

          {/* Controls */}
          <FadeUp delay={0.2}>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-muted hover:text-foreground hover:border-black/20 hover:bg-surface transition-all duration-300 shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-muted hover:text-foreground hover:border-black/20 hover:bg-surface transition-all duration-300 shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 spacing-card-card">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.id}-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative card-radius p-8 border transition-all duration-500 shadow-premium ${
                i === 0
                  ? "border-primary/20 bg-card"
                  : "border-black/5 bg-card/60"
              }`}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-6 right-6 opacity-5"
                style={{ color: t.color }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted text-sm leading-relaxed mb-8">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm leading-none mb-1">{t.name}</p>
                  <p className="text-muted text-[10px] uppercase font-semibold">{t.role} at {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
            >
              <div
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  background: i === current ? "#2563EB" : "rgba(0,0,0,0.1)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
