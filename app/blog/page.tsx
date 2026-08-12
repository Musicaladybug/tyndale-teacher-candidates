import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsMeta, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Teacher Candidates, Tyndale University",
  description:
    "Stories, updates, and advice from faculty, staff, and fellow teacher candidates.",
};

const ACCENTS = [
  { topBorder: "border-t-gold", gradient: "linear-gradient(135deg, #EEAA00 0%, #F7D779 100%)" },
  { topBorder: "border-t-red", gradient: "linear-gradient(135deg, #BB2222 0%, #EEAA00 100%)" },
  { topBorder: "border-t-green", gradient: "linear-gradient(135deg, #779900 0%, #221155 100%)" },
  { topBorder: "border-t-teal", gradient: "linear-gradient(135deg, #33BBBB 0%, #221155 100%)" },
];

export default function BlogIndexPage() {
  const posts = getSortedPostsMeta();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-navy focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="h-[10px] w-full bg-black" />
      <SiteHeader />

      <main id="main" className="bg-cream py-16 tc:py-24">
        <div className="container-content">
          <span className="inline-block rounded-full bg-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#137070]">
            Stories
          </span>
          <h1 className="mt-4 text-[2.4rem] font-extrabold text-navy tc:text-[3rem]">
            From the School of Ed blog
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Stories, updates, and advice from faculty, staff, and fellow teacher
            candidates.
          </p>

          {posts.length === 0 ? (
            <p className="mt-10 rounded-card border-2 border-dashed border-line p-8 text-center text-ink-soft">
              No posts yet. Add a Markdown file to{" "}
              <code className="font-mono text-navy">content/blog/</code> to
              publish your first post.
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
      </main>

      <SiteFooter />
    </>
  );
}
