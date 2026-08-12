import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date string, e.g. "2026-08-11". */
  date: string;
  excerpt: string;
  /** Optional author line shown on the post page. */
  author?: string;
};

export type Post = PostMeta & {
  /** Rendered HTML of the Markdown body. */
  contentHtml: string;
};

/** Format an ISO date as e.g. "August 11, 2026". Falls back to the raw string. */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function readFileNames(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
}

/** All post metadata, sorted newest first. Cheap — no Markdown rendering. */
export function getSortedPostsMeta(): PostMeta[] {
  return readFileNames()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        author: data.author ? String(data.author) : undefined,
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return readFileNames().map((f) => f.replace(/\.mdx?$/, ""));
}

/** Full post including rendered HTML body. Returns null if the slug doesn't exist. */
export async function getPost(slug: string): Promise<Post | null> {
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath)
    ? mdPath
    : fs.existsSync(mdxPath)
      ? mdxPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    author: data.author ? String(data.author) : undefined,
    contentHtml: processed.toString(),
  };
}
