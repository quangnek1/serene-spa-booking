import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="spa-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Kokoro" className="h-16 w-16 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Experience the art of Japanese head spa therapy. Relax, rejuvenate, and rediscover balance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Booking', href: '/booking' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                143 Railway Pl, Williamstown VIC 3016, Australia
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                0478-050-389
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@kokoroheadspa.com.au
              </span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                Mon – Fri: 9:00 AM – 6:00 PM
              </span>
              <span className="pl-6">Sat: 9:00 AM – 5:00 PM</span>
              <span className="pl-6">Sun: 10:00 AM – 4:00 PM</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Kokoro Japanese Head Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
