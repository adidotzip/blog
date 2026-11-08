import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import remarkCallouts from "./src/lib/remark-callouts.mjs";

export default defineConfig({
  site: "https://blog.adi.rest",
  // A custom domain serves the site from the root, not /blog.
  integrations: [svelte()],
  markdown: {
    remarkPlugins: [remarkCallouts],
  },
  output: "static",
});
