# 2. Creator Workspace Design

### 2.1 Three-Panel Workspace Layout

The creator workspace uses a three-panel layout optimized for podcast-to-content workflows:

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Project Name] - [Task Type: Blog Post]          [Save] [Submit]   │
├──────────────┬──────────────────────────┬─────────────────────────┤
│              │                          │                         │
│   AUDIO &    │     EDITOR PANEL         │   CONTEXT PANEL         │
│  TRANSCRIPT  │                          │                         │
│              │   Block-based rich text  │  - Brief                │
│ ▶ Play Audio │   (Notion-style)         │  - Style guide          │
│ [Progress]   │                          │  - Platform checklist   │
│              │   [Block 1: Heading]     │  - Previous outputs     │
│ Transcript:  │   [Block 2: Paragraph]   │  - Word count tracker   │
│ [Searchable] │   [Block 3: List]        │  - Format guide         │
│ [Clickable]  │                          │                         │
│              │   Format-specific tools: │  Adaptive reminders:    │
│ Key moments: │   - Word counter (blog)  │  (Based on experience)  │
│ • 0:45 Topic │   - Char counter (social)│                         │
│ • 2:30 Quote │   - Heading validator    │                         │
│              │                          │                         │
└──────────────┴──────────────────────────┴─────────────────────────┘
```

### 2.2 Panel Details

#### Left Panel: Audio & Transcript
- **Audio player** with playback controls (play, pause, speed adjustment)
- **Synchronized transcript** (clicking timestamp jumps to that moment in audio)
- **Search within transcript** (find key terms, quotes)
- **AI-highlighted key moments** (intro, main topics, conclusions, actionable quotes)
- **Download options** (transcript .txt, audio file for offline reference)

**Purpose:** Eliminates need to switch tabs or use external audio players

#### Center Panel: Block-Based Editor
- **Notion-style block editing** (type `/` to add block types)
- **Format-aware tools** appear based on output type:
  - Blog posts: Word count, heading hierarchy checker, SEO suggestions
  - Social media: Character counter per post, hashtag validator, thread preview
  - Summaries: Bullet list templates, key points extractor
  - Newsletters: Section templates, CTA blocks, image placeholders

- **Auto-save** (IndexedDB every 30 seconds + cloud sync every 2 minutes)
- **Version history** (restore previous drafts if needed)
- **Markdown support** (write in Markdown or use visual editor)

**Purpose:** Provides the right tools for each content type without overwhelming creators

#### Right Panel: Context Panel
- **Brief section** (task-specific requirements, collapsible)
- **Style guide** (project standards, client voice, examples)
- **Platform checklist** (admin-controlled quality standards)
- **Previous outputs** (if project has history, downloadable)
- **Format guide** (structure template for this output type)
- **Adaptive reminders** (changes based on creator experience level - see section 4)

**Purpose:** All reference materials in one place, no external docs needed

---

### 2.3 Format-Specific Workspace Variations

#### Blog Post Workspace
- **Center panel tools:** Word counter (target: 800-1200 words), heading hierarchy validator, readability score
- **Right panel additions:** SEO keyword suggestions, related previous blog posts
- **Reminders:** "Check heading levels (H2 → H3, no skipping)" for new creators

#### Social Media Pack Workspace
- **Center panel tools:** Character counter per platform (Twitter 280, LinkedIn 3000), hashtag validator, emoji suggester
- **Block types:** Twitter post, LinkedIn post, Instagram caption, Thread (multi-tweet)
- **Right panel additions:** Platform best practices, optimal posting times
- **Preview mode:** See how each post looks on actual platforms

#### Summary Workspace
- **Center panel tools:** Bullet list formatter, key points extractor (AI-assisted)
- **Right panel additions:** Summary templates (3-point, 5-point, executive summary)
- **Reminders:** "Include timestamps for key moments" for new creators

#### Newsletter Workspace
- **Center panel tools:** Section templates (intro, main content, CTA), link validator
- **Block types:** Header image, section divider, call-to-action block
- **Right panel additions:** Previous newsletter examples, engagement metrics

---

### 2.4 Workspace State & Persistence

**Auto-Save Strategy:**
- **Local first:** IndexedDB saves draft every 30 seconds (works offline)
- **Cloud sync:** Background sync to database every 2 minutes
- **Conflict resolution:** If connection lost, local version preserved, sync on reconnect
- **Exit warning:** "You have unsaved changes" if user tries to close tab

**Version History:**
- Every cloud sync creates a snapshot
- Creators can restore previous versions via "Version history" button
- Versions labeled with timestamp and word count delta

**Resume Work:**
- Creators return to exact workspace state (scroll position, cursor location)
- Previously opened reference materials remain open

---
