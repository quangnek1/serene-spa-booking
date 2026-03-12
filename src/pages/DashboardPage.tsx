import { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockBookings } from '@/lib/api/mockData';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, LogOut } from 'lucide-react';
import type { Booking } from '@/types';

const statusColors: Record<Booking['status'], string> = {
  confirmed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  cancelled: 'bg-red-100 text-red-800',
  completed: 'bg-muted text-muted-foreground',
};

export default function DashboardPage() {
  const [bookings] = useState(mockBookings);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-primary py-12">
          <div className="spa-container">
            <div className="flex items-center justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-semibold text-primary-foreground"
                >
                  My Dashboard
                </motion.h1>
                <p className="text-primary-foreground/70 mt-1 text-sm">Welcome back, Jane</p>
              </div>
              <Button variant="secondary" size="sm" className="rounded-full gap-2">
                <LogOut className="h-3.5 w-3.5" /> Sign Out
              </Button>
            </div>
          </div>
        </section>

        <section className="spa-section">
          <div className="spa-container max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">My Bookings</h2>
              <Badge variant="secondary" className="rounded-full">
                {bookings.length} bookings
              </Badge>
            </div>

            <div className="space-y-4">
              {bookings.map((booking, i) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-5 spa-card-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-foreground">{booking.serviceName}</h3>
                      <div className="flex items-center gap-4 mt-1.5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(booking.date).toLocaleDateString('en-AU', { weekday: 'short', month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {booking.time}
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </div>

                  <Separator className="my-3" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">${booking.totalPrice}</span>
                    {(booking.status === 'confirmed' || booking.status === 'pending') && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full text-xs h-8">
                          Reschedule
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full text-xs h-8 text-destructive hover:text-destructive">
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
