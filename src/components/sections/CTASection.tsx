import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section id="contact" className="spa-section bg-primary">
      <div className="spa-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Unwind?
          </h2>
          <p className="text-primary-foreground/75 mb-8 leading-relaxed text-lg">
            Book your Japanese head spa experience today and discover a new level of relaxation and rejuvenation.
          </p>
          <Link to="/booking">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-10 text-base h-12"
            >
              Reserve Your Session
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
