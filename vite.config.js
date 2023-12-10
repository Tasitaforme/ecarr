import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.jsx/*.js',
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  base: '/ecarr/',
});
