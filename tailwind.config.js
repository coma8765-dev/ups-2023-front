const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Aeroport", ...defaultTheme.fontFamily.sans],
      body: ["Aeroport", ...defaultTheme.fontFamily.sans],
      squartiqa: ["Squartiqa4F", ...defaultTheme.fontFamily.mono],
      "squartiqa-light": ["Squartiqa4FUltraLight", ...defaultTheme.fontFamily.mono]
    },
    colors: {
      aeroport: "#B42A40",
      medium: "#CA7B34",
      bold: "#101820",
      grey: "#BEBEBE",
      grey2: "#5C5C5C",
      white: "#FFF",
      zone: "#1D2731",
      zone2: "#161D24",
      input: "#1E1E1E",
    },
    extend: {
      fontFamily: {
        sans: ["Aeroport", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        default: "url(\"../assets/img/background.png\")",
        button: "url(\"../assets/img/button-bg.png\")",
      },
      screens: {
        "llg": "1648px",
        "lllg": "1800px",
      }
    },
  },
  plugins: [],
}
