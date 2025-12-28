# Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:** 47 areas where AI agents could make different choices without explicit guidance.

These patterns ensure multiple AI agents write compatible, consistent code that works together seamlessly across all implementation stories.

---

### Naming Patterns

#### Database Naming Conventions (Prisma Schema)

**Table Names: PascalCase**
- ✅ `Task`, `User`, `TaskSubmission`, `QaReview`
- ❌ `tasks`, `task_submissions`, `qa_review`
- **Rationale**: Prisma convention, generates clean TypeScript types (`Prisma.Task` not `Prisma.tasks`)

**Column Names: camelCase**
- ✅ `createdAt`, `userId`, `taskStatus`, `tierLevel`
- ❌ `created_at`, `user_id`, `task_status`, `tier_level`
- **Rationale**: TypeScript convention, no `@map` directives needed, cleaner queries

**Foreign Keys: Explicit Pattern**
- ✅ `creatorId String` + `creator User @relation(...)`
- ❌ Implicit relations without explicit ID field
- **Rationale**: Makes ID fields visible in queries, explicit is better than implicit

**Enums: SCREAMING_SNAKE_CASE**
- ✅ `enum TaskStatus { AVAILABLE, CLAIMED, IN_PROGRESS, SUBMITTED }`
- ❌ `enum TaskStatus { Available, Claimed, InProgress }`
- **Rationale**: Industry standard for enums, visual distinction from types

**Index Naming: idx_{table}_{columns}**
- ✅ `@@index([creatorId, status], name: "idx_task_creator_status")`
- ❌ Random names like `task_index_1`
- **Rationale**: Self-documenting, easy to identify purpose

**Example Prisma Schema:**
```prisma
model Task {
  id            String      @id @default(cuid())
  title         String
  status        TaskStatus  @default(AVAILABLE)
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  creatorId     String?
  creator       User?       @relation("CreatedTasks", fields: [creatorId], references: [id])

  uploaderId    String
  uploader      User        @relation("UploadedTasks", fields: [uploaderId], references: [id])

  @@index([creatorId, status], name: "idx_task_creator_status")
  @@index([uploaderId], name: "idx_task_uploader")
}

enum TaskStatus {
  AVAILABLE
  CLAIMED
  IN_PROGRESS
  SUBMITTED
  IN_QA_REVIEW
  APPROVED
  REJECTED
}
```

---

#### API Naming Conventions

**REST Endpoints: Plural Nouns, kebab-case**
- ✅ `/api/tasks`, `/api/qa-reviews`, `/api/payout-batches`
- ❌ `/api/task`, `/api/qaReviews`, `/api/payout_batches`
- **Rationale**: RESTful convention, URL-friendly

**Dynamic Routes: [id] or [descriptiveId]**
- ✅ `/api/tasks/[taskId]`, `/api/users/[userId]/submissions`
- ❌ `/api/tasks/[id]` (ambiguous in nested routes)
- **Rationale**: Descriptive params prevent confusion in complex routes

**Server Action Naming: verbNoun**
- ✅ `createTask()`, `claimTask()`, `submitTaskDeliverable()`, `approveQaReview()`
- ❌ `task_create()`, `taskClaim()`, `submit()`
- **Rationale**: TypeScript convention, verb-first is action-oriented

**Query Parameters: camelCase**
- ✅ `?userId=123&tierLevel=3&sortBy=createdAt`
- ❌ `?user_id=123&tier_level=3&sort_by=created_at`
- **Rationale**: Consistency with TypeScript code

**Webhook Routes: /api/webhooks/{provider}**
- ✅ `/api/webhooks/stripe`, `/api/webhooks/mpesa`, `/api/webhooks/assemblyai`
- ❌ `/api/stripe-webhook`, `/api/mpesa_callback`
- **Rationale**: Grouped under `/webhooks`, easy to apply rate limiting

---

#### Code Naming Conventions

**React Components: PascalCase**
- ✅ `TaskCard.tsx`, `CreatorDashboard.tsx`, `QaReviewForm.tsx`
- ❌ `task-card.tsx`, `creatorDashboard.tsx`, `qa_review_form.tsx`
- **Rationale**: React convention, matches component class name

**Component Files: Match Component Name**
- ✅ `TaskCard.tsx` exports `export function TaskCard()`
- ❌ `task-card.tsx` exports `export function TaskCard()`
- **Rationale**: One-to-one file-to-component mapping prevents confusion

**Utility Functions: camelCase**
- ✅ `formatCurrency()`, `calculateTierMultiplier()`, `validateAudioFile()`
- ❌ `format_currency()`, `FormatCurrency()`, `validate-audio-file()`
- **Rationale**: TypeScript convention for functions

**Constants: SCREAMING_SNAKE_CASE**
- ✅ `MAX_AUDIO_SIZE_MB`, `TASK_CLAIM_TIMEOUT_HOURS`, `QA_REVIEW_SLA_HOURS`
- ❌ `maxAudioSizeMb`, `taskClaimTimeoutHours`, `qaReviewSlaHours`
- **Rationale**: Visual distinction, indicates immutable values

**Type Definitions: PascalCase**
- ✅ `type ApiResponse<T>`, `interface TaskWithRelations`, `type CreateTaskInput`
- ❌ `type apiResponse<T>`, `interface taskWithRelations`
- **Rationale**: TypeScript convention for types/interfaces

**File Naming for Utilities: kebab-case**
- ✅ `format-currency.ts`, `calculate-tier-multiplier.ts`, `validate-audio.ts`
- ❌ `formatCurrency.ts`, `calculate_tier_multiplier.ts`, `ValidateAudio.ts`
- **Rationale**: URL-friendly, distinct from component files

---

### Structure Patterns

#### Project Organization

**Route Groups by Role:**
```
app/
├── (auth)/              # Public auth pages (login, register)
├── (client)/            # Client dashboard routes
├── (creator)/           # Creator workspace routes
├── (editor)/            # QA Editor interface routes
├── (admin)/             # Admin panel routes
└── api/
    ├── tasks/           # Task API endpoints
    ├── webhooks/        # External webhook handlers
    └── cron/            # Scheduled job endpoints (Railway Cron)
```

**Component Organization: By Feature**
```
components/
├── tasks/
│   ├── TaskCard.tsx
│   ├── TaskList.tsx
│   └── TaskClaimButton.tsx
├── creator/
│   ├── AudioPlayer.tsx
│   ├── WaveformVisualization.tsx
│   └── ContentEditor.tsx
├── qa/
│   ├── RubricScoreForm.tsx
│   └── ReviewPanel.tsx
└── ui/                  # shadcn/ui components
    ├── button.tsx
    ├── dialog.tsx
    └── form.tsx
```

**Test Location: Co-located**
- ✅ `TaskCard.tsx` + `TaskCard.test.tsx` in same directory
- ❌ `__tests__/TaskCard.test.tsx` in separate folder
- **Rationale**: Easy to find tests, component + test move together

**Utilities Organization:**
```
lib/
├── api/
│   ├── api-response.ts      # ApiResponse<T> pattern
│   └── error-codes.ts       # Centralized error code constants
├── auth/
│   ├── session.ts           # Session helpers
│   └── role-check.ts        # Role validation utilities
├── db/
│   ├── prisma.ts            # Prisma client singleton
│   └── queries/             # Reusable query functions
│       ├── tasks.ts
│       └── users.ts
├── validators/
│   ├── task-schema.ts       # Zod schemas
│   └── user-schema.ts
└── utils/
    ├── format-currency.ts
    └── calculate-tier-multiplier.ts
```

**Configuration Files: Root Level**
- ✅ `.env.local`, `tsconfig.json`, `tailwind.config.ts`, `prisma/schema.prisma`
- **Rationale**: Standard Next.js convention, tooling expects root-level configs

---

### Format Patterns

#### API Response Format

**All Server Actions & API Routes: ApiResponse<T>**

```typescript
// lib/api/api-response.ts
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: Record<string, any>
  }
}

// Usage in Server Action
export async function claimTask(taskId: string): Promise<ApiResponse<Task>> {
  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { status: 'CLAIMED', claimedAt: new Date() }
    })
    return { success: true, data: task }
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'TASK_CLAIM_FAILED',
        message: 'Failed to claim task',
        details: { taskId }
      }
    }
  }
}
```

**Error Codes: SCREAMING_SNAKE_CASE**
- ✅ `TASK_CLAIM_FAILED`, `UNAUTHORIZED_ROLE`, `VALIDATION_ERROR`, `PAYMENT_PROCESSING_FAILED`
- ❌ `taskClaimFailed`, `error-unauthorized`, `ValidationError`
- **Rationale**: Consistent across all error responses, easy to grep

**Date/Time Format: ISO 8601 Strings**
- ✅ `"2025-12-27T14:30:00.000Z"` (ISO string)
- ❌ Unix timestamps `1735308600` or custom formats
- **Rationale**: JSON-friendly, timezone-aware, TypeScript Date parsing

**Boolean Representation: true/false**
- ✅ `{ isActive: true }`
- ❌ `{ isActive: 1 }` or `{ isActive: "true" }`
- **Rationale**: JSON native booleans, type-safe

**Null Handling: null for Missing Values**
- ✅ `{ creatorId: null }` (task not claimed)
- ❌ `{ creatorId: undefined }` or omitting field
- **Rationale**: JSON serialization consistency, explicit null intent

---

### Communication Patterns

#### Real-Time Event Naming (Socket.io)

**Event Format: domain:action**
- ✅ `task:claimed`, `task:submitted`, `qa:approved`, `payout:processed`
- ❌ `taskClaimed`, `TASK_CLAIMED`, `task.claimed`
- **Rationale**: Namespace-like, easy to filter by domain

**Event Payload Structure:**
```typescript
// All events follow this pattern
type SocketEvent<T> = {
  event: string            // e.g., "task:claimed"
  timestamp: string        // ISO 8601
  userId: string           // Actor who triggered event
  data: T                  // Event-specific payload
}

// Example: Task claimed event
socket.emit('task:claimed', {
  event: 'task:claimed',
  timestamp: new Date().toISOString(),
  userId: session.user.id,
  data: {
    taskId: task.id,
    creatorId: task.creatorId,
    claimedAt: task.claimedAt
  }
})
```

**Room Naming: role:{userId}**
- ✅ `creator:user_123`, `editor:user_456`, `admin:user_789`
- ❌ `user-123-creator`, `room_creator_123`
- **Rationale**: Easy to join/leave rooms by role, consistent format

---

#### State Management Patterns (TanStack Query + Zustand)

**TanStack Query Key Structure: [domain, ...identifiers]**
```typescript
// Query keys
['tasks', 'available']                    // All available tasks
['tasks', taskId]                         // Single task by ID
['tasks', 'creator', userId]              // Tasks for specific creator
['qa-reviews', 'pending']                 // Pending QA reviews
['users', userId, 'submissions']          // User's submissions

// Mutation naming
useMutation({ mutationFn: claimTask, mutationKey: ['tasks', 'claim'] })
```

**Cache Invalidation Pattern:**
```typescript
// After task claimed, invalidate all task lists
await queryClient.invalidateQueries({ queryKey: ['tasks'] })

// After submission, invalidate specific task + creator's task list
await queryClient.invalidateQueries({ queryKey: ['tasks', taskId] })
await queryClient.invalidateQueries({ queryKey: ['tasks', 'creator', userId] })
```

**Zustand Store Organization: Feature Stores**
```typescript
// stores/ui-store.ts
export const useUiStore = create<UiState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}))

// stores/audio-player-store.ts
export const useAudioPlayerStore = create<AudioPlayerState>((set) => ({
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  seek: (time: number) => set({ currentTime: time })
}))
```

---

### Process Patterns

#### Error Handling

**Server Action Error Pattern:**
```typescript
export async function createTask(input: CreateTaskInput): Promise<ApiResponse<Task>> {
  try {
    // Validate input with Zod
    const validated = createTaskSchema.parse(input)

    // Business logic
    const task = await prisma.task.create({ data: validated })

    return { success: true, data: task }
  } catch (error) {
    // Zod validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input data',
          details: error.errors
        }
      }
    }

    // Prisma errors (unique constraint, foreign key, etc.)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        error: {
          code: 'DATABASE_ERROR',
          message: 'Database operation failed',
          details: { prismaCode: error.code }
        }
      }
    }

    // Generic fallback
    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred'
      }
    }
  }
}
```

**Client Error Display:**
```typescript
// Use toast for non-blocking errors
const { mutate } = useMutation({ mutationFn: claimTask })

mutate(taskId, {
  onError: (error) => {
    toast.error(error.message || 'Failed to claim task')
  }
})

// Use Error Boundary for component-level crashes
// app/error.tsx handles unexpected rendering errors
```

**Logging: Structured with Context**
```typescript
// lib/logger.ts
export function logError(error: Error, context: Record<string, any>) {
  console.error({
    timestamp: new Date().toISOString(),
    level: 'ERROR',
    message: error.message,
    stack: error.stack,
    context
  })
}

// Usage
logError(error, { userId, taskId, action: 'claimTask' })
```

---

#### Loading State Patterns

**Component Loading States: isPending from TanStack Query**
```typescript
function TaskList() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['tasks', 'available'],
    queryFn: fetchAvailableTasks
  })

  if (isPending) return <LoadingSpinner />
  if (isError) return <ErrorMessage />

  return <div>{/* render tasks */}</div>
}
```

**Optimistic Updates:**
```typescript
const { mutate } = useMutation({
  mutationFn: claimTask,
  onMutate: async (taskId) => {
    // Cancel ongoing queries
    await queryClient.cancelQueries({ queryKey: ['tasks', taskId] })

    // Snapshot previous value
    const previousTask = queryClient.getQueryData(['tasks', taskId])

    // Optimistically update UI
    queryClient.setQueryData(['tasks', taskId], (old) => ({
      ...old,
      status: 'CLAIMED'
    }))

    return { previousTask }
  },
  onError: (_err, _taskId, context) => {
    // Rollback on error
    queryClient.setQueryData(['tasks', _taskId], context?.previousTask)
  }
})
```

**Global Loading State: Zustand**
```typescript
// For app-wide loading (e.g., initial auth check)
export const useGlobalStore = create<GlobalState>((set) => ({
  isInitializing: true,
  setInitializing: (value: boolean) => set({ isInitializing: value })
}))
```

---

### Enforcement Guidelines

**All AI Agents MUST:**

1. **Return `ApiResponse<T>` from ALL Server Actions and API Routes** - No raw throws, no direct returns without wrapper
2. **Use Prisma schema naming conventions** - PascalCase tables, camelCase columns, explicit foreign keys
3. **Follow Socket.io event naming** - `domain:action` format, structured event payloads
4. **Co-locate tests with components** - `Component.tsx` + `Component.test.tsx` in same folder
5. **Use TanStack Query for server state ONLY** - Never use Zustand for server data
6. **Structure query keys as arrays** - `['domain', ...identifiers]` format
7. **Handle errors with specific codes** - Use centralized error codes, never generic "Error"
8. **Validate inputs with Zod** - All Server Action inputs validated before business logic
9. **Log errors with structured context** - Include userId, action, relevant IDs
10. **Use optimistic updates for instant UX** - TanStack Query mutations with `onMutate` rollback

---

### Pattern Examples

**✅ Good Example: Server Action with Full Pattern Compliance**
```typescript
// app/actions/claim-task.ts
import { z } from 'zod'
import { prisma } from '@/lib/db/prisma'
import type { ApiResponse } from '@/lib/api/api-response'
import { logError } from '@/lib/logger'

const claimTaskSchema = z.object({
  taskId: z.string().cuid(),
  userId: z.string().cuid()
})

export async function claimTask(
  input: z.infer<typeof claimTaskSchema>
): Promise<ApiResponse<Task>> {
  try {
    // Validate input
    const { taskId, userId } = claimTaskSchema.parse(input)

    // Business logic with transaction
    const task = await prisma.task.update({
      where: {
        id: taskId,
        status: 'AVAILABLE'  // Optimistic locking
      },
      data: {
        status: 'CLAIMED',
        creatorId: userId,
        claimedAt: new Date()
      }
    })

    return { success: true, data: task }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input',
          details: error.errors
        }
      }
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return {
          success: false,
          error: {
            code: 'TASK_ALREADY_CLAIMED',
            message: 'Task is no longer available'
          }
        }
      }
    }

    logError(error as Error, { taskId: input.taskId, userId: input.userId, action: 'claimTask' })

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to claim task'
      }
    }
  }
}
```

**❌ Anti-Pattern: What to Avoid**
```typescript
// DON'T: Raw throws, no validation, no error handling
export async function claimTask(taskId: string) {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: { status: 'claimed' }  // Wrong: should be SCREAMING_SNAKE_CASE enum
  })
  return task  // Wrong: should return ApiResponse<Task>
}

// DON'T: Inconsistent naming
const claim_task = async (task_id) => { /* ... */ }  // Wrong: snake_case

// DON'T: Using Zustand for server state
const useTaskStore = create((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const tasks = await fetch('/api/tasks')
    set({ tasks })  // Wrong: use TanStack Query
  }
}))
```

---

### Pattern Enforcement Strategy

**Code Review Checklist:**
- [ ] All Server Actions return `ApiResponse<T>`
- [ ] Prisma schema follows naming conventions
- [ ] Error codes are centralized constants
- [ ] Tests are co-located with components
- [ ] TanStack Query used for all server state
- [ ] Socket.io events follow `domain:action` format
- [ ] Zod validation on all inputs
- [ ] Structured error logging with context

**Automated Linting (ESLint Rules):**
- Enforce naming conventions (eslint-plugin-naming-convention)
- Require explicit return types on Server Actions
- Prevent Zustand usage for data fetching patterns

**Pattern Violation Response:**
- Document violation in code review
- Update implementation to match patterns
- If pattern is insufficient, propose pattern update via architecture amendment (not per-story deviation)

---
