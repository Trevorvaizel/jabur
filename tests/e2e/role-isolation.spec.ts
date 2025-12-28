import { test, expect } from '../support/fixtures';

/**
 * Role Isolation Tests (CRITICAL)
 *
 * Tests 3-layer role isolation security:
 * - Layer 1: Route groups (client)/(creator)/(editor)/(admin)
 * - Layer 2: Middleware redirects
 * - Layer 3: Row-level security (data filtering)
 *
 * These tests are MANDATORY before launch to prevent unauthorized access
 */

test.describe('Role Isolation - Route Protection', () => {
  test('client cannot access creator routes', async ({ page, userFactory }) => {
    // Create and login as client
    const client = await userFactory.createUser({ role: 'CLIENT' });
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', client.email);
    await page.fill('[data-testid="password-input"]', client.password);
    await page.click('[data-testid="login-button"]');

    // Wait for redirect to client dashboard
    await expect(page).toHaveURL(/\/client\/dashboard/);

    // Attempt to access creator route
    await page.goto('/creator/dashboard');

    // Should be redirected back to client dashboard
    await expect(page).toHaveURL(/\/client\/dashboard/);
  });

  test('creator cannot access admin routes', async ({ page, userFactory }) => {
    // Create and login as creator
    const creator = await userFactory.createUser({ role: 'CREATOR' });
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', creator.email);
    await page.fill('[data-testid="password-input"]', creator.password);
    await page.click('[data-testid="login-button"]');

    // Wait for redirect to creator dashboard
    await expect(page).toHaveURL(/\/creator\/dashboard/);

    // Attempt to access admin route
    await page.goto('/admin/dashboard');

    // Should be redirected back to creator dashboard
    await expect(page).toHaveURL(/\/creator\/dashboard/);
  });

  test('editor cannot access client routes', async ({ page, userFactory }) => {
    // Create and login as editor
    const editor = await userFactory.createUser({ role: 'EDITOR' });
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', editor.email);
    await page.fill('[data-testid="password-input"]', editor.password);
    await page.click('[data-testid="login-button"]');

    // Wait for redirect to editor dashboard
    await expect(page).toHaveURL(/\/editor\/dashboard/);

    // Attempt to access client route
    await page.goto('/client/my-tasks');

    // Should be redirected back to editor dashboard
    await expect(page).toHaveURL(/\/editor\/dashboard/);
  });

  test('unauthenticated user redirected to login', async ({ page }) => {
    // Attempt to access protected route without authentication
    await page.goto('/client/dashboard');

    // Should be redirected to login
    await expect(page).toHaveURL(/\/login/);
  });
});

test.describe('Role Isolation - Data Visibility', () => {
  test('client sees only their claimed tasks', async ({ page, userFactory, taskFactory }) => {
    // Create two clients
    const client1 = await userFactory.createUser({ role: 'CLIENT' });
    const client2 = await userFactory.createUser({ role: 'CLIENT' });

    // Create tasks claimed by each client
    await taskFactory.createClaimedTask(client1.id, { title: 'Client 1 Task' });
    await taskFactory.createClaimedTask(client2.id, { title: 'Client 2 Task' });

    // Login as client1
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', client1.email);
    await page.fill('[data-testid="password-input"]', client1.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to my tasks page
    await page.goto('/client/my-tasks');

    // Should see only client1's task
    await expect(page.locator('text=Client 1 Task')).toBeVisible();
    await expect(page.locator('text=Client 2 Task')).not.toBeVisible();
  });

  test('creator sees only their projects and tasks', async ({ page, userFactory, taskFactory }) => {
    // Create two creators
    const creator1 = await userFactory.createUser({ role: 'CREATOR' });
    const creator2 = await userFactory.createUser({ role: 'CREATOR' });

    // Create tasks for each creator
    await taskFactory.createTask({ title: 'Creator 1 Project', creatorId: creator1.id });
    await taskFactory.createTask({ title: 'Creator 2 Project', creatorId: creator2.id });

    // Login as creator1
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', creator1.email);
    await page.fill('[data-testid="password-input"]', creator1.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to projects page
    await page.goto('/creator/projects');

    // Should see only creator1's project
    await expect(page.locator('text=Creator 1 Project')).toBeVisible();
    await expect(page.locator('text=Creator 2 Project')).not.toBeVisible();
  });
});
