import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { mockAdminBookings } from '@/lib/api/adminMockData';
import { useToast } from '@/hooks/use-toast';

export default function AdminBookingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const booking = mockAdminBookings.find((b) => b.id === id);

  const [status, setStatus] = useState(booking?.status || '');

  if (!booking) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Booking not found.</p>
        <Button variant="ghost" className="mt-4" onClick={() => navigate('/admin/bookings')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Bookings
        </Button>
      </div>
    );
  }

  const handleUpdateStatus = () => {
    toast({ title: 'Status updated', description: `Booking ${booking.id} status changed to ${status}.` });
  };

  const rows = [
    ['Booking ID', booking.id],
    ['Customer Name', booking.customerName],
    ['Customer Email', booking.customerEmail],
    ['Customer Phone', booking.customerPhone],
    ['Service', booking.serviceName],
    ['Booking Date', booking.date],
    ['Booking Time', booking.time],
    ['Service Price', `$${booking.totalPrice}`],
    ['Deposit Paid', `$${booking.depositAmount}`],
    ['Payment Method', booking.paymentMethod === 'online' ? 'Online (Deposit)' : 'Pay At Store'],
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <Button variant="ghost" size="sm" onClick={() => navigate('/admin/bookings')}>
        <ArrowLeft className="h-4 w-4 mr-1" /> Back
      </Button>

      <h1 className="text-2xl font-bold text-foreground">Booking Details</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-3">
            Booking {booking.id}
            <StatusBadge status={booking.status} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-3">
            {rows.map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm border-b border-border pb-2">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 pt-4 border-t border-border">
            <label className="text-sm text-muted-foreground mb-2 block">Update Status</label>
            <div className="flex gap-2">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending_payment">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleUpdateStatus}>Update</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
