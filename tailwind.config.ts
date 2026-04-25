import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان الأساسية للهوية المالية
        ink: {
          950: "#040810",
          900: "#07111F",
          800: "#0A1628",
          700: "#102036",
          600: "#1A2D47",
        },
        navy: {
          DEFAULT: "#0A2540",
          light: "#143153",
          dark: "#06192E",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C45C",
          dark: "#A8861A",
          glow: "#F5D77A",
        },
        electric: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
        },
        bull: "#22C55E",
        bear: "#EF4444",
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-arabic)", "system-ui", "sans-serif"],
        display: ["var(--font-cairo)", "var(--font-ibm-arabic)", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":
          "linear-gradient(135deg, #D4AF37 0%, #F5D77A 50%, #A8861A 100%)",
        "gradient-navy":
          "linear-gradient(180deg, #07111F 0%, #0A2540 100%)",
        "grid-pattern":
          "linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212, 175, 55, 0.15)",
        "gold-strong": "0 0 60px rgba(212, 175, 55, 0.25)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        ticker: "ticker 60s linear infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
