import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E Testing Configuration
 *
 * Test Framework: Playwright
 * Test Directory: ./tests/e2e
 * Parallelization: Enabled (CI: 1 worker, Local: all cores)
 * Retry Strategy: 2 retries in CI, 0 locally
 *
 * Critical Test Focus Areas:
 * - Role isolation (client/creator/editor/admin route protection)
 * - Socket.io real-time updates (task claims, notifications)
 * - Dual payment orchestration (Stripe + M-Pesa)
 * - Background job processing (BullMQ)
 * - Wallet atomic operations (race condition prevention)
 */

export default defineConfig({
  testDir: './tests/e2e',

  // Parallelization
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Timeouts (aligned with project standards)
  timeout: 60 * 1000, // Test timeout: 60s
  expect: {
    timeout: 15 * 1000, // Assertion timeout: 15s
  },

  // Global configuration
  use: {
    // Base URL for Next.js app
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Trace debugging (failure-only to reduce storage)
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Action and navigation timeouts
    actionTimeout: 15 * 1000, // 15s
    navigationTimeout: 30 * 1000, // 30s

    // Ignore HTTPS errors in development (Railway preview deployments)
    ignoreHTTPSErrors: true,
  },

  // Reporters (HTML + JUnit for CI integration)
  reporter: [
    ['html', { outputFolder: 'test-results/html', open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list'],
  ],

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile viewports for responsive testing
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Development server (optional - start Next.js before tests)
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2 minutes to start Next.js
  },
});
