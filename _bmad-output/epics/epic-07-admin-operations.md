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

