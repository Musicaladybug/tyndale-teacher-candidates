import KeyLinkCard, { KeyLinkCardProps } from "./KeyLinkCard";

const CARDS: KeyLinkCardProps[] = [
  {
    accent: "gold",
    icon: "📺",
    title: "TCs on TV",
    description:
      "Share photos of yourself and your learning to be featured on the School of Ed Closed Circuit TV on campus.",
    linkText: "Submit a photo →",
    href: "https://sites.google.com/betyndale.ca/tcsontv/home",
  },
  {
    accent: "red",
    icon: "📣",
    title: "You Will Be Heard",
    description:
      "A confidential place to report discrimination or harm.",
    linkText: "Report or learn more →",
    href: "https://youwillbeheard.netlify.app/",
    variant: "urgent",
  },
  {
    accent: "teal",
    icon: "☎️",
    title: "Who to Contact",
    description:
      "Not sure who handles what? Find the right advisor, office, or staff contact for your question.",
    linkText: "Find a contact →",
    href: "/who-to-contact",
  },
  {
    accent: "green",
    icon: "🗓️",
    title: "Schedules",
    description: "Program-wide schedules, or build your own.",
    miniLinks: [
      { label: "PJ Schedule (PDF) →", href: "#" },
      { label: "JI Schedule (PDF) →", href: "#" },
      { label: "Build My Schedule →", href: "#" },
    ],
  },
  {
    accent: "orange",
    icon: "🔎",
    title: "Find My Section",
    description:
      "Enter your name to see your section — PJ1, PJ2, PJ A/B/C, JI A, or JI B.",
    linkText: "Look up my section →",
    href: "#",
  },
  {
    accent: "navy",
    icon: "📍",
    title: "Course Locations",
    description:
      "Find which room or building your course is meeting in on campus.",
    linkText: "Find my classroom →",
    href: "#",
  },
  {
    accent: "orange",
    icon: "➕",
    title: "More coming soon",
    description:
      "Space reserved for additional resources — practicum info, wellness supports, funding & awards, etc.",
    variant: "placeholder",
  },
];

export default function KeyLinksSection() {
  return (
    <section id="key-links" className="bg-cream py-16 tc:py-24">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red">
            Resources
          </span>
          <h2 className="mt-4 text-[2rem] font-extrabold text-navy tc:text-[2.4rem]">
            Key links
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            The pages you&rsquo;ll come back to most as a teacher candidate.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {CARDS.map((card) => (
            <KeyLinkCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
