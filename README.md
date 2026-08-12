# Teacher Candidates — Tyndale University

The home-base website for teacher candidates in the **Tyndale University School
of Education**: news from the blog, key links for the term, an Instagram feed, a
Who to Contact directory, and a printable version of that directory.

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

> **Status:** design mockup / early build. Placeholder copy and photography
> stand in for real content in several spots (hero image, Instagram tiles, some
> key-link destinations).

---

## Getting started

Requires **Node.js 18.17+** (developed on Node 24).

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (also type-checks everything)
npm start        # serve the production build
npm run lint     # run Next.js/ESLint checks
```

---

## Project structure

```
app/
  layout.tsx                     # root layout, Barlow font, metadata
  page.tsx                       # home page (composes the sections below)
  blog/
    page.tsx                     # full blog index (all posts)
    [slug]/page.tsx              # individual blog post pages
  who-to-contact/
    page.tsx                     # interactive Who to Contact directory
    print/page.tsx               # stripped-down printable version
components/                      # reusable UI (Hero, cards, header, footer, …)
content/blog/                    # blog posts as Markdown files (see below)
lib/
  posts.ts                       # reads + renders the Markdown blog posts
  contacts.ts                    # the Who to Contact directory data
tailwind.config.ts               # brand color palette + theme tokens
```

---

## Editing content

### Add or edit a blog post

Blog posts are plain **Markdown files** in [`content/blog/`](content/blog/).
The filename becomes the URL slug (`my-post.md` → `/blog/my-post`). Add a file
with this header block (frontmatter), then write the body in Markdown:

```markdown
---
title: "Your post title"
date: "2026-08-15"        # YYYY-MM-DD — posts sort newest first
excerpt: "One-line teaser shown on the cards."
author: "Your name or office"   # optional
---

Your post body in **Markdown** — headings, lists, and [links](/who-to-contact)
all work.
```

The home page shows the latest 3 posts automatically; `/blog` lists them all.

### Update the Who to Contact directory

Edit the `CONTACTS` array in [`lib/contacts.ts`](lib/contacts.ts). Both the
interactive page **and** the printable version read from this one file, so a
single edit updates both. Each entry:

```ts
{
  name: "Candice",
  role: "Education Programs Officer",
  topics: ["Question one", "Question two"],   // shown as a bulleted list
  accent: "gold",                             // gold | red | teal | green | orange | navy
  office: "A319",
  email: "cmiller@tyndale.ca",
}
```

The printable version lives at `/who-to-contact/print` and auto-opens the
browser print dialog (also works as **Save as PDF**).

### Brand colors

The palette (navy, gold, red, teal, green, orange, cream, …) is defined once in
[`tailwind.config.ts`](tailwind.config.ts) and used across the site via Tailwind
classes like `text-navy` or `bg-gold`.

---

## Deployment

This is a standard Next.js app and deploys cleanly to
[Vercel](https://vercel.com/) (import the GitHub repo) or any Node host.

> **Note:** blog posts and contacts are baked in at **build time**. After adding
> or editing a Markdown post or the contacts list, rebuild/redeploy to publish
> the change.
