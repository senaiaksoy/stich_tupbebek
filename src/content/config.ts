import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date().optional(),
    lastModified: z.date().optional(),
    author: z.string().default('tupbebek.com Yayın Kurulu'),
    medicalReviewer: z.string().default('tupbebek.com Yayın Kurulu'),
    reviewDate: z.date().optional(),
    category: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
