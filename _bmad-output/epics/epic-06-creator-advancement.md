## Epic 6: Creator Advancement & Compensation

**Epic Goal:** Implement tier progression system with automatic advancement and accurate weekly payouts via dual payment providers (Stripe + M-Pesa).

**FRs Covered:** FR39, FR40, FR41, FR42, FR43, FR44, FR45, FR46, FR47

### Story 6.1: Auto-Assign Initial Tier Level (Probationary)

As the system,
I want to auto-assign new creators to Probationary tier,
So that all creators start at the same baseline level.

**Acceptance Criteria:**

**Given** a new creator account is created
**When** creator status is set to 'approved'
**Then** creator tier is automatically set to 'PROBATIONARY'
**And** tier multiplier is set to 0.8x
**And** tier assignment timestamp is recorded
**And** creator receives welcome notification: "Welcome! You're starting as Probationary tier (0.8x multiplier). Complete 10 approved tasks with 4.0+ avg to advance to Junior."
**And** tier progression criteria are displayed in creator dashboard
**And** initial tier stats are initialized: approvedTaskCount = 0, averageScore = 0
**And** tier assignment is logged in audit trail
**And** tier badge displays "Probationary" in creator profile

---

### Story 6.2: Auto-Promote Based on Performance Criteria

As the system,
I want to auto-promote creators when they meet tier advancement criteria,
So that high performers are rewarded automatically.

**Acceptance Criteria:**

**Given** a creator has completed an approved task
**When** tier progression is recalculated
**Then** system checks advancement criteria for next tier: Probationary→Junior (10 approvals, 4.0+ avg), Junior→Mid-Level (30, 4.2+), Mid-Level→Senior (100, 4.5+), Senior→Expert (300, 4.7+)
**And** if criteria met, tier is automatically updated
**And** tier multiplier is updated: Junior 0.9x, Mid-Level 1.0x, Senior 1.25x, Expert 1.5x
**And** tier promotion timestamp is recorded
**And** Socket.io event notifies creator: "Congratulations! You've advanced to [tier]!"
**And** achievement notification displays with confetti animation
**And** tier badge updates immediately in creator profile
**And** tier advancement is logged in audit trail
**And** promotion unlocks access to higher-tier tasks (Rush, Express)
**And** next tier criteria are displayed: "75/100 approvals to Senior"

---

### Story 6.3: Admin Manual Tier Promotion/Demotion

As an admin,
I want to manually promote or demote creator tiers,
So that I can intervene for exceptional cases or quality issues.

**Acceptance Criteria:**

**Given** I am an admin viewing a creator profile
**When** I manually adjust tier level
**Then** "Adjust Tier" button is available
**And** clicking "Adjust Tier" opens modal with current tier and dropdown for new tier
**And** justification field is required (minimum 100 characters)
**And** justification prompts explain when manual adjustments are appropriate
**And** clicking "Confirm Tier Change" executes Prisma transaction: update tier, update multiplier, create TierAdjustment record with adminId, oldTier, newTier, justification, timestamp
**And** Socket.io event notifies creator: "Your tier has been adjusted to [tier] by admin."
**And** email notification explains tier change with justification (if demotion)
**And** tier change is logged in audit trail
**And** admin dashboard shows history of all manual tier adjustments
**And** manual adjustments are flagged for quarterly review

---

### Story 6.4: Apply Tier Multiplier to Task Payouts

As the system,
I want to apply tier multipliers to task payouts automatically,
So that creators are compensated according to their tier level.

**Acceptance Criteria:**

**Given** a task is QA approved
**When** payout is calculated
**Then** base payout is retrieved from task configuration (e.g., $50 for Blog Post)
**And** creator's current tier multiplier is retrieved (0.8x - 1.5x)
**And** final payout is calculated: basePayout × tierMultiplier
**And** calculation example: $50 × 1.25x (Senior) = $62.50
**And** rounding rules applied: round to 2 decimal places using banker's rounding (round half to even)
**And** rounding examples: $62.125 → $62.12, $62.135 → $62.14, $62.145 → $62.14, $62.155 → $62.16
**And** currency is stored as integer cents in database: $62.50 → 6250 cents (prevents floating-point errors)
**And** all monetary calculations use integer arithmetic: (basePayoutCents × tierMultiplier) / 100
**And** display converts cents to dollars: 6250 cents → "$62.50"
**And** payout calculation is atomic and accurate (NFR-R6: 100% accuracy, zero floating-point drift)
**And** payout record is created with: taskId, creatorId, basePayoutCents, tierMultiplier, finalPayoutCents, calculatedAt
**And** payout record is immutable (cannot be edited after creation)
**And** payout is added to creator's weekly earnings total (sum of finalPayoutCents)
**And** creator earnings dashboard displays: base payout, tier multiplier, final payout (all formatted as USD)
**And** tier multiplier is clearly labeled: "Your [tier] multiplier: 1.25x"
**And** payout calculation is logged in audit trail with exact cent values

---

### Story 6.5: Calculate Weekly Earnings with Audit Trail

As the system,
I want to calculate weekly earnings for each creator with full audit trail,
So that payouts are transparent and reconcilable.

**Acceptance Criteria:**

**Given** the week ends (Sunday 11:59 PM UTC)
**When** BullMQ job `calculate-weekly-earnings` runs
**Then** job identifies all creators with approved tasks in the past week
**And** for each creator, sum all task payouts: SUM(finalPayout WHERE approvedAt BETWEEN week_start AND week_end)
**And** weekly earnings record is created: WeeklyEarnings { creatorId, weekStart, weekEnd, totalEarnings, taskCount, createdAt }
**And** audit trail includes: individual task payouts, tier multipliers applied, sum calculation
**And** earnings calculation is 100% accurate (NFR-R6)
**And** earnings are validated against individual payout records (checksum verification)
**And** if validation fails, admin alert is triggered
**And** weekly earnings are displayed in creator dashboard: "This week: $450 from 9 approved tasks"
**And** earnings breakdown shows per-task payouts
**And** job logs completion metrics: creators paid, total amount, errors
**And** job runs every Monday at 12:01 AM UTC (start of new week)

---

### Story 6.6: Weekly Payout Batch Processing (Stripe + M-Pesa)

As the system,
I want to process weekly payout batches every Friday,
So that creators receive payments reliably.

**Acceptance Criteria:**

**Given** it is Friday 8:00 AM UTC
**When** BullMQ job `weekly-payout-batch` executes
**Then** job identifies all creators with weekly earnings > $0
**And** creators are grouped by payment method: Stripe vs M-Pesa
**And** for each creator, payout job is enqueued: `process-stripe-payout` or `process-mpesa-payout`
**And** payout jobs execute in parallel (max 50 concurrent)
**And** batch processing completes by Friday 11:59 PM UTC (NFR-R7)
**And** payout status is tracked: PENDING, PROCESSING, COMPLETED, FAILED
**And** successful payouts update WeeklyEarnings status to PAID
**And** failed payouts are queued for retry (see Story 6.9)
**And** admin dashboard displays real-time payout progress: "142/150 payouts completed"
**And** batch completion triggers admin summary email: total paid, success rate, failures
**And** if batch doesn't complete by 11:59 PM, ops team alert is sent (NFR-R7)
**And** batch execution is logged in audit trail

---

### Story 6.7: Stripe Payout Integration

As the system,
I want to process payouts via Stripe,
So that creators with Stripe accounts receive weekly payments.

**Acceptance Criteria:**

**Given** a creator has Stripe as preferred payment method
**When** `process-stripe-payout` job executes
**Then** Stripe SDK is used to create payout
**And** payout request includes: amount (in cents), currency (USD), destination (creator's Stripe account ID)
**And** idempotency key is generated using uuidv4() to prevent duplicate payouts
**And** Stripe API call is made: `stripe.payouts.create({ amount, currency, destination }, { idempotencyKey })`
**And** if payout succeeds, Stripe payout ID is stored
**And** if payout fails, error message is stored and retry is queued
**And** payout status is updated: COMPLETED or FAILED
**And** creator receives notification: "Your $450 payout has been sent via Stripe. Arrives in 1-2 business days."
**And** payout record is created with Stripe payout ID and timestamp
**And** webhook listener `/api/webhooks/stripe` handles payout status updates
**And** Stripe webhook verifies signature before processing
**And** payout is logged in audit trail
**And** Stripe integration meets 99.9% SLA (NFR-I9)

---

### Story 6.8: M-Pesa Payout Integration

As the system,
I want to process payouts via M-Pesa Daraja API,
So that creators in Kenya/Tanzania receive weekly payments.

**Acceptance Criteria:**

**Given** a creator has M-Pesa as preferred payment method
**When** `process-mpesa-payout` job executes
**Then** M-Pesa Daraja API B2C endpoint is called
**And** payout request includes: amount (KES), mobile number (+254XXXXXXXXX), occasion ("Weekly Creator Payout"), remarks
**And** M-Pesa authentication token is obtained via OAuth (consumer key + secret)
**And** B2C request is made: `POST /mpesa/b2c/v1/paymentrequest`
**And** M-Pesa ConversationID and OriginatorConversationID are stored
**And** M-Pesa callback URL is provided: `/api/webhooks/mpesa`
**And** callback handler matches ConversationID to payout record
**And** if payout succeeds, M-Pesa TransactionID is stored
**And** if payout fails, error code is stored and manual retry is flagged (NFR-I3)
**And** payout status is updated: COMPLETED or FAILED
**And** creator receives SMS notification: "You've received KSh 45,000 from jabur"
**And** admin can manually retry failed M-Pesa payouts if API is down >4 hours (NFR-I3)
**And** payout is logged in audit trail
**And** M-Pesa integration meets 99.9% SLA (NFR-I9)

---

### Story 6.9: Failed Payment Retry Queue

As the system,
I want to automatically retry failed payments,
So that creators receive payouts even if initial attempts fail.

**Acceptance Criteria:**

**Given** a payout has failed (Stripe or M-Pesa)
**When** failure is detected
**Then** payout is added to retry queue
**And** retry strategy: exponential backoff (1 hour, 4 hours, 24 hours, 72 hours, 7 days)
**And** BullMQ job `retry-failed-payout` executes at scheduled intervals
**And** job attempts to reprocess payout using original payment method
**And** if retry succeeds, payout status is updated to COMPLETED
**And** if retry fails, next retry is scheduled
**And** after 7-day retry window (NFR-R8), payout is marked as MANUAL_INTERVENTION_REQUIRED
**And** admin receives alert: "Payout failed after 5 retries. Manual action needed."
**And** admin can manually process payout or contact creator to update payment method
**And** retry attempts are logged in audit trail
**And** creator receives notification on final retry failure: "We couldn't process your payout. Please update your payment method."
**And** failed payouts are tracked in admin dashboard
**And** fallback queuing system stores failed Stripe payouts (NFR-I2)

---

### Story 6.10: Generate 1099 Tax Forms (US Creators)

As the system,
I want to generate 1099 tax forms for US-based creators annually,
So that tax compliance requirements are met.

**Acceptance Criteria:**

**Given** it is December 31st
**When** BullMQ job `generate-1099-forms` executes
**Then** job identifies all US-based creators (creators with US tax ID or address)
**And** for each US creator, annual earnings are calculated: SUM(payouts WHERE year = current_year)
**And** if annual earnings ≥ $600, 1099-NEC form is generated
**And** 1099-NEC includes: creator name, address, tax ID (if provided), total earnings, company EIN
**And** PDF form is generated using PDF generation library
**And** 1099 form is stored in database and S3
**And** creator receives email notification: "Your 2024 1099 form is ready. Download from dashboard."
**And** creator can download 1099 from earnings dashboard
**And** admin can bulk download all 1099 forms as ZIP
**And** 1099 forms are retained for 7 years (NFR-C8)
**And** forms are submitted to IRS electronically (if API available)
**And** job logs completion: forms generated, total reportable income, errors
**And** if creator has no tax ID, form generation is skipped and admin is alerted

---

### Story 6.11: Achievement Notifications on Tier Advancement

As a creator,
I want to receive celebratory notifications when I advance tiers,
So that I feel recognized for my achievements.

**Acceptance Criteria:**

**Given** I have been auto-promoted to a new tier
**When** tier advancement occurs
**Then** Socket.io event triggers in-app notification
**And** notification displays with confetti animation or celebratory UI
**And** notification message: "🎉 Congratulations! You've advanced to [tier]!"
**And** notification includes: new tier badge, new multiplier (e.g., "1.25x"), next tier criteria
**And** email notification is sent with subject: "You've advanced to [tier]!"
**And** email includes: achievement summary, earnings increase example, next tier goals
**And** notification persists in notification center until dismissed
**And** tier badge updates immediately in creator profile and dashboard
**And** achievement is recorded in creator's profile history
**And** social share option: "Share your achievement on Twitter/LinkedIn"
**And** advancement notification is sent within 5 seconds of tier change (real-time via Socket.io)
**And** notification is mobile-friendly (push notification if mobile app exists)

---

