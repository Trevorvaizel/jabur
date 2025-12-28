
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

