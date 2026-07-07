import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FC",
        surface: "#FFFFFF",
        card: "#FCFCFD",
        border: "#E5E7EB",
        primary: "#2563EB",
        secondary: "#6366F1",
        accent: "#F97316",
        foreground: "#111827",
        muted: "#6B7280",
      },
      fontFamily: {
        clash: ["var(--font-clash)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "glow-primary": "radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)",
        "glow-secondary": "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)",
        "grid-pattern": "linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "64px 64px",
      },
      boxShadow: {
        "premium": "0 8px 30px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
        "floating": "0 20px 50px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.01)",
        "button": "0 4px 14px rgba(37,99,235,0.12)",
        "card-hover": "0 30px 60px rgba(0,0,0,0.05)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(0.2deg)" },
          "66%": { transform: "translateY(-4px) rotate(-0.2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.02)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
