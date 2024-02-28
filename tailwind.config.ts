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
        copper: {
          900: "rgb(153 118 81 / <alpha-value>)",
          950: "rgb(153 118 88 / <alpha-value>)",
        },
        black: {
          DEFAULT: "rgb(0 0 0 / <alpha-value>)",
          950: "rgb(80 80 80 /<alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jost)"],
        serif: ["var(--font-garamond)"],
      },
      fontSize: {
        "var-5xl": ["clamp(theme(fontSize.5xl),8vw,8vw)", "1.5"],
        "var-4xl": ["clamp(theme(fontSize.4xl),8vw,8vw)", "1.1"],
        "var-xl": ["clamp(theme(fontSize.xl),1.31vw,100vw)", "1.5"],
        "var-lg": ["clamp(theme(fontSize.lg),1.18vw,1.2vw)", "1.5"],
        "var-md": ["clamp(44px,8vw,8vw)", "1.1"],
        "var-base": ["clamp(theme(fontSize.base),1.045vw,1.05vw)", "1.5"],
        "var-sm": ["clamp(theme(fontSize.sm),0.88vw,0.89vw)", "1.5"],
        "var-xs": ["clamp(theme(fontSize.xs),0.755vw,0.76vw)", "1.5"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
