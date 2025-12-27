# FLOW 4: ADMIN DISPUTE RESOLUTION FLOW

[Previous Flow 4 Mermaid diagram - unchanged]

### Flow Optimizations Implemented

**Lazy-Load Performance** (Winston's fix):
- Load dispute summary first (lightweight)
- Load audio/transcript/messages on-demand (tabs/clicks)
- Streaming audio (don't download full 150MB upfront)
- Prevents page load bottleneck

---
