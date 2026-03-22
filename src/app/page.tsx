import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Finance Info Hub</h1>
        <p className="mt-2 text-gray-600">
          금융 정보를 쉽게 이해할 수 있도록 정리하는 블로그입니다.
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-xl font-semibold">최신 글</h2>
        <ul className="space-y-6">
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
      </section>
    </main>
  );
}
