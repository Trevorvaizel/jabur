---
project_name: 'jabur'
user_name: 'Omen'
date: '2025-12-27'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'code_quality_rules', 'workflow_rules', 'critical_rules']
architecture_source: '_bmad-output/architecture.md'
status: 'completed'
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

**Core Framework:**
- **Next.js 14** (App Router) - Use Server Components and Server Actions pattern
- **TypeScript 5.x** - Strict mode enabled
- **React 19.0.0** - Latest stable with Server Components support
- **Tailwind CSS 4.0.0** - Utility-first styling
- **Node.js 20+** (LTS minimum)

**Database & ORM:**
- **Railway PostgreSQL** - Managed PostgreSQL database
- **Prisma** (latest stable) - Type-safe ORM with PostgreSQL adapter
- **Railway Redis** - Session storage, caching, BullMQ queue backend

**Authentication & State:**
- **NextAuth.js v5** (Auth.js) - Production auth with Next.js 14 App Router
- **TanStack Query v5** - Server state management (formerly React Query)
- **Zustand 4.x** - UI state management only

**Real-Time & Background:**
- **Socket.io 4.x** - Real-time communication with Redis adapter for horizontal scaling
- **BullMQ 5.x** - Background job processing (email, notifications, payments)

**External Services:**
- **Stripe** - Global payment processing (credit cards, bank transfers)
- **M-Pesa Daraja API** - East African mobile money (Kenya, Tanzania) - MANDATORY for launch
- **Resend** - Transactional email delivery
- **Cloudinary** - File upload and storage (audio files, user content)
- **AssemblyAI** - Primary transcription service (OpenAI Whisper as fallback)

**Validation & Utilities:**
- **Zod 3.x** - Runtime type validation for all Server Actions and API routes
- **bcryptjs** - Password hashing (NOT bcrypt - compatibility with serverless)
- **axios** - HTTP client for external API calls (M-Pesa, AssemblyAI)

**Testing:**
- **Playwright** - E2E testing for multi-role user journeys
- **Jest** - Unit and integration testing
- **@testing-library/react** - Component testing

**Version Constraints (CRITICAL):**
- ✅ MUST use Next.js 14 App Router (NOT Next.js 15, NOT Pages Router)
- ✅ NextAuth.js v5 is REQUIRED for Next.js 14 App Router compatibility (v4 incompatible)
- ✅ TanStack Query v5 for Server Actions integration
- ✅ Node.js MUST be 20+ for Next.js 14 compatibility
- ✅ PostgreSQL 15+ REQUIRED for Row-Level Security features
- ⚠️ Current package.json shows Next.js 15.1.0 - This CONFLICTS with architecture (Next.js 14)

**Infrastructure:**
- **Railway** - Deployment platform with automatic PostgreSQL + Redis provisioning
- **Railway PostgreSQL** - Managed database with automatic DATABASE_URL injection
- **Railway Redis** - Managed Redis with automatic REDIS_URL injection
- **Environment Variables** - All secrets via Railway environment variables, never committed

---

## Critical Implementation Rules

### Language-Specific Rules (TypeScript)

**TypeScript Configuration:**
- ✅ Strict mode MUST be enabled (`strict: true` in tsconfig.json)
- ✅ No implicit any - All function parameters and return types must be explicit
- ✅ Strict null checks - Handle `null` and `undefined` explicitly with type guards
- ✅ Use `@/` import alias for root imports (e.g., `@/lib/utils`, `@/components/ui`, `@/actions/auth`)

**Type Safety Patterns:**
- ✅ ALWAYS use `ApiResponse<T>` type for ALL Server Actions and API routes
  ```typescript
  // src/types/api.types.ts
  export type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: { code: string; message: string; details?: unknown } }
  ```
- ✅ Use Zod for runtime validation - Import schemas from `@/validators/`
- ✅ Server Actions MUST have `'use server'` directive at top of file
- ✅ Never bypass type safety with `any` - Use `unknown` and narrow with type guards

**Import/Export Conventions:**
- ✅ Named exports for utilities, services, and Server Actions (NOT default exports)
- ✅ Default exports ONLY for React components and Next.js page files
- ✅ Group imports in this order:
  1. React imports
  2. Next.js imports (next/*, next-auth/*)
  3. Third-party libraries (alphabetical)
  4. Local imports using @/ alias (alphabetical)

**Error Handling:**
- ✅ Server Actions MUST return `ApiResponse<T>` - NEVER throw errors directly to client
- ✅ Use try/catch and return structured responses:
  ```typescript
  try {
    const result = await service.doSomething()
    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: { code: 'OPERATION_FAILED', message: error.message } }
  }
  ```
- ✅ Error code naming: `SCREAMING_SNAKE_CASE` (e.g., `UNAUTHORIZED`, `TASK_ALREADY_CLAIMED`)
- ✅ Database errors → `DATABASE_*` codes (e.g., `DATABASE_CONNECTION_FAILED`)
- ✅ External API errors → `EXTERNAL_*` codes (e.g., `EXTERNAL_STRIPE_ERROR`, `EXTERNAL_MPESA_TIMEOUT`)

**Async/Await Patterns:**
- ✅ ALWAYS use async/await (NEVER use `.then()` chains)
- ✅ Server Components can be async - Use for data fetching:
  ```typescript
  export default async function Page() {
    const data = await fetchData()
    return <div>{data}</div>
  }
  ```
- ✅ Client Components CANNOT be async - Use `useEffect` + `useState` or TanStack Query hooks
- ✅ Server Actions are async by default - Always return `Promise<ApiResponse<T>>`

**Prisma Type Usage:**
- ✅ Use Prisma-generated types from `@prisma/client` (e.g., `User`, `Task`, `Wallet`)
- ✅ For partial types, use Prisma helpers: `Prisma.UserSelect`, `Prisma.TaskInclude`
- ✅ Enums use SCREAMING_SNAKE_CASE values:
  ```typescript
  enum UserRole {
    CLIENT = "CLIENT",
    CREATOR = "CREATOR",
    EDITOR = "EDITOR",
    ADMIN = "ADMIN"
  }
  ```

**Critical Anti-Patterns:**
- ❌ NEVER use `any` type - Use `unknown` and narrow with type guards
- ❌ NEVER use `@ts-ignore` or `@ts-expect-error` - Fix the underlying type issue
- ❌ NEVER mix Promise `.then()` with async/await - Choose one pattern and stick to it
- ❌ NEVER use `var` - Use `const` by default, `let` only when reassignment needed
- ❌ NEVER mutate function parameters - Return new objects/arrays instead
- ❌ NEVER use non-null assertion (`!`) - Use type guards or optional chaining (`?.`)

---

### Framework-Specific Rules (Next.js/React/Prisma)

**Next.js 14 App Router Patterns:**
- ✅ Use Next.js 14 App Router (NOT Pages Router, NOT Next.js 15)
- ✅ Route groups for role isolation: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- ✅ Server Components by default - Add `'use client'` only when needed (interactivity, hooks, browser APIs)
- ✅ Server Actions in `src/actions/` directory with `'use server'` directive
- ✅ Metadata API for SEO - Export `metadata` object from page files
- ✅ Loading states with `loading.tsx` files in route segments
- ✅ Error boundaries with `error.tsx` files (must be Client Components)
- ✅ Layouts for shared UI - `layout.tsx` files wrap child pages/layouts

**React 19 Patterns:**
- ✅ Hooks ONLY in Client Components - Add `'use client'` directive at top of file
- ✅ Component naming: PascalCase for components, camelCase for non-component files
- ✅ Props destructuring in function signature for clarity
- ✅ Use `useTransition` for non-urgent state updates (e.g., filtering large lists)
- ✅ Use `useOptimistic` for optimistic UI updates (task claims, likes, etc.)
- ✅ Avoid `useEffect` for data fetching - Use TanStack Query in Client Components or async Server Components

**State Management Patterns:**
- ✅ **TanStack Query (React Query) for server state** - API data, database queries, external services
- ✅ **Zustand for UI state only** - Modals, sidebars, theme, transient UI state
- ✅ NEVER use Zustand for server data - Always use TanStack Query or Server Components
- ✅ Server state mutations via Server Actions, not API routes (unless external webhooks)

**TanStack Query Patterns:**
- ✅ Query keys follow format: `['entity', id/filter]` (e.g., `['task', taskId]`, `['tasks', { status: 'AVAILABLE' }]`)
- ✅ Use `useMutation` for Server Actions that modify data
- ✅ Invalidate queries after mutations: `queryClient.invalidateQueries({ queryKey: ['tasks'] })`
- ✅ Optimistic updates for instant UI feedback:
  ```typescript
  const mutation = useMutation({
    mutationFn: claimTaskAction,
    onMutate: async (taskId) => {
      await queryClient.cancelQueries({ queryKey: ['task', taskId] })
      const previousTask = queryClient.getQueryData(['task', taskId])
      queryClient.setQueryData(['task', taskId], { ...previousTask, status: 'CLAIMED' })
      return { previousTask }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(['task', variables.taskId], context.previousTask)
    }
  })
  ```

**Prisma ORM Patterns:**
- ✅ Access Prisma ONLY through repository pattern - NEVER import `prisma` client directly in Server Actions
- ✅ Repositories in `src/repositories/` - One file per model (e.g., `userRepository.ts`, `taskRepository.ts`)
- ✅ Repository method naming: `find*`, `create*`, `update*`, `delete*` (e.g., `findUserById`, `createTask`)
- ✅ Use transactions for multi-model operations:
  ```typescript
  await prisma.$transaction(async (tx) => {
    await tx.wallet.update({ ... })
    await tx.transaction.create({ ... })
  })
  ```
- ✅ Always include necessary relations using `include` - Avoid N+1 queries
- ✅ Use Prisma enums from schema (e.g., `TaskStatus.AVAILABLE`, `UserRole.CREATOR`)
- ✅ Index frequently queried fields in schema - `@@index([field])` for single, `@@index([field1, field2])` for composite

**NextAuth.js v5 (Auth.js) Patterns:**
- ✅ Use `auth()` helper in Server Components and Server Actions to get session
- ✅ Middleware in `middleware.ts` for route protection - Match role-based route groups
- ✅ Session callbacks in `auth.config.ts` to add custom fields (userId, role)
- ✅ NEVER store passwords in session - Only store userId and role
- ✅ Credentials provider for email/password - GoogleProvider/GithubProvider for OAuth
- ✅ Session strategy: `'jwt'` for serverless compatibility (NOT database sessions)

**File Naming Conventions:**
- ✅ React components: PascalCase (e.g., `TaskCard.tsx`, `UserProfile.tsx`)
- ✅ Utilities/helpers: camelCase (e.g., `formatCurrency.ts`, `validateEmail.ts`)
- ✅ Server Actions: camelCase (e.g., `claimTask.ts`, `submitTranscript.ts`)
- ✅ Repositories: camelCase (e.g., `taskRepository.ts`, `walletRepository.ts`)
- ✅ API routes: kebab-case folders (e.g., `app/api/webhook-stripe/route.ts`)
- ✅ Page routes: kebab-case folders (e.g., `app/(client)/my-tasks/page.tsx`)

**Critical Anti-Patterns:**
- ❌ NEVER use API routes for internal data fetching - Use Server Actions or Server Components
- ❌ NEVER import `prisma` client directly - Always use repository pattern
- ❌ NEVER use `'use client'` unnecessarily - Server Components are faster and more secure
- ❌ NEVER fetch data in Client Components with `useEffect` - Use TanStack Query or Server Components
- ❌ NEVER store sensitive data in Zustand - UI state only, never secrets or auth tokens
- ❌ NEVER use Pages Router patterns (getServerSideProps, getStaticProps) - Use App Router patterns
- ❌ NEVER bypass middleware auth checks - Always validate session in Server Actions too

---

### Testing Rules

**Testing Framework Setup:**
- ✅ **Playwright** - E2E testing for multi-role user journeys and route isolation
- ✅ **Jest** - Unit and integration testing for repositories, services, and utilities
- ✅ **@testing-library/react** - Component testing with user-centric queries
- ✅ Use `@testing-library/jest-dom` for extended matchers (`toBeInTheDocument`, `toHaveAttribute`)

**Test Organization:**
- ✅ **Unit tests**: Co-located with source files (e.g., `taskRepository.test.ts` next to `taskRepository.ts`)
- ✅ **Integration tests**: `tests/integration/` directory for multi-service tests (Socket.io, BullMQ, payment orchestration)
- ✅ **E2E tests**: `tests/e2e/` directory for full user journey tests (role isolation, auth flows, task workflows)
- ✅ Test file naming: `*.test.ts` for unit tests, `*.spec.ts` for E2E tests

**Test Execution Commands:**
```bash
npm test                 # Run unit tests (co-located)
npm run test:integration # Run integration tests
npm run test:e2e         # Run E2E tests (Playwright)
npm run type-check       # Run TypeScript type checking
npm run lint             # Run ESLint
```

**Role Isolation Testing (CRITICAL):**
- ✅ ALWAYS test that users cannot access routes outside their role
- ✅ Test data visibility: Clients see only their claimed tasks, Creators see only their projects
- ✅ Use Playwright for role-based route protection tests:
  ```typescript
  test('client cannot access creator routes', async ({ page }) => {
    await loginAs(page, 'client@test.com')
    await page.goto('/creator/dashboard')
    await expect(page).toHaveURL('/client/dashboard') // Should redirect
  })
  ```
- ✅ Test middleware redirects AND Server Action authorization (both layers)

**Socket.io Integration Testing:**
- ✅ Test real-time event broadcasting to correct rooms (project rooms, user rooms)
- ✅ Mock Socket.io client connections with role-specific auth tokens
- ✅ Verify events are NOT sent to unauthorized users:
  ```typescript
  it('should broadcast task:claimed to project room only', (done) => {
    creatorSocket.on('task:update', (data) => {
      expect(data.taskId).toBe(taskId)
      done()
    })
    clientSocket.emit('task:claimed', { taskId, projectId })
  })
  ```
- ✅ Use `beforeAll` to setup test Socket.io server, `afterAll` to cleanup

**BullMQ Background Job Testing:**
- ✅ Test job processing with mocked external services (Resend, Stripe, M-Pesa)
- ✅ Verify retry logic with exponential backoff for failed jobs
- ✅ Test job completion and failure states:
  ```typescript
  it('should retry failed jobs with exponential backoff', async () => {
    jest.spyOn(resend.emails, 'send')
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({ id: 'success' })

    const job = await emailQueue.add('send-welcome', data, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 1000 }
    })

    await job.waitUntilFinished()
    expect(job.attemptsMade).toBe(2)
  })
  ```

**Payment Provider Testing:**
- ✅ Test dual payment orchestration (Stripe + M-Pesa routing)
- ✅ Mock M-Pesa Daraja API responses (B2C, webhook callbacks)
- ✅ Test fallback to Stripe when M-Pesa fails
- ✅ Verify payment method routing based on user's `preferredPaymentMethod`:
  ```typescript
  it('should route to M-Pesa for MPESA payment method', async () => {
    const mockUser = { preferredPaymentMethod: 'MPESA', mpesaPhoneNumber: '+254712345678' }
    jest.spyOn(userRepository, 'findById').mockResolvedValue(mockUser)
    const mpesaSpy = jest.spyOn(mpesaClient, 'initiateB2C')

    await paymentOrchestrator.processCreatorWithdrawal('user-123', 50.00)

    expect(mpesaSpy).toHaveBeenCalledWith({
      phoneNumber: '+254712345678',
      amount: 50.00
    })
  })
  ```

**Repository Testing Patterns:**
- ✅ ALWAYS mock Prisma client in repository tests - Use `jest.spyOn(prisma.task, 'findMany')`
- ✅ Test repository methods return correct types (Prisma-generated models)
- ✅ Verify `include` and `select` statements fetch necessary relations
- ✅ Test transaction rollback scenarios:
  ```typescript
  it('should rollback transaction on wallet update failure', async () => {
    jest.spyOn(prisma.wallet, 'update').mockRejectedValue(new Error('DB error'))

    await expect(walletRepository.processPayment(userId, amount))
      .rejects.toThrow('DB error')

    // Verify transaction was not created
    const transactions = await prisma.transaction.findMany({ where: { userId } })
    expect(transactions).toHaveLength(0)
  })
  ```

**Server Action Testing:**
- ✅ Test Server Actions return `ApiResponse<T>` structure (`success: true/false`)
- ✅ Mock `auth()` helper for session validation tests
- ✅ Verify authorization checks before business logic execution
- ✅ Test error scenarios return proper error codes (`UNAUTHORIZED`, `TASK_ALREADY_CLAIMED`, etc.)

**Component Testing (React Testing Library):**
- ✅ Use `render()` from @testing-library/react for Client Components
- ✅ Query by user-visible text, roles, labels - NOT test IDs (unless necessary)
- ✅ Test user interactions with `userEvent.click()`, `userEvent.type()`
- ✅ Mock Server Actions with `jest.mock('@/actions/taskActions')`
- ✅ Test loading and error states (TanStack Query integration)

**Mock Usage Conventions:**
- ✅ Mock external APIs (Stripe, M-Pesa, Resend, Cloudinary, AssemblyAI) - NEVER call real APIs in tests
- ✅ Mock Prisma client for repository tests - Use `jest.spyOn()` for granular control
- ✅ Mock Redis for BullMQ tests - Use in-memory Redis or mock IORedis
- ✅ Use `jest.clearAllMocks()` in `beforeEach` to reset mocks between tests

**Test Coverage Requirements:**
- ✅ Repositories: 90%+ coverage (critical data access layer)
- ✅ Server Actions: 80%+ coverage (authorization + business logic)
- ✅ Utilities/helpers: 90%+ coverage (pure functions, easy to test)
- ✅ Components: 70%+ coverage (focus on critical user flows)
- ✅ Run coverage: `npm test -- --coverage`

**E2E Test Patterns (Playwright):**
- ✅ Test complete user journeys: Sign up → Login → Claim task → Submit → Review → Payment
- ✅ Use `data-testid` attributes for stable selectors in dynamic content
- ✅ Test role-specific dashboards render correct data
- ✅ Verify real-time updates (task claims, notifications) using `page.waitForSelector()`
- ✅ Test responsive design: `test.use({ viewport: { width: 375, height: 667 } })` for mobile

**Critical Anti-Patterns:**
- ❌ NEVER call real external APIs in tests - Always mock Stripe, M-Pesa, Resend, etc.
- ❌ NEVER skip authorization tests - Every protected Server Action needs auth failure tests
- ❌ NEVER use `sleep()` or `setTimeout()` - Use Playwright's `waitFor*` methods or Jest's async utilities
- ❌ NEVER test implementation details - Test user-facing behavior, not internal state
- ❌ NEVER share mutable state between tests - Use `beforeEach` to reset state
- ❌ NEVER commit `.env.test` with real API keys - Use mock values only

---

### Code Quality & Style Rules

**Linting & Formatting:**
- ✅ **ESLint** - Next.js recommended rules + custom naming convention enforcement
- ✅ **Prettier** - Automatic code formatting (delegates to IDE/pre-commit hooks)
- ✅ Run `npm run lint` before committing - CI will block PRs with linting errors
- ✅ ESLint auto-fix: `npm run lint -- --fix`

**ESLint Configuration (Critical Rules):**
- ✅ Enforce naming conventions with `eslint-plugin-naming-convention`
- ✅ Require explicit return types on Server Actions (`@typescript-eslint/explicit-function-return-type`)
- ✅ Prevent Zustand usage for data fetching patterns (custom rule)
- ✅ Enforce `'use server'` directive in Server Action files
- ✅ Warn on unused variables and imports

**Naming Conventions Summary:**

**Database (Prisma Schema):**
- ✅ Tables: PascalCase (e.g., `Task`, `User`, `TaskSubmission`)
- ✅ Columns: camelCase (e.g., `createdAt`, `userId`, `taskStatus`)
- ✅ Enums: SCREAMING_SNAKE_CASE (e.g., `TaskStatus.AVAILABLE`, `UserRole.CREATOR`)
- ✅ Foreign Keys: Explicit pattern - `creatorId String` + `creator User @relation(...)`
- ✅ Indexes: `idx_{table}_{columns}` (e.g., `idx_task_creator_status`)

**API Routes:**
- ✅ REST endpoints: Plural nouns, kebab-case (e.g., `/api/tasks`, `/api/qa-reviews`)
- ✅ Dynamic routes: Descriptive params (e.g., `/api/tasks/[taskId]`, NOT `/api/tasks/[id]`)
- ✅ Webhooks: `/api/webhooks/{provider}` (e.g., `/api/webhooks/stripe`, `/api/webhooks/mpesa`)
- ✅ Query params: camelCase (e.g., `?userId=123&sortBy=createdAt`)

**Server Actions:**
- ✅ Naming: verbNoun (e.g., `createTask()`, `claimTask()`, `submitTaskDeliverable()`)
- ✅ File naming: camelCase (e.g., `claimTask.ts`, `submitTranscript.ts`)
- ✅ Location: `src/actions/` directory

**Code Files:**
- ✅ React components: PascalCase files matching component name (e.g., `TaskCard.tsx` exports `TaskCard`)
- ✅ Utility functions: kebab-case files (e.g., `format-currency.ts`, `validate-audio.ts`)
- ✅ Repositories: camelCase files (e.g., `taskRepository.ts`, `walletRepository.ts`)
- ✅ Constants: SCREAMING_SNAKE_CASE (e.g., `MAX_AUDIO_SIZE_MB`, `TASK_CLAIM_TIMEOUT_HOURS`)
- ✅ Type definitions: PascalCase (e.g., `ApiResponse<T>`, `TaskWithRelations`)

**Import Order (Enforced by ESLint):**
1. React imports (`import React from 'react'`)
2. Next.js imports (`import { redirect } from 'next/navigation'`)
3. Third-party libraries - alphabetical (`import { z } from 'zod'`)
4. Local imports with @/ alias - alphabetical (`import { formatCurrency } from '@/lib/utils'`)

**File Organization:**
- ✅ Route groups by role: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- ✅ Components organized by feature: `components/tasks/`, `components/creator/`, `components/admin/`
- ✅ Utilities in `src/lib/` - Group by domain (e.g., `lib/currency/`, `lib/validation/`)
- ✅ Types in `src/types/` - One file per domain (e.g., `types/api.types.ts`, `types/task.types.ts`)
- ✅ Repositories in `src/repositories/` - One file per model
- ✅ Server Actions in `src/actions/` - Group by domain (e.g., `actions/task/`, `actions/auth/`)

**Code Organization Patterns:**
- ✅ Co-locate tests with source files: `taskRepository.ts` + `taskRepository.test.ts`
- ✅ One component per file - No multiple exports of React components
- ✅ Extract shared logic to utilities, NOT component helpers
- ✅ Keep Server Components simple - Delegate complex logic to repositories/services

**Documentation Standards:**
- ✅ TypeScript types ARE the documentation - No JSDoc required for typed functions
- ✅ Add comments ONLY for non-obvious business logic or complex algorithms
- ✅ README.md for project setup and development instructions
- ✅ API documentation (Swagger/OpenAPI) deferred to post-MVP
- ✅ Inline comments should explain "why", not "what" (code should be self-documenting)

**Code Review Checklist:**
- ✅ Follows naming conventions (database, API, code files)
- ✅ Server Actions return `ApiResponse<T>` type
- ✅ No direct Prisma client imports outside repositories
- ✅ Authorization checks in Server Actions before business logic
- ✅ TanStack Query for server state, Zustand only for UI state
- ✅ No `any` types - Use `unknown` and type guards
- ✅ Tests included for repositories, Server Actions, and critical utilities
- ✅ ESLint passes with no errors (warnings acceptable)

**Git Workflow:**
- ✅ Branch naming: `feature/{epic-number}-{story-number}-{short-description}` (e.g., `feature/1-2-task-claim-ui`)
- ✅ Commit messages: `{type}: {description}` (e.g., `feat: add task claim button`, `fix: resolve wallet balance race condition`)
- ✅ Commit types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`
- ✅ PR titles: Match story title (e.g., "Story 1.2: Task Claim UI")
- ✅ PR description: Link to story file, list acceptance criteria met

**Pattern Violation Response:**
- ✅ Document violation in code review comments
- ✅ Update implementation to match documented patterns
- ✅ If pattern is insufficient, propose pattern update via architecture amendment (NOT per-story deviation)
- ✅ Patterns are living documents - Update architecture.md if pattern needs refinement

**Critical Anti-Patterns:**
- ❌ NEVER violate naming conventions - Inconsistency breaks AI agent coordination
- ❌ NEVER skip ESLint fixes - Linting errors block CI/CD pipeline
- ❌ NEVER use `any` type - Defeats purpose of TypeScript
- ❌ NEVER commit commented-out code - Use git history instead
- ❌ NEVER use `TODO` comments without GitHub issue reference (e.g., `// TODO(#123): Fix edge case`)
- ❌ NEVER add JSDoc to simple, typed functions - TypeScript types are sufficient
- ❌ NEVER deviate from architecture patterns without updating architecture.md first

---

### Development Workflow Rules

**Local Development Setup:**
```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env.local
# Configure: DATABASE_URL, NEXTAUTH_SECRET, STRIPE_SECRET_KEY, RESEND_API_KEY, CLOUDINARY_URL

# 3. Setup database
npx prisma generate
npx prisma migrate dev
npx prisma db seed

# 4. Start Redis (for local BullMQ and sessions)
docker-compose up -d redis

# 5. Start development server
npm run dev  # http://localhost:3000
```

**Environment Variable Management:**
- ✅ **Local development**: Use `.env.local` (NEVER commit this file)
- ✅ **Production**: Railway auto-injects `DATABASE_URL` and `REDIS_URL`
- ✅ **Required secrets** (manual config in Railway):
  - `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
  - `STRIPE_SECRET_KEY` - From Stripe dashboard
  - `RESEND_API_KEY` - From Resend dashboard
  - `CLOUDINARY_URL` - From Cloudinary dashboard
  - `MPESA_CONSUMER_KEY`, `MPESA_CONSUMER_SECRET` - From Safaricom Daraja portal
- ✅ **Public variables**: Prefix with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_URL`)
- ✅ `.env.example` - Template with placeholder values (safe to commit)

**Environment Variable Security (CRITICAL):**
- ✅ NEVER use production credentials in local development
- ✅ Local dev: Stripe test keys, M-Pesa sandbox, separate Cloudinary account
- ✅ Rotate NEXTAUTH_SECRET after security incidents
- ✅ Use `.env.local` for local secrets, Railway environment variables for production

**Hot Module Replacement (Development):**
- ✅ Next.js Fast Refresh for React components - Automatic
- ✅ Server Action changes trigger automatic recompilation
- ✅ Prisma schema changes require manual `npx prisma generate`
- ✅ Tailwind CSS changes hot reload via PostCSS

**Pre-Commit Checks (Run Before Pushing):**
```bash
npm run type-check  # TypeScript type checking
npm run lint        # ESLint (auto-fix: npm run lint -- --fix)
npm test            # Unit tests
```

**Before Creating PR (Enhanced):**
- ✅ Run `npm run type-check && npm run lint && npm test`
- ✅ Run smoke E2E tests: `npm run test:e2e -- --grep "@smoke"`
- ✅ If changes affect auth/payments/roles: Run full E2E suite
- ✅ Verify no console errors or warnings in browser

**Build Process:**
```bash
# Local production build test
npm run type-check && npm run lint && npm run build

# Railway production build (automatic)
# package.json: "build": "prisma generate && prisma migrate deploy && next build"
```

**Testing Commands:**
```bash
npm test                 # Unit tests (co-located)
npm run test:integration # Integration tests (Socket.io, BullMQ, payments)
npm run test:e2e         # E2E tests (Playwright)
npm run type-check       # TypeScript compilation check
npm run lint             # ESLint
npm test -- --coverage   # Generate coverage report
```

**Database Workflow:**
- ✅ **Local changes**: `npx prisma migrate dev --name {description}` (e.g., `add-mpesa-fields`)
- ✅ **Prisma Studio**: `npx prisma studio` - Visual database editor (http://localhost:5555)
- ✅ **Production migrations**: Automatic via Railway build command (`prisma migrate deploy`)
- ✅ **Schema changes**: Always run `npx prisma generate` after modifying `schema.prisma`
- ✅ **Seed data**: `npx prisma db seed` - Populate test data for local development

**Database Migration Conflicts (CRITICAL):**
- ✅ If migration conflict occurs: `git pull`, delete local migration, run `npx prisma migrate dev` to regenerate with new timestamp
- ✅ NEVER manually edit migration timestamps
- ✅ Test migration on fresh database before pushing
- ✅ If concurrent migrations exist, coordinate with team to resolve order

**Git Workflow:**
- ✅ **Branch naming**: `feature/{epic}-{story}-{description}` (e.g., `feature/1-2-task-claim-ui`)
- ✅ **Commit messages**: `{type}: {description}` - Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`
- ✅ **Before committing**: Run type-check, lint, and tests
- ✅ **Pull Request process**:
  1. Create PR with title matching story (e.g., "Story 1.2: Task Claim UI")
  2. Link to story file in `_bmad-output/epics/`
  3. List acceptance criteria met in PR description
  4. Wait for CI checks to pass (type-check, lint, tests)
  5. Request review from team/AI agent
- ✅ **Never force push** to `main` branch
- ✅ **Merge strategy**: Squash and merge for clean history

**Railway Deployment:**
- ✅ **Automatic deployment**: Push to `main` branch triggers Railway deployment
- ✅ **Preview deployments**: Every PR creates isolated Railway preview environment with separate database
- ✅ **Health check**: `/api/health` endpoint monitors database and Redis connectivity
- ✅ **Build command**: `prisma generate && prisma migrate deploy && next build`
- ✅ **Start command**: `npm start` (Next.js production server)
- ✅ **Railway configuration**: `railway.toml` in project root

**Preview Deployment Testing (Enhanced):**
- ✅ Verify critical user flows: Login, task claim, wallet operations
- ✅ Check database migrations applied (inspect Railway logs)
- ✅ Confirm all environment variables present (health check passes)
- ✅ Test role-based route protection
- ✅ Validate real-time features (Socket.io connections)
- ✅ Check for console errors in browser DevTools

**GitHub Actions CI/CD:**
```yaml
# .github/workflows/deploy-production.yml
# Runs on push to main:
# 1. Checkout code
# 2. Install dependencies (npm ci)
# 3. Run type-check
# 4. Run lint
# 5. Run tests
# 6. Generate Prisma client
# 7. Build Next.js
# 8. Deploy to Railway
```

**Deployment Checklist:**
- ✅ All tests passing locally
- ✅ Type-check passes
- ✅ ESLint passes with no errors
- ✅ Database migrations tested locally
- ✅ Environment variables configured in Railway
- ✅ Health check endpoint returns 200 OK
- ✅ Preview deployment tested before merging to main

**Debugging in Development:**
- ✅ Next.js dev server logs: Terminal where `npm run dev` runs
- ✅ Prisma query logs: Enable with `log: ['query']` in Prisma client config
- ✅ Server Action errors: Check terminal output, NOT browser console
- ✅ Client Component errors: Browser DevTools console
- ✅ Redis/BullMQ jobs: Use BullBoard UI (install `@bull-board/express` for local monitoring)
- ✅ Database inspection: Prisma Studio (`npx prisma studio`)

**Troubleshooting Common Issues:**
- ✅ **"Module not found" errors**: Run `npm install` and restart dev server
- ✅ **Prisma type errors**: Run `npx prisma generate` to regenerate client
- ✅ **Database connection failed**: Check `DATABASE_URL` in `.env.local`, ensure PostgreSQL is running
- ✅ **Redis connection failed**: Ensure Docker Redis is running (`docker-compose up -d redis`)
- ✅ **Port 6379 already in use**: Run `docker ps`, find Redis container, `docker stop <id>`, retry
- ✅ **Hot reload not working**: Restart dev server, check file is in `src/` directory
- ✅ **Build fails on Railway**: Check Railway logs, ensure all environment variables are set

**Critical Anti-Patterns:**
- ❌ NEVER commit `.env.local` or `.env` files - Use `.env.example` as template
- ❌ NEVER commit secrets (API keys, passwords) to git - Use environment variables
- ❌ NEVER skip database migrations - Always create migration for schema changes
- ❌ NEVER modify Prisma migrations manually - Use `npx prisma migrate dev`
- ❌ NEVER push directly to `main` - Always use pull requests (except hotfixes)
- ❌ NEVER deploy without testing locally first - Run full build locally before pushing
- ❌ NEVER ignore Railway deployment failures - Check logs and fix immediately
- ❌ NEVER use `npm install` in production - Railway uses `npm ci` for deterministic builds

---

### Critical Don't-Miss Rules

**3-Layer Role Isolation (MANDATORY):**
- ✅ Layer 1 - Route Groups: `(client)`, `(creator)`, `(editor)`, `(admin)` folders in `app/`
- ✅ Layer 2 - Middleware: `middleware.ts` redirects unauthorized access before page loads
- ✅ Layer 3 - Row-Level Security: Prisma queries filter by `userId`, `creatorId`, `editorId`, etc.
- ✅ ALL THREE LAYERS MUST BE IMPLEMENTED - Missing any layer is a security vulnerability
- ✅ Example: Client trying to access `/creator/dashboard`:
  - Route group restricts access
  - Middleware checks session and redirects to `/client/dashboard`
  - If middleware bypassed, RLS ensures query returns empty data

**M-Pesa Integration (LAUNCH BLOCKER):**
- ✅ M-Pesa is NOT optional - Required for Kenya/Tanzania market launch
- ✅ ALWAYS test M-Pesa flows alongside Stripe flows (dual provider system)
- ✅ M-Pesa Daraja API uses sandbox credentials for development (separate from production)
- ✅ Withdrawal routing: Check `user.preferredPaymentMethod` → Route to M-Pesa or Stripe
- ✅ Never assume Stripe is the only payment provider - Always handle dual orchestration
- ✅ M-Pesa webhook callback URL: `/api/webhooks/mpesa/callback`

**Wallet Balance Race Conditions (CRITICAL):**
- ✅ ALWAYS use atomic operations for wallet balance updates - NEVER read-modify-write pattern
- ✅ Correct pattern (atomic):
  ```typescript
  await prisma.wallet.update({
    where: { userId },
    data: {
      balance: { increment: amount }  // Atomic operation, prevents race conditions
    }
  })
  ```
- ❌ WRONG pattern (race condition):
  ```typescript
  const wallet = await prisma.wallet.findUnique({ where: { userId } })
  await prisma.wallet.update({
    where: { userId },
    data: { balance: wallet.balance + amount }  // RACE CONDITION!
  })
  ```

**Task Claiming Race Conditions (CRITICAL):**
- ✅ Use optimistic locking with Prisma `updateMany` to prevent double claims
- ✅ Check `count` return value to confirm claim succeeded:
  ```typescript
  const task = await prisma.task.updateMany({
    where: { id: taskId, status: 'AVAILABLE', claimedById: null },
    data: { status: 'CLAIMED', claimedById: userId }
  })
  if (task.count === 0) {
    return { success: false, error: { code: 'TASK_ALREADY_CLAIMED', message: 'Task already claimed' } }
  }
  ```
- ✅ NEVER use `findUnique` + `update` pattern - Always `updateMany` for atomic claim

**Session Management & Security:**
- ✅ NextAuth.js v5 uses JWT sessions (NOT database sessions)
- ✅ ALWAYS call `auth()` in Server Actions to validate session - NEVER trust client-provided userId
- ✅ Session timeout: 30 days idle (configurable in `auth.config.ts`)
- ✅ Rotate `NEXTAUTH_SECRET` after security incidents
- ✅ NEVER store sensitive data in JWT - Only userId and role

**Row-Level Security Implementation:**
- ✅ Clients see only tasks they claimed: `where: { claimedById: session.user.id }`
- ✅ Creators see only their projects/tasks: `where: { creatorId: session.user.id }`
- ✅ Editors see only assigned QA tasks: `where: { editorId: session.user.id }`
- ✅ Admins bypass RLS filters (query all data) - Use with caution
- ✅ ALWAYS filter by user identity in Prisma queries - NEVER assume middleware alone protects data

**N+1 Query Prevention:**
- ✅ ALWAYS use Prisma `include` for related data:
  ```typescript
  const tasks = await prisma.task.findMany({
    include: {
      creator: true,          // Eager load creator
      claimedBy: true,        // Eager load claimed user
      submissions: true       // Eager load submissions
    }
  })
  ```
- ✅ Avoid loading relations in loops - Fetch all data upfront
- ✅ Use Prisma's `select` to limit fields when full model not needed

**Background Job Reliability:**
- ✅ BullMQ jobs MUST be idempotent - Job may execute multiple times on retry
- ✅ Use exponential backoff for retries: `{ attempts: 3, backoff: { type: 'exponential', delay: 1000 } }`
- ✅ Email jobs: Retry on network errors, fail immediately on invalid email
- ✅ Payment jobs: Retry on timeout, fail immediately on insufficient funds
- ✅ Log job failures to database for debugging: Create `JobLog` table for failed jobs

**Real-Time Updates (Socket.io):**
- ✅ Use rooms for scoped broadcasting - NEVER broadcast to all connected clients
- ✅ Project room: `socket.join(\`project:\${projectId}\`)` - Notify creator when task claimed
- ✅ User room: `socket.join(\`user:\${userId}\`)` - Notify user on wallet update
- ✅ ALWAYS verify user authorization before emitting events to rooms
- ✅ Redis adapter REQUIRED for horizontal scaling - Multiple Railway instances share Socket.io state

**External API Integration Patterns:**
- ✅ ALWAYS use retry logic with exponential backoff for transient errors (network timeout, 5xx)
- ✅ Fail immediately for permanent errors (4xx, invalid credentials)
- ✅ Stripe: Use idempotency keys for payment intents (`idempotencyKey: uuidv4()`)
- ✅ M-Pesa: Store `ConversationID` and `OriginatorConversationID` for callback matching
- ✅ AssemblyAI: Poll for transcription completion, don't block request - Use BullMQ job
- ✅ Cloudinary: Upload to separate folders by content type (`/audio/tasks/`, `/images/profiles/`)

**Database Migration Safety:**
- ✅ Test migrations on local database copy before production
- ✅ NEVER drop columns without data migration - Create new column, migrate data, then drop old
- ✅ Use `@default(now())` for timestamp fields to populate existing rows
- ✅ Add indexes BEFORE deploying features that use them (avoid slow queries)
- ✅ If migration conflict: `git pull`, delete local migration, regenerate with new timestamp

**Environment Variable Security:**
- ✅ NEVER use production API keys in local development - Use test keys
- ✅ Local: Stripe test mode, M-Pesa sandbox, separate Cloudinary account
- ✅ Production: Railway environment variables with secret masking enabled
- ✅ Rotate secrets immediately if accidentally committed to git

**Deployment Critical Checks:**
- ✅ Verify `/api/health` endpoint returns 200 OK before marking deploy successful
- ✅ Check Railway logs for migration errors
- ✅ Test role-based route protection on preview deployments
- ✅ Verify Socket.io connections work (check Redis connectivity)
- ✅ Test payment flows with Stripe test cards and M-Pesa sandbox

**Data Integrity & Consistency:**
- ✅ Use Prisma transactions for multi-table operations:
  ```typescript
  await prisma.$transaction(async (tx) => {
    await tx.wallet.update({ ... })
    await tx.transaction.create({ ... })
    await tx.notification.create({ ... })
  })
  ```
- ✅ NEVER partially update related data - Use transactions or accept eventual consistency
- ✅ Foreign key constraints in Prisma schema prevent orphaned records

**Error Handling & Logging:**
- ✅ Server Actions return structured errors: `{ success: false, error: { code, message, details } }`
- ✅ Client shows user-friendly messages based on error code
- ✅ Log detailed errors server-side with context (userId, taskId, request params)
- ✅ NEVER expose internal error details to client (stack traces, database errors)
- ✅ Use Railway logs for production debugging (auto-captured from console.error)

**Performance Gotchas:**
- ✅ Server Components are faster than Client Components - Avoid `'use client'` unless needed
- ✅ TanStack Query caches server state - Configure `staleTime` and `cacheTime` appropriately
- ✅ Prisma connection pooling: Railway PostgreSQL handles this automatically
- ✅ Redis caching for expensive queries (task counts, user stats)
- ✅ Lazy load heavy components with `next/dynamic` + `{ ssr: false }`

**Security Best Practices:**
- ✅ Validate ALL user input with Zod schemas before database operations
- ✅ Use parameterized Prisma queries - NEVER string concatenation for SQL
- ✅ Sanitize user-generated content before rendering (XSS prevention)
- ✅ Rate limit API routes with middleware (prevent abuse)
- ✅ Use HTTPS for all external API calls (Stripe, M-Pesa, Resend)
- ✅ NEVER log sensitive data (passwords, API keys, payment details)

**Critical Anti-Patterns:**
- ❌ NEVER use read-modify-write for wallet balances - ALWAYS use atomic operations
- ❌ NEVER skip authorization checks in Server Actions - Middleware alone is insufficient
- ❌ NEVER trust client-provided userId - ALWAYS use `auth()` to get session
- ❌ NEVER use Stripe alone - Dual payment orchestration with M-Pesa is MANDATORY
- ❌ NEVER broadcast Socket.io events without room scoping - Security and performance issue
- ❌ NEVER skip database transactions for multi-table operations - Data consistency risk
- ❌ NEVER use production credentials in development - Security and billing risk
- ❌ NEVER deploy without testing preview environment - Production failures are costly

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Update this file if new patterns emerge during implementation

**For Humans:**

- Keep this file lean and focused on agent needs
- Update when technology stack changes
- Review quarterly for outdated rules
- Remove rules that become obvious over time

**Last Updated:** 2025-12-27
