import { mockBookings, mockTimeSlots } from './mockData';
import type { Booking, BookingRequest, TimeSlot, CheckoutRequest } from '@/types';

// Placeholder API - will connect to .NET backend
export const bookingApi = {
  getMyBookings: async (): Promise<Booking[]> => {
    // TODO: return apiClient.get('/bookings/my-bookings').then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockBookings;
  },

  create: async (data: BookingRequest): Promise<Booking> => {
    // TODO: return apiClient.post('/bookings', data).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      id: 'b-new-' + Date.now(),
      serviceId: data.serviceId,
      serviceName: 'Service',
      date: data.date,
      time: data.time,
      status: data.paymentMethod === 'at_store' ? 'pending_payment' as const : 'confirmed' as const,
      paymentMethod: data.paymentMethod,
      totalPrice: 130,
      depositAmount: data.paymentMethod === 'online' ? 30 : 0,
      createdAt: new Date().toISOString(),
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
    };
  },

  cancel: async (id: string): Promise<void> => {
    // TODO: return apiClient.delete(`/bookings/${id}`).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 500));
  },

  getTimeSlots: async (_serviceId: string, _date: string): Promise<TimeSlot[]> => {
    // TODO: return apiClient.get(`/bookings/time-slots?serviceId=${serviceId}&date=${date}`).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockTimeSlots;
  },

  checkout: async (_data: CheckoutRequest): Promise<{ success: boolean }> => {
    // TODO: return apiClient.post('/payments/checkout', data).then(res => res.data);
    await new Promise(resolve => setTimeout(resolve, 1200));
    return { success: true };
  },
};
