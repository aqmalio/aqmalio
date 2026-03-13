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
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#0D0C0A",
        surface: "#161412",
        accent: {
          DEFAULT: "#E8652A",
          hover: "#D4541A",
        },
        fg: {
          DEFAULT: "#EDE7DC",
          2: "#8C8278",
          3: "#5A5450",
        },
      },
    },
  },
  plugins: [],
};

export default config;
