import { useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { mockServices, mockCategories } from '@/lib/api/mockData';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const filteredServices = activeCategoryId
    ? mockServices.filter(s => s.categoryId === activeCategoryId)
    : mockServices;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-primary py-16">
          <div className="spa-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-semibold text-primary-foreground mb-3"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70 max-w-xl mx-auto"
            >
              Explore our full range of authentic Japanese head spa and massage treatments.
            </motion.p>
          </div>
        </section>

        <section className="spa-section">
          <div className="spa-container">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => setActiveCategoryId(null)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategoryId === null
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All Services
              </button>
              {mockCategories.filter(c => c.status).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategoryId === cat.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
