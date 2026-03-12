import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-spa.jpg';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kokoro Japanese Head Spa interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6"
        >
          Experience Tranquility.
          <br />
          Rediscover Balance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg sm:text-xl text-primary-foreground/85 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Authentic Japanese head spa treatments in the heart of Melbourne, designed to restore your mind, body, and spirit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/booking">
            <Button size="lg" className="rounded-full px-8 text-base h-12">
              Book Your Escape
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
