import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ufancy.netlify.app/",
  integrations: [react(), tailwind(), purgecss(), sitemap()],
});
