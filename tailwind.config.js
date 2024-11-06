/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Exo 2"', "sans-serif"],
    },
    extend: {
      colors: {
        lavendar: "#E6E6FA",
        "like-lavendar": "#B2B4D5",
        orange: "#F25F2E",
        red: "#F42535",
        black: "#020202",
        cyan: "#50CCDF",
        "electric-plum": "#742E72",
        "matrix-green": "#00FF24",
        "neutral-gray": "#888888",
        "dark-gray": "#444444",
        "dystopian-blue": "#1D1D8C",
      },
      screens: {
        navbarCustom: "1100px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
