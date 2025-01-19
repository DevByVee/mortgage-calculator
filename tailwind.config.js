/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // For HTML files in the root directory
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "hsl(61, 70%, 52%)",
      },
      screens: {
        xs: { max: "640px" },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"]
      },
    },
    plugins: [],
  },
};
