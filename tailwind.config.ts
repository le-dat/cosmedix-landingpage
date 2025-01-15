import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f4f4",
        brown: "#434343",
        "light-brown": "#585858",
        "medium-brown": "#6B6356",
        foreground: "hsl(0, 0%, 3.9%)",
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 3.9%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 3.9%)",
        },
        primary: {
          DEFAULT: "hsl(0, 0%, 9%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 96.1%)",
          foreground: "hsl(0, 0%, 9%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 96.1%)",
          foreground: "hsl(0, 0%, 45.1%)",
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 96.1%)",
          foreground: "hsl(0, 0%, 9%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84.2%, 60.2%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        border: "hsl(0, 0%, 89.8%)",
        input: "hsl(0, 0%, 89.8%)",
        ring: "hsl(0, 0%, 3.9%)",
        chart: {
          "1": "hsl(12, 76%, 61%)",
          "2": "hsl(173, 58%, 39%)",
          "3": "hsl(197, 37%, 24%)",
          "4": "hsl(43, 74%, 66%)",
          "5": "hsl(27, 87%, 67%)",
        },
      },
      fontFamily: {
        'ppNeueMontreal': 'ppNeueMontreal',
      },
      borderRadius: {
        lg: "0.5rem", // Equivalent to --radius
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
