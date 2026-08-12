import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getAllSlugs, getPost, formatDate } from "@/lib/posts";
import { withBase } from "@/lib/basePath";

type Params = { slug: string };

// Pre-render a static page for every Markdown file at build time.
export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — School of Ed Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

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
        <article className="container-content max-w-3xl">
          <a
            href={withBase("/blog")}
            className="text-sm font-bold text-navy hover:text-red hover:underline"
          >
            ← Back to blog
          </a>

          <p className="mt-6 text-xs font-bold uppercase tracking-wide text-red">
            {formatDate(post.date)}
          </p>
          <h1 className="mt-2 text-[2.2rem] font-extrabold leading-tight text-navy tc:text-[2.8rem]">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-3 text-sm font-semibold text-ink-soft">
              By {post.author}
            </p>
          )}

          {/* Signature brand stripe as a divider */}
          <div aria-hidden="true" className="mt-6 flex h-1.5 w-full overflow-hidden rounded-full">
            {["bg-gold", "bg-red", "bg-teal", "bg-green", "bg-orange", "bg-navy-light"].map(
              (c, i) => (
                <span key={i} className={`h-full flex-1 ${c}`} />
              ),
            )}
          </div>

          <div
            className="prose prose-lg mt-8 max-w-none prose-headings:text-navy prose-a:text-red prose-strong:text-navy"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
