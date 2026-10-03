import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(['complete', 'ongoing', 'archived']).default('complete'),
    repo: z.string().url().optional(),
    live: z.string().optional(),
    order: z.number().default(100),
    thumbnail: z.string().optional(),
    badge: z.string().optional(),
  }),
});

export const collections = { projects };
