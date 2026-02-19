# アーキテクチャ設計

## ディレクトリ構成

```
/
├── app/
│   ├── layout.tsx          # ルートレイアウト（ヘッダー・フッター）
│   ├── page.tsx            # トップ（記事一覧）
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx    # 記事詳細
│   └── tags/
│       └── [tag]/
│           └── page.tsx    # タグ別一覧
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── post/
│   │   ├── PostCard.tsx    # 一覧カード
│   │   ├── PostList.tsx    # 一覧
│   │   └── PostBody.tsx    # MDXレンダリング
│   └── ui/
│       └── TagBadge.tsx    # タグバッジ
├── lib/
│   ├── mdx.ts              # MDX読み込み・パース処理
│   └── blob.ts             # Vercel Blob操作ユーティリティ
├── posts/                  # MDXファイル（記事本体）
│   └── example.mdx
├── public/
└── docs/                   # 開発ドキュメント（このディレクトリ）
```

## ルーティング

| パス | ファイル | 説明 |
|------|---------|------|
| `/` | `app/page.tsx` | 全記事一覧（新しい順） |
| `/posts/[slug]` | `app/posts/[slug]/page.tsx` | 記事詳細 |
| `/tags/[tag]` | `app/tags/[tag]/page.tsx` | タグ別記事一覧 |

## データフロー

```
/posts/*.mdx
    ↓ lib/mdx.ts（gray-matter でフロントマター解析）
    ↓ next-mdx-remote / @next/mdx でレンダリング
    ↓ PostBody.tsx で表示
```

## MDXフロントマター仕様

```yaml
---
title: "アプリ名"
date: "2024-01-01"
description: "アプリの概要説明"
tags: ["React", "Next.js"]
coverImage: "https://xxxx.vercel-storage.com/cover.png"  # 任意
---
```

## 静的生成（SSG）

- 全ページ `generateStaticParams` で静的生成
- `next build` 時にMDXファイルを読み込んで生成
- 記事追加は git push → Vercel 自動デプロイ

## 画像管理

- Vercel Blob にアップロード
- 取得したURLをMDX内で直接参照
- `next/image` の `remotePatterns` に Vercel Blob のドメインを追加
