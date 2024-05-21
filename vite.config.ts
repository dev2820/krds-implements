import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@krds/utils': path.resolve(__dirname, 'packages/utils/'),
      '@krds/react': path.resolve(__dirname, 'packages/react/'),
    },
  },
});
