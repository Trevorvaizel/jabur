## Epic 1: Project Foundation & Infrastructure

### Story 1.1: Initialize Next.js 14 Project with TypeScript and Tailwind

As a developer,
I want to initialize a Next.js 14 project with TypeScript and Tailwind CSS,
So that I have the foundational framework configured correctly for all future development.

**Acceptance Criteria:**

**Given** I am starting a new project
**When** I run `npx create-next-app@14 jabur --typescript --tailwind --app --no-src-dir --import-alias "@/*"`
**Then** the project is created with Next.js 14.x (NOT 15.x)
**And** TypeScript strict mode is enabled in tsconfig.json
**And** Tailwind CSS 4.0 is configured with PostCSS
**And** App Router structure is present (NOT Pages Router)
**And** Import alias `@/` is configured for clean imports
**And** ESLint is configured with Next.js recommended rules
**And** core UI dependencies are installed: `npx shadcn-ui@latest init` (shadcn/ui + Radix UI primitives)
**And** form handling dependencies installed: `npm install react-hook-form zod @hookform/resolvers`
**And** state management dependencies installed: `npm install @tanstack/react-query zustand`
**And** rich text editor installed: `npm install @tiptap/react @tiptap/starter-kit @tiptap/pm`
**And** audio player installed: `npm install wavesurfer.js`
**And** package.json verifies Next.js version is 14.x (run `npm list next` to confirm)
**And** `npm run dev` starts the development server successfully
**And** `npm run build` compiles without errors

---

### Story 1.2: Configure Railway PostgreSQL and Prisma ORM

As a developer,
I want to set up Railway PostgreSQL 15+ with Prisma 5.x ORM,
So that I have a production-ready database with type-safe queries.

**Acceptance Criteria:**

**Given** the Next.js project is initialized
**When** I configure Railway PostgreSQL and Prisma
**Then** Railway PostgreSQL 15+ instance is provisioned
**And** Prisma 5.x is installed and configured
**And** DATABASE_URL environment variable is set
**And** Prisma client is generated with `npx prisma generate`
**And** Initial Prisma schema is created with PascalCase table names and camelCase column names
**And** Database connection test succeeds
**And** `npx prisma studio` opens successfully
**And** TypeScript types are generated for database models

---

### Story 1.3: Set Up NextAuth.js v5 Authentication Foundation

As a developer,
I want to configure NextAuth.js v5 with JWT session strategy,
So that I have authentication infrastructure ready for 4-role system implementation.

**Acceptance Criteria:**

**Given** the project and database are configured
**When** I set up NextAuth.js v5
**Then** NextAuth.js v5 (NOT v4) is installed
**And** `auth.config.ts` is created with JWT session strategy
**And** `auth.ts` helper exports `auth()`, `signIn()`, `signOut()` functions
**And** NEXTAUTH_SECRET environment variable is configured
**And** Credentials provider is configured for email/password authentication
**And** Session callbacks are configured to include custom fields (userId, role)
**And** JWT is generated and validated correctly
**And** `auth()` helper returns session data successfully

---

### Story 1.4: Implement Role Isolation Layer 1 - Route Groups

As a developer,
I want to create role-based route groups in the App Router,
So that different user types have isolated route structures.

**Acceptance Criteria:**

**Given** NextAuth.js authentication is configured
**When** I implement route groups
**Then** route group `(auth)` exists for public authentication pages
**And** route group `(client)` exists for uploader/client routes
**And** route group `(creator)` exists for creator workspace routes
**And** route group `(editor)` exists for QA Editor routes
**And** route group `(admin)` exists for admin panel routes
**And** each route group has its own `layout.tsx` file
**And** route groups do not affect URL structure
**And** navigation between route groups works correctly

---

### Story 1.5: Implement Role Isolation Layer 2 - Middleware

As a developer,
I want to create middleware that validates JWT roles on every request,
So that unauthorized users are redirected before accessing protected routes.

**Acceptance Criteria:**

**Given** route groups are implemented
**When** I create middleware for role protection
**Then** `middleware.ts` file is created at project root
**And** middleware calls `auth()` to get session on every request
**And** middleware validates role matches route group requirements
**And** clients accessing `/creator/*` routes are redirected to `/client/dashboard`
**And** creators accessing `/admin/*` routes are redirected to `/creator/dashboard`
**And** unauthenticated users accessing protected routes are redirected to `/login`
**And** authenticated users with correct role can access their designated routes
**And** middleware runs on all protected routes (excludes `/api/*`, `/_next/*`, `/login`, `/register`)

---

### Story 1.6: Implement Role Isolation Layer 3 - PostgreSQL RLS Policies

As a developer,
I want to create PostgreSQL Row-Level Security policies in Prisma schema,
So that database queries are filtered by user role and identity.

**Acceptance Criteria:**

**Given** middleware role validation is implemented
**When** I configure PostgreSQL RLS policies
**Then** RLS is enabled on sensitive tables (Task, User, Submission, QaReview)
**And** policy `client_isolation` ensures clients only see their tasks: `uploaderId = auth.uid()`
**And** policy `creator_isolation` ensures creators only see their tasks: `creatorId = auth.uid()`
**And** policy `editor_isolation` ensures QA editors only see assigned reviews: `editorId = auth.uid()`
**And** policy `admin_full_read` allows admins full read access: `auth.role() = 'ADMIN'`
**And** RLS policies are tested and prevent cross-role data leakage
**And** query performance is not significantly impacted by RLS

---

### Story 1.7: Configure Redis and Real-Time Infrastructure

As a developer,
I want to set up Railway Redis with Socket.io for real-time updates,
So that the platform can broadcast task status changes and notifications.

**Acceptance Criteria:**

**Given** the database and auth are configured
**When** I set up Redis and Socket.io
**Then** Railway Redis instance is provisioned
**And** REDIS_URL environment variable is configured
**And** Socket.io 4.x is installed and configured
**And** Socket.io uses Redis adapter for multi-instance support
**And** Socket.io server is initialized in `lib/socket.ts`
**And** Socket.io rooms are configured for project-based and user-based broadcasting
**And** test connection to Redis succeeds
**And** Socket.io client connects successfully
**And** events broadcast to correct rooms only

---

### Story 1.8: Set Up Background Job Processing with BullMQ

As a developer,
I want to configure BullMQ for background job processing,
So that async tasks like transcription and payouts can run reliably.

**Acceptance Criteria:**

**Given** Redis is configured
**When** I set up BullMQ
**Then** BullMQ 5.x is installed: `npm install bullmq`
**And** job queues are created: `transcription`, `email`, `payout`, `cleanup`, `notifications`
**And** each queue has retry policy configured: 3 attempts with exponential backoff (delays: 5s, 30s, 2min)
**And** concurrency limits configured per queue: transcription (5 concurrent), email (10), payout (2), cleanup (1)
**And** Dead Letter Queue (DLQ) configured for permanently failed jobs after 3 retries
**And** DLQ jobs are moved to separate queue: `{queueName}-failed` (e.g., `transcription-failed`)
**And** failed jobs include error metadata: `{ jobId, queueName, failedAt, attempts, lastError, originalData }`
**And** job queue initialization is in `lib/queues.ts` with type-safe job data interfaces
**And** admin dashboard can view DLQ jobs for manual retry or investigation
**And** example job is added to test queue successfully
**And** job worker processes the test job within expected time
**And** job retry logic works on failure (verify 3 retry attempts with exponential backoff)
**And** after 3 failures, job is moved to DLQ and logged with full error stack trace

---

### Story 1.9: Integrate Payment SDKs (Stripe and M-Pesa)

As a developer,
I want to integrate Stripe and M-Pesa SDKs,
So that dual payment provider coordination is available for payouts.

**Acceptance Criteria:**

**Given** the project infrastructure is configured
**When** I integrate Stripe and M-Pesa SDKs
**Then** Stripe SDK (latest) is installed
**And** STRIPE_SECRET_KEY environment variable is configured
**And** Stripe client is initialized in `lib/stripe.ts`
**And** M-Pesa Daraja API credentials are configured (MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET)
**And** M-Pesa client is initialized in `lib/mpesa.ts`
**And** Stripe test connection succeeds
**And** M-Pesa sandbox authentication succeeds
**And** payment routing logic skeleton is created: `lib/payment-orchestrator.ts`
**And** webhook endpoints are created: `/api/webhooks/stripe` and `/api/webhooks/mpesa`

---

### Story 1.10: Integrate Transcription APIs (AssemblyAI and Whisper)

As a developer,
I want to integrate AssemblyAI (primary) and OpenAI Whisper (fallback) APIs,
So that audio transcription services are ready for the upload pipeline.

**Acceptance Criteria:**

**Given** the project infrastructure is configured
**When** I integrate AssemblyAI and Whisper
**Then** AssemblyAI SDK is installed
**And** ASSEMBLYAI_API_KEY environment variable is configured
**And** AssemblyAI client is initialized in `lib/assemblyai.ts`
**And** OpenAI SDK is installed for Whisper API access
**And** OPENAI_API_KEY environment variable is configured
**And** Whisper client is initialized in `lib/whisper.ts`
**And** AssemblyAI test transcription request succeeds
**And** Whisper test transcription request succeeds
**And** failover logic skeleton is created: `lib/transcription-orchestrator.ts`
**And** webhook endpoint is created: `/api/webhooks/assemblyai`

---

### Story 1.11: Configure AWS S3 and CloudFront for File Storage

As a developer,
I want to set up AWS S3 with CloudFront CDN and lifecycle policies,
So that audio files can be stored and automatically deleted after 7 days.

**Acceptance Criteria:**

**Given** the project infrastructure is configured
**When** I configure AWS S3 and CloudFront
**Then** AWS SDK for S3 is installed: `npm install @aws-sdk/client-s3 @aws-sdk/lib-storage`
**And** S3 bucket is created for jabur audio files with naming: `jabur-audio-{environment}` (e.g., jabur-audio-production)
**And** S3 bucket encryption is enabled: SSE-S3 (AES-256) for all objects (per NFR-S2)
**And** S3 bucket CORS is configured to allow uploads from application domain with methods: PUT, POST, GET, DELETE
**And** S3 bucket public access is BLOCKED (all PublicAccessBlock settings enabled)
**And** S3 bucket policy enforces encryption: deny PutObject if `x-amz-server-side-encryption` header missing
**And** S3 bucket versioning is DISABLED (not needed for temporary audio files)
**And** AWS credentials are configured (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME)
**And** S3 client is initialized in `lib/s3.ts` with credential validation
**And** S3 lifecycle policy is configured to auto-delete objects tagged with `lifecycle=7days` after 7 days (per FR15)
**And** CloudFront distribution is created pointing to S3 bucket origin
**And** CloudFront distribution uses HTTPS only (HTTP requests redirect to HTTPS per NFR-S1)
**And** CLOUDFRONT_DOMAIN environment variable is configured
**And** test file upload to S3 succeeds with encryption header verified
**And** test file is accessible via CloudFront HTTPS URL
**And** test file tagged with `lifecycle=7days` is verified in S3 console
**And** multipart upload support is configured for resumable uploads (files >5MB use multipart)

---

### Story 1.12: Set Up Testing Infrastructure (Jest, React Testing Library, Playwright)

As a developer,
I want to configure Jest, React Testing Library, and Playwright,
So that unit, integration, and E2E tests can validate role isolation and functionality.

**Acceptance Criteria:**

**Given** all infrastructure components are configured
**When** I set up testing frameworks
**Then** Jest is installed and configured for Next.js 14
**And** React Testing Library is installed
**And** @testing-library/jest-dom is configured for extended matchers
**And** Playwright is installed for E2E testing
**And** test commands are configured: `npm test` (unit), `npm run test:e2e` (Playwright)
**And** sample test files are created to verify configuration
**And** CI/CD pipeline includes test execution before deployment

---

### Story 1.13: Integrate Socket.io with Task Lifecycle Events

As the system,
I want to emit real-time Socket.io events for all task lifecycle changes,
So that task status updates propagate to all user dashboards within 5 seconds (FR75, NFR-P5).

**Acceptance Criteria:**

**Given** Socket.io is configured (Story 1.7) and task lifecycle operations exist
**When** task status changes occur
**Then** event emitter service is created: `lib/events/task-events.ts`
**And** Socket.io room strategy is defined: users join room `user:{userId}` on connection
**And** task claimed event emits to uploader room: `{ event: 'task:claimed', taskId, claimedBy: 'jabur', claimedAt }`
**And** task submitted event emits to uploader and QA rooms: `{ event: 'task:submitted', taskId, submittedAt }`
**And** task QA approved event emits to uploader and creator rooms: `{ event: 'task:approved', taskId, qaScore, approvedAt }`
**And** task QA rejected event emits to creator room only: `{ event: 'task:rejected', taskId, feedback, rejectedAt }`
**And** task delivered event emits to uploader room: `{ event: 'task:delivered', taskId, deliveredAt, downloadUrl }`
**And** all events include timestamp and propagate within 5 seconds (per NFR-P5)
**And** event emitters are integrated into Server Actions: `claimTask()`, `submitTask()`, `approveTask()`, `rejectTask()`, `deliverTask()`
**And** client-side Socket.io listeners update UI state using TanStack Query invalidation
**And** real-time updates are tested: E2E test verifies uploader sees "Task Claimed" notification within 5 seconds of creator claiming task
**And** Socket.io connection failures have graceful fallback: polling every 10 seconds if WebSocket disconnected
**And** role isolation enforced: creators never receive events containing uploader identity

---

