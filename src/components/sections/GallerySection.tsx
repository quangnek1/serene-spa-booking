import { motion } from 'framer-motion';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import serviceHeadSpa from '@/assets/service-head-spa.jpg';
import serviceAromatherapy from '@/assets/service-aromatherapy.jpg';
import servicePremium from '@/assets/service-premium.jpg';

const images = [
  { src: gallery1, alt: 'Japanese zen spa interior' },
  { src: gallery2, alt: 'Spa treatment room' },
  { src: gallery3, alt: 'Relaxation area' },
  { src: serviceHeadSpa, alt: 'Head spa treatment' },
  { src: serviceAromatherapy, alt: 'Aromatherapy session' },
  { src: servicePremium, alt: 'Premium spa experience' },
];

export function GallerySection() {
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
          {images.map((img, i) => (
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
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
