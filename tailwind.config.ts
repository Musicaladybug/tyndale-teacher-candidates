import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Single collapse breakpoint used across the site (~860px).
        tc: "860px",
      },
      colors: {
        navy: "#221155",
        "navy-light": "#3a2b7a",
        gold: "#EEAA00",
        "gold-light": "#F7D779",
        red: "#BB2222",
        ink: "#222222",
        green: "#779900",
        orange: "#CC3311",
        teal: "#33BBBB",
        cream: "#FBF9F4",
        "cream-deep": "#F3EEE0",
        line: "#E4DFD0",
        "ink-soft": "#57534a",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        card: "16px",
        btn: "6px",
      },
      boxShadow: {
        card: "0 8px 22px rgba(34,17,85,0.10)",
        "card-hover": "0 14px 30px rgba(34,17,85,0.16)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
