import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2e4a3a",
          hover: "#1a201c",
          subtle: "#e4ece5",
        },
        bg: {
          primary: "#eae6dd",
          secondary: "#e4ece5",
          tertiary: "#e1dacd",
          inverse: "#2e4a3a",
        },
        text: {
          primary: "#1a1f1b",
          secondary: "#4a514b",
          tertiary: "#8a9490",
          "on-dark": "#eae6dd",
        },
        border: {
          default: "#d9d2c5",
          strong: "#2e4a3a",
        },
        pine: {
          cream: "#eae6dd",
          green: "#2e4a3a",
          "green-hover": "#1a201c",
          "green-subtle": "#e4ece5",
          "green-tint": "#e1dacd",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        xs: ["11px", { lineHeight: "1.5" }],
        sm: ["12px", { lineHeight: "1.5" }],
        md: ["13px", { lineHeight: "1.5" }],
        base: ["14px", { lineHeight: "1.6" }],
        lg: ["16px", { lineHeight: "1.6" }],
        xl: ["18px", { lineHeight: "1.6" }],
        "2xl": ["20px", { lineHeight: "1.5" }],
        "3xl": ["22px", { lineHeight: "1.4" }],
        "4xl": ["24px", { lineHeight: "1.4" }],
        "5xl": ["28px", { lineHeight: "1.3" }],
        "6xl": ["32px", { lineHeight: "1.25" }],
        "7xl": ["36px", { lineHeight: "1.2" }],
        "8xl": ["40px", { lineHeight: "1.15" }],
        "9xl": ["42px", { lineHeight: "1.1" }],
        "10xl": ["46px", { lineHeight: "1.1" }],
        "11xl": ["48px", { lineHeight: "1.05" }],
        "12xl": ["56px", { lineHeight: "1.05" }],
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "28": "28px",
        "32": "32px",
        "36": "36px",
        "40": "40px",
        "48": "48px",
        "52": "52px",
        "64": "64px",
        "80": "80px",
        "96": "96px",
        "120": "120px",
        "160": "160px",
        "200": "200px",
      },
      maxWidth: {
        content: "1120px",
        layout: "1440px",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        full: "100px",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      backdropBlur: {
        sm: "4px",
      },
      screens: {
        lg: "1025px",
      },
    },
  },
  plugins: [],
};

export default config;
