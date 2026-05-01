import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        dark: "#2B2724",
        accent: "#C98A8A",
        sale: "#B5453B",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(2.5rem, 6vw, 4.5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
