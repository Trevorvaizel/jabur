# Starter Template Evaluation

### Primary Technology Domain

**Full-stack web application** (SaaS B2B marketplace platform) based on project requirements analysis.

### Starter Options Considered

**1. create-next-app (Official Next.js CLI)**
- Provides: Next.js 14, TypeScript, Tailwind CSS, ESLint, App Router
- Maintained by: Vercel (official Next.js team)
- Philosophy: Minimal, unopinionated foundation

**2. create-t3-app (T3 Stack)**
- Provides: Next.js 14 + TypeScript + Tailwind + Prisma + tRPC
- Maintained by: T3 OSS community
- Philosophy: Type-safe full-stack with modular component selection

**3. Production Boilerplates** (various GitHub templates)
- Provides: Next.js + Prisma + Auth + Docker + Tests + CI/CD
- Philosophy: "Batteries included" with opinionated best practices

### Selected Starter: create-next-app

**Rationale for Selection:**

Given jabur's unique architectural requirements, **architectural control trumps convenience**:

1. **Role Isolation Architecture**: No starter template handles 3-layer enforcement (route groups + middleware + database RLS). This must be custom-built from foundation.

2. **REST API Requirements**: T3 Stack's tRPC conflicts with mandatory webhook endpoints:
   - M-Pesa payment callbacks (must be REST)
   - Stripe webhook handlers (must be REST)
   - AssemblyAI transcription callbacks (must be REST)
   - External integrations require traditional API routes, not type-safe RPC

3. **Real-Time Infrastructure**: Socket.io + Redis pub/sub for multi-instance coordination isn't included in any mainstream starter. Custom setup required regardless.

4. **Specialized State Management**: TanStack Query + Zustand boundaries align with our 4-role isolation - must be configured intentionally, not inherited from opinionated starter.

5. **NextAuth.js v5 Custom Configuration**: 4-role authentication system with role separation enforcement requires custom setup that would conflict with boilerplate auth patterns.

**Decision**: Start with clean foundation (create-next-app), then intentionally add each architectural piece with full control over implementation patterns.

**Initialization Command:**

```bash
npx create-next-app@latest jabur --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

**Command Breakdown:**
- `--typescript`: Enable TypeScript with strict mode
- `--tailwind`: Include Tailwind CSS configuration
- `--app`: Use App Router (not Pages Router)
- `--no-src-dir`: Keep files in root (standard Next.js 14 pattern)
- `--import-alias "@/*"`: Configure path aliases for clean imports

### Architectural Decisions Provided by Starter

**Language & Runtime:**
- TypeScript 5.x with strict mode enabled
- Node.js 20+ (LTS) runtime
- ES modules with modern JavaScript features
- Import path aliases configured (`@/components`, `@/lib`, etc.)

**Styling Solution:**
- Tailwind CSS 4.x with PostCSS pipeline
- Utility-first CSS approach for rapid UI development
- Responsive design utilities built-in
- Dark mode support ready (class-based strategy)

**Build Tooling:**
- Next.js built-in bundler (Turbopack for dev, optimized for production)
- Automatic code splitting and tree shaking
- Image optimization with next/image
- Font optimization with next/font
- Automatic static/dynamic rendering based on data fetching patterns

**Testing Framework:**
- None included (intentional - will add Jest + React Testing Library tailored to role isolation testing needs)

**Code Organization:**
- App Router structure: `/app` directory for routes
- Route groups pattern-ready: `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
- `/components` for shared React components
- `/lib` for utilities and shared logic
- Public assets in `/public`

**Development Experience:**
- Fast Refresh (hot reloading) for instant feedback
- TypeScript language server integration
- ESLint configured with Next.js recommended rules
- Development server with error overlay
- Production build optimization

### Manual Stack Assembly Required

**Post-Initialization Setup** (in order of implementation):

1. **Database Layer**: Prisma ORM + PostgreSQL client configuration
2. **Authentication**: NextAuth.js v5 with 4-role system
3. **State Management**: TanStack Query v5 + Zustand
4. **Real-Time**: Socket.io + Redis adapter
5. **API Patterns**: Server Actions structure + error handling utilities
6. **Testing**: Jest + React Testing Library + Playwright
7. **Background Jobs**: Job queue infrastructure (BullMQ or similar)
8. **Integrations**: Stripe SDK, M-Pesa SDK, AssemblyAI client, plagiarism/AI detection APIs

**Note:** Project initialization using create-next-app should be Story 1.1 in the implementation phase.

---
