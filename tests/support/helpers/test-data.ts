/**
 * Test Data Constants
 *
 * Centralized test data for consistent test execution
 */

export const TEST_USERS = {
  CLIENT: {
    email: process.env.TEST_CLIENT_EMAIL || 'client@test.com',
    password: process.env.TEST_CLIENT_PASSWORD || 'Test123!Client',
  },
  CREATOR: {
    email: process.env.TEST_CREATOR_EMAIL || 'creator@test.com',
    password: process.env.TEST_CREATOR_PASSWORD || 'Test123!Creator',
  },
  EDITOR: {
    email: process.env.TEST_EDITOR_EMAIL || 'editor@test.com',
    password: process.env.TEST_EDITOR_PASSWORD || 'Test123!Editor',
  },
  ADMIN: {
    email: process.env.TEST_ADMIN_EMAIL || 'admin@test.com',
    password: process.env.TEST_ADMIN_PASSWORD || 'Test123!Admin',
  },
};

export const TEST_CONFIG = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  apiUrl: process.env.API_URL || 'http://localhost:3000/api',
  timeout: 60000, // 60 seconds
};

export const SAMPLE_TASK_DATA = {
  title: 'Sample Transcription Task',
  description: 'Please transcribe this audio file with high accuracy.',
  reward: 25.0,
  priority: 'MEDIUM' as const,
};
