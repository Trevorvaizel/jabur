# Story 1.1: Initialize Next.js 14 Project with TypeScript and Tailwind

Status: ready-for-dev

<!-- Validated with comprehensive architecture analysis including all architectural documents -->

## Story

As a developer,
I want to initialize a Next.js 14 project with TypeScript and Tailwind CSS,
So that I have the foundational framework configured correctly for all future development.

## Acceptance Criteria

**Given** I am starting a new project
**When** I run `npx create-next-app@latest jabur --typescript --tailwind --app --import-alias "@/*"`
**Then** the project is created with Next.js 14.x (NOT 15.x)
**And** TypeScript strict mode is enabled in tsconfig.json
**And** Tailwind CSS 4.0 is configured with PostCSS
**And** App Router structure is present (NOT Pages Router)
**And** `src/` directory contains all application code
**And** Import alias `@/` is configured for clean imports from src directory
**And** ESLint is configured with Next.js recommended rules
**And** core UI dependencies are installed: `npx shadcn-ui@latest init` (shadcn/ui + Radix UI primitives)
**And** form handling dependencies installed: `npm install react-hook-form zod @hookform/resolvers`
**And** state management dependencies installed: `npm install @tanstack/react-query zustand`
**And** rich text editor installed: `npm install @tiptap/react @tiptap/starter-kit @tiptap/pm`
**And** audio player installed: `npm install wavesurfer.js`
**And** package.json verifies Next.js version is 14.x (run `npm list next` to confirm)
**And** `npm run dev` starts the development server successfully
**And** `npm run build` compiles without errors

## Tasks / Subtasks

### Phase 1: Create Next.js 14 Project with src/ Directory
- [ ] Initialize Next.js 14 project with src/ directory structure (AC: 1-7)
  - [ ] Run `npx create-next-app@latest jabur --typescript --tailwind --app --import-alias "@/*"`
  - [ ] Verify Next.js version is 14.x (NOT 15.x) in package.json
  - [ ] Verify `src/` directory was created with `src/app/` inside
  - [ ] Verify TypeScript strict mode in tsconfig.json
  - [ ] Verify Tailwind CSS 4.0 configuration in tailwind.config.ts and postcss.config.mjs
  - [ ] Verify App Router structure exists (`src/app/` directory, NOT `pages/`)
  - [ ] Verify `@/` import alias maps to `src/` in tsconfig.json paths
  - [ ] Verify ESLint is configured with Next.js recommended rules

### Phase 2: Install Core UI Dependencies
- [ ] Install shadcn/ui component library (AC: 8)
  - [ ] Run `npx shadcn-ui@latest init`
  - [ ] Select configuration options: TypeScript, App Router, Tailwind CSS 4.0, `src/` directory
  - [ ] Verify components.json is created with paths pointing to `src/components/ui`
  - [ ] Verify Radix UI primitives are installed as dependencies

### Phase 3: Install Form Handling Dependencies
- [ ] Install form management libraries (AC: 9)
  - [ ] Run `npm install react-hook-form zod @hookform/resolvers`
  - [ ] Verify versions are compatible with React 19.0.0
  - [ ] Document usage pattern: react-hook-form for forms, zod for validation

### Phase 4: Install State Management Dependencies
- [ ] Install TanStack Query and Zustand (AC: 10)
  - [ ] Run `npm install @tanstack/react-query zustand`
  - [ ] Verify TanStack Query v5 (compatible with Next.js 14 App Router)
  - [ ] Verify Zustand 4.x
  - [ ] Document pattern: TanStack Query for server state, Zustand for UI state ONLY

### Phase 5: Install Rich Text Editor
- [ ] Install Tiptap editor (AC: 11)
  - [ ] Run `npm install @tiptap/react @tiptap/starter-kit @tiptap/pm`
  - [ ] Verify compatible versions
  - [ ] Note: Will be used for creator content editing (Story 4.8)

### Phase 6: Install Audio Player
- [ ] Install wavesurfer.js (AC: 12)
  - [ ] Run `npm install wavesurfer.js`
  - [ ] Note: Will be used for creator audio playback (Story 4.4)

### Phase 7: Create Directory Structure
- [ ] Create standard Next.js + architecture-specific directories
  - [ ] Create `src/actions/` for Server Actions (Story 1.3+)
  - [ ] Create `src/services/` for business logic (Story 1.2+)
  - [ ] Create `src/repositories/` for database access (Story 1.2+)
  - [ ] Create `src/validators/` for Zod schemas (Story 1.2+)
  - [ ] Create `src/types/` for TypeScript type definitions
  - [ ] Create `src/hooks/` for custom React hooks
  - [ ] Create `src/store/` for Zustand stores (Story 1.7+)
  - [ ] Create `src/lib/` for utilities and shared logic

### Phase 8: Verification and Testing
- [ ] Verify project setup (AC: 13-14)
  - [ ] Run `npm list next` and confirm 14.x version
  - [ ] Run `npm run dev` and verify development server starts on http://localhost:3000
  - [ ] Run `npm run build` and verify build compiles without errors
  - [ ] Verify all dependencies are listed in package.json with correct versions
  - [ ] Verify `@/` alias resolves to `src/` directory

## Dev Notes

### 🚨 ARCHITECTURAL RESOLUTION: src/ Directory Structure

**RESOLVED CONFLICT:**
- Architecture documents show `src/` directory structure throughout
- Initialization uses DEFAULT Next.js 14 behavior (creates `src/` directory automatically when using App Router)
- **DO NOT use** `--no-src-dir` flag
- All application code lives in `src/` directory for cleaner project root

**File Structure Pattern:**
```
jabur/
├── src/                        # All application code (CRITICAL)
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   ├── lib/                    # Utilities
│   ├── actions/                # Server Actions
│   └── ...
├── prisma/                     # Database schema (outside src)
├── public/                     # Static assets (outside src)
├── tests/                      # Tests (outside src)
└── config files...
```

### Critical Architecture Constraints

**🚨 CRITICAL VERSION REQUIREMENT:**
- ✅ **MUST use Next.js 14.x** (NOT Next.js 15.x)
- **Reason**: NextAuth.js v5 is production-ready for Next.js 14 App Router
- Next.js 15 compatibility with NextAuth.js v5 not yet fully established
- **Source**: [core-architectural-decisions.md:93] + [project-context.md:56-62]

**Technology Stack Requirements** [Source: project-context.md:16-55]:
- **Next.js 14.x** (App Router) - Server Components and Server Actions pattern
- **TypeScript 5.x** - Strict mode enabled (tsconfig.json: `strict: true`)
- **React 19.0.0** - Latest stable with Server Components support
- **Tailwind CSS 4.0.0** - Utility-first styling
- **Node.js 20+** - LTS minimum required for Next.js 14 compatibility

**Core Dependencies Rationale** [Source: core-architectural-decisions.md:198-231]:
- **shadcn/ui + Radix UI**: Copy-paste components on Radix primitives (you own the code, fully customizable, Tailwind-native, accessible by default)
- **react-hook-form + zod**: Uncontrolled components for performance, type-safe validation, seamless shadcn/ui integration
- **TanStack Query v5**: Server state management (automatic caching, background refetching, cache invalidation) - REQUIRED for Next.js 14 App Router
- **Zustand 4.x**: UI state management ONLY (modals, sidebars, theme, transient UI) - NEVER for server data
- **Tiptap**: Modern, extensible block editor (better DX than Lexical) for creator content editing
- **wavesurfer.js**: Industry-standard waveform visualization (15K+ stars, S3 streaming support, variable speed playback)

### Comprehensive Naming Conventions

**CRITICAL: Follow these conventions exactly** [Source: project-structure-boundaries.md + implementation-patterns-consistency-rules.md]:

| Item Type | Convention | Example |
|-----------|-----------|---------|
| React Components | PascalCase | `TaskCard.tsx`, `LoginForm.tsx` |
| Utilities/Helpers | camelCase | `formatCurrency.ts`, `validateEmail.ts` |
| Server Actions | camelCase | `claimTask.ts`, `submitReview.ts` |
| Repositories | camelCase | `taskRepository.ts`, `userRepository.ts` |
| Services | camelCase | `taskService.ts`, `authService.ts` |
| API Routes | kebab-case folders | `api/webhook-stripe/route.ts` |
| Page Routes | kebab-case folders | `app/(client)/my-tasks/page.tsx` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_AUDIO_SIZE_MB`, `DEFAULT_TIER` |
| Database Tables | PascalCase | `Task`, `User`, `QaReview` |
| Database Columns | camelCase | `createdAt`, `userId`, `taskStatus` |
| Database Enums | SCREAMING_SNAKE_CASE | `TaskStatus.AVAILABLE`, `Role.CREATOR` |
| Types/Interfaces | PascalCase | `TaskData`, `ApiResponse<T>` |
| Zod Schemas | camelCase with Schema suffix | `taskSchema`, `loginSchema` |

### TypeScript Configuration Rules

**tsconfig.json MUST include** [Source: project-context.md:75-92 + starter-template-evaluation.md:61-65]:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Type Safety Patterns (MANDATORY):**
- ✅ NO implicit `any` - All function parameters and return types must be explicit
- ✅ Strict null checks - Handle `null` and `undefined` explicitly with type guards
- ✅ Use `@/` import alias for src imports (e.g., `@/lib/utils`, `@/components/ui`)
- ✅ Server Actions MUST return `ApiResponse<T>` type (see pattern below)
- ✅ Zod for runtime validation on all inputs
- ✅ Prisma-generated types from `@prisma/client`

**ApiResponse<T> Pattern** [Source: project-context.md:83-89]:
```typescript
// src/types/api.types.ts
export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

// Usage in Server Actions (Story 1.3+)
export async function claimTask(taskId: string): Promise<ApiResponse<Task>> {
  'use server'
  try {
    const task = await taskService.claim(taskId)
    return { success: true, data: task }
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'CLAIM_FAILED',
        message: error.message
      }
    }
  }
}
```

### Next.js 14 App Router Patterns

**Critical Patterns** [Source: project-context.md:155-238]:
- ✅ Use Next.js 14 App Router (NOT Pages Router, NOT Next.js 15)
- ✅ Server Components by default - Add `'use client'` only when needed (interactivity, hooks, browser APIs)
- ✅ Route groups for role isolation: `src/app/(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)` (Story 1.4)
- ✅ Server Actions in `src/actions/` directory with `'use server'` directive
- ✅ Business logic in `src/services/` (pure TypeScript, testable)
- ✅ Database access in `src/repositories/` (Prisma isolation)
- ✅ Loading states with `loading.tsx` files in route segments
- ✅ Error boundaries with `error.tsx` files (must be Client Components)
- ✅ Metadata API for SEO via `metadata` exports in layouts/pages

### Tailwind CSS 4.0 Configuration

**Expected Configuration** [Source: starter-template-evaluation.md:66-77]:
- `tailwind.config.ts` at project root
- `postcss.config.mjs` with Tailwind CSS plugin
- Responsive design utilities built-in
- Dark mode support ready (class-based strategy)
- shadcn/ui uses Tailwind exclusively (no other CSS framework)
- Custom theme configuration in tailwind.config.ts
- Hot reload via PostCSS during development

### File Structure with src/ Directory

**Expected Project Structure** [Source: project-structure-boundaries.md:1-430]:
```
jabur/
├── src/                        # All application code
│   ├── middleware.ts           # Next.js middleware (role checking)
│   ├── instrumentation.ts      # Telemetry/monitoring setup
│   ├── app/                    # Next.js App Router directory
│   │   ├── globals.css         # Global Tailwind imports
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   ├── (auth)/             # Public authentication routes (Story 1.4)
│   │   │   ├── layout.tsx
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── ...
│   │   ├── (client)/           # Uploader routes (Story 1.4)
│   │   ├── (creator)/          # Creator workspace routes (Story 1.4)
│   │   ├── (editor)/           # QA Editor routes (Story 1.4)
│   │   ├── (admin)/            # Admin panel routes (Story 1.4)
│   │   └── api/                # API routes + webhooks (minimal usage)
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── forms/              # Form components
│   │   ├── features/           # Feature-specific components
│   │   ├── layout/             # Layout components (Header, Sidebar)
│   │   └── providers/          # Context/Provider components
│   ├── lib/                    # Utility functions, configs
│   │   ├── utils.ts            # General utilities
│   │   ├── auth/               # NextAuth.js config (Story 1.3)
│   │   ├── payment/            # Stripe + M-Pesa (Story 1.9)
│   │   ├── email/              # Resend client (Story 2.1+)
│   │   ├── upload/             # S3 client (Story 1.11)
│   │   ├── socket/             # Socket.io setup (Story 1.13)
│   │   └── queue/              # BullMQ setup (Story 1.8)
│   ├── actions/                # Server Actions (Story 1.3+)
│   │   ├── auth/               # Authentication actions
│   │   ├── tasks/              # Task actions
│   │   └── ...
│   ├── services/               # Business logic (pure TypeScript)
│   │   ├── taskService.ts
│   │   ├── authService.ts
│   │   └── ...
│   ├── repositories/           # Database access layer (Prisma)
│   │   ├── taskRepository.ts
│   │   ├── userRepository.ts
│   │   └── ...
│   ├── validators/             # Zod schemas
│   │   ├── taskSchemas.ts
│   │   ├── authSchemas.ts
│   │   └── ...
│   ├── types/                  # TypeScript type definitions
│   │   ├── api.types.ts        # ApiResponse<T> and others
│   │   ├── database.types.ts   # Extended Prisma types
│   │   └── ...
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useTasks.ts
│   │   └── ...
│   └── store/                  # Zustand stores (UI state only)
│       ├── modalStore.ts
│       ├── themeStore.ts
│       └── ...
├── prisma/                     # Database schema
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── public/                     # Static assets
│   ├── fonts/
│   ├── images/
│   └── assets/
├── tests/                      # Testing (Story 1.12)
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.local                  # Environment variables (NOT committed)
├── .env.example                # Environment template (committed)
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
├── postcss.config.mjs          # PostCSS config
├── next.config.ts              # Next.js config
├── components.json             # shadcn/ui config
├── prettier.config.js          # Prettier config
├── .eslintrc.json              # ESLint config
└── .gitignore                  # Git ignore rules
```

### Critical Anti-Patterns to AVOID

**NEVER Do These** [Source: project-context.md:143-150, 230-238, 383-390, 485-493, 657-665, 827-836]:

❌ **NEVER use Next.js 15** - Conflicts with NextAuth.js v5
❌ **NEVER use Pages Router patterns** (getServerSideProps, getStaticProps) - Use App Router
❌ **NEVER use API routes for internal data fetching** - Use Server Actions or Server Components
❌ **NEVER use `'use client'` unnecessarily** - Server Components are faster and more secure
❌ **NEVER import Prisma client directly in Server Actions** - Use repository pattern
❌ **NEVER use Zustand for server data** - Always use TanStack Query or Server Components
❌ **NEVER bypass type safety with `any`** - Use `unknown` and narrow with type guards
❌ **NEVER use `@ts-ignore` or `@ts-expect-error`** - Fix the underlying type issue
❌ **NEVER use non-null assertion (`!`)** - Use type guards instead
❌ **NEVER use `var` keyword** - Use `const`/`let`
❌ **NEVER mutate function parameters** - Immutability principle
❌ **NEVER commit `.env.local` or `.env` files** - Security violation
❌ **NEVER use production credentials in development** - Use test/development keys
❌ **NEVER skip authorization checks in Server Actions** - Security critical
❌ **NEVER trust client-provided userId** - Always verify from session

### State Management Isolation (CRITICAL)

**Strict Separation** [Source: project-context.md:174-177]:
- **TanStack Query**: ALL server state (API data, database queries)
  - Automatic caching with configurable TTL
  - Background refetching and revalidation
  - Cache invalidation on mutations
  - Works seamlessly with Server Actions

- **Zustand**: UI state ONLY (modals, filters, theme, transient UI)
  - Modal open/close state
  - Sidebar expanded/collapsed
  - Active tab selection
  - Filter selections (before applied to server)
  - Theme preference (light/dark)

- **NEVER mix them** - This is architecturally critical for role isolation

### Testing Infrastructure (Story 1.12 Preview)

**Future testing setup** [Source: project-context.md:242-390]:

**Testing Frameworks:**
- **Jest** - Unit and integration testing
- **@testing-library/react** - Component testing with user-centric queries
- **Playwright** - E2E testing for multi-role user journeys

**Test Organization:**
- Unit tests: `tests/unit/` (or co-located with `.test.ts` suffix)
- Integration tests: `tests/integration/`
- E2E tests: `tests/e2e/` (`.spec.ts` suffix)

**Coverage Requirements** [Source: project-context.md:369-374]:
- **Repositories**: 90%+ coverage (critical data access)
- **Server Actions**: 80%+ coverage (business logic entry points)
- **Utilities**: 90%+ coverage (pure functions)
- **Components**: 70%+ coverage (UI rendering)

**Critical Testing Areas:**
- Role isolation testing (users cannot access routes outside their role)
- Data visibility (clients see only their tasks, creators see only claimed tasks)
- Middleware redirects AND Server Action authorization
- Socket.io integration testing
- BullMQ background job testing
- Payment provider testing (dual provider orchestration)

**Test Commands:**
```bash
npm test                 # Unit tests
npm run test:integration # Integration tests
npm run test:e2e         # E2E tests (Playwright)
npm run type-check       # TypeScript checking
npm run lint             # ESLint
npm test -- --coverage   # Coverage report
```

### Environment Variables Setup

**Create .env.example** (template to commit):
```env
# ============================================
# DATABASE
# ============================================
DATABASE_URL="postgresql://user:password@localhost:5432/jabur_dev"

# ============================================
# AUTHENTICATION (Story 1.3)
# ============================================
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"

# ============================================
# REDIS (Story 1.7)
# ============================================
REDIS_URL="redis://localhost:6379"

# ============================================
# STRIPE (Story 1.9)
# ============================================
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# ============================================
# M-PESA (Story 1.9)
# ============================================
MPESA_CONSUMER_KEY="..."
MPESA_CONSUMER_SECRET="..."
MPESA_SHORTCODE="..."
MPESA_PASSKEY="..."
MPESA_CALLBACK_URL="http://localhost:3000/api/webhooks/mpesa"

# ============================================
# TRANSCRIPTION (Story 1.10)
# ============================================
ASSEMBLYAI_API_KEY="..."
OPENAI_API_KEY="sk-..."

# ============================================
# STORAGE (Story 1.11)
# ============================================
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="us-east-1"
S3_BUCKET_NAME="jabur-uploads"
CLOUDFRONT_DOMAIN="d123456abcdef.cloudfront.net"

# ============================================
# EMAIL (Story 2.1+)
# ============================================
RESEND_API_KEY="re_..."
EMAIL_FROM="noreply@jabur.com"

# ============================================
# MONITORING (Optional)
# ============================================
SENTRY_DSN="..."
```

**Create .env.local** (NOT committed):
- Copy from .env.example
- Fill with actual development values
- Never commit this file

### Import/Export Conventions

**Import Order** [Source: project-context.md:94-101]:
```typescript
// 1. React imports
import { useState, useEffect } from 'react'

// 2. Next.js imports
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

// 3. Third-party libraries (alphabetical)
import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'

// 4. Local imports using @/ alias (alphabetical)
import { Button } from '@/components/ui/button'
import { taskRepository } from '@/repositories/taskRepository'
import { ApiResponse } from '@/types/api.types'
```

**Export Patterns:**
- ✅ **Named exports** for utilities, services, Server Actions, repositories
- ✅ **Default exports ONLY** for React components and Next.js page files (`page.tsx`, `layout.tsx`)

### Project Structure Notes

**Alignment with Unified Project Structure:**
- Uses `src/` directory for all application code (cleaner root directory)
- Follows Next.js 14 App Router conventions
- Uses `@/` import alias mapping to `src/` directory
- Separates concerns: components, lib, actions, services, repositories, types
- Config files (tsconfig, tailwind, etc.) remain at project root
- Prisma, tests, and public directories outside src

**Dependencies Alignment:**
- All dependencies match architecture requirements
- Versions are compatible with React 19.0.0 and Next.js 14.x
- No conflicts with existing dependencies
- All core dependencies installed in Story 1.1

### References

**Architecture Documents:**
- [project-context.md:16-55] - Technology Stack & Versions
- [project-context.md:56-62] - Version Constraints (CRITICAL: Next.js 14.x)
- [project-context.md:75-101] - Language-Specific Rules (TypeScript)
- [project-context.md:155-238] - Framework-Specific Rules (Next.js/React)
- [project-context.md:242-390] - Testing Rules (comprehensive)
- [project-structure-boundaries.md:1-430] - Complete File Organization with src/
- [core-architectural-decisions.md:198-231] - Frontend Architecture Decisions
- [starter-template-evaluation.md:1-56] - Why create-next-app Selected
- [implementation-patterns-consistency-rules.md] - Naming Conventions

**Epic Documents:**
- [epic-01-foundation.md:3-27] - Story 1.1 Acceptance Criteria

## Dev Agent Record

### Pre-Implementation Checklist

Before starting implementation, verify:
- [ ] Current directory is empty or is the correct project root
- [ ] Node.js 20+ is installed (`node --version`)
- [ ] npm is updated (`npm --version`)
- [ ] No existing Next.js project in current directory
- [ ] Git is initialized (or will be after project creation)

### Implementation Steps

1. **Initialize Next.js 14 Project (with src/ directory)**
   ```bash
   npx create-next-app@latest jabur --typescript --tailwind --app --import-alias "@/*"
   # When prompted:
   # - TypeScript: Yes
   # - ESLint: Yes
   # - Tailwind CSS: Yes
   # - src/ directory: Yes (IMPORTANT)
   # - App Router: Yes
   # - Import alias: @/* (default)
   ```

2. **Navigate to project directory**
   ```bash
   cd jabur
   ```

3. **Verify Next.js version and src/ structure**
   ```bash
   npm list next
   # Expected: next@14.x.x (NOT 15.x)
   ls src/
   # Expected: src/app/ directory exists
   ```

4. **Verify and update tsconfig.json for strict mode**
   ```bash
   cat tsconfig.json
   # Ensure strict: true, noImplicitAny: true, strictNullChecks: true
   # Ensure paths["@/*"] = ["./src/*"]
   ```

5. **Initialize shadcn/ui**
   ```bash
   npx shadcn-ui@latest init
   # Select: TypeScript, src/ directory, App Router, Tailwind CSS 4.0, @/ alias
   # This creates src/components/ui/ and components.json
   ```

6. **Install form handling dependencies**
   ```bash
   npm install react-hook-form zod @hookform/resolvers
   ```

7. **Install state management dependencies**
   ```bash
   npm install @tanstack/react-query zustand
   ```

8. **Install rich text editor**
   ```bash
   npm install @tiptap/react @tiptap/starter-kit @tiptap/pm
   ```

9. **Install audio player**
   ```bash
   npm install wavesurfer.js
   ```

10. **Create standard directory structure**
    ```bash
    mkdir -p src/actions
    mkdir -p src/services
    mkdir -p src/repositories
    mkdir -p src/validators
    mkdir -p src/types
    mkdir -p src/hooks
    mkdir -p src/store
    mkdir -p src/lib
    ```

11. **Create .env.example**
    - Copy template from Dev Notes section
    - Save to project root (NOT in src/)

12. **Create .env.local**
    - Copy from .env.example
    - Add placeholder values for local development
    - Ensure .gitignore includes .env.local

13. **Verify development server**
    ```bash
    npm run dev
    # Should start on http://localhost:3000
    # Visit in browser to confirm
    ```

14. **Verify production build**
    ```bash
    npm run build
    # Should compile without errors
    ```

### Verification Commands

```bash
# Check Next.js version (MUST be 14.x)
npm list next

# Check all dependencies
npm list --depth=0

# Verify src/ directory structure
ls -la src/

# Verify @/ alias works
grep "@/\*" tsconfig.json

# Start dev server
npm run dev

# Build for production
npm run build

# Run type check
npx tsc --noEmit

# Run linter
npm run lint
```

### Expected Outcomes

- ✅ Next.js 14.x project initialized (NOT 15.x)
- ✅ `src/` directory contains all application code
- ✅ TypeScript strict mode enabled
- ✅ Tailwind CSS 4.0 configured with PostCSS
- ✅ App Router structure present in `src/app/`
- ✅ `@/` import alias maps to `src/` directory
- ✅ ESLint configured with Next.js recommended rules
- ✅ shadcn/ui initialized with components in `src/components/ui/`
- ✅ All core dependencies installed (react-hook-form, zod, TanStack Query, Zustand, Tiptap, wavesurfer.js)
- ✅ Standard directory structure created (`src/actions/`, `src/services/`, etc.)
- ✅ `.env.example` and `.env.local` created at project root
- ✅ Development server runs successfully at http://localhost:3000
- ✅ Production build compiles without errors
- ✅ Git repository initialized (if not already)

### Common Issues and Solutions

**Issue: Next.js 15.x installed instead of 14.x**
- Solution: `npm uninstall next && npm install next@14`

**Issue: src/ directory not created**
- Solution: The modern `create-next-app` creates `src/` by default. If missing, manually create and move `app/` into it.

**Issue: @/ alias not resolving**
- Solution: Check tsconfig.json paths: `"@/*": ["./src/*"]`

**Issue: shadcn/ui components path incorrect**
- Solution: Check components.json aliases point to `src/components`

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Completion Notes List

- Ensure Next.js version is 14.x (NOT 15.x) - CRITICAL
- Ensure `src/` directory structure is used throughout
- Verify all acceptance criteria are met
- Document any deviations or issues encountered
- Note any warnings during installation
- Confirm all dependencies are in package.json
- Verify `@/` alias maps to `src/` correctly
- Confirm TypeScript strict mode is enabled

### File List

**Files Created/Modified:**
- `package.json` - Dependencies and scripts
- `package-lock.json` - Locked dependency versions
- `tsconfig.json` - TypeScript configuration with strict mode, `@/` → `src/` mapping
- `tailwind.config.ts` - Tailwind CSS 4.0 configuration
- `postcss.config.mjs` - PostCSS configuration with Tailwind plugin
- `next.config.ts` - Next.js configuration
- `components.json` - shadcn/ui configuration (paths to `src/components/ui`)
- `.env.example` - Environment variable template (committed)
- `.env.local` - Local environment variables (NOT committed, in .gitignore)
- `.gitignore` - Git ignore rules (includes .env.local, node_modules, etc.)
- `.eslintrc.json` - ESLint configuration with Next.js rules
- `src/app/globals.css` - Global Tailwind CSS imports
- `src/app/layout.tsx` - Root layout (generated by Next.js)
- `src/app/page.tsx` - Homepage (generated by Next.js)
- `src/components/ui/` - shadcn/ui component directory
- `src/lib/utils.ts` - Utility functions (created by shadcn/ui init)
- `src/actions/` - Server Actions directory (empty, for Story 1.3+)
- `src/services/` - Business logic directory (empty, for Story 1.2+)
- `src/repositories/` - Database access directory (empty, for Story 1.2+)
- `src/validators/` - Zod schemas directory (empty, for Story 1.2+)
- `src/types/` - TypeScript types directory (empty, for Story 1.3+)
- `src/hooks/` - Custom React hooks directory (empty)
- `src/store/` - Zustand stores directory (empty, for Story 1.7+)

**Files to Verify:**
- All files should follow TypeScript strict mode
- All imports should use `@/` alias where appropriate (resolves to `src/`)
- No syntax errors or linting errors
- No `any` types without explicit justification
- All paths reference `src/` directory structure
