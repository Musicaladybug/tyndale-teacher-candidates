/**
 * Base path for GitHub Pages *project* hosting (served from a subfolder like
 * /tyndale-teacher-candidates). Set via NEXT_PUBLIC_BASE_PATH at build time.
 * Empty by default, so local dev and root/custom-domain hosting need no change.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site (plain HTML/CSS/JS) that any static host can serve.
  output: "export",
  // Directory-style URLs (foo/index.html) — most reliable on static hosts.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for static export.
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
