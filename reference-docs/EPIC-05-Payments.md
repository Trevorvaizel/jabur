# EPIC-05: Payments & Compensation

**Epic Owner:** [TBD]  
**Priority:** P0 (Critical Path)  
**Estimated Effort:** 6-8 weeks  
**Dependencies:** Epic 1 (User Management), Epic 4 (QA Review)  

---

## 1. Epic Overview

### 1.1 Description

This epic covers all payment flows: client charges, creator payouts, refunds, and financial reporting. It includes integration with multiple payment providers (Stripe, PayPal, Pesapal/M-Pesa) and implements the weekly batch payout system.

### 1.2 Business Value

- Multiple payment options increase conversion
- Reliable payouts build creator trust
- Transparent pricing builds client confidence
- Regional payment support (M-Pesa) expands market

### 1.3 Key Financial Rules

| Rule | Specification |
|------|---------------|
| Platform Margin | 20-30% of client payment |
| Creator Payout | 60-65% of client payment |
| Minimum Payout | **$20 USD** |
| Payout Schedule | **Weekly batch on Sundays** |
| Refund Window | 7 days after delivery |
| Currency | USD (primary), KES (for M-Pesa) |

### 1.4 Success Metrics

| Metric | Target |
|--------|--------|
| Payment success rate | > 99% |
| Payout success rate | > 99.5% |
| Payout processing time | < 24 hours |
| Chargeback rate | < 0.5% |
| Creator payout satisfaction | > 4.5/5 |

---

## 2. User Stories

### 2.1 Client Payments

#### US-5.1: View Pricing
**As a** content uploader  
**I want to** see clear pricing before payment  
**So that** I know exactly what I'll pay  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Price breakdown per output type
- [ ] Rush/Express multipliers shown
- [ ] Subtotal before fees
- [ ] Platform fee displayed
- [ ] Total amount clear
- [ ] Currency indicator (USD)
- [ ] Savings shown for packages/subscriptions

**Pricing Display:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Order Summary                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Executive Summary (Standard)              $15.00               │
│  Blog Post (Rush +50%)                     $75.00               │
│  Social Media Pack (Standard)              $30.00               │
│                                            ───────               │
│  Subtotal                                  $120.00              │
│                                                                  │
│  Platform Fee                              Included             │
│  ─────────────────────────────────────────────────              │
│  Total                                     $120.00 USD          │
│                                                                  │
│  [Apply Promo Code]                                             │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  💳 Pay with Card   |   PayPal   |   M-Pesa                ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-5.2: Pay with Card (Stripe)
**As a** content uploader  
**I want to** pay with my credit/debit card  
**So that** I can complete my order  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Stripe Elements integration (embedded form)
- [ ] Support for Visa, Mastercard, Amex
- [ ] Card validation before submission
- [ ] 3D Secure support when required
- [ ] Payment processing indicator
- [ ] Success confirmation with receipt
- [ ] Error handling with retry option
- [ ] Save card for future payments (optional)

---

#### US-5.3: Pay with PayPal
**As a** content uploader  
**I want to** pay with PayPal  
**So that** I can use my preferred method  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] PayPal button integration
- [ ] Redirect to PayPal for auth
- [ ] Return handling (success/cancel)
- [ ] Payment capture on return
- [ ] Confirmation display

---

#### US-5.4: Pay with M-Pesa (via Pesapal)
**As a** Kenyan content uploader  
**I want to** pay with M-Pesa  
**So that** I can use local payment  

**Priority:** P1  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Pesapal integration for M-Pesa
- [ ] Phone number input for M-Pesa
- [ ] STK push triggered to user's phone
- [ ] Pending state while awaiting confirmation
- [ ] Webhook handling for payment confirmation
- [ ] Timeout handling (5 minutes)
- [ ] KES to USD conversion display
- [ ] Retry option on failure

**M-Pesa Flow:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Pay with M-Pesa                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Amount: KES 15,600 (~$120.00 USD)                              │
│                                                                  │
│  M-Pesa Phone Number                                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ +254 │ 7XX XXX XXX                                          ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  [Send Payment Request]                                         │
│                                                                  │
│  ─────────────────────────────────────────────────              │
│  How it works:                                                  │
│  1. Click "Send Payment Request"                                │
│  2. Check your phone for M-Pesa prompt                          │
│  3. Enter your M-Pesa PIN to confirm                            │
│  4. Wait for confirmation (usually under 1 minute)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

#### US-5.5: Purchase Credits
**As a** regular uploader  
**I want to** buy credits in advance  
**So that** I get volume discounts  

**Priority:** P2  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Credit packages: $50, $100, $250, $500
- [ ] Discount tiers: 0%, 5%, 10%, 15%
- [ ] Credits never expire
- [ ] Credit balance visible in dashboard
- [ ] Auto-apply credits at checkout
- [ ] Purchase history

---

#### US-5.6: Subscription Plans
**As a** business user  
**I want to** subscribe for regular discounts  
**So that** I save on ongoing usage  

**Priority:** P2  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Pro plan: $49/mo - 5 uploads, 10% off
- [ ] Business plan: $199/mo - 25 uploads, 20% off
- [ ] Annual billing option (2 months free)
- [ ] Overage at discounted rate
- [ ] Cancel anytime
- [ ] Upgrade/downgrade path

---

### 2.2 Creator Payouts

#### US-5.7: View Earnings
**As a** creator  
**I want to** see my earnings breakdown  
**So that** I understand my income  

**Priority:** P0  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Available balance (ready for payout)
- [ ] Pending balance (tasks in review)
- [ ] This week's earnings
- [ ] This month's earnings
- [ ] All-time total
- [ ] Earnings by output type
- [ ] Earnings trend chart

---

#### US-5.8: Configure Payout Method
**As a** creator  
**I want to** set up my payout method  
**So that** I can receive payments  

**Priority:** P0  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Supported methods: Bank transfer, PayPal, M-Pesa
- [ ] Bank: Account holder, account number, routing/SWIFT
- [ ] PayPal: Email address
- [ ] M-Pesa: Phone number
- [ ] Verification step for each method
- [ ] Set primary payout method
- [ ] Update/change method

---

#### US-5.9: Weekly Batch Payout
**As a** creator  
**I want to** receive my earnings every Sunday  
**So that** I have predictable income  

**Priority:** P0  
**Story Points:** 8  

**Acceptance Criteria:**
- [ ] Payouts processed every Sunday at 00:00 UTC
- [ ] Only creators with balance ≥ $20 included
- [ ] Batch includes all "available" earnings
- [ ] Payout via configured method
- [ ] Email notification with payout details
- [ ] Receipt/statement generated
- [ ] Failed payouts flagged for retry

**Payout Logic:**
```javascript
// Weekly payout job (runs Sunday 00:00 UTC)
async function processWeeklyPayouts() {
  const batchId = await createPayoutBatch();
  
  // Get eligible creators
  const eligibleCreators = await db.query(`
    SELECT 
      cp.user_id,
      cp.payout_method,
      cp.payout_details,
      SUM(ce.amount) as total_amount
    FROM creator_earnings ce
    JOIN creator_profiles cp ON ce.creator_id = cp.user_id
    WHERE ce.status = 'available'
    AND ce.available_at <= NOW()
    GROUP BY cp.user_id, cp.payout_method, cp.payout_details
    HAVING SUM(ce.amount) >= 20.00
  `);
  
  for (const creator of eligibleCreators) {
    try {
      // Mark earnings as processing
      await markEarningsProcessing(creator.user_id, batchId);
      
      // Execute payout via provider
      const payoutResult = await executePayment(
        creator.payout_method,
        creator.payout_details,
        creator.total_amount
      );
      
      if (payoutResult.success) {
        await markEarningsPaid(creator.user_id, batchId);
        await sendPayoutNotification(creator.user_id, creator.total_amount);
      } else {
        await markPayoutFailed(creator.user_id, batchId, payoutResult.error);
      }
    } catch (error) {
      await logPayoutError(creator.user_id, batchId, error);
    }
  }
  
  await finalizeBatch(batchId);
}
```

---

#### US-5.10: View Payout History
**As a** creator  
**I want to** see my payout history  
**So that** I have records for taxes  

**Priority:** P1  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] List of all payouts
- [ ] Date, amount, status, method
- [ ] Filter by date range
- [ ] Download statement (PDF/CSV)
- [ ] Annual summary for tax purposes

---

#### US-5.11: Earnings Below Minimum
**As a** creator with low balance  
**I want to** understand when I'll be paid  
**So that** I'm not confused  

**Priority:** P1  
**Story Points:** 2  

**Acceptance Criteria:**
- [ ] Clear message: "Minimum payout is $20"
- [ ] Show progress toward minimum
- [ ] Balance rolls over to next week
- [ ] No action needed from creator

---

### 2.3 Refunds & Disputes

#### US-5.12: Request Refund
**As an** uploader  
**I want to** request a refund for poor quality  
**So that** I'm not charged for unusable content  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Refund request within 7 days of delivery
- [ ] Reason required
- [ ] Evidence upload (optional)
- [ ] Request goes to admin review
- [ ] Notification of decision
- [ ] Full or partial refund options

---

#### US-5.13: Process Refund (Admin)
**As an** admin  
**I want to** review and process refunds  
**So that** disputes are resolved fairly  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Refund queue
- [ ] View original content and delivery
- [ ] View client complaint
- [ ] Approve full refund
- [ ] Approve partial refund
- [ ] Deny with reason
- [ ] Refund processed via original payment method

---

### 2.4 Admin Financial Management

#### US-5.14: Financial Dashboard
**As an** admin  
**I want to** see financial overview  
**So that** I can monitor business health  

**Priority:** P1  
**Story Points:** 5  

**Acceptance Criteria:**
- [ ] Revenue this period (day/week/month)
- [ ] Payouts this period
- [ ] Platform margin (revenue - payouts - costs)
- [ ] Transaction volume
- [ ] Average transaction value
- [ ] Revenue by output type
- [ ] Creator payout distribution

---

#### US-5.15: Manual Payout Adjustment
**As an** admin  
**I want to** adjust creator payouts  
**So that** I can handle special cases  

**Priority:** P2  
**Story Points:** 3  

**Acceptance Criteria:**
- [ ] Add bonus payment
- [ ] Deduct for policy violations
- [ ] Reason required
- [ ] Audit trail
- [ ] Creator notified

---

## 3. Data Model

### 3.1 Database Schema

```sql
-- Payment transactions (client charges)
CREATE TABLE payment_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    
    -- Transaction details
    type VARCHAR(20) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    
    -- Provider info
    provider VARCHAR(20) NOT NULL,
    provider_transaction_id VARCHAR(100),
    provider_response JSONB,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    
    -- Related entities
    upload_id UUID REFERENCES uploads(id),
    refund_of_id UUID REFERENCES payment_transactions(id),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT NOW(),
    completed_at TIMESTAMP,
    failed_at TIMESTAMP,
    failure_reason TEXT,
    
    CONSTRAINT valid_type CHECK (type IN ('charge', 'refund', 'credit_purchase', 'subscription')),
    CONSTRAINT valid_provider CHECK (provider IN ('stripe', 'paypal', 'pesapal', 'credits')),
    CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'refunded'))
);

-- User credits
CREATE TABLE user_credits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE REFERENCES users(id),
    balance DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    total_purchased DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    total_used DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Credit transactions
CREATE TABLE credit_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    type VARCHAR(20) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    balance_after DECIMAL(10,2) NOT NULL,
    reference_id UUID, -- Payment or upload ID
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_type CHECK (type IN ('purchase', 'usage', 'refund', 'adjustment'))
);

-- Creator payout methods
CREATE TABLE payout_methods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    method VARCHAR(20) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    
    -- Encrypted details
    details_encrypted BYTEA NOT NULL, -- AES-256 encrypted
    details_hash VARCHAR(64), -- For duplicate detection
    
    -- Verification
    verified_at TIMESTAMP,
    last_used_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_method CHECK (method IN ('bank_transfer', 'paypal', 'mpesa'))
);

-- Creator earnings
CREATE TABLE creator_earnings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id) ON DELETE CASCADE,
    assignment_id UUID REFERENCES assignments(id),
    
    -- Amount
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    
    -- Timing
    earned_at TIMESTAMP NOT NULL DEFAULT NOW(),
    available_at TIMESTAMP, -- When becomes withdrawable (next Sunday)
    paid_at TIMESTAMP,
    
    -- Payout reference
    payout_batch_id UUID REFERENCES payout_batches(id),
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'available', 'processing', 'paid', 'failed'))
);

-- Payout batches
CREATE TABLE payout_batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    week_ending DATE NOT NULL UNIQUE,
    
    -- Stats
    total_amount DECIMAL(12,2),
    total_creators INT,
    successful_count INT DEFAULT 0,
    failed_count INT DEFAULT 0,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    
    -- Timing
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'partial_failure'))
);

-- Individual payout records
CREATE TABLE payouts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_id UUID REFERENCES payout_batches(id),
    creator_id UUID REFERENCES users(id),
    payout_method_id UUID REFERENCES payout_methods(id),
    
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    
    -- Provider details
    provider VARCHAR(20) NOT NULL,
    provider_payout_id VARCHAR(100),
    provider_response JSONB,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    failure_reason TEXT,
    
    -- Timing
    initiated_at TIMESTAMP,
    completed_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'processing', 'completed', 'failed'))
);

-- Refund requests
CREATE TABLE refund_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id UUID REFERENCES payment_transactions(id),
    upload_id UUID REFERENCES uploads(id),
    requested_by UUID REFERENCES users(id),
    
    -- Request details
    reason TEXT NOT NULL,
    evidence_urls TEXT[],
    requested_amount DECIMAL(10,2), -- Full or partial
    
    -- Resolution
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    resolved_by UUID REFERENCES users(id),
    resolution_notes TEXT,
    approved_amount DECIMAL(10,2),
    
    created_at TIMESTAMP DEFAULT NOW(),
    resolved_at TIMESTAMP,
    
    CONSTRAINT valid_status CHECK (status IN ('pending', 'under_review', 'approved', 'denied', 'processed'))
);

-- Subscriptions
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    
    plan VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    
    -- Billing
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    billing_interval VARCHAR(10) NOT NULL,
    
    -- Provider
    provider VARCHAR(20) NOT NULL,
    provider_subscription_id VARCHAR(100),
    
    -- Dates
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    cancelled_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    CONSTRAINT valid_plan CHECK (plan IN ('pro', 'business', 'enterprise')),
    CONSTRAINT valid_status CHECK (status IN ('active', 'past_due', 'cancelled', 'expired')),
    CONSTRAINT valid_interval CHECK (billing_interval IN ('monthly', 'yearly'))
);

-- Indexes
CREATE INDEX idx_transactions_user ON payment_transactions(user_id, created_at);
CREATE INDEX idx_transactions_status ON payment_transactions(status);
CREATE INDEX idx_earnings_creator ON creator_earnings(creator_id, status);
CREATE INDEX idx_earnings_available ON creator_earnings(status, available_at) WHERE status = 'available';
CREATE INDEX idx_payouts_batch ON payouts(batch_id);
CREATE INDEX idx_refunds_status ON refund_requests(status);
```

### 3.2 Earnings to Payout Flow

```sql
-- Trigger: When assignment approved, create earning
CREATE OR REPLACE FUNCTION create_earning_on_approval() RETURNS TRIGGER AS $$
DECLARE
    next_sunday DATE;
    creator UUID;
    payout_amount DECIMAL(10,2);
BEGIN
    IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
        -- Get creator and payout amount
        SELECT creator_id, creator_payout INTO creator, payout_amount
        FROM assignments WHERE id = NEW.id;
        
        -- Calculate next Sunday
        next_sunday := date_trunc('week', CURRENT_DATE + INTERVAL '7 days')::DATE;
        
        -- Create earning record
        INSERT INTO creator_earnings (
            creator_id,
            assignment_id,
            amount,
            status,
            earned_at,
            available_at
        ) VALUES (
            creator,
            NEW.id,
            payout_amount,
            'pending',
            NOW(),
            next_sunday
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_create_earning
    AFTER UPDATE ON assignments
    FOR EACH ROW
    EXECUTE FUNCTION create_earning_on_approval();

-- Job: Make earnings available (runs daily)
UPDATE creator_earnings 
SET status = 'available' 
WHERE status = 'pending' 
AND available_at <= CURRENT_DATE;
```

---

## 4. API Specifications

### 4.1 Client Payment Endpoints

```yaml
# Create Payment Intent (Stripe)
POST /api/v1/payments/intent
  Headers: Authorization: Bearer {token}
  Request:
    upload_id: uuid
    payment_method: 'card'
  Response: 200 OK
    client_secret: string
    amount: number
    currency: string

# Process PayPal Payment
POST /api/v1/payments/paypal/create
  Headers: Authorization: Bearer {token}
  Request:
    upload_id: uuid
  Response: 200 OK
    approval_url: string
    order_id: string

# Capture PayPal Payment
POST /api/v1/payments/paypal/capture
  Headers: Authorization: Bearer {token}
  Request:
    order_id: string
  Response: 200 OK
    transaction: PaymentTransaction

# Initiate M-Pesa Payment
POST /api/v1/payments/mpesa/initiate
  Headers: Authorization: Bearer {token}
  Request:
    upload_id: uuid
    phone_number: string
  Response: 200 OK
    checkout_request_id: string
    message: "STK push sent"

# M-Pesa Webhook (from Pesapal)
POST /api/v1/webhooks/pesapal
  Headers: X-Pesapal-Signature: {signature}
  Body: (Pesapal callback payload)
  Response: 200 OK

# Get Payment Status
GET /api/v1/payments/:id
  Headers: Authorization: Bearer {token}
  Response: 200 OK
    transaction: PaymentTransaction
```

### 4.2 Creator Payout Endpoints

```yaml
# Get Earnings Summary
GET /api/v1/creators/me/earnings
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    available_balance: number
    pending_balance: number
    this_week: number
    this_month: number
    all_time: number
    minimum_payout: 20.00
    next_payout_date: date
    days_until_payout: number

# Get Earnings Details
GET /api/v1/creators/me/earnings/details
  Headers: Authorization: Bearer {creator_token}
  Query:
    start_date: date
    end_date: date
    page: number
  Response: 200 OK
    earnings: [{
      id: uuid
      assignment_title: string
      output_type: string
      amount: number
      status: string
      earned_at: timestamp
      available_at: timestamp
      paid_at: timestamp
    }]

# Get Payout Methods
GET /api/v1/creators/me/payout-methods
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    methods: [{
      id: uuid
      method: string
      is_primary: boolean
      is_verified: boolean
      masked_details: string  // "****1234" or "j***@email.com"
    }]

# Add Payout Method
POST /api/v1/creators/me/payout-methods
  Headers: Authorization: Bearer {creator_token}
  Request:
    method: 'bank_transfer' | 'paypal' | 'mpesa'
    details: {
      // For bank_transfer
      account_holder: string
      account_number: string
      routing_number: string
      bank_name: string
      // For paypal
      email: string
      // For mpesa
      phone_number: string
    }
    set_primary: boolean
  Response: 201 Created
    payout_method: PayoutMethod (masked)
    verification_required: boolean

# Set Primary Payout Method
POST /api/v1/creators/me/payout-methods/:id/set-primary
  Headers: Authorization: Bearer {creator_token}
  Response: 200 OK
    message: "Primary method updated"

# Get Payout History
GET /api/v1/creators/me/payouts
  Headers: Authorization: Bearer {creator_token}
  Query:
    year: number
    page: number
  Response: 200 OK
    payouts: [{
      id: uuid
      amount: number
      method: string
      status: string
      initiated_at: timestamp
      completed_at: timestamp
    }]
    annual_total: number
```

### 4.3 Admin Endpoints

```yaml
# Get Financial Dashboard
GET /api/v1/admin/finance/dashboard
  Headers: Authorization: Bearer {admin_token}
  Query:
    period: 'day' | 'week' | 'month' | 'year'
  Response: 200 OK
    revenue: number
    payouts: number
    margin: number
    transaction_count: number
    average_transaction: number
    revenue_by_type: [{output_type, amount}]

# Get Pending Refunds
GET /api/v1/admin/refunds
  Headers: Authorization: Bearer {admin_token}
  Query:
    status: string
    page: number
  Response: 200 OK
    refunds: RefundRequest[]

# Process Refund
POST /api/v1/admin/refunds/:id/process
  Headers: Authorization: Bearer {admin_token}
  Request:
    action: 'approve' | 'deny'
    amount: number (if partial refund)
    notes: string
  Response: 200 OK
    refund: RefundRequest
    transaction: PaymentTransaction (if approved)

# Manual Payout Adjustment
POST /api/v1/admin/creators/:id/earnings/adjust
  Headers: Authorization: Bearer {admin_token}
  Request:
    type: 'bonus' | 'deduction'
    amount: number
    reason: string
  Response: 200 OK
    earning: CreatorEarning
```

---

## 5. Payment Provider Integration

### 5.1 Stripe Integration

```javascript
// stripe.service.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(amount, currency, metadata) {
  return stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: currency.toLowerCase(),
    metadata: metadata,
    automatic_payment_methods: { enabled: true }
  });
}

async function createPayout(amount, destination, metadata) {
  return stripe.transfers.create({
    amount: Math.round(amount * 100),
    currency: 'usd',
    destination: destination, // Connected account ID
    metadata: metadata
  });
}
```

### 5.2 Pesapal/M-Pesa Integration

```javascript
// pesapal.service.js
const axios = require('axios');

class PesapalService {
  async getAccessToken() {
    const response = await axios.post(
      `${PESAPAL_URL}/api/Auth/RequestToken`,
      {
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET
      }
    );
    return response.data.token;
  }
  
  async initiateMpesaPayment(orderDetails) {
    const token = await this.getAccessToken();
    
    const payload = {
      id: orderDetails.order_id,
      currency: 'KES',
      amount: orderDetails.amount_kes,
      description: orderDetails.description,
      callback_url: `${APP_URL}/api/v1/webhooks/pesapal`,
      notification_id: process.env.PESAPAL_IPN_ID,
      billing_address: {
        phone_number: orderDetails.phone_number
      }
    };
    
    const response = await axios.post(
      `${PESAPAL_URL}/api/Transactions/SubmitOrderRequest`,
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    return response.data;
  }
}
```

---

## 6. Weekly Payout Job

```javascript
// payout-job.js (runs via cron every Sunday 00:00 UTC)

async function runWeeklyPayouts() {
  const batchDate = new Date();
  const batch = await db.payout_batches.create({
    week_ending: batchDate,
    status: 'processing',
    started_at: new Date()
  });
  
  try {
    // Get all creators eligible for payout
    const eligibleCreators = await db.query(`
      SELECT 
        u.id as creator_id,
        pm.id as payout_method_id,
        pm.method,
        pm.details_encrypted,
        SUM(ce.amount) as total_amount
      FROM creator_earnings ce
      JOIN users u ON ce.creator_id = u.id
      JOIN payout_methods pm ON pm.creator_id = u.id AND pm.is_primary = true
      WHERE ce.status = 'available'
      GROUP BY u.id, pm.id, pm.method, pm.details_encrypted
      HAVING SUM(ce.amount) >= 20.00
    `);
    
    await db.payout_batches.update(batch.id, {
      total_creators: eligibleCreators.length,
      total_amount: eligibleCreators.reduce((sum, c) => sum + c.total_amount, 0)
    });
    
    for (const creator of eligibleCreators) {
      await processCreatorPayout(batch.id, creator);
    }
    
    // Finalize batch
    const stats = await getPayoutStats(batch.id);
    await db.payout_batches.update(batch.id, {
      status: stats.failed_count > 0 ? 'partial_failure' : 'completed',
      successful_count: stats.successful_count,
      failed_count: stats.failed_count,
      completed_at: new Date()
    });
    
  } catch (error) {
    await db.payout_batches.update(batch.id, {
      status: 'partial_failure',
      completed_at: new Date()
    });
    throw error;
  }
}

async function processCreatorPayout(batchId, creator) {
  const payout = await db.payouts.create({
    batch_id: batchId,
    creator_id: creator.creator_id,
    payout_method_id: creator.payout_method_id,
    amount: creator.total_amount,
    status: 'processing',
    initiated_at: new Date()
  });
  
  try {
    // Mark earnings as processing
    await db.creator_earnings.updateMany(
      { creator_id: creator.creator_id, status: 'available' },
      { status: 'processing', payout_batch_id: batchId }
    );
    
    // Execute payout via provider
    const result = await executePayoutByMethod(
      creator.method,
      decryptDetails(creator.details_encrypted),
      creator.total_amount
    );
    
    // Update payout record
    await db.payouts.update(payout.id, {
      status: 'completed',
      provider_payout_id: result.provider_id,
      provider_response: result.response,
      completed_at: new Date()
    });
    
    // Mark earnings as paid
    await db.creator_earnings.updateMany(
      { creator_id: creator.creator_id, status: 'processing' },
      { status: 'paid', paid_at: new Date() }
    );
    
    // Notify creator
    await sendPayoutNotification(creator.creator_id, creator.total_amount);
    
  } catch (error) {
    // Mark payout as failed
    await db.payouts.update(payout.id, {
      status: 'failed',
      failure_reason: error.message
    });
    
    // Revert earnings to available
    await db.creator_earnings.updateMany(
      { creator_id: creator.creator_id, status: 'processing' },
      { status: 'available', payout_batch_id: null }
    );
    
    // Alert admin
    await alertFailedPayout(creator.creator_id, error);
  }
}
```

---

## 7. Implementation Checklist

### Week 1-2: Stripe Integration
- [ ] Payment intents
- [ ] Card processing
- [ ] Webhook handling
- [ ] Refund processing

### Week 3-4: PayPal & Pesapal
- [ ] PayPal orders
- [ ] M-Pesa STK push
- [ ] Webhook handlers
- [ ] Currency conversion

### Week 5-6: Creator Payouts
- [ ] Payout method management
- [ ] Weekly batch job
- [ ] Payout provider integrations
- [ ] Notifications

### Week 7-8: Credits & Subscriptions
- [ ] Credit system
- [ ] Subscription plans
- [ ] Billing management
- [ ] Financial dashboard

---

*Document Version: 1.0*  
*Last Updated: December 2024*
