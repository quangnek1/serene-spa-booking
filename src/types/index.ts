export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  seoTitle: string;
  metaKeywords: string;
  metaDescription: string;
  parentId: number | null;
  sort: number;
  status: boolean;
}

export interface ServicePackage {
  serviceId: number;
  durationMinutes: number;
  price: number;
}

export interface Service {
  id: string;
  categoryId: number;
  name: string;
  slug: string;
  price: number;
  duration: number;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];
  hot: boolean;
  status: boolean;
  seoTitle: string;
  metaKeywords: string;
  metaDescription: string;
  packages: ServicePackage[];
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'pending_payment' | 'confirmed' | 'completed' | 'cancelled';
  paymentMethod: 'online' | 'at_store';
  totalPrice: number;
  depositAmount: number;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  method: string;
  createdAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface BookingRequest {
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  paymentMethod: 'online' | 'at_store';
}

export interface CheckoutRequest {
  bookingId: string;
  paymentMethod: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
