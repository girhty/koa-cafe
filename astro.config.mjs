import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/koa-cafe/',
  output: 'static',
  integrations: [tailwind()],
});