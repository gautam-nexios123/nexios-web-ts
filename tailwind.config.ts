import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        // MuseoSans: ["Museo Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl":
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
      // container: {
      //   center: true,
      //   screens: {
      //     sm: "640px",
      //     md: "768px",
      //     lg: "1024px",
      //     xl: "1140px",
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
