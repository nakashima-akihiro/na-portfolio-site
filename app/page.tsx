import { getAllPosts } from "@/lib/mdx";
import { PostList } from "@/components/post/PostList";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main
      className="mx-auto w-full px-6 py-12"
      style={{ maxWidth: "var(--max-width-content)" }}
    >
      {/* Hero section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Apps I&apos;ve Built
        </h1>
        <p className="mt-3 text-base text-[var(--color-text-muted)] leading-relaxed">
          自分で開発したアプリをまとめています。技術スタックや制作背景も紹介しています。
        </p>
      </section>

      {/* Post list */}
      <PostList posts={posts} />
    </main>
  );
}
