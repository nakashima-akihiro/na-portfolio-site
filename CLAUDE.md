# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

自分が開発したアプリを投稿形式で紹介する個人向けの公開マイクロブログ。管理画面・認証なし。

## コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# Lint
npm run lint

# 型チェック
npx tsc --noEmit
```

## アーキテクチャ

### 記事管理の仕組み

記事は `/posts/*.mdx` に置いたファイルが唯一の情報源。`lib/mdx.ts` が `gray-matter` でフロントマターをパースし、`@next/mdx` でレンダリングする。全ページ SSG（`generateStaticParams`）。git push → Vercel 自動デプロイで公開。

### データフロー

```
/posts/*.mdx → lib/mdx.ts → app/ (page.tsx) → components/post/PostBody.tsx
```

### MDXフロントマター仕様

```yaml
---
title: "アプリ名"
date: "2024-01-01"
description: "アプリの概要説明"
tags: ["React", "Next.js"]
coverImage: "https://xxxx.public.blob.vercel-storage.com/cover.png"  # 任意
---
```

### 画像

Vercel Blob にアップロードしてURLをMDX内で直接参照する。`next/image` の `remotePatterns` に `*.public.blob.vercel-storage.com` を設定済み。

### ルーティング

| パス | 説明 |
|------|------|
| `/` | 全記事一覧（新しい順） |
| `/posts/[slug]` | 記事詳細（slugはMDXファイル名） |
| `/tags/[tag]` | タグ別記事一覧 |

### 主要な lib 関数（`lib/mdx.ts`）

- `getAllPosts()` — 全記事メタデータを日付降順で返す
- `getPostBySlug(slug)` — slug指定で記事1件（本文含む）を返す
- `getAllSlugs()` — `generateStaticParams` 用
- `getAllTags()` — タグ一覧

### 型定義（`lib/types.ts`）

```ts
type PostMeta = { slug, title, date, description, tags, coverImage? }
type Post = PostMeta & { content: string }
```

## 環境変数

| 変数名 | 説明 |
|--------|------|
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob のアクセストークン（Vercel ダッシュボードで取得） |

## ドキュメント

実装時は必ず `docs/` を参照し、設計との整合性を保つこと。

- `docs/requirement.md` — 要件定義
- `docs/architecture.md` — ディレクトリ構成・設計詳細
- `docs/tech-stack.md` — パッケージ一覧・`next.config.ts` 設定例
- `docs/components.md` — コンポーネントのProps・lib関数仕様
- `docs/progress.md` — 開発フェーズ別チェックリスト

## 進捗管理

タスクが完了したら `docs/progress.md` の該当チェックボックスを `[x]` に更新すること。
