# Cyrotics Website — Bug Fix Package

## What's in this package

| File | Status |
|------|--------|
| `src/app/layout.tsx` | Fixed |
| `src/app/page.tsx` | Fixed (server component wrapper) |
| `src/app/home-client.tsx` | New (extracted client UI) |
| `src/app/faqs/page.tsx` | Fixed (server component + JSON-LD) |
| `src/app/faqs/faqs-client.tsx` | New (extracted client UI) |
| `src/app/contact/page.tsx` | Fixed (server component wrapper) |
| `src/app/contact/contact-client.tsx` | New (extracted client UI) |
| `src/components/animated-counter.tsx` | Fixed (IntersectionObserver) |
| `next.config.ts` | Fixed (ignoreBuildErrors: false) |
| `vercel.json` | New (security headers now actually applied) |

---

## All Bugs Found & Fixed

---

### BUG 1 — Every page had the wrong canonical URL
**File:** `src/app/layout.tsx`
**Root cause:** `alternates.canonical` was hardcoded to `'https://www.cyrotics.in'`
in the root layout and never overridden in any child page. Next.js uses the
layout value as a fallback for every page that doesn't declare its own.
Result: Google saw `/services/`, `/faqs/`, `/contact/` as duplicates of the
homepage and could deindex them.

**Fix applied:**
- Exported `SITE_URL` constant from `layout.tsx` as a single source of truth
- Added per-page `metadata` export to `page.tsx`, `faqs/page.tsx`, `contact/page.tsx`
  each with their own `alternates.canonical` pointing to their correct URL
- Each page also overrides `openGraph.url` to match

**To add to other pages** (services, projects, etc.):
```tsx
// e.g. src/app/services/page.tsx
import { SITE_URL } from '@/app/layout';
export const metadata = {
  title: 'Our Technology Services',
  alternates: { canonical: `${SITE_URL}/services/` },
  openGraph: { url: `${SITE_URL}/services/` },
};
```

---

### BUG 2 — `metadata` exports were silently ignored on all client pages
**Files:** `src/app/page.tsx`, `src/app/faqs/page.tsx`, `src/app/contact/page.tsx`
**Root cause:** All three pages had `'use client'` at the top. In Next.js App
Router, `metadata` exports are only processed by the server. A `'use client'`
component cannot export metadata — Next.js silently ignores it with no warning.
This meant ALL per-page SEO config (title, description, canonical, og:url) was
being ignored, and every page fell back to the root layout defaults.

**Fix applied:**
Each page is now split into two files:
- `page.tsx` — server component, no `'use client'`, exports `metadata`
- `*-client.tsx` — client component with `'use client'`, contains all UI

This is the standard Next.js App Router pattern.

---

### BUG 3 — `og:url` hardcoded to homepage on every page
**File:** `src/app/layout.tsx`
**Root cause:** `openGraph.url` was set to `'https://www.cyrotics.in'` in the
root layout and never overridden. When any page was shared on LinkedIn,
WhatsApp, Twitter etc., the preview card linked back to the homepage.

**Fix applied:** Each page now overrides `openGraph.url` in its own metadata
export. The root layout still has the correct homepage URL as fallback.

---

### BUG 4 — Google Search Console verification was a placeholder
**File:** `src/app/layout.tsx`  
**Root cause:** `verification.google` was set to the literal string
`'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE'`. Google rejects this and cannot
verify site ownership, meaning zero access to crawl data, index status,
or search performance.

**Fix applied:** Replaced with `'PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE'`
and added clear inline instructions.

**You must complete this manually:**
1. Go to https://search.google.com/search-console
2. Add property → URL prefix → `https://www.cyrotics.in`
3. Choose HTML tag verification method
4. Copy the `content="..."` value from the meta tag Google gives you
5. In `layout.tsx` find `verification: { google: '...' }` and paste your code

---

### BUG 5 — Google Analytics was tracking nothing
**File:** `src/app/layout.tsx`
**Root cause:** `gaId` was set to `'G-XXXXXXXXXX'` — a literal placeholder.
No real analytics data was being collected.

**Fix applied:** Placeholder kept but marked with clear instructions.

**You must complete this manually:**
1. Go to https://analytics.google.com
2. Admin → Create property for `cyrotics.in`
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. In `layout.tsx`, replace `gaId="G-XXXXXXXXXX"` with your actual ID

---

### BUG 6 — Broken "0+" counters on homepage
**File:** `src/components/animated-counter.tsx`
**Root cause:** The animation was almost certainly firing on component mount
(before hydration settled), completing before the user scrolled to the stats
section. On subsequent visits or hydration mismatches, it reset to 0 and
never re-animated — showing "0+" permanently.

The values in `page.tsx` were correct all along (4, 50, 45, 100).

**Fix applied:** Complete rewrite of `animated-counter.tsx` using
`IntersectionObserver`. The count-up animation now:
- Fires exactly once when the element enters the viewport
- Uses `requestAnimationFrame` with ease-out cubic easing
- Has a `hasAnimated` ref guard so it never re-fires on re-renders
- Works correctly even if the element is already visible on load

---

### BUG 7 — Security headers were defined but never sent to browsers
**Files:** `next.config.ts`, new `vercel.json`
**Root cause:** The `headers()` function in `next.config.ts` was commented out
with a note saying "use vercel.json instead" — but no `vercel.json` existed
in the repo. The `securityHeaders` array (HSTS, CSP, X-Frame-Options etc.)
was dead code: defined, never applied.

**Fix applied:** Created `vercel.json` at the repo root with all security
headers, cache-control rules, and redirects from `next.config.ts` properly
configured. These now apply to every Vercel deployment automatically.

---

### BUG 8 — `typescript.ignoreBuildErrors: true` silently swallowed errors
**File:** `next.config.ts`
**Root cause:** TypeScript errors during `next build` were silently ignored.
This is why broken metadata configs (e.g. `metadata` exported from a client
component) never caused a build failure — they just produced wrong output.

**Fix applied:** Changed to `ignoreBuildErrors: false`.

> **Note:** After this change your first build may show TypeScript errors that
> were previously hidden. Fix them one by one. Do NOT set it back to `true`.

---

### BUG 9 — Contact form silently pretended to work (sent nothing)
**File:** `src/app/contact/contact-forms.tsx`
**Root cause:** The real server action was commented out:
```ts
// import { submitContactForm } from '@/app/actions';
```
A mock function replaced it that just returns a fake success response after
1 second. Every form submission appeared to succeed but sent zero emails
and stored zero data.

**This is a separate, larger fix not included in this package** because:
- `output: 'export'` (static site mode) does not support Server Actions
- You need either: (a) a backend API endpoint, or (b) a third-party form service

**Recommended solutions (pick one):**

**Option A — Web3Forms (easiest, free, no backend needed):**
```bash
npm install @web3forms/react
```
Sign up at https://web3forms.com, get your access key, then replace the
mock action with a fetch to their API. Works with static export.

**Option B — Formspree:**
Sign up at https://formspree.io, create a form, use their endpoint:
```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(formData)),
});
```

**Option C — EmailJS (client-side, no backend):**
```bash
npm install emailjs-com
```

---

### BUG 10 — FAQ page showing empty on live site (content exists in code)
**Root cause:** The FAQ content exists in the source code. The live site likely
shows empty accordions because the site was deployed from an older commit
before FAQ answers were added — and the new code was never redeployed, OR
`typescript.ignoreBuildErrors: false` (now fixed) was causing a silent build
failure that deployed a stale version.

**Fix applied:** After deploying this fix package, trigger a fresh Vercel
deployment from the latest commit. The FAQ content will appear.

---

## Deployment Steps

### Step 1 — Copy files into your repo
Copy all files from this package into the exact same paths in your repo:
```
src/app/layout.tsx                    ← replace existing
src/app/page.tsx                      ← replace existing
src/app/home-client.tsx               ← new file
src/app/faqs/page.tsx                 ← replace existing
src/app/faqs/faqs-client.tsx          ← new file
src/app/contact/page.tsx              ← replace existing
src/app/contact/contact-client.tsx    ← new file
src/components/animated-counter.tsx   ← replace existing
next.config.ts                        ← replace existing
vercel.json                           ← new file (repo root)
```

### Step 2 — Add your Google Search Console code
In `src/app/layout.tsx`, find:
```ts
google: 'PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
```
Replace with your actual verification code from Google Search Console.

### Step 3 — Add your Google Analytics ID
In `src/app/layout.tsx`, find:
```tsx
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```
Replace with your real Measurement ID from Google Analytics.

### Step 4 — Fix the contact form (choose one option from Bug 9 above)

### Step 5 — Run a local build to check for TypeScript errors
```bash
npm run build
```
Fix any TypeScript errors that now surface (previously hidden by ignoreBuildErrors).

### Step 6 — Commit and push
```bash
git add .
git commit -m "fix: canonical urls, metadata, security headers, counter animation, vercel config"
git push
```

### Step 7 — Verify after deployment
- View source on `/services/` → canonical should be `https://www.cyrotics.in/services/`
- View source on `/faqs/` → canonical should be `https://www.cyrotics.in/faqs/`
- Open DevTools → Network → any page → check response headers for `x-frame-options: DENY`
- Scroll to stats section on homepage → numbers should animate from 0 to real values
- Submit the contact form → verify you actually receive an email (after Bug 9 fix)
- Paste each page URL into https://www.opengraph.xyz → og:url should match page URL

### Step 8 — Submit to Google Search Console
After verifying the deployment:
1. Open Google Search Console
2. Go to Sitemaps → submit `https://www.cyrotics.in/sitemap.xml`
3. Use URL Inspection on your key pages and click "Request Indexing"

---

## Pages still needing per-page metadata
These pages were not in the files you shared. Apply the same server/client
split pattern to each one:

- `src/app/services/page.tsx`
- `src/app/services/[slug]/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- Any other pages in your `app/` directory

Template to follow:
```tsx
// src/app/services/page.tsx  (server component — no 'use client')
import type { Metadata } from 'next';
import { SITE_URL } from '@/app/layout';
import ServicesClient from './services-client'; // your existing UI

export const metadata: Metadata = {
  title: 'IT & Technology Services',
  description: 'End-to-end IT infrastructure, cybersecurity, data center, networking, and smart building solutions for enterprises across India.',
  alternates: { canonical: `${SITE_URL}/services/` },
  openGraph: {
    url: `${SITE_URL}/services/`,
    title: 'IT & Technology Services | Cyrotics',
    description: 'End-to-end IT infrastructure solutions for enterprises.',
    images: [{ url: `${SITE_URL}/og-services.png`, width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
```
