# UI Design Researcher — Memory

## このプロジェクト
- Next.js (App Router) + Tailwind CSS v4 を使用した個人向けアプリ紹介ブログ
- ルート: `/Users/nakashima/dev/line-ticket-app/`
- MDX記事: `/posts/*.mdx`（現在は `example.mdx` のみ）

## 実装済みデザインシステム (2026-02)

詳細は `design-system.md` を参照。

### カラートークン（globals.css の :root）
- `--color-text: #111827` / `--color-text-muted: #6b7280` / `--color-text-subtle: #9ca3af`
- `--color-bg: #ffffff` / `--color-bg-subtle: #f9fafb` / `--color-bg-muted: #f3f4f6`
- `--color-border: #e5e7eb`
- `--color-accent: #2563eb`（blue-600）
- `--max-width-content: 52rem`

### フォント
- Inter (Google Fonts) を `--font-inter` として layout.tsx で読み込み
- body に `font-family: var(--font-inter, var(--font-sans))` を適用

### 参考サイトとポイント
- **antfu.me**: Inter フォント、dot grid パターン、clean layout、tracking-tight 大見出し
- **spotlight.tailwindui.com**: sticky blur header、letter-spacing: -1.2px の h1
- **vercel.com/blog**: card border + subtle shadow、neutral palette

## Tailwind CSS v4 の注意点
- `@theme inline` ブロック内で CSS 変数を自己参照すると循環参照になる
  - NG: `--font-sans: var(--font-sans)`
  - OK: `@theme inline` は使わず body に直接 `font-family: var(--font-inter)` を記述
- Tailwind v4 では `max-w-[var(--xxx)]` 構文が使えないことがある → `style={{ maxWidth: "var(--xxx)" }}` で inline style を使う

## コンポーネントのサーバー/クライアント境界
- PostCard などのサーバーコンポーネントでは `onMouseEnter` は使えない
- hover エフェクトは `.post-card:hover` などグローバル CSS クラスで実装する

## 変更ファイル一覧（デザインリニューアル）
- `app/globals.css` — デザイントークン、prose override、card hover CSS
- `app/layout.tsx` — Geist → Inter フォントに変更
- `app/page.tsx` — Hero section 追加
- `app/posts/[slug]/page.tsx` — back link、cover image、description blockquote
- `app/tags/[tag]/page.tsx` — back link、tag pill badge
- `components/layout/Header.tsx` — sticky blur、ロゴアイコン
- `components/layout/Footer.tsx` — bg-subtle、サブテキスト追加
- `components/post/PostCard.tsx` — date format、hover、relative link trick
- `components/post/PostList.tsx` — empty state 改善
- `components/ui/TagBadge.tsx` — pill style、accent hover
