import type { Metadata } from "next";
import AutoPrint from "@/components/AutoPrint";
import PrintButton from "@/components/PrintButton";
import { CONTACTS } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Who to Contact — School of Education",
  description:
    "Printable one-page contact guide for the School of Education, Tyndale University.",
};

export default function WhoToContactPrintPage() {
  return (
    <main className="mx-auto my-6 max-w-3xl bg-white px-8 py-10 text-ink shadow-card print:my-0 print:max-w-none print:px-0 print:py-0 print:shadow-none">
      {/* Screen-only toolbar — hidden when printing */}
      <div className="mb-8 flex items-center justify-between print:hidden">
        <a
          href="/who-to-contact"
          className="text-sm font-bold text-navy hover:text-red hover:underline"
        >
          ← Back to Who to Contact
        </a>
        <PrintButton />
      </div>

      {/* Document header */}
      <header className="border-b-2 border-navy pb-4">
        <h1 className="text-3xl font-extrabold text-navy">Who to Contact</h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          School of Education · Tyndale University
        </p>
      </header>

      <p className="mt-4 text-sm leading-relaxed">
        Please reach out to any of us with questions. We&rsquo;d love for you to
        drop by our offices (<strong>Level 300, A Wing</strong>) or send an
        email — this guide will help direct your inquiry to the person who can
        help you fastest.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {CONTACTS.map((contact) => (
          <section key={contact.name} className="break-inside-avoid">
            <h2 className="text-lg font-bold text-navy">
              {contact.name}
              <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {contact.role}
              </span>
            </h2>
            <p className="mt-0.5 text-sm text-ink-soft">
              Office {contact.office}
              {contact.email ? (
                <>
                  {" · "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-red underline"
                  >
                    {contact.email}
                  </a>
                </>
              ) : null}
            </p>
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm">
              {contact.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <AutoPrint />
    </main>
  );
}
