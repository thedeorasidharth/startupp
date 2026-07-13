"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, TrendingUp, Zap, CheckCircle2, Star, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/common/MagneticButton";

function GridPattern() {
  return (
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
  );
}

/* ─── Mini sparkline bars ─── */
function SparkBars({ values, color = "#2563EB" }: { values: number[]; color?: string }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-[3px] h-8">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8 + i * 0.05, duration: 0.4, ease: "easeOut" }}
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            opacity: i === values.length - 1 ? 1 : 0.35 + (i / values.length) * 0.45,
            transformOrigin: "bottom",
          }}
          className="w-2 rounded-sm"
        />
      ))}
    </div>
  );
}

/* ─── Circular progress ring ─── */
function ScoreRing({ score, size = 52, stroke = 5 }: { score: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#E5E7EB" strokeWidth={stroke} fill="none" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        stroke="#2563EB" strokeWidth={stroke} fill="none"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: circ - dash }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ─── The premium hero visual ─── */
function HeroVisual() {
  const projects = [
    { name: "Luminary Store", type: "E-Commerce", status: "Live", color: "bg-emerald-500" },
    { name: "Helix Platform", type: "SaaS", status: "Live", color: "bg-blue-500" },
    { name: "Zenith Dashboard", type: "Analytics", status: "In Review", color: "bg-violet-500" },
  ];

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* ── Soft ambient glow behind the stack ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[380px] bg-primary/8 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-violet-500/6 rounded-full blur-[60px]" />
      </div>

      {/* ═══════════════════════════════════════
          MAIN CARD — Website / App Preview
      ═══════════════════════════════════════ */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
        style={{ filter: "drop-shadow(0 32px 64px rgba(15,23,42,0.12))" }}
      >
        {/* Browser chrome */}
        <div className="w-full max-w-[440px] bg-white rounded-[20px] overflow-hidden border border-border/60">
          {/* Title bar */}
          <div className="h-9 bg-[#F8F9FC] border-b border-border/60 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 mx-3 h-5 bg-white border border-border rounded-md flex items-center px-2 gap-1.5">
              <Globe size={8} className="text-muted/60" />
              <span className="text-[9px] text-muted font-medium">novastudio.io/client-portal</span>
            </div>
            <div className="w-3 h-3 rounded-sm bg-primary/10 flex items-center justify-center">
              <Zap size={6} className="text-primary" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-[#FAFBFD] p-4 space-y-3">
            {/* Top nav of inner app */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex gap-1">
                {["Overview", "Projects", "Analytics"].map((t, i) => (
                  <div
                    key={t}
                    className={`px-2.5 py-1 rounded-md text-[9px] font-semibold ${
                      i === 0 ? "bg-primary text-white" : "text-muted"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center">
                  <span className="text-[7px] text-white font-bold">NS</span>
                </div>
              </div>
            </div>

            {/* Metric row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Projects Live", value: "14", delta: "+3", up: true },
                { label: "Avg. PageSpeed", value: "98", delta: "+4", up: true },
                { label: "Client NPS", value: "94%", delta: "+2%", up: true },
              ].map((m) => (
                <div key={m.label} className="bg-white rounded-xl border border-border/60 p-2.5">
                  <p className="text-[8px] text-muted font-medium mb-1">{m.label}</p>
                  <p className="text-sm font-bold text-foreground leading-none">{m.value}</p>
                  <div className="flex items-center gap-0.5 mt-1">
                    <TrendingUp size={7} className="text-emerald-500" />
                    <span className="text-[7px] text-emerald-600 font-semibold">{m.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="bg-white rounded-xl border border-border/60 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] font-semibold text-foreground">Revenue Growth</p>
                <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full">↑ 28% MoM</span>
              </div>
              <div className="flex items-end gap-1.5 h-14">
                {[32, 45, 38, 60, 52, 74, 68, 85, 78, 96, 88, 100].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + i * 0.04, duration: 0.5, ease: "easeOut" }}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${v}%`,
                      background: i === 11
                        ? "linear-gradient(180deg, #2563EB 0%, #6366F1 100%)"
                        : `rgba(37,99,235,${0.15 + (i / 12) * 0.25})`,
                      transformOrigin: "bottom",
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
                  <span key={m} className="text-[7px] text-muted">{m}</span>
                ))}
              </div>
            </div>

            {/* Projects list */}
            <div className="space-y-1.5">
              {projects.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-2.5 bg-white rounded-xl border border-border/50 px-3 py-2"
                >
                  <div className={`w-1.5 h-8 rounded-full ${p.color} opacity-80`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold text-foreground truncate">{p.name}</p>
                    <p className="text-[8px] text-muted">{p.type}</p>
                  </div>
                  <span className={`text-[7px] font-bold px-2 py-0.5 rounded-full ${
                    p.status === "Live"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}>{p.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          FLOATING CARD 1 — PageSpeed score
      ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.92)",
          boxShadow: "0 16px 48px rgba(15,23,42,0.14), 0 0 0 1px rgba(229,231,235,0.8)",
        }}
        className="absolute -left-14 top-10 w-[168px] rounded-2xl p-3.5 z-20 hidden xl:block"
      >
        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap size={12} className="text-primary" />
            </div>
            <p className="text-[10px] font-bold text-foreground">PageSpeed</p>
          </div>
          <div className="flex items-center gap-3">
            <ScoreRing score={98} size={48} stroke={4} />
            <div>
              <p className="text-xl font-bold text-foreground leading-none">98</p>
              <p className="text-[9px] text-emerald-600 font-semibold mt-0.5">↑ Excellent</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════
          FLOATING CARD 2 — SEO / Traffic
      ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.92)",
          boxShadow: "0 16px 48px rgba(15,23,42,0.14), 0 0 0 1px rgba(229,231,235,0.8)",
        }}
        className="absolute -left-10 bottom-20 w-[172px] rounded-2xl p-3.5 z-20 hidden xl:block"
      >
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[10px] font-bold text-foreground">Organic Traffic</p>
            <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full">↑ 42%</span>
          </div>
          <SparkBars values={[28, 35, 30, 45, 40, 52, 48, 61, 55, 72]} />
          <div className="flex items-end justify-between mt-1.5">
            <div>
              <p className="text-base font-bold text-foreground leading-none">24.6K</p>
              <p className="text-[8px] text-muted mt-0.5">monthly sessions</p>
            </div>
            <BarChart3 size={14} className="text-primary opacity-50" />
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════
          FLOATING CARD 3 — Client rating
      ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.94)",
          boxShadow: "0 16px 48px rgba(15,23,42,0.12), 0 0 0 1px rgba(229,231,235,0.8)",
        }}
        className="absolute right-2 -bottom-4 w-[182px] rounded-2xl p-3.5 z-20"
      >
        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-[10px] font-semibold text-foreground mb-0.5">"Delivered on time, flawlessly."</p>
          <p className="text-[8px] text-muted mb-2.5">— Marcus T., Helix Platform</p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {["#2563EB", "#6366F1", "#F97316"].map((c, i) => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <p className="text-[8px] text-muted font-medium">+47 happy clients</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════
          FLOATING BADGE — Live indicator
      ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.3 }}
        className="absolute top-6 right-4 z-30"
      >
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
          style={{
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 4px 16px rgba(15,23,42,0.10), 0 0 0 1px rgba(229,231,235,0.8)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-700">3 Projects Live</span>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          FLOATING BADGE — Task complete
      ═══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 xl:translate-x-5 z-30"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 12px 32px rgba(15,23,42,0.12), 0 0 0 1px rgba(229,231,235,0.8)",
          }}
          className="rounded-2xl px-3.5 py-3 w-[148px]"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
            <p className="text-[10px] font-bold text-foreground">Sprint Complete</p>
          </div>
          <div className="w-full bg-border/50 rounded-full h-1.5 mb-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              className="bg-gradient-to-r from-primary to-violet-500 h-1.5 rounded-full"
            />
          </div>
          <p className="text-[8px] text-muted">Luminary launch — 100%</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section id="home" className="relative min-h-[calc(100vh-92px)] flex items-center overflow-hidden bg-background scroll-mt-[90px]">
      <GridPattern />

      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/4 rounded-full blur-[100px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* ── LEFT: Text content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 badge-custom bg-white border border-border shadow-sm text-xs text-muted spacing-eyebrow-heading font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Building Digital Brands That People Remember
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="heading-xl text-[44px] md:text-[58px] lg:text-[68px] xl:text-[76px] text-foreground spacing-heading-paragraph content-width-hero-heading tracking-tight leading-none font-bold"
            >
              We Build{" "}
              <span className="relative inline-block">
                <span className="text-primary">Bespoke</span>
              </span>{" "}
              Digital Experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-muted text-[18px] md:text-[20px] leading-[1.7] spacing-paragraph-cta content-width-paragraph font-medium"
            >
              From custom SEO mapping and high-performance Web Development to
              original Figma Brand Strategies, we construct elegant systems for
              digital positioning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link
                  href="#contact"
                  className="px-8 btn-custom btn-radius bg-primary text-white font-semibold text-xs uppercase tracking-widest hover:bg-primary/95 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5 shadow-sm"
                >
                  Start Project
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="#portfolio"
                  className="px-8 btn-custom btn-radius border border-border bg-white text-foreground font-semibold text-xs uppercase tracking-widest hover:bg-surface transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5"
                >
                  View Work
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-5 mt-10 pt-8 border-t border-border"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100", label: "PageSpeed Score" },
                { value: "5★", label: "Client Rating" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[22px] font-bold text-foreground leading-none">{value}</p>
                  <p className="text-[11px] text-muted font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Premium visual ── */}
          <div className="relative h-[520px] hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
