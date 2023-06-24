import { z, defineCollection } from "astro:content"

// blogs collection
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false),
  })
})

// info collection
const info = defineCollection({
  type: "content",
})

export const collections = {
  blogs,
  info
}