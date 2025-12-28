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

