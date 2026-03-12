import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-spa.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="spa-section">
      <div className="spa-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Japanese head spa treatment"
              className="rounded-2xl w-full object-cover aspect-[4/5] spa-card-shadow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kokoro Japanese Head Spa in Melbourne and Williamstown VIC 3016, Australia, understands that safety and sanitation are paramount to our customers.
              </p>
              <p>
                Our implements, equipment, and electrical instruments are always thoroughly cleaned and subjected to an approved sanitizing and disinfecting process before being reused. We routinely consult with the State Cosmetology Regulations to ensure full compliance.
              </p>
              <p>
                Our team of skilled therapists have been trained in authentic Japanese head spa techniques, bringing the centuries-old tradition of scalp care and relaxation to Melbourne.
              </p>
            </div>
            <Link to="/services">
              <Button className="mt-8 rounded-full gap-2">
                Discover Our Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
