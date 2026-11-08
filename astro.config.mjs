import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import remarkCallouts from "./src/lib/remark-callouts.mjs";

export default defineConfig({
  site: "https://adidotzip.github.io",
  base: "/blog",
  integrations: [svelte()],
  markdown: {
    remarkPlugins: [remarkCallouts],
  },
  output: "static",
});
