import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      '@main': path.resolve(__dirname, './src/@main'),
      src: path.resolve(__dirname, './src'),
      app: path.resolve(__dirname, './src/app'),
    },
  },
  base: './',
  server: {
    port: 3107,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
