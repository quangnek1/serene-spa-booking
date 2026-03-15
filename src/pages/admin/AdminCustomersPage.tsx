import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockAdminCustomers } from '@/lib/api/adminMockData';

export default function AdminCustomersPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = mockAdminCustomers.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Customers</h1>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <CardTitle className="text-base">All Customers</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 w-full sm:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Name</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium">Email</th>
                  <th className="text-left py-2 pr-3 text-muted-foreground font-medium hidden md:table-cell">Phone</th>
                  <th className="text-right py-2 pr-3 text-muted-foreground font-medium">Bookings</th>
                  <th className="text-right py-2 pr-3 text-muted-foreground font-medium">Spent</th>
                  <th className="text-left py-2 text-muted-foreground font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 pr-3 font-medium">{c.firstName} {c.lastName}</td>
                    <td className="py-2.5 pr-3 text-muted-foreground">{c.email}</td>
                    <td className="py-2.5 pr-3 text-muted-foreground hidden md:table-cell">{c.phone}</td>
                    <td className="py-2.5 pr-3 text-right">{c.totalBookings}</td>
                    <td className="py-2.5 pr-3 text-right">${c.totalSpent}</td>
                    <td className="py-2.5">
                      <Button size="sm" variant="ghost" onClick={() => navigate(`/admin/customers/${c.id}`)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">No customers found.</td>
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
