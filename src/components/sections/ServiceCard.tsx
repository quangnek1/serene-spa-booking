import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, DollarSign, ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden spa-card-shadow hover:spa-card-shadow-hover transition-all duration-300 hover:-translate-y-1"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {service.hot && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold shadow-md">
              <Flame className="h-3 w-3" /> Popular
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {service.price}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {service.duration} min
              </span>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full text-primary gap-1">
              Book <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
