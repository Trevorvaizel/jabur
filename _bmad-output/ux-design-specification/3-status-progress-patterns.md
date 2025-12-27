# 3. STATUS & PROGRESS PATTERNS

### Purpose
Communicate system state and operation progress clearly to reduce user anxiety.

---

### 3.1 Linear Progress Bar

**When to Use:** Long-running operations with known or unknown completion time

**Visual Specification:**
- Container: Glass bar (100% width or fixed width component)
- Height: 8px (compact), 12px (standard)
- Background: `rgba(255, 255, 255, 0.1)` with subtle inner shadow
- Filled portion: Solid accent color (`var(--color-primary)`)
- Border radius: 999px (fully rounded ends)
- Optional label: Above or below bar (percentage, current action)

---

**Determinate Progress (Known completion %):**
- Width: Percentage of total (0-100%)
- Smooth animation: `transition: width 0.3s ease-out`
- Label: "67%" or "Uploading... 67%"

**Usage Examples:**
- Upload Progress Indicator (Component 2): "Uploading... 67%"
- Tier Progress (Component 8): "15/20 approvals to Junior"

**Visual Enhancements:**
- Gradient fill: Subtle gradient for visual interest
- Shimmer effect: Moving highlight for active progress

---

**Indeterminate Progress (Unknown duration):**
- Animation: Shimmer effect moving left-to-right infinitely
- Width: 30% of container, animated position
- Label: "Processing..." or action description

**Usage Examples:**
- "Transcribing audio..." (after upload, before duration known)
- "Processing payment..."
- "Generating AI summary..."

---

**Accessibility:**
- `role="progressbar"`
- `aria-valuenow` (current value for determinate)
- `aria-valuemin="0"`
- `aria-valuemax="100"`
- `aria-label` describes what's progressing ("Upload progress: 67%")
- Announce milestones (25%, 50%, 75%, 100%)

---

### 3.2 Status Badge

**When to Use:** Indicate current state of items in lists, cards, dashboards

**Visual Specification:**
- Shape: Pill (fully rounded)
- Height: 24px (small), 28px (medium)
- Padding: 6px 12px
- Background: Glassmorphism with color tint
- Border: 1px solid (matching status color at 30% opacity)
- Icon: 16x16px (optional, left-aligned)
- Text: 12px, bold weight, uppercase

---

**Status Color Coding:**

**Pending (Yellow/Orange):**
- Background: `rgba(251, 191, 36, 0.15)`
- Border: `rgba(251, 191, 36, 0.3)`
- Text: Orange
- Icon: Clock
- Usage: "PENDING PAYMENT", "PENDING QA REVIEW"

**In Progress (Blue):**
- Background: `rgba(59, 130, 246, 0.15)`
- Border: `rgba(59, 130, 246, 0.3)`
- Text: Blue
- Icon: Spinner (animated)
- Usage: "IN PROGRESS", "CREATING CONTENT"

**Complete/Success (Green):**
- Background: `rgba(34, 197, 94, 0.15)`
- Border: `rgba(34, 197, 94, 0.3)`
- Text: Green
- Icon: Checkmark
- Usage: "COMPLETED", "PAID", "APPROVED"

**Failed/Rejected (Red):**
- Background: `rgba(220, 38, 38, 0.15)`
- Border: `rgba(220, 38, 38, 0.3)`
- Text: Red
- Icon: X
- Usage: "FAILED", "REJECTED", "PAYMENT FAILED"

**Expired/Inactive (Gray):**
- Background: `rgba(156, 163, 175, 0.15)`
- Border: `rgba(156, 163, 175, 0.3)`
- Text: Gray
- Icon: X or Lock
- Usage: "EXPIRED", "UNAVAILABLE", "SUSPENDED"

---

**Usage Examples:**
- Payment status (Component 9: Earnings Dashboard): "PENDING" / "PAID" / "FAILED"
- Task status (Component 6: Task Card): "AVAILABLE" / "CLAIMED" / "EXPIRED"
- QA review status: "IN REVIEW" / "APPROVED" / "NEEDS REVISION"
- Creator tier (Component 8): "PROBATIONARY" / "JUNIOR" / "MID-LEVEL"

**Accessibility:**
- `aria-label` includes full status context ("Payment status: Pending")
- Color not sole indicator (icons + text reinforce meaning)
- High contrast ratios for text legibility

---

### 3.3 Countdown Timer

**When to Use:** Communicate urgency for time-sensitive tasks or deadlines

**Visual Specification:**
- Format: "2h 34m remaining" or "Due in 18 hours"
- Font size: 16px (medium), 20px (prominent)
- Font weight: Bold (600)
- Color: Dynamic based on time remaining
- Icon: Clock icon (optional)

**Color Urgency Scale:**
- **Green** (>4 hours): `var(--color-success)`
- **Yellow** (2-4 hours): `var(--color-warning-yellow)`
- **Orange** (1-2 hours): `var(--color-warning-orange)`
- **Red** (<1 hour): `var(--color-danger)` with pulsing animation

**Update Frequency:**
- Every 60 seconds (not real-time - performance consideration)
- Immediate update on visibility change (tab focus, window resize)

**Warning Notifications:**
- 2 hours remaining: Warning toast
- 1 hour remaining: Warning toast + sound (optional)
- 30 minutes remaining: Critical warning banner

**Usage Examples:**
- Creator workspace (Component 10): "3 hours 24 minutes remaining to complete task"
- Payment reminder: "Payment due in 6 hours"
- Friday payout countdown (Component 9): "Payout in 2 days 5 hours"

**Accessibility:**
- `aria-live="polite"` (updates announced periodically, not every 60s)
- Announce warnings at critical thresholds (2hr, 1hr, 30min)
- Visual + text indicators (not relying on color alone)

**Animation (Red/Critical State):**
- Subtle pulse: `animation: pulse 2s ease-in-out infinite`
- Scale: 1.0 → 1.05 → 1.0

---
