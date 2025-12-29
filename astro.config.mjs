// @ts-check
import { defineConfig } from 'astro/config';
import tsconfigPaths from "vite-tsconfig-paths";
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  vite: {
    plugins: [
      tsconfigPaths()
    ]
  }
});