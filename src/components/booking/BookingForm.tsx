import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const bookingFormSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerEmail: z.string().email('Please enter a valid email'),
  customerPhone: z.string().min(8, 'Please enter a valid phone number'),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
  isLoading?: boolean;
}

export function BookingForm({ onSubmit, isLoading }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  });

  return (
    <div className="bg-card rounded-2xl p-6 spa-card-shadow">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <User className="h-4 w-4" /> Your Information
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="customerName">Full Name</Label>
          <Input
            id="customerName"
            {...register('customerName')}
            placeholder="Jane Smith"
            className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary"
          />
          {errors.customerName && (
            <p className="text-destructive text-xs mt-1">{errors.customerName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="customerEmail">Email</Label>
          <Input
            id="customerEmail"
            type="email"
            {...register('customerEmail')}
            placeholder="jane@example.com"
            className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary"
          />
          {errors.customerEmail && (
            <p className="text-destructive text-xs mt-1">{errors.customerEmail.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="customerPhone">Phone</Label>
          <Input
            id="customerPhone"
            type="tel"
            {...register('customerPhone')}
            placeholder="0412 345 678"
            className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary"
          />
          {errors.customerPhone && (
            <p className="text-destructive text-xs mt-1">{errors.customerPhone.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full rounded-full h-11" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Continue to Checkout'}
        </Button>
      </form>
    </div>
  );
}
