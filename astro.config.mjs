import { defineConfig } from "astro/config";
// Import /static for a static site
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  // Internationalization
  // i18n: {
  //   defaultLocale: "es",
  //   locales: ["es", "en"],
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },

  // },
  // Must be 'static' or 'hybrid'
  output: "server",
  adapter: vercel(),
});
