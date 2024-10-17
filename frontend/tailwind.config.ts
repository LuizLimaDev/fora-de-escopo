import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        linx: {
          purple: "var(--linx-color-purple)",
          orange: "var(--linx-color-orange)",
          white: "var(--linx-color-white)",
          "dark-gray": "var(--linx-color-dark-gray)",
        },
      },
      fontFamily: {
        dosis: ["var(--font-dosis)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
