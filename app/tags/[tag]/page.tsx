import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/mdx";
import { PostList } from "@/components/post/PostList";

type Props = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const description = `${tag} に関連するアプリの一覧`;
  return {
    title: `#${tag}`,
    description,
    openGraph: {
      title: `#${tag}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `#${tag}`,
      description,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getAllPosts().filter((p) => p.tags.includes(tag));

  return (
    <main
      className="mx-auto w-full px-6 py-12"
      style={{ maxWidth: "var(--max-width-content)" }}
    >
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8.5 3L5 7l3.5 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All Posts
      </Link>

      <section>
        <div className="mb-8 flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
            Tag
          </h1>
          <span className="rounded-[var(--radius-pill)] border border-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-3 py-0.5 text-sm font-medium text-[var(--color-accent)]">
            {tag}
          </span>
          <span className="text-sm text-[var(--color-text-subtle)]">
            {posts.length} 件
          </span>
        </div>

        <PostList posts={posts} />
      </section>
    </main>
  );
}
