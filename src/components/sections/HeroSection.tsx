import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-spa.jpg';
import heroImage2 from '@/assets/hero-2.jpg';
import heroImage3 from '@/assets/hero-3.jpg';
import heroImage4 from '@/assets/hero-4.jpg';

const heroSlides = [
  { src: heroImage1, alt: 'Hannah HeadSpa and Massage interior' },
  { src: heroImage2, alt: 'Japanese zen spa treatment room' },
  { src: heroImage3, alt: 'Japanese head spa scalp treatment' },
  { src: heroImage4, alt: 'Luxury spa relaxation lounge' },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={heroSlides[current].src}
          alt={heroSlides[current].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6"
        >
          Japanese Head Spa Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg sm:text-xl text-primary-foreground/85 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Relax your mind, refresh your scalp, and restore balance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/booking">
            <Button size="lg" className="rounded-full px-8 text-base h-12">
              Book Now
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              View Services
            </Button>
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary-foreground w-8' : 'bg-primary-foreground/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
