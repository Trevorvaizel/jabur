# 9. Database Schema Specifications

### 9.1 Content Outputs

```sql
CREATE TABLE content_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Relationships
  request_id UUID NOT NULL REFERENCES content_requests(id),
  audio_id UUID NOT NULL REFERENCES audio_files(id),
  project_id UUID NOT NULL REFERENCES projects(id), -- NOT NULL enforces mandatory projects
  creator_id UUID NOT NULL REFERENCES creators(id),

  -- Content metadata
  format_type VARCHAR(50) NOT NULL, -- 'summary', 'blog', 'social', 'newsletter'
  file_url TEXT NOT NULL, -- Google Cloud Storage URL
  file_format VARCHAR(10) NOT NULL, -- 'md', 'pdf', 'docx', 'txt', 'json'
  word_count INT,
  available_formats JSONB, -- ['md', 'pdf', 'docx']

  -- Quality & status
  status VARCHAR(20) NOT NULL DEFAULT 'pending_qa',
  -- 'pending_qa', 'approved', 'rejected', 'in_revision'
  qa_reviewer_id UUID REFERENCES qa_reviewers(id),
  qa_score DECIMAL(3,2), -- 1.00 to 5.00
  qa_feedback TEXT,
  qa_approved_at TIMESTAMP,

  -- Earnings
  base_earnings DECIMAL(10,2),
  quality_bonus DECIMAL(10,2),
  speed_bonus DECIMAL(10,2),
  total_earnings DECIMAL(10,2),
  payout_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'paid'

  -- Timestamps
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  submitted_at TIMESTAMP,

  -- Indexes
  INDEX idx_creator_id (creator_id),
  INDEX idx_project_id (project_id),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);
```

### 9.2 Creator Skills

```sql
CREATE TABLE creator_skills (
  creator_id UUID PRIMARY KEY REFERENCES creators(id),

  -- CV data
  cv_file_url TEXT,
  linkedin_url TEXT,
  professional_summary TEXT,
  total_years_experience INT,

  -- AI-extracted data
  industries JSONB,
  -- [
  --   {"name": "Finance", "level": "expert", "years": 8, "evidence": "CFA Level 2"},
  --   {"name": "Technology", "level": "intermediate", "years": 5}
  -- ]

  content_types JSONB,
  -- [
  --   {"type": "blog_posts", "level": "expert", "evidence": "200+ published"},
  --   {"type": "social_media", "level": "intermediate"}
  -- ]

  topics_expertise JSONB,
  -- {
  --   "cryptocurrency": {"level": "expert", "years": 5, "verified": true, "avg_score": 4.8, "tasks_completed": 15},
  --   "technology": {"level": "intermediate", "years": 3, "verified": true, "avg_score": 4.6, "tasks_completed": 8}
  -- }

  -- Proven strengths (updated after each task)
  proven_strengths JSONB,
  -- {
  --   "blog_posts": {"avg_score": 4.8, "tasks_completed": 23, "last_task_date": "2025-01-05"},
  --   "social_media": {"avg_score": 4.5, "tasks_completed": 12}
  -- }

  -- AI analysis
  ai_skill_assessment JSONB, -- Complete AI analysis response
  ai_confidence_score DECIMAL(3,2), -- 0.00 to 1.00

  -- Metadata
  analyzed_at TIMESTAMP,
  last_updated TIMESTAMP DEFAULT NOW()
);
```

### 9.3 Payment Methods

```sql
CREATE TABLE creator_payment_methods (
  creator_id UUID PRIMARY KEY REFERENCES creators(id),

  -- Primary method
  primary_method VARCHAR(20) NOT NULL, -- 'mpesa' or 'bank_transfer'

  -- M-Pesa (East Africa)
  mpesa_phone_number VARCHAR(15), -- +254712345678
  mpesa_name VARCHAR(100),
  mpesa_country VARCHAR(2), -- 'KE', 'TZ', 'UG'
  mpesa_verified BOOLEAN DEFAULT false,
  mpesa_verified_at TIMESTAMP,

  -- Bank Transfer (International)
  bank_name VARCHAR(100),
  bank_account_number VARCHAR(50),
  bank_swift_code VARCHAR(15),
  bank_country VARCHAR(2),
  bank_currency VARCHAR(3), -- 'USD', 'EUR', 'GBP'
  bank_verified BOOLEAN DEFAULT false,
  bank_verified_at TIMESTAMP,

  -- Tax & Compliance
  tax_id VARCHAR(50), -- KRA PIN (Kenya), SSN (US), etc.
  tax_country VARCHAR(2),

  -- Payout preferences
  minimum_payout_amount DECIMAL(10,2) DEFAULT 10.00,
  payout_frequency VARCHAR(20) DEFAULT 'weekly', -- 'weekly', 'biweekly', 'monthly'

  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 9.4 Payout Processing

```sql
CREATE TABLE payout_batches (
  batch_id VARCHAR(50) PRIMARY KEY, -- 'BATCH-W03-2025'
  batch_date DATE NOT NULL,
  batch_type VARCHAR(20) NOT NULL, -- 'weekly', 'monthly'

  -- Summary
  total_creators INT,
  total_amount_usd DECIMAL(12,2),

  -- Status
  status VARCHAR(20) NOT NULL, -- 'processing', 'completed', 'failed'
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,

  -- Metadata
  mpesa_count INT,
  mpesa_total DECIMAL(12,2),
  bank_transfer_count INT,
  bank_transfer_total DECIMAL(12,2)
);

CREATE TABLE creator_payouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Relationships
  batch_id VARCHAR(50) REFERENCES payout_batches(batch_id),
  creator_id UUID REFERENCES creators(id),

  -- Payout details
  payment_method VARCHAR(20), -- 'mpesa' or 'bank_transfer'
  amount_usd DECIMAL(10,2) NOT NULL,
  amount_local_currency DECIMAL(10,2),
  currency VARCHAR(3),
  exchange_rate DECIMAL(10,4),
  fees DECIMAL(10,2),

  -- M-Pesa specific
  mpesa_phone VARCHAR(15),
  mpesa_transaction_id VARCHAR(50),

  -- Bank transfer specific
  bank_account VARCHAR(50),
  wise_transfer_id VARCHAR(50),
  estimated_delivery DATE,

  -- Status
  status VARCHAR(20) NOT NULL, -- 'pending', 'processing', 'completed', 'failed'
  error_message TEXT,
  retry_count INT DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP,
  completed_at TIMESTAMP,

  -- Indexes
  INDEX idx_creator_id (creator_id),
  INDEX idx_batch_id (batch_id),
  INDEX idx_status (status)
);
```

### 9.5 Communication System

```sql
CREATE TABLE creator_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Relationships
  task_id UUID NOT NULL REFERENCES content_outputs(id),
  creator_id UUID NOT NULL REFERENCES creators(id),
  project_id UUID NOT NULL REFERENCES projects(id),

  -- Question
  question_text TEXT NOT NULL,
  question_status VARCHAR(20) NOT NULL,
  -- 'awaiting_qa_review', 'awaiting_client', 'answered', 'resolved'

  -- QA response
  qa_reviewer_id UUID REFERENCES qa_reviewers(id),
  qa_response TEXT,
  qa_answered_at TIMESTAMP,

  -- Client involvement
  client_contacted BOOLEAN DEFAULT false,
  client_response TEXT,
  client_responded_at TIMESTAMP,

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  resolved_at TIMESTAMP,

  -- Indexes
  INDEX idx_creator_id (creator_id),
  INDEX idx_task_id (task_id),
  INDEX idx_status (question_status)
);

CREATE TABLE communication_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Relationships
  question_id UUID REFERENCES creator_questions(id),

  -- Message details
  sender_type VARCHAR(20) NOT NULL, -- 'creator', 'qa', 'client', 'admin'
  sender_id UUID NOT NULL,
  recipient_type VARCHAR(20) NOT NULL,
  recipient_id UUID NOT NULL,

  -- Content
  message_text TEXT NOT NULL,

  -- Timestamps
  timestamp TIMESTAMP DEFAULT NOW(),
  read_at TIMESTAMP,

  -- Indexes
  INDEX idx_question_id (question_id),
  INDEX idx_timestamp (timestamp)
);
```

---
