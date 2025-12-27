# FLOW 3: QA REVIEW FLOW

[Previous Flow 3 Mermaid diagram - unchanged]

### Flow Optimizations Implemented

**Rubric Auto-Save** (Winston's fix):
- Save rubric scores as entered (30-sec debounce)
- Store in `qa_review_draft` table until final submission
- QA editor can resume if browser crashes

---
