# Functional Requirements

## Account & Authentication Management

- **FR1**: Uploaders can create accounts and authenticate to access the platform
- **FR2**: Creators can apply for platform access with portfolio submission for vetting
- **FR3**: QA Editors can authenticate with multi-factor authentication (MFA) for secure access
- **FR4**: Admins can authenticate with multi-factor authentication (MFA) for secure access
- **FR5**: Users can select preferred payout method during onboarding (Stripe or M-Pesa)
- **FR6**: Users can request account deletion with complete data purge
- **FR7**: Users can export their personal data in machine-readable format (JSON/CSV)
- **FR8**: System can prevent duplicate account creation via email normalization and device fingerprinting

## Content Upload & Transcription

- **FR9**: Uploaders can upload audio files up to 500MB and 3 hours duration
- **FR10**: Uploaders can resume failed uploads without restarting from beginning
- **FR11**: Uploaders can select one or more output format types from 9 available options (Executive Summaries, Key Insights, Action Items, Reflection Questions, Social Media Packs, Blog Posts, Fact-Check Reports, Show Notes, Newsletter Segments)
- **FR12**: Uploaders can select turnaround tier (Standard 24-48hrs, Rush 24hrs +50%, Express 12hrs +100%)
- **FR13**: System can automatically transcribe uploaded audio within 15 minutes using AssemblyAI or Whisper API
- **FR14**: System can generate timestamp-aligned transcripts for synchronized playback
- **FR15**: System can automatically delete audio files after 7 days to minimize storage costs
- **FR16**: System can automatically delete transcripts after 30 days per data retention policy

## Creator Workspace & Task Management

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

## Quality Assurance & Review

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

## Creator Advancement & Compensation

- **FR39**: System can automatically assign creators to tier levels (Probationary 0.8x, Junior 0.9x, Mid-Level 1.0x, Senior 1.25x, Expert 1.5x)
- **FR40**: System can automatically promote creators when advancement criteria met (e.g., 20 approved tasks at 4.5+ average)
- **FR41**: Admins can manually promote or demote creator tier levels with justification
- **FR42**: System can apply tier multiplier to task payouts automatically
- **FR43**: System can calculate weekly creator earnings with full audit trail
- **FR44**: System can process weekly payouts every Friday via Stripe (bank transfer, PayPal, direct deposit) or M-Pesa (mobile money)
- **FR45**: System can generate 1099 tax forms for US-based creators annually
- **FR46**: Creators can view achievement notifications when advancing to new tier level
- **FR47**: System can filter task visibility based on creator tier qualification

## Admin Operations & Dispute Resolution

- **FR48**: Admins can access comprehensive dispute context view aggregating all evidence (audio, transcript, submissions, messages)
- **FR49**: Admins can listen to original audio and review complete submission history with timestamps
- **FR50**: Admins can access full message history across client-creator-QA communications
- **FR51**: Admins can use decision support tools with templated resolution options
- **FR52**: Admins can process refunds with reason tracking for disputes
- **FR53**: Admins can view analytics dashboard for operational insights (quality trends, refund rates, creator performance metrics)
- **FR54**: Admins can manually flag accounts for investigation (quality, fraud, policy violations)
- **FR55**: Admins can access complete audit logs for security events, role changes, and payment transactions
- **FR56**: Admins can read all data across roles for dispute resolution and fraud investigation (full read access)

## Admin Comped Task Management

**Purpose:** Enable admins to create complimentary (comped) tasks for partnership trials, sales demos, and creator training without client payment. Platform absorbs creator payout costs as customer acquisition or operational expense.

**Core Functionality:**

- **FR-ADMIN-01**: Admins can create comped task batches via Admin Dashboard
- **FR-ADMIN-02**: Admins can select task type (Partnership Trial, Sales Demo, Creator Training)
- **FR-ADMIN-03**: Admins must add business label for each batch (required, 100 character max)
- **FR-ADMIN-04**: Admins can upload audio files or reference existing uploads for comped tasks
- **FR-ADMIN-05**: Admins can configure format, custom instructions, and assignment rules for comped tasks
- **FR-ADMIN-06**: System calculates estimated cost based on average creator payouts by tier
- **FR-ADMIN-07**: System validates comped task creation against monthly budget before allowing creation

**Approval Workflow:**

- **FR-ADMIN-08**: Batches with fewer than 10 tasks are auto-approved (single admin authority)
- **FR-ADMIN-09**: Batches with 10-50 tasks require second admin approval with justification
- **FR-ADMIN-10**: Batches with more than 50 tasks require finance or executive approval
- **FR-ADMIN-11**: Approval requests include business justification and cost estimate
- **FR-ADMIN-12**: Approver sees real-time budget impact analysis before approving

**Budget Management:**

- **FR-ADMIN-13**: Platform administrators can set monthly comped task budget (system-configurable)
- **FR-ADMIN-14**: Admins see real-time budget usage with percentage and remaining funds
- **FR-ADMIN-15**: System blocks batch creation if monthly budget would be exceeded
- **FR-ADMIN-16**: Budget resets automatically on first day of each month
- **FR-ADMIN-17**: Executives can override budget limits with required business justification

**Task Lifecycle:**

- **FR-ADMIN-18**: Comped tasks enter same task routing queue as client-paid tasks (no preferential treatment)
- **FR-ADMIN-19**: Creators cannot distinguish comped tasks from paid tasks (maintains role isolation)
- **FR-ADMIN-20**: Comped tasks go through identical QA review process as paid tasks
- **FR-ADMIN-21**: Approved comped tasks count toward creator tier progression
- **FR-ADMIN-22**: Rejected comped tasks result in no creator payment (same quality incentive as paid tasks)
- **FR-ADMIN-23**: Admins can cancel unclaimed comped tasks before creator claims (no cost incurred)
- **FR-ADMIN-24**: In-progress or completed comped tasks cannot be cancelled (creator time commitment honored)

**Payout Handling:**

- **FR-ADMIN-25**: QA-approved comped tasks are included in weekly creator payout batch
- **FR-ADMIN-26**: Comped task payouts are flagged separately in weekly payout summary for financial tracking
- **FR-ADMIN-27**: Admins review and approve comped task payouts in weekly batch before release
- **FR-ADMIN-28**: Platform absorbs all comped task creator earnings as operating expense

**Audit & Reporting:**

- **FR-ADMIN-29**: All comped task actions are logged with admin ID, timestamp, and action type
- **FR-ADMIN-30**: Admin dashboard displays active comped batches with real-time progress
- **FR-ADMIN-31**: Admins can view batch detailed progress (completed count, QA pending, cancelled)
- **FR-ADMIN-32**: Monthly audit report shows total cost, ROI metrics, and partnership conversion tracking
- **FR-ADMIN-33**: Admins can export comped task data in CSV format for external analysis
- **FR-ADMIN-34**: System automatically flags suspicious patterns (same admin/creator pairs, abnormal volume)

**Delivery & Quality Control:**

- **FR-ADMIN-35**: Admins can download all completed tasks from a batch in bulk
- **FR-ADMIN-36**: Admins can review comped task quality before delivering to external partners
- **FR-ADMIN-37**: Admins can request revision on comped tasks (task re-enters QA queue)
- **FR-ADMIN-38**: Comped tasks are marked with batch_id and business label in database for tracking

**System Integration:**

- **FR-ADMIN-39**: Comped tasks appear in creator "Available Tasks" queue with no visual distinction
- **FR-ADMIN-40**: Comped task completion triggers identical notifications as paid task completion
- **FR-ADMIN-41**: Analytics dashboard separates comped task metrics from paid task metrics
- **FR-ADMIN-42**: Financial reports track comped task costs as "Customer Acquisition" or "Training Expense" operating category

**Use Cases:**

- **Partnership Trials:** Enterprise prospects trial 20-50 tasks before committing to annual plan (CAC investment)
- **Sales Demos:** Generate high-quality sample content for sales presentations and pitch decks
- **Creator Training:** Provide practice tasks for new creators with real audio and QA feedback
- **Service Recovery:** Offer complimentary tasks to clients after dispute resolution to rebuild trust

**Financial Model:**

- Estimated monthly budget: $1,000-$2,000 in creator payouts
- Expected ROI: 30% partnership trial conversion rate yields $30,000+ ARR per $600 trial investment
- Budget controls and approval workflows prevent cost overruns

## Fraud Prevention & Security

- **FR57**: System can capture device fingerprints for all new account registrations
- **FR58**: System can normalize email addresses to prevent alias and duplicate account tricks
- **FR59**: System can detect multi-account creation attempts and flag for admin review
- **FR60**: System can enforce role separation technically (database RLS + application middleware) preventing clients from becoming creators
- **FR61**: Creators can NEVER see client names, client pricing, or platform margins (role blindness)
- **FR62**: Uploaders can NEVER see creator identity - only see "jabur" entity completing work
- **FR63**: System can encrypt data in transit (TLS 1.3) and at rest (AES-256)
- **FR64**: System can log all admin actions, role changes, payment transactions for audit trail
- **FR65**: System can automatically flag suspicious patterns (quality drops, deadline misses, plagiarism spikes) for admin review

## Compliance & Data Management

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

