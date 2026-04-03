import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date().optional(),
    lastModified: z.date().optional(),
    author: z.string().default('Doç. Dr. Senai Aksoy'),
    medicalReviewer: z.string().default('Yayın Kurulu'),
    category: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
