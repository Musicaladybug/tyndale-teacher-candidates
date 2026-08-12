import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import KeyLinksSection from "@/components/KeyLinksSection";
import BlogSection from "@/components/BlogSection";
import SocialSection from "@/components/SocialSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      {/* Skip link — visually hidden until focused */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-navy focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      {/* Decorative black strip */}
      <div aria-hidden="true" className="h-[10px] w-full bg-black" />

      <SiteHeader />

      <main id="main">
        <Hero />
        <KeyLinksSection />
        <BlogSection />
        <SocialSection />
      </main>

      <SiteFooter />
    </>
  );
}
