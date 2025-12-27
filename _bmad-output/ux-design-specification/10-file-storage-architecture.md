# 10. File Storage Architecture

### 10.1 Google Cloud Storage Structure

**Bucket:** `jabur-outputs`

**Folder Structure:**

```
jabur-outputs/
├── projects/
│   ├── proj-445-crypto-education/          # Project folder (client anonymized)
│   │   ├── audio-12847-part1/               # Audio upload session
│   │   │   ├── summary/                     # Output type folder
│   │   │   │   ├── summary-20250102-v1.md  # Primary format (Markdown)
│   │   │   │   ├── summary-20250102-v1.pdf # Auto-generated
│   │   │   │   └── summary-20250102-v1.docx # Auto-generated
│   │   │   ├── blog/
│   │   │   │   ├── blog-20250102-v1.md
│   │   │   │   ├── blog-20250102-v1.pdf
│   │   │   │   └── blog-20250102-v1.docx
│   │   │   ├── social-media/
│   │   │   │   └── social-pack-20250102-v1.json # Structured data
│   │   │   └── metadata.json                # Session metadata
│   │   │
│   │   ├── audio-12848-part2/
│   │   │   └── [same structure]
│   │   │
│   │   └── project-metadata.json            # Project-level metadata
│   │
│   ├── proj-446-tech-trends/
│   └── proj-447-business-insights/
│
├── creator-cvs/
│   ├── creator-247-maria-cv.pdf
│   ├── creator-189-john-cv.docx
│   └── creator-312-sarah-cv.pdf
│
├── creator-samples/                          # Application writing samples
│   ├── creator-247-sample-1.md
│   └── creator-189-sample-1.md
│
└── temp-audio/                               # 7-day retention
    ├── audio-12847.mp3                       # Auto-deleted after 7 days
    ├── audio-12847-transcript.json
    └── audio-12848.mp3
```

### 10.2 File Naming Conventions

**Pattern:** `{type}-{date}-{version}.{extension}`

Examples:
- `summary-20250102-v1.md` (First version from Jan 2, 2025)
- `blog-20250105-v2.md` (Revised version from Jan 5)
- `social-pack-20250103-v1.json` (Social media pack)

**Why this convention:**
- Date sorting works naturally (YYYYMMDD)
- Version tracking for revisions
- Type prefix allows quick filtering
- Human-readable without database lookup

### 10.3 Format Generation Pipeline

**Primary Format: Markdown**

All creators write in Markdown. Other formats auto-generated on approval.

**Generation Flow:**

```typescript
// When QA approves content
async function generateOutputFormats(content_output_id: string) {

  const output = await db.findOne('content_outputs', { id: content_output_id });
  const markdown_url = output.file_url; // Original .md file

  // Download markdown content
  const markdown_content = await downloadFromGCS(markdown_url);

  // Generate PDF
  const pdf_buffer = await convertMarkdownToPDF(markdown_content, {
    format: 'A4',
    margin: '1in',
    styling: 'professional' // Use project style guide if available
  });

  const pdf_url = await uploadToGCS(
    pdf_buffer,
    markdown_url.replace('.md', '.pdf')
  );

  // Generate DOCX
  const docx_buffer = await convertMarkdownToDOCX(markdown_content, {
    template: 'standard',
    styling: 'professional'
  });

  const docx_url = await uploadToGCS(
    docx_buffer,
    markdown_url.replace('.md', '.docx')
  );

  // Update database with available formats
  await db.update('content_outputs', {
    where: { id: content_output_id },
    data: {
      available_formats: ['md', 'pdf', 'docx'],
      pdf_url,
      docx_url
    }
  });
}
```

**Special Case: Social Media Packs**

Social media content stored as structured JSON:

```json
{
  "created_at": "2025-01-02T14:30:00Z",
  "creator_id": "creator-247",
  "project_id": "proj-445",
  "audio_id": "audio-12847",
  "posts": [
    {
      "platform": "twitter",
      "type": "tweet",
      "content": "Just learned why Bitcoin halvings matter 🚀 Here's the TL;DR...",
      "character_count": 246,
      "hashtags": ["#Bitcoin", "#Crypto"],
      "mentions": [],
      "thread": false
    },
    {
      "platform": "twitter",
      "type": "thread",
      "posts": [
        {
          "position": 1,
          "content": "🧵 THREAD: Why Bitcoin halving events change everything...",
          "character_count": 78
        },
        {
          "position": 2,
          "content": "Every 4 years, Bitcoin mining rewards get cut in half...",
          "character_count": 156
        }
      ]
    },
    {
      "platform": "linkedin",
      "type": "post",
      "content": "Understanding Bitcoin Halving Events\n\nThe recent podcast episode...",
      "character_count": 1247,
      "hashtags": ["#Cryptocurrency", "#Bitcoin", "#Finance"]
    }
  ]
}
```

This JSON can be:
1. Downloaded as-is by client for programmatic use
2. Auto-formatted into readable document (PDF/DOCX with platform sections)
3. Displayed in platform-specific preview in client dashboard

---
