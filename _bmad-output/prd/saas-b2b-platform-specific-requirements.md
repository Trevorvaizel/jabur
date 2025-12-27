# SaaS B2B Platform Specific Requirements

## Project-Type Overview

jabur operates as a **multi-tenant SaaS B2B marketplace** with sophisticated role isolation and permission architecture. The platform serves four distinct user types across global markets (EU, US, Asia, Africa) requiring compliance with multiple data privacy regulations while maintaining strict data boundaries between marketplace participants.

**Key Technical Challenges:**
- Multi-role architecture with enforced role separation (clients can never become creators, and vice versa)
- Complex state management across upload → transcription → task routing → creation → QA → delivery workflow
- Real-time updates and task locking mechanisms at scale
- Global compliance requirements (GDPR for EU, regional data privacy laws)
- Payment processing with accurate creator payout calculations and audit trails

## Technical Architecture Considerations

### Multi-Tenant Data Model

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

### Permission Matrix (RBAC)

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

## Subscription Tiers & Pricing Model

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

## Integration Requirements

jabur requires **five critical third-party integrations** for core functionality:

### 1. Audio Transcription Service
**Provider Options**: AssemblyAI (preferred) or OpenAI Whisper API
**Requirements:**
- Automatic transcription within 15 minutes of upload completion
- Support for audio files up to 500MB and 3 hours duration
- Timestamp-aligned transcript for synchronized audio player
- Speaker diarization (optional, but valuable for multi-speaker podcasts)
- API key management and failover strategy if primary provider fails

### 2. Payment Processing (Mandatory Integrations)
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

### 3. Plagiarism Detection
**Provider**: Copyscape API, Turnitin API, or similar
**Requirements:**
- Real-time plagiarism checking before creator submits to QA
- Originality score threshold: 90%+ required for QA submission
- URL detection if content matches existing web pages
- Integration into creator editor interface (pre-submission check)

### 4. AI Content Detection
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

## Compliance & Data Privacy Requirements

### Global Compliance Targets

jabur targets **four major geographic markets** with corresponding compliance obligations:

**1. European Union (EU) - GDPR Required**
**2. United States - CCPA (California), state-level privacy laws**
**3. Asia - Regional data privacy laws (varies by country)**
**4. Africa - Emerging data privacy regulations**

### GDPR Compliance (EU Market - Mandatory)

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

### Data Retention & Deletion Policies

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

### SOC 2 Type II Certification (Enterprise Tier Requirement)

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

### Security & Fraud Prevention (Compliance Support)

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

## Implementation Considerations

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

