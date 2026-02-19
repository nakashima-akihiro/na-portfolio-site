import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white/80 backdrop-blur-md">
      <div
        className="mx-auto flex h-14 items-center justify-between px-6"
        style={{ maxWidth: "var(--max-width-content)" }}
      >
        {/* Logo / Site name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--color-text)] transition-opacity hover:opacity-70"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-text)] text-white text-xs font-bold select-none">
            A
          </span>
          na-portfolio-site
        </Link>

        {/* Nav */}
        <nav>
          <Link
            href="/"
            className="rounded-md px-3 py-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text)]"
          >
            All Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
