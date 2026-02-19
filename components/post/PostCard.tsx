import Link from "next/link";
import Image from "next/image";
import { TagBadge } from "@/components/ui/TagBadge";
import type { PostMeta } from "@/lib/types";

export function PostCard({
  slug,
  title,
  date,
  description,
  tags,
  coverImage,
}: PostMeta) {
  const formattedDate = new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="post-card group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white">
      {/* Cover image */}
      {coverImage && (
        <div className="relative h-44 w-full overflow-hidden bg-[var(--color-bg-muted)]">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Date */}
        <time
          dateTime={date}
          className="text-xs font-medium tracking-wide text-[var(--color-text-subtle)]"
        >
          {formattedDate}
        </time>

        {/* Title */}
        <h2 className="mt-2 text-base font-semibold leading-snug tracking-tight text-[var(--color-text)]">
          <Link
            href={`/posts/${slug}`}
            className="transition-colors hover:text-[var(--color-accent)] after:absolute after:inset-0"
          >
            {title}
          </Link>
        </h2>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)] line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
