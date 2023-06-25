/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro", "./src/**/*.vue"],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["PT Sans", "sans-serif"],
      "mono": ["Inconsolata", "monospace"]
    }
  },
  plugins: [],
}

