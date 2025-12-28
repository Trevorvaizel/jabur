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

