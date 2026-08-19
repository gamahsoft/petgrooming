# Upland Pet Grooming

A modern local business website for a dog grooming salon, built with Next.js App Router, Payload CMS, Tailwind CSS, and shadcn-style UI components.

## Features

- Responsive homepage, services, gallery, and contact pages
- Payload CMS admin at `/admin`
- PostgreSQL database support through `@payloadcms/db-postgres`
- Cloudflare R2/S3-compatible media storage for Payload uploads
- Square Appointments booking integration
- Cloudflare Turnstile protection on the contact form
- SEO metadata, sitemap, robots file, and LocalBusiness structured data
- Cookie/privacy consent banner

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Payload CMS 3
- PostgreSQL
- Cloudflare R2 or compatible S3 storage

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Update `.env.local` with your real database, Payload secret, booking URL, Turnstile keys, and R2 credentials.

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment Variables

```env
DATABASE_URI=
PAYLOAD_SECRET=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SQUARE_BOOKING_URL=
NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=
CLOUDFLARE_TURNSTILE_SECRET_KEY=
TURNSTILE_ALLOWED_HOSTNAMES=
R2_BUCKET=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_ENDPOINT=
R2_PUBLIC_URL=
```

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run generate:types
```

## Notes

- Do not commit `.env`, `.env.local`, `.next`, `node_modules`, or generated build output.
- Public pages can render fallback content before the database is connected.
- Replace placeholder salon details in `lib/constants.ts` before launch.
- Replace the placeholder Square booking URL with the real Square Appointments URL.
