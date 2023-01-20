/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      black: {
        light: "#282C32",
        normal: "#2D2D2D",
        dark: "#0D151D",
      },
      blue: {
        light: "#0182F1",
        normal: "#1C3A54",
        dark: "#1F3E57",
        darkest: "#091E2F",
      },
      warning: {
        light: "#F0AD00",
      },
      grey: {
        dark: "#313131",
      },
      white: "#ffffff",
    },
    textColor: {
      grey: {
        light: "#989898",
        normal: "#6F6F6F",
        dark: "#858585",
      },
      blue: {
        light: "#53A3CF",
        normal: "#0182F1",
        dark: "#003562",
      },
      aegean: {
        light: "#0056A0",
      },
      warning: {
        light: "#F0AD00",
      },
      danger: {
        light: "#D62525",
      },
      success: {
        light: "#17CB49",
      },
      white: {
        light: "#FFFFFF",
      },
      black: {
        dark: "#151515",
      },
    },
    borderColor: {
      primary: {
        light: "#FFFFFF",
      },
      warning: {
        light: "#F0AD00",
      },
      blue: {
        light: "#0182F1",
        normal: "#3B5D7A",
      },
      grey: {
        light: "#6D6D6D",
      },
    },
    placeholderColor: {
      primary: "#0056A0",
    },
    extend: {},
  },
  plugins: [],
};
