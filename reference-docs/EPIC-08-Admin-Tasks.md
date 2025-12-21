# EPIC-08: Admin Task Management

**Epic Owner:** [TBD]  
**Priority:** P1  
**Estimated Effort:** 3-4 weeks  
**Dependencies:** Epic 1, Epic 2, Epic 4  

---

## 1. Epic Overview

### 1.1 Description

This epic covers administrative task management capabilities: creating tasks without payment (comped tasks), direct creator assignment, task reassignment, bulk operations, and override controls. These features enable operations, testing, partnerships, and special case handling.

### 1.2 Business Value

- Support business partnerships and promotions
- Enable platform testing and QA
- Handle special client arrangements
- Recover from creator abandonment
- Operational flexibility

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Comped task completion rate | > 95% |
| Task reassignment success | > 99% |
| Admin response time for stuck tasks | < 4 hours |
| Audit trail completeness | 100% |

---

## 2. User Stories

### 2.1 Comped Task Creation

#### US-8.1: Create Comped Task
**As an** admin  
**I want to** create tasks without requiring payment  
**So that** I can support testing, promotions, and partnerships  

**Priority:** P1  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Admin-only access
- [ ] Audio source options:
  - Upload new audio file
  - Provide URL to audio
  - Select from existing uploads
- [ ] Standard metadata fields (title, description, tags)
- [ ] Output type selection
- [ ] Priority selection (standard/rush/express)
- [ ] Comped reason required (dropdown + free text)
- [ ] Optional: assign directly to specific creator
- [ ] No payment processing triggered
- [ ] Task marked with "comped" flag
- [ ] Full audit trail

**Comped Reasons:**
| Reason Code | Description |
|-------------|-------------|
| TESTING | Internal platform testing |
| PROMO | Promotional giveaway |
| PARTNERSHIP | Business partnership fulfillment |
| COMPENSATION | Client compensation for issues |
| TRAINING | Creator training exercise |
| DEMO | Sales demonstration |
| OTHER | Other (requires explanation) |

**UI Mockup:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Create Comped Task                                      [×]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Audio Source *                                                  │
│  ○ Upload new file                                              │
│  ● Provide URL                                                  │
│  ○ Select existing upload                                       │
│                                                                  │
│  Audio URL *                                                     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ https://example.com/podcast.mp3                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Title *                                                         │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Q4 Strategy Discussion                                      ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Description                                                     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Executive podcast discussing company strategy...            ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Output Types *                                                  │
│  [✓] Executive Summary    [✓] Key Insights    [ ] Blog Post    │
│  [ ] Detailed Summary     [ ] Action Items    [ ] Social Media │
│                                                                  │
│  Priority                          Comped Reason *              │
│  [Standard ▼]                      [Partnership ▼]              │
│                                                                  │
│  Reason Details *                                               │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Fulfilling partnership agreement with Acme Corp for Q4     ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ☐ Assign directly to creator                                  │
│    Creator: [Select creator... ▼]                              │
│                                                                  │
│                                    [Cancel] [Create Comped Task]│
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-8.2: View Comped Tasks
**As an** admin  
**I want to** see all comped tasks  
**So that** I can track non-revenue work  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Filter tasks to show only comped
- [ ] Show comped reason
- [ ] Show who created the comped task
- [ ] Show task status
- [ ] Calculate total comped value
- [ ] Export capability

---

### 2.2 Direct Assignment

#### US-8.3: Assign Task to Specific Creator
**As an** admin  
**I want to** assign a task directly to a creator  
**So that** I can handle special situations  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Select from approved creators
- [ ] Filter by level (only show eligible creators)
- [ ] Search by name/email
- [ ] Show creator's current workload
- [ ] Show creator's rating and performance
- [ ] Confirmation before assignment
- [ ] Creator notified immediately
- [ ] Assignment bypasses open pool
- [ ] Audit log entry

**Use Cases:**
- Training assignments for new creators
- Matching expertise to specialized content
- VIP client requests for specific creator
- Reassignment after abandonment

---

### 2.3 Task Reassignment

#### US-8.4: Reassign Abandoned Task
**As an** admin  
**I want to** reassign a task from one creator to another  
**So that** work continues when a creator can't complete  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] View task details including current assignment
- [ ] See why reassignment is needed (deadline passed, creator request, etc.)
- [ ] Option to: reassign to specific creator OR return to pool
- [ ] Preserve any work-in-progress (draft)
- [ ] Extend deadline option
- [ ] Notification to original creator
- [ ] Notification to new creator (if specific)
- [ ] Impact on original creator's metrics (configurable)
- [ ] Audit trail

**Reassignment Reasons:**
| Reason | Impact on Original Creator |
|--------|---------------------------|
| Creator requested | No penalty |
| Deadline missed | Late delivery flag |
| Quality issues | May trigger account flag |
| Creator suspended | N/A |
| Creator unavailable | No penalty |

---

#### US-8.5: Handle Stuck Tasks
**As an** admin  
**I want to** identify and manage stuck tasks  
**So that** nothing falls through the cracks  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Dashboard showing:
  - Tasks open > 24 hours with no claims
  - Tasks claimed but no progress > 50% of deadline
  - Tasks past deadline
  - Tasks in revision > 48 hours
- [ ] Bulk selection for action
- [ ] Actions: notify creator, extend deadline, reassign, cancel
- [ ] Automated alerts for stuck tasks

---

### 2.4 Bulk Operations

#### US-8.6: Bulk Import Tasks
**As an** admin  
**I want to** import multiple tasks at once  
**So that** I can handle large partnership orders  

**Priority:** P2  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] CSV upload with task details
- [ ] Template download
- [ ] Validation before import
- [ ] Error reporting (row-by-row)
- [ ] Preview before confirmation
- [ ] Progress tracking
- [ ] Summary report after completion

**CSV Format:**
```csv
audio_url,title,description,output_types,priority,comped_reason,assigned_creator_email
https://...,Title 1,Desc 1,"executive-summary,key-insights",standard,PARTNERSHIP,
https://...,Title 2,Desc 2,"blog-post",rush,PARTNERSHIP,creator@email.com
```

---

#### US-8.7: Bulk Status Update
**As an** admin  
**I want to** update multiple task statuses at once  
**So that** I can handle operational needs efficiently  

**Priority:** P2  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Select multiple tasks
- [ ] Available actions: cancel, extend deadline, mark complete
- [ ] Confirmation with impact summary
- [ ] Batch processing with progress
- [ ] Notifications sent as appropriate
- [ ] Audit log for each action

---

### 2.5 Override Controls

#### US-8.8: Override Task Pricing
**As an** admin  
**I want to** set custom pricing for specific tasks  
**So that** I can handle special arrangements  

**Priority:** P2  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Set custom client price
- [ ] Set custom creator payout
- [ ] Reason required
- [ ] Override visible in task details
- [ ] Financial reports show override flag

---

#### US-8.9: Override Level Requirements
**As an** admin  
**I want to** allow a creator to work on a task above their level  
**So that** I can handle exceptions  

**Priority:** P2  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Select creator below required level
- [ ] Warning about level mismatch
- [ ] Reason required
- [ ] Task completed counts toward their stats
- [ ] Audit log entry

---

### 2.6 Admin Task Browser

#### US-8.10: View All Tasks
**As an** admin  
**I want to** see all tasks regardless of status  
**So that** I have complete visibility  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Comprehensive task list
- [ ] Filter by: status, output type, priority, creator, date range
- [ ] Search by title, ID, uploader
- [ ] Sort by: created, deadline, status
- [ ] Show: status, creator, deadline, price, comped flag
- [ ] Click to view full details
- [ ] Quick actions (reassign, extend, cancel)
- [ ] Export filtered results

---

## 3. Data Model

### 3.1 Database Schema Updates

```sql
-- Add admin fields to assignments table
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    is_comped BOOLEAN DEFAULT FALSE;
    
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    comped_reason VARCHAR(50);
    
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    comped_reason_details TEXT;
    
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    comped_by UUID REFERENCES users(id);

ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    assigned_by UUID REFERENCES users(id);

ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    price_override BOOLEAN DEFAULT FALSE;

ALTER TABLE assignments ADD COLUMN IF NOT EXISTS 
    level_override BOOLEAN DEFAULT FALSE;

-- Assignment reassignment history
CREATE TABLE assignment_reassignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
    
    -- Reassignment details
    from_creator_id UUID REFERENCES users(id),
    to_creator_id UUID REFERENCES users(id), -- NULL if returned to pool
    
    reason VARCHAR(50) NOT NULL,
    reason_details TEXT,
    
    -- Impact
    penalize_original BOOLEAN DEFAULT FALSE,
    deadline_extended_hours INT,
    
    -- Admin
    reassigned_by UUID REFERENCES users(id) NOT NULL,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Admin task actions audit log
CREATE TABLE admin_task_actions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assignment_id UUID REFERENCES assignments(id),
    upload_id UUID REFERENCES uploads(id),
    
    action_type VARCHAR(50) NOT NULL,
    action_data JSONB,
    
    admin_id UUID REFERENCES users(id) NOT NULL,
    ip_address INET,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Bulk import batches
CREATE TABLE bulk_import_batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    file_name VARCHAR(255),
    file_url VARCHAR(500),
    total_rows INT,
    
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    processed_count INT DEFAULT 0,
    success_count INT DEFAULT 0,
    error_count INT DEFAULT 0,
    
    errors JSONB, -- [{row: 5, error: "Invalid URL"}]
    
    created_by UUID REFERENCES users(id),
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'failed'))
);

-- Indexes
CREATE INDEX idx_assignments_comped ON assignments(is_comped) WHERE is_comped = TRUE;
CREATE INDEX idx_reassignments_assignment ON assignment_reassignments(assignment_id);
CREATE INDEX idx_admin_actions_assignment ON admin_task_actions(assignment_id);
CREATE INDEX idx_admin_actions_admin ON admin_task_actions(admin_id, created_at);
```

---

## 4. API Specifications

### 4.1 Comped Task Endpoints

```yaml
# Create Comped Task
POST /api/v1/admin/tasks/comped
  Headers: Authorization: Bearer {admin_token}
  Request:
    audio_source: 'upload' | 'url' | 'existing'
    audio_url: string (if url)
    audio_file: binary (if upload)
    existing_upload_id: uuid (if existing)
    title: string
    description: string
    tags: string[]
    output_types: uuid[]
    priority: 'standard' | 'rush' | 'express'
    comped_reason: string
    comped_reason_details: string
    assigned_creator_id: uuid (optional)
  Response: 201 Created
    upload: Upload
    assignments: Assignment[]
    audit_id: uuid

# List Comped Tasks
GET /api/v1/admin/tasks/comped
  Headers: Authorization: Bearer {admin_token}
  Query:
    status: string
    reason: string
    start_date: date
    end_date: date
    page: number
  Response: 200 OK
    tasks: [{
      assignment: Assignment
      comped_by: User
      comped_reason: string
      comped_value: number
    }]
    summary: {
      total_count: number
      total_value: number
      by_reason: [{reason, count, value}]
    }
```

### 4.2 Assignment Management Endpoints

```yaml
# Direct Assign Task
POST /api/v1/admin/assignments/:id/assign
  Headers: Authorization: Bearer {admin_token}
  Request:
    creator_id: uuid
    reason: string
    override_level: boolean (if creator below required level)
  Response: 200 OK
    assignment: Assignment
    creator: CreatorProfile

# Reassign Task
POST /api/v1/admin/assignments/:id/reassign
  Headers: Authorization: Bearer {admin_token}
  Request:
    new_creator_id: uuid (optional, null = return to pool)
    reason: 'creator_requested' | 'deadline_missed' | 'quality_issues' | 'creator_unavailable'
    reason_details: string
    extend_deadline_hours: number
    penalize_original: boolean
  Response: 200 OK
    assignment: Assignment
    reassignment: Reassignment

# Extend Deadline
POST /api/v1/admin/assignments/:id/extend
  Headers: Authorization: Bearer {admin_token}
  Request:
    hours: number
    reason: string
  Response: 200 OK
    assignment: Assignment
    new_deadline: timestamp

# Cancel Assignment
POST /api/v1/admin/assignments/:id/cancel
  Headers: Authorization: Bearer {admin_token}
  Request:
    reason: string
    refund: boolean (if paid)
  Response: 200 OK
    assignment: Assignment

# Get Stuck Tasks
GET /api/v1/admin/tasks/stuck
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    unclaimed: Assignment[] // Open > 24h
    stalled: Assignment[] // No progress > 50% deadline
    overdue: Assignment[] // Past deadline
    revision_stuck: Assignment[] // Revision > 48h
```

### 4.3 Bulk Operations Endpoints

```yaml
# Upload Bulk Import
POST /api/v1/admin/tasks/bulk-import
  Headers: 
    Authorization: Bearer {admin_token}
    Content-Type: multipart/form-data
  Request:
    file: CSV file
    comped: boolean
    comped_reason: string (if comped)
  Response: 202 Accepted
    batch_id: uuid
    status: 'processing'

# Get Bulk Import Status
GET /api/v1/admin/tasks/bulk-import/:batch_id
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    batch: BulkImportBatch
    progress: number (0-100)

# Download Import Template
GET /api/v1/admin/tasks/bulk-import/template
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    Content-Type: text/csv
    (CSV template file)

# Bulk Status Update
POST /api/v1/admin/assignments/bulk-update
  Headers: Authorization: Bearer {admin_token}
  Request:
    assignment_ids: uuid[]
    action: 'cancel' | 'extend' | 'complete'
    action_params: {
      extend_hours: number (if extend)
      reason: string
    }
  Response: 200 OK
    updated_count: number
    results: [{assignment_id, success, error}]
```

### 4.4 Admin Browse Endpoints

```yaml
# Browse All Tasks
GET /api/v1/admin/tasks
  Headers: Authorization: Bearer {admin_token}
  Query:
    status: string
    output_type: uuid
    priority: string
    creator_id: uuid
    uploader_id: uuid
    is_comped: boolean
    start_date: date
    end_date: date
    search: string (title, ID)
    sort_by: 'created' | 'deadline' | 'status'
    sort_order: 'asc' | 'desc'
    page: number
    limit: number
  Response: 200 OK
    tasks: Assignment[]
    pagination: {...}
    
# Get Task Details (Admin View)
GET /api/v1/admin/tasks/:id
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    assignment: Assignment (full details)
    upload: Upload
    creator: CreatorProfile
    uploader: User
    submissions: ContentSubmission[]
    reviews: Review[]
    reassignments: Reassignment[]
    audit_log: AdminAction[]
```

---

## 5. Admin UI Screens

### 5.1 Task Management Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│  Task Management                           [+ Create Comped Task]│
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────┐│
│  │ Stuck Tasks  │ │ Overdue      │ │ Comped       │ │ Total    ││
│  │     12       │ │      5       │ │     23       │ │   1,247  ││
│  │ Need action  │ │ Past deadline│ │ This month   │ │ All tasks││
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────┘│
│                                                                  │
│  Quick Actions                                                  │
│  [View Stuck Tasks] [Bulk Import] [Export Tasks]                │
│                                                                  │
│  Recent Tasks                                                   │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Status ▼  │ Title           │ Creator    │ Deadline │ Actions│
│  ├───────────┼─────────────────┼────────────┼──────────┼────────┤│
│  │ 🟡 In Prog│ AI Trends Q4    │ #2847      │ 8h left  │ [···] ││
│  │ 🟢 Open   │ Marketing Sum...│ Unassigned │ 24h left │ [···] ││
│  │ 🔴 Overdue│ Tech Review     │ #1923      │ -2h      │ [···] ││
│  │ ⭐ Comped │ Partner Demo    │ #3102      │ 12h left │ [···] ││
│  └─────────────────────────────────────────────────────────────┘│
│  [< Prev] Page 1 of 52 [Next >]                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Stuck Tasks View

```
┌─────────────────────────────────────────────────────────────────┐
│  Stuck Tasks                                    [Refresh]       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Unclaimed > 24h (3)                                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ☐ Executive Summary - "Q4 Planning"                         ││
│  │   Open for 28 hours • $15 • Mid-Level required              ││
│  │   [Assign to Creator] [Boost Priority] [Cancel]             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Stalled > 50% Deadline (5)                                     │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ☐ Blog Post - "Tech Trends"                                 ││
│  │   Creator #2847 • 70% deadline elapsed • 0% progress        ││
│  │   [Notify Creator] [Extend Deadline] [Reassign]             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Overdue (2)                                                    │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ☐ Key Insights - "Market Analysis"                          ││
│  │   Creator #1923 • 4 hours overdue • Submitted, needs review ││
│  │   [Assign to Editor] [Extend Deadline]                      ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Selected: 0    [Bulk Reassign] [Bulk Extend] [Bulk Cancel]    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Audit Trail Requirements

All admin actions must be logged with:
- Admin user ID
- Timestamp
- Action type
- Affected entity (assignment/upload/user)
- Previous state
- New state
- Reason provided
- IP address

Audit logs are:
- Immutable (no edits/deletes)
- Retained for 7 years
- Searchable by admin
- Exportable for compliance

---

## 7. Implementation Checklist

### Week 1: Comped Tasks
- [ ] Comped task creation form
- [ ] Audio source handling
- [ ] Direct assignment option
- [ ] Comped tasks list

### Week 2: Reassignment
- [ ] Reassignment workflow
- [ ] Stuck tasks dashboard
- [ ] Deadline extension
- [ ] Task cancellation

### Week 3: Bulk Operations
- [ ] Bulk import
- [ ] CSV parsing and validation
- [ ] Bulk status update
- [ ] Progress tracking

### Week 4: Admin Browser & Audit
- [ ] Full task browser
- [ ] Advanced filtering
- [ ] Audit log implementation
- [ ] Export functionality

---

*Document Version: 1.0*  
*Last Updated: December 2024*
