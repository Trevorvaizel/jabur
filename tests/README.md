# Jabur E2E Test Suite

**Framework:** Playwright
**Language:** TypeScript
**Test Directory:** `tests/e2e/`
**Architecture:** Fixture-based with auto-cleanup

---

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Test Architecture](#test-architecture)
- [Writing Tests](#writing-tests)
- [Best Practices](#best-practices)
- [CI Integration](#ci-integration)
- [Troubleshooting](#troubleshooting)

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This installs:
- `@playwright/test` - Playwright test framework
- `@faker-js/faker` - Test data generation

### 2. Install Playwright Browsers

```bash
npx playwright install
```

This installs Chromium, Firefox, and WebKit browsers for cross-browser testing.

### 3. Configure Test Environment

Copy the test environment template:

```bash
cp .env.test.example .env.test
```

Edit `.env.test` and fill in:
- **Database:** Use separate test database (`jabur_test`)
- **Test Users:** Configure test user credentials
- **Payment Providers:** Use Stripe test keys and M-Pesa sandbox credentials
- **External Services:** Use test API keys (Resend, Cloudinary, AssemblyAI)

**CRITICAL:** NEVER use production credentials in tests. Always use test/sandbox keys.

### 4. Seed Test Database

```bash
npx prisma migrate dev
npx prisma db seed
```

This creates test database schema and seeds test users.

---

## Running Tests

### All Tests (Headless)

```bash
npm run test:e2e
```

Runs all E2E tests in headless mode across all browsers (Chromium, Firefox, WebKit).

### Interactive UI Mode (Recommended for Development)

```bash
npm run test:e2e:ui
```

Opens Playwright UI for interactive test development with time-travel debugging.

### Headed Mode (See Browser)

```bash
npm run test:e2e:headed
```

Runs tests with visible browser windows. Useful for debugging visual issues.

### Debug Mode (Step-by-Step)

```bash
npm run test:e2e:debug
```

Runs tests in debug mode with Playwright Inspector. Pauses execution for step-by-step debugging.

### View Test Report

```bash
npm run test:e2e:report
```

Opens HTML test report from last test run. Shows traces, screenshots, and videos for failures.

### Run Specific Test File

```bash
npx playwright test tests/e2e/role-isolation.spec.ts
```

### Run Tests Matching Pattern

```bash
npx playwright test --grep "role isolation"
```

### Run Tests on Specific Browser

```bash
npx playwright test --project=chromium
```

---

## Test Architecture

### Directory Structure

```
tests/
├── e2e/                        # E2E test files
│   ├── example.spec.ts         # Basic example tests
│   ├── role-isolation.spec.ts  # Role isolation security tests
│   └── task-workflow.spec.ts   # Complete user journey tests
├── support/                    # Test infrastructure
│   ├── fixtures/               # Playwright fixtures
│   │   ├── index.ts            # Main fixture exports (test, expect)
│   │   └── factories/          # Data factories
│   │       ├── user-factory.ts # User creation with auto-cleanup
│   │       └── task-factory.ts # Task creation with auto-cleanup
│   ├── helpers/                # Utility functions
│   └── page-objects/           # Page object models (optional)
└── README.md                   # This file
```

### Fixture Pattern

Tests use **fixture composition** for test data management:

```typescript
import { test, expect } from '../support/fixtures';

test('should create user', async ({ userFactory }) => {
  const user = await userFactory.createUser({ role: 'CLIENT' });
  // Test logic...
  // Auto-cleanup happens after test completes
});
```

**Benefits:**
- **Auto-cleanup** - Factories automatically delete created data after each test
- **Isolation** - Each test starts with clean state
- **Reusability** - Fixtures shared across all tests
- **Type-safe** - Full TypeScript support

### Data Factories

#### UserFactory

Creates test users with automatic cleanup.

```typescript
// Create user with defaults
const user = await userFactory.createUser();

// Create user with specific role
const creator = await userFactory.createUser({ role: 'CREATOR' });

// Create multiple users
const clients = await userFactory.createUsers(5, { role: 'CLIENT' });

// Login user and get session token
const token = await userFactory.loginUser(user.email, user.password);
```

#### TaskFactory

Creates test tasks with automatic cleanup.

```typescript
// Create available task (auto-creates creator)
const task = await taskFactory.createTask({ title: 'Transcribe audio' });

// Create task with specific creator
const task = await taskFactory.createTask({ creatorId: creator.id });

// Create claimed task
const task = await taskFactory.createClaimedTask(clientId);

// Create submitted task
const task = await taskFactory.createSubmittedTask(clientId);

// Create multiple tasks
const tasks = await taskFactory.createTasks(10, { status: 'AVAILABLE' });
```

---

## Writing Tests

### Test File Template

```typescript
import { test, expect } from '../support/fixtures';

test.describe('Feature Name', () => {
  test('should do something', async ({ page, userFactory, taskFactory }) => {
    // Arrange - Create test data
    const user = await userFactory.createUser({ role: 'CLIENT' });

    // Act - Perform actions
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', user.email);
    await page.click('[data-testid="login-button"]');

    // Assert - Verify results
    await expect(page).toHaveURL('/client/dashboard');

    // Auto-cleanup happens automatically
  });
});
```

### Selector Strategy

**ALWAYS use `data-testid` attributes** for stable selectors:

```typescript
// ✅ GOOD - Stable, won't break on text/style changes
await page.click('[data-testid="login-button"]');
await expect(page.locator('[data-testid="success-message"]')).toBeVisible();

// ❌ BAD - Brittle, breaks on text changes
await page.click('button:has-text("Login")');
```

Add `data-testid` to UI components:

```tsx
<button data-testid="login-button">Login</button>
<div data-testid="success-message">{message}</div>
```

### Waiting for Elements

Use Playwright's built-in waiting (automatic):

```typescript
// ✅ GOOD - Auto-waits for visibility
await page.click('[data-testid="submit-button"]');
await expect(page.locator('[data-testid="success"]')).toBeVisible();

// ❌ BAD - Explicit sleep is brittle
await page.click('[data-testid="submit-button"]');
await page.waitForTimeout(2000); // Don't do this!
```

### Testing Real-Time Updates (Socket.io)

For real-time features, use `waitForSelector` with timeout:

```typescript
test('should see task claimed notification', async ({ page, userFactory }) => {
  // Setup: Login as creator
  const creator = await userFactory.createUser({ role: 'CREATOR' });
  await page.goto('/login');
  // ... login ...

  // Trigger event that causes Socket.io broadcast
  // (e.g., another user claims task)

  // Wait for real-time notification to appear
  await page.waitForSelector('[data-testid="notification-task-claimed"]', {
    timeout: 5000
  });

  await expect(page.locator('[data-testid="notification-task-claimed"]')).toBeVisible();
});
```

---

## Best Practices

### 1. Test Isolation

Each test MUST be independent:

```typescript
// ✅ GOOD - Self-contained
test('test A', async ({ userFactory }) => {
  const user = await userFactory.createUser();
  // Test uses only its own data
});

test('test B', async ({ userFactory }) => {
  const user = await userFactory.createUser();
  // Independent from test A
});

// ❌ BAD - Shared state
let sharedUser;
test.beforeAll(async ({ userFactory }) => {
  sharedUser = await userFactory.createUser(); // Don't share!
});
```

### 2. Explicit Assertions

Use specific assertions:

```typescript
// ✅ GOOD - Specific assertion
await expect(page.locator('[data-testid="task-status"]')).toContainText('CLAIMED');

// ❌ BAD - Too broad
await expect(page.locator('[data-testid="task-status"]')).toBeVisible();
```

### 3. Role Isolation Testing (CRITICAL)

ALWAYS test that users cannot access routes outside their role:

```typescript
test('client cannot access creator routes', async ({ page, userFactory }) => {
  const client = await userFactory.createUser({ role: 'CLIENT' });
  // Login as client...

  // Attempt to access creator route
  await page.goto('/creator/dashboard');

  // Should be redirected to client dashboard
  await expect(page).toHaveURL(/\/client\/dashboard/);
});
```

### 4. Mock External APIs

NEVER call real external APIs in tests:

```typescript
// Set in .env.test
MOCK_STRIPE=true
MOCK_MPESA=true
MOCK_RESEND=true
```

### 5. Test Length Limits

Keep tests focused and fast:
- **Unit tests:** < 1 second
- **Integration tests:** < 5 seconds
- **E2E tests:** < 60 seconds (configured in playwright.config.ts)

### 6. Cleanup Verification

Factories auto-cleanup, but verify critical data is cleaned:

```typescript
test('cleanup verification', async ({ userFactory }) => {
  const user = await userFactory.createUser();
  const userId = user.id;

  // After test, factory.cleanup() automatically deletes user
  // Verify in database if needed
});
```

---

## CI Integration

### GitHub Actions Example

```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npm run test:e2e
        env:
          DATABASE_URL: ${{ secrets.TEST_DATABASE_URL }}
          NEXTAUTH_SECRET: ${{ secrets.TEST_NEXTAUTH_SECRET }}

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: test-results/
```

### Environment Variables in CI

Set these secrets in GitHub Actions:
- `TEST_DATABASE_URL` - Test database connection
- `TEST_NEXTAUTH_SECRET` - Auth secret
- `STRIPE_SECRET_KEY` - Stripe test key
- `MPESA_CONSUMER_KEY` - M-Pesa sandbox key
- All other test credentials from `.env.test.example`

---

## Troubleshooting

### Tests Timing Out

**Problem:** Tests fail with "Timeout exceeded" errors.

**Solutions:**
- Increase timeout in `playwright.config.ts` (currently 60s)
- Use more specific selectors (data-testid)
- Check if dev server is running (`npm run dev`)
- Verify database connection

### Cleanup Not Working

**Problem:** Test data not cleaned up after tests.

**Solutions:**
- Verify fixture usage: `import { test } from '../support/fixtures'`
- Check factory cleanup methods are implemented
- Use `test.afterEach` for additional cleanup if needed

### Browser Installation Issues

**Problem:** Playwright cannot find browsers.

**Solutions:**
```bash
# Reinstall browsers
npx playwright install --with-deps

# Or install specific browser
npx playwright install chromium
```

### Test Database Issues

**Problem:** Tests fail with database errors.

**Solutions:**
- Use separate test database (never development or production)
- Reset database: `npx prisma migrate reset`
- Check `DATABASE_URL` in `.env.test`

### Visual Debugging

**Problem:** Need to see what's happening in tests.

**Solutions:**
```bash
# Run in headed mode
npm run test:e2e:headed

# Run with UI inspector
npm run test:e2e:ui

# Run in debug mode
npm run test:e2e:debug
```

---

## Critical Test Focus Areas

Based on project requirements, prioritize testing:

1. **Role Isolation (MANDATORY)**
   - Layer 1: Route group protection
   - Layer 2: Middleware redirects
   - Layer 3: Row-level security (data filtering)

2. **Task Claim Race Conditions**
   - Multiple clients claiming same task
   - Verify atomic operations prevent double-claim

3. **Wallet Balance Race Conditions**
   - Concurrent wallet updates
   - Verify atomic increment/decrement operations

4. **Dual Payment Orchestration**
   - Stripe payment flow
   - M-Pesa payment flow (REQUIRED for launch)
   - Payment method routing

5. **Socket.io Real-Time Updates**
   - Task claim notifications
   - Wallet balance updates
   - Room-based event broadcasting

6. **Background Jobs (BullMQ)**
   - Email delivery
   - Payment processing
   - Retry logic with exponential backoff

---

## Next Steps

1. **Copy environment template:**
   ```bash
   cp .env.test.example .env.test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npx playwright install
   ```

3. **Run tests:**
   ```bash
   npm run test:e2e
   ```

4. **Write your first test:**
   - Copy `tests/e2e/example.spec.ts`
   - Modify for your feature
   - Use fixtures for test data
   - Run with `npm run test:e2e:ui` for interactive debugging

---

**Framework Scaffold Complete!**

Your Playwright E2E test framework is ready. Start writing tests to ensure role isolation, data integrity, and critical user journeys work correctly.

For questions or issues, refer to:
- [Playwright Documentation](https://playwright.dev)
- [Project Context](../_bmad-output/project-context.md)
- [Architecture Docs](../_bmad-output/architecture/)
