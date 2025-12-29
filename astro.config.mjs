import { defineConfig } from "astro/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "node:url";

import path from "path";
import db from "@astrojs/db";



export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // your aliases should mirror the ones defined in your tsconfig.json
        // i'll re-use the ones in the official docs:
        "@components": path.resolve(path.dirname(''), './src/components'),
        "@assets": path.resolve(path.dirname(''), './src/assets'),
        "@": path.resolve(path.dirname(''), './src/')
      }
    }
  },
  integrations: [db()],
})
