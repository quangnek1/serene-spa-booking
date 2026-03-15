import type { Booking } from '@/types';
import { mockServices, mockBookings } from './mockData';

export interface AdminCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  totalBookings: number;
  totalSpent: number;
}

export interface AdminStats {
  totalBookings: number;
  bookingsToday: number;
  upcomingBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  totalCustomers: number;
  totalServices: number;
  totalRevenue: number;
}

export interface DailyStats {
  date: string;
  bookings: number;
  revenue: number;
}

export const mockAdminBookings: Booking[] = [
  ...mockBookings,
  {
    id: 'b4',
    serviceId: '5',
    serviceName: 'Hot Stone Therapy',
    date: '2026-03-15',
    time: '09:00',
    status: 'confirmed',
    paymentMethod: 'online',
    totalPrice: 150,
    depositAmount: 22.5,
    createdAt: '2026-03-12T08:00:00Z',
    customerName: 'Alice Wong',
    customerEmail: 'alice@example.com',
    customerPhone: '0423456789',
  },
  {
    id: 'b5',
    serviceId: '6',
    serviceName: 'Scalp Detox & Renewal',
    date: '2026-03-15',
    time: '11:00',
    status: 'pending_payment',
    paymentMethod: 'at_store',
    totalPrice: 110,
    depositAmount: 0,
    createdAt: '2026-03-13T10:00:00Z',
    customerName: 'Tom Chen',
    customerEmail: 'tom@example.com',
    customerPhone: '0434567890',
  },
  {
    id: 'b6',
    serviceId: '4',
    serviceName: 'Signature Deluxe Combo',
    date: '2026-03-18',
    time: '13:00',
    status: 'confirmed',
    paymentMethod: 'online',
    totalPrice: 240,
    depositAmount: 36,
    createdAt: '2026-03-14T11:00:00Z',
    customerName: 'Maria Garcia',
    customerEmail: 'maria@example.com',
    customerPhone: '0445678901',
  },
  {
    id: 'b7',
    serviceId: '7',
    serviceName: 'Neck & Shoulder Relief',
    date: '2026-03-10',
    time: '15:00',
    status: 'completed',
    paymentMethod: 'online',
    totalPrice: 95,
    depositAmount: 14.25,
    createdAt: '2026-03-05T09:00:00Z',
    customerName: 'David Lee',
    customerEmail: 'david@example.com',
    customerPhone: '0456789012',
  },
  {
    id: 'b8',
    serviceId: '8',
    serviceName: 'Herbal Steam Facial',
    date: '2026-03-08',
    time: '10:00',
    status: 'cancelled',
    paymentMethod: 'online',
    totalPrice: 100,
    depositAmount: 15,
    createdAt: '2026-03-02T14:00:00Z',
    customerName: 'Sophie Brown',
    customerEmail: 'sophie@example.com',
    customerPhone: '0467890123',
  },
  {
    id: 'b9',
    serviceId: '9',
    serviceName: 'Deep Tissue Relaxation',
    date: '2026-03-22',
    time: '14:30',
    status: 'confirmed',
    paymentMethod: 'online',
    totalPrice: 160,
    depositAmount: 24,
    createdAt: '2026-03-14T16:00:00Z',
    customerName: 'Alice Wong',
    customerEmail: 'alice@example.com',
    customerPhone: '0423456789',
  },
  {
    id: 'b10',
    serviceId: '1',
    serviceName: 'Traditional Japanese Head Spa',
    date: '2026-03-05',
    time: '09:30',
    status: 'completed',
    paymentMethod: 'online',
    totalPrice: 130,
    depositAmount: 19.5,
    createdAt: '2026-02-28T10:00:00Z',
    customerName: 'Tom Chen',
    customerEmail: 'tom@example.com',
    customerPhone: '0434567890',
  },
];

export const mockAdminCustomers: AdminCustomer[] = [
  {
    id: 'c1',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '0412345678',
    createdAt: '2026-01-15T10:00:00Z',
    totalBookings: 3,
    totalSpent: 430,
  },
  {
    id: 'c2',
    firstName: 'Alice',
    lastName: 'Wong',
    email: 'alice@example.com',
    phone: '0423456789',
    createdAt: '2026-02-10T08:00:00Z',
    totalBookings: 2,
    totalSpent: 310,
  },
  {
    id: 'c3',
    firstName: 'Tom',
    lastName: 'Chen',
    email: 'tom@example.com',
    phone: '0434567890',
    createdAt: '2026-02-20T10:00:00Z',
    totalBookings: 2,
    totalSpent: 240,
  },
  {
    id: 'c4',
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria@example.com',
    phone: '0445678901',
    createdAt: '2026-03-01T11:00:00Z',
    totalBookings: 1,
    totalSpent: 240,
  },
  {
    id: 'c5',
    firstName: 'David',
    lastName: 'Lee',
    email: 'david@example.com',
    phone: '0456789012',
    createdAt: '2026-03-03T09:00:00Z',
    totalBookings: 1,
    totalSpent: 95,
  },
  {
    id: 'c6',
    firstName: 'Sophie',
    lastName: 'Brown',
    email: 'sophie@example.com',
    phone: '0467890123',
    createdAt: '2026-03-01T14:00:00Z',
    totalBookings: 1,
    totalSpent: 0,
  },
];

export const mockDailyStats: DailyStats[] = [
  { date: '2026-03-09', bookings: 2, revenue: 45 },
  { date: '2026-03-10', bookings: 3, revenue: 68 },
  { date: '2026-03-11', bookings: 1, revenue: 22.5 },
  { date: '2026-03-12', bookings: 4, revenue: 92 },
  { date: '2026-03-13', bookings: 2, revenue: 36 },
  { date: '2026-03-14', bookings: 3, revenue: 60 },
  { date: '2026-03-15', bookings: 5, revenue: 110 },
];

export const getAdminStats = (): AdminStats => {
  const today = '2026-03-15';
  return {
    totalBookings: mockAdminBookings.length,
    bookingsToday: mockAdminBookings.filter(b => b.date === today).length,
    upcomingBookings: mockAdminBookings.filter(b => b.date >= today && b.status !== 'cancelled' && b.status !== 'completed').length,
    completedBookings: mockAdminBookings.filter(b => b.status === 'completed').length,
    cancelledBookings: mockAdminBookings.filter(b => b.status === 'cancelled').length,
    totalCustomers: mockAdminCustomers.length,
    totalServices: mockServices.length,
    totalRevenue: mockAdminBookings.reduce((sum, b) => sum + b.depositAmount, 0),
  };
};
