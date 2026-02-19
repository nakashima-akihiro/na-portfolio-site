# 技術スタック詳細

## コアライブラリ

| パッケージ | バージョン | 用途 |
|-----------|-----------|------|
| next | 15.x | フレームワーク |
| react | 19.x | UIライブラリ |
| typescript | 5.x | 型安全 |
| tailwindcss | 4.x | スタイリング |

## MDX関連

| パッケージ | 用途 |
|-----------|------|
| `next-mdx-remote` | MDXをサーバーサイドで処理・レンダリング（Turbopack対応） |
| `gray-matter` | フロントマター（YAML）のパース |
| `remark-gfm` | GitHub Flavored Markdown対応 |
| `rehype-highlight` | コードブロックのシンタックスハイライト |
| `rehype-slug` | 見出しにID付与 |

## 画像

| パッケージ | 用途 |
|-----------|------|
| `@vercel/blob` | Vercel Blobへの画像アップロード |

## 開発ツール

| パッケージ | 用途 |
|-----------|------|
| `eslint` | Linter |
| `prettier` | フォーマッター |

## 環境変数

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob のアクセストークン | ○ |

## next.config.ts の主な設定

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
```

## MDX処理の仕組み（next-mdx-remote）

`@next/mdx`（webpack loader方式）はTurbopackと非互換のため、`next-mdx-remote`を使用。
MDXファイルは `lib/mdx.ts` で `fs` を使って読み込み、`compileMDX` でサーバーサイドレンダリングする。
remark/rehypeプラグインは `compileMDX` のオプションとして渡す。
