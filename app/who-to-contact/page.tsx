import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactCard from "@/components/ContactCard";
import { CONTACTS } from "@/lib/contacts";
import { withBase } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Who to Contact — Teacher Candidates, Tyndale University",
  description:
    "Exactly who to reach for exactly what in the School of Education — your one-page contact guide.",
};

export default function WhoToContactPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-navy focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="h-[10px] w-full bg-black print:hidden" />
      <SiteHeader />

      <main id="main" className="bg-cream py-16 tc:py-24 print:bg-white print:py-0">
        <div className="container-content">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-teal/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#137070]">
                Directory
              </span>
              <h1 className="mt-4 text-[2.4rem] font-extrabold text-navy tc:text-[3rem]">
                Who to Contact
              </h1>
            </div>
            <a
              href={withBase("/who-to-contact/print")}
              className="mt-2 inline-flex items-center gap-2 rounded-btn border-2 border-navy px-4 py-2 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              🖨 Printable version →
            </a>
          </div>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Exactly who to reach for exactly what. Not sure who handles your
            question? Find the right person below — then email, or better yet,
            drop by. Our offices are on{" "}
            <strong className="text-navy">Level 300, A Wing</strong>.
          </p>

          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 print:grid-cols-2 print:gap-4">
            {CONTACTS.map((contact) => (
              <ContactCard key={contact.name} {...contact} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
