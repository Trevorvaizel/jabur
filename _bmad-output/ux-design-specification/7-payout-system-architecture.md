# 7. Payout System Architecture

### 7.1 Dual Payment Method Strategy

**Decision:** Support two payment methods to serve different creator markets.

**Methods:**

1. **M-Pesa** (Primary for East Africa: Kenya, Tanzania, Uganda)
   - Mobile money platform
   - Instant transfers
   - Low fees (~1%)
   - Minimum payout: $10 USD equivalent
   - Supported currencies: KES, TZS, UGX

2. **Bank Transfer** (International via Wise/TransferWise)
   - Traditional bank transfers
   - 1-3 day processing
   - Fees: ~2-3%
   - Minimum payout: $50 USD
   - Supported currencies: USD, EUR, GBP, others

**User Quote:**
> "payouts mpesa, bank transfer"

### 7.2 Payment Method Setup (Creator Onboarding)

**During Creator Application (After Approval):**

```
┌──────────────────────────────────────────────────┐
│ Set Up Your Payment Method                       │
│                                                  │
│ How would you like to receive payments?          │
│                                                  │
│ ○ M-Pesa (East Africa - Kenya, Tanzania, Uganda)│
│   • Instant transfers                            │
│   • Minimum payout: $10 USD equivalent          │
│   • Fees: ~1%                                    │
│                                                  │
│ ○ Bank Transfer (International)                 │
│   • 1-3 day processing                           │
│   • Minimum payout: $50 USD                     │
│   • Fees: ~2-3%                                  │
│                                                  │
│ [Continue]                                       │
└──────────────────────────────────────────────────┘
```

**If Creator Selects M-Pesa:**

```
┌──────────────────────────────────────────────────┐
│ M-Pesa Payment Setup                             │
│                                                  │
│ Phone Number (M-Pesa registered):                │
│ ┌──────────────────────────────────────────────┐│
│ │ +254 [___________]                           ││
│ └──────────────────────────────────────────────┘│
│ Example: +254712345678                           │
│                                                  │
│ Full Name (as registered with M-Pesa):          │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ Country:                                         │
│ ┌──────────────────────────────────────────────┐│
│ │ [Kenya ▼]                                    ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ Tax ID / KRA PIN (Kenya):                       │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│ Required for tax compliance                      │
│                                                  │
│ [Cancel]  [Verify M-Pesa Number]                │
└──────────────────────────────────────────────────┘
```

**Verification Process:**

1. Creator clicks "Verify M-Pesa Number"
2. System sends 1 KES (0.01 USD) test transaction to provided number
3. Creator receives M-Pesa notification on their phone
4. Creator confirms receipt in platform:
   ```
   ✅ Verification transaction sent!

   Check your phone for M-Pesa notification.
   Did you receive 1 KES from "JABUR"?

   [Yes, I received it] [No, resend]
   ```

5. Once confirmed, M-Pesa marked as verified ✅

**If Creator Selects Bank Transfer:**

```
┌──────────────────────────────────────────────────┐
│ Bank Transfer Payment Setup                      │
│                                                  │
│ Bank Country:                                    │
│ ┌──────────────────────────────────────────────┐│
│ │ [United States ▼]                            ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ Bank Name:                                       │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ Account Number / IBAN:                          │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ SWIFT / BIC Code:                               │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ Account Holder Name:                            │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│ Must match your legal name                       │
│                                                  │
│ Tax ID / SSN (if US):                           │
│ ┌──────────────────────────────────────────────┐│
│ │ [                                          ] ││
│ └──────────────────────────────────────────────┘│
│ Required for tax compliance                      │
│                                                  │
│ [Cancel]  [Save Payment Details]                │
└──────────────────────────────────────────────────┘
```

**Note:** Bank transfer details are verified on first payout attempt (micro-deposit verification).

### 7.3 Earnings Tracking (Creator Dashboard)

**Creator Dashboard - Earnings Section:**

```
┌────────────────────────────────────────────────────────────┐
│ 💰 Your Earnings                                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ Current Balance: $127.50 USD                               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                            │
│ Next Payout: Friday, Jan 5, 2025                           │
│ Payment Method: M-Pesa (+254712******78) ✅                │
│ Estimated Payout: $127.50 (if balance stays above $10)    │
│                                                            │
│ [Change Payment Method] [Payout History]                   │
│                                                            │
├────────────────────────────────────────────────────────────┤
│ This Week's Earnings:                                      │
│ • Blog post for Project A: $25.00 (Jan 2)                 │
│ • Social media pack for Project B: $15.00 (Jan 3)         │
│ • Summary for Project C: $12.50 (Jan 4)                   │
│                                                            │
│ Tasks pending QA approval: 2 ($37.50)                     │
│ Tasks in revision: 1 ($20.00)                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Earnings Calculation:**

Each task has a base rate by output type:
- Blog post: $25
- Social media pack: $15
- Summary: $12.50
- Newsletter: $30

Earnings modifiers:
- **Quality bonus:** QA score 4.8+ → +20% bonus
- **Speed bonus:** Completed 24+ hours before deadline → +10% bonus
- **Rush task:** Deadline <24 hours → +50% premium
- **Complexity multiplier:** Client-marked complex task → +25%

Example calculation:
```
Blog post base: $25.00
QA score 4.9 → Quality bonus: +$5.00 (20%)
Submitted 2 days early → Speed bonus: +$2.50 (10%)
Total: $32.50
```

### 7.4 Weekly Payout Process

**Payout Schedule:**

- **Frequency:** Weekly, every Friday
- **Eligible earnings:** Tasks completed and QA-approved by Thursday 11:59 PM UTC
- **Minimum balance:**
  - M-Pesa: $10 USD equivalent
  - Bank Transfer: $50 USD
- **Processing time:**
  - M-Pesa: Instant (within 5 minutes)
  - Bank Transfer: 1-3 business days

**Friday Morning (Automated Process):**

**Step 1: System Creates Payout Batch**

```sql
-- Generate weekly payout batch
INSERT INTO payout_batches (
  batch_id,
  batch_date,
  total_creators,
  total_amount,
  status
) VALUES (
  'BATCH-W03-2025',
  '2025-01-05',
  127,
  18750.00,
  'processing'
);
```

**Step 2: Calculate Creator Payouts**

For each creator with eligible earnings:

```sql
-- Calculate individual creator payout
INSERT INTO creator_payouts (
  batch_id,
  creator_id,
  total_earnings,
  payment_method,
  payment_details,
  status
)
SELECT
  'BATCH-W03-2025',
  creator_id,
  SUM(task_earnings),
  payment_method,
  payment_details,
  'pending'
FROM creator_earnings
WHERE
  week_ending = '2025-01-05'
  AND qa_approved = true
  AND (
    (payment_method = 'mpesa' AND SUM(task_earnings) >= 10) OR
    (payment_method = 'bank_transfer' AND SUM(task_earnings) >= 50)
  )
GROUP BY creator_id, payment_method, payment_details;
```

**Step 3: Process M-Pesa Payouts (Instant)**

```typescript
// Process M-Pesa payouts via Daraja API
async function processMpesaPayouts(batch: PayoutBatch) {
  const mpesaCreators = batch.payouts.filter(p => p.method === 'mpesa');

  for (const payout of mpesaCreators) {
    try {
      // Convert USD to local currency (KES)
      const amountKES = await convertCurrency(payout.amount_usd, 'USD', 'KES');

      // Send B2C payment via M-Pesa API
      const response = await mpesaAPI.b2c({
        phone: payout.mpesa_phone,
        amount: amountKES,
        reference: `JABUR-W03-${payout.creator_id}`,
        message: `jabur payment for week ending Jan 5`
      });

      // Update database with transaction ID
      await db.update('creator_payouts', {
        where: { id: payout.id },
        data: {
          status: 'completed',
          mpesa_transaction_id: response.transaction_id,
          amount_local_currency: amountKES,
          currency: 'KES',
          completed_at: new Date(),
          fees: response.transaction_fee
        }
      });

      // Send creator notification
      await sendEmail(payout.creator_id, {
        subject: '💰 Your jabur payment has been sent!',
        body: `
          Hi ${payout.creator_name},

          Your weekly earnings of ${amountKES} KES ($${payout.amount_usd})
          have been sent to your M-Pesa number.

          Transaction ID: ${response.transaction_id}

          Check your phone for the M-Pesa confirmation!

          - jabur Team
        `
      });

    } catch (error) {
      // Log error and mark payout as failed
      await db.update('creator_payouts', {
        where: { id: payout.id },
        data: {
          status: 'failed',
          error_message: error.message,
          retry_count: payout.retry_count + 1
        }
      });

      // Alert admin
      await alertAdmin(`M-Pesa payout failed for creator ${payout.creator_id}: ${error.message}`);
    }
  }
}
```

**Step 4: Process Bank Transfers (1-3 Days)**

```typescript
// Process bank transfers via Wise API
async function processBankTransfers(batch: PayoutBatch) {
  const bankCreators = batch.payouts.filter(p => p.method === 'bank_transfer');

  for (const payout of bankCreators) {
    try {
      // Create Wise transfer
      const transfer = await wiseAPI.createTransfer({
        source_currency: 'USD',
        target_currency: payout.bank_currency,
        source_amount: payout.amount_usd,
        recipient: {
          account_number: payout.bank_account,
          swift_code: payout.bank_swift,
          bank_name: payout.bank_name,
          country: payout.bank_country
        },
        reference: `JABUR-W03-${payout.creator_id}`
      });

      // Update database
      await db.update('creator_payouts', {
        where: { id: payout.id },
        data: {
          status: 'processing',
          wise_transfer_id: transfer.id,
          estimated_delivery: transfer.estimated_delivery,
          fees: transfer.fees.total
        }
      });

      // Send creator notification
      await sendEmail(payout.creator_id, {
        subject: '💰 Your jabur payment is on the way!',
        body: `
          Hi ${payout.creator_name},

          Your weekly earnings of $${payout.amount_usd} have been sent via
          bank transfer.

          Expected arrival: ${transfer.estimated_delivery}
          Transfer ID: ${transfer.id}

          You'll receive a confirmation email when the transfer completes.

          - jabur Team
        `
      });

    } catch (error) {
      // Log error and mark payout as failed
      await db.update('creator_payouts', {
        where: { id: payout.id },
        data: {
          status: 'failed',
          error_message: error.message,
          retry_count: payout.retry_count + 1
        }
      });

      // Alert admin
      await alertAdmin(`Bank transfer failed for creator ${payout.creator_id}: ${error.message}`);
    }
  }
}
```

**Step 5: Failed Payout Handling**

If payout fails:
1. System automatically retries 3 times (1 hour intervals)
2. If still failing, admin alerted for manual review
3. Creator notified: "Payment delayed, we're working on it"
4. Admin can manually mark as paid or issue refund

### 7.5 Payout History & Receipts

**Creator Dashboard - Payout History:**

```
┌────────────────────────────────────────────────────────────┐
│ 📊 Payout History                                          │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ Jan 5, 2025 - Week 3                                       │
│ $127.50 → M-Pesa (+254712******78)                         │
│ Status: ✅ Completed (Jan 5, 10:05 AM)                     │
│ Transaction ID: OPQ123456789                                │
│ [Download Receipt]                                         │
│                                                            │
│ Dec 29, 2024 - Week 2                                      │
│ $95.00 → M-Pesa (+254712******78)                          │
│ Status: ✅ Completed (Dec 29, 10:03 AM)                    │
│ Transaction ID: MNO987654321                                │
│ [Download Receipt]                                         │
│                                                            │
│ Dec 22, 2024 - Week 1                                      │
│ $62.50 → M-Pesa (+254712******78)                          │
│ Status: ✅ Completed (Dec 22, 10:12 AM)                    │
│ Transaction ID: LMN456789012                                │
│ [Download Receipt]                                         │
│                                                            │
│ Total Lifetime Earnings: $2,847.50                        │
│ Total Payouts: 23                                          │
│ Average Weekly: $123.80                                    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Receipt PDF (Auto-Generated):**

```
────────────────────────────────────────
         jabur Creator Payment
────────────────────────────────────────

Date: January 5, 2025
Payment Period: Dec 30, 2024 - Jan 5, 2025
Creator ID: Creator-247

EARNINGS SUMMARY
────────────────────────────────────────
Blog post (Project A)        $25.00
Social media pack (Project B) $15.00
Summary (Project C)           $12.50
Quality bonus (4.9 avg)        $8.50
Speed bonus                    $2.50
                           ──────────
Subtotal                     $63.50

TASKS BREAKDOWN
────────────────────────────────────────
Jan 2: Blog post - Crypto Education
  Base: $25.00 | QA: 4.9 | Bonus: $5.00
  Total: $30.00

Jan 3: Social media - Tech Trends
  Base: $15.00 | QA: 4.7 | Bonus: $0.00
  Total: $15.00

Jan 4: Summary - Finance News
  Base: $12.50 | QA: 5.0 | Bonus: $6.00
  Total: $18.50

PAYMENT DETAILS
────────────────────────────────────────
Payment Method: M-Pesa
Phone: +254712******78
Transaction ID: OPQ123456789
Amount (USD): $63.50
Amount (KES): 8,230.50 KES
Exchange Rate: 129.65 KES/USD
Fees: 82.31 KES (~1%)
Net Amount: 8,148.19 KES

Status: Completed ✅
Processed: Jan 5, 2025 10:05 AM UTC

────────────────────────────────────────
Thank you for being part of jabur!
Questions? support@jabur.com
────────────────────────────────────────
```

---
