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
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "sans-serif"],
        serif: ["CabinetGrotesk-Variable", "CabinetGrotesk-Bold", "sans-serif"],
        heading: ["CabinetGrotesk-Variable", "CabinetGrotesk-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

