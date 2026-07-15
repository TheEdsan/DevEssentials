import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        palette: resolve(__dirname, 'tools/color-palette.html'),
        minifier: resolve(__dirname, 'tools/code-minifier.html'),
        shadow: resolve(__dirname, 'tools/box-shadow.html'),
        regex: resolve(__dirname, 'tools/regex-tester.html'),
      },
    },
  },
});
