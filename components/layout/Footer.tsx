export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
      <div
        className="mx-auto flex flex-col items-center gap-1 px-6 py-8 text-center"
        style={{ maxWidth: "var(--max-width-content)" }}
      >
        <p className="text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} na-portfolio-site
        </p>
        <p className="text-xs text-[var(--color-text-subtle)]">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
