import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
  // Image optimization settings for Astro 4.x
  image: {
    // Use default Sharp service for optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Limit concurrent image optimization operations
        limitInputCount: 500,
        // Cache optimization results
        limitInMemoryCount: 50,
      },
    },
  },
  
  // Vite optimization for faster builds
  vite: {
    ssr: {
      // Ensure image processing works in SSR context
      noExternal: ['astro'],
    },
  },
});
