import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { mockGalleryImages } from '@/lib/api/mockData';

export function GallerySection() {
  // Show first 6 on homepage
  const previewImages = mockGalleryImages.slice(0, 6);

  return (
    <section id="gallery" className="spa-section bg-spa-warm">
      <div className="spa-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into the serene environment that awaits you at Hannah HeadSpa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group aspect-[4/3] rounded-2xl overflow-hidden spa-card-shadow"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/gallery">
            <Button variant="outline" className="rounded-full gap-2">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
