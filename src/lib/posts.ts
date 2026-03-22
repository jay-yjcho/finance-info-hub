import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  description?: string;
  updated?: string;
  category?: string;
  tags?: string[];
  content: string;
};

const postsDir = path.join(process.cwd(), "src", "content", "posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description,
        updated: data.updated,
        category: data.category,
        tags: data.tags ?? [],
        content,
      } as Post;
    })
    .sort((a, b) => (a.updated && b.updated ? b.updated.localeCompare(a.updated) : 0));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description,
    updated: data.updated,
    category: data.category,
    tags: data.tags ?? [],
    content,
  } as Post;
}
