"use client";

/**
 * Opens the browser print dialog. Combined with the `print:` styles on the
 * Who to Contact page, this gives a clean printable / save-as-PDF version.
 */
export default function PrintButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center gap-2 rounded-btn border-2 border-navy px-4 py-2 text-sm font-bold text-navy transition hover:bg-navy hover:text-white print:hidden ${className}`}
    >
      🖨 Print this guide
    </button>
  );
}
