import { MapPin, Phone, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="spa-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Hannah HeadSpa and Massage" className="h-14 w-14 brightness-0 invert" />
              <p className="font-semibold text-lg">HANNAH HEADSPA<br/>AND MASSAGE</p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                5/158 Barkly St Footscray 3011 VIC, Australia
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                0424 999 868
              </span>
              <a
                href="https://www.google.com/maps/place/158+Barkly+St,+Footscray+VIC+3011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                View on Google Maps
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61575365498498"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/hannahheadspaandmassage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>

            {/* Opening Hours */}
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p className="font-medium text-primary-foreground">Opening Hours</p>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 5:00 PM</p>
              <p>Sun: 10:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Column 2: Google Map */}
          <div className="rounded-xl overflow-hidden h-[220px] md:h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2!2d144.8997!3d-37.8005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d15a1c5d8a7%3A0x0!2s5%2F158+Barkly+St%2C+Footscray+VIC+3011!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hannah HeadSpa and Massage location"
            />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Hannah HeadSpa and Massage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}