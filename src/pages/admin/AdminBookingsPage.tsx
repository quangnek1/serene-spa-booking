import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { mockAdminBookings } from '@/lib/api/adminMockData';

export default function AdminBookingsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockAdminBookings.filter((b) => {
    const matchesSearch =
      !search ||
      b.customerName.toLowerCase().includes(search.toLowerCase()) ||
      b.customerEmail.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Bookings</h1>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <CardTitle className="text-base">All Bookings</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search name or email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 w-full sm:w-60"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue placeholder="Filter status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending_payment">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">ID</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium hidden md:table-cell">Email</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Service</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium hidden lg:table-cell">Time</th>
                  <th className="text-right py-2 pr-3 text-muted-foreground font-medium hidden lg:table-cell">Price</th>
                  <th className="text-right py-2 pr-3 text-muted-foreground font-medium hidden lg:table-cell">Deposit</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-2 text-muted-foreground font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 pr-3 font-mono text-xs text-muted-foreground">{b.id}</td>
                    <td className="py-2.5 pr-3 font-medium">{b.customerName}</td>
                    <td className="py-2.5 pr-3 text-muted-foreground hidden md:table-cell">{b.customerEmail}</td>
                    <td className="py-2.5 pr-3 text-muted-foreground">{b.serviceName}</td>
                    <td className="py-2.5 pr-3">{b.date}</td>
                    <td className="py-2.5 pr-3 hidden lg:table-cell">{b.time}</td>
                    <td className="py-2.5 pr-3 text-right hidden lg:table-cell">${b.totalPrice}</td>
                    <td className="py-2.5 pr-3 text-right hidden lg:table-cell">${b.depositAmount}</td>
                    <td className="py-2.5 pr-3"><StatusBadge status={b.status} /></td>
                    <td className="py-2.5">
                      <Button size="sm" variant="ghost" onClick={() => navigate(`/admin/bookings/${b.id}`)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={10} className="py-8 text-center text-muted-foreground">No bookings found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
