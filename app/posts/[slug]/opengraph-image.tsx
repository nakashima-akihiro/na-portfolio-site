import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Site label */}
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          na-portfolio-site
        </div>

        {/* Main content */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}
        >
          <h1
            style={{
              fontSize: post.title.length > 30 ? 44 : 56,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: "-0.025em",
            }}
          >
            {post.title}
          </h1>
          {post.description && (
            <p
              style={{
                fontSize: 24,
                color: "#6b7280",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {post.description.length > 80
                ? post.description.slice(0, 80) + "..."
                : post.description}
            </p>
          )}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8 }}>
          {post.tags.slice(0, 5).map((tag) => (
            <div
              key={tag}
              style={{
                background: "#f3f4f6",
                border: "1px solid #e5e7eb",
                borderRadius: 9999,
                padding: "6px 16px",
                fontSize: 18,
                color: "#374151",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
