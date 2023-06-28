import { z, defineCollection } from "astro:content"

// blogs collection
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  })
})

export const collections = {
  blogs,
}