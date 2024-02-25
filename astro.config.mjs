import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: "https://xomil.com",
  
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), react()],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: false
    },
  },
});