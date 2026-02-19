# 開発進捗

## ステータス凡例
- `[ ]` 未着手
- `[WIP]` 作業中
- `[x]` 完了

---

## フェーズ1：プロジェクトセットアップ

- [x] `create-next-app` でプロジェクト作成（Next.js 15 + TypeScript + Tailwind）
- [x] 不要なボイラープレートの削除
- [x] `@next/mdx`, `gray-matter`, `remark-gfm`, `rehype-highlight` インストール
- [x] `@vercel/blob` インストール
- [x] `next.config.ts` の設定（MDX + 画像ドメイン）
- [x] ディレクトリ構成の作成

## フェーズ2：MDX読み込み基盤

- [x] `lib/types.ts` 型定義作成
- [x] `lib/mdx.ts` 実装（getAllPosts / getPostBySlug / getAllSlugs / getAllTags）
- [x] サンプル記事（`posts/example.mdx`）作成

## フェーズ3：UIコンポーネント

- [x] `components/layout/Header.tsx`
- [x] `components/layout/Footer.tsx`
- [x] `components/ui/TagBadge.tsx`
- [x] `components/post/PostCard.tsx`
- [x] `components/post/PostList.tsx`
- [x] `components/post/PostBody.tsx`（MDXカスタムマッピング含む）

## フェーズ4：ページ実装

- [x] `app/layout.tsx`（ルートレイアウト）
- [x] `app/page.tsx`（記事一覧）
- [x] `app/posts/[slug]/page.tsx`（記事詳細）
- [x] `app/tags/[tag]/page.tsx`（タグ別一覧）

## フェーズ5：SEO・メタデータ

- [x] `generateMetadata` で各ページのOGP設定
- [x] `opengraph-image` の設定

## フェーズ6：Vercelデプロイ

- [x] GitHubリポジトリ作成・push
- [x] Vercelプロジェクト作成・連携
- [ ] `BLOB_READ_WRITE_TOKEN` 環境変数設定
- [x] 動作確認

---

## メモ・決定事項

- 記事は `/posts/*.mdx` で管理、git push で公開
- 画像は Vercel Blob にアップして URL を MDX 内で参照
- 管理画面・認証なし
