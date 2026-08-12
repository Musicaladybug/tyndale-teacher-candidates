"use client";

import { useEffect, useRef } from "react";

/**
 * Opens the browser print dialog once, shortly after the print page mounts,
 * so following the "Printable version" link goes straight to print / save-as-PDF.
 * The manual Print button remains for anyone who cancels.
 */
export default function AutoPrint() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const t = setTimeout(() => window.print(), 400);
    return () => clearTimeout(t);
  }, []);

  return null;
}
