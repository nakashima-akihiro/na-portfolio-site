# Design System — My Apps Blog

## 参考サイト一覧

### Reference 1: antfu.me
- URL: https://antfu.me/projects
- フォント: Inter, 16px, line-height 24px, color #374151
- 背景: dot grid (radial-gradient 24px spacing)
- h1: 36px / font-weight 800
- max-width: prose-max-width (65ch 相当)
- ポイント: 極めてクリーンなレイアウト、大量の余白、細かい dot pattern

### Reference 2: spotlight.tailwindui.com
- URL: https://spotlight.tailwindui.com
- フォント: ui-sans-serif, system-ui
- h1: 48px / font-weight 700 / letter-spacing -1.2px / color oklch(0.274)
- ヘッダー: pill 型ナビ（中央寄せ）
- 背景: oklch(0.985 0 0) ≒ #f9fafb
- ポイント: letter-spacing がきつく締まった見出しが印象的

### Reference 3: vercel.com/blog
- URL: https://vercel.com/blog
- フォント: Geist / Arial, 16px, color #171717
- 背景: #fafafa
- カード: border なし、padding 48px、section 区切りのみ
- ポイント: 極めてシンプルなカード、タイポグラフィで情報を整理

### Reference 4: zenn.dev
- フォント: -apple-system / Hiragino Kaku Gothic ProN, line-height 28.8px (1.8相当)
- color: rgba(0,0,0,0.82) — 真っ黒ではなく少し柔らかい黒
- ポイント: 日本語テキストのline-height は 1.7〜1.8 が読みやすい

## 統合デザイントークン

```css
:root {
  --color-bg: #ffffff;
  --color-bg-subtle: #f9fafb;
  --color-bg-muted: #f3f4f6;
  --color-border: #e5e7eb;
  --color-text: #111827;
  --color-text-muted: #6b7280;
  --color-text-subtle: #9ca3af;
  --color-accent: #2563eb;
  --color-accent-hover: #1d4ed8;
  --color-accent-subtle: #eff6ff;
  --max-width-content: 52rem;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 9999px;
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.05);
  --shadow-card-hover: 0 4px 12px 0 rgb(0 0 0 / 0.10), 0 2px 4px -1px rgb(0 0 0 / 0.06);
}
```

## タイポグラフィ規則

| 要素 | size | weight | color |
|------|------|--------|-------|
| ページ h1 | text-3xl / text-4xl | bold (700) | --color-text |
| カード h2 | text-base | semibold (600) | --color-text |
| body | 1rem (16px) | 400 | --color-text |
| date / meta | text-xs | medium (500) | --color-text-subtle |
| muted text | text-sm | 400 | --color-text-muted |

- 日本語 line-height: 1.75 (body) / 1.5 (見出し)
- 見出しは `tracking-tight` を付ける
