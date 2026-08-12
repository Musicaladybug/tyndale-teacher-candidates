import { withBase } from "@/lib/basePath";

export type BlogCardProps = {
  /** CSS gradient string for the thumbnail banner. */
  gradient: string;
  /** Top-border accent color class, e.g. "border-t-gold". */
  topBorder: string;
  date: string;
  title: string;
  preview: string;
  href?: string;
};

export default function BlogCard({
  gradient,
  topBorder,
  date,
  title,
  preview,
  href = "#",
}: BlogCardProps) {
  return (
    <a
      href={withBase(href)}
      className={`group flex h-full flex-col overflow-hidden rounded-card border-t-4 bg-white shadow-card transition hover:shadow-card-hover ${topBorder}`}
    >
      <div
        aria-hidden="true"
        className="aspect-video w-full"
        style={{ background: gradient }}
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-bold uppercase tracking-wide text-red">
          {date}
        </span>
        <h3 className="mt-2 text-lg font-bold text-navy group-hover:underline">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {preview}
        </p>
      </div>
    </a>
  );
}
