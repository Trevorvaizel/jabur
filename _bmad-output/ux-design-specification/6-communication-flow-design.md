# 6. Communication Flow Design

### 6.1 Architecture Overview

**Core Principle:** Creators remain anonymous to clients. All communication routes through QA as intermediaries.

**Flow:**

```
┌─────────────┐         ┌──────────┐         ┌─────────┐
│   CREATOR   │────────▶│    QA    │────────▶│  CLIENT │
│   (Maria)   │  Q: "What│  (James) │  "jabur │  (Alex)  │
│             │  tone?"  │          │  asking"│          │
└─────────────┘         └──────────┘         └─────────┘
     ▲                       │                     │
     │    A: "Professional"  ▼                     │
     │                  ┌──────────┐              │
     └──────────────────│  ADMIN   │◀─────────────┘
                        │ (Sarah)  │  (Oversight)
                        └──────────┘
```

**User Quotes:**
> "direct client communication can happen only with QA guys... messaging on the clients side will look like its still from jabur"
> "i think the questions should go to the QA who then decides to answer or to talk to the client .. admin must see these"

### 6.2 Creator-Initiated Questions

**Scenario:** Maria is writing a blog post and unclear about tone.

**In Creator Workspace:**

Right panel includes:
```
┌─────────────────────────────────────────┐
│ Need Clarification?                     │
│                                         │
│ [Ask a Question About This Task]        │
└─────────────────────────────────────────┘
```

**Creator clicks button, modal opens:**

```
┌──────────────────────────────────────────────────┐
│ Ask a Question                                   │
│                                                  │
│ Your question will be reviewed by our QA team.   │
│ They may answer directly or contact the client.  │
│                                                  │
│ Question:                                        │
│ ┌──────────────────────────────────────────────┐│
│ │The brief mentions "professional tone" but    ││
│ │doesn't specify if I should use first-person  ││
│ │or third-person narration. What's preferred?  ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ 💡 Tip: Be specific! The clearer your question, │
│    the faster you'll get an answer.             │
│                                                  │
│            [Cancel]  [Send Question]             │
└──────────────────────────────────────────────────┘
```

**After Creator Clicks "Send Question":**

1. Question saved to database with status: `awaiting_qa_review`
2. Creator sees confirmation:
   ```
   ✅ Question sent to QA team.
   You'll be notified when they respond (usually within 2 hours).

   You can continue working on other tasks while waiting.
   ```

3. Task status changes to: `pending_clarification` (pauses deadline timer)

### 6.3 QA Review & Response

**QA Dashboard shows:**

```
┌────────────────────────────────────────────────────────────┐
│ 🔔 Creator Questions (3 pending)                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ Question #1 - Submitted 15 min ago                         │
│ Task: Blog post for Project "Crypto Education"            │
│ Creator: Creator-247 (Tier 2, 4.6 avg score)              │
│                                                            │
│ Question:                                                  │
│ "The brief mentions 'professional tone' but doesn't       │
│ specify if I should use first-person or third-person      │
│ narration. What's preferred?"                             │
│                                                            │
│ Context:                                                   │
│ - Project: Crypto Education Series                        │
│ - Output type: Blog post                                  │
│ - Client: [Alex Johnson - Crypto Educator]                │
│ - Previous outputs: 8 blog posts (all third-person)       │
│                                                            │
│ QA Actions:                                                │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Answer Directly] [Contact Client] [View Full Brief] │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                            │
│ ℹ️ QA Note: This project always uses third-person. I can │
│    answer directly without bothering the client.          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**QA Decision Tree:**

**Option 1: Answer Directly** (Most Common)

QA clicks "Answer Directly", types response:

```
┌──────────────────────────────────────────────────┐
│ Answer Creator Question                          │
│                                                  │
│ Your response to Creator-247:                    │
│ ┌──────────────────────────────────────────────┐│
│ │Use third-person narration for this project.  ││
│ │All previous blog posts for this client use   ││
│ │third-person, so keep that consistent.        ││
│ │                                              ││
│ │Example: "The podcast explains..." (not "I    ││
│ │explain...")                                  ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ This answer will be sent directly to the creator.│
│ Client will not be notified.                     │
│ Admin will see this in communication log.        │
│                                                  │
│            [Cancel]  [Send Answer]               │
└──────────────────────────────────────────────────┘
```

**Option 2: Contact Client** (When QA Unsure)

QA clicks "Contact Client", composes message:

```
┌──────────────────────────────────────────────────┐
│ Contact Client for Clarification                 │
│                                                  │
│ Message to client (Alex Johnson):                │
│ ┌──────────────────────────────────────────────┐│
│ │Hi Alex,                                      ││
│ │                                              ││
│ │Quick question about the latest episode:      ││
│ │Should the blog post use first-person or      ││
│ │third-person narration?                       ││
│ │                                              ││
│ │Thanks!                                       ││
│ │- jabur Team                                  ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ This message will appear to the client as:       │
│ "From: jabur Team"                               │
│                                                  │
│ Creator will be notified that we're waiting for  │
│ client response.                                 │
│                                                  │
│            [Cancel]  [Send to Client]            │
└──────────────────────────────────────────────────┘
```

**When Client Responds:**

1. Client sees message in their dashboard:
   ```
   📩 Message from jabur Team
   "Quick question about the latest episode: Should the blog post use
   first-person or third-person narration?"

   [Reply]
   ```

2. Client replies: "Third-person, please. Matches our brand voice."

3. QA sees client response, forwards to creator:
   ```
   ┌──────────────────────────────────────────────────┐
   │ Forward Client Response to Creator               │
   │                                                  │
   │ Client said: "Third-person, please. Matches our  │
   │ brand voice."                                    │
   │                                                  │
   │ Your response to Creator-247:                    │
   │ ┌──────────────────────────────────────────────┐│
   │ │We checked with the client: Use third-person   ││
   │ │narration for this blog post.                  ││
   │ └──────────────────────────────────────────────┘│
   │                                                  │
   │            [Cancel]  [Send Answer]               │
   └──────────────────────────────────────────────────┘
   ```

### 6.4 Creator Receives Answer

**Creator Dashboard Notification:**

```
🔔 Your question was answered!

Task: Blog post for Crypto Education
Question: "The brief mentions 'professional tone'..."

Answer from QA:
"Use third-person narration for this project. All previous blog posts
for this client use third-person, so keep that consistent.

Example: 'The podcast explains...' (not 'I explain...')"

[View Task] [Mark as Read]
```

**When Creator Returns to Task:**

Workspace shows banner:
```
✅ Your question was answered!

"Use third-person narration for this project. All previous blog posts
for this client use third-person, so keep that consistent."

[Dismiss]
```

Task status returns to `in_progress`, deadline timer resumes.

### 6.5 Admin Oversight

**Admin Dashboard includes "Communication Log":**

```
┌────────────────────────────────────────────────────────────┐
│ 📨 Communication Log (All Messages)                        │
├────────────────────────────────────────────────────────────┤
│ Filter: [All] [Creator→QA] [QA→Client] [QA→Creator]       │
│                                                            │
│ Jan 2, 2025 - 2:45 PM                                      │
│ Creator-247 → QA (James): "The brief mentions..."         │
│ Status: Answered directly by QA                            │
│ [View Full Thread]                                         │
│                                                            │
│ Jan 2, 2025 - 1:30 PM                                      │
│ Creator-189 → QA (Sarah) → Client (Alex): "Should I..."   │
│ Status: Client responded, forwarded to creator             │
│ [View Full Thread]                                         │
│                                                            │
│ Jan 2, 2025 - 10:15 AM                                     │
│ Creator-312 → QA (James): "Is the deadline..."            │
│ Status: Answered directly by QA                            │
│ [View Full Thread]                                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Why Admin Oversight Matters:**

1. **Quality control** - Admin can review QA responses for accuracy
2. **Pattern detection** - If same question asked repeatedly, update platform guidance
3. **Audit trail** - Complete record of all clarifications for dispute resolution
4. **Training** - Admin can coach QA on better responses

**User Quote:**
> "admin must see these"

### 6.6 Communication Database Schema

```typescript
CREATE TABLE creator_questions (
  id UUID PRIMARY KEY,
  task_id UUID NOT NULL,
  creator_id UUID NOT NULL,
  question_text TEXT NOT NULL,
  question_status VARCHAR(20),
  // 'awaiting_qa_review', 'awaiting_client', 'answered', 'resolved'

  qa_reviewer_id UUID,
  qa_response TEXT,
  qa_answered_at TIMESTAMP,

  client_contacted BOOLEAN DEFAULT false,
  client_response TEXT,
  client_responded_at TIMESTAMP,

  created_at TIMESTAMP,
  resolved_at TIMESTAMP
);

CREATE TABLE communication_log (
  id UUID PRIMARY KEY,
  question_id UUID REFERENCES creator_questions(id),
  sender_type VARCHAR(20), // 'creator', 'qa', 'client', 'admin'
  sender_id UUID,
  recipient_type VARCHAR(20),
  recipient_id UUID,
  message_text TEXT,
  timestamp TIMESTAMP,
  read_at TIMESTAMP
);
```

---
