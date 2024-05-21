/// <reference types="vitest"/>
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
  },
  resolve: {
    alias: { '@': path.resolve('src/') },
  },
  test: {
    environment: 'happy-dom',
  },
});
