# EPIC-09: Fraud Prevention & Anti-Abuse

**Epic Owner:** [TBD]  
**Priority:** P0 (Critical)  
**Estimated Effort:** 6-8 weeks  
**Dependencies:** Epic 1 (User Management)  

---

## 1. Epic Overview

### 1.1 Description

This epic covers comprehensive fraud prevention: duplicate account detection, device fingerprinting, velocity checking, plagiarism detection, AI-generated content detection, payment fraud prevention, and role separation enforcement. The goal is to maintain platform integrity and protect all users.

### 1.2 Business Value

- Protect platform from financial losses
- Maintain content quality standards
- Ensure fair marketplace for legitimate creators
- Build trust with uploaders
- Prevent gaming of the system

### 1.3 Key Principle

> **Role Isolation:** This platform is NOT a traditional freelance marketplace. Workers (creators) should NOT know they're in a gig marketplace. Client and creator experiences are deliberately isolated to prevent collusion and gaming.

### 1.4 Success Metrics

| Metric | Target |
|--------|--------|
| Duplicate account detection rate | > 95% |
| False positive rate | < 5% |
| Plagiarism detection accuracy | > 90% |
| AI content detection accuracy | > 85% |
| Fraud-related financial loss | < 0.5% of revenue |
| Time to detect fraud | < 24 hours |

---

## 2. User Stories

### 2.1 Role Separation

#### US-9.1: Separate Registration Flows
**As the** system  
**I want to** enforce separate registration for clients and creators  
**So that** role manipulation is prevented  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Different URLs: `/register/client` vs `/register/creator`
- [ ] Different UI messaging and value proposition
- [ ] Same email cannot exist on both sides
- [ ] Email normalization (handle Gmail dots, plus signs)
- [ ] Same phone number cannot exist on both sides
- [ ] Cross-registration attempt logged and blocked
- [ ] Clear error message without revealing why blocked

**Email Normalization Rules:**
```javascript
function normalizeEmail(email) {
  let [local, domain] = email.toLowerCase().split('@');
  
  // Gmail-specific normalization
  if (['gmail.com', 'googlemail.com'].includes(domain)) {
    local = local.split('+')[0].replace(/\./g, '');
    domain = 'gmail.com';
  } else {
    // Other domains: just handle + aliases
    local = local.split('+')[0];
  }
  
  return `${local}@${domain}`;
}

// Examples:
// john.doe+test@gmail.com → johndoe@gmail.com
// john+spam@company.com → john@company.com
```

---

#### US-9.2: Creator View Isolation
**As the** system  
**I want to** hide marketplace details from creators  
**So that** they can't game the system  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Creators see "Task Value: $X" (their payout)
- [ ] Creators do NOT see: client price, platform fee, client name
- [ ] Task descriptions anonymized (no client identifying info)
- [ ] Special instructions sanitized for client references
- [ ] API responses filtered for creator role

**What Creators See vs Don't See:**
| Visible | Hidden |
|---------|--------|
| Task title (from metadata) | Client name |
| Output type requirements | Client company |
| Task value (creator payout) | Client-paid price |
| Audio duration | Platform fee |
| Deadline | Other creators on project |
| Special instructions (sanitized) | Client contact info |

---

### 2.2 Duplicate Account Detection

#### US-9.3: Device Fingerprinting
**As the** system  
**I want to** fingerprint devices during registration  
**So that** I can detect duplicate accounts  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Collect fingerprint on registration page load
- [ ] Fingerprint components: browser, OS, screen, timezone, canvas, WebGL, fonts
- [ ] Store fingerprint hash
- [ ] Compare against existing fingerprints
- [ ] Similarity > 90%: block registration
- [ ] Similarity 70-90%: flag for review
- [ ] Fingerprint collected on login for ongoing monitoring
- [ ] FingerprintJS Pro integration (or similar)

**Fingerprint Components:**
```javascript
const fingerprintComponents = {
  // Browser and OS
  userAgent: navigator.userAgent,
  language: navigator.language,
  platform: navigator.platform,
  hardwareConcurrency: navigator.hardwareConcurrency,
  deviceMemory: navigator.deviceMemory,
  
  // Screen
  screenResolution: `${screen.width}x${screen.height}`,
  colorDepth: screen.colorDepth,
  pixelRatio: window.devicePixelRatio,
  
  // Timezone
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  timezoneOffset: new Date().getTimezoneOffset(),
  
  // Canvas fingerprint
  canvasHash: getCanvasFingerprint(),
  
  // WebGL
  webglVendor: getWebGLVendor(),
  webglRenderer: getWebGLRenderer(),
  
  // Fonts
  fontsHash: getInstalledFonts()
};
```

---

#### US-9.4: IP Velocity Checking
**As the** system  
**I want to** monitor registration velocity by IP  
**So that** I can prevent mass account creation  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Track registrations per IP address
- [ ] Threshold: > 3 registrations from same IP in 24 hours → block
- [ ] Threshold: > 10 from same /24 subnet in 24 hours → block
- [ ] VPN/proxy detection
- [ ] Known datacenter IP flagging
- [ ] Corporate IP allowlisting available
- [ ] Real-time blocking
- [ ] Alert admin of velocity violations

---

#### US-9.5: Email Pattern Detection
**As the** system  
**I want to** detect suspicious email patterns  
**So that** I can identify potential fake accounts  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Block disposable email domains (mailinator, tempmail, etc.)
- [ ] Flag newly created email domains (< 30 days old)
- [ ] Detect sequential patterns (user1, user2, user3)
- [ ] Flag high-risk TLD patterns
- [ ] Maintain blocklist/allowlist

---

#### US-9.6: Phone Number Validation
**As the** system  
**I want to** validate phone numbers thoroughly  
**So that** I can prevent fake registrations  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Format validation (E.164)
- [ ] Carrier lookup
- [ ] Block VoIP numbers for creator registration
- [ ] Block known fraud number pools
- [ ] SMS OTP verification required
- [ ] One phone per account
- [ ] Phone cannot be reused across roles

---

### 2.3 Content Quality Detection

#### US-9.7: Plagiarism Detection
**As the** system  
**I want to** detect plagiarized content  
**So that** only original work is accepted  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Scan all submissions before approval
- [ ] Check against: web, academic databases, internal submissions
- [ ] Similarity score calculated
- [ ] Threshold: > 30% → auto-flag
- [ ] Threshold: > 50% → auto-reject
- [ ] Matched sources identified
- [ ] Integration with Copyscape or similar
- [ ] Results stored for audit

**Plagiarism Response Matrix:**
| Similarity | Action | Creator Impact |
|------------|--------|----------------|
| 0-10% | Pass | None |
| 11-20% | Pass with note | None |
| 21-30% | Manual review | None until review |
| 31-50% | Auto-flag, revision required | Warning |
| 51%+ | Auto-reject | Account flag |

---

#### US-9.8: AI-Generated Content Detection
**As the** system  
**I want to** detect AI-generated submissions  
**So that** we ensure human-created content  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Scan all submissions
- [ ] AI detection score (0-100%)
- [ ] Threshold: > 90% → auto-flag
- [ ] Threshold: > 70% → manual review
- [ ] Multiple detection methods (GPTZero, custom models)
- [ ] Creator not told specific score
- [ ] Results logged but not displayed to creator
- [ ] Editor sees AI flag during review

**Detection Approach:**
```javascript
async function detectAIContent(content) {
  // Use multiple detectors and ensemble
  const [gptZeroResult, customModelResult] = await Promise.all([
    gptZero.detect(content),
    customAIDetector.detect(content)
  ]);
  
  // Weighted average
  const aiScore = (
    gptZeroResult.score * 0.6 +
    customModelResult.score * 0.4
  );
  
  return {
    score: aiScore,
    confidence: Math.min(gptZeroResult.confidence, customModelResult.confidence),
    flag: aiScore > 0.9,
    review: aiScore > 0.7,
    details: {
      gptZero: gptZeroResult,
      custom: customModelResult
    }
  };
}
```

---

#### US-9.9: Behavioral Anomaly Detection
**As the** system  
**I want to** detect suspicious creator behavior  
**So that** I can identify gaming attempts  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Track time between claim and submission
- [ ] Flag if submission time < 50% of expected
- [ ] Detect copy-paste patterns (bulk paste events)
- [ ] Track typing patterns (optional, advanced)
- [ ] Compare to creator's historical patterns
- [ ] Alert on significant deviations

---

### 2.4 Payment Fraud Prevention

#### US-9.10: Fake Bank Account Detection
**As the** system  
**I want to** verify payout accounts  
**So that** payments go to legitimate recipients  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Micro-deposit verification for bank accounts
- [ ] PayPal email verification (send verification email)
- [ ] M-Pesa phone verification (STK push)
- [ ] Payout hold period for new accounts (first 14 days)
- [ ] Flag if payout method changed frequently
- [ ] Cross-check against known fraud accounts

---

#### US-9.11: Chargeback Prevention
**As the** system  
**I want to** minimize chargebacks  
**So that** the platform doesn't lose money  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Clear billing descriptor on statements
- [ ] Pre-charge email confirmation
- [ ] Fraud screening via Stripe Radar
- [ ] 3D Secure for high-risk transactions
- [ ] Velocity limits on card usage
- [ ] Track chargeback history per user
- [ ] Block users with chargeback history

---

#### US-9.12: Earnings Manipulation Detection
**As the** system  
**I want to** detect earnings gaming  
**So that** fraudulent payouts are prevented  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Detect self-dealing (creator claims own uploads)
- [ ] Detect collusion patterns (same IP, fast approval)
- [ ] Flag unusual approval rates between specific pairs
- [ ] Monitor for split payouts to multiple accounts
- [ ] Rate limit task completion velocity

---

### 2.5 Account Flagging System

#### US-9.13: Automatic Flag Generation
**As the** system  
**I want to** automatically flag suspicious accounts  
**So that** issues are caught without manual monitoring  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Auto-flag triggers:
  - 3 consecutive ratings < 3.0
  - Plagiarism > 30%
  - AI detection > 90%
  - 3 late submissions in 30 days
  - Failed identity verification
  - Duplicate fingerprint detected
  - Unusual payout patterns
- [ ] Flag severity auto-assigned (low/medium/high/critical)
- [ ] Admin notification for high/critical
- [ ] Daily digest of new flags

---

#### US-9.14: Flag Review Workflow
**As an** admin  
**I want to** review and resolve flags efficiently  
**So that** fraud is handled quickly  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Flag queue with filters (type, severity, status)
- [ ] Flag details with evidence
- [ ] Creator history visible
- [ ] Related flags shown
- [ ] Actions: dismiss, warn, demote, suspend, ban
- [ ] Resolution notes required
- [ ] Creator notification on resolution
- [ ] Appeal process for serious actions

---

### 2.6 Fraud Dashboard

#### US-9.15: Fraud Metrics Dashboard
**As an** admin  
**I want to** see fraud detection metrics  
**So that** I can assess system effectiveness  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Real-time fraud indicators
- [ ] Flags created (by type, severity)
- [ ] Resolution rate and time
- [ ] False positive tracking
- [ ] Duplicate accounts blocked
- [ ] Suspicious transactions blocked
- [ ] Financial impact prevented
- [ ] Trend analysis

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Device fingerprints
CREATE TABLE device_fingerprints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    fingerprint_hash VARCHAR(64) NOT NULL,
    fingerprint_components JSONB NOT NULL,
    
    -- Context
    ip_address INET,
    user_agent TEXT,
    
    -- Matching
    similar_fingerprints UUID[], -- Other users with similar fingerprints
    similarity_score DECIMAL(4,3),
    
    -- Status
    is_suspicious BOOLEAN DEFAULT FALSE,
    is_trusted BOOLEAN DEFAULT FALSE,
    
    first_seen_at TIMESTAMP DEFAULT NOW(),
    last_seen_at TIMESTAMP DEFAULT NOW()
);

-- IP tracking
CREATE TABLE ip_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ip_address INET NOT NULL,
    user_id UUID REFERENCES users(id),
    
    registration_type VARCHAR(20), -- 'client', 'creator'
    status VARCHAR(20), -- 'success', 'blocked'
    block_reason TEXT,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Fraud detection events
CREATE TABLE fraud_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    
    event_type VARCHAR(50) NOT NULL,
    severity VARCHAR(20) NOT NULL,
    
    -- Detection details
    detection_method VARCHAR(50),
    confidence_score DECIMAL(4,3),
    evidence JSONB,
    
    -- Outcome
    action_taken VARCHAR(50),
    reviewed_by UUID REFERENCES users(id),
    reviewed_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_type CHECK (event_type IN (
        'duplicate_fingerprint', 'ip_velocity', 'email_pattern',
        'plagiarism', 'ai_content', 'behavioral_anomaly',
        'payment_fraud', 'collusion', 'identity_mismatch'
    )),
    CONSTRAINT valid_severity CHECK (severity IN ('low', 'medium', 'high', 'critical'))
);

-- Content quality checks
CREATE TABLE content_quality_checks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID REFERENCES content_submissions(id),
    
    -- Plagiarism
    plagiarism_score DECIMAL(4,3),
    plagiarism_sources JSONB,
    plagiarism_provider VARCHAR(50),
    
    -- AI detection
    ai_score DECIMAL(4,3),
    ai_confidence DECIMAL(4,3),
    ai_provider VARCHAR(50),
    
    -- Behavioral
    time_to_complete_seconds INT,
    expected_time_seconds INT,
    paste_events INT,
    typing_pattern_match DECIMAL(4,3),
    
    -- Result
    passed BOOLEAN,
    flags_raised VARCHAR(50)[],
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Blocked entities
CREATE TABLE blocked_entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    entity_type VARCHAR(20) NOT NULL, -- 'email_domain', 'ip', 'fingerprint', 'phone'
    entity_value VARCHAR(255) NOT NULL,
    
    reason TEXT,
    blocked_by UUID REFERENCES users(id),
    expires_at TIMESTAMP, -- NULL = permanent
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    UNIQUE(entity_type, entity_value)
);

-- Disposable email domains (maintained list)
CREATE TABLE disposable_email_domains (
    domain VARCHAR(255) PRIMARY KEY,
    added_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_fingerprints_hash ON device_fingerprints(fingerprint_hash);
CREATE INDEX idx_fingerprints_user ON device_fingerprints(user_id);
CREATE INDEX idx_ip_registrations_ip ON ip_registrations(ip_address, created_at);
CREATE INDEX idx_fraud_events_user ON fraud_events(user_id, created_at);
CREATE INDEX idx_fraud_events_type ON fraud_events(event_type, severity, created_at);
CREATE INDEX idx_quality_checks_submission ON content_quality_checks(submission_id);
CREATE INDEX idx_blocked_entities_type ON blocked_entities(entity_type, entity_value);
```

---

## 4. API Specifications

### 4.1 Fingerprint Endpoints

```yaml
# Record Fingerprint
POST /api/v1/security/fingerprint
  Headers: Authorization: Bearer {token} (optional)
  Request:
    fingerprint_hash: string
    components: object
    context: 'registration' | 'login' | 'session'
  Response: 200 OK
    recorded: boolean
    suspicious: boolean (don't reveal details)

# Check Fingerprint (internal)
POST /api/v1/internal/security/check-fingerprint
  Request:
    fingerprint_hash: string
  Response: 200 OK
    is_blocked: boolean
    similar_accounts: number
    risk_score: number
```

### 4.2 Content Check Endpoints

```yaml
# Check Content Quality (called on submission)
POST /api/v1/internal/quality/check
  Request:
    submission_id: uuid
    content: string
    creator_id: uuid
    time_spent_seconds: number
    paste_events: number
  Response: 200 OK
    passed: boolean
    plagiarism: {
      score: number
      sources: [{url, similarity}]
    }
    ai_detection: {
      score: number
      confidence: number
    }
    flags: string[]
```

### 4.3 Fraud Management Endpoints

```yaml
# Get Fraud Dashboard
GET /api/v1/admin/fraud/dashboard
  Headers: Authorization: Bearer {admin_token}
  Query:
    period: 'day' | 'week' | 'month'
  Response: 200 OK
    summary: {
      total_flags: number
      pending_review: number
      blocked_registrations: number
      suspicious_transactions: number
    }
    by_type: [{type, count}]
    trend: [{date, flags}]

# Get Fraud Events
GET /api/v1/admin/fraud/events
  Headers: Authorization: Bearer {admin_token}
  Query:
    type: string
    severity: string
    status: string
    page: number
  Response: 200 OK
    events: FraudEvent[]
    pagination: {...}

# Resolve Fraud Event
POST /api/v1/admin/fraud/events/:id/resolve
  Headers: Authorization: Bearer {admin_token}
  Request:
    action: 'dismiss' | 'warn' | 'suspend' | 'ban'
    notes: string
    notify_user: boolean
  Response: 200 OK
    event: FraudEvent

# Block Entity
POST /api/v1/admin/fraud/block
  Headers: Authorization: Bearer {admin_token}
  Request:
    entity_type: 'email_domain' | 'ip' | 'fingerprint' | 'phone'
    entity_value: string
    reason: string
    expires_in_days: number (optional)
  Response: 201 Created
    blocked_entity: BlockedEntity

# Unblock Entity
DELETE /api/v1/admin/fraud/block/:id
  Headers: Authorization: Bearer {admin_token}
  Response: 204 No Content
```

---

## 5. Detection Algorithms

### 5.1 Fingerprint Similarity

```javascript
function calculateFingerprintSimilarity(fp1, fp2) {
  const weights = {
    userAgent: 0.1,
    screenResolution: 0.1,
    timezone: 0.15,
    language: 0.05,
    canvasHash: 0.25,
    webglRenderer: 0.2,
    fontsHash: 0.15
  };
  
  let similarity = 0;
  
  for (const [key, weight] of Object.entries(weights)) {
    if (fp1.components[key] === fp2.components[key]) {
      similarity += weight;
    }
  }
  
  return similarity;
}

// Threshold: > 0.9 = likely same device
// Threshold: > 0.7 = possibly same device
```

### 5.2 Collusion Detection

```javascript
async function detectCollusion(uploaderId, creatorId) {
  // Check for patterns suggesting collusion
  
  // 1. Same IP
  const sameIP = await checkSameIP(uploaderId, creatorId);
  
  // 2. Fast approval pattern
  const avgApprovalTime = await getAvgApprovalTime(uploaderId, creatorId);
  const platformAvg = await getPlatformAvgApprovalTime();
  
  // 3. Unusual interaction frequency
  const interactionRate = await getInteractionRate(uploaderId, creatorId);
  const normalRate = await getNormalInteractionRate();
  
  // 4. Similar fingerprints
  const fingerprintSimilarity = await compareFingerprintsBetweenUsers(uploaderId, creatorId);
  
  const riskScore = calculateCollusionRisk({
    sameIP,
    approvalTimeRatio: avgApprovalTime / platformAvg,
    interactionRatio: interactionRate / normalRate,
    fingerprintSimilarity
  });
  
  return {
    risk: riskScore,
    flag: riskScore > 0.7,
    evidence: { sameIP, avgApprovalTime, interactionRate, fingerprintSimilarity }
  };
}
```

---

## 6. Implementation Checklist

### Week 1-2: Role Separation & Fingerprinting
- [ ] Separate registration flows
- [ ] Email normalization
- [ ] Device fingerprinting integration
- [ ] Fingerprint storage and comparison

### Week 3-4: Velocity & Duplicate Detection
- [ ] IP velocity tracking
- [ ] Duplicate fingerprint detection
- [ ] Email pattern detection
- [ ] Phone validation

### Week 5-6: Content Quality
- [ ] Plagiarism detection integration
- [ ] AI content detection integration
- [ ] Behavioral anomaly detection
- [ ] Quality check pipeline

### Week 7-8: Payment & Dashboard
- [ ] Payout verification
- [ ] Collusion detection
- [ ] Fraud dashboard
- [ ] Flag management workflow

---

*Document Version: 1.0*  
*Last Updated: December 2024*
