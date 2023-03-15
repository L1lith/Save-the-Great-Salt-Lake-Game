import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), solidJs()]
});