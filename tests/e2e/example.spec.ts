import { test, expect } from '../support/fixtures';

/**
 * Example E2E Test Suite
 *
 * Demonstrates:
 * - Fixture usage for test data creation
 * - Auto-cleanup after tests
 * - Role-based testing patterns
 * - data-testid selector strategy
 *
 * Run with:
 * npm run test:e2e
 */

test.describe('Example Test Suite', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Jabur/i);
  });

  test('should display login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('[data-testid="login-form"]')).toBeVisible();
  });
});
