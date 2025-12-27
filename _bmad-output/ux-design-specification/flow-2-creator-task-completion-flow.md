# FLOW 2: CREATOR TASK COMPLETION FLOW

### Flow Purpose
Guide creators from claiming a task through curation, QA approval, revision (if needed), and getting paid weekly.

### Critical Success Metrics
- Target: 90% first task approval rate (onboarding quality indicator)
- Target: 74% first-pass approval rate (quality without revisions)
- Target: 12 minutes average review time
- Target: <5% task forfeit rate (claimed but not completed)

### Flow Diagram

[Previous Flow 2 Mermaid diagram - unchanged, already comprehensive]

### Flow Optimizations Implemented

**Earlier Time Nudge** (Sally's fix - P2):
- Add positive nudge at 50% time elapsed
- "You have 1.5 hours left - you're on track!" (encouragement)
- Current 2-hour warning maintained (prevents forfeit)

**Auto-Save Draft** (Winston's fix):
- Debounced auto-save every 30 seconds (only if content changed)
- Delta updates (save changed blocks only, not full document)
- Prevents loss if browser crashes mid-work

---
