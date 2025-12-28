## Epic 2: User Authentication & Account Management

**Epic Goal:** Enable all user types (Uploaders, Creators, QA Editors, Admins) to register, authenticate, and manage their accounts with role-appropriate security measures.

**FRs Covered:** FR2, FR3, FR8, FR9, FR10, FR11, FR12, FR13

### Story 2.1: Uploader Registration with Email/Password

As an uploader,
I want to register for an account with email and password,
So that I can upload audio files for transcription and content creation.

**Acceptance Criteria:**

**Given** I am a new user visiting the registration page
**When** I submit the registration form with email and password
**Then** my email is normalized (lowercase, remove Gmail dots, plus-addressing detection per FR58)
**And** duplicate email check prevents registration with existing normalized email (query `users.email_normalized`)
**And** password is validated (minimum 12 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char per CTX-05)
**And** password is hashed using bcrypt with cost factor 12 before storage
**And** user record is created in database with `{ email, email_normalized, passwordHash, role: 'UPLOADER', emailVerified: false, verificationToken }`
**And** device fingerprint is captured and stored using FingerprintJS (per FR57)
**And** verification token is generated: crypto-random 32-byte hex string with 24-hour expiry
**And** verification email is sent with link: `{app_url}/auth/verify-email?token={verificationToken}`
**And** email template includes: verification link, expiry time (24 hours), support contact
**And** user cannot login until `emailVerified = true` (login blocked with message: "Please verify your email first. Check your inbox.")
**And** clicking verification link validates token and sets `emailVerified = true, verificationToken = null`
**And** expired tokens (>24 hours) display error: "Verification link expired. Request a new one."
**And** user can request new verification email from login page: "Resend Verification Email" link
**And** after email verified, user can login and session is created
**And** multi-account detection flags are triggered if device fingerprint matches existing account (per FR59)
**And** successful verification redirects to login page with success message: "Email verified! You can now log in."

---

### Story 2.2: Uploader Login and Session Management

As an uploader,
I want to log in with my credentials,
So that I can access my dashboard and upload audio files.

**Acceptance Criteria:**

**Given** I am a registered uploader
**When** I submit login form with email and password
**Then** email is normalized before lookup
**And** password is verified using bcrypt
**And** NextAuth.js session is created with user ID, role, and email
**And** JWT token is issued with 30-day expiration
**And** session data includes: id, email, role, createdAt
**And** middleware validates session on protected routes
**And** failed login attempts are rate-limited (5 attempts per 15 minutes)
**And** successful login redirects to `/uploader/dashboard`
**And** device fingerprint is updated on login
**And** logout clears session and JWT token

---

### Story 2.3: Creator Application with Portfolio Submission

As a creator,
I want to submit an application with my portfolio,
So that I can be approved to claim and work on tasks.

**Acceptance Criteria:**

**Given** I am a new user visiting the creator application page
**When** I submit the application form
**Then** email and password are validated and normalized
**And** portfolio URL field accepts LinkedIn, Google Drive, or portfolio website
**And** application reason text field accepts 200-500 characters
**And** user record is created with role='creator' and status='pending_approval'
**And** device fingerprint is captured and stored
**And** multi-account detection flags creator applications from same device
**And** admin notification is sent for new creator application
**And** creator cannot access creator dashboard until status='approved'
**And** email is sent to creator confirming application submission
**And** email is sent to creator upon approval/rejection

---

### Story 2.4: QA Editor Registration with MFA (TOTP)

As a QA editor,
I want to register with MFA enabled,
So that I can securely access the QA review system.

**Acceptance Criteria:**

**Given** I am a new QA editor being onboarded by admin
**When** admin creates my QA editor account
**Then** user record is created with role='qa_editor'
**And** email and password are validated and normalized
**And** TOTP secret is generated using `speakeasy` library
**And** QR code is generated for TOTP setup using `qrcode` library
**And** QR code is displayed to QA editor for scanning with authenticator app (Google Authenticator, Authy)
**And** QA editor must verify TOTP code before account activation
**And** TOTP verification is required on every login (NextAuth.js custom callback)
**And** backup codes (10 codes) are generated and displayed once
**And** device fingerprint is captured
**And** QA editor cannot bypass MFA requirement

---

### Story 2.5: Admin Registration with MFA (TOTP)

As an admin,
I want to register with MFA enabled,
So that I can securely manage the platform.

**Acceptance Criteria:**

**Given** I am a new admin being onboarded
**When** my admin account is created
**Then** user record is created with role='admin'
**And** email and password are validated and normalized
**And** TOTP secret is generated using `speakeasy` library
**And** QR code is generated for TOTP setup using `qrcode` library
**And** QR code is displayed to admin for scanning with authenticator app
**And** admin must verify TOTP code before account activation
**And** TOTP verification is required on every login (NextAuth.js custom callback)
**And** backup codes (10 codes) are generated and displayed once
**And** device fingerprint is captured
**And** admin cannot bypass MFA requirement
**And** all admin actions are logged with timestamps

---

### Story 2.6: Payout Method Selection (Stripe/M-Pesa)

As a creator,
I want to select my payout method (Stripe or M-Pesa),
So that I can receive weekly payments for completed tasks.

**Acceptance Criteria:**

**Given** I am an approved creator
**When** I navigate to payout settings
**Then** I can select between Stripe and M-Pesa as payout provider
**And** if Stripe is selected, I can enter bank account details (account number, routing number)
**And** if M-Pesa is selected, I can enter Kenyan mobile number (format: +254XXXXXXXXX)
**And** payout method is validated before saving
**And** Stripe account details are validated using Stripe API
**And** M-Pesa mobile number is validated using regex pattern
**And** payout method is stored in creator profile
**And** creator can update payout method at any time
**And** payout method change is logged with timestamp
**And** creator receives confirmation email after payout method update

---

### Story 2.7: GDPR Data Export Functionality

As a user,
I want to export all my personal data,
So that I can comply with GDPR data portability rights.

**Acceptance Criteria:**

**Given** I am a logged-in user (any role)
**When** I request data export from account settings
**Then** system generates JSON export with all user data
**And** export includes: profile data, uploaded files metadata, task history, payment records
**And** export excludes: passwords (only shows "hashed"), API keys
**And** export is generated within 30 seconds for typical user data
**And** download link is provided immediately after generation
**And** export file is deleted from server after 24 hours
**And** data export request is logged with timestamp
**And** user receives email with download link
**And** CSV format is also available as alternative to JSON

---

### Story 2.8: Account Deletion with 30-Day Purge

As a user,
I want to delete my account,
So that I can remove all my personal data from the platform.

**Acceptance Criteria:**

**Given** I am a logged-in user
**When** I request account deletion from account settings
**Then** deletion confirmation modal requires password re-entry
**And** user status is set to 'pending_deletion' with scheduled_deletion_date = now + 30 days
**And** user is logged out immediately
**And** user cannot log in while status='pending_deletion'
**And** user receives email confirming deletion request with cancellation link
**And** user can cancel deletion within 30 days via email link
**And** after 30 days, automated job purges all user data:
  - User record
  - Audio file uploads
  - Task submissions
  - QA reviews
  - Payment records (retained for 7 years per NFR-C8)
**And** deletion audit trail is created
**And** active disputes prevent automatic deletion until resolution

---

### Story 2.9: Device Fingerprinting and Email Normalization

As the system,
I want to capture device fingerprints and normalize emails,
So that I can detect fraudulent multi-account creation attempts.

**Acceptance Criteria:**

**Given** a user is registering or logging in
**When** the registration/login form is submitted
**Then** FingerprintJS library captures browser fingerprint
**And** fingerprint includes: user agent, screen resolution, timezone, canvas fingerprint
**And** fingerprint hash is stored in database linked to user account
**And** email normalization removes Gmail dots (john.doe@gmail.com → johndoe@gmail.com)
**And** email normalization removes plus-addressing (john+test@gmail.com → john@gmail.com)
**And** email normalization converts all emails to lowercase
**And** normalized email is checked against existing accounts before registration
**And** duplicate normalized email prevents registration
**And** device fingerprint is checked against existing accounts
**And** multiple accounts from same device fingerprint trigger alert

---

### Story 2.10: Multi-Account Detection System

As an admin,
I want to automatically detect multi-account creation attempts,
So that I can prevent fraud and platform abuse.

**Acceptance Criteria:**

**Given** users are registering accounts
**When** a new account is created
**Then** system checks for matching device fingerprints across accounts
**And** system checks for matching payment methods across creator accounts
**And** system checks for matching IP addresses within 24-hour window
**And** system checks for similar portfolio URLs across creator applications
**And** flagging criteria: 2+ accounts with same device fingerprint
**And** flagging criteria: 2+ creator accounts with same M-Pesa number
**And** flagging criteria: 3+ accounts from same IP within 24 hours
**And** flagged accounts are marked with 'fraud_risk' flag
**And** admin dashboard displays fraud risk alerts
**And** admin can review flagged accounts and take action (approve, suspend, ban)
**And** detection runs within 24 hours of account creation
**And** false positives can be marked as safe by admin
  - `npm test` runs unit tests
  - `npm run test:e2e` runs Playwright tests
**And** jest.config.js is configured with correct module paths and aliases
**And** playwright.config.ts is configured for multi-browser testing
**And** example unit test passes: `lib/utils.test.ts`
**And** example E2E test passes: `tests/e2e/smoke.spec.ts` (loads homepage)
**And** test coverage reporting is configured
**And** CI-ready test setup is complete

---

