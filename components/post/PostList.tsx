import { PostCard } from "./PostCard";
import type { PostMeta } from "@/lib/types";

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] p-12 text-center">
        <p className="text-sm text-[var(--color-text-subtle)]">
          まだ投稿がありません。
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
