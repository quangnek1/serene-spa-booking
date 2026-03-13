import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, DollarSign, CreditCard, Store } from 'lucide-react';
import type { Service } from '@/types';

type PaymentMethod = 'online' | 'at_store';

interface CheckoutSummaryProps {
  service: Service;
  date: string;
  time: string;
  onCheckout: (paymentMethod: PaymentMethod) => void;
  isLoading?: boolean;
}

export function CheckoutSummary({ service, date, time, onCheckout, isLoading }: CheckoutSummaryProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('online');
  const depositAmount = Math.round(service.price * 0.2);

  return (
    <div className="bg-card rounded-2xl p-6 spa-card-shadow">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <CreditCard className="h-4 w-4" /> Booking Summary
      </h3>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <img
            src={service.image}
            alt={service.name}
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div>
            <p className="font-medium text-foreground text-sm">{service.name}</p>
            <p className="text-xs text-muted-foreground">{service.duration} minutes</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{time}</span>
          </div>
        </div>

        <Separator />

        {/* Payment Method Selection */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Payment Method</p>
          <label
            className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
              paymentMethod === 'online'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/30'
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === 'online'}
              onChange={() => setPaymentMethod('online')}
              className="accent-[hsl(var(--primary))]"
            />
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground">Pay Deposit Online</span>
          </label>
          <label
            className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
              paymentMethod === 'at_store'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/30'
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="at_store"
              checked={paymentMethod === 'at_store'}
              onChange={() => setPaymentMethod('at_store')}
              className="accent-[hsl(var(--primary))]"
            />
            <Store className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground">Pay At Store</span>
          </label>
        </div>

        <Separator />

        {paymentMethod === 'online' ? (
          <>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service Price</span>
                <span className="text-foreground font-medium flex items-center gap-0.5">
                  <DollarSign className="h-3.5 w-3.5" />{service.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deposit (20%)</span>
                <span className="text-foreground font-medium flex items-center gap-0.5">
                  <DollarSign className="h-3.5 w-3.5" />{depositAmount}
                </span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-base font-semibold">
              <span className="text-foreground">Total</span>
              <span className="text-primary">${service.price}</span>
            </div>
          </>
        ) : (
          <div className="bg-accent/50 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Service Price</span>
              <span className="text-foreground font-semibold">${service.price}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You will pay for the service at the spa when you arrive.
            </p>
          </div>
        )}
      </div>

      <Button
        onClick={() => onCheckout(paymentMethod)}
        disabled={isLoading}
        className="w-full mt-6 rounded-full h-11"
      >
        {isLoading
          ? 'Processing...'
          : paymentMethod === 'online'
            ? `Pay Deposit ($${depositAmount})`
            : 'Confirm Booking'
        }
      </Button>

      {paymentMethod === 'online' && (
        <p className="text-xs text-muted-foreground text-center mt-3">
          Remaining balance of ${service.price - depositAmount} due at appointment.
        </p>
      )}

      {paymentMethod === 'at_store' && (
        <p className="text-xs text-muted-foreground text-center mt-3">
          Your booking status will be <span className="font-medium text-foreground">Pending Payment</span> until you pay at the spa.
        </p>
      )}
    </div>
  );
}
