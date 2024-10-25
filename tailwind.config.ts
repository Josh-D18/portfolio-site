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
        primary: "#151515",
        secondary: "#4EE1A0",
        tertiary: "#242424",
        "primary-2": "#d9d9d9",
        "secondary-2": "#FFFFFF"
      },
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
export default config;
