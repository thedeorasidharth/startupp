"use client";

import { useState } from "react";
import { MessageCircle, Mail, Send } from "lucide-react";
import { AnimatedText, FadeUp } from "@/components/common/AnimatedText";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", business: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-surface relative overflow-hidden scroll-mt-[90px]">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Asymmetrical Layout: Left channels (1), Right Form (1.5), Grid Gap: 40px */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] grid-gap items-start">

          {/* Left Column: Direct channels */}
          <div className="flex flex-col grid-gap">
            <div>
              <FadeUp>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold spacing-eyebrow-heading">Contact Us</p>
              </FadeUp>
              {/* H2 title scaling to 56px, gap to paragraph = 32px */}
              <AnimatedText
                text="Let's Build Something Amazing."
                className="heading-lg text-[32px] md:text-[44px] lg:text-[56px] text-foreground spacing-heading-paragraph"
                delay={0.1}
              />
              <FadeUp delay={0.2}>
                <p className="text-muted text-[20px] leading-[1.7] max-w-[400px]">
                  Have an upcoming project or idea? Connect directly with our development and design team.
                </p>
              </FadeUp>
            </div>

            {/* Channels List (Card to Card gap = 32px) */}
            <div className="flex flex-col spacing-card-card">
              {/* WhatsApp */}
              <FadeUp delay={0.3}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-500/5 flex items-center justify-center shrink-0 border border-green-500/10">
                    <MessageCircle size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted text-sm mb-3">Instant chat response within minutes.</p>
                    <a
                      href="https://wa.me/9119266316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-green-500 hover:text-green-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      Chat Now ➜
                    </a>
                  </div>
                </div>
              </FadeUp>

              {/* Email */}
              <FadeUp delay={0.4}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted text-sm mb-3">Project brief outlines replied within 24h.</p>
                    <a
                      href="mailto:hello@novastudio.com"
                      className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5"
                    >
                      Send Inquiry ➜
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <FadeUp delay={0.2}>
            <div className="rounded-[32px] border border-[#E8ECF4] bg-white p-8 md:p-10 lg:p-12 shadow-[0_25px_70px_rgba(15,23,42,0.08)] overflow-hidden">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Send size={22} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-[30px] font-bold text-foreground leading-none">
                    Let's Talk
                  </h3>

                  <p className="text-muted mt-2 text-[15px] leading-7 max-w-md">
                    Tell us about your project. We'll review your requirements and
                    get back to you within 24 hours.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 mt-8 mb-10" />

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Rivera"
                      className="w-full h-14 rounded-2xl border border-[#E8ECF4] bg-[#FAFBFD] px-5 text-[15px] text-foreground placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full h-14 rounded-2xl border border-[#E8ECF4] bg-[#FAFBFD] px-5 text-[15px] text-foreground placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white"
                    />
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-14 rounded-2xl border border-[#E8ECF4] bg-[#FAFBFD] px-5 text-[15px] text-foreground placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="block mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Company
                    </label>

                    <input
                      id="business"
                      type="text"
                      value={formData.business}
                      onChange={(e) =>
                        setFormData({ ...formData, business: e.target.value })
                      }
                      placeholder="Nova Studio"
                      className="w-full h-14 rounded-2xl border border-[#E8ECF4] bg-[#FAFBFD] px-5 text-[15px] text-foreground placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white"
                    />
                  </div>

                </div>

                {/* Service */}

                <div>

                  <label
                    htmlFor="service"
                    className="block mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-14 rounded-2xl border border-[#E8ECF4] bg-[#FAFBFD] px-5 appearance-none text-[15px] outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22none%22%3E%3Cpath%20d=%22M7%209l3%203%203-3%22%20stroke=%22%236B7280%22%20stroke-width=%221.5%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_20px_center] bg-[length:18px]"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Website Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="branding">Brand Identity</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="video">Video Editing</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>

                </div>

                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="block mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your project, goals, timeline, or any specific requirements..."
                    className="w-full min-h-[180px] rounded-2xl border border-[#E8ECF4] bg-[#FAFBFD] px-5 py-4 text-[15px] text-foreground placeholder:text-muted/50 outline-none resize-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white"
                  />

                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold uppercase tracking-[0.18em] shadow-[0_18px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(37,99,235,0.45)] flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Send Project Inquiry
                </button>

                <p className="text-center text-xs text-muted">
                  🔒 Your information is secure. We never share your details.
                </p>

              </form>

            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
