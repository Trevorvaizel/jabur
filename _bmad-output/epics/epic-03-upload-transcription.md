## Epic 3: Content Upload & Transcription Pipeline

**Epic Goal:** Enable uploaders to upload audio files and receive automated transcriptions ready for creator assignment.

**FRs Covered:** FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR75

### Story 3.1: Multipart Audio Upload with Resume Capability

As an uploader,
I want to upload large audio files with automatic resume on failure,
So that I can reliably upload files up to 500MB and 3 hours duration.

**Acceptance Criteria:**

**Given** I am a logged-in uploader
**When** I upload an audio file
**Then** file size validation accepts files up to 500MB
**And** file type validation accepts MP3, M4A, WAV, FLAC formats
**And** duration validation accepts files up to 3 hours
**And** multipart upload chunks file into 5MB segments
**And** each chunk upload is tracked in database with chunk number and ETag
**And** upload progress is displayed to user (0-100%)
**And** if upload fails, user can resume from last successful chunk
**And** resume functionality reads chunk tracking records from database
**And** completed upload triggers S3 multipart complete API call
**And** S3 object is tagged with `lifecycle=7days` for auto-deletion
**And** upload completion creates UploadRecord in database with S3 key, bucket, and CloudFront URL
**And** zero data loss: all chunks are verified before marking upload complete

---

### Story 3.2: Output Format Selection (9 Options)

As an uploader,
I want to select one or more output formats for my audio content,
So that I receive the specific content types I need.

**Acceptance Criteria:**

**Given** I have uploaded an audio file
**When** I select output formats
**Then** I can select from 9 format options:
  - Executive Summaries
  - Key Insights
  - Action Items
  - Reflection Questions
  - Social Media Packs
  - Blog Posts
  - Fact-Check Reports
  - Show Notes
  - Newsletter Segments
**And** I can select multiple formats (multi-select checkboxes)
**And** at least one format must be selected (validation)
**And** each format has a description tooltip explaining what it includes
**And** format selection is stored in database linked to upload
**And** format selection creates separate Task records for each selected format
**And** form validation prevents submission without at least one format selected

---

### Story 3.3: Turnaround Tier Selection and Pricing

As an uploader,
I want to select a turnaround tier for my content,
So that I can balance speed and cost based on my needs.

**Acceptance Criteria:**

**Given** I have selected output formats
**When** I select turnaround tier
**Then** I can choose from 3 tier options:
  - Standard (24-48 hours): base pricing
  - Rush (+50% premium): 12-24 hours
  - Express (+100% premium): 4-8 hours
**And** tier selection displays estimated delivery timeframe
**And** tier selection displays pricing (base price + tier multiplier)
**And** pricing calculation: base_price_per_format × format_count × tier_multiplier
**And** tier selection is stored in database
**And** tier determines which creators can see the task (tier qualification filter)
**And** default selection is Standard tier
**And** tier pricing is clearly labeled (no hidden fees)

---

### Story 3.4: AssemblyAI Transcription Processing

As the system,
I want to process audio transcription using AssemblyAI as primary provider,
So that transcripts are generated within 15 minutes for 500MB files.

**Acceptance Criteria:**

**Given** an audio file is uploaded and formats/tier are selected
**When** transcription processing begins
**Then** BullMQ job `transcription-processing` is enqueued
**And** job payload includes: S3 key, upload ID, CloudFront URL
**And** AssemblyAI client uploads audio from S3 URL
**And** AssemblyAI transcription request includes:
  - `speaker_labels: true` (diarization)
  - `auto_highlights: true`
  - `entity_detection: true`
  - `sentiment_analysis: true`
**And** webhook callback URL is provided: `/api/webhooks/assemblyai`
**And** job polls AssemblyAI status every 30 seconds if webhook fails
**And** transcription completes within 15 minutes for files up to 500MB
**And** transcript text is stored in database
**And** transcript metadata (speakers, highlights, entities) is stored as JSON
**And** job retries 3 times with exponential backoff on failure
**And** after 3 failures, job triggers Whisper failover

---

### Story 3.5: Whisper Failover for Transcription

As the system,
I want to automatically failover to OpenAI Whisper if AssemblyAI fails,
So that transcription reliability meets 99% SLA.

**Acceptance Criteria:**

**Given** AssemblyAI transcription has failed 3 times
**When** failover logic executes
**Then** system logs AssemblyAI failure to monitoring service
**And** BullMQ job `whisper-transcription` is enqueued
**And** Whisper API receives audio file from S3 CloudFront URL
**And** Whisper request includes: `model: whisper-1`, `language: en`
**And** Whisper transcript is received and stored in database
**And** transcript format is normalized to match AssemblyAI schema
**And** Whisper transcript lacks speaker labels (single speaker assumed)
**And** failover event is logged in audit trail
**And** admin alert is sent when failover occurs (integration health monitoring)
**And** if Whisper also fails, upload is marked as `transcription_failed`
**And** user receives notification of transcription failure with support contact

---

### Story 3.6: Timestamp-Aligned Transcript Generation

As a creator,
I want transcripts with timestamp alignment,
So that I can navigate audio by clicking transcript text.

**Acceptance Criteria:**

**Given** AssemblyAI or Whisper has completed transcription
**When** transcript is processed
**Then** transcript is split into utterances with timestamps
**And** each utterance has: `start_time`, `end_time`, `text`, `speaker_label`
**And** utterances are stored in database as JSON array
**And** transcript viewer displays utterances in chronological order
**And** clicking an utterance seeks audio player to `start_time`
**And** audio playback highlights current utterance based on playback position
**And** utterance timestamps are accurate within ±500ms
**And** empty or silent segments are excluded from transcript
**And** speaker labels distinguish multiple speakers (AssemblyAI only)
**And** Whisper transcripts use single speaker label ("Speaker 1")

---

### Story 3.7: Task Creation and Creator Queue Routing

As the system,
I want to create Task records and route them to the creator queue,
So that creators can discover and claim available tasks.

**Acceptance Criteria:**

**Given** transcription is complete
**When** Task records are created
**Then** one Task record is created for each selected output format
**And** Task record includes:
  - `uploaderId`: uploader ID
  - `audioS3Key`: S3 object key
  - `transcriptId`: foreign key to transcript
  - `outputFormat`: selected format
  - `tier`: selected tier (Standard/Rush/Express)
  - `status`: AVAILABLE
  - `createdAt`: timestamp
  - `deadline`: calculated from tier (Standard: +48hrs, Rush: +24hrs, Express: +8hrs)
**And** Task is visible in creator queue filtered by tier qualification
**And** creators below tier qualification level cannot see higher-tier tasks
**And** Task sorting: deadline ascending (urgent tasks first)
**And** Task card displays: format, tier, deadline, estimated payout
**And** uploader identity is hidden from creators (role blindness)

---

### Story 3.8: Real-Time Task Status Updates via Socket.io

As an uploader,
I want to see real-time task status updates,
So that I know when transcription completes and tasks are assigned to creators.

**Acceptance Criteria:**

**Given** I have uploaded audio and selected formats/tier
**When** task status changes
**Then** Socket.io event is emitted to uploader room: `task:status-updated`
**And** event payload includes: `taskId`, `status`, `timestamp`
**And** status changes are propagated within 5 seconds (NFR-P5)
**And** uploader dashboard updates task status without page refresh
**And** status progression: UPLOADING → TRANSCRIBING → AVAILABLE → CLAIMED → IN_PROGRESS → SUBMITTED → IN_QA → APPROVED/REJECTED → DELIVERED
**And** each status change triggers Socket.io event
**And** Socket.io uses Redis adapter for multi-instance broadcasting
**And** disconnected clients receive status updates on reconnect (event replay)
**And** uploader sees progress indicators for each stage
**And** notifications are sent via Socket.io AND stored in database for offline access

---

### Story 3.9: Audio Auto-Deletion (7-Day Lifecycle)

As the system,
I want to automatically delete audio files after 7 days,
So that storage costs are minimized and compliance requirements are met.

**Acceptance Criteria:**

**Given** audio files are uploaded to S3
**When** S3 lifecycle policy executes
**Then** S3 objects tagged with `lifecycle=7days` are auto-deleted after 7 days
**And** S3 lifecycle rule is configured at bucket level
**And** deletion occurs automatically without manual intervention
**And** deletion is permanent (objects cannot be recovered)
**And** UploadRecord in database is updated with `audioDeletedAt` timestamp
**And** attempts to access deleted audio return 404 error
**And** creators can still access audio during 7-day window for task completion
**And** active tasks with unclaimed or in-progress status prevent deletion (grace period)
**And** BullMQ job `check-audio-retention` (daily) logs upcoming deletions
**And** admin can manually extend retention for specific uploads (legal hold)

---

### Story 3.10: Transcript Auto-Deletion (30-Day Lifecycle)

As the system,
I want to automatically delete transcripts after 30 days,
So that storage costs are minimized and compliance requirements are met.

**Acceptance Criteria:**

**Given** transcripts are stored in database
**When** BullMQ job `cleanup-transcripts` runs daily
**Then** transcripts older than 30 days are deleted
**And** deletion query: `DELETE FROM Transcript WHERE createdAt < NOW() - INTERVAL '30 days'`
**And** cascade delete removes associated utterances and metadata
**And** active tasks prevent transcript deletion (grace period until task delivered)
**And** delivered tasks allow transcript deletion after 30 days
**And** active disputes prevent transcript deletion (NFR-C9)
**And** legal hold flag prevents transcript deletion
**And** deletion is logged in audit trail with timestamp and record count
**And** job runs at 2 AM UTC daily (off-peak hours)
**And** job reports deletion metrics to monitoring service

---

### Story 3.11: AssemblyAI Webhook Handler Integration

As the system,
I want to receive AssemblyAI webhooks when transcription completes,
So that transcript processing completes automatically without polling.

**Acceptance Criteria:**

**Given** AssemblyAI is configured (Story 1.10) and audio uploads trigger transcription jobs
**When** AssemblyAI webhook fires upon transcription completion
**Then** webhook endpoint `/api/webhooks/assemblyai` receives POST request
**And** webhook validates AssemblyAI signature using secret key for security
**And** webhook payload is parsed: `{ transcript_id, status: 'completed' | 'error', text, utterances, confidence }`
**And** if `status === 'completed'`, transcript is saved to database: `Transcript { audioId, text, utterances, confidence, processingTime }`
**And** if `status === 'error'`, failover to Whisper API is triggered (Story 3.5 circuit breaker)
**And** task status is updated: `Task { status: 'TRANSCRIPTION_COMPLETE', transcriptId }`
**And** Socket.io event emitted to uploader: `{ event: 'transcription:complete', taskId, duration }`
**And** BullMQ job removes audio from pending transcription queue
**And** webhook responds with 200 OK within 5 seconds to prevent AssemblyAI retries
**And** failed webhook processing is logged with full error stack and queued for manual retry
**And** webhook idempotency is enforced: duplicate `transcript_id` webhooks are ignored (check database before processing)
**And** meets NFR-P4 (transcription completes within 15 minutes)

---

