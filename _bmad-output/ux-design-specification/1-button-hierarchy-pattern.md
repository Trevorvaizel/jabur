# 1. BUTTON HIERARCHY PATTERN

### Purpose
Establish clear visual hierarchy for actions across all user flows, ensuring users can identify primary actions instantly.

### Visual Design (Glassmorphism Integration)

#### Primary Action Button
**When to Use:** Most important action on screen (one per view)

**Visual Specification:**
- Background: Solid accent color (`var(--color-primary)`)
- Text: White, bold weight (600)
- Border: None
- Glass effect: None (solid, not translucent)
- Border radius: 8px
- Padding: 12px 24px (medium), 16px 32px (large)
- Hover: Darken 10% (`filter: brightness(0.9)`), lift 2px (`transform: translateY(-2px)`)
- Focus: 3px accent outline (`outline: 3px solid var(--color-primary)`)
- Active: Scale 98% (`transform: scale(0.98)`)
- Disabled: 40% opacity, `cursor: not-allowed`, no hover effects

**Usage Examples:**
- "Claim Task" (Creator flow - Component 6: Task Card)
- "Submit for QA" (Creator workspace - Component 10)
- "Get My Free Format" (Uploader format selection - Component 5)
- "Unlock & Download Now" (Content preview - Component 3)

**Accessibility:**
- Min 44x44px touch target (mobile)
- Min 32x32px click target (desktop)
- Keyboard focusable (Tab navigation)
- Enter/Space to activate
- ARIA label if icon-only button

---

#### Secondary Action Button
**When to Use:** Supporting actions, alternatives to primary action

**Visual Specification:**
- Background: Glassmorphism (`rgba(255, 255, 255, 0.1)` with `backdrop-filter: blur(20px)`)
- Text: Accent color (`var(--color-primary)`), medium weight (500)
- Border: 1px solid `rgba(var(--color-primary-rgb), 0.3)`
- Border radius: 8px
- Padding: 12px 24px (medium)
- Hover: Increase opacity to `rgba(255, 255, 255, 0.15)`, lift 1px
- Focus: 3px accent outline
- Active: Scale 99%
- Disabled: 40% opacity, no interaction

**Usage Examples:**
- "See Example →" (Format comparison grid - Component 5)
- "Request Revision" (Content preview - Component 3)
- "View Full Progress" (Tier progress indicator - Component 8)
- "Export CSV" (Earnings dashboard - Component 9)

---

#### Tertiary Action (Link-style)
**When to Use:** Low-emphasis actions, navigation, help links

**Visual Specification:**
- Background: Transparent
- Text: Muted color (`var(--color-text-secondary)`), regular weight (400)
- Border: None
- Underline: None default, underline on hover
- Padding: 8px (for touch target)
- Hover: Underline, slight color darken
- Focus: Dotted outline (1px)
- Disabled: 40% opacity

**Usage Examples:**
- "Cancel" links
- "Show 4 More Formats ▼"
- "Not sure which format to pick?" help text
- "Skip this step"

---

#### Destructive Action Button
**When to Use:** Dangerous or irreversible actions requiring caution

**Visual Specification:**
- Background: Solid danger color (`var(--color-danger-red)`, #DC2626)
- Text: White, bold weight (600)
- Border: None
- Border radius: 8px
- Padding: 12px 24px
- Hover: Darken 10%, lift 2px
- Focus: 3px danger outline (`outline: 3px solid var(--color-danger-red)`)
- **Confirmation Required:** Modal dialog before action execution
- Disabled: 40% opacity

**Usage Examples:**
- "Reject" (QA review - Component 11)
- "Delete Upload" (Uploader content management)
- "Suspend Creator" (Admin creator management)
- "Cancel Subscription" (User settings)

**Accessibility Note:** Confirmation modal must:
- Clearly state consequences ("This will delete your upload permanently")
- Provide escape ("Never mind" / "Go Back")
- Require explicit confirmation (not accidental)

---

### Button Sizing Scale

**Large (Mobile Primary CTAs):**
- Height: 48px
- Padding: 16px 32px
- Font size: 16px
- Use: Mobile primary actions, high-emphasis CTAs

**Medium (Desktop Primary CTAs):**
- Height: 40px
- Padding: 12px 24px
- Font size: 14px
- Use: Standard desktop actions

**Small (Secondary/Inline):**
- Height: 32px
- Padding: 8px 16px
- Font size: 13px
- Use: Inline actions, table actions, secondary buttons

---
