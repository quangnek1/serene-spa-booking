import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { mockServices } from '@/lib/api/mockData';
import { motion } from 'framer-motion';
import { Clock, DollarSign, ArrowLeft, Check } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = mockServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="spa-container spa-section text-center">
          <h1 className="text-2xl font-semibold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button variant="outline" className="rounded-full">Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="spa-section">
        <div className="spa-container">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full rounded-2xl aspect-[4/3] object-cover spa-card-shadow"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                {service.name}
              </h1>

              <div className="flex items-center gap-6 mb-6">
                <span className="flex items-center gap-1.5 text-lg text-primary font-semibold">
                  <DollarSign className="h-5 w-5" />{service.price}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-5 w-5" />{service.duration} minutes
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="bg-spa-warm rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to={`/booking?service=${service.id}`}>
                <Button size="lg" className="rounded-full px-10 h-12 text-base w-full sm:w-auto">
                  Book Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
