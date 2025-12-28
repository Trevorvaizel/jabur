import { test as base } from '@playwright/test';
import { UserFactory } from './factories/user-factory';
import { TaskFactory } from './factories/task-factory';

/**
 * Extended Playwright Test Fixtures
 *
 * Fixture Pattern: Pure functions → Factory classes → mergeTests composition
 * Auto-cleanup: All factories implement cleanup() called after each test
 *
 * Usage:
 * ```typescript
 * import { test, expect } from '../support/fixtures';
 *
 * test('should create user and task', async ({ userFactory, taskFactory }) => {
 *   const user = await userFactory.createUser({ role: 'CREATOR' });
 *   const task = await taskFactory.createTask({ creatorId: user.id });
 *   // Assertions...
 *   // Auto-cleanup happens after test completes
 * });
 * ```
 */

type TestFixtures = {
  userFactory: UserFactory;
  taskFactory: TaskFactory;
};

export const test = base.extend<TestFixtures>({
  /**
   * User Factory Fixture
   *
   * Creates test users with automatic cleanup
   * Supports role-based user creation (CLIENT, CREATOR, EDITOR, ADMIN)
   */
  userFactory: async ({}, use) => {
    const factory = new UserFactory();
    await use(factory);
    await factory.cleanup(); // Auto-cleanup after test
  },

  /**
   * Task Factory Fixture
   *
   * Creates test tasks with automatic cleanup
   * Supports complex task creation with creator relations
   */
  taskFactory: async ({ userFactory }, use) => {
    const factory = new TaskFactory(userFactory);
    await use(factory);
    await factory.cleanup(); // Auto-cleanup after test
  },
});

export { expect } from '@playwright/test';
