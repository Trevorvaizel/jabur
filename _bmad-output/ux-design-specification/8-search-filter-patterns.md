# 8. SEARCH & FILTER PATTERNS

### Purpose
Enable users to find and refine data in large lists (task board, review queue).

---

### 8.1 Search Input

**When to Use:** Users need to find specific items by keyword

**Visual Specification:**
- Width: Full-width or 320px (contextual)
- Height: 44px
- Background: Glass input
- Icon: Magnifying glass (left, 20px from edge)
- Clear button: X icon (right, appears when typing)
- Placeholder: "Search tasks..." / "Search reviews..."

**Behavior:**
- Debounced search (300ms delay after typing stops)
- Live results update (no submit button needed)
- Clear button clears input + resets results
- Esc key clears search

**Usage Examples:**
- Creator task board: "Search tasks by keyword or format type"
- QA review queue: "Search by creator name or content type"

**Accessibility:**
- `role="search"` on container
- `aria-label="Search tasks"`
- Clear button: `aria-label="Clear search"`
- Results count announced: "5 tasks found"

---

### 8.2 Filter Dropdown

**When to Use:** Users need to refine results by categories or attributes

**Visual Specification:**

**Filter Button:**
- Icon: Filter funnel icon
- Text: "Filter" or current selection ("Format: Newsletter")
- Glassmorphism button (secondary style)
- Badge: Count of active filters (blue circle, e.g., "2")

**Dropdown Menu:**
- Glass card below button
- Max-height: 400px (scrollable if many options)
- Checkboxes: Multi-select filters
- Radio buttons: Single-select filters
- Sections: Grouped by category with headings
- Footer: "Apply Filters" button (primary style)

**Filter Types:**

**Multi-Select (Checkboxes):**
- Use for: Multiple choices allowed (format types, status types)
- Example: "Content Type: [✓] Newsletter, [✓] Blog Post, [ ] LinkedIn"

**Single-Select (Radio buttons):**
- Use for: Only one choice allowed (sort order, time range)
- Example: "Sort by: ( ) Deadline, (•) Payout, ( ) Content Type"

**Range Slider:**
- Use for: Numeric ranges (payout amount, content length)
- Example: "Payout: $10 ━━●━━ $50"

---

**Behavior:**
- Click filter button: Open dropdown
- Select options: Update UI but don't apply yet
- Click "Apply Filters": Apply and close dropdown
- Click "Clear All": Reset all filters
- Click outside or Esc: Close without applying (if changed)

**Usage Examples:**
- Task board filters (Component 6):
  - Content type: Newsletter, Blog Post, LinkedIn, etc.
  - Payout range: $10-$50
  - Time estimate: 30-60min, 60-90min, 90+ min
- Review queue filters (Component 13):
  - Urgency: Overdue, <2hrs, <6hrs, All
  - Creator tier: Probationary, Junior, Mid, Senior, Expert
  - Content type: Newsletter, Blog, Social

**Accessibility:**
- `aria-expanded` on button (true when open)
- `aria-haspopup="true"`
- Keyboard navigation: Tab through options, Space to toggle
- Focus trap within dropdown when open
- Active filter count announced: "2 filters applied"

---
