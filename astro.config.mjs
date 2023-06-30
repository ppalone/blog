import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    }
  },
  integrations: [
    vue(), 
    tailwind({
      configFile: "./tailwind.config.js"
    })
  ],
  site: "https://blog.ppalone.me/"
});
