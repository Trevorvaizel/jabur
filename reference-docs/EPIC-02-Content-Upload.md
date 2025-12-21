# EPIC-02: Content Upload & Processing

**Epic Owner:** [TBD]  
**Priority:** P0 (Critical Path)  
**Estimated Effort:** 6-8 weeks  
**Dependencies:** Epic 1 (User Management)  

---

## 1. Epic Overview

### 1.1 Description

This epic covers the complete audio upload lifecycle: file upload, validation, virus scanning, storage, transcription, and assignment creation. It establishes the content pipeline that feeds the creator marketplace.

### 1.2 Business Value

- Seamless upload experience increases conversion
- Reliable transcription enables quality curation
- Efficient processing reduces operational costs
- Assignment splitting enables proper skill matching

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Upload success rate | > 99% |
| Transcription accuracy | > 95% |
| Processing time (upload to ready) | < 10 minutes |
| File validation catch rate | 100% |
| Virus detection rate | 100% |

---

## 2. User Stories

### 2.1 File Upload

#### US-2.1: Audio File Upload
**As a** content uploader  
**I want to** upload my podcast audio file  
**So that** it can be processed and curated  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Supported formats: MP3, WAV, M4A, FLAC, OGG, AAC
- [ ] Maximum file size: 500 MB
- [ ] Maximum duration: 4 hours
- [ ] Drag-and-drop upload zone
- [ ] File picker alternative
- [ ] Upload progress indicator with percentage
- [ ] Resumable uploads (for files > 10MB)
- [ ] Cancel upload option
- [ ] Validation errors shown immediately

**Technical Notes:**
```javascript
// Chunked upload for large files
POST /api/v1/uploads/initiate
{
  filename: string,
  file_size: number,
  mime_type: string,
  checksum_md5: string
}
// Returns presigned URLs for chunks

PUT /api/v1/uploads/:id/chunk/:chunk_number
// Upload individual chunk

POST /api/v1/uploads/:id/complete
// Finalize upload, trigger processing
```

---

#### US-2.2: Upload Metadata
**As a** content uploader  
**I want to** provide context about my podcast  
**So that** creators understand the content  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Required fields: Title (max 200 chars)
- [ ] Optional fields: Description (max 2000 chars), Tags (max 10)
- [ ] Tag suggestions based on popular tags
- [ ] Auto-save as draft
- [ ] Character count indicators
- [ ] Metadata can be edited until processing starts

---

#### US-2.3: Output Type Selection
**As a** content uploader  
**I want to** select what types of content I need  
**So that** I get exactly what I'm looking for  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Checkbox list of all output types
- [ ] Each type shows: name, description, price, estimated delivery
- [ ] At least one output type must be selected
- [ ] Price updates dynamically as selections change
- [ ] Rush/Express options available per type or globally
- [ ] "Select All" and "Clear All" options
- [ ] Save selection as template for future uploads

**Output Types:**
| Type | Base Price | Description |
|------|-----------|-------------|
| Executive Summary | $15 | High-level overview, 200-500 words |
| Detailed Summary | $35 | Comprehensive breakdown, 1000-2000 words |
| Key Insights | $25 | 5-10 analytical observations |
| Reflection Questions | $20 | 5-10 thought-provoking prompts |
| Action Items | $18 | 5-15 practical takeaways |
| Blog Post | $50 | Repurposed long-form, 800-1500 words |
| Social Media Pack | $30 | 5-10 platform-ready posts |
| Infographic Brief | $40 | Structured visual content outline |
| Fact-Check Report | $75 | Accuracy verification with sources |

---

#### US-2.4: Special Instructions
**As a** content uploader  
**I want to** provide specific guidance to creators  
**So that** the output matches my needs  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Free-text instruction field (max 1000 chars)
- [ ] Instruction templates library
- [ ] Save custom templates
- [ ] Character counter
- [ ] Instructions visible to creators (anonymized)

---

#### US-2.5: Deadline Selection
**As a** content uploader  
**I want to** specify when I need the content  
**So that** I can plan accordingly  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Three tiers: Standard (48h), Rush (24h +50%), Express (12h +100%)
- [ ] Price impact shown clearly
- [ ] Deadline applies to all selected output types
- [ ] Cannot select Express if audio > 1 hour
- [ ] Countdown timer shown after submission

---

#### US-2.6: Upload Status Tracking
**As a** content uploader  
**I want to** see the status of my upload  
**So that** I know what's happening  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Real-time status updates via WebSocket
- [ ] Status stages:
  - Uploading (with progress %)
  - Processing (validating)
  - Scanning (virus check)
  - Transcribing (with progress %)
  - Creating Assignments
  - Ready
- [ ] Estimated time remaining
- [ ] Error state with actionable message
- [ ] Email notification when ready

---

### 2.2 File Processing

#### US-2.7: File Validation
**As the** system  
**I want to** validate uploaded files  
**So that** only valid audio is processed  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Verify file format matches extension
- [ ] Check file is valid audio (not corrupted)
- [ ] Verify duration within limits
- [ ] Detect and reject empty/silent files
- [ ] Check minimum quality (bitrate > 64kbps)
- [ ] Return specific error messages

**Validation Rules:**
```javascript
const validationRules = {
  maxFileSize: 500 * 1024 * 1024, // 500MB
  maxDuration: 4 * 60 * 60, // 4 hours in seconds
  minDuration: 30, // 30 seconds minimum
  minBitrate: 64, // kbps
  allowedFormats: ['mp3', 'wav', 'm4a', 'flac', 'ogg', 'aac'],
  maxSilenceRatio: 0.9 // 90% silence = reject
};
```

---

#### US-2.8: Virus Scanning
**As the** system  
**I want to** scan uploaded files for malware  
**So that** the platform remains secure  

**Priority:** P0  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] All files scanned before processing
- [ ] Use ClamAV or commercial AV solution
- [ ] Quarantine infected files
- [ ] Alert security team on detection
- [ ] User notified with generic message (no details)
- [ ] Scan completes within 30 seconds

---

#### US-2.9: Audio Transcription
**As the** system  
**I want to** transcribe audio to text  
**So that** creators have text to work with  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Primary provider: AssemblyAI (or OpenAI Whisper)
- [ ] Fallback provider configured
- [ ] Accuracy target: > 95%
- [ ] Speaker diarization enabled
- [ ] Timestamps per sentence/paragraph
- [ ] Language auto-detection
- [ ] Processing time < 0.5x audio length
- [ ] Retry on transient failures (3 attempts)
- [ ] Store transcript with upload

**Transcript Format:**
```json
{
  "upload_id": "uuid",
  "provider": "assemblyai",
  "language": "en",
  "confidence": 0.96,
  "duration_seconds": 1800,
  "word_count": 4500,
  "segments": [
    {
      "speaker": "A",
      "start_time": 0.0,
      "end_time": 5.2,
      "text": "Welcome to the podcast...",
      "confidence": 0.98
    }
  ]
}
```

---

#### US-2.10: Transcript Editing
**As a** content uploader  
**I want to** review and edit the transcript  
**So that** creators work with accurate text  

**Priority:** P2  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] View transcript with audio sync
- [ ] Edit text inline
- [ ] Track changes history
- [ ] Highlight low-confidence sections
- [ ] Accept/reject AI suggestions
- [ ] Save edits (creates new version)
- [ ] Original preserved for reference

---

### 2.3 Assignment Creation

#### US-2.11: Automatic Assignment Generation
**As the** system  
**I want to** create assignments from uploads  
**So that** creators can claim work  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] One assignment per selected output type
- [ ] Assignment includes: upload reference, output type, deadline, pricing
- [ ] Assignments filtered by creator level (output type restrictions)
- [ ] Status set to "open"
- [ ] Notifications sent to eligible creators
- [ ] Assignments visible in creator dashboard

**Assignment Creation Logic:**
```javascript
async function createAssignments(upload, outputTypes, priority) {
  const assignments = [];
  
  for (const outputType of outputTypes) {
    const deadline = calculateDeadline(priority, outputType);
    const price = calculatePrice(outputType, priority, upload.duration);
    const creatorPayout = calculatePayout(price, outputType);
    const minLevel = getMinLevel(outputType);
    
    const assignment = await db.assignments.create({
      upload_id: upload.id,
      output_type_id: outputType.id,
      status: 'open',
      priority: priority,
      deadline: deadline,
      price: price,
      creator_payout: creatorPayout,
      min_creator_level_id: minLevel.id,
      created_at: new Date()
    });
    
    assignments.push(assignment);
  }
  
  // Notify eligible creators
  await notifyCreators(assignments);
  
  return assignments;
}
```

---

#### US-2.12: Level-Based Assignment Routing
**As the** system  
**I want to** route assignments to appropriate creator levels  
**So that** quality is maintained  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Each output type has minimum level requirement
- [ ] Assignments only visible to creators at or above required level
- [ ] Level filter applied in creator dashboard queries
- [ ] Admin can override level requirement per assignment
- [ ] If no creators at required level, escalate to admin

**Level Routing Matrix:**
| Output Type | Minimum Level | Fallback |
|-------------|---------------|----------|
| Social Media Pack | Probationary | Junior |
| Action Items | Junior | Mid-Level |
| Executive Summary | Mid-Level | Senior |
| Detailed Summary | Mid-Level | Senior |
| Reflection Questions | Mid-Level | Senior |
| Key Insights | Senior | Expert |
| Blog Post | Senior | Expert |
| Infographic Brief | Senior | Expert |
| Fact-Check Report | Expert | Admin Review |

---

### 2.4 Bulk Operations

#### US-2.13: Bulk Upload
**As an** enterprise uploader  
**I want to** upload multiple files at once  
**So that** I can process content efficiently  

**Priority:** P2  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Upload multiple files (up to 20) simultaneously
- [ ] CSV metadata file support for batch metadata
- [ ] ZIP file upload with audio + metadata
- [ ] Per-file status tracking
- [ ] Partial success handling
- [ ] Bulk pricing discounts apply
- [ ] Progress dashboard for batch

---

### 2.5 Admin Functions

#### US-2.14: Admin Comped Task Creation
**As an** admin  
**I want to** create tasks without payment  
**So that** I can test, run promotions, or fulfill partnerships  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Admin-only task creation form
- [ ] Upload audio or provide URL
- [ ] Select output types and deadlines
- [ ] Mark as "comped" with reason
- [ ] Optional direct assignment to specific creator
- [ ] No payment processed
- [ ] Appears in analytics with "comped" flag
- [ ] Audit log entry created

**API Endpoint:**
```yaml
POST /api/v1/admin/tasks
  Headers: Authorization: Bearer {admin_token}
  Request:
    audio_source: 'upload' | 'url'
    audio_url: string (if url)
    audio_file_id: uuid (if upload)
    title: string
    description: string
    output_types: uuid[]
    priority: 'standard' | 'rush' | 'express'
    comped_reason: string (required)
    assigned_creator_id: uuid (optional)
  Response: 201 Created
    upload: Upload
    assignments: Assignment[]
```

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Uploads table
CREATE TABLE uploads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    uploader_id UUID REFERENCES users(id) ON DELETE SET NULL,
    
    -- File info
    original_filename VARCHAR(255) NOT NULL,
    stored_filename VARCHAR(255) NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    checksum_md5 VARCHAR(32),
    
    -- Audio metadata
    duration_seconds INT,
    bitrate_kbps INT,
    sample_rate INT,
    channels INT,
    format VARCHAR(20),
    
    -- Storage
    audio_url VARCHAR(500),
    audio_bucket VARCHAR(100),
    audio_key VARCHAR(500),
    
    -- Transcription
    transcript_url VARCHAR(500),
    transcript_provider VARCHAR(50),
    transcript_language VARCHAR(10),
    transcript_confidence DECIMAL(4,3),
    transcript_word_count INT,
    
    -- Content metadata
    title VARCHAR(200) NOT NULL,
    description TEXT,
    tags VARCHAR(50)[],
    special_instructions TEXT,
    
    -- Processing
    status VARCHAR(30) NOT NULL DEFAULT 'uploading',
    priority VARCHAR(20) NOT NULL DEFAULT 'standard',
    processing_started_at TIMESTAMP,
    processing_completed_at TIMESTAMP,
    error_message TEXT,
    
    -- Flags
    is_comped BOOLEAN DEFAULT FALSE,
    comped_by UUID REFERENCES users(id),
    comped_reason TEXT,
    
    -- Audio retention
    audio_deletion_scheduled_at TIMESTAMP, -- Set when all assignments complete
    audio_deleted_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN (
        'uploading', 'validating', 'scanning', 'transcribing', 
        'creating_assignments', 'ready', 'processing', 'completed',
        'failed', 'cancelled'
    )),
    CONSTRAINT valid_priority CHECK (priority IN ('standard', 'rush', 'express'))
);

-- Upload chunks (for resumable uploads)
CREATE TABLE upload_chunks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    upload_id UUID REFERENCES uploads(id) ON DELETE CASCADE,
    chunk_number INT NOT NULL,
    chunk_size BIGINT NOT NULL,
    checksum_md5 VARCHAR(32),
    s3_etag VARCHAR(100),
    uploaded_at TIMESTAMP DEFAULT NOW(),
    
    UNIQUE(upload_id, chunk_number)
);

-- Transcripts (detailed storage)
CREATE TABLE transcripts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    upload_id UUID UNIQUE REFERENCES uploads(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL,
    provider_job_id VARCHAR(100),
    language_code VARCHAR(10),
    confidence_score DECIMAL(4,3),
    word_count INT,
    speaker_count INT,
    raw_response JSONB, -- Full provider response
    segments JSONB NOT NULL, -- Parsed segments with timestamps
    version INT DEFAULT 1,
    edited_by UUID REFERENCES users(id),
    edited_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Output types catalog
CREATE TABLE output_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    guidelines TEXT,
    example_url VARCHAR(500),
    
    -- Content specs
    min_words INT,
    max_words INT,
    estimated_minutes INT, -- Creator time estimate
    
    -- Pricing
    base_price DECIMAL(10,2) NOT NULL,
    creator_payout_percent DECIMAL(5,2) NOT NULL DEFAULT 65.00,
    rush_multiplier DECIMAL(3,2) DEFAULT 1.50,
    express_multiplier DECIMAL(3,2) DEFAULT 2.00,
    
    -- Access control
    min_creator_level_id UUID REFERENCES creator_levels(id),
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT NOT NULL,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Default output types
INSERT INTO output_types (name, slug, description, min_words, max_words, base_price, creator_payout_percent, estimated_minutes, display_order) VALUES
('Executive Summary', 'executive-summary', 'High-level overview capturing main points and key takeaways.', 200, 500, 15.00, 65.00, 20, 1),
('Detailed Summary', 'detailed-summary', 'Comprehensive breakdown of all topics covered.', 1000, 2000, 35.00, 65.00, 45, 2),
('Key Insights', 'key-insights', 'Analytical observations and non-obvious takeaways.', NULL, NULL, 25.00, 65.00, 30, 3),
('Reflection Questions', 'reflection-questions', 'Thought-provoking questions for deeper engagement.', NULL, NULL, 20.00, 65.00, 25, 4),
('Action Items', 'action-items', 'Practical, implementable takeaways.', NULL, NULL, 18.00, 65.00, 20, 5),
('Blog Post', 'blog-post', 'Repurposed content suitable for publishing.', 800, 1500, 50.00, 65.00, 60, 6),
('Social Media Pack', 'social-media-pack', 'Platform-ready snippets for LinkedIn, Twitter, etc.', NULL, NULL, 30.00, 65.00, 35, 7),
('Infographic Brief', 'infographic-brief', 'Structured outline for visual content creation.', NULL, NULL, 40.00, 65.00, 40, 8),
('Fact-Check Report', 'fact-check-report', 'Verification of claims with sources.', NULL, NULL, 75.00, 65.00, 90, 9);

-- Assignments
CREATE TABLE assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    upload_id UUID REFERENCES uploads(id) ON DELETE CASCADE,
    output_type_id UUID REFERENCES output_types(id),
    
    -- Assignment details
    status VARCHAR(30) NOT NULL DEFAULT 'open',
    priority VARCHAR(20) NOT NULL DEFAULT 'standard',
    deadline TIMESTAMP NOT NULL,
    
    -- Pricing (captured at creation)
    price DECIMAL(10,2) NOT NULL, -- What client paid
    creator_payout DECIMAL(10,2) NOT NULL, -- What creator earns
    
    -- Level requirement
    min_creator_level_id UUID REFERENCES creator_levels(id),
    
    -- Assignment tracking
    creator_id UUID REFERENCES users(id),
    claimed_at TIMESTAMP,
    editor_id UUID REFERENCES users(id),
    submitted_at TIMESTAMP,
    reviewed_at TIMESTAMP,
    completed_at TIMESTAMP,
    
    -- Revisions
    revision_count INT DEFAULT 0,
    max_revisions INT DEFAULT 2,
    
    -- Admin overrides
    is_comped BOOLEAN DEFAULT FALSE,
    is_priority_override BOOLEAN DEFAULT FALSE,
    assigned_by UUID REFERENCES users(id), -- For direct assignments
    
    -- Notes
    internal_notes TEXT, -- Admin only
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN (
        'open', 'claimed', 'in_progress', 'submitted', 
        'revision_requested', 'approved', 'completed', 
        'cancelled', 'abandoned', 'reassigned'
    ))
);

-- Processing events (for debugging/audit)
CREATE TABLE upload_processing_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    upload_id UUID REFERENCES uploads(id) ON DELETE CASCADE,
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB,
    error_message TEXT,
    duration_ms INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_uploads_uploader ON uploads(uploader_id);
CREATE INDEX idx_uploads_status ON uploads(status);
CREATE INDEX idx_uploads_created ON uploads(created_at DESC);
CREATE INDEX idx_assignments_upload ON assignments(upload_id);
CREATE INDEX idx_assignments_creator ON assignments(creator_id);
CREATE INDEX idx_assignments_status ON assignments(status);
CREATE INDEX idx_assignments_open ON assignments(status, min_creator_level_id) WHERE status = 'open';
CREATE INDEX idx_transcripts_upload ON transcripts(upload_id);
```

### 3.2 Audio Retention Policy

```sql
-- Audio retention: Delete audio when all assignments complete

-- Function to check if all assignments complete
CREATE OR REPLACE FUNCTION check_upload_completion() RETURNS TRIGGER AS $$
DECLARE
    all_complete BOOLEAN;
    upload_record RECORD;
BEGIN
    -- Check if all assignments for this upload are completed
    SELECT 
        NOT EXISTS (
            SELECT 1 FROM assignments 
            WHERE upload_id = NEW.upload_id 
            AND status NOT IN ('completed', 'cancelled')
        ) INTO all_complete;
    
    IF all_complete THEN
        -- Schedule audio deletion (7 days grace period)
        UPDATE uploads 
        SET audio_deletion_scheduled_at = NOW() + INTERVAL '7 days'
        WHERE id = NEW.upload_id
        AND audio_deletion_scheduled_at IS NULL;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_check_upload_completion
    AFTER UPDATE ON assignments
    FOR EACH ROW
    WHEN (NEW.status IN ('completed', 'cancelled'))
    EXECUTE FUNCTION check_upload_completion();

-- Background job to delete audio
-- Run daily: DELETE audio where audio_deletion_scheduled_at < NOW()
```

---

## 4. API Specifications

### 4.1 Upload Endpoints

```yaml
# Initiate Upload
POST /api/v1/uploads/initiate
  Headers: Authorization: Bearer {token}
  Request:
    filename: string
    file_size: number
    mime_type: string
    checksum_md5: string (optional)
  Response: 201 Created
    upload_id: uuid
    upload_url: string (presigned S3 URL)
    chunk_urls: string[] (if chunked upload needed)
    chunk_size: number
    expires_in: number (seconds)

# Upload Chunk (multipart)
PUT /api/v1/uploads/:id/chunk/:number
  Headers: 
    Authorization: Bearer {token}
    Content-Type: application/octet-stream
  Body: binary
  Response: 200 OK
    chunk_number: number
    received_bytes: number
    checksum_md5: string

# Complete Upload
POST /api/v1/uploads/:id/complete
  Headers: Authorization: Bearer {token}
  Request:
    title: string (required)
    description: string
    tags: string[]
    output_types: uuid[]
    priority: 'standard' | 'rush' | 'express'
    special_instructions: string
  Response: 200 OK
    upload: Upload
    status: 'processing'
    estimated_ready: timestamp

# Get Upload Status
GET /api/v1/uploads/:id
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    upload: Upload
    assignments: Assignment[] (if ready)
    processing_progress: {
      stage: string
      percent: number
      estimated_remaining: number
    }

# List My Uploads
GET /api/v1/uploads
  Headers: Authorization: Bearer {token}
  Query:
    status: string
    page: number
    limit: number
  Response: 200 OK
    uploads: Upload[]
    pagination: {...}

# Cancel Upload
DELETE /api/v1/uploads/:id
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    message: "Upload cancelled"

# Get Transcript
GET /api/v1/uploads/:id/transcript
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    transcript: {
      language: string
      confidence: number
      word_count: number
      segments: TranscriptSegment[]
    }

# Update Transcript
PATCH /api/v1/uploads/:id/transcript
  Headers: Authorization: Bearer {token}
  Request:
    segments: TranscriptSegment[] (edited)
  Response: 200 OK
    transcript: Transcript
    version: number
```

### 4.2 Output Types

```yaml
# List Output Types
GET /api/v1/output-types
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    output_types: [{
      id: uuid
      name: string
      slug: string
      description: string
      base_price: number
      rush_price: number
      express_price: number
      estimated_delivery_hours: number
      min_creator_level: string
    }]

# Get Output Type Details
GET /api/v1/output-types/:id
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    output_type: OutputType
    guidelines: string
    example_url: string
```

### 4.3 Admin Endpoints

```yaml
# Create Comped Task
POST /api/v1/admin/tasks
  Headers: Authorization: Bearer {admin_token}
  Request:
    audio_source: 'upload' | 'url' | 'existing'
    audio_url: string
    existing_upload_id: uuid
    title: string
    description: string
    output_types: uuid[]
    priority: string
    comped_reason: string
    assigned_creator_id: uuid
  Response: 201 Created
    upload: Upload
    assignments: Assignment[]

# Reassign Task
POST /api/v1/admin/assignments/:id/reassign
  Headers: Authorization: Bearer {admin_token}
  Request:
    new_creator_id: uuid
    extend_deadline_hours: number
    reason: string
  Response: 200 OK
    assignment: Assignment
    previous_creator_id: uuid

# Force Status Change
POST /api/v1/admin/uploads/:id/status
  Headers: Authorization: Bearer {admin_token}
  Request:
    status: string
    reason: string
  Response: 200 OK
    upload: Upload
```

---

## 5. Processing Pipeline

### 5.1 Upload Processing Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Upload    │────►│  Validate   │────►│   Virus     │
│   Receive   │     │   Format    │     │    Scan     │
└─────────────┘     └──────┬──────┘     └──────┬──────┘
                          │                    │
                    ┌─────▼─────┐        ┌─────▼─────┐
                    │  Invalid  │        │  Infected │
                    │  Reject   │        │  Quarantine│
                    └───────────┘        └───────────┘
                                               │
┌─────────────┐     ┌─────────────┐     ┌─────▼─────┐
│    Ready    │◄────│   Create    │◄────│Transcribe │
│             │     │ Assignments │     │           │
└─────────────┘     └─────────────┘     └───────────┘
```

### 5.2 Worker Implementation

```javascript
// upload-processor.worker.js

const processingPipeline = [
  { name: 'validate', handler: validateFile },
  { name: 'scan', handler: scanForVirus },
  { name: 'transcribe', handler: transcribeAudio },
  { name: 'create_assignments', handler: createAssignments }
];

async function processUpload(uploadId) {
  const upload = await db.uploads.findById(uploadId);
  
  for (const stage of processingPipeline) {
    try {
      await updateStatus(uploadId, stage.name + '_started');
      const startTime = Date.now();
      
      await stage.handler(upload);
      
      await logEvent(uploadId, stage.name + '_completed', {
        duration_ms: Date.now() - startTime
      });
      
    } catch (error) {
      await updateStatus(uploadId, 'failed', error.message);
      await logEvent(uploadId, stage.name + '_failed', { error: error.message });
      throw error;
    }
  }
  
  await updateStatus(uploadId, 'ready');
  await notifyUploader(upload.uploader_id, uploadId);
}

async function validateFile(upload) {
  const audio = await ffprobe(upload.audio_url);
  
  if (!ALLOWED_FORMATS.includes(audio.format)) {
    throw new ValidationError('Unsupported audio format');
  }
  
  if (audio.duration > MAX_DURATION) {
    throw new ValidationError(`Audio exceeds ${MAX_DURATION/3600} hour limit`);
  }
  
  if (audio.bitrate < MIN_BITRATE) {
    throw new ValidationError('Audio quality too low');
  }
  
  // Update metadata
  await db.uploads.update(upload.id, {
    duration_seconds: audio.duration,
    bitrate_kbps: audio.bitrate,
    sample_rate: audio.sample_rate,
    channels: audio.channels
  });
}

async function scanForVirus(upload) {
  const result = await clamav.scan(upload.audio_url);
  
  if (result.infected) {
    await quarantineFile(upload);
    await alertSecurityTeam(upload, result);
    throw new SecurityError('File failed security scan');
  }
}

async function transcribeAudio(upload) {
  const transcript = await assemblyAI.transcribe({
    audio_url: upload.audio_url,
    speaker_labels: true,
    language_detection: true
  });
  
  await db.transcripts.create({
    upload_id: upload.id,
    provider: 'assemblyai',
    provider_job_id: transcript.id,
    language_code: transcript.language,
    confidence_score: transcript.confidence,
    word_count: transcript.words.length,
    segments: formatSegments(transcript.utterances)
  });
  
  await db.uploads.update(upload.id, {
    transcript_url: transcript.text_url,
    transcript_provider: 'assemblyai',
    transcript_language: transcript.language,
    transcript_confidence: transcript.confidence,
    transcript_word_count: transcript.words.length
  });
}
```

### 5.3 Transcription Cost Analysis

| Provider | Cost/Minute | 100 Hours/Month | Notes |
|----------|-------------|-----------------|-------|
| AssemblyAI | $0.0025/sec ($0.15/min) | $900 | Best accuracy, real-time |
| OpenAI Whisper | $0.006/min | $36 | Batch processing |
| Google Cloud | $0.024/min (standard) | $144 | Good for non-English |
| AWS Transcribe | $0.024/min | $144 | AWS ecosystem |

**Recommendation:** AssemblyAI for quality, Whisper API for cost efficiency

---

## 6. Storage Architecture

### 6.1 S3 Bucket Structure

```
podcast-platform-uploads/
├── raw/                        # Original uploads
│   └── {year}/{month}/{day}/
│       └── {upload_id}/
│           └── original.{ext}
├── processed/                  # Validated/converted
│   └── {year}/{month}/{day}/
│       └── {upload_id}/
│           ├── audio.mp3      # Standardized format
│           └── waveform.json  # For audio player
├── transcripts/                # Transcript files
│   └── {upload_id}/
│       ├── v1.json
│       └── v2.json            # Edited versions
└── temp/                       # Chunked uploads (auto-cleanup)
    └── {upload_id}/
        ├── chunk_0
        ├── chunk_1
        └── ...
```

### 6.2 Retention Policy

| Content Type | Retention Period | Trigger |
|--------------|------------------|---------|
| Raw audio | Until QA complete + 7 days | All assignments completed |
| Processed audio | Until QA complete + 7 days | All assignments completed |
| Transcripts | Indefinite | Content may be needed for disputes |
| Temp chunks | 24 hours | Auto-cleanup job |

**Audio Deletion Flow:**
1. All assignments for upload reach `completed` status
2. System schedules deletion for 7 days later
3. Daily job deletes scheduled files from S3
4. Database updated: `audio_deleted_at = NOW()`
5. Transcript preserved for reference

---

## 7. Error Handling

### 7.1 Error Categories

| Category | Example | User Message | Action |
|----------|---------|--------------|--------|
| Validation | Wrong format | "This file format is not supported. Please upload MP3, WAV, or M4A." | Show format list |
| Size | Too large | "File exceeds 500MB limit. Please compress or split your audio." | Suggest tools |
| Duration | Too long | "Audio exceeds 4 hour limit." | Suggest splitting |
| Security | Virus | "File could not be processed for security reasons." | No details given |
| Transcription | API error | "We couldn't transcribe this audio. Retrying..." | Auto-retry 3x |
| System | Infrastructure | "Something went wrong. We're looking into it." | Alert team |

### 7.2 Retry Strategy

```javascript
const retryConfig = {
  transcription: {
    maxRetries: 3,
    backoff: 'exponential',
    baseDelay: 1000,
    maxDelay: 30000
  },
  upload: {
    maxRetries: 5,
    backoff: 'linear',
    baseDelay: 500
  }
};
```

---

## 8. Testing Requirements

### 8.1 Unit Tests
- File validation logic
- Price calculation
- Deadline calculation
- Assignment creation logic

### 8.2 Integration Tests
- Complete upload flow
- Transcription mock integration
- Assignment routing

### 8.3 Performance Tests
- 500MB file upload
- 100 concurrent uploads
- Transcription queue processing

---

## 9. Implementation Checklist

### Week 1-2: Core Upload
- [ ] Database schema
- [ ] S3 bucket setup
- [ ] Chunked upload API
- [ ] File validation

### Week 3-4: Processing
- [ ] Virus scanning integration
- [ ] Transcription integration
- [ ] Processing pipeline
- [ ] Status WebSocket

### Week 5-6: Assignments
- [ ] Output types catalog
- [ ] Assignment creation
- [ ] Level-based routing
- [ ] Notification triggers

### Week 7-8: Polish
- [ ] Bulk upload
- [ ] Admin tools
- [ ] Audio retention jobs
- [ ] Error handling

---

*Document Version: 1.0*  
*Last Updated: December 2024*  
*Next Review: Before Sprint 1*
