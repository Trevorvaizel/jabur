# CUSTOM COMPONENTS

### UPLOADER COMPONENTS (5 components)

#### Component 1: Interactive Format Selector

**Purpose:** Guide uploaders through 2-question decision tree to recommend optimal format

**Anatomy:**
- Question 1: Radio button group (5 options: Email/LinkedIn/Twitter/Blog/Instagram)
- Question 2: Radio button group (4 options: Grow/Engage/Traffic/Thought leadership)
- Recommendation card: Format name + rationale + CTA
- Override link: "See all 8 formats"

**States:**
- Initial: Q1 visible, Q2 hidden
- Q1 Answered: Q2 visible
- Q2 Answered: Recommendation visible
- Override: Full format grid expanded

**Variants:**
- Modal (overlay)
- Full-page (onboarding)

**Accessibility:**
- ARIA live region announces question progress
- Keyboard navigation (Tab, Arrow keys)
- Screen reader: "Question 1 of 2: What's your primary channel?"

**Usage Context:** Flow 1 (Uploader First Upload) - Format Selection step

---

#### Component 2: Upload Progress Indicator

**Purpose:** Real-time upload status with AI quality validation feedback

**Anatomy:**
- Progress bar (0-100%) with percentage label
- Current action label: "Securing file..." / "Analyzing quality..." / "Complete"
- Quality checks: Icon + text ("✓ 42 minutes detected", "✓ High quality audio")
- Warning prompt: "⚠️ Background noise - [Proceed] or [Upload Better]"

**States:**
- Uploading (0-99%): Animated progress bar
- Validating (100%): Spinner with "Analyzing quality..."
- Success: Green checkmark + "Ready for format selection"
- Warning: Yellow icon + decision buttons
- Error: Red icon + error message + retry button

**Variants:**
- Inline (within upload screen)
- Modal (overlay during upload)

**Accessibility:**
- ARIA live region for progress updates
- Percentage announced by screen readers
- Color-blind safe (shapes + colors for status)

**Usage Context:** Flow 1 (Uploader First Upload) - Upload step

---

#### Component 3: Content Preview Panel

**Purpose:** Show full curated content with soft paywall (visible but download disabled)

**Anatomy:**
- Content container: Full text (1,500+ words) with glassmorphism background
- Watermark overlay: Subtle "Created for [Name] via jabur - Unlock for download"
- Quality bar: "1,730 words / QA Score: 94/100 / Created by Sarah (Level 3)"
- Unlock CTA: Sticky button "Unlock for download & copy: $8"
- Revision CTA: Secondary button "Request Revision"

**States:**
- Locked (default): Content visible, copy/download disabled, watermark present
- Unlocked (post-payment): Full interactions enabled, watermark removed, download active

**Variants:**
- Full-page preview
- Modal preview (quick view)

**Accessibility:**
- Screen readers can read full content (even when locked)
- Keyboard copy disabled (except assistive tech)
- Focus on Unlock CTA after content scroll

**Usage Context:** Flow 1 (Uploader First Upload) - Content Delivery step

---

#### Component 4: Mid-Creation Status Card

**Purpose:** Fill 6-hour anxiety gap by showing creator progress in real-time

**Anatomy:**
- Creator header: Avatar + "Sarah (Level 3, 89 projects)"
- Progress checklist:
  - Completed: "✓ Reviewed 42-minute transcript" (green check)
  - Current: "→ Now crafting opening hook" (blue arrow)
  - Pending: "Structuring themes for flow" (gray)
- Time estimate: "Estimated delivery: 3 more hours"

**States:**
- In Progress: Current task highlighted with arrow
- Task Complete: Green checkmark animation
- All Complete: Celebration animation + "Content delivered!"

**Variants:**
- Card (dashboard widget)
- Email (text-only for notifications)

**Accessibility:**
- ARIA live region announces progress updates
- Screen reader reads full status

**Usage Context:** Flow 1 (Uploader First Upload) - Mid-creation notification

---

#### Component 5: Format Comparison Grid

**Purpose:** Display all 8 formats categorized with examples and recommendations

**Anatomy:**
- Category headers: "TEXT FORMATS" / "SOCIAL FORMATS" / "UTILITY FORMATS"
- Format cards (8 total):
  - Format name + word count badge
  - "Perfect for: [use case]"
  - "You get: [deliverables]"
  - "[See Example →]" link
- Selection indicator: Checkmark on selected card

**States:**
- Unselected: Neutral glassmorphism card
- Selected: Accent border + checkmark
- Hover: Subtle lift effect + "Select" CTA
- Example Modal: Overlay with real sample content

**Variants:**
- Grid (3 columns desktop, 1 column mobile)
- List (stacked for accessibility)

**Accessibility:**
- Keyboard navigation (arrow keys between cards)
- Enter/Space to select
- Screen reader announces categories

**Usage Context:** Flow 1 (Uploader First Upload) - Format Selection step

---

### CREATOR COMPONENTS (5 components)

#### Component 6: Task Card

**Purpose:** Display task with CREATOR PAYOUT visible (client pricing hidden per role isolation)

**Anatomy:**
- Format badge: "Newsletter Content" (colored by type)
- Episode info: Title + duration ("42 minutes")
- Instructions preview: First 100 characters + "Read more..."
- **Payout amount**: "$22.50" (largest, most prominent text)
- Time estimate: "Est. 60-90 minutes"
- Deadline: "Due in 18 hours" (color-coded by urgency)
- CTA: "Claim Task" button

**States:**
- Available: Green accent, "Claim Task" visible
- Claimed by you: Blue accent, "Continue Working"
- Claimed by other: Gray, "Unavailable"
- Expired: Red, "Expired"

**Variants:**
- Compact (list view)
- Expanded (full details)

**Accessibility:**
- Screen reader announces all task details
- Keyboard Enter to claim
- Focus indicator on interactive elements

**Usage Context:** Flow 2 (Creator Task Completion) - Task Discovery step

---

#### Component 7: Audio Player with Synced Transcript

**Purpose:** Creator workspace audio player with transcript synchronized to playback

**Anatomy:**
- Waveform visualization (audio amplitude over time)
- Playback controls: Play/Pause, Skip ±10s, Speed selector (0.5x - 2x)
- Current time: "12:34 / 42:00"
- Transcript panel: Auto-scrolls to current timestamp, highlights active sentence
- Mark key points: Bookmark button to flag important sections
- Keyboard shortcuts legend: "Space: Play/Pause, ←→: Skip, Shift+←→: 5s skip"

**States:**
- Playing: Animated waveform, auto-scrolling transcript
- Paused: Static waveform, transcript frozen
- Buffering: Loading spinner
- Marked section: Yellow flag on waveform

**Variants:**
- Full (workspace with transcript)
- Compact (controls only)

**Accessibility:**
- Keyboard controls for all functions
- Screen reader announces timestamp changes
- Transcript fully readable by assistive tech

**Usage Context:** Flow 2 (Creator Task Completion) - Content Creation step

---

#### Component 8: Tier Progress Indicator

**Purpose:** Visual gamification of creator advancement through 5-tier system

**Anatomy:**
- 5 tier badges: Probationary → Junior → Mid-Level → Senior → Expert
- Progress bar: "15/20 approvals to Junior"
- Rate multiplier: "Current: 0.9x → Next: 1.0x"
- Tier requirements tooltip (on hover)

**States:**
- Current tier: Highlighted with pulsing glow
- Locked tiers: Grayed with padlock
- Completed tiers: Checkmark, muted
- Next tier: Subtle highlight, "X more to unlock"

**Variants:**
- Horizontal (desktop)
- Vertical (mobile)

**Accessibility:**
- Screen reader announces progress
- Keyboard navigation through tiers
- High contrast mode

**Usage Context:** Flow 2 (Creator Task Completion) - Dashboard, Post-approval

---

#### Component 9: Earnings Dashboard

**Purpose:** Creator financial transparency (earnings visible, client pricing never shown)

**Anatomy:**
- Pending earnings: "$156.50 pending (Friday payout)" with countdown
- This week: "$89.00 earned (6 tasks approved)"
- Last payout: "$143.25 (Paid Dec 22)"
- All-time: "$1,247.00 total earnings"
- Payment method: "Bank transfer (***1234)" with edit button
- Payout history: Expandable list with dates/amounts

**States:**
- Pending: Yellow highlight, countdown to Friday
- Paid: Green checkmark, "Sent to bank"
- Failed: Red alert, "Payment failed - update method"

**Variants:**
- Widget (summary)
- Full page (detailed history)

**Accessibility:**
- Currency values clearly announced
- Keyboard navigation through history

**Usage Context:** Flow 2 (Creator Task Completion) - Dashboard, Payment tracking

---

#### Component 10: Creator Workspace (3-Panel Layout)

**Purpose:** Complete workspace for content curation (audio + transcript + editor)

**Anatomy:**
- **Left Panel (40%)**: Audio Player with Synced Transcript (Component 7)
- **Right Panel (60%)**: Rich text block-based editor with auto-save
- **Top Bar**: Task info, timer countdown, "Submit for QA" button
- **Resize Handle**: Drag to adjust panel widths
- **Auto-save Indicator**: "Saving..." / "Saved 10 seconds ago"

**States:**
- Working: Timer counting down, auto-save active
- Idle: "Last saved 2 minutes ago"
- Submitting: Loading overlay, "Submitting to QA..."
- Time Warning (<2hrs): Orange timer, notification

**Variants:**
- Desktop (3-panel side-by-side)
- Mobile (stacked, swipe between panels)

**Accessibility:**
- Keyboard shortcuts to switch panels (Alt+1, Alt+2)
- Screen reader announces panel focus
- Resizable with keyboard

**Usage Context:** Flow 2 (Creator Task Completion) - Content Creation step

---

### QA COMPONENTS (3 components)

#### Component 11: Rubric Scoring Interface

**Purpose:** QA editor scores content on 6 weighted dimensions with inline comments

**Anatomy:**
- 6 scoring rows:
  1. Accuracy (25%) - 1-5 star selector + comment field
  2. Completeness (20%) - 1-5 star selector + comment field
  3. Clarity (20%) - 1-5 star selector + comment field
  4. Actionability (15%) - 1-5 star selector + comment field
  5. Formatting (10%) - 1-5 star selector + comment field
  6. Originality (10%) - 1-5 star selector + comment field
- Total score: Auto-calculated weighted average "4.3/5.0"
- Submit decision: "Approve" / "Request Revision" / "Reject" buttons

**States:**
- Unscored: Empty stars, total hidden
- Scoring: Stars fill on click, comment field expands if <3
- Complete: All scored, total calculated, decision buttons enabled
- Submitted: Locked, "Submitted" badge

**Variants:**
- Full rubric (all dimensions)
- Quick score (total only, for simple reviews)

**Accessibility:**
- Keyboard navigation (Tab through dimensions, Arrow keys for stars)
- Screen reader announces scores
- Required comment fields highlighted if missing

**Usage Context:** Flow 3 (QA Review) - Scoring step

---

#### Component 12: Side-by-Side Review Panel

**Purpose:** QA editor sees audio/transcript and creator submission simultaneously

**Anatomy:**
- **Left Panel**: Audio player + transcript (read-only)
- **Right Panel**: Creator submission (read-only, can add inline comments)
- **Resize Divider**: Drag to adjust panel widths
- **Inline Comment Tool**: Click text to add margin note
- **Sync Scroll Toggle**: Optional synced scrolling

**States:**
- Loading: Skeleton placeholders
- Ready: Both panels loaded, interactive
- Commenting: Inline comment popover active

**Variants:**
- Side-by-side (desktop)
- Tabbed (mobile - swipe between audio/submission)

**Accessibility:**
- Keyboard shortcuts to switch panels (Alt+1, Alt+2)
- Screen reader navigates both sides
- Inline comments announced

**Usage Context:** Flow 3 (QA Review) - Review step

---

#### Component 13: Review Queue Card

**Purpose:** QA dashboard showing pending reviews with sort/filter

**Anatomy:**
- Submission info: "Newsletter Content / 1,730 words"
- Creator: "Sarah (Level 3)" with avatar
- Deadline: "Due in 6 hours" (color-coded by urgency)
- Content type badge: "Newsletter"
- CTA: "Start Review" button

**States:**
- Normal: White background
- Urgent (<2hrs): Orange accent, pulsing
- Overdue: Red, "OVERDUE" badge blinking

**Variants:**
- List view (stacked)
- Grid view (tiles)

**Accessibility:**
- Keyboard navigation through queue
- Screen reader announces urgency
- Auto-focus on most urgent

**Usage Context:** Flow 3 (QA Review) - Queue Management

---

### ADMIN COMPONENTS (3 components)

#### Component 14: Dispute Context Aggregator

**Purpose:** Admin sees all evidence for dispute in one interface

**Anatomy:**
- **Tab Navigation**: Original Audio / Transcript / Brief / Submissions / Messages / Timeline
- **Audio Tab**: Playable audio with streaming
- **Transcript Tab**: Full transcript with timestamps
- **Brief Tab**: Client's original instructions
- **Submissions Tab**: Creator's 3 attempts with version diff view
- **Messages Tab**: Full thread (client ↔ QA ↔ creator)
- **Timeline Tab**: Chronological event log with clickable timestamps

**States:**
- Loading: Skeleton for each tab
- Loaded: All evidence accessible
- Decision Made: Locked (read-only), summary visible

**Variants:**
- Full-page (desktop)
- Accordion (mobile - expand sections)

**Accessibility:**
- Keyboard navigation between tabs (Arrow keys)
- Screen reader announces tab content
- Evidence timestamps linkable

**Usage Context:** Flow 4 (Admin Dispute) - Investigation step

---

#### Component 15: Decision Support Tool

**Purpose:** Admin selects resolution with templated messages auto-filled

**Anatomy:**
- **Decision Selector**: Radio buttons (Full Refund / Partial 50% / No Refund / Custom %)
- **Reason Dropdown**: Creator quality / Brief mismatch / Expectation gap / Other
- **Message Templates**: Pre-filled based on decision+reason (editable)
  - To client: Explanation + refund amount
  - To creator: Outcome + impact on stats
- **Refund Calculation**: "50% of $47 = $23.50 refund"
- **Submit Button**: "Send Decision & Process Refund"

**States:**
- Draft: Messages editable
- Submitting: Loading, "Processing refund via Stripe..."
- Complete: "Decision sent, refund processed"

**Variants:**
- Modal (overlay on dispute)
- Inline (within dispute interface)

**Accessibility:**
- Keyboard navigation through options
- Screen reader announces template changes
- Required fields validated

**Usage Context:** Flow 4 (Admin Dispute) - Decision step

---

#### Component 16: Analytics Dashboard

**Purpose:** Admin monitors platform health with key metrics and trends

**Anatomy:**
- **Metric Cards**: Quality avg, refund rate, active creators, revenue
- **Trend Charts**: Line charts for metrics over time
- **Filters**: Date range selector, segment filters
- **Export**: CSV download button

**Content Areas:**
- Quality Metrics: Avg QA score, first-pass approval rate
- Financial Metrics: Revenue, refund rate, platform margin
- Creator Metrics: Active creators, tier distribution, quality flags
- Uploader Metrics: Active uploaders, conversion rate, retention

**States:**
- Loading: Skeleton charts
- Loaded: Interactive charts
- No Data: "No data for selected range"

**Variants:**
- Dashboard (overview)
- Detailed (full-page analytics)

**Accessibility:**
- Charts have alt text descriptions
- Data tables for screen readers
- Keyboard navigation

**Usage Context:** Flow 4 (Admin Operations) - Platform Monitoring

---

#### Component 17: Admin Comped Task Creator

**Purpose:** Enable admins to create complimentary task batches for partnerships, demos, and training with budget controls and approval workflows

**Anatomy:**

- **Task Type Selector**: Radio buttons (Partnership Trial / Sales Demo / Creator Training)
- **Business Label Input**: Required text field (100 char max) - "Acme Podcast Network - Jan 2025 Trial"
- **Audio Upload Section**: Drag-drop multiple files OR reference existing uploads
- **Task Configuration**:
  - Format dropdown (9 options)
  - Custom instructions textarea
  - Assignment rules (Auto-route / Specific creator / Tier-based)
- **Cost Estimate Display**: Real-time calculation "20 tasks × $30 avg = $600 estimated"
- **Budget Check**: Visual indicator "✅ $600 fits within $755 remaining budget"
- **Approval Indicator**: Badge showing "⚠️ Requires approval (>10 tasks)"
- **Business Justification Textarea**: Required for batches >10 tasks
- **Action Buttons**: "Create Batch" (primary) / "Request Approval" (if >10) / "Cancel" (secondary)

**States:**

- **Draft**: Form editable, cost updating in real-time
- **Budget Warning**: Orange badge if approaching limit (>80% used)
- **Budget Exceeded**: Red badge + blocked creation "❌ Exceeds budget - reduce batch or request override"
- **Approval Required**: Form complete, waiting for second admin approval
- **Creating**: Loading spinner "Creating 20 tasks and routing to creators..."
- **Success**: Green confirmation "✅ Batch created - 20 tasks routing to Senior+ creators"

**Batch Progress View (After Creation):**

- **Batch Header**: Label + Type badge + Created date/admin
- **Progress Summary**: "15/20 completed | 12 QA approved | 3 pending | 5 unclaimed"
- **Cost Tracking**: "$378 paid | $90 pending | $450 estimated total"
- **Action Buttons**:
  - "View Details" - See all tasks in batch
  - "Cancel Unclaimed: 5 tasks" - Cancel tasks not yet claimed
  - "Download All" - Bulk download completed work

**Payout Approval Interface (Weekly):**
- **Payout Summary Header**: "Weekly Payout Friday Dec 29"
- **Total Breakdown**:
  - Client-Paid Tasks: $14,868 (revenue)
  - Comped Tasks: $612 (platform expense) ⚠️
- **Comped Detail Expansion**:
  - Acme Partnership (12 tasks): $378
  - Sales Demo (5 tasks): $225
  - Training Batch 47 (3 tasks): $9
- **Approval Actions**: "Approve $612 Comped Payout" / "Review Details" / "Hold Payout"

**Audit Dashboard:**

- **Budget Widget**: Progress bar "$1,845 / $2,000 (92% used)" with monthly reset countdown
- **Monthly Stats**: Tasks created, completed, QA approval rate, avg cost per task
- **Type Breakdown**: Partnership / Demo / Training with task counts and costs
- **ROI Analysis**: Partnership conversions, CAC per conversion, sales demos used
- **Export Button**: "Download Full Report" (CSV)

**Variants:**

- Full-page creator (multi-step wizard)
- Quick create modal (single task, <10 batch)
- Batch manager (list view of active batches)
- Approval request (for second admin)

**Accessibility:**

- ARIA live region announces cost updates
- Keyboard navigation through form steps
- Screen reader announces budget status
- Focus management (first error field on validation)
- High-contrast indicators for budget warnings

**Content Guidelines:**

- Business labels should be descriptive: "GOOD: Acme Network Trial Jan 2025" vs "BAD: Test Batch"
- Justification should include expected value: "Enterprise prospect - $50k ARR expected"
- Cost estimates show breakdown: "20 tasks × $30 avg creator payout = $600"
- Budget warnings are proactive: Alert at 80% ("$1,600 / $2,000 - only $400 remaining")

**Interaction Behavior:**

- **Real-time cost calculation**: Updates as admin changes number of tasks or tier selection
- **Budget validation**: Blocks "Create" button if budget exceeded, shows override option for execs
- **File upload feedback**: Shows progress per file, validates audio quality
- **Approval flow**: Routes to second admin if >10 tasks, sends notification
- **Cancellation protection**: Confirms before cancelling batch with in-progress tasks
- **Batch grouping**: Links all tasks with batch_id for tracking and bulk operations

**Integration Points:**

- Links to creator profiles (when assigning specific creator)
- Connects to weekly payout approval workflow
- Feeds into monthly audit reports
- Triggers notifications (approval requests, batch completion)
- Updates analytics dashboard (comped vs paid metrics)

**Usage Context:**

- Flow 7 (Admin Creates Partnership Trial) - Primary workflow
- Admin Dashboard → Comped Tasks Tab → Create Batch
- Monthly/quarterly partnership trials, sales enablement, creator onboarding

---
