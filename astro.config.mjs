import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://tupbebek.com',
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    build: {
      minify: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['@astrojs/tailwind'],
          },
        },
      },
    },
  },
});
