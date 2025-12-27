# 5. MODAL & OVERLAY PATTERNS

### Purpose
Provide focused interactions for confirmations, detail views, and critical decisions.

---

### 5.1 Modal Dialog

**When to Use:** Focused task requiring user attention or confirmation before proceeding

**Visual Specification:**

**Backdrop:**
- Overlay: Full screen, dark glassmorphism
- Background: `rgba(0, 0, 0, 0.7)` with `backdrop-filter: blur(8px)`
- Click behavior: Dismiss modal if non-critical (info modals), no dismiss if critical (confirmations)

**Modal Card:**
- Position: Centered (vertical + horizontal)
- Max-width: 600px (medium), 800px (large for content)
- Max-height: 90vh (scrollable content if exceeds)
- Background: Glass card (`rgba(255, 255, 255, 0.1)` + `backdrop-filter: blur(40px)`)
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Border radius: 16px
- Shadow: `0 24px 48px rgba(0, 0, 0, 0.2)`
- Padding: 24px (header), 24px (content), 24px (footer)

**Header:**
- Title: 20px, bold weight
- Close button: X icon (top-right, 32x32px touch target)

**Content Area:**
- Scrollable if content exceeds max-height
- Padding: 24px
- Custom scrollbar styled to match design system

**Footer (Actions):**
- Button alignment: Right-aligned (primary right-most)
- Button gap: 12px horizontal spacing
- Sticky footer if content scrolls

---

**Modal Types:**

**Informational Modal:**
- Purpose: Display details, examples, help content
- Actions: Single "Close" or "Got it" button (secondary style)
- Dismissal: Click outside, Esc key, close button

**Usage Examples:**
- Format example preview (Component 5: "See Example →")
- Help documentation
- Feature announcement

---

**Confirmation Modal:**
- Purpose: Confirm destructive or significant actions
- Actions: Destructive button + Cancel button
- Dismissal: Only via explicit button choice (no outside click, no Esc)
- Header color: Red accent for destructive, orange for caution

**Usage Examples:**
- "Delete Upload?" - [Delete Permanently] [Cancel]
- "Reject this content?" - [Reject & Notify Creator] [Go Back]
- "Cancel Subscription?" - [Yes, Cancel] [Keep Subscription]

**Confirmation Copy:**
- Clear consequence: "This will permanently delete your upload. This action cannot be undone."
- Explicit choices: "Delete Permanently" (not just "OK"), "Cancel" (not "No")

---

**Decision Modal:**
- Purpose: User must choose between options (not yes/no)
- Actions: Multiple choice buttons (radio selection + confirm, or direct action buttons)
- Dismissal: Via button choice only

**Usage Examples:**
- "Wrong file uploaded?" - [Upload Different File] [Proceed Anyway]
- "Audio quality warning" - [Upload Better Quality] [Use Current File]
- "Choose notification preference" - [Email] [SMS] [Both]

---

**Accessibility:**
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby` pointing to modal title
- `aria-describedby` pointing to modal description (if present)
- Focus management:
  - Trap focus within modal (Tab loops inside)
  - Focus first interactive element on open (close button or first action)
  - Return focus to trigger element on close
- Keyboard:
  - Esc to dismiss (if non-critical)
  - Enter to confirm primary action
  - Tab to navigate between actions

---

### 5.2 Popover (Contextual Info)

**When to Use:** Short, contextual help or details without interrupting flow

**Visual Specification:**
- Max-width: 300px
- Background: Glass card (`rgba(0, 0, 0, 0.9)` + `backdrop-filter: blur(20px)`) - darker for readability
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Border radius: 8px
- Padding: 12px 16px
- Shadow: `0 8px 24px rgba(0, 0, 0, 0.3)`
- Arrow: 8px triangle pointing to trigger element
- Font size: 13px

**Positioning:**
- Auto-position: Flip if near viewport edge (top/bottom/left/right)
- Arrow adjusts to point at trigger
- 8px gap from trigger element

**Trigger Behavior:**
- Desktop: Hover (300ms delay to show, immediate hide on mouse leave)
- Mobile: Tap to toggle
- Keyboard: Focus trigger element

**Content:**
- Short text only (no interactive elements inside)
- Max 2-3 lines
- No images or complex formatting

**Dismissal:**
- Desktop: Mouse leave trigger or popover
- Mobile: Tap outside or tap trigger again
- Keyboard: Esc key or Tab away from trigger

**Usage Examples:**
- Tier requirements tooltip (Component 8): Hover tier badge → "Junior: 20 approved tasks, avg score 4.0+"
- Button help text: Hover disabled button → "Complete profile to unlock"
- Icon explanations: Hover QA score icon → "Quality score based on 6 dimensions"

**Accessibility:**
- `aria-describedby` on trigger linking to popover ID
- Popover content announced by screen reader on trigger focus
- No focus trap (content is non-interactive)
- Esc key dismisses

---
