# Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**

These decisions must be made before any implementation can proceed. They form the architectural foundation:

1. **Database Provider & ORM**: Railway PostgreSQL 15+ with Prisma 5.x
2. **Authentication System**: NextAuth.js v5 with 4-role isolation
3. **State Management**: TanStack Query v5 (server state) + Zustand (UI state)
4. **Real-Time Infrastructure**: Socket.io 4.x + Redis adapter
5. **Background Job Queue**: BullMQ (Redis-based)
6. **Payment Integration**: Stripe + M-Pesa Daraja API (dual providers)

**Important Decisions (Shape Architecture):**

These significantly impact development experience and system behavior:

7. **Component Library**: shadcn/ui (copy-paste, Radix UI primitives)
8. **Form Handling**: React Hook Form + Zod validation
9. **Specialized UI**: wavesurfer.js (audio), Tiptap (rich text editor)
10. **Session Storage**: Redis (supports instant revocation for MFA users)
11. **Caching Strategy**: Redis (sessions, tier levels, metrics, rate limiting)
12. **Migration Strategy**: Prisma Migrate (standard workflow)

**Deferred Decisions (Post-MVP):**

Not required for initial launch, can be addressed based on actual usage patterns:

- API documentation tooling (OpenAPI/Swagger) - defer until API stabilizes
- Advanced monitoring/observability (Datadog, New Relic) - start with basic Railway metrics
- CI/CD automation - start with manual Railway deployments, automate when team grows
- Performance profiling tools - defer until real load testing reveals bottlenecks

---

### Data Architecture

**Database Provider: Railway PostgreSQL 15+**

- **Version**: PostgreSQL 15.x or later (required for Row-Level Security features)
- **Provider**: Railway managed PostgreSQL
- **Rationale**:
  - Single platform consistency (Railway hosts app + database + Redis)
  - No vendor lock-in (standard PostgreSQL, can migrate to any provider)
  - Full control over RLS policies without abstraction layers
  - Cost-effective (~$10-20/month at launch scale vs. Supabase ~$25/month)
- **Affects**: All data persistence, RLS implementation, role isolation enforcement
- **Provided by Starter**: No (manual setup required)

**ORM: Prisma 5.x**

- **Version**: Prisma 5.x (latest stable)
- **Rationale**:
  - Type-safe database client generated from schema
  - Excellent PostgreSQL support including RLS
  - Migration system (`prisma migrate`) handles schema evolution
  - Integrates seamlessly with Next.js and TypeScript strict mode
- **Affects**: All database queries, schema management, type safety across application
- **Provided by Starter**: No (manual setup required)

**Migration Strategy: Prisma Migrate**

- **Approach**: Schema-first migrations with Prisma
- **Development**: `npx prisma migrate dev --name <descriptive-name>`
- **Production**: `npx prisma migrate deploy` (part of deployment pipeline)
- **Rationale**: Standard Prisma workflow, version-controlled migrations, rollback capability
- **Affects**: Database schema evolution, deployment process
- **Provided by Starter**: No (manual setup required)

**Caching Strategy: Redis**

- **Provider**: Railway Redis (managed instance)
- **Cache Targets**:
  1. **Session Storage**: NextAuth.js sessions (24hr TTL client/creator, 8hr admin/QA) - enables instant revocation for MFA logout
  2. **Creator Tier Levels**: User tier assignments (1hr TTL, invalidate on tier change) - reduces database load for frequent tier checks
  3. **Dashboard Metrics**: Task counts, queue sizes (5min TTL) - improves dashboard performance
  4. **Rate Limiting**: API throttling counters (1min sliding window) - protects against abuse
- **Rationale**:
  - Already using Redis for Socket.io pub/sub coordination
  - Single Redis instance serves multiple purposes (cost-effective)
  - Sub-millisecond response times for high-frequency reads
- **Affects**: Session management, performance optimization, rate limiting
- **Provided by Starter**: No (manual setup required)

---

### Authentication & Security

**Authentication: NextAuth.js v5.0.0-beta**

- **Version**: NextAuth.js v5 (required for Next.js 14 App Router compatibility)
- **Provider**: Credentials provider (email/password) with custom role-based callbacks
- **Session Strategy**: JWT tokens (stateless) with Redis session storage
- **Rationale**:
  - v5 is production-ready for Next.js 14 App Router (v4 incompatible)
  - JWT enables stateless authentication with server-side session revocation via Redis
  - Custom callbacks allow role injection into token claims for middleware enforcement
  - Credentials provider gives full control over role isolation logic
- **Affects**: All authentication flows, middleware, route protection
- **Provided by Starter**: No (manual setup required)

**Multi-Factor Authentication (MFA): TOTP**

- **Implementation**: Time-based One-Time Password using `@auth/core` TOTP adapter
- **Required For**: Admin and QA Editor roles only (not client/creator)
- **Rationale**:
  - Industry-standard MFA approach (Google Authenticator, Authy compatible)
  - No SMS costs or dependencies
  - Meets security requirements for privileged roles
- **Affects**: Admin/QA login flows, session management
- **Provided by Starter**: No (manual setup required)

**Session Storage: Redis**

- **Strategy**: JWT tokens with Redis-backed session store for revocation
- **TTL**: 24 hours (client/creator), 8 hours (admin/QA) - shorter for privileged roles
- **Rationale**:
  - Instant session revocation capability (critical for MFA logout, admin demotion)
  - JWT provides stateless auth for API routes
  - Redis backing enables "logout everywhere" functionality
- **Affects**: Session expiry, logout flows, security incident response
- **Provided by Starter**: No (manual setup required)

**Role Isolation Enforcement: 3-Layer Architecture**

- **Layer 1 - Route Groups**: `/app/(auth)`, `/app/(client)`, `/app/(creator)`, `/app/(editor)`, `/app/(admin)`
- **Layer 2 - Middleware**: Server-side role validation on every request, JWT token inspection
- **Layer 3 - Database RLS**: PostgreSQL Row-Level Security policies preventing data leakage
- **Rationale**: Defense in depth - each layer independently enforces role isolation
- **Affects**: All application routes, security posture, role-based access control
- **Provided by Starter**: No (custom implementation required)

---

### API & Communication Patterns

**API Design: REST with Next.js API Routes + Server Actions**

- **Approach**:
  - **Server Actions** for data mutations (create, update, delete) - type-safe, colocated with components
  - **API Routes** for webhooks and external integrations (M-Pesa, Stripe, AssemblyAI callbacks)
- **Rationale**:
  - Server Actions provide type safety and simpler data flow for internal operations
  - REST API routes required for webhook handlers (external systems call these endpoints)
  - No tRPC needed - doesn't support webhook patterns, adds unnecessary complexity
- **Affects**: Data mutation patterns, webhook handling, external integrations
- **Provided by Starter**: Partially (API routes structure, no Server Actions patterns)

**Error Handling: Custom ApiResponse<T> Pattern**

- **Pattern**: All Server Actions and API routes return `ApiResponse<T>` type
- **Structure**: `{ success: boolean, data?: T, error?: { code: string, message: string } }`
- **Rationale**:
  - Consistent error handling across all data operations
  - Type-safe error responses on client
  - Enables centralized error logging and monitoring
- **Affects**: All Server Actions, all API routes, client-side error handling
- **Provided by Starter**: No (custom pattern, must be implemented)

**API Documentation: Deferred (Post-MVP)**

- **Decision**: Defer OpenAPI/Swagger until API stabilizes
- **Rationale**: Early-stage API will change frequently, documentation would require constant updates
- **Timeline**: Add after MVP launch when API patterns solidify
- **Affects**: External developer experience (not critical for launch - internal team only)

**Rate Limiting: Redis-Based Sliding Window**

- **Implementation**: Redis counters with sliding window algorithm
- **Limits**: TBD per endpoint (e.g., 100 req/min for task claiming, 1000 req/min for dashboards)
- **Rationale**: Protects against abuse, prevents accidental DoS from buggy clients
- **Affects**: API endpoints, external webhook receivers
- **Provided by Starter**: No (manual implementation required)

---

### Frontend Architecture

**State Management: TanStack Query v5 + Zustand**

- **Server State**: TanStack Query v5 (formerly React Query)
  - Handles all server data fetching, caching, synchronization
  - Optimistic updates for instant UI feedback
  - Automatic background refetching and cache invalidation
  - **Affects**: All server data interactions, performance, UX responsiveness

- **UI State**: Zustand 4.x
  - Lightweight client-side state (modals, form wizards, UI preferences)
  - Simple API, minimal boilerplate compared to Redux
  - **Affects**: UI state management, component communication

- **Rationale**: Clear boundaries - TanStack Query owns server state, Zustand owns UI state. No overlap, no confusion.
- **Provided by Starter**: No (manual setup required)

**Component Library: shadcn/ui**

- **Approach**: Copy-paste components built on Radix UI primitives
- **Rationale**:
  - You own the code (no hidden npm dependency updates breaking production)
  - Fully customizable (perfect for specialized UX like rubric scoring forms)
  - Tailwind-native (matches styling approach)
  - Accessible by default (Radix UI compliance)
  - No bundle bloat (only include components you use)
- **Affects**: UI component development, accessibility, customization flexibility
- **Provided by Starter**: No (manual setup required)

**Form Handling: React Hook Form + Zod**

- **Library**: React Hook Form (latest stable)
- **Validation**: Zod runtime validation schemas
- **Rationale**:
  - Excellent performance (uncontrolled components, minimal re-renders)
  - Type-safe form validation (Zod schemas generate TypeScript types)
  - Perfect for complex forms (rubric scoring with 6 dimensions, nested fields)
  - Integrates seamlessly with shadcn/ui components
- **Affects**: All forms (login, task submission, rubric scoring, admin operations)
- **Provided by Starter**: No (manual setup required)

**Specialized UI Libraries:**

1. **Audio Player: wavesurfer.js**
   - **Version**: Latest stable (15K+ GitHub stars)
   - **Rationale**: Industry-standard waveform visualization, works with S3 streaming, variable speed playback, keyboard shortcuts
   - **Affects**: Creator workspace audio playback experience

2. **Rich Text Editor: Tiptap**
   - **Version**: Latest stable
   - **Rationale**: Modern, extensible, better DX than Lexical, block-based architecture matches requirements
   - **Affects**: Creator content editing, QA inline comments, admin notes

3. **Waveform Visualization: wavesurfer.js (built-in)**
   - **Rationale**: wavesurfer.js provides waveform rendering out of box
   - **Affects**: Creator workspace visual feedback during audio playback

- **Provided by Starter**: No (manual integration required)

---

### Infrastructure & Deployment

**Hosting: Railway**

- **Platform**: Railway (traditional Node.js server deployment)
- **Rationale**:
  - **No serverless timeouts** (critical for transcription jobs, webhook processing)
  - **WebSocket-friendly** (Socket.io works without complex multi-instance coordination hacks)
  - **Background job support** (BullMQ runs on same server instances)
  - **Predictable costs** (~$200-500/month at Year 1 scale vs. Vercel bandwidth overages)
  - **Horizontal scaling** (can add instances as traffic grows)
- **Affects**: Deployment model, scaling strategy, real-time architecture
- **Provided by Starter**: No (deployment config required)

**Real-Time: Socket.io 4.x + Redis Adapter**

- **Version**: Socket.io 4.x
- **Coordination**: Redis pub/sub adapter for multi-instance support
- **Fallback**: Polling every 5s if WebSocket connection drops
- **Rationale**:
  - Proven real-time solution (industry standard)
  - Redis adapter enables horizontal scaling (multiple Railway instances share state)
  - Graceful degradation maintains functionality if WebSocket fails
  - <5 second update requirement met with WebSocket, graceful fallback to polling
- **Affects**: Task status updates, real-time dashboards, collaborative features
- **Provided by Starter**: No (manual setup required)

**Background Jobs: BullMQ**

- **Library**: BullMQ (Redis-based job queue)
- **Use Cases**:
  - Audio transcription processing (AssemblyAI/Whisper API calls)
  - Weekly creator payout batch processing (Stripe + M-Pesa)
  - Data lifecycle cleanup (7-day audio, 30-day transcripts, 90-day deliverables)
  - Task timeout enforcement (24hr task claims, 4hr QA reviews)
  - Fraud detection pattern analysis (background processing)
- **Rationale**:
  - Built on Redis (already using for Socket.io and caching)
  - Supports scheduled jobs, retries, priority queues, job dependencies
  - Production-ready (used by Vercel, Netflix, others)
  - Works perfectly with Railway traditional deployment (no serverless timeout limits)
- **Affects**: Async job processing, reliability, system resilience
- **Provided by Starter**: No (manual setup required)

**File Storage: AWS S3**

- **Provider**: Amazon S3
- **Lifecycle Policy**: Auto-delete audio files after 7 days (minimize storage costs)
- **CDN**: CloudFront CDN for global audio streaming
- **Rationale**:
  - Industry standard for file storage (cheapest, most reliable)
  - Lifecycle policies automate compliance (7-day retention)
  - CloudFront CDN provides <100ms global latency
  - Can migrate to Cloudflare R2 or Google Cloud Storage if needed (S3-compatible APIs)
- **Affects**: Audio file storage, streaming performance, compliance automation
- **Provided by Starter**: No (manual SDK integration required)

**CI/CD: Deferred (Manual Railway Deployments)**

- **Decision**: Start with manual Railway deployments via GitHub integration
- **Rationale**: Early-stage velocity > automation overhead. Railway GitHub integration provides auto-deploy on push.
- **Timeline**: Add GitHub Actions CI/CD once team grows or deployment frequency increases
- **Affects**: Deployment speed, testing automation (defer until needed)
- **Provided by Starter**: No

**Monitoring & Logging: Railway Built-In (MVP), Upgrade Later**

- **Decision**: Start with Railway's built-in metrics and logs
- **Timeline**: Upgrade to Datadog/New Relic/Sentry when revenue supports cost (~$100-300/month)
- **Rationale**: Railway provides basic observability for free. Advanced monitoring is important but not launch-blocking.
- **Affects**: Debugging capability, performance insights (adequate for MVP)
- **Provided by Starter**: No

---

### Decision Impact Analysis

**Implementation Sequence (Recommended Order):**

1. **Story 1.1**: Initialize Next.js project with create-next-app
2. **Story 1.2**: Set up Railway PostgreSQL + Prisma ORM + initial schema
3. **Story 1.3**: Configure NextAuth.js v5 with 4-role system + JWT + Redis sessions
4. **Story 1.4**: Implement route groups for role isolation `(auth)`, `(client)`, `(creator)`, `(editor)`, `(admin)`
5. **Story 1.5**: Set up middleware for role-based route protection
6. **Story 1.6**: Implement PostgreSQL Row-Level Security policies
7. **Story 1.7**: Configure TanStack Query + Zustand state management
8. **Story 1.8**: Set up Socket.io + Redis adapter for real-time updates
9. **Story 1.9**: Configure BullMQ job queue infrastructure
10. **Story 1.10**: Integrate Stripe + M-Pesa SDKs for payment processing
11. **Story 1.11**: Integrate AssemblyAI + Whisper APIs for transcription
12. **Story 1.12**: Set up S3 SDK + CloudFront CDN for audio storage
13. **Story 2.x+**: Begin feature implementation (task management, creator workspace, QA interface, admin operations)

**Cross-Component Dependencies:**

- **Authentication ↔ Role Isolation**: NextAuth JWT claims drive middleware role checks and RLS policies
- **Redis ↔ Real-Time + Caching + Sessions + Jobs**: Single Redis instance serves Socket.io pub/sub, session storage, caching layer, and BullMQ queue
- **Prisma ↔ RLS ↔ Role Isolation**: Database schema must include role columns for RLS policies to enforce isolation
- **TanStack Query ↔ Socket.io**: Real-time WebSocket events trigger TanStack Query cache invalidations for instant UI updates
- **BullMQ ↔ Transcription + Payouts + Cleanup**: All async operations (transcription, payments, lifecycle jobs) flow through BullMQ for reliability
- **S3 ↔ Lifecycle Automation**: S3 object lifecycle policies + BullMQ scheduled jobs coordinate 7-day audio deletion

---
