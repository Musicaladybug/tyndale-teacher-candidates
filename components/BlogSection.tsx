import BlogCard from "./BlogCard";
import { getSortedPostsMeta, formatDate } from "@/lib/posts";

// Cycling visual accents so cards keep varied gradients/borders regardless of count.
const ACCENTS = [
  { topBorder: "border-t-gold", gradient: "linear-gradient(135deg, #EEAA00 0%, #F7D779 100%)" },
  { topBorder: "border-t-red", gradient: "linear-gradient(135deg, #BB2222 0%, #EEAA00 100%)" },
  { topBorder: "border-t-green", gradient: "linear-gradient(135deg, #779900 0%, #221155 100%)" },
];

export default function BlogSection() {
  const posts = getSortedPostsMeta().slice(0, 3);

  return (
    <section id="blog" className="bg-white py-16 tc:py-24">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#137070]">
              Stories
            </span>
            <h2 className="mt-4 text-[2rem] font-extrabold text-navy tc:text-[2.4rem]">
              From the School of Ed blog
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Stories, updates, and advice from faculty, staff, and fellow
              teacher candidates.
            </p>
          </div>
          <a
            href="/blog"
            className="text-sm font-bold text-navy hover:text-red hover:underline"
          >
            Visit the full blog →
          </a>
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 rounded-card border-2 border-dashed border-line p-8 text-center text-ink-soft">
            No posts yet. Add a Markdown file to{" "}
            <code className="font-mono text-navy">content/blog/</code> to publish
            your first post.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {posts.map((post, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <BlogCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  topBorder={accent.topBorder}
                  gradient={accent.gradient}
                  date={formatDate(post.date)}
                  title={post.title}
                  preview={post.excerpt}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
