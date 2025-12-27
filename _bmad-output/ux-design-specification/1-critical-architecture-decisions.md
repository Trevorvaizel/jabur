# 1. Critical Architecture Decisions

### Decision 1.1: Projects Are Mandatory (Not Optional)

**Decision:** Every upload must belong to a project from the moment of creation. The `project_id` field is NOT NULL in the database.

**Rationale:**
- Eliminates retroactive project assignment complexity
- Ensures consistency from day one
- Projects serve as knowledge bases with complete output history
- Simplifies creator mental model (always work within project context)

**Impact:**
- Uploaders must create project before first upload (can use default names like "Project 1", rename later)
- All content inherently organized and searchable
- Creators access project history for consistency across series

**User Quote:**
> "no we force the user to create projects.. does this simplify it"

---

### Decision 1.2: Three-Layer Standards Hierarchy

**Decision:** Platform standards → Project standards → Task-specific brief

**Structure:**

1. **Platform Standards (Admin-Controlled)**
   - jabur quality checklist (grammar, clarity, formatting rules)
   - Universal content guidelines (tone, professionalism)
   - Format-specific templates (blog structure, social media best practices)
   - Editable by admin, applies to ALL content

2. **Project Standards (Client-Provided)**
   - Client-specific style guide (brand voice, terminology)
   - Project-level instructions (target audience, recurring themes)
   - Example outputs (previous episodes for consistency)
   - Inherited by all uploads in that project

3. **Task-Specific Brief (Per Upload)**
   - This episode's focus and unique requirements
   - Special formatting or emphasis requests
   - Overrides general project standards if specified

**Rationale:**
- Platform ensures baseline quality across all creators
- Projects maintain client brand consistency
- Tasks allow flexibility for one-off requirements

**User Quote:**
> "i think our people also will need to continously be reminded of our standards.. i suspect we will be providing a checklist .. or instructions .. and this should be editable by the admin"

---

### Decision 1.3: Upload From Inside Project

**Decision:** Primary upload interface is project-first, not upload-first.

**Flow:**
1. Uploader opens project (e.g., "Crypto Education Series")
2. Clicks "Upload New Episode" from within project
3. Upload automatically inherits project settings and standards
4. No need to re-attach style guides or instructions

**Alternative (Still Available):**
- Quick upload from dashboard with project selection dropdown
- For one-off uploads or users with single project

**Rationale:**
- Reduces friction for series creators (most common use case)
- Eliminates need to repeatedly attach same style guides
- Reinforces project-as-container mental model

**User Quote:**
> "i think then they will be able to een upload from inside a project.. so that they dont have to always add instructions"

---

### Decision 1.4: Creator Access to Project History

**Decision:** Creators can view and download all previous outputs within a project they're assigned to.

**Access Rules:**
- Creator sees: Previous episode summaries, blog posts, social media content
- Creator can: Download for reference, review client feedback patterns
- Creator cannot: Edit previous outputs, see uploader/client identity

**Rationale:**
- Maintains series consistency (tone, terminology, formatting)
- Creators learn client preferences over time
- Reduces "why was this rejected?" confusion

**User Quote:**
> "i think each project can be treated to house instructions etc .. and the history becomes available to the writer"

---
