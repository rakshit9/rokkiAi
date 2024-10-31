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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        'xl': '1rem',     // Custom size example
        '2xl': '1.5rem',  // Another custom size
        '3xl': '2rem'     // Larger custom size
      }
    },
  },
  plugins: [],
};
export default config;
