/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#582759",
        greenDarker: "#1A5319",
        greenDark: "#508D4E",
        greenMedium: "#80AF81",
        greenLight: "#D6EFD8",
      },
      fontFamily: {
        assistant: ["Assistant"],
      },
      fontWeight: {
        bold: "600",
        bolder: "700",
        extrabold: "800",
      },
    },
    screens: {
      lg: "1000px",
    },
  },
  plugins: [],
};
