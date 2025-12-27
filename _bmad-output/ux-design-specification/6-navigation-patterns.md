# 6. NAVIGATION PATTERNS

### Purpose
Provide clear, role-based navigation for 4 user types with consistent patterns.

---

### 6.1 Role-Based Navigation Structure

**All Roles Share:**
- Top navbar: Logo (left), User menu (right)
- User menu: Avatar, username, role badge, settings, logout

**Role-Specific Sidebar (Desktop) / Bottom Tab Bar (Mobile):**

---

**Uploader Navigation:**
- Upload Episode (primary action)
- My Content (history, active orders)
- Settings

**Mobile Bottom Tabs:**
```
[Upload] [Content] [Settings]
```

---

**Creator Navigation:**
- Available Tasks (task board)
- My Workspace (active tasks)
- Earnings (dashboard, payout history)
- Discord (external link, opens new tab)
- Settings

**Mobile Bottom Tabs:**
```
[Tasks] [Workspace] [Earnings] [More]
```

---

**QA Editor Navigation:**
- Review Queue (pending reviews)
- Completed Reviews (history)
- Analytics (performance metrics)
- Settings

**Mobile Bottom Tabs:**
```
[Queue] [History] [Analytics] [Settings]
```

---

**Admin Navigation:**
- Disputes (active dispute queue)
- Creator Management (approvals, suspensions)
- Analytics Dashboard (platform health)
- Platform Settings

**Mobile Bottom Tabs:**
```
[Disputes] [Creators] [Analytics] [Settings]
```

---

**Visual Specification (Sidebar):**
- Width: 240px (desktop)
- Background: Glass (`rgba(255, 255, 255, 0.05)` + blur)
- Border-right: `1px solid rgba(255, 255, 255, 0.1)`
- Nav items:
  - Height: 44px
  - Padding: 12px 20px
  - Icon: 20x20px (left-aligned)
  - Text: 14px, medium weight
  - Gap: 12px between icon and text

**Nav Item States:**
- Default: Transparent, muted text
- Hover: `rgba(255, 255, 255, 0.05)` background, accent text
- Active/Current: `rgba(var(--color-primary-rgb), 0.15)` background, accent text, 3px left border
- Focus: Accent outline

**Visual Specification (Mobile Bottom Tab Bar):**
- Height: 64px
- Background: Glass card with stronger blur
- Border-top: `1px solid rgba(255, 255, 255, 0.2)`
- Tabs:
  - Width: Equal (25% each for 4 tabs)
  - Icon: 24x24px (centered)
  - Label: 11px (below icon)
  - Active: Accent color, subtle scale (1.05x)

---

**Accessibility:**
- `role="navigation"` on nav container
- `aria-label="Main navigation"`
- Current page: `aria-current="page"`
- Keyboard navigation: Tab through items, Enter/Space to activate
- Skip to content link at top

---

### 6.2 Breadcrumbs

**When to Use:** Deep navigation hierarchies (3+ levels), primarily Admin

**Visual Specification:**
- Position: Top of content area (below navbar)
- Font size: 13px
- Color: Muted text
- Separator: "/" or ">" (8px margin each side)
- Last item: Bold weight, not clickable (current page)

**Format:**
```
Home > Creator Management > Sarah's Profile
```

**Interaction:**
- Hover: Underline on links (not last item)
- Click: Navigate to that level

**Usage Examples:**
- Admin: Dashboard > Disputes > Dispute #1234
- Creator: Workspace > Task #5678 > Submit Review
- QA: Review Queue > Review #9012 > Rubric Scoring

**Accessibility:**
- `<nav aria-label="Breadcrumb">`
- Ordered list (`<ol>`) for semantic structure
- `aria-current="page"` on last item
- Links have clear focus indicators

---
