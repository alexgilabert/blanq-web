import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://alexgilabert.github.io',
  base: '/blanq-web',
  integrations: [tailwind(), react()]
});