"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 flex items-center ${
          scrolled
            ? "bg-[rgba(248,249,252,0.8)] backdrop-blur-xl border-b border-border h-[80px] shadow-premium"
            : "bg-transparent h-[90px]"
        }`}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span
              className="text-xl font-bold tracking-tight text-foreground transition-all"
              style={{ fontFamily: "var(--font-clash, 'Inter', sans-serif)" }}
            >
              Nova Studio
            </span>
          </Link>

          {/* Desktop Nav with strict 32px spacing */}
          <nav className="hidden lg:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted hover:text-foreground transition-colors duration-300 underline-anim"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA larger button (height: 56px, horizontal padding: 32px, rounded: 16px) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="h-[56px] px-[32px] inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white rounded-[16px] bg-primary hover:bg-primary/95 transition-all duration-300 shadow-button hover:shadow-primary/30 hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border text-foreground hover:bg-black/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[800] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Zap size={16} className="text-white" fill="white" />
                </div>
                <span className="text-xl font-bold text-foreground">Nova Studio</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-foreground"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 text-2xl font-semibold text-foreground/80 hover:text-foreground border-b border-border transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="p-6">
              <Link
                href="/contact"
                className="block w-full py-4 text-center font-bold text-white rounded-[16px] bg-primary hover:bg-primary/95 transition-all text-sm uppercase tracking-wider shadow-button"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
