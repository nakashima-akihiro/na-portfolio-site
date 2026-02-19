import Link from "next/link";

export function TagBadge({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${tag}`}
      className="relative z-10 inline-flex items-center rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent)]"
    >
      {tag}
    </Link>
  );
}
