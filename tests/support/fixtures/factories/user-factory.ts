import { faker } from '@faker-js/faker';

/**
 * User Factory
 *
 * Creates test users via API with automatic cleanup
 * Supports role-based user creation and authentication
 *
 * Usage:
 * ```typescript
 * const user = await userFactory.createUser({ role: 'CREATOR' });
 * const authToken = await userFactory.loginUser(user.email, user.password);
 * ```
 *
 * Features:
 * - Faker-based data generation for realistic test data
 * - Role-specific user creation (CLIENT, CREATOR, EDITOR, ADMIN)
 * - Password tracking for login tests
 * - Auto-cleanup of created users
 */

export interface UserOverrides {
  email?: string;
  name?: string;
  password?: string;
  role?: 'CLIENT' | 'CREATOR' | 'EDITOR' | 'ADMIN';
  phoneNumber?: string;
  preferredPaymentMethod?: 'STRIPE' | 'MPESA';
  mpesaPhoneNumber?: string;
}

export interface CreatedUser {
  id: string;
  email: string;
  name: string;
  password: string; // Stored for login tests
  role: string;
  phoneNumber?: string | null;
  preferredPaymentMethod?: string | null;
  mpesaPhoneNumber?: string | null;
}

export class UserFactory {
  private createdUsers: string[] = [];
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  }

  /**
   * Create a test user with optional overrides
   *
   * @param overrides - Partial user data to override defaults
   * @returns Created user with password for login tests
   */
  async createUser(overrides: UserOverrides = {}): Promise<CreatedUser> {
    const password = overrides.password || faker.internet.password({ length: 12 });

    const userData = {
      email: overrides.email || faker.internet.email(),
      name: overrides.name || faker.person.fullName(),
      password: password,
      role: overrides.role || 'CLIENT',
      phoneNumber: overrides.phoneNumber || faker.phone.number(),
      preferredPaymentMethod: overrides.preferredPaymentMethod || 'STRIPE',
      mpesaPhoneNumber: overrides.mpesaPhoneNumber || null,
    };

    // API call to create user via signup endpoint
    const response = await fetch(`${this.baseUrl}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }

    const created = await response.json();

    // Track for cleanup
    this.createdUsers.push(created.data.id);

    // Return user with password for login tests
    return {
      ...created.data,
      password: password, // Include password for test login
    };
  }

  /**
   * Create multiple users with the same overrides
   *
   * @param count - Number of users to create
   * @param overrides - Overrides to apply to all users
   * @returns Array of created users
   */
  async createUsers(count: number, overrides: UserOverrides = {}): Promise<CreatedUser[]> {
    const users: CreatedUser[] = [];
    for (let i = 0; i < count; i++) {
      const user = await this.createUser(overrides);
      users.push(user);
    }
    return users;
  }

  /**
   * Login a user and return authentication token
   *
   * @param email - User email
   * @param password - User password
   * @returns NextAuth session token
   */
  async loginUser(email: string, password: string): Promise<string> {
    const response = await fetch(`${this.baseUrl}/api/auth/callback/credentials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Failed to login user: ${response.statusText}`);
    }

    const cookies = response.headers.get('set-cookie');
    if (!cookies) {
      throw new Error('No authentication cookie returned');
    }

    // Extract session token from cookies
    const sessionToken = cookies.match(/next-auth\.session-token=([^;]+)/)?.[1];
    if (!sessionToken) {
      throw new Error('No session token found in cookies');
    }

    return sessionToken;
  }

  /**
   * Cleanup all created users
   * Called automatically after each test via fixture cleanup
   */
  async cleanup(): Promise<void> {
    for (const userId of this.createdUsers) {
      try {
        await fetch(`${this.baseUrl}/api/users/${userId}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.warn(`Failed to cleanup user ${userId}:`, error);
      }
    }
    this.createdUsers = [];
  }
}
