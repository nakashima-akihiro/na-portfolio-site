# コンポーネント設計

## レイアウト

### `components/layout/Header.tsx`
- サイトタイトル（ロゴ）を表示
- トップページへのリンク

### `components/layout/Footer.tsx`
- コピーライト表示

---

## 記事関連

### `components/post/PostCard.tsx`
一覧ページで使う記事カード。

**Props**
```ts
type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
};
```

**表示内容**
- カバー画像（あれば）
- タイトル
- 日付
- 説明文
- タグバッジ一覧

### `components/post/PostList.tsx`
`PostCard` の一覧表示。グリッドレイアウト。

**Props**
```ts
type PostListProps = {
  posts: PostMeta[];
};
```

### `components/post/PostBody.tsx`
MDXコンテンツのレンダリング。カスタムコンポーネントのマッピングもここで行う。

**カスタムマッピング対象**
- `img` → `next/image` に置き換え
- `pre`, `code` → ハイライト対応コードブロック
- `a` → 外部リンクは `target="_blank"` 付与

---

## UI

### `components/ui/TagBadge.tsx`
タグ表示バッジ。クリックで `/tags/[tag]` へ遷移。

**Props**
```ts
type TagBadgeProps = {
  tag: string;
};
```

---

## lib（ユーティリティ）

### `lib/mdx.ts`

```ts
// 全記事のメタデータ一覧取得
getAllPosts(): PostMeta[]

// slugから記事1件取得（本文含む）
getPostBySlug(slug: string): Post

// 全slugの一覧取得（generateStaticParams用）
getAllSlugs(): string[]

// タグ一覧取得
getAllTags(): string[]
```

### `lib/blob.ts`

```ts
// 画像をVercel Blobにアップロード
uploadImage(file: File): Promise<string>  // URLを返す
```

---

## 型定義

```ts
// lib/types.ts
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
};

export type Post = PostMeta & {
  content: ReactElement; // compileMDX が返す React要素
};
```
