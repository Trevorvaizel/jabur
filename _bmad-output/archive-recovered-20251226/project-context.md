---
project_name: 'jabur'
user_name: 'Omen'
date: '2025-12-23'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'critical_patterns']
existing_patterns_found: 47
status: 'complete'
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

**Core Framework:**
- Next.js 15 (App Router) - Use modern Server Components and Server Actions
- TypeScript 5.x - Strict mode enabled
- React 19 - Latest stable with Server Components support
- Tailwind CSS 4.x - Utility-first styling
- Node.js 20+ (LTS)

**Database & ORM:**
- PostgreSQL 15+ (Google Cloud SQL)
- Prisma 5.x with PostgreSQL adapter for serverless
- Redis 7.x (Google Cloud Memorystore) - Session storage + caching

**Authentication & State:**
- NextAuth.js v5.0.0-beta - Production-ready auth
- TanStack Query v5 - Server state management
- Zustand 4.x - UI state management

**Real-Time:**
- Socket.io 4.x - Real-time communication with Redis adapter

**Validation & Utilities:**
- Zod 3.x - Runtime type validation
- date-fns - Date manipulation (NOT moment.js)

**Cloud Infrastructure:**
- Google Cloud Run - Serverless Next.js deployment
- Google Cloud SQL (PostgreSQL) - Managed database
- Google Cloud Storage - Audio file storage
- Google Cloud Functions - Isolated webhook handlers
- Google Cloud Tasks - Background job queue
- Google Cloud Scheduler - Cron-like job scheduling

**Payment Integration:**
- M-Pesa Business API (Safaricom) - Primary payment provider for East Africa

**Version Constraints:**
- MUST use Next.js 15 App Router (NOT Pages Router)
- MUST use NextAuth.js v5.0.0-beta (v4 is incompatible with App Router)
- PostgreSQL MUST be 15+ for required RLS features
- Node.js MUST be 20+ for Next.js 15 compatibility

---

## Critical Implementation Rules

### Language-Specific Rules (TypeScript)

**TypeScript Configuration:**
- Strict mode MUST be enabled (`strict: true`)
- No implicit any - All types must be explicit
- Strict null checks - Handle null/undefined explicitly
- Use `@/` import alias for root imports (e.g., `@/lib/utils`, `@/components/ui`)

**Type Safety Patterns:**
- ALWAYS use `ApiResponse<T>` type for ALL Server Actions and API routes
- Use Zod for runtime validation - Import schemas from `/lib/validation/`
- Server Actions MUST use `'use server'` directive at top of file
- Never bypass type safety with `any` type - Use `unknown` and narrow with type guards

**Import/Export Conventions:**
- Named exports for utilities and Server Actions (NOT default exports)
- Default exports ONLY for React components and page files
- Group imports: React → Next.js → Third-party → Local (@/ imports)

**Error Handling:**
- Server Actions MUST return `ApiResponse<T>` - Never throw errors directly
- Use try/catch and return `success(data)` or `error(code, message)`
- Database errors map to `BUSINESS_*` error codes
- External API errors map to `EXTERNAL_*` error codes

**Async/Await:**
- ALWAYS use async/await (NOT Promise.then() chains)
- Server Components can be async - Use for data fetching
- Client Components CANNOT be async - Use useEffect + useState or TanStack Query

**Critical Anti-Patterns:**
- ❌ NEVER use `any` type
- ❌ NEVER use `@ts-ignore` or `@ts-expect-error`
- ❌ NEVER mix Promise.then() with async/await
- ❌ NEVER use `var` - Use `const` by default, `let` only when reassignment needed

### Framework-Specific Rules (Next.js/React/Prisma)

**Next.js 15 App Router:**
- Use route groups for role isolation: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- NEVER cross route group boundaries - Each role is architecturally isolated
- Default to Server Components - Only use Client Components when needed (`'use client'`)
- Server Components CAN be async - Client Components CANNOT be async
- Place Server Actions in `/lib/actions/{domain}/` NOT in component files
- Use `loading.tsx` for automatic loading states, `error.tsx` for error boundaries
- Middleware in `/src/middleware.ts` runs on ALL routes - Use for role-based protection

**React 19 Patterns:**
- File naming: PascalCase for components (`UserCard.tsx`)
- One component per file, co-locate tests (`UserCard.test.tsx`)
- NEVER call hooks conditionally or in loops
- State management boundaries: TanStack Query (server state), Zustand (UI state), React Hook Form (forms)
- Use React.memo() and useMemo() sparingly - Only for expensive operations
- Lazy load heavy components: `const Editor = lazy(() => import('./Editor'))`

**Prisma ORM:**
- Table names: snake_case, plural (`users`, `audio_uploads`)
- Column names: snake_case (`user_id`, `created_at`)
- Use Prisma Client singleton from `/lib/db/client.ts`
- Use transactions for multi-table operations: `prisma.$transaction([...])`
- Generate migrations: `npx prisma migrate dev --name descriptive_name`
- ALWAYS run `prisma generate` after schema changes
- Implement RLS (Row-Level Security) checks in queries for role isolation

**TanStack Query:**
- Query keys: Hierarchical array format `['domain', id?, filters?]`
- Examples: `['tasks']`, `['tasks', taskId]`, `['tasks', { level: 3 }]`
- Call Server Actions from mutation functions
- Implement optimistic updates for instant UI feedback
- Invalidate related queries on mutation success

**Critical Framework Anti-Patterns:**
- ❌ NEVER use fetch() directly in components - Use Server Actions
- ❌ NEVER use Pages Router patterns (getServerSideProps, getStaticProps)
- ❌ NEVER forget `'use client'` when using hooks
- ❌ NEVER mutate Prisma data directly - Use Prisma methods

### Critical Project-Specific Patterns

**Naming Conventions (Follow Exactly):**
- Database: snake_case plural (`users`, `audio_uploads`, `creator_earnings`)
- TypeScript: camelCase vars/functions, PascalCase types/classes
- Files: PascalCase components, kebab-case utilities
- REST API: Plural kebab-case (`/api/audio-uploads`)
- Socket.io events: `domain:action` (e.g., `upload:processing`, `task:claimed`)
- Environment vars: SCREAMING_SNAKE_CASE (`MPESA_CONSUMER_KEY`, `DATABASE_URL`)

**Role Isolation (NON-NEGOTIABLE):**
- 3-layer enforcement: File system (route groups) + Middleware + Database (RLS)
- NEVER allow same email for client AND creator roles
- NEVER show client pricing to creators - Show task value only
- Device fingerprinting prevents multi-account gaming
- Email normalization detects gmail+tags variations

**M-Pesa Integration (Primary Payment for East Africa):**
- STK Push for client payments - Webhook: `/api/webhooks/mpesa/stk-callback`
- B2C API for creator payouts - Weekly batch on Sundays, KES 2,000 minimum
- Rate multipliers: 0.8x (Probationary) to 1.5x (Expert)
- OAuth tokens in Secret Manager (NEVER plaintext)
- 7-year transaction retention for compliance

**Socket.io Real-Time Updates:**
- Rooms: `client:{userId}`, `creator:level-{N}`, `editor:{userId}`, `admin`
- Event naming: `domain:action` pattern
- Redis adapter REQUIRED for Cloud Run multi-instance coordination
- Graceful degradation if WebSocket unavailable

**Audio Lifecycle (7-Day Retention):**
- Cloud Storage Object Lifecycle policy auto-deletes after 7 days
- Countdown starts after QA completion
- Cloud Scheduler daily cleanup at 2 AM UTC
- NEVER manually delete - Let automation handle it

**Creator Level System:**
- 5 tiers: Probationary (0-9), Junior (10-29), Mid-Level (30-99), Senior (100-299), Expert (300+)
- Affects: Task filtering (WHERE clause), payout calculation, UI access control
- Admin can manually promote/demote with audit log

**Critical Security Rules:**
- TLS 1.2+ enforced (Cloud Load Balancing)
- Session timeout: 24h (client/creator), 8h (admin/editor)
- Account lockout after 5 failed login attempts
- 100% role separation compliance (ZERO overlap)

**NEVER Do These:**
- ❌ Store M-Pesa credentials in code - Use Secret Manager
- ❌ Bypass ApiResponse<T> pattern - Breaks error handling
- ❌ Cross route group boundaries - Violates role isolation
- ❌ Skip Zod validation on user input - Security risk
- ❌ Hardcode creator levels - Must be database-driven
- ❌ Use moment.js - Use date-fns instead
- ❌ Client-side only auth - Must be server-enforced

**Performance Optimization:**
- Redis caching: Sessions, creator levels, rate limiting
- Cloud CDN: Audio files (7-day lifecycle), static assets
- Database indexes on ALL foreign keys
- TanStack Query optimistic updates for instant UX
- Lazy load: Audio player, rich editor, canvas editor
- Cloud Run: 0-100 instances, 80 req/instance, 70% CPU target

---

## Quick Reference for AI Agents

**Before implementing ANY code:**
1. Check architecture.md for detailed decisions
2. Use ApiResponse<T> for ALL Server Actions/API routes
3. Validate input with Zod schemas from `/lib/validation/`
4. Respect role isolation - NEVER cross route group boundaries
5. Follow naming conventions exactly (see above)
6. Use Server Actions, NOT fetch() in components
7. Implement RLS checks for database queries
8. Test with multiple roles to verify isolation

**Critical Files to Reference:**
- Architecture: `_bmad-output/architecture.md`
- API Response Type: `/lib/utils/api-response.ts`
- Validation Schemas: `/lib/validation/`
- Prisma Client: `/lib/db/client.ts`

**When in doubt:**
- Refer to architecture document for detailed guidance
- Follow established patterns from existing code
- Maintain consistency with ApiResponse<T> error handling
- Enforce role isolation at all layers

---

## Usage Guidelines

**For AI Agents:**
- Read this file BEFORE implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Check architecture.md for detailed decisions
- Never bypass established patterns for convenience

**For Humans:**
- Keep this file lean and focused on agent needs
- Update when technology stack or patterns change
- Review quarterly for outdated rules
- Remove rules that become obvious over time
- Add new patterns as they emerge from implementation

**Maintenance:**
- Last Updated: 2025-12-23
- Update after major architectural changes
- Sync with architecture.md when it changes
- Remove redundant information to keep context lean

---

**Generated by:** BMAD Method - Generate Project Context Workflow
**For Project:** jabur
**Purpose:** Ensure consistent AI agent implementation following architectural decisions
