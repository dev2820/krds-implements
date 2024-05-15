import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '@krds/utils': path.resolve(__dirname, 'packages/utils/'),
      '@krds/react': path.resolve(__dirname, 'packages/react/'),
    },
  },
});
