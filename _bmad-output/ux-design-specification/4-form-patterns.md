# 4. FORM PATTERNS

### Purpose
Standardize data input across the platform for consistency, usability, and accessibility.

---

### 4.1 Input Field Standards

**Text Input:**

**Visual Specification:**
- Label: Above field, 14px, medium weight, `color: var(--color-text-primary)`
- Required indicator: Red asterisk (*) after label
- Input field:
  - Background: Glassmorphism (`rgba(255, 255, 255, 0.05)` + `backdrop-filter: blur(10px)`)
  - Border: 1px solid `rgba(255, 255, 255, 0.2)`
  - Border radius: 8px
  - Padding: 12px 16px
  - Font size: 14px
  - Height: 44px (for touch targets)
- Placeholder: Muted text (`color: rgba(255, 255, 255, 0.5)`), example format ("e.g., alex@example.com")
- Help text: Below field, 13px, muted color, optional
- Error text: Below field, 13px, red color, appears on validation fail

**State Styles:**

**Default:**
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Background: Glass (`rgba(255, 255, 255, 0.05)`)

**Focus:**
- Border: `2px solid var(--color-primary)` (accent)
- Background: Slightly more opaque (`rgba(255, 255, 255, 0.08)`)
- Glow: `box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.1)`
- Outline: None (border serves as focus indicator)

**Error:**
- Border: `2px solid var(--color-error)`
- Background: Subtle red tint (`rgba(220, 38, 38, 0.05)`)
- Icon: Red X (right side, 20px from edge)
- Shake animation on validation fail (subtle horizontal)

**Success (Optional for non-critical fields):**
- Border: `2px solid var(--color-success)`
- Background: Subtle green tint (`rgba(34, 197, 94, 0.05)`)
- Icon: Green checkmark (right side)

**Disabled:**
- Opacity: 50%
- Cursor: `not-allowed`
- No hover or focus states
- Background: Darker glass to indicate inactivity

---

**Required Field Handling:**
- Red asterisk (*) in label: "Email *"
- `aria-required="true"` attribute
- Validation on submit (NOT on first blur - reduces anxiety)
- Clear error message: "Email is required"

---

### 4.2 Form Layout

**Vertical Stack (Preferred for Accessibility):**
- One field per row (full width or constrained to max 600px)
- Label above input (always visible, not placeholder)
- Consistent vertical spacing: 24px between fields
- Group related fields in bordered glass card
- Clear visual separation between groups

**Example:**
```
┌─────────────────────────────┐
│ Account Information         │ ← Group heading
├─────────────────────────────┤
│ Email *                     │ ← Label
│ [                         ] │ ← Input
│                             │
│ Password *                  │
│ [                         ] │
│                             │
│ [Create Account]            │ ← Primary CTA
└─────────────────────────────┘
```

---

**Horizontal Pair (Only for tightly related fields):**
- Max 2 fields per row
- Equal width (50/50 split)
- 16px horizontal gap
- Use sparingly (first name/last name, start date/end date)

**Example:**
```
First Name *          Last Name *
[             ]       [             ]
```

---

**Submit Button Placement:**
- Bottom-right of form (for action flow)
- Bottom-left for back/cancel (if applicable)
- Sticky on mobile (fixed to bottom of viewport for long forms)
- Minimum 48px height for touch targets

---

**Field Grouping:**
- Use `<fieldset>` + `<legend>` for related groups
- Glass card with border for visual grouping
- Heading for each group (16px, bold)

**Example:**
```
┌─────────────────────────────┐
│ Payment Method              │ ← Legend
├─────────────────────────────┤
│ ( ) Credit Card             │ ← Radio group
│ ( ) Bank Transfer           │
│ ( ) M-Pesa                  │
└─────────────────────────────┘
```

---

**Accessibility:**
- Logical tab order (top to bottom, left to right)
- Clear focus indicators (2px accent border + glow)
- Labels associated with inputs (`<label for="id">`)
- Field groups use `<fieldset>` + `<legend>`
- Error messages use `aria-describedby`

---

### 4.3 Validation Timing Strategy

**On Submit (Default for most forms):**
- Trigger: User clicks submit button
- Validate: All fields simultaneously
- Behavior:
  - Scroll to first error field
  - Focus first error field
  - Show all errors at once (not one at a time)
  - Disable submit button during processing

**Use for:** Login, signup, settings forms

---

**On Blur (For complex validations):**
- Trigger: User leaves field (blur event)
- Validate: Check field format, constraints, required
- Re-validate: On input change (to show success when fixed)

**Use for:**
- Email format validation
- Password strength checking
- Username availability (async check)
- Phone number format

**Avoid for:** Required fields on first blur (causes anxiety - "I was getting to it!")

---

**Real-Time (For critical fields):**
- Trigger: On input change (debounced 300ms)
- Validate: Immediate feedback as typing

**Use for:**
- Password strength meter (live updates)
- Character count (for limited fields like Twitter: "240/280")
- Username availability (debounced async check)

**Examples:**
```
Password Strength: ████░░ Medium
Use 8+ characters, include number and symbol for Strong

Character Count: 156/280
124 characters remaining
```

---

**Error Message Best Practices:**
- **Specific:** "Email must include @" (not "Invalid email")
- **Actionable:** "Password must be 8+ characters" (tells user what to do)
- **Concise:** Max 60 characters
- **Positive tone:** "Email must include @" (not "You forgot to add @")

---
