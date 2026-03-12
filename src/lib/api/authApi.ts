import { apiClient } from './client';
import type { LoginRequest, RegisterRequest, AuthResponse } from '@/types';

// Placeholder API - will connect to .NET backend
export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    // TODO: Replace with real API call
    // return apiClient.post('/auth/login', data).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      token: 'mock-jwt-token',
      user: {
        id: '1',
        email: data.email,
        firstName: 'Jane',
        lastName: 'Smith',
        createdAt: new Date().toISOString(),
      },
    };
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    // TODO: Replace with real API call
    // return apiClient.post('/auth/register', data).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      token: 'mock-jwt-token',
      user: {
        id: '1',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        createdAt: new Date().toISOString(),
      },
    };
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem('auth_token');
  },
};
