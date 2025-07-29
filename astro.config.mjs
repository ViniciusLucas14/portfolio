import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: "https://vinicius.vitrinid.com.br",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://vinicius.vitrinid.com.br/sitemap-index.xml",
        "https://vinicius.vitrinid.com.br/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  },
  output: 'static',
  vite: {
    assetsInclude: "**/*.riv",
  },
});
