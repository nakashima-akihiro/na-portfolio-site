import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostMeta, Post } from "./types";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): PostMeta[] {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      tags: (data.tags as string[]) ?? [],
      coverImage: data.coverImage as string | undefined,
    } satisfies PostMeta;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    coverImage: data.coverImage as string | undefined,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
