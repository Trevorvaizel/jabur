---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics']
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

## Requirements Inventory

### Functional Requirements

**Account & Authentication Management:**
- **FR1**: Uploaders can create accounts and authenticate to access the platform
- **FR2**: Creators can apply for platform access with portfolio submission for vetting
- **FR3**: QA Editors can authenticate with multi-factor authentication (MFA) for secure access
- **FR4**: Admins can authenticate with multi-factor authentication (MFA) for secure access
- **FR5**: Users can select preferred payout method during onboarding (Stripe or M-Pesa)
- **FR6**: Users can request account deletion with complete data purge
- **FR7**: Users can export their personal data in machine-readable format (JSON/CSV)
- **FR8**: System can prevent duplicate account creation via email normalization and device fingerprinting

**Content Upload & Transcription:**
- **FR9**: Uploaders can upload audio files up to 500MB and 3 hours duration
- **FR10**: Uploaders can resume failed uploads without restarting from beginning
- **FR11**: Uploaders can select one or more output format types from 9 available options (Executive Summaries, Key Insights, Action Items, Reflection Questions, Social Media Packs, Blog Posts, Fact-Check Reports, Show Notes, Newsletter Segments)
- **FR12**: Uploaders can select turnaround tier (Standard 24-48hrs, Rush 24hrs +50%, Express 12hrs +100%)
- **FR13**: System can automatically transcribe uploaded audio within 15 minutes using AssemblyAI or Whisper API
- **FR14**: System can generate timestamp-aligned transcripts for synchronized playback
- **FR15**: System can automatically delete audio files after 7 days to minimize storage costs
- **FR16**: System can automatically delete transcripts after 30 days per data retention policy

**Creator Workspace & Task Management:**
- **FR17**: Creators can view available tasks filtered by their current tier qualification level
- **FR18**: Creators can claim tasks with automatic locking to prevent double-assignment
- **FR19**: Creators can access synchronized audio player with waveform visualization and variable speed playback (0.5x - 2x)
- **FR20**: Creators can navigate audio using keyboard shortcuts for efficient workflow
- **FR21**: Creators can work in rich text block-based editor with automatic saving every 30 seconds
- **FR22**: Creators can check plagiarism score before submitting (90%+ originality required)
- **FR23**: Creators can check AI-detection score before submitting (<30% AI-detected required)
- **FR24**: Creators can submit completed content for QA review
- **FR25**: Creators can view their complete submission history with scores and QA feedback
- **FR26**: Creators can see real-time tier progression status (e.g., "12/30 approvals to Mid-Level")
- **FR27**: Creators can view their earnings dashboard with transparent payout amounts (WITHOUT client pricing visibility)
- **FR28**: System can auto-save creator work every 30 seconds without user disruption

**Quality Assurance & Review:**
- **FR29**: QA Editors can access review queue sorted by deadline, creator, or content type
- **FR30**: QA Editors can review submissions with side-by-side view (audio + transcript + submission)
- **FR31**: QA Editors can score submissions using rubric with 6 weighted dimensions (Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- **FR32**: QA Editors can provide inline comments on specific sections of creator submissions
- **FR33**: QA Editors can approve submissions meeting 4.0/5.0 minimum threshold
- **FR34**: QA Editors can reject submissions with actionable feedback for revision
- **FR35**: QA Editors can override other QA Editors' reviews for consistency enforcement
- **FR36**: QA Editors can view performance analytics (first-pass rates, review velocity, quality trends)
- **FR37**: Uploaders can request revisions on delivered content (maximum 3 attempts)
- **FR38**: System can flag creator accounts for quality issues, plagiarism, or deadline misses

**Creator Advancement & Compensation:**
- **FR39**: System can automatically assign creators to tier levels (Probationary 0.8x, Junior 0.9x, Mid-Level 1.0x, Senior 1.25x, Expert 1.5x)
- **FR40**: System can automatically promote creators when advancement criteria met (e.g., 20 approved tasks at 4.5+ average)
- **FR41**: Admins can manually promote or demote creator tier levels with justification
- **FR42**: System can apply tier multiplier to task payouts automatically
- **FR43**: System can calculate weekly creator earnings with full audit trail
- **FR44**: System can process weekly payouts every Friday via Stripe (bank transfer, PayPal, direct deposit) or M-Pesa (mobile money)
- **FR45**: System can generate 1099 tax forms for US-based creators annually
- **FR46**: Creators can view achievement notifications when advancing to new tier level
- **FR47**: System can filter task visibility based on creator tier qualification

**Admin Operations & Dispute Resolution:**
- **FR48**: Admins can access comprehensive dispute context view aggregating all evidence (audio, transcript, submissions, messages)
- **FR49**: Admins can listen to original audio and review complete submission history with timestamps
- **FR50**: Admins can access full message history across client-creator-QA communications
- **FR51**: Admins can use decision support tools with templated resolution options
- **FR52**: Admins can process refunds with reason tracking for disputes
- **FR53**: Admins can view analytics dashboard for operational insights (quality trends, refund rates, creator performance metrics)
- **FR54**: Admins can manually flag accounts for investigation (quality, fraud, policy violations)
- **FR55**: Admins can access complete audit logs for security events, role changes, and payment transactions
- **FR56**: Admins can read all data across roles for dispute resolution and fraud investigation (full read access)

**Admin Comped Task Management:**
- **FR-ADMIN-01**: Admins can create comped task batches via Admin Dashboard
- **FR-ADMIN-02**: Admins can select task type (Partnership Trial, Sales Demo, Creator Training)
- **FR-ADMIN-03**: Admins must add business label for each batch (required, 100 character max)
- **FR-ADMIN-04**: Admins can upload audio files or reference existing uploads for comped tasks
- **FR-ADMIN-05**: Admins can configure format, custom instructions, and assignment rules for comped tasks
- **FR-ADMIN-06**: System calculates estimated cost based on average creator payouts by tier
- **FR-ADMIN-07**: System validates comped task creation against monthly budget before allowing creation
- **FR-ADMIN-08**: Batches with fewer than 10 tasks are auto-approved (single admin authority)
- **FR-ADMIN-09**: Batches with 10-50 tasks require second admin approval with justification
- **FR-ADMIN-10**: Batches with more than 50 tasks require finance or executive approval
- **FR-ADMIN-11**: Approval requests include business justification and cost estimate
- **FR-ADMIN-12**: Approver sees real-time budget impact analysis before approving
- **FR-ADMIN-13**: Platform administrators can set monthly comped task budget (system-configurable)
- **FR-ADMIN-14**: Admins see real-time budget usage with percentage and remaining funds
- **FR-ADMIN-15**: System blocks batch creation if monthly budget would be exceeded
- **FR-ADMIN-16**: Budget resets automatically on first day of each month
- **FR-ADMIN-17**: Executives can override budget limits with required business justification
- **FR-ADMIN-18**: Comped tasks enter same task routing queue as client-paid tasks (no preferential treatment)
- **FR-ADMIN-19**: Creators cannot distinguish comped tasks from paid tasks (maintains role isolation)
- **FR-ADMIN-20**: Comped tasks go through identical QA review process as paid tasks
- **FR-ADMIN-21**: Approved comped tasks count toward creator tier progression
- **FR-ADMIN-22**: Rejected comped tasks result in no creator payment (same quality incentive as paid tasks)
- **FR-ADMIN-23**: Admins can cancel unclaimed comped tasks before creator claims (no cost incurred)
- **FR-ADMIN-24**: In-progress or completed comped tasks cannot be cancelled (creator time commitment honored)
- **FR-ADMIN-25**: QA-approved comped tasks are included in weekly creator payout batch
- **FR-ADMIN-26**: Comped task payouts are flagged separately in weekly payout summary for financial tracking
- **FR-ADMIN-27**: Admins review and approve comped task payouts in weekly batch before release
- **FR-ADMIN-28**: Platform absorbs all comped task creator earnings as operating expense
- **FR-ADMIN-29**: All comped task actions are logged with admin ID, timestamp, and action type
- **FR-ADMIN-30**: Admin dashboard displays active comped batches with real-time progress
- **FR-ADMIN-31**: Admins can view batch detailed progress (completed count, QA pending, cancelled)
- **FR-ADMIN-32**: Monthly audit report shows total cost, ROI metrics, and partnership conversion tracking
- **FR-ADMIN-33**: Admins can export comped task data in CSV format for external analysis
- **FR-ADMIN-34**: System automatically flags suspicious patterns (same admin/creator pairs, abnormal volume)
- **FR-ADMIN-35**: Admins can download all completed tasks from a batch in bulk
- **FR-ADMIN-36**: Admins can review comped task quality before delivering to external partners
- **FR-ADMIN-37**: Admins can request revision on comped tasks (task re-enters QA queue)
- **FR-ADMIN-38**: Comped tasks are marked with batch_id and business label in database for tracking
- **FR-ADMIN-39**: Comped tasks appear in creator "Available Tasks" queue with no visual distinction
- **FR-ADMIN-40**: Comped task completion triggers identical notifications as paid task completion
- **FR-ADMIN-41**: Analytics dashboard separates comped task metrics from paid task metrics
- **FR-ADMIN-42**: Financial reports track comped task costs as "Customer Acquisition" or "Training Expense" operating category

**Fraud Prevention & Security:**
- **FR57**: System can capture device fingerprints for all new account registrations
- **FR58**: System can normalize email addresses to prevent alias and duplicate account tricks
- **FR59**: System can detect multi-account creation attempts and flag for admin review
- **FR60**: System can enforce role separation technically (database RLS + application middleware) preventing clients from becoming creators
- **FR61**: Creators can NEVER see client names, client pricing, or platform margins (role blindness)
- **FR62**: Uploaders can NEVER see creator identity - only see "jabur" entity completing work
- **FR63**: System can encrypt data in transit (TLS 1.3) and at rest (AES-256)
- **FR64**: System can log all admin actions, role changes, payment transactions for audit trail
- **FR65**: System can automatically flag suspicious patterns (quality drops, deadline misses, plagiarism spikes) for admin review

**Compliance & Data Management:**
- **FR66**: System can provide GDPR-compliant data export functionality for EU users
- **FR67**: System can execute account deletion workflow with data purge verification
- **FR68**: System can manage cookie consent for EU visitors
- **FR69**: System can automatically delete delivered content after 90 days per retention policy
- **FR70**: System can retain payment records for 7 years for tax compliance (IRS, EU tax authorities)
- **FR71**: System can exempt active dispute data from automated deletion until resolution
- **FR72**: System can support legal hold capability for data involved in legal proceedings
- **FR73**: Uploaders can download delivered content in multiple formats (MD, PDF, DOCX)
- **FR74**: System can send delivery notifications to uploaders when content is ready
- **FR75**: System can track and display task status updates in real-time across all user dashboards (within 5 seconds)

### Non-Functional Requirements

**Performance:**
- **NFR-P1**: User-facing page load times must complete within 2 seconds on desktop connections
- **NFR-P2**: Mobile-responsive interfaces must load within 3 seconds
- **NFR-P3**: User actions (button clicks, form submissions) must provide feedback within 500ms
- **NFR-P4**: Audio transcription must complete within 15 minutes of upload completion for files up to 500MB
- **NFR-P5**: Task status updates must propagate to all user dashboards within 5 seconds (real-time requirement)
- **NFR-P6**: Creator editor auto-save must execute every 30 seconds without disrupting user workflow
- **NFR-P7**: System must support 200 concurrent creators claiming and working on tasks without performance degradation
- **NFR-P8**: QA review queue must handle 50 concurrent reviews with sub-2-second response times

**Security:**
- **NFR-S1**: All data in transit must be encrypted using TLS 1.3 or higher
- **NFR-S2**: All data at rest must be encrypted using AES-256 encryption
- **NFR-S3**: Role isolation must be enforced at database level (PostgreSQL RLS) AND application middleware level
- **NFR-S4**: Admin and QA Editor roles must require multi-factor authentication (MFA) for access
- **NFR-S5**: Database row-level security policies must prevent creators from accessing client data and vice versa
- **NFR-S6**: Role separation must be technically enforced - clients cannot create creator accounts and vice versa
- **NFR-S7**: All admin actions, role changes, payment transactions, and dispute resolutions must be logged with timestamps
- **NFR-S8**: Security events must be retained for 1 year for investigation and compliance audits
- **NFR-S9**: Automated flagging must detect suspicious patterns (quality drops, deadline misses, plagiarism spikes) within 1 hour
- **NFR-S10**: Device fingerprinting must capture and store device signatures for all new account registrations
- **NFR-S11**: Email normalization must prevent duplicate account creation via alias tricks (Gmail dots, plus-addressing)
- **NFR-S12**: Multi-account detection system must flag attempts for admin review within 24 hours

**Reliability & Availability:**
- **NFR-R1**: System must maintain 99.5% uptime minimum (maximum acceptable downtime: 3.6 hours/month)
- **NFR-R2**: Planned maintenance windows must be scheduled during off-peak hours with 48-hour advance notice
- **NFR-R3**: Zero data loss tolerance for audio uploads - all uploads must be persisted or user notified of failure
- **NFR-R4**: Zero data loss tolerance for creator submissions - all work must be saved or recovery mechanism provided
- **NFR-R5**: Zero data loss tolerance for QA reviews - all scores and feedback must be persisted atomically
- **NFR-R6**: Creator payout calculations must be 100% accurate with full audit trail for reconciliation
- **NFR-R7**: Weekly payout processing must complete successfully by Friday 11:59 PM or failure alerts sent to ops team
- **NFR-R8**: Failed payment transactions must be queued for manual retry with admin notification
- **NFR-R9**: Audio upload must support resume capability for failed uploads - users can continue from last uploaded chunk
- **NFR-R10**: System must handle audio files up to 500MB and 3 hours duration without corruption or data loss

**Scalability:**
- **NFR-SC1**: System must scale to support 10x user growth (10,000 uploaders, 2,000 creators) with <10% performance degradation
- **NFR-SC2**: Database architecture must support horizontal scaling for read-heavy workloads (task queues, review queues)
- **NFR-SC3**: File storage must support petabyte-scale growth with automatic lifecycle management (7-day audio deletion)
- **NFR-SC4**: Infrastructure must auto-scale to handle 3x average traffic during peak usage periods
- **NFR-SC5**: WebSocket connection pooling must support 1,000 concurrent real-time connections for task updates
- **NFR-SC6**: Task routing system must efficiently match 1,000+ pending tasks to 200+ available creators within 60 seconds
- **NFR-SC7**: QA review queue must handle 500+ pending reviews with sorting and filtering sub-2-second response times

**Integration Reliability:**
- **NFR-I1**: Audio transcription integration (AssemblyAI/Whisper) must have automatic failover between providers if primary fails
- **NFR-I2**: Payment processing (Stripe) must have fallback queuing system for failed transactions with 7-day retry window
- **NFR-I3**: M-Pesa integration must support manual payout capability if API failures exceed 4-hour window
- **NFR-I4**: All integration API keys must be stored in secure environment variables, never hardcoded
- **NFR-I5**: API key rotation must be supported without service downtime
- **NFR-I6**: Integration failures must trigger alerts within 5 minutes of detection
- **NFR-I7**: Rate limiting must prevent runaway API usage with cost controls and automatic throttling
- **NFR-I8**: Transcription service availability must meet 99% SLA or automatic provider failover triggered
- **NFR-I9**: Payment processing availability must meet 99.9% SLA (critical for weekly payouts)

**Compliance & Data Privacy:**
- **NFR-C1**: System must provide self-service data export functionality returning all user data in machine-readable format (JSON/CSV)
- **NFR-C2**: Account deletion workflow must purge all user data within 30 days with verification audit trail
- **NFR-C3**: Cookie consent management must be implemented for all EU visitors with clear opt-in/opt-out
- **NFR-C4**: Data Processing Agreements (DPAs) must be in place for all third-party integrations (AssemblyAI, Stripe, M-Pesa)
- **NFR-C5**: Privacy policy must disclose all data collection, processing, and sharing practices
- **NFR-C6**: Users must be able to request disclosure of personal data collected and sold
- **NFR-C7**: Automated deletion jobs must run daily (audio files >7 days), weekly (transcripts/submissions >30 days), quarterly (delivered content >90 days)
- **NFR-C8**: Payment records must be retained for 7 years per IRS and EU tax authority requirements
- **NFR-C9**: Active dispute data must be automatically exempted from deletion until resolution
- **NFR-C10**: Legal hold capability must support data preservation for legal proceedings
- **NFR-C11**: Security controls must meet SOC 2 Trust Service Criteria before launching Enterprise tier (12-18 month timeline)
- **NFR-C12**: Quarterly security audits and penetration testing must be conducted with remediation tracking
- **NFR-C13**: Incident response plan must be documented and tested annually for data breaches or fraud detection

### Additional Requirements

**Technology Stack & Infrastructure (from Architecture):**
- **ARCH-01**: Use create-next-app starter with Next.js 14 (App Router), TypeScript, Tailwind CSS
- **ARCH-02**: Railway PostgreSQL 15+ as database provider
- **ARCH-03**: Prisma 5.x as ORM with type-safe database client
- **ARCH-04**: NextAuth.js v5 for authentication with 4-role system (Client, Creator, Editor, Admin)
- **ARCH-05**: TanStack Query v5 for server state management
- **ARCH-06**: Zustand 4.x for UI state management only
- **ARCH-07**: Socket.io 4.x with Redis adapter for real-time updates
- **ARCH-08**: BullMQ (Redis-based) for background job processing
- **ARCH-09**: Railway Redis for session storage, caching, and job queue backend
- **ARCH-10**: Stripe SDK for global payment processing
- **ARCH-11**: M-Pesa Daraja API for East African mobile money (MANDATORY for launch)
- **ARCH-12**: AssemblyAI as primary transcription service with OpenAI Whisper as fallback
- **ARCH-13**: AWS S3 for file storage with 7-day lifecycle policy for audio files
- **ARCH-14**: CloudFront CDN for global audio streaming
- **ARCH-15**: shadcn/ui component library (copy-paste, Radix UI primitives)
- **ARCH-16**: React Hook Form + Zod for form handling and validation
- **ARCH-17**: wavesurfer.js for audio player with waveform visualization
- **ARCH-18**: Tiptap for rich text block-based editor
- **ARCH-19**: Railway as hosting platform (traditional Node.js deployment, not serverless)
- **ARCH-20**: Jest + React Testing Library for unit/integration tests
- **ARCH-21**: Playwright for E2E testing of multi-role user journeys

**Role Isolation Architecture (CRITICAL):**
- **ARCH-22**: 3-layer role isolation: Route groups + Middleware + PostgreSQL Row-Level Security
- **ARCH-23**: Route groups: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- **ARCH-24**: Middleware validates JWT role on every request before page load
- **ARCH-25**: PostgreSQL RLS policies filter data by userId/creatorId/editorId
- **ARCH-26**: All three layers must be implemented - missing any layer is a security vulnerability

**API & Data Patterns:**
- **ARCH-27**: Server Actions for internal data mutations (create, update, delete)
- **ARCH-28**: REST API routes for webhooks only (M-Pesa, Stripe, AssemblyAI callbacks)
- **ARCH-29**: All Server Actions return `ApiResponse<T>` type with structured error handling
- **ARCH-30**: Error codes use SCREAMING_SNAKE_CASE (e.g., `TASK_ALREADY_CLAIMED`, `UNAUTHORIZED`)

**Database Patterns:**
- **ARCH-31**: Prisma schema uses PascalCase for tables, camelCase for columns
- **ARCH-32**: Enums use SCREAMING_SNAKE_CASE values (e.g., `TaskStatus.AVAILABLE`)
- **ARCH-33**: Repository pattern - never import Prisma client directly in Server Actions
- **ARCH-34**: Atomic operations for wallet balance updates (use `{ increment }`, never read-modify-write)
- **ARCH-35**: Optimistic locking for task claiming (use `updateMany` with status check)
- **ARCH-36**: Database transactions for multi-model operations (wallet + transaction + notification)

**Session & Security Patterns:**
- **ARCH-37**: JWT session strategy with Redis backing for instant revocation
- **ARCH-38**: Session TTL: 24 hours (client/creator), 8 hours (admin/QA)
- **ARCH-39**: MFA required for Admin and QA Editor roles (TOTP-based)
- **ARCH-40**: Always call `auth()` in Server Actions - never trust client-provided userId
- **ARCH-41**: Validate session AND check role authorization in every Server Action

**Real-Time & Background Jobs:**
- **ARCH-42**: Socket.io rooms for scoped broadcasting (project rooms, user rooms)
- **ARCH-43**: Redis adapter required for horizontal scaling (multiple Railway instances)
- **ARCH-44**: BullMQ jobs must be idempotent (may execute multiple times on retry)
- **ARCH-45**: Exponential backoff for retries: `{ attempts: 3, backoff: { type: 'exponential', delay: 1000 } }`
- **ARCH-46**: Task timeout enforcement via background jobs (24hr claim timeout)

**Payment Integration Patterns:**
- **ARCH-47**: Dual payment provider coordination (Stripe + M-Pesa both operational at launch)
- **ARCH-48**: Route to M-Pesa or Stripe based on `user.preferredPaymentMethod`
- **ARCH-49**: Weekly payout batch processing (Friday 11:59 PM deadline)
- **ARCH-50**: Stripe idempotency keys for payment intents (use `uuidv4()`)
- **ARCH-51**: M-Pesa stores `ConversationID` and `OriginatorConversationID` for callback matching

**Data Lifecycle & Compliance:**
- **ARCH-52**: S3 object lifecycle policy auto-deletes audio files after 7 days
- **ARCH-53**: BullMQ scheduled jobs for transcript cleanup (30 days) and deliverable cleanup (90 days)
- **ARCH-54**: Payment records retained for 7 years (tax compliance)
- **ARCH-55**: Automated deletion exempts active disputes and legal holds

**Testing Requirements:**
- **ARCH-56**: Test role isolation: verify users cannot access routes outside their role
- **ARCH-57**: Test data visibility: Clients see only their tasks, Creators see only their projects
- **ARCH-58**: Test middleware redirects AND Server Action authorization (both layers)
- **ARCH-59**: Test Socket.io events broadcast to correct rooms only (no unauthorized users)
- **ARCH-60**: Test BullMQ job processing with mocked external services
- **ARCH-61**: Test dual payment orchestration (Stripe + M-Pesa routing)
- **ARCH-62**: Mock all external APIs (Stripe, M-Pesa, AssemblyAI) - never call real APIs in tests

**Critical Project Context Rules (from project-context.md):**
- **CTX-01**: MUST use Next.js 14 App Router (NOT Next.js 15, NOT Pages Router)
- **CTX-02**: NextAuth.js v5 is REQUIRED for Next.js 14 compatibility (v4 incompatible)
- **CTX-03**: Node.js MUST be 20+ for Next.js 14 compatibility
- **CTX-04**: PostgreSQL 15+ REQUIRED for Row-Level Security features
- **CTX-05**: Current package.json shows Next.js 15.1.0 - This CONFLICTS with architecture (must use Next.js 14)
- **CTX-06**: Server Components by default - Add `'use client'` only when needed
- **CTX-07**: Server Actions MUST have `'use server'` directive at top of file
- **CTX-08**: NEVER use `any` type - Use `unknown` and narrow with type guards
- **CTX-09**: ALWAYS use async/await (NEVER use `.then()` chains)
- **CTX-10**: NEVER mix Promise `.then()` with async/await
- **CTX-11**: Use `const` by default, `let` only when reassignment needed (NEVER use `var`)
- **CTX-12**: Import order: React → Next.js → Third-party (alphabetical) → Local @/ imports (alphabetical)

### FR Coverage Map

**Epic 1: Project Foundation & Infrastructure**
- ARCH-01 through ARCH-62: All architectural and technical stack requirements
- CTX-01 through CTX-12: All critical project context rules

**Epic 2: User Authentication & Account Management**
- FR1: Uploader account creation and authentication
- FR2: Creator application with portfolio submission
- FR3: QA Editor authentication with MFA
- FR4: Admin authentication with MFA
- FR5: Payout method selection during onboarding
- FR6: Account deletion with data purge
- FR7: Personal data export (GDPR)
- FR8: Duplicate account prevention
- NFR-S4: MFA for admin/QA roles
- NFR-S6: Role separation enforcement
- NFR-C1: Data export functionality
- NFR-C2: Account deletion workflow
- NFR-C5: Privacy policy disclosures
- NFR-C6: Data disclosure requests

**Epic 3: Content Upload & Transcription Pipeline**
- FR9: Upload audio files (500MB, 3 hours)
- FR10: Resume failed uploads
- FR11: Select output formats (9 options)
- FR12: Select turnaround tier
- FR13: Auto-transcribe within 15 minutes
- FR14: Timestamp-aligned transcripts
- FR15: Auto-delete audio after 7 days
- FR16: Auto-delete transcripts after 30 days
- FR75: Real-time task status updates
- NFR-P4: Transcription 15-minute SLA
- NFR-R3: Zero data loss for uploads
- NFR-R9: Resume capability
- NFR-R10: Handle 500MB files
- NFR-I1: Transcription failover

**Epic 4: Creator Workspace & Task Management**
- FR17: View tasks filtered by tier
- FR18: Claim tasks with atomic locking
- FR19: Audio player with waveform and variable speed
- FR20: Keyboard shortcuts for audio navigation
- FR21: Rich text block editor with auto-save
- FR22: Plagiarism score check (90%+ required)
- FR23: AI-detection score check (<30% required)
- FR24: Submit completed content
- FR25: View submission history
- FR26: Real-time tier progression status
- FR27: Earnings dashboard (no client pricing)
- FR28: Auto-save every 30 seconds
- NFR-P6: Auto-save without disruption
- NFR-P7: Support 200 concurrent creators

**Epic 5: Quality Assurance System**
- FR29: QA review queue with sorting
- FR30: Side-by-side review view
- FR31: 6-dimension rubric scoring
- FR32: Inline comments on submissions
- FR33: Approve submissions (4.0/5.0 threshold)
- FR34: Reject with actionable feedback
- FR35: Override other QA reviews
- FR36: QA performance analytics
- FR37: Uploader revision requests (max 3)
- FR38: Flag creator accounts for quality issues
- FR73: Download delivered content (MD, PDF, DOCX)
- FR74: Delivery notifications
- NFR-P8: 50 concurrent reviews sub-2-second
- NFR-R5: Zero data loss for QA reviews
- NFR-C7: Automated deletion (transcripts 30 days, deliverables 90 days)

**Epic 6: Creator Advancement & Compensation**
- FR39: Auto-assign tier levels (Probationary 0.8x → Expert 1.5x)
- FR40: Auto-promote when criteria met
- FR41: Admin manual tier promotion/demotion
- FR42: Apply tier multiplier automatically
- FR43: Calculate weekly earnings with audit trail
- FR44: Weekly payouts via Stripe or M-Pesa
- FR45: Generate 1099 tax forms (US creators)
- FR46: Achievement notifications on tier advancement
- FR47: Filter task visibility by tier
- NFR-R6: 100% accurate payout calculations
- NFR-R7: Friday payout deadline
- NFR-R8: Failed payment retry queue
- NFR-I2: Stripe fallback queuing
- NFR-I3: M-Pesa manual payout capability
- NFR-I9: Payment 99.9% SLA
- NFR-C8: Payment records 7-year retention

**Epic 7: Admin Operations & Platform Management**
- FR48: Dispute context view (all evidence)
- FR49: Review audio and submission history
- FR50: Full message history access
- FR51: Decision support tools
- FR52: Process refunds with tracking
- FR53: Analytics dashboard
- FR54: Manually flag accounts
- FR55: Complete audit logs
- FR56: Full read access across roles
- FR64: Log admin actions
- FR65: Auto-flag suspicious patterns
- NFR-S7: Log all admin actions with timestamps
- NFR-S8: Security events 1-year retention
- NFR-S9: Pattern detection within 1 hour
- NFR-I6: Integration failure alerts (5 minutes)

**Epic 8: Admin Comped Task Management**
- FR-ADMIN-01 through FR-ADMIN-42: Complete comped task feature set (42 requirements)

**Epic 9: Compliance & Data Management**
- FR6: Account deletion workflow
- FR7: Data export functionality
- FR8: Duplicate account prevention
- FR15: Audio auto-deletion (7 days)
- FR16: Transcript auto-deletion (30 days)
- FR57: Device fingerprinting
- FR58: Email normalization
- FR59: Multi-account detection
- FR60: Role separation enforcement
- FR63: TLS 1.3 + AES-256 encryption
- FR66: GDPR data export
- FR67: Account deletion with purge verification
- FR68: Cookie consent management
- FR69: Auto-delete deliverables (90 days)
- FR70: Payment records 7-year retention
- FR71: Exempt dispute data from deletion
- FR72: Legal hold capability
- NFR-S1: TLS 1.3 encryption in transit
- NFR-S2: AES-256 encryption at rest
- NFR-S10: Device fingerprinting
- NFR-S11: Email normalization
- NFR-S12: Multi-account flagging (24 hours)
- NFR-C3: Cookie consent for EU visitors
- NFR-C4: DPAs with integrations
- NFR-C7: Automated deletion schedules
- NFR-C9: Dispute data exemption
- NFR-C10: Legal hold support

**Cross-Epic Non-Functional Requirements:**
- NFR-P1, NFR-P2, NFR-P3: Page load performance (all epics)
- NFR-P5: Real-time updates <5 seconds (Epics 3, 4, 5, 6, 7, 8)
- NFR-R1, NFR-R2: 99.5% uptime and maintenance windows (all epics)
- NFR-R4: Zero data loss for creator submissions (Epic 4)
- NFR-S3, NFR-S5: Role isolation at all layers (all epics)
- NFR-SC1 through NFR-SC7: Scalability requirements (all epics)
- NFR-I4, NFR-I5, NFR-I7, NFR-I8: Integration reliability (all epics)
- NFR-C11, NFR-C12, NFR-C13: SOC 2 and security audits (post-MVP)

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

## Epic 2: User Authentication & Account Management

**Epic Goal:** Enable all user types (Uploaders, Creators, QA Editors, Admins) to register, authenticate, and manage their accounts with role-appropriate security measures.

**FRs Covered:** FR2, FR3, FR8, FR9, FR10, FR11, FR12, FR13

### Story 2.1: Uploader Registration with Email/Password

As an uploader,
I want to register for an account with email and password,
So that I can upload audio files for transcription and content creation.

**Acceptance Criteria:**

**Given** I am a new user visiting the registration page
**When** I submit the registration form with email and password
**Then** my email is normalized (lowercase, remove Gmail dots, plus-addressing detection per FR58)
**And** duplicate email check prevents registration with existing normalized email (query `users.email_normalized`)
**And** password is validated (minimum 12 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char per CTX-05)
**And** password is hashed using bcrypt with cost factor 12 before storage
**And** user record is created in database with `{ email, email_normalized, passwordHash, role: 'UPLOADER', emailVerified: false, verificationToken }`
**And** device fingerprint is captured and stored using FingerprintJS (per FR57)
**And** verification token is generated: crypto-random 32-byte hex string with 24-hour expiry
**And** verification email is sent with link: `{app_url}/auth/verify-email?token={verificationToken}`
**And** email template includes: verification link, expiry time (24 hours), support contact
**And** user cannot login until `emailVerified = true` (login blocked with message: "Please verify your email first. Check your inbox.")
**And** clicking verification link validates token and sets `emailVerified = true, verificationToken = null`
**And** expired tokens (>24 hours) display error: "Verification link expired. Request a new one."
**And** user can request new verification email from login page: "Resend Verification Email" link
**And** after email verified, user can login and session is created
**And** multi-account detection flags are triggered if device fingerprint matches existing account (per FR59)
**And** successful verification redirects to login page with success message: "Email verified! You can now log in."

---

### Story 2.2: Uploader Login and Session Management

As an uploader,
I want to log in with my credentials,
So that I can access my dashboard and upload audio files.

**Acceptance Criteria:**

**Given** I am a registered uploader
**When** I submit login form with email and password
**Then** email is normalized before lookup
**And** password is verified using bcrypt
**And** NextAuth.js session is created with user ID, role, and email
**And** JWT token is issued with 30-day expiration
**And** session data includes: id, email, role, createdAt
**And** middleware validates session on protected routes
**And** failed login attempts are rate-limited (5 attempts per 15 minutes)
**And** successful login redirects to `/uploader/dashboard`
**And** device fingerprint is updated on login
**And** logout clears session and JWT token

---

### Story 2.3: Creator Application with Portfolio Submission

As a creator,
I want to submit an application with my portfolio,
So that I can be approved to claim and work on tasks.

**Acceptance Criteria:**

**Given** I am a new user visiting the creator application page
**When** I submit the application form
**Then** email and password are validated and normalized
**And** portfolio URL field accepts LinkedIn, Google Drive, or portfolio website
**And** application reason text field accepts 200-500 characters
**And** user record is created with role='creator' and status='pending_approval'
**And** device fingerprint is captured and stored
**And** multi-account detection flags creator applications from same device
**And** admin notification is sent for new creator application
**And** creator cannot access creator dashboard until status='approved'
**And** email is sent to creator confirming application submission
**And** email is sent to creator upon approval/rejection

---

### Story 2.4: QA Editor Registration with MFA (TOTP)

As a QA editor,
I want to register with MFA enabled,
So that I can securely access the QA review system.

**Acceptance Criteria:**

**Given** I am a new QA editor being onboarded by admin
**When** admin creates my QA editor account
**Then** user record is created with role='qa_editor'
**And** email and password are validated and normalized
**And** TOTP secret is generated using `speakeasy` library
**And** QR code is generated for TOTP setup using `qrcode` library
**And** QR code is displayed to QA editor for scanning with authenticator app (Google Authenticator, Authy)
**And** QA editor must verify TOTP code before account activation
**And** TOTP verification is required on every login (NextAuth.js custom callback)
**And** backup codes (10 codes) are generated and displayed once
**And** device fingerprint is captured
**And** QA editor cannot bypass MFA requirement

---

### Story 2.5: Admin Registration with MFA (TOTP)

As an admin,
I want to register with MFA enabled,
So that I can securely manage the platform.

**Acceptance Criteria:**

**Given** I am a new admin being onboarded
**When** my admin account is created
**Then** user record is created with role='admin'
**And** email and password are validated and normalized
**And** TOTP secret is generated using `speakeasy` library
**And** QR code is generated for TOTP setup using `qrcode` library
**And** QR code is displayed to admin for scanning with authenticator app
**And** admin must verify TOTP code before account activation
**And** TOTP verification is required on every login (NextAuth.js custom callback)
**And** backup codes (10 codes) are generated and displayed once
**And** device fingerprint is captured
**And** admin cannot bypass MFA requirement
**And** all admin actions are logged with timestamps

---

### Story 2.6: Payout Method Selection (Stripe/M-Pesa)

As a creator,
I want to select my payout method (Stripe or M-Pesa),
So that I can receive weekly payments for completed tasks.

**Acceptance Criteria:**

**Given** I am an approved creator
**When** I navigate to payout settings
**Then** I can select between Stripe and M-Pesa as payout provider
**And** if Stripe is selected, I can enter bank account details (account number, routing number)
**And** if M-Pesa is selected, I can enter Kenyan mobile number (format: +254XXXXXXXXX)
**And** payout method is validated before saving
**And** Stripe account details are validated using Stripe API
**And** M-Pesa mobile number is validated using regex pattern
**And** payout method is stored in creator profile
**And** creator can update payout method at any time
**And** payout method change is logged with timestamp
**And** creator receives confirmation email after payout method update

---

### Story 2.7: GDPR Data Export Functionality

As a user,
I want to export all my personal data,
So that I can comply with GDPR data portability rights.

**Acceptance Criteria:**

**Given** I am a logged-in user (any role)
**When** I request data export from account settings
**Then** system generates JSON export with all user data
**And** export includes: profile data, uploaded files metadata, task history, payment records
**And** export excludes: passwords (only shows "hashed"), API keys
**And** export is generated within 30 seconds for typical user data
**And** download link is provided immediately after generation
**And** export file is deleted from server after 24 hours
**And** data export request is logged with timestamp
**And** user receives email with download link
**And** CSV format is also available as alternative to JSON

---

### Story 2.8: Account Deletion with 30-Day Purge

As a user,
I want to delete my account,
So that I can remove all my personal data from the platform.

**Acceptance Criteria:**

**Given** I am a logged-in user
**When** I request account deletion from account settings
**Then** deletion confirmation modal requires password re-entry
**And** user status is set to 'pending_deletion' with scheduled_deletion_date = now + 30 days
**And** user is logged out immediately
**And** user cannot log in while status='pending_deletion'
**And** user receives email confirming deletion request with cancellation link
**And** user can cancel deletion within 30 days via email link
**And** after 30 days, automated job purges all user data:
  - User record
  - Audio file uploads
  - Task submissions
  - QA reviews
  - Payment records (retained for 7 years per NFR-C8)
**And** deletion audit trail is created
**And** active disputes prevent automatic deletion until resolution

---

### Story 2.9: Device Fingerprinting and Email Normalization

As the system,
I want to capture device fingerprints and normalize emails,
So that I can detect fraudulent multi-account creation attempts.

**Acceptance Criteria:**

**Given** a user is registering or logging in
**When** the registration/login form is submitted
**Then** FingerprintJS library captures browser fingerprint
**And** fingerprint includes: user agent, screen resolution, timezone, canvas fingerprint
**And** fingerprint hash is stored in database linked to user account
**And** email normalization removes Gmail dots (john.doe@gmail.com → johndoe@gmail.com)
**And** email normalization removes plus-addressing (john+test@gmail.com → john@gmail.com)
**And** email normalization converts all emails to lowercase
**And** normalized email is checked against existing accounts before registration
**And** duplicate normalized email prevents registration
**And** device fingerprint is checked against existing accounts
**And** multiple accounts from same device fingerprint trigger alert

---

### Story 2.10: Multi-Account Detection System

As an admin,
I want to automatically detect multi-account creation attempts,
So that I can prevent fraud and platform abuse.

**Acceptance Criteria:**

**Given** users are registering accounts
**When** a new account is created
**Then** system checks for matching device fingerprints across accounts
**And** system checks for matching payment methods across creator accounts
**And** system checks for matching IP addresses within 24-hour window
**And** system checks for similar portfolio URLs across creator applications
**And** flagging criteria: 2+ accounts with same device fingerprint
**And** flagging criteria: 2+ creator accounts with same M-Pesa number
**And** flagging criteria: 3+ accounts from same IP within 24 hours
**And** flagged accounts are marked with 'fraud_risk' flag
**And** admin dashboard displays fraud risk alerts
**And** admin can review flagged accounts and take action (approve, suspend, ban)
**And** detection runs within 24 hours of account creation
**And** false positives can be marked as safe by admin
  - `npm test` runs unit tests
  - `npm run test:e2e` runs Playwright tests
**And** jest.config.js is configured with correct module paths and aliases
**And** playwright.config.ts is configured for multi-browser testing
**And** example unit test passes: `lib/utils.test.ts`
**And** example E2E test passes: `tests/e2e/smoke.spec.ts` (loads homepage)
**And** test coverage reporting is configured
**And** CI-ready test setup is complete

---

## Epic 3: Content Upload & Transcription Pipeline

**Epic Goal:** Enable uploaders to upload audio files and receive automated transcriptions ready for creator assignment.

**FRs Covered:** FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR75

### Story 3.1: Multipart Audio Upload with Resume Capability

As an uploader,
I want to upload large audio files with automatic resume on failure,
So that I can reliably upload files up to 500MB and 3 hours duration.

**Acceptance Criteria:**

**Given** I am a logged-in uploader
**When** I upload an audio file
**Then** file size validation accepts files up to 500MB
**And** file type validation accepts MP3, M4A, WAV, FLAC formats
**And** duration validation accepts files up to 3 hours
**And** multipart upload chunks file into 5MB segments
**And** each chunk upload is tracked in database with chunk number and ETag
**And** upload progress is displayed to user (0-100%)
**And** if upload fails, user can resume from last successful chunk
**And** resume functionality reads chunk tracking records from database
**And** completed upload triggers S3 multipart complete API call
**And** S3 object is tagged with `lifecycle=7days` for auto-deletion
**And** upload completion creates UploadRecord in database with S3 key, bucket, and CloudFront URL
**And** zero data loss: all chunks are verified before marking upload complete

---

### Story 3.2: Output Format Selection (9 Options)

As an uploader,
I want to select one or more output formats for my audio content,
So that I receive the specific content types I need.

**Acceptance Criteria:**

**Given** I have uploaded an audio file
**When** I select output formats
**Then** I can select from 9 format options:
  - Executive Summaries
  - Key Insights
  - Action Items
  - Reflection Questions
  - Social Media Packs
  - Blog Posts
  - Fact-Check Reports
  - Show Notes
  - Newsletter Segments
**And** I can select multiple formats (multi-select checkboxes)
**And** at least one format must be selected (validation)
**And** each format has a description tooltip explaining what it includes
**And** format selection is stored in database linked to upload
**And** format selection creates separate Task records for each selected format
**And** form validation prevents submission without at least one format selected

---

### Story 3.3: Turnaround Tier Selection and Pricing

As an uploader,
I want to select a turnaround tier for my content,
So that I can balance speed and cost based on my needs.

**Acceptance Criteria:**

**Given** I have selected output formats
**When** I select turnaround tier
**Then** I can choose from 3 tier options:
  - Standard (24-48 hours): base pricing
  - Rush (+50% premium): 12-24 hours
  - Express (+100% premium): 4-8 hours
**And** tier selection displays estimated delivery timeframe
**And** tier selection displays pricing (base price + tier multiplier)
**And** pricing calculation: base_price_per_format × format_count × tier_multiplier
**And** tier selection is stored in database
**And** tier determines which creators can see the task (tier qualification filter)
**And** default selection is Standard tier
**And** tier pricing is clearly labeled (no hidden fees)

---

### Story 3.4: AssemblyAI Transcription Processing

As the system,
I want to process audio transcription using AssemblyAI as primary provider,
So that transcripts are generated within 15 minutes for 500MB files.

**Acceptance Criteria:**

**Given** an audio file is uploaded and formats/tier are selected
**When** transcription processing begins
**Then** BullMQ job `transcription-processing` is enqueued
**And** job payload includes: S3 key, upload ID, CloudFront URL
**And** AssemblyAI client uploads audio from S3 URL
**And** AssemblyAI transcription request includes:
  - `speaker_labels: true` (diarization)
  - `auto_highlights: true`
  - `entity_detection: true`
  - `sentiment_analysis: true`
**And** webhook callback URL is provided: `/api/webhooks/assemblyai`
**And** job polls AssemblyAI status every 30 seconds if webhook fails
**And** transcription completes within 15 minutes for files up to 500MB
**And** transcript text is stored in database
**And** transcript metadata (speakers, highlights, entities) is stored as JSON
**And** job retries 3 times with exponential backoff on failure
**And** after 3 failures, job triggers Whisper failover

---

### Story 3.5: Whisper Failover for Transcription

As the system,
I want to automatically failover to OpenAI Whisper if AssemblyAI fails,
So that transcription reliability meets 99% SLA.

**Acceptance Criteria:**

**Given** AssemblyAI transcription has failed 3 times
**When** failover logic executes
**Then** system logs AssemblyAI failure to monitoring service
**And** BullMQ job `whisper-transcription` is enqueued
**And** Whisper API receives audio file from S3 CloudFront URL
**And** Whisper request includes: `model: whisper-1`, `language: en`
**And** Whisper transcript is received and stored in database
**And** transcript format is normalized to match AssemblyAI schema
**And** Whisper transcript lacks speaker labels (single speaker assumed)
**And** failover event is logged in audit trail
**And** admin alert is sent when failover occurs (integration health monitoring)
**And** if Whisper also fails, upload is marked as `transcription_failed`
**And** user receives notification of transcription failure with support contact

---

### Story 3.6: Timestamp-Aligned Transcript Generation

As a creator,
I want transcripts with timestamp alignment,
So that I can navigate audio by clicking transcript text.

**Acceptance Criteria:**

**Given** AssemblyAI or Whisper has completed transcription
**When** transcript is processed
**Then** transcript is split into utterances with timestamps
**And** each utterance has: `start_time`, `end_time`, `text`, `speaker_label`
**And** utterances are stored in database as JSON array
**And** transcript viewer displays utterances in chronological order
**And** clicking an utterance seeks audio player to `start_time`
**And** audio playback highlights current utterance based on playback position
**And** utterance timestamps are accurate within ±500ms
**And** empty or silent segments are excluded from transcript
**And** speaker labels distinguish multiple speakers (AssemblyAI only)
**And** Whisper transcripts use single speaker label ("Speaker 1")

---

### Story 3.7: Task Creation and Creator Queue Routing

As the system,
I want to create Task records and route them to the creator queue,
So that creators can discover and claim available tasks.

**Acceptance Criteria:**

**Given** transcription is complete
**When** Task records are created
**Then** one Task record is created for each selected output format
**And** Task record includes:
  - `uploaderId`: uploader ID
  - `audioS3Key`: S3 object key
  - `transcriptId`: foreign key to transcript
  - `outputFormat`: selected format
  - `tier`: selected tier (Standard/Rush/Express)
  - `status`: AVAILABLE
  - `createdAt`: timestamp
  - `deadline`: calculated from tier (Standard: +48hrs, Rush: +24hrs, Express: +8hrs)
**And** Task is visible in creator queue filtered by tier qualification
**And** creators below tier qualification level cannot see higher-tier tasks
**And** Task sorting: deadline ascending (urgent tasks first)
**And** Task card displays: format, tier, deadline, estimated payout
**And** uploader identity is hidden from creators (role blindness)

---

### Story 3.8: Real-Time Task Status Updates via Socket.io

As an uploader,
I want to see real-time task status updates,
So that I know when transcription completes and tasks are assigned to creators.

**Acceptance Criteria:**

**Given** I have uploaded audio and selected formats/tier
**When** task status changes
**Then** Socket.io event is emitted to uploader room: `task:status-updated`
**And** event payload includes: `taskId`, `status`, `timestamp`
**And** status changes are propagated within 5 seconds (NFR-P5)
**And** uploader dashboard updates task status without page refresh
**And** status progression: UPLOADING → TRANSCRIBING → AVAILABLE → CLAIMED → IN_PROGRESS → SUBMITTED → IN_QA → APPROVED/REJECTED → DELIVERED
**And** each status change triggers Socket.io event
**And** Socket.io uses Redis adapter for multi-instance broadcasting
**And** disconnected clients receive status updates on reconnect (event replay)
**And** uploader sees progress indicators for each stage
**And** notifications are sent via Socket.io AND stored in database for offline access

---

### Story 3.9: Audio Auto-Deletion (7-Day Lifecycle)

As the system,
I want to automatically delete audio files after 7 days,
So that storage costs are minimized and compliance requirements are met.

**Acceptance Criteria:**

**Given** audio files are uploaded to S3
**When** S3 lifecycle policy executes
**Then** S3 objects tagged with `lifecycle=7days` are auto-deleted after 7 days
**And** S3 lifecycle rule is configured at bucket level
**And** deletion occurs automatically without manual intervention
**And** deletion is permanent (objects cannot be recovered)
**And** UploadRecord in database is updated with `audioDeletedAt` timestamp
**And** attempts to access deleted audio return 404 error
**And** creators can still access audio during 7-day window for task completion
**And** active tasks with unclaimed or in-progress status prevent deletion (grace period)
**And** BullMQ job `check-audio-retention` (daily) logs upcoming deletions
**And** admin can manually extend retention for specific uploads (legal hold)

---

### Story 3.10: Transcript Auto-Deletion (30-Day Lifecycle)

As the system,
I want to automatically delete transcripts after 30 days,
So that storage costs are minimized and compliance requirements are met.

**Acceptance Criteria:**

**Given** transcripts are stored in database
**When** BullMQ job `cleanup-transcripts` runs daily
**Then** transcripts older than 30 days are deleted
**And** deletion query: `DELETE FROM Transcript WHERE createdAt < NOW() - INTERVAL '30 days'`
**And** cascade delete removes associated utterances and metadata
**And** active tasks prevent transcript deletion (grace period until task delivered)
**And** delivered tasks allow transcript deletion after 30 days
**And** active disputes prevent transcript deletion (NFR-C9)
**And** legal hold flag prevents transcript deletion
**And** deletion is logged in audit trail with timestamp and record count
**And** job runs at 2 AM UTC daily (off-peak hours)
**And** job reports deletion metrics to monitoring service

---

### Story 3.11: AssemblyAI Webhook Handler Integration

As the system,
I want to receive AssemblyAI webhooks when transcription completes,
So that transcript processing completes automatically without polling.

**Acceptance Criteria:**

**Given** AssemblyAI is configured (Story 1.10) and audio uploads trigger transcription jobs
**When** AssemblyAI webhook fires upon transcription completion
**Then** webhook endpoint `/api/webhooks/assemblyai` receives POST request
**And** webhook validates AssemblyAI signature using secret key for security
**And** webhook payload is parsed: `{ transcript_id, status: 'completed' | 'error', text, utterances, confidence }`
**And** if `status === 'completed'`, transcript is saved to database: `Transcript { audioId, text, utterances, confidence, processingTime }`
**And** if `status === 'error'`, failover to Whisper API is triggered (Story 3.5 circuit breaker)
**And** task status is updated: `Task { status: 'TRANSCRIPTION_COMPLETE', transcriptId }`
**And** Socket.io event emitted to uploader: `{ event: 'transcription:complete', taskId, duration }`
**And** BullMQ job removes audio from pending transcription queue
**And** webhook responds with 200 OK within 5 seconds to prevent AssemblyAI retries
**And** failed webhook processing is logged with full error stack and queued for manual retry
**And** webhook idempotency is enforced: duplicate `transcript_id` webhooks are ignored (check database before processing)
**And** meets NFR-P4 (transcription completes within 15 minutes)

---

## Epic 4: Creator Workspace & Task Management

**Epic Goal:** Provide creators with professional tools to discover, claim, and complete tasks with audio playback, waveform visualization, rich text editing, and quality checks.

**FRs Covered:** FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26, FR27, FR28

### Story 4.1: Task Queue with Tier-Based Filtering

As a creator,
I want to view available tasks filtered by my current tier level,
So that I only see tasks I'm qualified to claim.

**Acceptance Criteria:**

**Given** I am a logged-in creator
**When** I navigate to the task queue
**Then** tasks are filtered by my current tier qualification level
**And** Probationary creators see only Standard tier tasks
**And** Junior creators see Standard tier tasks
**And** Mid-Level creators see Standard and Rush tier tasks
**And** Senior creators see Standard, Rush, and Express tier tasks
**And** Expert creators see all tier tasks
**And** task cards display: output format, tier badge, deadline countdown, estimated payout
**And** tasks are sorted by deadline ascending (urgent first)
**And** task queue updates in real-time via Socket.io when new tasks arrive
**And** uploader identity is never displayed (role blindness enforced)
**And** client pricing is never displayed (only creator payout shown)
**And** pagination or infinite scroll loads 20 tasks at a time
**And** empty state displays when no tasks match tier qualification

---

### Story 4.2: Atomic Task Claiming with Optimistic Locking

As a creator,
I want to claim tasks with automatic locking,
So that I don't compete with other creators for the same task.

**Acceptance Criteria:**

**Given** I am viewing available tasks
**When** I click "Claim Task" button
**Then** optimistic locking query executes: `prisma.task.updateMany({ where: { id, status: 'AVAILABLE', claimedById: null }, data: { status: 'CLAIMED', claimedById: creatorId, claimedAt: now() } })`
**And** if update returns 1 row, claim succeeds
**And** if update returns 0 rows, claim fails with "Task already claimed by another creator"
**And** successful claim redirects to task workspace
**And** task status updates to CLAIMED in database
**And** Socket.io event broadcasts task removal to other creators' queues
**And** claim is atomic (no race conditions with concurrent claims)
**And** claimed task disappears from other creators' queues immediately
**And** claim timestamp is recorded for 24-hour timeout tracking
**And** creator can only claim one task at a time (validation prevents multi-claims)

---

### Story 4.3: 24-Hour Claim Timeout Enforcement

As the system,
I want to automatically release task claims after 24 hours,
So that abandoned tasks return to the queue.

**Acceptance Criteria:**

**Given** tasks are claimed by creators
**When** BullMQ job `task-timeout-enforcement` runs hourly
**Then** job identifies tasks with status CLAIMED and `claimedAt < NOW() - INTERVAL '24 hours'`
**And** timeout releases tasks: `prisma.task.updateMany({ where: { status: 'CLAIMED', claimedAt: { lt: 24hoursAgo } }, data: { status: 'AVAILABLE', claimedById: null, claimedAt: null } })`
**And** released tasks reappear in task queue for all qualified creators
**And** Socket.io event notifies creator that their claim expired
**And** creator is redirected from task workspace to dashboard on timeout
**And** timeout event is logged in audit trail
**And** job runs every hour on the hour
**And** job reports count of released tasks to monitoring service
**And** no data loss occurs when releasing timed-out claims

---

### Story 4.4: Audio Player with Waveform Visualization (wavesurfer.js)

As a creator,
I want to listen to audio with waveform visualization,
So that I can see the audio structure while listening.

**Acceptance Criteria:**

**Given** I have claimed a task
**When** I open the task workspace
**Then** wavesurfer.js library is loaded and initialized
**And** audio is streamed from S3 via CloudFront CDN URL
**And** waveform is rendered with visual amplitude representation
**And** waveform displays loading progress as audio buffers
**And** waveform is interactive (click to seek)
**And** current playback position is highlighted on waveform
**And** play/pause button controls playback
**And** playback position updates in real-time (HH:MM:SS / HH:MM:SS)
**And** waveform colors are visually accessible (high contrast)
**And** waveform is responsive to container width
**And** audio loads within 3 seconds for typical files
**And** error handling displays message if audio fails to load

---

### Story 4.5: Variable Speed Playback Controls

As a creator,
I want to adjust playback speed,
So that I can listen faster or slower based on content complexity.

**Acceptance Criteria:**

**Given** audio player is loaded
**When** I adjust playback speed
**Then** speed options are available: 0.5x, 0.75x, 1x, 1.25x, 1.5x, 1.75x, 2x
**And** default speed is 1x (normal)
**And** speed selection persists across page refreshes (localStorage)
**And** speed change applies immediately without audio interruption
**And** current speed is visually indicated (e.g., "1.5x" badge)
**And** pitch correction is applied (audio doesn't sound chipmunk-like at 2x)
**And** speed controls are accessible via dropdown or slider
**And** keyboard shortcuts adjust speed: `[` decreases, `]` increases

---

### Story 4.6: Keyboard Shortcuts for Audio Navigation

As a creator,
I want keyboard shortcuts for audio control,
So that I can navigate efficiently without using the mouse.

**Acceptance Criteria:**

**Given** I am in the task workspace
**When** I use keyboard shortcuts
**Then** `Space` toggles play/pause
**And** `ArrowLeft` skips backward 5 seconds
**And** `ArrowRight` skips forward 5 seconds
**And** `Shift+ArrowLeft` skips backward 15 seconds
**And** `Shift+ArrowRight` skips forward 15 seconds
**And** `[` decreases playback speed by 0.25x
**And** `]` increases playback speed by 0.25x
**And** `Home` seeks to audio start (0:00)
**And** `End` seeks to audio end
**And** keyboard shortcuts are documented in help tooltip
**And** shortcuts don't interfere with text editor input (only active when editor not focused)

---

### Story 4.7: Transcript-Audio Synchronized Navigation

As a creator,
I want to click transcript text to navigate audio,
So that I can quickly reference specific sections.

**Acceptance Criteria:**

**Given** transcript is displayed alongside audio player
**When** I interact with transcript
**Then** transcript displays utterances in chronological order
**And** each utterance shows timestamp (e.g., "01:23")
**And** clicking an utterance seeks audio to that timestamp
**And** currently playing utterance is highlighted in transcript
**And** highlight follows audio playback in real-time
**And** transcript auto-scrolls to keep current utterance visible
**And** speaker labels are displayed for multi-speaker content (AssemblyAI only)
**And** single speaker label "Speaker 1" for Whisper transcripts
**And** transcript is searchable (Ctrl+F highlights matches)
**And** transcript formatting is readable (line height, font size)

---

### Story 4.8: Rich Text Block Editor with Tiptap

As a creator,
I want to write content in a block-based rich text editor,
So that I can format content professionally.

**Acceptance Criteria:**

**Given** I am in the task workspace
**When** I write content in the editor
**Then** Tiptap editor is initialized with block formatting
**And** editor supports: headings (H1-H6), paragraphs, bold, italic, underline
**And** editor supports: bulleted lists, numbered lists, blockquotes
**And** editor supports: links, code blocks, horizontal rules
**And** Markdown shortcuts work: `#` for H1, `##` for H2, `-` for bullet, `1.` for numbered list
**And** slash commands menu displays formatting options (type `/` to trigger)
**And** editor placeholder text guides creator: "Write your [format] content here..."
**And** editor is responsive and fills available workspace height
**And** content is stored as JSON (Tiptap schema) in database
**And** content can be exported to Markdown for QA review

---

### Story 4.9: Auto-Save Every 30 Seconds

As a creator,
I want my work auto-saved every 30 seconds,
So that I never lose progress.

**Acceptance Criteria:**

**Given** I am editing content in the editor
**When** 30 seconds elapse since last save
**Then** editor content is auto-saved to database via Server Action
**And** auto-save uses debounced function (waits for 500ms typing pause before saving)
**And** auto-save executes without disrupting typing or cursor position
**And** save status indicator displays: "Saving...", "Saved", "Error"
**And** last saved timestamp is displayed: "Last saved at HH:MM:SS"
**And** auto-save creates/updates Submission record with status IN_PROGRESS
**And** auto-save is atomic (Prisma transaction prevents partial saves)
**And** network errors trigger retry with exponential backoff (3 attempts)
**And** offline detection pauses auto-save, resumes when online
**And** manual save button available for immediate save
**And** auto-save meets NFR-P6 (no disruption to user workflow)

---

### Story 4.10: Plagiarism Score Check Integration

As a creator,
I want to check plagiarism score before submitting,
So that I ensure my content meets the 90%+ originality requirement.

**Acceptance Criteria:**

**Given** I have written content in the editor
**When** I click "Check Plagiarism Score"
**Then** editor content (Markdown export) is sent to plagiarism API (Copyscape or Turnitin)
**And** API request includes content text and metadata
**And** plagiarism check displays loading indicator
**And** API response returns originality percentage (0-100%)
**And** originality score is displayed: "92% Original" with visual indicator (green if ≥90%, red if <90%)
**And** if score <90%, detailed report shows matched sources
**And** plagiarism check is rate-limited to prevent abuse (max 3 checks per task)
**And** score is stored in database for QA review visibility
**And** submission button is disabled if latest score <90%
**And** error handling displays message if API fails
**And** fallback allows manual submission if API is unavailable (with warning)

---

### Story 4.11: AI Detection Score Check Integration

As a creator,
I want to check AI detection score before submitting,
So that I ensure my content meets the <30% AI-detected requirement.

**Acceptance Criteria:**

**Given** I have written content in the editor
**When** I click "Check AI Detection Score"
**Then** editor content (Markdown export) is sent to AI detection API (GPTZero or Originality.ai)
**And** API request includes content text and metadata
**And** AI detection displays loading indicator
**And** API response returns AI probability percentage (0-100%)
**And** AI score is displayed: "12% AI Detected" with visual indicator (green if <30%, red if ≥30%)
**And** if score ≥30%, warning message advises rewriting sections
**And** AI check is rate-limited to prevent abuse (max 3 checks per task)
**And** score is stored in database for QA review visibility
**And** submission button is disabled if latest score ≥30%
**And** error handling displays message if API fails
**And** fallback allows manual submission if API is unavailable (with warning)

---

### Story 4.12: Content Submission for QA Review

As a creator,
I want to submit my completed content for QA review,
So that I can earn payment after approval.

**Acceptance Criteria:**

**Given** I have completed writing and passed quality checks
**When** I click "Submit for QA Review"
**Then** submission validation checks:
  - Content is not empty (minimum 100 words)
  - Plagiarism score ≥90% (if checked)
  - AI detection score <30% (if checked)
**And** if validation passes, submission confirmation modal displays
**And** confirmation shows: word count, quality scores, estimated payout
**And** clicking "Confirm Submission" updates Task status to SUBMITTED
**And** Submission record is created with final content (JSON + Markdown export)
**And** plagiarism and AI scores are attached to submission
**And** submission timestamp is recorded
**And** task is moved to QA Editor review queue
**And** Socket.io event notifies QA Editors of new submission
**And** creator receives confirmation: "Submitted! QA review typically completes within 24 hours."
**And** creator is redirected to dashboard
**And** submission is immutable (cannot be edited after submission)

---

### Story 4.13: Submission History View

As a creator,
I want to view my complete submission history,
So that I can track my performance and QA feedback.

**Acceptance Criteria:**

**Given** I am a logged-in creator
**When** I navigate to submission history
**Then** all past submissions are displayed in reverse chronological order
**And** each submission shows: task format, submission date, QA status, QA score (if reviewed)
**And** submission statuses: IN_PROGRESS, SUBMITTED, APPROVED, REJECTED
**And** approved submissions display QA score (e.g., "4.5/5.0") with green badge
**And** rejected submissions display rejection reason and QA feedback
**And** clicking a submission opens detail view with:
  - Original audio (if not deleted)
  - Transcript
  - Submitted content (read-only)
  - QA rubric scores (6 dimensions)
  - Inline QA comments
**And** submission history includes pagination (20 per page)
**And** filter options: All, Approved, Rejected, Pending QA
**And** search by task format or date range
**And** submission history is accessible from creator dashboard

---

### Story 4.14: Real-Time Tier Progression Display

As a creator,
I want to see my real-time tier progression status,
So that I know how close I am to advancing tiers.

**Acceptance Criteria:**

**Given** I am a logged-in creator
**When** I view my creator dashboard
**Then** tier progression widget displays current tier with badge (Probationary, Junior, Mid-Level, Senior, Expert)
**And** progress bar shows advancement to next tier (e.g., "12/30 approvals to Mid-Level")
**And** progression criteria display:
  - Approved tasks count
  - Average QA score (e.g., "4.5/5.0")
  - Required thresholds for next tier
**And** tier multiplier is displayed (e.g., "Current multiplier: 0.9x")
**And** progression updates in real-time after QA approval via Socket.io
**And** achievement notification displays when tier advancement occurs
**And** advancement criteria are transparent:
  - Probationary → Junior: 10 approvals, 4.0+ avg
  - Junior → Mid-Level: 30 approvals, 4.2+ avg
  - Mid-Level → Senior: 100 approvals, 4.5+ avg
  - Senior → Expert: 300 approvals, 4.7+ avg
**And** demotion criteria are displayed if applicable

---

### Story 4.15: Creator Earnings Dashboard

As a creator,
I want to view my earnings dashboard,
So that I can track weekly payouts and individual task earnings.

**Acceptance Criteria:**

**Given** I am a logged-in creator
**When** I navigate to earnings dashboard
**Then** current week earnings are displayed with progress bar to payout threshold
**And** weekly earnings breakdown shows:
  - Approved tasks this week (count and total payout)
  - Pending QA tasks (count and estimated payout)
  - Tier multiplier applied
**And** individual task payouts are listed with:
  - Task format
  - Base payout
  - Tier multiplier applied (e.g., "0.9x")
  - Final payout amount
  - Approval date
**And** payout history displays past weekly payouts with dates and amounts
**And** next payout date is displayed: "Next payout: Friday, Jan 12, 2025"
**And** payout method is displayed: "Stripe (Bank ****1234)" or "M-Pesa (+254...)"
**And** client pricing is NEVER visible (role blindness enforced)
**And** uploader identity is NEVER visible (only see "jabur" as entity)
**And** total lifetime earnings are displayed
**And** earnings dashboard updates in real-time via Socket.io when tasks are approved
**And** export earnings as CSV for personal records

---

### Story 4.16: Offline Mode and Auto-Save Failure Handling

As a creator,
I want the editor to handle internet disconnections gracefully,
So that I don't lose my work if auto-save fails or my connection drops.

**Acceptance Criteria:**

**Given** I am working on a task in the Tiptap editor
**When** auto-save runs every 30 seconds (Story 4.9)
**Then** auto-save optimistically updates local state immediately
**And** auto-save sends content to server via Server Action
**And** if auto-save succeeds (200 OK), green checkmark displays: "Saved at 2:34 PM"
**And** if auto-save fails (network error, 500, timeout), retry 3 times with exponential backoff (5s, 15s, 45s)
**And** if all retries fail, content is saved to localStorage: `unsaved-work:{taskId}`
**And** warning banner displays: "Connection lost. Your work is saved locally and will sync when connection restores."
**And** network status indicator displays: "Offline" (red dot) or "Online" (green dot)
**And** when connection restores, automatic sync attempts to save localStorage content to server
**And** successful sync removes localStorage backup and displays: "Work synced successfully!"
**And** localStorage backup expires after 7 days (prevents stale data accumulation)
**And** if creator navigates away with unsaved work, browser confirmation prompt displays: "You have unsaved changes. Leave anyway?"
**And** if creator force-closes browser with unsaved work, localStorage preserves content for recovery on next session
**And** on next session, if localStorage backup exists, modal displays: "We found unsaved work from [time]. Restore it?"
**And** creator can choose: "Restore" (loads localStorage content into editor) or "Discard" (removes localStorage backup)
**And** meets NFR-R4 (zero data loss for creator submissions)

---

## Epic 5: Quality Assurance System

**Epic Goal:** Enable QA Editors to review creator submissions with structured rubric scoring, and allow uploaders to request revisions and download delivered content.

**FRs Covered:** FR29, FR30, FR31, FR32, FR33, FR34, FR35, FR36, FR37, FR38, FR73, FR74

### Story 5.1: QA Review Queue with Sorting and Filtering

As a QA Editor,
I want to access a review queue with sorting and filtering options,
So that I can efficiently prioritize and review creator submissions.

**Acceptance Criteria:**

**Given** I am a logged-in QA Editor
**When** I navigate to the review queue
**Then** all SUBMITTED tasks are displayed in queue
**And** default sorting is by deadline ascending (urgent first)
**And** sorting options include: deadline, submission date, creator name, content type
**And** filter options include: content type (Executive Summary, Blog Post, etc.), tier (Standard/Rush/Express), creator tier level
**And** each queue item displays: content type badge, creator tier badge, submission timestamp, deadline countdown, creator pseudonym (NOT real name)
**And** queue updates in real-time via Socket.io when new submissions arrive
**And** pagination loads 20 submissions per page
**And** search by task ID or creator pseudonym
**And** queue performs sub-2-second response times with 50 concurrent reviews (NFR-P8)
**And** empty state displays when no submissions pending review

---

### Story 5.2: Side-by-Side Review View

As a QA Editor,
I want to review submissions with a side-by-side view of audio, transcript, and content,
So that I can efficiently assess quality.

**Acceptance Criteria:**

**Given** I have selected a submission to review
**When** I open the review workspace
**Then** layout displays three synchronized panels: audio player + transcript (left), creator submission (middle), QA rubric + comments (right)
**And** audio player streams from S3 CloudFront URL
**And** waveform is interactive (click to seek)
**And** transcript utterances are clickable (seek to timestamp)
**And** current utterance highlights during playback
**And** creator submission displays formatted content (headings, lists, quotes)
**And** submission is read-only (QA cannot edit creator content)
**And** panels are resizable (drag dividers)
**And** layout is responsive on 1920x1080+ displays
**And** audio, transcript, and submission load within 3 seconds

---

### Story 5.3: 6-Dimension Rubric Scoring System

As a QA Editor,
I want to score submissions using a 6-dimension weighted rubric,
So that I can provide objective, structured quality assessments.

**Acceptance Criteria:**

**Given** I am reviewing a submission
**When** I score using the rubric
**Then** rubric displays 6 dimensions with weighted percentages: Accuracy (25%), Completeness (20%), Clarity (20%), Actionability (15%), Formatting (10%), Originality (10%)
**And** each dimension has a 1-5 star rating input
**And** each dimension has optional text feedback field
**And** weighted score is calculated automatically: (Accuracy×0.25 + Completeness×0.20 + Clarity×0.20 + Actionability×0.15 + Formatting×0.10 + Originality×0.10)
**And** final score is displayed as X.X/5.0 (e.g., "4.3/5.0")
**And** visual indicator shows: green if ≥4.0, yellow if 3.0-3.9, red if <3.0
**And** rubric tooltips explain each dimension criteria
**And** rubric validation requires all 6 dimensions to be scored
**And** rubric scores are stored in database with zero data loss (NFR-R5)

---

### Story 5.4: Inline Comments on Submissions

As a QA Editor,
I want to add inline comments on specific sections of submissions,
So that I can provide precise, actionable feedback.

**Acceptance Criteria:**

**Given** I am reviewing a submission
**When** I add inline comments
**Then** I can select any text in the submission
**And** comment icon appears on text selection
**And** clicking comment icon opens comment input field
**And** comment is anchored to specific text range
**And** comments display as highlighted annotations on submission
**And** comment threads support multiple comments per selection
**And** comments persist across page refreshes
**And** comments are visible to creator after QA decision is made
**And** comments are stored in database as JSON: `{ range: { from, to }, text, createdAt }`
**And** QA can edit or delete their own comments before final submission
**And** comment UI is visually distinct (yellow highlight, speech bubble icon)
**And** comments export to PDF/DOCX deliverables if rejection occurs

---

### Story 5.5: Approve Submission (4.0/5.0 Threshold)

As a QA Editor,
I want to approve submissions that meet the 4.0/5.0 quality threshold,
So that creators are paid and uploaders receive their content.

**Acceptance Criteria:**

**Given** I have completed rubric scoring
**When** I click "Approve Submission"
**Then** approval validation checks final score ≥4.0/5.0
**And** if score <4.0, approval button is disabled with tooltip: "Score must be 4.0+ to approve"
**And** if score ≥4.0, approval confirmation modal displays with final score, dimension breakdown, creator tier, payout amount
**And** clicking "Confirm Approval" executes Prisma transaction: update Task to APPROVED, create QaReview, update tier progression, generate deliverables (MD+PDF+DOCX), queue delivery notification
**And** Socket.io events notify creator: "Submission approved! Score: 4.3/5.0" and uploader: "Content ready for download"
**And** QA Editor sees success message: "Submission approved. Creator notified."
**And** task moves to uploader's delivered content area
**And** approval is logged in audit trail with QA Editor ID and timestamp

---

### Story 5.6: Reject Submission with Actionable Feedback

As a QA Editor,
I want to reject submissions that don't meet quality standards,
So that creators can revise and resubmit.

**Acceptance Criteria:**

**Given** I have completed rubric scoring
**When** I click "Reject Submission"
**Then** rejection requires overall feedback text (minimum 50 characters)
**And** rejection modal displays: final score, dimension breakdown highlighting low scores (<3.0), all inline comments, overall feedback textarea
**And** feedback guidance prompts: "Explain what needs improvement and how to fix it"
**And** clicking "Confirm Rejection" executes Prisma transaction: update Task to REJECTED, create QaReview, reset task to IN_PROGRESS, send rejection notification
**And** Socket.io event notifies creator: "Revision requested. Score: 3.2/5.0. See feedback."
**And** creator sees rejection reason, rubric scores, inline comments, and overall feedback
**And** creator can revise and resubmit (same task, new submission attempt)
**And** rejection is logged in audit trail
**And** rejection does NOT count toward tier progression

---

### Story 5.7: Override Other QA Reviews

As a senior QA Editor,
I want to override other QA Editors' reviews for consistency enforcement,
So that quality standards remain uniform.

**Acceptance Criteria:**

**Given** I am a QA Editor with override permission
**When** I view a previously reviewed submission
**Then** I can see the original QA review: reviewer name, scores and feedback, decision (Approved/Rejected), timestamp
**And** "Override Review" button is available
**And** clicking "Override Review" opens new review workspace
**And** I can re-score using the rubric
**And** I can add my own inline comments
**And** I must provide override justification (minimum 100 characters)
**And** clicking "Submit Override" executes Prisma transaction: mark original QaReview as overridden, create new QaReview with isOverride flag, update Task status, notify creator
**And** override event is logged in audit trail
**And** original reviewer is notified of override
**And** override justification is stored for admin review
**And** overrides are tracked in QA performance analytics

---

### Story 5.8: QA Performance Analytics Dashboard

As a QA Editor,
I want to view my performance analytics,
So that I can track my review quality and velocity.

**Acceptance Criteria:**

**Given** I am a logged-in QA Editor
**When** I navigate to performance analytics
**Then** dashboard displays key metrics: total reviews completed, reviews this week/month, average review time, approval rate, average score given, override rate
**And** trend charts show performance over time (weekly/monthly)
**And** dimension breakdown shows my average score per rubric dimension
**And** first-pass approval rate tracks submissions approved without revision
**And** quality trends highlight consistency (standard deviation of scores)
**And** leaderboard displays QA Editor rankings (optional opt-in)
**And** analytics update in real-time after each review
**And** export analytics as PDF report for personal records
**And** admin view shows aggregate QA performance across all editors

---

### Story 5.9: Uploader Revision Requests (Max 3)

As an uploader,
I want to request revisions on delivered content,
So that I can ensure content meets my expectations.

**Acceptance Criteria:**

**Given** I have received delivered content
**When** I request a revision
**Then** delivered content page displays "Request Revision" button (only if `task.revisionCount < 3`)
**And** revision limit is displayed per task: "Revisions remaining: 2/3" (calculated: 3 - task.revisionCount)
**And** revision limit is PER TASK, not per uploader account (each task has independent 3-revision limit per FR37)
**And** clicking "Request Revision" opens feedback modal requiring revision reason (minimum 100 characters) and specific issues checklist
**And** clicking "Submit Revision Request" executes Prisma transaction: update Task to REVISION_REQUESTED, increment `task.revisionCount` by 1, create RevisionRequest, notify creator
**And** task returns to creator workspace with uploader feedback visible
**And** creator sees revision request: "Revision requested. Address the following..."
**And** creator can revise and resubmit (goes through QA review again)
**And** revised submission goes through QA review again (same 4.0/5.0 threshold per FR33)
**And** after 1st or 2nd revision: if QA approved, uploader can still request additional revisions (up to 3 total)
**And** after 3rd revision request: if QA approved and delivered, "Request Revision" button is permanently disabled for this task
**And** if uploader not satisfied after 3 revisions, only option is to initiate dispute (Story 7.1)
**And** revision requests are logged in audit trail: `{ taskId, uploaderId, revisionCount, reason, requestedAt }`

---

### Story 5.10: Flag Creator Accounts for Quality Issues

As a QA Editor,
I want to flag creator accounts for quality issues, plagiarism, or deadline misses,
So that admins can investigate and take action.

**Acceptance Criteria:**

**Given** I am reviewing a submission with quality concerns
**When** I flag a creator account
**Then** "Flag Account" button is available in review workspace
**And** clicking "Flag Account" opens flagging modal with category (Quality Issues/Plagiarism/Deadline Misses/Policy Violations), severity (Low/Medium/High), description (minimum 150 characters), evidence attachment
**And** clicking "Submit Flag" executes: create AccountFlag record, mark creator account as flagged, send alert to admin dashboard, log flagging event
**And** flagged creators are highlighted in admin view
**And** admin can review flag, investigate, and take action (warning, suspension, ban)
**And** QA Editors can view their flagging history
**And** false flags can be dismissed by admin
**And** flagging is anonymous to creator (creator doesn't know which QA Editor flagged them)

---

### Story 5.11: Download Delivered Content (MD, PDF, DOCX)

As an uploader,
I want to download delivered content in multiple formats,
So that I can use the content in various contexts.

**Acceptance Criteria:**

**Given** my content has been approved by QA
**When** I navigate to delivered content
**Then** download options are available for each delivered task: Markdown (.md), PDF (.pdf), Microsoft Word (.docx)
**And** clicking "Download Markdown" downloads .md file with formatted content
**And** clicking "Download PDF" triggers BullMQ job to convert Markdown to PDF using react-pdf or Puppeteer with metadata and professional formatting
**And** clicking "Download DOCX" triggers BullMQ job to convert Markdown to DOCX using docx npm package
**And** download links are provided within 30 seconds
**And** download links are valid for 24 hours
**And** downloads are logged in audit trail
**And** bulk download option: "Download All (ZIP)" includes all 3 formats
**And** delivered content is available for 90 days before auto-deletion (NFR-C7)

---

### Story 5.12: Delivery Notifications to Uploaders

As an uploader,
I want to receive notifications when content is delivered,
So that I know when to download my content.

**Acceptance Criteria:**

**Given** creator content has been QA approved
**When** task status updates to APPROVED
**Then** BullMQ job `send-delivery-notification` is enqueued
**And** email notification is sent to uploader with: subject, content preview (first 100 words), QA score, download links (MD/PDF/DOCX), deadline (90 days)
**And** Socket.io event notifies uploader dashboard in real-time
**And** in-app notification displays: "Content delivered! Click to download."
**And** notification includes task metadata: format, tier, delivery date
**And** notification persists in uploader's notification center
**And** clicking notification navigates to delivered content page
**And** delivery timestamp is recorded
**And** email delivery is tracked (sent, opened, clicked)
**And** failed email delivery triggers admin alert

---

### Story 5.13: Deliverable Auto-Deletion (90-Day Lifecycle)

As the system,
I want to automatically delete deliverables after 90 days,
So that storage costs are minimized and compliance requirements are met.

**Acceptance Criteria:**

**Given** deliverables are stored in database and file system
**When** BullMQ job `cleanup-deliverables` runs weekly
**Then** deliverables older than 90 days are deleted
**And** deletion query: `DELETE FROM Deliverable WHERE deliveredAt < NOW() - INTERVAL '90 days'`
**And** file deletion removes PDF and DOCX files from S3 or local storage
**And** Markdown content in database is cascade deleted
**And** active disputes prevent deliverable deletion until resolution (NFR-C9)
**And** legal hold flag prevents deliverable deletion
**And** uploader is notified 7 days before deletion: "Your content will be deleted in 7 days. Download now."
**And** deletion is logged in audit trail with timestamp and file count
**And** job runs every Sunday at 3 AM UTC (off-peak hours)
**And** job reports deletion metrics to monitoring service
**And** deleted deliverables cannot be recovered
**And** task record remains in database (metadata) even after deliverable deletion

---

## Epic 6: Creator Advancement & Compensation

**Epic Goal:** Implement tier progression system with automatic advancement and accurate weekly payouts via dual payment providers (Stripe + M-Pesa).

**FRs Covered:** FR39, FR40, FR41, FR42, FR43, FR44, FR45, FR46, FR47

### Story 6.1: Auto-Assign Initial Tier Level (Probationary)

As the system,
I want to auto-assign new creators to Probationary tier,
So that all creators start at the same baseline level.

**Acceptance Criteria:**

**Given** a new creator account is created
**When** creator status is set to 'approved'
**Then** creator tier is automatically set to 'PROBATIONARY'
**And** tier multiplier is set to 0.8x
**And** tier assignment timestamp is recorded
**And** creator receives welcome notification: "Welcome! You're starting as Probationary tier (0.8x multiplier). Complete 10 approved tasks with 4.0+ avg to advance to Junior."
**And** tier progression criteria are displayed in creator dashboard
**And** initial tier stats are initialized: approvedTaskCount = 0, averageScore = 0
**And** tier assignment is logged in audit trail
**And** tier badge displays "Probationary" in creator profile

---

### Story 6.2: Auto-Promote Based on Performance Criteria

As the system,
I want to auto-promote creators when they meet tier advancement criteria,
So that high performers are rewarded automatically.

**Acceptance Criteria:**

**Given** a creator has completed an approved task
**When** tier progression is recalculated
**Then** system checks advancement criteria for next tier: Probationary→Junior (10 approvals, 4.0+ avg), Junior→Mid-Level (30, 4.2+), Mid-Level→Senior (100, 4.5+), Senior→Expert (300, 4.7+)
**And** if criteria met, tier is automatically updated
**And** tier multiplier is updated: Junior 0.9x, Mid-Level 1.0x, Senior 1.25x, Expert 1.5x
**And** tier promotion timestamp is recorded
**And** Socket.io event notifies creator: "Congratulations! You've advanced to [tier]!"
**And** achievement notification displays with confetti animation
**And** tier badge updates immediately in creator profile
**And** tier advancement is logged in audit trail
**And** promotion unlocks access to higher-tier tasks (Rush, Express)
**And** next tier criteria are displayed: "75/100 approvals to Senior"

---

### Story 6.3: Admin Manual Tier Promotion/Demotion

As an admin,
I want to manually promote or demote creator tiers,
So that I can intervene for exceptional cases or quality issues.

**Acceptance Criteria:**

**Given** I am an admin viewing a creator profile
**When** I manually adjust tier level
**Then** "Adjust Tier" button is available
**And** clicking "Adjust Tier" opens modal with current tier and dropdown for new tier
**And** justification field is required (minimum 100 characters)
**And** justification prompts explain when manual adjustments are appropriate
**And** clicking "Confirm Tier Change" executes Prisma transaction: update tier, update multiplier, create TierAdjustment record with adminId, oldTier, newTier, justification, timestamp
**And** Socket.io event notifies creator: "Your tier has been adjusted to [tier] by admin."
**And** email notification explains tier change with justification (if demotion)
**And** tier change is logged in audit trail
**And** admin dashboard shows history of all manual tier adjustments
**And** manual adjustments are flagged for quarterly review

---

### Story 6.4: Apply Tier Multiplier to Task Payouts

As the system,
I want to apply tier multipliers to task payouts automatically,
So that creators are compensated according to their tier level.

**Acceptance Criteria:**

**Given** a task is QA approved
**When** payout is calculated
**Then** base payout is retrieved from task configuration (e.g., $50 for Blog Post)
**And** creator's current tier multiplier is retrieved (0.8x - 1.5x)
**And** final payout is calculated: basePayout × tierMultiplier
**And** calculation example: $50 × 1.25x (Senior) = $62.50
**And** rounding rules applied: round to 2 decimal places using banker's rounding (round half to even)
**And** rounding examples: $62.125 → $62.12, $62.135 → $62.14, $62.145 → $62.14, $62.155 → $62.16
**And** currency is stored as integer cents in database: $62.50 → 6250 cents (prevents floating-point errors)
**And** all monetary calculations use integer arithmetic: (basePayoutCents × tierMultiplier) / 100
**And** display converts cents to dollars: 6250 cents → "$62.50"
**And** payout calculation is atomic and accurate (NFR-R6: 100% accuracy, zero floating-point drift)
**And** payout record is created with: taskId, creatorId, basePayoutCents, tierMultiplier, finalPayoutCents, calculatedAt
**And** payout record is immutable (cannot be edited after creation)
**And** payout is added to creator's weekly earnings total (sum of finalPayoutCents)
**And** creator earnings dashboard displays: base payout, tier multiplier, final payout (all formatted as USD)
**And** tier multiplier is clearly labeled: "Your [tier] multiplier: 1.25x"
**And** payout calculation is logged in audit trail with exact cent values

---

### Story 6.5: Calculate Weekly Earnings with Audit Trail

As the system,
I want to calculate weekly earnings for each creator with full audit trail,
So that payouts are transparent and reconcilable.

**Acceptance Criteria:**

**Given** the week ends (Sunday 11:59 PM UTC)
**When** BullMQ job `calculate-weekly-earnings` runs
**Then** job identifies all creators with approved tasks in the past week
**And** for each creator, sum all task payouts: SUM(finalPayout WHERE approvedAt BETWEEN week_start AND week_end)
**And** weekly earnings record is created: WeeklyEarnings { creatorId, weekStart, weekEnd, totalEarnings, taskCount, createdAt }
**And** audit trail includes: individual task payouts, tier multipliers applied, sum calculation
**And** earnings calculation is 100% accurate (NFR-R6)
**And** earnings are validated against individual payout records (checksum verification)
**And** if validation fails, admin alert is triggered
**And** weekly earnings are displayed in creator dashboard: "This week: $450 from 9 approved tasks"
**And** earnings breakdown shows per-task payouts
**And** job logs completion metrics: creators paid, total amount, errors
**And** job runs every Monday at 12:01 AM UTC (start of new week)

---

### Story 6.6: Weekly Payout Batch Processing (Stripe + M-Pesa)

As the system,
I want to process weekly payout batches every Friday,
So that creators receive payments reliably.

**Acceptance Criteria:**

**Given** it is Friday 8:00 AM UTC
**When** BullMQ job `weekly-payout-batch` executes
**Then** job identifies all creators with weekly earnings > $0
**And** creators are grouped by payment method: Stripe vs M-Pesa
**And** for each creator, payout job is enqueued: `process-stripe-payout` or `process-mpesa-payout`
**And** payout jobs execute in parallel (max 50 concurrent)
**And** batch processing completes by Friday 11:59 PM UTC (NFR-R7)
**And** payout status is tracked: PENDING, PROCESSING, COMPLETED, FAILED
**And** successful payouts update WeeklyEarnings status to PAID
**And** failed payouts are queued for retry (see Story 6.9)
**And** admin dashboard displays real-time payout progress: "142/150 payouts completed"
**And** batch completion triggers admin summary email: total paid, success rate, failures
**And** if batch doesn't complete by 11:59 PM, ops team alert is sent (NFR-R7)
**And** batch execution is logged in audit trail

---

### Story 6.7: Stripe Payout Integration

As the system,
I want to process payouts via Stripe,
So that creators with Stripe accounts receive weekly payments.

**Acceptance Criteria:**

**Given** a creator has Stripe as preferred payment method
**When** `process-stripe-payout` job executes
**Then** Stripe SDK is used to create payout
**And** payout request includes: amount (in cents), currency (USD), destination (creator's Stripe account ID)
**And** idempotency key is generated using uuidv4() to prevent duplicate payouts
**And** Stripe API call is made: `stripe.payouts.create({ amount, currency, destination }, { idempotencyKey })`
**And** if payout succeeds, Stripe payout ID is stored
**And** if payout fails, error message is stored and retry is queued
**And** payout status is updated: COMPLETED or FAILED
**And** creator receives notification: "Your $450 payout has been sent via Stripe. Arrives in 1-2 business days."
**And** payout record is created with Stripe payout ID and timestamp
**And** webhook listener `/api/webhooks/stripe` handles payout status updates
**And** Stripe webhook verifies signature before processing
**And** payout is logged in audit trail
**And** Stripe integration meets 99.9% SLA (NFR-I9)

---

### Story 6.8: M-Pesa Payout Integration

As the system,
I want to process payouts via M-Pesa Daraja API,
So that creators in Kenya/Tanzania receive weekly payments.

**Acceptance Criteria:**

**Given** a creator has M-Pesa as preferred payment method
**When** `process-mpesa-payout` job executes
**Then** M-Pesa Daraja API B2C endpoint is called
**And** payout request includes: amount (KES), mobile number (+254XXXXXXXXX), occasion ("Weekly Creator Payout"), remarks
**And** M-Pesa authentication token is obtained via OAuth (consumer key + secret)
**And** B2C request is made: `POST /mpesa/b2c/v1/paymentrequest`
**And** M-Pesa ConversationID and OriginatorConversationID are stored
**And** M-Pesa callback URL is provided: `/api/webhooks/mpesa`
**And** callback handler matches ConversationID to payout record
**And** if payout succeeds, M-Pesa TransactionID is stored
**And** if payout fails, error code is stored and manual retry is flagged (NFR-I3)
**And** payout status is updated: COMPLETED or FAILED
**And** creator receives SMS notification: "You've received KSh 45,000 from jabur"
**And** admin can manually retry failed M-Pesa payouts if API is down >4 hours (NFR-I3)
**And** payout is logged in audit trail
**And** M-Pesa integration meets 99.9% SLA (NFR-I9)

---

### Story 6.9: Failed Payment Retry Queue

As the system,
I want to automatically retry failed payments,
So that creators receive payouts even if initial attempts fail.

**Acceptance Criteria:**

**Given** a payout has failed (Stripe or M-Pesa)
**When** failure is detected
**Then** payout is added to retry queue
**And** retry strategy: exponential backoff (1 hour, 4 hours, 24 hours, 72 hours, 7 days)
**And** BullMQ job `retry-failed-payout` executes at scheduled intervals
**And** job attempts to reprocess payout using original payment method
**And** if retry succeeds, payout status is updated to COMPLETED
**And** if retry fails, next retry is scheduled
**And** after 7-day retry window (NFR-R8), payout is marked as MANUAL_INTERVENTION_REQUIRED
**And** admin receives alert: "Payout failed after 5 retries. Manual action needed."
**And** admin can manually process payout or contact creator to update payment method
**And** retry attempts are logged in audit trail
**And** creator receives notification on final retry failure: "We couldn't process your payout. Please update your payment method."
**And** failed payouts are tracked in admin dashboard
**And** fallback queuing system stores failed Stripe payouts (NFR-I2)

---

### Story 6.10: Generate 1099 Tax Forms (US Creators)

As the system,
I want to generate 1099 tax forms for US-based creators annually,
So that tax compliance requirements are met.

**Acceptance Criteria:**

**Given** it is December 31st
**When** BullMQ job `generate-1099-forms` executes
**Then** job identifies all US-based creators (creators with US tax ID or address)
**And** for each US creator, annual earnings are calculated: SUM(payouts WHERE year = current_year)
**And** if annual earnings ≥ $600, 1099-NEC form is generated
**And** 1099-NEC includes: creator name, address, tax ID (if provided), total earnings, company EIN
**And** PDF form is generated using PDF generation library
**And** 1099 form is stored in database and S3
**And** creator receives email notification: "Your 2024 1099 form is ready. Download from dashboard."
**And** creator can download 1099 from earnings dashboard
**And** admin can bulk download all 1099 forms as ZIP
**And** 1099 forms are retained for 7 years (NFR-C8)
**And** forms are submitted to IRS electronically (if API available)
**And** job logs completion: forms generated, total reportable income, errors
**And** if creator has no tax ID, form generation is skipped and admin is alerted

---

### Story 6.11: Achievement Notifications on Tier Advancement

As a creator,
I want to receive celebratory notifications when I advance tiers,
So that I feel recognized for my achievements.

**Acceptance Criteria:**

**Given** I have been auto-promoted to a new tier
**When** tier advancement occurs
**Then** Socket.io event triggers in-app notification
**And** notification displays with confetti animation or celebratory UI
**And** notification message: "🎉 Congratulations! You've advanced to [tier]!"
**And** notification includes: new tier badge, new multiplier (e.g., "1.25x"), next tier criteria
**And** email notification is sent with subject: "You've advanced to [tier]!"
**And** email includes: achievement summary, earnings increase example, next tier goals
**And** notification persists in notification center until dismissed
**And** tier badge updates immediately in creator profile and dashboard
**And** achievement is recorded in creator's profile history
**And** social share option: "Share your achievement on Twitter/LinkedIn"
**And** advancement notification is sent within 5 seconds of tier change (real-time via Socket.io)
**And** notification is mobile-friendly (push notification if mobile app exists)

---

## Epic 7: Admin Operations & Platform Management

**Epic Goal:** Provide admins with comprehensive tools for dispute resolution, platform monitoring, account flagging, and audit log access.

**FRs Covered:** FR48, FR49, FR50, FR51, FR52, FR53, FR54, FR55, FR56, FR64, FR65

### Story 7.1: Comprehensive Dispute Context View

As an admin,
I want to access a comprehensive dispute context view with all evidence,
So that I can make informed decisions on disputes.

**Acceptance Criteria:**

**Given** I am an admin investigating a dispute
**When** I navigate to the dispute view
**Then** single query aggregates all evidence with deep Prisma includes
**And** dispute view displays: original audio player with waveform, complete transcript, all submissions (original + revisions), full message history (uploader ↔ creator ↔ QA), QA review scores, task metadata (deadlines, tier, pricing)
**And** audio player streams from S3 CloudFront URL
**And** waveform is interactive (click to seek)
**And** transcript utterances are clickable
**And** submission versions are clearly labeled: "Original", "Revision 1", "Revision 2"
**And** QA feedback is displayed inline with submissions
**And** message timeline is chronologically ordered
**And** dispute context loads within 3 seconds
**And** all data is read-only (admin cannot edit evidence)
**And** dispute context is exportable as PDF for legal records

---

### Story 7.2: Audio and Submission History Review

As an admin,
I want to review audio and submission history with timestamps,
So that I can trace the complete task lifecycle.

**Acceptance Criteria:**

**Given** I am reviewing a dispute or task
**When** I access audio and submission history
**Then** audio metadata is displayed: upload timestamp, file size, duration, format
**And** audio lifecycle is tracked: uploaded → transcribed → available → claimed → submitted → QA reviewed → delivered
**And** each submission version is accessible: original, revision 1, revision 2, revision 3
**And** submission diffs are highlighted: "Added 3 paragraphs", "Changed heading", "Removed 2 sentences"
**And** QA feedback is attached to each submission version
**And** timeline view shows all events: upload, claim, submission, QA review, revision request, resubmission
**And** timestamps are displayed in admin's timezone with UTC option
**And** audio deletion status is displayed: "Audio deleted on [date] per 7-day policy"
**And** if audio deleted, admin sees notice: "Audio no longer available (deleted per retention policy)"
**And** submission history is exportable as JSON or CSV

---

### Story 7.3: Full Message History Access

As an admin,
I want to access full message history between all parties,
So that I can understand communication context during disputes.

**Acceptance Criteria:**

**Given** I am investigating a dispute
**When** I access message history
**Then** all messages are displayed chronologically: uploader → creator, creator → QA, QA → uploader, admin → any party
**And** message thread view shows conversation flow
**And** each message displays: sender name, sender role, timestamp, message content
**And** message search functionality filters by keyword, sender, date range
**And** message attachments are accessible (screenshots, files)
**And** deleted messages are marked as "[Deleted by user]" but original content is retained for admin view
**And** message history is read-only (admin cannot edit past messages)
**And** admin can send new messages to any party from dispute view
**And** message history is exportable for dispute documentation
**And** all messages are retained for 1 year (NFR-S8)

---

### Story 7.4: Decision Support Tools with Templates

As an admin,
I want decision support tools with templated resolution options,
So that I can efficiently resolve disputes consistently.

**Acceptance Criteria:**

**Given** I am resolving a dispute
**When** I use decision support tools
**Then** decision templates are available: Approve Uploader Request (full refund), Approve Creator Appeal (payout + bonus), Split Decision (partial refund), Dismiss Dispute (no action)
**And** each template includes: suggested resolution, communication draft to both parties, refund amount calculation (if applicable)
**And** templates are customizable with specific details
**And** decision wizard guides admin through resolution steps
**And** AI-assisted recommendation suggests resolution based on evidence (optional feature)
**And** decision preview shows: actions to be taken, emails to be sent, refund amounts, payout adjustments
**And** "Confirm Resolution" button executes atomic transaction: update task status, process refund, adjust payouts, send notifications, log decision
**And** resolution timestamp is recorded
**And** resolution justification is required (minimum 200 characters)
**And** resolution is logged in audit trail
**And** both parties receive resolution notification via email + in-app

---

### Story 7.5: Process Refunds with Tracking

As an admin,
I want to process refunds with full tracking,
So that financial transactions are transparent and auditable.

**Acceptance Criteria:**

**Given** I am resolving a dispute requiring a refund
**When** I initiate a refund
**Then** refund modal displays: task details, uploader payment method, refund amount (full or partial), refund reason
**And** refund reason options: Quality Issue, Missed Deadline, Duplicate Task, Policy Violation, Other (with text field)
**And** refund amount is pre-filled based on original payment but admin can adjust
**And** clicking "Process Refund" executes: Stripe refund API call (if original payment was Stripe), M-Pesa reversal (if possible) or manual payout flag
**And** refund status is tracked: PENDING, PROCESSING, COMPLETED, FAILED
**And** successful refund creates RefundRecord: { taskId, uploaderId, amount, reason, processedBy (adminId), timestamp }
**And** refund is immutable (cannot be edited after processing)
**And** uploader receives notification: "Your refund of $50 has been processed. Arrives in 5-7 business days."
**And** refund is displayed in uploader's transaction history
**And** refund is logged in audit trail
**And** if refund fails, admin receives alert for manual processing
**And** refunds are included in financial reporting dashboard

---

### Story 7.6: Admin Analytics Dashboard

As an admin,
I want to view comprehensive analytics,
So that I can monitor platform health and identify trends.

**Acceptance Criteria:**

**Given** I am an admin
**When** I access the analytics dashboard
**Then** dashboard displays key metrics: quality trends (approval rates, avg scores, rejection reasons), refund rates, creator performance (tier distribution, payout volumes), task throughput, integration health (AssemblyAI uptime, Stripe/M-Pesa success rates)
**And** time range selector: Last 7 days, Last 30 days, Last 90 days, Custom range
**And** charts visualize trends over time: line charts for trends, bar charts for distributions, pie charts for breakdowns
**And** aggregate queries use Redis caching (5-min TTL) for performance
**And** quality metrics show: first-pass approval rate, average QA score by content type, top rejection reasons
**And** financial metrics show: total revenue, total payouts, refund rate (%), average task value
**And** creator metrics show: tier distribution, average earnings by tier, top performers
**And** task metrics show: tasks created vs completed, average turnaround time by tier, bottlenecks (stuck in QA, unclaimed tasks)
**And** integration health shows: transcription success rate, payment success rate, uptime percentages
**And** dashboard exports as PDF report
**And** real-time updates via Socket.io (optional toggle)

---

### Story 7.7: Manually Flag Accounts for Investigation

As an admin,
I want to manually flag accounts for investigation,
So that I can track suspicious behavior or policy violations.

**Acceptance Criteria:**

**Given** I am reviewing an account (uploader or creator)
**When** I flag the account
**Then** "Flag Account" button is available in account view
**And** flagging modal includes: flag category (Fraud, Quality Issues, Harassment, Payment Issues, Policy Violation), severity (Low, Medium, High, Critical), description (minimum 200 characters), evidence links
**And** clicking "Submit Flag" executes: create AccountFlag record, mark account with `flagged: true`, send alert to admin team
**And** flagged accounts are highlighted in admin views (yellow border for Medium, red for High/Critical)
**And** account page displays all active flags with details
**And** admin can add notes to existing flags
**And** admin can resolve flags: "Resolved - Warning Sent", "Resolved - Account Suspended", "False Flag - Dismissed"
**And** flag resolution requires justification
**And** flagging history is retained permanently
**And** flagged accounts appear in admin dashboard: "5 accounts flagged for review"
**And** flagging is logged in audit trail

---

### Story 7.8: Complete Audit Log Access

As an admin,
I want to access complete audit logs,
So that I can investigate security events and compliance audits.

**Acceptance Criteria:**

**Given** I am an admin
**When** I access audit logs
**Then** audit log displays: security events (login attempts, MFA changes, session revocations), role changes (tier promotions/demotions, role assignments), payment transactions (payouts, refunds, failed attempts), dispute resolutions, admin actions
**And** audit log table shows: timestamp, event type, actor (user ID + role), resource (task ID, account ID), action (created, updated, deleted), metadata (JSON with details)
**And** filtering options: event type, actor, date range, resource type
**And** search functionality: keyword search in metadata
**And** pagination loads 50 events per page
**And** event details modal shows complete metadata JSON
**And** audit logs are retained for 1 year (NFR-S8)
**And** logs older than 1 year are archived to S3 for 7-year compliance retention
**And** audit log export as CSV for compliance audits
**And** audit log is read-only (cannot be edited or deleted)
**And** audit log meets SOC 2 compliance requirements

---

### Story 7.9: Full Read Access Across Roles (RLS Bypass)

As an admin,
I want full read access to all data across roles,
So that I can resolve disputes and investigate issues.

**Acceptance Criteria:**

**Given** I am an admin
**When** I query data from any table
**Then** PostgreSQL RLS policy `admin_full_read` allows read access: `CREATE POLICY admin_full_read ON [table] FOR SELECT USING (auth.role() = 'ADMIN')`
**And** admin can read uploader data: audio uploads, tasks created, payments made
**And** admin can read creator data: claimed tasks, submissions, earnings, payout history
**And** admin can read QA Editor data: reviews conducted, scores given, override history
**And** admin can read other admin data: actions taken, flags created, disputes resolved
**And** admin read access is enforced at database level (RLS)
**And** admin read access is enforced at application middleware level
**And** admin CANNOT write to user data (write operations require explicit admin actions with logging)
**And** admin read queries are logged in audit trail
**And** admin dashboard displays role-specific views: "Viewing as Admin (Full Access)"
**And** admin can filter data by role: "Show only Creator data", "Show only Uploader data"

---

### Story 7.10: Log All Admin Actions

As the system,
I want to log all admin actions with timestamps,
So that admin activity is transparent and auditable.

**Acceptance Criteria:**

**Given** an admin performs any action
**When** the action executes
**Then** middleware interceptor captures all admin Server Actions
**And** audit log entry is created: AuditLog { userId (adminId), action, resourceType, resourceId, metadata (JSON), timestamp }
**And** logged actions include: tier promotions/demotions, account flags, dispute resolutions, refund processing, manual payout retries, account suspensions/bans, QA review overrides
**And** metadata includes: old value → new value (for updates), justification text, affected user IDs
**And** audit log entries are immutable (cannot be edited or deleted)
**And** audit log entries are created atomically with action (Prisma transaction)
**And** if logging fails, action is rolled back (ensures no unlogged admin actions)
**And** admin actions are logged with timestamps (NFR-S7)
**And** admin can view their own action history: "My Actions (Last 30 Days)"
**And** super admin can view all admin action history
**And** action logs are retained for 1 year minimum (NFR-S8)

---

### Story 7.11: Auto-Flag Suspicious Patterns (Hourly Detection)

As the system,
I want to automatically detect suspicious patterns within 1 hour,
So that admins can investigate potential fraud or quality issues.

**Acceptance Criteria:**

**Given** the platform is operational
**When** BullMQ job `detect-suspicious-patterns` runs hourly
**Then** job detects quality drops: creator avg score decreases by >1.0 point in past week
**And** job detects deadline misses: creator misses >3 deadlines in past month
**And** job detects plagiarism spikes: creator has >2 submissions with plagiarism score <90% in past week
**And** job detects multi-account patterns: 2+ accounts with same device fingerprint, same payment method, or same IP within 24hrs
**And** job detects unusual payout patterns: creator earnings spike >300% week-over-week
**And** job detects account farming: new creator with >10 tasks claimed within first 48 hours
**And** flagging criteria are configurable by admin
**And** detected patterns create AutoFlag record { accountId, pattern, severity, detectedAt, metadata }
**And** admin receives alert: "5 suspicious patterns detected. Review flagged accounts."
**And** flagged accounts appear in admin dashboard with pattern details
**And** admin can review and take action: investigate, dismiss as false positive, suspend account
**And** pattern detection runs every hour (NFR-S9: within 1 hour)
**And** detection job logs completion metrics: patterns detected, accounts flagged

---

### Story 7.12: Integration Failure Alerts (5-Minute Detection)

As the system,
I want to detect integration failures within 5 minutes,
So that admins can respond quickly to service outages.

**Acceptance Criteria:**

**Given** external integrations are running
**When** BullMQ job `check-integration-health` runs every 5 minutes
**Then** job pings AssemblyAI health endpoint
**And** job monitors Stripe API response times
**And** job monitors M-Pesa API availability
**And** job checks S3 upload success rate (last hour)
**And** job monitors BullMQ queue health (pending jobs, failed jobs)
**And** failure thresholds: AssemblyAI >5% failure rate, Stripe >1% failure rate, M-Pesa >5% failure rate, S3 >2% failure rate, BullMQ queue >100 pending jobs
**And** if threshold breached, alert is triggered
**And** alert email is sent to ops team: "ALERT: AssemblyAI integration failing (12% error rate)"
**And** alert includes: integration name, failure rate, error samples, suggested actions
**And** Slack/Discord webhook notification (optional configuration)
**And** admin dashboard displays integration health status: green (healthy), yellow (degraded), red (failing)
**And** integration health history is logged for trend analysis
**And** alerts are sent within 5 minutes of detection (NFR-I6)
**And** job runs every 5 minutes
**And** alert fatigue prevention: max 1 alert per integration per hour

---

### Story 7.13: Stripe Webhook Processing

As the system,
I want to process Stripe webhooks for payment confirmations,
So that creator payouts are tracked and confirmed automatically.

**Acceptance Criteria:**

**Given** Stripe webhook is configured (Story 1.9) and weekly payout batch is processed (Story 6.6)
**When** Stripe webhook fires for payment events
**Then** webhook endpoint `/api/webhooks/stripe` receives POST request with event payload
**And** webhook validates Stripe signature using `STRIPE_WEBHOOK_SECRET` before processing (prevents spoofing per NFR-S1)
**And** if signature invalid, respond with 401 Unauthorized and log security incident
**And** webhook event types handled: `payout.paid`, `payout.failed`, `payout.canceled`
**And** if event type `payout.paid`: update PayoutRecord status to `CONFIRMED`, set `confirmedAt` timestamp
**And** if event type `payout.failed`: update PayoutRecord status to `FAILED`, store error reason, trigger admin alert
**And** if event type `payout.canceled`: update PayoutRecord status to `CANCELED`, log cancellation reason
**And** webhook updates creator notification: "Your payout of $340 has been successfully processed!"
**And** failed payouts trigger fallback: queue for manual retry, notify ops team within 5 minutes (per NFR-I6)
**And** webhook idempotency enforced: check `event.id` in database before processing (Stripe can send duplicate events)
**And** duplicate events respond with 200 OK but skip processing
**And** webhook responds within 5 seconds to prevent Stripe retries
**And** webhook processing errors are logged with full stack trace and queued to DLQ for manual review
**And** meets NFR-I2 (fallback queuing for failed transactions)

---

### Story 7.14: M-Pesa Callback Processing

As the system,
I want to process M-Pesa callbacks for payment confirmations,
So that Kenyan creators receive payouts reliably.

**Acceptance Criteria:**

**Given** M-Pesa is configured (Story 1.9) and B2C payment initiated (Story 6.6)
**When** M-Pesa callback fires for payment result
**Then** callback endpoint `/api/webhooks/mpesa` receives POST request with result payload
**And** callback validates request origin (M-Pesa IP whitelist or API key validation)
**And** callback payload is parsed: `{ ConversationID, OriginatorConversationID, ResultCode, ResultDesc, TransactionID }`
**And** PayoutRecord is located using `ConversationID` match (per ARCH-51)
**And** if `ResultCode === 0` (success): update PayoutRecord status to `CONFIRMED`, store `TransactionID`, set `confirmedAt`
**And** if `ResultCode !== 0` (failure): update PayoutRecord status to `FAILED`, store `ResultDesc` as error reason
**And** successful payout updates creator notification: "M-Pesa payout of KSh 34,000 sent to +254...! Transaction ID: ABC123"
**And** failed payout triggers fallback: if failure reason is "insufficient balance", retry in 4 hours (per NFR-I3)
**And** if failure reason is "invalid recipient", mark for manual review and notify ops team
**And** after 4-hour window of consecutive failures, manual payout capability is triggered (admin approves manual transfer)
**And** callback idempotency enforced: check `ConversationID` in database before processing
**And** duplicate callbacks respond with 200 OK but skip processing
**And** callback responds within 5 seconds to prevent M-Pesa retries
**And** callback processing errors are logged with full error details and queued to DLQ
**And** meets NFR-I3 (manual payout capability if API failures exceed 4 hours)

---

## Epic 8: Admin Comped Task Management

**Goal:** Enable admins to create complimentary (comped) tasks for partnership trials, sales demos, and creator training, with budget controls and approval workflows to manage customer acquisition costs while maintaining quality standards.

**FRs covered:** FR-ADMIN-01 through FR-ADMIN-42

### Story 8.1: Create Comped Task Batch with Business Context

As an admin,
I want to create comped task batches with business labels,
So that I can track customer acquisition investments and partnership trials.

**Acceptance Criteria:**

**Given** I am authenticated as admin
**When** I navigate to Admin Dashboard > Comped Tasks > Create Batch
**Then** form displays with fields: Task Type (dropdown), Business Label (required, 100 char max), Audio Source (upload or reference existing)
**And** Task Type options are: "Partnership Trial", "Sales Demo", "Creator Training"
**And** Business Label field displays examples: "Acme Corp Trial - Q1 2024", "Sales Demo for XYZ Enterprise", "New Creator Onboarding Cohort 5"
**And** Business Label is required (validation error if empty)
**And** Business Label is limited to 100 characters (validation error if exceeded)
**And** form includes Audio Source selector: "Upload New Audio" or "Reference Existing Upload"
**And** if "Upload New Audio" selected, file upload widget displays (same as uploader interface, max 500MB, 3hrs duration per FR9)
**And** if "Reference Existing Upload" selected, searchable dropdown displays recent uploads (last 90 days) with metadata: filename, duration, upload date, uploader name
**And** form is responsive and accessible (WCAG 2.1 AA)
**And** form validation provides real-time feedback
**And** batch creation is logged: `{ adminId, taskType, businessLabel, audioSource, createdAt }`
**And** meets FR-ADMIN-01, FR-ADMIN-02, FR-ADMIN-03, FR-ADMIN-04

### Story 8.2: Configure Task Assignment Rules

As an admin,
I want to configure format, instructions, and assignment rules for comped tasks,
So that I can ensure tasks are routed to appropriate creators.

**Acceptance Criteria:**

**Given** I am creating a comped task batch
**When** I proceed to Configuration step
**Then** form displays: Output Format (multi-select from 9 types per FR11), Custom Instructions (rich text, 1000 char max), Assignment Rules (tier level, specific creators)
**And** Output Format checkboxes include: Executive Summaries, Key Insights, Action Items, Reflection Questions, Social Media Packs, Blog Posts, Fact-Check Reports, Show Notes, Newsletter Segments
**And** at least one output format must be selected (validation)
**And** Custom Instructions field supports rich text with formatting (bold, italic, lists, links)
**And** Custom Instructions placeholder: "Additional guidance for creators (e.g., target audience, tone, specific requirements)"
**And** Assignment Rules section includes: Minimum Tier Level (dropdown: Any, Junior+, Mid-Level+, Senior+, Expert only), Specific Creators (multi-select from active creators)
**And** if Specific Creators selected, only those creators see the task in their queue
**And** if Minimum Tier Level set, only creators at that tier or higher can claim the task (per FR47)
**And** configuration is saved to batch metadata: `{ formats, customInstructions, assignmentRules }`
**And** form validation prevents proceeding without at least one output format
**And** meets FR-ADMIN-05, FR47

### Story 8.3: Calculate and Display Cost Estimates

As an admin,
I want to see cost estimates before creating a comped batch,
So that I can make informed budget decisions.

**Acceptance Criteria:**

**Given** I have configured a comped task batch
**When** I proceed to Review step
**Then** cost estimator calculates estimated platform cost based on average creator payouts by tier
**And** calculation uses baseline payout amounts: Executive Summary ($12), Key Insights ($10), Action Items ($8), Reflection Questions ($7), Social Media Pack ($15), Blog Post ($20), Fact-Check Report ($18), Show Notes ($10), Newsletter Segment ($12)
**And** calculation applies tier multipliers: Probationary 0.8x, Junior 0.9x, Mid-Level 1.0x, Senior 1.25x, Expert 1.5x (per FR39)
**And** if Assignment Rules specify tier level, estimator uses that tier's average multiplier
**And** if Assignment Rules specify specific creators, estimator uses those creators' current tiers
**And** estimator displays: Number of Tasks, Estimated Cost Per Task, Total Estimated Cost, Current Budget Remaining, Budget After Creation
**And** if batch would exceed monthly budget, warning displays: "This batch exceeds your monthly budget. Current remaining: $450. Estimated cost: $600."
**And** if within budget, confirmation message displays: "Budget sufficient. Remaining after creation: $850"
**And** cost estimate is displayed before final submission
**And** estimated cost is saved to batch metadata: `{ estimatedCost, calculatedAt }`
**And** meets FR-ADMIN-06

### Story 8.4: Set and Track Monthly Budget

As a platform administrator,
I want to set a monthly comped task budget,
So that I can control customer acquisition costs.

**Acceptance Criteria:**

**Given** I am authenticated as platform admin (superuser role)
**When** I navigate to Admin Dashboard > Settings > Comped Task Budget
**Then** budget configuration form displays: Current Monthly Budget, Budget Period (current month), Budget Usage (spent amount and percentage), Next Reset Date (1st of next month)
**And** Current Monthly Budget field is editable with validation: minimum $0, maximum $10,000, whole dollars only
**And** default budget is $2,000 (if not previously set)
**And** budget updates are logged: `{ adminId, oldBudget, newBudget, updatedAt, reason }`
**And** budget reset happens automatically on first day of each month via cron job
**And** budget reset creates audit log entry: `{ action: 'budget_reset', previousMonth, previousSpent, newBudget }`
**And** budget configuration is stored in system settings table (single row, key-value)
**And** budget updates take effect immediately
**And** only platform admins can modify budget (role check)
**And** meets FR-ADMIN-13, FR-ADMIN-16

### Story 8.5: Validate Budget Before Batch Creation

As the system,
I want to validate comped batch creation against monthly budget,
So that admins cannot exceed approved spending limits.

**Acceptance Criteria:**

**Given** admin is submitting a comped task batch
**When** system validates budget
**Then** system fetches: Current Monthly Budget, Month-To-Date Spent, Pending Approval Batches Total
**And** system calculates: Available Budget = Monthly Budget - MTD Spent - Pending Batches
**And** if Estimated Batch Cost > Available Budget, validation fails
**And** validation failure displays error: "Insufficient budget. Available: $450. Required: $600. Please reduce batch size or request budget increase."
**And** validation failure prevents batch creation (form submission blocked)
**And** if Estimated Batch Cost <= Available Budget, validation passes
**And** validation success allows batch creation to proceed
**And** validation runs before approval workflow (blocks early)
**And** budget validation is atomic (prevents race conditions with concurrent batch creation)
**And** validation result is logged: `{ batchId, estimatedCost, availableBudget, validationResult, timestamp }`
**And** meets FR-ADMIN-07, FR-ADMIN-15

### Story 8.6: Executive Budget Override

As an executive,
I want to override budget limits with justification,
So that I can approve strategic customer acquisition investments.

**Acceptance Criteria:**

**Given** a comped batch exceeds monthly budget
**When** executive reviews override request
**Then** override form displays: Batch Details, Budget Overage Amount, Business Justification (required, 500 char max), Override Approval (checkbox)
**And** Business Justification field is required (validation error if empty)
**And** Business Justification examples: "Strategic partnership with Fortune 500 client - potential $500K ARR", "High-value sales demo for enterprise prospect"
**And** override approval checkbox must be checked to proceed
**And** executive role is required (role check: executive, CEO, CFO)
**And** override creates audit log entry: `{ executiveId, batchId, overrageAmount, justification, approvedAt }`
**And** override allows batch to proceed despite budget limit
**And** overridden batches are flagged in monthly audit report
**And** override is visible in budget dashboard: "2 executive overrides this month totaling $1,200"
**And** meets FR-ADMIN-17

### Story 8.7: Auto-Approve Small Batches (<10 Tasks)

As the system,
I want to auto-approve comped batches with fewer than 10 tasks,
So that admins can create small batches without additional approval overhead.

**Acceptance Criteria:**

**Given** admin submits a comped task batch
**When** batch has fewer than 10 tasks
**Then** system auto-approves the batch (no additional approval required)
**And** batch status is immediately set to "approved"
**And** tasks are immediately created and enter task routing queue (per FR-ADMIN-18)
**And** auto-approval creates audit log entry: `{ batchId, taskCount, approvalType: 'auto', approvedAt, adminId }`
**And** admin receives confirmation: "Batch created and auto-approved (8 tasks). Tasks are now available to creators."
**And** auto-approval respects budget validation (must pass budget check first)
**And** auto-approval threshold is configurable (default: 10 tasks, max: 20 tasks)
**And** meets FR-ADMIN-08

### Story 8.8: Require Second Admin Approval (10-50 Tasks)

As an admin,
I want batches with 10-50 tasks to require second admin approval,
So that we have peer review for medium-sized customer acquisition investments.

**Acceptance Criteria:**

**Given** admin submits a comped batch with 10-50 tasks
**When** batch is submitted
**Then** batch status is set to "pending_approval"
**And** system creates approval request: `{ batchId, requestedBy, taskCount, estimatedCost, businessJustification }`
**And** business justification is required (form field during submission, 500 char max)
**And** notification is sent to all other admins: "Approval needed: John Doe requests approval for 25-task comped batch ($450 estimated cost). Review now."
**And** notification includes: requester name, task count, estimated cost, business justification
**And** approver navigates to Admin Dashboard > Comped Tasks > Pending Approvals
**And** approver sees batch details: Task Type, Business Label, Audio Files, Assignment Rules, Budget Impact Analysis
**And** Budget Impact Analysis displays: Current Budget Remaining ($1,200), Estimated Batch Cost ($450), Budget After Approval ($750), Percentage of Monthly Budget (22%)
**And** approver can: Approve (with optional comment), Reject (with required reason), Request More Info
**And** if approved, batch status changes to "approved" and tasks are created
**And** if rejected, batch status changes to "rejected" and requester is notified with reason
**And** approval/rejection creates audit log entry: `{ batchId, approverId, decision, reason, approvedAt }`
**And** requester receives notification of decision
**And** approval workflow prevents self-approval (requester cannot approve their own batch)
**And** meets FR-ADMIN-09, FR-ADMIN-11, FR-ADMIN-12

### Story 8.9: Executive Approval for Large Batches (>50 Tasks)

As a platform executive,
I want to review and approve comped batches with more than 50 tasks,
So that large customer acquisition investments receive executive oversight.

**Acceptance Criteria:**

**Given** admin submits a comped batch with more than 50 tasks
**When** batch is submitted
**Then** batch status is set to "pending_executive_approval"
**And** system creates executive approval request: `{ batchId, requestedBy, taskCount, estimatedCost, businessJustification, strategicRationale }`
**And** strategic rationale is required (additional form field for large batches, 1000 char max)
**And** notification is sent to executives (role: executive, CEO, CFO): "Executive approval needed: 75-task comped batch ($1,350 estimated cost) for Acme Corp partnership trial."
**And** notification includes: requester name, task count, estimated cost, business justification, strategic rationale, expected ROI
**And** executive navigates to Admin Dashboard > Comped Tasks > Executive Approvals
**And** executive sees comprehensive batch analysis: Task Breakdown, Budget Impact, Historical Context (previous batches for same partner), Expected ROI Calculation
**And** Expected ROI displays: Estimated Cost ($1,350), Expected Conversion Rate (30%), Estimated ARR if Converted ($50,000), ROI Multiple (37x)
**And** executive can: Approve (with optional comment), Reject (with required reason), Approve with Budget Override (if exceeds budget)
**And** if approved, batch status changes to "approved" and tasks are created
**And** if rejected, batch status changes to "rejected" and requester is notified with executive feedback
**And** approval creates audit log entry: `{ batchId, executiveId, decision, comments, approvedAt }`
**And** executive approvals are highlighted in monthly audit reports
**And** meets FR-ADMIN-10, FR-ADMIN-11, FR-ADMIN-12

### Story 8.10: Route Comped Tasks Through Standard Queue

As the system,
I want comped tasks to enter the same task routing queue as client-paid tasks,
So that creators cannot distinguish comped tasks and quality standards remain consistent.

**Acceptance Criteria:**

**Given** a comped task batch is approved
**When** tasks are created
**Then** each task is created with standard task schema: `{ id, audioId, formats, turnaroundTier: 'standard', assignmentRules, createdAt, batchId, isComped: true }`
**And** isComped flag is stored in database but NEVER exposed to creator API endpoints
**And** tasks are added to `tasks_available` queue (same queue as paid tasks per FR-ADMIN-18)
**And** tasks appear in creator "Available Tasks" page with identical UI (no visual distinction per FR-ADMIN-19)
**And** task card displays: Audio Duration, Output Formats, Custom Instructions, Deadline (24-48hrs standard), Payout Amount (tier-adjusted)
**And** comped tasks do NOT display: "COMPED", "DEMO", "TRIAL", or any indicator
**And** task assignment respects Assignment Rules: tier level filtering (per FR47), specific creator targeting
**And** task claiming flow is identical: creator clicks "Claim Task", task is locked to creator, 48-hour countdown starts
**And** comped tasks have same turnaround requirements as paid tasks (24-48hrs standard per FR12)
**And** creators cannot access batch metadata (business label, task type, admin identity)
**And** API endpoint `/api/creator/tasks/available` filters by creator tier but includes comped tasks matching tier
**And** meets FR-ADMIN-18, FR-ADMIN-19, FR47

### Story 8.11: Apply Identical QA Review Process

As the system,
I want comped tasks to go through identical QA review,
So that quality standards are consistent and creators take them seriously.

**Acceptance Criteria:**

**Given** creator submits a comped task
**When** task enters QA review queue
**Then** task appears in QA Editor dashboard with no visual distinction from paid tasks
**And** QA review interface displays: Audio Player, Transcript, Creator Submission, Rubric Scorecard (6 dimensions per FR31)
**And** QA Editor scores submission using standard rubric: Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%
**And** QA Editor checks plagiarism score (90%+ required per FR22) and AI-detection score (<30% required per FR23)
**And** approval threshold is identical: 4.0/5.0 minimum (per FR33)
**And** if score >= 4.0, QA Editor approves submission (status: "approved")
**And** if score < 4.0, QA Editor rejects submission with actionable feedback (status: "rejected", max 3 revision attempts per FR37)
**And** approved comped tasks count toward creator tier progression (per FR-ADMIN-21)
**And** approved comped tasks add to creator's approved task count and average score (affects tier advancement per FR40)
**And** rejected comped tasks do NOT result in creator payment (identical to paid tasks per FR-ADMIN-22)
**And** rejected comped tasks do NOT count toward tier progression
**And** QA review metadata is identical: `{ taskId, qaEditorId, score, dimensions, feedback, reviewedAt }`
**And** QA Editors cannot see isComped flag (role isolation)
**And** meets FR-ADMIN-20, FR-ADMIN-21, FR-ADMIN-22, FR31, FR33, FR34

### Story 8.12: Enable Task Cancellation Rules

As an admin,
I want to cancel unclaimed comped tasks but protect creator time commitments,
So that I can manage batch costs while respecting creator work.

**Acceptance Criteria:**

**Given** a comped task exists
**When** admin attempts to cancel the task
**Then** system checks task status: unclaimed, claimed, in_progress, submitted, approved
**And** if status is "unclaimed" (not yet claimed by creator), cancellation is allowed
**And** cancellation removes task from available queue and updates status to "cancelled"
**And** cancelled unclaimed task incurs no cost (not included in budget calculations)
**And** cancellation creates audit log: `{ taskId, batchId, adminId, cancelledAt, reason, taskStatus: 'unclaimed' }`
**And** if status is "claimed", "in_progress", "submitted", or "approved", cancellation is BLOCKED
**And** cancellation attempt displays error: "Cannot cancel claimed/in-progress tasks. Creator time commitment must be honored."
**And** if creator has claimed task, cancellation requires different workflow: admin can contact creator to request voluntary withdrawal
**And** admin dashboard displays cancellable tasks: "5 unclaimed tasks in this batch (cancellable). 3 tasks in progress (cannot cancel)."
**And** bulk cancel button is available for unclaimed tasks: "Cancel All Unclaimed Tasks in Batch"
**And** bulk cancel requires confirmation: "Cancel 5 unclaimed tasks? This will reduce batch cost by $120."
**And** meets FR-ADMIN-23, FR-ADMIN-24

### Story 8.13: Include Comped Tasks in Weekly Payout Batch

As the system,
I want to include approved comped tasks in weekly creator payouts,
So that creators receive timely compensation for their work.

**Acceptance Criteria:**

**Given** weekly payout job runs every Friday
**When** job aggregates creator earnings
**Then** job queries all approved tasks (paid and comped) for the week: `SELECT * FROM tasks WHERE status = 'approved' AND approvedAt >= CURRENT_DATE - INTERVAL '7 days'`
**And** job calculates payout per task: baseAmount * tierMultiplier
**And** job aggregates by creator: `{ creatorId, totalEarnings, taskCount, compedTaskCount, compedEarnings }`
**And** comped task earnings are flagged separately in payout summary: `{ taskId, isComped: true, amount, batchId }`
**And** payout summary displays for admin review: "Total Payouts: $12,450. Comped Tasks: $850 (15 tasks). Paid Tasks: $11,600 (120 tasks)."
**And** comped task payouts are included in payout batch but flagged for financial tracking (per FR-ADMIN-26)
**And** creator receives identical payout notification: "Weekly payout processed: $340 for 8 tasks. Funds will arrive via Stripe on Tuesday."
**And** creator dashboard displays earnings without distinguishing comped vs paid tasks (role blindness)
**And** payout record includes metadata: `{ creatorId, amount, taskIds, compedTaskIds, payoutDate, paymentMethod, status }`
**And** meets FR-ADMIN-25, FR-ADMIN-26, FR43, FR44

### Story 8.14: Admin Review and Approve Comped Payouts

As an admin,
I want to review comped task payouts before weekly batch release,
So that I can verify budget accuracy and prevent fraudulent payouts.

**Acceptance Criteria:**

**Given** weekly payout job has aggregated earnings
**When** admin reviews payout batch before release
**Then** admin dashboard displays payout review interface: Total Payouts, Comped Task Breakdown, Paid Task Breakdown, Budget Impact
**And** Comped Task Breakdown displays: Total Comped Earnings ($850), Number of Comped Tasks (15), Affected Creators (8), Budget Remaining After Payout ($1,150)
**And** admin can drill down into comped task details: creator name, task ID, batch ID, business label, payout amount, QA score
**And** admin can filter by: batch ID, creator, task type (partnership trial, sales demo, creator training)
**And** admin can flag suspicious patterns: same creator completing >50% of comped tasks, unusually high comped earnings for single creator
**And** admin must explicitly approve payout batch: checkbox "I have reviewed comped task payouts and approve release"
**And** approval is required before payout job processes payments (blocks automatic payout)
**And** if admin rejects payout batch, specific tasks can be flagged for investigation
**And** flagged tasks are held from payout and creator is notified: "Your payout for Task #1234 is under review. We'll update you within 48 hours."
**And** admin approval creates audit log: `{ adminId, payoutBatchId, totalAmount, compedAmount, approvedAt }`
**And** after approval, payout job processes Stripe/M-Pesa payments (per FR44)
**And** meets FR-ADMIN-27, FR-ADMIN-28, FR44

### Story 8.15: Display Active Batch Dashboard with Progress

As an admin,
I want to view active comped batches with real-time progress,
So that I can monitor partnership trials and demo completion rates.

**Acceptance Criteria:**

**Given** I am authenticated as admin
**When** I navigate to Admin Dashboard > Comped Tasks > Active Batches
**Then** dashboard displays all active batches (status: approved, in_progress) in table format
**And** table columns: Batch ID, Business Label, Task Type, Total Tasks, Completed, QA Pending, In Progress, Unclaimed, Cancelled, Created Date, Estimated Cost, Actual Cost To Date
**And** Completed column displays count of approved tasks: "12 / 25 (48%)"
**And** QA Pending column displays count of tasks submitted but not yet reviewed: "3"
**And** In Progress column displays count of tasks claimed by creators: "5"
**And** Unclaimed column displays count of tasks still in available queue: "5"
**And** Cancelled column displays count of admin-cancelled tasks: "0"
**And** Actual Cost To Date displays sum of approved task payouts: "$216 of $450 estimated"
**And** progress bar visualizes completion: green for completed, yellow for in progress, grey for unclaimed
**And** admin can click batch row to see detailed view: task list, creator assignments, QA scores, timeline
**And** detailed view displays individual tasks with status, creator name (if claimed), QA score (if reviewed), submitted date
**And** batch dashboard auto-refreshes every 30 seconds (real-time updates)
**And** admin can export batch data as CSV: "Export Batch Progress"
**And** meets FR-ADMIN-30, FR-ADMIN-31

### Story 8.16: Generate Monthly Audit Reports with ROI

As an admin,
I want to generate monthly audit reports for comped tasks,
So that I can track customer acquisition ROI and partnership conversions.

**Acceptance Criteria:**

**Given** month has ended
**When** monthly audit job runs on 1st of new month
**Then** job generates comped task audit report: `{ month, totalBudget, totalSpent, batchCount, taskCount, approvedTaskCount, rejectedTaskCount, creatorCount, avgQualityScore }`
**And** report calculates Total Budget: monthly budget setting (e.g., $2,000)
**And** report calculates Total Spent: sum of all approved comped task payouts for the month
**And** report calculates Batch Count: number of batches created in month (by task type: partnership trial, sales demo, creator training)
**And** report calculates Task Count: total tasks created across all batches
**And** report calculates Approved Task Count: tasks that passed QA review
**And** report calculates Rejected Task Count: tasks that failed QA review
**And** report calculates Creator Count: unique creators who worked on comped tasks
**And** report calculates Avg Quality Score: average QA score across all approved comped tasks
**And** report includes ROI metrics: Partnership Conversions (count), New Client ARR from Conversions (sum), ROI Multiple (ARR / Total Spent)
**And** report includes suspicious patterns flagged by system (per FR-ADMIN-34): same admin/creator pairs, abnormal volume
**And** report is saved to database: `comped_task_audit_reports` table
**And** report is emailed to executives and finance team
**And** admin can download report as PDF from Admin Dashboard > Comped Tasks > Monthly Reports
**And** report displays executive overrides: count and total amount
**And** meets FR-ADMIN-32, FR-ADMIN-34

### Story 8.17: Auto-Flag Suspicious Comped Task Patterns

As the system,
I want to automatically flag suspicious comped task patterns,
So that admins can prevent fraud and collusion.

**Acceptance Criteria:**

**Given** comped tasks are being created and completed
**When** daily fraud detection job runs
**Then** job detects pattern: same admin creates batches assigned to same specific creator >5 times in 30 days
**And** job detects pattern: single creator completes >50% of all comped tasks in a batch
**And** job detects pattern: batch has >80% rejection rate (potential quality farming)
**And** job detects pattern: single admin creates >10 batches in single week (abnormal volume)
**And** job detects pattern: admin creates batch, immediately followed by creator claim within 5 minutes (collusion indicator)
**And** job detects pattern: comped task submissions have suspiciously high plagiarism similarity to each other (copy-paste farming)
**And** job detects pattern: executive override used >3 times in single month by same executive
**And** detected patterns create SuspiciousPattern record: `{ patternType, adminId, creatorId, batchIds, severity: 'low'|'medium'|'high', detectedAt, metadata }`
**And** high-severity patterns trigger immediate alert to platform administrators: "ALERT: Potential collusion detected. Admin John Doe created 3 batches assigned exclusively to Creator Jane Smith in past week."
**And** medium/low severity patterns are flagged in weekly digest report
**And** admin dashboard displays flagged patterns: "3 suspicious patterns detected this month. Review flagged activity."
**And** admin can review pattern details: involved accounts, batch IDs, evidence, timeline
**And** admin can take action: dismiss as false positive, investigate further, suspend accounts
**And** flagged patterns are included in monthly audit report (per FR-ADMIN-32)
**And** meets FR-ADMIN-34

### Story 8.18: Bulk Download and Quality Review

As an admin,
I want to download all completed tasks from a batch and review quality,
So that I can deliver high-quality content to partners and request revisions if needed.

**Acceptance Criteria:**

**Given** a comped batch has completed tasks
**When** I navigate to batch detail page
**Then** "Download All Completed Tasks" button is available
**And** clicking button triggers bulk export: generates ZIP file containing all approved task submissions
**And** ZIP file structure: `batch-{id}-{business-label}/task-{id}-{format}.md`
**And** each task file includes: audio metadata (duration, filename), output format, creator submission content, QA score, reviewed date
**And** ZIP download initiates within 5 seconds for batches <50 tasks
**And** for batches >50 tasks, async job generates ZIP and emails download link when ready
**And** admin can preview individual task quality before download: click task row to see full submission
**And** preview displays: audio player, transcript, creator submission, QA score and feedback
**And** admin can request revision on comped task (similar to uploader revision request per FR37)
**And** revision request re-enters task into QA queue with revision notes
**And** revised task is re-assigned to original creator (if available) or new creator (if original unavailable)
**And** revision request creates audit log: `{ taskId, batchId, adminId, revisionReason, requestedAt }`
**And** creator receives notification: "Revision requested for Task #1234. Feedback: [admin notes]"
**And** revised tasks count against original batch (no additional budget impact)
**And** all tasks marked with batch_id and business label in database for tracking (per FR-ADMIN-38)
**And** meets FR-ADMIN-35, FR-ADMIN-36, FR-ADMIN-37, FR-ADMIN-38

---

### Story 8.19: Admin Configure Payout Amounts

As an admin,
I want to configure base payout amounts for each task format,
So that I can adjust creator compensation without code changes.

**Acceptance Criteria:**

**Given** I am authenticated as admin
**When** I navigate to Admin Dashboard > Settings > Payout Configuration
**Then** payout configuration table displays all 9 task formats with current base payout amounts
**And** table columns: Format Name, Base Payout (USD), Last Updated, Updated By
**And** current payout amounts are displayed: Executive Summary ($12), Key Insights ($10), Action Items ($8), Reflection Questions ($7), Social Media Pack ($15), Blog Post ($20), Fact-Check Report ($18), Show Notes ($10), Newsletter Segment ($12)
**And** clicking "Edit Payout Amounts" enables editing mode
**And** each format has editable input field with validation: minimum $5, maximum $100, whole dollars only
**And** changes are highlighted: modified rows display in yellow with "Pending" badge
**And** "Save Changes" button requires confirmation: "Update payout amounts? This affects future task calculations."
**And** clicking "Confirm Update" executes transaction: update PayoutConfig table, create audit log entry
**And** audit log records: `{ adminId, formatName, oldAmount, newAmount, updatedAt }`
**And** payout config is stored in database table: `PayoutConfig { id, formatName, basePayoutCents, updatedAt, updatedBy }`
**And** payout calculations (Story 6.4, Story 8.3) query PayoutConfig table instead of using hardcoded values
**And** payout config changes apply only to NEW tasks created after update (existing task payouts are immutable)
**And** version history displays past payout amounts: "Blog Post was $18 from Jan 1-15, 2024. Changed to $20 on Jan 16, 2024."
**And** admin can export payout config history as CSV for financial auditing
**And** payout config changes trigger notification to finance team: "Payout amounts updated by Admin John. Review changes."

---

## Epic 9: Compliance & Data Management

**Goal:** Ensure platform meets GDPR, CCPA, and data privacy requirements with automated retention policies, user privacy controls, encryption standards, and fraud prevention mechanisms to protect user data and maintain regulatory compliance.

**FRs covered:** FR6-FR8, FR15-FR16, FR57-FR60, FR63, FR66-FR72, NFR-C1 through NFR-C13

### Story 9.1: Self-Service Data Export (GDPR/CCPA)

As a user,
I want to export all my personal data in machine-readable format,
So that I can exercise my GDPR/CCPA data portability rights.

**Acceptance Criteria:**

**Given** I am authenticated as any role (uploader, creator, QA editor, admin)
**When** I navigate to Account Settings > Privacy > Export My Data
**Then** export request form displays with format options: JSON, CSV
**And** format selection is required (radio buttons: JSON or CSV)
**And** export request creates background job: `{ userId, format, requestedAt, status: 'pending' }`
**And** user receives confirmation: "Your data export has been requested. You'll receive an email with download link within 15 minutes."
**And** background job (BullMQ) aggregates all user data across tables: profile, tasks, submissions, payments, messages, audit logs
**And** for uploaders: includes upload history, task requests, payments, delivered content
**And** for creators: includes claimed tasks, submissions, QA scores, earnings, tier progression history
**And** for QA editors: includes review history, scores given, override actions
**And** for admins: includes admin actions, dispute resolutions, comped batches created
**And** JSON export structure: `{ user: {...}, tasks: [...], payments: [...], auditLogs: [...] }`
**And** CSV export generates multiple files in ZIP: `user.csv`, `tasks.csv`, `payments.csv`, `audit_logs.csv`
**And** export job completes within 15 minutes (per NFR-C1)
**And** download link is emailed to user: "Your data export is ready. Download expires in 7 days."
**And** download link uses signed S3 URL with 7-day expiration
**And** export file is automatically deleted after 7 days
**And** export request is logged: `{ userId, format, exportedAt, downloadedAt, ipAddress }`
**And** users can request export once per 30 days (rate limiting to prevent abuse)
**And** meets FR7, NFR-C1, NFR-C5, NFR-C6

### Story 9.2: Account Deletion with 30-Day Purge

As a user,
I want to request account deletion with complete data purge,
So that I can exercise my GDPR right to be forgotten.

**Acceptance Criteria:**

**Given** I am authenticated as any role
**When** I navigate to Account Settings > Privacy > Delete Account
**Then** deletion warning displays: "This action cannot be undone. All your data will be permanently deleted within 30 days. Active tasks will be cancelled."
**And** user must confirm understanding: checkbox "I understand this action is permanent and cannot be reversed"
**And** user must provide deletion reason (dropdown): "No longer need service", "Privacy concerns", "Switching to competitor", "Other"
**And** user must re-authenticate with password (security confirmation)
**And** deletion request creates DeletionRequest record: `{ userId, reason, requestedAt, scheduledPurgeDate: requestedAt + 30 days, status: 'pending' }`
**And** user account is immediately soft-deleted: `{ deletedAt, status: 'pending_deletion' }`
**And** soft-deleted users cannot log in (session invalidated, future login attempts blocked)
**And** user receives confirmation email: "Your account deletion has been scheduled. Data will be purged on [date]. To cancel, click this link within 30 days."
**And** cancellation link allows user to restore account within 30-day grace period
**And** during 30-day grace period, data is retained but account is inaccessible
**And** after 30 days, purge job executes: deletes all user data across tables (profile, tasks, uploads, submissions, messages, audit logs)
**And** payment records are RETAINED for 7 years (tax compliance per FR70, NFR-C8) but PII is anonymized: `{ userId: 'deleted_user_<hash>', amount, date }`
**And** active dispute data is EXEMPTED from deletion until resolution (per FR71, NFR-C9)
**And** purge job logs completion: `{ userId, purgedAt, tablesAffected, recordsDeleted }`
**And** purge verification audit trail is created for compliance: `{ userId, deletionRequestedAt, purgedAt, verificationStatus: 'complete' }`
**And** meets FR6, FR67, NFR-C2, NFR-C8, NFR-C9

### Story 9.3: Cookie Consent Management (GDPR)

As an EU visitor,
I want to manage cookie consent preferences,
So that I can control data collection per GDPR requirements.

**Acceptance Criteria:**

**Given** I visit the platform for the first time
**When** page loads
**Then** cookie consent banner displays at bottom of page (non-blocking, dismissible)
**And** banner text: "We use cookies to improve your experience. Essential cookies are required for functionality. You can customize optional cookies."
**And** banner buttons: "Accept All", "Reject Optional", "Customize"
**And** clicking "Accept All" sets consent: `{ essential: true, analytics: true, marketing: true }`
**And** clicking "Reject Optional" sets consent: `{ essential: true, analytics: false, marketing: false }`
**And** clicking "Customize" opens preference modal with toggles: Essential (always on, disabled toggle), Analytics (optional toggle), Marketing (optional toggle)
**And** Essential cookies description: "Required for authentication, session management, and core functionality"
**And** Analytics cookies description: "Help us understand how you use the platform (Google Analytics, Mixpanel)"
**And** Marketing cookies description: "Used for advertising and retargeting (Google Ads, Facebook Pixel)"
**And** consent preferences are saved to localStorage: `{ consentGiven: true, preferences: {...}, timestamp }`
**And** consent preferences are also saved to database (if user authenticated): `users.cookie_consent`
**And** analytics scripts (Google Analytics, Mixpanel) only load if analytics consent given
**And** marketing scripts (Google Ads, Facebook Pixel) only load if marketing consent given
**And** users can change preferences anytime: Account Settings > Privacy > Cookie Preferences
**And** consent banner respects geolocation: only shows for EU visitors (IP-based detection or browser language)
**And** consent is re-requested every 12 months (expiration)
**And** Privacy Policy link is prominently displayed in banner
**And** meets FR68, NFR-C3, NFR-C4

### Story 9.4: Auto-Delete Audio Files After 7 Days

As the system,
I want to automatically delete audio files after 7 days,
So that I can minimize storage costs and comply with data retention policy.

**Acceptance Criteria:**

**Given** audio files are uploaded and transcribed
**When** daily cleanup job runs at 2 AM UTC
**Then** job queries audio files older than 7 days: `SELECT * FROM audio_files WHERE uploadedAt < NOW() - INTERVAL '7 days' AND status = 'transcribed'`
**And** job checks if audio is involved in active dispute (per FR71, NFR-C9): `JOIN disputes ON disputes.audioId = audio_files.id WHERE disputes.status = 'open'`
**And** disputed audio files are EXEMPTED from deletion (skipped by job)
**And** non-disputed audio files are deleted from S3: `await s3.deleteObject({ Bucket, Key })`
**And** audio_files record is updated: `{ deletedAt, status: 'deleted', s3Key: null }`
**And** database record is soft-deleted (metadata retained for audit trail)
**And** deletion is logged: `{ audioId, uploaderId, deletedAt, reason: 'retention_policy_7_days', s3Size }`
**And** if S3 deletion fails, job retries 3 times with exponential backoff
**And** failed deletions are logged for manual review: `{ audioId, error, retryCount }`
**And** job tracks metrics: files deleted, storage freed, failed deletions
**And** admin dashboard displays cleanup metrics: "Audio cleanup: 142 files deleted (18.3 GB freed) in last 24 hours"
**And** meets FR15, NFR-C7, NFR-C9

### Story 9.5: Auto-Delete Transcripts and Submissions After 30 Days

As the system,
I want to automatically delete transcripts and creator submissions after 30 days,
So that I can comply with data minimization principles.

**Acceptance Criteria:**

**Given** transcripts and submissions exist
**When** daily cleanup job runs at 2 AM UTC
**Then** job queries transcripts older than 30 days: `SELECT * FROM transcripts WHERE createdAt < NOW() - INTERVAL '30 days'`
**And** job queries creator submissions older than 30 days: `SELECT * FROM submissions WHERE submittedAt < NOW() - INTERVAL '30 days'`
**And** job checks if data is involved in active dispute (per FR71, NFR-C9)
**And** disputed transcripts/submissions are EXEMPTED from deletion
**And** non-disputed transcripts are deleted: `UPDATE transcripts SET deletedAt = NOW(), content = null, status = 'deleted'`
**And** non-disputed submissions are deleted: `UPDATE submissions SET deletedAt = NOW(), content = null, status = 'deleted'`
**And** metadata is retained for audit trail: `{ id, taskId, creatorId, submittedAt, qaScore, deletedAt }`
**And** deletion is logged: `{ transcriptId, taskId, deletedAt, reason: 'retention_policy_30_days' }`
**And** job tracks metrics: transcripts deleted, submissions deleted
**And** admin dashboard displays cleanup metrics: "Transcript cleanup: 89 transcripts deleted. Submission cleanup: 76 submissions deleted."
**And** meets FR16, NFR-C7, NFR-C9

### Story 9.6: Auto-Delete Delivered Content After 90 Days

As the system,
I want to automatically delete delivered content after 90 days,
So that I can comply with data retention policy while allowing reasonable access window.

**Acceptance Criteria:**

**Given** content has been delivered to uploaders
**When** weekly cleanup job runs every Sunday at 3 AM UTC
**Then** job queries delivered content older than 90 days: `SELECT * FROM tasks WHERE status = 'delivered' AND deliveredAt < NOW() - INTERVAL '90 days'`
**And** job checks if task is involved in active dispute (per FR71, NFR-C9)
**And** disputed tasks are EXEMPTED from deletion
**And** non-disputed delivered content is deleted from S3: `await s3.deleteObject({ Bucket, Key: deliverable.s3Key })`
**And** task deliverable record is updated: `{ deletedAt, s3Key: null, status: 'archived' }`
**And** task metadata is retained: `{ id, uploaderId, creatorId, qaScore, deliveredAt, deletedAt }`
**And** deletion is logged: `{ taskId, uploaderId, deletedAt, reason: 'retention_policy_90_days' }`
**And** uploaders receive notification before deletion (7-day warning): "Your delivered content for Task #1234 will be deleted in 7 days. Download now if you need to keep it."
**And** warning email includes download link for final retrieval
**And** job tracks metrics: deliverables deleted, storage freed
**And** meets FR69, NFR-C7, NFR-C9

### Story 9.7: Retain Payment Records for 7 Years

As the system,
I want to retain payment records for 7 years,
So that I comply with IRS and EU tax authority requirements.

**Acceptance Criteria:**

**Given** payment transactions are processed
**When** payment record is created
**Then** record includes: `{ id, userId, amount, paymentMethod, status, createdAt, taxYear, retentionExpiresAt: createdAt + 7 years }`
**And** retentionExpiresAt is automatically calculated: `CURRENT_DATE + INTERVAL '7 years'`
**And** payment records are NEVER deleted by automated cleanup jobs (exempted from deletion)
**And** if user requests account deletion (FR6), payment records are RETAINED but PII is anonymized: `{ userId: 'deleted_user_<hash>', email: 'redacted@example.com', name: 'REDACTED' }`
**And** anonymization retains: amount, date, paymentMethod, taxYear (required for tax compliance)
**And** anonymization removes: email, name, address, phone (PII)
**And** after 7 years, purge job deletes payment records: `DELETE FROM payments WHERE retentionExpiresAt < NOW()`
**And** 7-year purge job runs quarterly (not daily, to reduce load)
**And** purge is logged: `{ paymentId, userId, purgedAt, reason: 'tax_retention_expired_7_years' }`
**And** admin can manually extend retention for audited records: "Extend retention due to active IRS audit"
**And** meets FR70, NFR-C8

### Story 9.8: Legal Hold and Dispute Data Exemption

As the system,
I want to support legal hold capability and exempt dispute data from deletion,
So that I can preserve evidence for legal proceedings and dispute resolution.

**Acceptance Criteria:**

**Given** data is subject to legal hold or active dispute
**When** admin places legal hold on user account
**Then** admin navigates to Admin Dashboard > Legal Holds > Create Legal Hold
**And** form includes: User Account (search), Reason (required, 500 char max), Case Number (optional), Expiration Date (optional)
**And** legal hold creates LegalHold record: `{ userId, reason, caseNumber, createdBy: adminId, createdAt, expiresAt, status: 'active' }`
**And** legal hold EXEMPTS all user data from automated deletion jobs
**And** deletion jobs check for legal hold before deleting: `WHERE NOT EXISTS (SELECT 1 FROM legal_holds WHERE userId = users.id AND status = 'active')`
**And** legal hold notification is sent to ops team: "Legal hold placed on user [email]. All data preservation active."
**And** admin can view active legal holds: table with user, reason, case number, created date, expiration
**And** admin can release legal hold: status changes to 'released', data becomes eligible for normal retention policies
**And** legal hold release is logged: `{ legalHoldId, releasedBy: adminId, releasedAt, reason }`
**And** dispute data exemption logic: all cleanup jobs check `JOIN disputes ON ... WHERE disputes.status != 'resolved'`
**And** disputed audio, transcripts, submissions, deliverables are skipped by deletion jobs
**And** after dispute resolution (status: 'resolved'), data becomes eligible for deletion per normal retention policies
**And** meets FR71, FR72, NFR-C9, NFR-C10

### Story 9.9: Enforce TLS 1.3 and AES-256 Encryption

As the system,
I want to enforce TLS 1.3 for data in transit and AES-256 for data at rest,
So that I protect user data per security requirements.

**Acceptance Criteria:**

**Given** platform is deployed to production
**When** configuring web server and database encryption
**Then** HTTPS is enforced for all connections: HTTP requests redirect to HTTPS (301 permanent redirect)
**And** TLS 1.3 is minimum allowed version: `ssl_protocols TLSv1.3;` (nginx) or equivalent
**And** TLS 1.2 and below are disabled (reject connections)
**And** SSL certificate is valid and auto-renewing (Let's Encrypt or AWS ACM)
**And** HSTS header is set: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
**And** database connections use TLS: `?sslmode=require` (PostgreSQL) or Railway enforced encryption
**And** database encryption at rest is enabled: AES-256 (Railway platform default or AWS RDS encryption)
**And** S3 bucket encryption is enabled: SSE-S3 (AES-256) for all uploaded files
**And** S3 bucket policy enforces encryption: deny PutObject if encryption header missing
**And** Redis connections use TLS: `rediss://` protocol (Railway platform default)
**And** environment variables with secrets are encrypted at rest (Railway secrets or AWS Secrets Manager)
**And** API keys, JWT secrets, database passwords are stored encrypted, never plaintext
**And** security headers are configured: `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
**And** encryption settings are validated in CI/CD: deployment fails if TLS 1.3 not enforced
**And** monthly security audit verifies encryption standards (automated scan)
**And** meets FR63, NFR-S1, NFR-S2

### Story 9.10: Device Fingerprinting and Email Normalization

As the system,
I want to capture device fingerprints and normalize email addresses,
So that I can prevent duplicate accounts and detect fraud.

**Acceptance Criteria:**

**Given** user is creating a new account
**When** registration form is submitted
**Then** client-side fingerprinting library (e.g., FingerprintJS) captures device signature: `{ visitorId, confidence, components: {...} }`
**And** device fingerprint is sent to server with registration request
**And** server stores fingerprint: `users.device_fingerprint = visitorId`
**And** email normalization removes Gmail tricks: dots, plus-addressing
**And** normalization examples: `john.doe+spam@gmail.com` → `johndoe@gmail.com`
**And** normalization handles: `Jane.Doe@Gmail.COM` → `janedoe@gmail.com` (lowercase, remove dots)
**And** normalized email is stored: `users.email_normalized = normalizeEmail(email)`
**And** duplicate detection checks normalized email: `SELECT * FROM users WHERE email_normalized = ?`
**And** duplicate detection checks device fingerprint: `SELECT * FROM users WHERE device_fingerprint = ?`
**And** if normalized email exists OR device fingerprint matches existing account, registration is flagged
**And** flagged registrations display warning: "An account with this email already exists. Did you forget your password?"
**And** admin can review flagged registrations: Admin Dashboard > Fraud Detection > Flagged Registrations
**And** flagged registrations create FlaggedRegistration record: `{ email, deviceFingerprint, matchType: 'email'|'device'|'both', createdAt }`
**And** admin can: approve (allow duplicate for legitimate reasons), reject (block registration), investigate
**And** meets FR8, FR57, FR58, NFR-S10, NFR-S11

### Story 9.11: Multi-Account Detection and Role Separation

As the system,
I want to detect multi-account creation attempts and enforce role separation,
So that I prevent users from gaming the system as both client and creator.

**Acceptance Criteria:**

**Given** user attempts to create multiple accounts
**When** system detects suspicious patterns
**Then** daily fraud detection job analyzes account creation patterns
**And** job detects: multiple accounts with same device fingerprint within 24 hours
**And** job detects: multiple accounts with same payment method (Stripe customer ID, M-Pesa phone)
**And** job detects: multiple accounts from same IP address within 24 hours (>3 accounts)
**And** job detects: user attempts to create both uploader and creator accounts (role conflict)
**And** detected multi-account attempts create MultiAccountFlag record: `{ accountIds: [...], detectionReason, severity, detectedAt }`
**And** high-severity flags (same device + same payment method) trigger admin alert
**And** admin reviews multi-account flags: Admin Dashboard > Fraud Detection > Multi-Account Detection
**And** admin can: merge accounts (if legitimate, e.g., accidental duplicate), suspend duplicate accounts, dismiss as false positive
**And** role separation enforcement: middleware checks user role on every request
**And** role separation prevents: uploaders from accessing `/creator/*` routes, creators from accessing `/client/*` routes
**And** database RLS policies enforce role isolation: `CREATE POLICY creator_isolation ON tasks FOR SELECT USING (auth.role() = 'creator')`
**And** RLS policies prevent creators from seeing client data: `client_name`, `client_pricing`, `platform_margin`
**And** RLS policies prevent uploaders from seeing creator identity: creator appears as "jabur" entity
**And** API endpoints validate role before returning data: `if (user.role !== 'creator') throw Forbidden()`
**And** role separation is tested in E2E tests: creator cannot access client endpoints (403 Forbidden)
**And** meets FR59, FR60, FR61, FR62, NFR-S5, NFR-S6, NFR-S12
