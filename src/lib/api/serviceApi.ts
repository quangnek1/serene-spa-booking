import { mockServices } from './mockData';
import type { Service } from '@/types';

// Placeholder API - will connect to .NET backend
export const serviceApi = {
  getAll: async (): Promise<Service[]> => {
    // TODO: Replace with real API call
    // return apiClient.get('/services').then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockServices;
  },

  getById: async (id: string): Promise<Service> => {
    // TODO: Replace with real API call
    // return apiClient.get(`/services/${id}`).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 300));
    const service = mockServices.find(s => s.id === id);
    if (!service) throw new Error('Service not found');
    return service;
  },

  getBySlug: async (slug: string): Promise<Service> => {
    // TODO: Replace with real API call
    await new Promise(resolve => setTimeout(resolve, 300));
    const service = mockServices.find(s => s.slug === slug);
    if (!service) throw new Error('Service not found');
    return service;
  },
};
