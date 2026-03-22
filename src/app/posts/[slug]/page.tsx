import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const html = marked.parse(post.content);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <article>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.description && (
          <p className="mt-2 text-gray-600">{post.description}</p>
        )}
        <div className="mt-4 text-xs text-gray-500">
          {post.updated && <span>업데이트: {post.updated}</span>}
          {post.category && <span className="ml-2">· {post.category}</span>}
        </div>
        <div
          className="prose prose-neutral mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
