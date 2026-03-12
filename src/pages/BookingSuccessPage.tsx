import { Link } from 'react-router-dom';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Home } from 'lucide-react';

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="spa-section">
        <div className="spa-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-3">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Your appointment has been booked successfully. A confirmation email has been sent with all the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/dashboard">
                <Button className="rounded-full gap-2 w-full sm:w-auto">
                  <Calendar className="h-4 w-4" /> View My Bookings
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="rounded-full gap-2 w-full sm:w-auto">
                  <Home className="h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
