import type { CollectionEntry } from "astro:content"

export interface Folder {
  data: CollectionEntry<"folders">,
  blogs: CollectionEntry<"blogs">[]
}