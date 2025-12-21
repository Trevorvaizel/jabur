# EPIC-04: QA Review System

**Epic Owner:** [TBD]  
**Priority:** P0 (Critical Path)  
**Estimated Effort:** 4-6 weeks  
**Dependencies:** Epic 1, Epic 3  

---

## 1. Epic Overview

### 1.1 Description

This epic covers the quality assurance workflow: editor review queues, rubric-based evaluation, feedback mechanisms, approval/revision flows, and the account flagging system. QA is the gatekeeper ensuring only quality content reaches clients.

### 1.2 Business Value

- Consistent quality builds platform reputation
- Feedback loop improves creator performance
- Flagging system prevents quality degradation
- Efficient review process enables scale

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Review turnaround time | < 4 hours |
| First-pass approval rate | > 80% |
| Revision success rate | > 95% |
| Reviewer consistency (inter-rater) | > 90% |
| Creator rating accuracy | ±0.2 variance |

---

## 2. User Stories

### 2.1 Review Queue Management

#### US-4.1: View Review Queue
**As an** editor  
**I want to** see all pending reviews  
**So that** I can manage my workload  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] List of all assignments in "submitted" status
- [ ] Sort by: deadline (default), submitted date, priority
- [ ] Filter by: output type, creator level, priority
- [ ] Show: title, output type, creator pseudonym, deadline, time in queue
- [ ] Priority highlighting (rush = orange, express = red)
- [ ] Claim button to lock for review
- [ ] Workload limit: max 10 active reviews

**UI Mockup:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Review Queue                           12 pending • 3 claimed  │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🔴 EXPRESS  Blog Post                       Due in 2h 15m   ││
│  │ "Future of Remote Work" • Creator #2847 (Senior)            ││
│  │ Submitted 45 min ago                         [Start Review] ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🟠 RUSH  Executive Summary                  Due in 8h       ││
│  │ "AI Healthcare Trends" • Creator #1923 (Mid-Level)          ││
│  │ Submitted 1h ago                             [Start Review] ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ STANDARD  Key Insights                      Due in 32h      ││
│  │ "Startup Funding Guide" • Creator #3102 (Senior)            ││
│  │ Submitted 2h ago                             [Start Review] ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-4.2: Claim Review
**As an** editor  
**I want to** claim a submission for review  
**So that** no one else reviews it simultaneously  

**Priority:** P0  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Click to claim submission
- [ ] Submission locked to reviewer
- [ ] 2-hour lock timeout (auto-release if abandoned)
- [ ] Cannot claim if at 10 active review limit
- [ ] Status changes to "in_review"

---

### 2.2 Content Review

#### US-4.3: View Submission for Review
**As an** editor  
**I want to** see the submission with audio and guidelines  
**So that** I can evaluate it properly  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Split view: submission content + audio/transcript
- [ ] Audio player with all creator controls
- [ ] Transcript with sync
- [ ] Output type guidelines visible
- [ ] Special instructions from uploader
- [ ] Creator's previous submissions (anonymized stats)
- [ ] Revision history (if resubmission)

---

#### US-4.4: Rubric-Based Scoring
**As an** editor  
**I want to** score submissions against a rubric  
**So that** evaluation is consistent  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Score each criterion 1-5
- [ ] Criteria with weights:
  - Accuracy (25%): Factual correctness
  - Completeness (20%): Covers all key points
  - Clarity (20%): Well-written, easy to understand
  - Actionability (15%): Practical, useful
  - Formatting (10%): Proper structure, clean layout
  - Originality (10%): Unique insights, not generic
- [ ] Required comment if score < 3
- [ ] Overall score calculated automatically
- [ ] Score thresholds:
  - ≥ 4.0: Approve
  - 3.0-3.9: Approve with minor feedback
  - 2.0-2.9: Request revision
  - < 2.0: Reject

**Rubric UI:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Quality Review                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Accuracy (25%)                                                  │
│  Are all facts and claims correct?                              │
│  [1] [2] [3] [4] [5]                              Score: 4     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Comment (optional for 4-5):                                 ││
│  │                                                              ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Completeness (20%)                                              │
│  Does it cover all major topics from the audio?                 │
│  [1] [2] [3] [4] [5]                              Score: 3     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Comment (required for 1-3):                                 ││
│  │ Missing section on regulatory challenges                    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ... (remaining criteria)                                        │
│                                                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│  Overall Score: 3.85                          [Request Revision] │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-4.5: Inline Comments
**As an** editor  
**I want to** add comments to specific parts of the content  
**So that** creators know exactly what to fix  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Highlight text to add comment
- [ ] Comment types: suggestion, correction, praise
- [ ] Comments visible in sidebar
- [ ] Click comment to scroll to location
- [ ] Resolve/unresolve comments
- [ ] Comments visible to creator

---

### 2.3 Review Decisions

#### US-4.6: Approve Submission
**As an** editor  
**I want to** approve a quality submission  
**So that** it's delivered to the client  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Approve button (requires score ≥ 3.0)
- [ ] Optional final feedback for creator
- [ ] Status changes to "approved"
- [ ] Creator earnings become pending
- [ ] Content moves to uploader review
- [ ] Creator notified of approval

---

#### US-4.7: Request Revision
**As an** editor  
**I want to** request changes to a submission  
**So that** it meets quality standards  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Request revision button
- [ ] Overall feedback required
- [ ] Specific issues listed
- [ ] Deadline extended by 24 hours
- [ ] Status changes to "revision_requested"
- [ ] Creator notified with feedback
- [ ] Revision count incremented
- [ ] Maximum 2 free revisions

---

#### US-4.8: Reject Submission
**As an** editor  
**I want to** reject a very poor submission  
**So that** quality standards are maintained  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Reject button (requires score < 2.0)
- [ ] Detailed rejection reason required
- [ ] Admin review before finalization
- [ ] Assignment returns to pool (or cancelled)
- [ ] Creator rating impacted
- [ ] Trigger account flag if pattern detected

---

### 2.4 Account Flagging

#### US-4.9: Flag Creator Account
**As an** editor  
**I want to** flag a problematic creator  
**So that** admins can investigate  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Flag button accessible during review
- [ ] Flag types:
  - Quality Concern (consistent low scores)
  - Plagiarism Detected
  - AI-Generated Content Suspected
  - Deadline Issues
  - Conduct Concern
- [ ] Evidence attachment (screenshots, quotes)
- [ ] Severity: low, medium, high
- [ ] Flag escalates to admin queue
- [ ] Creator not immediately notified

**Flag Form:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Flag Creator Account                                    [×]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Creator: #2847 (Senior Level)                                  │
│  Recent Performance: 12 tasks, 3.2 avg rating                   │
│                                                                  │
│  Flag Type *                                                     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ○ Quality Concern                                           ││
│  │ ○ Plagiarism Detected                                       ││
│  │ ● AI-Generated Content Suspected                            ││
│  │ ○ Deadline Issues                                           ││
│  │ ○ Conduct Concern                                           ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Severity *                                                      │
│  [ Low ] [ Medium ] [● High ]                                   │
│                                                                  │
│  Reason *                                                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Submission appears to be entirely AI-generated. GPTZero    ││
│  │ detection shows 94% probability. Writing style is          ││
│  │ inconsistent with previous submissions from this creator.  ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Evidence (optional)                                             │
│  [+ Attach screenshot] [+ Add previous submission]              │
│                                                                  │
│                                          [Cancel] [Submit Flag] │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-4.10: View Flagged Account History
**As an** editor  
**I want to** see if a creator has previous flags  
**So that** I have context during review  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Flag history visible in review interface
- [ ] Shows: flag type, date, resolution
- [ ] Escalation indicator for repeat issues
- [ ] Only visible to editors/admins

---

### 2.5 Uploader Final Review

#### US-4.11: Uploader Content Review
**As an** uploader  
**I want to** review the final content  
**So that** I can accept or request changes  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Notification when content ready
- [ ] View content with original audio
- [ ] Accept button (finalizes delivery)
- [ ] Request revision button (limited: 1 after QA approval)
- [ ] Revision request goes back to creator
- [ ] Rate the output (1-5 stars)
- [ ] Optional feedback

---

### 2.6 Auto-Flagging

#### US-4.12: Automatic Quality Flags
**As the** system  
**I want to** auto-flag quality issues  
**So that** problems are caught early  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Auto-flag triggers:
  - 3 consecutive scores < 3.0 → Quality Concern
  - Plagiarism score > 30% → Plagiarism
  - AI detection > 90% → AI Generated
  - 3 late submissions in 30 days → Deadline Issues
- [ ] Auto-flags added to admin queue
- [ ] Creator not notified of auto-flags
- [ ] Flags include evidence data
- [ ] Admin reviews before action

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Reviews
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
    submission_id UUID REFERENCES content_submissions(id),
    reviewer_id UUID REFERENCES users(id),
    
    -- Scoring
    accuracy_score INT CHECK (accuracy_score BETWEEN 1 AND 5),
    completeness_score INT CHECK (completeness_score BETWEEN 1 AND 5),
    clarity_score INT CHECK (clarity_score BETWEEN 1 AND 5),
    actionability_score INT CHECK (actionability_score BETWEEN 1 AND 5),
    formatting_score INT CHECK (formatting_score BETWEEN 1 AND 5),
    originality_score INT CHECK (originality_score BETWEEN 1 AND 5),
    overall_score DECIMAL(3,2), -- Calculated weighted average
    
    -- Comments per criterion
    accuracy_comment TEXT,
    completeness_comment TEXT,
    clarity_comment TEXT,
    actionability_comment TEXT,
    formatting_comment TEXT,
    originality_comment TEXT,
    
    -- Decision
    decision VARCHAR(20) NOT NULL,
    overall_feedback TEXT,
    
    -- Timing
    claimed_at TIMESTAMP,
    completed_at TIMESTAMP,
    review_duration_seconds INT,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_decision CHECK (decision IN ('approved', 'revision_requested', 'rejected'))
);

-- Review inline comments
CREATE TABLE review_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    review_id UUID REFERENCES reviews(id) ON DELETE CASCADE,
    
    -- Location in content
    start_offset INT NOT NULL,
    end_offset INT NOT NULL,
    quoted_text TEXT,
    
    -- Comment
    comment_type VARCHAR(20) NOT NULL,
    comment_text TEXT NOT NULL,
    
    -- Status
    is_resolved BOOLEAN DEFAULT FALSE,
    resolved_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_type CHECK (comment_type IN ('suggestion', 'correction', 'praise', 'question'))
);

-- Account flags
CREATE TABLE account_flags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Flag details
    flag_type VARCHAR(50) NOT NULL,
    severity VARCHAR(20) NOT NULL DEFAULT 'medium',
    reason TEXT NOT NULL,
    evidence JSONB, -- Screenshots, links, data
    
    -- Source
    source VARCHAR(20) NOT NULL, -- 'manual', 'auto'
    flagged_by UUID REFERENCES users(id), -- NULL for auto flags
    assignment_id UUID REFERENCES assignments(id), -- Context
    
    -- Resolution
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    reviewed_by UUID REFERENCES users(id),
    review_notes TEXT,
    action_taken VARCHAR(50),
    resolved_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_flag_type CHECK (flag_type IN (
        'quality_concern', 'plagiarism', 'ai_generated', 
        'deadline_issues', 'conduct', 'fraud'
    )),
    CONSTRAINT valid_severity CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    CONSTRAINT valid_status CHECK (status IN ('pending', 'investigating', 'resolved', 'dismissed'))
);

-- Uploader ratings (after final delivery)
CREATE TABLE uploader_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID UNIQUE REFERENCES assignments(id) ON DELETE CASCADE,
    uploader_id UUID REFERENCES users(id),
    
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    feedback TEXT,
    would_use_again BOOLEAN,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Calculate overall score trigger
CREATE OR REPLACE FUNCTION calculate_review_score() RETURNS TRIGGER AS $$
BEGIN
    NEW.overall_score := (
        (NEW.accuracy_score * 0.25) +
        (NEW.completeness_score * 0.20) +
        (NEW.clarity_score * 0.20) +
        (NEW.actionability_score * 0.15) +
        (NEW.formatting_score * 0.10) +
        (NEW.originality_score * 0.10)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_calculate_score
    BEFORE INSERT OR UPDATE ON reviews
    FOR EACH ROW
    EXECUTE FUNCTION calculate_review_score();

-- Update creator rating after review
CREATE OR REPLACE FUNCTION update_creator_rating() RETURNS TRIGGER AS $$
DECLARE
    creator UUID;
    new_rating DECIMAL(3,2);
    new_count INT;
BEGIN
    -- Get creator from assignment
    SELECT creator_id INTO creator FROM assignments WHERE id = NEW.assignment_id;
    
    IF NEW.decision = 'approved' THEN
        -- Calculate new average rating
        SELECT 
            ROUND(AVG(r.overall_score)::numeric, 2),
            COUNT(*)
        INTO new_rating, new_count
        FROM reviews r
        JOIN assignments a ON r.assignment_id = a.id
        WHERE a.creator_id = creator
        AND r.decision = 'approved';
        
        -- Update creator profile
        UPDATE creator_profiles 
        SET rating = new_rating, total_ratings = new_count
        WHERE user_id = creator;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_creator_rating
    AFTER INSERT ON reviews
    FOR EACH ROW
    WHEN (NEW.decision = 'approved')
    EXECUTE FUNCTION update_creator_rating();

-- Indexes
CREATE INDEX idx_reviews_assignment ON reviews(assignment_id);
CREATE INDEX idx_reviews_reviewer ON reviews(reviewer_id, completed_at);
CREATE INDEX idx_flags_creator ON account_flags(creator_id, created_at);
CREATE INDEX idx_flags_status ON account_flags(status, created_at);
CREATE INDEX idx_uploader_ratings_assignment ON uploader_ratings(assignment_id);
```

---

## 4. API Specifications

### 4.1 Review Queue

```yaml
# Get Review Queue
GET /api/v1/reviews/queue
  Headers: Authorization: Bearer {editor_token}
  Query:
    output_type: uuid
    priority: string
    sort_by: 'deadline' | 'submitted' | 'priority'
    page: number
  Response: 200 OK
    submissions: [{
      id: uuid
      assignment_id: uuid
      title: string
      output_type: OutputType
      creator_pseudonym: string
      creator_level: string
      priority: string
      deadline: timestamp
      submitted_at: timestamp
      time_in_queue_minutes: number
    }]
    queue_stats: {
      total_pending: number
      my_claimed: number
      urgent_count: number
    }

# Claim for Review
POST /api/v1/reviews/:submission_id/claim
  Headers: Authorization: Bearer {editor_token}
  Response: 200 OK
    submission: ContentSubmission
    lock_expires_at: timestamp
  Errors:
    409: Already claimed
    429: At review limit (10)

# Release Review Claim
POST /api/v1/reviews/:submission_id/release
  Headers: Authorization: Bearer {editor_token}
  Response: 200 OK
    message: "Review released"
```

### 4.2 Review Actions

```yaml
# Get Submission for Review
GET /api/v1/reviews/:submission_id
  Headers: Authorization: Bearer {editor_token}
  Response: 200 OK
    submission: ContentSubmission
    assignment: Assignment
    output_type: OutputType (with guidelines)
    audio_url: string
    transcript: Transcript
    creator_stats: {
      level: string
      completed_count: number
      average_rating: number
      recent_flags: number
    }
    previous_submissions: [{ version, feedback }] // If revision

# Submit Review
POST /api/v1/reviews/:submission_id/review
  Headers: Authorization: Bearer {editor_token}
  Request:
    scores: {
      accuracy: number (1-5)
      completeness: number (1-5)
      clarity: number (1-5)
      actionability: number (1-5)
      formatting: number (1-5)
      originality: number (1-5)
    }
    comments: {
      accuracy: string
      completeness: string
      clarity: string
      actionability: string
      formatting: string
      originality: string
    }
    inline_comments: [{
      start_offset: number
      end_offset: number
      quoted_text: string
      comment_type: string
      comment_text: string
    }]
    decision: 'approved' | 'revision_requested' | 'rejected'
    overall_feedback: string
  Response: 200 OK
    review: Review
    assignment_status: string

# Get My Review History
GET /api/v1/reviews/mine
  Headers: Authorization: Bearer {editor_token}
  Query:
    start_date: date
    end_date: date
    page: number
  Response: 200 OK
    reviews: Review[]
    stats: {
      total_reviewed: number
      approval_rate: number
      average_review_time: number
    }
```

### 4.3 Account Flagging

```yaml
# Flag Creator Account
POST /api/v1/creators/:id/flag
  Headers: Authorization: Bearer {editor_token}
  Request:
    flag_type: string
    severity: 'low' | 'medium' | 'high' | 'critical'
    reason: string
    evidence: object (optional)
    assignment_id: uuid (optional, for context)
  Response: 201 Created
    flag: AccountFlag

# Get Creator Flag History
GET /api/v1/creators/:id/flags
  Headers: Authorization: Bearer {editor_token}
  Response: 200 OK
    flags: AccountFlag[]
    summary: {
      total_flags: number
      pending_flags: number
      resolved_flags: number
    }

# Admin: Get All Pending Flags
GET /api/v1/admin/flags
  Headers: Authorization: Bearer {admin_token}
  Query:
    status: string
    flag_type: string
    severity: string
    page: number
  Response: 200 OK
    flags: AccountFlag[]
    pagination: {...}

# Admin: Resolve Flag
POST /api/v1/admin/flags/:id/resolve
  Headers: Authorization: Bearer {admin_token}
  Request:
    action: 'dismissed' | 'warning' | 'level_demotion' | 'suspension' | 'ban'
    notes: string
    notify_creator: boolean
  Response: 200 OK
    flag: AccountFlag
    creator_status: string
```

---

## 5. Workflow Diagrams

### 5.1 Review Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Submitted  │────►│   Claimed   │────►│  Reviewed   │
│             │     │  by Editor  │     │             │
└─────────────┘     └──────┬──────┘     └──────┬──────┘
                          │                    │
                   ┌──────▼──────┐      ┌──────┴──────┐
                   │  2hr Timeout│      │             │
                   │  (release)  │      ▼             ▼
                   └─────────────┘   ┌──────┐   ┌──────────┐   ┌────────┐
                                     │Approve│   │ Revision │   │ Reject │
                                     └───┬───┘   └────┬─────┘   └───┬────┘
                                         │            │             │
                                         ▼            ▼             ▼
                                    ┌─────────┐  ┌─────────┐  ┌─────────┐
                                    │ Uploader│  │ Creator │  │  Admin  │
                                    │ Review  │  │ Revises │  │ Review  │
                                    └─────────┘  └─────────┘  └─────────┘
```

### 5.2 Flag Resolution Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Flag      │────►│   Admin     │────►│  Decision   │
│  Created    │     │   Review    │     │             │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
         ┌─────────────┬──────────────┬────────┴────────┬─────────────┐
         ▼             ▼              ▼                 ▼             ▼
    ┌─────────┐   ┌─────────┐   ┌─────────────┐   ┌─────────┐   ┌─────────┐
    │Dismissed│   │ Warning │   │Level Demotion│   │Suspended│   │  Ban    │
    └─────────┘   └─────────┘   └─────────────┘   └─────────┘   └─────────┘
```

---

## 6. Testing Requirements

### 6.1 Unit Tests
- Score calculation accuracy
- Auto-flag trigger conditions
- Rating update calculations

### 6.2 Integration Tests
- Complete review workflow
- Flag creation and resolution
- Creator rating updates

### 6.3 Edge Cases
- Concurrent review claims
- Timeout handling
- Revision limit enforcement

---

## 7. Implementation Checklist

### Week 1-2: Review Queue
- [ ] Queue API and filtering
- [ ] Claim/release mechanics
- [ ] Review interface

### Week 3-4: Scoring & Decisions
- [ ] Rubric-based scoring
- [ ] Inline comments
- [ ] Approve/revise/reject flows

### Week 5-6: Flagging & Auto-detection
- [ ] Manual flagging system
- [ ] Auto-flag triggers
- [ ] Admin flag management

---

*Document Version: 1.0*  
*Last Updated: December 2024*
