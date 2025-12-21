# EPIC-07: Analytics & Reporting

**Epic Owner:** [TBD]  
**Priority:** P1  
**Estimated Effort:** 4-6 weeks  
**Dependencies:** Epic 1-5  

---

## 1. Epic Overview

### 1.1 Description

This epic covers all analytics and reporting functionality: user dashboards, admin analytics, business intelligence, system health monitoring, and data export capabilities.

### 1.2 Business Value

- Data-driven decision making
- Performance visibility for all users
- Operational efficiency tracking
- Growth metric monitoring
- Compliance and audit support

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Dashboard load time | < 2 seconds |
| Data freshness | < 5 minutes |
| Report generation time | < 30 seconds |
| Analytics uptime | 99.9% |

---

## 2. User Stories

### 2.1 Uploader Analytics

#### US-7.1: Uploader Dashboard
**As an** uploader  
**I want to** see my usage statistics  
**So that** I understand my spending and activity  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Total uploads (all time, this month)
- [ ] Total spent (all time, this month)
- [ ] Outputs received by type
- [ ] Average turnaround time
- [ ] Pending vs completed uploads
- [ ] Spending trend chart

**Dashboard Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Your Dashboard                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────┐│
│  │ Uploads      │ │ Spent        │ │ Avg Delivery │ │ Pending  ││
│  │ This Month   │ │ This Month   │ │ Time         │ │          ││
│  │     12       │ │   $420       │ │   18 hours   │ │    3     ││
│  │ ↑ 20% vs last│ │ ↑ 15% vs last│ │ ↓ 2hr faster │ │          ││
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────┘│
│                                                                  │
│  Spending Over Time                                             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │     $500 ┤                           ╭───╮                  ││
│  │     $400 ┤               ╭───────────╯   ╰───╮              ││
│  │     $300 ┤    ╭─────────╯                    ╰───╮          ││
│  │     $200 ┤────╯                                   ╰────     ││
│  │     $100 ┤                                                  ││
│  │          └────────────────────────────────────────────────  ││
│  │          Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct   ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Output Types Breakdown              Recent Uploads             │
│  ┌──────────────────────────┐       ┌──────────────────────────┐│
│  │ Executive Summary   35%  │       │ • AI Trends - Completed  ││
│  │ Blog Post          25%  │       │ • Marketing Q4 - Pending ││
│  │ Social Media       20%  │       │ • Tech Recap - In Review ││
│  │ Key Insights       15%  │       │                          ││
│  │ Other               5%  │       │ [View All →]             ││
│  └──────────────────────────┘       └──────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.2 Creator Analytics

#### US-7.2: Creator Performance Dashboard
**As a** creator  
**I want to** see my performance metrics  
**So that** I can improve and earn more  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Current level and progress
- [ ] Completed tasks (all time, this month)
- [ ] Earnings (all time, this month, available)
- [ ] Average rating with trend
- [ ] On-time delivery rate
- [ ] First-time approval rate
- [ ] Performance comparison to level average

---

#### US-7.3: Creator Earnings Analytics
**As a** creator  
**I want to** analyze my earnings  
**So that** I can optimize my work  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Earnings by output type
- [ ] Earnings by time period
- [ ] Best performing output types
- [ ] Earnings per hour worked (estimated)
- [ ] Payout history chart

---

### 2.3 Admin Analytics

#### US-7.4: Platform Overview Dashboard
**As an** admin  
**I want to** see platform-wide metrics  
**So that** I understand business health  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Key metrics summary cards:
  - Total revenue (period selectable)
  - Total payouts
  - Platform margin
  - Active uploaders
  - Active creators
  - Pending assignments
- [ ] Revenue trend chart
- [ ] Transaction volume chart
- [ ] User growth chart
- [ ] Real-time activity feed

**Admin Dashboard:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Platform Dashboard                     [Period: This Month ▼]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │ Revenue  │ │ Payouts  │ │ Margin   │ │ Users    │ │ Tasks  ││
│  │ $47,250  │ │ $28,350  │ │ $18,900  │ │ 1,247    │ │ 892    ││
│  │ ↑ 23%    │ │ ↑ 18%    │ │ ↑ 31%    │ │ ↑ 12%    │ │ ↑ 15%  ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘│
│                                                                  │
│  Revenue & Margin Trend                                         │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ $50K ┤                                          ╱█████      ││
│  │ $40K ┤                              ╱█████████████████      ││
│  │ $30K ┤               ╱█████████████████████████████████      ││
│  │ $20K ┤ ████████████████████████████████████████████████      ││
│  │ $10K ┤                                                       ││
│  │      └──────────────────────────────────────────────────────││
│  │       W1   W2   W3   W4   W5   W6   W7   W8   W9   W10      ││
│  │       ■ Revenue  ■ Margin                                   ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────┐ ┌─────────────────────────────┐│
│  │ Creator Distribution        │ │ Real-Time Activity          ││
│  │ by Level                    │ │                             ││
│  │ ████████████████████  312 P │ │ • Task claimed - 2m ago    ││
│  │ ██████████████       245 J  │ │ • Payment received - 5m ago││
│  │ ██████████          178 M   │ │ • New signup - 8m ago      ││
│  │ █████               89 S    │ │ • Review submitted - 12m   ││
│  │ ██                  23 E    │ │ • Upload complete - 15m    ││
│  └─────────────────────────────┘ └─────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-7.5: Creator Level Statistics
**As an** admin  
**I want to** see creator distribution by level  
**So that** I understand workforce composition  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Count of creators per level
- [ ] Visualization (bar chart)
- [ ] Trend over time
- [ ] Drill-down to creator list
- [ ] Level change rate
- [ ] Average time in each level

---

#### US-7.6: Quality Metrics
**As an** admin  
**I want to** see platform quality metrics  
**So that** I can maintain standards  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Average content rating
- [ ] First-time approval rate
- [ ] Revision rate
- [ ] Rejection rate
- [ ] Quality by output type
- [ ] Quality trend over time
- [ ] Creator rating distribution

---

#### US-7.7: Fraud Metrics Dashboard
**As an** admin  
**I want to** see fraud detection metrics  
**So that** I can assess system effectiveness  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Flagged accounts (pending, resolved)
- [ ] Flag types distribution
- [ ] Auto-flag accuracy (false positive rate)
- [ ] Fraud prevention rate
- [ ] Duplicate account detection rate
- [ ] Suspicious activity trend

---

#### US-7.8: Financial Reports
**As an** admin  
**I want to** generate financial reports  
**So that** I have records for accounting  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Revenue report by period
- [ ] Payout report by period
- [ ] Transaction detail export
- [ ] Tax reporting (1099 for US creators)
- [ ] Refund report
- [ ] Outstanding balance report
- [ ] Export to CSV/Excel

---

### 2.4 Reporting & Export

#### US-7.9: Custom Report Builder
**As an** admin  
**I want to** build custom reports  
**So that** I can answer specific questions  

**Priority:** P2  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Select metrics to include
- [ ] Filter by date range
- [ ] Filter by user segment
- [ ] Group by dimensions
- [ ] Visualization options
- [ ] Save report templates
- [ ] Schedule recurring reports

---

#### US-7.10: Data Export
**As an** admin  
**I want to** export data  
**So that** I can analyze in external tools  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Export users (with role filter)
- [ ] Export transactions
- [ ] Export assignments
- [ ] Export payouts
- [ ] Format options: CSV, JSON, Excel
- [ ] Date range selection
- [ ] Background processing for large exports
- [ ] Download link via email

---

### 2.5 System Monitoring

#### US-7.11: System Health Dashboard
**As an** admin  
**I want to** monitor system health  
**So that** I catch issues early  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] API response times (p50, p95, p99)
- [ ] Error rates by endpoint
- [ ] Database performance
- [ ] Queue depths and processing rates
- [ ] Storage utilization
- [ ] External service status (Stripe, transcription, etc.)
- [ ] Alert configuration

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Daily aggregated metrics (for fast dashboard queries)
CREATE TABLE daily_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL,
    
    -- Revenue metrics
    total_revenue DECIMAL(12,2) DEFAULT 0,
    total_payouts DECIMAL(12,2) DEFAULT 0,
    total_refunds DECIMAL(12,2) DEFAULT 0,
    transaction_count INT DEFAULT 0,
    
    -- User metrics
    new_uploaders INT DEFAULT 0,
    new_creators INT DEFAULT 0,
    active_uploaders INT DEFAULT 0,
    active_creators INT DEFAULT 0,
    
    -- Content metrics
    uploads_count INT DEFAULT 0,
    assignments_created INT DEFAULT 0,
    assignments_completed INT DEFAULT 0,
    assignments_rejected INT DEFAULT 0,
    
    -- Quality metrics
    avg_rating DECIMAL(3,2),
    first_approval_rate DECIMAL(5,2),
    revision_rate DECIMAL(5,2),
    
    -- Fraud metrics
    flags_created INT DEFAULT 0,
    flags_resolved INT DEFAULT 0,
    accounts_suspended INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    UNIQUE(date)
);

-- Creator level snapshots (for trend tracking)
CREATE TABLE creator_level_snapshots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    snapshot_date DATE NOT NULL,
    level_id UUID REFERENCES creator_levels(id),
    creator_count INT NOT NULL,
    avg_rating DECIMAL(3,2),
    total_completed INT,
    created_at TIMESTAMP DEFAULT NOW(),
    
    UNIQUE(snapshot_date, level_id)
);

-- Saved reports
CREATE TABLE saved_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_by UUID REFERENCES users(id),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    
    -- Report configuration
    report_type VARCHAR(50) NOT NULL,
    config JSONB NOT NULL, -- Filters, groupings, metrics
    
    -- Scheduling
    is_scheduled BOOLEAN DEFAULT FALSE,
    schedule_cron VARCHAR(50), -- Cron expression
    recipients TEXT[], -- Email addresses
    
    last_run_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Report runs
CREATE TABLE report_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    report_id UUID REFERENCES saved_reports(id) ON DELETE CASCADE,
    
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    
    -- Results
    result_url VARCHAR(500), -- S3 URL
    row_count INT,
    file_size_bytes BIGINT,
    
    error_message TEXT,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'failed'))
);

-- Analytics events (for detailed analysis)
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    session_id VARCHAR(100),
    
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB,
    
    -- Context
    page_url VARCHAR(500),
    referrer VARCHAR(500),
    user_agent TEXT,
    ip_address INET,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Partition analytics events by month for performance
CREATE INDEX idx_analytics_events_type_date ON analytics_events(event_type, created_at);
CREATE INDEX idx_analytics_events_user ON analytics_events(user_id, created_at);

-- Indexes for daily metrics
CREATE INDEX idx_daily_metrics_date ON daily_metrics(date DESC);
```

### 3.2 Aggregation Jobs

```sql
-- Daily aggregation job (runs at midnight UTC)
CREATE OR REPLACE FUNCTION aggregate_daily_metrics(target_date DATE) RETURNS VOID AS $$
BEGIN
    INSERT INTO daily_metrics (
        date,
        total_revenue,
        total_payouts,
        total_refunds,
        transaction_count,
        new_uploaders,
        new_creators,
        active_uploaders,
        active_creators,
        uploads_count,
        assignments_created,
        assignments_completed,
        avg_rating,
        first_approval_rate
    )
    SELECT
        target_date,
        COALESCE(SUM(CASE WHEN pt.type = 'charge' THEN pt.amount ELSE 0 END), 0),
        COALESCE(SUM(CASE WHEN p.status = 'completed' THEN p.amount ELSE 0 END), 0),
        COALESCE(SUM(CASE WHEN pt.type = 'refund' THEN pt.amount ELSE 0 END), 0),
        COUNT(DISTINCT pt.id),
        COUNT(DISTINCT CASE WHEN u.role = 'uploader' AND DATE(u.created_at) = target_date THEN u.id END),
        COUNT(DISTINCT CASE WHEN u.role = 'creator' AND DATE(u.created_at) = target_date THEN u.id END),
        COUNT(DISTINCT CASE WHEN u.role = 'uploader' AND DATE(up.created_at) = target_date THEN u.id END),
        COUNT(DISTINCT CASE WHEN u.role = 'creator' AND DATE(a.completed_at) = target_date THEN a.creator_id END),
        COUNT(DISTINCT CASE WHEN DATE(up.created_at) = target_date THEN up.id END),
        COUNT(DISTINCT CASE WHEN DATE(a.created_at) = target_date THEN a.id END),
        COUNT(DISTINCT CASE WHEN DATE(a.completed_at) = target_date THEN a.id END),
        AVG(r.overall_score),
        COUNT(CASE WHEN r.decision = 'approved' AND cs.version = 1 THEN 1 END)::DECIMAL / 
            NULLIF(COUNT(CASE WHEN r.decision = 'approved' THEN 1 END), 0) * 100
    FROM users u
    LEFT JOIN payment_transactions pt ON DATE(pt.created_at) = target_date
    LEFT JOIN payouts p ON DATE(p.completed_at) = target_date
    LEFT JOIN uploads up ON up.uploader_id = u.id
    LEFT JOIN assignments a ON a.upload_id = up.id
    LEFT JOIN reviews r ON r.assignment_id = a.id AND DATE(r.completed_at) = target_date
    LEFT JOIN content_submissions cs ON cs.id = r.submission_id
    ON CONFLICT (date) DO UPDATE SET
        total_revenue = EXCLUDED.total_revenue,
        total_payouts = EXCLUDED.total_payouts,
        -- ... update all fields
        created_at = NOW();
END;
$$ LANGUAGE plpgsql;
```

---

## 4. API Specifications

### 4.1 Dashboard Endpoints

```yaml
# Uploader Dashboard
GET /api/v1/analytics/uploader/dashboard
  Headers: Authorization: Bearer {token}
  Query:
    period: 'week' | 'month' | 'quarter' | 'year'
  Response: 200 OK
    summary: {
      uploads_count: number
      total_spent: number
      avg_delivery_hours: number
      pending_count: number
    }
    spending_trend: [{date, amount}]
    output_type_breakdown: [{type, count, percent}]
    recent_uploads: Upload[]

# Creator Dashboard
GET /api/v1/analytics/creator/dashboard
  Headers: Authorization: Bearer {token}
  Query:
    period: 'week' | 'month' | 'quarter' | 'year'
  Response: 200 OK
    summary: {
      completed_tasks: number
      total_earnings: number
      available_balance: number
      avg_rating: number
      on_time_rate: number
    }
    level_progress: {
      current_level: string
      tasks_completed: number
      tasks_required: number
      rating_current: number
      rating_required: number
    }
    earnings_trend: [{date, amount}]
    performance_vs_average: {...}

# Admin Platform Dashboard
GET /api/v1/admin/analytics/dashboard
  Headers: Authorization: Bearer {admin_token}
  Query:
    period: 'day' | 'week' | 'month' | 'quarter' | 'year'
  Response: 200 OK
    summary: {
      revenue: number
      payouts: number
      margin: number
      active_uploaders: number
      active_creators: number
      pending_assignments: number
    }
    trends: {
      revenue: [{date, value}]
      users: [{date, uploaders, creators}]
      transactions: [{date, count}]
    }
    creator_levels: [{level, count, percent}]
    recent_activity: [{type, description, timestamp}]

# Creator Level Statistics
GET /api/v1/admin/analytics/creator-levels
  Headers: Authorization: Bearer {admin_token}
  Query:
    start_date: date
    end_date: date
  Response: 200 OK
    current: [{level_id, level_name, count, avg_rating}]
    trend: [{date, level_id, count}]
    transitions: [{from_level, to_level, count}]

# Fraud Metrics
GET /api/v1/admin/analytics/fraud
  Headers: Authorization: Bearer {admin_token}
  Query:
    period: string
  Response: 200 OK
    summary: {
      pending_flags: number
      resolved_this_period: number
      accounts_suspended: number
      duplicate_accounts_blocked: number
    }
    flag_types: [{type, count}]
    trend: [{date, flags_created, flags_resolved}]
    false_positive_rate: number
```

### 4.2 Report Endpoints

```yaml
# Generate Financial Report
POST /api/v1/admin/reports/financial
  Headers: Authorization: Bearer {admin_token}
  Request:
    report_type: 'revenue' | 'payouts' | 'transactions' | 'refunds'
    start_date: date
    end_date: date
    format: 'csv' | 'xlsx' | 'json'
    group_by: 'day' | 'week' | 'month'
  Response: 202 Accepted
    report_run_id: uuid
    status: 'processing'
    estimated_time: number

# Get Report Status
GET /api/v1/admin/reports/runs/:id
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    report_run: ReportRun
    download_url: string (if completed)

# List Saved Reports
GET /api/v1/admin/reports
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    reports: SavedReport[]

# Create Saved Report
POST /api/v1/admin/reports
  Headers: Authorization: Bearer {admin_token}
  Request:
    name: string
    description: string
    report_type: string
    config: {...}
    is_scheduled: boolean
    schedule_cron: string
    recipients: string[]
  Response: 201 Created
    report: SavedReport

# Export Data
POST /api/v1/admin/exports
  Headers: Authorization: Bearer {admin_token}
  Request:
    entity: 'users' | 'transactions' | 'assignments' | 'payouts'
    filters: {...}
    format: 'csv' | 'xlsx' | 'json'
  Response: 202 Accepted
    export_id: uuid
```

---

## 5. Event Tracking

### 5.1 Tracked Events

| Event | Properties | Purpose |
|-------|------------|---------|
| page_view | url, referrer | Engagement analysis |
| signup_started | role | Funnel analysis |
| signup_completed | role, method | Conversion tracking |
| upload_initiated | output_types | Feature usage |
| upload_completed | file_size, duration | Success tracking |
| assignment_claimed | output_type, level | Creator behavior |
| assignment_submitted | time_to_complete | Efficiency tracking |
| payment_completed | amount, method | Revenue analysis |
| payout_processed | amount, method | Financial tracking |
| search_performed | query, filters | UX optimization |

### 5.2 Implementation

```javascript
// analytics.service.js

class AnalyticsService {
  async track(event, userId, properties = {}) {
    const eventData = {
      user_id: userId,
      session_id: this.getSessionId(),
      event_type: event,
      event_data: properties,
      page_url: properties.page_url,
      referrer: properties.referrer,
      user_agent: properties.user_agent,
      ip_address: properties.ip_address,
      created_at: new Date()
    };
    
    // Insert into analytics_events table
    await db.analytics_events.create(eventData);
    
    // Also send to external analytics (Mixpanel, Amplitude)
    if (this.externalEnabled) {
      await this.sendToExternal(event, userId, properties);
    }
  }
  
  async trackPageView(userId, url, referrer) {
    await this.track('page_view', userId, { url, referrer });
  }
  
  async trackConversion(userId, type, value) {
    await this.track('conversion', userId, { type, value });
  }
}
```

---

## 6. Implementation Checklist

### Week 1-2: Core Dashboards
- [ ] Uploader dashboard
- [ ] Creator dashboard
- [ ] Admin overview dashboard
- [ ] Daily aggregation jobs

### Week 3-4: Detailed Analytics
- [ ] Creator level statistics
- [ ] Quality metrics
- [ ] Fraud metrics
- [ ] Financial analytics

### Week 5-6: Reporting & Export
- [ ] Financial reports
- [ ] Data export
- [ ] Saved reports
- [ ] Scheduled reports

---

*Document Version: 1.0*  
*Last Updated: December 2024*
