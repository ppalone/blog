/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro", "./src/**/*.vue"],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Lato", "sans-serif"],
      "mono": ["Fira Code", "Monaco", "Consolas", "monospace"]
    }
  },
  plugins: [],
}

