const CHIPS = [
  { label: "TCs on TV", className: "bg-gold/20 text-[#7a5800] ring-gold/40" },
  { label: "You Will Be Heard", className: "bg-red/10 text-red ring-red/30" },
  { label: "Who to Contact", className: "bg-teal/15 text-[#137070] ring-teal/40" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-deep">
      {/* Soft radial gradient blobs bleeding off the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(238,170,0,0.45) 0%, rgba(238,170,0,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(51,187,187,0.45) 0%, rgba(51,187,187,0) 70%)",
        }}
      />

      <div className="container-content relative grid grid-cols-1 items-center gap-10 py-16 tc:grid-cols-[55fr_45fr] tc:py-24">
        {/* Text column — order-2 on mobile so art sits on top */}
        <div className="order-2 tc:order-1">
          <p className="mb-4 inline-block text-[0.8rem] font-bold uppercase tracking-[0.18em] text-teal">
            For Teacher Candidates
          </p>
          <h1 className="text-[2.4rem] font-extrabold leading-[1.08] text-navy tc:text-[3rem]">
            Your home base for <span className="text-red">everything</span>{" "}
            School of Education.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            News from the blog, what&rsquo;s happening on campus TV, and the
            quick links you&rsquo;ll actually need this term — all in one place,
            just for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#key-links"
              className="inline-flex items-center justify-center rounded-btn bg-gold px-6 py-3 font-bold text-navy shadow-card transition hover:bg-gold-light hover:shadow-card-hover"
            >
              Explore key links
            </a>
            <a
              href="#blog"
              className="inline-flex items-center justify-center rounded-btn border-2 border-navy px-6 py-3 font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              Read the blog
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <li
                key={chip.label}
                className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 ${chip.className}`}
              >
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Art placeholder column */}
        <div className="order-1 tc:order-2">
          <div
            className="relative flex aspect-video items-center justify-center overflow-hidden rounded-card shadow-card tc:aspect-[4/3]"
            style={{
              background:
                "linear-gradient(135deg, #EEAA00 0%, #33BBBB 100%)",
            }}
          >
            {/* Diagonal hatch texture overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 12px)",
              }}
            />
            <p className="relative z-10 max-w-sm px-6 text-center text-sm font-semibold leading-relaxed text-white drop-shadow">
              Photo placeholder — use a real Tyndale photo of teacher candidates
              on campus (see brand guide: warm, candid, people-centric)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
