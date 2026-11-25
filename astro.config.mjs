import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://anothermoth.com",
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
  build: { inlineStylesheets: "always" },
  image: { responsiveStyles: false },
});
