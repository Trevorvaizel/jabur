# jabur - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for jabur, decomposing the requirements from the PRD, UX Design, and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

#### Authentication & User Management:

- **FR-001**: System shall provide separate registration flows for Clients and Creators
- **FR-002**: System shall support email/password and OAuth (Google) authentication
- **FR-003**: System shall enforce role isolation preventing same user from holding both Client and Creator roles
- **FR-004**: System shall implement creator application workflow with portfolio submission and sample task vetting
- **FR-005**: System shall manage 5-tier creator level system (Probationary, Junior, Mid-Level, Senior, Expert)
- **FR-006**: System shall support device fingerprinting for fraud prevention
- **FR-007**: System shall provide 2FA authentication (optional for users, mandatory for admins)

#### Content Upload & Processing:

- **FR-010**: System shall support audio file uploads (MP3, WAV, M4A) up to 500MB with resume capability
- **FR-011**: System shall automatically transcribe uploaded audio using AssemblyAI or Whisper
- **FR-012**: System shall allow clients to select multiple output types per upload
- **FR-013**: System shall route tasks to creators based on their qualification level
- **FR-014**: System shall implement 7-day audio retention policy with automatic deletion after QA completion
- **FR-015**: System shall provide real-time upload progress indicators

#### Creator Workspace:

- **FR-020**: System shall display available tasks filtered by creator's current level
- **FR-021**: System shall provide task claim/lock mechanism preventing double-assignment
- **FR-022**: System shall provide audio player with synced transcript, variable speed (0.5x-2x), and waveform visualization
- **FR-023**: System shall provide rich text editor with auto-save every 30 seconds
- **FR-024**: System shall display task value (creator payout) WITHOUT showing client pricing or platform margin
- **FR-025**: System shall provide draft management with version history
- **FR-026**: System shall show creator earnings dashboard with level progression tracking

#### QA Review System:

- **FR-030**: System shall provide review queue sortable by deadline, creator, and output type
- **FR-031**: System shall provide side-by-side review interface (audio + transcript + submission)
- **FR-032**: System shall implement rubric-based scoring across 6 dimensions with weighted scores
- **FR-033**: System shall support inline commenting and feedback on submissions
- **FR-034**: System shall provide Approve/Revise/Reject workflow with revision deadlines
- **FR-035**: System shall integrate plagiarism detection with automatic flagging
- **FR-036**: System shall track creator performance over time
- **FR-037**: System shall provide account flagging system (manual and auto-triggered)

#### Payment Processing:

- **FR-040**: System shall process client payments via M-Pesa (primary), Stripe, and PayPal
- **FR-041**: System shall implement M-Pesa STK Push for instant mobile money collection
- **FR-042**: System shall process creator payouts via M-Pesa B2C, bank transfer, or PayPal
- **FR-043**: System shall execute weekly batch payouts on Sundays with $20 minimum threshold
- **FR-044**: System shall apply creator rate multipliers (0.8x to 1.5x) based on level
- **FR-045**: System shall support subscription tiers (Pay-As-You-Go, Pro, Business, Enterprise)
- **FR-046**: System shall calculate pricing with rush (+50%) and express (+100%) surcharges
- **FR-047**: System shall provide transparent pricing calculator

#### Notifications & Communication:

- **FR-050**: System shall send email notifications for key events (transactional)
- **FR-051**: System shall provide in-app notification center with real-time updates
- **FR-052**: System shall support web push notifications
- **FR-053**: System shall provide WebSocket-based real-time status updates
- **FR-054**: System shall support editor-creator messaging per assignment

#### Analytics & Reporting:

- **FR-060**: System shall provide uploader dashboard (spending, usage analytics)
- **FR-061**: System shall provide creator dashboard (performance, earnings, level progress)
- **FR-062**: System shall provide admin platform dashboard (revenue, users, quality, fraud metrics)
- **FR-063**: System shall display creator level statistics and distribution
- **FR-064**: System shall support data export (CSV, Excel, JSON)

#### Admin & Operations:

- **FR-070**: System shall support comped task creation for testing/partnerships
- **FR-071**: System shall allow direct task assignment to specific creators
- **FR-072**: System shall provide task reassignment workflow
- **FR-073**: System shall support bulk upload via CSV
- **FR-074**: System shall provide creator level management (promote/demote with audit log)
- **FR-075**: System shall provide flag resolution workflow (dismiss/warning/suspension/ban)
- **FR-076**: System shall maintain complete audit trail for all admin actions

#### Fraud Prevention:

- **FR-080**: System shall enforce email normalization (detect gmail+tags, dot variations)
- **FR-081**: System shall implement velocity checking (rate limits on registration, task claiming)
- **FR-082**: System shall detect behavioral anomalies and suspicious patterns
- **FR-083**: System shall identify potential creator-client collusion
- **FR-084**: System shall monitor payment fraud indicators

#### Content Moderation & Safety:

- **FR-090**: System shall screen uploads for prohibited content
- **FR-091**: System shall provide user reporting mechanism
- **FR-092**: System shall maintain moderation queue with action workflow
- **FR-093**: System shall enforce platform content policies

#### Dispute Resolution:

- **FR-100**: System shall provide dispute filing workflow for quality/delivery/payment issues
- **FR-101**: System shall support mediation interface
- **FR-102**: System shall execute resolution actions (refunds, revisions, penalties)
- **FR-103**: System shall provide appeal process with 14-day window

### Non-Functional Requirements

#### Performance:

- **NFR-001**: API response time shall be <200ms (p95)
- **NFR-002**: Page load time shall be <2 seconds (p95)
- **NFR-003**: Transcription processing shall complete in <0.5x audio length
- **NFR-004**: Audio upload speed shall achieve ≥10 MB/s average throughput
- **NFR-005**: WebSocket latency for real-time updates shall be <500ms

#### Reliability:

- **NFR-010**: Platform uptime shall be ≥99.9%
- **NFR-011**: Recovery Time Objective (RTO) shall be <1 hour
- **NFR-012**: Recovery Point Objective (RPO) shall be <15 minutes
- **NFR-013**: Payment processing failure rate shall be <1%
- **NFR-014**: System shall implement graceful degradation for non-critical features

#### Security:

- **NFR-020**: All data transmission shall use TLS 1.2 or higher
- **NFR-021**: Payment data shall be PCI DSS compliant (handled by third-party providers)
- **NFR-022**: M-Pesa credentials shall never be stored in plaintext
- **NFR-023**: Password requirements shall enforce 12+ characters with complexity rules
- **NFR-024**: Account lockout shall occur after 5 failed login attempts
- **NFR-025**: Session timeout shall be 24 hours for clients/creators, 8 hours for admin/editor
- **NFR-026**: Role separation enforcement shall have 100% compliance (zero client-creator overlap)
- **NFR-027**: All PII shall be encrypted at rest

#### Scalability:

- **NFR-030**: System shall support 10,000 concurrent users
- **NFR-031**: System shall process 1,000+ uploads per day without degradation
- **NFR-032**: Queue-based architecture shall handle peak load spikes
- **NFR-033**: Auto-scaling shall be operational and cost-effective
- **NFR-034**: Database queries shall be optimized with proper indexing

#### Data Quality & Accuracy:

- **NFR-040**: Transcription accuracy shall be >95% (word-level)
- **NFR-041**: Plagiarism detection shall have <2% false positive rate
- **NFR-042**: AI content detection shall have >90% accuracy
- **NFR-043**: Fraud detection rate shall be <5% in MVP, <1% in Growth phase

#### Compliance:

- **NFR-050**: System shall comply with PCI DSS for payment data
- **NFR-051**: System shall comply with GDPR for EU users
- **NFR-052**: System shall comply with Kenya Data Protection Act (DPA 2019)
- **NFR-053**: System shall provide data export capability (GDPR right to access)
- **NFR-054**: System shall provide data deletion capability (GDPR right to erasure)
- **NFR-055**: Audio retention policy shall auto-delete after 7 days post-QA
- **NFR-056**: Transaction history shall be retained for 7 years (financial compliance)
- **NFR-057**: Audit logs shall be retained for 2 years

#### Usability:

- **NFR-060**: Creator workspace shall be usable without training
- **NFR-061**: Audio player controls shall support keyboard shortcuts
- **NFR-062**: Auto-save shall prevent data loss from browser crashes
- **NFR-063**: Error messages shall be clear and actionable

#### Integration:

- **NFR-070**: M-Pesa integration shall use Safaricom M-Pesa Business API
- **NFR-071**: Stripe integration shall support webhooks for async events
- **NFR-072**: AssemblyAI/Whisper APIs shall have fallback mechanisms
- **NFR-073**: Email service (SendGrid/SES) shall have 99%+ delivery rate

### Additional Requirements

#### Technology Stack Requirements (from Architecture + Project Context):

**Starter Template:**
- Next.js 15 (App Router) with TypeScript as greenfield starter template
- Command: `npx create-next-app@latest jabur --yes` (includes TypeScript, Tailwind CSS, ESLint, App Router)
- Node.js 20+ (LTS) required for Next.js 15 compatibility

**Core Framework:**
- Next.js 15 (App Router) - Modern Server Components and Server Actions
- TypeScript 5.x - Strict mode enabled
- React 19 - Latest stable with Server Components support
- Tailwind CSS 4.x - Utility-first styling
- shadcn/ui (Radix UI primitives) - Accessible component library

**Database & ORM:**
- PostgreSQL 15+ via Google Cloud SQL
- Prisma 5.x with PostgreSQL adapter for serverless
- Redis 7.x (Google Cloud Memorystore) - Session storage + caching

**Authentication & State:**
- NextAuth.js v5.0.0-beta - Production-ready auth
- TanStack Query v5 - Server state management
- Zustand 4.x - UI state management

**Real-Time:**
- Socket.io 4.x - Real-time communication with Redis adapter for Cloud Run multi-instance coordination

**Validation & Utilities:**
- Zod 3.x - Runtime type validation
- date-fns - Date manipulation (NOT moment.js)

**Cloud Infrastructure (Google Cloud Platform):**

**Compute:**
- Cloud Run - Serverless Next.js deployment (scales to zero, pay per usage)
- Cloud Functions - Isolated M-Pesa webhook handlers
- Cloud Tasks - Background job queue (weekly payouts, transcription)
- Cloud Scheduler - Cron-like job scheduling (7-day audio cleanup at 2 AM UTC daily)

**Data:**
- Cloud SQL (PostgreSQL) - Managed database
- Cloud Storage - Audio file storage with 7-day Object Lifecycle policy
- Cloud CDN - Fast audio delivery globally

**Networking & Security:**
- Cloud Load Balancing - HTTPS termination, SSL certificates, TLS 1.2+ enforcement
- Secret Manager - M-Pesa API keys, database credentials (NEVER plaintext)
- Cloud Armor - DDoS protection (optional for production)

**DevOps:**
- Cloud Build - CI/CD pipeline
- Container Registry - Docker image storage
- Cloud Logging - Centralized logging
- Cloud Monitoring - Alerts and dashboards

**Payment Integration:**
- M-Pesa Business API (Safaricom) - Primary payment provider for East Africa (MVP focus)

#### Implementation Pattern Requirements (from Project Context - CRITICAL):

**ApiResponse Pattern (MANDATORY):**
- MUST use `ApiResponse` type for ALL Server Actions and API routes
- Server Actions return `success(data)` or `error(code, message)`, NEVER throw directly
- Database/API errors map to `BUSINESS_*` error codes
- External API errors map to `EXTERNAL_*` error codes
- File location: `/lib/utils/api-response.ts`

**Server Actions:**
- MUST use `'use server'` directive at top of file
- Place in `/lib/actions/{domain}/` NOT in component files
- ALWAYS use async/await (NOT Promise.then() chains)
- Example domains: auth, upload, task, payment, qa, admin

**Route Groups for Role Isolation (NON-NEGOTIABLE):**
- `(auth)` - Authentication pages (login, register, etc.)
- `(client)` - Client/uploader interface
- `(creator)` - Creator workspace
- `(editor)` - Editor QA dashboard
- `(admin)` - Admin panel
- NEVER cross route group boundaries (violates role isolation architecture)

**Component Architecture:**
- Default to Server Components (faster, smaller bundles)
- Only use Client Components when needed (`'use client'` directive)
- Server Components CAN be async - Client Components CANNOT be async
- File naming: PascalCase for components (`UserCard.tsx`)
- One component per file, co-locate tests (`UserCard.test.tsx`)

**Database & ORM:**
- Prisma Client singleton from `/lib/db/client.ts`
- Table names: snake_case, plural (`users`, `audio_uploads`, `creator_earnings`)
- Column names: snake_case (`user_id`, `created_at`)
- Row-Level Security (RLS) policies enforcing data access by role
- Transactions for multi-table operations: `prisma.$transaction([...])`
- Generate migrations: `npx prisma migrate dev --name descriptive_name`
- ALWAYS run `prisma generate` after schema changes

**Validation:**
- Zod schemas for runtime validation
- Import schemas from `/lib/validation/`
- NEVER skip Zod validation on user input (security risk)
- Validate at system boundaries (user input, external APIs)

**TypeScript Rules:**
- Strict mode MUST be enabled (`strict: true`)
- No implicit any - All types must be explicit
- NEVER use `any` type - Use `unknown` and narrow with type guards
- NEVER use `@ts-ignore` or `@ts-expect-error`
- NEVER use `var` - Use `const` by default, `let` only when reassignment needed
- Import/export: Named exports for utilities/actions, default exports ONLY for components and pages
- Group imports: React → Next.js → Third-party → Local (@/ imports)
- Use `@/` import alias for root imports (e.g., `@/lib/utils`, `@/components/ui`)

**Naming Conventions (Follow Exactly - from Project Context):**
- **Database**: snake_case plural (`users`, `audio_uploads`, `creator_earnings`)
- **Database columns**: snake_case (`user_id`, `created_at`)
- **TypeScript**: camelCase vars/functions, PascalCase types/classes
- **Files**: PascalCase components (`UserCard.tsx`), kebab-case utilities
- **REST API**: Plural kebab-case (`/api/audio-uploads`)
- **Socket.io events**: domain:action pattern (`upload:processing`, `task:claimed`, `qa:approved`)
- **Environment vars**: SCREAMING_SNAKE_CASE (`MPESA_CONSUMER_KEY`, `DATABASE_URL`)

**Role Isolation Requirements (NON-NEGOTIABLE - from Project Context):**
- 3-layer enforcement: File system (route groups) + Middleware (in `/src/middleware.ts`) + Database (RLS)
- NEVER allow same email for client AND creator roles (database constraint)
- NEVER show client pricing to creators (show task value only)
- Device fingerprinting prevents multi-account gaming
- Email normalization detects gmail+tags and dot variations
- 100% role separation compliance (zero client-creator overlap)
- Middleware runs on ALL routes - Use for role-based protection

**M-Pesa Integration Requirements (from Architecture + Project Context):**
- Safaricom M-Pesa Business API for Kenya (primary East African market)
- STK Push API for client payments with webhook: `/api/webhooks/mpesa/stk-callback`
- B2C API for creator payouts (weekly batch on Sundays, KES 2,000 minimum ≈ $20 USD)
- Rate multipliers: 0.8x (Probationary) to 1.5x (Expert) based on creator level
- OAuth tokens stored in Secret Manager (NEVER plaintext, NEVER in code)
- 7-year transaction retention for compliance
- Transaction validation to prevent payment fraud
- Cloud Functions handle webhook isolation

**Socket.io Real-Time Requirements:**
- Rooms: `client:{userId}`, `creator:level-{N}`, `editor:{userId}`, `admin`
- Event naming: domain:action pattern (`upload:processing`, `task:claimed`, `qa:approved`)
- Redis adapter REQUIRED for Cloud Run multi-instance coordination
- Graceful degradation if WebSocket unavailable (mobile networks)

**Audio Lifecycle Requirements (7-Day Retention):**
- Cloud Storage Object Lifecycle policy auto-deletes after 7 days post-QA completion
- Countdown starts after QA completion (NOT upload date)
- Cloud Scheduler daily cleanup at 2 AM UTC
- NEVER manually delete - let automation handle it
- Balances operational flexibility with cost control

**Creator Level System Requirements:**
- 5 tiers: Probationary (0-9 tasks), Junior (10-29), Mid-Level (30-99), Senior (100-299), Expert (300+)
- Affects: Task filtering (WHERE clause), payout calculation, UI access control
- Admin can manually promote/demote with audit log
- Level changes trigger task queue re-evaluation
- Rate multipliers: 0.8x, 1.0x, 1.1x, 1.25x, 1.5x
- Database-driven (NEVER hardcoded)

**Security Requirements (Critical Anti-Patterns from Project Context):**
- ❌ NEVER store M-Pesa credentials in code - Use Secret Manager
- ❌ NEVER bypass ApiResponse pattern - Breaks error handling
- ❌ NEVER cross route group boundaries - Violates role isolation
- ❌ NEVER skip Zod validation on user input - Security risk
- ❌ NEVER hardcode creator levels - Must be database-driven
- ❌ NEVER use moment.js - Use date-fns instead
- ❌ NEVER do client-side only auth - Must be server-enforced (middleware + RLS)
- ❌ NEVER use fetch() directly in components - Use Server Actions
- ❌ NEVER use Pages Router patterns (getServerSideProps, getStaticProps) - Use App Router
- ❌ NEVER forget 'use client' when using hooks
- ❌ NEVER mutate Prisma data directly - Use Prisma methods

**Performance Optimization Requirements:**
- Redis caching: Sessions, creator levels, rate limiting
- Cloud CDN: Audio files (7-day lifecycle), static assets
- Database indexes on ALL foreign keys
- TanStack Query optimistic updates for instant UX
- Lazy load: Audio player, rich editor, canvas editor (`const Editor = lazy(() => import('./Editor'))`)
- Cloud Run: 0-100 instances, 80 req/instance, 70% CPU target
- React.memo() and useMemo() sparingly - Only for expensive operations

**TanStack Query Patterns:**
- Query keys: Hierarchical array format `['domain', id?, filters?]`
- Examples: `['tasks']`, `['tasks', taskId]`, `['tasks', { level: 3 }]`
- Call Server Actions from mutation functions
- Implement optimistic updates for instant UI feedback
- Invalidate related queries on mutation success

**Design System Requirements (from UX Design):**

**Core Design:**
- Tailwind CSS 4.x for utility-first styling
- shadcn/ui (Radix UI primitives) for accessible components
- Blue-to-teal-to-green gradient brand palette (from logo)
- Mobile-first responsive design (East African market is 90%+ mobile)
- Glassmorphic elements for premium positioning (headers, cards, modals)
- Supabase/Vercel-inspired minimal aesthetic (clean spacing, clear hierarchy)
- Interactive hover effects on features, pricing, process steps
- Smooth transitions and animations

**UX Pattern Requirements (from UX Design):**

**Editor & Content Creation:**
- Block-based editor with slash commands (Substack-inspired) for creator workspace AND client post-delivery editor
- Markdown-native editing with rich formatting (callouts, quotes, code blocks)
- Auto-save every 30 seconds
- Minimal UI that disappears during writing (focus on content)
- Adaptive editors per content type:
  - Long-form (Blog Post): Canvas editor with version history
  - Structured list (Action Items, Reflection Questions): Template-based
  - Multi-platform (Social Media Pack): Platform-specific character limits and preview
  - Timestamp-enabled (Show Notes): Playback sync with audio

**Creator Workspace Navigation:**
- Navigation menu organization (Forte-inspired): Available Tasks, Reserved Tasks, Active Tasks, Revisions Needed, Completed
- Table/list view showing task properties upfront (payout, deadline, type, complexity)
- "Only what you need, when you need it" - contextual information per section
- Bundled task atomic reservation: Reserve one bundle card = reserve all outputs automatically (all-or-nothing)
- Two-step claiming: Reserve (30-min preview) → Commit (deadline lock)

**Audio Player:**
- Synced transcript (click transcript to jump to timestamp)
- Variable speed (0.5x-2x)
- Waveform visualization
- Keyboard shortcuts (space = play/pause, arrow keys = skip)

**Rubric Scoring:**
- 6 dimensions: Accuracy (25%), Completeness (20%), Clarity (20%), Actionability (15%), Formatting (10%), Originality (10%)
- Inline feedback and commenting
- "Revisions don't affect your score - only final quality matters" + attempt counter (1 of 3)
- Admin escalation after 3 attempts

**Post-Delivery:**
- Client can edit delivered content after approval (Substack-inspired ownership model)
- Edits don't affect creator's rubric score
- Content ownership transfers to client post-delivery
- Download formats: Markdown (.md), PDF, DOCX
- Share capabilities: Email, copy link, direct download

**Tier Advancement UI:**
- Current tier visible in navigation header
- Progress bar: "X of Y approvals to next tier"
- Next tier benefits listed (rate increase, priority access)
- Transparent earnings dashboard: Pending, Approved (awaiting payout), Paid
- Weekly payout schedule visibility

**Real-Time Updates:**
- WebSocket status pipeline visualization
- Upload progress (transcription status)
- Task assignment notifications (creator side)
- QA decision notifications (approve/revise/reject)
- Graceful degradation for mobile networks

**Responsive & Mobile:**
- Mobile-optimized upload flow with drag-and-drop
- Touch-friendly creator workspace
- Adaptive layouts for phone, tablet, desktop
- Block-based architecture works across all devices
- Progressive enhancement approach

**Landing Page:**
- Dynamic process visualization (Devin.ai-inspired): Upload → Curation → Publication → Usage
- Show results, not just process (visualization drives conversion)
- Glassmorphic design elements (selective use)
- Interactive hover effects
- Premium brand positioning through visual design language

## FR Coverage Map

### Epic 1: Project Foundation & User Authentication
- FR-001: Separate registration flows for Clients and Creators
- FR-002: Email/password and OAuth (Google) authentication
- FR-003: Role isolation preventing same user from both roles
- FR-006: Device fingerprinting for fraud prevention
- FR-007: 2FA authentication (optional for users, mandatory for admins)

### Epic 2: Audio Upload & Transcription Processing
- FR-010: Audio file uploads (MP3, WAV, M4A) up to 500MB with resume capability
- FR-011: Automatic transcription using AssemblyAI or Whisper
- FR-012: Select multiple output types per upload
- FR-015: Real-time upload progress indicators

### Epic 3: Creator Application & Level System
- FR-004: Creator application workflow with portfolio submission and sample task vetting
- FR-005: 5-tier creator level system (Probationary, Junior, Mid-Level, Senior, Expert)

### Epic 4: Task Distribution & Creator Workspace
- FR-013: Route tasks to creators based on qualification level
- FR-020: Display available tasks filtered by creator's current level
- FR-021: Task claim/lock mechanism preventing double-assignment
- FR-022: Audio player with synced transcript, variable speed (0.5x-2x), waveform visualization
- FR-023: Rich text editor with auto-save every 30 seconds
- FR-024: Display task value (creator payout) WITHOUT showing client pricing or platform margin
- FR-025: Draft management with version history
- FR-026: Creator earnings dashboard with level progression tracking

### Epic 5: QA Review System
- FR-030: Review queue sortable by deadline, creator, and output type
- FR-031: Side-by-side review interface (audio + transcript + submission)
- FR-032: Rubric-based scoring across 6 dimensions with weighted scores
- FR-033: Inline commenting and feedback on submissions
- FR-034: Approve/Revise/Reject workflow with revision deadlines
- FR-035: Plagiarism detection with automatic flagging
- FR-036: Track creator performance over time
- FR-037: Account flagging system (manual and auto-triggered)

### Epic 6: Payment Processing & Payouts
- FR-040: Client payments via M-Pesa (primary), Stripe, and PayPal
- FR-041: M-Pesa STK Push for instant mobile money collection
- FR-042: Creator payouts via M-Pesa B2C, bank transfer, or PayPal
- FR-043: Weekly batch payouts on Sundays with $20 minimum threshold
- FR-044: Creator rate multipliers (0.8x to 1.5x) based on level
- FR-045: Subscription tiers (Pay-As-You-Go, Pro, Business, Enterprise)
- FR-046: Rush (+50%) and express (+100%) surcharges
- FR-047: Transparent pricing calculator

### Epic 7: Real-Time Notifications & Communication
- FR-050: Email notifications for key events (transactional)
- FR-051: In-app notification center with real-time updates
- FR-052: Web push notifications
- FR-053: WebSocket-based real-time status updates
- FR-054: Editor-creator messaging per assignment

### Epic 8: Analytics & Reporting Dashboards
- FR-060: Uploader dashboard (spending, usage analytics)
- FR-061: Creator dashboard (performance, earnings, level progress)
- FR-062: Admin platform dashboard (revenue, users, quality, fraud metrics)
- FR-063: Creator level statistics and distribution
- FR-064: Data export (CSV, Excel, JSON)

### Epic 9: Admin Operations & Creator Management
- FR-070: Comped task creation for testing/partnerships
- FR-071: Direct task assignment to specific creators
- FR-072: Task reassignment workflow
- FR-073: Bulk upload via CSV
- FR-074: Creator level management (promote/demote with audit log)
- FR-075: Flag resolution workflow (dismiss/warning/suspension/ban)
- FR-076: Complete audit trail for all admin actions

### Epic 10: Fraud Prevention & Security
- FR-080: Email normalization (detect gmail+tags, dot variations)
- FR-081: Velocity checking (rate limits on registration, task claiming)
- FR-082: Behavioral anomaly detection and suspicious patterns
- FR-083: Creator-client collusion detection
- FR-084: Payment fraud monitoring

### Epic 11: Content Moderation & Safety
- FR-090: Screen uploads for prohibited content
- FR-091: User reporting mechanism
- FR-092: Moderation queue with action workflow
- FR-093: Platform content policy enforcement

### Epic 12: Dispute Resolution System
- FR-100: Dispute filing workflow for quality/delivery/payment issues
- FR-101: Mediation interface
- FR-102: Resolution actions (refunds, revisions, penalties)
- FR-103: Appeal process with 14-day window

### Epic 13: Audio Lifecycle & Automated Cleanup
- FR-014: 7-day audio retention policy with automatic deletion after QA completion

## Epic List

### Epic 1: Project Foundation & User Authentication

**User Outcome:** Users (Clients, Creators, Editors, Admins) can register, authenticate, and access their role-specific dashboards with enforced role isolation.

**FRs covered:** FR-001, FR-002, FR-003, FR-006, FR-007

**Implementation Notes:**
- Next.js 15 greenfield starter template (`npx create-next-app@latest jabur --yes`)
- NextAuth.js v5 setup
- Route groups for role isolation: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- Device fingerprinting
- 2FA support
- Email normalization for fraud prevention

### Epic 2: Audio Upload & Transcription Processing

**User Outcome:** Clients can upload audio files (up to 500MB), track upload progress, and receive automated transcriptions with selectable output types.

**FRs covered:** FR-010, FR-011, FR-012, FR-015

**Implementation Notes:**
- Cloud Storage integration with 7-day lifecycle policy
- AssemblyAI/Whisper integration
- Resumable upload with progress indicators
- WebSocket real-time status updates

### Epic 3: Creator Application & Level System

**User Outcome:** Aspiring creators can apply to the platform, get vetted, and advance through 5 creator tiers (Probationary → Expert) based on performance.

**FRs covered:** FR-004, FR-005

**Implementation Notes:**
- Creator application workflow with portfolio submission
- Database-driven 5-tier system with rate multipliers (0.8x - 1.5x)
- Admin approval/vetting interface
- Level progression tracking

### Epic 4: Task Distribution & Creator Workspace

**User Outcome:** Creators can browse available tasks (filtered by their level), claim tasks, access audio player with synced transcript, and work in a rich text editor with auto-save.

**FRs covered:** FR-013, FR-020, FR-021, FR-022, FR-023, FR-024, FR-025, FR-026

**Implementation Notes:**
- Creator workspace navigation (Available → Reserved → Active → Revisions → Completed)
- Bundled task atomic reservation (all-or-nothing)
- Audio player: synced transcript, variable speed (0.5x-2x), waveform, keyboard shortcuts
- Block-based Substack-inspired editor with auto-save every 30 seconds
- Content-type-adaptive editors (Long-form, Structured list, Multi-platform, Timestamp-enabled)
- Creator earnings dashboard

### Epic 5: QA Review System

**User Outcome:** Editors can review creator submissions using rubric-based scoring, provide inline feedback, and approve/revise/reject work while tracking creator performance.

**FRs covered:** FR-030, FR-031, FR-032, FR-033, FR-034, FR-035, FR-036, FR-037

**Implementation Notes:**
- Review queue with sorting/filtering
- Side-by-side review interface (audio + transcript + submission)
- 6-dimension rubric scoring (Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- Plagiarism detection integration
- Approve/Revise/Reject workflow with revision deadlines
- Creator performance tracking and flagging system

### Epic 6: Payment Processing & Payouts

**User Outcome:** Clients can pay for services via M-Pesa/Stripe/PayPal, and creators receive weekly payouts (Sundays, $20 min threshold) via M-Pesa B2C/bank transfer/PayPal.

**FRs covered:** FR-040, FR-041, FR-042, FR-043, FR-044, FR-045, FR-046, FR-047

**Implementation Notes:**
- M-Pesa STK Push for client payments
- M-Pesa B2C API for creator payouts (weekly batch, KES 2,000 min)
- Stripe and PayPal integration
- Subscription tiers (Pay-As-You-Go, Pro, Business, Enterprise)
- Rush (+50%) and express (+100%) surcharges
- Creator rate multipliers based on level
- Transparent pricing calculator
- Cloud Functions for webhook isolation
- 7-year transaction retention

### Epic 7: Real-Time Notifications & Communication

**User Outcome:** Users receive timely email, in-app, and web push notifications for key events, plus editor-creator messaging per assignment.

**FRs covered:** FR-050, FR-051, FR-052, FR-053, FR-054

**Implementation Notes:**
- Email notifications (SendGrid/SES)
- In-app notification center
- Web push notifications
- WebSocket real-time updates with Redis adapter for Cloud Run multi-instance
- Socket.io rooms: `client:{userId}`, `creator:level-{N}`, `editor:{userId}`, `admin`
- Event naming: domain:action pattern

### Epic 8: Analytics & Reporting Dashboards

**User Outcome:** Users can view role-specific analytics (clients: spending/usage, creators: performance/earnings/level progress, admins: revenue/users/quality/fraud metrics) and export data.

**FRs covered:** FR-060, FR-061, FR-062, FR-063, FR-064

**Implementation Notes:**
- Client dashboard: spending, usage analytics
- Creator dashboard: performance, earnings, level progression
- Admin dashboard: revenue, users, quality metrics, fraud metrics
- Creator level statistics and distribution
- Data export (CSV, Excel, JSON)

### Epic 9: Admin Operations & Creator Management

**User Outcome:** Admins can create comped tasks, directly assign tasks, reassign tasks, promote/demote creators, manage flags, and maintain audit logs.

**FRs covered:** FR-070, FR-071, FR-072, FR-073, FR-074, FR-075, FR-076

**Implementation Notes:**
- Comped task creation for testing/partnerships
- Direct task assignment
- Task reassignment workflow
- Bulk upload via CSV
- Creator level management with audit log
- Flag resolution workflow (dismiss/warning/suspension/ban)
- Complete audit trail for admin actions

### Epic 10: Fraud Prevention & Security

**User Outcome:** Platform automatically detects and prevents fraud through email normalization, velocity checking, behavioral anomaly detection, and payment fraud monitoring.

**FRs covered:** FR-080, FR-081, FR-082, FR-083, FR-084

**Implementation Notes:**
- Email normalization (gmail+tags, dot variations)
- Velocity checking (rate limits on registration, task claiming)
- Behavioral anomaly detection
- Creator-client collusion detection
- Payment fraud monitoring
- Device fingerprinting (shared infrastructure with Epic 1)

### Epic 11: Content Moderation & Safety

**User Outcome:** Platform screens uploads for prohibited content, allows user reporting, and provides moderation queue with action workflow.

**FRs covered:** FR-090, FR-091, FR-092, FR-093

**Implementation Notes:**
- Upload content screening
- User reporting mechanism
- Moderation queue with actions
- Platform content policy enforcement

### Epic 12: Dispute Resolution System

**User Outcome:** Users can file disputes for quality/delivery/payment issues, engage in mediation, receive resolutions (refunds/revisions/penalties), and appeal decisions within 14 days.

**FRs covered:** FR-100, FR-101, FR-102, FR-103

**Implementation Notes:**
- Dispute filing workflow
- Mediation interface
- Resolution execution (refunds, revisions, penalties)
- Appeal process with 14-day window

### Epic 13: Audio Lifecycle & Automated Cleanup

**User Outcome:** Platform automatically manages audio storage with 7-day retention policy after QA completion, balancing operational flexibility with cost control.

**FRs covered:** FR-014

**Implementation Notes:**
- Cloud Storage Object Lifecycle policy
- Cloud Scheduler daily cleanup at 2 AM UTC
- Countdown starts after QA completion (NOT upload date)
- Automated deletion (no manual intervention)

## Epic Stories

### Epic 1: Project Foundation & User Authentication

#### Story 1.1: Initialize Next.js 15 Project with TypeScript

**As a** developer,  
**I want to** initialize a Next.js 15 project with TypeScript, Tailwind CSS, and required dependencies,  
**So that** I have a production-ready foundation following the Architecture specifications.

**Acceptance Criteria:**
- Given a clean development environment
- When I run `npx create-next-app@latest jabur --yes`
- Then the project is created with Next.js 15, TypeScript, Tailwind CSS 4.x, ESLint, and App Router enabled
- And Node.js 20+ LTS is verified as the runtime
- And the project structure includes `/app`, `/lib`, `/components` directories
- And TypeScript strict mode is enabled in `tsconfig.json`
- And `@/` import alias is configured for root imports
- And the project runs successfully with `npm run dev`

#### Story 1.2: Set up Database Schema for Users and Auth

**As a** developer,  
**I want to** set up Prisma ORM with PostgreSQL schema for users, sessions, and authentication,  
**So that** the application can store user data and manage authentication securely.

**Acceptance Criteria:**
- Given the Next.js project is initialized
- When I install Prisma and configure the PostgreSQL connection
- Then Prisma is installed with `@prisma/client` and `prisma` dev dependency
- And `DATABASE_URL` environment variable is configured in `.env`
- And Prisma schema defines the following models with snake_case naming:
  - `users` table with columns: `id`, `email`, `password_hash`, `role` (enum: CLIENT, CREATOR, EDITOR, ADMIN), `email_verified`, `device_fingerprint`, `normalized_email`, `two_factor_enabled`, `two_factor_secret`, `created_at`, `updated_at`
  - `accounts` table for OAuth providers (NextAuth.js compatibility)
  - `sessions` table with columns: `id`, `user_id`, `expires_at`, `session_token`, `created_at`
  - `verification_tokens` table for email verification
- And a unique constraint exists on `users.normalized_email` to enforce email uniqueness
- And a check constraint prevents users from having both CLIENT and CREATOR roles
- And indexes are created on all foreign keys (`user_id`, etc.)
- And Prisma client singleton is created at `/lib/db/client.ts`
- And migrations are generated with `npx prisma migrate dev --name init_auth_schema`
- And `npx prisma generate` successfully generates the Prisma client

#### Story 1.3: Implement Client Registration Flow

**As a** client (uploader),  
**I want to** register for an account with email and password,  
**So that** I can access the platform to upload audio files.

**Acceptance Criteria:**
- Given I am on the registration page at `/register`
- When I select "Register as Client" and submit valid email and password (12+ characters, complexity rules)
- Then my email is normalized (lowercase, gmail dot/plus variations detected) and stored in `normalized_email`
- And my password is hashed with bcrypt and stored in `password_hash`
- And a new user record is created with `role = CLIENT`
- And a verification email is sent to my email address
- And I am redirected to `/verify-email` page with instructions
- And I cannot register with an email already used by another client or creator (unique constraint enforced)
- And validation errors are displayed for invalid email format or weak passwords
- And the registration form uses Zod schema validation from `/lib/validation/auth.ts`
- And the registration action is a Server Action in `/lib/actions/auth/register.ts` using `ApiResponse<T>` pattern

#### Story 1.4: Implement Creator Registration Flow

**As a** creator,  
**I want to** register for an account as a creator,  
**So that** I can apply to work on platform tasks.

**Acceptance Criteria:**
- Given I am on the registration page at `/register`
- When I select "Register as Creator" and submit valid email and password
- Then my email is normalized and stored in `normalized_email`
- And my password is hashed and stored in `password_hash`
- And a new user record is created with `role = CREATOR`
- And a verification email is sent to my email address
- And I am redirected to `/verify-email` page
- And I cannot register with an email already used by another client or creator
- And the system prevents me from registering as both CLIENT and CREATOR (database constraint enforced)
- And validation errors are displayed for invalid input
- And the registration uses the same Zod schema and Server Action pattern as client registration

#### Story 1.5: Implement Email/Password Login

**As a** registered user,  
**I want to** log in with my email and password,  
**So that** I can access my role-specific dashboard.

**Acceptance Criteria:**
- Given I have a verified account
- When I submit valid email and password at `/login`
- Then my credentials are verified against the database
- And a session is created with NextAuth.js v5 using database sessions (stored in `sessions` table)
- And session expiration is set to 24 hours for clients/creators, 8 hours for editors/admins
- And I am redirected to my role-specific route group:
  - CLIENT → `/(client)/dashboard`
  - CREATOR → `/(creator)/dashboard`
  - EDITOR → `/(editor)/dashboard`
  - ADMIN → `/(admin)/dashboard`
- And if my account is not verified, I see an error message and cannot log in
- And after 5 failed login attempts, my account is locked for 15 minutes (account lockout implemented)
- And the login action is a Server Action in `/lib/actions/auth/login.ts` using `ApiResponse<T>` pattern
- And all authentication logic uses NextAuth.js v5 configured in `/app/api/auth/[...nextauth]/route.ts`

#### Story 1.6: Implement OAuth (Google) Authentication

**As a** user,  
**I want to** log in using my Google account,  
**So that** I can access the platform without creating a password.

**Acceptance Criteria:**
- Given I am on the login page
- When I click "Continue with Google"
- Then I am redirected to Google OAuth consent screen
- And after authorizing, my Google account email is normalized and checked against existing users
- And if the email exists, I am logged in to my existing account
- And if the email is new, I am prompted to select a role (CLIENT or CREATOR) before account creation
- And an account record is created in the `accounts` table linking my user to Google provider
- And a session is created and I am redirected to my role-specific dashboard
- And I cannot create both CLIENT and CREATOR accounts with the same Google email (role separation enforced)
- And Google OAuth is configured in NextAuth.js with `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from environment variables

#### Story 1.7: Implement Role Isolation Middleware

**As a** platform administrator,  
**I want** role-based access control enforced at the middleware level,  
**So that** users can only access routes appropriate for their role.

**Acceptance Criteria:**
- Given a user is authenticated
- When the user tries to access a route
- Then middleware in `/src/middleware.ts` runs on ALL routes
- And route group protection is enforced:
  - `/(client)/*` routes are accessible ONLY by users with `role = CLIENT`
  - `/(creator)/*` routes are accessible ONLY by users with `role = CREATOR`
  - `/(editor)/*` routes are accessible ONLY by users with `role = EDITOR`
  - `/(admin)/*` routes are accessible ONLY by users with `role = ADMIN`
  - `/(auth)/*` routes are accessible by unauthenticated users only
- And if a user tries to access a route not matching their role, they are redirected to their role-specific dashboard with an error message
- And if an unauthenticated user tries to access a protected route, they are redirected to `/login`
- And middleware uses NextAuth.js session to check user role
- And middleware runs efficiently without blocking requests

#### Story 1.8: Create Role-Specific Dashboards

**As a** user,  
**I want to** see a dashboard tailored to my role after login,  
**So that** I can access relevant features immediately.

**Acceptance Criteria:**
- Given I am logged in
- When I access my dashboard route
- Then I see a role-specific dashboard layout:
  - **Client Dashboard** at `/(client)/dashboard`: Shows upload button, recent uploads, usage stats
  - **Creator Dashboard** at `/(creator)/dashboard`: Shows available tasks, earnings summary, level progress
  - **Editor Dashboard** at `/(editor)/dashboard`: Shows review queue, pending tasks, quality metrics
  - **Admin Dashboard** at `/(admin)/dashboard`: Shows platform metrics, user management, system health
- And each dashboard displays my profile info in the header (email, role, avatar)
- And each dashboard has a logout button
- And each dashboard uses Server Components by default for faster loading
- And dashboards are styled with Tailwind CSS and shadcn/ui components
- And route groups are structured as:
  - `/app/(client)/dashboard/page.tsx`
  - `/app/(creator)/dashboard/page.tsx`
  - `/app/(editor)/dashboard/page.tsx`
  - `/app/(admin)/dashboard/page.tsx`
- And each dashboard is only accessible to users with the corresponding role (enforced by middleware)

#### Story 1.9: Implement Device Fingerprinting

**As a** platform,  
**I want to** capture device fingerprints during registration and login,  
**So that** I can detect multi-account fraud and suspicious activity.

**Acceptance Criteria:**
- Given a user is registering or logging in
- When they submit the form
- Then a device fingerprint is generated using client-side library (e.g., FingerprintJS)
- And the fingerprint includes: browser, OS, screen resolution, timezone, language, canvas fingerprint
- And the fingerprint is sent to the server with the registration/login request
- And the fingerprint is stored in the `device_fingerprint` column of the `users` table
- And during login, if the device fingerprint has changed significantly, a warning is logged for fraud detection
- And the fingerprint is used by fraud detection systems (Epic 10) to identify potential multi-account abuse
- And device fingerprinting code is in `/lib/utils/device-fingerprint.ts`
- And the implementation respects user privacy and complies with GDPR requirements

#### Story 1.10: Implement 2FA (Optional for Users, Mandatory for Admins)

**As a** user,  
**I want to** enable two-factor authentication on my account,  
**So that** my account is more secure.

**Acceptance Criteria:**
- Given I am logged in
- When I navigate to account settings and enable 2FA
- Then a QR code is generated using TOTP (Time-based One-Time Password) algorithm
- And I scan the QR code with an authenticator app (Google Authenticator, Authy, etc.)
- And I verify the setup by entering a 6-digit code from my authenticator app
- And if verification succeeds, `two_factor_enabled = true` and `two_factor_secret` is stored encrypted in the database
- And on subsequent logins, after entering email/password, I am prompted for a 6-digit 2FA code
- And I cannot log in without entering a valid 2FA code (if 2FA is enabled)
- And backup recovery codes are generated and displayed once during setup
- And for ADMIN and EDITOR users, 2FA is MANDATORY and cannot be disabled
- And for CLIENT and CREATOR users, 2FA is OPTIONAL
- And 2FA logic uses a library like `otplib` for TOTP generation and verification
- And 2FA setup and verification are Server Actions using `ApiResponse<T>` pattern

#### Story 1.11: Implement Email Normalization for Fraud Prevention

**As a** platform,  
**I want to** normalize email addresses to detect duplicate accounts,  
**So that** users cannot bypass role isolation using email variations.

**Acceptance Criteria:**
- Given a user is registering with an email
- When the email is processed
- Then the email is normalized using these rules:
  - Convert to lowercase
  - For Gmail addresses: Remove dots (`.`) and everything after `+` (e.g., `john.doe+test@gmail.com` → `johndoe@gmail.com`)
  - For other providers: Remove everything after `+`
- And the normalized email is stored in the `normalized_email` column
- And a unique constraint on `normalized_email` prevents duplicate accounts
- And if a user tries to register with `john.doe@gmail.com` and `johndoe@gmail.com`, the second registration is rejected
- And email normalization function is in `/lib/utils/email-normalization.ts`
- And normalization runs during both registration and login to ensure consistency
- And the system logs when normalized email differs from original email for fraud monitoring

### Epic 2: Audio Upload & Transcription Processing

#### Story 2.1: Set up Cloud Storage for Audio Files

**As a** developer,  
**I want to** configure Google Cloud Storage for audio file storage with 7-day lifecycle policy,  
**So that** uploaded audio files are stored securely and automatically deleted after QA completion.

**Acceptance Criteria:**
- Given the project infrastructure needs audio storage
- When I configure Google Cloud Storage
- Then a Cloud Storage bucket is created for audio files (e.g., `jabur-audio-files`)
- And bucket CORS configuration allows uploads from the application domain
- And Object Lifecycle Management policy is configured to delete files 7 days after creation (temporary policy, will be refined in Epic 13)
- And Cloud CDN is enabled for fast audio delivery globally
- And bucket credentials are stored in Secret Manager, NOT in code
- And environment variables `GCS_BUCKET_NAME` and `GCS_PROJECT_ID` are configured
- And a Cloud Storage client utility is created at `/lib/cloud/storage.ts`
- And upload permissions are restricted to authenticated users only

#### Story 2.2: Implement Resumable Audio File Upload

**As a** client,  
**I want to** upload audio files up to 500MB with resumable capability,  
**So that** large uploads can recover from network interruptions.

**Acceptance Criteria:**
- Given I am logged in as a CLIENT
- When I navigate to `/(client)/upload` and select an audio file (MP3, WAV, or M4A format)
- Then the file is validated for format (MP3, WAV, M4A only) and size (max 500MB)
- And if validation fails, an error message is displayed with specific issue (format/size)
- And if validation succeeds, a resumable upload session is initiated using Cloud Storage resumable upload API
- And the upload proceeds in chunks with progress tracking
- And if the upload is interrupted, I can resume from the last successful chunk
- And drag-and-drop upload is supported on desktop
- And mobile-optimized upload UI is provided for touch devices
- And upload component uses Client Component with `'use client'` directive
- And upload logic is encapsulated in a Server Action at `/lib/actions/upload/upload-audio.ts` using `ApiResponse<T>` pattern

#### Story 2.3: Implement Real-Time Upload Progress Tracking

**As a** client,  
**I want to** see real-time upload progress with transcription status updates,  
**So that** I know when my audio is being processed.

**Acceptance Criteria:**
- Given I am uploading an audio file
- When the upload is in progress
- Then a progress bar shows the upload percentage (0-100%)
- And upload speed (MB/s) is displayed
- And estimated time remaining is calculated and shown
- And after upload completes, the status changes to "Transcribing..."
- And WebSocket connection provides real-time status updates using Socket.io
- And I receive events in the `client:{userId}` room with pattern `upload:processing`, `upload:transcribed`, `upload:complete`
- And if WebSocket is unavailable (mobile networks), graceful degradation uses polling every 5 seconds
- And upload progress uses TanStack Query for optimistic UI updates
- And progress indicator component is at `/components/upload/UploadProgress.tsx`

#### Story 2.4: Implement Multiple Output Type Selection

**As a** client,  
**I want to** select multiple output types for my audio upload,  
**So that** I can get different content formats from a single audio file.

**Acceptance Criteria:**
- Given I am on the upload page preparing to upload audio
- When I see the output type selection interface
- Then I can select one or more output types from: Blog Post, Show Notes, Social Media Pack, Action Items, Reflection Questions
- And each output type displays a brief description and example
- And at least ONE output type must be selected before upload can proceed
- And I can select ALL output types if desired
- And selected output types are stored in the database `audio_uploads` table in `requested_output_types` JSON column
- And pricing is calculated based on selected output types and audio duration
- And rush (+50%) and express (+100%) surcharge options are available with delivery time estimates
- And transparent pricing breakdown is shown before upload confirmation
- And output type selection is a controlled component with Zod validation

#### Story 2.5: Integrate AssemblyAI for Audio Transcription

**As a** platform,  
**I want to** automatically transcribe uploaded audio using AssemblyAI API,  
**So that** creators have text to work with when creating output content.

**Acceptance Criteria:**
- Given an audio file has been successfully uploaded to Cloud Storage
- When the upload completes
- Then a Cloud Task is enqueued to trigger transcription processing
- And the task calls AssemblyAI API with the audio file URL
- And AssemblyAI API key is retrieved from Secret Manager (NEVER hardcoded)
- And transcription is requested with speaker labels, punctuation, and timestamps enabled
- And the transcription job ID is stored in the `audio_uploads` table in `transcription_job_id` column
- And AssemblyAI webhook is configured at `/api/webhooks/assemblyai` to receive completion notifications
- And if AssemblyAI fails, a fallback to Whisper API is attempted
- And transcription processing time is <0.5x audio length (NFR-003)
- And transcription integration code is at `/lib/integrations/assemblyai.ts`
- And webhook handler uses Cloud Functions for isolation

#### Story 2.6: Implement Transcription Status Tracking

**As a** client,  
**I want to** track the status of my audio transcription in real-time,  
**So that** I know when my content creation tasks are being assigned to creators.

**Acceptance Criteria:**
- Given my audio is being transcribed
- When I view my upload dashboard at `/(client)/dashboard`
- Then I see my upload with current status: "Uploading" → "Transcribing" → "Transcribed" → "Tasks Created" → "In Progress"
- And for "Transcribing" status, a spinner animation indicates processing
- And when transcription completes, I receive a WebSocket event `upload:transcribed` in my `client:{userId}` room
- And I receive an email notification "Your audio 'filename.mp3' has been transcribed and tasks have been created"
- And the upload card shows: filename, duration, upload date, status, selected output types, assigned creators count
- And I can click on an upload to view detailed status including individual task progress
- And status transitions are logged in an `upload_status_history` table for audit trail
- And status component uses Server Components for initial load, Client Components for real-time updates

#### Story 2.7: Display Transcription Results to Client

**As a** client,  
**I want to** view the transcription of my uploaded audio,  
**So that** I can verify accuracy before creator work begins.

**Acceptance Criteria:**
- Given my audio has been transcribed
- When I click on the upload in my dashboard
- Then I see the full transcription text with timestamps
- And transcription is displayed with speaker labels (Speaker 1, Speaker 2, etc.) if available
- And I can click on a timestamp to jump to that point in the audio player
- And an audio player is embedded with the transcription for playback
- And audio player supports variable speed (0.5x - 2x) and waveform visualization
- And I can download the transcription as TXT, VTT (subtitles), or JSON format
- And transcription accuracy indicator is shown (>95% word-level accuracy per NFR-040)
- And if I notice errors, I can flag the transcription for manual review (future enhancement, not in MVP)
- And transcription view is at `/(client)/uploads/[id]` route
- And audio player component is lazy-loaded using `React.lazy()` for performance

### Epic 3: Creator Application & Level System

#### Story 3.1: Implement Creator Application Workflow

**As an** aspiring creator,  
**I want to** submit an application with my portfolio and sample work,  
**So that** I can be vetted and approved to work on platform tasks.

**Acceptance Criteria:**
- Given I have registered as a CREATOR
- When I navigate to `/(creator)/apply`
- Then I see an application form requesting:
  - Portfolio URL (required)
  - Sample writing work (upload or paste, required)
  - Bio/background (textarea, 500 char max)
  - Areas of expertise (multi-select: Tech, Business, Health, Education, etc.)
- And I can upload a sample task demonstration (e.g., show notes from a podcast episode)
- And all fields are validated with Zod schema
- And upon submission, my application is stored in `creator_applications` table with `status = PENDING`
- And I receive a confirmation email "Your application has been submitted and is under review"
- And I cannot access creator workspace features until approved
- And my dashboard shows "Application Pending" status with estimated review time (3-5 business days)
- And application submission is a Server Action at `/lib/actions/creator/submit-application.ts`

#### Story 3.2: Implement Admin Creator Application Review

**As an** admin,  
**I want to** review and approve/reject creator applications,  
**So that** only qualified creators can work on platform tasks.

**Acceptance Criteria:**
- Given a creator has submitted an application
- When I navigate to `/(admin)/applications`
- Then I see a list of pending applications sorted by submission date
- And I can filter by status (PENDING, APPROVED, REJECTED) and expertise area
- And clicking an application shows full details including portfolio, sample work, and bio
- And I can approve the application by clicking "Approve" which:
  - Sets application `status = APPROVED`
  - Sets user's creator status = ACTIVE
  - Assigns initial level = PROBATIONARY (level 0-9 tasks)
  - Sends email "Congratulations! Your application has been approved"
  - Grants access to creator workspace
- And I can reject the application by clicking "Reject" with optional rejection reason which:
  - Sets application `status = REJECTED`
  - Sends email "Your application was not approved" with reason (if provided)
  - Allows reapplication after 30 days
- And all actions are logged in admin audit trail
- And review actions are Server Actions at `/lib/actions/admin/review-application.ts`

#### Story 3.3: Implement Database-Driven 5-Tier Creator Level System

**As a** developer,  
**I want to** set up a database-driven creator level system,  
**So that** creator tiers and rate multipliers can be managed dynamically.

**Acceptance Criteria:**
- Given the platform needs a flexible creator level system
- When I configure the database schema
- Then a `creator_levels` table is created with columns:
  - `id`, `level_name` (Probationary, Junior, Mid-Level, Senior, Expert)
  - `min_tasks`, `max_tasks` (e.g., 0-9, 10-29, 30-99, 100-299, 300+)
  - `rate_multiplier` (0.8, 1.0, 1.1, 1.25, 1.5)
  - `priority_access` (boolean), `created_at`, `updated_at`
- And seed data is inserted for the 5 tiers
- And `users` table has `creator_level_id` foreign key linking to `creator_levels`
- And `users` table has `approved_tasks_count` column tracking completed QA-approved tasks
- And a computed field or view calculates current level based on `approved_tasks_count`
- And level changes trigger task queue re-evaluation (creators see new tasks matching their level)
- And rate multipliers are NEVER hardcoded - always fetched from database
- And database indexes on `creator_level_id` and `approved_tasks_count` for query performance

#### Story 3.4: Implement Creator Level Progression Tracking

**As a** creator,  
**I want to** see my current level and progress toward the next tier,  
**So that** I'm motivated to complete more tasks and improve quality.

**Acceptance Criteria:**
- Given I am an approved creator
- When I view my dashboard at `/(creator)/dashboard`
- Then my current tier is prominently displayed in the header (e.g., "Junior Creator")
- And a progress bar shows: "15 of 30 approved tasks to Mid-Level"
- And next tier benefits are listed:
  - Rate increase (e.g., "1.0x → 1.1x = 10% higher payout")
  - Priority access to premium tasks
  - Unlock higher-complexity task types
- And my earnings dashboard shows:
  - Pending earnings (tasks submitted, awaiting QA)
  - Approved earnings (QA approved, awaiting payout)
  - Paid earnings (already paid out)
  - Total lifetime earnings
- And when I level up, I receive:
  - WebSocket notification `creator:level-up` in `creator:{userId}` room
  - Email "Congratulations! You've advanced to {new_level}"
  - Confetti animation on dashboard (optional UX enhancement)
- And level progression is calculated in real-time using database query
- And component at `/components/creator/LevelProgress.tsx`

### Epic 4: Task Distribution & Creator Workspace

#### Story 4.1: Create Database Schema for Tasks and Assignments

**As a** developer,  
**I want to** set up database tables for tasks, assignments, and submissions,  
**So that** the platform can manage the creator workflow.

**Acceptance Criteria:**
- Given the platform needs task management
- When I create the database schema
- Then the following tables are created with snake_case naming:
  - **`tasks`** table: `id`, `upload_id` (FK to audio_uploads), `output_type`, `complexity`, `base_payout`, `deadline`, `status`, `created_at`, `updated_at`
  - **`task_assignments`** table: `id`, `task_id`, `creator_id`, `status` (RESERVED, ACTIVE, SUBMITTED, REVISING, APPROVED, REJECTED), `reserved_at`, `committed_at`, `submitted_at`, `deadline`, `created_at`, `updated_at`
  - **`task_submissions`** table: `id`, `assignment_id`, `content` (TEXT/JSON), `version`, `submitted_at`, `created_at`
  - **`task_reviews`** table: `id`, `submission_id`, `editor_id`, `rubric_scores` (JSON), `feedback`, `decision` (APPROVE, REVISE, REJECT), `reviewed_at`, `created_at`
- And indexes are created on all foreign keys
- And index on `tasks.status` and `task_assignments.status` for filtering
- And `tasks.base_payout` is calculated based on output type, complexity, and audio duration
- And Prisma migrations generated with `npx prisma migrate dev --name task_management_schema`

#### Story 4.2: Implement Task Creation from Transcribed Audio

**As a** platform,  
**I want to** automatically create tasks when audio transcription completes,  
**So that** creators can start claiming work.

**Acceptance Criteria:**
- Given an audio upload has been transcribed
- When the transcription webhook is processed
- Then for each selected output type, a task is created in the `tasks` table
- And task complexity is determined by:
  - Audio duration (>60 min = HIGH, 30-60 min = MEDIUM, <30 min = LOW)
  - Output type (Blog Post = HIGH, Show Notes = MEDIUM, Social Media Pack = LOW)
- And base payout is calculated using formula: `base_amount * complexity_multiplier * duration_factor`
- And task deadline is set based on tier: Standard (3 days), Rush (24 hours +50%), Express (12 hours +100%)
- And tasks are created with `status = AVAILABLE`
- And client receives email "Your audio has been processed and tasks have been assigned"
- And tasks are visible to creators matching the required level (based on complexity)
- And task creation is handled by Cloud Task queue worker at `/workers/create-tasks.ts`
- And task creation uses database transaction to ensure atomicity

#### Story 4.3: Implement Creator Task Browse and Filter

**As a** creator,  
**I want to** browse available tasks filtered by my current level,  
**So that** I can find work that matches my skills.

**Acceptance Criteria:**
- Given I am logged in as an approved CREATOR
- When I navigate to `/(creator)/tasks/available`
- Then I see a table/list of available tasks filtered by my current creator level
- And each task card displays:
  - Output type (Blog Post, Show Notes, etc.)
  - Audio duration
  - Complexity (HIGH/MEDIUM/LOW)
  - Payout amount (my rate after level multiplier applied)
  - Deadline
  - "Reserve" button
- And I can filter tasks by: output type, complexity, payout range, deadline
- And I can sort by: payout (high to low), deadline (soonest first), posted date (newest first)
- And tasks are paginated (20 per page) for performance
- And payout shown is: `base_payout * my_level_rate_multiplier`
- And I do NOT see client pricing or platform margin (FR-024 compliance)
- And available tasks query uses database WHERE clause filtering by creator level
- And task list component at `/(creator)/tasks/available/page.tsx`

#### Story 4.4: Implement Bundled Task Atomic Reservation

**As a** creator,  
**I want to** reserve all bundled tasks from a single audio upload together,  
**So that** I can work on multiple related outputs efficiently.

**Acceptance Criteria:**
- Given I am viewing available tasks
- When I see a "bundle card" representing all tasks from one audio upload
- Then the bundle shows: audio title, total tasks (e.g., "3 outputs"), total payout, bundle deadline
- And clicking "Reserve Bundle" reserves ALL tasks in the bundle atomically (all-or-nothing)
- And if ANY task in the bundle is already reserved by another creator, the entire reservation fails with error message
- And upon successful reservation, all tasks move to "RESERVED" status for me
- And I have 30 minutes to preview the audio and transcript before committing
- And during the 30-minute preview window, tasks are locked to me but not yet committed
- And I can click "Commit" to convert RESERVED → ACTIVE status, which locks in my deadline
- And if I don't commit within 30 minutes, tasks automatically return to AVAILABLE status
- And other creators see tasks as "Reserved" during the 30-minute window
- And reservation logic uses database transaction with row-level locking to prevent race conditions
- And reservation action at `/lib/actions/task/reserve-bundle.ts`

#### Story 4.5: Implement Audio Player with Synced Transcript

**As a** creator,  
**I want to** play audio with a synced scrolling transcript,  
**So that** I can efficiently understand the content while creating outputs.

**Acceptance Criteria:**
- Given I have committed to a task
- When I open the task in my creator workspace at `/(creator)/tasks/[id]`
- Then I see an audio player with:
  - Play/pause button
  - Timeline scrubber
  - Variable speed control (0.5x, 0.75x, 1.0x, 1.25x, 1.5x, 2.0x)
  - Current time / total duration display
  - Waveform visualization
  - Volume control
- And below the player, the transcript is displayed with timestamps
- And as audio plays, the current sentence/paragraph is highlighted and auto-scrolls into view
- And clicking a timestamp in the transcript jumps the audio to that point
- And keyboard shortcuts work:
  - Spacebar: play/pause
  - Left/Right arrow: skip backward/forward 5 seconds
  - Up/Down arrow: increase/decrease speed
- And player state (position, speed) is persisted using localStorage for resumption
- And audio is streamed from Cloud CDN for fast loading
- And player component is lazy-loaded at `/components/creator/AudioPlayer.tsx`
- And waveform is pre-generated during transcription for faster rendering

#### Story 4.6: Implement Block-Based Editor with Auto-Save

**As a** creator,  
**I want to** write content in a Substack-inspired block editor with auto-save,  
**So that** I don't lose work and can format content richly.

**Acceptance Criteria:**
- Given I am working on a task
- When I type in the content editor
- Then the editor supports:
  - Block-based editing (each paragraph/heading is a block)
  - Slash commands for formatting (e.g., `/heading`, `/quote`, `/code`, `/list`)
  - Markdown-native editing with rich formatting
  - Bold, italic, underline, strikethrough
  - Headings (H1, H2, H3)
  - Bulleted and numbered lists
  - Block quotes and callouts
  - Code blocks with syntax highlighting
- And auto-save triggers every 30 seconds automatically
- And auto-save also triggers on blur (when I click away from editor)
- And last saved timestamp is displayed (e.g., "Last saved at 3:45 PM")
- And draft is saved to `task_submissions` table with version incremented
- And minimal UI that fades out toolbar when not in use (focus on content)
- And editor is adaptive per output type:
  - Long-form (Blog Post): Full canvas editor with version history
  - Structured list (Action Items): Template-based with numbered items
  - Multi-platform (Social Media Pack): Platform-specific previews with character limits
  - Timestamp-enabled (Show Notes): Playback sync with audio timestamps
- And editor component uses lazy loading: `const Editor = lazy(() => import('./BlockEditor'))`
- And auto-save uses Server Action at `/lib/actions/task/save-draft.ts`

#### Story 4.7: Implement Draft Management with Version History

**As a** creator,  
**I want to** view and restore previous versions of my draft,  
**So that** I can recover from mistakes or compare iterations.

**Acceptance Criteria:**
- Given I am editing a task
- When I click "Version History" in the editor toolbar
- Then a sidebar opens showing all saved versions with timestamps
- And each version shows: version number, saved timestamp, word count
- And I can click a version to preview it (read-only)
- And I can click "Restore This Version" to revert to an older draft
- And restoring creates a NEW version (doesn't delete newer versions)
- And version history is stored in `task_submissions` table with incrementing `version` column
- And current active draft is marked with `is_active = true`
- And version history component at `/components/creator/VersionHistory.tsx`
- And version retrieval uses efficient database query with LIMIT for recent versions only

#### Story 4.8: Implement Creator Earnings Dashboard

**As a** creator,  
**I want to** see my earnings broken down by status,  
**So that** I know what I've earned and when I'll be paid.

**Acceptance Criteria:**
- Given I am logged in as a CREATOR
- When I navigate to `/(creator)/earnings`
- Then I see my earnings summary:
  - **Pending**: Tasks submitted, awaiting QA review (not guaranteed)
  - **Approved**: QA approved, awaiting next Sunday payout
  - **Paid**: Already paid out (historical)
  - **Total Lifetime Earnings**
- And each section shows: task count, total amount, breakdown by output type
- And I can filter by date range (This Week, This Month, All Time)
- And a chart visualizes earnings over time (line chart or bar chart)
- And weekly payout schedule is displayed: "Next payout: Sunday, Jan 15 ($152.50 pending)"
- And minimum payout threshold is shown: "Minimum $20 required for payout"
- And if I'm below threshold, I see: "You need $12.50 more to reach minimum payout"
- And I can download earnings report as CSV for tax purposes
- And all amounts reflect my current level's rate multiplier
- And earnings calculations aggregate from `task_assignments` joined with `tasks` and `creator_levels`
- And earnings page at `/(creator)/earnings/page.tsx`

### Epic 5: QA Review System

#### Story 5.1: Create Review Queue for Editors

**As an** editor,  
**I want to** see a queue of submitted tasks requiring review,  
**So that** I can efficiently manage quality assurance workload.

**Acceptance Criteria:**
- Given I am logged in as an EDITOR
- When I navigate to `/(editor)/review-queue`
- Then I see all tasks with `status = SUBMITTED` sorted by deadline (soonest first)
- And I can filter by: output type, creator, deadline range, submission date
- And I can sort by: deadline, creator name, payout, submission timestamp
- And each queue item shows: task ID, creator name (anonymized option), output type, deadline, time in queue, priority (rush/express)
- And rush tasks (+50%) and express tasks (+100%) are visually highlighted (red/orange badges)
- And I can click a task to open the review interface
- And queue shows count of pending reviews and estimated time to SLA breach
- And queue updates in real-time via WebSocket when new submissions arrive (`editor:{userId}` room, event `qa:new-submission`)
- And review queue component at `/(editor)/review-queue/page.tsx`

#### Story 5.2: Implement Side-by-Side Review Interface

**As an** editor,  
**I want to** review submissions side-by-side with audio and transcript,  
**So that** I can verify accuracy and quality efficiently.

**Acceptance Criteria:**
- Given I have opened a task for review
- When I am on the review page at `/(editor)/review/[id]`
- Then the interface shows three panels:
  - **Left**: Audio player + synced transcript
  - **Center**: Creator's submission (read-only)
  - **Right**: Rubric scoring panel + feedback form
- And audio player supports: play/pause, variable speed (0.5x-2x), waveform, click-to-jump timestamps
- And as audio plays, corresponding text highlights in both transcript AND submission (if timestamps are linked)
- And I can resize panels by dragging dividers
- And I can toggle full-screen mode for any panel
- And layout is responsive for tablet (stacked panels) and desktop (side-by-side)
- And all content is loaded via Server Components with lazy-loaded audio player
- And review interface component at `/(editor)/review/[id]/page.tsx`

#### Story 5.3: Implement Rubric-Based Scoring System

**As an** editor,  
**I want to** score submissions across 6 quality dimensions,  
**So that** creator performance is evaluated consistently.

**Acceptance Criteria:**
- Given I am reviewing a submission
- When I score the rubric in the right panel
- Then I see 6 scoring dimensions with sliders (0-100):
  - **Accuracy (25% weight)**: Factual correctness, no misrepresentations
  - **Completeness (20% weight)**: Covers all key points from audio
  - **Clarity (20% weight)**: Clear, well-structured writing
  - **Actionability (15% weight)**: Useful, practical insights (context-dependent)
  - **Formatting (10% weight)**: Proper structure, grammar, punctuation
  - **Originality (10% weight)**: Creative value-add beyond transcription
- And each dimension shows: score slider, weight percentage, description tooltip
- And weighted total score is calculated automatically and displayed prominently (0-100)
- And score thresholds determine decision guidance:
  - 90-100: "Exceptional - Consider immediate approval"
  - 75-89: "Good - Approve or request minor revisions"
  - 60-74: "Needs improvement - Request revisions"
  - <60: "Poor quality - Consider rejection"
- And rubric scores are stored in `task_reviews.rubric_scores` JSON column
- And scoring component validates all dimensions are scored before submission
- And rubric component at `/components/editor/RubricScoring.tsx`

#### Story 5.4: Implement Inline Commenting and Feedback

**As an** editor,  
**I want to** add inline comments and general feedback on submissions,  
**So that** creators understand what needs improvement.

**Acceptance Criteria:**
- Given I am reviewing a submission
- When I select text in the creator's submission
- Then a tooltip appears with "Add Comment" button
- And clicking the button opens an inline comment box
- And I can type feedback specific to that selection (e.g., "This section needs more detail about X")
- And comments are highlighted in yellow with comment icon
- And hovering over a highlight shows the comment content
- And I can add, edit, or delete my comments before final review submission
- And below the submission panel, I see a "General Feedback" textarea for overall comments
- And general feedback supports markdown formatting (bold, lists, links)
- And inline comments are stored in `task_reviews.inline_comments` JSON column as `[{text, selection, comment}]`
- And general feedback is stored in `task_reviews.feedback` TEXT column
- And commenting component at `/components/editor/InlineComments.tsx`

#### Story 5.5: Implement Approve/Revise/Reject Workflow

**As an** editor,  
**I want to** approve, request revisions, or reject submissions,  
**So that** the platform maintains quality standards.

**Acceptance Criteria:**
- Given I have completed rubric scoring and feedback
- When I click a decision button (Approve / Revise / Reject)
- Then the following actions occur based on my decision:

**APPROVE:**
- Task assignment `status` → APPROVED
- Creator's `approved_tasks_count` increments by 1
- Creator receives email "Your submission for [task] has been approved"
- Creator receives WebSocket event `qa:approved` with task details
- Earnings move from Pending → Approved (awaiting payout)
- Client receives email "Content for [audio] is ready for review"
- If creator levels up from this approval, trigger level-up notification

**REVISE:**
- Task assignment `status` → REVISING
- Revision deadline is set (24-48 hours based on urgency)
- Creator receives email with rubric scores, inline comments, and feedback
- Creator receives WebSocket event `qa:revise` with revision details
- Attempt counter increments (max 3 attempts)
- If attempt > 3, auto-escalate to admin for manual intervention
- Task returns to creator's "Revisions Needed" queue

**REJECT:**
- Task assignment `status` → REJECTED
- Task becomes unassigned and returns to AVAILABLE for other creators
- Creator receives email with explanation and learning feedback
- Creator's performance metrics are updated (rejection rate tracked)
- Flagging system checks if rejection rate crosses threshold (>20% = auto-flag)
- Client is notified that task is being reassigned

- And all decisions are logged in `task_reviews` table with timestamp, editor ID, decision, scores, feedback
- And decision actions are Server Actions at `/lib/actions/qa/submit-review.ts`

#### Story 5.6: Integrate Plagiarism Detection

**As an** editor,  
**I want** submissions automatically checked for plagiarism,  
**So that** original content standards are enforced.

**Acceptance Criteria:**
- Given a creator submits their work
- When the submission is saved
- Then plagiarism detection API (e.g., Copyscape, Turnitin API) is called asynchronously
- And the submission text is checked against indexed web content and previous platform submissions
- And plagiarism score (0-100%) is returned and stored in `task_submissions.plagiarism_score`
- And if score > 30%, submission is auto-flagged with "PLAGIARISM_SUSPECTED" flag
- And in the review interface, I see plagiarism results:
  - Overall similarity score
  - Matched sources (URLs or previous submissions)
  - Highlighted matching text segments
- And false positive rate is monitored (<2% per NFR-041)
- And if plagiarism is confirmed, I can escalate to admin for account review
- And plagiarism API key is stored in Secret Manager (NEVER hardcoded)
- And plagiarism integration at `/lib/integrations/plagiarism.ts`
- And Cloud Task queue handles async plagiarism checks to avoid blocking submission

#### Story 5.7: Implement Creator Performance Tracking

**As an** editor,  
**I want to** view a creator's historical performance metrics,  
**So that** I can contextualize current submission quality.

**Acceptance Criteria:**
- Given I am reviewing a submission
- When I click "Creator Profile" in the review interface
- Then a modal/sidebar opens showing creator performance data:
  - Current level and tasks completed
  - Average rubric score across all dimensions (last 30 days)
  - Approval rate (approved / total submitted)
  - Revision rate (revisions requested / total submitted)
  - Rejection rate (rejected / total submitted)
  - Average turnaround time (submission time - assignment time)
  - Plagiarism incidents (count and dates)
  - Active flags (if any)
- And performance trends are visualized with sparkline charts
- And I can see recent review history (last 10 submissions with scores and decisions)
- And performance data helps inform my review decision (e.g., first-time creator gets more leniency)
- And all metrics are calculated from `task_assignments`, `task_reviews`, and `creator_performance` tables
- And performance component at `/components/editor/CreatorPerformance.tsx`

#### Story 5.8: Implement Account Flagging System

**As an** editor or platform,  
**I want to** flag creator accounts for quality or behavior issues,  
**So that** admins can investigate and take action.

**Acceptance Criteria:**
- Given I notice concerning patterns or the system detects issues
- When I manually flag an account OR auto-flag triggers fire
- Then a flag record is created in `account_flags` table with:
  - `user_id`, `flag_type` (QUALITY_ISSUES, PLAGIARISM, BEHAVIOR, FRAUD, OTHER)
  - `severity` (LOW, MEDIUM, HIGH, CRITICAL)
  - `triggered_by` (MANUAL_EDITOR, AUTO_REJECTION_RATE, AUTO_PLAGIARISM, etc.)
  - `description`, `created_at`, `status` (OPEN, INVESTIGATING, RESOLVED, DISMISSED)

**Manual Flagging:**
- I can click "Flag Account" button in review interface or creator profile
- I select flag type, severity, and provide description
- Flag is immediately visible to admins in `/(admin)/flags` queue

**Auto-Flagging Triggers:**
- Rejection rate > 20% in last 20 tasks → QUALITY_ISSUES flag
- Plagiarism score > 30% on 2+ submissions → PLAGIARISM flag
- 3 revisions requested on single task → QUALITY_ISSUES flag
- Pattern matching detects suspicious behavior → FRAUD flag

- And flagged accounts are highlighted in review queue (orange/red indicator)
- And creators are NOT notified when flagged (investigation is confidential)
- And admins can view all flags at `/(admin)/flags` for resolution workflow (Epic 9)
- And flagging logic at `/lib/utils/flagging.ts`

### Epic 6: Payment Processing & Payouts

#### Story 6.1: Set up M-Pesa Integration for Client Payments

**As a** developer,  
**I want to** integrate M-Pesa STK Push API for client payments,  
**So that** clients in East Africa can pay using mobile money.

**Acceptance Criteria:**
- Given the platform needs M-Pesa payment support
- When I configure M-Pesa integration
- Then Safaricom M-Pesa Business API credentials are stored in Secret Manager:
  - `MPESA_CONSUMER_KEY`, `MPESA_CONSUMER_SECRET`
  - `MPESA_SHORTCODE`, `MPESA_PASSKEY`
  - `MPESA_CALLBACK_URL` (webhook endpoint)
- And OAuth token generation function is created at `/lib/integrations/mpesa/auth.ts`
- And STK Push function is created at `/lib/integrations/mpesa/stk-push.ts`
- And webhook handler is deployed as Cloud Function at `/api/webhooks/mpesa/stk-callback`
- And webhook validates request authenticity using callback signature
- And payment transactions are logged in `payment_transactions` table with columns:
  - `id`, `user_id`, `amount`, `currency` (KES), `provider` (MPESA), `transaction_id`, `status`, `created_at`
- And M-Pesa credentials are NEVER stored in code or committed to git
- And M-Pesa API calls use proper error handling with retry logic
- And test mode uses M-Pesa Sandbox for development

#### Story 6.2: Implement Client Payment Flow with M-Pesa STK Push

**As a** client,  
**I want to** pay for audio transcription services using M-Pesa,  
**So that** I can conveniently pay via mobile money.

**Acceptance Criteria:**
- Given I have uploaded audio and selected output types
- When I reach the payment step
- Then I see transparent pricing breakdown:
  - Base price per output type
  - Audio duration factor
  - Rush surcharge (+50%) or Express surcharge (+100%) if selected
  - Total amount in KES (Kenyan Shillings)
- And I can select payment method: M-Pesa (primary), Stripe (card), PayPal
- And if I select M-Pesa, I enter my phone number (format: 254XXXXXXXXX)
- And clicking "Pay with M-Pesa" triggers STK Push to my phone
- And I receive a prompt on my phone to enter M-Pesa PIN
- And the UI shows "Waiting for payment confirmation..." with countdown timer (60 seconds)
- And if I complete payment on my phone, webhook receives callback and updates transaction `status = SUCCESS`
- And I see "Payment successful!" message and am redirected to upload dashboard
- And if payment fails or times out, I see error message with retry option
- And payment is atomic: EITHER full payment succeeds OR no charge occurs
- And 7-year transaction retention for financial compliance (NFR-056)
- And payment flow uses Server Action at `/lib/actions/payment/process-payment.ts`

#### Story 6.3: Implement Stripe Integration for Card Payments

**As a** client outside East Africa,  
**I want to** pay using credit/debit card via Stripe,  
**So that** I can use the platform from anywhere in the world.

**Acceptance Criteria:**
- Given I am on the payment page
- When I select "Pay with Card" (Stripe)
- Then Stripe Elements checkout form loads with card input fields
- And I enter card number, expiry, CVC, and billing ZIP code
- And client-side validation checks card format before submission
- And clicking "Pay" creates Stripe Payment Intent via Server Action
- And Stripe processes the payment securely (PCI DSS compliant per NFR-021)
- And webhook at `/api/webhooks/stripe` receives payment confirmation
- And transaction is logged in `payment_transactions` table with `provider = STRIPE`
- And payment supports multiple currencies: USD, EUR, GBP, KES
- And Stripe publishable key is in environment variables, secret key in Secret Manager
- And Stripe webhook signature is validated for security
- And payment UI uses TanStack Query for optimistic updates
- And Stripe integration code at `/lib/integrations/stripe.ts`

#### Story 6.4: Implement Subscription Tier Pricing

**As a** client,  
**I want to** choose a subscription tier for recurring payments,  
**So that** I get discounts and priority features based on my usage volume.

**Acceptance Criteria:**
- Given I am a new or existing client
- When I navigate to `/(client)/subscription`
- Then I see 4 subscription tiers:
  - **Pay-As-You-Go**: No monthly fee, standard per-task pricing
  - **Pro ($49/month)**: 10% discount on all tasks, priority support
  - **Business ($199/month)**: 20% discount, rush delivery included, dedicated account manager
  - **Enterprise (custom pricing)**: Volume discounts, custom SLA, API access
- And each tier displays: monthly cost, discount percentage, included features, estimated savings
- And I can click "Select Plan" to subscribe using Stripe Subscriptions
- And subscription status is stored in `user_subscriptions` table with columns:
  - `user_id`, `tier`, `status` (ACTIVE, CANCELLED, PAST_DUE), `billing_cycle_start`, `next_billing_date`
- And discounts are automatically applied at checkout based on active subscription tier
- And I can upgrade/downgrade tiers mid-cycle with prorated billing
- And I can cancel anytime (takes effect at end of billing period)
- And subscription management uses Stripe Billing Portal for card updates and cancellation
- And subscription component at `/(client)/subscription/page.tsx`

#### Story 6.5: Implement Weekly Creator Payouts

**As a** platform,  
**I want to** automatically process creator payouts every Sunday,  
**So that** creators receive their earnings reliably and on schedule.

**Acceptance Criteria:**
- Given it is Sunday at 2 AM UTC
- When the weekly payout Cloud Scheduler job triggers
- Then a Cloud Task queue worker processes payouts for all creators with approved earnings ≥ $20
- And for each eligible creator:
  - Calculate total approved earnings (sum of all APPROVED tasks not yet paid)
  - Apply creator level rate multiplier (0.8x - 1.5x based on tier)
  - Generate payout record in `creator_payouts` table:
    - `creator_id`, `amount`, `currency`, `payout_method` (MPESA_B2C, BANK_TRANSFER, PAYPAL), `status`, `created_at`
  - Call payout API (M-Pesa B2C, bank transfer via Stripe, or PayPal)
  - Update task assignment status from APPROVED → PAID
  - Send email "Your payout of $XX.XX has been processed"
- And minimum threshold is KES 2,000 (≈ $20 USD) to reduce transaction fees
- And if payout fails, `status = FAILED` and creator is notified to update payment info
- And payout history is available at `/(creator)/payouts` with downloadable CSV
- And payout processing uses database transaction to prevent double-payment
- And 7-year payout transaction retention for compliance
- And payout worker at `/workers/process-payouts.ts`

#### Story 6.6: Implement M-Pesa B2C for Creator Payouts

**As a** creator in Kenya,  
**I want to** receive payouts via M-Pesa mobile money,  
**So that** I get funds instantly without needing a bank account.

**Acceptance Criteria:**
- Given I am eligible for weekly payout
- When the payout worker processes my payment
- Then M-Pesa B2C API is called with my registered phone number
- And I receive M-Pesa SMS notification: "You have received KES X from Jabur Platform"
- And funds appear in my M-Pesa wallet within 2 minutes
- And payout transaction is logged with M-Pesa transaction ID for reconciliation
- And if B2C fails (insufficient float, invalid number), payout `status = FAILED` and I'm notified to verify phone number
- And I can update my payout phone number at `/(creator)/settings/payout-methods`
- And M-Pesa B2C integration at `/lib/integrations/mpesa/b2c.ts`

#### Story 6.7: Implement Transparent Pricing Calculator

**As a** client,  
**I want to** see real-time pricing as I configure my upload,  
**So that** I know the cost before committing to payment.

**Acceptance Criteria:**
- Given I am on the upload page selecting options
- When I select output types, delivery speed, or change audio duration
- Then the pricing calculator updates in real-time showing:
  - Base price per output type (e.g., Blog Post: $15, Show Notes: $10)
  - Duration factor (e.g., +$5 per 30 minutes)
  - Rush surcharge (+50% = $X.XX extra)
  - Express surcharge (+100% = $X.XX extra)
  - Subscription discount if applicable (e.g., -20% Pro discount)
  - **Total: $XX.XX**
- And pricing is transparent with itemized breakdown
- And I do NOT see platform margin or creator payout amounts (internal only)
- And pricing rules are database-driven from `pricing_rules` table, NOT hardcoded
- And calculator uses Client Component with `'use client'` directive for interactivity
- And pricing formula matches backend calculation exactly (no discrepancies)
- And component at `/components/upload/PricingCalculator.tsx`

#### Story 6.8: Implement Payment Fraud Monitoring

**As a** platform,  
**I want to** monitor payment transactions for fraud indicators,  
**So that** chargebacks and fraudulent payments are minimized.

**Acceptance Criteria:**
- Given payment transactions are being processed
- When the fraud detection system analyzes transactions
- Then the following fraud indicators trigger alerts:
  - Multiple failed payment attempts (>3 in 1 hour)
  - Rapid succession of payments from same IP/device
  - Payment amount significantly higher than user's historical average
  - Mismatched billing address and IP geolocation
  - Card testing patterns (small amounts, rapid attempts)
  - Known fraudulent phone numbers or email patterns
- And high-risk transactions are flagged in `payment_transactions.fraud_score` (0-100)
- And if `fraud_score > 75`, transaction is held for manual review
- And if `fraud_score > 90`, transaction is auto-declined
- And flagged transactions appear in admin dashboard at `/(admin)/fraud-review`
- And admins can approve/decline held transactions
- And fraud detection rate target: <5% false positives in MVP, <1% in Growth phase (NFR-043)
- And fraud monitoring logic at `/lib/utils/fraud-detection.ts`

### Epic 7: Real-Time Notifications & Communication

#### Story 7.1: Set up Socket.io for Real-Time Updates

**As a** developer,  
**I want to** configure Socket.io with Redis adapter for real-time communication,  
**So that** users receive instant updates across multiple Cloud Run instances.

**Acceptance Criteria:**
- Given the platform needs real-time WebSocket communication
- When I configure Socket.io
- Then Socket.io server is initialized in `/lib/socket/server.ts`
- And Redis adapter is configured to coordinate events across Cloud Run instances
- And Redis connection uses Google Cloud Memorystore for high availability
- And Socket.io rooms are organized by: `client:{userId}`, `creator:level-{N}`, `creator:{userId}`, `editor:{userId}`, `admin`
- And event naming follows domain:action pattern: `upload:processing`, `task:claimed`, `qa:approved`
- And authentication middleware verifies user session before allowing Socket connection
- And graceful degradation: if WebSocket unavailable (mobile networks), fallback to polling every 5 seconds
- And WebSocket latency for real-time updates is <500ms (NFR-005)
- And connection limits prevent abuse (max 5 connections per user)
- And Socket.io server integrates with Next.js App Router custom server

#### Story 7.2: Implement Email Notifications for Key Events

**As a** user,  
**I want to** receive email notifications for important events,  
**So that** I stay informed even when not actively using the platform.

**Acceptance Criteria:**
- Given key platform events occur
- When the event triggers an email notification
- Then emails are sent using SendGrid or Amazon SES with 99%+ delivery rate (NFR-073)
- And email templates are created for these transactional events:
  - **Client**: Audio transcribed, tasks completed, payment receipt, content ready
  - **Creator**: Application approved/rejected, task available (optional), revision requested, QA approved/rejected, payout processed
  - **Editor**: New submission in queue, SLA breach warning
  - **Admin**: Flag created, system alert, weekly metrics summary
- And emails use responsive HTML templates with platform branding
- And all emails include: unsubscribe link (except critical transactional), user preferences link
- And email sending is async via Cloud Task queue to avoid blocking user actions
- And email delivery status is tracked in `email_logs` table
- And users can configure email preferences at `/(role)/settings/notifications`
- And email templates are at `/lib/email/templates/`
- And email service wrapper at `/lib/email/send.ts`

#### Story 7.3: Implement In-App Notification Center

**As a** user,  
**I want to** see all my notifications in an in-app notification center,  
**So that** I can review missed updates and stay informed.

**Acceptance Criteria:**
- Given I am logged in
- When I click the notification bell icon in the header
- Then a dropdown/sidebar opens showing my recent notifications (last 30 days)
- And notifications are grouped by: Unread (top), Today, This Week, Older
- And each notification shows: icon, title, description, timestamp (relative: "2 hours ago")
- And unread notifications have a blue dot indicator
- And unread count badge appears on bell icon (e.g., "3")
- And clicking a notification marks it as read and navigates to relevant page:
  - "Task approved" → `/(creator)/tasks/[id]`
  - "New submission" → `/(editor)/review/[id]`
  - "Payment received" → `/(client)/billing`
- And I can click "Mark all as read" to clear unread status
- And I can click "View all notifications" to see full history at `/(role)/notifications`
- And notifications are stored in `notifications` table with columns:
  - `user_id`, `type`, `title`, `description`, `link`, `is_read`, `created_at`
- And real-time notifications arrive via WebSocket without page refresh
- And notification center component at `/components/layout/NotificationCenter.tsx`

#### Story 7.4: Implement Web Push Notifications

**As a** user,  
**I want to** receive browser push notifications,  
**So that** I stay updated even when the tab is not active.

**Acceptance Criteria:**
- Given I have granted browser notification permission
- When an important event occurs
- Then I receive a browser push notification with: title, body, icon, click action
- And clicking the notification opens the relevant page in a new tab or focuses existing tab
- And push notifications are triggered for high-priority events:
  - **Creator**: Task revision requested (urgent), payout processed
  - **Client**: Content ready for review
  - **Editor**: SLA breach imminent (<2 hours to deadline)
- And users can enable/disable push notifications at `/(role)/settings/notifications`
- And push subscriptions are stored in `push_subscriptions` table
- And push service uses Web Push API with VAPID keys
- And VAPID public/private keys are stored in Secret Manager
- And push implementation at `/lib/notifications/push.ts`
- And service worker registered at `/public/sw.js`

#### Story 7.5: Implement Editor-Creator Messaging per Assignment

**As an** editor or creator,  
**I want to** communicate directly about a specific task assignment,  
**So that** I can clarify requirements or feedback efficiently.

**Acceptance Criteria:**
- Given I am reviewing a task (as editor) OR working on a task (as creator)
- When I open the task detail page
- Then I see a messaging panel on the right side
- And I can type and send messages related to this specific task
- And messages are threaded chronologically with timestamps
- And each message shows: sender name, role (Editor/Creator), content, timestamp
- And the other party receives:
  - Real-time message via WebSocket if online
  - Email notification if offline: "You have a new message about [task]"
  - Unread message badge in notification center
- And messages are stored in `task_messages` table with columns:
  - `task_id`, `sender_id`, `content`, `created_at`
- And message history is preserved for audit purposes
- And messages support basic markdown formatting (bold, links)
- And messaging component at `/components/task/TaskMessaging.tsx`
- And messages are sent via Server Action at `/lib/actions/task/send-message.ts`

### Epic 8: Analytics & Reporting Dashboards

#### Story 8.1: Implement Client Dashboard with Usage Analytics

**As a** client,  
**I want to** view my spending and usage analytics,  
**So that** I can track ROI and optimize my content creation budget.

**Acceptance Criteria:**
- Given I am logged in as a CLIENT
- When I navigate to `/(client)/analytics`
- Then I see my usage dashboard with key metrics:
  - **Total Spent** (this month, last 30 days, all time)
  - **Tasks Completed** (count and breakdown by output type)
  - **Average Cost per Task**
  - **Tasks In Progress** (current active tasks)
- And I see visualizations:
  - Spending trend over time (line chart, monthly bars)
  - Output type distribution (pie chart showing Blog Post 40%, Show Notes 30%, etc.)
  - Task status funnel (uploaded → transcribed → in progress → completed)
- And I can filter by date range: This Week, This Month, Last 3 Months, All Time, Custom Range
- And I can download usage report as CSV with columns: date, task, output types, cost, status
- And all charts use responsive charting library (e.g., Recharts, Chart.js)
- And analytics data aggregates from `audio_uploads`, `tasks`, `payment_transactions`
- And dashboard uses Server Components for initial load, Client Components for interactivity
- And analytics page at `/(client)/analytics/page.tsx`

#### Story 8.2: Implement Creator Dashboard with Performance & Earnings

**As a** creator,  
**I want to** view my performance metrics and earnings analytics,  
**So that** I can track my progress and optimize my work quality.

**Acceptance Criteria:**
- Given I am logged in as a CREATOR
- When I navigate to `/(creator)/analytics`
- Then I see my performance dashboard with metrics:
  - **Current Level** and progress to next tier
  - **Total Earnings** (pending, approved, paid, lifetime)
  - **Tasks Completed** (count, approval rate, rejection rate)
  - **Average Rubric Score** (across all 6 dimensions)
  - **Turnaround Time** (average time from assignment to submission)
- And I see visualizations:
  - Earnings over time (bar chart by week/month)
  - Rubric score breakdown (radar chart showing 6 dimensions)
  - Task completion funnel (reserved → active → submitted → approved)
  - Level progression timeline
- And I can compare my metrics to platform averages (anonymized)
- And I can filter by output type, date range
- And I can download performance report as CSV
- And analytics data aggregates from `task_assignments`, `task_reviews`, `creator_payouts`, `creator_levels`
- And analytics page at `/(creator)/analytics/page.tsx`

#### Story 8.3: Implement Admin Platform Dashboard

**As an** admin,  
**I want to** view platform-wide analytics and health metrics,  
**So that** I can monitor business performance and system health.

**Acceptance Criteria:**
- Given I am logged in as an ADMIN
- When I navigate to `/(admin)/dashboard`
- Then I see platform metrics:
  - **Revenue** (today, this month, MRR, total)
  - **Active Users** (clients, creators, editors by tier/level)
  - **Task Metrics** (total tasks, completion rate, avg turnaround time)
  - **Quality Metrics** (avg rubric score, rejection rate, revision rate)
  - **Fraud Metrics** (flagged accounts, fraud detection rate, chargeback rate)
- And I see visualizations:
  - Revenue trend (line chart, monthly recurring revenue)
  - User growth (stacked area chart showing clients vs creators over time)
  - Creator level distribution (bar chart showing count per tier)
  - Quality score distribution (histogram)
  - Top creators by earnings (leaderboard table)
- And I see system health indicators:
  - API response time p95
  - Uptime percentage
  - Active websocket connections
  - Queue processing lag (Cloud Tasks backlog)
- And I can drill down into specific metrics for detailed analysis
- And I can export all data as CSV or JSON for external BI tools
- And dashboard auto-refreshes every 60 seconds
- And analytics data aggregates from all tables with optimized queries
- And admin dashboard at `/(admin)/dashboard/page.tsx`

#### Story 8.4: Implement Creator Level Statistics

**As an** admin or creator,  
**I want to** see creator level statistics and distribution,  
**So that** I can understand the platform's talent pool composition.

**Acceptance Criteria:**
- Given I am viewing creator statistics
- When I navigate to the level statistics page
- Then I see distribution across 5 tiers:
  - **Probationary (0-9 tasks)**: X creators (Y%)
  - **Junior (10-29 tasks)**: X creators (Y%)
  - **Mid-Level (30-99 tasks)**: X creators (Y%)
  - **Senior (100-299 tasks)**: X creators (Y%)
  - **Expert (300+ tasks)**: X creators (Y%)
- And I see average metrics per level:
  - Average rubric score
  - Average turnaround time
  - Approval rate
  - Earnings per creator
- And I see level progression trends:
  - Monthly advancement rate (how many creators level up per month)
  - Retention by level (churn rate)
- And (Admin only) I can see individual creator details when clicking on a level
- And statistics are visualized with bar charts and tables
- And data aggregates from `users`, `creator_levels`, `task_assignments`
- And level stats page at `/(admin)/creator-levels` (admin) or `/(creator)/levels` (creator view)

#### Story 8.5: Implement Data Export Functionality

**As a** user,  
**I want to** export my data in multiple formats,  
**So that** I can use it for external analysis or compliance.

**Acceptance Criteria:**
- Given I am viewing analytics or data tables
- When I click "Export" button
- Then I can select export format: CSV, Excel (XLSX), JSON
- And I can select data scope: Current view, All data, Custom date range
- And export file is generated asynchronously via Cloud Task (for large datasets)
- And I receive email with download link when export is ready (for large exports >1000 rows)
- And small exports (<1000 rows) download immediately
- And exported data includes all visible columns plus metadata (export date, user, filters applied)
- And CSV format uses proper encoding (UTF-8 with BOM for Excel compatibility)
- And Excel format includes formatted headers and auto-sized columns
- And JSON format is well-structured and includes schema version
- And export functionality is available for:
  - **Client**: Upload history, payment transactions, usage analytics
  - **Creator**: Task history, earnings, performance metrics
  - **Admin**: All platform data (with access controls)
- And export generation uses Server Action at `/lib/actions/export/generate-export.ts`
- And large exports are stored temporarily in Cloud Storage with signed URLs (1-hour expiry)

### Epic 9: Admin Operations & Creator Management

#### Story 9.1: Implement Comped Task Creation

**As an** admin,  
**I want to** create comped (free) tasks for testing or partnerships,  
**So that** I can onboard partners or test the platform without billing.

**Acceptance Criteria:**
- Given I am logged in as an ADMIN
- When I navigate to `/(admin)/tasks/create-comped`
- Then I can upload audio OR provide a URL to existing audio
- And I select output types (Blog Post, Show Notes, etc.)
- And I can assign the task directly to a specific creator OR leave it in general queue
- And I mark the task as "Comped" which sets `payment_required = false`
- And comped tasks are NOT billed to any client
- And creators still earn their normal payout (platform absorbs the cost)
- And comped task is logged in audit trail with reason (e.g., "Partnership with PodcastCo")
- And I can set custom deadline and priority
- And comped task creation uses Server Action at `/lib/actions/admin/create-comped-task.ts`

#### Story 9.2: Implement Direct Task Assignment

**As an** admin,  
**I want to** assign a task directly to a specific creator,  
**So that** I can match high-priority clients with top performers.

**Acceptance Criteria:**
- Given I am viewing a task OR creating a new task
- When I click "Assign Directly"
- Then I see a list of all active creators with their levels, approval rates, and current workload
- And I can filter creators by level, expertise area, language
- And I select a creator and click "Assign"
- And the task is assigned with `status = ACTIVE` (skipping AVAILABLE and RESERVED states)
- And the assigned creator receives email and WebSocket notification immediately
- And direct assignments bypass the creator's level restrictions (admin override)
- And assignment reason is logged in audit trail
- And assignment action uses Server Action at `/lib/actions/admin/assign-task.ts`

#### Story 9.3: Implement Task Reassignment Workflow

**As an** admin,  
**I want to** reassign a task from one creator to another,  
**So that** I can handle creator dropouts or quality issues.

**Acceptance Criteria:**
- Given a task is currently assigned to a creator
- When I navigate to `/(admin)/tasks/[id]/reassign`
- Then I see the current assignment details (creator, status, deadline)
- And I can select a reason for reassignment: Creator Dropout, Quality Issues, Client Request, Other
- And I select a new creator from the active creator list
- And clicking "Reassign" performs the following:
  - Original assignment `status` → REASSIGNED
  - Original creator loses access to the task
  - Original creator is notified via email (with reason if appropriate)
  - New assignment is created with `status = ACTIVE`
  - New creator receives assignment notification
  - Deadline is optionally extended
  - All actions logged in audit trail
- And reassignment preserves work history for accountability
- And reassignment uses Server Action at `/lib/actions/admin/reassign-task.ts`

#### Story 9.4: Implement Bulk Upload via CSV

**As an** admin,  
**I want to** bulk upload tasks via CSV file,  
**So that** I can efficiently onboard large clients or process batches.

**Acceptance Criteria:**
- Given I have a CSV file with task data
- When I navigate to `/(admin)/tasks/bulk-upload`
- Then I can upload a CSV file with columns: `audio_url`, `output_types`, `client_email`, `deadline`, `priority`
- And the system validates CSV format and displays preview of first 10 rows
- And I can review and confirm or cancel the import
- And upon confirmation, Cloud Task queue processes each row:
  - Download audio from `audio_url` to Cloud Storage
  - Create task(s) for each output type
  - Link to client account (create if doesn't exist)
  - Set deadline and priority
- And I see import progress (X of Y tasks created)
- And errors are logged and displayed (e.g., invalid URL, missing client, etc.)
- And successful imports are summarized with task IDs
- And bulk upload uses Server Action at `/lib/actions/admin/bulk-upload.ts`
- And CSV template is downloadable for reference

#### Story 9.5: Implement Creator Level Management

**As an** admin,  
**I want to** manually promote or demote creators,  
**So that** I can override automatic level progression when needed.

**Acceptance Criteria:**
- Given I am viewing a creator's profile at `/(admin)/creators/[id]`
- When I click "Change Level"
- Then I see current level and available level options (Probationary → Expert)
- And I select new level and provide reason (required): Performance, Special Circumstance, Partnership, Correction
- And clicking "Update Level" performs:
  - Updates `users.creator_level_id`
  - Logs action in `admin_audit_log` with reason
  - Sends email to creator: "Your level has been updated to {new_level}"
  - Triggers task queue re-evaluation (creator sees new tasks matching level)
  - Updates creator's rate multiplier immediately
- And level changes are permanent until next manual or automatic change
- And I can view level change history in creator's profile
- And level management uses Server Action at `/lib/actions/admin/update-creator-level.ts`

#### Story 9.6: Implement Flag Resolution Workflow

**As an** admin,  
**I want to** review and resolve flagged accounts,  
**So that** I can maintain platform quality and trust.

**Acceptance Criteria:**
- Given flagged accounts exist
- When I navigate to `/(admin)/flags`
- Then I see all flags sorted by severity (CRITICAL first) and date
- And I can filter by: flag type, severity, status (OPEN, INVESTIGATING, RESOLVED, DISMISSED)
- And clicking a flag shows:
  - User details (email, role, join date)
  - Flag details (type, severity, triggered_by, description, date)
  - Related evidence (tasks, reviews, transactions)
  - User's full history and metrics
- And I can take actions:
  - **Dismiss**: Flag was incorrect/resolved naturally (status → DISMISSED)
  - **Warning**: Send warning email to user (status → RESOLVED, user notified)
  - **Suspension**: Temporarily suspend account (1 day, 1 week, 1 month, custom)
  - **Ban**: Permanently ban user from platform
  - **Investigate**: Mark as under investigation (status → INVESTIGATING, add notes)
- And all actions are logged in audit trail with admin ID, timestamp, action, reason
- And suspended/banned users cannot access their accounts
- And resolution actions use Server Action at `/lib/actions/admin/resolve-flag.ts`

#### Story 9.7: Implement Complete Audit Trail

**As an** admin,  
**I want to** view a complete audit log of all admin actions,  
**So that** I can ensure accountability and compliance.

**Acceptance Criteria:**
- Given admin actions occur on the platform
- When I navigate to `/(admin)/audit-log`
- Then I see all logged admin actions in reverse chronological order
- And each log entry shows: timestamp, admin user, action type, target (user/task/etc.), details, IP address
- And action types include: Creator Approved, Creator Promoted, Task Reassigned, Flag Resolved, User Banned, Comped Task Created, etc.
- And I can filter by: admin user, action type, target, date range
- And I can search by keyword (e.g., user email, task ID)
- And audit logs are retained for 2 years (NFR-057)
- And audit logs are tamper-proof (append-only, no deletion or editing)
- And I can export audit logs as CSV for compliance reporting
- And audit log data is stored in `admin_audit_log` table
- And audit log page at `/(admin)/audit-log/page.tsx`

### Epic 10: Fraud Prevention & Security

#### Story 10.1: Implement Email Normalization (Shared with Epic 1)

**As a** platform,  
**I want to** normalize email addresses to detect duplicate accounts,  
**So that** users cannot bypass role isolation using email variations.

**Acceptance Criteria:**
- Given this story was already implemented in Epic 1 Story 1.11
- When email normalization is in place
- Then the system prevents:
  - Gmail dot variations (`john.doe@gmail.com` = `johndoe@gmail.com`)
  - Plus addressing (`john+test@gmail.com` → `john@gmail.com`)
  - Case variations (`John@Gmail.com` → `john@gmail.com`)
- And normalized emails are checked against existing accounts
- And role isolation is enforced (no CLIENT+CREATOR overlap)
- And normalization function at `/lib/utils/email-normalization.ts` is used throughout the platform

#### Story 10.2: Implement Velocity Checking and Rate Limiting

**As a** platform,  
**I want to** enforce velocity limits on sensitive actions,  
**So that** automated abuse and bot attacks are prevented.

**Acceptance Criteria:**
- Given users are performing actions
- When velocity checking runs
- Then the following rate limits are enforced:
  - **Registration**: Max 3 accounts per IP per day
  - **Task claiming**: Max 10 claims per creator per hour
  - **Login attempts**: Max 5 failed attempts per 15 minutes (then account lockout)
  - **Payment attempts**: Max 3 failed payments per hour
  - **API requests**: Max 100 requests per user per minute
- And rate limiting uses Redis for tracking counters with TTL
- And if rate limit is exceeded, user sees error: "Too many attempts. Please try again in {time}"
- And rate limit violations are logged in `rate_limit_violations` table
- And suspicious patterns trigger automatic flags for admin review
- And rate limiting middleware runs on all protected routes
- And rate limit implementation at `/lib/middleware/rate-limit.ts`

#### Story 10.3: Implement Behavioral Anomaly Detection

**As a** platform,  
**I want to** detect suspicious behavioral patterns,  
**So that** fraud and abuse can be identified proactively.

**Acceptance Criteria:**
- Given user behavior is being monitored
- When anomaly detection analyzes activity
- Then the following patterns trigger alerts:
  - Creator claiming tasks but never submitting (>5 claims, 0 submissions)
  - Creator submitting identical content across multiple tasks (plagiarism pattern)
  - Client uploading then immediately requesting refunds (chargeback pattern)
  - Rapid account creation from same device fingerprint
  - Login from geographically impossible locations (e.g., Kenya to USA in 1 hour)
  - Abnormal task completion speed (too fast to be legitimate)
- And anomalies are scored 0-100 based on severity
- And scores >70 auto-create flags for admin review
- And anomaly detection runs daily via Cloud Scheduler
- And detection logic uses statistical analysis and machine learning (optional in MVP)
- And anomaly detection at `/lib/utils/anomaly-detection.ts`

#### Story 10.4: Implement Creator-Client Collusion Detection

**As a** platform,  
**I want to** detect creator-client collusion,  
**So that** gaming the system is prevented.

**Acceptance Criteria:**
- Given the platform monitors interactions
- When collusion detection analyzes patterns
- Then the following indicators trigger alerts:
  - Same IP/device used by both creator and client accounts
  - Creator only completes tasks from one specific client
  - Suspiciously high approval rates between specific creator-client pairs (>95% when platform average is 75%)
  - Payment from client followed immediately by payout to creator with shared banking details
  - Creator and client share normalized email domains or patterns
- And detected collusion pairs are flagged with FRAUD severity
- And both accounts are suspended pending investigation
- And collusion detection runs weekly via Cloud Scheduler
- And detection logic at `/lib/utils/collusion-detection.ts`

#### Story 10.5: Implement Payment Fraud Monitoring (Shared with Epic 6)

**As a** platform,  
**I want to** monitor payments for fraud indicators,  
**So that** chargebacks and fraudulent transactions are minimized.

**Acceptance Criteria:**
- Given this story was implemented in Epic 6 Story 6.8
- When payment fraud monitoring is active
- Then the system detects:
  - Card testing patterns
  - Multiple failed attempts
  - Unusual payment amounts
  - Geolocation mismatches
- And high-risk transactions are held for review
- And fraud detection rate meets NFR-043 targets (<5% false positives MVP, <1% growth)
- And fraud monitoring at `/lib/utils/fraud-detection.ts`

### Epic 11: Content Moderation & Safety

#### Story 11.1: Implement Upload Content Screening

**As a** platform,  
**I want to** screen audio uploads for prohibited content,  
**So that** illegal or harmful content is blocked.

**Acceptance Criteria:**
- Given a client uploads audio
- When the upload is processed
- Then audio metadata is checked for prohibited patterns:
  - Filename contains banned keywords
  - File size anomalies (suspiciously large or small)
  - Audio duration exceeds platform limits (>4 hours flagged)
- And (optional advanced): Speech-to-text screening for prohibited content keywords
- And if screening detects issues, upload is held for manual review
- And client is notified: "Your upload is being reviewed for policy compliance"
- And admin can review at `/(admin)/content-review` and approve/reject
- And repeated violations result in account suspension
- And content screening logic at `/lib/utils/content-screening.ts`

#### Story 11.2: Implement User Reporting Mechanism

**As a** user,  
**I want to** report inappropriate content or behavior,  
**So that** the platform can take action.

**Acceptance Criteria:**
- Given I encounter inappropriate content or behavior
- When I click "Report" button
- Then I see a report form with:
  - Report type: Inappropriate Content, Harassment, Spam, Fraud, Other
  - Description (required, 500 char max)
  - Evidence (optional screenshots/links)
- And clicking "Submit Report" creates entry in `user_reports` table
- And report is sent to moderation queue at `/(admin)/reports`
- And I receive confirmation: "Thank you for your report. We will review it within 24 hours"
- And report includes metadata: reporter ID, reported user/content, timestamp, IP
- And reporters remain anonymous to reported users
- And false reporting is tracked (repeated false reports = warning/suspension)
- And reporting uses Server Action at `/lib/actions/report/submit-report.ts`

#### Story 11.3: Implement Moderation Queue with Action Workflow

**As an** admin or moderator,  
**I want to** review user reports and take action,  
**So that** platform safety is maintained.

**Acceptance Criteria:**
- Given user reports exist
- When I navigate to `/(admin)/reports`
- Then I see all reports sorted by priority (Harassment/Fraud first) and date
- And I can filter by: report type, status (OPEN, INVESTIGATING, RESOLVED, DISMISSED), reporter, reported user
- And clicking a report shows:
  - Report details (type, description, evidence)
  - Reported content/user details
  - Reporter history (to detect serial false reporters)
  - Reported user history (to detect repeat offenders)
- And I can take actions:
  - **Dismiss**: No violation found (status → DISMISSED)
  - **Warning**: Send warning to reported user
  - **Remove Content**: Delete/hide the reported content
  - **Suspend User**: Temporarily suspend account (1 day - 1 month)
  - **Ban User**: Permanently ban
- And all actions are logged in audit trail
- And both reporter and reported user are notified of resolution (as appropriate)
- And moderation actions use Server Action at `/lib/actions/admin/moderate-report.ts`

#### Story 11.4: Implement Platform Content Policy Enforcement

**As a** platform,  
**I want to** enforce content policies consistently,  
**So that** community standards are maintained.

**Acceptance Criteria:**
- Given the platform has content policies
- When content policy violations occur
- Then enforcement is consistent:
  - **First violation**: Warning email with policy reminder
  - **Second violation**: 7-day suspension
  - **Third violation**: 30-day suspension
  - **Fourth violation**: Permanent ban
- And policy violations are tracked in `policy_violations` table
- And users can appeal violations within 14 days
- And content policy is documented at `/content-policy` page
- And all users must accept policy during registration
- And policy updates require re-acceptance from all users
- And policy enforcement uses progressive discipline approach
- And enforcement logic at `/lib/utils/policy-enforcement.ts`

### Epic 12: Dispute Resolution System

#### Story 12.1: Implement Dispute Filing Workflow

**As a** user,  
**I want to** file a dispute for quality, delivery, or payment issues,  
**So that** problems can be resolved fairly.

**Acceptance Criteria:**
- Given I have an issue with a task or payment
- When I navigate to the dispute filing form
- Then I can file a dispute with:
  - Dispute type: Quality Issue, Late Delivery, Payment Issue, Other
  - Related task ID (auto-populated if filing from task page)
  - Description of issue (required, 1000 char max)
  - Desired resolution (refund, revision, other)
  - Evidence (optional file uploads: screenshots, documents)
- And clicking "Submit Dispute" creates entry in `disputes` table with `status = OPEN`
- And other party is notified: "A dispute has been filed regarding [task]"
- And task is frozen (no further actions until dispute resolved)
- And dispute is assigned to admin mediator automatically
- And I receive confirmation email with dispute ID and timeline (resolved within 7 days)
- And dispute filing uses Server Action at `/lib/actions/dispute/file-dispute.ts`

#### Story 12.2: Implement Mediation Interface

**As an** admin mediator,  
**I want to** review disputes and facilitate resolution,  
**So that** both parties reach fair outcomes.

**Acceptance Criteria:**
- Given disputes are filed
- When I navigate to `/(admin)/disputes`
- Then I see all disputes sorted by urgency (high-value first) and date
- And I can filter by: dispute type, status, date range
- And clicking a dispute shows:
  - Dispute details (type, description, evidence)
  - Both parties' accounts and history
  - Related task details and timeline
  - Communication thread between parties
  - Suggested resolution based on platform policy
- And I can facilitate resolution by:
  - Messaging both parties individually or together
  - Requesting additional evidence
  - Proposing resolution options
  - Setting deadlines for responses
- And mediation timeline is tracked (must resolve within 7 days per platform policy)
- And I can escalate complex disputes to senior admin
- And mediation actions are logged in dispute history
- And mediation interface at `/(admin)/disputes/[id]/mediate/page.tsx`

#### Story 12.3: Implement Resolution Execution

**As an** admin mediator,  
**I want to** execute dispute resolutions,  
**So that** decisions are implemented fairly.

**Acceptance Criteria:**
- Given I have reached a resolution decision
- When I select a resolution action
- Then I can execute:
  - **Full Refund**: Refund client, creator keeps payout (platform absorbs cost)
  - **Partial Refund**: Refund 50% to client, creator receives 50% payout
  - **Revision Required**: Creator must revise within 48 hours (no refund)
  - **No Action**: Dispute dismissed, both parties continue as-is
  - **Custom Resolution**: Manual adjustment with explanation
- And clicking "Execute Resolution" performs:
  - Updates dispute `status` → RESOLVED
  - Processes financial transactions (refunds/adjustments)
  - Updates task status appropriately
  - Notifies both parties via email with resolution details and reasoning
  - Logs resolution in audit trail
  - Records outcome for policy precedent
- And both parties can appeal within 14 days (see next story)
- And resolution execution uses Server Action at `/lib/actions/admin/execute-resolution.ts`

#### Story 12.4: Implement Appeal Process

**As a** user,  
**I want to** appeal a dispute resolution,  
**So that** I have recourse if I disagree with the decision.

**Acceptance Criteria:**
- Given a dispute has been resolved
- When I disagree with the resolution
- Then I can file an appeal within 14 days by clicking "Appeal Resolution"
- And I provide appeal reason (required, 1000 char max) and additional evidence
- And appeal creates new entry in `dispute_appeals` table with `status = PENDING`
- And original dispute status updates to UNDER_APPEAL
- And appeal is reviewed by different admin (not original mediator)
- And appeal reviewer can:
  - **Uphold** original decision (appeal DENIED)
  - **Modify** resolution (appeal APPROVED with new resolution)
  - **Request** additional mediation (appeal PENDING)
- And appeals must be resolved within 14 days
- And appeal decision is FINAL (no further appeals allowed)
- And all parties are notified of appeal outcome
- And repeated frivolous appeals result in reduced appeal privileges
- And appeal process uses Server Action at `/lib/actions/dispute/file-appeal.ts`

### Epic 13: Audio Lifecycle & Automated Cleanup

#### Story 13.1: Implement Cloud Storage Lifecycle Policy

**As a** developer,  
**I want to** configure automated audio deletion after QA completion,  
**So that** storage costs are optimized while maintaining operational flexibility.

**Acceptance Criteria:**
- Given audio files are stored in Cloud Storage
- When I configure Object Lifecycle Management
- Then lifecycle policy is set to:
  - **Trigger**: Custom metadata `qa_completed_at` timestamp exists
  - **Action**: Delete object 7 days after `qa_completed_at` date
- And when QA approves a task, Cloud Function updates audio file metadata with `qa_completed_at = current_timestamp`
- And Cloud Storage automatically deletes files 7 days after QA completion (NOT 7 days after upload)
- And deletion balances operational flexibility (client can re-review) with cost control
- And audit log records all deletions with file ID and deletion timestamp
- And if client requests file after deletion, graceful error message: "Audio file no longer available (deleted per 7-day retention policy)"
- And lifecycle policy configuration is in infrastructure-as-code (Terraform/CloudFormation)

#### Story 13.2: Implement Daily Cleanup Job

**As a** platform,  
**I want** a daily cleanup job to manage audio lifecycle,  
**So that** orphaned files and expired data are removed automatically.

**Acceptance Criteria:**
- Given the platform needs regular cleanup
- When Cloud Scheduler triggers daily cleanup at 2 AM UTC
- Then cleanup job performs:
  - Check for audio files with `qa_completed_at` >7 days ago and delete (backup to lifecycle policy)
  - Remove temporary files >24 hours old (upload previews, export files, etc.)
  - Purge old session data (expired Redis keys)
  - Archive old notifications >90 days to cold storage
  - Clean up failed upload records >30 days old
- And cleanup job logs summary: files deleted, space freed, errors encountered
- And cleanup job sends admin email if errors occur
- And cleanup job uses Cloud Scheduler with Cloud Task queue for reliability
- And cleanup job never deletes active files or files within retention period
- And cleanup worker at `/workers/daily-cleanup.ts`
- And manual cleanup can be triggered by admin at `/(admin)/system/cleanup`
