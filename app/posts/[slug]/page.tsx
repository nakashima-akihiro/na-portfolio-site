import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { PostBody } from "@/components/post/PostBody";
import { TagBadge } from "@/components/ui/TagBadge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      ...(post.coverImage && {
        images: [{ url: post.coverImage, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const formattedDate = new Date(post.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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

      <article>
        {/* Cover image */}
        {post.coverImage && (
          <div className="mb-8 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-muted)]">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Article header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <time
              dateTime={post.date}
              className="text-sm text-[var(--color-text-subtle)]"
            >
              {formattedDate}
            </time>

            {post.tags.length > 0 && (
              <>
                <span className="text-[var(--color-border)]" aria-hidden="true">
                  /
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              </>
            )}
          </div>

          {post.description && (
            <p className="mt-5 text-base text-[var(--color-text-muted)] leading-relaxed border-l-2 border-[var(--color-border)] pl-4">
              {post.description}
            </p>
          )}
        </header>

        {/* Divider */}
        <hr className="mb-10 border-[var(--color-border)]" />

        {/* Article body */}
        <PostBody content={post.content} />
      </article>
    </main>
  );
}
