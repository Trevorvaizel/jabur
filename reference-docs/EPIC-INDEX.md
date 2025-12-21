# AI Podcast Platform - Epic Documents Index

**Generated:** December 2024  
**Total Epics:** 11  
**Total Documentation:** ~330KB  

---

## Quick Reference

| Epic | Name | Priority | Est. Effort | Status |
|------|------|----------|-------------|--------|
| 01 | User Management & Authentication | P0 | 8-10 weeks | Ready |
| 02 | Content Upload & Processing | P0 | 6-8 weeks | Ready |
| 03 | Creator Workspace | P0 | 6-8 weeks | Ready |
| 04 | QA Review System | P0 | 4-6 weeks | Ready |
| 05 | Payments & Compensation | P0 | 6-8 weeks | Ready |
| 06 | Notifications & Communication | P1 | 4-5 weeks | Ready |
| 07 | Analytics & Reporting | P1 | 4-6 weeks | Ready |
| 08 | Admin Task Management | P1 | 3-4 weeks | Ready |
| 09 | Fraud Prevention & Anti-Abuse | P0 | 6-8 weeks | Ready |
| 10 | Content Moderation & Safety | P1 | 4-5 weeks | Ready |
| 11 | Dispute Resolution | P1 | 3-4 weeks | Ready |

**Total Estimated Effort:** ~55-72 weeks (with parallelization: 16-20 weeks)

---

## Epic Summaries

### EPIC-01: User Management & Authentication
**File:** `EPIC-01-User-Management.md`

Core authentication and identity management including:
- Separate registration flows for clients vs creators
- Email/phone verification
- OAuth integration (Google)
- 2FA support
- Creator application and approval workflow
- **5-tier Creator Level System:** Probationary → Junior → Mid-Level → Senior → Expert
- Level-based task access and rate multipliers
- Admin level management and statistics
- Device fingerprinting foundation

---

### EPIC-02: Content Upload & Processing
**File:** `EPIC-02-Content-Upload.md`

Complete upload pipeline:
- Chunked/resumable file uploads (up to 500MB)
- Audio validation and virus scanning
- AI transcription (AssemblyAI/Whisper)
- Automatic assignment creation
- Level-based assignment routing
- Output type catalog with pricing
- **Audio Retention Policy:** Audio deleted 7 days after QA marks all assignments complete

---

### EPIC-03: Creator Workspace
**File:** `EPIC-03-Creator-Workspace.md`

Creator-facing task system:
- Assignment discovery with level filtering
- **Critical:** Creators see task value (their payout), NOT client pricing
- Audio player with variable speed, waveform, keyboard shortcuts
- Synced transcript view
- Rich text editor with auto-save
- Plagiarism and AI detection checks
- Draft management
- Earnings dashboard
- **Payout:** Minimum $20, released as batch on Sundays

---

### EPIC-04: QA Review System
**File:** `EPIC-04-QA-Review.md`

Quality assurance workflow:
- Review queue management
- Rubric-based scoring (Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- Inline commenting
- Approve/Revision/Reject decisions
- **Account Flagging System:** Manual and auto-flags for quality issues
- Flag types: quality_concern, plagiarism, ai_generated, deadline_issues, conduct, fraud
- Admin flag review and resolution workflow

---

### EPIC-05: Payments & Compensation
**File:** `EPIC-05-Payments.md`

Financial operations:
- Client payments: Stripe (card), PayPal, **Pesapal/M-Pesa** (Kenya)
- Creator payouts: Bank transfer, PayPal, M-Pesa
- **Weekly batch payouts on Sundays**
- **Minimum payout: $20**
- Platform margin: 35-40%
- Refund processing
- Credit and subscription systems
- Financial reporting

---

### EPIC-06: Notifications & Communication
**File:** `EPIC-06-Notifications.md`

Communication systems:
- Email notifications (transactional and operational)
- Web push notifications
- In-app notification center
- Real-time WebSocket updates
- Editor-creator messaging (per assignment)
- Granular notification preferences
- Quiet hours support

---

### EPIC-07: Analytics & Reporting
**File:** `EPIC-07-Analytics.md`

Business intelligence:
- Uploader dashboard (spending, usage)
- Creator dashboard (performance, earnings, level progress)
- Admin platform dashboard (revenue, users, quality metrics)
- **Creator level statistics** (distribution, trends)
- Fraud metrics dashboard
- Financial reports
- Custom report builder
- Data export (CSV, Excel, JSON)

---

### EPIC-08: Admin Task Management
**File:** `EPIC-08-Admin-Tasks.md`

Operational controls:
- **Comped task creation** (no payment required)
- Comped reasons: TESTING, PROMO, PARTNERSHIP, COMPENSATION, TRAINING, DEMO
- Direct creator assignment
- Task reassignment workflow
- Stuck task detection and management
- Bulk import via CSV
- Override controls (pricing, level requirements)
- Complete audit trail

---

### EPIC-09: Fraud Prevention & Anti-Abuse
**File:** `EPIC-09-Fraud-Prevention.md`

Platform integrity:
- **Role separation enforcement** (client/creator isolation)
- Email normalization and duplicate detection
- Device fingerprinting (FingerprintJS)
- IP velocity checking
- Plagiarism detection (Copyscape)
- AI content detection (GPTZero)
- Behavioral anomaly detection
- Collusion detection
- Payment fraud prevention
- Auto-flag system

---

### EPIC-10: Content Moderation & Safety
**File:** `EPIC-10-Content-Moderation.md`

Trust and safety:
- Upload screening pipeline
- Prohibited content categories
- Copyright detection (audio fingerprinting)
- User reporting system
- Moderation queue and workflow
- Action matrix (warn → suspend → ban)
- Appeal handling
- Self-harm content handling with crisis resources
- Minor protection (CSAM detection and reporting)
- **Content Ownership:** The party who pays owns the curated content

---

### EPIC-11: Dispute Resolution
**File:** `EPIC-11-Dispute-Resolution.md`

Conflict resolution:
- Dispute types: Quality, Non-Delivery, Late, Payment, etc.
- Filing and response workflow
- Mediation interface
- Resolution options: Full refund, Partial refund, Revision, No action
- Auto-resolution for abandoned tasks
- Late delivery auto-penalty (25% refund)
- Appeal process (14-day window, one appeal per dispute)
- Financial action execution

---

## Key Policies Incorporated

### Content Ownership
> **The party who pays for the content owns the curated output.**

### Audio Retention
> **Audio is retained only until QA marks all assignments complete, then deleted after 7-day grace period.**

### Payout Rules
> **Minimum payout: $20 USD. Payouts released as batch on Sundays.**

### Creator Isolation
> **Creators experience a task-based system, NOT a gig marketplace. They never see client names, client pricing, or platform fees.**

---

## Implementation Phases

### Phase 1: MVP (Months 1-4)
**P0 Epics:** 01, 02, 03, 04, 05, 09 (partial)

Core user flows:
- Authentication and creator onboarding
- Upload → Transcription → Assignment
- Creator claims → Work → Submit
- QA review → Approval
- Payment processing

### Phase 2: Growth (Months 5-8)
**P1 Epics:** 06, 07, 08, 10

Enhanced operations:
- Full notification system
- Analytics dashboards
- Admin task controls
- Content moderation

### Phase 3: Scale (Months 9-12)
**P1 Epics:** 11 + Advanced features

Platform maturity:
- Dispute resolution
- Advanced fraud detection
- Mobile apps
- Enterprise features

---

## Document Contents Per Epic

Each epic document includes:
1. **Overview** - Description, business value, success metrics
2. **User Stories** - Detailed requirements with acceptance criteria
3. **Data Model** - Complete database schemas with indexes
4. **API Specifications** - RESTful endpoints with request/response formats
5. **UI/UX Specifications** - Wireframes and layouts
6. **Implementation Checklist** - Week-by-week breakdown
7. **Dependencies** - Internal and external dependencies

---

*Index Version: 1.0*  
*Last Updated: December 2024*
