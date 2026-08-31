import { defineConfig } from "astro/config";

const site = process.env.SITE_URL?.trim();
const base = process.env.BASE_PATH?.trim();

export default defineConfig({
  output: "static",
  ...(site ? { site } : {}),
  ...(base ? { base } : {})
});
