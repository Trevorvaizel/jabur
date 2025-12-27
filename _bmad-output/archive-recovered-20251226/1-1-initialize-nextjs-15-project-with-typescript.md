# Story 1.1: Initialize Next.js 15 Project with TypeScript

**Epic:** 1 - Project Foundation & User Authentication
**Story ID:** 1.1
**Status:** in-progress

<!-- Validation completed: Story validated and patched to fix critical issues with initialization command, import alias testing, and directory structure. -->
<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

---

## Story

As a **developer**,
I want to initialize a Next.js 15 project with TypeScript, Tailwind CSS, and required dependencies,
So that I have a production-ready foundation following the Architecture specifications.

---

## Acceptance Criteria

### AC1: Project Initialization Success

**Given** a clean development environment with Node.js 20+ LTS installed
**When** I run `npx create-next-app@latest jabur --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*"`
**Then** the project is created successfully with the following configuration:
- Next.js 15 (latest stable)
- TypeScript 5.x enabled
- Tailwind CSS 4.x configured
- ESLint set up with Next.js recommended rules
- App Router architecture (NOT Pages Router)
- Turbopack enabled for development
- Import alias `@/*` configured for root imports

**And** the command completes without errors
**And** a `package.json` file is created with all dependencies

---

### AC2: Node.js Runtime Verification

**Given** the project initialization is complete
**When** I check the Node.js version with `node --version`
**Then** the version is Node.js 20.9.0 or higher (LTS)
**And** the project's `package.json` specifies `"engines": { "node": ">=20.9.0" }`

---

### AC3: Project Structure Validation

**Given** the project is initialized
**When** I inspect the directory structure
**Then** the following directories exist:
- `/app` - Next.js App Router pages and layouts
- `/public` - Static assets (images, fonts, etc.)

**And** the following additional directories MUST be created manually:
- `/lib` - Utility functions, Server Actions, and shared logic
- `/components` - Reusable React components

**Note:** `/prisma` directory will be created in Story 1.2 (Database Schema setup)

**And** root-level configuration files exist:
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.ts` - Next.js configuration
- `.eslintrc.json` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind

---

### AC4: TypeScript Strict Mode Configuration

**Given** the project is initialized
**When** I open `tsconfig.json`
**Then** TypeScript strict mode is enabled with the following settings:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**And** no implicit `any` types are allowed
**And** the `@/` path alias is configured for root-level imports

---

### AC5: Import Alias Verification

**Given** TypeScript is configured with `@/*` path alias
**When** I create a test import from `@/lib/utils`
**Then** TypeScript resolves the import correctly without errors
**And** the utility file exists at `/lib/utils/index.ts` with at least one exported function
**And** the import statement uses `@/` syntax (e.g., `import { cn } from '@/lib/utils'`)
**And** the imported function can be used without type errors

---

### AC6: Development Server Success

**Given** the project is initialized
**When** I run `npm run dev` (or `pnpm dev` / `yarn dev` / `bun dev`)
**Then** the development server starts successfully on `http://localhost:3000`
**And** Turbopack is enabled (shown in console output as "Turbopack")
**And** the default Next.js welcome page loads in the browser
**And** Fast Refresh (Hot Module Replacement) works correctly when editing files
**And** no console errors or warnings appear

---

### AC7: Tailwind CSS Configuration

**Given** the project is initialized
**When** I inspect `tailwind.config.ts`
**Then** Tailwind CSS is configured with the following content paths:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand color extensions will be added later
    },
  },
  plugins: [],
};
export default config;
```

**And** Tailwind's base styles are imported in `/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### AC8: ESLint Configuration

**Given** the project is initialized
**When** I run `npm run lint`
**Then** ESLint runs successfully with Next.js recommended rules
**And** no linting errors are present in the default project
**And** `.eslintrc.json` extends `"next/core-web-vitals"`

---

## Tasks / Subtasks

### Task 1: Verify Prerequisites (AC: #2)
- [ ] Check Node.js version is 20.9.0 or higher (`node --version`)
- [ ] Install Node.js 20+ LTS if not present
- [ ] Verify npm/pnpm/yarn/bun package manager is available

### Task 2: Initialize Next.js 15 Project (AC: #1, #3)
- [ ] Run `npx create-next-app@latest jabur --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*"` to create the project with explicit configuration
- [ ] Verify project directory `jabur/` is created
- [ ] Inspect `package.json` for correct dependencies (Next.js 15, React 19, TypeScript 5.x, Tailwind CSS)
- [ ] Navigate into project directory: `cd jabur`
- [ ] Verify Tailwind CSS version is 4.x by running: `npm list tailwindcss`

### Task 3: Create Additional Directory Structure (AC: #3, #5)
- [ ] Create `/lib` directory: `mkdir lib`
- [ ] Create `/lib/utils` subdirectory: `mkdir lib/utils`
- [ ] Create `/components` directory: `mkdir components`
- [ ] Create `/lib/utils/index.ts` with a utility function:
  ```typescript
  /**
   * Utility function to merge class names
   * @param inputs - Class name strings to merge
   * @returns Merged class name string
   */
  export function cn(...inputs: (string | undefined | null | false)[]): string {
    return inputs.filter(Boolean).join(' ');
  }
  ```
- [ ] Create placeholder file for components: `/components/.gitkeep`

### Task 4: Configure TypeScript Strict Mode (AC: #4, #5)
- [ ] Open `tsconfig.json`
- [ ] Verify `"strict": true` is enabled
- [ ] Verify `"noImplicitAny": true` is enabled
- [ ] Verify `"strictNullChecks": true` is enabled
- [ ] Verify `"paths": { "@/*": ["./*"] }` is configured for import alias
- [ ] Save changes if any modifications were needed

### Task 5: Update package.json with Node.js Engine Requirement (AC: #2)
- [ ] Open `package.json`
- [ ] Add `"engines": { "node": ">=20.9.0" }` to enforce Node.js 20+ requirement
- [ ] Save `package.json`

### Task 5a: Create .nvmrc for Node Version Management (Enhancement)
- [ ] Create `.nvmrc` file in project root
- [ ] Add content: `20.9.0` (or current LTS version being used)
- [ ] This ensures consistent Node.js version across development environments

### Task 6: Verify Tailwind CSS Configuration (AC: #7)
- [ ] Open `tailwind.config.ts`
- [ ] Verify content paths include `/app`, `/components`, and `/pages`
- [ ] Open `/app/globals.css`
- [ ] Verify Tailwind directives are present: `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`

### Task 7: Test Development Server (AC: #6)
- [ ] Run `npm run dev` (or `pnpm dev` / `yarn dev` / `bun dev`)
- [ ] Wait for server to start successfully
- [ ] Verify Turbopack is enabled in console output
- [ ] Open browser to `http://localhost:3000`
- [ ] Verify default Next.js welcome page loads without errors
- [ ] Test Fast Refresh by editing `/app/page.tsx` and verifying instant update
- [ ] Stop development server (Ctrl+C)

### Task 8: Run Linting (AC: #8)
- [ ] Run `npm run lint`
- [ ] Verify ESLint runs successfully
- [ ] Verify no linting errors in default project
- [ ] Inspect `.eslintrc.json` to confirm `"extends": "next/core-web-vitals"`

### Task 9: Initialize Git Repository (Recommended)
- [ ] Run `git init` if not already initialized
- [ ] Verify `.gitignore` exists and includes: `node_modules`, `.next`, `.env*.local`
- [ ] Run `git add .`
- [ ] Run `git commit -m "chore: initialize Next.js 15 project with TypeScript and Tailwind CSS"`

### Task 10: Document Initial Setup (Optional but Recommended)
- [ ] Create `README.md` with setup instructions (if not already generated)
- [ ] Document Node.js version requirement (20+)
- [ ] Document command to run dev server: `npm run dev`
- [ ] Document import alias usage: `@/` for root imports

---

## Dev Notes

### Architecture Pattern Requirements

**From Architecture Document:**
- **Next.js 15 App Router** is MANDATORY (NOT Pages Router)
- **Server Components by default** - Only use Client Components when hooks or interactivity are needed
- **Route groups for role isolation** will be implemented in Story 1.8: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- **Middleware** for role-based access control will be implemented in Story 1.7 at `/src/middleware.ts`
- **TypeScript strict mode** is NON-NEGOTIABLE for type safety

**From Project Context:**
- **Critical Rule:** MUST use Next.js 15 App Router (NOT Pages Router)
- **Critical Rule:** MUST use NextAuth.js v5.0.0-beta (v4 is incompatible with App Router)
- **Critical Rule:** Node.js MUST be 20+ for Next.js 15 compatibility
- **Critical Rule:** TypeScript strict mode MUST be enabled
- **Import Convention:** Use `@/` alias for all imports (e.g., `@/lib/utils`, `@/components/ui`)

**CRITICAL: Explicit Initialization Flags (Post-Validation Fix):**
- **DO NOT use `--yes` flag** - It relies on CLI defaults that may change and won't guarantee required configuration
- **MUST use explicit flags:** `--ts --tailwind --eslint --app --no-src-dir --import-alias "@/*"`
- This ensures: TypeScript enabled, Tailwind 4.x, ESLint, App Router (not Pages), no /src directory, and `@/*` import alias
- The explicit flags approach is NON-NEGOTIABLE for production-ready setup

### Technology Stack Overview

**Core Framework:**
- Next.js 15 (App Router)
- TypeScript 5.x (strict mode)
- React 19 (via Next.js 15)
- Tailwind CSS 4.x
- Node.js 20+ (LTS)

**Future Dependencies (Story 1.2+):**
- Prisma 5.x + @prisma/client + @prisma/adapter-pg + pg (Database ORM)
- NextAuth.js v5.0.0-beta (Authentication)
- Zod 3.x (Runtime validation)
- date-fns (Date manipulation - NOT moment.js)
- TanStack Query v5 (Server state management)
- Zustand 4.x (UI state management)
- Socket.io 4.x (Real-time communication)
- shadcn/ui components (Radix UI primitives)

### Deployment Target

**Google Cloud Platform:**
- **Cloud Run** - Serverless Next.js deployment
- **Cloud SQL (PostgreSQL)** - Managed database
- **Cloud Storage** - Audio file storage
- **Cloud CDN** - Fast delivery globally
- **Secret Manager** - Environment variables and API keys

**Docker-ready:** The Next.js project will be containerized for Cloud Run deployment in later stories.

### File Organization Strategy

**Directory Structure (following Next.js 15 App Router conventions):**

```
jabur/
├── app/                      # App Router pages, layouts, API routes
│   ├── (auth)/              # Auth route group (Story 1.8)
│   ├── (client)/            # Client/uploader interface (Story 1.8)
│   ├── (creator)/           # Creator workspace (Story 1.8)
│   ├── (editor)/            # Editor QA dashboard (Story 1.8)
│   ├── (admin)/             # Admin panel (Story 1.8)
│   ├── api/                 # API routes (Server Actions preferred)
│   ├── globals.css          # Global styles (Tailwind directives)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   └── ui/                  # shadcn/ui components (future)
├── lib/                     # Utility functions and shared logic
│   ├── actions/             # Server Actions by domain (auth, upload, task, etc.)
│   ├── db/                  # Database utilities (Prisma client)
│   ├── utils/               # Helper functions
│   └── validation/          # Zod schemas
├── prisma/                  # Database schema and migrations (Story 1.2+)
│   └── schema.prisma
├── public/                  # Static assets
├── .env.local               # Local environment variables (NOT committed)
├── .gitignore               # Git ignore rules
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

### Naming Conventions (CRITICAL - Follow Exactly)

**From Project Context:**
- **Database:** snake_case plural (`users`, `audio_uploads`, `creator_earnings`)
- **TypeScript:** camelCase variables/functions, PascalCase types/classes
- **Files:** PascalCase components (`UserCard.tsx`), kebab-case utilities
- **REST API:** Plural kebab-case (`/api/audio-uploads`)
- **Socket.io events:** `domain:action` pattern (`upload:processing`, `task:claimed`)
- **Environment vars:** SCREAMING_SNAKE_CASE (`MPESA_CONSUMER_KEY`, `DATABASE_URL`)

### Testing Standards (Future Stories)

**Testing will be added in later stories:**
- Vitest + Testing Library for unit/integration tests
- Playwright for end-to-end tests
- Test files co-located with components: `UserCard.test.tsx`

### Mobile-First Design Requirement

**From UX Design:**
- Target market: East Africa (90%+ mobile usage)
- Design priority: Mobile-first responsive design
- Tailwind CSS is perfectly suited for responsive design with utility classes
- Progressive enhancement approach

### Security Baseline

**From Project Context:**
- TLS 1.2+ enforced (via Cloud Load Balancing in production)
- Session timeout: 24h (client/creator), 8h (admin/editor)
- Account lockout after 5 failed login attempts
- 100% role separation compliance (ZERO overlap)

---

## Project Structure Notes

### Alignment with Unified Project Structure

**Next.js 15 App Router Structure:**
The project follows Next.js 15 App Router conventions with the following directory organization:

- `/app` - App Router pages, layouts, and route groups for role isolation
- `/lib` - Utility functions, Server Actions (by domain), database utilities, validation schemas
- `/components` - Reusable React components (including shadcn/ui components)
- `/prisma` - Database schema and migrations (to be added in Story 1.2)
- `/public` - Static assets (images, fonts, etc.)

**Route Groups for Role Isolation:**
Route groups will be implemented in Story 1.8 to enforce role-based access control at the file system level:
- `(auth)` - Authentication pages (login, register, etc.)
- `(client)` - Client/uploader interface
- `(creator)` - Creator workspace
- `(editor)` - Editor QA dashboard
- `(admin)` - Admin panel

**Server Actions Pattern:**
Server Actions are the preferred method for server-side operations in Next.js 15 App Router. They will be organized by domain in `/lib/actions/{domain}/`:
- `/lib/actions/auth/` - Authentication actions (register, login, logout)
- `/lib/actions/upload/` - Audio upload actions
- `/lib/actions/task/` - Task management actions
- `/lib/actions/payment/` - Payment processing actions
- `/lib/actions/qa/` - QA review actions
- `/lib/actions/admin/` - Admin operations

All Server Actions MUST use the `ApiResponse<T>` pattern for consistent error handling (defined in `/lib/utils/api-response.ts` - to be created in Story 1.2).

### Detected Conflicts or Variances

**No conflicts detected.** The Next.js 15 starter template aligns perfectly with the Architecture and Project Context requirements.

**Variance from typical Next.js projects:**
- **Strict role isolation** via route groups is unique to this project - not a standard Next.js pattern
- **Server Actions preferred over API routes** - modern Next.js best practice, but worth noting
- **ApiResponse<T> pattern for all actions** - custom pattern for error handling consistency

---

## References

### Technical Documentation

- **[Next.js 15 Documentation](https://nextjs.org/docs)** - Official Next.js documentation
- **[Next.js 15 Installation Guide](https://nextjs.org/docs/app/getting-started/installation)** - Project setup
- **[Next.js App Router](https://nextjs.org/docs/app)** - App Router architecture
- **[TypeScript with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)** - TypeScript configuration
- **[Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)** - Tailwind setup
- **[Google Cloud Run Next.js Guide](https://cloud.google.com/run/docs/quickstarts/frameworks/deploy-nextjs-service)** - Deployment target

### Project Source Documents

- **PRD** - Technical Type: SaaS B2B Platform, Complexity: Medium
- **Architecture** - Stack selection rationale (Next.js 15 + TypeScript + Tailwind)
- **Project Context** - Technology stack and version constraints, critical implementation rules
- **Epics** - Story acceptance criteria and BDD format
- **UX Design** - Tailwind CSS + shadcn/ui rationale

---

## Dev Agent Record

### Agent Model Used

<!-- To be filled by dev agent during implementation -->

### Debug Log References

<!-- To be filled by dev agent during implementation -->

### Completion Notes List

<!-- To be filled by dev agent during implementation -->

**Implementation Checklist:**
- [ ] All acceptance criteria met
- [ ] All tasks completed
- [ ] Development server runs successfully
- [ ] ESLint passes with no errors
- [ ] Git repository initialized with initial commit
- [ ] README.md updated with setup instructions (optional)

### File List

<!-- To be filled by dev agent during implementation -->

**Expected Files Created/Modified:**
- `package.json` - Dependencies and scripts (with engines field added)
- `tsconfig.json` - TypeScript configuration with strict mode
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.ts` - Next.js configuration
- `.eslintrc.json` - ESLint configuration
- `.nvmrc` - Node.js version specification (20.9.0)
- `/app/globals.css` - Global styles with Tailwind directives
- `/app/layout.tsx` - Root layout
- `/app/page.tsx` - Home page
- `/lib/utils/index.ts` - Utility functions (cn helper for class names)
- `/components/.gitkeep` - Placeholder for components directory
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

---

**Story created by:** BMAD Method - create-story workflow (YOLO mode)
**Created on:** 2025-12-24
**Epic:** 1 - Project Foundation & User Authentication
**Prerequisites:** None (greenfield project initialization)
**Blocking:** All subsequent stories in Epic 1 depend on this story's completion
