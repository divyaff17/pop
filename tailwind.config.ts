import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        headline: "hsl(var(--headline))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        button: "var(--shadow-button)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        first: {
          "0%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(30px, -50px)" },
          "66%": { transform: "translate(-20px, 20px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        second: {
          "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(-30px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(30px, 30px) rotate(240deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(360deg)" },
        },
        third: {
          "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(30px, 30px) rotate(-120deg)" },
          "66%": { transform: "translate(-30px, -30px) rotate(-240deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(-360deg)" },
        },
        fourth: {
          "0%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(-40px, 30px)" },
          "66%": { transform: "translate(40px, -30px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        fifth: {
          "0%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(40px, 40px)" },
          "66%": { transform: "translate(-40px, -40px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "rotate-clockwise": {
          "0%": { 
            transform: "rotate(0deg)",
          },
          "100%": { 
            transform: "rotate(360deg)",
          },
        },
        "rotate-counter": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "reveal-card": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "reveal-testimonial": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(240deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(-40px, 40px) rotate(-120deg)" },
          "66%": { transform: "translate(40px, -20px) rotate(-240deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(50px, 30px) rotate(180deg)" },
        },
        "float-4": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-30px, -50px) rotate(-180deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "first 15s ease-in-out infinite",
        second: "second 20s ease-in-out infinite",
        third: "third 18s ease-in-out infinite",
        fourth: "fourth 22s ease-in-out infinite",
        fifth: "fifth 25s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "rotate-clockwise": "rotate-clockwise 20s linear infinite",
        "rotate-counter": "rotate-counter 20s linear infinite",
        "reveal-card": "reveal-card 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-testimonial": "reveal-testimonial 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-1": "float-1 20s ease-in-out infinite",
        "float-2": "float-2 25s ease-in-out infinite",
        "float-3": "float-3 30s ease-in-out infinite",
        "float-4": "float-4 22s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
