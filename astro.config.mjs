import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.vetaapp.com',
  base: '/',
  integrations: [tailwind(), react()]
});