# AI Podcast to Human-Curated Content Platform
## Software Requirements & Architecture Document

**Version:** 2.0  
**Status:** Draft - Updated with Stakeholder Feedback  
**Last Updated:** December 2024  
**Document Owner:** [Your Name]  

---

## Document Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | [Your Name] | Initial draft |
| 2.0 | Dec 2024 | [Your Name] | Incorporated stakeholder comments, addressed gaps, expanded requirements |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Vision & Problem Statement](#2-vision--problem-statement)
3. [User Personas & Journey Maps](#3-user-personas--journey-maps)
4. [Functional Requirements](#4-functional-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [System Architecture](#6-system-architecture)
7. [Data Model & Database Design](#7-data-model--database-design)
8. [API Specifications](#8-api-specifications)
9. [User Interface Specifications](#9-user-interface-specifications)
10. [Security & Compliance](#10-security--compliance)
11. [Fraud Prevention & Anti-Abuse](#11-fraud-prevention--anti-abuse)
12. [Integrations & Third-Party Services](#12-integrations--third-party-services)
13. [DevOps & Infrastructure](#13-devops--infrastructure)
14. [Testing Strategy](#14-testing-strategy)
15. [Monetization & Business Model](#15-monetization--business-model)
16. [Content Moderation & Safety](#16-content-moderation--safety)
17. [Dispute Resolution System](#17-dispute-resolution-system)
18. [Risk Assessment & Mitigation](#18-risk-assessment--mitigation)
19. [Roadmap & Milestones](#19-roadmap--milestones)
20. [Appendices](#20-appendices)

---

## 1. Executive Summary

### 1.1 Project Overview

This platform bridges AI-generated podcast content with human expertise, creating a marketplace where AI podcasts are transformed into valuable, human-curated outputs including summaries, insights, reflective questions, educational materials, and derivative content.

> **Key Design Principle:** This platform is NOT a traditional freelance marketplace like Upwork. Workers (creators) should experience the platform as a task-based content creation tool, not as a gig-economy marketplace. Client and creator experiences are deliberately isolated.

### 1.2 Core Value Proposition

| Stakeholder | Value Proposition |
|-------------|-------------------|
| **Content Uploaders (Clients)** | Transform raw AI podcast audio into polished, actionable content with guaranteed quality and turnaround |
| **Content Creators (Workers)** | Access steady task-based work with clear guidelines, fair compensation, and growth opportunities |
| **Platform** | Create a unique marketplace at the intersection of AI and human creativity with sustainable margins |

### 1.3 Key Success Metrics

| Metric | Target (Year 1) | Target (Year 2) |
|--------|-----------------|-----------------|
| Monthly Active Uploaders | 1,000 | 10,000 |
| Active Content Creators | 200 | 2,000 |
| Content Turnaround Time | < 48 hours | < 24 hours |
| Creator Satisfaction Score | > 4.5/5 | > 4.7/5 |
| Uploader Retention Rate | 60% | 75% |
| Platform Margin | 20-30% | 25-35% |
| Fraud Rate | < 1% | < 0.5% |

### 1.4 Revenue Model Summary

```
Client Payment: $X
├── Creator Payout: 60-65%
├── Transcription Costs: 1-2%
├── Storage Costs: <1%
├── Payment Processing: 3-4%
├── QA Reviewer Time: 5-10%
└── Platform Margin: 20-30%
```

---

## 2. Vision & Problem Statement

### 2.1 Problem Statement

AI-generated podcasts are proliferating, but they often lack the polish, insight, and human touch needed for practical use. Users need:

- Digestible summaries of lengthy AI content
- Expert analysis and contextual insights
- Actionable takeaways and reflection prompts
- Quality assurance on AI-generated information

### 2.2 Solution Vision

A two-sided marketplace connecting AI podcast uploaders with skilled human curators who transform raw audio into valuable derivative content.

**Critical Design Decision:** The marketplace nature is abstracted from creators. They interact with a "task system" rather than directly with clients.

### 2.3 Competitive Landscape

| Competitor Type | Examples | Our Differentiation |
|-----------------|----------|---------------------|
| Transcription Services | Otter.ai, Rev | We provide curation, not just transcription |
| Podcast Summaries | Snipd, Podcastle | Human expertise, not AI-only processing |
| Content Marketplaces | Fiverr, Upwork | Specialized workflow for audio content; abstracted marketplace |
| AI Tools | ChatGPT, Claude | Human quality control and creativity |

### 2.4 Platform Philosophy

1. **Quality Over Speed:** Human curation ensures accuracy and insight
2. **Role Isolation:** Clients and creators operate in separate experiences
3. **Transparent Pricing:** Clients see clear costs; creators see fair task values
4. **Scalable Quality:** Tiered creator system ensures appropriate skill matching

---

## 3. User Personas & Journey Maps

### 3.1 Primary Personas

#### Persona 1: The Content Uploader ("Alex") - CLIENT SIDE

**Demographics:**
- Age: 28-45
- Role: Entrepreneur, educator, content creator
- Technical skill: Moderate
- Pain points: Time-poor, needs quality content fast

**Goals:**
- Transform AI podcast experiments into usable content
- Get professional summaries for newsletters/blogs
- Validate AI-generated information with human review

**Journey Map:**
```
Discovery → Registration → First Upload → Payment → Wait for Curation → Review Output → Iterate/Reorder
    |            |             |            |              |                |              |
Marketing    Onboarding    Upload UX    Checkout    Notifications    Quality Check   Loyalty Loop
```

---

#### Persona 2: The Content Creator ("Maria") - WORKER SIDE

**Demographics:**
- Age: 25-55
- Role: Writer, editor, subject matter expert
- Technical skill: Low to moderate
- Motivation: Flexible income, creative work

**Goals:**
- Earn money using writing/analysis skills
- Work on interesting, varied content
- Build reputation and increase rates
- Access higher-tier tasks as skills improve

**Journey Map:**
```
Discovery → Application → Vetting → Training → First Assignment → Delivery → Rating/Payment
    |            |           |          |              |              |            |
Recruitment  Screening   Testing   Onboarding     Workspace       Review       Payout
```

> **Note:** Creators see "tasks" not "client jobs." They never see client information, pricing paid by clients, or marketplace dynamics.

---

#### Persona 3: The Editor/QA ("James") - INTERNAL

**Demographics:**
- Age: 30-50
- Role: Senior editor, quality lead
- Technical skill: Moderate
- Motivation: Leadership, quality standards

**Goals:**
- Ensure platform quality standards
- Mentor junior creators
- Efficient review workflows
- Flag problematic accounts

**Key Capabilities Required:**
- Review and approve/reject submissions
- Provide detailed feedback to creators
- **Flag accounts for admin review** *(NEW)*
- Track creator performance over time
- Escalate quality issues

---

#### Persona 4: Platform Administrator ("Sarah") - INTERNAL

**Demographics:**
- Age: 28-45
- Role: Operations manager, platform admin
- Technical skill: High
- Motivation: Platform health, growth metrics

**Goals:**
- Monitor system health and performance
- Resolve disputes and escalations
- Manage creator tiers and permissions
- **Input tasks bypassing payment** (for testing, promotions, partnerships) *(NEW)*
- Configure pricing and business rules
- View comprehensive analytics

---

### 3.2 Secondary Personas

| Persona | Description | Key Needs |
|---------|-------------|-----------|
| Enterprise Client | Bulk uploads, API access, white-label needs | Volume pricing, dedicated support, SLAs |
| API Developer | Integration with external tools | Documentation, webhooks, rate limits |
| Finance/Compliance | Reporting, audits, tax documentation | Exportable reports, audit trails |

---

## 4. Functional Requirements

### 4.1 Epic 1: User Management & Authentication

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-1.1 | Visitor | Register with email/social auth | I can access the platform | P0 | OAuth 2.0 for Google, email verification required |
| US-1.2 | User | Choose my role (uploader/creator) | I see relevant features | P0 | Role selection during onboarding, **separate registration flows** |
| US-1.3 | User | Complete my profile | Others can learn about me | P1 | Bio, avatar, skills, portfolio links |
| US-1.4 | Creator | Submit credentials for vetting | I can be approved to work | P0 | Upload samples, certifications, linked profiles |
| US-1.5 | Admin | Review and approve creators | Quality creators join | P0 | Approval workflow with notes, bulk actions |
| US-1.6 | User | Reset my password securely | I can recover account access | P0 | Email-based reset with expiring tokens |
| US-1.7 | User | Enable 2FA | My account is more secure | P1 | TOTP-based 2FA with backup codes |
| US-1.8 | User | Delete my account and data | I can exercise data rights | P1 | GDPR-compliant deletion with 30-day grace |
| US-1.9 | Admin | **Change a creator's account level** | I can promote/demote based on performance | P0 | Level change with audit log *(NEW)* |
| US-1.10 | Admin | **Create new account levels** | I can customize the tier system | P1 | CRUD for account levels with permissions *(NEW)* |
| US-1.11 | Admin | **View account type statistics** | I understand creator distribution | P0 | Dashboard showing counts by level *(NEW)* |
| US-1.12 | System | **Enforce role separation** | Fraud is prevented | P0 | Same email cannot register as both client and creator *(NEW)* |

#### Account Level System *(NEW SECTION)*

**Creator Levels:**

| Level | Name | Access | Requirements | Base Rate Multiplier |
|-------|------|--------|--------------|---------------------|
| 0 | Probationary | Social Media Pack only | New account | 0.8x |
| 1 | Junior | Social Media Pack, Action Items | 5 approved tasks, >4.0 rating | 1.0x |
| 2 | Mid-Level | Executive Summary, Detailed Summary, Reflection Questions | 20 approved tasks, >4.3 rating | 1.1x |
| 3 | Senior | All above + Key Insights, Blog Post, Infographic Brief | 50 approved tasks, >4.5 rating | 1.25x |
| 4 | Expert | All above + Fact-Check Report | 100 approved tasks, >4.7 rating, manual approval | 1.5x |

**Level Management Rules:**
- Admins can manually promote/demote creators
- System auto-promotes based on criteria (requires admin approval)
- Demotion triggers notification with improvement plan
- Level history tracked in audit log

#### Technical Requirements

- JWT-based authentication with refresh tokens
- Role-based access control (RBAC) with permissions matrix
- Session management with configurable timeouts
- Audit logging for all authentication events
- **Separate registration endpoints for clients vs creators**
- **Device fingerprinting for fraud detection**
- **Email domain restrictions (same domain cannot be on both sides)**

---

### 4.2 Epic 2: Content Upload & Processing

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-2.1 | Uploader | Upload audio files (MP3, WAV, M4A) | My podcast is in the system | P0 | Max 500MB, progress indicator, resume support |
| US-2.2 | Uploader | Provide metadata (title, description, tags) | Creators understand context | P0 | Required fields validation, tag suggestions |
| US-2.3 | Uploader | Select desired output types | I get what I need | P0 | Checkbox selection with descriptions |
| US-2.4 | Uploader | See upload status and progress | I know what's happening | P0 | Real-time status updates via WebSocket |
| US-2.5 | Uploader | Get AI-generated transcript | Creators have text to work with | P0 | Automatic transcription, editable output |
| US-2.6 | Uploader | Specify special instructions | Creators know my preferences | P1 | Free-text field, saved templates |
| US-2.7 | Uploader | Set deadline preferences | I get content when needed | P1 | Standard (48h), Rush (24h), Express (12h) tiers |
| US-2.8 | Uploader | Upload in bulk via CSV/ZIP | I can process multiple files | P2 | Batch upload with metadata CSV mapping |
| US-2.9 | Admin | **Input tasks bypassing payment** | I can test, run promotions, or fulfill partnerships | P1 | Admin task creation with "comped" flag *(NEW)* |

#### Output Type Definitions *(UPDATED with Level Requirements)*

| Output Type | Description | Typical Length | Min Creator Level | Base Price |
|-------------|-------------|----------------|-------------------|------------|
| Executive Summary | High-level overview | 200-500 words | Mid-Level (2) | $15 |
| Detailed Summary | Comprehensive breakdown | 1000-2000 words | Mid-Level (2) | $35 |
| Key Insights | Analytical observations | 5-10 bullet points | Senior (3) | $25 |
| Reflection Questions | Thought-provoking prompts | 5-10 questions | Mid-Level (2) | $20 |
| Action Items | Practical takeaways | 5-15 items | Junior (1) | $18 |
| Blog Post | Repurposed long-form content | 800-1500 words | Senior (3) | $50 |
| Social Media Pack | Platform-ready snippets | 5-10 posts | Junior (1) | $30 |
| Infographic Brief | Visual content outline | Structured outline | Senior (3) | $40 |
| Fact-Check Report | Accuracy verification | Variable | Expert (4) | $75 |

> **Level Enforcement:** Tasks requiring a specific level will only be visible to creators at or above that level. A project with mixed output types will be split into separate assignments routed to appropriate creators.

#### Technical Requirements

- Chunked upload support for large files
- Virus scanning on all uploads
- Audio format validation and conversion
- Cloud storage with CDN distribution
- Automatic transcription queue management
- Metadata extraction from audio files
- **Admin bypass for payment workflow**
- **Task splitting logic for multi-level projects**

---

### 4.3 Epic 3: Content Creator Workspace

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-3.1 | Creator | Browse available assignments | I can find work | P0 | Filterable list with relevant details, **filtered by my level** |
| US-3.2 | Creator | Claim an assignment | I commit to delivering | P0 | Lock assignment, set deadline commitment |
| US-3.3 | Creator | Access audio player with transcript | I can work efficiently | P0 | Synced playback, timestamp navigation |
| US-3.4 | Creator | Use a distraction-free editor | I can focus on quality | P0 | Clean UI, auto-save, formatting tools |
| US-3.5 | Creator | See guidelines and examples | I know quality standards | P0 | Contextual help, sample outputs |
| US-3.6 | Creator | Submit completed work | My work goes for review | P0 | Validation checks, confirmation |
| US-3.7 | Creator | Track my earnings and stats | I understand my performance | P1 | Dashboard with metrics, payment history |
| US-3.8 | Creator | Communicate with editors | I can ask questions | P1 | In-platform messaging, threaded |
| US-3.9 | Creator | Save work as draft | I can continue later | P0 | Auto-save every 30 seconds |
| US-3.10 | Creator | Use AI-assisted writing tools | I can work faster | P2 | Grammar check, suggestion engine |
| US-3.11 | Creator | **See my current level and progress** | I understand my growth path | P1 | Level indicator, progress to next level *(NEW)* |
| US-3.12 | Creator | **See only tasks I'm qualified for** | I don't waste time on inaccessible tasks | P0 | Task filtering by creator level *(NEW)* |

#### Workspace Features Specification

**Audio Player Requirements:**
- Variable speed playback (0.5x - 2.0x)
- Skip forward/back (5s, 15s, 30s increments)
- Waveform visualization
- Bookmark/highlight functionality
- Keyboard shortcuts for all controls
- Transcript sync with click-to-seek

**Editor Requirements:**
- Rich text formatting (bold, italic, headers, lists)
- Word/character count
- Readability score
- Plagiarism detection integration
- **AI-generated content detection** *(NEW)*
- Version history
- Export options (Markdown, HTML, PDF)

---

### 4.4 Epic 4: Review & Quality Assurance

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-4.1 | Editor | See queue of pending reviews | I can manage workload | P0 | Sortable by deadline, creator, type |
| US-4.2 | Editor | Review content against criteria | Quality is maintained | P0 | Checklist, rubric scoring |
| US-4.3 | Editor | Provide inline feedback | Creators can improve | P0 | Comment/suggestion mode |
| US-4.4 | Editor | Approve, request revision, or reject | Content moves forward | P0 | Status workflow with reasons |
| US-4.5 | Editor | Track creator performance | I can identify issues | P1 | Quality scores over time |
| US-4.6 | Editor | **Flag creator accounts** | Problematic creators are addressed | P0 | Flag with reason, escalates to admin *(NEW)* |
| US-4.7 | Uploader | Review and accept final content | I confirm satisfaction | P1 | Approval with feedback option |
| US-4.8 | Uploader | Request revisions | Content meets my needs | P1 | Limited revision rounds (2 included) |
| US-4.9 | Admin | **Review flagged accounts** | I can take action on problem creators | P0 | Flag queue with context, action options *(NEW)* |

#### Quality Rubric

| Criterion | Weight | 1 (Poor) | 3 (Acceptable) | 5 (Excellent) |
|-----------|--------|----------|----------------|---------------|
| Accuracy | 25% | Factual errors present | Minor inaccuracies | Fully accurate |
| Completeness | 20% | Missing key points | Most points covered | Comprehensive |
| Clarity | 20% | Confusing, poorly written | Clear, readable | Exceptionally clear |
| Actionability | 15% | No practical value | Some useful takeaways | Highly actionable |
| Formatting | 10% | Poorly formatted | Meets standards | Professional polish |
| Originality | 10% | Copied/generic | Adequate insight | Unique perspective |

#### Account Flagging System *(NEW)*

**Flag Types:**
| Flag Type | Description | Auto-Trigger | Required Action |
|-----------|-------------|--------------|-----------------|
| Quality Concern | Consistent low scores | 3 consecutive scores <3.0 | Admin review |
| Plagiarism | Content matches external sources | >30% similarity detected | Immediate suspension |
| AI-Generated | Submission appears AI-written | Detection confidence >90% | Admin review |
| Deadline Issues | Repeated late submissions | 3 late submissions in 30 days | Warning, then review |
| Conduct | Inappropriate communication | Manual flag only | Admin review |

---

### 4.5 Epic 5: Payments & Compensation

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-5.1 | Uploader | See transparent pricing | I know costs upfront | P0 | Price calculator, breakdown |
| US-5.2 | Uploader | Pay via multiple methods | I can use preferred payment | P0 | Card, PayPal, **M-Pesa (via Pesapal)** |
| US-5.3 | Uploader | Purchase credits/packages | I get bulk discounts | P1 | Credit system, package tiers |
| US-5.4 | Creator | See payment for each task | I know what I'll earn | P0 | Clear rates per output type (**not client price**) |
| US-5.5 | Creator | Request payout | I receive my earnings | P0 | Minimum threshold, payout methods |
| US-5.6 | Creator | Track payment history | I have records | P1 | Downloadable statements |
| US-5.7 | Admin | Manage pricing and rates | Business model is flexible | P0 | Admin panel for rate configuration |
| US-5.8 | Creator | Earn bonuses for quality | I'm incentivized | P2 | Bonus tiers based on ratings |

#### Payment Provider Integration *(UPDATED)*

| Provider | Purpose | Markets | Integration Priority |
|----------|---------|---------|---------------------|
| Stripe | Primary card processing, payouts | Global | P0 |
| PayPal | Alternative payments, payouts | Global | P0 |
| **Pesapal** | **M-Pesa integration** | Kenya, East Africa | P1 *(NEW)* |

#### Pricing Model *(UPDATED with Cost Breakdown)*

**Client Pricing (What Uploaders Pay):**

| Output Type | Base Price | Rush (+50%) | Express (+100%) |
|-------------|------------|-------------|-----------------|
| Executive Summary | $15 | $22.50 | $30 |
| Detailed Summary | $35 | $52.50 | $70 |
| Key Insights | $25 | $37.50 | $50 |
| Reflection Questions | $20 | $30 | $40 |
| Action Items | $18 | $27 | $36 |
| Blog Post | $50 | $75 | $100 |
| Social Media Pack | $30 | $45 | $60 |
| Infographic Brief | $40 | $60 | $80 |
| Fact-Check Report | $75 | $112.50 | $150 |

**Cost Breakdown per Transaction:**

```
Client Pays: $50.00 (Blog Post Example)
├── Creator Payout:      $32.50 (65%)
├── QA Review:           $3.00  (6%)
├── Transcription:       $0.75  (1.5%)
├── Storage/CDN:         $0.25  (0.5%)
├── Payment Processing:  $1.75  (3.5%)
└── Platform Margin:     $11.75 (23.5%)
```

> **Important:** Creators see "Task Value: $32.50" - NOT "Client paid $50, you get $32.50"

---

### 4.6 Epic 6: Notifications & Communication

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-6.1 | User | Receive email notifications | I'm informed of updates | P0 | Configurable preferences |
| US-6.2 | User | Receive in-app notifications | I see updates in real-time | P0 | Notification center, badges |
| US-6.3 | User | Configure notification preferences | I control what I receive | P1 | Granular settings per type |
| US-6.4 | Creator | Get notified of new assignments | I can claim work quickly | P0 | Push + email for matches |
| US-6.5 | Uploader | Get notified when content ready | I can review promptly | P0 | Email with preview link |
| US-6.6 | User | Message other users securely | I can communicate | P1 | In-platform messaging |

#### Notification Matrix

| Event | Uploader | Creator | Editor | Channel |
|-------|----------|---------|--------|---------|
| Upload complete | ✓ | - | - | Email, Push |
| Transcription ready | ✓ | - | - | Push |
| New assignment available | - | ✓ | - | Email, Push |
| Assignment claimed | ✓ | ✓ | - | Push |
| Content submitted | ✓ | - | ✓ | Email, Push |
| Revision requested | - | ✓ | - | Email, Push |
| Content approved | ✓ | ✓ | - | Email, Push |
| Payment processed | ✓ | ✓ | - | Email |
| Review deadline approaching | - | - | ✓ | Push |
| **Account flagged** | - | ✓ | - | Email *(NEW)* |
| **Level changed** | - | ✓ | - | Email, Push *(NEW)* |

---

### 4.7 Epic 7: Analytics & Reporting

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-7.1 | Uploader | See my usage statistics | I understand my spending | P1 | Dashboard with charts |
| US-7.2 | Creator | See my performance metrics | I can improve | P1 | Quality scores, speed, earnings |
| US-7.3 | Admin | See platform-wide analytics | I can make decisions | P0 | Comprehensive dashboard |
| US-7.4 | Admin | Generate reports | I can share with stakeholders | P1 | Exportable reports |
| US-7.5 | Admin | Monitor system health | I catch issues early | P0 | Real-time monitoring |
| US-7.6 | Admin | **View creator level distribution** | I understand workforce composition | P0 | Counts by level, trends *(NEW)* |
| US-7.7 | Admin | **Track fraud metrics** | I can assess anti-fraud effectiveness | P0 | Fraud detection rates, false positives *(NEW)* |

---

### 4.8 Epic 8: Admin Task Management *(NEW EPIC)*

#### User Stories

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|--------------|------------|----------|---------------------|
| US-8.1 | Admin | Create tasks without payment | I can test the system | P1 | "Comped" task flag |
| US-8.2 | Admin | Assign tasks to specific creators | I can manage special cases | P1 | Direct assignment override |
| US-8.3 | Admin | Bulk import tasks | I can handle partnerships efficiently | P2 | CSV import with validation |
| US-8.4 | Admin | Set custom pricing per task | I can handle special arrangements | P1 | Price override field |
| US-8.5 | Admin | View all tasks regardless of status | I have full visibility | P0 | Admin task browser |
| US-8.6 | Admin | Reassign abandoned tasks | Work continues | P0 | Reassignment workflow |

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

| Requirement | Specification | Measurement |
|-------------|---------------|-------------|
| Page Load Time | < 2 seconds | 95th percentile |
| API Response Time | < 200ms | 95th percentile |
| Audio Upload Speed | 10 MB/s minimum | Average throughput |
| Transcription Processing | < 0.5x audio length | Processing time ratio |
| Concurrent Users | 10,000 | Peak load support |
| Search Results | < 500ms | Query response time |

### 5.2 Scalability Requirements

- Horizontal scaling for API servers
- Auto-scaling based on demand
- CDN for static assets and audio files
- Database read replicas for reporting
- Queue-based architecture for async tasks

### 5.3 Availability Requirements

| Metric | Target |
|--------|--------|
| Uptime | 99.9% |
| Recovery Time Objective (RTO) | < 1 hour |
| Recovery Point Objective (RPO) | < 15 minutes |
| Maintenance Windows | < 4 hours/month, scheduled |

### 5.4 Accessibility Requirements

- WCAG 2.1 AA compliance
- Screen reader compatibility
- Keyboard navigation support
- Color contrast ratios ≥ 4.5:1
- Closed captions for any video content
- Alternative text for all images

### 5.5 Internationalization Requirements

- UTF-8 encoding throughout
- Support for RTL languages (future)
- Date/time localization
- Currency localization
- Translation-ready architecture

### 5.6 Mobile Requirements *(UPDATED - Mobile First)*

> **Design Decision:** Mobile-first approach in development

- Responsive design optimized for mobile
- Touch-friendly interface elements
- Offline capability for draft saving
- Native apps for iOS and Android (Phase 2)
- PWA support for web
- Push notifications on all platforms

---

## 6. System Architecture

### 6.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                  CLIENTS                                     │
├─────────────────┬─────────────────┬─────────────────┬───────────────────────┤
│    Web App      │   Mobile App    │   Admin Panel   │   Third-Party APIs    │
│    (React)      │ (React Native)  │    (React)      │   (REST/Webhooks)     │
└────────┬────────┴────────┬────────┴────────┬────────┴───────────┬───────────┘
         │                 │                 │                     │
         └─────────────────┴────────┬────────┴─────────────────────┘
                                    │
                           ┌────────▼────────┐
                           │   CDN / WAF     │
                           │  (CloudFlare)   │
                           └────────┬────────┘
                                    │
                           ┌────────▼────────┐
                           │  Load Balancer  │
                           │   (AWS ALB)     │
                           └────────┬────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                         │                          │
┌────────▼────────┐       ┌────────▼────────┐       ┌────────▼────────┐
│   API Gateway   │       │   WebSocket     │       │  Auth Service   │
│   (Node.js)     │       │    Server       │       │   (Node.js)     │
└────────┬────────┘       └────────┬────────┘       └────────┬────────┘
         │                         │                          │
         └─────────────────────────┼──────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
┌────────▼────────┐       ┌────────▼────────┐       ┌────────▼────────┐
│  Message Queue  │       │  Service Mesh   │       │   Background    │
│    (Redis)      │       │                 │       │    Workers      │
└────────┬────────┘       └────────┬────────┘       └────────┬────────┘
         │                         │                         │
┌────────┴──────────────┬──────────┴──────────┬──────────────┴────────┐
│                       │                      │                       │
▼                       ▼                      ▼                       ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│    User      │ │   Content    │ │   Payment    │ │ Notification │ │  Analytics   │
│   Service    │ │   Service    │ │   Service    │ │   Service    │ │   Service    │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │                │                │
       └────────────────┴────────┬───────┴────────────────┴────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
┌────────▼────────┐     ┌────────▼────────┐     ┌────────▼────────┐
│   PostgreSQL    │     │     Redis       │     │  Elasticsearch  │
│   (Primary)     │     │    (Cache)      │     │    (Search)     │
└────────┬────────┘     └─────────────────┘     └─────────────────┘
         │
┌────────▼────────┐
│   PostgreSQL    │
│   (Replica)     │
└─────────────────┘
```

### 6.2 Service Breakdown

| Service | Responsibility | Technology | Scaling Strategy |
|---------|---------------|------------|------------------|
| API Gateway | Request routing, rate limiting | Node.js/Express | Horizontal |
| Auth Service | Authentication, authorization | Node.js/Passport | Horizontal |
| User Service | User management, profiles, **levels** | Node.js | Horizontal |
| Content Service | Upload, processing, delivery | Node.js/Python | Horizontal + Queue |
| Payment Service | Transactions, payouts | Node.js | Horizontal |
| Notification Service | Email, push, in-app | Node.js | Queue-based |
| Analytics Service | Metrics, reporting | Python | Read replicas |
| Transcription Worker | Audio to text | Python | Queue-based, GPU |
| **Fraud Service** | Detection, flagging | Python | Queue-based *(NEW)* |

### 6.3 Technology Stack

#### Frontend

| Component | Technology | Justification |
|-----------|------------|---------------|
| Web Framework | React 18+ | Component architecture, ecosystem |
| State Management | Redux Toolkit / Zustand | Predictable state, DevTools |
| Styling | Tailwind CSS | Utility-first, rapid development |
| Audio Player | Wavesurfer.js | Waveform visualization, feature-rich |
| Rich Text Editor | TipTap / Slate | Extensible, collaborative-ready |
| Build Tool | Vite | Fast HMR, optimized builds |

#### Backend

| Component | Technology | Justification |
|-----------|------------|---------------|
| Runtime | Node.js 20+ LTS | Async I/O, JavaScript ecosystem |
| Framework | Express / Fastify | Mature, performant |
| ORM | Prisma | Type safety, migrations |
| Validation | Zod | Runtime type validation |
| Queue | Bull (Redis) | Reliable job processing |
| WebSocket | Socket.io | Real-time updates |

#### AI/ML Pipeline

| Component | Technology | Justification |
|-----------|------------|---------------|
| Transcription | OpenAI Whisper / AssemblyAI | Accuracy, language support |
| NLP Processing | Python / spaCy | Entity extraction, analysis |
| Summarization | OpenAI API / Claude API | Quality, context window |
| **Plagiarism Detection** | Copyscape API / Custom | Quality assurance *(NEW)* |
| **AI Content Detection** | GPTZero / Custom | Fraud prevention *(NEW)* |

#### Infrastructure

| Component | Technology | Justification |
|-----------|------------|---------------|
| Cloud Provider | AWS | Comprehensive services |
| Container | Docker | Consistency, portability |
| Orchestration | ECS / Kubernetes | Scaling, management |
| Storage | S3 | Durability, cost |
| CDN | CloudFront / CloudFlare | Global performance |
| Monitoring | DataDog / Prometheus | Observability |

---

## 7. Data Model & Database Design

### 7.1 Entity Relationship Diagram

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│      User        │     │     Upload       │     │   Assignment     │
├──────────────────┤     ├──────────────────┤     ├──────────────────┤
│ id (PK)          │◄────│ uploader_id (FK) │     │ id (PK)          │
│ email            │     │ id (PK)          │◄────│ upload_id (FK)   │
│ password_hash    │     │ title            │     │ output_type_id   │
│ role             │     │ description      │     │ status           │
│ status           │     │ audio_url        │     │ creator_id (FK)  │────┐
│ created_at       │     │ transcript_url   │     │ editor_id (FK)   │    │
│ updated_at       │     │ duration_sec     │     │ deadline         │    │
└────────┬─────────┘     │ status           │     │ price            │    │
         │               │ metadata (JSON)  │     │ creator_payout   │    │
         │               │ created_at       │     │ created_at       │    │
         │               └──────────────────┘     └──────────────────┘    │
         │                                                                │
         │    ┌──────────────────┐     ┌──────────────────┐              │
         │    │     Content      │     │  CreatorProfile  │◄─────────────┘
         │    ├──────────────────┤     ├──────────────────┤
         │    │ id (PK)          │     │ id (PK)          │
         │    │ assignment_id    │     │ user_id (FK)     │◄────┐
         │    │ version          │     │ bio              │     │
         │    │ content_text     │     │ skills (JSON)    │     │
         │    │ format           │     │ rating           │     │
         │    │ status           │     │ completed_count  │     │
         │    │ submitted_at     │     │ level_id (FK)    │─────┼──┐
         │    │ reviewed_at      │     │ approved_at      │     │  │
         │    └──────────────────┘     │ hourly_rate      │     │  │
         │                             └──────────────────┘     │  │
         │                                                      │  │
         │    ┌──────────────────┐     ┌──────────────────┐     │  │
         │    │    Payment       │     │   Transaction    │     │  │
         │    ├──────────────────┤     ├──────────────────┤     │  │
         └───►│ user_id (FK)     │◄────│ payment_id (FK)  │     │  │
              │ id (PK)          │     │ id (PK)          │     │  │
              │ type             │     │ assignment_id    │     │  │
              │ amount           │     │ amount           │     │  │
              │ currency         │     │ type             │     │  │
              │ status           │     │ status           │     │  │
              │ provider         │     │ created_at       │     │  │
              │ provider_ref     │     └──────────────────┘     │  │
              │ created_at       │                              │  │
              └──────────────────┘                              │  │
                                                                │  │
┌──────────────────┐     ┌──────────────────┐                   │  │
│  CreatorLevel    │     │   AccountFlag    │                   │  │
├──────────────────┤     ├──────────────────┤                   │  │
│ id (PK)          │◄────┼──────────────────┼───────────────────┘  │
│ name             │     │ id (PK)          │                      │
│ description      │     │ creator_id (FK)  │◄─────────────────────┘
│ min_tasks        │     │ flag_type        │
│ min_rating       │     │ reason           │
│ rate_multiplier  │     │ flagged_by (FK)  │
│ allowed_outputs  │     │ status           │
│ created_at       │     │ resolved_by (FK) │
└──────────────────┘     │ resolution_note  │
                         │ created_at       │
                         │ resolved_at      │
                         └──────────────────┘
```

### 7.2 Core Tables Schema

```sql
-- Creator Levels (NEW)
CREATE TABLE creator_levels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    min_completed_tasks INT NOT NULL DEFAULT 0,
    min_rating DECIMAL(3,2) DEFAULT 0.00,
    rate_multiplier DECIMAL(3,2) NOT NULL DEFAULT 1.00,
    allowed_output_types UUID[],
    requires_manual_approval BOOLEAN DEFAULT FALSE,
    display_order INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default levels
INSERT INTO creator_levels (name, description, min_completed_tasks, min_rating, rate_multiplier, display_order) VALUES
('Probationary', 'New creators with limited access', 0, 0.00, 0.80, 0),
('Junior', 'Basic tasks access', 5, 4.00, 1.00, 1),
('Mid-Level', 'Standard tasks access', 20, 4.30, 1.10, 2),
('Senior', 'Advanced tasks access', 50, 4.50, 1.25, 3),
('Expert', 'All tasks including specialized', 100, 4.70, 1.50, 4);

-- Users table (UPDATED)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    auth_provider VARCHAR(50) DEFAULT 'email',
    auth_provider_id VARCHAR(255),
    role VARCHAR(20) NOT NULL CHECK (role IN ('uploader', 'creator', 'editor', 'admin')),
    status VARCHAR(20) NOT NULL DEFAULT 'pending_verification',
    email_verified_at TIMESTAMP,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_secret VARCHAR(255),
    device_fingerprint VARCHAR(255),
    registration_ip INET,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP
);

-- Creator profiles (UPDATED with level)
CREATE TABLE creator_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    level_id UUID REFERENCES creator_levels(id),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    bio TEXT,
    portfolio_url VARCHAR(500),
    skills VARCHAR(100)[],
    specializations VARCHAR(100)[],
    sample_work_urls TEXT[],
    certifications JSONB,
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_ratings INT DEFAULT 0,
    completed_assignments INT DEFAULT 0,
    approved_at TIMESTAMP,
    approved_by UUID REFERENCES users(id),
    level_changed_at TIMESTAMP,
    level_changed_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'approved', 'rejected', 'suspended'))
);

-- Account Flags (NEW)
CREATE TABLE account_flags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    flag_type VARCHAR(50) NOT NULL,
    reason TEXT NOT NULL,
    evidence JSONB,
    flagged_by UUID REFERENCES users(id),
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    resolved_by UUID REFERENCES users(id),
    resolution_note TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    resolved_at TIMESTAMP,
    
    CONSTRAINT valid_flag_type CHECK (flag_type IN ('quality_concern', 'plagiarism', 'ai_generated', 'deadline_issues', 'conduct', 'fraud')),
    CONSTRAINT valid_status CHECK (status IN ('pending', 'investigating', 'resolved', 'dismissed'))
);

-- Creator Level History (NEW - for audit)
CREATE TABLE creator_level_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    previous_level_id UUID REFERENCES creator_levels(id),
    new_level_id UUID REFERENCES creator_levels(id),
    change_reason TEXT,
    changed_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Output types catalog (UPDATED with level requirement)
CREATE TABLE output_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    guidelines TEXT,
    example_url VARCHAR(500),
    min_words INT,
    max_words INT,
    base_price DECIMAL(10,2) NOT NULL,
    creator_payout DECIMAL(10,2) NOT NULL,
    estimated_minutes INT,
    min_creator_level_id UUID REFERENCES creator_levels(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_pricing CHECK (creator_payout < base_price)
);

-- Assignments table (UPDATED)
CREATE TABLE assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    upload_id UUID REFERENCES uploads(id) ON DELETE CASCADE,
    output_type_id UUID REFERENCES output_types(id),
    creator_id UUID REFERENCES users(id),
    editor_id UUID REFERENCES users(id),
    status VARCHAR(30) NOT NULL DEFAULT 'open',
    priority VARCHAR(20) NOT NULL DEFAULT 'standard',
    deadline TIMESTAMP,
    claimed_at TIMESTAMP,
    submitted_at TIMESTAMP,
    reviewed_at TIMESTAMP,
    completed_at TIMESTAMP,
    price DECIMAL(10,2) NOT NULL,
    creator_payout DECIMAL(10,2) NOT NULL,
    revision_count INT DEFAULT 0,
    max_revisions INT DEFAULT 2,
    is_comped BOOLEAN DEFAULT FALSE,
    comped_by UUID REFERENCES users(id),
    comped_reason TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('open', 'claimed', 'in_progress', 'submitted', 'revision_requested', 'approved', 'completed', 'cancelled', 'abandoned')),
    CONSTRAINT valid_priority CHECK (priority IN ('standard', 'rush', 'express'))
);

-- Fraud Detection Log (NEW)
CREATE TABLE fraud_detection_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    detection_type VARCHAR(50) NOT NULL,
    confidence_score DECIMAL(5,4),
    details JSONB,
    action_taken VARCHAR(50),
    reviewed_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_detection_type CHECK (detection_type IN ('duplicate_account', 'velocity_anomaly', 'plagiarism', 'ai_content', 'payment_fraud', 'device_fingerprint'))
);

-- Indexes
CREATE INDEX idx_creator_profiles_level ON creator_profiles(level_id);
CREATE INDEX idx_account_flags_status ON account_flags(status, created_at);
CREATE INDEX idx_assignments_comped ON assignments(is_comped) WHERE is_comped = TRUE;
CREATE INDEX idx_fraud_log_user ON fraud_detection_log(user_id, created_at);
CREATE INDEX idx_users_device_fingerprint ON users(device_fingerprint);
```

---

## 8. API Specifications

### 8.1 API Design Principles

- RESTful design with resource-oriented URLs
- JSON request/response bodies
- JWT-based authentication
- Consistent error response format
- Rate limiting per endpoint
- API versioning via URL prefix
- **Separate endpoints for client vs creator where needed**

### 8.2 New/Updated Endpoints

#### Creator Level Management (Admin)

```
# Get all creator levels
GET /api/v1/admin/creator-levels
  Headers: Authorization: Bearer {token}
  Response: 200
    levels: CreatorLevel[]

# Create creator level
POST /api/v1/admin/creator-levels
  Headers: Authorization: Bearer {token}
  Request:
    name: string
    description: string
    min_completed_tasks: number
    min_rating: number
    rate_multiplier: number
    allowed_output_types: string[]
  Response: 201
    level: CreatorLevel

# Update creator level
PATCH /api/v1/admin/creator-levels/:id
  Headers: Authorization: Bearer {token}
  Request: (partial CreatorLevel)
  Response: 200
    level: CreatorLevel

# Get creator statistics by level
GET /api/v1/admin/creator-levels/statistics
  Headers: Authorization: Bearer {token}
  Response: 200
    statistics: {
      level_id: string,
      level_name: string,
      count: number,
      avg_rating: number,
      total_completed: number
    }[]

# Change creator's level
POST /api/v1/admin/creators/:id/change-level
  Headers: Authorization: Bearer {token}
  Request:
    new_level_id: string
    reason: string
  Response: 200
    creator: CreatorProfile
    history: LevelChangeRecord
```

#### Account Flagging

```
# Flag a creator account (Editor/Admin)
POST /api/v1/creators/:id/flag
  Headers: Authorization: Bearer {token}
  Request:
    flag_type: 'quality_concern' | 'plagiarism' | 'ai_generated' | 'deadline_issues' | 'conduct'
    reason: string
    evidence?: object
  Response: 201
    flag: AccountFlag

# Get pending flags (Admin)
GET /api/v1/admin/flags
  Headers: Authorization: Bearer {token}
  Query:
    status?: string
    flag_type?: string
    page?: number
  Response: 200
    flags: AccountFlag[]
    pagination: object

# Resolve a flag
POST /api/v1/admin/flags/:id/resolve
  Headers: Authorization: Bearer {token}
  Request:
    resolution: 'dismissed' | 'warning' | 'level_demotion' | 'suspension' | 'ban'
    note: string
  Response: 200
    flag: AccountFlag
```

#### Admin Task Management

```
# Create comped task (Admin)
POST /api/v1/admin/tasks
  Headers: Authorization: Bearer {token}
  Request:
    upload_id?: string  # or provide audio directly
    audio_url?: string
    title: string
    description: string
    output_types: string[]
    priority: string
    comped_reason: string
    assigned_creator_id?: string  # optional direct assignment
  Response: 201
    tasks: Assignment[]

# Reassign abandoned task
POST /api/v1/admin/assignments/:id/reassign
  Headers: Authorization: Bearer {token}
  Request:
    new_creator_id?: string  # optional, otherwise goes back to pool
    extend_deadline_hours?: number
  Response: 200
    assignment: Assignment
```

---

## 9. User Interface Specifications

### 9.1 Design System *(UPDATED)*

> **Design Direction:** Clean, minimal UI similar to Supabase, Vercel, ChatGPT, Claude

#### Design Principles

1. **Minimalism:** Remove unnecessary elements, focus on content
2. **Whitespace:** Generous spacing for readability
3. **Typography-First:** Clear hierarchy through type, not decoration
4. **Subtle Interactions:** Micro-animations for feedback
5. **Dark Mode Support:** First-class dark theme

#### Color Palette

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Primary | #000000 | #FFFFFF | Text, primary actions |
| Secondary | #666666 | #A1A1A1 | Secondary text |
| Accent | #0070F3 | #0070F3 | Links, interactive elements |
| Success | #0070F3 | #0070F3 | Success states |
| Warning | #F5A623 | #F5A623 | Warnings |
| Error | #E00 | #E00 | Errors |
| Background | #FFFFFF | #000000 | Page background |
| Surface | #FAFAFA | #111111 | Cards, panels |
| Border | #EAEAEA | #333333 | Dividers, borders |

#### Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 | Inter | 48px | 700 | 1.2 |
| H2 | Inter | 32px | 600 | 1.3 |
| H3 | Inter | 24px | 600 | 1.4 |
| Body | Inter | 16px | 400 | 1.6 |
| Small | Inter | 14px | 400 | 1.5 |
| Mono | JetBrains Mono | 14px | 400 | 1.5 |

### 9.2 Landing Page Structure *(NEW)*

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]                    Features  Pricing  [Sign In] [Get Started] │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│         Transform AI Podcasts into                               │
│         Actionable Content                                       │
│                                                                   │
│         [Upload Your Podcast]    [Become a Creator →]            │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                      How It Works                                │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │ 1.Upload │ → │2.Process │ → │ 3.Create │ → │4.Deliver │   │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                       Pricing                                    │
│                                                                   │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │  Pay As You │  │    Pro      │  │  Business   │            │
│   │     Go      │  │  $49/mo     │  │  $199/mo    │            │
│   │   $X/task   │  │ 10% off     │  │ 20% off     │            │
│   └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                   │
│            [Compare Plans]    [Enterprise →]                     │
├─────────────────────────────────────────────────────────────────┤
│                    Become a Creator                              │
│                                                                   │
│   Earn money with your writing and analysis skills.             │
│   Flexible hours. Fair pay. Growth opportunities.               │
│                                                                   │
│                    [Apply Now →]                                 │
├─────────────────────────────────────────────────────────────────┤
│  Footer: About | Blog | Terms | Privacy | Contact               │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Key Screens (Updated Wireframes)

#### Admin Dashboard - Creator Level Statistics

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]  Dashboard  Creators  Tasks  Payments  Settings  [Admin]│
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Creator Overview                                                │
│                                                                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ Total      │ │ Active     │ │ Pending    │ │ Flagged    │   │
│  │ Creators   │ │ Today      │ │ Review     │ │ Accounts   │   │
│  │    847     │ │    124     │ │     23     │ │     7      │   │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘   │
│                                                                   │
│  Creators by Level                                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Probationary  ████████████████████████████████  312 (37%)│   │
│  │ Junior        ██████████████████████  245 (29%)          │   │
│  │ Mid-Level     ████████████████  178 (21%)                │   │
│  │ Senior        ██████████  89 (11%)                       │   │
│  │ Expert        ███  23 (3%)                               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
│  [Manage Levels]  [View All Creators]  [Review Flags]           │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. Security & Compliance

### 10.1 Authentication & Authorization

| Control | Implementation |
|---------|----------------|
| Password Requirements | Min 8 chars, complexity rules, bcrypt hashing |
| Session Management | JWT with 15-min access, 7-day refresh tokens |
| Multi-Factor Auth | TOTP-based (Google Authenticator compatible) |
| OAuth Integration | Google, GitHub (extensible) |
| Rate Limiting | Per-endpoint, per-user limits |
| Account Lockout | 5 failed attempts = 15-min lockout |
| **Role Separation** | Separate registration flows, email restrictions |

### 10.2 Data Protection

| Data Type | Protection Method |
|-----------|-------------------|
| Passwords | bcrypt with cost factor 12 |
| PII | AES-256 encryption at rest |
| Audio Files | S3 server-side encryption |
| API Traffic | TLS 1.3 minimum |
| Database | Encrypted connections, encrypted backups |
| Logs | PII redaction, secure storage |

### 10.3 Compliance Requirements

#### GDPR Compliance
- Right to access: Data export functionality
- Right to erasure: Account deletion with data purge
- Data portability: Machine-readable export format
- Consent management: Explicit opt-in for communications
- Privacy by design: Minimal data collection
- Data processing agreements: With all third parties

#### PCI DSS (for Payment Processing)
- No storage of full card numbers
- Use of PCI-compliant payment processors (Stripe)
- Secure transmission of payment data
- Regular security assessments

---

## 11. Fraud Prevention & Anti-Abuse *(NEW SECTION)*

### 11.1 Overview

The platform implements a comprehensive fraud prevention system to maintain integrity and protect all users.

### 11.2 Anti-Fraud Features

#### Duplicate Account Detection

| Signal | Detection Method | Action |
|--------|-----------------|--------|
| Same Email | Exact match | Block registration |
| Similar Email | Levenshtein distance | Flag for review |
| Same Phone | Exact match | Block registration |
| Device Fingerprint | Browser/device attributes | Flag for review |
| IP Address | Same IP within timeframe | Flag for review |

```javascript
// Device Fingerprint Components
{
  browser: "Chrome 120",
  os: "macOS 14.1",
  screen: "1920x1080",
  timezone: "Africa/Nairobi",
  language: "en-US",
  canvas_hash: "abc123...",
  webgl_hash: "def456...",
  fonts_hash: "ghi789..."
}
```

#### Velocity Checking

| Metric | Threshold | Action |
|--------|-----------|--------|
| Accounts from same IP/24h | > 3 | Block + Alert |
| Failed logins/hour | > 10 | Temporary lockout |
| Payment attempts/hour | > 5 | Hold + Review |
| Task claims/hour | > 10 | Rate limit |

#### Quality Anomaly Detection

| Type | Detection Method | Threshold | Action |
|------|-----------------|-----------|--------|
| Plagiarism | Copyscape/Custom | > 30% match | Auto-flag |
| AI-Generated | GPTZero/Custom | > 90% confidence | Auto-flag |
| Copy-Paste | Clipboard monitoring | Bulk paste detected | Flag for review |
| Time Anomaly | Submission time vs. content | < 50% expected time | Flag for review |

#### Payment Fraud Prevention

| Risk | Prevention Measure |
|------|-------------------|
| Fake Bank Accounts | Verification deposits, payout holds |
| Chargebacks | Transaction monitoring, velocity limits |
| Money Laundering | Transaction limits, pattern detection |
| Account Takeover | Device verification, 2FA requirement |

### 11.3 Role Separation Enforcement

To prevent platform gaming, clients and creators must remain separate:

| Control | Implementation |
|---------|----------------|
| Separate Registration | Different URLs, forms, and onboarding flows |
| Email Restrictions | Same email cannot register on both sides |
| Email Domain Check | Prevent `+` variations (john+client@gmail.com) |
| Phone Verification | Same phone cannot be on both sides |
| Device Fingerprint | Flag if same device registers both roles |
| IP Monitoring | Alert on same IP for both registrations |

### 11.4 Creator View Isolation

Creators should NOT see:
- ❌ Client names or identifiable information
- ❌ Price paid by client
- ❌ Platform fee/margin
- ❌ Other creators' work on same project
- ❌ Marketplace dynamics

Creators SHOULD see:
- ✅ Task title and description
- ✅ Task value (their payout)
- ✅ Deadline and priority
- ✅ Output type requirements
- ✅ Special instructions (anonymized)

---

## 12. Integrations & Third-Party Services

### 12.1 Required Integrations *(UPDATED)*

| Service | Purpose | Provider Options |
|---------|---------|------------------|
| Speech-to-Text | Transcription | OpenAI Whisper, AssemblyAI |
| Payment Processing | Charges, payouts | Stripe, PayPal, **Pesapal** |
| Email Delivery | Transactional email | SendGrid, AWS SES |
| Push Notifications | Mobile/web push | Firebase Cloud Messaging |
| Cloud Storage | File hosting | AWS S3 |
| CDN | Content delivery | CloudFront, CloudFlare |
| Error Tracking | Application monitoring | Sentry |
| Analytics | Usage analytics | Mixpanel, Amplitude |
| **Plagiarism Detection** | Quality assurance | Copyscape, Custom |
| **AI Content Detection** | Fraud prevention | GPTZero, Custom |
| **Device Fingerprinting** | Fraud prevention | FingerprintJS |

### 12.2 Transcription Service Comparison

| Provider | Accuracy | Languages | Cost | Latency |
|----------|----------|-----------|------|---------|
| OpenAI Whisper | 97%+ | 99 | $0.006/min | Batch |
| AssemblyAI | 95%+ | 99 | $0.0025/s | Real-time |
| Google Cloud STT | 95%+ | 125+ | $0.006/15s | Real-time |
| AWS Transcribe | 94%+ | 37 | $0.024/min | Near real-time |

**Recommendation:** AssemblyAI for real-time with cost efficiency

### 12.3 Payment Integration Architecture *(UPDATED)*

```
┌─────────────────────────────────────────────────────────────────┐
│                      Payment Router                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   User Location/Preference → Select Provider                     │
│                                                                   │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│   │    Stripe    │  │   PayPal     │  │   Pesapal    │          │
│   │   (Global)   │  │   (Global)   │  │  (E.Africa)  │          │
│   ├──────────────┤  ├──────────────┤  ├──────────────┤          │
│   │ Cards        │  │ PayPal Bal   │  │ M-Pesa       │          │
│   │ Bank Transfer│  │ Cards        │  │ Cards        │          │
│   │ ACH          │  │ Bank         │  │ Mobile Money │          │
│   └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 12.4 Cost Analysis for Pricing *(NEW)*

| Service | Unit Cost | Monthly Estimate (1000 tasks) |
|---------|-----------|------------------------------|
| Transcription (AssemblyAI) | $0.0025/sec | ~$750 (avg 5 min audio) |
| Storage (S3) | $0.023/GB | ~$50 |
| CDN (CloudFlare) | $0.00/GB (included) | $0 |
| Payment Processing (Stripe) | 2.9% + $0.30 | ~$1,500 |
| Email (SendGrid) | $0.0006/email | ~$30 |
| **Total Variable Costs** | | **~$2,330/month** |

---

## 13. DevOps & Infrastructure

### 13.1 Environment Strategy

| Environment | Purpose | Data | Access |
|-------------|---------|------|--------|
| Development | Local development | Synthetic | Developers |
| Staging | Pre-production testing | Anonymized prod copy | Dev team |
| Production | Live users | Real data | Limited |

### 13.2 CI/CD Pipeline

```
┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
│  Commit   │──►│   Build   │──►│   Test    │──►│ Security  │
│           │   │           │   │           │   │   Scan    │
└───────────┘   └───────────┘   └───────────┘   └─────┬─────┘
                                                       │
┌───────────┐   ┌───────────┐   ┌───────────┐   ┌─────▼─────┐
│Production │◄──│  Staging  │◄──│  Deploy   │◄──│ Approval  │
│  Deploy   │   │   Test    │   │  Staging  │   │           │
└───────────┘   └───────────┘   └───────────┘   └───────────┘
```

### 13.3 Monitoring & Alerting

| Metric | Threshold | Alert Channel |
|--------|-----------|---------------|
| API Error Rate | > 1% | Slack, PagerDuty |
| API Latency p95 | > 500ms | Slack |
| CPU Utilization | > 80% | Slack |
| Memory Utilization | > 85% | Slack |
| Database Connections | > 80% pool | Slack, PagerDuty |
| Failed Payments | > 5/hour | Slack, Email |
| Queue Depth | > 1000 | Slack |
| **Fraud Detection Rate** | > 10/hour | Slack, Email |

---

## 14. Testing Strategy

### 14.1 Testing Pyramid

```
          ┌─────────────┐
          │    E2E      │  10%
          │   Tests     │
          └──────┬──────┘
          ┌──────┴──────┐
          │ Integration │  20%
          │   Tests     │
          └──────┬──────┘
    ┌────────────┴────────────┐
    │       Unit Tests        │  70%
    └─────────────────────────┘
```

### 14.2 Test Coverage Requirements

| Component | Minimum Coverage | Tools |
|-----------|------------------|-------|
| Backend Services | 80% | Jest, Supertest |
| Frontend Components | 70% | React Testing Library, Jest |
| API Endpoints | 90% | Integration tests |
| Critical Paths | 100% | E2E tests |
| **Fraud Detection Logic** | 95% | Unit + Integration |

### 14.3 Fraud Testing *(NEW)*

| Test Scenario | Method |
|---------------|--------|
| Duplicate registration | Automated test with fingerprint simulation |
| Plagiarism detection | Test suite with known plagiarized content |
| AI content detection | Test suite with GPT-generated content |
| Velocity limits | Load testing with rapid requests |
| Payment fraud | Mock transactions with fraud patterns |

---

## 15. Monetization & Business Model

### 15.1 Revenue Streams

| Stream | Description | Projected % of Revenue |
|--------|-------------|------------------------|
| Service Fees | Commission on each transaction | 70% |
| Rush Fees | Premium for faster delivery | 15% |
| Subscription (Enterprise) | Bulk pricing, API access | 10% |
| Credits | Pre-purchased platform credits | 5% |

### 15.2 Pricing Strategy *(UPDATED)*

#### Transaction-Based Model (Default)
- Platform takes 35-40% of each transaction
- Competitive with marketplace standards
- Scales with usage

#### Subscription Tiers

| Tier | Price | Includes | Target User |
|------|-------|----------|-------------|
| **Pay As You Go** | $0/month | Pay per upload, standard rates | One-time users, testing |
| **Pro** | $49/month | 5 uploads/month, 10% discount | Regular users |
| **Business** | $199/month | 25 uploads/month, 20% discount, priority | Teams |
| **Enterprise** | Custom | Volume pricing, API, dedicated support | Large organizations |

> **Landing Page:** Clearly differentiate Pay-As-You-Go (for one-time users) from subscription plans

### 15.3 Cost Structure per Transaction

```
Client Payment: $50.00 (Example: Blog Post)
────────────────────────────────────────────
├── Creator Payout:      $32.50  (65.0%)
├── QA Reviewer:         $3.00   (6.0%)
├── Transcription:       $0.75   (1.5%)
├── Storage/CDN:         $0.25   (0.5%)
├── Payment Processing:  $1.75   (3.5%)
└── Platform Margin:     $11.75  (23.5%)
────────────────────────────────────────────
                         $50.00  (100%)
```

### 15.4 Creator Compensation Model

| Factor | Impact |
|--------|--------|
| Base Rate | Set per output type |
| Level Multiplier | 0.8x to 1.5x based on level |
| Quality Bonus | +10% for 5-star ratings |
| Speed Bonus | +5% for early delivery |
| Volume Tier | +5-15% at milestones |
| Expertise Premium | +20% for specialized content |

---

## 16. Content Moderation & Safety *(NEW SECTION)*

### 16.1 Upload Screening

All uploaded audio is screened before processing:

| Check | Method | Action on Failure |
|-------|--------|-------------------|
| File Validation | Format, size, duration | Reject with error |
| Virus Scan | ClamAV / commercial AV | Reject + alert |
| Audio Quality | Signal analysis | Warning to uploader |
| Language Detection | Auto-detect | Route appropriately |
| Content Category | AI classification | Flag if restricted |

### 16.2 Content Policy

**Prohibited Content:**
- Hate speech or discrimination
- Violence or threats
- Explicit sexual content
- Illegal activities
- Copyright infringement
- Misinformation (health, elections)

### 16.3 Reporting System

Users can report content through:
- In-app report button
- Email to trust-safety@platform.com
- Automated detection alerts

**Review Process:**
1. Report received → Added to moderation queue
2. Moderator review within 24 hours
3. Decision: Approve / Warning / Remove / Ban
4. Notification to reporter and reported user
5. Appeal process available

---

## 17. Dispute Resolution System *(NEW SECTION)*

### 17.1 Dispute Types

| Dispute Type | Description | Typical Resolution |
|--------------|-------------|-------------------|
| Quality | Content doesn't meet expectations | Revision or refund |
| Non-Delivery | Creator didn't complete work | Reassignment + refund |
| Late Delivery | Deadline missed | Partial refund |
| Miscommunication | Instructions unclear | Revision |
| Payment | Payout issues | Investigation |

### 17.2 Resolution Process

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Dispute   │────►│   Review    │────►│ Mediation   │
│   Filed     │     │  (24-48h)   │     │  (if needed)│
└─────────────┘     └──────┬──────┘     └──────┬──────┘
                          │                    │
                   ┌──────▼──────┐      ┌──────▼──────┐
                   │  Resolution │      │   Escalate  │
                   │             │      │  to Admin   │
                   └─────────────┘      └─────────────┘
```

### 17.3 Refund Policy

| Scenario | Refund Amount | Process |
|----------|---------------|---------|
| Creator no-show | 100% | Automatic |
| Quality rejection (creator fault) | 100% | After review |
| Quality rejection (subjective) | 50% | After mediation |
| Late delivery (>24h) | 25% | Automatic |
| Client cancellation (before work starts) | 100% - fees | Automatic |
| Client cancellation (work in progress) | 50% | After review |

### 17.4 Appeal Process

1. User submits appeal within 7 days
2. Different reviewer assigned
3. Review completed within 48 hours
4. Decision is final (except for legal issues)

---

## 18. Risk Assessment & Mitigation

### 18.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Transcription accuracy issues | Medium | High | Multi-provider fallback, human review option |
| Scalability bottlenecks | Medium | High | Load testing, auto-scaling, caching |
| Data breach | Low | Critical | Encryption, audits, incident response plan |
| Third-party service outage | Medium | Medium | Multi-provider strategy, graceful degradation |
| Audio processing failures | Medium | Medium | Retry logic, format validation, error handling |

### 18.2 Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low creator supply | Medium | High | Competitive rates, referral program, outreach |
| Low uploader demand | Medium | High | Marketing, partnerships, free tier |
| Payment fraud | Low | Medium | **Comprehensive fraud detection** |
| Quality inconsistency | Medium | High | **Tiered level system, vetting, QA** |
| Legal/copyright issues | Low | High | Clear ToS, DMCA process, content guidelines |
| **Creator-Client collusion** | Medium | Medium | **Role separation, monitoring** |

### 18.3 Operational Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Key person dependency | Medium | Medium | Documentation, cross-training |
| Support overload | Medium | Medium | Self-service, FAQs, chatbot |
| Disputes between users | High | Low | **Clear policies, mediation process** |
| **Platform gaming** | Medium | High | **Anti-fraud system, monitoring** |

---

## 19. Roadmap & Milestones

### 19.1 Phase 1: MVP (Months 1-4)

**Goal:** Launch core platform with basic functionality

#### Month 1-2: Foundation
- [ ] User authentication (email + Google OAuth)
- [ ] **Separate registration flows for clients/creators**
- [ ] Basic user profiles
- [ ] **Creator level system (basic)**
- [ ] Database setup and core schema
- [ ] Cloud infrastructure provisioning
- [ ] CI/CD pipeline

#### Month 2-3: Core Features
- [ ] Audio upload with transcription
- [ ] Creator workspace (basic)
- [ ] **Level-based task filtering**
- [ ] Assignment workflow (claim → submit → review)
- [ ] Payment integration (Stripe)
- [ ] Email notifications

#### Month 3-4: Polish & Launch
- [ ] Uploader dashboard
- [ ] Creator dashboard
- [ ] Admin panel (basic)
- [ ] **Admin level management**
- [ ] **Account flagging system**
- [ ] Landing page with **"Become a Creator"**
- [ ] Documentation
- [ ] Beta testing
- [ ] Bug fixes and optimization

### 19.2 Phase 2: Growth (Months 5-8)

**Goal:** Enhance features, scale operations

- [ ] Creator vetting and onboarding workflow
- [ ] **Advanced fraud detection**
- [ ] **Device fingerprinting**
- [ ] Quality scoring system
- [ ] Multiple output types
- [ ] Rush/Express pricing
- [ ] In-app messaging
- [ ] Advanced search and filtering
- [ ] Creator earnings dashboard
- [ ] Bulk upload functionality
- [ ] **Pesapal/M-Pesa integration**
- [ ] Content moderation tools
- [ ] Dispute resolution workflow

### 19.3 Phase 3: Scale (Months 9-12)

**Goal:** Enterprise features, optimization

- [ ] Mobile apps (iOS, Android)
- [ ] Enterprise/subscription tiers
- [ ] API for integrations
- [ ] White-label options
- [ ] Advanced analytics
- [ ] AI-assisted writing tools
- [ ] Referral program
- [ ] Multi-language support
- [ ] SOC 2 compliance preparation

### 19.4 Success Criteria by Phase

| Phase | Key Metric | Target |
|-------|------------|--------|
| MVP | Successful transactions | 100 |
| MVP | Creator signups | 50 |
| MVP | Fraud rate | < 5% |
| Growth | Monthly transactions | 1,000 |
| Growth | Active creators | 200 |
| Growth | Uploader retention | 40% |
| Growth | Fraud rate | < 2% |
| Scale | Monthly transactions | 10,000 |
| Scale | Enterprise clients | 10 |
| Scale | Revenue | $100K MRR |
| Scale | Fraud rate | < 1% |

---

## 20. Appendices

### Appendix A: Glossary

| Term | Definition |
|------|------------|
| Assignment | A specific task created from an upload for a creator to complete |
| Content Creator | A vetted user who produces curated content from podcasts |
| Curation | The process of creating derivative content from source audio |
| Output Type | A specific format of curated content (summary, insights, etc.) |
| Upload | An audio file submitted by an uploader for curation |
| Uploader | A user who submits audio content for curation |
| **Creator Level** | Tier-based classification of creator skill and access |
| **Comped Task** | A task created by admin without requiring client payment |
| **Account Flag** | A marker on a creator account indicating review needed |

### Appendix B: User Story Estimation Guide

| Size | Story Points | Typical Duration |
|------|--------------|------------------|
| XS | 1 | < 1 day |
| S | 2 | 1-2 days |
| M | 3 | 2-3 days |
| L | 5 | 3-5 days |
| XL | 8 | 5-10 days |
| XXL | 13 | 10+ days (should be broken down) |

### Appendix C: Epic Breakdown for Development

This document can be sharded into the following epic-specific documents:

| Epic | Document | Priority |
|------|----------|----------|
| Epic 1 | `EPIC-01-User-Management.md` | P0 |
| Epic 2 | `EPIC-02-Content-Upload.md` | P0 |
| Epic 3 | `EPIC-03-Creator-Workspace.md` | P0 |
| Epic 4 | `EPIC-04-QA-Review.md` | P0 |
| Epic 5 | `EPIC-05-Payments.md` | P0 |
| Epic 6 | `EPIC-06-Notifications.md` | P1 |
| Epic 7 | `EPIC-07-Analytics.md` | P1 |
| Epic 8 | `EPIC-08-Admin-Tasks.md` | P1 |
| Fraud | `EPIC-09-Fraud-Prevention.md` | P0 |
| Moderation | `EPIC-10-Content-Moderation.md` | P1 |
| Disputes | `EPIC-11-Dispute-Resolution.md` | P1 |

### Appendix D: Questions for Stakeholder Resolution

1. **Content Ownership:** Who owns the curated content? The uploader? The platform?
2. **Content Retention:** How long are audio files and content stored?
3. **Geographic Restrictions:** Are there countries where the platform won't operate?
4. **Minimum Payouts:** What's the minimum balance for creator withdrawals?
5. **SLA Guarantees:** What turnaround guarantees, if any?

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | [Your Name] | Initial draft |
| 2.0 | Dec 2024 | [Your Name] | Incorporated stakeholder comments: creator levels, account flagging, fraud prevention, Pesapal integration, admin task management, role separation, UI preferences, mobile-first approach |

---

*This document serves as the foundational specification for the AI Podcast to Human-Curated Content Platform. It should be treated as a living document and updated as requirements evolve.*
