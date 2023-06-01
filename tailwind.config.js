/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "660px",
        md: "750px",
        xl: "990px",
        "2xl": "1240px",
        "3xl": "1496px",
      },
    },
  },
  plugins: [],
};
