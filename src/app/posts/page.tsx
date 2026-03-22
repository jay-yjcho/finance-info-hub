import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">전체 글</h1>
      <p className="mt-2 text-gray-600">금융 관련 정보를 정리한 글 목록입니다.</p>

      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/posts/${post.slug}`} className="text-lg font-medium">
              {post.title}
            </Link>
            {post.description && (
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
            )}
            <div className="mt-2 text-xs text-gray-500">
              {post.updated && <span>업데이트: {post.updated}</span>}
              {post.category && <span className="ml-2">· {post.category}</span>}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
