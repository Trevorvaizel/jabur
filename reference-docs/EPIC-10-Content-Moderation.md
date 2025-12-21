# EPIC-10: Content Moderation & Safety

**Epic Owner:** [TBD]  
**Priority:** P1  
**Estimated Effort:** 4-5 weeks  
**Dependencies:** Epic 2 (Upload), Epic 4 (QA)  

---

## 1. Epic Overview

### 1.1 Description

This epic covers content moderation systems: upload screening, prohibited content detection, user reporting, moderation workflows, and content policy enforcement. The goal is to ensure platform safety while maintaining operational efficiency.

### 1.2 Business Value

- Protect users from harmful content
- Maintain platform reputation
- Legal and regulatory compliance
- Trust and safety for all stakeholders

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Prohibited content detection rate | > 99% |
| Moderation queue response time | < 4 hours |
| False positive rate | < 2% |
| User report resolution time | < 24 hours |
| Appeal resolution time | < 48 hours |

---

## 2. Content Policy

### 2.1 Prohibited Content Categories

| Category | Description | Detection Method | Action |
|----------|-------------|------------------|--------|
| **Hate Speech** | Content promoting hatred or discrimination | AI + keyword | Auto-reject |
| **Violence** | Graphic violence, threats, incitement | AI + keyword | Auto-reject |
| **Sexual Content** | Explicit sexual material | AI classification | Auto-reject |
| **Illegal Activity** | Drug trafficking, weapons, fraud schemes | AI + keyword | Auto-reject + report |
| **Copyright Violation** | Unauthorized copyrighted material | Audio fingerprinting | Flag for review |
| **Misinformation** | Medical, election, dangerous misinformation | AI + manual review | Flag for review |
| **Personal Info** | Doxxing, private information exposure | Pattern detection | Auto-flag |
| **Spam** | Promotional spam, link farming | Pattern detection | Auto-reject |
| **Self-Harm** | Suicide, self-harm promotion | AI + keyword | Auto-flag + resources |

### 2.2 Content Ownership Policy

> **Policy:** The party who pays for the content owns the curated output.
>
> - Uploaders retain ownership of original audio
> - Uploaders own all derivative content (summaries, insights, etc.)
> - Creators grant license for their work upon payment
> - Platform has license for quality review and dispute resolution

---

## 3. User Stories

### 3.1 Upload Screening

#### US-10.1: Automated Upload Screening
**As the** system  
**I want to** screen all uploaded audio  
**So that** prohibited content is caught early  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] All uploads scanned before processing
- [ ] Screening components:
  - Virus/malware scan
  - Audio content classification
  - Speech-to-text sampling for keyword detection
  - Audio fingerprinting (copyright)
- [ ] Immediate rejection for clear violations
- [ ] Flagging for manual review when uncertain
- [ ] Scan completes within 2 minutes
- [ ] Results logged for audit

**Screening Pipeline:**
```
Upload → Virus Scan → Audio Validation → Content Classification
                                              │
                         ┌────────────────────┼────────────────────┐
                         ▼                    ▼                    ▼
                    [PASS]              [UNCERTAIN]            [FAIL]
                      │                      │                    │
                      ▼                      ▼                    ▼
               Continue Processing    Manual Review Queue    Auto-Reject
```

---

#### US-10.2: Audio Content Classification
**As the** system  
**I want to** classify audio content type  
**So that** appropriate screening is applied  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Sample audio for classification (first 5 minutes)
- [ ] Categories: speech, music, mixed, noise
- [ ] Detect language
- [ ] Detect potentially sensitive topics
- [ ] Flag for review if uncertain
- [ ] Store classification with upload

---

#### US-10.3: Copyright Detection
**As the** system  
**I want to** detect copyrighted audio  
**So that** we avoid legal issues  

**Priority:** P1  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Audio fingerprinting integration (Audible Magic or similar)
- [ ] Check against music databases
- [ ] Check against podcast databases
- [ ] Flag potential matches
- [ ] Allow uploader to confirm rights
- [ ] Reject clear copyright violations
- [ ] Maintain safe harbor compliance

---

### 3.2 Content Reporting

#### US-10.4: Report Content
**As a** user  
**I want to** report problematic content  
**So that** it can be reviewed  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Report button on content views
- [ ] Report categories:
  - Inaccurate/misleading
  - Inappropriate/offensive
  - Copyright violation
  - Personal information exposed
  - Spam/promotional
  - Other (with explanation)
- [ ] Optional detailed explanation
- [ ] Evidence attachment option
- [ ] Confirmation of report received
- [ ] Anonymous reporting option

**Report Flow UI:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Report Content                                          [×]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Why are you reporting this content?                            │
│                                                                  │
│  ○ Inaccurate or misleading information                         │
│  ● Inappropriate or offensive content                           │
│  ○ Copyright or intellectual property violation                 │
│  ○ Contains personal/private information                        │
│  ○ Spam or promotional content                                  │
│  ○ Other                                                        │
│                                                                  │
│  Tell us more (optional)                                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ This summary contains harmful medical misinformation...     ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ☐ Report anonymously                                           │
│                                                                  │
│                                    [Cancel] [Submit Report]     │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-10.5: Report Dashboard (Admin)
**As a** moderator  
**I want to** see all content reports  
**So that** I can review and take action  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Queue of pending reports
- [ ] Filter by: category, status, date, priority
- [ ] Priority scoring based on:
  - Report count for same content
  - Category severity
  - Reporter credibility
- [ ] Show reported content with context
- [ ] Previous reports on same user/content
- [ ] Quick actions: dismiss, warn, remove, ban

---

### 3.3 Moderation Workflow

#### US-10.6: Review Flagged Content
**As a** moderator  
**I want to** review flagged content  
**So that** I can make informed decisions  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] View original audio with transcript
- [ ] View derived content
- [ ] See flagging reason and evidence
- [ ] See content owner details
- [ ] See report history
- [ ] Decision options:
  - Approve (content is fine)
  - Remove (violates policy)
  - Edit (minor fix needed)
  - Escalate (needs senior review)
- [ ] Reason required for action
- [ ] Action logged for audit

---

#### US-10.7: Moderation Actions
**As a** moderator  
**I want to** take action on policy violations  
**So that** the platform stays safe  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Content actions:
  - Remove content (hides from public)
  - Delete content (permanent removal)
  - Edit content (remove specific parts)
  - Add warning label
- [ ] User actions:
  - No action
  - Warning
  - Temporary suspension (1-30 days)
  - Permanent ban
- [ ] Notification sent to affected users
- [ ] Appeal option provided
- [ ] All actions logged

**Action Matrix:**
| Violation Severity | First Offense | Second Offense | Third Offense |
|-------------------|---------------|----------------|---------------|
| Minor (spam, low quality) | Warning | 7-day suspension | 30-day suspension |
| Moderate (misinformation, harassment) | Content removal + warning | 30-day suspension | Permanent ban |
| Severe (hate speech, violence) | Content removal + 30-day suspension | Permanent ban | N/A |
| Critical (illegal, CSAM) | Immediate permanent ban + report | N/A | N/A |

---

#### US-10.8: Appeal Handling
**As a** user whose content was removed  
**I want to** appeal the decision  
**So that** I can challenge incorrect moderation  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Appeal button in notification
- [ ] Appeal window: 14 days from action
- [ ] One appeal per action
- [ ] Appeal form with explanation
- [ ] Appeal reviewed by different moderator
- [ ] Decision within 48 hours
- [ ] Decision is final (except for new evidence)
- [ ] Communication at each step

---

### 3.4 Safety Features

#### US-10.9: Self-Harm Content Handling
**As the** system  
**I want to** handle self-harm content sensitively  
**So that** users get help when needed  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Detect self-harm related content
- [ ] Don't auto-reject (may prevent help-seeking)
- [ ] Flag for immediate human review
- [ ] If uploader: show crisis resources before processing
- [ ] If in content: provide resources with content
- [ ] Never display graphic self-harm content
- [ ] Log for safety team review

**Crisis Resources:**
```
If you're experiencing thoughts of self-harm, please reach out:
• Kenya: Kenya Red Cross - 1199
• US: 988 Suicide & Crisis Lifeline
• UK: Samaritans - 116 123
• International: befrienders.org/find-a-helpline
```

---

#### US-10.10: Minor Protection
**As the** system  
**I want to** protect content involving minors  
**So that** children are safe  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Any CSAM: immediate rejection, report to NCMEC, permanent ban
- [ ] Content about minors: enhanced review
- [ ] Educational content: allowed with appropriate handling
- [ ] Never allow sexualized content involving minors
- [ ] Automated scanning with hash matching (PhotoDNA equivalent for audio)

---

## 4. Data Model

### 4.1 Database Schema

```sql
-- Content moderation flags
CREATE TABLE moderation_flags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Content reference
    content_type VARCHAR(20) NOT NULL, -- 'upload', 'submission', 'message'
    content_id UUID NOT NULL,
    
    -- Flag details
    flag_source VARCHAR(20) NOT NULL, -- 'auto', 'user_report', 'moderator'
    flag_category VARCHAR(50) NOT NULL,
    flag_severity VARCHAR(20) NOT NULL,
    
    -- Auto-detection details
    detection_method VARCHAR(50),
    detection_confidence DECIMAL(4,3),
    detection_details JSONB,
    
    -- User report details
    reported_by UUID REFERENCES users(id),
    report_reason TEXT,
    report_evidence JSONB,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    priority_score INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_content_type CHECK (content_type IN ('upload', 'submission', 'message')),
    CONSTRAINT valid_source CHECK (flag_source IN ('auto', 'user_report', 'moderator')),
    CONSTRAINT valid_severity CHECK (flag_severity IN ('low', 'medium', 'high', 'critical')),
    CONSTRAINT valid_status CHECK (status IN ('pending', 'in_review', 'resolved', 'escalated'))
);

-- Moderation decisions
CREATE TABLE moderation_decisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    flag_id UUID REFERENCES moderation_flags(id),
    
    -- Decision
    decision VARCHAR(30) NOT NULL,
    decision_reason TEXT,
    
    -- Content action
    content_action VARCHAR(20),
    content_action_details JSONB,
    
    -- User action
    user_action VARCHAR(20),
    user_id_affected UUID REFERENCES users(id),
    suspension_days INT,
    
    -- Moderator
    moderator_id UUID REFERENCES users(id),
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_decision CHECK (decision IN ('approve', 'remove', 'edit', 'escalate', 'dismiss')),
    CONSTRAINT valid_content_action CHECK (content_action IN ('none', 'remove', 'delete', 'edit', 'warn')),
    CONSTRAINT valid_user_action CHECK (user_action IN ('none', 'warning', 'suspend', 'ban'))
);

-- Appeals
CREATE TABLE moderation_appeals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    decision_id UUID REFERENCES moderation_decisions(id),
    
    -- Appeal details
    appellant_id UUID REFERENCES users(id),
    appeal_reason TEXT NOT NULL,
    appeal_evidence JSONB,
    
    -- Review
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    reviewer_id UUID REFERENCES users(id),
    review_decision VARCHAR(20),
    review_reason TEXT,
    reviewed_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'in_review', 'upheld', 'overturned', 'modified')),
    CONSTRAINT valid_review_decision CHECK (review_decision IN ('uphold', 'overturn', 'modify'))
);

-- Content screening results
CREATE TABLE content_screening (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    upload_id UUID REFERENCES uploads(id) ON DELETE CASCADE,
    
    -- Screening results
    virus_scan_passed BOOLEAN,
    virus_scan_details JSONB,
    
    content_classification VARCHAR(50),
    classification_confidence DECIMAL(4,3),
    
    language_detected VARCHAR(10),
    
    sensitive_topics VARCHAR(50)[],
    
    copyright_flags JSONB, -- [{match, confidence, source}]
    
    -- Overall result
    screening_passed BOOLEAN,
    requires_review BOOLEAN,
    rejection_reason TEXT,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- User warnings/strikes
CREATE TABLE user_moderation_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    action_type VARCHAR(20) NOT NULL,
    reason TEXT,
    related_content_id UUID,
    
    -- Suspension details
    suspension_start TIMESTAMP,
    suspension_end TIMESTAMP,
    
    -- Source
    decision_id UUID REFERENCES moderation_decisions(id),
    admin_id UUID REFERENCES users(id),
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_moderation_flags_status ON moderation_flags(status, priority_score DESC);
CREATE INDEX idx_moderation_flags_content ON moderation_flags(content_type, content_id);
CREATE INDEX idx_decisions_flag ON moderation_decisions(flag_id);
CREATE INDEX idx_appeals_status ON moderation_appeals(status, created_at);
CREATE INDEX idx_screening_upload ON content_screening(upload_id);
CREATE INDEX idx_user_mod_history ON user_moderation_history(user_id, created_at);
```

---

## 5. API Specifications

### 5.1 Reporting Endpoints

```yaml
# Report Content
POST /api/v1/reports
  Headers: Authorization: Bearer {token}
  Request:
    content_type: 'upload' | 'submission'
    content_id: uuid
    category: string
    reason: string
    evidence: object (optional)
    anonymous: boolean
  Response: 201 Created
    report_id: uuid
    message: "Thank you for your report"

# Get My Reports
GET /api/v1/reports/mine
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    reports: [{
      id: uuid
      content_type: string
      category: string
      status: string
      created_at: timestamp
      resolution: string (if resolved)
    }]
```

### 5.2 Moderation Endpoints (Admin)

```yaml
# Get Moderation Queue
GET /api/v1/admin/moderation/queue
  Headers: Authorization: Bearer {admin_token}
  Query:
    category: string
    severity: string
    status: string
    sort_by: 'priority' | 'date'
    page: number
  Response: 200 OK
    flags: ModerationFlag[]
    counts: {
      pending: number
      in_review: number
      critical: number
    }

# Get Flag Details
GET /api/v1/admin/moderation/flags/:id
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    flag: ModerationFlag
    content: Upload | Submission
    related_flags: ModerationFlag[]
    user_history: UserModerationHistory[]

# Make Moderation Decision
POST /api/v1/admin/moderation/flags/:id/decide
  Headers: Authorization: Bearer {admin_token}
  Request:
    decision: 'approve' | 'remove' | 'edit' | 'escalate' | 'dismiss'
    decision_reason: string
    content_action: 'none' | 'remove' | 'delete' | 'edit' | 'warn'
    user_action: 'none' | 'warning' | 'suspend' | 'ban'
    suspension_days: number (if suspend)
  Response: 200 OK
    decision: ModerationDecision

# Get Appeals Queue
GET /api/v1/admin/moderation/appeals
  Headers: Authorization: Bearer {admin_token}
  Query:
    status: string
    page: number
  Response: 200 OK
    appeals: Appeal[]

# Review Appeal
POST /api/v1/admin/moderation/appeals/:id/review
  Headers: Authorization: Bearer {admin_token}
  Request:
    decision: 'uphold' | 'overturn' | 'modify'
    reason: string
    modified_action: object (if modify)
  Response: 200 OK
    appeal: Appeal
```

### 5.3 Appeal Endpoints (User)

```yaml
# Submit Appeal
POST /api/v1/appeals
  Headers: Authorization: Bearer {token}
  Request:
    decision_id: uuid
    reason: string
    evidence: object (optional)
  Response: 201 Created
    appeal: Appeal
    message: "Your appeal has been submitted"

# Get Appeal Status
GET /api/v1/appeals/:id
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    appeal: Appeal
    original_decision: ModerationDecision
```

---

## 6. Moderation UI

### 6.1 Moderation Queue

```
┌─────────────────────────────────────────────────────────────────┐
│  Moderation Queue                      12 pending • 3 critical  │
├─────────────────────────────────────────────────────────────────┤
│  [All] [Critical] [High] [Medium] [Low]     [Filter ▼] [Sort ▼]│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🔴 CRITICAL • Hate Speech                                   ││
│  │ Upload: "Political Commentary"                              ││
│  │ Auto-detected: 94% confidence • 2 user reports             ││
│  │ 15 minutes ago                                [Review →]    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🟠 HIGH • Copyright                                         ││
│  │ Upload: "Music Industry Analysis"                          ││
│  │ Audio fingerprint match: 78% confidence                    ││
│  │ 1 hour ago                                    [Review →]    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ 🟡 MEDIUM • Misinformation                                  ││
│  │ Submission: "Health Tips Summary"                          ││
│  │ 1 user report • Category: medical misinformation           ││
│  │ 3 hours ago                                   [Review →]    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. Implementation Checklist

### Week 1-2: Upload Screening
- [ ] Virus scanning integration
- [ ] Audio content classification
- [ ] Keyword detection pipeline
- [ ] Screening results storage

### Week 3: Reporting System
- [ ] Report submission UI
- [ ] Report API endpoints
- [ ] Priority scoring algorithm
- [ ] Reporter credibility tracking

### Week 4: Moderation Workflow
- [ ] Moderation queue UI
- [ ] Decision workflow
- [ ] User actions (warn/suspend/ban)
- [ ] Notification system

### Week 5: Appeals & Safety
- [ ] Appeal submission and review
- [ ] Self-harm handling
- [ ] Minor protection
- [ ] Audit logging

---

*Document Version: 1.0*  
*Last Updated: December 2024*
