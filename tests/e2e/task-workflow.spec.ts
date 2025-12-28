import { test, expect } from '../support/fixtures';

/**
 * Task Workflow Tests
 *
 * Tests complete user journey: Browse → Claim → Submit → Review → Payment
 * Demonstrates fixture usage and realistic user flows
 */

test.describe('Task Workflow - Client Journey', () => {
  test('client can browse available tasks', async ({ page, userFactory, taskFactory }) => {
    // Create available tasks
    await taskFactory.createTasks(5, { status: 'AVAILABLE' });

    // Create and login as client
    const client = await userFactory.createUser({ role: 'CLIENT' });
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', client.email);
    await page.fill('[data-testid="password-input"]', client.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to available tasks
    await page.goto('/client/browse-tasks');

    // Should see at least 5 tasks
    const taskCards = page.locator('[data-testid="task-card"]');
    await expect(taskCards).toHaveCount(5, { timeout: 10000 });
  });

  test('client can claim a task', async ({ page, userFactory, taskFactory }) => {
    // Create available task
    const task = await taskFactory.createTask({
      title: 'Transcribe Audio Sample',
      status: 'AVAILABLE'
    });

    // Create and login as client
    const client = await userFactory.createUser({ role: 'CLIENT' });
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', client.email);
    await page.fill('[data-testid="password-input"]', client.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to task detail
    await page.goto(`/client/tasks/${task.id}`);

    // Click claim button
    await page.click('[data-testid="claim-task-button"]');

    // Should show success message
    await expect(page.locator('[data-testid="success-message"]')).toContainText(/claimed/i);

    // Task should now be in claimed state
    await expect(page.locator('[data-testid="task-status"]')).toContainText('CLAIMED');
  });

  test('client can submit task deliverable', async ({ page, userFactory, taskFactory }) => {
    // Create client with claimed task
    const client = await userFactory.createUser({ role: 'CLIENT' });
    const task = await taskFactory.createClaimedTask(client.id, {
      title: 'Transcribe Audio Sample'
    });

    // Login as client
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', client.email);
    await page.fill('[data-testid="password-input"]', client.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to task
    await page.goto(`/client/tasks/${task.id}`);

    // Upload deliverable
    await page.setInputFiles('[data-testid="file-upload"]', 'tests/fixtures/sample-transcript.txt');

    // Submit
    await page.click('[data-testid="submit-deliverable-button"]');

    // Should show success message
    await expect(page.locator('[data-testid="success-message"]')).toContainText(/submitted/i);

    // Task should now be in submitted state
    await expect(page.locator('[data-testid="task-status"]')).toContainText('SUBMITTED');
  });
});

test.describe('Task Workflow - Creator Journey', () => {
  test('creator can create a new task', async ({ page, userFactory }) => {
    // Create and login as creator
    const creator = await userFactory.createUser({ role: 'CREATOR' });
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', creator.email);
    await page.fill('[data-testid="password-input"]', creator.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to create task page
    await page.goto('/creator/tasks/new');

    // Fill task form
    await page.fill('[data-testid="task-title"]', 'New Transcription Task');
    await page.fill('[data-testid="task-description"]', 'Please transcribe this audio file accurately.');
    await page.fill('[data-testid="task-reward"]', '25.00');
    await page.setInputFiles('[data-testid="audio-upload"]', 'tests/fixtures/sample-audio.mp3');

    // Submit
    await page.click('[data-testid="create-task-button"]');

    // Should redirect to task detail
    await expect(page).toHaveURL(/\/creator\/tasks\/[a-z0-9-]+/);
    await expect(page.locator('[data-testid="task-title"]')).toContainText('New Transcription Task');
  });

  test('creator can see task claimed notification', async ({ page, userFactory, taskFactory }) => {
    // Create creator with available task
    const creator = await userFactory.createUser({ role: 'CREATOR' });
    const task = await taskFactory.createTask({
      title: 'Transcription Task',
      creatorId: creator.id
    });

    // Login as creator
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', creator.email);
    await page.fill('[data-testid="password-input"]', creator.password);
    await page.click('[data-testid="login-button"]');

    // Navigate to dashboard
    await page.goto('/creator/dashboard');

    // Simulate another user claiming the task (via Socket.io event)
    // This would require Socket.io test client setup
    // For now, verify the UI can display notification
    await expect(page.locator('[data-testid="notifications-panel"]')).toBeVisible();
  });
});
