# Project Scoping & Phased Development

## MVP Strategy & Philosophy

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

## Phase 1: Full-Scope Launch (All 6 Differentiators Operational)

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

## Phase 2: Post-Launch Growth Features (12-18 Months)

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

## Phase 3: Horizontal & Vertical Expansion (18-24+ Months)

**Horizontal Expansion (New Content Types):**
- Additional source formats beyond podcasts: video transcription, article curation, interview summaries
- New output format types based on demand analysis (e.g., slide decks, infographics)
- Multi-language support for global creator base and international markets

**Vertical Integration (End-to-End Content Value Chain):**
- Direct AI podcast creation tools for uploaders (create → curate → distribute in one platform)
- Integrated distribution channels for finished content (publish directly to blog, Medium, Substack)
- Analytics dashboard for content performance tracking post-publication
- Content ROI measurement for uploaders

## Risk Mitigation Strategy

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

