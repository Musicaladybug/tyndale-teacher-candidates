/**
 * Base path the site is served under. Empty for local dev and root/custom-domain
 * hosting; set to e.g. "/tyndale-teacher-candidates" for GitHub Pages project
 * hosting (via NEXT_PUBLIC_BASE_PATH at build time).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefix a root-relative link ("/blog", "/#social") with BASE_PATH.
 * Leaves hash-only ("#contact"), external ("https://…", "mailto:…"), and
 * placeholder ("#") links untouched. No-op when BASE_PATH is empty.
 */
export function withBase(href: string): string {
  if (!href.startsWith("/")) return href;
  return `${BASE_PATH}${href}`;
}
