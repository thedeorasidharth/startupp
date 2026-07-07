"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, X, Globe, Link as LinkIcon, Share2, Send } from "lucide-react";

const services = [
  "Web Development",
  "SEO Optimization",
  "Graphic Design",
  "Social Media",
  "Video Editing",
  "Branding",
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { icon: X, href: "#", label: "Twitter/X" },
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: LinkIcon, href: "#", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-border bg-white overflow-hidden">
      {/* Footer Top: 180px, Footer Bottom: 80px */}
      <div className="container-custom relative z-10 pt-[180px] pb-[80px]">
        {/* Top Grid with 40px grid gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] pb-[64px] border-b border-border">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-[24px]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                <Zap size={20} className="text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-clash, 'Inter', sans-serif)" }}>
                Nova Studio
              </span>
            </Link>
            <p className="text-muted text-sm leading-[1.7] mb-[24px] max-w-[280px]">
              Building digital brands that people remember. Quality, communication, and long-term partnerships.
            </p>
            <div className="flex gap-[8px]">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-black/20 hover:bg-black/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-[24px] uppercase tracking-widest">Services</h4>
            <ul className="space-y-[12px]">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-[24px] uppercase tracking-widest">Company</h4>
            <ul className="space-y-[12px]">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-[24px] uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-muted mb-[16px]">Get the latest insights on digital growth.</p>
            <div className="flex gap-[8px] mb-[24px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
              />
              <button
                onClick={() => setEmail("")}
                className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/95 transition-colors shadow-button"
              >
                <Send size={14} />
              </button>
            </div>
            <div className="space-y-[8px] text-sm text-muted font-medium">
              <p>📧 <a href="mailto:hello@novastudio.com" className="hover:text-foreground transition-colors">hello@novastudio.com</a></p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-[32px] gap-[24px]">
          <p className="text-xs text-muted font-medium">
            © {new Date().getFullYear()} Nova Studio. All rights reserved.
          </p>
          <div className="flex gap-[24px]">
            <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors font-medium">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors font-medium">Terms of Service</Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors font-medium">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
