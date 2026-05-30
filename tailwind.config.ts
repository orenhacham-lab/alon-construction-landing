import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-assistant)", "system-ui", "sans-serif"],
      },
      colors: {
        // צבעי המותג - נגזרים מהלוגו (עץ בגוון טורקיז-כחול על רקע לבן)
        navy: {
          DEFAULT: "#0F2A47",
          50: "#EEF3F8",
          100: "#D6E2EE",
          200: "#AEC5DC",
          300: "#7E9FC2",
          400: "#4E769F",
          500: "#2E567F",
          600: "#1C3E63",
          700: "#13314F",
          800: "#0F2A47",
          900: "#0A1E34",
          950: "#06121F",
        },
        teal: {
          DEFAULT: "#1CA3B8",
          50: "#ECFCFF",
          100: "#CFF6FB",
          200: "#A2EBF4",
          300: "#67D9E8",
          400: "#34C2D6",
          500: "#1CA3B8",
          600: "#188297",
          700: "#19697A",
          800: "#1C5664",
          900: "#1B4856",
          950: "#0B2F3A",
        },
        sky: {
          brand: "#4C86B8",
        },
        // נגיעות ירוקות עדינות (תואם לעץ שבלוגו)
        leaf: {
          DEFAULT: "#2FAE7E",
          light: "#46C795",
        },
        ink: "#1B2733",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 42, 71, 0.08), 0 6px 24px -8px rgba(15, 42, 71, 0.12)",
        card: "0 4px 18px -6px rgba(15, 42, 71, 0.12), 0 12px 40px -12px rgba(15, 42, 71, 0.14)",
        "card-hover": "0 10px 30px -8px rgba(15, 42, 71, 0.20), 0 24px 60px -16px rgba(28, 163, 184, 0.18)",
        cta: "0 10px 25px -6px rgba(28, 163, 184, 0.45)",
        "inner-top": "inset 0 1px 0 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0A1E34 0%, #0F2A47 45%, #13314F 100%)",
        "teal-gradient": "linear-gradient(135deg, #1CA3B8 0%, #34C2D6 100%)",
        "hero-radial": "radial-gradient(ellipse at 70% 20%, rgba(28,163,184,0.22), transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(76,134,184,0.18), transparent 50%)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
