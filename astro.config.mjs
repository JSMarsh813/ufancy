import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), purgecss()]
});