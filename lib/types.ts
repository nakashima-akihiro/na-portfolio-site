export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
};

export type Post = PostMeta & {
  content: string; // gray-matter が抽出した MDX 本文（フロントマター除去済み）
};
