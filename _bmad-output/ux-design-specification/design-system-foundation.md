# Design System Foundation

### Design System Choice

**Primary Design System: shadcn/ui (Tailwind CSS + Radix UI Primitives)**

shadcn/ui is a collection of re-usable components built using Radix UI primitives and styled with Tailwind CSS. Unlike traditional component libraries, shadcn/ui uses a unique "copy-paste" approach where components live directly in your codebase, providing complete ownership and customization freedom.

**Component Architecture:**
- **Foundation:** Tailwind CSS 4.x (already in Jabur's stack)
- **Primitives:** Radix UI (unstyled, accessible React components)
- **Components:** shadcn/ui pre-built components (button, dialog, dropdown, command, etc.)
- **Custom Components:** Purpose-built for Jabur's unique needs (waveform player, transcript viewer, rubric scorer)

**Key Components for Jabur:**

**Standard shadcn/ui Components:**
- **Form controls:** Button, Input, Textarea, Select, Checkbox, RadioGroup
- **Navigation:** Tabs, Breadcrumb, Command (⌘K search)
- **Feedback:** Dialog, Alert, Toast, Progress, Badge
- **Data display:** Table, Card, Avatar, Separator
- **Overlays:** Sheet (side panel), Popover, Tooltip, DropdownMenu

**Custom Jabur Components (Built on shadcn foundation):**
- **AudioPlayer:** Waveform visualization + transcript sync (WaveSurfer.js integration)
- **TranscriptViewer:** Clickable transcript with playback highlighting
- **RubricScorer:** QA editor scoring interface with inline comments
- **TaskCard:** Expandable task preview with claim interaction
- **TierProgressBar:** Visual tier advancement tracker with milestones
- **EarningsDashboard:** Creator financial visibility widget
- **StyleGuidePanel:** Collapsible brand voice reference panel

### Rationale for Selection

**Why shadcn/ui is the optimal choice for Jabur:**

**1. Accessibility-First Foundation (Critical for Creator Workspace)**

Radix UI primitives provide enterprise-grade accessibility out of the box:
- **Keyboard navigation:** Full keyboard support for all interactive components (essential for Maria's keyboard-heavy workflow)
- **Screen reader optimization:** Proper ARIA attributes, semantic HTML, focus management
- **Keyboard shortcuts:** Command palette (⌘K) pattern for power users
- **Focus management:** Automatic focus trapping in modals, predictable tab order

**Jabur benefit:** Creator workspace keyboard shortcuts (spacebar = play/pause, arrows = skip, / = command menu) integrate seamlessly with Radix primitives. QA editor side-by-side review interface maintains accessibility at scale.

**2. Complete Customization Freedom (Essential for Unique Components)**

Components live in your codebase (`/components/ui/`), not locked in node_modules:
- **Audio workspace customization:** Full control to build waveform player, transcript sync, progress indicators
- **Four role-specific interfaces:** Customize same base components differently for Client/Creator/Editor/Admin
- **Brand voice matching:** Custom styling for Jabur's premium, professional positioning
- **No upgrade conflicts:** Update only components you need, when you need

**Jabur benefit:** Custom AudioPlayer component can extend shadcn Button/Dialog patterns while integrating WaveSurfer.js for waveform visualization. No fighting against library constraints.

**3. Tailwind CSS Native (Leverages Existing Stack)**

Built entirely with Tailwind utility classes:
- **No new CSS paradigm:** Team already knows Tailwind 4.x
- **Consistent styling language:** Same utilities for custom components and shadcn components
- **Design token integration:** Tailwind config defines colors, spacing, typography once
- **JIT compilation:** Only ship CSS actually used

**Jabur benefit:** Waveform player, transcript viewer, and standard form controls all use same Tailwind utilities. Single source of truth for design tokens.

**4. Production-Ready Component Patterns**

Pre-built components follow React best practices:
- **Composition over configuration:** Flexible, composable component APIs
- **TypeScript-first:** Full type safety for props, events, state
- **React 19 compatible:** Uses latest React patterns (Server Components where applicable)
- **Performance optimized:** Lazy loading, code splitting, minimal bundle impact

**Jabur benefit:** Command palette (⌘K) component perfect for creator workspace quick actions. Dialog/Sheet components ideal for task claiming, submission review, tier advancement modals.

**5. Active Ecosystem and Community**

Rapidly growing community with excellent support:
- **Comprehensive documentation:** Clear examples for every component
- **Community components:** Additional patterns (data tables, charts, forms) built by community
- **Regular updates:** Active maintenance, new components added frequently
- **Framework agnostic:** Can be used with Next.js, Remix, Vite, etc.

**Jabur benefit:** Next.js 15 App Router support confirmed. Community-built data table component can be adapted for admin dashboards, QA queue management.

**6. No Vendor Lock-In**

Copy-paste architecture means zero dependency risk:
- **Own the code:** Components live in your repo, fully modifiable
- **No breaking updates:** Library updates are optional component refreshes
- **Mix and match:** Use only components you need, ignore the rest
- **Future-proof:** If shadcn/ui disappears, your components remain functional

**Jabur benefit:** Long-term maintenance confidence. Custom audio workspace components won't break due to upstream library changes.

### Implementation Approach

**Phase 1: Foundation Setup (Week 1)**

**1.1 Install shadcn/ui CLI and Dependencies**
```bash
npx shadcn-ui@latest init
```

**1.2 Configure Tailwind Design Tokens**

Define Jabur's brand colors, typography, and spacing in `tailwind.config.ts`:

```typescript
// Jabur Brand Colors (Example - to be refined in Visual Foundation step)
colors: {
  primary: {
    50: '#f0f9ff',   // Light blue backgrounds
    500: '#0ea5e9',  // Primary brand blue
    700: '#0369a1',  // Darker blue for hover states
  },
  success: '#10b981', // Tier advancement, approval states
  warning: '#f59e0b', // Pending review, approaching deadlines
  error: '#ef4444',   // Rejection, validation errors
  neutral: {
    50: '#fafafa',   // Background
    700: '#404040',  // Body text
    900: '#171717',  // Headings
  }
}
```

**1.3 Install Base Components**

Install core shadcn/ui components needed across all roles:
```bash
npx shadcn-ui@latest add button input textarea select checkbox radio-group
npx shadcn-ui@latest add dialog alert toast progress badge
npx shadcn-ui@latest add tabs breadcrumb command
npx shadcn-ui@latest add table card avatar separator
npx shadcn-ui@latest add sheet popover tooltip dropdown-menu
```

**Phase 2: Custom Component Development (Week 2-3)**

**2.1 AudioPlayer Component (Highest Priority)**

Built on shadcn Button/Slider primitives + WaveSurfer.js:

```typescript
// /components/audio-player.tsx
interface AudioPlayerProps {
  audioUrl: string;
  transcript: TranscriptSegment[];
  onTimestampClick: (time: number) => void;
}

// Features:
// - Waveform visualization (WaveSurfer.js)
// - Play/pause/skip controls (shadcn Button)
// - Speed control (shadcn Select: 0.5x, 1x, 1.5x, 2x)
// - Timestamp display and seeking (shadcn Slider)
// - Keyboard shortcuts (spacebar, arrows)
```

**2.2 TranscriptViewer Component**

Syncs with AudioPlayer:

```typescript
// /components/transcript-viewer.tsx
interface TranscriptViewerProps {
  segments: TranscriptSegment[];
  currentTime: number;
  onSegmentClick: (time: number) => void;
}

// Features:
// - Clickable transcript text (jump to timestamp)
// - Highlight current word during playback
// - Scroll-to-current behavior
// - Search/filter transcript content
```

**2.3 RubricScorer Component (QA Editor)**

```typescript
// /components/rubric-scorer.tsx
interface RubricScorerProps {
  dimensions: RubricDimension[];
  onScore: (scores: DimensionScore[]) => void;
  onComment: (dimensionId: string, comment: string) => void;
}

// Features:
// - 6 rubric dimensions with weighted scoring
// - Inline commenting with text selection
// - Keyboard shortcuts for score entry
// - Real-time total score calculation
```

**2.4 TaskCard Component (Creator Dashboard)**

```typescript
// /components/task-card.tsx
interface TaskCardProps {
  task: Task;
  onClaim: (taskId: string) => void;
  previewMode?: boolean;
}

// Features:
// - Expandable preview (audio duration, complexity, value)
// - "Claim" button appears only after full preview viewed
// - Tier-appropriate task filtering
// - Estimated effort indicator
```

**Phase 3: Role-Specific Interface Assembly (Week 4)**

**3.1 Creator Workspace Layout**

```
┌─────────────────────────────────────────────────────┐
│ Header: Breadcrumb + Tier Progress + Earnings      │
├──────────────────┬──────────────────┬──────────────┤
│ AudioPlayer      │ Rich Text Editor │ Style Guide  │
│ + Transcript     │ (Textarea +      │ Panel        │
│ (Left Panel)     │  Formatting)     │ (Collapsible)│
│                  │ (Center Panel)   │ (Right)      │
├──────────────────┴──────────────────┴──────────────┤
│ Footer: Auto-save Indicator + Submit Button        │
└─────────────────────────────────────────────────────┘
```

Uses: Sheet (panels), Button, Textarea, Badge (tier), Progress (advancement)

**3.2 QA Editor Review Interface**

```
┌─────────────────────────────────────────────────────┐
│ Header: Queue Status + Filters                      │
├──────────────────┬──────────────────┬──────────────┤
│ AudioPlayer      │ Creator          │ Rubric       │
│ + Transcript     │ Submission       │ Scorer       │
│ (Original)       │ (Review)         │ (Scores +    │
│                  │                  │  Comments)   │
├──────────────────┴──────────────────┴──────────────┤
│ Footer: Approve/Reject + Next Item Shortcut        │
└─────────────────────────────────────────────────────┘
```

Uses: Table (queue), Sheet (side-by-side), Button, Textarea (comments)

**3.3 Uploader Portal**

```
┌─────────────────────────────────────────────────────┐
│ Header: Navigation + Upload Button                  │
├─────────────────────────────────────────────────────┤
│ Upload Zone (Drag-and-drop) or File Picker         │
│ + Pricing Calculator (Select outputs, see cost)    │
├─────────────────────────────────────────────────────┤
│ Status Dashboard: Uploads in Progress + Ready      │
│ (Table: Filename, Status, Actions)                 │
└─────────────────────────────────────────────────────┘
```

Uses: Card, Table, Dialog (upload), Select (outputs), Progress (transcription)

**3.4 Admin Dashboard**

```
┌─────────────────────────────────────────────────────┐
│ Header: Alerts (Badge count) + Quick Actions       │
├──────────────────┬──────────────────────────────────┤
│ Sidebar:         │ Main Content:                    │
│ - Creators       │ Tables (Creator list, Fraud      │
│ - Tasks          │ alerts, Disputes)                │
│ - Analytics      │ + Detail Modals (Investigation)  │
│ - Settings       │                                  │
└──────────────────┴──────────────────────────────────┘
```

Uses: Tabs (sections), Table, Badge (alerts), Dialog (investigations), Command (⌘K)

### Customization Strategy

**Design Token System:**

**1. Color Palette (Defined in Tailwind Config)**

- **Primary:** Brand blue for CTAs, links, tier progression
- **Success:** Green for approvals, tier advancement, payouts
- **Warning:** Amber for pending reviews, approaching deadlines
- **Error:** Red for rejections, validation failures
- **Neutral:** Grays for text, backgrounds, borders

**2. Typography Scale**

- **Headings:** Inter or similar sans-serif, bold weights
- **Body:** Inter regular, 16px base size for readability
- **Mono:** JetBrains Mono for code, timestamps, technical data

**3. Spacing System**

- Use Tailwind's default spacing scale (4px base unit)
- Consistent padding/margin for component spacing
- Generous whitespace in creator workspace (reduce cognitive load)

**Component Theming Strategy:**

**Role-Specific Color Accents:**
- **Client Portal:** Blue primary (trust, professionalism)
- **Creator Workspace:** Green accents (growth, progress)
- **QA Editor:** Amber/Orange (review focus, attention)
- **Admin Dashboard:** Red accents (alerts, authority)

**Accessibility Customization:**
- High contrast mode toggle (WCAG AAA compliance)
- Focus visible rings on all interactive elements
- Reduced motion preference respected (animations off if prefers-reduced-motion)

**Responsive Breakpoints:**
- **Creator Workspace:** Desktop-first (min 1280px), tablet fallback for task browsing
- **Uploader Portal:** Mobile-responsive (320px+), drag-and-drop on desktop, file picker on mobile
- **QA Editor:** Desktop-optimized (min 1440px for side-by-side), no mobile view
- **Admin Dashboard:** Desktop-only (min 1280px), data-heavy interfaces

**Performance Optimization:**
- Lazy load heavy components (AudioPlayer, RubricScorer) with Suspense
- Code split role-specific routes (Creator workspace separate bundle from Admin dashboard)
- Optimize waveform rendering (canvas-based, lazy generation for large files)

**Next Steps After Design System Setup:**

1. **Visual Foundation** (Step 8): Define exact brand colors, typography, logo usage
2. **Design Directions** (Step 9): Create mood boards showing how shadcn components look with Jabur branding
3. **Component Strategy** (Step 11): Detailed specs for custom components (AudioPlayer, RubricScorer)
4. **Responsive Strategy** (Step 13): Breakpoint behavior for each role-specific interface
