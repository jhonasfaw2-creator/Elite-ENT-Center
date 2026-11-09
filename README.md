# Elite ENT Center

Next.js App Router foundation for the Elite ENT Center website and patient/staff
experiences in Addis Ababa, Ethiopia.

## Architecture

```text
src/
├── app/
│   ├── (public)/       # Public clinic pages and appointment entry
│   ├── (auth)/         # Sign-in and account recovery
│   ├── (patient)/      # Authenticated patient portal
│   ├── (admin)/        # Authenticated staff dashboard
│   ├── api/            # Route handlers when server endpoints are needed
│   ├── globals.css
│   └── layout.tsx      # Root document and metadata
├── components/
│   ├── ui/             # shadcn/ui primitives
│   ├── shared/         # Cross-surface navigation and common UI
│   ├── public/         # Public-site compositions
│   ├── patient/        # Patient portal compositions
│   └── admin/          # Staff dashboard compositions
├── features/           # Domain operations and feature-specific components
├── lib/                # Shared auth, API, validation, and utility modules
├── types/
└── config/
```

Route groups in parentheses organize layouts without adding URL segments. Keep
route files focused on composition, default to Server Components, and use
`"use client"` only where browser interaction requires it. Put reusable
shadcn/ui primitives in `src/components/ui` and clinic-specific compositions in
the corresponding surface folder.

Patient and staff pages are not implemented yet. Before adding them, select an
authentication provider and enforce session and role checks on the server and
at every protected data-access boundary; a route group's layout alone is not a
substitute for data authorization.

## Design system

Design tokens live in `src/app/globals.css` and shared primitives in
`src/components/ui`. The reference page at `/design-system` renders the full
palette, type scale, and component set and is not linked from public
navigation. Usage rules and token tables are documented in
[`docs/design-system.md`](docs/design-system.md).

## Local development

Install dependencies with `npm install`, then run `npm run dev`. The project
uses TypeScript, Tailwind CSS v4, and shadcn/ui configuration. Add shadcn
components as features need them rather than pre-populating the component set.
