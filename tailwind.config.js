/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#14172B",
  secondary: "#ECF0FF",
  tertiary: "#737BAE",
  background: "#14172B",
  up: "#00FFA3",
  down: "#FF4D4D",
  test: "#626A881A",
  btc: "#EAB300",
  sol: "#DC1FFF",
  eth: "#EDF0F4",
  busd: "#F0B90B",
  shib: "#E42D04",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      width: {
        240: "15rem",
        280: "18rem",
        400: "25rem",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
