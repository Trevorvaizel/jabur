# FLOW 5: UPLOADER RETURN USER FLOW (2nd Upload & Subscription Conversion)

[Previous Flow 5 Mermaid diagram - with Mary's frequency segmentation added]

### Flow Optimizations Implemented

**Upload Frequency Segmentation** (Mary's fix - P3):
```
Upload 3 complete → Calculate days_since_first_upload
→ If <30 days: "You're uploading weekly! Save with subscription"
→ If 30-90 days: "Subscription available if preferred"
→ If >90 days: Continue per-episode (no subscription push)
```

**Subscription Payment Failure** (Winston's fix - P0):
```
Subscribe $149/mo → Payment failed
→ Email: "Subscription payment failed. Try different card?"
→ If retry fails: "Using per-episode pricing until resolved"
→ User can upload individual episodes at $47 while fixing payment
```

---
