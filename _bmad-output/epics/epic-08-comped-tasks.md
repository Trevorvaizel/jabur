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

