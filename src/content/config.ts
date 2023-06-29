import { z, defineCollection, reference } from "astro:content"

// blogs collection
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    folder: reference("folders").default("uncategorized"),
    draft: z.boolean().default(false),
  })
})

// folders collection
const folders = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
  })
})

export const collections = {
  blogs,
  folders
}