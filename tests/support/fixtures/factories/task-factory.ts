import { faker } from '@faker-js/faker';
import { UserFactory, CreatedUser } from './user-factory';

/**
 * Task Factory
 *
 * Creates test tasks via API with automatic cleanup
 * Requires creator user for task ownership
 *
 * Usage:
 * ```typescript
 * const task = await taskFactory.createTask({ title: 'Transcribe audio' });
 * const claimedTask = await taskFactory.createTask({ status: 'CLAIMED', claimedById: clientUser.id });
 * ```
 *
 * Features:
 * - Faker-based data generation for realistic test data
 * - Auto-creates creator user if not provided
 * - Status-based task creation (AVAILABLE, CLAIMED, SUBMITTED, etc.)
 * - Auto-cleanup of created tasks
 */

export interface TaskOverrides {
  title?: string;
  description?: string;
  audioUrl?: string;
  reward?: number;
  deadline?: Date;
  status?: 'AVAILABLE' | 'CLAIMED' | 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
  creatorId?: string;
  claimedById?: string | null;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
}

export interface CreatedTask {
  id: string;
  title: string;
  description: string;
  audioUrl: string | null;
  reward: number;
  deadline: string;
  status: string;
  creatorId: string;
  claimedById: string | null;
  priority: string;
  createdAt: string;
}

export class TaskFactory {
  private createdTasks: string[] = [];
  private createdCreators: CreatedUser[] = [];
  private baseUrl: string;
  private userFactory: UserFactory;

  constructor(userFactory: UserFactory) {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    this.userFactory = userFactory;
  }

  /**
   * Create a test task with optional overrides
   *
   * @param overrides - Partial task data to override defaults
   * @returns Created task
   */
  async createTask(overrides: TaskOverrides = {}): Promise<CreatedTask> {
    // Auto-create creator if not provided
    let creatorId = overrides.creatorId;
    if (!creatorId) {
      const creator = await this.userFactory.createUser({ role: 'CREATOR' });
      creatorId = creator.id;
      this.createdCreators.push(creator);
    }

    const taskData = {
      title: overrides.title || faker.lorem.sentence({ min: 3, max: 8 }),
      description: overrides.description || faker.lorem.paragraph(),
      audioUrl: overrides.audioUrl || faker.internet.url() + '/audio.mp3',
      reward: overrides.reward ?? faker.number.float({ min: 5, max: 100, fractionDigits: 2 }),
      deadline: overrides.deadline || faker.date.future({ years: 0.1 }),
      status: overrides.status || 'AVAILABLE',
      creatorId: creatorId,
      claimedById: overrides.claimedById ?? null,
      priority: overrides.priority || 'MEDIUM',
    };

    // API call to create task
    const response = await fetch(`${this.baseUrl}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create task: ${response.statusText}`);
    }

    const created = await response.json();

    // Track for cleanup
    this.createdTasks.push(created.data.id);

    return created.data;
  }

  /**
   * Create multiple tasks with the same overrides
   *
   * @param count - Number of tasks to create
   * @param overrides - Overrides to apply to all tasks
   * @returns Array of created tasks
   */
  async createTasks(count: number, overrides: TaskOverrides = {}): Promise<CreatedTask[]> {
    const tasks: CreatedTask[] = [];
    for (let i = 0; i < count; i++) {
      const task = await this.createTask(overrides);
      tasks.push(task);
    }
    return tasks;
  }

  /**
   * Create a task in CLAIMED status
   *
   * @param claimedById - User ID who claimed the task
   * @param overrides - Additional task overrides
   * @returns Created claimed task
   */
  async createClaimedTask(claimedById: string, overrides: TaskOverrides = {}): Promise<CreatedTask> {
    return this.createTask({
      ...overrides,
      status: 'CLAIMED',
      claimedById: claimedById,
    });
  }

  /**
   * Create a task in SUBMITTED status
   *
   * @param claimedById - User ID who claimed the task
   * @param overrides - Additional task overrides
   * @returns Created submitted task
   */
  async createSubmittedTask(claimedById: string, overrides: TaskOverrides = {}): Promise<CreatedTask> {
    return this.createTask({
      ...overrides,
      status: 'SUBMITTED',
      claimedById: claimedById,
    });
  }

  /**
   * Cleanup all created tasks
   * Called automatically after each test via fixture cleanup
   */
  async cleanup(): Promise<void> {
    for (const taskId of this.createdTasks) {
      try {
        await fetch(`${this.baseUrl}/api/tasks/${taskId}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.warn(`Failed to cleanup task ${taskId}:`, error);
      }
    }
    this.createdTasks = [];
    this.createdCreators = [];
  }
}
