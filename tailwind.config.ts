import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--bg-primary) / <alpha-value>)",
        card: "rgb(var(--bg-card) / <alpha-value>)",
        white: "rgb(var(--bg-card) / <alpha-value>)",
        coral: "rgb(var(--accent-primary) / <alpha-value>)",
        mint: "rgb(var(--accent-secondary) / <alpha-value>)",
        sun: "rgb(var(--accent-secondary) / <alpha-value>)",
        ink: "rgb(var(--text-primary) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        "border-subtle": "rgb(var(--border-subtle) / <alpha-value>)",
        "on-secondary": "rgb(var(--text-on-secondary) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "ui-rounded", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(255,107,139,0.35)",
        pop: "0 6px 0 0 rgba(30,41,59,0.9)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: { float: "float 5s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
