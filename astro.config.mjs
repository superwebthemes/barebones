import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // change this to your own domain
  site: "https://barebones.superwebthemes.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
