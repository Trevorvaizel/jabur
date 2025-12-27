---
stepsCompleted: [1, 2, 3, 4, 7, 8, 9, 10, 11]
inputDocuments:
  - "_bmad-output/analysis/product-brief-jabur-2025-12-21.md"
  - "_bmad-output/archive-recovered-20251226/prd.md"
  - "_bmad-output/archive-recovered-20251226/ux-design-specification.md"
  - "_bmad-output/archive-recovered-20251226/epics.md"
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 0
  projectDocs: 3
workflowType: 'prd'
lastStep: 11
project_name: 'jabur'
user_name: 'Omen'
date: '2025-12-26'
---

# Product Requirements Document - jabur

**Author:** Omen
**Date:** 2025-12-26

## Executive Summary

**jabur** is an AI Podcast to Human-Curated Content Platform that bridges the gap between AI-generated audio content and human expertise. The platform operates as a two-sided marketplace connecting content uploaders (podcast creators, educators, entrepreneurs) with vetted content creators who transform raw AI podcast audio into polished, actionable derivative outputs across 9 curated content formats.

### Core Value Proposition

**For Uploaders:** Transform AI podcast audio into professional, publication-ready content within 24-48 hours with guaranteed quality and human validation

**For Creators:** Access steady, task-based content creation work with clear advancement path (5-tier level system), fair compensation (weekly payouts), and growth opportunities

**For Platform:** Sustainable marketplace model with 35-40% margin, defensible competitive moat, and network effects

### Business Model

Transaction-based platform capturing 35-40% margin on each curated output, with additional revenue from:
- Rush pricing (+50%)
- Express delivery (+100%)
- Enterprise subscriptions

**Year 1 Targets:**
- 1,000 monthly active uploaders
- 200 active creators
- <48hr average turnaround
- 60% user retention

### What Makes This Special

jabur creates a defensible competitive position through six integrated differentiators that would be difficult for generic marketplaces or pure-AI solutions to replicate:

**1. Role Isolation Design Philosophy**
- Creators experience a task-based system, NOT a gig marketplace
- Never see client names, client pricing, or platform margins
- Reduces marketplace anxiety and focuses on quality work
- Prevents platform gaming and creator-client collusion

**2. 5-Tier Creator Level System**
- Clear advancement path: Probationary → Junior → Mid-Level → Senior → Expert
- Automatic task filtering by qualification level
- Rate multipliers reward skill development (0.8x to 1.5x)
- Admin oversight with manual promotion/demotion capability

**3. Specialized Audio Content Workflow**
- Purpose-built for podcast curation, not generic freelancing
- Synced audio player with waveform, variable speed, keyboard shortcuts
- Rich text editor with auto-save and quality checks
- Built-in plagiarism and AI-detection tools

**4. Comprehensive Quality Assurance**
- Dual-layer review: Editor QA + optional client revision
- Rubric-based scoring across 6 dimensions (Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- Account flagging system for quality, plagiarism, or deadline issues
- Auto-detection triggers for problematic patterns

**5. Fraud Prevention Architecture**
- Device fingerprinting and email normalization
- Role separation enforcement (client/creator isolation)
- Multi-account detection and prevention
- Automated flagging for suspicious patterns

**6. Sustainable Economics**
- Transparent creator earnings visibility (WITHOUT client pricing exposure)
- 35-40% platform margin enables quality operations
- Weekly payouts with clear payment schedules
- Fair compensation tied to skill level and quality

## Project Classification

**Technical Type:** SaaS B2B Platform (Two-Sided Marketplace)
**Domain:** General
**Complexity:** Medium
**Project Context:** Greenfield - new project with reference documentation for continuity

This is a **SaaS B2B marketplace platform** with medium complexity driven by:
- Multi-role architecture (4 distinct user personas: Uploaders, Creators, QA Editors, Admins)
- Complex workflow orchestration (upload → transcription → task routing → creation → QA → delivery)
- Creator advancement and quality management systems
- Payment processing and earnings calculation
- Fraud prevention and security requirements

The platform requires sophisticated state management, role-based access control, real-time updates, and integration with third-party services (audio transcription, payment processing, plagiarism detection).


## Success Criteria

### User Success

**For Uploaders (Content Clients):**

Success is achieved when uploaders experience seamless transformation of AI podcast audio into publication-ready content with guaranteed quality:

**First Delivery Success (Critical "Aha!" Moment):**
- Upload-to-delivery workflow completes end-to-end without issues
- Content quality meets or exceeds expectations on first attempt
- Delivery occurs within promised 24-48 hour timeframe
- Content is immediately publication-ready requiring zero additional editing
- Format flexibility provided (MD, PDF, DOCX as needed)

**Ongoing Success Indicators:**
- Consistent turnaround: <48 hours average across all orders
- Quality reliability: 90%+ deliveries require no revision requests
- Format accuracy: Content matches selected output type specifications
- Seamless repeat ordering: Second and subsequent orders feel effortless

**User Sentiment Milestone:** Uploader says "I'm coming back" after first successful delivery and becomes repeat customer

**For Creators (Content Workers):**

Success is achieved when creators experience steady, fairly-compensated work with clear growth trajectory:

**Tier Advancement Success (Critical Retention Moment):**
- **Transparency:** Real-time progress visibility (e.g., "12/30 approvals to Mid-Level")
- **Achievement recognition:** System celebrates advancement with notification/achievement badge
- **Immediate impact:** Rate multiplier takes effect on very next task claimed
- **Unlocked opportunities:** Higher-tier task pool becomes immediately accessible
- **Fairness validation:** Advancement feels earned through quality performance, not arbitrary decisions

**Ongoing Success Indicators:**
- **Economic stability:** Weekly payouts delivered reliably and accurately
- **Task availability:** Sufficient tasks available matching creator's tier and capacity
- **Work quality feedback:** Clear, actionable QA feedback when revisions needed
- **Earnings growth:** Visible progression from Probationary (0.8x) → Expert (1.5x) rates over time

**User Sentiment Milestone:** Creator says "This is sustainable income with growth potential" and remains active month-over-month

### Business Success

**3-Month Success Indicators (Early Validation):**

Proof that marketplace mechanics and economics function correctly:

- **100 active monthly uploaders** (10% of Year 1 target) - validates demand
- **30-50 active creators** (creator-to-uploader ratio 1:2 to 1:3) - validates supply adequacy
- **70% first-attempt QA pass rate** - validates creator quality and rubric clarity
- **40% repeat order rate** - validates quality and value proposition
- **36-48 hour average turnaround** - validates workflow efficiency
- **35-40% sustained platform margin** - validates economic model

**12-Month Success - Product-Market Fit:**

**Primary North Star Metric:** **Consistent volume of transcription requests**
- **1,000 monthly active uploaders** with average 3-5 requests per uploader per month
- Proves: Real demand, sustainable usage patterns, product value

**Supporting Validation Metrics:**
- **200 active creators** handling volume with <48hr average turnaround - proves supply scalability
- **60% user retention rate** - proves output quality justifies repeat usage and trust
- **35-40% platform margin maintained** at scale - proves sustainable unit economics
- **Creator month-over-month retention >70%** - proves creator economics work

**Revenue Targets:**
- Primary: Transaction volume from base service (35-40% margin)
- Secondary: Rush pricing adoption (+50% premium) for 10-15% of orders
- Tertiary: Express delivery (+100% premium) for 5% of urgent orders
- Future: Enterprise subscription revenue (post-PMF)

### Technical Success

**System Reliability Requirements:**
- **Uptime:** 99.5% minimum (acceptable downtime: ~3.6 hours/month)
- **Data integrity:** Zero lost uploads, zero lost creator submissions, zero lost QA reviews
- **Payment accuracy:** 100% accurate creator payout calculations with audit trail

**Performance Thresholds:**
- **Upload handling:** Reliable processing of 500MB audio files with resume capability for failed uploads
- **Transcription SLA:** Audio transcribed within 15 minutes of upload completion (via AssemblyAI/Whisper integration)
- **Platform responsiveness:**
  - Page load times <2 seconds (desktop)
  - Mobile-responsive performance <3 seconds
  - Editor auto-save every 30 seconds without user disruption
- **Real-time updates:** Task status changes reflected within 5 seconds across all user dashboards

**Security & Fraud Prevention:**
- **Pre-launch requirements:**
  - Multi-account detection system operational
  - Device fingerprinting active for all registrations
  - Role isolation enforcement tested and verified
  - Email normalization preventing duplicate account creation
- **Ongoing monitoring:**
  - Automated flagging for suspicious patterns (quality drops, deadline misses, plagiarism)
  - Account flagging system operational with admin review workflow

**Integration Success:**
- **Audio transcription:** AssemblyAI or Whisper API integration tested and scalable
- **Payment processing:** Stripe or equivalent integrated for creator payouts (weekly batch processing)
- **Plagiarism detection:** Integration active and providing reliable detection
- **AI content detection:** Tool integrated and providing scoring for originality metrics

### Measurable Outcomes

**90-Day Milestones:**
- Platform publicly launched with all 6 differentiators operational
- 100 active uploaders making regular transcription requests
- 30-50 vetted creators onboarded and actively claiming tasks
- 70% QA first-pass rate demonstrating quality baseline
- 40% repeat customer rate proving initial value proposition
- 99.5% uptime maintained

**12-Month Milestones:**
- 1,000 monthly active uploaders with consistent request volume (north star metric)
- 200 active creators with <48hr average turnaround
- 60% retention rate proving product-market fit
- Platform margin sustained at 35-40%
- Creator retention >70% month-over-month
- 99.5%+ uptime maintained at scale

## Product Scope

### Full-Scope Launch Strategy

**Decision:** Launch with complete feature set including all 6 core differentiators operational from day one.

**Rationale:** Competitive differentiation IS the moat. The integrated system of role isolation + 5-tier advancement + specialized workflow + QA + fraud prevention + sustainable economics creates defensibility that cannot be achieved with partial implementation.

### Launch Feature Set (Complete Implementation)

**1. Role Isolation Design Philosophy**
- Creators never see client names, client pricing, or platform margins
- Task-based interface (NOT gig marketplace dynamics)
- Separate client and creator experiences with zero data crossover
- Role separation enforcement preventing account type switching

**2. Complete 5-Tier Creator Level System**
- All tiers operational: Probationary (0.8x) → Junior (0.9x) → Mid-Level (1.0x) → Senior (1.25x) → Expert (1.5x)
- Automatic task filtering by qualification level
- Real-time tier progress visibility in creator dashboard
- Admin oversight with manual promotion/demotion capability
- Achievement recognition system for tier advancements

**3. Specialized Audio Content Workflow**
- Synced audio player with waveform visualization
- Variable speed playback (0.5x - 2x)
- Keyboard shortcuts for efficient navigation
- Rich text block-based editor with auto-save (30-second intervals)
- Integrated quality checks (plagiarism, AI detection, word count validation)
- Format export: MD, PDF, DOCX

**4. Comprehensive Quality Assurance**
- Dual-layer review: Editor QA + optional client revision (3 attempts max)
- Rubric-based scoring across 6 weighted dimensions:
  - Accuracy (25%)
  - Completeness (20%)
  - Clarity (20%)
  - Actionability (15%)
  - Formatting (10%)
  - Originality (10%)
- QA approval threshold: 4.0/5.0 minimum
- Account flagging system (quality, plagiarism, deadline issues)
- Auto-detection triggers for problematic patterns

**5. Fraud Prevention Architecture**
- Device fingerprinting for all new registrations
- Email normalization (preventing +alias tricks, dots in Gmail, etc.)
- Role separation enforcement (technical + policy)
- Multi-account detection and prevention
- Automated flagging for suspicious patterns with admin review queue

**6. Sustainable Economics & Pricing**
- Base transaction pricing with 35-40% platform margin
- Rush pricing option (+50% premium for 24hr delivery)
- Express delivery option (+100% premium for 12hr delivery)
- Transparent creator earnings visibility (WITHOUT client pricing exposure)
- Weekly payout schedule with clear payment tracking
- Fair compensation tied to tier level and quality performance

**All 9 Content Format Types:**
1. Executive Summaries
2. Key Insights
3. Action Items
4. Reflection Questions
5. Social Media Packs
6. Blog Posts
7. Fact-Check Reports
8. Show Notes
9. Newsletter Segments

**Platform Infrastructure:**
- Multi-role authentication system (Clients, Creators, QA Editors, Admins)
- Audio upload with resume capability (up to 500MB files)
- Automated transcription integration (AssemblyAI/Whisper)
- Task routing and claim/lock mechanism
- Creator dashboard with earnings tracking and tier progression
- QA review queue with rubric scoring interface
- Admin dashboard with dispute resolution workflow
- Payment processing integration (Stripe or equivalent)
- 99.5% uptime infrastructure

### Post-Launch Growth Features (12-18 Months)

**Enterprise Tier:**
- Dedicated account management
- Custom SLAs and priority routing
- Volume discounts
- API access for bulk operations
- White-label options

**Advanced Creator Features:**
- Portfolio showcase for top performers
- Specialization tracks (industry expertise, format expertise)
- Mentorship programs (Expert-tier creators mentor Probationary)
- Creator referral bonuses

**Platform Intelligence:**
- AI-assisted quality pre-checks before QA review
- Predictive task routing based on creator strengths
- Automated quality trend analysis and creator coaching suggestions
- Market demand forecasting for creator capacity planning

### Vision (18-24+ Months)

**Horizontal Expansion:**
- Additional content source types beyond podcasts (video, articles, interviews)
- New output format types based on demand analysis
- Multi-language support for global creators

**Vertical Integration:**
- Direct AI podcast creation tools for uploaders
- Integrated distribution channels for finished content
- Analytics dashboard for content performance tracking post-publication


## User Journeys

### Journey 1: Alex Chen - From AI Podcast Creator to Content Empire Builder

Alex is a 34-year-old educational entrepreneur who discovered he could create AI-generated podcasts on complex topics in minutes. The problem? He has 50 podcast episodes sitting on his hard drive because transforming them into blog posts, social media content, and newsletter segments takes him 3-4 hours per episode - time he doesn't have. His audience keeps asking "where's the blog version?" but he's stuck in creation limbo.

Late one Tuesday, after another week of zero content published despite having 4 new podcast episodes ready, Alex searches "AI podcast to blog post service" and finds jabur. The promise of 24-48 hour turnaround with human curation catches his attention - he's tried pure AI tools and the quality was terrible. He uploads his first 45-minute podcast on "Introduction to Quantum Computing" and selects 3 output types: Executive Summary, Blog Post, and Social Media Pack.

36 hours later, Alex receives a notification. The Blog Post is... actually good. Really good. Better than he could have written himself. The creator caught nuances from the podcast, added relevant examples, and structured it perfectly for SEO. The Social Media Pack has 10 ready-to-post pieces that capture the essence without dumbing it down. He publishes immediately.

Three months later, Alex has a system: Record podcast Monday, upload to jabur Tuesday, publish across all channels Thursday-Friday. His audience has tripled, his email list is growing 15% monthly, and he's spending his time creating new content instead of reformatting old content. He's upgraded to the rush pricing tier because the ROI is obvious - every $50 he spends on jabur content generates $500+ in course sales.

### Journey 2: Maria Gonzalez - From Gig Platform Burnout to Sustainable Income

Maria is a 42-year-old former magazine editor who left her job to freelance, hoping for flexibility and fair compensation. Instead, she's stuck on gig platforms where she bids against hundreds of writers, clients ghost her after free "test projects," and she never knows if next week will have work. She's talented but exhausted by the constant hustle and low pay.

A writer friend mentions jabur: "It's different - you don't bid, you just claim tasks. The pay is transparent, and there's an actual advancement system." Maria is skeptical but desperate. She applies, submits her portfolio and a sample task, and gets accepted as a Probationary creator. Her first task appears: Create an Executive Summary from a 30-minute podcast about sustainable gardening. Task value: $15. Time estimate: 45-60 minutes.

Maria completes her first task in 50 minutes. The audio player with synchronized transcript makes it easy - she can speed through sections, mark key points, and the editor auto-saves her work. She submits it. 18 hours later: "Approved - Score 4.3/5.0." The $15 hits her pending earnings, and she sees "Progress: 1/20 approvals to Junior (rate: 0.9x)." Two things hit her: the feedback is actually helpful (not vague), and there's a clear path forward.

Six months later, Maria is a Mid-Level creator earning $800-1,200/week working 25-30 hours. She knows exactly when she'll get paid (every Friday), she can see her tier progress (15/30 approvals to Senior), and she's developed a specialty in technical content that pays better. For the first time in 3 years, she's not anxious about money. She tells her friend: "This is the first platform that treats me like a professional, not a commodity."

### Journey 3: James Park - From QA Chaos to Quality at Scale

James is a 38-year-old former senior editor at a publishing house who joined jabur as the first QA Editor when they had 5 creators. Now they have 40 creators submitting 200+ pieces per week, and he's drowning. His inbox is chaos, he's using Google Sheets to track submissions, and he can't remember which creator needs what feedback. Quality is slipping because he's rushing through reviews just to keep up.

The platform team rolls out the new QA dashboard. James is skeptical - he's seen "tools" before that just add more clicks. But he opens it Monday morning: a clean review queue sorted by deadline, each submission showing the rubric template, the original audio with synchronized transcript, and the creator's submission side-by-side. He clicks into his first review - a Blog Post about cryptocurrency regulation.

James realizes he can listen to the audio at 1.5x speed while reading the creator's output, mark specific sections for inline comments, and fill out the rubric scoring in real-time. What used to take 25 minutes now takes 12. The rubric forces him to be consistent - no more vague "needs improvement" feedback. He scores it: Accuracy 5/5, Completeness 4/5, Clarity 5/5, Actionability 4/5, Formatting 5/5, Originality 5/5. Total: 4.7/5 - Approved. The creator gets clear feedback on the completeness gap with specific examples.

Three months later, James is processing 250 reviews per week comfortably. His average review time is down to 10 minutes, quality scores have improved (first-pass rate up from 62% to 74%), and creators are advancing faster because feedback is actionable. He's hired a second QA editor and trained them in 2 days using the same rubric system. Platform leadership asks him: "How do you maintain quality at this scale?" His answer: "The tools do half the work - I just make the judgment calls."

### Journey 4: Sarah Kim - From Firefighter to Strategic Operator

Sarah is a 31-year-old operations manager who thought she was joining a marketplace platform. Instead, she's become a full-time firefighter: clients complaining about quality, creators disputing scores, payment issues every Friday, and she has zero visibility into what actually happened. Every dispute requires her to dig through Slack messages, email threads, and bug developers for database queries. She's spending 30 hours/week on disputes that should take 10.

The engineering team finally ships the Admin Dashboard. Sarah opens it with low expectations. She sees her first dispute: "Client rejected Blog Post - claims it's off-topic. Creator says client brief was vague." She clicks into the dispute case. Everything is there: the original audio file (she can listen), the transcript, the client's initial brief, the creator's three submission attempts with timestamps, the QA editor's scores and inline comments, and the full message history.

Sarah listens to 2 minutes of the audio, reads the brief, and sees the pattern immediately: the client's brief said "focus on practical applications" but the audio spent 80% on theory. The creator followed the audio accurately. The QA editor approved it (4.2/5) because accuracy was technically correct. This isn't a quality issue - it's a client expectation mismatch. She uses the decision support tool: "Partial Refund (50%) - Client Brief Mismatch." She drafts messages to both parties explaining the decision with evidence timestamps. Total time: 8 minutes instead of the usual 45.

Six months later, Sarah has processed 180 disputes with an average resolution time of 12 minutes. Her decisions are consistent because she has all the context, refund rate has dropped from 8% to 3% because she can educate clients on better briefs, and creator satisfaction is up because they know disputes will be fair. She's shifted 70% of her time from firefighting to strategy: analyzing quality trends, identifying creators for advancement, and planning the enterprise tier rollout. When asked about the change, she says: "I finally feel like I'm managing a marketplace, not just managing chaos."

### Journey Requirements Summary

These four narrative journeys reveal the following capability requirements across the platform:

**Upload & Content Delivery Capabilities (Alex's Journey):**
- Simple, intuitive upload interface with multi-format selection
- Clear turnaround time expectations and progress visibility
- Quality notification system for delivery alerts
- Download interface supporting multiple format options (MD, PDF, DOCX)
- Rush/express pricing tiers for ROI-conscious power users
- Repeat order workflow optimization

**Creator Workspace & Advancement (Maria's Journey):**
- Fair, transparent creator application and vetting process
- Task board interface with clear value visibility (creator payout shown, client pricing hidden)
- Advanced audio player with synchronized transcript and variable speed playback
- Rich text block-based editor with auto-save functionality
- Real-time tier progression tracking and advancement notifications
- Weekly payout system with transparent earnings dashboard
- Actionable, specific QA feedback (not vague critiques)
- Task claiming and locking mechanism to prevent double-assignment

**QA Review & Quality Management (James's Journey):**
- Scalable review queue with flexible sorting (deadline, creator, content type)
- Side-by-side review interface (audio + transcript + submission in one view)
- Structured rubric-based scoring system (6 dimensions with weighting)
- Inline commenting capability for specific feedback
- Performance analytics dashboard (first-pass rates, review velocity, quality trends)
- Multi-editor workflow support with consistent standards
- Creator performance tracking over time

**Admin Operations & Dispute Resolution (Sarah's Journey):**
- Comprehensive dispute context view aggregating all evidence
- Integrated audio playback with transcript access for verification
- Complete submission history with timestamps and version tracking
- Full message history integration across client-creator-QA communications
- Decision support tools with templated resolution options
- Analytics dashboard for operational insights (quality trends, refund rates, creator performance metrics)
- Refund processing workflow with reason tracking
- Client education tools for brief writing and expectation management


## SaaS B2B Platform Specific Requirements

### Project-Type Overview

jabur operates as a **multi-tenant SaaS B2B marketplace** with sophisticated role isolation and permission architecture. The platform serves four distinct user types across global markets (EU, US, Asia, Africa) requiring compliance with multiple data privacy regulations while maintaining strict data boundaries between marketplace participants.

**Key Technical Challenges:**
- Multi-role architecture with enforced role separation (clients can never become creators, and vice versa)
- Complex state management across upload → transcription → task routing → creation → QA → delivery workflow
- Real-time updates and task locking mechanisms at scale
- Global compliance requirements (GDPR for EU, regional data privacy laws)
- Payment processing with accurate creator payout calculations and audit trails

### Technical Architecture Considerations

#### Multi-Tenant Data Model

**Architecture Decision: Shared Database with Row-Level Security (RLS)**

Rather than separate database tenants per creator or client, jabur will use a **shared database architecture** with strict **row-level security policies** for the following reasons:

- **Cost Efficiency**: Single database infrastructure reduces operational costs and complexity vs. per-tenant databases
- **Simplified Operations**: Easier backups, migrations, and schema updates across all tenants
- **Performance**: Shared connection pooling and query optimization across all users
- **Role Isolation Enforcement**: RLS policies guarantee creators never see client data and vice versa, even if application logic fails

**Implementation Requirements:**
- PostgreSQL RLS policies enforcing role-based data access at database level
- Application-level middleware double-checking role permissions before database queries
- Audit logging for all cross-role data access attempts (flagged for security review)
- Creator workspaces isolated by `creator_id` with no access to `client_id` foreign keys
- Admin role granted full read access across all tables for dispute resolution and operational oversight

#### Permission Matrix (RBAC)

**Role Capabilities:**

| Capability | Uploader (Client) | Creator | QA Editor | Admin |
|-----------|------------------|---------|-----------|-------|
| Upload audio & request content | ✅ Full | ❌ None | ❌ None | ✅ Full (for testing/support) |
| View client pricing | ✅ Own only | ❌ Never | ❌ None | ✅ Full |
| View creator identity | ❌ Never | ✅ Own only | ✅ Full | ✅ Full |
| Claim and work on tasks | ❌ None | ✅ Tier-filtered | ❌ None | ✅ Full (for testing) |
| See creator payout amounts | ❌ Never | ✅ Own only | ✅ Full | ✅ Full |
| View historical submissions/scores | ❌ None | ✅ Full history | ✅ Full | ✅ Full |
| Submit content for QA review | ❌ None | ✅ Full | ❌ None | ❌ None |
| Review and score submissions | ❌ None | ❌ None | ✅ Full | ✅ Full |
| Override QA reviews | ❌ None | ❌ None | ✅ Can override others | ✅ Full |
| Request revisions (post-delivery) | ✅ 3 attempts max | ❌ None | ❌ None | ✅ Unlimited |
| Process refunds and disputes | ❌ Can request | ❌ Can dispute | ❌ None | ✅ Full |
| View platform analytics | ❌ None | ✅ Own performance | ✅ QA metrics | ✅ Full platform |
| Promote/demote creator tiers | ❌ None | ❌ None | ❌ None | ✅ Full |
| Access audit logs | ❌ None | ❌ None | ❌ None | ✅ Full |

**Critical Permission Rules:**
- **Uploader Blindness**: Uploaders see tasks as completed by "jabur" (the entity), never individual creator names or profiles
- **Creator Blindness**: Creators see tasks as "Request #12847" with audio and output requirements, never client names or client pricing
- **Earnings Transparency (Creator-only)**: Creators see their payout amount ($15, $22.50, etc.) but never see what the client paid
- **Historical Performance (Creator)**: Creators have full access to their own submission history, scores, QA feedback, and tier progression stats (critical for advancement transparency)
- **QA Override Capability**: QA Editors can override each other's reviews for consistency enforcement or dispute resolution
- **Admin Full Access**: Admins can read all data across roles for dispute resolution, fraud investigation, and operational support

### Subscription Tiers & Pricing Model

**Phase 1 - Launch Pricing (Transaction-Based):**

jabur launches as a **transaction-based platform** (not subscription-based initially) with dynamic pricing tiers:

**Base Service:**
- Standard turnaround: 24-48 hours
- Platform margin: 35-40% of client pricing
- Creator payout: 60-65% of client pricing (adjusted by tier multiplier)

**Premium Tiers:**
- **Rush Pricing**: +50% premium for 24-hour guaranteed delivery
- **Express Delivery**: +100% premium for 12-hour guaranteed delivery

**Pricing Transparency Rules:**
- Creators see: Their payout amount and tier multiplier applied
- Creators NEVER see: Client paid amount or platform margin
- Clients see: Total price including rush/express premiums if selected

**Phase 2 - Enterprise Subscription (Post-Launch, 12-18 months):**

Once product-market fit is achieved, introduce enterprise subscription tier for high-volume clients:
- **Enterprise Features**: Dedicated account management, custom SLAs, priority task routing, volume discounts, API access, white-label options
- **Enterprise Pricing**: Monthly subscription + discounted per-transaction fees
- **SOC 2 Type II Requirement**: Enterprise tier requires SOC 2 Type II certification (see Compliance section)

### Integration Requirements

jabur requires **five critical third-party integrations** for core functionality:

#### 1. Audio Transcription Service
**Provider Options**: AssemblyAI (preferred) or OpenAI Whisper API
**Requirements:**
- Automatic transcription within 15 minutes of upload completion
- Support for audio files up to 500MB and 3 hours duration
- Timestamp-aligned transcript for synchronized audio player
- Speaker diarization (optional, but valuable for multi-speaker podcasts)
- API key management and failover strategy if primary provider fails

#### 2. Payment Processing (Mandatory Integrations)
**Providers**: Stripe + M-Pesa (both mandatory)

**Stripe (Global Payment Processing):**
- **Creator Payouts**: Weekly batch processing every Friday
- **Payout Methods**: Bank transfer (ACH/SEPA), PayPal, Stripe direct deposit
- **Multi-Currency Support**: USD, EUR, GBP, regional currencies for global creator base
- **Audit Trail**: Full transaction history with creator earnings calculations and platform margin tracking
- **Refund Handling**: Automated refund processing for disputed deliveries
- **Tax Compliance**: 1099 generation for US-based creators (annual)

**M-Pesa (Mandatory for African Market):**
- **Critical for Kenya, Tanzania, and African creators** where mobile money is dominant payment method
- **Integration**: M-Pesa API for mobile money transfers
- **Payout Support**: Direct M-Pesa mobile wallet transfers for creator earnings
- **Currency**: KES (Kenyan Shilling), TZS (Tanzanian Shilling), regional currencies
- **Rationale**: Many African creators lack traditional bank accounts but have M-Pesa mobile money access
- **Weekly Payouts**: M-Pesa payouts processed in same weekly batch as Stripe payouts

**Payment Architecture:**
- Creators select preferred payout method during onboarding (Stripe or M-Pesa)
- Weekly batch processing routes payments to appropriate provider based on creator preference
- Full audit trail across both payment providers for compliance and dispute resolution

#### 3. Plagiarism Detection
**Provider**: Copyscape API, Turnitin API, or similar
**Requirements:**
- Real-time plagiarism checking before creator submits to QA
- Originality score threshold: 90%+ required for QA submission
- URL detection if content matches existing web pages
- Integration into creator editor interface (pre-submission check)

#### 4. AI Content Detection
**Provider**: GPTZero, Originality.ai, or similar
**Requirements:**
- AI-generated content detection scoring
- Threshold: <30% AI-detected for human-curated standard
- Integrated into QA review interface for Originality rubric scoring
- Flagging system if creator consistently submits high AI-detection scores

**Integration Architecture:**
- All integrations use API keys stored in secure environment variables
- Fallback strategies for critical services (transcription, payment processing)
- Monitoring and alerting for integration failures or degraded performance
- Rate limiting and cost controls to prevent runaway API usage

### Compliance & Data Privacy Requirements

#### Global Compliance Targets

jabur targets **four major geographic markets** with corresponding compliance obligations:

**1. European Union (EU) - GDPR Required**
**2. United States - CCPA (California), state-level privacy laws**
**3. Asia - Regional data privacy laws (varies by country)**
**4. Africa - Emerging data privacy regulations**

#### GDPR Compliance (EU Market - Mandatory)

**Data Subject Rights:**
- **Right to Access**: Users can request all personal data held (audio uploads, transcripts, submissions, payment info)
- **Right to Erasure ("Right to be Forgotten")**: Users can request account and data deletion
- **Right to Data Portability**: Users can export their data in machine-readable format (JSON/CSV)
- **Right to Rectification**: Users can correct inaccurate personal information

**Implementation Requirements:**
- User data export functionality (self-service dashboard feature)
- Account deletion workflow with data purge verification
- Cookie consent management for EU visitors
- Privacy policy with clear data processing disclosure
- Data Processing Agreements (DPAs) for third-party integrations (AssemblyAI, Stripe, M-Pesa, etc.)
- EU data residency option (optional but valuable for enterprise clients)

#### Data Retention & Deletion Policies

**Automated Data Lifecycle Management:**

| Data Type | Retention Period | Rationale |
|-----------|-----------------|-----------|
| **Audio Files (uploaded by clients)** | 7 days | Minimize storage costs; transcript sufficient for creator work after initial transcription |
| **Transcripts** | 30 days | Retained longer than audio for dispute resolution and QA review history |
| **Creator Submissions** | 30 days | Required for dispute resolution, QA appeals, client revision requests (3 attempts) |
| **Delivered Content (final output)** | 90 days | Client download window and dispute resolution period |
| **Payment Records** | 7 years | Tax compliance and audit requirements (IRS, EU tax authorities) |
| **Audit Logs (security events)** | 1 year | Fraud detection, security investigations, compliance audits |
| **User Account Data** | Until account deletion request | GDPR requires retention only while necessary; deleted on user request |

**Automated Deletion Jobs:**
- Daily cron job: Delete audio files >7 days old
- Weekly cron job: Delete transcripts and submissions >30 days old
- Quarterly cron job: Delete delivered content >90 days old
- Annual audit: Review payment records for 7-year retention compliance

**Exception Handling:**
- Data involved in active disputes is flagged and exempt from automated deletion until resolution
- Legal hold capability for data involved in legal proceedings or investigations

#### SOC 2 Type II Certification (Enterprise Tier Requirement)

**Timeline**: Required before launching Enterprise tier (12-18 months post-launch)

**SOC 2 Trust Service Criteria:**
- **Security**: Access controls, encryption, vulnerability management
- **Availability**: 99.5%+ uptime SLA, disaster recovery, incident response
- **Processing Integrity**: Data integrity controls, error handling, audit trails
- **Confidentiality**: Role isolation, data encryption at rest and in transit
- **Privacy**: GDPR/CCPA compliance, data retention policies, user consent management

**Implementation Milestones:**
- Month 1-3: Gap analysis and control implementation
- Month 4-6: Internal audit and remediation
- Month 7-9: External auditor engagement (Type I audit)
- Month 10-12: Monitoring period and Type II audit completion

#### Security & Fraud Prevention (Compliance Support)

**Pre-Launch Security Requirements:**
- **Encryption**: TLS 1.3 for data in transit, AES-256 for data at rest
- **Authentication**: Multi-factor authentication (MFA) for Admin and QA Editor roles
- **Device Fingerprinting**: Fraud detection for multi-account creation attempts
- **Email Normalization**: Prevent duplicate accounts via email alias tricks
- **Role Isolation Enforcement**: Database-level RLS + application-level middleware checks
- **Audit Logging**: All admin actions, role changes, payment transactions, dispute resolutions logged with timestamps

**Ongoing Security Monitoring:**
- Automated flagging for suspicious patterns (quality drops, deadline misses, plagiarism spikes)
- Quarterly security audits and penetration testing
- Incident response plan for data breaches or fraud detection

### Implementation Considerations

**Technical Stack Recommendations:**
- **Database**: PostgreSQL with Row-Level Security (RLS) policies for role isolation
- **Backend**: Node.js/Express or Django for API development with role-based middleware
- **Frontend**: React or Next.js for multi-role dashboard interfaces
- **File Storage**: AWS S3 or equivalent with automatic lifecycle policies (7-day audio deletion)
- **Job Queue**: Redis + Bull/Celery for background tasks (transcription, payouts, automated deletions)
- **Monitoring**: Datadog, Sentry, or equivalent for uptime monitoring and error tracking
- **Infrastructure**: AWS or GCP with auto-scaling for traffic spikes and 99.5% uptime SLA

**Critical Development Priorities:**
1. **Role Isolation**: Database RLS + application middleware must be implemented first and tested rigorously
2. **Payment Accuracy**: Creator payout calculations with audit trail (financial accuracy is non-negotiable)
3. **Dual Payment Integration**: Both Stripe and M-Pesa integrations operational before African market launch
4. **Data Lifecycle Automation**: Automated deletion jobs must be tested before launch to ensure compliance
5. **Fraud Prevention**: Device fingerprinting and email normalization active from day one
6. **GDPR Compliance**: Data export and deletion workflows operational before EU market launch


## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Platform MVP (Full-Scope Launch)

jabur launches as a **complete platform** rather than incrementally-built MVP because the competitive moat depends on the integrated system of all 6 differentiators working together. Launching without role isolation, creator advancement, specialized workflow, comprehensive QA, fraud prevention, or sustainable economics would create a product indistinguishable from generic freelance marketplaces.

**Strategic Rationale:**
- **Differentiation is the moat**: Each differentiator alone is replicable; the integrated system is defensible
- **Quality cannot be compromised**: QA system must be operational from day one to establish platform reputation
- **Two-sided marketplace dynamics**: Both client and creator experience must be compelling to achieve liquidity
- **Fraud prevention is pre-launch**: Cannot retrofit security after bad actors establish patterns

**Resource Requirements:**
- **Team Size:** 4-6 engineers (2 backend, 2 frontend, 1 full-stack, 1 DevOps/infrastructure)
- **Development Timeline:** 4-6 months for full-scope launch
- **Key Skills:** PostgreSQL with RLS, React/Next.js, payment integrations (Stripe + M-Pesa), compliance (GDPR), audio processing

### Phase 1: Full-Scope Launch (All 6 Differentiators Operational)

**Core User Journeys Supported:**
- ✅ Alex (Uploader): Upload audio → select formats → receive quality content within 24-48hrs
- ✅ Maria (Creator): Claim tasks → work with specialized tools → earn fair pay → advance through tiers
- ✅ James (QA Editor): Review submissions → score with rubric → provide actionable feedback → maintain quality at scale
- ✅ Sarah (Admin): Resolve disputes → monitor quality → manage fraud → strategic oversight

**Must-Have Capabilities (Launch Day 1):**

**1. Role Isolation Design Philosophy**
- Complete data separation between clients and creators (database RLS + application middleware)
- Task-based creator interface (no gig marketplace dynamics)
- Uploader blindness to creator identity (entity-level interaction only)

**2. Complete 5-Tier Creator Level System**
- All tiers operational: Probationary (0.8x) → Junior (0.9x) → Mid-Level (1.0x) → Senior (1.25x) → Expert (1.5x)
- Automatic task filtering by tier qualification
- Real-time tier progress tracking with advancement notifications
- Admin manual promotion/demotion capability

**3. Specialized Audio Content Workflow**
- Synced audio player with waveform, variable speed (0.5x-2x), keyboard shortcuts
- Rich text block-based editor with 30-second auto-save
- Integrated quality checks (plagiarism, AI detection, word count validation)
- Multi-format export (MD, PDF, DOCX)

**4. Comprehensive Quality Assurance**
- Dual-layer review: QA approval + optional client revision (3 attempts max)
- Rubric-based scoring (6 weighted dimensions: Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- QA approval threshold: 4.0/5.0 minimum
- Account flagging system with auto-detection triggers

**5. Fraud Prevention Architecture**
- Device fingerprinting for new registrations
- Email normalization preventing alias/duplicate accounts
- Role separation enforcement (technical + policy)
- Multi-account detection with admin review queue
- Audit logging for all security-relevant actions

**6. Sustainable Economics & Dual Payment Integration**
- Base pricing (35-40% platform margin) + Rush (+50%) + Express (+100%)
- Transparent creator earnings (WITHOUT client pricing exposure)
- Weekly payouts via Stripe (global) and M-Pesa (African markets)
- Full audit trail for payment compliance

**Platform Infrastructure (Launch Requirements):**
- Multi-role authentication (4 distinct role types)
- Audio upload with resume capability (500MB, 3hrs max)
- Automated transcription (AssemblyAI/Whisper, <15min SLA)
- Task routing with claim/lock mechanism
- PostgreSQL with Row-Level Security
- 99.5% uptime infrastructure
- GDPR compliance (EU), CCPA compliance (US)
- Automated data lifecycle (7-day audio deletion, 30-day submission retention)

### Phase 2: Post-Launch Growth Features (12-18 Months)

**Enterprise Tier Expansion:**
- Dedicated account management for high-volume clients
- Custom SLAs and priority task routing
- Volume discounts and API access for bulk operations
- White-label options for enterprise branding
- **Prerequisite:** SOC 2 Type II certification (12-month audit process)

**Advanced Creator Features:**
- Portfolio showcase for Expert-tier creators
- Specialization tracks (industry expertise, format expertise)
- Mentorship programs (Expert creators mentor Probationary)
- Creator referral bonuses for bringing quality talent

**Platform Intelligence:**
- AI-assisted quality pre-checks before QA review submission
- Predictive task routing based on creator performance patterns and strengths
- Automated quality trend analysis with creator coaching suggestions
- Market demand forecasting for creator capacity planning

### Phase 3: Horizontal & Vertical Expansion (18-24+ Months)

**Horizontal Expansion (New Content Types):**
- Additional source formats beyond podcasts: video transcription, article curation, interview summaries
- New output format types based on demand analysis (e.g., slide decks, infographics)
- Multi-language support for global creator base and international markets

**Vertical Integration (End-to-End Content Value Chain):**
- Direct AI podcast creation tools for uploaders (create → curate → distribute in one platform)
- Integrated distribution channels for finished content (publish directly to blog, Medium, Substack)
- Analytics dashboard for content performance tracking post-publication
- Content ROI measurement for uploaders

### Risk Mitigation Strategy

**Technical Risks:**

| Risk | Mitigation Approach |
|------|-------------------|
| **Multi-role complexity leads to access control bugs** | Database RLS + application middleware + comprehensive testing; security audit before launch |
| **Payment integration failures (Stripe + M-Pesa)** | Fallback queuing system; manual payout capability; weekly batch reduces real-time dependencies |
| **Transcription API failures or cost overruns** | Dual provider strategy (AssemblyAI + Whisper); rate limiting and cost alerts |
| **Scale challenges with real-time updates** | Redis pub/sub for task status; WebSocket connection pooling; horizontal scaling plan |
| **Audio storage costs spiral** | Automated 7-day deletion enforced; S3 lifecycle policies; monitoring and alerts |

**Market Risks:**

| Risk | Validation Approach |
|------|-------------------|
| **Insufficient creator supply at launch** | Pre-launch creator recruitment with vetting; target 30-50 creators before public launch |
| **Quality inconsistency undermines reputation** | Probationary tier acts as quality filter; QA approval threshold enforced; flagging system active from day one |
| **Uploader pricing sensitivity** | Tiered pricing (base, rush, express) allows market testing; transparent value proposition (24-48hr + quality guarantee) |
| **Two-sided marketplace cold-start problem** | Seed both sides pre-launch: recruit 30-50 vetted creators + 20-30 beta uploaders for initial liquidity |

**Resource Risks:**

| Risk | Contingency Approach |
|------|---------------------|
| **Development takes longer than 6 months** | Prioritize core transaction flow (upload → transcribe → claim → create → QA → deliver); defer nice-to-have features (portfolio, specialization tracks) |
| **Team size constrained below 4 engineers** | Focus on backend/API first; use no-code/low-code tools for initial admin dashboard; delay mobile optimization |
| **Compliance requirements delay launch** | Launch in US-only market first (CCPA compliance simpler than GDPR); add EU market after GDPR implementation complete |
| **Payment integration complexity** | Launch with Stripe only; add M-Pesa integration in Phase 1.5 after African creator demand validated |


## Functional Requirements

### Account & Authentication Management

- **FR1**: Uploaders can create accounts and authenticate to access the platform
- **FR2**: Creators can apply for platform access with portfolio submission for vetting
- **FR3**: QA Editors can authenticate with multi-factor authentication (MFA) for secure access
- **FR4**: Admins can authenticate with multi-factor authentication (MFA) for secure access
- **FR5**: Users can select preferred payout method during onboarding (Stripe or M-Pesa)
- **FR6**: Users can request account deletion with complete data purge
- **FR7**: Users can export their personal data in machine-readable format (JSON/CSV)
- **FR8**: System can prevent duplicate account creation via email normalization and device fingerprinting

### Content Upload & Transcription

- **FR9**: Uploaders can upload audio files up to 500MB and 3 hours duration
- **FR10**: Uploaders can resume failed uploads without restarting from beginning
- **FR11**: Uploaders can select one or more output format types from 9 available options (Executive Summaries, Key Insights, Action Items, Reflection Questions, Social Media Packs, Blog Posts, Fact-Check Reports, Show Notes, Newsletter Segments)
- **FR12**: Uploaders can select turnaround tier (Standard 24-48hrs, Rush 24hrs +50%, Express 12hrs +100%)
- **FR13**: System can automatically transcribe uploaded audio within 15 minutes using AssemblyAI or Whisper API
- **FR14**: System can generate timestamp-aligned transcripts for synchronized playback
- **FR15**: System can automatically delete audio files after 7 days to minimize storage costs
- **FR16**: System can automatically delete transcripts after 30 days per data retention policy

### Creator Workspace & Task Management

- **FR17**: Creators can view available tasks filtered by their current tier qualification level
- **FR18**: Creators can claim tasks with automatic locking to prevent double-assignment
- **FR19**: Creators can access synchronized audio player with waveform visualization and variable speed playback (0.5x - 2x)
- **FR20**: Creators can navigate audio using keyboard shortcuts for efficient workflow
- **FR21**: Creators can work in rich text block-based editor with automatic saving every 30 seconds
- **FR22**: Creators can check plagiarism score before submitting (90%+ originality required)
- **FR23**: Creators can check AI-detection score before submitting (<30% AI-detected required)
- **FR24**: Creators can submit completed content for QA review
- **FR25**: Creators can view their complete submission history with scores and QA feedback
- **FR26**: Creators can see real-time tier progression status (e.g., "12/30 approvals to Mid-Level")
- **FR27**: Creators can view their earnings dashboard with transparent payout amounts (WITHOUT client pricing visibility)
- **FR28**: System can auto-save creator work every 30 seconds without user disruption

### Quality Assurance & Review

- **FR29**: QA Editors can access review queue sorted by deadline, creator, or content type
- **FR30**: QA Editors can review submissions with side-by-side view (audio + transcript + submission)
- **FR31**: QA Editors can score submissions using rubric with 6 weighted dimensions (Accuracy 25%, Completeness 20%, Clarity 20%, Actionability 15%, Formatting 10%, Originality 10%)
- **FR32**: QA Editors can provide inline comments on specific sections of creator submissions
- **FR33**: QA Editors can approve submissions meeting 4.0/5.0 minimum threshold
- **FR34**: QA Editors can reject submissions with actionable feedback for revision
- **FR35**: QA Editors can override other QA Editors' reviews for consistency enforcement
- **FR36**: QA Editors can view performance analytics (first-pass rates, review velocity, quality trends)
- **FR37**: Uploaders can request revisions on delivered content (maximum 3 attempts)
- **FR38**: System can flag creator accounts for quality issues, plagiarism, or deadline misses

### Creator Advancement & Compensation

- **FR39**: System can automatically assign creators to tier levels (Probationary 0.8x, Junior 0.9x, Mid-Level 1.0x, Senior 1.25x, Expert 1.5x)
- **FR40**: System can automatically promote creators when advancement criteria met (e.g., 20 approved tasks at 4.5+ average)
- **FR41**: Admins can manually promote or demote creator tier levels with justification
- **FR42**: System can apply tier multiplier to task payouts automatically
- **FR43**: System can calculate weekly creator earnings with full audit trail
- **FR44**: System can process weekly payouts every Friday via Stripe (bank transfer, PayPal, direct deposit) or M-Pesa (mobile money)
- **FR45**: System can generate 1099 tax forms for US-based creators annually
- **FR46**: Creators can view achievement notifications when advancing to new tier level
- **FR47**: System can filter task visibility based on creator tier qualification

### Admin Operations & Dispute Resolution

- **FR48**: Admins can access comprehensive dispute context view aggregating all evidence (audio, transcript, submissions, messages)
- **FR49**: Admins can listen to original audio and review complete submission history with timestamps
- **FR50**: Admins can access full message history across client-creator-QA communications
- **FR51**: Admins can use decision support tools with templated resolution options
- **FR52**: Admins can process refunds with reason tracking for disputes
- **FR53**: Admins can view analytics dashboard for operational insights (quality trends, refund rates, creator performance metrics)
- **FR54**: Admins can manually flag accounts for investigation (quality, fraud, policy violations)
- **FR55**: Admins can access complete audit logs for security events, role changes, and payment transactions
- **FR56**: Admins can read all data across roles for dispute resolution and fraud investigation (full read access)

### Admin Comped Task Management

**Purpose:** Enable admins to create complimentary (comped) tasks for partnership trials, sales demos, and creator training without client payment. Platform absorbs creator payout costs as customer acquisition or operational expense.

**Core Functionality:**

- **FR-ADMIN-01**: Admins can create comped task batches via Admin Dashboard
- **FR-ADMIN-02**: Admins can select task type (Partnership Trial, Sales Demo, Creator Training)
- **FR-ADMIN-03**: Admins must add business label for each batch (required, 100 character max)
- **FR-ADMIN-04**: Admins can upload audio files or reference existing uploads for comped tasks
- **FR-ADMIN-05**: Admins can configure format, custom instructions, and assignment rules for comped tasks
- **FR-ADMIN-06**: System calculates estimated cost based on average creator payouts by tier
- **FR-ADMIN-07**: System validates comped task creation against monthly budget before allowing creation

**Approval Workflow:**

- **FR-ADMIN-08**: Batches with fewer than 10 tasks are auto-approved (single admin authority)
- **FR-ADMIN-09**: Batches with 10-50 tasks require second admin approval with justification
- **FR-ADMIN-10**: Batches with more than 50 tasks require finance or executive approval
- **FR-ADMIN-11**: Approval requests include business justification and cost estimate
- **FR-ADMIN-12**: Approver sees real-time budget impact analysis before approving

**Budget Management:**

- **FR-ADMIN-13**: Platform administrators can set monthly comped task budget (system-configurable)
- **FR-ADMIN-14**: Admins see real-time budget usage with percentage and remaining funds
- **FR-ADMIN-15**: System blocks batch creation if monthly budget would be exceeded
- **FR-ADMIN-16**: Budget resets automatically on first day of each month
- **FR-ADMIN-17**: Executives can override budget limits with required business justification

**Task Lifecycle:**

- **FR-ADMIN-18**: Comped tasks enter same task routing queue as client-paid tasks (no preferential treatment)
- **FR-ADMIN-19**: Creators cannot distinguish comped tasks from paid tasks (maintains role isolation)
- **FR-ADMIN-20**: Comped tasks go through identical QA review process as paid tasks
- **FR-ADMIN-21**: Approved comped tasks count toward creator tier progression
- **FR-ADMIN-22**: Rejected comped tasks result in no creator payment (same quality incentive as paid tasks)
- **FR-ADMIN-23**: Admins can cancel unclaimed comped tasks before creator claims (no cost incurred)
- **FR-ADMIN-24**: In-progress or completed comped tasks cannot be cancelled (creator time commitment honored)

**Payout Handling:**

- **FR-ADMIN-25**: QA-approved comped tasks are included in weekly creator payout batch
- **FR-ADMIN-26**: Comped task payouts are flagged separately in weekly payout summary for financial tracking
- **FR-ADMIN-27**: Admins review and approve comped task payouts in weekly batch before release
- **FR-ADMIN-28**: Platform absorbs all comped task creator earnings as operating expense

**Audit & Reporting:**

- **FR-ADMIN-29**: All comped task actions are logged with admin ID, timestamp, and action type
- **FR-ADMIN-30**: Admin dashboard displays active comped batches with real-time progress
- **FR-ADMIN-31**: Admins can view batch detailed progress (completed count, QA pending, cancelled)
- **FR-ADMIN-32**: Monthly audit report shows total cost, ROI metrics, and partnership conversion tracking
- **FR-ADMIN-33**: Admins can export comped task data in CSV format for external analysis
- **FR-ADMIN-34**: System automatically flags suspicious patterns (same admin/creator pairs, abnormal volume)

**Delivery & Quality Control:**

- **FR-ADMIN-35**: Admins can download all completed tasks from a batch in bulk
- **FR-ADMIN-36**: Admins can review comped task quality before delivering to external partners
- **FR-ADMIN-37**: Admins can request revision on comped tasks (task re-enters QA queue)
- **FR-ADMIN-38**: Comped tasks are marked with batch_id and business label in database for tracking

**System Integration:**

- **FR-ADMIN-39**: Comped tasks appear in creator "Available Tasks" queue with no visual distinction
- **FR-ADMIN-40**: Comped task completion triggers identical notifications as paid task completion
- **FR-ADMIN-41**: Analytics dashboard separates comped task metrics from paid task metrics
- **FR-ADMIN-42**: Financial reports track comped task costs as "Customer Acquisition" or "Training Expense" operating category

**Use Cases:**

- **Partnership Trials:** Enterprise prospects trial 20-50 tasks before committing to annual plan (CAC investment)
- **Sales Demos:** Generate high-quality sample content for sales presentations and pitch decks
- **Creator Training:** Provide practice tasks for new creators with real audio and QA feedback
- **Service Recovery:** Offer complimentary tasks to clients after dispute resolution to rebuild trust

**Financial Model:**

- Estimated monthly budget: $1,000-$2,000 in creator payouts
- Expected ROI: 30% partnership trial conversion rate yields $30,000+ ARR per $600 trial investment
- Budget controls and approval workflows prevent cost overruns

### Fraud Prevention & Security

- **FR57**: System can capture device fingerprints for all new account registrations
- **FR58**: System can normalize email addresses to prevent alias and duplicate account tricks
- **FR59**: System can detect multi-account creation attempts and flag for admin review
- **FR60**: System can enforce role separation technically (database RLS + application middleware) preventing clients from becoming creators
- **FR61**: Creators can NEVER see client names, client pricing, or platform margins (role blindness)
- **FR62**: Uploaders can NEVER see creator identity - only see "jabur" entity completing work
- **FR63**: System can encrypt data in transit (TLS 1.3) and at rest (AES-256)
- **FR64**: System can log all admin actions, role changes, payment transactions for audit trail
- **FR65**: System can automatically flag suspicious patterns (quality drops, deadline misses, plagiarism spikes) for admin review

### Compliance & Data Management

- **FR66**: System can provide GDPR-compliant data export functionality for EU users
- **FR67**: System can execute account deletion workflow with data purge verification
- **FR68**: System can manage cookie consent for EU visitors
- **FR69**: System can automatically delete delivered content after 90 days per retention policy
- **FR70**: System can retain payment records for 7 years for tax compliance (IRS, EU tax authorities)
- **FR71**: System can exempt active dispute data from automated deletion until resolution
- **FR72**: System can support legal hold capability for data involved in legal proceedings
- **FR73**: Uploaders can download delivered content in multiple formats (MD, PDF, DOCX)
- **FR74**: System can send delivery notifications to uploaders when content is ready
- **FR75**: System can track and display task status updates in real-time across all user dashboards (within 5 seconds)


## Non-Functional Requirements

### Performance

**Response Time Requirements:**
- **NFR-P1**: User-facing page load times must complete within 2 seconds on desktop connections
- **NFR-P2**: Mobile-responsive interfaces must load within 3 seconds
- **NFR-P3**: User actions (button clicks, form submissions) must provide feedback within 500ms

**Processing Time Requirements:**
- **NFR-P4**: Audio transcription must complete within 15 minutes of upload completion for files up to 500MB
- **NFR-P5**: Task status updates must propagate to all user dashboards within 5 seconds (real-time requirement)
- **NFR-P6**: Creator editor auto-save must execute every 30 seconds without disrupting user workflow

**Concurrent User Support:**
- **NFR-P7**: System must support 200 concurrent creators claiming and working on tasks without performance degradation
- **NFR-P8**: QA review queue must handle 50 concurrent reviews with sub-2-second response times

### Security

**Data Protection:**
- **NFR-S1**: All data in transit must be encrypted using TLS 1.3 or higher
- **NFR-S2**: All data at rest must be encrypted using AES-256 encryption
- **NFR-S3**: Role isolation must be enforced at database level (PostgreSQL RLS) AND application middleware level

**Authentication & Authorization:**
- **NFR-S4**: Admin and QA Editor roles must require multi-factor authentication (MFA) for access
- **NFR-S5**: Database row-level security policies must prevent creators from accessing client data and vice versa
- **NFR-S6**: Role separation must be technically enforced - clients cannot create creator accounts and vice versa

**Audit & Monitoring:**
- **NFR-S7**: All admin actions, role changes, payment transactions, and dispute resolutions must be logged with timestamps
- **NFR-S8**: Security events must be retained for 1 year for investigation and compliance audits
- **NFR-S9**: Automated flagging must detect suspicious patterns (quality drops, deadline misses, plagiarism spikes) within 1 hour

**Fraud Prevention:**
- **NFR-S10**: Device fingerprinting must capture and store device signatures for all new account registrations
- **NFR-S11**: Email normalization must prevent duplicate account creation via alias tricks (Gmail dots, plus-addressing)
- **NFR-S12**: Multi-account detection system must flag attempts for admin review within 24 hours

### Reliability & Availability

**Uptime Requirements:**
- **NFR-R1**: System must maintain 99.5% uptime minimum (maximum acceptable downtime: 3.6 hours/month)
- **NFR-R2**: Planned maintenance windows must be scheduled during off-peak hours with 48-hour advance notice

**Data Integrity:**
- **NFR-R3**: Zero data loss tolerance for audio uploads - all uploads must be persisted or user notified of failure
- **NFR-R4**: Zero data loss tolerance for creator submissions - all work must be saved or recovery mechanism provided
- **NFR-R5**: Zero data loss tolerance for QA reviews - all scores and feedback must be persisted atomically

**Payment Accuracy:**
- **NFR-R6**: Creator payout calculations must be 100% accurate with full audit trail for reconciliation
- **NFR-R7**: Weekly payout processing must complete successfully by Friday 11:59 PM or failure alerts sent to ops team
- **NFR-R8**: Failed payment transactions must be queued for manual retry with admin notification

**Upload Resilience:**
- **NFR-R9**: Audio upload must support resume capability for failed uploads - users can continue from last uploaded chunk
- **NFR-R10**: System must handle audio files up to 500MB and 3 hours duration without corruption or data loss

### Scalability

**User Growth:**
- **NFR-SC1**: System must scale to support 10x user growth (10,000 uploaders, 2,000 creators) with <10% performance degradation
- **NFR-SC2**: Database architecture must support horizontal scaling for read-heavy workloads (task queues, review queues)
- **NFR-SC3**: File storage must support petabyte-scale growth with automatic lifecycle management (7-day audio deletion)

**Traffic Spikes:**
- **NFR-SC4**: Infrastructure must auto-scale to handle 3x average traffic during peak usage periods
- **NFR-SC5**: WebSocket connection pooling must support 1,000 concurrent real-time connections for task updates

**Two-Sided Marketplace Scaling:**
- **NFR-SC6**: Task routing system must efficiently match 1,000+ pending tasks to 200+ available creators within 60 seconds
- **NFR-SC7**: QA review queue must handle 500+ pending reviews with sorting and filtering sub-2-second response times

### Integration Reliability

**Third-Party Service Dependencies:**
- **NFR-I1**: Audio transcription integration (AssemblyAI/Whisper) must have automatic failover between providers if primary fails
- **NFR-I2**: Payment processing (Stripe) must have fallback queuing system for failed transactions with 7-day retry window
- **NFR-I3**: M-Pesa integration must support manual payout capability if API failures exceed 4-hour window

**API Key Management:**
- **NFR-I4**: All integration API keys must be stored in secure environment variables, never hardcoded
- **NFR-I5**: API key rotation must be supported without service downtime

**Monitoring & Alerts:**
- **NFR-I6**: Integration failures must trigger alerts within 5 minutes of detection
- **NFR-I7**: Rate limiting must prevent runaway API usage with cost controls and automatic throttling

**Integration SLAs:**
- **NFR-I8**: Transcription service availability must meet 99% SLA or automatic provider failover triggered
- **NFR-I9**: Payment processing availability must meet 99.9% SLA (critical for weekly payouts)

### Compliance & Data Privacy

**GDPR Compliance (EU Market):**
- **NFR-C1**: System must provide self-service data export functionality returning all user data in machine-readable format (JSON/CSV)
- **NFR-C2**: Account deletion workflow must purge all user data within 30 days with verification audit trail
- **NFR-C3**: Cookie consent management must be implemented for all EU visitors with clear opt-in/opt-out
- **NFR-C4**: Data Processing Agreements (DPAs) must be in place for all third-party integrations (AssemblyAI, Stripe, M-Pesa)

**CCPA Compliance (US California):**
- **NFR-C5**: Privacy policy must disclose all data collection, processing, and sharing practices
- **NFR-C6**: Users must be able to request disclosure of personal data collected and sold

**Data Retention Automation:**
- **NFR-C7**: Automated deletion jobs must run daily (audio files >7 days), weekly (transcripts/submissions >30 days), quarterly (delivered content >90 days)
- **NFR-C8**: Payment records must be retained for 7 years per IRS and EU tax authority requirements
- **NFR-C9**: Active dispute data must be automatically exempted from deletion until resolution
- **NFR-C10**: Legal hold capability must support data preservation for legal proceedings

**SOC 2 Type II Certification (Enterprise Tier Requirement):**
- **NFR-C11**: Security controls must meet SOC 2 Trust Service Criteria before launching Enterprise tier (12-18 month timeline)
- **NFR-C12**: Quarterly security audits and penetration testing must be conducted with remediation tracking
- **NFR-C13**: Incident response plan must be documented and tested annually for data breaches or fraud detection
