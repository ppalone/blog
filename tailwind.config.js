/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.astro", "./src/**/*.vue"],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Outfit", "sans-serif"],
      "mono": ["Fira Code", "Monaco", "Consolas", "monospace"]
    }
  },
  plugins: [],
}

