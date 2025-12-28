## Epic 9: Compliance & Data Management

**Goal:** Ensure platform meets GDPR, CCPA, and data privacy requirements with automated retention policies, user privacy controls, encryption standards, and fraud prevention mechanisms to protect user data and maintain regulatory compliance.

**FRs covered:** FR6-FR8, FR15-FR16, FR57-FR60, FR63, FR66-FR72, NFR-C1 through NFR-C13

### Story 9.1: Self-Service Data Export (GDPR/CCPA)

As a user,
I want to export all my personal data in machine-readable format,
So that I can exercise my GDPR/CCPA data portability rights.

**Acceptance Criteria:**

**Given** I am authenticated as any role (uploader, creator, QA editor, admin)
**When** I navigate to Account Settings > Privacy > Export My Data
**Then** export request form displays with format options: JSON, CSV
**And** format selection is required (radio buttons: JSON or CSV)
**And** export request creates background job: `{ userId, format, requestedAt, status: 'pending' }`
**And** user receives confirmation: "Your data export has been requested. You'll receive an email with download link within 15 minutes."
**And** background job (BullMQ) aggregates all user data across tables: profile, tasks, submissions, payments, messages, audit logs
**And** for uploaders: includes upload history, task requests, payments, delivered content
**And** for creators: includes claimed tasks, submissions, QA scores, earnings, tier progression history
**And** for QA editors: includes review history, scores given, override actions
**And** for admins: includes admin actions, dispute resolutions, comped batches created
**And** JSON export structure: `{ user: {...}, tasks: [...], payments: [...], auditLogs: [...] }`
**And** CSV export generates multiple files in ZIP: `user.csv`, `tasks.csv`, `payments.csv`, `audit_logs.csv`
**And** export job completes within 15 minutes (per NFR-C1)
**And** download link is emailed to user: "Your data export is ready. Download expires in 7 days."
**And** download link uses signed S3 URL with 7-day expiration
**And** export file is automatically deleted after 7 days
**And** export request is logged: `{ userId, format, exportedAt, downloadedAt, ipAddress }`
**And** users can request export once per 30 days (rate limiting to prevent abuse)
**And** meets FR7, NFR-C1, NFR-C5, NFR-C6

### Story 9.2: Account Deletion with 30-Day Purge

As a user,
I want to request account deletion with complete data purge,
So that I can exercise my GDPR right to be forgotten.

**Acceptance Criteria:**

**Given** I am authenticated as any role
**When** I navigate to Account Settings > Privacy > Delete Account
**Then** deletion warning displays: "This action cannot be undone. All your data will be permanently deleted within 30 days. Active tasks will be cancelled."
**And** user must confirm understanding: checkbox "I understand this action is permanent and cannot be reversed"
**And** user must provide deletion reason (dropdown): "No longer need service", "Privacy concerns", "Switching to competitor", "Other"
**And** user must re-authenticate with password (security confirmation)
**And** deletion request creates DeletionRequest record: `{ userId, reason, requestedAt, scheduledPurgeDate: requestedAt + 30 days, status: 'pending' }`
**And** user account is immediately soft-deleted: `{ deletedAt, status: 'pending_deletion' }`
**And** soft-deleted users cannot log in (session invalidated, future login attempts blocked)
**And** user receives confirmation email: "Your account deletion has been scheduled. Data will be purged on [date]. To cancel, click this link within 30 days."
**And** cancellation link allows user to restore account within 30-day grace period
**And** during 30-day grace period, data is retained but account is inaccessible
**And** after 30 days, purge job executes: deletes all user data across tables (profile, tasks, uploads, submissions, messages, audit logs)
**And** payment records are RETAINED for 7 years (tax compliance per FR70, NFR-C8) but PII is anonymized: `{ userId: 'deleted_user_<hash>', amount, date }`
**And** active dispute data is EXEMPTED from deletion until resolution (per FR71, NFR-C9)
**And** purge job logs completion: `{ userId, purgedAt, tablesAffected, recordsDeleted }`
**And** purge verification audit trail is created for compliance: `{ userId, deletionRequestedAt, purgedAt, verificationStatus: 'complete' }`
**And** meets FR6, FR67, NFR-C2, NFR-C8, NFR-C9

### Story 9.3: Cookie Consent Management (GDPR)

As an EU visitor,
I want to manage cookie consent preferences,
So that I can control data collection per GDPR requirements.

**Acceptance Criteria:**

**Given** I visit the platform for the first time
**When** page loads
**Then** cookie consent banner displays at bottom of page (non-blocking, dismissible)
**And** banner text: "We use cookies to improve your experience. Essential cookies are required for functionality. You can customize optional cookies."
**And** banner buttons: "Accept All", "Reject Optional", "Customize"
**And** clicking "Accept All" sets consent: `{ essential: true, analytics: true, marketing: true }`
**And** clicking "Reject Optional" sets consent: `{ essential: true, analytics: false, marketing: false }`
**And** clicking "Customize" opens preference modal with toggles: Essential (always on, disabled toggle), Analytics (optional toggle), Marketing (optional toggle)
**And** Essential cookies description: "Required for authentication, session management, and core functionality"
**And** Analytics cookies description: "Help us understand how you use the platform (Google Analytics, Mixpanel)"
**And** Marketing cookies description: "Used for advertising and retargeting (Google Ads, Facebook Pixel)"
**And** consent preferences are saved to localStorage: `{ consentGiven: true, preferences: {...}, timestamp }`
**And** consent preferences are also saved to database (if user authenticated): `users.cookie_consent`
**And** analytics scripts (Google Analytics, Mixpanel) only load if analytics consent given
**And** marketing scripts (Google Ads, Facebook Pixel) only load if marketing consent given
**And** users can change preferences anytime: Account Settings > Privacy > Cookie Preferences
**And** consent banner respects geolocation: only shows for EU visitors (IP-based detection or browser language)
**And** consent is re-requested every 12 months (expiration)
**And** Privacy Policy link is prominently displayed in banner
**And** meets FR68, NFR-C3, NFR-C4

### Story 9.4: Auto-Delete Audio Files After 7 Days

As the system,
I want to automatically delete audio files after 7 days,
So that I can minimize storage costs and comply with data retention policy.

**Acceptance Criteria:**

**Given** audio files are uploaded and transcribed
**When** daily cleanup job runs at 2 AM UTC
**Then** job queries audio files older than 7 days: `SELECT * FROM audio_files WHERE uploadedAt < NOW() - INTERVAL '7 days' AND status = 'transcribed'`
**And** job checks if audio is involved in active dispute (per FR71, NFR-C9): `JOIN disputes ON disputes.audioId = audio_files.id WHERE disputes.status = 'open'`
**And** disputed audio files are EXEMPTED from deletion (skipped by job)
**And** non-disputed audio files are deleted from S3: `await s3.deleteObject({ Bucket, Key })`
**And** audio_files record is updated: `{ deletedAt, status: 'deleted', s3Key: null }`
**And** database record is soft-deleted (metadata retained for audit trail)
**And** deletion is logged: `{ audioId, uploaderId, deletedAt, reason: 'retention_policy_7_days', s3Size }`
**And** if S3 deletion fails, job retries 3 times with exponential backoff
**And** failed deletions are logged for manual review: `{ audioId, error, retryCount }`
**And** job tracks metrics: files deleted, storage freed, failed deletions
**And** admin dashboard displays cleanup metrics: "Audio cleanup: 142 files deleted (18.3 GB freed) in last 24 hours"
**And** meets FR15, NFR-C7, NFR-C9

### Story 9.5: Auto-Delete Transcripts and Submissions After 30 Days

As the system,
I want to automatically delete transcripts and creator submissions after 30 days,
So that I can comply with data minimization principles.

**Acceptance Criteria:**

**Given** transcripts and submissions exist
**When** daily cleanup job runs at 2 AM UTC
**Then** job queries transcripts older than 30 days: `SELECT * FROM transcripts WHERE createdAt < NOW() - INTERVAL '30 days'`
**And** job queries creator submissions older than 30 days: `SELECT * FROM submissions WHERE submittedAt < NOW() - INTERVAL '30 days'`
**And** job checks if data is involved in active dispute (per FR71, NFR-C9)
**And** disputed transcripts/submissions are EXEMPTED from deletion
**And** non-disputed transcripts are deleted: `UPDATE transcripts SET deletedAt = NOW(), content = null, status = 'deleted'`
**And** non-disputed submissions are deleted: `UPDATE submissions SET deletedAt = NOW(), content = null, status = 'deleted'`
**And** metadata is retained for audit trail: `{ id, taskId, creatorId, submittedAt, qaScore, deletedAt }`
**And** deletion is logged: `{ transcriptId, taskId, deletedAt, reason: 'retention_policy_30_days' }`
**And** job tracks metrics: transcripts deleted, submissions deleted
**And** admin dashboard displays cleanup metrics: "Transcript cleanup: 89 transcripts deleted. Submission cleanup: 76 submissions deleted."
**And** meets FR16, NFR-C7, NFR-C9

### Story 9.6: Auto-Delete Delivered Content After 90 Days

As the system,
I want to automatically delete delivered content after 90 days,
So that I can comply with data retention policy while allowing reasonable access window.

**Acceptance Criteria:**

**Given** content has been delivered to uploaders
**When** weekly cleanup job runs every Sunday at 3 AM UTC
**Then** job queries delivered content older than 90 days: `SELECT * FROM tasks WHERE status = 'delivered' AND deliveredAt < NOW() - INTERVAL '90 days'`
**And** job checks if task is involved in active dispute (per FR71, NFR-C9)
**And** disputed tasks are EXEMPTED from deletion
**And** non-disputed delivered content is deleted from S3: `await s3.deleteObject({ Bucket, Key: deliverable.s3Key })`
**And** task deliverable record is updated: `{ deletedAt, s3Key: null, status: 'archived' }`
**And** task metadata is retained: `{ id, uploaderId, creatorId, qaScore, deliveredAt, deletedAt }`
**And** deletion is logged: `{ taskId, uploaderId, deletedAt, reason: 'retention_policy_90_days' }`
**And** uploaders receive notification before deletion (7-day warning): "Your delivered content for Task #1234 will be deleted in 7 days. Download now if you need to keep it."
**And** warning email includes download link for final retrieval
**And** job tracks metrics: deliverables deleted, storage freed
**And** meets FR69, NFR-C7, NFR-C9

### Story 9.7: Retain Payment Records for 7 Years

As the system,
I want to retain payment records for 7 years,
So that I comply with IRS and EU tax authority requirements.

**Acceptance Criteria:**

**Given** payment transactions are processed
**When** payment record is created
**Then** record includes: `{ id, userId, amount, paymentMethod, status, createdAt, taxYear, retentionExpiresAt: createdAt + 7 years }`
**And** retentionExpiresAt is automatically calculated: `CURRENT_DATE + INTERVAL '7 years'`
**And** payment records are NEVER deleted by automated cleanup jobs (exempted from deletion)
**And** if user requests account deletion (FR6), payment records are RETAINED but PII is anonymized: `{ userId: 'deleted_user_<hash>', email: 'redacted@example.com', name: 'REDACTED' }`
**And** anonymization retains: amount, date, paymentMethod, taxYear (required for tax compliance)
**And** anonymization removes: email, name, address, phone (PII)
**And** after 7 years, purge job deletes payment records: `DELETE FROM payments WHERE retentionExpiresAt < NOW()`
**And** 7-year purge job runs quarterly (not daily, to reduce load)
**And** purge is logged: `{ paymentId, userId, purgedAt, reason: 'tax_retention_expired_7_years' }`
**And** admin can manually extend retention for audited records: "Extend retention due to active IRS audit"
**And** meets FR70, NFR-C8

### Story 9.8: Legal Hold and Dispute Data Exemption

As the system,
I want to support legal hold capability and exempt dispute data from deletion,
So that I can preserve evidence for legal proceedings and dispute resolution.

**Acceptance Criteria:**

**Given** data is subject to legal hold or active dispute
**When** admin places legal hold on user account
**Then** admin navigates to Admin Dashboard > Legal Holds > Create Legal Hold
**And** form includes: User Account (search), Reason (required, 500 char max), Case Number (optional), Expiration Date (optional)
**And** legal hold creates LegalHold record: `{ userId, reason, caseNumber, createdBy: adminId, createdAt, expiresAt, status: 'active' }`
**And** legal hold EXEMPTS all user data from automated deletion jobs
**And** deletion jobs check for legal hold before deleting: `WHERE NOT EXISTS (SELECT 1 FROM legal_holds WHERE userId = users.id AND status = 'active')`
**And** legal hold notification is sent to ops team: "Legal hold placed on user [email]. All data preservation active."
**And** admin can view active legal holds: table with user, reason, case number, created date, expiration
**And** admin can release legal hold: status changes to 'released', data becomes eligible for normal retention policies
**And** legal hold release is logged: `{ legalHoldId, releasedBy: adminId, releasedAt, reason }`
**And** dispute data exemption logic: all cleanup jobs check `JOIN disputes ON ... WHERE disputes.status != 'resolved'`
**And** disputed audio, transcripts, submissions, deliverables are skipped by deletion jobs
**And** after dispute resolution (status: 'resolved'), data becomes eligible for deletion per normal retention policies
**And** meets FR71, FR72, NFR-C9, NFR-C10

### Story 9.9: Enforce TLS 1.3 and AES-256 Encryption

As the system,
I want to enforce TLS 1.3 for data in transit and AES-256 for data at rest,
So that I protect user data per security requirements.

**Acceptance Criteria:**

**Given** platform is deployed to production
**When** configuring web server and database encryption
**Then** HTTPS is enforced for all connections: HTTP requests redirect to HTTPS (301 permanent redirect)
**And** TLS 1.3 is minimum allowed version: `ssl_protocols TLSv1.3;` (nginx) or equivalent
**And** TLS 1.2 and below are disabled (reject connections)
**And** SSL certificate is valid and auto-renewing (Let's Encrypt or AWS ACM)
**And** HSTS header is set: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
**And** database connections use TLS: `?sslmode=require` (PostgreSQL) or Railway enforced encryption
**And** database encryption at rest is enabled: AES-256 (Railway platform default or AWS RDS encryption)
**And** S3 bucket encryption is enabled: SSE-S3 (AES-256) for all uploaded files
**And** S3 bucket policy enforces encryption: deny PutObject if encryption header missing
**And** Redis connections use TLS: `rediss://` protocol (Railway platform default)
**And** environment variables with secrets are encrypted at rest (Railway secrets or AWS Secrets Manager)
**And** API keys, JWT secrets, database passwords are stored encrypted, never plaintext
**And** security headers are configured: `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
**And** encryption settings are validated in CI/CD: deployment fails if TLS 1.3 not enforced
**And** monthly security audit verifies encryption standards (automated scan)
**And** meets FR63, NFR-S1, NFR-S2

### Story 9.10: Device Fingerprinting and Email Normalization

As the system,
I want to capture device fingerprints and normalize email addresses,
So that I can prevent duplicate accounts and detect fraud.

**Acceptance Criteria:**

**Given** user is creating a new account
**When** registration form is submitted
**Then** client-side fingerprinting library (e.g., FingerprintJS) captures device signature: `{ visitorId, confidence, components: {...} }`
**And** device fingerprint is sent to server with registration request
**And** server stores fingerprint: `users.device_fingerprint = visitorId`
**And** email normalization removes Gmail tricks: dots, plus-addressing
**And** normalization examples: `john.doe+spam@gmail.com` → `johndoe@gmail.com`
**And** normalization handles: `Jane.Doe@Gmail.COM` → `janedoe@gmail.com` (lowercase, remove dots)
**And** normalized email is stored: `users.email_normalized = normalizeEmail(email)`
**And** duplicate detection checks normalized email: `SELECT * FROM users WHERE email_normalized = ?`
**And** duplicate detection checks device fingerprint: `SELECT * FROM users WHERE device_fingerprint = ?`
**And** if normalized email exists OR device fingerprint matches existing account, registration is flagged
**And** flagged registrations display warning: "An account with this email already exists. Did you forget your password?"
**And** admin can review flagged registrations: Admin Dashboard > Fraud Detection > Flagged Registrations
**And** flagged registrations create FlaggedRegistration record: `{ email, deviceFingerprint, matchType: 'email'|'device'|'both', createdAt }`
**And** admin can: approve (allow duplicate for legitimate reasons), reject (block registration), investigate
**And** meets FR8, FR57, FR58, NFR-S10, NFR-S11

### Story 9.11: Multi-Account Detection and Role Separation

As the system,
I want to detect multi-account creation attempts and enforce role separation,
So that I prevent users from gaming the system as both client and creator.

**Acceptance Criteria:**

**Given** user attempts to create multiple accounts
**When** system detects suspicious patterns
**Then** daily fraud detection job analyzes account creation patterns
**And** job detects: multiple accounts with same device fingerprint within 24 hours
**And** job detects: multiple accounts with same payment method (Stripe customer ID, M-Pesa phone)
**And** job detects: multiple accounts from same IP address within 24 hours (>3 accounts)
**And** job detects: user attempts to create both uploader and creator accounts (role conflict)
**And** detected multi-account attempts create MultiAccountFlag record: `{ accountIds: [...], detectionReason, severity, detectedAt }`
**And** high-severity flags (same device + same payment method) trigger admin alert
**And** admin reviews multi-account flags: Admin Dashboard > Fraud Detection > Multi-Account Detection
**And** admin can: merge accounts (if legitimate, e.g., accidental duplicate), suspend duplicate accounts, dismiss as false positive
**And** role separation enforcement: middleware checks user role on every request
**And** role separation prevents: uploaders from accessing `/creator/*` routes, creators from accessing `/client/*` routes
**And** database RLS policies enforce role isolation: `CREATE POLICY creator_isolation ON tasks FOR SELECT USING (auth.role() = 'creator')`
**And** RLS policies prevent creators from seeing client data: `client_name`, `client_pricing`, `platform_margin`
**And** RLS policies prevent uploaders from seeing creator identity: creator appears as "jabur" entity
**And** API endpoints validate role before returning data: `if (user.role !== 'creator') throw Forbidden()`
**And** role separation is tested in E2E tests: creator cannot access client endpoints (403 Forbidden)
**And** meets FR59, FR60, FR61, FR62, NFR-S5, NFR-S6, NFR-S12
