const NAV_LINKS = [
  { label: "Blog", href: "/#blog" },
  { label: "Key Links", href: "/#key-links" },
  { label: "Follow Us", href: "/#social" },
  { label: "Who to Contact", href: "/who-to-contact" },
];

// Signature six-segment brand stripe.
const STRIPE_SEGMENTS = [
  "bg-gold",
  "bg-red",
  "bg-teal",
  "bg-green",
  "bg-orange",
  "bg-navy-light",
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_8px_rgba(34,17,85,0.06)] print:hidden">
      <div className="container-content flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-4">
        {/* Text-only wordmark lockup — no crest/logo image */}
        <a href="/" className="block shrink-0 leading-none">
          <span className="block text-[1.3rem] font-bold text-navy">
            Teacher Candidates
          </span>
          <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-teal">
            Tyndale University · School of Education
          </span>
        </a>

        <nav aria-label="Primary" className="w-full sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-block py-1 text-[0.95rem] font-semibold text-navy transition-colors hover:text-red"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Brand stripe: six equal colored segments */}
      <div aria-hidden="true" className="flex h-1.5 w-full">
        {STRIPE_SEGMENTS.map((color, i) => (
          <span key={i} className={`h-full flex-1 ${color}`} />
        ))}
      </div>
    </header>
  );
}
