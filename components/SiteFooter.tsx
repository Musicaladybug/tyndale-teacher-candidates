type FooterColumn = {
  heading: string;
  headingColor: string;
  links: { label: string; href: string }[];
};

const COLUMNS: FooterColumn[] = [
  {
    heading: "Teacher Candidates",
    headingColor: "text-gold",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Key Links", href: "#key-links" },
      { label: "Instagram", href: "#social" },
    ],
  },
  {
    heading: "Support",
    headingColor: "text-teal",
    links: [
      { label: "You Will Be Heard", href: "#" },
      { label: "Wellness Resources", href: "#" },
      { label: "TCs on TV Submissions", href: "#" },
    ],
  },
  {
    heading: "Who to Contact",
    headingColor: "text-green",
    links: [
      { label: "Advising", href: "/who-to-contact" },
      { label: "Practicum Office", href: "/who-to-contact" },
      { label: "General Inquiries", href: "/who-to-contact" },
    ],
  },
  {
    heading: "Tyndale University",
    headingColor: "text-gold",
    links: [
      { label: "Main Website", href: "#" },
      { label: "Media & Design (Admin)", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-white/80 print:hidden">
      {/* Multicolor gradient top border */}
      <div
        aria-hidden="true"
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, #EEAA00, #BB2222, #33BBBB, #779900, #CC3311)",
        }}
      />

      <div className="container-content py-14">
        <div className="grid grid-cols-2 gap-8 tc:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h2
                className={`text-sm font-bold uppercase tracking-wide ${col.headingColor}`}
              >
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-content flex flex-col gap-2 py-6 text-xs text-white/60 tc:flex-row tc:items-center tc:justify-between">
          <p>
            © 2026 Tyndale University, School of Education. All rights
            reserved.
          </p>
          <p>Built for Teacher Candidates</p>
        </div>
      </div>
    </footer>
  );
}
