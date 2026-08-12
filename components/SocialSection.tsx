// Varying tinted backgrounds for the 3x3 Instagram feed preview tiles.
const TILE_TINTS = [
  "bg-gold/25",
  "bg-teal/25",
  "bg-red/20",
  "bg-green/25",
  "bg-navy/15",
  "bg-orange/20",
  "bg-teal/20",
  "bg-gold/30",
  "bg-red/15",
];

export default function SocialSection() {
  return (
    <section id="social" className="bg-cream py-16 tc:py-24">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-card shadow-card">
          {/* Thin multicolor gradient stripe along the top edge */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5"
            style={{
              background:
                "linear-gradient(90deg, #EEAA00, #BB2222, #33BBBB, #779900, #CC3311)",
            }}
          />

          <div
            className="grid grid-cols-1 items-center gap-10 p-8 tc:grid-cols-2 tc:p-12"
            style={{
              background:
                "linear-gradient(135deg, #33BBBB 0%, #EEAA00 100%)",
            }}
          >
            <div className="text-white">
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-white/90">
                Follow along
              </p>
              <h2 className="mt-3 text-[2rem] font-extrabold tc:text-[2.4rem]">
                @tyndaleu on Instagram
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/95">
                See campus life, teacher candidate highlights, and School of
                Education moments as they happen.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-btn bg-navy px-6 py-3 font-bold text-white shadow-card transition hover:bg-navy-light hover:shadow-card-hover"
              >
                📷 Follow on Instagram
              </a>
            </div>

            {/* 3x3 placeholder feed preview */}
            <div aria-hidden="true" className="grid grid-cols-3 gap-3">
              {TILE_TINTS.map((tint, i) => (
                <div
                  key={i}
                  className={`flex aspect-square items-center justify-center rounded-btn text-2xl ${tint}`}
                >
                  📷
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
