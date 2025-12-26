# UX Design Specification jabur

**Author:** Omen  
**Date:** 2025-12-21

## Executive Summary

### Project Vision

jabur is a two-sided marketplace platform that transforms AI-generated podcast audio into human-curated, actionable content. The platform connects content uploaders (entrepreneurs, educators, content creators) with vetted content creators who produce professional derivative outputs across 9 curated formats: Executive Summaries, Key Insights, Action Items, Reflection Questions, Social Media Packs, Blog Posts, Fact-Check Reports, Show Notes, and Newsletter Segments.

The platform's defining characteristic is its role isolation design philosophy - creating fundamentally different experiences for clients and creators. Content creators experience a clean, task-based workspace without marketplace anxiety, never seeing client names, client pricing, or platform margins. This isolation creates focus, reduces gaming dynamics, and positions jabur as a sustainable income source rather than a competitive gig marketplace.

**Business Model:** Transaction-based platform capturing 35-40% margin with additional revenue from rush pricing (+50%), express delivery (+100%), and enterprise subscriptions. The platform operates a 5-tier creator advancement system (Probationary → Junior → Mid-Level → Senior → Expert) with rate multipliers from 0.8x to 1.5x based on performance.

## Target Users

### Primary User Personas:

#### 1. Alex - Content Uploader (Client)
- **Age:** 28-45, time-poor entrepreneur/educator
- **Problem:** Creates AI podcasts but needs them transformed into publication-ready content
- **Success metric:** Receives polished content within 24-48 hours without additional editing
- **Key needs:** Speed, quality trust signals, transparent pricing, mobile upload capability
- **Aha moment:** First delivery where content is immediately publication-ready

#### 2. Maria - Content Creator (Worker)
- **Age:** 25-55, skilled writer/editor seeking steady income
- **Problem:** Frustrated by generic freelance platforms with no clear advancement path
- **Success metric:** Weekly payouts, level advancement, fair compensation visibility
- **Key needs:** Distraction-free workspace, clear task criteria, growth transparency, flow-state tools
- **Aha moment:** First approved submission + payout confirmation + level progress visibility

### Secondary User Personas:

#### 3. James - QA Editor (Internal)
- **Age:** 30-50, experienced editor/quality specialist
- **Problem:** Needs efficient tools to review creator submissions at scale
- **Success metric:** Maintain quality standards while processing high volume efficiently
- **Key needs:** Inline commenting, rubric scoring interface, revision workflow management
- **Aha moment:** First use of rubric template that streamlines review process

#### 4. Sarah - Platform Admin (Internal)
- **Age:** 28-45, operations manager
- **Problem:** Must balance creator support, client satisfaction, and platform quality
- **Success metric:** Fair dispute resolution, minimal refunds, sustainable creator marketplace
- **Key needs:** Context visibility (audio, attempts, feedback), decision support tools, escalation workflows
- **Aha moment:** First successful dispute resolution that satisfied both parties

## Key Experience Principles

### For Content Creators (Maria):
1. **Focus Over Friction** - Remove all distractions from the core creative task
2. **Clarity Over Choice** - Provide specific acceptance criteria, not vague instructions
3. **Growth Over Gigs** - Frame work as skill progression, not transactional hustling
4. **Isolation Reduces Anxiety** - Hide marketplace competition and client pricing dynamics
5. **Feedback Feeds Growth** - Rubric scores educate rather than punish
6. **Time Honors Craft** - Deadlines respect quality work over rushed output
7. **Trust Through Transparency** - Weekly payouts, clear earnings, visible advancement
8. **Bundled Tasks, Atomic Commitment** - Reserve one task = reserve all related outputs

### For Content Uploaders (Alex):
1. **Speed Without Sacrifice** - Fast delivery without compromising quality
2. **Trust Through Tiers** - Creator advancement system signals reliability
3. **Effortless Where It Matters** - Mobile upload, simple selection, automatic organization
4. **Transparency Builds Confidence** - Real-time status, clear pricing, no hidden fees
5. **Quality You Can See** - Rubric scores and tier badges provide trust signals
6. **Revision Is Normal** - Up to 3 attempts, framed as refinement not failure
7. **Ownership After Approval** - Post-delivery editing without creator re-engagement
8. **Publication-Ready Standard** - Content should require minimal additional work

## Core User Experience

### Defining Experience

#### For Content Uploaders (Alex):

**Platform Status:** Probationary (0-9 approvals) → Junior (10-29) → Mid-Level (30-99) → Senior (100-299) → Expert (300+)

**Rate Structure:**
- Probationary: 0.8x base rate
- Junior: 0.9x base rate
- Mid-Level: 1.0x base rate
- Senior: 1.25x base rate
- Expert: 1.5x base rate

**Advancement Transparency:**
- Current tier visible in navigation header
- Progress bar showing "X of Y approvals to next tier"
- Next tier benefits listed (rate increase, priority access to high-value bundles)

**Weekly Payout Schedule:**
- Submissions approved Mon-Sun → Paid following Friday
- Transparent earnings dashboard: Pending, Approved (awaiting payout), Paid
- Payout methods: Direct deposit, PayPal, Wise (international)

## Emotional Response Goals

### For Content Creators (Maria):

**Before Using jabur:**
- Frustration with generic freelance platforms (Upwork, Fiverr) where success feels arbitrary
- Anxiety about bidding wars and constantly lowering rates to compete
- Uncertainty about when work will arrive or how much they'll earn
- Disconnection from a growth path or sense of professional development

**During Core Experience:**
- **Focus** when working in the distraction-free editor with clear acceptance criteria
- **Confidence** when rubric scores show specific strengths (e.g., "Clarity: 4.5/5 - Excellent structure")
- **Relief** when revision requests include actionable feedback, not vague criticism
- **Achievement** when submitting work that meets all acceptance criteria

**After Approval:**
- **Pride** when seeing rubric scores that validate quality work
- **Hope** when progress bar shows movement toward next tier advancement
- **Belonging** when platform messaging reinforces "You're part of a vetted creator community"
- **Fairness** when weekly payout arrives on schedule with transparent breakdown

**Critical Emotional Moments:**
- First task reservation should feel clear and confident (not overwhelming)
- First submission should feel prepared (acceptance criteria prevent guesswork)
- Maria's first approval should feel validating
- Rubric scores should inspire confidence, not doubt
- Small delights: instant audio jump, smooth animations, helpful tooltips

**Emotions to Cultivate:**
Confidence, focus, achievement, relief, trust, delight, pride, hope, belonging, fairness

**Emotions to Avoid:**
Anxiety, confusion, shame, disappointment, skepticism, overwhelm, frustration, judgment, isolation

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

#### Substack (Creator Editor & Post-Delivery Editing)

Substack's editor exemplifies distraction-free content creation through block-based architecture, markdown-native editing, and slash command discoverability. The platform's post-publication editing capability demonstrates content ownership - once published, creators maintain full editorial control without republishing friction.

**Key Success Factors:**
- Block-based writing with slash commands (/, //, ///) for formatting discovery
- Markdown-native editing (similar to Obsidian/Notion) appeals to technical writers
- Rich formatting options (callouts, quotes, code blocks) without overwhelming interface
- Minimal UI that disappears during writing - focus stays on content
- Post-publication editing preserves content ownership and enables iteration
- Perfectly designed for both phone and web through responsive block architecture

**Transferable to jabur:**
- Maria's creation editor uses block-based architecture with slash commands
- Alex's post-delivery editor mirrors same interface for final polish after QA approval
- Post-delivery editing doesn't affect Maria's rubric score (ownership transfers)
- Download formats: Markdown (.md), PDF, DOCX
- Share capabilities: Email, copy link, direct download

#### Devin.ai (Landing Page Conversion & Premium Positioning)

Devin.ai's landing page demonstrates how dynamic visualization drives conversion. The animated demonstration of results (not just process) creates tangible value perception before commitment. Interactive design elements (glassmorphism, hover effects, smooth transitions) signal premium positioning and technical sophistication.

**Key Success Factors:**
- Animated result previews (not just process descriptions) create tangible value perception
- Interactive demo environment lets prospects explore before committing
- Glassmorphism UI (frosted glass effects, subtle gradients) signals premium quality
- Smooth hover transitions and micro-interactions create polished experience
- Clear CTAs at each value point reduce friction to signup
- Technical sophistication signals trust without overwhelming non-technical users

**Transferable to jabur:**
- Landing page shows before/after content transformation (raw podcast transcript → polished blog post)
- Interactive content type preview (hover shows sample output for each format)
- Glassmorphism UI for landing page hero and pricing cards
- Smooth scroll-triggered animations for feature reveals
- "Start Upload" CTA prominently placed after value demonstration

#### Fathom Analytics (Visual Dashboard Design & Mobile Responsiveness)

Fathom Analytics demonstrates how to create information-dense dashboards that remain intuitive and visually appealing. The platform's mobile-first responsive design ensures complex data visualization works seamlessly across devices without requiring separate mobile apps.

**Key Success Factors:**
- Information density without visual clutter (key metrics prioritized above fold)
- Color-coded data visualization (green = positive trend, red = negative) for instant comprehension
- Responsive card-based layout adapts gracefully from mobile to desktop
- Real-time data updates without page refreshes (WebSocket connections)
- Minimalist design language (no unnecessary borders, shadows only for elevation)
- Accessible color palettes (meets WCAG contrast requirements)

**Transferable to jabur:**
- Alex's project dashboard: Card-based layout showing project status, progress bars, estimated completion
- Maria's earnings dashboard: Weekly payout timeline, pending approvals, tier progress visualization
- Admin analytics: Creator performance metrics, quality score trends, task completion rates
- Real-time status updates (task claimed, content submitted, QA approved) without page refresh
- Mobile-optimized dashboard (collapsible filters, vertical card stacking)

#### Linear (Distraction-Free Focused Modes & Keyboard Shortcuts)

Linear's task management interface demonstrates how to create productivity-focused tools that respect user attention. The platform's keyboard-first design philosophy enables power users to navigate entirely without mouse, while maintaining visual elegance.

**Key Success Factors:**
- Keyboard shortcuts for every action (Cmd+K command palette, Cmd+N new task, Cmd+Enter submit)
- Focused mode hides sidebar and secondary UI during task creation/editing
- Command palette (Cmd+K) enables instant navigation without memorizing shortcuts
- Minimal animations (subtle hover effects, no distracting transitions)
- Dark mode optimized for extended use (reduces eye strain)
- Inline editing without modal dialogs (click to edit, auto-save on blur)

**Transferable to jabur:**
- Maria's canvas editor: Focused mode hides sidebar, audio player minimizes to floating widget
- Keyboard shortcuts: Cmd+S save draft, Cmd+Enter submit, Cmd+U upload, Cmd+Shift+P preview
- Command palette (Cmd+K): "Reserve task", "Submit content", "View acceptance criteria"
- Inline editing for acceptance criteria updates (admin view)
- Auto-save drafts every 30 seconds (no manual save anxiety)

#### Notion (Modular Block Editor & Collaborative Features)

Notion's block-based editor demonstrates how to create flexible content creation tools without overwhelming users with options. The platform's real-time collaboration features (inline comments, presence indicators) show how to add social context without disrupting flow.

**Key Success Factors:**
- Block-based architecture (every paragraph, image, list is a draggable block)
- Slash commands (/) for quick formatting discovery (no toolbar hunting)
- Inline comments (@mention, threaded discussions) contextualized to specific content blocks
- Real-time collaboration (live cursors, typing indicators) without notification spam
- Template system reduces decision fatigue (pre-formatted structures)
- Drag-and-drop block reordering without breaking content structure

**Transferable to jabur:**
- Maria's canvas editor: Block-based with slash commands for headers, lists, callouts
- James's QA editor: Inline commenting on specific paragraphs (linked to rubric criteria)
- Template system for each content type (Executive Summary template pre-loads structure)
- Drag-and-drop reordering for multi-section content (e.g., Newsletter Segments)
- Version history (track changes across submission attempts)

#### Stripe (Payment Flow Transparency & Trust Building)

Stripe's checkout interface demonstrates how to reduce payment anxiety through transparent pricing breakdowns, secure design signals, and frictionless completion. The platform's mobile-optimized payment forms show respect for user time.

**Key Success Factors:**
- Transparent pricing breakdown (subtotal + fees + total) before commitment
- Trust signals (lock icon, "Powered by Stripe", SSL certificate visibility)
- Auto-fill payment methods (Apple Pay, Google Pay one-tap checkout)
- Real-time validation (card number format, expiration date logic)
- Progress indicator for multi-step flows (reduces abandonment)
- Mobile-optimized forms (large touch targets, auto-focus on next field)

**Transferable to jabur:**
- Alex's payment flow: Transparent breakdown (base price + rush fee + express fee = total)
- Trust signals: "Secure payment via Stripe", lock icon, 256-bit encryption badge
- Saved payment methods (one-click checkout for repeat uploads)
- Progress indicator: Upload → Select Content → Review → Payment → Confirmation
- Mobile-optimized form fields (large inputs, auto-advance to next field)

#### Figma (Real-Time Collaboration Patterns)

Figma's multiplayer design interface demonstrates how to create collaborative workspaces without creating chaos. The platform's presence indicators, live cursors, and commenting system show how to add social context productively.

**Key Success Factors:**
- Live cursors with user names (know who's editing what)
- Presence indicators (avatars show who's viewing the file)
- Contextual comments (pinned to specific design elements)
- Non-blocking collaboration (multiple users edit simultaneously without conflicts)
- Activity history (timeline of who changed what when)
- @mentions for direct feedback (notification without context switching)

**Transferable to jabur:**
- James's QA review: Live cursor shows where admin is reviewing (Maria sees progress)
- Presence indicators: "Sarah (Admin) is reviewing your submission"
- Contextual feedback: Comments pinned to specific paragraphs (linked to rubric criteria)
- Activity timeline: "Submitted 2 hours ago → QA review started 1 hour ago"
- @mention notifications: "James mentioned you in feedback: Great structure, fix grammar in line 4"

#### Superhuman (Keyboard-First Design & Onboarding Excellence)

Superhuman's email client demonstrates how to create power-user tools with approachable onboarding. The platform's mandatory white-glove onboarding (30-minute video call) ensures users learn keyboard shortcuts before they develop bad habits.

**Key Success Factors:**
- Keyboard-first design (every action has a shortcut)
- Mandatory onboarding (30-minute personalized training session)
- Progressive disclosure (introduce advanced shortcuts after mastering basics)
- Visual keyboard shortcut guide (always accessible, context-aware)
- Gamification of learning (achievement badges for using shortcuts)
- Speed as a core value proposition (metrics show time saved)

**Transferable to jabur:**
- Maria's onboarding: Interactive tutorial (create first submission before accessing task queue)
- Keyboard shortcut guide (always visible in sidebar, context-aware tips)
- Progressive disclosure: Show basic shortcuts first, introduce advanced after 5 submissions
- Achievement system: "Speed Demon" badge for using 10+ keyboard shortcuts
- Metrics dashboard: "You've saved 2.5 hours using keyboard shortcuts this week"

#### Loom (Async Video Communication Patterns)

Loom's video messaging platform demonstrates how to reduce synchronous meeting burden through asynchronous video. The platform's instant sharing, time-stamped comments, and emoji reactions show how to make feedback feel conversational without real-time presence.

**Key Success Factors:**
- Instant recording (no setup, starts immediately)
- Instant sharing (generates shareable link on upload completion)
- Time-stamped comments (feedback contextualized to specific video moments)
- Emoji reactions (quick acknowledgment without typing)
- Transcript generation (searchable, accessible, SEO-friendly)
- Speed controls (1.5x, 2x playback for efficient consumption)

**Transferable to jabur:**
- Creator onboarding: Video introductions (30-second pitch instead of text bio)
- QA feedback: Loom-style video walkthroughs (James records screen showing revision points)
- Time-stamped feedback on audio sources (comments pinned to specific podcast moments)
- Emoji reactions on submissions (👍 for quick approval signals before full review)
- Transcript generation for audio sources (searchable, accessible for creators)

#### Airtable (Flexible Data Views & No-Code Power)

Airtable's database interface demonstrates how to create powerful data management tools accessible to non-technical users. The platform's multiple view types (grid, kanban, calendar, gallery) show the same data in contextually appropriate formats.

**Key Success Factors:**
- Multiple view types (grid for spreadsheet users, kanban for visual thinkers)
- Flexible filtering (create custom views without code)
- Rich field types (attachments, checkboxes, dropdowns, linked records)
- Automation workflows (trigger actions based on field changes)
- Collaborative editing (real-time updates, comment threads)
- Mobile apps (full functionality, not read-only)

**Transferable to jabur:**
- Admin dashboard: Multiple views (grid for data analysis, kanban for task status, calendar for deadlines)
- Maria's task queue: Filter by content type, tier eligibility, bundle availability
- Sarah's dispute resolution: Rich attachments (audio files, screenshots, revision history)
- Automation: Auto-assign tasks to qualified creators based on tier + content type
- Mobile-optimized views (Maria can claim tasks on phone during commute)

### Anti-Patterns to Avoid

#### Upwork/Fiverr Marketplace Anxiety
**Problem:** Creators see client budgets, competing proposals, and undercut each other in bidding wars.

**Impact:** Race to the bottom on pricing, anxiety about proposal rejection, gaming dynamics.

**jabur's Solution:**
- Creators never see client names, client pricing, or platform margin
- Fixed rate tiers (0.8x to 1.5x) based on advancement, not bidding
- Task reservation (first-come-first-served) instead of competitive proposals
- Isolation creates focus, reduces anxiety, prevents gaming

#### Fiverr's Overwhelming Choice Paradox
**Problem:** Clients face decision paralysis choosing between hundreds of similar creators.

**Impact:** Analysis paralysis, choice regret, time wasted researching profiles.

**jabur's Solution:**
- Clients select content types (what they want), not creators (who makes it)
- Platform assigns tasks to qualified creators automatically
- Trust built through tier system, rubric scores, revision policy
- Simplified decision: "Which content types?" not "Which of these 300 creators?"

#### TaskRabbit's Vague Scope Creep
**Problem:** Tasks described vaguely ("help me move"), leading to disputes about effort vs. pay.

**Impact:** Scope creep arguments, worker resentment, platform reputation damage.

**jabur's Solution:**
- Explicit acceptance criteria for each content type (word count, structure, tone)
- Rubric scoring against objective criteria (not subjective client preferences)
- Revision limit (3 attempts) prevents infinite scope creep
- QA approval required (not just client satisfaction)

#### Mechanical Turk's Dehumanizing Task Design
**Problem:** Workers treated as interchangeable units, no identity or growth path.

**Impact:** Low-quality work (no reputation incentive), high turnover, transactional relationships.

**jabur's Solution:**
- 5-tier advancement system (Probationary → Expert) with rate increases
- Creator profiles (bio, video introduction, specialization tags)
- Weekly payouts (reliable income, not gig-by-gig uncertainty)
- "Vetted creator community" messaging (belonging, not commodity labor)

#### Freelancer.com's Hidden Fee Darkness
**Problem:** Fees buried in fine print, surprise deductions from payouts.

**Impact:** Trust erosion, creator resentment, negative word-of-mouth.

**jabur's Solution:**
- Transparent earnings dashboard (Pending, Approved, Paid)
- Weekly payout schedule (no mystery waiting periods)
- Clear rate structure (tier multiplier × base rate = your earnings)
- No hidden fees (what you see is what you get)

#### 99designs' Winner-Takes-All Waste
**Problem:** Creators submit full work speculatively, only winner gets paid.

**Impact:** Massive unpaid labor, resentment, unsustainable for creators.

**jabur's Solution:**
- Reserve task = guaranteed payment (if approved within 3 attempts)
- No speculative work (payment guaranteed upon task claim)
- Revision policy prevents arbitrary rejections (QA approval based on objective criteria)
- Fair compensation for effort, not lottery-style payouts

#### Appen/Lionbridge's Grinding Piecework
**Problem:** High-volume, low-pay microtasks with no advancement path.

**Impact:** Worker burnout, no skill development, race-to-the-bottom wages.

**jabur's Solution:**
- Premium positioning (higher base rates than commodity platforms)
- Skill-based advancement (Expert tier earns 1.5x Probationary rate)
- Varied content types (not repetitive microtasks)
- Quality over quantity (rubric scores incentivize craftsmanship)

## Information Architecture

### Content Uploader (Alex) - Information Architecture

#### Landing Page (Unauthenticated)
**Purpose:** Convert visitors to signed-up uploaders

**Key Information:**
- Hero section: "Transform AI podcasts into publication-ready content" (value proposition)
- Animated before/after example (raw transcript → polished blog post)
- 9 content types explained with sample previews
- Pricing calculator (select content types → see total price)
- Trust signals: Creator tier system, rubric scoring, revision policy
- CTA: "Start Upload" (authenticated) / "Sign Up Free" (unauthenticated)

**Navigation:**
- Primary: How It Works, Content Types, Pricing, For Creators
- Secondary: Login, Sign Up

#### Dashboard (Authenticated)
**Purpose:** Central hub for project management and status monitoring

**Key Information:**
- Active projects (cards showing: audio title, selected content types, status, progress)
- Quick actions: "Upload New Source", "View All Projects", "Account Settings"
- Status indicators: "In Progress" (yellow), "Delivered" (green), "Revision Requested" (orange)
- Notifications: "3 deliveries ready for review"

**Navigation:**
- Primary: Dashboard, Upload, Projects, Account
- Secondary: Help, Logout

**Layout:**
```
[ Header: jabur logo | Dashboard | Upload | Projects | Account | Notifications ]
[ Content ]
  [ Quick Stats: 5 Active Projects | 12 Completed | $450 Spent This Month ]
  
  [ Active Projects Grid ]
    [ Project Card 1 ]
      Audio: "Marketing Automation Podcast Ep 12"
      Content: Executive Summary, Blog Post (2/2 delivered)
      Status: Ready for Review
      [ View Deliverables ]
    
    [ Project Card 2 ]
      Audio: "Personal Finance Deep Dive"
      Content: Key Insights, Social Pack (in progress)
      Status: Creator working (Tier: Senior)
      ETA: 18 hours
      [ View Progress ]
  
  [ + Upload New Source ]
```

#### Upload Flow
**Purpose:** Collect source material and content type selections

**Information Collected:**
1. Audio source upload (drag-drop or file picker)
2. Project metadata (optional: title override, tags)
3. Content type selection (checkboxes for 9 types)
4. Delivery preferences (standard 24-48h / rush +50% / express +100%)
5. Pricing preview (dynamically updates based on selections)
6. Payment method selection
7. Confirmation screen

**Flow Navigation:**
```
Step 1: Upload Source
  → Drag-drop zone or file picker
  → Show file name, duration, file size
  → Auto-detect title from metadata
  → [ Continue ]

Step 2: Select Content Types
  → 9 content type cards (checkboxes)
  → Hover preview: "Executive Summary - 500 words, 3-5 key points, business tone"
  → Selected types highlighted
  → [ Continue ]

Step 3: Delivery Preferences
  → Standard (24-48h), Rush (+50%, 12-24h), Express (+100%, 6-12h)
  → [ Continue ]

Step 4: Review & Payment
  → Pricing breakdown: Executive Summary ($35) + Blog Post ($85) + Rush (+50%) = $180
  → Payment method (saved card or new)
  → [ Confirm Upload ]

Step 5: Confirmation
  → Success animation (checkmark, confetti)
  → "Your project is in the queue! We'll notify you when creators claim your tasks."
  → [ View Project Dashboard ]
```

#### Project Detail View
**Purpose:** Monitor individual project progress and access deliverables

**Key Information:**
- Audio player (waveform, playback controls, time-stamped comments)
- Content type status list (checkboxes: Claimed, In Progress, Submitted, QA Review, Delivered)
- Creator tier badge (if assigned): "Senior Creator (100-299 approvals)"
- Estimated completion time (per content type)
- Delivered content preview (read-only until final approval)
- Revision request interface (if QA feedback requires client input)
- Download/share options (after final approval)

**Navigation:**
```
[ Back to Dashboard ]

[ Audio Player ]
  Waveform with playback controls
  Title: "Marketing Automation Podcast Ep 12"
  Duration: 45:23
  
[ Content Types Progress ]
  ✅ Executive Summary (Delivered) [ View | Download ]
  🔄 Blog Post (In QA Review) - ETA: 2 hours
  🕐 Social Media Pack (Creator Working) - ETA: 18 hours
  ⏸️ Newsletter Segment (Not Claimed Yet)
  
[ Delivered Content Preview: Executive Summary ]
  [ Preview in Modal ]
  [ Download MD | PDF | DOCX ]
  [ Share Link ]
  [ Edit After Approval ]
```

#### Post-Delivery Editing
**Purpose:** Allow client to polish content after QA approval without re-engaging creator

**Key Information:**
- Substack-style block editor (same as creator canvas)
- Original content loaded as baseline
- Auto-save drafts (every 30s)
- Version history (compare original vs edited)
- Download options (MD, PDF, DOCX)
- Share link generation

**Editing Interface:**
```
[ Back to Project ]

[ Header: Editing "Executive Summary" ]
  [ Auto-saved 10 seconds ago ]
  [ Version History | Download | Share ]

[ Block Editor ]
  # Marketing Automation in 2025
  
  / (slash command menu)
  - Heading 1
  - Heading 2
  - Bulleted List
  - Numbered List
  - Quote
  - Code Block
  
[ Footer ]
  [ Discard Changes ] [ Save & Close ]
```

#### Account Settings
**Purpose:** Manage profile, payment methods, notification preferences

**Sections:**
- Profile: Name, email, phone (for SMS notifications)
- Payment Methods: Saved cards, default method
- Notification Preferences: Email (new delivery, QA feedback), SMS (urgent updates), Push (mobile app)
- Billing History: Past invoices, downloadable receipts
- Referral Program: Share link, track referrals, earn credits

### Content Creator (Maria) - Information Architecture

#### Landing Page (Unauthenticated - Creator Portal)
**Purpose:** Recruit qualified creators to apply

**Key Information:**
- Value proposition: "Earn $25-$120 per task with weekly payouts" (income focus)
- 5-tier advancement system explained (Probationary → Expert)
- Showcase creator testimonials (earnings, work-life balance, fair treatment)
- Application requirements: Writing sample, video introduction, background check
- Transparent payout schedule (approved Mon-Sun → paid Friday)
- CTA: "Apply to Create"

**Navigation:**
- Primary: How It Works, Content Types, Earnings, Apply
- Secondary: Login

#### Application Flow (Onboarding)
**Purpose:** Vet creators for quality and fit

**Information Collected:**
1. Basic profile (name, email, location, timezone)
2. Writing sample (500 words on assigned topic, 30-minute timer)
3. Video introduction (30-second pitch, camera required)
4. Payment setup (direct deposit, PayPal, Wise)
5. Background check consent (identity verification)
6. Application review (admin approval required)

**Flow:**
```
Step 1: Profile
  → Name, email, location, timezone
  → [ Continue ]

Step 2: Writing Sample
  → Prompt: "Summarize the attached podcast transcript (500 words, business tone)"
  → 30-minute timer
  → Text editor with word count
  → [ Submit Sample ]

Step 3: Video Introduction
  → "Record a 30-second video explaining why you want to create content for jabur"
  → Camera interface
  → [ Record | Re-record | Submit ]

Step 4: Payment Setup
  → Select payout method: Direct deposit | PayPal | Wise
  → Enter bank details or account email
  → [ Continue ]

Step 5: Background Check
  → "We use Checkr for identity verification. This helps maintain platform quality."
  → Consent checkbox
  → [ Submit Application ]

Step 6: Pending Review
  → "Your application is under review. We'll email you within 48 hours."
  → [ Close ]
```

#### Task Queue (Dashboard)
**Purpose:** Browse available tasks and claim work

**Key Information:**
- Available tasks grid (filterable by content type, bundle eligibility, tier)
- Task card preview: Audio title, content type, deadline, earnings (tier-adjusted rate)
- Filter/sort controls: Content type, bundle availability, earnings (high to low), deadline (soonest first)
- Tier eligibility badges (e.g., "Senior+ only" for complex blog posts)
- "Reserve Bundle" action (claims all related outputs atomically)
- Tier progress indicator (header): "Junior (12/30 approvals to Mid-Level)"

**Layout:**
```
[ Header: jabur | Task Queue | My Submissions | Earnings | Account ]
[ Tier Progress: Junior (12/30 approvals) → Mid-Level ]
[ Earnings This Week: $245 (Pending: $180, Approved: $65) ]

[ Filters ]
  Content Type: [ All | Executive Summary | Blog Post | Social Pack | ... ]
  Bundle: [ All | Bundle Available | Single Tasks ]
  Sort: [ Earnings (High to Low) | Deadline (Soonest First) ]

[ Task Grid ]
  [ Task Card 1 ]
    🎙️ Audio: "Marketing Automation Deep Dive"
    📄 Content: Executive Summary
    💰 Earnings: $28 (Junior rate: $25 × 0.9 + 3-task bundle bonus)
    ⏰ Deadline: 24 hours
    🎯 Bundle: +Blog Post, +Social Pack (claim all)
    [ Reserve Bundle ]
  
  [ Task Card 2 ]
    🎙️ Audio: "Personal Finance Podcast Ep 5"
    📄 Content: Key Insights
    💰 Earnings: $22.50 (Junior rate: $25 × 0.9)
    ⏰ Deadline: 18 hours
    [ Reserve Task ]
```

#### Canvas Editor (Creation Workspace)
**Purpose:** Focused environment for content creation with acceptance criteria

**Key Information:**
- Audio player (minimized to floating widget after initial listen)
- Acceptance criteria sidebar (checklist: word count, structure requirements, tone guidelines)
- Block-based editor (slash commands for formatting)
- Character/word count (live updating)
- Time tracking (session timer, total time spent)
- Auto-save indicator (drafts saved every 30s)
- Submit button (active only when acceptance criteria met)

**Layout:**
```
[ Header: Creating "Executive Summary" for Audio: "Marketing Automation" ]
[ Auto-saved 5 seconds ago | Session: 22 minutes ]

[ Left Sidebar: Acceptance Criteria ]
  ✅ 500-700 words (current: 625)
  ✅ 3-5 key points identified
  ✅ Business tone (professional, concise)
  ✅ No personal opinions (objective summary)
  ⏸️ Include actionable takeaways (1 remaining)
  
[ Audio Player - Minimized ]
  🎙️ Marketing Automation (45:23)
  [ ▶️ Play | 🔊 Volume | ⏩ Speed: 1.5x ]

[ Canvas Editor ]
  # Marketing Automation in 2025
  
  / (slash command menu)
  - Heading 1
  - Heading 2
  - Bulleted List
  - Numbered List
  - Quote
  - Code Block
  
  [Block-based content here]

[ Footer ]
  [ Save Draft ] [ Preview ] [ Submit for Review ]
```

#### Submission Review (After Submit)
**Purpose:** Final check before locking in submission

**Key Information:**
- Content preview (read-only modal)
- Acceptance criteria checklist (confirmation)
- Time spent tracking (displayed but not shared with client)
- Submission attempt counter (1 of 3 remaining)
- Warning: "After submission, you cannot edit until QA review completes"
- [ Confirm Submission ] [ Back to Edit ]

#### Feedback Loop (QA Response)
**Purpose:** Process revision requests and understand rubric scores

**Key Information:**
- Rubric score breakdown (Clarity: 4.5/5, Accuracy: 3.5/5, Structure: 5/5)
- Inline comments (specific line feedback, linked to rubric criteria)
- Required changes checklist (must address before re-submission)
- Revision attempt counter (2 of 3 remaining)
- Time remaining until deadline
- [ Open in Editor ] [ View Full Feedback ]

**Feedback Interface:**
```
[ Header: Revision Requested - Executive Summary ]
[ Attempt 1 of 3 | 16 hours remaining ]

[ Rubric Score: 4.2/5 (Approved Threshold: 4.0) ]
  Clarity: 4.5/5 ✅ "Excellent structure and flow"
  Accuracy: 3.5/5 ⚠️ "Minor factual error in paragraph 3"
  Tone: 5/5 ✅ "Professional and concise"
  Completeness: 4.0/5 ⚠️ "Missing one actionable takeaway"

[ Required Changes ]
  ⚠️ Line 8: "The speaker states X, but transcript says Y" → Fix factual error
  ⚠️ Add: 1 more actionable takeaway (currently 2, need 3)

[ Inline Comments ]
  📍 Paragraph 3, Line 8: "Check transcript at 12:45 - speaker says 'revenue increased 40%', not 30%"
  📍 Paragraph 5: "Consider adding: 'Implement automated lead scoring within 2 weeks'"

[ Actions ]
  [ Open in Editor ] [ Mark Resolved ] [ Contact QA ]
```

#### Earnings Dashboard
**Purpose:** Track income, payout schedule, tier advancement

**Key Information:**
- Earnings breakdown: Pending (submitted, awaiting QA), Approved (awaiting payout), Paid
- Payout timeline (approved Mon-Sun → paid Friday)
- Weekly earnings chart (last 8 weeks)
- Tier progress: Current tier, approvals to next tier, estimated earnings increase
- Payout method (editable)

**Layout:**
```
[ Header: Earnings Dashboard ]

[ Weekly Payout Schedule ]
  This Week (Mon 12/16 - Sun 12/22):
    Pending: $180 (4 submissions in QA review)
    Approved: $65 (2 submissions approved, payout Friday 12/27)
    Paid: $0 (this week's payout pending)
  
  Last Week (Mon 12/9 - Sun 12/15):
    Paid: $245 (Paid on Friday 12/20) ✅

[ Earnings Chart ]
  [Bar chart showing weekly earnings for last 8 weeks]

[ Tier Progress ]
  Current: Junior (12/30 approvals)
  Next: Mid-Level
  Rate increase: $25 → $27.78 (+11% earnings per task)
  Progress: ████████████░░░░░░░░░░░░░░░░ 40%

[ Payout Method ]
  Direct Deposit: Bank of America ****1234
  [ Edit Payout Method ]
```

### QA Editor (James) - Information Architecture

#### Review Queue (Dashboard)
**Purpose:** Manage incoming creator submissions for quality approval

**Key Information:**
- Pending reviews (table view: audio title, content type, creator tier, submission time)
- Filter/sort: Content type, tier, submission time (oldest first), priority (rush tasks)
- Review status: Pending, In Progress, Approved, Revision Requested
- SLA indicators: Time since submission, target review time (2 hours standard, 1 hour rush)

**Layout:**
```
[ Header: QA Review Queue ]

[ Filters ]
  Content Type: [ All | Executive Summary | Blog Post | ... ]
  Creator Tier: [ All | Probationary | Junior | Mid-Level | Senior | Expert ]
  Status: [ Pending | In Progress | Completed ]
  Sort: [ Oldest First | Rush Priority ]

[ Review Table ]
  Audio Title | Content Type | Creator | Tier | Submitted | Time in Queue | Status | Actions
  ----------------------------------------------------------------------------------------------------
  Marketing Automation | Executive Summary | Maria G. | Junior | 2h ago | ⚠️ 2h (target: 2h) | Pending | [ Review ]
  Personal Finance | Blog Post | John D. | Senior | 30m ago | ✅ 30m (target: 2h) | Pending | [ Review ]
  Leadership Deep Dive | Social Pack | Sarah K. | Mid-Level | 4h ago | 🔴 4h (OVERDUE) | In Progress | [ Resume ]
```

#### Review Interface (Canvas)
**Purpose:** Evaluate creator submission against rubric criteria

**Key Information:**
- Dual-pane layout: Audio player (left), submission content (right)
- Rubric scoring interface (5-point scale per criterion)
- Inline commenting (click paragraph → add feedback)
- Acceptance criteria checklist (auto-populated from task requirements)
- Approval threshold: 4.0/5 average rubric score
- Decision actions: Approve, Request Revision, Escalate to Admin

**Layout:**
```
[ Header: Reviewing "Executive Summary" by Maria G. (Junior) ]
[ Audio: "Marketing Automation Deep Dive" (45:23) ]

[ Left Pane: Audio Player ]
  🎙️ Waveform with time markers
  [ ▶️ Play | 🔊 Volume | ⏩ Speed: 1.5x | 🔖 Add Comment at Timestamp ]

[ Right Pane: Submission Content ]
  # Marketing Automation in 2025
  
  [Creator's submitted content here, with inline comment pins]
  
  📍 Line 8: "Check accuracy - speaker says 40%, not 30%"
  
[ Bottom Panel: Rubric Scoring ]
  Clarity (Structure, readability):
    [ 1 | 2 | 3 | 4 | ⭐ 5 ] 
    Comment: "Excellent structure and flow"
  
  Accuracy (Factual correctness):
    [ 1 | 2 | 3 | ⭐ 4 | 5 ]
    Comment: "Minor error in paragraph 3 - fix percentage"
  
  Tone (Professional, audience-appropriate):
    [ 1 | 2 | 3 | 4 | ⭐ 5 ]
    Comment: "Professional and concise"
  
  Completeness (Meets acceptance criteria):
    [ 1 | 2 | 3 | ⭐ 4 | 5 ]
    Comment: "Missing one actionable takeaway"
  
  Average: 4.25/5 ✅ (Threshold: 4.0)

[ Actions ]
  [ ❌ Request Revision (2/3 attempts remaining) ]
  [ ✅ Approve Submission ]
  [ ⚠️ Escalate to Admin ]
```

#### Revision Request Flow
**Purpose:** Provide actionable feedback for creator improvement

**Information Provided:**
- Required changes (must-fix before approval)
- Suggestions (optional improvements)
- Rubric scores (with justifications)
- Inline comments (specific line feedback)
- Time allowance (4-hour buffer before deadline for revisions)

**Interface:**
```
[ Revision Request Template ]

Required Changes:
  1. Paragraph 3, Line 8: Fix percentage (should be 40%, not 30%)
  2. Add 1 more actionable takeaway (currently 2, need 3)

Suggestions (Optional):
  - Consider stronger opening hook to engage readers immediately
  - Paragraph 5 could benefit from concrete example

Rubric Scores:
  Clarity: 5/5 ✅
  Accuracy: 4/5 ⚠️ (fix percentage)
  Tone: 5/5 ✅
  Completeness: 4/5 ⚠️ (add takeaway)

[ Send Revision Request ]
```

### Platform Admin (Sarah) - Information Architecture

#### Admin Dashboard (Central Hub)
**Purpose:** Monitor platform health, manage disputes, support creators

**Key Sections:**
- Platform metrics: Active projects, creator utilization, approval rates, refund rate
- Dispute queue: Client complaints, creator appeals, payment issues
- Creator management: Applications, tier adjustments, suspensions
- Financial overview: Revenue, creator payouts, margin analysis

**Layout:**
```
[ Header: Admin Dashboard ]

[ Platform Metrics ]
  Active Projects: 127
  Creator Utilization: 68% (85 active / 125 total creators)
  Approval Rate: 92% (first submission)
  Refund Rate: 2.3% (target: <5%)

[ Dispute Queue ]
  🔴 High Priority: 3
    - Client complaint: "Blog post doesn't match tone"
    - Creator appeal: "QA rejection unfair"
    - Payment issue: "Payout not received"
  
  🟡 Medium Priority: 7
  🟢 Low Priority: 12

[ Creator Management ]
  Pending Applications: 8
  Tier Adjustments: 2 (manual review required)
  Suspended Creators: 1 (policy violation)

[ Financial Overview ]
  Revenue (This Month): $45,320
  Creator Payouts (This Month): $28,450
  Platform Margin: 37.3%
```

#### Dispute Resolution Interface
**Purpose:** Mediate conflicts with full context

**Key Information:**
- Dispute context: Audio file, creator submission history (all 3 attempts), QA feedback, client complaint
- Timeline: Submission → QA review → Approval → Client dispute
- Evidence viewer: Side-by-side comparison (creator content vs client expectations)
- Decision tools: Refund (full/partial), re-assign task, close dispute
- Communication log: Messages between creator, QA, client, admin

**Layout:**
```
[ Header: Dispute Resolution - Project #1234 ]

[ Dispute Summary ]
  Client: Alex J. (alex@example.com)
  Creator: Maria G. (Junior tier)
  Content Type: Blog Post
  Issue: "Tone doesn't match acceptance criteria"
  Submitted: 2024-12-20 10:00 AM
  
[ Evidence ]
  [ Audio Source: "Marketing Automation Deep Dive" (45:23) ]
  [ Creator Submission 1 (Rejected - QA Score: 3.8) ]
  [ Creator Submission 2 (Approved - QA Score: 4.2) ]
  [ Client Complaint: "Blog post is too technical, I requested casual tone" ]

[ Acceptance Criteria ]
  Tone: "Business professional" (NOT "casual") ✅
  Word Count: 1500-2000 (Submission: 1850) ✅
  Structure: Intro + 3 sections + Conclusion ✅

[ Decision Support ]
  Analysis: Client requested "casual tone" in complaint, but acceptance criteria specified "business professional." Creator followed acceptance criteria correctly.
  
  Recommended Action: Close dispute, uphold approval, educate client on acceptance criteria

[ Actions ]
  [ Refund Client (Full) ]
  [ Refund Client (Partial - 50%) ]
  [ Close Dispute (Uphold Approval) ]
  [ Re-assign Task (New Creator) ]
  [ Message Client ] [ Message Creator ]
```

#### Creator Application Review
**Purpose:** Vet new creator applications for quality

**Key Information:**
- Application profile: Name, email, location, timezone
- Writing sample (500 words, timed submission)
- Video introduction (30-second pitch)
- Background check status (Checkr integration)
- Scoring rubric: Writing quality, video presence, professionalism

**Interface:**
```
[ Header: Application Review - Maria Gonzalez ]

[ Profile ]
  Name: Maria Gonzalez
  Email: maria.g@example.com
  Location: Austin, TX (UTC-6)
  Submitted: 2024-12-15 3:00 PM

[ Writing Sample ]
  Prompt: "Summarize the attached podcast transcript (500 words, business tone)"
  Submission Time: 28 minutes (30-minute limit)
  Word Count: 625
  
  [ View Full Submission ]
  
  Evaluator Notes:
    Clarity: Strong structure, clear key points
    Grammar: No errors, professional tone
    Conciseness: Slightly over 500 words but within acceptable range

[ Video Introduction ]
  [ ▶️ Play Video (30 seconds) ]
  
  Evaluator Notes:
    Presence: Confident, articulate
    Professionalism: Well-prepared, good lighting/audio
    Fit: Understands platform value proposition

[ Background Check ]
  Status: ✅ Cleared (Checkr)
  Identity Verified: Yes
  Criminal Record: None

[ Decision ]
  Approve: Probationary tier (0.8x rate)
  Reject: Does not meet quality standards
  Request Revision: Ask for new writing sample

[ Approve Application ]
```

## Detailed Feature Specifications

### 1. Upload Flow (Alex's Core Action)

#### Purpose
Enable content uploaders to submit podcast audio and request derivative content types with minimal friction.

#### User Flow
1. **Upload Source Audio**
   - Drag-drop zone or file picker
   - Supported formats: MP3, M4A, WAV (max 2GB)
   - Upload progress indicator (percentage, estimated time remaining)
   - Auto-extract metadata: Title (from ID3 tags), duration, file size
   - Waveform visualization preview (optional, for confirmation)

2. **Select Content Types**
   - 9 content type cards (checkboxes, multi-select)
   - Hover preview: Short description, sample output, word count, estimated delivery time
   - Selected types highlighted with checkmark
   - Bundle suggestion: "Add Blog Post + Social Pack for 15% bundle discount"

3. **Delivery Preferences**
   - Standard (24-48h): Base pricing
   - Rush (+50%): 12-24h delivery, prioritized in task queue
   - Express (+100%): 6-12h delivery, top priority assignment

4. **Review & Payment**
   - Transparent pricing breakdown:
     - Base prices per content type (Executive Summary: $35, Blog Post: $85, etc.)
     - Bundle discount (if applicable): -15% for 3+ types
     - Delivery multiplier: Rush (+50%) or Express (+100%)
     - Total: $XXX
   - Payment method: Saved card (Apple Pay, Google Pay) or new card (Stripe)
   - Terms checkbox: "I agree to revision policy (up to 3 attempts per content type)"

5. **Confirmation**
   - Success animation (checkmark, confetti)
   - Project ID generated (e.g., #1234)
   - Email confirmation sent
   - CTA: "View Project Dashboard" or "Upload Another Source"

#### Technical Specifications

**Upload Component:**
```jsx
// UploadDropzone.jsx
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export function UploadDropzone({ onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    
    // Validate file type and size
    if (!['audio/mpeg', 'audio/m4a', 'audio/wav'].includes(file.type)) {
      alert('Unsupported file type. Please upload MP3, M4A, or WAV.');
      return;
    }
    if (file.size > 2 * 1024 * 1024 * 1024) { // 2GB
      alert('File size exceeds 2GB limit.');
      return;
    }
    
    // Extract metadata (using ID3 parser)
    const reader = new FileReader();
    reader.onload = () => {
      const audioContext = new AudioContext();
      audioContext.decodeAudioData(reader.result, (buffer) => {
        const duration = buffer.duration;
        onUpload({
          file,
          title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
          duration,
          fileSize: file.size
        });
      });
    };
    reader.readAsArrayBuffer(file);
  }, [onUpload]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'audio/*': ['.mp3', '.m4a', '.wav'] },
    maxSize: 2 * 1024 * 1024 * 1024
  });
  
  return (
    <div 
      {...getRootProps()} 
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-600">Drop your audio file here...</p>
      ) : (
        <>
          <p className="text-gray-600">Drag & drop your podcast audio, or click to browse</p>
          <p className="text-sm text-gray-400 mt-2">MP3, M4A, WAV (max 2GB)</p>
        </>
      )}
    </div>
  );
}
```

**Content Type Selector:**
```jsx
// ContentTypeSelector.jsx
const CONTENT_TYPES = [
  {
    id: 'executive-summary',
    name: 'Executive Summary',
    description: '500-700 words, 3-5 key points, business tone',
    basePrice: 35,
    estimatedTime: '6-12 hours',
    sampleUrl: '/samples/executive-summary.md'
  },
  {
    id: 'blog-post',
    name: 'Blog Post',
    description: '1500-2000 words, SEO-optimized, casual/professional tone',
    basePrice: 85,
    estimatedTime: '12-24 hours',
    sampleUrl: '/samples/blog-post.md'
  },
  // ... 7 more content types
];

export function ContentTypeSelector({ selectedTypes, onToggle }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CONTENT_TYPES.map((type) => (
        <div
          key={type.id}
          className={`border rounded-lg p-4 cursor-pointer transition
            ${selectedTypes.includes(type.id) 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'}`}
          onClick={() => onToggle(type.id)}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{type.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{type.description}</p>
              <p className="text-xs text-gray-400 mt-2">ETA: {type.estimatedTime}</p>
            </div>
            <input
              type="checkbox"
              checked={selectedTypes.includes(type.id)}
              onChange={() => onToggle(type.id)}
              className="mt-1"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold">${type.basePrice}</span>
            <a href={type.sampleUrl} target="_blank" className="text-sm text-blue-600 hover:underline">
              View Sample
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
```

**Pricing Calculator:**
```jsx
// PricingBreakdown.jsx
export function PricingBreakdown({ selectedTypes, deliverySpeed }) {
  const baseTotal = selectedTypes.reduce((sum, typeId) => {
    const type = CONTENT_TYPES.find(t => t.id === typeId);
    return sum + type.basePrice;
  }, 0);
  
  const bundleDiscount = selectedTypes.length >= 3 ? baseTotal * 0.15 : 0;
  const deliveryMultiplier = deliverySpeed === 'rush' ? 1.5 : deliverySpeed === 'express' ? 2 : 1;
  const finalTotal = (baseTotal - bundleDiscount) * deliveryMultiplier;
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <span>Subtotal ({selectedTypes.length} content types)</span>
        <span>${baseTotal.toFixed(2)}</span>
      </div>
      
      {bundleDiscount > 0 && (
        <div className="flex justify-between mb-2 text-green-600">
          <span>Bundle Discount (3+ types)</span>
          <span>-${bundleDiscount.toFixed(2)}</span>
        </div>
      )}
      
      {deliverySpeed !== 'standard' && (
        <div className="flex justify-between mb-2 text-orange-600">
          <span>{deliverySpeed === 'rush' ? 'Rush' : 'Express'} Delivery</span>
          <span>+{deliveryMultiplier === 1.5 ? '50%' : '100%'}</span>
        </div>
      )}
      
      <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${finalTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
```

#### Accessibility Requirements
- Upload dropzone: Keyboard accessible (Enter to open file picker)
- Content type cards: Keyboard navigable (Tab to move, Space to toggle)
- Pricing breakdown: Screen reader announces totals dynamically
- Payment form: WCAG 2.1 AA compliant (Stripe Elements handle accessibility)

#### Mobile Optimization
- Upload on mobile: Use native file picker (supports iCloud, Google Drive)
- Content type selector: Vertical card stack on mobile (1 column)
- Pricing breakdown: Sticky footer on mobile (always visible during scroll)

### 2. Task Queue & Claim Flow (Maria's Core Action)

#### Purpose
Enable creators to browse available tasks, understand requirements, and claim work atomically (bundle reservation).

#### User Flow
1. **Browse Task Queue**
   - Grid view of available tasks (default: sorted by earnings, high to low)
   - Task card preview:
     - Audio title (truncated if long)
     - Content type (Executive Summary, Blog Post, etc.)
     - Earnings (tier-adjusted rate, e.g., "$28" for Junior tier)
     - Deadline (countdown timer, e.g., "18 hours remaining")
     - Bundle indicator (e.g., "+Blog Post, +Social Pack - Claim all 3")
   - Filter controls:
     - Content type (checkboxes: Executive Summary, Blog Post, etc.)
     - Bundle availability (toggle: "Bundle tasks only")
     - Tier eligibility (auto-filtered based on creator's tier)
   - Sort controls:
     - Earnings (high to low, low to high)
     - Deadline (soonest first, latest first)
     - Posted time (newest first, oldest first)

2. **Task Detail Modal**
   - Audio player (waveform, playback controls, speed adjustment)
   - Content type requirements:
     - Word count range (e.g., 500-700 words)
     - Structure outline (e.g., "Intro + 3 key points + Conclusion")
     - Tone guidelines (e.g., "Business professional, avoid jargon")
   - Acceptance criteria checklist (preview of what QA will evaluate)
   - Earnings breakdown:
     - Base rate: $25
     - Tier multiplier: 0.9x (Junior)
     - Bundle bonus: +$3 (3-task bundle)
     - Total: $28
   - Deadline: Countdown timer + absolute date/time
   - CTA: "Reserve Task" or "Reserve Bundle (3 tasks)"

3. **Reservation Confirmation**
   - Success animation (checkmark, task moves to "My Submissions")
   - Countdown to deadline starts immediately
   - CTA: "Start Creating" (opens canvas editor) or "View Acceptance Criteria"

#### Technical Specifications

**Task Queue Component:**
```jsx
// TaskQueue.jsx
import { useState, useEffect } from 'react';
import { fetchAvailableTasks } from '@/api/tasks';

export function TaskQueue({ creatorTier }) {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    contentTypes: [],
    bundleOnly: false
  });
  const [sortBy, setSortBy] = useState('earnings-desc');
  
  useEffect(() => {
    fetchAvailableTasks({ tier: creatorTier, filters, sortBy })
      .then(setTasks);
  }, [creatorTier, filters, sortBy]);
  
  return (
    <div>
      <TaskFilters filters={filters} onChange={setFilters} />
      <TaskSortControls sortBy={sortBy} onChange={setSortBy} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} creatorTier={creatorTier} />
        ))}
      </div>
    </div>
  );
}
```

**Task Card Component:**
```jsx
// TaskCard.jsx
export function TaskCard({ task, creatorTier }) {
  const tierMultiplier = getTierMultiplier(creatorTier); // 0.8x to 1.5x
  const earnings = (task.baseRate * tierMultiplier + (task.bundleBonus || 0)).toFixed(2);
  const deadline = getTimeRemaining(task.deadline);
  
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 truncate">{task.audioTitle}</h3>
          <p className="text-sm text-gray-600">{task.contentType}</p>
        </div>
        {task.bundleSize > 1 && (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            Bundle {task.bundleSize}x
          </span>
        )}
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">${earnings}</span>
        <span className="text-sm text-gray-500">{deadline}</span>
      </div>
      
      {task.bundleSize > 1 && (
        <p className="text-xs text-gray-500 mt-2">
          +{task.bundleTypes.join(', ')} (claim all)
        </p>
      )}
      
      <button 
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => openTaskDetailModal(task)}
      >
        {task.bundleSize > 1 ? `Reserve Bundle (${task.bundleSize}x)` : 'Reserve Task'}
      </button>
    </div>
  );
}

function getTierMultiplier(tier) {
  const multipliers = {
    'probationary': 0.8,
    'junior': 0.9,
    'mid-level': 1.0,
    'senior': 1.25,
    'expert': 1.5
  };
  return multipliers[tier] || 1.0;
}

function getTimeRemaining(deadline) {
  const now = new Date();
  const end = new Date(deadline);
  const hours = Math.floor((end - now) / (1000 * 60 * 60));
  return `${hours} hours remaining`;
}
```

**Task Detail Modal:**
```jsx
// TaskDetailModal.jsx
export function TaskDetailModal({ task, creatorTier, onReserve, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold">{task.contentType}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        
        {/* Audio Player */}
        <AudioPlayer src={task.audioUrl} waveform={task.waveformData} />
        
        {/* Content Requirements */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Content Requirements</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Word count: {task.wordCountMin}-{task.wordCountMax} words</li>
            <li>Structure: {task.structureOutline}</li>
            <li>Tone: {task.toneGuidelines}</li>
          </ul>
        </div>
        
        {/* Acceptance Criteria */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Acceptance Criteria (QA Evaluation)</h3>
          <ul className="space-y-2">
            {task.acceptanceCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-sm text-gray-700">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Earnings Breakdown */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Earnings Breakdown</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Base rate:</span>
              <span>${task.baseRate}</span>
            </div>
            <div className="flex justify-between">
              <span>Tier multiplier ({creatorTier}):</span>
              <span>{getTierMultiplier(creatorTier)}x</span>
            </div>
            {task.bundleBonus > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Bundle bonus ({task.bundleSize}x):</span>
                <span>+${task.bundleBonus}</span>
              </div>
            )}
            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-green-600">
                ${(task.baseRate * getTierMultiplier(creatorTier) + task.bundleBonus).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Deadline */}
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <ClockIcon className="w-4 h-4 mr-1" />
          <span>Deadline: {getTimeRemaining(task.deadline)} ({new Date(task.deadline).toLocaleString()})</span>
        </div>
        
        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onReserve(task)}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {task.bundleSize > 1 ? `Reserve Bundle (${task.bundleSize} tasks)` : 'Reserve Task'}
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
```

#### Accessibility Requirements
- Task cards: Keyboard navigable (Tab to move, Enter to open detail modal)
- Modal: Focus trap (Tab cycles within modal, Escape closes)
- Audio player: Keyboard controls (Space = play/pause, Arrow keys = seek, +/- = speed)

#### Mobile Optimization
- Task grid: 1 column on mobile (stacked vertically)
- Task detail modal: Full-screen on mobile (easier to read requirements)
- Audio player: Mobile-optimized controls (larger touch targets)

### 3. Canvas Editor (Maria's Creation Workspace)

#### Purpose
Provide distraction-free content creation environment with clear acceptance criteria and helpful tooling.

#### User Flow
1. **Audio Player (Initial State)**
   - Full-width waveform visualization
   - Playback controls: Play/pause, seek, speed (0.5x to 2x), volume
   - Time markers: Current time / Total duration
   - Minimize button (collapses to floating widget after initial listen)

2. **Acceptance Criteria Sidebar (Left)**
   - Checklist items (auto-updated as creator writes):
     - ✅ Word count: 625/500-700 (green checkmark when in range)
     - ✅ Structure: Intro + 3 key points + Conclusion (checkmarks for each section)
     - ⏸️ Tone: Business professional (manual QA evaluation)
     - ⏸️ Actionable takeaways: 2/3 (yellow alert when incomplete)
   - Collapsible panel (hide to maximize canvas space)

3. **Canvas Editor (Center)**
   - Block-based architecture (inspired by Notion/Substack)
   - Slash commands for formatting:
     - `/` → Shows command menu (Heading 1, Heading 2, List, Quote, Code Block)
     - `//` → Quick insert (Bulleted List)
     - `///` → Quick insert (Numbered List)
   - Markdown shortcuts:
     - `# Heading` → Auto-converts to Heading 1
     - `- List item` → Auto-converts to Bulleted List
     - `> Quote` → Auto-converts to Quote Block
   - Real-time character/word count (bottom-right corner)
   - Auto-save indicator (top-right: "Auto-saved 5 seconds ago")

4. **Submission Flow**
   - Preview button: Opens modal showing formatted content (client view)
   - Submit button: Active only when all required acceptance criteria met
   - Submission confirmation modal:
     - "Are you sure? You have 1 of 3 attempts remaining."
     - Checklist recap (all acceptance criteria confirmed)
     - [ Cancel ] [ Confirm Submission ]

#### Technical Specifications

**Canvas Editor Component:**
```jsx
// CanvasEditor.jsx
import { useState, useEffect, useCallback } from 'react';
import { Editor, Transforms, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import debounce from 'lodash/debounce';

export function CanvasEditor({ initialContent, acceptanceCriteria, onSave }) {
  const [editor] = useState(() => withHistory(withReact(createEditor())));
  const [value, setValue] = useState(initialContent);
  const [wordCount, setWordCount] = useState(0);
  const [lastSaved, setLastSaved] = useState(new Date());
  
  // Auto-save every 30 seconds
  const autoSave = useCallback(
    debounce((content) => {
      onSave(content);
      setLastSaved(new Date());
    }, 30000),
    [onSave]
  );
  
  useEffect(() => {
    const text = value.map(node => node.children.map(child => child.text).join('')).join(' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    setWordCount(words);
    autoSave(value);
  }, [value, autoSave]);
  
  // Slash command handler
  const handleKeyDown = (event) => {
    if (event.key === '/') {
      // Show command menu
      showCommandMenu(editor);
    }
  };
  
  return (
    <div className="h-full flex flex-col">
      {/* Auto-save Indicator */}
      <div className="text-xs text-gray-500 text-right mb-2">
        Auto-saved {getTimeAgo(lastSaved)}
      </div>
      
      {/* Editor */}
      <Slate editor={editor} value={value} onChange={setValue}>
        <Editable
          className="flex-1 prose max-w-none p-6 focus:outline-none"
          placeholder="Start writing... (Type / for formatting commands)"
          onKeyDown={handleKeyDown}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
      
      {/* Word Count */}
      <div className="text-sm text-gray-600 text-right mt-2">
        {wordCount} words
        {acceptanceCriteria.wordCountMin && (
          <span className={wordCount >= acceptanceCriteria.wordCountMin && wordCount <= acceptanceCriteria.wordCountMax
            ? 'text-green-600 ml-2'
            : 'text-orange-500 ml-2'}>
            (Target: {acceptanceCriteria.wordCountMin}-{acceptanceCriteria.wordCountMax})
          </span>
        )}
      </div>
    </div>
  );
}

// Block rendering (headings, lists, quotes, etc.)
const renderElement = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'heading-1':
      return <h1 {...attributes} className="text-3xl font-bold mb-4">{children}</h1>;
    case 'heading-2':
      return <h2 {...attributes} className="text-2xl font-semibold mb-3">{children}</h2>;
    case 'bulleted-list':
      return <ul {...attributes} className="list-disc list-inside mb-4">{children}</ul>;
    case 'numbered-list':
      return <ol {...attributes} className="list-decimal list-inside mb-4">{children}</ol>;
    case 'quote':
      return <blockquote {...attributes} className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-4">{children}</blockquote>;
    default:
      return <p {...attributes} className="mb-4">{children}</p>;
  }
};

// Leaf rendering (bold, italic, underline)
const renderLeaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  return <span {...attributes}>{children}</span>;
};

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return `${seconds} seconds ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours} hours ago`;
}
```

**Acceptance Criteria Sidebar:**
```jsx
// AcceptanceCriteriaSidebar.jsx
export function AcceptanceCriteriaSidebar({ criteria, currentContent }) {
  const wordCount = currentContent.split(/\s+/).filter(Boolean).length;
  const hasIntro = /^#.*intro/i.test(currentContent);
  const keyPointsCount = (currentContent.match(/^##/gm) || []).length;
  const hasConclusion = /conclusion/i.test(currentContent);
  
  return (
    <div className="w-80 border-r p-4 overflow-y-auto">
      <h3 className="font-semibold mb-4">Acceptance Criteria</h3>
      
      <div className="space-y-3">
        {/* Word Count */}
        <div className="flex items-start">
          {wordCount >= criteria.wordCountMin && wordCount <= criteria.wordCountMax ? (
            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
          ) : (
            <ClockIcon className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
          )}
          <div>
            <p className="text-sm font-medium">Word count: {wordCount}/{criteria.wordCountMin}-{criteria.wordCountMax}</p>
            {wordCount < criteria.wordCountMin && (
              <p className="text-xs text-gray-500 mt-1">
                {criteria.wordCountMin - wordCount} words remaining
              </p>
            )}
          </div>
        </div>
        
        {/* Structure */}
        <div className="flex items-start">
          {hasIntro && keyPointsCount >= 3 && hasConclusion ? (
            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
          ) : (
            <ClockIcon className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
          )}
          <div>
            <p className="text-sm font-medium">Structure</p>
            <ul className="text-xs text-gray-600 mt-1 space-y-1">
              <li className={hasIntro ? 'text-green-600' : ''}>
                {hasIntro ? '✓' : '○'} Introduction
              </li>
              <li className={keyPointsCount >= 3 ? 'text-green-600' : ''}>
                {keyPointsCount >= 3 ? '✓' : '○'} 3+ Key points ({keyPointsCount}/3)
              </li>
              <li className={hasConclusion ? 'text-green-600' : ''}>
                {hasConclusion ? '✓' : '○'} Conclusion
              </li>
            </ul>
          </div>
        </div>
        
        {/* Tone (Manual QA) */}
        <div className="flex items-start">
          <ClockIcon className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Tone: {criteria.tone}</p>
            <p className="text-xs text-gray-500 mt-1">Evaluated by QA</p>
          </div>
        </div>
        
        {/* Actionable Takeaways */}
        <div className="flex items-start">
          <ClockIcon className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Actionable takeaways: 2/3</p>
            <p className="text-xs text-gray-500 mt-1">Add 1 more concrete action item</p>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-6 text-sm text-blue-600 hover:underline">
        Hide Criteria (Ctrl+H)
      </button>
    </div>
  );
}
```

**Audio Player (Minimizable):**
```jsx
// MinimizableAudioPlayer.jsx
import { useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

export function MinimizableAudioPlayer({ audioUrl, waveformData }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1.0);
  
  // Initialize WaveSurfer (waveform visualization library)
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#3b82f6',
      height: isMinimized ? 40 : 120,
      responsive: true
    });
    
    wavesurfer.load(audioUrl);
    return () => wavesurfer.destroy();
  }, [audioUrl, isMinimized]);
  
  if (isMinimized) {
    // Floating widget (bottom-right corner)
    return (
      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 w-80 z-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium truncate">Audio Player</span>
          <button onClick={() => setIsMinimized(false)} className="text-gray-400 hover:text-gray-600">
            <ExpandIcon className="w-4 h-4" />
          </button>
        </div>
        <div id="waveform"></div>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={togglePlay} className="p-1 hover:bg-gray-100 rounded">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <select value={speed} onChange={(e) => setSpeed(e.target.value)} className="text-sm border rounded px-2 py-1">
            <option value="0.5">0.5x</option>
            <option value="1.0">1.0x</option>
            <option value="1.5">1.5x</option>
            <option value="2.0">2.0x</option>
          </select>
        </div>
      </div>
    );
  }
  
  // Full-width player (default state)
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium">Audio Source</span>
        <button onClick={() => setIsMinimized(true)} className="text-sm text-blue-600 hover:underline">
          Minimize
        </button>
      </div>
      <div id="waveform" className="mb-3"></div>
      <div className="flex items-center gap-4">
        <button onClick={togglePlay} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <span className="text-sm text-gray-600">0:00 / 45:23</span>
        <select value={speed} onChange={(e) => setSpeed(e.target.value)} className="text-sm border rounded px-3 py-1">
          <option value="0.5">0.5x</option>
          <option value="1.0">1.0x</option>
          <option value="1.5">1.5x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>
    </div>
  );
}
```

#### Accessibility Requirements
- Editor: Keyboard navigable (Tab to move, Enter to create new block, Slash for commands)
- Audio player: Keyboard controls (Space = play/pause, Arrow keys = seek, +/- = speed)
- Acceptance criteria: Screen reader announces checklist status changes

#### Mobile Optimization
- Acceptance criteria sidebar: Collapsible on mobile (toggle button)
- Audio player: Mobile-optimized controls (larger touch targets)
- Editor: Mobile keyboard-friendly (no reliance on keyboard shortcuts)

### 4. Rubric Scoring & QA Review (James's Workflow)

#### Purpose
Enable QA editors to evaluate creator submissions against objective criteria, provide actionable feedback, and maintain platform quality.

#### User Flow
1. **Review Queue Dashboard**
   - Table view of pending reviews:
     - Audio title, content type, creator name, tier, submission time, time in queue
   - Filter controls: Content type, creator tier, status (pending, in progress, completed)
   - Sort controls: Oldest first, rush priority, time in queue
   - SLA indicators: Target review time (2 hours standard, 1 hour rush), overdue alerts

2. **Review Interface (Dual-Pane Canvas)**
   - Left pane: Audio player (waveform, playback controls, time-stamped comments)
   - Right pane: Creator submission (read-only, with inline comment pins)
   - Bottom panel: Rubric scoring interface (5-point scale per criterion)

3. **Rubric Scoring**
   - Criteria (4 categories, 5-point scale each):
     - **Clarity** (Structure, readability): 1 (Confusing) → 5 (Excellent)
     - **Accuracy** (Factual correctness): 1 (Multiple errors) → 5 (Perfect)
     - **Tone** (Audience-appropriate): 1 (Off-target) → 5 (Perfect)
     - **Completeness** (Meets acceptance criteria): 1 (Missing key elements) → 5 (Exceeds expectations)
   - Comment field (required for each criterion below 4/5)
   - Average score: Auto-calculated (e.g., 4.25/5)
   - Approval threshold: 4.0/5 minimum average

4. **Inline Commenting**
   - Click paragraph → Add comment pin
   - Comment types:
     - Required change (must fix before approval)
     - Suggestion (optional improvement)
     - Praise (positive reinforcement)
   - Link comment to rubric criterion (e.g., "Accuracy: Fix percentage in line 8")

5. **Decision Actions**
   - **Approve Submission** (if average score ≥ 4.0/5)
     - Confirm modal: "Approve submission? Creator will receive payout."
     - Success notification: "Submission approved. Creator notified."
   - **Request Revision** (if average score < 4.0/5 or required changes needed)
     - Revision template:
       - Required changes (must-fix items)
       - Suggestions (optional improvements)
       - Rubric scores (with justifications)
       - Inline comments (contextual feedback)
     - Attempt counter: "Attempt 1 of 3 remaining"
   - **Escalate to Admin** (if dispute or edge case)
     - Escalation form: Reason, context, recommended action
     - Notify admin: "Review escalated to admin dashboard"

#### Technical Specifications

**Rubric Scoring Interface:**
```jsx
// RubricScoringInterface.jsx
export function RubricScoringInterface({ onScoreChange, onApprove, onRequestRevision }) {
  const [scores, setScores] = useState({
    clarity: { score: null, comment: '' },
    accuracy: { score: null, comment: '' },
    tone: { score: null, comment: '' },
    completeness: { score: null, comment: '' }
  });
  
  const averageScore = Object.values(scores)
    .filter(s => s.score !== null)
    .reduce((sum, s) => sum + s.score, 0) / Object.keys(scores).length;
  
  const canApprove = averageScore >= 4.0 && Object.values(scores).every(s => s.score !== null);
  
  return (
    <div className="bg-white border-t p-6">
      <h3 className="text-lg font-semibold mb-4">Rubric Scoring</h3>
      
      <div className="space-y-6">
        {/* Clarity */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Clarity (Structure, readability)
          </label>
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map(score => (
              <button
                key={score}
                onClick={() => setScores({ ...scores, clarity: { ...scores.clarity, score } })}
                className={`w-12 h-12 rounded-lg border-2 transition
                  ${scores.clarity.score === score
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                    : 'border-gray-300 hover:border-gray-400'}`}
              >
                {score}
              </button>
            ))}
          </div>
          {scores.clarity.score < 4 && (
            <textarea
              placeholder="Explain why (required for scores below 4)"
              value={scores.clarity.comment}
              onChange={(e) => setScores({ ...scores, clarity: { ...scores.clarity, comment: e.target.value } })}
              className="w-full border rounded-lg p-2 text-sm"
              rows={2}
            />
          )}
        </div>
        
        {/* Accuracy */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Accuracy (Factual correctness)
          </label>
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map(score => (
              <button
                key={score}
                onClick={() => setScores({ ...scores, accuracy: { ...scores.accuracy, score } })}
                className={`w-12 h-12 rounded-lg border-2 transition
                  ${scores.accuracy.score === score
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                    : 'border-gray-300 hover:border-gray-400'}`}
              >
                {score}
              </button>
            ))}
          </div>
          {scores.accuracy.score < 4 && (
            <textarea
              placeholder="Explain why (required for scores below 4)"
              value={scores.accuracy.comment}
              onChange={(e) => setScores({ ...scores, accuracy: { ...scores.accuracy, comment: e.target.value } })}
              className="w-full border rounded-lg p-2 text-sm"
              rows={2}
            />
          )}
        </div>
        
        {/* Tone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Tone (Professional, audience-appropriate)
          </label>
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map(score => (
              <button
                key={score}
                onClick={() => setScores({ ...scores, tone: { ...scores.tone, score } })}
                className={`w-12 h-12 rounded-lg border-2 transition
                  ${scores.tone.score === score
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                    : 'border-gray-300 hover:border-gray-400'}`}
              >
                {score}
              </button>
            ))}
          </div>
          {scores.tone.score < 4 && (
            <textarea
              placeholder="Explain why (required for scores below 4)"
              value={scores.tone.comment}
              onChange={(e) => setScores({ ...scores, tone: { ...scores.tone, comment: e.target.value } })}
              className="w-full border rounded-lg p-2 text-sm"
              rows={2}
            />
          )}
        </div>
        
        {/* Completeness */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Completeness (Meets acceptance criteria)
          </label>
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map(score => (
              <button
                key={score}
                onClick={() => setScores({ ...scores, completeness: { ...scores.completeness, score } })}
                className={`w-12 h-12 rounded-lg border-2 transition
                  ${scores.completeness.score === score
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                    : 'border-gray-300 hover:border-gray-400'}`}
              >
                {score}
              </button>
            ))}
          </div>
          {scores.completeness.score < 4 && (
            <textarea
              placeholder="Explain why (required for scores below 4)"
              value={scores.completeness.comment}
              onChange={(e) => setScores({ ...scores, completeness: { ...scores.completeness, comment: e.target.value } })}
              className="w-full border rounded-lg p-2 text-sm"
              rows={2}
            />
          )}
        </div>
      </div>
      
      {/* Average Score */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Average Score:</span>
          <span className={`text-2xl font-bold ${averageScore >= 4.0 ? 'text-green-600' : 'text-orange-600'}`}>
            {averageScore.toFixed(2)}/5
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {averageScore >= 4.0 ? 'Meets approval threshold (4.0/5)' : 'Below approval threshold (4.0/5)'}
        </p>
      </div>
      
      {/* Actions */}
      <div className="mt-6 flex gap-3">
        {canApprove ? (
          <button
            onClick={onApprove}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            ✓ Approve Submission
          </button>
        ) : (
          <button
            onClick={onRequestRevision}
            className="flex-1 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
          >
            ↻ Request Revision
          </button>
        )}
        
        <button
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          ⚠ Escalate to Admin
        </button>
      </div>
    </div>
  );
}
```

**Inline Commenting System:**
```jsx
// InlineCommentPin.jsx
export function InlineCommentPin({ paragraphId, onAddComment, existingComments }) {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState({ type: 'required', text: '', criterion: 'accuracy' });
  
  return (
    <div className="relative inline-block">
      {/* Comment Pin (visible on hover or if comments exist) */}
      <button
        className="absolute -right-8 top-0 w-6 h-6 rounded-full bg-yellow-400 text-white text-xs hover:bg-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {existingComments.length || '+'}
      </button>
      
      {/* Comment Modal */}
      {isOpen && (
        <div className="absolute right-0 top-8 w-80 bg-white border shadow-lg rounded-lg p-4 z-10">
          <h4 className="font-semibold mb-3">Add Comment</h4>
          
          {/* Comment Type */}
          <select
            value={comment.type}
            onChange={(e) => setComment({ ...comment, type: e.target.value })}
            className="w-full border rounded px-3 py-2 mb-2"
          >
            <option value="required">Required Change</option>
            <option value="suggestion">Suggestion</option>
            <option value="praise">Praise</option>
          </select>
          
          {/* Rubric Criterion */}
          <select
            value={comment.criterion}
            onChange={(e) => setComment({ ...comment, criterion: e.target.value })}
            className="w-full border rounded px-3 py-2 mb-2"
          >
            <option value="clarity">Clarity</option>
            <option value="accuracy">Accuracy</option>
            <option value="tone">Tone</option>
            <option value="completeness">Completeness</option>
          </select>
          
          {/* Comment Text */}
          <textarea
            value={comment.text}
            onChange={(e) => setComment({ ...comment, text: e.target.value })}
            placeholder="Enter your feedback..."
            className="w-full border rounded px-3 py-2 mb-3"
            rows={3}
          />
          
          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                onAddComment(paragraphId, comment);
                setIsOpen(false);
                setComment({ type: 'required', text: '', criterion: 'accuracy' });
              }}
              className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add Comment
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
          
          {/* Existing Comments */}
          {existingComments.length > 0 && (
            <div className="mt-4 border-t pt-3">
              <h5 className="text-sm font-medium mb-2">Existing Comments</h5>
              {existingComments.map((c, i) => (
                <div key={i} className="mb-2 p-2 bg-gray-50 rounded text-sm">
                  <span className={`font-medium ${
                    c.type === 'required' ? 'text-orange-600' :
                    c.type === 'suggestion' ? 'text-blue-600' :
                    'text-green-600'
                  }`}>
                    {c.type === 'required' ? '⚠️ Required' :
                     c.type === 'suggestion' ? '💡 Suggestion' :
                     '👍 Praise'}
                  </span>
                  <p className="text-gray-700 mt-1">{c.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

#### Accessibility Requirements
- Rubric scoring: Keyboard navigable (Tab to move between criteria, Number keys 1-5 to score)
- Inline comments: Keyboard accessible (Tab to focus pin, Enter to open modal)
- Audio player: Keyboard controls (Space = play/pause, Arrow keys = seek)

#### Mobile Optimization
- Dual-pane layout: Stack vertically on mobile (audio player → submission content → rubric)
- Rubric scoring: Larger touch targets (48px minimum for score buttons)
- Inline comments: Full-screen modal on mobile (easier to write feedback)

## Visual Design System

### Typography

**Primary Font:** Inter (sans-serif)
- **Headings:** Inter Bold (700)
  - H1: 36px (2.25rem), line-height 1.2, letter-spacing -0.02em
  - H2: 28px (1.75rem), line-height 1.3, letter-spacing -0.01em
  - H3: 24px (1.5rem), line-height 1.4
  - H4: 20px (1.25rem), line-height 1.4
- **Body Text:** Inter Regular (400)
  - Base: 16px (1rem), line-height 1.6
  - Small: 14px (0.875rem), line-height 1.5
  - Tiny: 12px (0.75rem), line-height 1.4
- **Buttons & UI:** Inter Medium (500)
  - Primary Button: 16px (1rem), line-height 1.5
  - Secondary Button: 14px (0.875rem), line-height 1.5

**Code/Monospace Font:** JetBrains Mono (monospace)
- Used for: Code blocks, technical content, timestamps

**Accessibility:**
- Minimum font size: 14px (0.875rem) for all UI elements
- Line height: 1.5+ for body text (improves readability)
- Letter spacing: Slight negative tracking for large headings (improves readability)

### Color Palette

**Primary Colors:**
- **Blue 600** (Primary brand): `#2563eb` (RGB: 37, 99, 235)
  - Use for: Primary buttons, links, active states, focus rings
- **Blue 700** (Hover state): `#1d4ed8` (RGB: 29, 78, 216)
- **Blue 50** (Background highlights): `#eff6ff` (RGB: 239, 246, 255)

**Neutral Colors:**
- **Gray 900** (Headings, primary text): `#111827` (RGB: 17, 24, 39)
- **Gray 700** (Body text): `#374151` (RGB: 55, 65, 81)
- **Gray 500** (Secondary text, placeholders): `#6b7280` (RGB: 107, 114, 128)
- **Gray 300** (Borders, dividers): `#d1d5db` (RGB: 209, 213, 219)
- **Gray 100** (Background highlights): `#f3f4f6` (RGB: 243, 244, 246)
- **Gray 50** (Section backgrounds): `#f9fafb` (RGB: 249, 250, 251)

**Semantic Colors:**
- **Green 600** (Success, approval): `#16a34a` (RGB: 22, 163, 74)
  - Use for: Approved submissions, checkmarks, positive status
- **Orange 600** (Warning, revision): `#ea580c` (RGB: 234, 88, 12)
  - Use for: Revision requests, incomplete criteria, warnings
- **Red 600** (Error, rejection): `#dc2626` (RGB: 220, 38, 38)
  - Use for: Error states, overdue tasks, critical alerts
- **Yellow 500** (Pending, in progress): `#eab308` (RGB: 234, 179, 8)
  - Use for: Pending reviews, in-progress status, comment pins

**Glassmorphism (Premium UI Effect):**
- Background: `rgba(255, 255, 255, 0.9)` (90% opacity white)
- Backdrop filter: `blur(12px)` (frosted glass effect)
- Border: `1px solid rgba(255, 255, 255, 0.3)` (subtle edge)
- Use for: Landing page hero cards, modal overlays, floating widgets

**Accessibility:**
- All text colors meet WCAG 2.1 AA contrast ratio (4.5:1 minimum)
- Blue 600 on white: 7.4:1 (AAA level)
- Gray 700 on white: 11.3:1 (AAA level)
- Green 600 on white: 4.7:1 (AA level)

### Spacing System

**Base Unit:** 4px (0.25rem)

**Spacing Scale (Tailwind-compatible):**
- `1` = 4px (0.25rem)
- `2` = 8px (0.5rem)
- `3` = 12px (0.75rem)
- `4` = 16px (1rem) — **Base unit for most UI elements**
- `5` = 20px (1.25rem)
- `6` = 24px (1.5rem)
- `8` = 32px (2rem) — **Section padding**
- `10` = 40px (2.5rem)
- `12` = 48px (3rem) — **Large section gaps**
- `16` = 64px (4rem)
- `20` = 80px (5rem)

**Component Padding:**
- Card padding: `p-6` (24px)
- Button padding: `py-3 px-6` (12px vertical, 24px horizontal)
- Input padding: `py-2 px-4` (8px vertical, 16px horizontal)
- Modal padding: `p-6 md:p-8` (24px mobile, 32px desktop)

**Section Spacing:**
- Between sections: `mb-8` or `mb-12` (32px or 48px)
- Between paragraphs: `mb-4` (16px)
- Between form fields: `mb-4` (16px)

### Border Radius

**Rounding Scale:**
- `rounded-sm` = 2px (subtle rounding for small elements)
- `rounded` = 4px (default for buttons, inputs)
- `rounded-md` = 6px (cards, modals)
- `rounded-lg` = 8px (large cards, panels)
- `rounded-xl` = 12px (hero sections, feature cards)
- `rounded-full` = 50% (circular avatars, icon buttons)

**Component Rounding:**
- Buttons: `rounded-lg` (8px)
- Inputs: `rounded-lg` (8px)
- Cards: `rounded-lg` (8px)
- Modals: `rounded-xl` (12px)
- Avatar images: `rounded-full` (circular)

### Shadows

**Shadow Scale:**
- `shadow-sm` = `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (subtle depth for inputs)
- `shadow` = `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)` (default for cards)
- `shadow-md` = `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` (elevated cards)
- `shadow-lg` = `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` (modals)
- `shadow-xl` = `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` (floating widgets)

**Component Shadows:**
- Cards (default): `shadow`
- Cards (hover): `shadow-md`
- Modals: `shadow-lg`
- Floating audio player: `shadow-xl`
- Buttons: No shadow (flat design)

### Component Library

#### Buttons

**Primary Button:**
```jsx
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
  Primary Action
</button>
```

**Secondary Button:**
```jsx
<button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
  Secondary Action
</button>
```

**Destructive Button:**
```jsx
<button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
  Delete
</button>
```

**Ghost Button (Minimal):**
```jsx
<button className="text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
  Learn More
</button>
```

**Icon Button:**
```jsx
<button className="w-10 h-10 rounded-full hover:bg-gray-100 transition flex items-center justify-center">
  <XIcon className="w-5 h-5 text-gray-600" />
</button>
```

#### Inputs

**Text Input:**
```jsx
<input
  type="text"
  placeholder="Enter title..."
  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-3 focus:ring-blue-600 focus:ring-offset-2"
/>
```

**Textarea:**
```jsx
<textarea
  placeholder="Enter description..."
  rows={4}
  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-3 focus:ring-blue-600 focus:ring-offset-2"
/>
```

**Select Dropdown:**
```jsx
<select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-3 focus:ring-blue-600 focus:ring-offset-2">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

**Checkbox:**
```jsx
<label className="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
  <span className="text-sm text-gray-700">Accept terms</span>
</label>
```

#### Cards

**Default Card:**
```jsx
<div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-sm text-gray-600">Card content goes here.</p>
</div>
```

**Highlighted Card (Selected State):**
```jsx
<div className="border-2 border-blue-500 bg-blue-50 rounded-lg p-6">
  <h3 className="text-lg font-semibold text-blue-900 mb-2">Selected Card</h3>
  <p className="text-sm text-blue-700">This card is selected.</p>
</div>
```

#### Modals

**Modal Container:**
```jsx
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
    <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
    <p className="text-gray-700 mb-6">Modal content goes here.</p>
    <div className="flex gap-3">
      <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        Confirm
      </button>
      <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
        Cancel
      </button>
    </div>
  </div>
</div>
```

#### Badges

**Status Badge:**
```jsx
<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
  Approved
</span>
```

**Tier Badge:**
```jsx
<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
  Senior Creator
</span>
```

**Count Badge:**
```jsx
<span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
  3
</span>
```

### Iconography

**Icon Library:** Heroicons (by Tailwind Labs)
- **Style:** Outline (default), Solid (filled for active states)
- **Size:** 20px (default), 24px (large), 16px (small)

**Common Icons:**
- Upload: `<UploadIcon />` (file upload, task submission)
- Check: `<CheckIcon />` or `<CheckCircleIcon />` (approval, completion)
- Clock: `<ClockIcon />` (pending, time remaining)
- Exclamation: `<ExclamationCircleIcon />` (warnings, errors)
- Play/Pause: `<PlayIcon />`, `<PauseIcon />` (audio player)
- Trash: `<TrashIcon />` (delete actions)
- Pencil: `<PencilIcon />` (edit actions)
- User: `<UserIcon />` or `<UserCircleIcon />` (profiles, avatars)

**Accessibility:**
- All icons paired with text have `aria-hidden="true"` (screen readers read text, not icon)
- Icon-only buttons have `aria-label` (e.g., `<button aria-label="Upload source"><UploadIcon /></button>`)

### Animation & Motion

**Principles:**
- **Subtle:** Animations should feel natural, not distracting
- **Fast:** Most transitions under 200ms (immediate feedback)
- **Purposeful:** Every animation should communicate state change or guide attention

**Transition Durations:**
- Instant: `duration-75` (75ms) — Hover effects, button states
- Fast: `duration-150` (150ms) — Dropdown menus, tooltips
- Normal: `duration-300` (300ms) — Modal open/close, page transitions
- Slow: `duration-500` (500ms) — Success animations, confetti

**Common Animations:**

**Button Hover:**
```jsx
<button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-150">
  Hover Me
</button>
```

**Card Hover (Lift Effect):**
```jsx
<div className="border rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-150">
  Hover to lift
</div>
```

**Modal Fade-In:**
```jsx
// Using Framer Motion
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2 }}
  className="fixed inset-0 bg-black bg-opacity-50"
>
  {/* Modal content */}
</motion.div>
```

**Success Confetti (Celebration):**
```jsx
import confetti from 'canvas-confetti';

function celebrateApproval() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
```

**Skeleton Loading (Content Placeholder):**
```jsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

**Accessibility:**
- Respect `prefers-reduced-motion` media query (disable animations for users who prefer reduced motion)
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Design & Accessibility

### Responsive Breakpoints

**Tailwind Breakpoints:**
- `sm`: 640px (small tablets, large phones in landscape)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops, small desktops)
- `xl`: 1280px (large desktops)
- `2xl`: 1536px (extra-large desktops, ultrawide monitors)

**Design Strategy:**
- **Mobile-first:** Design for mobile (320px+), progressively enhance for larger screens
- **Touch-optimized:** Minimum touch target size: 44px × 44px (WCAG 2.5.5)
- **Fluid typography:** Use relative units (rem, em) instead of fixed pixels
- **Flexible layouts:** Use CSS Grid/Flexbox with responsive columns

### Mobile Optimizations (320px - 767px)

**Layout:**
- Single-column layouts (stack vertically)
- Full-width cards (no horizontal scrolling)
- Collapsible sidebars (hide by default, toggle with hamburger menu)
- Sticky headers (navigation always accessible)

**Navigation:**
- Hamburger menu (3-line icon) for primary navigation
- Bottom navigation bar (iOS-style) for key actions (Upload, Tasks, Earnings, Profile)
- Swipe gestures (left/right) for content navigation (optional)

**Typography:**
- Scale down heading sizes:
  - H1: 28px (mobile) vs. 36px (desktop)
  - H2: 24px (mobile) vs. 28px (desktop)
  - Body: 16px (mobile) vs. 16px (desktop) — No scaling for readability
- Increase line height (1.6+) for easier reading on small screens

**Forms:**
- Full-width inputs (easier to tap)
- Large input fields (min-height: 44px)
- Auto-advance to next field (on valid input)
- Native input types (e.g., `type="email"` triggers email keyboard)

**Modals:**
- Full-screen modals on mobile (easier to read content)
- Slide-up animation (iOS-style) instead of fade-in

**Audio Player:**
- Minimize to floating widget after initial listen (saves screen space)
- Large touch targets for playback controls (48px minimum)

### Tablet Optimizations (768px - 1023px)

**Layout:**
- 2-column layouts (e.g., task grid: 2 cards per row)
- Sidebars: Collapsible by default, expand on larger tablets (1024px+)
- Modal width: Max 600px (centered on screen)

**Navigation:**
- Persistent top navigation (no hamburger menu)
- Sidebar navigation (if applicable) visible on larger tablets

**Forms:**
- 2-column form layouts (e.g., First Name | Last Name on same row)
- Input fields: Max-width 600px (easier to scan)

### Desktop Optimizations (1024px+)

**Layout:**
- Multi-column layouts (e.g., task grid: 3 cards per row on desktop, 4 on ultrawide)
- Persistent sidebars (e.g., acceptance criteria sidebar in canvas editor)
- Modal width: Max 800px (centered on screen)

**Navigation:**
- Persistent top navigation with all links visible
- Sidebar navigation (if applicable) always visible

**Hover States:**
- Enable hover effects (cards lift on hover, buttons change color)
- Tooltips on hover (additional context for icons)

**Keyboard Shortcuts:**
- Enable power-user shortcuts (Cmd+K command palette, Cmd+S save, etc.)
- Display shortcut hints in tooltips (e.g., "Upload (Cmd+U)")

### Accessibility Requirements (WCAG 2.1 AA)

#### 1. Perceivable

**Color Contrast:**
- Text contrast: 4.5:1 minimum (AA) for normal text, 3:1 for large text (18px+)
- UI component contrast: 3:1 minimum for interactive elements (buttons, inputs)
- Tools: WebAIM Contrast Checker, Chrome DevTools Accessibility Panel

**Alternative Text:**
- All images have `alt` text describing content (e.g., `<img alt="Creator tier progress bar showing 12/30 approvals" />`)
- Decorative images have `alt=""` (screen readers skip them)
- Icon-only buttons have `aria-label` (e.g., `<button aria-label="Upload source"><UploadIcon /></button>`)

**Captions & Transcripts:**
- Audio players have transcript option (for hearing-impaired users)
- Video introductions (creator applications) have captions

#### 2. Operable

**Keyboard Navigation:**
- All interactive elements accessible via keyboard (Tab, Enter, Space, Escape)
- Focus indicators visible (3px blue ring on focus)
- Tab order follows logical flow (left-to-right, top-to-bottom)
- Skip links ("Skip to main content") bypass repetitive navigation

**Focus Management:**
- Modals trap focus (Tab cycles within modal, Escape closes)
- On modal close, focus returns to trigger element
- On form submit, focus moves to first error (if validation fails)

**No Keyboard Trap:**
- Users can navigate away from any element using standard navigation (Tab, Shift+Tab, Escape)

**Touch Target Size:**
- Minimum touch target: 44px × 44px (WCAG 2.5.5)
- Spacing between touch targets: 8px minimum (prevents accidental taps)

#### 3. Understandable

**Consistent Navigation:**
- Navigation structure consistent across pages
- Breadcrumbs show current location (e.g., Dashboard > Upload > Review)
- Active page highlighted in navigation

**Error Identification:**
- Form errors clearly identified (red border, error message)
- Error messages descriptive (e.g., "Email must be a valid email address" not "Invalid input")
- Errors announced by screen readers (via `aria-live` or focus on error)

**Labels & Instructions:**
- All form inputs have associated `<label>` or `aria-label`
- Placeholder text supplements labels (not replaces them)
- Instructions provided before complex forms (e.g., "Upload audio file (MP3, M4A, WAV, max 2GB)")

#### 4. Robust

**Semantic HTML:**
- Use proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`, never skip levels)
- Landmark regions: `<nav>`, `<main>`, `<aside>`, `<footer>` (screen reader navigation)
- Lists: `<ul>`, `<ol>`, `<li>` (not `<div>` styled as lists)

**ARIA Attributes:**
- Use ARIA when semantic HTML insufficient:
  - `role="dialog"` for modals
  - `aria-live="polite"` for dynamic content updates (e.g., "5 new tasks available")
  - `aria-busy="true"` for loading states
  - `aria-labelledby` and `aria-describedby` for contextual relationships

**Valid HTML:**
- All HTML validates (no syntax errors)
- No duplicate IDs (breaks screen reader navigation)

### Testing Strategy

#### Phase 1: Automated Testing (Continuous Integration)

**Tools:**
- **axe DevTools** (Chrome extension): Automated accessibility audits
- **Lighthouse** (Chrome DevTools): Performance, accessibility, SEO scores
- **Wave** (WebAIM): Visual accessibility issues

**Integration:**
- Run axe-core automated tests in Jest/Cypress tests
- CI/CD pipeline fails if Lighthouse accessibility score < 90

**Example (Jest + axe):**
```javascript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('UploadFlow should have no accessibility violations', async () => {
  const { container } = render(<UploadFlow />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

#### Phase 2: Manual Testing (Pre-Launch)

**Screen Reader Testing:**
- **VoiceOver** (macOS/iOS): Test primary workflows (upload source, claim task, submit content, approve delivery)
- **NVDA** (Windows): Test creator workspace (task queue navigation, canvas editor, rubric scoring)
- **JAWS** (Windows): Test admin dashboard (creator management, dispute resolution)
- **TalkBack** (Android): Test mobile upload flow and project status monitoring

**Test Scenarios:**
- Client: Navigate project dashboard, upload source via file picker, select content types, complete payment, hear status updates
- Creator: Browse task queue, reserve task, navigate to canvas editor, submit content, hear feedback
- Admin: Navigate creator management table, review video introduction, approve/reject creator

**Keyboard-Only Navigation Testing:**
- Disconnect mouse, navigate entire application using only keyboard
- Verify all interactive elements reachable via Tab
- Test modal focus trapping (Tab cycles within modal, Escape closes)
- Verify skip links work ("Skip to main content" jumps navigation)
- Test keyboard shortcuts (Cmd+U upload, Cmd+S save, etc.)

**Real Device Testing:**
- **Mobile:** iPhone 14 Pro (iOS 17), Samsung Galaxy S23 (Android 14), iPhone SE (small screen)
- **Tablet:** iPad Pro 12.9" (iPadOS 17), Samsung Galaxy Tab S8 (Android 13)
- **Desktop:** MacBook Pro 14" (macOS Sonoma), Windows 11 laptop (1920x1080), Desktop (2560x1440)
- **Network Conditions:** Throttle to 3G to test upload progress tracking, skeleton loaders, optimistic updates

**Browser Testing:**
- Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
- Test critical flows in each browser: Upload, task claim, content editing, payment
- Verify CSS compatibility (Tailwind utility classes render correctly)

**Color Accessibility Testing:**
- **Color Blind Simulation:** Test with protanopia, deuteranopia, tritanopia filters (Chrome DevTools)
- **High Contrast Mode:** Test Windows High Contrast Mode compatibility
- **Dark Mode:** Verify all components readable in dark theme (if implemented)

#### Phase 3: User Testing (Beta Launch)

**Inclusive User Research:**
- Recruit diverse participants:
  - 3 users with visual impairments (1 screen reader user, 1 low vision user, 1 color blind user)
  - 3 users with motor impairments (1 keyboard-only user, 1 tremor/limited dexterity user)
  - 2 older adults (65+) testing mobile upload flow
  - 2 non-native English speakers testing content clarity
- Test critical workflows with each group, observe friction points
- Collect feedback on accessibility pain points and feature gaps

**Assistive Technology Compatibility:**
- Test with diverse setups: Screen reader + refreshable Braille display, voice control (Dragon NaturallySpeaking), switch control (iOS)
- Validate WCAG compliance in real-world usage scenarios

**Performance Testing:**
- Measure page load times on 3G connection (target: <3s initial load, <1s navigation)
- Test large file upload (2GB) on slow connection with resume capability
- Verify skeleton loaders show within 100ms of navigation

**Frequency:** Beta testing with 15-20 users before public launch, quarterly accessibility audits thereafter

### 8.5 Implementation Guidelines

**Developer Checklist for Responsive & Accessible Development:**

#### Responsive Development:

✅ **Use Relative Units Over Fixed Pixels:**
- Spacing: `className="p-4 md:p-6 lg:p-8"` (16px → 24px → 32px)
- Typography: `className="text-base md:text-lg lg:text-xl"` (16px → 18px → 20px)
- Widths: `className="w-full md:w-2/3 lg:w-1/2"` (100% → 66% → 50%)
- **Avoid:** `width: 320px` (use `className="w-80"` = 320px via Tailwind, responsive-friendly)

✅ **Mobile-First Media Queries:**
- Write base styles for mobile (320px+), progressively enhance for larger screens
- Example: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">` (1 column → 2 columns → 3 columns)

✅ **Touch-Optimized Interactions:**
- Minimum touch target: `className="min-h-[44px] min-w-[44px]"` (WCAG 2.5.5)
- Primary buttons on mobile: `className="py-4 px-6"` (16px vertical padding for easy tapping)
- Swipe gestures: Use `touch-action: pan-y` to allow vertical scroll while intercepting horizontal swipes

✅ **Optimize Images and Assets:**
- Responsive images: `<img srcSet="logo-320.png 320w, logo-768.png 768w, logo-1024.png 1024w" sizes="(max-width: 768px) 100vw, 33vw" />`
- Lazy load off-screen images: `<img loading="lazy" />`
- WebP format with PNG fallback for smaller file sizes

✅ **Test on Real Devices:**
- Use BrowserStack or physical devices for iOS/Android testing
- Test on actual mobile networks (not just throttled desktop Chrome)

#### Accessibility Development:

✅ **Semantic HTML Structure:**
- Use proper heading hierarchy: `<h1>` → `<h2>` → `<h3>` (never skip levels)
- Landmark regions: `<nav aria-label="Main navigation">`, `<main>`, `<aside aria-label="Filters">`, `<footer>`
- Lists: `<ul>` for unordered, `<ol>` for ordered, not `<div>` styled as lists

✅ **ARIA Labels and Roles:**
- Label icon buttons: `<button aria-label="Upload source"><UploadIcon /></button>`
- Announce dynamic changes: `<div role="status" aria-live="polite">5 new tasks available</div>`
- Modal dialogs: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title">`
- Loading states: `<div aria-busy="true">Loading projects...</div>`
- Hide decorative icons: `<svg aria-hidden="true">...</svg>` (when paired with text label)

✅ **Keyboard Navigation Implementation:**
- Focus indicators: `className="focus:ring-3 focus:ring-blue-600 focus:ring-offset-2"`
- Tab order: Ensure `tabIndex` follows logical flow (use `tabIndex="0"` for custom interactive elements, `-1` to remove from tab order)
- Escape key closes modals: `useEffect(() => { const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); }; window.addEventListener('keydown', handleEsc); return () => window.removeEventListener('keydown', handleEsc); }, []);`
- Enter/Space activate buttons: Handle both `onKeyDown` events for custom components

✅ **Focus Management:**
- Skip links: `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>`
- Modal focus trap: On open, focus first interactive element; on close, return focus to trigger element
- Form errors: Move focus to first invalid field on submit

✅ **High Contrast Mode Support:**
- Don't rely on background colors for borders: Use explicit borders (`border border-gray-300`) not just background color changes
- Test in Windows High Contrast Mode: Verify all interactive elements visible

✅ **Reduced Motion:**
- Respect user preference: `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`
- Disable confetti animation, skeleton pulse, hover scale effects for users with `prefers-reduced-motion: reduce`

#### Code Review Checklist:

Before merging any UI component, verify:
- Component renders correctly on mobile (375px), tablet (768px), desktop (1024px+)
- All interactive elements have `min-h-[44px]` on mobile
- Color contrast meets 4.5:1 minimum (use WebAIM Contrast Checker)
- All images have `alt` text (or `alt=""` + `aria-hidden="true"` if decorative)
- Icon-only buttons have `aria-label`
- Form inputs have associated `<label>` or `aria-label`
- Modals have `role="dialog"` `aria-modal="true"`
- Focus indicators visible on all interactive elements
- Component navigable via keyboard only (Tab, Enter, Space, Escape)
- Dynamic content uses `aria-live` regions
- Automated accessibility tests pass (axe DevTools, Lighthouse)
- Tested with screen reader (VoiceOver or NVDA)

This comprehensive responsive design and accessibility strategy ensures jabur provides an inclusive, high-quality experience across all devices and user abilities, positioning the platform for global scale and legal compliance.
