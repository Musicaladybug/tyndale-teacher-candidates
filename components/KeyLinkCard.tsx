import { withBase } from "@/lib/basePath";

export type AccentColor = "gold" | "red" | "teal" | "green" | "orange" | "navy";

export type MiniLink = { label: string; href: string };

export type KeyLinkCardProps = {
  accent: AccentColor;
  icon: string;
  title: string;
  description: string;
  /** Single call-to-action link (mutually exclusive with miniLinks). */
  linkText?: string;
  href?: string;
  /** A stacked list of small links instead of a single CTA. */
  miniLinks?: MiniLink[];
  /** Visual variant. "urgent" = tinted support card; "placeholder" = dashed, non-clickable. */
  variant?: "default" | "urgent" | "placeholder";
};

// Full class strings so Tailwind's JIT can see them (no runtime concatenation of color names).
const ACCENT: Record<
  AccentColor,
  { topBorder: string; badge: string; link: string }
> = {
  gold: { topBorder: "border-t-gold", badge: "bg-gold/15 text-[#7a5800]", link: "text-[#7a5800]" },
  red: { topBorder: "border-t-red", badge: "bg-red/10 text-red", link: "text-red" },
  teal: { topBorder: "border-t-teal", badge: "bg-teal/15 text-[#137070]", link: "text-[#137070]" },
  green: { topBorder: "border-t-green", badge: "bg-green/15 text-[#4d6600]", link: "text-[#4d6600]" },
  orange: { topBorder: "border-t-orange", badge: "bg-orange/10 text-orange", link: "text-orange" },
  navy: { topBorder: "border-t-navy", badge: "bg-navy/10 text-navy", link: "text-navy" },
};

export default function KeyLinkCard({
  accent,
  icon,
  title,
  description,
  linkText,
  href = "#",
  miniLinks,
  variant = "default",
}: KeyLinkCardProps) {
  const c = ACCENT[accent];

  if (variant === "placeholder") {
    return (
      <div className="flex h-full flex-col rounded-card border-2 border-dashed border-line p-6 text-ink-soft">
        <span
          aria-hidden="true"
          className={`mb-4 flex h-11 w-11 items-center justify-center rounded-btn text-xl ${c.badge}`}
        >
          {icon}
        </span>
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

  const isUrgent = variant === "urgent";

  return (
    <div
      className={`relative flex h-full flex-col rounded-card border-t-4 bg-white p-6 shadow-card transition hover:shadow-card-hover ${c.topBorder} ${
        isUrgent ? "bg-red/5 ring-1 ring-red/30" : ""
      }`}
    >
      {isUrgent && (
        <span className="absolute right-4 top-4 rounded-full bg-red px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
          Support
        </span>
      )}

      <span
        aria-hidden="true"
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-btn text-xl ${c.badge}`}
      >
        {icon}
      </span>

      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>

      {miniLinks ? (
        <ul className="mt-4 space-y-1.5">
          {miniLinks.map((ml) => (
            <li key={ml.label}>
              <a
                href={withBase(ml.href)}
                className={`text-sm font-semibold hover:underline ${c.link}`}
              >
                {ml.label}
              </a>
            </li>
          ))}
        </ul>
      ) : linkText ? (
        <a
          href={withBase(href)}
          className={`mt-4 inline-block text-sm font-bold hover:underline ${c.link}`}
        >
          {linkText}
        </a>
      ) : null}
    </div>
  );
}
