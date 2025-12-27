# 7. EMPTY & LOADING STATES

### Purpose
Communicate absence of data or loading state without leaving users confused.

---

### 7.1 Empty State

**When to Use:** No data available (empty list, no search results, first-time user)

**Visual Specification:**
- Container: Glass card (centered, max-width 400px)
- Icon: Large (64x64px), muted color, centered
- Heading: 20px, bold, centered, "No tasks available"
- Subtext: 14px, muted color, centered, "Check back soon for new opportunities"
- Optional CTA: Secondary button, "Get Notified When Tasks Available"
- Spacing: 24px between icon, heading, subtext, CTA

**Empty State Types:**

**No Data Yet (First-time user):**
- Icon: Friendly illustration or icon (e.g., empty inbox)
- Heading: Encouraging ("You're all set!")
- Subtext: Next action ("Upload your first episode to get started")
- CTA: Primary action ("Upload Episode")

**Examples:**
- Uploader content history: "No uploads yet. Upload your first episode to transform it into content."
- Creator task board: "No tasks match your current tier. Keep improving to unlock more opportunities."

---

**No Results (Search/Filter):**
- Icon: Magnifying glass with X
- Heading: "No results found"
- Subtext: "Try different keywords or filters"
- CTA: "Clear Filters"

**Example:**
- Task search: "No tasks match 'blockchain newsletter'. Try broader search terms."

---

**All Caught Up:**
- Icon: Checkmark or empty inbox
- Heading: "You're all caught up!"
- Subtext: Positive reinforcement ("Great work - no pending reviews")
- No CTA (nothing to do)

**Example:**
- QA review queue: "All caught up! No pending reviews. New submissions will appear here."

---

**Accessibility:**
- `role="status"` on container
- Clear, actionable messaging (not vague "No items")
- CTA button is keyboard accessible if present

---

### 7.2 Loading State (Skeleton)

**When to Use:** Content is loading (API fetch, data processing)

**Visual Specification:**
- Placeholders: Gray glass rectangles matching content shape
- Background: `rgba(255, 255, 255, 0.05)`
- Animation: Shimmer effect (gradient moving left-to-right, 2s loop)
- Preserve layout: Skeletons match final content dimensions (prevents jump when loads)

**Shimmer Animation:**
```css
background: linear-gradient(
  90deg,
  rgba(255, 255, 255, 0.05) 0%,
  rgba(255, 255, 255, 0.1) 50%,
  rgba(255, 255, 255, 0.05) 100%
);
background-size: 200% 100%;
animation: shimmer 2s infinite;
```

**Skeleton Examples:**

**Task Card Loading:**
```
┌─────────────────────────┐
│ ████████░░░░ (title)    │
│ ████░░░░░░░░ (subtitle) │
│ ██████████░░ (payout)   │
│ [████████] (button)     │
└─────────────────────────┘
```

**Table Row Loading:**
```
████░░░░ | ████████░░░░ | ████░░ | ████████
```

**Usage Examples:**
- Task board loading (Component 6: Task Card skeletons)
- Review queue loading (Component 13: Review queue card skeletons)
- Analytics dashboard loading (Component 16: Chart placeholders)

**Accessibility:**
- `aria-busy="true"` on container
- `aria-live="polite"` announces when content loads ("5 tasks loaded")
- Screen reader text: "Loading tasks..." (visually hidden)

---
