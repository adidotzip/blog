import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import { functionsMixins } from "vite-plugin-functions-mixins";

export default defineConfig({
  site: "https://adidotzip.github.io",
  base: "/blog",
  integrations: [svelte()],
  output: "static",
  vite: {
    plugins: [functionsMixins({ deps: ["m3-svelte"] })],
  },
});
