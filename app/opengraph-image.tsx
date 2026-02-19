import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "na-portfolio-site";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          justifyContent: "center",
          padding: "80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#111827",
            marginBottom: 40,
          }}
        />
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-0.025em",
          }}
        >
          na-portfolio-site
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#6b7280",
            lineHeight: 1.5,
            margin: "20px 0 0 0",
          }}
        >
          自分が開発したアプリを紹介するブログ
        </p>
      </div>
    ),
    { ...size }
  );
}
