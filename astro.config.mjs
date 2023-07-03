import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import remarkFlexibleCode from "remark-flexible-code-titles";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    remarkPlugins: [remarkFlexibleCode]
  },
  integrations: [
    vue(), 
    tailwind({
      configFile: "./tailwind.config.js"
    })
  ],
  site: "https://blog.ppalone.me/"
});
