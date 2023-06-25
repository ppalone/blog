/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro", "./src/**/*.vue"],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["IBM Plex Sans", "sans-serif"],
      "mono": ["Inconsolata", "monospace"]
    }
  },
  plugins: [],
}

