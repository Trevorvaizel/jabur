# Workflow Recovery Instructions for Downstream Agents

**Date:** 2025-12-26
**Context:** File metadata corruption recovery
**Affected Files:** PRD, UX Design Specification, Architecture, Epics & Stories

## What Happened

On 2025-12-26, project files were temporarily deleted and recovered by converting PDFs back to Markdown. This conversion **stripped all YAML frontmatter metadata** which is critical for BMAD workflow compliance.

**Files affected:**
- `prd.md` - Lost all frontmatter (stepsCompleted, inputDocuments, etc.)
- `ux-design-specification.md` - Lost all frontmatter
- `epics.md` - Lost all frontmatter
- `architecture.md` - Completely missing (not recovered)

## Recovery Strategy Chosen

**Decision:** Re-run ALL workflows from scratch using recovered files as REFERENCE ONLY

**Rationale:** Manually reconstructing metadata is error-prone and non-compliant. Fresh workflow execution ensures proper BMAD structure and metadata integrity.

## File Structure

### Archived Files (REFERENCE ONLY)
**Location:** `_bmad-output/archive-recovered-20251226/`

Contains:
- `prd.md` - Original recovered PRD content (NO frontmatter)
- `ux-design-specification.md` - Original recovered UX design (NO frontmatter)
- `epics.md` - Original recovered epics (NO frontmatter)

**Usage:** Use these files for CONTINUITY and REFERENCE to understand previous work. DO NOT use as primary input or source of truth.

### New Files (SOURCE OF TRUTH)
**Location:** `_bmad-output/`

Contains:
- `prd.md` - **NEW** PRD with proper frontmatter (currently being rebuilt)
- `ux-design-specification.md` - Will be regenerated with proper frontmatter
- `architecture.md` - Will be created from scratch (was completely missing)
- `epics.md` - Will be regenerated with proper frontmatter

**Usage:** These are the OFFICIAL project documents. Use these as primary input for downstream workflows.

## Instructions for Each Workflow Agent

### UX Design Workflow Agent

**Primary Input:**
- `_bmad-output/prd.md` (NEW, with proper frontmatter)

**Reference Input (for continuity):**
- `_bmad-output/archive-recovered-20251226/prd.md` (original recovered version)
- `_bmad-output/archive-recovered-20251226/ux-design-specification.md` (your previous work)

**Approach:**
1. Read the NEW prd.md as your primary input
2. Reference the archived ux-design-specification.md to understand previous UX decisions
3. Use previous UX work for continuity but generate NEW content with proper frontmatter
4. Include archived files in your frontmatter inputDocuments list

### Architecture Workflow Agent

**Primary Input:**
- `_bmad-output/prd.md` (NEW, with proper frontmatter)
- `_bmad-output/ux-design-specification.md` (NEW, with proper frontmatter)

**Reference Input (for continuity):**
- `_bmad-output/archive-recovered-20251226/prd.md`
- `_bmad-output/archive-recovered-20251226/ux-design-specification.md`

**Special Note:**
- `architecture.md` was COMPLETELY MISSING from recovery - you're starting from scratch
- Use archived PRD and UX docs to understand system architecture requirements
- Generate completely new architecture.md with proper frontmatter

### Epics & Stories Workflow Agent

**Primary Input:**
- `_bmad-output/prd.md` (NEW, with proper frontmatter)
- `_bmad-output/ux-design-specification.md` (NEW, with proper frontmatter)
- `_bmad-output/architecture.md` (NEW, with proper frontmatter)

**Reference Input (for continuity):**
- `_bmad-output/archive-recovered-20251226/epics.md` (your previous work)

**Approach:**
1. Read NEW PRD + UX + Architecture as primary inputs
2. Reference archived epics.md to understand previous story breakdown
3. Use previous epic structure for continuity but generate NEW epics.md with proper frontmatter
4. Include archived files in frontmatter inputDocuments list

## Critical Requirements

### 1. Frontmatter Compliance
ALL new documents MUST include complete YAML frontmatter with:
- `stepsCompleted: [...]` - Array of completed step numbers
- `inputDocuments: [...]` - Array of all input file paths (including archived files)
- `documentCounts: {briefs: N, research: N, brainstorming: N, projectDocs: N}`
- `workflowType: 'prd|ux|architecture|epics'`
- `lastStep: N` - Last completed step number
- `project_name: 'jabur'`
- `user_name: 'Omen'`
- `date: 'YYYY-MM-DD'`

### 2. Input Document References
When creating frontmatter, include BOTH:
- New primary input files (e.g., `_bmad-output/prd.md`)
- Archived reference files (e.g., `_bmad-output/archive-recovered-20251226/prd.md`)

Example frontmatter for UX Design workflow:
```yaml
---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - "_bmad-output/prd.md"
  - "_bmad-output/archive-recovered-20251226/prd.md"
  - "_bmad-output/archive-recovered-20251226/ux-design-specification.md"
documentCounts:
  prd: 1
  archiveReference: 2
workflowType: 'ux'
lastStep: 4
project_name: 'jabur'
user_name: 'Omen'
date: '2025-12-26'
---
```

### 3. Continuity Priority
While generating fresh content with proper metadata:
- **Preserve core decisions** from archived files where they align with new PRD
- **Maintain consistency** with previous design/architectural choices when valid
- **Update and improve** where new PRD provides better clarity or direction
- **Don't blindly copy** - synthesize archived context with new requirements

## Recovery Status Tracking

**Completed:**
- ✅ PRD workflow (Steps 1-8 complete, currently on Step 9)

**Pending:**
- ⏳ PRD workflow (Steps 9-11 remaining)
- ⏳ UX Design workflow (full re-run)
- ⏳ Architecture workflow (full re-run, creating from scratch)
- ⏳ Epics & Stories workflow (full re-run)

## Questions or Issues?

If you encounter any ambiguity or need clarification about which file to use:
1. **Primary source of truth:** Always the NEW files in `_bmad-output/`
2. **Reference for continuity:** The archived files in `_bmad-output/archive-recovered-20251226/`
3. **When in conflict:** Trust the NEW files - they have proper metadata and recent user decisions

---

**Last Updated:** 2025-12-26
**Updated By:** PM Agent (John) during PRD workflow recovery
