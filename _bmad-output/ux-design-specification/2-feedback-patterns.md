# 2. FEEDBACK PATTERNS

### Purpose
Provide immediate, clear feedback for user actions and system states using consistent notification patterns.

---

### 2.1 Toast Notification (Temporary Feedback)

**When to Use:** Immediate, temporary confirmation or alerts that don't require user action

**Visual Specification:**
- Container: Glassmorphism card (320px max-width)
- Position: Top-right corner, 24px from edge
- Shadow: `0 8px 32px rgba(0, 0, 0, 0.15)`
- Border radius: 12px
- Padding: 16px
- Icon size: 24x24px (left-aligned)
- Text: 14px, max 2 lines
- Auto-dismiss indicator: Subtle progress bar at bottom

**Animation:**
- Enter: Slide in from right (300ms ease-out)
- Exit: Fade out (200ms ease-in)
- Hover: Pause auto-dismiss timer

---

#### Success Toast
**Visual:**
- Background: Green glassmorphism (`rgba(34, 197, 94, 0.15)` + blur)
- Border: 1px solid `rgba(34, 197, 94, 0.3)`
- Icon: White checkmark in green circle
- Text color: White

**Duration:** 3 seconds auto-dismiss

**Usage Examples:**
- "✓ Task claimed successfully"
- "✓ Content submitted to QA"
- "✓ Payment sent to your bank"
- "✓ File uploaded successfully"

---

#### Error Toast
**Visual:**
- Background: Red glassmorphism (`rgba(220, 38, 38, 0.15)` + blur)
- Border: 1px solid `rgba(220, 38, 38, 0.3)`
- Icon: White X in red circle
- Text color: White
- Optional retry button (secondary style)

**Duration:** 5 seconds auto-dismiss (longer for errors)

**Animation:** Shake on appear (subtle horizontal oscillation)

**Usage Examples:**
- "✗ Upload failed - file too large (max 500MB)"
- "✗ Payment declined - [Update Payment Method]"
- "✗ Task claim failed - already taken by another creator"

---

#### Warning Toast
**Visual:**
- Background: Orange glassmorphism (`rgba(251, 146, 60, 0.15)` + blur)
- Border: 1px solid `rgba(251, 146, 60, 0.3)`
- Icon: White exclamation in orange triangle
- Text color: White
- Optional action button

**Duration:** 4 seconds auto-dismiss

**Animation:** Subtle pulse (scale 1.0 → 1.02 → 1.0)

**Usage Examples:**
- "⚠ Only 2 hours left to complete task"
- "⚠ Background noise detected - [Proceed Anyway] or [Upload Better Quality]"
- "⚠ QA score below 3.0 - revision required"

---

#### Info Toast
**Visual:**
- Background: Blue glassmorphism (`rgba(59, 130, 246, 0.15)` + blur)
- Border: 1px solid `rgba(59, 130, 246, 0.3)`
- Icon: White "i" in blue circle
- Text color: White

**Duration:** 3 seconds auto-dismiss

**Usage Examples:**
- "ℹ Auto-saved 10 seconds ago"
- "ℹ New task available in Newsletter category"
- "ℹ Platform maintenance scheduled Dec 28, 2am-4am UTC"

---

**Toast Accessibility:**
- ARIA live region: `aria-live="polite"` (success/info), `aria-live="assertive"` (error/warning)
- Screen reader announces message text
- Keyboard dismissible (Esc key)
- Focus trap if interactive buttons present
- Pause auto-dismiss on hover or focus

**Stacking Behavior:**
- Max 3 toasts visible simultaneously
- New toasts push older toasts down
- Oldest dismissed first if limit exceeded

---

### 2.2 Inline Validation (Form Feedback)

**When to Use:** Real-time field validation in forms

**Timing Strategy:**

**On Blur (Default for most fields):**
- Trigger: User leaves field (blur event)
- Validate: Check format, required, constraints
- Re-validate: On input change (to show success state when fixed)

**On Submit (For simple fields):**
- Trigger: Form submit button clicked
- Validate: All fields simultaneously
- Focus: First error field
- Scroll: To first error if off-screen

**Real-Time (For critical fields):**
- Password strength meter (as typing)
- Character count (for limited fields)
- Username availability (debounced check)

---

**Visual Specification (Error State):**
- Input border: Red (`var(--color-error)`, 2px)
- Error icon: Red X icon (right side of input)
- Error text: Red text below input (14px, `color: var(--color-error)`)
- Background: Subtle red tint (`rgba(220, 38, 38, 0.05)`)
- Animation: Subtle shake on validation fail

**Visual Specification (Success State - Optional):**
- Input border: Green (`var(--color-success)`, 2px)
- Success icon: Green checkmark (right side)
- Background: Subtle green tint (`rgba(34, 197, 94, 0.05)`)

**Error Message Guidelines:**
- Specific: "Email must include @" (not "Invalid email")
- Actionable: "Password must be 8+ characters" (tells user what to do)
- Concise: Max 60 characters

**Usage Examples:**
- Email validation: "Email must include @ symbol"
- Password strength: "Password must be 8+ characters with 1 number"
- File upload: "File must be under 500MB - current file is 750MB"
- Required field: "This field is required"

**Accessibility:**
- `aria-invalid="true"` on error state
- `aria-describedby` linking input to error message ID
- Error message announced by screen reader on blur
- Error icon has `aria-label="Error"`

---

### 2.3 Banner Alert (Page-Level Feedback)

**When to Use:** Persistent, page-level messages requiring user awareness or action

**Visual Specification:**
- Full-width banner at top of content area (below navbar)
- Height: Auto (min 60px)
- Padding: 16px 24px
- Icon: 24x24px (left-aligned)
- Text: 14px, bold for heading, regular for description
- Dismiss button: X icon (right-aligned, 24x24px)
- Action button: Secondary button style (optional)

**Banner Types:**

**Success Banner:**
- Background: Green glassmorphism with `backdrop-filter`
- Border-left: 4px solid green
- Icon: Green checkmark
- Example: "✓ Your account has been verified. You can now access all features."

**Error Banner:**
- Background: Red glassmorphism
- Border-left: 4px solid red
- Icon: Red X
- Action button: Often present for remediation
- Example: "✗ Subscription payment failed. [Update Payment Method] to continue service."

**Warning Banner:**
- Background: Orange glassmorphism
- Border-left: 4px solid orange
- Icon: Orange exclamation triangle
- Example: "⚠ Your task will expire in 1 hour. [Extend Deadline] or complete now."

**Info Banner:**
- Background: Blue glassmorphism
- Border-left: 4px solid blue
- Icon: Blue info circle
- Example: "ℹ Platform maintenance scheduled for Dec 28, 2am-4am UTC. Expect brief downtime."

**Accessibility:**
- `role="alert"` for urgent messages (error, warning)
- `role="status"` for informational messages
- Focusable dismiss button
- Keyboard dismissible (Esc key)
- Announce on page load if present

**Duration:**
- Manual dismiss (user clicks X)
- Optional auto-dismiss after 10 seconds for low-priority info banners

---
