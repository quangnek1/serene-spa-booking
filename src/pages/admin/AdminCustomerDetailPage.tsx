import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { mockAdminCustomers, mockAdminBookings } from '@/lib/api/adminMockData';

export default function AdminCustomerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const customer = mockAdminCustomers.find((c) => c.id === id);

  if (!customer) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Customer not found.</p>
        <Button variant="ghost" className="mt-4" onClick={() => navigate('/admin/customers')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>
      </div>
    );
  }

  const customerBookings = mockAdminBookings.filter((b) => b.customerEmail === customer.email);

  return (
    <div className="space-y-6 max-w-3xl">
      <Button variant="ghost" size="sm" onClick={() => navigate('/admin/customers')}>
        <ArrowLeft className="h-4 w-4 mr-1" /> Back
      </Button>

      <h1 className="text-2xl font-bold text-foreground">{customer.firstName} {customer.lastName}</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Customer Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-3">
            {[
              ['Email', customer.email],
              ['Phone', customer.phone],
              ['Registered', new Date(customer.createdAt).toLocaleDateString()],
              ['Total Bookings', customer.totalBookings],
              ['Total Spent', `$${customer.totalSpent}`],
            ].map(([label, value]) => (
              <div key={String(label)} className="flex justify-between text-sm border-b border-border pb-2">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Booking History</CardTitle>
        </CardHeader>
        <CardContent>
          {customerBookings.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">No bookings yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Service</th>
                    <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Date</th>
                    <th className="text-right py-2 pr-3 text-muted-foreground font-medium">Price</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customerBookings.map((b) => (
                    <tr key={b.id} className="border-b border-border last:border-0">
                      <td className="py-2.5 pr-3">{b.serviceName}</td>
                      <td className="py-2.5 pr-3 text-muted-foreground">{b.date}</td>
                      <td className="py-2.5 pr-3 text-right">${b.totalPrice}</td>
                      <td className="py-2.5"><StatusBadge status={b.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
