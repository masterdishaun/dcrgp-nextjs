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
        // From Framer tokens
        background: "#f2f3f5",
        foreground: "#081014",
        muted: "#707070",
        border: "#c8c8c8",
        white: "#ffffff",
        "white-alpha": "rgba(255, 255, 255, 0.12)",
        "black-alpha": "rgba(8, 16, 20, 0.12)",
        primary: {
          DEFAULT: "#081014",
          light: "#0810141f",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "3xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "4xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "5xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "6xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.03em",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.25",
        normal: "1.4",
        relaxed: "1.5",
        loose: "2",
        "140": "140%",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0px 16px 24px -10px rgba(8, 16, 20, 0.12)",
        "soft-lg": "0px 32px 48px -12px rgba(8, 16, 20, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};

export default config;
