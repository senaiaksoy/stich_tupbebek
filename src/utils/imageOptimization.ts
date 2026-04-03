/**
 * Image Optimization Utility
 * Provides presets and helpers for responsive image optimization in Astro 4.x
 */

export type ImageType = 'hero' | 'thumbnail' | 'avatar' | 'badge' | 'medical-illustration' | 'article-feature';

export interface ImagePreset {
  width: number;
  height: number;
  sizes: string;
  loading: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  quality?: number;
}

/**
 * Image optimization presets for common use cases
 * Optimized for medical information website
 */
export const IMAGE_PRESETS: Record<ImageType, ImagePreset> = {
  // Hero images: LCP element, should load eagerly
  hero: {
    width: 1200,
    height: 600,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
    loading: 'eager',
    fetchpriority: 'high',
    quality: 85,
  },

  // Thumbnail images: small, lazy loaded
  thumbnail: {
    width: 300,
    height: 200,
    sizes: '(max-width: 640px) 100px, (max-width: 1024px) 150px, 300px',
    loading: 'lazy',
    fetchpriority: 'low',
    quality: 75,
  },

  // User/doctor avatars: small, circular
  avatar: {
    width: 100,
    height: 100,
    sizes: '(max-width: 640px) 48px, 64px',
    loading: 'lazy',
    fetchpriority: 'low',
    quality: 80,
  },

  // Prestige badges: decorative, small
  badge: {
    width: 200,
    height: 200,
    sizes: '(max-width: 640px) 96px, (max-width: 1024px) 128px, 200px',
    loading: 'lazy',
    fetchpriority: 'low',
    quality: 70,
  },

  // Medical illustrations: large, important for understanding
  'medical-illustration': {
    width: 600,
    height: 400,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 600px',
    loading: 'lazy',
    fetchpriority: 'auto',
    quality: 85,
  },

  // Article feature images: prominent but not hero
  'article-feature': {
    width: 800,
    height: 450,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 800px',
    loading: 'lazy',
    fetchpriority: 'auto',
    quality: 80,
  },
};

/**
 * Get image attributes for optimization
 * Returns all necessary attributes for optimal image loading
 */
export function getImageAttributes(type: ImageType, alt: string) {
  const preset = IMAGE_PRESETS[type];
  return {
    loading: preset.loading,
    fetchpriority: preset.fetchpriority || 'auto',
    sizes: preset.sizes,
    decoding: 'async' as const,
    alt,
    style: {
      aspectRatio: `${preset.width}/${preset.height}`,
    },
  };
}

/**
 * Check if LCP optimization should be applied
 */
export function isLCPImage(type: ImageType): boolean {
  return ['hero', 'article-feature'].includes(type);
}
