import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import Markdown from "markdown-it";

export const get: APIRoute = async (ctx) => {
  const blogs = await getCollection("blogs", ({ data }) => {
    return data.draft === false
  })
  const parser = Markdown();
  return rss({
    title: "Pranjal's Blog RSS Feed",
    description: "👨‍🚀 Pranjal's digital garden 🌱",
    site: ctx.site.toString(),
    items: blogs.map(blog => ({
      link: `/blogs/${blog.slug}`,
      title: blog.data.title,
      description: blog.data.description,
      pubDate: new Date(blog.data.date),
      content: parser.render(blog.body)
    })),
  })
}