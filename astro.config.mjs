// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [path.resolve(__dirname, 'src/styles')],
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
