import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const statusConfig: Record<string, { label: string; className: string }> = {
  pending_payment: { label: 'Pending', className: 'bg-accent text-accent-foreground border-transparent' },
  confirmed: { label: 'Confirmed', className: 'bg-primary/15 text-primary border-transparent' },
  completed: { label: 'Completed', className: 'bg-emerald-100 text-emerald-700 border-transparent' },
  cancelled: { label: 'Cancelled', className: 'bg-destructive/15 text-destructive border-transparent' },
};

export function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status] || { label: status, className: '' };
  return <Badge className={cn('font-medium', config.className)}>{config.label}</Badge>;
}
