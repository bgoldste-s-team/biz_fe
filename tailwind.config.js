/** @type {import('tailwindcss').Config} */
import siteData from "./src/data/site_data.json";

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        pagesake: {
          primary: "#5DD7AB",
          "primary-content": "#1c1c1c",
          secondary: "#e6c3ff",

          accent: "#00ffff",

          neutral: "#ffffff", // becomes 'default'
          // "neutral-content": "#2fffa9",  // becomes 'default' text

          "base-100": "#1c1c1c", //base of application
          "base-content": "#ffffff", //base of text on this

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",
          //
          error: "rgba(255,0,0,0.73)",

          /* Add as many custom properties as you need */
        },
        pagesake2: {
          primary: "#5DD7AB", //affects the mian button color, etc
          "primary-content": "#0f172a",
          secondary: "#ffffff",
          "secondary-content": "#000",

          accent: "#00ffff",

          neutral: "#ffffff", // becomes 'default'
          "neutral-content": "#0f172a", // becomes 'default' text
          "font-family": "Inter", 
        },
        filmReverse: { //bw inverted - needs bg image update
          "base-100": "#000", //base of application
          "base-content": "#fff", //base of text on this
          primary: "#000",
          "primary-content": "#fff",
          secondary: "#fff",
          "secondary-content": "#000",
          neutral: "#fff",
          "neutral-content": "#000",
          "bg-neutral-content": "#fff",
          "font-family": "Noto Serif JP",
        },
        film3: { //same as film?
          "base-100": "#fff", //base of application
          "base-content": "#000", //base of text on this
          primary: "#fff",
          "primary-content": "#000",
          secondary: "#000",
          "secondary-content": "#fff",
          neutral: "#000",
          "neutral-content": "#fff",
          "bg-neutral-content": "#FFF",
          "font-family": "Noto Serif JP",
        },
         film: { //bw 
          "base-100": "#fff", //base of application
          "base-content": "#000", //base of text on this
          primary: "#fff",
          "primary-content": "#000",
          secondary: "#000",
          "secondary-content": "#fff",
          neutral: "#000",
          "neutral-content": "#fff",
          "bg-neutral-content": "#FFF",
          "font-family": "Noto Serif JP",
        },
        oldmoney: {
          "base-100": "#F1EBD6", //base of application
          "base-content": "#22352B", //base of text on this
          primary: "#F1EBD6",
          "primary-content": "#22352B",
          secondary: "#63A153",
          "secondary-content": "#F1EBD6",
          neutral: "#22352B",
          "neutral-content": "#F1EBD6",
          "bg-neutral-content": "#FFF",
          "font-family": "Noto Serif JP",
        },
        oldmoneyINV: {
          "base-100": "#F1EBD6", //base of application
          "base-content": "#22352B", //base of text on this
          primary: "#F1EBD6",
          "primary-content": "#22352B",
          secondary: "#63A153",
          "secondary-content": "#F1EBD6",
          neutral: "#22352B",
          "neutral-content": "#F1EBD6",
          "bg-neutral-content": "#FFF",
          "font-family": "Noto Serif JP",
        },
        dressy: {
          "base-100": "#F5F5F5", //base of application
          "base-content": "#2E2E2E", //dark/base text on base color
          primary: "#F5F5F5", //base of application
          "primary-content": "#2E2E2E", //dark/base text on base color
          secondary: "#BEAC89", //CTA color / splash
          "secondary-content": "#F5F5F5", //base of application
          neutral: "#2E2E2E", //dark/base text on base color
          "neutral-content": "#F5F5F5", //base of application
          "bg-neutral-content": "#FFF",
          "font-family": "Noto Serif JP",
        },
        beachy: {
          "base-100": "#F9FFFD", //base of application
          "base-content": "#222B35", //dark/base text on base color
          primary: "#F9FFFD", //base of application
          "primary-content": "#222B35", //dark/base text on base color
          secondary: "#59C1C7", //CTA color / splash
          "secondary-content": "#F9FFFD", //base of application
          neutral: "#222B35", //dark/base text on base color
          "neutral-content": "#F9FFFD", //base of application
          "bg-neutral-content": "#FFF",
          "font-family": "Noto Serif JP",
        },
        pink: {
          "base-100": "#FCEEEE", //base of application
          "base-content": "#332235", //dark/base text on base color
          primary: "#FCEEEE", //base of application
          "primary-content": "#332235", //dark/base text on base color
          secondary: "#D200BD", //CTA color / splash
          "secondary-content": "#FCEEEE", //base of application
          neutral: "#332235", //dark/base text on base color
          "neutral-content": "#FCEEEE", //base of application
          "bg-neutral-content": "#FFF",
          "font-family": "Inter",
        },
        aqua: {
          //this is the theme that requires additional color for base https://www.figma.com/file/VUpdPoSEixykXKYnw3N6NN?node-id=465:911&mode=design#642672438
          "base-100": "#F2FCF1", //base of application
          "base-content": "#0D201E", //dark/base text on base color
          primary: "#F2FCF1", //base of application
          "primary-content": "#0D201E", //dark/base text on base color
          secondary: "#00B2A8", //CTA color / splash
          "secondary-content": "#F2FCF1", //base of application
          neutral: "#214E49", //dark/base text on base color
          "neutral-content": "#F2FCF1", //base of application
          "bg-neutral-content": "#FFF",
          "font-family": "Inter",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  // daisyui: {
  //   themes: [
  //
  //     {
  //       mytheme: {
  //
  //         "primary": "#a8bcea",
  //
  //         "secondary": "#c067ea",
  //
  //         "accent": "#5329a0",
  //
  //         "neutral": "#242D33",
  //
  //         "base-100": "#2C3149",
  //
  //         "info": "#265AE8",
  //
  //         "success": "#19E173",
  //
  //         "warning": "#C48508",
  //
  //         "error": "#F24640",
  //
  //         // "primary": siteData['color'],
  //       },
  //     },
  //   ],
  // },
};
