# Visual Design Foundation

### Color System

**Brand Colors** (derived from jabur logo):
- Primary Blue: `#2563EB` - Main actions, links, primary CTAs
- Light Blue: `#93C5FD` - Hover states, light backgrounds
- Primary Green: `#10B981` - Success, positive actions, creator badges
- Light Green/Mint: `#6EE7B7` - Success backgrounds
- Teal/Cyan: `#14B8A6` - Accent color, highlights, special features

**Semantic Color Mapping:**

*Status Colors (aligned with project card system):*
- Success: `#10B981` (Green) - "Delivered" status, approved submissions
- Warning: `#F59E0B` (Amber) - "In Progress" status, pending actions
- Error: `#EF4444` (Red) - "Revision Requested", critical alerts
- Info: `#38BDF8` (Sky Blue) - Informational messages, helpful tips

*Neutral Palette:*
- Gray 900 `#111827` - Primary text
- Gray 700 `#374151` - Secondary text
- Gray 500 `#6B7280` - Disabled states, placeholders
- Gray 300 `#D1D5DB` - Borders, dividers
- Gray 100 `#F3F4F6` - Background surfaces
- Gray 50 `#F9FAFB` - Page background
- White `#FFFFFF` - Cards, elevated surfaces
- Black `#000000` - Logo accent, high contrast

**Color Usage Guidelines:**
- Primary Blue: Navigation, primary buttons, active states, links
- Primary Green: Success confirmations, tier badges, positive metrics
- Teal: Special highlights, connection indicators, premium features
- Status colors: Always paired with icons (never color alone for accessibility)
- Neutral grays: Text hierarchy, borders, background layers

**Accessibility:**
- All text/background combinations meet WCAG AA minimum (4.5:1 contrast ratio)
- Interactive elements target WCAG AAA where possible (7:1)
- Status never conveyed by color alone (icons + text labels required)

### Typography System

**Typeface Selection:**
- **Primary**: Inter - Modern sans-serif designed for UI and long-form readability
- **Monospace**: JetBrains Mono - Technical data, IDs, timestamps, code snippets
- **Fallback Stack**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Type Scale (Desktop):**
- H1: 48px / 3rem - Landing hero, major page titles
- H2: 36px / 2.25rem - Section headers, dashboard titles
- H3: 28px / 1.75rem - Card titles, modal headers
- H4: 24px / 1.5rem - Subsection headers
- H5: 20px / 1.25rem - Component headers
- Body Large: 18px / 1.125rem - Lead paragraphs, emphasis
- Body: 16px / 1rem - Default body text, creator editor
- Body Small: 14px / 0.875rem - Secondary text, metadata
- Caption: 12px / 0.75rem - Labels, helper text, timestamps

**Type Scale (Mobile):**
- H1: 36px / 2.25rem
- H2: 28px / 1.75rem
- H3: 24px / 1.5rem
- Body maintains 16px for readability

**Line Heights:**
- Headings (H1-H3): 1.2 - Tight for visual impact
- Headings (H4-H5): 1.3 - Slight breathing room
- Body Large: 1.6 - Optimal for long-form reading
- Body: 1.5 - Balanced readability
- Body Small: 1.4
- Caption: 1.3
- **Creator Editor**: 1.7 - Maximum comfort for extended writing

**Font Weights:**
- Regular (400): Default body text, long-form content
- Medium (500): Button text, emphasis within body
- Semibold (600): Subheadings, card titles, active navigation
- Bold (700): Main headings, primary CTAs, critical UI elements

**Typography Context:**
- **Alex's Dashboard**: Medium weights (500-600) for scannable card titles
- **Maria's Editor**: Regular weight (400) with generous line height (1.7) for comfort
- **Admin Panels**: Semibold headers (600) with regular body for data hierarchy

### Spacing & Layout Foundation

**Base Spacing Unit: 8px**

Spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

**Grid System:**
- 12-column responsive grid
- Mobile (320px+): 4 columns, 16px gutters
- Tablet (768px+): 8 columns, 24px gutters
- Desktop (1024px+): 12 columns, 24px gutters
- Max content width: 1280px (prevents excessive line length)

**Density Variations by Context:**

*Generous (Maria's Creation Workspace):*
- Purpose: Focus and breathing room for long writing sessions
- Margins: 64px+ horizontal
- Line height: 1.7
- Max text width: 65-75 characters (optimal reading)
- Component spacing: 32-48px vertical

*Balanced (Alex's Dashboard):*
- Purpose: Efficient scanning of project cards
- Card spacing: 24px gaps in grid
- Section spacing: 48px vertical
- Card padding: 24px internal
- Between elements: 16px

*Efficient (Admin Dashboard):*
- Purpose: Data-dense information scanning
- Table row height: 48px (comfortable touch target)
- Between sections: 32px
- Component padding: 16px
- Data cell padding: 12px

**Component Spacing Standards:**
- Card padding: 24px
- Modal padding: 32px (desktop), 24px (mobile)
- Section spacing: 48px (desktop), 32px (mobile)
- Form field vertical spacing: 16px
- Button padding: 12px vertical, 24px horizontal
- Icon-to-text spacing: 8px
- List item spacing: 12px

**Layout Principles:**
1. **Consistent Rhythm**: All spacing uses 8px base unit multipliers
2. **Semantic Density**: Workspace density matches task type (focus vs. scanning)
3. **Responsive Scaling**: Spacing scales down proportionally on mobile (-25% to -50%)
4. **Visual Hierarchy**: Larger spacing indicates section breaks, smaller for related elements
5. **Max Content Width**: Text never exceeds 1280px to maintain readability

### Accessibility Considerations

**Color Contrast:**
- Text on background: Minimum 4.5:1 (WCAG AA)
- Large text (24px+): Minimum 3:1
- Interactive elements: Target 7:1 where possible (WCAG AAA)
- Never rely on color alone for status (always include icons + text)

**Typography Accessibility:**
- Minimum body text: 16px (1rem) - comfortable reading for all ages
- Maximum line length: 75 characters (prevents eye strain)
- Line height: 1.5+ for body text (1.7 for editor)
- Clear hierarchy: Size + weight + color differentiate heading levels
- Resizable text: Uses rem units, scales with user preferences

**Interactive Elements:**
- Touch targets: Minimum 44px × 44px on mobile
- Focus indicators: 2px solid outline, 4px offset, never removed
- Hover states: Clear visual feedback (color + shadow changes)
- Active states: Distinct from hover (darker color, inset shadow)

**Responsive Design:**
- Flexible layouts adapt to viewport width
- Touch-friendly spacing on mobile (increased padding/margins)
- Scalable typography (rem units respect user font size settings)
- Grid system ensures content reflows gracefully

**Screen Reader Support:**
- Semantic HTML hierarchy (proper heading levels)
- ARIA labels for icon-only buttons
- Status announcements for dynamic content changes
- Keyboard navigation for all interactive elements
