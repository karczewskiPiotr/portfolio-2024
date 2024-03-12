import svgToTinyDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
// @ts-ignore
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          925: "rgb(20 20 20 / <alpha-value>)",
        },
        copper: {
          900: "rgb(14 165 233 / <alpha-value>)",
          950: "rgb(14 165 233 / <alpha-value>)",
        },
        black: {
          DEFAULT: "rgb(255 255 255 / <alpha-value>)",
          950: "rgb(150 150 150 /<alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
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
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};
export default config;
