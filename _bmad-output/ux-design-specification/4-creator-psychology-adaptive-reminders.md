# 4. Creator Psychology & Adaptive Reminders

### 4.1 Research Foundation

We ran detailed creator psychology scenarios to understand how reminder needs change based on experience level and context. Five scenarios were analyzed:

1. **Maria's first task** (High anxiety, needs reassurance)
2. **Maria's 20th task, new project** (Efficiency mode, needs quick reference)
3. **Maria's 3rd task in same project** (Overconfidence risk, needs critical reminders only)
4. **Maria receives revision request** (Emotional resilience, needs constructive guidance)
5. **Carlos's first social media pack** (Format learning, needs structure guidance)

### 4.2 Experience Level Detection

**System tracks:**
- Total tasks completed (platform-wide experience)
- Tasks completed in this project (project familiarity)
- Tasks completed in this format type (format expertise)
- Recent QA scores (quality trend)
- Revision request frequency (error patterns)

**Experience levels:**
1. **Novice** (0-5 total tasks) - Needs comprehensive guidance
2. **Developing** (6-20 tasks) - Needs selective reminders
3. **Proficient** (21-50 tasks) - Needs critical reminders only
4. **Expert** (51+ tasks) - Minimal reminders, self-directed

### 4.3 Adaptive Reminder System

#### Novice Creators (Tasks 1-5)

**Characteristics:**
- High anxiety about "doing it right"
- Needs reassurance and step-by-step guidance
- Benefits from detailed checklists
- Frequent self-doubt

**Reminders in Right Panel:**

```markdown
✨ You've got this!

**Before you start:**
- [ ] Listen to full audio at least once
- [ ] Read the brief and style guide
- [ ] Review the platform checklist

**While writing:**
- Use the transcript search to find specific quotes
- Check word count frequently (aim for 800-1200 words for blog posts)
- Use heading blocks (/heading) for structure

**Before submitting:**
- [ ] Run through platform quality checklist
- [ ] Double-check client style guide requirements
- [ ] Proofread for grammar and clarity

🎯 **First Task Tip:** Take your time! Quality over speed.
```

**Trigger frequency:** Every task

#### Developing Creators (Tasks 6-20)

**Characteristics:**
- Growing confidence but still need structure
- Can work independently but appreciates guidance
- Starting to develop personal workflows
- Occasional overconfidence (rushing quality checks)

**Reminders in Right Panel:**

```markdown
**Quick Checklist:**
- [ ] Style guide requirements met?
- [ ] Platform quality standards checked?
- [ ] Proofread complete?

💡 **Pro tip:** Use Cmd+F in transcript to quickly find key quotes.
```

**Trigger frequency:** Every task, but condensed

**Special trigger:** If QA score drops below 4.0, temporarily increase reminder detail:
```markdown
⚠️ **Quality Focus Reminder:**
We noticed your last submission needed revisions. Let's nail this one!

Common issues to watch for:
- Heading hierarchy (use H2 → H3, don't skip levels)
- Client terminology (check style guide)
- Grammar and clarity

You've got the skills—just double-check before submitting!
```

#### Proficient Creators (Tasks 21-50)

**Characteristics:**
- Confident and efficient
- Has established workflow
- Rarely needs basic reminders
- Benefits from advanced tips and project-specific notes

**Reminders in Right Panel:**

```markdown
**Project notes:**
- This client prefers actionable takeaways at the end
- Previous episode: "Bitcoin Halving" (Dec 28)

💎 **Pro tip:** This project's top outputs average 4.8/5 by including specific examples from the audio.
```

**Trigger frequency:** Only when project-specific or format-specific guidance applies

**Special trigger:** New format type (e.g., first newsletter after 30 blog posts):
```markdown
🆕 **New Format: Newsletter**

This format is different from blog posts:
- Use section templates (/template)
- Include clear CTA blocks
- Aim for scannable structure (short paragraphs, bullet lists)

[View Newsletter Guide]
```

#### Expert Creators (51+ tasks, 4.5+ avg QA score)

**Characteristics:**
- Fully self-directed
- Trusted by QA team
- Often mentors other creators
- Needs minimal guidance, values efficiency

**Reminders in Right Panel:**

```markdown
**Project:** Crypto Education Series
**Previous episode:** Bitcoin Halving (4.9/5 ⭐)

[View style guide] [View previous outputs]
```

**Trigger frequency:** None, except critical client changes

**Special trigger:** Client updates style guide:
```markdown
🔔 **Style Guide Updated** (Jan 2, 2025)
Client added new terminology preferences. [View changes]
```

### 4.4 Scenario-Based Reminder Adaptations

#### Scenario: Creator Receives Revision Request

**Context:** Maria (20 tasks completed) submitted a blog post that was rejected with feedback: "Needs more specific examples from the audio"

**System response:**
1. **Email notification:** "Your submission for [Project] needs revisions"
2. **When Maria opens task again:**

```markdown
📝 **Revision Requested**

**QA Feedback:**
"Great structure and writing! Needs more specific examples from the audio to bring concepts to life."

**What this means:**
- Your writing quality is strong ✅
- Add 2-3 concrete examples directly from the podcast
- Use the transcript search to find relevant quotes

**How to improve:**
- Find specific moments where the host explains a concept
- Quote or paraphrase those examples
- Connect examples back to your main points

💪 **Remember:** Revisions are normal! This is how we all improve.
```

**Psychological support:**
- Normalize revisions ("this is how we all improve")
- Highlight what was done well (build confidence)
- Provide specific, actionable guidance (reduce confusion)
- Frame as learning opportunity (growth mindset)

#### Scenario: Creator Switches to New Format

**Context:** Carlos (35 blog posts completed, 4.6 avg score) accepts first social media pack task

**System response when task opens:**

```markdown
🆕 **First Social Media Pack**

You're great at blog posts! Social media is different:

**Key differences:**
- Much shorter (280 chars for Twitter vs 1000 words for blog)
- Punchier tone (grab attention fast)
- Platform-specific formatting (hashtags, threads, emojis)

**Workspace tools for social:**
- Character counter (per platform)
- Thread builder (multi-tweet)
- Hashtag validator
- Preview mode (see how it looks on each platform)

**Pro tip from top creators:**
"Pull the punchiest quotes from the audio and build tweets around them."

[View Social Media Guide]
```

**Why this works:**
- Acknowledges existing expertise (confidence boost)
- Highlights differences upfront (prevents assumptions)
- Introduces new tools (reduces friction)
- Provides social proof (peer learning)

---
