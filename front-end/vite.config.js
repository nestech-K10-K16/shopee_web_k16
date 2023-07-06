import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 5173 },
  esbuild: {
    loader: 'jsx',
    include: ['src/**/*.jsx', 'src/**/*.tsx'],
  },
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
});
