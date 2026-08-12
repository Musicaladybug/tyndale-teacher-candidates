import { AccentColor } from "./KeyLinkCard";

export type Contact = {
  name: string;
  role: string;
  /** The topics this person handles, shown as a bulleted list. */
  topics: string[];
  accent: AccentColor;
  /** Placeholder until real details are added. */
  email?: string;
  office?: string;
};

const ACCENT: Record<
  AccentColor,
  { topBorder: string; name: string; dot: string }
> = {
  gold: { topBorder: "border-t-gold", name: "text-[#7a5800]", dot: "bg-gold" },
  red: { topBorder: "border-t-red", name: "text-red", dot: "bg-red" },
  teal: { topBorder: "border-t-teal", name: "text-[#137070]", dot: "bg-teal" },
  green: { topBorder: "border-t-green", name: "text-[#4d6600]", dot: "bg-green" },
  orange: { topBorder: "border-t-orange", name: "text-orange", dot: "bg-orange" },
  navy: { topBorder: "border-t-navy", name: "text-navy", dot: "bg-navy" },
};

export default function ContactCard({
  name,
  role,
  topics,
  accent,
  email,
  office = "Level 300, A Wing",
}: Contact) {
  const c = ACCENT[accent];

  return (
    <div
      className={`flex h-full flex-col rounded-card border-t-4 bg-white p-6 shadow-card transition hover:shadow-card-hover print:break-inside-avoid print:border print:border-line print:p-4 print:shadow-none ${c.topBorder}`}
    >
      <h2 className={`text-xl font-extrabold ${c.name}`}>{name}</h2>
      <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-ink-soft">
        {role}
      </p>

      <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-ink">
        {topics.map((topic) => (
          <li key={topic} className="flex gap-2.5">
            <span
              aria-hidden="true"
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`}
            />
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-5 space-y-1 border-t border-line pt-4 text-sm">
        <div className="flex gap-2">
          <dt className="font-semibold text-navy">Office</dt>
          <dd className="text-ink-soft">{office}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-navy">Email</dt>
          <dd>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="text-red hover:underline"
              >
                {email}
              </a>
            ) : (
              <span className="italic text-ink-soft">add address</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
