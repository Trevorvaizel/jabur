import { Page } from '@playwright/test';

/**
 * Authentication Helper Functions
 *
 * Provides reusable authentication utilities for E2E tests
 */

/**
 * Login a user via the UI
 *
 * @param page - Playwright page object
 * @param email - User email
 * @param password - User password
 */
export async function loginUser(page: Page, email: string, password: string): Promise<void> {
  await page.goto('/login');
  await page.fill('[data-testid="email-input"]', email);
  await page.fill('[data-testid="password-input"]', password);
  await page.click('[data-testid="login-button"]');

  // Wait for navigation to complete
  await page.waitForURL(/\/(client|creator|editor|admin)\/dashboard/);
}

/**
 * Logout the current user
 *
 * @param page - Playwright page object
 */
export async function logoutUser(page: Page): Promise<void> {
  await page.click('[data-testid="user-menu"]');
  await page.click('[data-testid="logout-button"]');
  await page.waitForURL('/login');
}

/**
 * Check if user is authenticated
 *
 * @param page - Playwright page object
 * @returns True if user is authenticated
 */
export async function isAuthenticated(page: Page): Promise<boolean> {
  try {
    await page.locator('[data-testid="user-menu"]').waitFor({ timeout: 1000 });
    return true;
  } catch {
    return false;
  }
}
