# Project Structure & Boundaries

### Complete Project Directory Structure

```
jabur/
├── README.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .env.local
├── .env.example
├── .gitignore
├── .eslintrc.json
├── prettier.config.js
├── docker-compose.yml
├── Dockerfile
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy-preview.yml
│       └── deploy-production.yml
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│       └── [timestamp]_[description]/
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── logos/
│   │   ├── placeholders/
│   │   └── icons/
│   └── assets/
├── src/
│   ├── middleware.ts
│   ├── instrumentation.ts
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── signup/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── verify-email/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── forgot-password/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   └── reset-password/
│   │   │       ├── page.tsx
│   │   │       └── page.test.tsx
│   │   ├── (client)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── tasks/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── [taskId]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── wallet/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── withdraw/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── history/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── notifications/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   └── settings/
│   │   │       ├── page.tsx
│   │   │       └── page.test.tsx
│   │   ├── (creator)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   ├── new/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── page.test.tsx
│   │   │   │   └── [projectId]/
│   │   │   │       ├── page.tsx
│   │   │   │       ├── page.test.tsx
│   │   │   │       ├── edit/
│   │   │   │       │   ├── page.tsx
│   │   │   │       │   └── page.test.tsx
│   │   │   │       └── tasks/
│   │   │   │           ├── page.tsx
│   │   │   │           ├── page.test.tsx
│   │   │   │           └── [taskId]/
│   │   │   │               ├── page.tsx
│   │   │   │               └── page.test.tsx
│   │   │   ├── wallet/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── topup/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── analytics/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   └── settings/
│   │   │       ├── page.tsx
│   │   │       └── page.test.tsx
│   │   ├── (editor)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── queue/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── review/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── [taskId]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── history/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   └── settings/
│   │   │       ├── page.tsx
│   │   │       └── page.test.tsx
│   │   ├── (admin)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   ├── users/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── [userId]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── [projectId]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── tasks/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   └── [taskId]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── financial/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── page.test.tsx
│   │   │   │   ├── comped/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── page.test.tsx
│   │   │   │   ├── transactions/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── page.test.tsx
│   │   │   │   └── reports/
│   │   │   │       ├── page.tsx
│   │   │   │       └── page.test.tsx
│   │   │   ├── analytics/
│   │   │   │   ├── page.tsx
│   │   │   │   └── page.test.tsx
│   │   │   └── settings/
│   │   │       ├── page.tsx
│   │   │       ├── page.test.tsx
│   │   │       ├── platform/
│   │   │       │   ├── page.tsx
│   │   │       │   └── page.test.tsx
│   │   │       └── notifications/
│   │   │           ├── page.tsx
│   │   │           └── page.test.tsx
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts
│   │       ├── webhooks/
│   │       │   ├── stripe/
│   │       │   │   └── route.ts
│   │       │   └── resend/
│   │       │       └── route.ts
│   │       └── socket/
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── button.test.tsx
│   │   │   ├── card.tsx
│   │   │   ├── card.test.tsx
│   │   │   ├── input.tsx
│   │   │   ├── input.test.tsx
│   │   │   ├── select.tsx
│   │   │   ├── select.test.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dialog.test.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toast.test.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── badge.test.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── skeleton.test.tsx
│   │   ├── forms/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── LoginForm.test.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   ├── SignupForm.test.tsx
│   │   │   ├── ProjectForm.tsx
│   │   │   ├── ProjectForm.test.tsx
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskForm.test.tsx
│   │   │   ├── WithdrawForm.tsx
│   │   │   ├── WithdrawForm.test.tsx
│   │   │   └── FormField.tsx
│   │   ├── features/
│   │   │   ├── tasks/
│   │   │   │   ├── TaskCard.tsx
│   │   │   │   ├── TaskCard.test.tsx
│   │   │   │   ├── TaskList.tsx
│   │   │   │   ├── TaskList.test.tsx
│   │   │   │   ├── TaskClaimButton.tsx
│   │   │   │   ├── TaskClaimButton.test.tsx
│   │   │   │   ├── TaskSubmitDialog.tsx
│   │   │   │   ├── TaskSubmitDialog.test.tsx
│   │   │   │   ├── TaskStatusBadge.tsx
│   │   │   │   └── TaskStatusBadge.test.tsx
│   │   │   ├── projects/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectCard.test.tsx
│   │   │   │   ├── ProjectList.tsx
│   │   │   │   ├── ProjectList.test.tsx
│   │   │   │   ├── ProjectStats.tsx
│   │   │   │   └── ProjectStats.test.tsx
│   │   │   ├── wallet/
│   │   │   │   ├── WalletBalance.tsx
│   │   │   │   ├── WalletBalance.test.tsx
│   │   │   │   ├── TransactionHistory.tsx
│   │   │   │   ├── TransactionHistory.test.tsx
│   │   │   │   ├── WithdrawDialog.tsx
│   │   │   │   └── WithdrawDialog.test.tsx
│   │   │   ├── notifications/
│   │   │   │   ├── NotificationBell.tsx
│   │   │   │   ├── NotificationBell.test.tsx
│   │   │   │   ├── NotificationList.tsx
│   │   │   │   ├── NotificationList.test.tsx
│   │   │   │   ├── NotificationItem.tsx
│   │   │   │   └── NotificationItem.test.tsx
│   │   │   ├── review/
│   │   │   │   ├── ReviewForm.tsx
│   │   │   │   ├── ReviewForm.test.tsx
│   │   │   │   ├── ReviewHistory.tsx
│   │   │   │   ├── ReviewHistory.test.tsx
│   │   │   │   ├── ContentViewer.tsx
│   │   │   │   └── ContentViewer.test.tsx
│   │   │   └── admin/
│   │   │       ├── UserManagementTable.tsx
│   │   │       ├── UserManagementTable.test.tsx
│   │   │       ├── CompedTaskManager.tsx
│   │   │       ├── CompedTaskManager.test.tsx
│   │   │       ├── AnalyticsDashboard.tsx
│   │   │       └── AnalyticsDashboard.test.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.test.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.test.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Sidebar.test.tsx
│   │   │   └── RoleLayout.tsx
│   │   └── providers/
│   │       ├── SessionProvider.tsx
│   │       ├── QueryProvider.tsx
│   │       ├── SocketProvider.tsx
│   │       └── ToastProvider.tsx
│   ├── lib/
│   │   ├── auth/
│   │   │   ├── config.ts
│   │   │   ├── session.ts
│   │   │   ├── permissions.ts
│   │   │   └── index.ts
│   │   ├── db/
│   │   │   ├── prisma.ts
│   │   │   ├── client.ts
│   │   │   └── index.ts
│   │   ├── socket/
│   │   │   ├── server.ts
│   │   │   ├── client.ts
│   │   │   ├── events.ts
│   │   │   └── index.ts
│   │   ├── queue/
│   │   │   ├── config.ts
│   │   │   ├── workers/
│   │   │   │   ├── email.worker.ts
│   │   │   │   ├── notification.worker.ts
│   │   │   │   └── payment.worker.ts
│   │   │   └── index.ts
│   │   ├── email/
│   │   │   ├── client.ts
│   │   │   ├── templates/
│   │   │   │   ├── welcome.tsx
│   │   │   │   ├── task-assigned.tsx
│   │   │   │   ├── task-approved.tsx
│   │   │   │   └── payment-received.tsx
│   │   │   └── index.ts
│   │   ├── payment/
│   │   │   ├── stripe.ts
│   │   │   ├── webhooks.ts
│   │   │   └── index.ts
│   │   ├── upload/
│   │   │   ├── config.ts
│   │   │   ├── cloudinary.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── formatting.ts
│   │   │   ├── validation.ts
│   │   │   ├── errors.ts
│   │   │   ├── logger.ts
│   │   │   └── index.ts
│   │   └── constants/
│   │       ├── routes.ts
│   │       ├── permissions.ts
│   │       ├── errors.ts
│   │       └── config.ts
│   ├── actions/
│   │   ├── auth/
│   │   │   ├── login.ts
│   │   │   ├── signup.ts
│   │   │   ├── logout.ts
│   │   │   └── verify-email.ts
│   │   ├── tasks/
│   │   │   ├── claim-task.ts
│   │   │   ├── submit-task.ts
│   │   │   ├── review-task.ts
│   │   │   └── get-tasks.ts
│   │   ├── projects/
│   │   │   ├── create-project.ts
│   │   │   ├── update-project.ts
│   │   │   ├── delete-project.ts
│   │   │   └── get-projects.ts
│   │   ├── wallet/
│   │   │   ├── request-withdrawal.ts
│   │   │   ├── topup.ts
│   │   │   └── get-balance.ts
│   │   └── notifications/
│   │       ├── mark-read.ts
│   │       ├── mark-all-read.ts
│   │       └── get-notifications.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── task.service.ts
│   │   ├── project.service.ts
│   │   ├── wallet.service.ts
│   │   ├── notification.service.ts
│   │   ├── review.service.ts
│   │   ├── email.service.ts
│   │   └── analytics.service.ts
│   ├── repositories/
│   │   ├── user.repository.ts
│   │   ├── task.repository.ts
│   │   ├── project.repository.ts
│   │   ├── wallet.repository.ts
│   │   ├── transaction.repository.ts
│   │   ├── notification.repository.ts
│   │   └── review.repository.ts
│   ├── validators/
│   │   ├── auth.validators.ts
│   │   ├── task.validators.ts
│   │   ├── project.validators.ts
│   │   ├── wallet.validators.ts
│   │   └── common.validators.ts
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── task.types.ts
│   │   ├── project.types.ts
│   │   ├── wallet.types.ts
│   │   ├── notification.types.ts
│   │   ├── api.types.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useAuth.test.ts
│   │   ├── useTasks.ts
│   │   ├── useTasks.test.ts
│   │   ├── useProjects.ts
│   │   ├── useProjects.test.ts
│   │   ├── useWallet.ts
│   │   ├── useWallet.test.ts
│   │   ├── useNotifications.ts
│   │   ├── useNotifications.test.ts
│   │   ├── useSocket.ts
│   │   └── useSocket.test.ts
│   └── store/
│       ├── auth.store.ts
│       ├── ui.store.ts
│       └── index.ts
└── tests/
    ├── setup.ts
    ├── helpers/
    │   ├── test-utils.tsx
    │   ├── mock-data.ts
    │   └── mock-providers.tsx
    ├── integration/
    │   ├── auth.test.ts
    │   ├── task-workflow.test.ts
    │   ├── project-workflow.test.ts
    │   └── wallet-workflow.test.ts
    └── e2e/
        ├── client-journey.spec.ts
        ├── creator-journey.spec.ts
        ├── editor-journey.spec.ts
        └── admin-journey.spec.ts
```

### Architectural Boundaries

**API Boundaries:**

**Server Actions (Client → Server)**
- Location: `src/actions/`
- Authentication: NextAuth.js session validation in middleware
- Authorization: Role-based permission checks in each action
- Input: Zod validated request objects
- Output: `ApiResponse<T>` wrapper with success/error
- Error Handling: Centralized error mapping to user-friendly codes

**REST API Endpoints (External → Server)**
- Location: `src/app/api/`
- Authentication: NextAuth.js API route protection
- Authorization: API key or session-based
- Rate Limiting: Middleware rate limiter per endpoint
- Input: Request body validation with Zod
- Output: JSON with consistent error format

**Real-time WebSocket (Bidirectional)**
- Location: `src/lib/socket/`
- Authentication: Session token verification on connection
- Events: `domain:action` naming (task:claimed, notification:new)
- Authorization: Per-event permission checks
- Reconnection: Automatic with exponential backoff

**Component Boundaries:**

**Page Components**
- Location: `src/app/(role)/[feature]/page.tsx`
- Responsibility: Data fetching with TanStack Query, layout, routing
- Communication: Server Actions via form actions or mutations
- State: Server state via TanStack Query, UI state via Zustand
- Testing: Co-located `page.test.tsx`

**Feature Components**
- Location: `src/components/features/[domain]/`
- Responsibility: Domain-specific business logic, user interactions
- Communication: Props down, callbacks up, TanStack Query mutations
- State: Local component state, Zustand for cross-component UI state
- Testing: Co-located `[Component].test.tsx`

**UI Components**
- Location: `src/components/ui/`
- Responsibility: Pure presentational, reusable primitives
- Communication: Props only, no data fetching
- State: Internal UI state only (open/closed, hover, etc.)
- Testing: Co-located `[component].test.tsx`

**Service Boundaries:**

**Services Layer**
- Location: `src/services/`
- Responsibility: Business logic orchestration, multi-repository coordination
- Dependencies: Repositories, external APIs, queue jobs
- Error Handling: Domain error throwing (TaskAlreadyClaimedException)
- Testing: Unit tests with mocked repositories

**Repositories Layer**
- Location: `src/repositories/`
- Responsibility: Database CRUD operations, query building
- Dependencies: Prisma Client only
- Error Handling: Prisma error re-throwing with context
- Transactions: Pass Prisma transaction client when needed

**External Service Integration**
- Stripe: `src/lib/payment/stripe.ts`
- Resend: `src/lib/email/client.ts`
- Cloudinary: `src/lib/upload/cloudinary.ts`
- Authentication: NextAuth.js configuration in `src/lib/auth/config.ts`

**Data Boundaries:**

**Database Schema**
- Location: `prisma/schema.prisma`
- Access: Only through repositories
- Migrations: Prisma Migrate with sequential versioning
- Seeding: `prisma/seed.ts` for development data

**Caching Layers**
- TanStack Query: Client-side server state cache (5-minute stale time)
- Railway Redis: Server-side session store, rate limiting, job queue
- No direct cache access from components (use TanStack Query)

**File Storage**
- User Uploads: Cloudinary via `src/lib/upload/`
- Static Assets: `public/` directory
- Temporary Files: Railway ephemeral storage (cleared on deploy)

### Requirements to Structure Mapping

**Epic 1: Account Management (FR Domain 1)**
- Routes: `src/app/(auth)/`
  - Login: `(auth)/login/page.tsx`
  - Signup: `(auth)/signup/page.tsx`
  - Verify Email: `(auth)/verify-email/page.tsx`
  - Password Reset: `(auth)/forgot-password/`, `(auth)/reset-password/`
- Actions: `src/actions/auth/`
- Services: `src/services/auth.service.ts`
- Repository: `src/repositories/user.repository.ts`
- Components: `src/components/forms/LoginForm.tsx`, `SignupForm.tsx`
- Database: `User`, `Account`, `Session` models in Prisma schema

**Epic 2: Creator Workspace (FR Domain 2)**
- Routes: `src/app/(creator)/`
  - Dashboard: `(creator)/dashboard/page.tsx`
  - Projects: `(creator)/projects/`, `(creator)/projects/[projectId]/`
  - New Project: `(creator)/projects/new/page.tsx`
  - Task Management: `(creator)/projects/[projectId]/tasks/`
- Actions: `src/actions/projects/`
- Services: `src/services/project.service.ts`, `task.service.ts`
- Repository: `src/repositories/project.repository.ts`, `task.repository.ts`
- Components: `src/components/features/projects/`, `features/tasks/`
- Database: `Project`, `Task`, `TaskBatch` models

**Epic 3: Task Discovery & Claiming (FR Domain 3)**
- Routes: `src/app/(client)/`
  - Dashboard: `(client)/dashboard/page.tsx`
  - Task Browse: `(client)/tasks/page.tsx`
  - Task Detail: `(client)/tasks/[taskId]/page.tsx`
- Actions: `src/actions/tasks/claim-task.ts`, `submit-task.ts`
- Services: `src/services/task.service.ts`
- Repository: `src/repositories/task.repository.ts`
- Components: `src/components/features/tasks/TaskCard.tsx`, `TaskList.tsx`, `TaskClaimButton.tsx`
- Real-time: Socket.io events `task:claimed`, `task:available`
- Database: `Task`, `TaskClaim` models

**Epic 4: Earnings & Wallet (FR Domain 4)**
- Routes: `src/app/(client)/wallet/`, `src/app/(creator)/wallet/`
  - Client Wallet: `(client)/wallet/page.tsx`, `(client)/wallet/withdraw/`
  - Creator Wallet: `(creator)/wallet/page.tsx`, `(creator)/wallet/topup/`
- Actions: `src/actions/wallet/`
- Services: `src/services/wallet.service.ts`
- Repository: `src/repositories/wallet.repository.ts`, `transaction.repository.ts`
- Components: `src/components/features/wallet/`
- External: Stripe integration via `src/lib/payment/stripe.ts`
- Background Jobs: `src/lib/queue/workers/payment.worker.ts`
- Database: `Wallet`, `Transaction`, `Withdrawal` models

**Epic 5: Quality Assurance (FR Domain 5)**
- Routes: `src/app/(editor)/`
  - Dashboard: `(editor)/dashboard/page.tsx`
  - Queue: `(editor)/queue/page.tsx`
  - Review: `(editor)/review/[taskId]/page.tsx`
  - History: `(editor)/history/page.tsx`
- Actions: `src/actions/tasks/review-task.ts`
- Services: `src/services/review.service.ts`
- Repository: `src/repositories/review.repository.ts`
- Components: `src/components/features/review/`
- Database: `Review`, `ReviewHistory` models

**Epic 6: Notification System (FR Domain 6)**
- Routes: All role layouts
  - Notification Bell: Header component in all layouts
  - Notification Center: `(role)/notifications/page.tsx`
- Actions: `src/actions/notifications/`
- Services: `src/services/notification.service.ts`
- Repository: `src/repositories/notification.repository.ts`
- Components: `src/components/features/notifications/`
- Real-time: Socket.io events `notification:new`
- Background Jobs: `src/lib/queue/workers/notification.worker.ts`
- Database: `Notification` model

**Epic 7: Analytics & Reporting (FR Domain 7)**
- Routes: `src/app/(creator)/analytics/`, `src/app/(admin)/analytics/`
  - Creator Analytics: `(creator)/analytics/page.tsx`
  - Admin Analytics: `(admin)/analytics/page.tsx`
- Services: `src/services/analytics.service.ts`
- Components: `src/components/features/admin/AnalyticsDashboard.tsx`
- Database: Aggregated queries on `Task`, `Transaction`, `Review` models

**Epic 8: Admin Tools (FR Domain 8)**
- Routes: `src/app/(admin)/`
  - Dashboard: `(admin)/dashboard/page.tsx`
  - User Management: `(admin)/users/`, `(admin)/users/[userId]/`
  - Project Oversight: `(admin)/projects/`, `(admin)/projects/[projectId]/`
  - Task Monitoring: `(admin)/tasks/`, `(admin)/tasks/[taskId]/`
  - Settings: `(admin)/settings/platform/`, `(admin)/settings/notifications/`
- Services: All services (admin has full access)
- Components: `src/components/features/admin/`
- Database: All models (admin has full read/write)

**Epic 9: Comped Task Management (FR Domain 9)**
- Routes: `src/app/(admin)/financial/comped/`
  - Comped Task Manager: `(admin)/financial/comped/page.tsx`
  - Transaction Reports: `(admin)/financial/transactions/page.tsx`
- Actions: `src/actions/admin/comp-task.ts` (new)
- Services: `src/services/task.service.ts` (extend with comped logic)
- Repository: `src/repositories/task.repository.ts` (extend with comped queries)
- Components: `src/components/features/admin/CompedTaskManager.tsx`
- Database: `Task.isComped`, `Task.compedBy`, `Task.compReason` fields

### Integration Points

**Internal Communication:**

**Client → Server (Server Actions)**
```typescript
// Example: Client claims a task
// Component: src/components/features/tasks/TaskClaimButton.tsx
const { mutate: claimTask } = useMutation({
  mutationFn: (taskId: string) => claimTaskAction(taskId),
  onSuccess: (response) => {
    if (response.success) {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      socket.emit('task:claimed', { taskId: response.data.id })
    }
  }
})

// Action: src/actions/tasks/claim-task.ts
export async function claimTaskAction(taskId: string): Promise<ApiResponse<Task>> {
  const session = await getServerSession()
  const result = await taskService.claimTask({ taskId, userId: session.user.id })
  return { success: true, data: result }
}

// Service: src/services/task.service.ts
async claimTask({ taskId, userId }: ClaimTaskInput) {
  const task = await taskRepository.findById(taskId)
  // Business logic...
  await taskRepository.update(taskId, { status: 'CLAIMED', claimedBy: userId })
  await notificationService.send({ userId: task.creatorId, type: 'TASK_CLAIMED' })
  return task
}

// Repository: src/repositories/task.repository.ts
async update(id: string, data: Partial<Task>) {
  return prisma.task.update({ where: { id }, data })
}
```

**Real-time Updates (Socket.io)**
```typescript
// Server: src/lib/socket/server.ts
io.on('connection', (socket) => {
  socket.on('task:claimed', async ({ taskId }) => {
    const task = await taskRepository.findById(taskId)
    io.to(`project:${task.projectId}`).emit('task:update', { taskId, status: 'CLAIMED' })
  })
})

// Client: src/lib/socket/client.ts (via SocketProvider)
useEffect(() => {
  socket.on('task:update', ({ taskId, status }) => {
    queryClient.setQueryData(['tasks', taskId], (old) => ({ ...old, status }))
  })
}, [])
```

**Background Jobs (BullMQ)**
```typescript
// Queue Job: src/lib/queue/workers/email.worker.ts
emailQueue.process('send-welcome', async (job) => {
  const { userId, email } = job.data
  await emailService.sendWelcome({ userId, email })
})

// Trigger: src/actions/auth/signup.ts
await emailQueue.add('send-welcome', { userId: user.id, email: user.email })
```

**External Integrations:**

**Stripe Payment Integration**
```typescript
// Payment: src/lib/payment/stripe.ts
export async function createCheckoutSession(amount: number, userId: string) {
  return stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Wallet Topup' }, unit_amount: amount * 100 }, quantity: 1 }],
    metadata: { userId },
    success_url: `${process.env.NEXT_PUBLIC_URL}/creator/wallet?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/creator/wallet?canceled=true`
  })
}

// Webhook: src/app/api/webhooks/stripe/route.ts
export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')
  const event = stripe.webhooks.constructEvent(await req.text(), sig, process.env.STRIPE_WEBHOOK_SECRET)

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    await walletService.creditBalance({ userId: session.metadata.userId, amount: session.amount_total / 100 })
  }
}
```

**Resend Email Integration**
```typescript
// Email Service: src/lib/email/client.ts
import { Resend } from 'resend'
import { WelcomeEmail } from './templates/welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcome({ email, name }: { email: string, name: string }) {
  return resend.emails.send({
    from: 'Jabur <noreply@jabur.com>',
    to: email,
    subject: 'Welcome to Jabur!',
    react: WelcomeEmail({ name })
  })
}
```

**Cloudinary Upload Integration**
```typescript
// Upload Service: src/lib/upload/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary'

export async function uploadTaskSubmission(file: File, taskId: string) {
  const buffer = Buffer.from(await file.arrayBuffer())
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: `tasks/${taskId}`, resource_type: 'auto' },
      (error, result) => error ? reject(error) : resolve(result.secure_url)
    ).end(buffer)
  })
}
```

**Data Flow:**

**Example 1: Task Claim Flow**
1. **Client Action**: User clicks "Claim Task" button in `TaskClaimButton.tsx`
2. **Mutation**: TanStack Query `useMutation` calls `claimTaskAction(taskId)`
3. **Server Action**: `src/actions/tasks/claim-task.ts` validates session, calls service
4. **Service Layer**: `taskService.claimTask()` checks eligibility, orchestrates updates
5. **Repository Layer**: `taskRepository.update()` writes to database via Prisma
6. **Side Effects**:
   - `notificationService.send()` creates notification for creator
   - Background job queues email notification via BullMQ
   - Socket.io broadcasts `task:claimed` event to project room
7. **Real-time Update**: All connected clients in project room receive task status update
8. **Client Update**: TanStack Query invalidates `['tasks']` cache, refetches data
9. **UI Update**: Task list re-renders with updated claim status

**Example 2: Creator Wallet Topup Flow**
1. **Client Action**: Creator clicks "Top Up" in `(creator)/wallet/page.tsx`
2. **Action**: `topupAction(amount)` creates Stripe checkout session
3. **Redirect**: User redirected to Stripe hosted checkout page
4. **Payment**: User completes payment on Stripe
5. **Webhook**: Stripe sends `checkout.session.completed` to `api/webhooks/stripe/route.ts`
6. **Verification**: Webhook verifies signature, extracts userId from metadata
7. **Service**: `walletService.creditBalance()` updates wallet balance
8. **Repository**: `walletRepository.updateBalance()` and `transactionRepository.create()` in transaction
9. **Background Job**: Email notification queued via BullMQ
10. **Real-time**: Socket.io emits `wallet:updated` to user's connection
11. **Client Update**: `useWallet()` hook receives real-time update, invalidates cache
12. **UI Update**: Wallet balance displays new amount instantly

**Example 3: Task Review Flow (Editor)**
1. **Client Action**: Editor submits review in `ReviewForm.tsx`
2. **Validation**: Zod validates review data (rating, feedback, decision)
3. **Mutation**: `reviewTaskAction({ taskId, rating, feedback, approved })`
4. **Service**: `reviewService.submitReview()` orchestrates multi-step process:
   - Creates `Review` record
   - Updates `Task` status to APPROVED or REVISION_REQUESTED
   - If approved: Calls `walletService.creditBalance()` for client
   - Creates notifications for client and creator
5. **Transaction**: All database writes wrapped in Prisma transaction
6. **Side Effects**:
   - Email notifications queued (task approved, payment received)
   - Socket.io broadcasts to client (`task:approved`) and creator (`task:reviewed`)
7. **Real-time Updates**: Client and creator dashboards update instantly
8. **Client Refetch**: `useTasks()` invalidates cache, displays updated status

### Development Workflow Integration

**Development Server Structure:**

**Local Development Setup:**
```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Configure: DATABASE_URL, NEXTAUTH_SECRET, STRIPE_SECRET_KEY, RESEND_API_KEY, CLOUDINARY_URL

# Setup database
npx prisma generate
npx prisma migrate dev
npx prisma db seed

# Start Redis (for local BullMQ and sessions)
docker-compose up -d redis

# Start development server
npm run dev
# Next.js dev server: http://localhost:3000
# Prisma Studio: npx prisma studio (http://localhost:5555)
```

**Hot Module Replacement:**
- Next.js Fast Refresh for React components
- Server Action changes trigger automatic recompilation
- Prisma schema changes require manual `npx prisma generate`
- Tailwind CSS changes hot reload via PostCSS

**Testing During Development:**
```bash
# Run unit tests (co-located)
npm test

# Run integration tests
npm run test:integration

# Run E2E tests (Playwright)
npm run test:e2e

# Run type checking
npm run type-check

# Run linting
npm run lint
```

**Build Process Structure:**

**Production Build:**
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Prisma generate (production client)
npx prisma generate

# Next.js build
npm run build
# Output: .next/ directory with optimized bundles

# Run production server locally
npm start
```

**Build Optimizations:**
- Next.js App Router automatic code splitting per route
- Image optimization via next/image (served from Cloudinary CDN)
- Font optimization with next/font
- Bundle analysis: `ANALYZE=true npm run build`
- Minification and tree-shaking automatic

**Deployment Structure:**

**Railway Deployment:**
```yaml
# railway.toml (project root)
[build]
builder = "nixpacks"
buildCommand = "npm run build"

[deploy]
startCommand = "npm start"
healthcheckPath = "/api/health"
restartPolicyType = "on-failure"

[env]
NODE_ENV = "production"
```

**Environment Configuration:**
- Railway Postgres: Automatic DATABASE_URL injection
- Railway Redis: Automatic REDIS_URL injection
- Secrets: NEXTAUTH_SECRET, STRIPE_SECRET_KEY, RESEND_API_KEY, CLOUDINARY_URL via Railway environment variables
- Public vars: NEXT_PUBLIC_URL set to Railway domain

**Database Migrations on Deploy:**
```bash
# Railway build command (package.json)
"build": "prisma generate && prisma migrate deploy && next build"
```

**Health Checks:**
```typescript
// src/app/api/health/route.ts
export async function GET() {
  const dbHealthy = await prisma.$queryRaw`SELECT 1`
  const redisHealthy = await redis.ping()
  return Response.json({
    status: dbHealthy && redisHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString()
  })
}
```

**Deployment Pipeline (GitHub Actions):**
```yaml
# .github/workflows/deploy-production.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npx prisma generate
      - run: npm run build
      - uses: railway/deploy@v1
        with:
          service: jabur-production
```

**Preview Deployments:**
- Every PR creates Railway preview environment
- Isolated database (Railway preview Postgres)
- Preview URL: `jabur-pr-{number}.up.railway.app`
- Automatic cleanup on PR merge/close

---
