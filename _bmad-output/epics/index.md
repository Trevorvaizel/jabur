---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories']
inputDocuments:
  - '_bmad-output/prd/index.md'
  - '_bmad-output/prd/functional-requirements.md'
  - '_bmad-output/prd/non-functional-requirements.md'
  - '_bmad-output/architecture.md'
  - '_bmad-output/ux-design-specification/index.md'
  - '_bmad-output/project-context.md'
---

# jabur - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for jabur, decomposing the requirements from the PRD, Architecture, UX Design, and Project Context into implementable stories.

**Total Coverage:**
- **9 Epics** with **120 User Stories**
- **225 Requirements** (117 FRs + 46 NFRs + 62 Additional Technical)
- All requirements traced from PRD, Architecture, UX Design, and Project Context

## Document Structure

This epic breakdown is organized into the following files:

### Requirements
- **[requirements-inventory.md](requirements-inventory.md)** - Complete FR/NFR/Additional requirements catalog with FR Coverage Map

### Epics & Stories
- **[epic-01-foundation.md](epic-01-foundation.md)** - Epic 1: Project Foundation & Infrastructure (13 stories)
- **[epic-02-authentication.md](epic-02-authentication.md)** - Epic 2: User Authentication & Account Management (10 stories)
- **[epic-03-upload-transcription.md](epic-03-upload-transcription.md)** - Epic 3: Content Upload & Transcription Pipeline (11 stories)
- **[epic-04-creator-workspace.md](epic-04-creator-workspace.md)** - Epic 4: Creator Workspace & Task Management (16 stories)
- **[epic-05-quality-assurance.md](epic-05-quality-assurance.md)** - Epic 5: Quality Assurance System (13 stories)
- **[epic-06-creator-advancement.md](epic-06-creator-advancement.md)** - Epic 6: Creator Advancement & Compensation (11 stories)
- **[epic-07-admin-operations.md](epic-07-admin-operations.md)** - Epic 7: Admin Operations & Platform Management (14 stories)
- **[epic-08-comped-tasks.md](epic-08-comped-tasks.md)** - Epic 8: Admin Comped Task Management (19 stories)
- **[epic-09-compliance.md](epic-09-compliance.md)** - Epic 9: Compliance & Data Management (11 stories)

## Epic List

### Epic 1: Project Foundation & Infrastructure

**Goal:** Establish the complete technical foundation enabling all future development with Next.js 14, Railway infrastructure, authentication, role isolation, real-time capabilities, and external integrations.

**User Outcome:** Development environment is operational with core architecture in place. All foundational services are configured and tested.

**What this delivers:**
- Next.js 14 project initialized (create-next-app with TypeScript, Tailwind CSS)
- Railway PostgreSQL 15+ with Prisma 5.x ORM configured
- NextAuth.js v5 authentication with 4-role system (Client, Creator, Editor, Admin)
- 3-layer role isolation architecture (Route groups + Middleware + PostgreSQL RLS)
- Railway Redis for sessions, caching, real-time coordination, and job queue
- Socket.io 4.x with Redis adapter for real-time updates
- BullMQ for background job processing
- AWS S3 + CloudFront CDN for file storage
- Payment SDKs: Stripe + M-Pesa Daraja API
- Transcription APIs: AssemblyAI (primary) + OpenAI Whisper (fallback)
- Component library: shadcn/ui with Radix UI primitives
- Form handling: React Hook Form + Zod validation
- State management: TanStack Query v5 (server state) + Zustand (UI state)
- Testing framework: Jest + React Testing Library + Playwright
- Project context rules implementation (TypeScript strict mode, naming conventions, error handling patterns)

**FRs covered:** ARCH-01 through ARCH-62, CTX-01 through CTX-12 (62 technical requirements + 12 critical rules)

**Implementation Notes:**
- Story 1.1 must initialize project with create-next-app
- Must downgrade from Next.js 15.1.0 (current package.json) to Next.js 14.x
- All architectural decisions from architecture.md must be implemented
- Repository pattern for Prisma access (never direct client imports)
- ApiResponse<T> pattern for all Server Actions
- Testing infrastructure for role isolation validation

**Dependencies:** None (this is the foundation)

---

### Epic 2: User Authentication & Account Management

**Goal:** Enable all user types to create accounts, authenticate securely, and manage their profiles with proper role isolation and compliance features.

**User Outcome:** Users can register, login, select payout methods, export their data, and delete accounts. Privileged roles (Admin, QA) authenticate with MFA.

**What users can do:**
- **Uploaders:** Register with email/password, login, manage profile, select payout method (Stripe or M-Pesa)
- **Creators:** Apply with portfolio submission for vetting, authenticate after approval, manage profile and payout preferences
- **QA Editors:** Authenticate with MFA (TOTP), manage profile
- **Admins:** Authenticate with MFA (TOTP), manage profile
- **All users:** Request GDPR-compliant data export (JSON/CSV), request account deletion with 30-day purge, view/update payout method

**What the system does:**
- Enforce 4-role separation at all layers (route groups, middleware, RLS)
- Prevent duplicate accounts via email normalization and device fingerprinting
- Session management: JWT with Redis backing, 24hr TTL (client/creator), 8hr TTL (admin/QA)
- MFA for Admin and QA Editor roles (TOTP-based)
- Device fingerprinting for fraud prevention
- Email normalization (prevent Gmail+tags, dots)
- Multi-account detection and admin flagging

**FRs covered:** FR1-FR8, NFR-S4, NFR-S6, NFR-C1, NFR-C2, NFR-C5, NFR-C6 (15 requirements)

**Implementation Notes:**
- NextAuth.js v5 credentials provider with custom role callbacks
- JWT claims include userId and role for middleware checks
- PostgreSQL RLS policies enforce row-level data isolation
- Redis session store enables instant revocation (MFA logout, admin demotion)
- Fingerprinting library integration (FingerprintJS or similar)
- Normalized email unique index in database

**Dependencies:** Epic 1 (requires infrastructure)

---

### Epic 3: Content Upload & Transcription Pipeline

**Goal:** Enable uploaders to upload audio files and receive automated transcriptions ready for creator assignment.

**User Outcome:** Uploaders can upload large audio files with resume capability, select output formats and turnaround tiers, and receive transcriptions within 15 minutes.

**What uploaders can do:**
- Upload audio files (up to 500MB, 3 hours duration)
- Resume failed uploads from last successful chunk
- Select one or more output formats (9 options: Executive Summaries, Key Insights, Action Items, Reflection Questions, Social Media Packs, Blog Posts, Fact-Check Reports, Show Notes, Newsletter Segments)
- Select turnaround tier (Standard 24-48hrs, Rush +50%, Express +100%)
- View task status updates in real-time (<5 second propagation)

**What the system does:**
- Upload to AWS S3 with multipart upload support (resume capability)
- Trigger BullMQ job for transcription processing
- Call AssemblyAI API (primary) or Whisper API (fallback on failure)
- Generate timestamp-aligned transcripts for synchronized playback
- Create Task records in database with selected formats and tier
- Route tasks to creator queue filtered by tier level
- Auto-delete audio files after 7 days (S3 lifecycle policy)
- Auto-delete transcripts after 30 days (BullMQ scheduled job)
- Send real-time status updates via Socket.io

**FRs covered:** FR9-FR16, FR75, NFR-P4, NFR-R3, NFR-R9, NFR-R10, NFR-I1 (14 requirements)

**Implementation Notes:**
- S3 SDK with multipart upload (resumable chunks)
- BullMQ job: transcription-processing with retry logic
- AssemblyAI webhook callback or polling for completion
- Fallback to Whisper if AssemblyAI fails (circuit breaker pattern)
- Socket.io project rooms for real-time task status
- S3 lifecycle policy: delete objects tagged with `lifecycle=7days`
- BullMQ scheduled jobs: daily transcript cleanup, weekly deliverable cleanup

**Dependencies:** Epic 1 (infrastructure), Epic 2 (authentication)

---

### Epic 4: Creator Workspace & Task Management

**Goal:** Provide creators with professional tools to discover, claim, and complete tasks with audio playback, waveform visualization, rich text editing, and quality checks.

**User Outcome:** Creators can view tier-filtered tasks, claim with atomic locking, listen to audio with professional controls, write content with auto-save, check quality scores, and submit work for QA review.

**What creators can do:**
- View available tasks filtered by current tier qualification level
- Claim tasks with automatic locking (prevents double-assignment via optimistic locking)
- Listen to audio with:
  - Waveform visualization (wavesurfer.js)
  - Variable speed playback (0.5x - 2x)
  - Keyboard shortcuts (play/pause, skip forward/back, speed adjust)
  - Timestamp navigation from transcript
- Write content in rich text block-based editor (Tiptap):
  - Auto-save every 30 seconds without disruption
  - Block formatting (headings, lists, quotes)
  - Markdown shortcuts support
- Check plagiarism score before submitting (90%+ originality required)
- Check AI-detection score before submitting (<30% AI-detected required)
- Submit completed content for QA review
- View complete submission history with scores and QA feedback
- See real-time tier progression status (e.g., "12/30 approvals to Mid-Level")
- View earnings dashboard with transparent payout amounts (NO client pricing visibility)

**What the system does:**
- Filter task visibility by creator tier level (Prisma query with RLS)
- Atomic task claiming with optimistic locking (updateMany with status check)
- 24-hour claim timeout enforcement (BullMQ scheduled job)
- Stream audio from S3 via CloudFront CDN
- Auto-save editor content to database every 30 seconds
- Call plagiarism API (Copyscape/Turnitin) on demand
- Call AI detection API (GPTZero/Originality.ai) on demand
- Real-time tier progression calculation
- Enforce role blindness: creators never see uploader identity or client pricing

**FRs covered:** FR17-FR28, NFR-P6, NFR-P7 (14 requirements)

**Implementation Notes:**
- wavesurfer.js integration with S3 streaming URLs
- Tiptap editor with auto-save via debounced Server Action
- Optimistic locking pattern: `prisma.task.updateMany({ where: { id, status: 'AVAILABLE', claimedById: null }, data: { status: 'CLAIMED', claimedById } })`
- BullMQ job: task-timeout-enforcement (runs hourly, releases claims >24hr)
- shadcn/ui components for task cards, filters, modals
- TanStack Query for task fetching with real-time invalidation via Socket.io
- Zustand for UI state (selected task, audio playback state)

**Dependencies:** Epic 1, 2, 3 (infrastructure, auth, tasks exist)

---

### Epic 5: Quality Assurance System

**Goal:** Enable QA Editors to review creator submissions with structured rubric scoring, and allow uploaders to request revisions and download delivered content.

**User Outcome:** QA Editors can efficiently review submissions with side-by-side views, score using weighted rubrics, approve or reject with feedback. Uploaders receive delivery notifications and can request revisions.

**What QA Editors can do:**
- Access review queue sorted by deadline, creator, or content type
- Review submissions with side-by-side view:
  - Original audio playback with waveform
  - Transcript with timestamp navigation
  - Creator submission with inline comments
- Score using 6-dimension rubric:
  - Accuracy: 25%
  - Completeness: 20%
  - Clarity: 20%
  - Actionability: 15%
  - Formatting: 10%
  - Originality: 10%
- Add inline comments on specific sections of creator submission
- Approve submissions meeting 4.0/5.0 minimum threshold
- Reject submissions with actionable feedback for revision
- Override other QA Editors' reviews for consistency enforcement
- View performance analytics (first-pass rates, review velocity, quality trends)

**What uploaders can do:**
- Receive delivery notifications when content is ready
- Download delivered content in multiple formats (Markdown, PDF, DOCX)
- Request revisions on delivered content (maximum 3 attempts)

**What the system does:**
- Calculate weighted rubric score automatically
- Update task status to APPROVED or REJECTED based on QA decision
- Notify creator of QA outcome via Socket.io + email (BullMQ job)
- Notify uploader of delivery via email with download links
- Flag creator accounts for quality issues, plagiarism, or deadline misses
- Track QA performance metrics (review time, approval rates)
- Auto-delete transcripts after 30 days
- Auto-delete deliverables after 90 days
- Generate downloadable formats (PDF, DOCX) from Markdown on demand

**FRs covered:** FR29-FR38, FR73-FR74, NFR-P8, NFR-R5, NFR-C7 (15 requirements)

**Implementation Notes:**
- shadcn/ui components: review queue table, rubric form, inline comment system
- React Hook Form + Zod for rubric scoring validation
- Side-by-side layout with synchronized audio/transcript/submission
- Tiptap editor for inline QA comments
- Atomic QA review persistence (Prisma transaction: save review + update task status)
- BullMQ jobs: send-delivery-notification, generate-pdf, generate-docx
- Document conversion: Markdown → PDF (react-pdf or Puppeteer), Markdown → DOCX (docx npm package)
- Socket.io events: qa:review-completed, task:delivered

**Dependencies:** Epic 1, 2, 3, 4 (requires completed creator submissions)

---

### Epic 6: Creator Advancement & Compensation

**Goal:** Implement tier progression system with automatic advancement and accurate weekly payouts via dual payment providers (Stripe + M-Pesa).

**User Outcome:** Creators automatically progress through tiers based on performance, see transparent earnings with tier multipliers, and receive accurate weekly payouts via their preferred payment method.

**What creators can do:**
- Automatically assigned to tier levels:
  - Probationary: 0.8x multiplier
  - Junior: 0.9x multiplier
  - Mid-Level: 1.0x multiplier (baseline)
  - Senior: 1.25x multiplier
  - Expert: 1.5x multiplier
- Advance when criteria met (e.g., 20 approved tasks at 4.5+ average score)
- Receive achievement notifications on tier advancement
- View earnings dashboard:
  - Weekly earnings breakdown
  - Tier multiplier transparency
  - Individual task payouts
  - Payout history
  - NO client pricing visibility (role blindness enforced)
- Receive weekly payouts every Friday via Stripe or M-Pesa
- Access 1099 tax forms annually (US-based creators)

**What admins can do:**
- Manually promote or demote creator tier levels with justification
- Monitor weekly payout batch processing
- View payout audit trail for reconciliation

**What the system does:**
- Calculate tier advancement automatically after each approved task
- Apply tier multiplier to task payouts automatically
- Calculate weekly creator earnings with 100% accuracy and full audit trail
- Process weekly payout batch every Friday by 11:59 PM:
  - Route to Stripe or M-Pesa based on `user.preferredPaymentMethod`
  - Stripe: bank transfer, PayPal, direct deposit
  - M-Pesa: mobile money (Kenya, Tanzania)
- Generate 1099 tax forms for US creators (annual BullMQ job)
- Filter task visibility by tier qualification
- Retry failed payments with exponential backoff (7-day retry window)
- Alert ops team if Friday payout deadline missed

**FRs covered:** FR39-FR47, NFR-R6, NFR-R7, NFR-R8, NFR-I2, NFR-I3, NFR-I9, NFR-C8 (16 requirements)

**Implementation Notes:**
- Tier advancement logic: Prisma query counts approved tasks + avg score, updates tier if threshold met
- Payout orchestration: BullMQ job `weekly-payout-batch` (scheduled cron: Friday 8 AM)
- Dual provider routing:
  - Check `user.preferredPaymentMethod`
  - Stripe: use Stripe SDK with idempotency keys (`uuidv4()`)
  - M-Pesa: call Daraja API B2C endpoint, store `ConversationID` for callback matching
- Atomic wallet operations: `prisma.wallet.update({ data: { balance: { increment: amount } } })`
- Prisma transaction: wallet update + transaction record + notification
- Payment records: 7-year retention (tax compliance)
- Failed payment retry: BullMQ job with exponential backoff (3 attempts over 7 days)
- 1099 generation: annual job (December 31st) for US creators

**Dependencies:** Epic 1, 2, 4, 5 (requires completed and approved tasks)

---

### Epic 7: Admin Operations & Platform Management

**Goal:** Provide admins with comprehensive tools for dispute resolution, platform monitoring, account flagging, and audit log access.

**User Outcome:** Admins can resolve disputes with full context, monitor platform health with analytics dashboards, flag accounts for investigation, and access complete audit logs.

**What admins can do:**
- Access comprehensive dispute context view:
  - Original audio playback
  - Complete transcript
  - All creator submissions (original + revisions)
  - Full message history (uploader ↔ creator ↔ QA)
  - QA review scores and feedback
  - Task metadata (deadlines, tier, pricing)
- Listen to original audio and review submission history with timestamps
- Use decision support tools with templated resolution options
- Process refunds with reason tracking
- View analytics dashboard:
  - Quality trends (approval rates, avg scores, rejection reasons)
  - Refund rates and financial metrics
  - Creator performance metrics (tier distribution, payout volumes)
  - Task throughput and turnaround times
  - Integration health (AssemblyAI uptime, payment success rates)
- Manually flag accounts for investigation (quality, fraud, policy violations)
- Access complete audit logs:
  - Security events (login attempts, MFA changes, session revocations)
  - Role changes (tier promotions/demotions, role assignments)
  - Payment transactions (payouts, refunds, failed attempts)
  - Dispute resolutions (decisions, refunds, account actions)
- Read all data across roles for dispute resolution (full read access via RLS bypass for admin role)

**What the system does:**
- Aggregate dispute evidence automatically (single query with all relations)
- Log all admin actions with timestamps (audit trail in database)
- Retain security events for 1 year (compliance requirement)
- Detect suspicious patterns within 1 hour:
  - Quality drops (sudden score decreases)
  - Deadline misses (pattern of late submissions)
  - Plagiarism spikes (multiple low originality scores)
- Alert on integration failures within 5 minutes:
  - AssemblyAI downtime
  - Stripe/M-Pesa payment failures
  - S3 upload errors

**FRs covered:** FR48-FR56, FR64-FR65, NFR-S7, NFR-S8, NFR-S9, NFR-I6 (14 requirements)

**Implementation Notes:**
- Dispute view: Prisma query with deep includes (task + uploader + creator + submissions + qaReviews + messages)
- Admin analytics dashboard: aggregate queries with Redis caching (5-min TTL)
- Audit logging: middleware interceptor for all admin Server Actions
- Audit log table: `AuditLog { userId, action, resourceType, resourceId, metadata, timestamp }`
- Pattern detection: BullMQ job `detect-suspicious-patterns` (hourly)
- Integration health monitoring: BullMQ job `check-integration-health` (every 5 minutes)
- Alert system: email via Resend when thresholds breached
- Admin RLS bypass: special RLS policy `(auth.role() = 'ADMIN')` allows full read access

**Dependencies:** Epic 1, 2 (infrastructure and auth required)

---

### Epic 8: Admin Comped Task Management

**Goal:** Enable admins to create complimentary tasks for partnerships, trials, and training with budget controls, approval workflows, and comprehensive tracking.

**User Outcome:** Admins can create comped task batches for business development purposes, manage monthly budgets, route through approval workflows, and track ROI metrics.

**What admins can do:**
- Create comped task batches via Admin Dashboard:
  - Select task type (Partnership Trial, Sales Demo, Creator Training)
  - Add business label (required, 100 character max, e.g., "Acme Corp Q1 Trial")
  - Upload audio files or reference existing uploads
  - Configure output formats and custom instructions
  - Set assignment rules (tier level, specific creators)
- View estimated cost based on average creator payouts by tier
- Auto-approve batches <10 tasks (single admin authority)
- Request approval for batches 10-50 tasks (requires 2nd admin approval with justification)
- Request executive approval for batches >50 tasks (finance/executive sign-off)
- Set monthly comped task budget (system-configurable, default $1,000-$2,000)
- View real-time budget usage:
  - Percentage consumed
  - Remaining funds
  - Pending approval costs
- Cancel unclaimed comped tasks before creator claims (no cost incurred)
- Download all completed tasks from a batch in bulk
- Review comped task quality before delivering to external partners
- Request revision on comped tasks (task re-enters QA queue)
- Export comped task data in CSV format for external analysis
- View monthly audit report:
  - Total cost breakdown
  - ROI metrics (trial conversions, partnership closures)
  - Partnership conversion tracking

**What the system does:**
- Calculate estimated cost automatically (avg payout × tier multiplier × task count)
- Validate against monthly budget before allowing creation
- Block batch creation if monthly budget would be exceeded
- Budget resets automatically on first day of each month
- Route comped tasks to creator queue with NO visual distinction (maintains role isolation)
- Process through identical QA review workflow as paid tasks
- Include QA-approved comped tasks in weekly creator payout batch
- Flag comped task payouts separately in weekly payout summary (financial tracking)
- Track costs as "Customer Acquisition" or "Training Expense" operating category
- Log all comped task actions with admin ID, timestamp, and action type
- Display active comped batches on admin dashboard with real-time progress:
  - Completed count
  - QA pending count
  - Cancelled count
- Auto-flag suspicious patterns:
  - Same admin/creator pairs (potential collusion)
  - Abnormal volume from single admin

**FRs covered:** FR-ADMIN-01 through FR-ADMIN-42 (42 requirements)

**Implementation Notes:**
- Comped task table: `CompedTaskBatch { id, adminId, taskType, businessLabel, estimatedCost, approvalStatus, approvedBy, createdAt }`
- Budget tracking: `CompedTaskBudget { month, budgetLimit, consumed, createdAt }`
- Approval workflow state machine:
  - <10 tasks: AUTO_APPROVED
  - 10-50 tasks: PENDING_ADMIN_APPROVAL
  - >50 tasks: PENDING_EXECUTIVE_APPROVAL
- Comped tasks use same `Task` table with `compedTaskBatchId` FK (nullable)
- Creator task queue query filters by tier but doesn't distinguish comped vs paid
- Weekly payout batch: separate line items for comped tasks in payout summary
- Suspicious pattern detection: BullMQ job analyzes admin-creator relationships, flagging frequency
- Monthly audit report: BullMQ job (1st of month) generates CSV with cost/ROI metrics

**Dependencies:** Epic 1, 2, 3, 4, 5 (uses full task lifecycle infrastructure)

---

### Epic 9: Compliance & Data Management

**Goal:** Implement GDPR/CCPA compliance with automated data lifecycle management, legal hold capability, and fraud prevention systems.

**User Outcome:** Platform meets regulatory requirements for data privacy, automates retention policies to minimize storage costs and legal risk, and prevents fraud through fingerprinting and normalization.

**What users can do:**
- Export personal data in machine-readable format (JSON/CSV) - GDPR Article 15
- Request account deletion with complete data purge within 30 days - GDPR Article 17
- Manage cookie consent preferences (EU visitors) - GDPR Article 7

**What the system does:**
- Execute automated deletion workflows:
  - **Audio files:** 7 days (S3 lifecycle policy)
  - **Transcripts:** 30 days (BullMQ scheduled job, daily)
  - **Deliverables:** 90 days (BullMQ scheduled job, weekly)
  - **Payment records:** 7 years retention (tax compliance, exempt from deletion)
- Exempt active dispute data from automated deletion until resolution
- Support legal hold capability for investigations:
  - Mark records with `legalHold: true` flag
  - Bypass automated deletion for legal hold data
  - Admin can release legal hold after investigation closes
- Encrypt data in transit (TLS 1.3) and at rest (AES-256)
- Device fingerprinting for fraud prevention:
  - Capture device signatures on all new registrations
  - Store fingerprints for duplicate account detection
- Email normalization to prevent duplicates:
  - Strip Gmail dots (john.doe@gmail.com = johndoe@gmail.com)
  - Strip plus-addressing (john+test@gmail.com = john@gmail.com)
  - Create normalized_email unique index in database
- Multi-account detection and admin flagging:
  - Match fingerprints across accounts
  - Match normalized emails across accounts
  - Flag suspicious accounts for admin review within 24 hours
- Enforce role separation technically:
  - PostgreSQL RLS policies prevent cross-role data access
  - Middleware validates role on every request
  - Creators never see client names, pricing, or margins
  - Uploaders never see creator identity (only see "jabur" entity)

**FRs covered:** FR6-FR8, FR15-FR16, FR57-FR60, FR63, FR66-FR72, NFR-S1, NFR-S2, NFR-S10, NFR-S11, NFR-S12, NFR-C3, NFR-C4, NFR-C7, NFR-C9, NFR-C10 (32 requirements)

**Implementation Notes:**
- Data export: Prisma queries fetch all user data, serialize to JSON/CSV via Server Action
- Account deletion:
  - Mark account with `deletionRequestedAt` timestamp
  - BullMQ job `process-account-deletions` (daily) hard-deletes accounts >30 days
  - Cascade deletes all related data (tasks, submissions, payments - except 7-year payment records)
- S3 lifecycle policy: tag uploads with `DeleteAfter: 7days`, S3 auto-deletes
- Cookie consent: cookie-consent library (GDPR-compliant banner)
- Fingerprinting: FingerprintJS library on registration page
- Email normalization: utility function `normalizeEmail()` called before user creation
- RLS policies: `CREATE POLICY client_isolation ON Task USING (uploaderId = auth.uid())`
- Legal hold: `LegalHold { id, resourceType, resourceId, reason, createdBy, releasedAt }`
- Deletion jobs skip records with active legal holds or dispute status

**Dependencies:** Epic 1 (infrastructure for lifecycle automation)

---

