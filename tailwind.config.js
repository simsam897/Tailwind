/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/razorpay.html", // Adjust the path to match your HTML location
    "./**/*.js", // Include JS files if you're using Tailwind in JS
    "./**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },

      fontFamily: {
        font: "mullish",
      },
    },
  },
  plugins: [],
};
