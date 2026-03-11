import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#050505",
        "card-bg": "rgba(255,255,255,0.03)",
        border: "rgba(255,255,255,0.08)",
        "primary-accent": "#6366f1",
        "secondary-accent": "#7c3aed",
        "text-primary": "#f8fafc",
        "text-muted": "#94a3b8",
      },
    },
  },
  plugins: [],
};

export default config;
