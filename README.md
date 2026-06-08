# Personal Finance App

A full-stack personal finance web application built with Next.js 16, Supabase, and Tailwind CSS. Track transactions, manage budgets, monitor savings pots, and stay on top of recurring bills, all from one clean dashboard.

![Finance App Preview](/public/images/preview.jpg)

## Live Demo

🔗 [personal-finance-xeno.vercel.app](https://personal-finance-xeno.vercel.app)

## Features

### Core Pages

- **Overview** — Financial snapshot at a glance: balance, income, expenses, budget progress, pot totals, and recurring bill status
- **Transactions** — Full transaction history with search, sort by six criteria, filter by category, and pagination (10 per page)
- **Budgets** — Create and manage spending budgets per category, track monthly spending progress with a live donut chart, and view the latest three transactions per budget
- **Pots** — Set savings goals, track progress with animated pot visuals, and add or withdraw money with a live progress preview
- **Recurring Bills** — Monitor all recurring payments with paid, upcoming, and due-soon status indicators
- **Profile / Account Settings** — Update name, email, and password; view active session; sign out; delete account

### Authentication

- Email and password sign-up and login
- Forgot password and reset password flows via Supabase PKCE
- Email change with verification
- Protected routes — all app pages require authentication
- Demo account with read-only access — no sign-up needed

### Demo Account

- Pre-seeded with realistic financial data
- Full read-only access to all pages
- All mutation actions (add, edit, delete) are blocked with a prompt to create a free account
- One-click access from the landing page and login page

## Tech Stack

| Category        | Technology              |
| --------------- | ----------------------- |
| Framework       | Next.js 16 (App Router) |
| Language        | TypeScript              |
| Styling         | Tailwind CSS v4         |
| UI Components   | shadcn/ui               |
| Database & Auth | Supabase                |
| Forms           | React Hook Form + Zod   |
| URL State       | nuqs                    |
| Animations      | Motion (Framer Motion)  |
| Charts          | Recharts                |
| Package Manager | pnpm                    |
| Deployment      | Vercel                  |

## Key Architectural Decisions

**Dual data source** — Demo users read from a static `data.json` file. Real users query Supabase. The same pages and components serve both — only the data fetching layer differs.

**Client-side filtering** — Search, sort, and filter operations on Transactions and Recurring Bills happen client-side after a single server fetch. This provides instant UI feedback without server round-trips for a dataset of this size.

**URL state with nuqs** — All filter, sort, and pagination state lives in the URL. Pages are shareable and bookmarkable with filters applied, and browser back/forward navigation works naturally.

**Server Actions throughout** — All mutations (create, update, delete) use Next.js Server Actions rather than API routes. Forms submit directly to server functions, keeping the client bundle lean.

**Route protection at two layers** — `proxy.ts` handles session checks at the network edge. The `(app)/layout.tsx` adds a second server-side check, so protected pages are never accessible without a valid session.

## What I Learned

Building this project end-to-end provided hands-on experience with:

- **Next.js App Router** — route groups, nested layouts, Server Components vs Client Components, and Server Actions
- **Supabase** — auth flows (PKCE), Row Level Security policies, service role admin operations, and real-time data
- **Tailwind CSS v4** — the new `@theme` and `@theme inline` system, CSS variable bridging, and removing the config file entirely
- **nuqs** — URL-based state management that keeps UI in sync with the browser URL for shareable, bookmarkable filter states
- **Full-stack data patterns** — dual data sources, server-side fetching with client-side filtering, and optimistic UI

## Acknowledgements

Design inspiration and challenge brief provided by **[Frontend Mentor](https://www.frontendmentor.io)**

## Author

- Frontend Mentor - [makogeboris](https://www.frontendmentor.io/profile/makogeboris)
- Twitter - [makogeboris](https://x.com/makogeboris)
