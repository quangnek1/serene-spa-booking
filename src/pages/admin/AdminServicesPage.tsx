import { useState } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { mockServices } from '@/lib/api/mockData';
import { useToast } from '@/hooks/use-toast';
import type { Service } from '@/types';

export default function AdminServicesPage() {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>(mockServices);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ name: '', price: '', duration: '', shortDescription: '', description: '' });

  const openCreate = () => {
    setEditing(null);
    setForm({ name: '', price: '', duration: '', shortDescription: '', description: '' });
    setDialogOpen(true);
  };

  const openEdit = (s: Service) => {
    setEditing(s);
    setForm({
      name: s.name,
      price: String(s.price),
      duration: String(s.duration),
      shortDescription: s.shortDescription,
      description: s.description,
    });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.name || !form.price || !form.duration) {
      toast({ title: 'Please fill required fields', variant: 'destructive' });
      return;
    }
    if (editing) {
      setServices((prev) =>
        prev.map((s) =>
          s.id === editing.id
            ? { ...s, name: form.name, price: Number(form.price), duration: Number(form.duration), shortDescription: form.shortDescription, description: form.description }
            : s
        )
      );
      toast({ title: 'Service updated' });
    } else {
      const newService: Service = {
        id: `s-${Date.now()}`,
        name: form.name,
        slug: form.name.toLowerCase().replace(/\s+/g, '-'),
        price: Number(form.price),
        duration: Number(form.duration),
        shortDescription: form.shortDescription,
        description: form.description,
        image: '',
        features: [],
      };
      setServices((prev) => [...prev, newService]);
      toast({ title: 'Service created' });
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    toast({ title: 'Service deleted' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Services</h1>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4 mr-1" /> Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <Card key={s.id} className="overflow-hidden">
            {s.image && (
              <div className="h-40 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
              </div>
            )}
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold text-foreground">{s.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{s.shortDescription}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary">${s.price}</span>
                <span className="text-muted-foreground">{s.duration} min</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => openEdit(s)}>
                  <Pencil className="h-3 w-3 mr-1" /> Edit
                </Button>
                <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(s.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Service' : 'New Service'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Name *</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-muted-foreground">Price ($) *</label>
                <Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Duration (min) *</label>
                <Input type="number" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Short Description</label>
              <Input value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Full Description</label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSave}>{editing ? 'Update' : 'Create'}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
