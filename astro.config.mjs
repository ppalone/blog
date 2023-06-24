import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula-soft",
      wrap: true,
    }
  },
  integrations: [vue()]
});
