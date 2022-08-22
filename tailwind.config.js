/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", `[data-theme="dark"]`],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
