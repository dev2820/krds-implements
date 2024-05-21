import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

console.log(__dirname)
export default defineConfig({
  plugins: [react(), UnoCSS()],
});
