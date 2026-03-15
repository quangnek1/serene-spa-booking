import { CalendarCheck, Users, Briefcase, DollarSign, Clock, XCircle, CheckCircle2, CalendarDays } from 'lucide-react';
import { AdminCard } from '@/components/admin/AdminCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAdminStats, mockDailyStats, mockAdminBookings } from '@/lib/api/adminMockData';
import { StatusBadge } from '@/components/admin/StatusBadge';

export default function AdminDashboardPage() {
  const stats = getAdminStats();

  const recentBookings = [...mockAdminBookings]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminCard title="Total Bookings" value={stats.totalBookings} icon={CalendarCheck} />
        <AdminCard title="Today's Bookings" value={stats.bookingsToday} icon={CalendarDays} />
        <AdminCard title="Upcoming" value={stats.upcomingBookings} icon={Clock} />
        <AdminCard title="Total Revenue" value={`$${stats.totalRevenue.toFixed(2)}`} icon={DollarSign} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminCard title="Completed" value={stats.completedBookings} icon={CheckCircle2} />
        <AdminCard title="Cancelled" value={stats.cancelledBookings} icon={XCircle} />
        <AdminCard title="Customers" value={stats.totalCustomers} icon={Users} />
        <AdminCard title="Services" value={stats.totalServices} icon={Briefcase} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Bookings This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDailyStats.map((day) => (
                <div key={day.date} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-20 shrink-0">{day.date.slice(5)}</span>
                  <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all"
                      style={{ width: `${(day.bookings / 6) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium w-6 text-right">{day.bookings}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue chart placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue This Week (Deposits)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDailyStats.map((day) => (
                <div key={day.date} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-20 shrink-0">{day.date.slice(5)}</span>
                  <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden">
                    <div
                      className="bg-spa-gold h-full rounded-full transition-all"
                      style={{ width: `${(day.revenue / 120) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium w-14 text-right">${day.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Service</th>
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id} className="border-b border-border last:border-0">
                    <td className="py-2.5 pr-4">{b.customerName}</td>
                    <td className="py-2.5 pr-4 text-muted-foreground">{b.serviceName}</td>
                    <td className="py-2.5 pr-4 text-muted-foreground">{b.date}</td>
                    <td className="py-2.5 pr-4"><StatusBadge status={b.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
