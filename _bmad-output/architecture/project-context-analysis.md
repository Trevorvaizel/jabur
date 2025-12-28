# Project Context Analysis

**Project Status:** Greenfield (true fresh start, no legacy constraints)
**Risk Tolerance:** Medium (modern proven stack, calculated trade-offs, faster velocity)
**Complexity Level:** HIGH (bordering on enterprise-scale complexity)

### Requirements Overview

**Functional Requirements:**

jabur implements a comprehensive two-sided marketplace with 75+ functional requirements across 9 major domains:

- **Account & Authentication**: Multi-role system (4 user types: Uploaders, Creators, QA Editors, Admins), MFA for privileged roles, payout method selection
- **Content Upload & Transcription**: Audio files up to 500MB/3hrs, resume capability, automated transcription (<15min SLA), 9 output format types
- **Creator Workspace**: Tier-filtered task boards, synchronized audio player with waveform visualization, rich text block editor with auto-save (30s intervals), integrated plagiarism/AI detection checks
- **Quality Assurance**: Rubric-based scoring (6 weighted dimensions), dual-layer review (QA + optional client revision), account flagging system, performance analytics
- **Creator Advancement**: 5-tier level system with rate multipliers (Probationary 0.8x → Expert 1.5x), automatic promotion based on performance, tier-based task filtering
- **Admin Operations**: Comprehensive dispute resolution with full context aggregation (audio, transcripts, submissions, messages), audit logs, manual tier management
- **Admin Comped Tasks**: Budget-controlled complimentary task creation for partnerships, trials, and training with approval workflows and cost tracking
- **Fraud Prevention**: Device fingerprinting, email normalization, multi-account detection, role separation enforcement at multiple layers
- **Compliance & Data Management**: GDPR/CCPA data export/deletion, automated lifecycle management (7-day audio, 30-day transcripts, 90-day deliverables), 7-year payment record retention

**Non-Functional Requirements:**

Critical NFRs driving architectural decisions:

- **Performance**: 99.5% uptime SLA, <2s page loads (desktop), <3s mobile, 200 concurrent creators supported, task status updates <5s propagation
- **Security**: TLS 1.3 in transit, AES-256 at rest, PostgreSQL Row-Level Security + middleware for role isolation, MFA for admin/QA roles, comprehensive audit logging for all sensitive operations
- **Scalability**: Must support 10x growth (10,000 uploaders, 2,000 creators) with <10% performance degradation, horizontal scaling for read-heavy workloads, auto-scale to 3x traffic spikes
- **Integration Reliability**: Dual-provider failover (transcription services), fallback queuing (payment processing), 99%+ SLA enforcement, rate limiting with cost controls
- **Compliance**: GDPR data subject rights (export, deletion, rectification), CCPA disclosure requirements, automated retention policies, SOC 2 Type II certification required for enterprise tier

**Scale & Complexity:**

- **Primary domain**: Full-stack SaaS B2B marketplace platform (two-sided marketplace)
- **Complexity level**: HIGH (multi-tenant architecture, real-time requirements, compliance-heavy, multi-integration orchestration)
- **Estimated architectural components**: 15-20 major components
- **User roles**: 4 distinct personas with complete data isolation and zero crossover
- **Workflow complexity**: 7-stage pipeline (upload → transcribe → route → create → QA → deliver → payout)
- **Year 1 targets**: 1,000 monthly active uploaders, 200 active creators, <48hr average turnaround

### Technical Constraints & Dependencies

**Infrastructure Constraints:**

This is a **true greenfield project** with no legacy technical constraints. All technology decisions are being made fresh based on requirements, not historical choices.

**Mandatory External Integrations:**

1. **Audio Transcription**: AssemblyAI (primary, optimized for podcasts with speaker diarization) or OpenAI Whisper API (fallback) - 15-minute SLA, timestamp-aligned transcripts required
2. **Payment Processing**:
   - **Stripe** (global coverage, 99.9% uptime) - bank transfers, PayPal, direct deposit
   - **M-Pesa Daraja API** (East African markets - Kenya, Tanzania) - MANDATORY for African creator market access
   - Both providers required for launch - African creators often lack traditional banking but have mobile money access
3. **Plagiarism Detection**: Copyscape/Turnitin API or equivalent (90%+ originality threshold enforcement)
4. **AI Content Detection**: GPTZero/Originality.ai or equivalent (<30% AI-detected threshold for human-curated quality standard)

**Architectural Constraints Identified:**

- **Role Isolation is Non-Negotiable**: 3-layer enforcement (route-level + middleware + database RLS) is foundational to business model, not a feature
- **Dual Payment Provider Coordination**: Stripe + M-Pesa both operational at launch for global + African market coverage
- **Real-Time State Synchronization**: <5 second propagation requirement affects infrastructure choices (serverless vs traditional deployment)
- **Compliance from Day One**: GDPR/CCPA data lifecycle automation must be architected from foundation, cannot be retrofitted

### Cross-Cutting Concerns Identified

**1. Role-Based Access Control (RBAC)**
- **Affects**: All routes, all database queries, all UI components, all API endpoints
- **Requirements**: 4 isolated roles with zero data crossover except admin full-read capability for dispute resolution
- **Implementation**: Route groups + middleware enforcement + PostgreSQL Row-Level Security policies
- **Challenge**: Admin needs full read access for disputes while maintaining creator/client blindness to each other's data

**2. Real-Time State Synchronization**
- **Affects**: Task status updates, creator dashboards, QA review queues, admin operations dashboards
- **Requirements**: <5 second propagation across all user dashboards for state changes (task claimed, submitted, approved, etc.)
- **Implementation**: WebSocket connections (Socket.io) + Redis pub/sub for multi-instance coordination, with polling fallback for graceful degradation
- **Challenge**: Serverless deployment constraints (Cloud Run, Lambda) make WebSocket coordination more complex than traditional server deployment

**3. Task & Review Management**
- **Affects**: Creator task claiming, QA review assignment, workload distribution
- **Requirements**: Sequential claiming (one-at-a-time), atomic state transitions preventing double-assignment, automatic release after timeout
- **Implementation**: Optimistic locking with database transactions, background job for timeout enforcement
- **State Machine**: AVAILABLE → CLAIMED (24hr timeout) → IN_PROGRESS → SUBMITTED → QA review states
- **Decision**: Sequential claiming chosen over batch reservation to avoid premature optimization and reduce implementation complexity

**4. Payment Accuracy & Audit Trails**
- **Affects**: Creator earnings calculations, platform margins, weekly payout batches, tax compliance
- **Requirements**: 100% accuracy guarantee, full audit trail for all transactions, tier multiplier calculations, 7-year retention for tax compliance
- **Implementation**: Weekly batch processing (reduces real-time payment complexity), dual provider coordination (Stripe + M-Pesa), transaction logs with immutable audit trail
- **Challenge**: Coordinating two payment providers with different APIs, currencies (USD/EUR/GBP vs KES/TZS), and payout methods while guaranteeing accuracy

**5. Data Lifecycle Automation**
- **Affects**: Storage costs, compliance requirements, dispute resolution capabilities
- **Requirements**: 7-day audio deletion (minimize storage costs), 30-day transcript retention, 90-day deliverable retention, 7-year payment record retention, exemptions for active disputes
- **Implementation**: S3 object lifecycle policies (audio), scheduled PostgreSQL cleanup jobs (transcripts/deliverables), legal hold capability for dispute/investigation data
- **Challenge**: Automated deletion with intelligent exemptions (disputes, legal holds) without manual intervention

**6. Fraud Prevention & Security Monitoring**
- **Affects**: Account creation, task claiming, quality submissions, payout processing
- **Requirements**: Device fingerprinting at registration, email normalization (prevent Gmail+tags abuse), multi-account detection, automated pattern flagging
- **Implementation**: Fingerprinting library integration, normalized email indexing, background jobs for pattern detection, admin review queue for flagged accounts
- **Challenge**: Detecting sophisticated fraud patterns (collusion, quality gaming, multi-account abuse) without false positives affecting legitimate users

**7. Multi-Integration Orchestration**
- **Affects**: Transcription pipeline reliability, payment processing, quality validation tools
- **Requirements**: Failover strategies (primary/fallback providers), rate limiting, cost controls, SLA monitoring and alerts
- **Implementation**: Primary/fallback pattern (AssemblyAI → Whisper), queue-based retry logic (payments), circuit breakers for failing integrations
- **Challenge**: Coordinating 4+ external APIs (AssemblyAI, Whisper, Stripe, M-Pesa, plagiarism, AI detection) with varying reliability, cost structures, and rate limits

**8. Global Compliance**
- **Affects**: Data storage locations, user rights implementation, retention policies, audit requirements
- **Requirements**: GDPR (EU - data subject rights), CCPA (California - disclosure requirements), SOC 2 Type II (enterprise tier prerequisite), regional data privacy laws
- **Implementation**: Self-service data export, account deletion workflows, automated retention enforcement, security controls documentation
- **Challenge**: Multi-jurisdiction compliance while maintaining performance and cost efficiency, SOC 2 certification timeline (12-month audit process before enterprise tier launch)

### Cost & Scale Projections

**Year 1 Infrastructure Estimates** (based on 1,000 uploaders, 200 creators, 3K-5K audio files/month):

- **Audio Transcription**: ~$750-1,250/month (AssemblyAI ~$0.25/hour, 1hr average podcasts)
- **Storage (S3)**: ~$50-100/month (7-day lifecycle minimizes costs)
- **Hosting & Database**: ~$200-500/month (scales with traffic and data volume)
- **Redis (Real-time)**: ~$50-100/month (managed Redis for pub/sub)
- **Total Infrastructure**: ~$1,000-2,000/month at Year 1 scale

**Business Model Validation:**
- Infrastructure cost represents **5-10% of revenue** on 35-40% platform margin marketplace
- Cost is **NOT a bottleneck** for business viability
- Architecture can scale horizontally to 10x traffic without fundamental changes

### Key Architectural Insights

**From Team Collaboration Analysis:**

1. **Sequential Task Claiming is Correct Choice**: Avoids premature optimization (batch reservation), reduces implementation complexity, enables faster time-to-market. Can add batch workflow later if real user data shows demand.

2. **Medium-Risk Stack is Optimal**: Modern proven technologies (not bleeding-edge), calculated trade-offs favor velocity over stability extremes, established patterns reduce implementation surprises.

3. **Dual Payment Provider is Launch Requirement**: M-Pesa is not optional - African creator market has limited banking infrastructure but widespread mobile money adoption. Must be operational at launch for market access.

4. **Specialized UX Requires Careful Frontend Stack**: Creator workspace (audio player, waveform, rich editor), QA interface (rubric scoring, evidence review), admin dashboard (dispute aggregation) are professional-grade tools, not simple CRUD interfaces. Technology choices must support rich interactions.

5. **Background Job Infrastructure is Critical**: Transcription processing, weekly payouts, data lifecycle cleanup, timeout enforcement, fraud detection - all require reliable scheduled job execution. Cannot rely solely on serverless function timeouts.

6. **Role Isolation Must Be Architectural Foundation**: Not a feature to add later - must be embedded in route structure, middleware layer, database schema, and query patterns from day one. Retrofitting would require complete rewrite.

---
