import { defineConfig } from "astro/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "node:url";

import db from "@astrojs/db";

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },

  integrations: [db()],
});