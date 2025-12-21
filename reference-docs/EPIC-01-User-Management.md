# EPIC-01: User Management & Authentication

**Epic Owner:** [TBD]  
**Priority:** P0 (Critical Path)  
**Estimated Effort:** 8-10 weeks  
**Dependencies:** None (Foundation)  

---

## 1. Epic Overview

### 1.1 Description

This epic covers all user-related functionality including registration, authentication, profile management, role-based access control, and the creator level system. It establishes the foundation for platform identity and access.

### 1.2 Business Value

- Secure user authentication protects platform integrity
- Role separation prevents fraud and platform gaming
- Creator level system ensures quality matching
- Admin controls enable operational flexibility

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Registration completion rate | > 80% |
| Login success rate | > 99% |
| 2FA adoption rate | > 30% |
| Fraudulent account detection | > 95% |
| Creator approval turnaround | < 48 hours |

---

## 2. User Stories

### 2.1 Registration & Authentication

#### US-1.1: Email Registration (Client)
**As a** potential content uploader  
**I want to** register with my email address  
**So that** I can upload podcasts for curation  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Registration form collects: email, password, full name
- [ ] Email validation (format, not disposable domain)
- [ ] Password strength requirements enforced (min 8 chars, 1 upper, 1 lower, 1 number)
- [ ] Email verification sent within 30 seconds
- [ ] Verification link expires after 24 hours
- [ ] User cannot access platform until email verified
- [ ] Registration URL is `/register/client` (separate from creator)
- [ ] Device fingerprint captured on registration
- [ ] Registration IP logged

**Technical Notes:**
```javascript
// Registration endpoint
POST /api/v1/auth/register/client
{
  email: string,
  password: string,
  full_name: string,
  device_fingerprint: string // from client-side FingerprintJS
}

// Response
{
  user_id: uuid,
  message: "Verification email sent",
  requires_verification: true
}
```

---

#### US-1.2: Email Registration (Creator)
**As a** potential content creator  
**I want to** register as a creator  
**So that** I can earn money by curating content  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Separate registration URL: `/register/creator` or `/become-creator`
- [ ] Registration form collects: email, password, full name, phone number
- [ ] Phone number verification via SMS OTP
- [ ] Email verification required
- [ ] System checks if email already registered as client → block with message
- [ ] System checks if phone already registered → block
- [ ] Device fingerprint captured and checked against existing accounts
- [ ] Creator account created in "pending_application" status
- [ ] Redirect to creator application flow after verification

**Technical Notes:**
```javascript
// Registration endpoint
POST /api/v1/auth/register/creator
{
  email: string,
  password: string,
  full_name: string,
  phone_number: string,
  device_fingerprint: string
}

// Validation checks
- Check users table: email NOT EXISTS WHERE role = 'uploader'
- Check users table: phone NOT EXISTS
- Check device_fingerprints: fingerprint similarity < 0.8
```

---

#### US-1.3: OAuth Registration/Login
**As a** user  
**I want to** sign up/in with Google  
**So that** I can access the platform quickly  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Google OAuth 2.0 integration
- [ ] Role selection required after OAuth (client or creator)
- [ ] If creator selected, phone verification still required
- [ ] Profile photo imported from Google
- [ ] Email marked as verified automatically
- [ ] Same fraud checks apply (device fingerprint, role separation)

---

#### US-1.4: User Login
**As a** registered user  
**I want to** log in to my account  
**So that** I can access platform features  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Login with email and password
- [ ] 2FA prompt if enabled
- [ ] Rate limiting: 5 failed attempts = 15-minute lockout
- [ ] "Remember me" option (extends refresh token to 30 days)
- [ ] Session tracking with device info
- [ ] Suspicious login detection (new device/location) → email alert
- [ ] JWT access token (15 min) + refresh token (7 days) issued

**Technical Notes:**
```javascript
POST /api/v1/auth/login
{
  email: string,
  password: string,
  remember_me: boolean,
  device_fingerprint: string
}

// Response
{
  access_token: string,
  refresh_token: string,
  expires_in: 900, // seconds
  user: {
    id: uuid,
    email: string,
    role: string,
    requires_2fa: boolean
  }
}
```

---

#### US-1.5: Password Reset
**As a** user  
**I want to** reset my forgotten password  
**So that** I can regain account access  

**Priority:** P0  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] "Forgot password" link on login page
- [ ] Email input → reset link sent
- [ ] Reset token expires in 1 hour
- [ ] Token is single-use
- [ ] New password must differ from last 3 passwords
- [ ] All active sessions invalidated after reset
- [ ] Confirmation email sent after successful reset

---

#### US-1.6: Two-Factor Authentication Setup
**As a** security-conscious user  
**I want to** enable 2FA on my account  
**So that** my account is more secure  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] TOTP-based 2FA (Google Authenticator, Authy compatible)
- [ ] QR code display for easy setup
- [ ] Manual entry code provided as alternative
- [ ] 8 backup codes generated (single-use)
- [ ] User must verify with code before 2FA activates
- [ ] 2FA required for creators (strongly encouraged, optional)
- [ ] 2FA required for admin accounts (mandatory)

---

#### US-1.7: Session Management
**As a** user  
**I want to** view and manage my active sessions  
**So that** I can ensure account security  

**Priority:** P2  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] List all active sessions with device info, location, last active time
- [ ] "Sign out" option per session
- [ ] "Sign out all other sessions" button
- [ ] Current session highlighted
- [ ] Session limit: max 5 concurrent sessions per user

---

### 2.2 Profile Management

#### US-1.8: Client Profile Setup
**As a** content uploader  
**I want to** complete my profile  
**So that** the platform knows my preferences  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Profile fields: display name, company (optional), timezone, notification preferences
- [ ] Profile photo upload (max 5MB, jpg/png)
- [ ] Saved payment methods management
- [ ] Account settings (email, password change)

---

#### US-1.9: Creator Profile & Application
**As a** new creator  
**I want to** complete my creator application  
**So that** I can be approved to work on the platform  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Multi-step application form:
  - Step 1: Personal info (bio, location, languages)
  - Step 2: Skills & experience (writing samples, portfolio links)
  - Step 3: Work preferences (availability, output types interested in)
  - Step 4: Payment info (bank account or M-Pesa details)
  - Step 5: Review & submit
- [ ] At least one writing sample required
- [ ] Agreement to creator terms required
- [ ] Application saved as draft between steps
- [ ] Submission triggers admin review
- [ ] Creator starts at "Probationary" level when approved

**Technical Notes:**
```javascript
// Creator application schema
{
  user_id: uuid,
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected',
  personal_info: {
    bio: string,
    location: string,
    languages: string[],
    timezone: string
  },
  experience: {
    years_writing: number,
    specializations: string[],
    portfolio_urls: string[],
    sample_work_files: string[] // S3 URLs
  },
  work_preferences: {
    hours_per_week: number,
    output_types: string[],
    rush_available: boolean
  },
  payment_info: {
    method: 'bank_transfer' | 'paypal' | 'mpesa',
    details: encrypted_json
  },
  submitted_at: timestamp,
  reviewed_at: timestamp,
  reviewed_by: uuid,
  review_notes: string
}
```

---

#### US-1.10: Creator Profile Display
**As an** approved creator  
**I want to** maintain my public profile  
**So that** I appear professional on the platform  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Editable fields: bio, skills, portfolio links, availability status
- [ ] Non-editable fields: level, rating, completed count (system-managed)
- [ ] Profile visibility toggle (searchable vs private)
- [ ] Badge display based on achievements

---

### 2.3 Creator Level System

#### US-1.11: View Current Level & Progress
**As a** creator  
**I want to** see my current level and progress to the next level  
**So that** I understand my growth path  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Display current level name and badge
- [ ] Progress bar showing:
  - Tasks completed: X / Y required for next level
  - Current rating: X.XX / Y.YY required for next level
- [ ] List of output types accessible at current level
- [ ] Preview of output types unlocked at next level
- [ ] Tooltip explaining level benefits

**UI Mockup:**
```
┌─────────────────────────────────────────────────────┐
│  Your Creator Level                                  │
│  ┌──────────────────────────────────────────────┐   │
│  │  ⭐ Mid-Level Creator                         │   │
│  │                                               │   │
│  │  Progress to Senior:                          │   │
│  │  Tasks: ████████████░░░░ 35/50               │   │
│  │  Rating: ██████████████░░ 4.45/4.50          │   │
│  │                                               │   │
│  │  You can work on:                            │   │
│  │  ✓ Executive Summary  ✓ Detailed Summary    │   │
│  │  ✓ Reflection Questions  ✓ Action Items     │   │
│  │                                               │   │
│  │  Unlock at Senior:                           │   │
│  │  🔒 Key Insights  🔒 Blog Post              │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

#### US-1.12: Admin Level Management
**As an** admin  
**I want to** create and configure creator levels  
**So that** I can customize the tier system  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] CRUD interface for creator levels
- [ ] Configurable fields:
  - Level name
  - Description
  - Minimum completed tasks
  - Minimum rating
  - Rate multiplier (0.5x - 2.0x)
  - Allowed output types (multi-select)
  - Requires manual approval (boolean)
  - Display order
- [ ] Cannot delete level if creators assigned to it
- [ ] Preview of changes before saving
- [ ] Audit log of all level configuration changes

---

#### US-1.13: Admin Change Creator Level
**As an** admin  
**I want to** change a creator's level  
**So that** I can promote or demote based on performance  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Select creator from list/search
- [ ] View current level and history
- [ ] Select new level from dropdown
- [ ] Reason field (required)
- [ ] Confirmation dialog with impact summary
- [ ] Email notification sent to creator
- [ ] Change recorded in audit log

**API Endpoint:**
```javascript
POST /api/v1/admin/creators/:id/change-level
{
  new_level_id: uuid,
  reason: string
}

// Response
{
  creator: CreatorProfile,
  previous_level: CreatorLevel,
  new_level: CreatorLevel,
  changed_at: timestamp,
  changed_by: uuid
}
```

---

#### US-1.14: Admin View Level Statistics
**As an** admin  
**I want to** see statistics on creator levels  
**So that** I understand workforce composition  

**Priority:** P0  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Dashboard card showing total creators by level
- [ ] Visualization (bar chart or pie chart)
- [ ] Drill-down to list of creators per level
- [ ] Trends over time (weekly/monthly)
- [ ] Filter by date range

---

### 2.4 Account Security & Compliance

#### US-1.15: Account Deletion (GDPR)
**As a** user  
**I want to** delete my account and data  
**So that** I can exercise my privacy rights  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] "Delete Account" option in settings
- [ ] Warning about irreversible action
- [ ] Password confirmation required
- [ ] 30-day grace period before deletion
- [ ] Cancellation possible during grace period
- [ ] Email confirmation of deletion request
- [ ] Data anonymization process:
  - PII removed/hashed
  - Content attributed to "Deleted User"
  - Financial records retained (legal requirement)
- [ ] Confirmation email when deletion complete

---

#### US-1.16: Data Export (GDPR)
**As a** user  
**I want to** export all my data  
**So that** I have a copy of my information  

**Priority:** P2  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] "Export My Data" button in settings
- [ ] Export includes: profile, uploads, content created, payment history
- [ ] Format: JSON and/or CSV in a ZIP file
- [ ] Export generated asynchronously (may take hours for large accounts)
- [ ] Download link sent via email (expires in 7 days)
- [ ] Rate limit: 1 export per week

---

### 2.5 Role Separation & Fraud Prevention

#### US-1.17: Email Uniqueness Across Roles
**As the** system  
**I want to** prevent the same email from registering as both client and creator  
**So that** role separation is enforced  

**Priority:** P0  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Registration checks if email exists with different role
- [ ] Block registration with clear error message
- [ ] Check also handles email variations:
  - `john+test@gmail.com` → `john@gmail.com`
  - Ignore dots in Gmail: `j.ohn@gmail.com` → `john@gmail.com`
- [ ] Log blocked attempts for fraud analysis

---

#### US-1.18: Device Fingerprint Detection
**As the** system  
**I want to** detect when the same device registers multiple accounts  
**So that** I can prevent fraud  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Capture device fingerprint on registration and login
- [ ] Fingerprint components: browser, OS, screen, timezone, canvas hash, WebGL hash
- [ ] Store fingerprint hash in database
- [ ] On registration, check similarity with existing fingerprints
- [ ] Similarity > 0.9 → block and flag for review
- [ ] Similarity 0.7-0.9 → allow but flag for monitoring
- [ ] Alert admin of potential duplicate accounts

---

#### US-1.19: IP Velocity Checking
**As the** system  
**I want to** detect multiple registrations from the same IP  
**So that** I can prevent mass account creation  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Track registration attempts by IP address
- [ ] Threshold: > 3 registrations from same IP in 24 hours → block
- [ ] Exceptions: known VPN ranges (flag but allow), corporate IPs
- [ ] Alert admin of velocity violations
- [ ] Blocked users can request manual review

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Core users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    email_normalized VARCHAR(255) NOT NULL, -- For duplicate detection
    password_hash VARCHAR(255),
    auth_provider VARCHAR(50) DEFAULT 'email',
    auth_provider_id VARCHAR(255),
    role VARCHAR(20) NOT NULL CHECK (role IN ('uploader', 'creator', 'editor', 'admin')),
    status VARCHAR(30) NOT NULL DEFAULT 'pending_verification',
    full_name VARCHAR(255),
    phone_number VARCHAR(20),
    phone_verified_at TIMESTAMP,
    avatar_url VARCHAR(500),
    timezone VARCHAR(50) DEFAULT 'UTC',
    email_verified_at TIMESTAMP,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_secret VARCHAR(255),
    two_factor_backup_codes TEXT[], -- Encrypted
    password_changed_at TIMESTAMP,
    last_login_at TIMESTAMP,
    failed_login_attempts INT DEFAULT 0,
    locked_until TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    deleted_at TIMESTAMP,
    
    CONSTRAINT valid_status CHECK (status IN (
        'pending_verification', 'active', 'suspended', 'pending_deletion', 'deleted'
    ))
);

-- Email normalization function
CREATE OR REPLACE FUNCTION normalize_email(email TEXT) RETURNS TEXT AS $$
DECLARE
    local_part TEXT;
    domain TEXT;
BEGIN
    local_part := split_part(email, '@', 1);
    domain := lower(split_part(email, '@', 2));
    
    -- Gmail-specific normalization
    IF domain IN ('gmail.com', 'googlemail.com') THEN
        -- Remove dots and everything after +
        local_part := replace(split_part(local_part, '+', 1), '.', '');
        domain := 'gmail.com';
    ELSE
        -- For other domains, just handle + aliases
        local_part := split_part(local_part, '+', 1);
    END IF;
    
    RETURN lower(local_part) || '@' || domain;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Trigger to auto-populate normalized email
CREATE OR REPLACE FUNCTION set_normalized_email() RETURNS TRIGGER AS $$
BEGIN
    NEW.email_normalized := normalize_email(NEW.email);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_normalize_email
    BEFORE INSERT OR UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION set_normalized_email();

-- Device fingerprints
CREATE TABLE device_fingerprints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    fingerprint_hash VARCHAR(64) NOT NULL,
    fingerprint_components JSONB NOT NULL,
    ip_address INET,
    user_agent TEXT,
    first_seen_at TIMESTAMP DEFAULT NOW(),
    last_seen_at TIMESTAMP DEFAULT NOW(),
    is_trusted BOOLEAN DEFAULT FALSE,
    
    UNIQUE(user_id, fingerprint_hash)
);

-- Registration fraud checks
CREATE TABLE registration_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255),
    email_normalized VARCHAR(255),
    ip_address INET NOT NULL,
    fingerprint_hash VARCHAR(64),
    role_attempted VARCHAR(20),
    status VARCHAR(20) NOT NULL, -- 'success', 'blocked_duplicate', 'blocked_velocity', 'blocked_role'
    block_reason TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Creator levels
CREATE TABLE creator_levels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    min_completed_tasks INT NOT NULL DEFAULT 0,
    min_rating DECIMAL(3,2) DEFAULT 0.00,
    rate_multiplier DECIMAL(3,2) NOT NULL DEFAULT 1.00,
    allowed_output_types UUID[], -- References output_types
    requires_manual_approval BOOLEAN DEFAULT FALSE,
    display_order INT NOT NULL,
    badge_icon VARCHAR(100),
    badge_color VARCHAR(7), -- Hex color
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Default levels
INSERT INTO creator_levels (name, slug, description, min_completed_tasks, min_rating, rate_multiplier, display_order, badge_color) VALUES
('Probationary', 'probationary', 'New creators with limited task access. Complete 5 tasks to advance.', 0, 0.00, 0.80, 0, '#9CA3AF'),
('Junior', 'junior', 'Access to basic tasks. Build your reputation.', 5, 4.00, 1.00, 1, '#60A5FA'),
('Mid-Level', 'mid-level', 'Full access to standard tasks.', 20, 4.30, 1.10, 2, '#34D399'),
('Senior', 'senior', 'Access to advanced and specialized tasks.', 50, 4.50, 1.25, 3, '#A78BFA'),
('Expert', 'expert', 'Top-tier creator with all platform privileges.', 100, 4.70, 1.50, 4, '#F59E0B');

-- Creator profiles
CREATE TABLE creator_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    level_id UUID REFERENCES creator_levels(id) DEFAULT (SELECT id FROM creator_levels WHERE slug = 'probationary'),
    
    -- Application fields
    bio TEXT,
    location VARCHAR(100),
    languages VARCHAR(50)[],
    years_experience INT,
    specializations VARCHAR(100)[],
    portfolio_urls TEXT[],
    sample_work_urls TEXT[],
    
    -- Work preferences
    hours_per_week INT,
    preferred_output_types UUID[],
    rush_available BOOLEAN DEFAULT FALSE,
    
    -- Performance metrics (system-managed)
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_ratings INT DEFAULT 0,
    completed_assignments INT DEFAULT 0,
    on_time_rate DECIMAL(5,2) DEFAULT 100.00,
    acceptance_rate DECIMAL(5,2) DEFAULT 0.00,
    
    -- Status
    application_status VARCHAR(20) DEFAULT 'draft',
    application_submitted_at TIMESTAMP,
    approved_at TIMESTAMP,
    approved_by UUID REFERENCES users(id),
    rejection_reason TEXT,
    
    -- Level tracking
    level_changed_at TIMESTAMP,
    level_changed_by UUID REFERENCES users(id),
    auto_promotion_eligible BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_application_status CHECK (application_status IN (
        'draft', 'submitted', 'under_review', 'approved', 'rejected', 'suspended'
    ))
);

-- Creator level history (audit)
CREATE TABLE creator_level_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_profile_id UUID REFERENCES creator_profiles(id) ON DELETE CASCADE,
    previous_level_id UUID REFERENCES creator_levels(id),
    new_level_id UUID REFERENCES creator_levels(id),
    change_type VARCHAR(20) NOT NULL, -- 'promotion', 'demotion', 'manual', 'initial'
    change_reason TEXT,
    changed_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Sessions
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    refresh_token_hash VARCHAR(64) NOT NULL,
    device_fingerprint_id UUID REFERENCES device_fingerprints(id),
    ip_address INET,
    user_agent TEXT,
    device_name VARCHAR(100),
    location VARCHAR(100),
    is_current BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    last_active_at TIMESTAMP DEFAULT NOW()
);

-- Password history (for preventing reuse)
CREATE TABLE password_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email_normalized ON users(email_normalized);
CREATE INDEX idx_users_role_status ON users(role, status);
CREATE INDEX idx_device_fingerprints_hash ON device_fingerprints(fingerprint_hash);
CREATE INDEX idx_registration_attempts_ip ON registration_attempts(ip_address, created_at);
CREATE INDEX idx_creator_profiles_level ON creator_profiles(level_id);
CREATE INDEX idx_creator_profiles_status ON creator_profiles(application_status);
CREATE INDEX idx_sessions_user ON user_sessions(user_id, expires_at);
```

### 3.2 Entity Relationships

```
┌─────────────────┐       ┌─────────────────┐
│     users       │───────│ creator_profiles│
├─────────────────┤   1:1 ├─────────────────┤
│ id              │       │ user_id (FK)    │
│ email           │       │ level_id (FK)   │────┐
│ role            │       │ rating          │    │
│ status          │       │ completed_count │    │
└────────┬────────┘       └─────────────────┘    │
         │                                        │
         │ 1:N                                    │
         ▼                                        │
┌─────────────────┐       ┌─────────────────┐    │
│device_fingerprints      │ creator_levels  │◄───┘
├─────────────────┤       ├─────────────────┤
│ user_id (FK)    │       │ id              │
│ fingerprint_hash│       │ name            │
│ ip_address      │       │ min_tasks       │
└─────────────────┘       │ min_rating      │
                          │ rate_multiplier │
         │                └─────────────────┘
         │ 1:N                    │
         ▼                        │ 1:N
┌─────────────────┐               ▼
│ user_sessions   │       ┌─────────────────┐
├─────────────────┤       │creator_level_   │
│ user_id (FK)    │       │    history      │
│ refresh_token   │       ├─────────────────┤
│ expires_at      │       │ creator_id (FK) │
└─────────────────┘       │ prev_level (FK) │
                          │ new_level (FK)  │
                          │ changed_by (FK) │
                          └─────────────────┘
```

---

## 4. API Specifications

### 4.1 Authentication Endpoints

```yaml
# Registration - Client
POST /api/v1/auth/register/client
  Request:
    email: string (required)
    password: string (required, min 8 chars)
    full_name: string (required)
    device_fingerprint: string (required)
  Response: 201 Created
    user_id: uuid
    message: "Verification email sent"
  Errors:
    400: Validation error
    409: Email already registered

# Registration - Creator
POST /api/v1/auth/register/creator
  Request:
    email: string (required)
    password: string (required)
    full_name: string (required)
    phone_number: string (required)
    device_fingerprint: string (required)
  Response: 201 Created
    user_id: uuid
    message: "Verification emails/SMS sent"
    next_step: "verify_phone"
  Errors:
    400: Validation error
    409: Email/phone already registered
    403: Email registered as client

# Verify Email
POST /api/v1/auth/verify-email
  Request:
    token: string (from email link)
  Response: 200 OK
    message: "Email verified"
    redirect_to: string

# Verify Phone
POST /api/v1/auth/verify-phone
  Request:
    user_id: uuid
    otp: string (6 digits)
  Response: 200 OK
    message: "Phone verified"

# Login
POST /api/v1/auth/login
  Request:
    email: string
    password: string
    remember_me: boolean (optional, default false)
    device_fingerprint: string
  Response: 200 OK
    access_token: string (JWT, 15 min)
    refresh_token: string (7 or 30 days)
    expires_in: number (seconds)
    user: UserProfile
  Errors:
    401: Invalid credentials
    403: Account locked/suspended
    428: 2FA required (returns temp_token for 2FA flow)

# 2FA Verification
POST /api/v1/auth/2fa/verify
  Request:
    temp_token: string (from login response)
    code: string (6 digits)
  Response: 200 OK
    access_token: string
    refresh_token: string
    user: UserProfile

# Refresh Token
POST /api/v1/auth/refresh
  Request:
    refresh_token: string
  Response: 200 OK
    access_token: string
    refresh_token: string (rotated)
    expires_in: number

# Logout
POST /api/v1/auth/logout
  Headers: Authorization: Bearer {token}
  Request:
    refresh_token: string
  Response: 204 No Content

# Password Reset Request
POST /api/v1/auth/password-reset/request
  Request:
    email: string
  Response: 200 OK
    message: "If account exists, reset email sent"

# Password Reset Confirm
POST /api/v1/auth/password-reset/confirm
  Request:
    token: string
    new_password: string
  Response: 200 OK
    message: "Password updated"
```

### 4.2 Profile Endpoints

```yaml
# Get Current User
GET /api/v1/users/me
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    user: UserProfile

# Update Profile
PATCH /api/v1/users/me
  Headers: Authorization: Bearer {token}
  Request: (partial)
    full_name: string
    avatar_url: string
    timezone: string
  Response: 200 OK
    user: UserProfile

# Get Creator Profile
GET /api/v1/creators/me
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    profile: CreatorProfile
    level: CreatorLevel
    level_progress: {
      tasks_completed: number
      tasks_required: number
      current_rating: number
      rating_required: number
      progress_percent: number
    }

# Update Creator Profile
PATCH /api/v1/creators/me
  Headers: Authorization: Bearer {token}
  Request: (partial CreatorProfile fields)
  Response: 200 OK
    profile: CreatorProfile

# Submit Creator Application
POST /api/v1/creators/me/submit-application
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    profile: CreatorProfile
    message: "Application submitted for review"
```

### 4.3 Admin Endpoints

```yaml
# List Creator Levels
GET /api/v1/admin/creator-levels
  Headers: Authorization: Bearer {admin_token}
  Response: 200 OK
    levels: CreatorLevel[]

# Create Creator Level
POST /api/v1/admin/creator-levels
  Headers: Authorization: Bearer {admin_token}
  Request:
    name: string
    description: string
    min_completed_tasks: number
    min_rating: number
    rate_multiplier: number
    allowed_output_types: uuid[]
    requires_manual_approval: boolean
  Response: 201 Created
    level: CreatorLevel

# Update Creator Level
PATCH /api/v1/admin/creator-levels/:id
  Headers: Authorization: Bearer {admin_token}
  Request: (partial CreatorLevel)
  Response: 200 OK
    level: CreatorLevel

# Get Level Statistics
GET /api/v1/admin/creator-levels/statistics
  Headers: Authorization: Bearer {admin_token}
  Query:
    start_date: date (optional)
    end_date: date (optional)
  Response: 200 OK
    statistics: [{
      level_id: uuid
      level_name: string
      creator_count: number
      avg_rating: number
      total_completed: number
      change_from_previous: number
    }]

# Change Creator Level
POST /api/v1/admin/creators/:id/change-level
  Headers: Authorization: Bearer {admin_token}
  Request:
    new_level_id: uuid
    reason: string
  Response: 200 OK
    creator: CreatorProfile
    history: LevelChangeRecord

# List Pending Applications
GET /api/v1/admin/creator-applications
  Headers: Authorization: Bearer {admin_token}
  Query:
    status: string (optional)
    page: number
    limit: number
  Response: 200 OK
    applications: CreatorProfile[]
    pagination: {...}

# Review Application
POST /api/v1/admin/creator-applications/:id/review
  Headers: Authorization: Bearer {admin_token}
  Request:
    decision: 'approve' | 'reject'
    notes: string (required if reject)
  Response: 200 OK
    application: CreatorProfile
```

---

## 5. UI/UX Specifications

### 5.1 Registration Flow - Client

```
┌─────────────────────────────────────────────────────────────────┐
│                    Create Your Account                          │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐│
│  │                     Full Name                               ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │                                                      │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  │                                                             ││
│  │                     Email Address                           ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │                                                      │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  │                                                             ││
│  │                     Password                                ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │                                                      │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  │  ░░░░░░░░░░ Weak                                           ││
│  │                                                             ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │              Create Account                          │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  │                                                             ││
│  │  ──────────────────── or ────────────────────              ││
│  │                                                             ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │  [G]  Continue with Google                           │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                  │
│  Already have an account? Sign in                               │
│                                                                  │
│  Want to earn as a creator? Apply here →                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Creator Application Flow

```
Step 1 of 5: Personal Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
●───○───○───○───○

Tell us about yourself

Bio *
┌────────────────────────────────────────┐
│ Describe your background and expertise │
│                                        │
│                                        │
└────────────────────────────────────────┘
0/500 characters

Location *
┌────────────────────────────────────────┐
│ Select country...                    ▼ │
└────────────────────────────────────────┘

Languages *
┌────────────────────────────────────────┐
│ + Add language                         │
└────────────────────────────────────────┘

                    [Save & Continue →]
```

### 5.3 Admin Level Management

```
┌─────────────────────────────────────────────────────────────────┐
│  Creator Levels                                    [+ Add Level]│
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ⬤ Probationary                                    312 users ││
│  │   Min tasks: 0  •  Min rating: N/A  •  Rate: 0.8x          ││
│  │   Outputs: Social Media Pack                                ││
│  │                                           [Edit] [Disable]  ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ⬤ Junior                                          245 users ││
│  │   Min tasks: 5  •  Min rating: 4.0  •  Rate: 1.0x          ││
│  │   Outputs: Social Media Pack, Action Items                  ││
│  │                                           [Edit] [Disable]  ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ⬤ Mid-Level                                       178 users ││
│  │   Min tasks: 20  •  Min rating: 4.3  •  Rate: 1.1x         ││
│  │   Outputs: Executive Summary, Detailed Summary, Reflection ││
│  │            Questions, Action Items                          ││
│  │                                           [Edit] [Disable]  ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Security Considerations

### 6.1 Authentication Security

| Threat | Mitigation |
|--------|------------|
| Brute force attacks | Rate limiting, account lockout, CAPTCHA after failures |
| Password theft | bcrypt hashing (cost 12), password history |
| Session hijacking | Secure cookies, token rotation, device binding |
| Credential stuffing | Breach detection integration, anomaly detection |

### 6.2 Data Protection

| Data Type | Protection |
|-----------|------------|
| Passwords | bcrypt hash, never logged or exposed |
| 2FA secrets | AES-256 encryption at rest |
| Phone numbers | Partial masking in UI (***-***-1234) |
| Device fingerprints | SHA-256 hash stored |

### 6.3 Fraud Prevention Checklist

- [ ] Email normalization before duplicate check
- [ ] Phone number uniqueness across roles
- [ ] Device fingerprint similarity detection
- [ ] IP velocity monitoring
- [ ] Registration attempt logging
- [ ] Suspicious activity alerts

---

## 7. Testing Requirements

### 7.1 Unit Tests

```javascript
describe('Email Normalization', () => {
  test('handles Gmail dots', () => {
    expect(normalizeEmail('j.o.h.n@gmail.com')).toBe('john@gmail.com');
  });
  
  test('handles plus aliases', () => {
    expect(normalizeEmail('john+test@gmail.com')).toBe('john@gmail.com');
  });
  
  test('handles non-Gmail normally', () => {
    expect(normalizeEmail('john+test@company.com')).toBe('john@company.com');
  });
});

describe('Creator Level Eligibility', () => {
  test('returns eligible when requirements met', () => {
    const creator = { completed: 50, rating: 4.5 };
    const level = { min_tasks: 50, min_rating: 4.5 };
    expect(isEligibleForLevel(creator, level)).toBe(true);
  });
  
  test('returns ineligible when tasks insufficient', () => {
    const creator = { completed: 49, rating: 4.5 };
    const level = { min_tasks: 50, min_rating: 4.5 };
    expect(isEligibleForLevel(creator, level)).toBe(false);
  });
});
```

### 7.2 Integration Tests

- Registration flow end-to-end
- Login with 2FA
- Role separation enforcement
- Level change API
- Session management

### 7.3 E2E Tests

- Complete client registration → email verification → first login
- Complete creator registration → phone verification → application → approval
- Admin level management workflow

---

## 8. Implementation Checklist

### Phase 1: Core Auth (Weeks 1-3)
- [ ] Database schema creation
- [ ] User registration (client)
- [ ] Email verification
- [ ] Login/logout
- [ ] JWT token management
- [ ] Password reset

### Phase 2: Creator Flow (Weeks 3-5)
- [ ] Creator registration
- [ ] Phone verification
- [ ] Creator application form
- [ ] Admin application review
- [ ] Creator level system (basic)

### Phase 3: Security (Weeks 5-7)
- [ ] 2FA implementation
- [ ] Device fingerprinting
- [ ] IP velocity checking
- [ ] Session management
- [ ] Role separation enforcement

### Phase 4: Admin Tools (Weeks 7-8)
- [ ] Level management CRUD
- [ ] Level statistics dashboard
- [ ] Creator level change
- [ ] Fraud detection dashboard

---

## 9. Dependencies

### External Services
- SendGrid / AWS SES (email)
- Twilio / Africa's Talking (SMS)
- FingerprintJS Pro (device fingerprinting)
- Google OAuth (social login)

### Internal Dependencies
- None (this is the foundation epic)

### Downstream Dependencies
- Epic 2 (Upload): Requires authenticated users
- Epic 3 (Workspace): Requires creator profiles and levels
- Epic 5 (Payments): Requires user accounts
- Epic 9 (Fraud): Extends fraud detection from this epic

---

## 10. Open Questions

1. **Phone verification provider:** Twilio vs Africa's Talking for Kenya/East Africa?
2. **2FA enforcement:** Required for creators? Or just strongly recommended?
3. **Level progression:** Fully automatic, or admin approval for Senior/Expert?
4. **Application review SLA:** 48 hours target - is this achievable at scale?

---

*Document Version: 1.0*  
*Last Updated: December 2024*  
*Next Review: Before Sprint 1*
