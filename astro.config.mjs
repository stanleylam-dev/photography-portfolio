// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stanleylam-dev.github.io',
  base: '/photography-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});