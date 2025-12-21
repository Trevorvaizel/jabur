# EPIC-03: Creator Workspace

**Epic Owner:** [TBD]  
**Priority:** P0 (Critical Path)  
**Estimated Effort:** 6-8 weeks  
**Dependencies:** Epic 1 (User Management), Epic 2 (Content Upload)  

---

## 1. Epic Overview

### 1.1 Description

This epic covers the complete creator experience: browsing available assignments, claiming work, the content creation workspace with audio player and editor, submission workflow, and performance tracking. The workspace is designed as a task-based system, not a freelance marketplace.

### 1.2 Business Value

- Efficient workspace increases creator productivity
- Level-appropriate task visibility maintains quality
- Draft saving prevents lost work
- Performance visibility motivates improvement

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Task claim rate | > 85% within 2 hours |
| Average time in workspace | < 1.5x estimated time |
| Draft save success rate | 100% |
| Creator satisfaction score | > 4.5/5 |
| First-time submission approval rate | > 80% |

### 1.4 Design Philosophy

> **Critical:** Creators experience this as a **task-based content creation tool**, NOT a gig marketplace. They should never see:
> - Client names or identifying information
> - Price the client paid
> - Platform fees or margins
> - Other creators working on the same project

---

## 2. User Stories

### 2.1 Assignment Discovery

#### US-3.1: View Available Assignments
**As a** creator  
**I want to** browse available assignments  
**So that** I can find work matching my skills  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] List view of open assignments
- [ ] Only show assignments matching creator's level
- [ ] Filter by: output type, priority, deadline, duration
- [ ] Sort by: newest, deadline, payout, duration
- [ ] Show for each: title (anonymized), output type, payout, deadline, audio duration
- [ ] Do NOT show: client name, client price, platform fee
- [ ] Pagination (20 per page)
- [ ] Real-time updates when assignments claimed

**UI Mockup:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Available Tasks                                    [Filter ▼]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Executive Summary                              $9.75 payout ││
│  │ ─────────────────────────────────────────────────────────── ││
│  │ "AI in Healthcare Industry" • 32 min audio • Standard       ││
│  │ Due in 46 hours                                              ││
│  │                                                 [View Task]  ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Blog Post                              ⚡ RUSH  $48.75 payout││
│  │ ─────────────────────────────────────────────────────────── ││
│  │ "Future of Remote Work" • 45 min audio • Rush               ││
│  │ Due in 22 hours                                              ││
│  │                                                 [View Task]  ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🔒 Fact-Check Report                                        ││
│  │ ─────────────────────────────────────────────────────────── ││
│  │ Requires Expert level (you are Mid-Level)                   ││
│  │ Complete 30 more tasks to unlock                            ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-3.2: View Assignment Details
**As a** creator  
**I want to** see full details of an assignment before claiming  
**So that** I can decide if it's right for me  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Full description visible
- [ ] Special instructions (from uploader, anonymized)
- [ ] Output type guidelines and requirements
- [ ] Example of expected output format
- [ ] Audio preview (first 60 seconds)
- [ ] Transcript preview (first 500 words)
- [ ] Deadline with countdown
- [ ] Payout amount (creator's share only)
- [ ] Claim button
- [ ] Pass button (optional, for recommendations)

---

#### US-3.3: Filter by Output Type
**As a** creator  
**I want to** filter assignments by output type  
**So that** I can focus on my strengths  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Multi-select filter for output types
- [ ] Only show types accessible at creator's level
- [ ] Show count per type
- [ ] Filter persists in session
- [ ] Clear filters option

---

#### US-3.4: Save Filter Preferences
**As a** creator  
**I want to** save my filter preferences  
**So that** I see relevant tasks immediately  

**Priority:** P2  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Save current filters as default
- [ ] Named filter presets
- [ ] Quick switch between presets
- [ ] Reset to default option

---

### 2.2 Assignment Claiming

#### US-3.5: Claim Assignment
**As a** creator  
**I want to** claim an assignment  
**So that** I commit to completing it  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Single click to claim
- [ ] Confirmation dialog with deadline reminder
- [ ] Assignment locked to creator
- [ ] Status changes to "claimed"
- [ ] Deadline becomes binding
- [ ] Added to "My Tasks" list
- [ ] Claim limit: max 3 active assignments
- [ ] Cannot claim if at limit

**Technical Notes:**
```javascript
// Claim with optimistic locking
POST /api/v1/assignments/:id/claim
{
  // No body needed
}

// Possible responses:
// 200: Successfully claimed
// 409: Already claimed by another creator
// 403: Not eligible (level mismatch)
// 429: Active assignment limit reached
```

---

#### US-3.6: View My Active Assignments
**As a** creator  
**I want to** see all my claimed assignments  
**So that** I can manage my work  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] List of all claimed, in-progress, and submitted assignments
- [ ] Status indicator for each
- [ ] Deadline countdown (urgent highlighting < 6 hours)
- [ ] Quick action: Continue working, View feedback
- [ ] Sort by deadline (default), claimed date, status
- [ ] Filter by status

---

#### US-3.7: Unclaim Assignment
**As a** creator  
**I want to** release an assignment I can't complete  
**So that** another creator can take it  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Unclaim option available within 2 hours of claiming
- [ ] Confirmation dialog with impact warning
- [ ] Assignment returns to open pool
- [ ] Too many unclaims affects reputation
- [ ] Reason required (for tracking)
- [ ] After 2 hours: must contact support

---

### 2.3 Content Creation Workspace

#### US-3.8: Audio Player
**As a** creator  
**I want to** listen to the podcast audio  
**So that** I can understand the content  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Play/pause with keyboard shortcut (space)
- [ ] Variable speed: 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x
- [ ] Skip forward/back: 5s, 15s, 30s (configurable)
- [ ] Waveform visualization
- [ ] Current position / total duration display
- [ ] Click waveform to seek
- [ ] Volume control
- [ ] Keyboard shortcuts for all controls
- [ ] Minibar mode (docked at bottom while scrolling)

**Keyboard Shortcuts:**
| Key | Action |
|-----|--------|
| Space | Play/Pause |
| ← / → | Skip back/forward 5s |
| Shift + ← / → | Skip back/forward 30s |
| ↑ / ↓ | Volume up/down |
| [ / ] | Decrease/increase speed |
| M | Mute |

---

#### US-3.9: Synced Transcript View
**As a** creator  
**I want to** see the transcript synced with audio  
**So that** I can follow along and reference quotes  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Full transcript displayed
- [ ] Current sentence highlighted during playback
- [ ] Auto-scroll to follow playback
- [ ] Click any sentence to seek audio to that point
- [ ] Timestamp visible on hover
- [ ] Speaker labels (if available)
- [ ] Search within transcript
- [ ] Copy text with attribution

---

#### US-3.10: Content Editor
**As a** creator  
**I want to** write and format my content  
**So that** I can produce quality output  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Rich text editor (TipTap or Slate)
- [ ] Formatting: bold, italic, headers (H1-H3), lists, links
- [ ] Word count (live)
- [ ] Character count
- [ ] Target word count indicator (from output type specs)
- [ ] Readability score (Flesch-Kincaid)
- [ ] Auto-save every 30 seconds
- [ ] Manual save button
- [ ] Undo/redo with history
- [ ] Full-screen distraction-free mode
- [ ] Dark mode support

**Editor Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Task: Executive Summary           [Auto-saved 30s ago] [Submit]│
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐ ┌─────────────────────────────────────────┐│
│  │  Audio Player   │ │  Content Editor                         ││
│  │  ▶ 0:00 / 32:15 │ │  ┌─────────────────────────────────────┐││
│  │  ═══════○══════  │ │  │ B I U  H1 H2 H3  • 1.  ""  🔗     │││
│  │  [1x ▼]   🔊    │ │  ├─────────────────────────────────────┤││
│  ├─────────────────┤ │  │                                     │││
│  │  Transcript     │ │  │  Start writing your summary here... │││
│  │  ─────────────  │ │  │                                     │││
│  │  Welcome to     │ │  │                                     │││
│  │  today's show...│ │  │                                     │││
│  │                 │ │  │                                     │││
│  │  ▌We'll discuss│ │  │                                     │││
│  │  the future... │ │  │                                     │││
│  │                 │ │  │                                     │││
│  └─────────────────┘ │  └─────────────────────────────────────┘││
│                      │  Words: 0 / 200-500  │  Reading level: --││
│                      └─────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-3.11: Output Type Guidelines
**As a** creator  
**I want to** see guidelines for my output type  
**So that** I know what's expected  

**Priority:** P0  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Collapsible guidelines panel
- [ ] Output type description
- [ ] Word count requirements
- [ ] Quality checklist
- [ ] Example output (expandable)
- [ ] Do's and Don'ts
- [ ] Link to full style guide

---

#### US-3.12: Draft Management
**As a** creator  
**I want to** save my work as drafts  
**So that** I can continue later  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Auto-save every 30 seconds
- [ ] Visual indicator of save status
- [ ] "Last saved" timestamp
- [ ] Version history (last 10 saves)
- [ ] Restore previous version
- [ ] Drafts persist across sessions
- [ ] Warning on browser close with unsaved changes

---

#### US-3.13: Bookmarks and Notes
**As a** creator  
**I want to** bookmark moments in the audio  
**So that** I can reference them while writing  

**Priority:** P2  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Add bookmark at current audio position
- [ ] Label for each bookmark
- [ ] Click bookmark to seek
- [ ] Add notes to bookmarks
- [ ] Bookmarks visible on waveform
- [ ] Export bookmarks (for personal use)

---

### 2.4 Quality Assistance

#### US-3.14: Plagiarism Check
**As a** creator  
**I want to** check my content for originality  
**So that** I avoid plagiarism flags  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] "Check Originality" button
- [ ] Scan against web and content database
- [ ] Highlight potentially duplicated text
- [ ] Similarity percentage
- [ ] Source links for matches
- [ ] Must be < 10% similarity to submit (warning at 5%)

---

#### US-3.15: AI Content Detection
**As the** system  
**I want to** detect AI-generated submissions  
**So that** quality is maintained  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Automatic scan on submission
- [ ] AI detection score calculated
- [ ] Score > 90% triggers review flag
- [ ] Score 70-90% triggers warning
- [ ] Creator not told specific score (to prevent gaming)
- [ ] Message: "Your submission is being reviewed for quality"

**Detection Approach:**
```javascript
// On submission
async function checkSubmission(content) {
  const [plagiarismResult, aiDetectionResult] = await Promise.all([
    checkPlagiarism(content),
    detectAIContent(content)
  ]);
  
  const flags = [];
  
  if (plagiarismResult.similarity > 0.30) {
    flags.push({ type: 'plagiarism', confidence: plagiarismResult.similarity });
  }
  
  if (aiDetectionResult.aiProbability > 0.90) {
    flags.push({ type: 'ai_generated', confidence: aiDetectionResult.aiProbability });
  }
  
  return {
    canSubmit: flags.length === 0 || flags.every(f => f.confidence < 0.70),
    requiresReview: flags.length > 0,
    flags: flags
  };
}
```

---

#### US-3.16: Writing Suggestions (AI-Assisted)
**As a** creator  
**I want to** get writing suggestions  
**So that** I can improve my content  

**Priority:** P2  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Grammar and spelling check
- [ ] Clarity suggestions
- [ ] Tone consistency check
- [ ] Optional AI expansion/compression
- [ ] Clear labeling that suggestions are AI-generated
- [ ] Creator maintains full control
- [ ] Suggestions don't bypass AI detection (final is still checked)

---

### 2.5 Submission

#### US-3.17: Submit for Review
**As a** creator  
**I want to** submit my completed work  
**So that** it goes to QA review  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Pre-submission checklist validation:
  - Word count within range
  - Plagiarism check passed
  - All required sections complete
- [ ] Confirmation dialog with summary
- [ ] Submit button disabled until requirements met
- [ ] Status changes to "submitted"
- [ ] Timestamp recorded
- [ ] Notification to QA editor
- [ ] Creator cannot edit after submission (unless revision requested)

---

#### US-3.18: View Submission History
**As a** creator  
**I want to** see my past submissions  
**So that** I can track my work  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] List all submitted assignments
- [ ] Status: submitted, approved, revision_requested, completed
- [ ] Feedback visible when available
- [ ] Filter by status, date range
- [ ] Search by title
- [ ] Export to CSV

---

#### US-3.19: Handle Revision Request
**As a** creator  
**I want to** see and address revision requests  
**So that** I can improve my submission  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Notification when revision requested
- [ ] View specific feedback from editor
- [ ] Original submission visible for reference
- [ ] Edit and resubmit
- [ ] Revision count tracked (max 2 included)
- [ ] Clear indication of required changes
- [ ] Deadline extended for revision (24 hours)

---

### 2.6 Performance & Earnings

#### US-3.20: View My Performance
**As a** creator  
**I want to** see my performance metrics  
**So that** I can improve  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Current level and progress to next
- [ ] Completed assignments (all time, this month)
- [ ] Average rating
- [ ] On-time delivery rate
- [ ] First-time approval rate
- [ ] Trending indicators (improving/declining)
- [ ] Comparison to level average (anonymous)

---

#### US-3.21: View Earnings Dashboard
**As a** creator  
**I want to** see my earnings  
**So that** I can track my income  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Total earnings (all time, this month, this week)
- [ ] Available balance (ready to withdraw)
- [ ] Pending balance (in review)
- [ ] Earnings by output type breakdown
- [ ] Earnings history chart
- [ ] Individual task payments
- [ ] **Minimum payout: $20**
- [ ] **Payout day: Sundays (batch)**
- [ ] Next payout date countdown

**Earnings Display:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Your Earnings                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐│
│  │  Available       │  │  Pending         │  │  All Time       ││
│  │  $127.50         │  │  $45.00          │  │  $1,247.25      ││
│  │  [Request Payout]│  │  2 tasks in review│  │                 ││
│  └──────────────────┘  └──────────────────┘  └──────────────────┘│
│                                                                  │
│  Next payout: Sunday, Dec 29 (5 days)                           │
│  Minimum payout amount: $20.00                                  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  December Earnings                                          ││
│  │  $172.50                                                    ││
│  │  ▁▂▃▅▇█▆▄▃▂                                                ││
│  │  Week 1  Week 2  Week 3  Week 4                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-3.22: Level Progress Tracking
**As a** creator  
**I want to** see my progress toward the next level  
**So that** I stay motivated  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Current level display with badge
- [ ] Progress bar: tasks completed vs required
- [ ] Progress bar: current rating vs required
- [ ] List of benefits at next level
- [ ] Estimated time to reach next level
- [ ] Level history timeline

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Content submissions
CREATE TABLE content_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES users(id),
    
    -- Content
    content_text TEXT NOT NULL,
    content_html TEXT,
    content_format VARCHAR(20) DEFAULT 'html',
    word_count INT NOT NULL,
    character_count INT,
    
    -- Version tracking
    version INT NOT NULL DEFAULT 1,
    is_draft BOOLEAN DEFAULT TRUE,
    
    -- Quality checks
    plagiarism_score DECIMAL(4,3),
    plagiarism_sources JSONB,
    ai_detection_score DECIMAL(4,3),
    readability_score DECIMAL(4,2),
    
    -- Status
    submitted_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'draft',
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('draft', 'submitted', 'revision', 'approved'))
);

-- Draft auto-save history
CREATE TABLE submission_drafts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES users(id),
    content_text TEXT NOT NULL,
    word_count INT,
    saved_at TIMESTAMP DEFAULT NOW()
);

-- Keep only last 10 drafts per assignment
CREATE OR REPLACE FUNCTION cleanup_old_drafts() RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM submission_drafts 
    WHERE assignment_id = NEW.assignment_id 
    AND id NOT IN (
        SELECT id FROM submission_drafts 
        WHERE assignment_id = NEW.assignment_id 
        ORDER BY saved_at DESC 
        LIMIT 10
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_cleanup_drafts
    AFTER INSERT ON submission_drafts
    FOR EACH ROW
    EXECUTE FUNCTION cleanup_old_drafts();

-- Audio bookmarks
CREATE TABLE audio_bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES users(id),
    timestamp_seconds DECIMAL(10,3) NOT NULL,
    label VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Creator filter preferences
CREATE TABLE creator_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    default_filters JSONB,
    saved_presets JSONB,
    editor_settings JSONB, -- font size, dark mode, etc
    audio_player_settings JSONB, -- default speed, skip interval
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Creator earnings (denormalized for performance)
CREATE TABLE creator_earnings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    assignment_id UUID REFERENCES assignments(id),
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    earned_at TIMESTAMP DEFAULT NOW(),
    available_at TIMESTAMP, -- When it becomes withdrawable
    paid_at TIMESTAMP,
    payout_batch_id UUID, -- Reference to batch payout
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'available', 'processing', 'paid'))
);

-- Weekly payout batches
CREATE TABLE payout_batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    week_ending DATE NOT NULL, -- Sunday date
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    total_amount DECIMAL(12,2),
    creator_count INT,
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'failed'))
);

-- Indexes
CREATE INDEX idx_submissions_assignment ON content_submissions(assignment_id);
CREATE INDEX idx_submissions_creator ON content_submissions(creator_id);
CREATE INDEX idx_drafts_assignment ON submission_drafts(assignment_id, saved_at DESC);
CREATE INDEX idx_bookmarks_assignment ON audio_bookmarks(assignment_id);
CREATE INDEX idx_earnings_creator ON creator_earnings(creator_id, earned_at);
CREATE INDEX idx_earnings_status ON creator_earnings(status, available_at);
```

### 3.2 Payout Schedule Logic

```sql
-- Function to make earnings available on next Sunday
CREATE OR REPLACE FUNCTION schedule_earning_availability() RETURNS TRIGGER AS $$
DECLARE
    next_sunday DATE;
BEGIN
    -- Calculate next Sunday
    next_sunday := date_trunc('week', CURRENT_DATE + INTERVAL '7 days')::DATE;
    
    -- Set availability to next Sunday at 00:00 UTC
    NEW.available_at := next_sunday + TIME '00:00:00';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_schedule_availability
    BEFORE INSERT ON creator_earnings
    FOR EACH ROW
    WHEN (NEW.status = 'pending')
    EXECUTE FUNCTION schedule_earning_availability();

-- Weekly job to process payouts (runs every Sunday)
-- Pseudo-code for cron job:
/*
1. Create payout_batch for current week
2. Select all earnings WHERE status = 'available' 
   AND available_at <= NOW()
   GROUP BY creator_id
   HAVING SUM(amount) >= 20.00  -- $20 minimum
3. For each eligible creator:
   a. Calculate total payout
   b. Initiate payment via Stripe/PayPal/Pesapal
   c. Update earnings status to 'processing'
4. Handle payment callbacks to mark as 'paid'
*/
```

---

## 4. API Specifications

### 4.1 Assignment Endpoints

```yaml
# List Available Assignments
GET /api/v1/assignments/available
  Headers: Authorization: Bearer {creator_token}
  Query:
    output_type: uuid (optional, filter)
    priority: string (optional)
    min_payout: number (optional)
    max_duration: number (optional, seconds)
    sort_by: 'newest' | 'deadline' | 'payout' (default: newest)
    page: number
    limit: number (max 50)
  Response: 200 OK
    assignments: [{
      id: uuid
      title: string (anonymized)
      output_type: { id, name, slug }
      creator_payout: number
      priority: string
      deadline: timestamp
      audio_duration_seconds: number
      claimed_count: number (how many viewed - optional)
    }]
    pagination: {...}

# Get Assignment Details
GET /api/v1/assignments/:id
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    assignment: Assignment (full details)
    output_type: OutputType (with guidelines)
    audio_preview_url: string (first 60s)
    transcript_preview: string (first 500 words)

# Claim Assignment
POST /api/v1/assignments/:id/claim
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    assignment: Assignment (now with creator_id set)
    deadline: timestamp
    message: "Assignment claimed successfully"
  Errors:
    409: Already claimed
    403: Level insufficient
    429: Active assignment limit reached

# Unclaim Assignment
POST /api/v1/assignments/:id/unclaim
  Headers: Authorization: Bearer {creator_token}
  Request:
    reason: string
  Response: 200 OK
    message: "Assignment released"
  Errors:
    400: Cannot unclaim after 2 hours

# List My Assignments
GET /api/v1/assignments/mine
  Headers: Authorization: Bearer {creator_token}
  Query:
    status: string (optional)
  Response: 200 OK
    assignments: Assignment[]
```

### 4.2 Workspace Endpoints

```yaml
# Get Full Audio URL
GET /api/v1/assignments/:id/audio
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    audio_url: string (signed URL, 4 hour expiry)
    duration_seconds: number
    waveform_url: string

# Get Full Transcript
GET /api/v1/assignments/:id/transcript
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    transcript: {
      language: string
      word_count: number
      segments: [{
        speaker: string
        start_time: number
        end_time: number
        text: string
      }]
    }

# Save Draft
POST /api/v1/assignments/:id/draft
  Headers: Authorization: Bearer {creator_token}
  Request:
    content: string
    format: 'text' | 'html'
  Response: 200 OK
    saved_at: timestamp
    word_count: number
    version: number

# Get Current Draft
GET /api/v1/assignments/:id/draft
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    content: string
    format: string
    word_count: number
    saved_at: timestamp
    versions: [{ version, saved_at }] // Last 10

# Restore Draft Version
POST /api/v1/assignments/:id/draft/restore
  Headers: Authorization: Bearer {creator_token}
  Request:
    version: number
  Response: 200 OK
    content: string
    restored_from: number

# Submit for Review
POST /api/v1/assignments/:id/submit
  Headers: Authorization: Bearer {creator_token}
  Request:
    content: string
    format: 'text' | 'html'
  Response: 200 OK
    submission: ContentSubmission
    status: 'submitted'
  Errors:
    400: Validation failed (word count, etc)

# Resubmit After Revision
POST /api/v1/assignments/:id/resubmit
  Headers: Authorization: Bearer {creator_token}
  Request:
    content: string
    format: string
  Response: 200 OK
    submission: ContentSubmission
    version: number
```

### 4.3 Bookmarks & Quality

```yaml
# Add Bookmark
POST /api/v1/assignments/:id/bookmarks
  Headers: Authorization: Bearer {creator_token}
  Request:
    timestamp_seconds: number
    label: string
    notes: string
  Response: 201 Created
    bookmark: AudioBookmark

# List Bookmarks
GET /api/v1/assignments/:id/bookmarks
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    bookmarks: AudioBookmark[]

# Check Plagiarism
POST /api/v1/assignments/:id/check-plagiarism
  Headers: Authorization: Bearer {creator_token}
  Request:
    content: string
  Response: 200 OK
    similarity_score: number
    matches: [{
      text: string
      source_url: string
      similarity: number
    }]
```

### 4.4 Earnings Endpoints

```yaml
# Get Earnings Summary
GET /api/v1/creators/me/earnings
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    available_balance: number
    pending_balance: number
    all_time_total: number
    this_month: number
    minimum_payout: 20.00
    next_payout_date: date (next Sunday)
    can_request_payout: boolean

# Get Earnings History
GET /api/v1/creators/me/earnings/history
  Headers: Authorization: Bearer {creator_token}
  Query:
    start_date: date
    end_date: date
    page: number
  Response: 200 OK
    earnings: [{
      id: uuid
      assignment_title: string
      output_type: string
      amount: number
      earned_at: timestamp
      status: string
      paid_at: timestamp
    }]
    pagination: {...}

# Request Payout (manual trigger if balance > $20)
POST /api/v1/creators/me/earnings/request-payout
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    message: "Payout will be processed on Sunday"
    amount: number
    payout_date: date
  Errors:
    400: Balance below minimum ($20)
```

---

## 5. UI/UX Specifications

### 5.1 Workspace Layout

**Desktop Layout (Split View):**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]  Dashboard  Available Tasks  My Tasks  Earnings  Settings  [Avatar]│
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Executive Summary: "AI in Healthcare"          [Save] [Check] [Submit →]   │
│  Due in 22h 15m • $9.75 payout                                              │
│                                                                              │
│  ┌────────────────────────────┐  ┌─────────────────────────────────────────┐│
│  │                            │  │                                         ││
│  │     AUDIO PLAYER           │  │            EDITOR                       ││
│  │                            │  │                                         ││
│  │  ▶ 12:34 / 32:15          │  │  [B][I][U] [H1][H2][H3] [•][1.]["][🔗]  ││
│  │  ══════════○═══════════    │  │  ─────────────────────────────────────  ││
│  │  [⏪5s][⏩5s]   [1x▼] 🔊    │  │                                         ││
│  │                            │  │  The podcast explores how artificial   ││
│  ├────────────────────────────┤  │  intelligence is transforming the      ││
│  │                            │  │  healthcare industry...                ││
│  │     TRANSCRIPT             │  │                                         ││
│  │  ─────────────────────────│  │                                         ││
│  │  [Search transcript...]   │  │                                         ││
│  │                            │  │                                         ││
│  │  SPEAKER A (0:00):        │  │                                         ││
│  │  Welcome everyone to      │  │                                         ││
│  │  today's episode...       │  │                                         ││
│  │                            │  │                                         ││
│  │  ▌SPEAKER B (0:45):       │  │                                         ││
│  │  Thanks for having me...  │  │                                         ││
│  │                            │  │  ─────────────────────────────────────  ││
│  │                            │  │  Words: 127 / 200-500  │  Good ✓       ││
│  └────────────────────────────┘  └─────────────────────────────────────────┘│
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────────┐│
│  │  📋 Guidelines  │  📌 Bookmarks (3)  │  ❓ Help                          ││
│  └──────────────────────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────────────┘
```

**Mobile Layout (Tab View):**
```
┌─────────────────────────────────┐
│  ☰  Executive Summary    [...]  │
│  Due in 22h • $9.75             │
├─────────────────────────────────┤
│                                 │
│  [Audio] [Transcript] [Editor]  │
│  ─────────────────────────────  │
│                                 │
│  The podcast explores how       │
│  artificial intelligence is     │
│  transforming the healthcare    │
│  industry...                    │
│                                 │
│                                 │
│                                 │
│                                 │
├─────────────────────────────────┤
│  Words: 127/200-500             │
│                                 │
│  ▶ 12:34 / 32:15   [1x] 🔊     │
└─────────────────────────────────┘
```

---

## 6. Implementation Checklist

### Week 1-2: Assignment Discovery
- [ ] Available assignments API
- [ ] Level-based filtering
- [ ] Assignment detail view
- [ ] Claim/unclaim functionality

### Week 3-4: Audio & Transcript
- [ ] Audio player component
- [ ] Waveform visualization
- [ ] Transcript sync
- [ ] Search and navigation

### Week 5-6: Content Editor
- [ ] Rich text editor integration
- [ ] Auto-save functionality
- [ ] Version history
- [ ] Submission workflow

### Week 7-8: Quality & Earnings
- [ ] Plagiarism check integration
- [ ] AI detection integration
- [ ] Earnings dashboard
- [ ] Performance metrics

---

*Document Version: 1.0*  
*Last Updated: December 2024*
