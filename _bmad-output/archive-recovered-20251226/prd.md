# Product Requirements Document - jabur

**Author:** Omen  
**Date:** 2025-12-21

## Executive Summary

jabur is an AI Podcast to Human-Curated Content Platform that bridges the gap between AI-generated audio content and human expertise. The platform operates as a two-sided marketplace connecting content uploaders (podcast creators, educators, entrepreneurs) with vetted content creators who transform raw AI podcast audio into polished, actionable derivative outputs across 9 curated content formats.

### Core Value Proposition:

**For Uploaders:** Transform AI podcast audio into professional, publication-ready content within 24-48 hours with guaranteed quality and human validation

**For Creators:** Access steady, task-based content creation work with clear advancement path (5-tier level system), fair compensation (weekly payouts), and growth opportunities

**For Platform:** Sustainable marketplace model with 35-40% margin, defensible competitive moat, and network effects

**Business Model:** Transaction-based platform capturing 35-40% margin on each curated output, with additional revenue from rush pricing (+50%), express delivery (+100%), and enterprise subscriptions. Year 1 targets: 1,000 monthly active uploaders, 200 active creators, <48hr turnaround, 60% retention.

## What Makes This Special

jabur creates a defensible competitive position through six integrated differentiators that would be difficult for generic marketplaces or pure-AI solutions to replicate:

### 1. Role Isolation Design Philosophy
- Creators experience a task-based system, NOT a gig marketplace
- Never see client names, client pricing, or platform margins
- Reduces marketplace anxiety and focuses on quality work
- Prevents platform gaming and creator-client collusion

### 2. 5-Tier Creator Level System
- Clear advancement path: Probationary → Junior → Mid-Level → Senior → Expert
- Automatic task filtering by qualification level
- Rate multipliers reward skill development (0.8x to 1.5x)
- Admin oversight with manual promotion/demotion capability

### 3. Specialized Audio Content Workflow
- Purpose-built for podcast curation, not generic freelancing
- Synced audio player with waveform, variable speed, keyboard shortcuts
- Rich text editor with auto-save and quality checks
- Built-in plagiarism and AI-detection tools

### 4. Comprehensive Quality Assurance
- Dual-layer review: Editor QA + optional client revision
- Rubric-based scoring across 6 dimensions (Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- Account flagging system for quality, plagiarism, or deadline issues
- Auto-detection triggers for problematic patterns

### 5. Fraud Prevention Architecture
- Device fingerprinting and email normalization
- Role separation enforcement (client/creator isolation)
- Velocity checking and behavioral anomaly detection
- Payment fraud prevention with transaction monitoring

### 6. Market-Specific Payment Integration
- Stripe and PayPal for global reach
- Pesapal/M-Pesa integration for East African market
- Weekly batch payouts reducing transaction fees
- Transparent pricing with volume discounts

**Competitive Moat:** The combination of these six elements creates a platform experience that generic freelance marketplaces (Upwork, Fiverr) cannot replicate due to their generalized nature, and pure-AI solutions (ChatGPT, Claude) cannot match due to lack of human quality control, creativity, and specialized workflow.

## Project Classification

**Technical Type:** SaaS B2B Platform (Two-Sided Marketplace)  
**Domain:** General (Content Curation/Marketplace)  
**Complexity:** Medium  
**Project Context:** Greenfield - new project

### Technical Architecture Implications:
- Multi-tenant architecture with strict role separation
- Real-time processing pipeline: Upload → Transcription (AssemblyAI/Whisper) → Assignment → Creator Work → QA Review → Delivery
- Multi-provider payment orchestration (Stripe, PayPal, Pesapal)
- Complex RBAC system: Client, Creator (5 levels), Editor, Admin

### Key Technical Challenges:
- Fraud detection and quality assurance automation
- Scalable infrastructure supporting concurrent workflows
- Role isolation enforcement at all system layers
- Real-time task routing based on creator qualification levels
- Automated quality and fraud detection integration
- Multi-region payment provider coordination
- Weekly batch payout processing with $20 minimum threshold
- Audio retention policy (7-day deletion after QA completion)

## Success Criteria

### User Success

#### Content Uploader Success (Client Side):
- **Time to Value:** Receives curated content within target turnaround (48h standard, 24h rush, 12h express)
- **Quality Achievement:** >85% first-time approval without revision requests
- **Repeat Usage:** Returns for additional uploads within 30 days (60% Year 1, 75% Year 2)
- **Satisfaction:** >4.5/5 overall experience rating
- **Content Utility:** Successfully publishes or uses curated content in their workflows
- **"Aha Moment":** First delivery where they realize the human-curated content is immediately publication-ready without additional editing

#### Content Creator Success (Worker Side):
- **Earnings Stability:** Receives weekly payouts meeting personal income goals ($20 minimum threshold)
- **Career Growth:** Progresses from Probationary → Junior → Mid-Level within 90 days of consistent work
- **Quality Performance:** Maintains >4.3/5 rating to advance and access higher-tier tasks
- **Task Availability:** Finds available tasks matching skill level >80% of login sessions
- **Platform Satisfaction:** >4.5/5 platform experience rating
- **"Aha Moment":** First approved submission with positive feedback and immediate payout confirmation, realizing this is a sustainable income source

### Business Success

#### Phase 1: MVP Launch (Months 1-4)
- 100 successful transactions completed end-to-end
- 50 vetted creators onboarded and actively claiming tasks
- 30% repeat uploader rate within 30 days of first upload
- 4.0/5 average creator and uploader satisfaction scores
- <5% fraud detection rate with no critical security incidents
- 99%+ platform uptime during beta period
- 20%+ platform margin achieved on completed transactions
- Clear unit economics demonstrating path to profitability

#### Phase 2: Growth (Months 5-12)
- 1,000 monthly active uploaders
- 200 active creators across all 5 levels
- <48 hour average turnaround time for standard tasks
- 60% uploader retention rate (30-day)
- 20-30% platform margin sustained
- <1% fraud rate
- 90% upload-to-completion rate

#### Phase 3: Scale (Year 2+)
- 10,000 monthly active uploaders
- 2,000 active creators
- <24 hour average turnaround time
- 75% uploader retention rate
- 25-35% platform margin
- <0.5% fraud rate
- 15% estimated market share

### Technical Success

#### Performance:
- API response time <200ms (p95)
- Page load time <2 seconds (p95)
- Transcription processing <0.5x audio length
- Audio upload speed ≥10 MB/s average throughput
- 99.9% platform uptime

#### Reliability:
- Recovery Time Objective (RTO) <1 hour
- Recovery Point Objective (RPO) <15 minutes
- <1% payment processing failure rate
- Transcription accuracy >95%
- Plagiarism detection operational with <2% false positives
- AI content detection operational with >90% accuracy
- <5% fraud detection rate in MVP, <1% in Growth phase
- Zero data breaches or PII leaks
- Role separation enforcement: 100% compliance (no client-creator overlap)

#### Scalability:
- Support 10,000 concurrent users
- Process 1,000+ uploads per day without degradation
- Queue-based architecture handling peak loads
- Auto-scaling operational and cost-effective

### Measurable Outcomes

#### 3-Month Milestones:
- Platform operational with all P0 epics deployed
- First 100 transactions completed successfully
- Creator community of 50+ active across at least 3 tiers
- Unit economics validated (20%+ margin)
- No critical security incidents

#### 12-Month Milestones:
- 1,000+ monthly active uploaders generating consistent revenue
- 200+ active creators with healthy distribution across all 5 levels
- <48hr turnaround achieved consistently
- 60% retention demonstrating product-market fit
- LTV:CAC ratio >6:1
- Platform margin stabilized at 20-30%

#### 24-Month Vision:
- Market leadership position in AI content curation
- 10,000+ monthly active uploaders
- Enterprise clients using API access
- International expansion (East Africa via M-Pesa integration operational)
- Network effects established (more creators attract uploaders, more uploads attract creators)

## Product Scope

### MVP - Minimum Viable Product (Months 1-4)

#### Core Epics (P0):

**Epic 1: User Management & Authentication**
- Dual registration flows (separate for clients/creators)
- Email + Google OAuth authentication
- Role-based access control (Client, Creator, Editor, Admin)
- Creator application and vetting workflow
- 5-tier Creator Level System (Probationary through Expert)
- Device fingerprinting foundation
- Role separation enforcement

**Epic 2: Content Upload & Processing**
- Audio upload (MP3, WAV, M4A up to 500MB) with progress indicators
- Automatic transcription (AssemblyAI/Whisper integration)
- Metadata capture and output type selection
- Level-based task routing
- Cloud storage with CDN delivery
- 7-day audio retention policy

**Epic 3: Creator Workspace**
- Task discovery with level-based filtering
- Claim and lock mechanism with deadline commitment
- Audio player with synced transcript, variable speed, waveform
- Rich text editor with auto-save (every 30s)
- Draft management with version history
- Earnings dashboard (task values, NOT client pricing)

**Epic 4: QA Review System**
- Review queue sortable by deadline, creator, type
- Rubric-based scoring (6 dimensions)
- Inline feedback and commenting
- Approve/Revise/Reject workflow
- Account flagging system (manual and auto-triggers)
- Creator performance tracking

**Epic 5: Payments & Compensation**
- Client payments: Stripe integration for card processing
- Transparent pricing calculator with rush options
- Creator payouts: Weekly batch processing (Sundays, $20 minimum)
- Payment history and downloadable statements
- Basic financial reporting

**Epic 9: Basic Fraud Prevention (P0)**
- Role separation enforcement (email and device restrictions)
- Email normalization (detect gmail+tags, dots variations)
- Basic velocity checking (rate limits on registration, task claiming)
- Plagiarism detection integration (Copyscape or similar)
- Manual review queue for flagged accounts

#### MVP Success Gate:
- All P0 epics implemented and stable
- 100+ transactions with <5% failure rate
- Both user cohorts showing retention signals
- Unit economics validate 20-30% target margin
- Fraud rate under control (<5%)

### Growth Features (Months 5-8)

**Epic 6: Notifications & Communication**
- Email notifications for key events
- In-app notification center with real-time updates
- Web push notifications
- Editor-creator messaging per assignment

**Epic 7: Analytics & Reporting**
- Uploader dashboard (spending, usage analytics)
- Creator dashboard (performance, earnings, level progress)
- Admin platform dashboard (revenue, users, quality, fraud metrics)
- Creator level statistics and distribution
- Custom report builder and data export

**Epic 8: Admin Task Management**
- Comped task creation (testing, promotions, partnerships)
- Direct creator assignment capability
- Task reassignment workflow
- Bulk import via CSV

**Epic 10: Content Moderation & Safety**
- Upload screening pipeline (virus scan, content validation)
- User reporting system
- Moderation queue and action workflow
- Content policy enforcement

**Epic 11: Dispute Resolution**
- Dispute filing and response workflow
- Mediation interface
- Resolution options and financial actions
- Appeal process

**Enhanced Fraud Prevention:**
- Advanced device fingerprinting (FingerprintJS)
- AI content detection (GPTZero integration)
- Behavioral anomaly detection
- Collusion detection between creators and clients

**Additional Payment Providers:**
- PayPal integration
- Pesapal/M-Pesa integration for East African market

### Vision (Year 2+)

**Enterprise & Scale:**
- Mobile native apps (iOS, Android)
- Enterprise subscription tiers with volume pricing
- Public API with webhooks and rate limits
- White-label options for enterprise clients
- SLAs and dedicated account management

**Advanced Features:**
- AI-assisted writing tools for creators (grammar check, suggestions)
- Advanced analytics with predictive quality scoring
- Referral program for creators and clients
- Multi-language platform support
- SOC 2 compliance for enterprise clients

**Market Expansion:**
- East African market dominance via M-Pesa
- Regional payment methods for key markets
- Localized platform translations
- Creator recruitment partnerships by region

## User Journeys

### Journey 1: Alex Chen - From AI Noise to Publication-Ready Content

Alex is a 34-year-old entrepreneur running a coaching business. He's discovered AI podcast tools and has been experimenting with creating educational content for his clients. But there's a problem: the AI generates lengthy, rambling audio that his clients won't sit through. He needs the core insights extracted, fact-checked, and formatted into his weekly newsletter.

It's 11 PM on Sunday when Alex finds jabur through a content creator forum. He's drowning in three hours of AI podcast audio that he generated about productivity frameworks, and his newsletter goes out Tuesday morning. He creates an account (choosing the uploader registration flow), uploads his MP3 file, and selects three output types: Executive Summary, Key Insights, and Blog Post. The pricing calculator shows $70 total for 48-hour turnaround - he adds rush delivery (+50%) for peace of mind.

Monday afternoon, Alex receives a notification: his Executive Summary is ready for review. He opens it and his eyes widen - a human curator has pulled out exactly the frameworks he was trying to articulate, structured them logically, and even caught a factual error about the Eisenhower Matrix that the AI had hallucinated. The Key Insights arrive hours later with reflection questions he can send his coaching clients. By Monday evening, he has a polished 1,200-word blog post ready to publish.

Tuesday morning, instead of frantically summarizing AI audio himself, Alex is scheduling social media posts using the curated content. Six months later, he's a regular jabur customer with a $199/month Business plan, and his content quality has tripled while his production time has dropped by 70%.

**This journey reveals requirements for:**
- Separate registration flows for uploaders vs creators
- Multi-file upload with resume capability (up to 500MB)
- Output type selection interface with clear descriptions
- Pricing calculator with rush/express options
- Real-time status notifications (WebSocket updates)
- Approval workflow with revision request capability
- Client dashboard showing upload history and spending

### Journey 2: Maria Santos - Finding Steady Income Through Quality Work

Maria is a 42-year-old former newspaper editor who left journalism to care for her aging parents. She's been freelancing on Upwork and Fiverr, but the constant bidding wars, race-to-the-bottom pricing, and clients who ghost her after delivery have left her frustrated. She's skilled at analysis and writing, but she needs steady, fairly-compensated work without the marketplace anxiety.

One morning, she sees a "Become a Creator" ad for jabur while browsing freelance job boards. The landing page is different - it doesn't show her client pricing or make her bid against others. Instead, it describes a task-based system with clear advancement and weekly payouts. Intrigued, she clicks "Apply Now" and enters a vetting process: she uploads her portfolio (her best investigative pieces), provides LinkedIn credentials, and completes a sample task - creating an Executive Summary from a 10-minute test audio clip about climate policy.

Three days later, Sarah (the platform admin) approves Maria at Probationary level with access to Social Media Pack tasks only. Maria logs into her creator workspace and immediately notices what's NOT there: no client names, no marketplace dynamics, no other creators bidding. Just a clean list of available tasks filtered to her level, showing task values (her payout), output requirements, and deadlines.

She claims her first task: a Social Media Pack for a 15-minute AI podcast about productivity apps. The workspace is a revelation - the synced audio player lets her navigate by clicking the transcript, the editor auto-saves every 30 seconds, and the guidelines are crystal clear. She submits her work in 45 minutes. The next day, James (the editor) approves it with a 4.6/5 rating and positive feedback: "Great attention to platform-specific formatting - keep it up!"

That first $24 payout hits her account on Sunday. Within 90 days, Maria completes 22 tasks with a 4.5 average rating and gets promoted to Junior level, unlocking Action Items tasks and earning a 1.0x rate multiplier (up from 0.8x). She's now making $400-600 weekly with predictable income, no bidding stress, and a clear path to Senior level where she can access the high-value Blog Post and Fact-Check tasks at 1.25x rates.

**This journey reveals requirements for:**
- Separate creator registration and vetting workflow
- Portfolio submission and sample task system
- 5-tier level system with automatic task filtering
- Creator workspace with no client information visible
- Audio player with waveform, variable speed, synced transcript
- Rich text editor with auto-save and formatting tools
- Task claim/lock mechanism preventing double-assignment
- Editor review workflow with rubric scoring
- Weekly payout system with $20 minimum threshold
- Earnings dashboard showing level progress and payout history

### Journey 3: James Park - Maintaining Quality at Scale

James is a 38-year-old senior editor who's worked at major publications for 15 years. jabur hired him as a QA editor to ensure creator output meets professional standards. His job is to review submitted content, provide feedback, and maintain the quality bar that keeps uploaders returning.

Monday morning at 9 AM, James opens his QA dashboard and sees 23 pending reviews, sorted by deadline (closest first). A Blog Post submission from Marcus (a Mid-Level creator) is due to the client in 4 hours - this gets priority. James opens the review interface: on the left is the original audio with transcript, on the right is Marcus's 1,400-word blog post. He plays through the audio at 1.5x speed while reading Marcus's work.

The writing is solid, but James spots an issue: Marcus misattributed a quote and used a generic introduction instead of hooking the reader. James uses the inline commenting feature to highlight the quote error (triggering a plagiarism flag in the system) and suggests a stronger opening. He scores the rubric: Accuracy 3/5 (quote error), Completeness 5/5, Clarity 5/5, Actionability 4/5, Formatting 5/5, Originality 4/5. Total: 4.3/5. He clicks "Request Revision" with a 6-hour deadline.

Two hours later, Marcus resubmits. The quote is corrected, the introduction is compelling. James upgrades Accuracy to 5/5 (total 4.7/5) and clicks "Approve." The content goes to the uploader, Marcus keeps his quality rating, and James moves to the next review.

But then James notices a pattern: creator_id_4728 has had three consecutive plagiarism flags this week. He uses the "Flag Account" feature with reason "Plagiarism - Multiple Instances" and adds the detection evidence. Sarah receives an alert and suspends the account pending investigation.

**This journey reveals requirements for:**
- QA review queue with sorting and filtering
- Side-by-side review interface (audio + transcript + content)
- Rubric-based scoring system (6 dimensions with weights)
- Inline commenting and feedback tools
- Approve/Revise/Reject workflow with revision deadlines
- Plagiarism detection integration with auto-flags
- Account flagging system (manual and triggered)
- Creator performance tracking over time
- Admin escalation workflow

### Journey 4: Sarah Kim - Platform Health and Creator Management

Sarah is a 32-year-old operations manager responsible for jabur's day-to-day health: onboarding creators, managing the tier system, handling escalations, and monitoring fraud signals. It's Tuesday morning and she's reviewing her admin dashboard showing platform metrics.

The Creator Overview shows 847 total creators: 312 Probationary (37%), 245 Junior (29%), 178 Mid-Level (21%), 89 Senior (11%), 23 Expert (3%). The distribution looks healthy, but she notices the Expert count hasn't grown in 3 weeks - she makes a note to review high-performing Senior creators for manual promotion.

An alert catches her eye: 7 flagged accounts pending review. She clicks into the flag queue and sees James's escalation about creator_id_4728. Sarah reviews the evidence: three submissions in 5 days with >40% plagiarism matches from external sources. She checks the creator's history - 12 total submissions, declining quality scores. Decision: permanent suspension. She clicks "Resolve Flag" → "Ban" → adds resolution note "Repeat plagiarism offender - zero tolerance." The creator receives an email notification, account is locked, and pending payouts are frozen for dispute review.

Next, Sarah spots a partnership opportunity email: a podcast network wants to test jabur with 50 comped tasks for their producers. She uses the Admin Task Management interface to create a batch of comped tasks (flagged as "PARTNERSHIP - Network XYZ Testing") with custom instructions and assigns them directly to 10 Senior+ creators. No payment processing needed - these tasks bypass the client payment flow entirely.

Finally, Sarah reviews the fraud detection dashboard: device fingerprint alerts show two creator accounts registered from the same browser/device within 24 hours. She investigates - both accounts have different names but suspiciously similar writing patterns. She flags both accounts for manual review and adds them to the velocity check monitoring list.

**This journey reveals requirements for:**
- Admin dashboard with creator level statistics
- Creator level management (promote/demote with audit log)
- Flag queue with resolution workflow (dismiss/warning/suspension/ban)
- Comped task creation for testing/partnerships/promotions
- Direct task assignment capability
- Fraud detection dashboard (device fingerprints, velocity checks)
- Account investigation tools
- Batch operations for creator management
- Audit trail for all admin actions

### Journey Requirements Summary

These four journeys reveal distinct capability areas needed for jabur:

#### Client-Facing (Alex's Journey):
- Upload pipeline: Resume-capable file uploads, metadata capture, output type selection
- Pricing & Payments: Calculator with rush/express pricing, Stripe integration, transaction history
- Status & Notifications: Real-time WebSocket updates, email notifications, in-app alerts
- Review & Approval: Content review interface, revision request system, satisfaction ratings

#### Creator-Facing (Maria's Journey):
- Onboarding: Separate registration, portfolio submission, sample task vetting, level assignment
- Workspace: Task discovery with level filtering, audio player (synced transcript, variable speed), rich text editor (auto-save), draft management
- Earnings: Task value display (NOT client pricing), earnings dashboard, weekly payout system
- Growth: Level progression tracking, rate multipliers, performance feedback

#### Quality Assurance (James's Journey):
- Review Tools: Side-by-side interface, audio playback, rubric scoring, inline comments
- Workflow: Review queue (sortable), approve/revise/reject decisions, revision deadlines
- Quality Control: Plagiarism detection, AI content detection, account flagging, performance tracking
- Escalation: Admin notification system, flag creation with evidence

#### Operations (Sarah's Journey):
- Creator Management: Level statistics, promotion/demotion tools, account investigation
- Fraud Prevention: Device fingerprinting, velocity checks, pattern detection, flag resolution
- Admin Controls: Comped task creation, direct assignment, batch operations, audit logs
- Platform Health: Dashboard metrics, alert system, escalation queue

## SaaS B2B Platform Specific Requirements

### Multi-Tenant Architecture Model

jabur implements strict role separation as a core architectural principle, creating isolated experiences for different user cohorts:

#### Tenant Isolation Strategy:
- **Role-Based Tenancy:** Each user belongs to exactly ONE primary role (Client, Creator, Editor, Admin)
- **Enforcement Layer:** Database-level constraints prevent role overlap (e.g., same email cannot be both client and creator)
- **Device Fingerprinting:** Detect and block attempts to create multiple role accounts from same device
- **Email Normalization:** Prevent bypass via gmail+tags, dot variations, etc.
- **Data Isolation:** Creators never see client-identifying information, pricing, or platform margins

#### Platform Cohorts:
1. **Uploaders (Clients):** Upload audio, select outputs, pay for services, review deliverables
2. **Creators (Workers):** Claim tasks, produce content, earn payouts - isolated from client information
3. **Editors (QA Staff):** Review creator submissions, score quality, manage flags
4. **Administrators (Ops):** Manage creator levels, handle escalations, monitor platform health

#### Technical Implementation:
- Row-Level Security (RLS) policies enforcing data access by role
- Separate UI/UX workflows per role with no cross-role navigation
- API endpoints scoped by authentication role with 403 enforcement
- Audit logging for all cross-role actions (admin viewing creator data)

### Role-Based Access Control (RBAC) Matrix

#### Primary Roles:

| Role | Authentication | Registration Flow | Key Permissions |
|------|---------------|-------------------|-----------------|
| **Client (Uploader)** | Email/OAuth | Public registration | Upload audio, select outputs, make payments, review content, request revisions, rate creators (anonymously) |
| **Creator (Worker)** | Email/OAuth | Application + vetting | View tasks (level-filtered), claim assignments, submit content, view earnings, track performance |
| **Editor (QA)** | Email (internal) | Admin-created accounts | Review queue access, score submissions, approve/revise/reject, flag accounts, view creator performance |
| **Admin (Ops)** | Email (internal) | Admin-created accounts | Full platform access, creator management, comped tasks, flag resolution, fraud monitoring, financial reporting |

#### Creator Sub-Levels (Permission Tiers):

| Level | Rate Multiplier | Task Access | Advancement Criteria |
|-------|----------------|-------------|---------------------|
| **Probationary** | 0.8x | Social Media Pack, Reflection Questions only | Complete 5 tasks, >4.3 avg rating |
| **Junior** | 1.0x | + Action Items, Executive Summary | Complete 15 tasks, >4.3 avg rating, 30+ days |
| **Mid-Level** | 1.1x | + Key Insights | Complete 30 tasks, >4.4 avg rating, 60+ days |
| **Senior** | 1.25x | + Blog Post, Fact-Check Report | Complete 50 tasks, >4.5 avg rating, 90+ days |
| **Expert** | 1.5x | All task types + priority access | Manual admin promotion, sustained >4.7 rating |

#### Permission Enforcement:
- Task routing engine automatically filters assignments by creator level
- API validates creator level before allowing task claims
- Payout calculation applies rate multiplier based on current level
- Level changes trigger re-evaluation of accessible task queue

### Subscription & Pricing Tiers

#### Client Subscription Plans:

| Tier | Price | Target User | Key Features |
|------|-------|-------------|--------------|
| **Pay-As-You-Go** | Per-task pricing | Occasional users, testing | No monthly fee, standard turnaround (48h), pay per output type, volume discounts start at 10 uploads/month |
| **Pro** | $49/month | Regular creators, coaches | 10% discount on all tasks, priority support, rush delivery (24h) at standard pricing, analytics dashboard |
| **Business** | $199/month | Content teams, agencies | 20% discount, express delivery (12h) at rush pricing, bulk upload via CSV, dedicated account manager contact, custom output templates |
| **Enterprise** | Custom pricing | Large organizations, networks | 30%+ discount, white-label options, API access with webhooks, SLA guarantees (99.9% uptime), volume commitments |

#### Per-Output Pricing (Pay-As-You-Go Baseline):
- Executive Summary (500-750 words): $15
- Key Insights (5-7 bullets): $12
- Action Items (checklist format): $10
- Reflection Questions (5-10 questions): $8
- Social Media Pack (3 platforms): $15
- Blog Post (1200-1500 words): $35
- Fact-Check Report (with sources): $25
- Show Notes (timestamp + summary): $18
- Newsletter Segment (400-600 words): $20

#### Rush/Express Pricing:
- **Rush (24h turnaround):** +50% surcharge
- **Express (12h turnaround):** +100% surcharge (Business+ only)

#### Creator Payout Model:
- Platform retains 35-40% margin on each transaction
- Creator sees task value (their payout), NOT client pricing
- Weekly batch payouts on Sundays, $20 minimum threshold
- Rate multipliers (0.8x to 1.5x) applied based on creator level

## Integration Requirements

### Payment Processing:

#### Strategic Priority: East African Market

**Payment Integration Priorities:**

**1. Pesapal/M-Pesa (PRIMARY - East Africa Strategic Focus):**
- **M-Pesa Mobile Money:** Primary payment method for Kenyan market and broader East Africa
- **Client Payments:** M-Pesa STK Push for instant mobile money collection
- **Creator Payouts:** M-Pesa B2C API for direct mobile wallet disbursements
- **Pesapal Gateway:** Aggregates multiple mobile money providers (M-Pesa, Airtel Money, TigoPesa)
- **Market Advantage:** 90%+ mobile money penetration in Kenya, Tanzania, Uganda
- **Transaction Fees:** Lower than card processing (1-3% vs 2.9%+ for cards)
- **Local Currency:** KES, TZS, UGX support with automatic conversion
- **MVP Priority:** Launch with M-Pesa from Day 1 for East African market entry

**2. Stripe (Primary - Global Markets):**
- Credit/debit card processing for international clients
- Subscription management (Pro, Business, Enterprise tiers)
- PCI DSS compliance handled by Stripe
- Webhook integration for payment events
- Automatic retry for failed charges
- Bank transfer payouts for non-African creators

**3. PayPal (Secondary - Global Alternative):**
- Alternative payment method for clients preferring PayPal
- Creator payout method option (global availability)
- PayPal Payouts API for batch disbursements
- Lower priority than Pesapal/M-Pesa and Stripe

**Implementation Phases:**
- **Phase 1 MVP:** M-Pesa (Kenya) + Stripe (global cards) - Essential for East African launch
- **Phase 2 Growth:** Pesapal full integration (multi-country mobile money), PayPal
- **Phase 3 Scale:** Regional providers (Airtel Money, TigoPesa direct integration)

### Transcription Services:
- **AssemblyAI (Primary):** High-accuracy transcription with speaker detection
- **Whisper (Fallback):** Self-hosted option for cost optimization at scale
- **SLA requirement:** <0.5x audio length processing time
- **Accuracy target:** >95% word-level accuracy

### Fraud & Quality Detection:
1. **FingerprintJS:** Device fingerprinting to prevent multi-accounting
2. **Copyscape or Similar:** Plagiarism detection integration
3. **GPTZero:** AI-generated content detection
4. **Email Validation Service:** Real-time email verification on registration

### Communication:
- **Transactional Email:** SendGrid or AWS SES for notifications
- **WebSocket Service:** Real-time status updates (upload progress, task assignments, QA decisions)

### Storage & CDN:
- **Cloud Storage:** AWS S3 or similar for audio file storage
- **CDN:** CloudFront or similar for fast audio delivery globally
- **Retention Policy:** Auto-delete audio 7 days after all assignments marked complete

## Compliance Requirements

### Payment Data Compliance:
- **PCI DSS:** All payment data handled by PCI-compliant providers (Stripe, PayPal, Pesapal)
- **M-Pesa Compliance:** Safaricom M-Pesa Business API terms and security requirements
- No storage of credit card numbers, CVV, or full payment credentials
- No storage of M-Pesa PINs or sensitive mobile money credentials
- Tokenization for recurring payments
- Secure transmission (TLS 1.2+)

### Data Privacy:

#### GDPR Compliance (EU users):
- Data processing agreements with third-party providers
- Right to access (export user data)
- Right to erasure (delete account + data)
- Consent management for marketing communications
- Privacy policy transparency

#### Kenya Data Protection Act (DPA 2019):
- Compliance for Kenyan users (similar to GDPR)
- Data Commissioner registration if processing significant Kenyan data
- Cross-border data transfer safeguards

#### Data Retention:
- **Audio files:** Deleted 7 days after QA completion (automatic)
- **User accounts:** Retained indefinitely unless deletion requested
- **Transaction history:** Retained for 7 years (financial compliance)
- **Audit logs:** Retained for 2 years

### Content Ownership:

#### Ownership Policy:
- The party who pays for the content owns the curated output
- Uploaders receive full copyright to commissioned derivative works
- Creators waive ownership rights upon payment receipt
- Platform retains no ownership claims on curated content

### Labor & Tax Compliance:
- Creators are independent contractors (not employees)
- Platform issues 1099-NEC forms (US creators earning $600+)
- International creators responsible for own tax obligations
- Kenya Tax Compliance: Withholding tax considerations for Kenyan creators
- Minimum payout threshold ($20) to reduce micro-transaction overhead

### Content Safety:
- Prohibited content screening (CSAM, extreme violence, hate speech)
- User reporting mechanism for violations
- Moderation queue for flagged content
- Compliance with platform policies (automated + manual review)

### Account Security:
- 2FA optional for all users, mandatory for admins
- Password requirements: 12+ characters, complexity rules
- Account lockout after 5 failed login attempts
- Session timeout: 24 hours for clients/creators, 8 hours for admin/editor

## Functional Requirements

### Authentication & User Management

- **FR-001:** System shall provide separate registration flows for Clients and Creators
- **FR-002:** System shall support email/password and OAuth (Google) authentication
- **FR-003:** System shall enforce role isolation preventing same user from holding both Client and Creator roles
- **FR-004:** System shall implement creator application workflow with portfolio submission and sample task vetting
- **FR-005:** System shall manage 5-tier creator level system (Probationary, Junior, Mid-Level, Senior, Expert)
- **FR-006:** System shall support device fingerprinting for fraud prevention
- **FR-007:** System shall provide 2FA authentication (optional for users, mandatory for admins)

### Content Upload & Processing

- **FR-010:** System shall support audio file uploads (MP3, WAV, M4A) up to 500MB with resume capability
- **FR-011:** System shall automatically transcribe uploaded audio using AssemblyAI or Whisper
- **FR-012:** System shall allow clients to select multiple output types per upload
- **FR-013:** System shall route tasks to creators based on their qualification level
- **FR-014:** System shall implement 7-day audio retention policy with automatic deletion after QA completion
- **FR-015:** System shall provide real-time upload progress indicators

### Creator Workspace

- **FR-020:** System shall display available tasks filtered by creator's current level
- **FR-021:** System shall provide task claim/lock mechanism preventing double-assignment
- **FR-022:** System shall provide audio player with synced transcript, variable speed (0.5x-2x), and waveform visualization
- **FR-023:** System shall provide rich text editor with auto-save every 30 seconds
- **FR-024:** System shall display task value (creator payout) WITHOUT showing client pricing or platform margin
- **FR-025:** System shall provide draft management with version history
- **FR-026:** System shall show creator earnings dashboard with level progression tracking

### QA Review System

- **FR-030:** System shall provide review queue sortable by deadline, creator, and output type
- **FR-031:** System shall provide side-by-side review interface (audio + transcript + submission)
- **FR-032:** System shall implement rubric-based scoring across 6 dimensions with weighted scores
- **FR-033:** System shall support inline commenting and feedback on submissions
- **FR-034:** System shall provide Approve/Revise/Reject workflow with revision deadlines
- **FR-035:** System shall integrate plagiarism detection with automatic flagging
- **FR-036:** System shall track creator performance over time
- **FR-037:** System shall provide account flagging system (manual and auto-triggered)

### Payment Processing

- **FR-040:** System shall process client payments via M-Pesa (primary), Stripe, and PayPal
- **FR-041:** System shall implement M-Pesa STK Push for instant mobile money collection
- **FR-042:** System shall process creator payouts via M-Pesa B2C, bank transfer, or PayPal
- **FR-043:** System shall execute weekly batch payouts on Sundays with $20 minimum threshold
- **FR-044:** System shall apply creator rate multipliers (0.8x to 1.5x) based on level
- **FR-045:** System shall support subscription tiers (Pay-As-You-Go, Pro, Business, Enterprise)
- **FR-046:** System shall calculate pricing with rush (+50%) and express (+100%) surcharges
- **FR-047:** System shall provide transparent pricing calculator

### Notifications & Communication

- **FR-050:** System shall send email notifications for key events (transactional)
- **FR-051:** System shall provide in-app notification center with real-time updates
- **FR-052:** System shall support web push notifications
- **FR-053:** System shall provide WebSocket-based real-time status updates
- **FR-054:** System shall support editor-creator messaging per assignment

### Analytics & Reporting

- **FR-060:** System shall provide uploader dashboard (spending, usage analytics)
- **FR-061:** System shall provide creator dashboard (performance, earnings, level progress)
- **FR-062:** System shall provide admin platform dashboard (revenue, users, quality, fraud metrics)
- **FR-063:** System shall display creator level statistics and distribution
- **FR-064:** System shall support data export (CSV, Excel, JSON)

### Admin & Operations

- **FR-070:** System shall support comped task creation for testing/partnerships
- **FR-071:** System shall allow direct task assignment to specific creators
- **FR-072:** System shall provide task reassignment workflow
- **FR-073:** System shall support bulk upload via CSV
- **FR-074:** System shall provide creator level management (promote/demote with audit log)
- **FR-075:** System shall provide flag resolution workflow (dismiss/warning/suspension/ban)
- **FR-076:** System shall maintain complete audit trail for all admin actions

### Fraud Prevention

- **FR-080:** System shall enforce email normalization (detect gmail+tags, dot variations)
- **FR-081:** System shall implement velocity checking (rate limits on registration, task claiming)
- **FR-082:** System shall detect behavioral anomalies and suspicious patterns
- **FR-083:** System shall identify potential creator-client collusion
- **FR-084:** System shall monitor payment fraud indicators

### Content Moderation & Safety

- **FR-090:** System shall screen uploads for prohibited content
- **FR-091:** System shall provide user reporting mechanism
- **FR-092:** System shall maintain moderation queue with action workflow
- **FR-093:** System shall enforce platform content policies

### Dispute Resolution

- **FR-100:** System shall provide dispute filing workflow for quality/delivery/payment issues
- **FR-101:** System shall support mediation interface
- **FR-102:** System shall execute resolution actions (refunds, revisions, penalties)
- **FR-103:** System shall provide appeal process with 14-day window

## Non-Functional Requirements

### Performance

- **NFR-001:** API response time shall be <200ms (p95)
- **NFR-002:** Page load time shall be <2 seconds (p95)
- **NFR-003:** Transcription processing shall complete in <0.5x audio length
- **NFR-004:** Audio upload speed shall achieve ≥10 MB/s average throughput
- **NFR-005:** WebSocket latency for real-time updates shall be <500ms

### Reliability

- **NFR-010:** Platform uptime shall be ≥99.9%
- **NFR-011:** Recovery Time Objective (RTO) shall be <1 hour
- **NFR-012:** Recovery Point Objective (RPO) shall be <15 minutes
- **NFR-013:** Payment processing failure rate shall be <1%
- **NFR-014:** System shall implement graceful degradation for non-critical features

### Security

- **NFR-020:** All data transmission shall use TLS 1.2 or higher
- **NFR-021:** Payment data shall be PCI DSS compliant (handled by third-party providers)
- **NFR-022:** M-Pesa credentials shall never be stored in plaintext
- **NFR-023:** Password requirements shall enforce 12+ characters with complexity rules
- **NFR-024:** Account lockout shall occur after 5 failed login attempts
- **NFR-025:** Session timeout shall be 24 hours for clients/creators, 8 hours for admin/editor
- **NFR-026:** Role separation enforcement shall have 100% compliance (zero client-creator overlap)
- **NFR-027:** All PII shall be encrypted at rest

### Scalability

- **NFR-030:** System shall support 10,000 concurrent users
- **NFR-031:** System shall process 1,000+ uploads per day without degradation
- **NFR-032:** Queue-based architecture shall handle peak load spikes
- **NFR-033:** Auto-scaling shall be operational and cost-effective
- **NFR-034:** Database queries shall be optimized with proper indexing

### Data Quality & Accuracy

- **NFR-040:** Transcription accuracy shall be >95% (word-level)
- **NFR-041:** Plagiarism detection shall have <2% false positive rate
- **NFR-042:** AI content detection shall have >90% accuracy
- **NFR-043:** Fraud detection rate shall be <5% in MVP, <1% in Growth phase

### Compliance

- **NFR-050:** System shall comply with PCI DSS for payment data
- **NFR-051:** System shall comply with GDPR for EU users
- **NFR-052:** System shall comply with Kenya Data Protection Act (DPA 2019)
- **NFR-053:** System shall provide data export capability (GDPR right to access)
- **NFR-054:** System shall provide data deletion capability (GDPR right to erasure)
- **NFR-055:** Audio retention policy shall auto-delete after 7 days post-QA
- **NFR-056:** Transaction history shall be retained for 7 years (financial compliance)
- **NFR-057:** Audit logs shall be retained for 2 years

### Usability

- **NFR-060:** Creator workspace shall be usable without training
- **NFR-061:** Audio player controls shall support keyboard shortcuts
- **NFR-062:** Auto-save shall prevent data loss from browser crashes
- **NFR-063:** Error messages shall be clear and actionable

### Integration

- **NFR-070:** M-Pesa integration shall use Safaricom M-Pesa Business API
- **NFR-071:** Stripe integration shall support webhooks for async events
- **NFR-072:** AssemblyAI/Whisper APIs shall have fallback mechanisms
- **NFR-073:** Email service (SendGrid/SES) shall have 99%+ delivery rate

## Document Completion

**PRD Status:** Complete  
**Total Steps Completed:** 11/11  
**Document Generated:** 2025-12-21

### Next Recommended Steps:

1. **UX Design:** Create wireframes and user flows based on User Journeys
2. **Technical Architecture:** Design system architecture supporting all functional requirements
3. **Epic Breakdown:** Convert requirements into detailed epics and user stories (already available in reference-docs)
4. **Implementation Planning:** Begin with MVP P0 epics (1, 2, 3, 4, 5, 9)
