import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { BookingCalendar } from '@/components/booking/BookingCalendar';
import { TimeSlotSelector } from '@/components/booking/TimeSlotSelector';
import { BookingForm, type BookingFormData } from '@/components/booking/BookingForm';
import { CheckoutSummary } from '@/components/booking/CheckoutSummary';
import { mockServices, mockTimeSlots } from '@/lib/api/mockData';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Check } from 'lucide-react';
import type { Service } from '@/types';

const steps = ['Service', 'Date & Time', 'Details', 'Checkout'];

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preselectedServiceId = searchParams.get('service');

  const [currentStep, setCurrentStep] = useState(preselectedServiceId ? 1 : 0);
  const [selectedService, setSelectedService] = useState<Service | null>(
    preselectedServiceId ? mockServices.find(s => s.id === preselectedServiceId) || null : null
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<BookingFormData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const formattedDate = selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : '';

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentStep(1);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep(2);
  };

  const handleFormSubmit = (data: BookingFormData) => {
    setCustomerInfo(data);
    setCurrentStep(3);
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsProcessing(false);
    navigate('/booking/success');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-primary py-12">
          <div className="spa-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-semibold text-primary-foreground mb-3"
            >
              Book Your Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70"
            >
              Choose your treatment, pick a time, and we'll take care of the rest.
            </motion.p>
          </div>
        </section>

        {/* Steps */}
        <div className="spa-container py-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => i < currentStep && setCurrentStep(i)}
                  disabled={i > currentStep}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    i === currentStep
                      ? 'text-primary'
                      : i < currentStep
                        ? 'text-primary/60 cursor-pointer'
                        : 'text-muted-foreground/40'
                  }`}
                >
                  <span className={`
                    w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors
                    ${i === currentStep ? 'bg-primary text-primary-foreground' : ''}
                    ${i < currentStep ? 'bg-primary/20 text-primary' : ''}
                    ${i > currentStep ? 'bg-muted text-muted-foreground/40' : ''}
                  `}>
                    {i < currentStep ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{step}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-8 sm:w-12 h-px ${i < currentStep ? 'bg-primary/30' : 'bg-border'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 0: Select Service */}
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Select a Service</h2>
              <div className="grid gap-3">
                {mockServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 ${
                      selectedService?.id === service.id
                        ? 'bg-primary/5 ring-2 ring-primary'
                        : 'bg-card spa-card-shadow hover:-translate-y-0.5 hover:spa-card-shadow-hover'
                    }`}
                  >
                    <img src={service.image} alt={service.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{service.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{service.duration} min</p>
                    </div>
                    <p className="text-lg font-semibold text-primary">${service.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Date & Time */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Pick a Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BookingCalendar selectedDate={selectedDate} onSelectDate={handleDateSelect} />
                {selectedDate && (
                  <TimeSlotSelector
                    slots={mockTimeSlots}
                    selectedSlot={selectedTime}
                    onSelectSlot={handleTimeSelect}
                  />
                )}
              </div>
            </motion.div>
          )}

          {/* Step 2: Customer Info */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Your Information</h2>
              <BookingForm onSubmit={handleFormSubmit} />
            </motion.div>
          )}

          {/* Step 3: Checkout */}
          {currentStep === 3 && selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Confirm & Pay</h2>
              <CheckoutSummary
                service={selectedService}
                date={formattedDate}
                time={selectedTime || ''}
                onCheckout={handleCheckout}
                isLoading={isProcessing}
              />
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
