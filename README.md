# Face Cutout Studio

Marketing site for [facecutoutstudio.com](https://facecutoutstudio.com), built with Next.js (App Router) and deployed on Vercel. Every page is static.

## Run locally

```bash
npm install
npm run dev
```

## Where things live

| What | File |
| --- | --- |
| Email, WhatsApp number, "updated" date | `src/lib/site.ts` |
| Service page text, prices, FAQs | `src/lib/services.ts` |
| Service list (home, footer, sitemap) | `src/lib/home.ts` |
| FAQ page questions | `src/lib/faq.tsx` |
| Pricing page | `src/app/pricing/page.tsx` |
| File specs page | `src/app/file-specs/page.tsx` |
| Free trial box (email / WhatsApp buttons) | `src/components/FreeTrialSection.tsx` |
| Redirects from old WordPress URLs | `next.config.ts` |
| Styles | `src/app/globals.css` |

To show the WhatsApp button, set `whatsapp` in `src/lib/site.ts` to the number in international format, digits only.

Prices appear both on the page and in the JSON-LD schema. Both read from the same data, so change a price in one place and rebuild.

## Deploy

Import the repository in Vercel (framework preset: Next.js, no environment variables needed) and add `facecutoutstudio.com` under Project → Settings → Domains.
