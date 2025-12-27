# 3. Project System Design

### 3.1 Project as Knowledge Base

**Core Concept:** Projects are not just organizational folders—they are knowledge bases that preserve context and enable consistency across series.

**What Projects Contain:**
1. **Project metadata**
   - Project name (editable by uploader)
   - Client identity (hidden from creators)
   - Creation date, last upload date
   - Total episodes, total outputs

2. **Project-level standards**
   - Style guide (brand voice, terminology, formatting preferences)
   - Example outputs (approved content showing desired quality)
   - Recurring instructions (applies to all uploads)

3. **Complete output history**
   - All blog posts, summaries, social media content created for this project
   - Chronologically organized by episode
   - Downloadable by assigned creators for reference

4. **Performance data**
   - Average QA scores for this project
   - Most common rejection reasons
   - Top-performing creators on this project

### 3.2 Project Creation Flow (Uploader Perspective)

**When Uploader Creates First Project:**

```
Step 1: Quick Project Creation
┌─────────────────────────────────────────────┐
│ Create Your First Project                   │
│                                             │
│ Project Name: [Project 1          ]        │
│ (You can rename this anytime)               │
│                                             │
│ [Create Project] [I'll Do This Later]      │
└─────────────────────────────────────────────┘
```

**Educational tooltip:** "Projects keep your podcast episodes organized. If you're creating a series, all episodes go in one project for consistency."

**After Project Created:**
- Uploader immediately directed to "Upload First Episode" within that project
- Can add style guide later via "Project Settings"

**Renaming Projects:**
- Click project name anywhere it appears → inline edit
- No limits on renaming (creators still see generic "Project ABC")

### 3.3 Project Settings (Uploader)

**Accessible via:** Project page → "Settings" icon

**Settings Include:**
1. **Project Details**
   - Project name
   - Description (optional, for uploader's own reference)
   - Tags (optional, for organizing multiple projects)

2. **Default Upload Settings**
   - Default output types (always request blog + social, or customize per upload)
   - Default format preferences (long-form blog vs short summary)

3. **Style Guide** (This is the key section)
   - Rich text editor for client brand voice guidelines
   - Upload sample outputs (PDF, DOCX, previous episodes)
   - Terminology list (brand-specific terms, how to capitalize product names)
   - Example: "Always refer to our audience as 'crypto learners' not 'investors'"

4. **Creator Instructions**
   - Recurring instructions that apply to all episodes
   - Example: "Always include 3 actionable takeaways at the end of each blog post"
   - These instructions appear in creator's right panel for every task in this project

### 3.4 Upload From Inside Project

**Primary Upload Flow:**

```
Uploader's Project Page View:
┌─────────────────────────────────────────────────────────────────┐
│ 🎙️ Crypto Education Series                    [Upload Episode] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Recent Episodes:                                                │
│ • Episode 12: Bitcoin Halving (Jan 2) - 3 outputs ✅            │
│ • Episode 11: DeFi Explained (Dec 28) - 3 outputs ✅            │
│ • Episode 10: NFT Basics (Dec 21) - 2 outputs ✅               │
│                                                                 │
│ Project Stats:                                                  │
│ 📊 12 episodes | 🎯 4.7 avg quality | ⚡ 2.3 day avg turnaround │
│                                                                 │
│ [View All Episodes] [Project Settings]                          │
└─────────────────────────────────────────────────────────────────┘
```

**When Uploader Clicks "Upload Episode":**
- Upload modal opens with project already selected
- Style guide and recurring instructions auto-attached
- Uploader only needs to:
  1. Upload audio file
  2. Add this episode's title
  3. Add episode-specific brief (what's unique about this one)
  4. Confirm or customize output types
  5. Submit

**Benefits:**
- No dropdown menu to select project (already in context)
- No re-uploading style guides every time
- Faster workflow for series creators (most common use case)

**Alternative:** Quick upload button on dashboard still available for one-off uploads

---
