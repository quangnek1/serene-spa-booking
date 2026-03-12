import type { TimeSlot } from '@/types';
import { Clock } from 'lucide-react';

interface TimeSlotSelectorProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSelectSlot: (time: string) => void;
  isLoading?: boolean;
}

export function TimeSlotSelector({ slots, selectedSlot, onSelectSlot, isLoading }: TimeSlotSelectorProps) {
  if (isLoading) {
    return (
      <div className="bg-card rounded-2xl p-6 spa-card-shadow">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4" /> Select Time
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-11 rounded-xl bg-secondary animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 spa-card-shadow">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <Clock className="h-4 w-4" /> Select Time
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {slots.map(slot => (
          <button
            key={slot.id}
            onClick={() => slot.available && onSelectSlot(slot.time)}
            disabled={!slot.available}
            className={`
              h-11 rounded-xl text-sm font-medium transition-all duration-200
              ${!slot.available
                ? 'bg-muted text-muted-foreground/40 cursor-not-allowed line-through'
                : selectedSlot === slot.time
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }
            `}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}
