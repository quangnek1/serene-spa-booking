import type { Service, Booking, TimeSlot, Testimonial } from '@/types';
import serviceHeadSpa from '@/assets/service-head-spa.jpg';
import serviceAromatherapy from '@/assets/service-aromatherapy.jpg';
import servicePremium from '@/assets/service-premium.jpg';
import serviceDeluxe from '@/assets/service-deluxe.jpg';
import serviceHotStone from '@/assets/service-hot-stone.jpg';
import serviceScalpDetox from '@/assets/service-scalp-detox.jpg';
import serviceNeckShoulder from '@/assets/service-neck-shoulder.jpg';
import serviceHerbalSteam from '@/assets/service-herbal-steam.jpg';
import serviceDeepTissue from '@/assets/service-deep-tissue.jpg';

// Gallery images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Traditional Japanese Head Spa',
    slug: 'traditional-japanese-head-spa',
    price: 130,
    duration: 75,
    description: 'Experience the authentic Japanese head spa treatment that has been perfected over centuries. This deeply relaxing treatment focuses on your scalp, neck, and shoulders using traditional techniques combined with premium botanical products. Your session begins with a thorough scalp analysis, followed by a customized cleansing ritual, deep conditioning treatment, and an extended head, neck and shoulder massage that will leave you feeling completely renewed.',
    shortDescription: 'A deeply relaxing traditional treatment focusing on scalp, neck, and shoulders using authentic Japanese techniques.',
    image: serviceHeadSpa,
    features: ['Scalp analysis', 'Deep cleansing ritual', 'Botanical conditioning', 'Extended head massage', 'Neck & shoulder massage'],
  },
  {
    id: '2',
    name: 'Aromatherapy Bliss',
    slug: 'aromatherapy-bliss',
    price: 120,
    duration: 60,
    description: 'Immerse yourself in the healing power of essential oils combined with expert massage techniques. This treatment uses carefully selected aromatherapy blends to promote deep relaxation, relieve stress, and restore balance to both mind and body. Each oil is chosen specifically for its therapeutic properties, creating a personalized experience that addresses your unique needs.',
    shortDescription: 'Healing essential oils combined with expert massage techniques for deep relaxation and stress relief.',
    image: serviceAromatherapy,
    features: ['Personalized oil blend', 'Stress relief massage', 'Scalp treatment', 'Aromatherapy inhalation', 'Hot towel wrap'],
  },
  {
    id: '3',
    name: 'Premium Japanese Head Spa',
    slug: 'premium-japanese-head-spa',
    price: 180,
    duration: 110,
    description: 'Our premium offering takes the traditional head spa experience to new heights. This extended session includes everything in our traditional treatment plus additional luxury elements such as a hot stone facial massage, premium Japanese hair treatment, and an extended relaxation period. The treatment uses our exclusive range of Japanese botanical products imported directly from Japan.',
    shortDescription: 'An elevated head spa experience with luxury additions including hot stone facial massage and premium Japanese products.',
    image: servicePremium,
    features: ['Everything in Traditional', 'Hot stone facial massage', 'Premium Japanese products', 'Extended relaxation', 'Complimentary tea ceremony'],
  },
  {
    id: '4',
    name: 'Signature Deluxe Combo',
    slug: 'signature-deluxe-combo',
    price: 240,
    duration: 120,
    description: 'The ultimate spa experience combining our best treatments into one luxurious session. Begin with a full head spa treatment, followed by an aromatherapy body massage, and finish with a revitalizing facial. This comprehensive package is designed for those seeking complete relaxation and rejuvenation in a single visit.',
    shortDescription: 'The ultimate combination of head spa, aromatherapy massage, and revitalizing facial in one luxurious session.',
    image: serviceDeluxe,
    features: ['Full head spa treatment', 'Aromatherapy body massage', 'Revitalizing facial', 'Hot towel therapy', 'Premium tea service'],
  },
  {
    id: '5',
    name: 'Hot Stone Therapy',
    slug: 'hot-stone-therapy',
    price: 150,
    duration: 90,
    description: 'Smooth, heated basalt stones are placed on key points of the body to melt away tension and promote deep relaxation. The warmth penetrates muscles, easing stiffness and improving circulation. Combined with gentle massage strokes, this treatment creates a profoundly calming experience that balances your energy and restores harmony.',
    shortDescription: 'Heated basalt stones melt away tension and promote deep relaxation with improved circulation.',
    image: serviceHotStone,
    features: ['Heated basalt stones', 'Full body placement', 'Tension relief massage', 'Improved circulation', 'Energy balancing'],
  },
  {
    id: '6',
    name: 'Scalp Detox & Renewal',
    slug: 'scalp-detox-renewal',
    price: 110,
    duration: 50,
    description: 'A targeted scalp treatment designed to deeply cleanse, detoxify, and revitalize your scalp. Using premium Japanese botanical products, this treatment removes product build-up, excess oil, and impurities while nourishing the scalp with vitamins and minerals. Ideal for those experiencing scalp concerns or seeking healthier, more vibrant hair.',
    shortDescription: 'Deep cleansing scalp treatment to detoxify, remove build-up, and revitalize with Japanese botanicals.',
    image: serviceScalpDetox,
    features: ['Deep scalp cleanse', 'Detoxifying treatment', 'Japanese botanical products', 'Scalp nourishment', 'Stimulating massage'],
  },
  {
    id: '7',
    name: 'Neck & Shoulder Relief',
    slug: 'neck-shoulder-relief',
    price: 95,
    duration: 45,
    description: 'Focused relief for the neck, shoulders, and upper back — the areas where most people carry tension and stress. This targeted treatment uses a combination of deep tissue techniques, acupressure, and stretching to release knots, reduce pain, and restore mobility. Perfect for office workers or anyone experiencing upper body tension.',
    shortDescription: 'Targeted deep tissue relief for neck, shoulders, and upper back tension and stress.',
    image: serviceNeckShoulder,
    features: ['Deep tissue techniques', 'Acupressure points', 'Tension release', 'Mobility restoration', 'Posture improvement'],
  },
  {
    id: '8',
    name: 'Herbal Steam Facial',
    slug: 'herbal-steam-facial',
    price: 100,
    duration: 55,
    description: 'A luxurious facial treatment combining the benefits of herbal steam with Japanese skincare rituals. Warm herbal steam opens pores and prepares the skin for deep cleansing, followed by a customized facial massage and nourishing mask. This treatment leaves your skin glowing, hydrated, and refreshed with a youthful radiance.',
    shortDescription: 'Luxurious facial combining herbal steam with Japanese skincare rituals for glowing, refreshed skin.',
    image: serviceHerbalSteam,
    features: ['Herbal steam therapy', 'Deep pore cleansing', 'Japanese skincare ritual', 'Facial massage', 'Nourishing mask'],
  },
  {
    id: '9',
    name: 'Deep Tissue Relaxation',
    slug: 'deep-tissue-relaxation',
    price: 160,
    duration: 80,
    description: 'A full-body deep tissue massage that targets chronic muscle tension and promotes complete relaxation. Using firm pressure and slow strokes, this treatment works on the deeper layers of muscle and connective tissue. Combined with aromatherapy oils and a serene atmosphere, it provides both physical relief and mental tranquility.',
    shortDescription: 'Full-body deep tissue massage targeting chronic tension with aromatherapy for complete relaxation.',
    image: serviceDeepTissue,
    features: ['Full body massage', 'Deep tissue techniques', 'Aromatherapy oils', 'Chronic tension relief', 'Mental relaxation'],
  },
];

export const mockGalleryImages = [
  { src: gallery1, alt: 'Japanese zen spa interior' },
  { src: gallery2, alt: 'Spa treatment room' },
  { src: gallery3, alt: 'Relaxation area' },
  { src: serviceHeadSpa, alt: 'Head spa treatment' },
  { src: serviceAromatherapy, alt: 'Aromatherapy session' },
  { src: servicePremium, alt: 'Premium spa experience' },
  { src: gallery4, alt: 'Zen garden with raked sand' },
  { src: gallery5, alt: 'Premium Japanese spa products' },
  { src: gallery6, alt: 'Tea ceremony at the spa' },
  { src: gallery7, alt: 'Spa lounge and waiting area' },
  { src: gallery8, alt: 'Aromatherapy oil diffuser' },
  { src: gallery9, alt: 'Treatment bed with flower petals' },
  { src: serviceHotStone, alt: 'Hot stone therapy session' },
  { src: serviceNeckShoulder, alt: 'Relaxation treatment' },
  { src: serviceDeepTissue, alt: 'Deep tissue massage atmosphere' },
];

export const mockTimeSlots: TimeSlot[] = [
  { id: '1', time: '09:00', available: true },
  { id: '2', time: '09:30', available: true },
  { id: '3', time: '10:00', available: false },
  { id: '4', time: '10:30', available: true },
  { id: '5', time: '11:00', available: true },
  { id: '6', time: '11:30', available: false },
  { id: '7', time: '12:00', available: true },
  { id: '8', time: '12:30', available: true },
  { id: '9', time: '13:00', available: false },
  { id: '10', time: '13:30', available: true },
  { id: '11', time: '14:00', available: true },
  { id: '12', time: '14:30', available: true },
  { id: '13', time: '15:00', available: false },
  { id: '14', time: '15:30', available: true },
  { id: '15', time: '16:00', available: true },
  { id: '16', time: '16:30', available: true },
  { id: '17', time: '17:00', available: true },
  { id: '18', time: '17:30', available: false },
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    serviceId: '1',
    serviceName: 'Traditional Japanese Head Spa',
    date: '2026-03-20',
    time: '10:30',
    status: 'confirmed',
    paymentMethod: 'online',
    totalPrice: 130,
    depositAmount: 30,
    createdAt: '2026-03-10T10:00:00Z',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerPhone: '0412345678',
  },
  {
    id: 'b2',
    serviceId: '3',
    serviceName: 'Premium Japanese Head Spa',
    date: '2026-03-25',
    time: '14:00',
    status: 'pending_payment',
    paymentMethod: 'at_store',
    totalPrice: 180,
    depositAmount: 0,
    createdAt: '2026-03-11T14:00:00Z',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerPhone: '0412345678',
  },
  {
    id: 'b3',
    serviceId: '2',
    serviceName: 'Aromatherapy Bliss',
    date: '2026-02-15',
    time: '11:00',
    status: 'completed',
    paymentMethod: 'online',
    totalPrice: 120,
    depositAmount: 25,
    createdAt: '2026-02-10T09:00:00Z',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerPhone: '0412345678',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely heavenly experience! The head spa treatment was unlike anything I\'ve ever had. I left feeling completely refreshed and my hair has never looked better.',
    date: '2026-02-28',
  },
  {
    id: 't2',
    name: 'Emily T.',
    rating: 5,
    text: 'The Premium Japanese Head Spa was worth every penny. The attention to detail and the serene atmosphere made it a truly transformative experience.',
    date: '2026-02-15',
  },
  {
    id: 't3',
    name: 'Michael R.',
    rating: 5,
    text: 'I came in stressed and left feeling like a new person. The aromatherapy bliss treatment is now my monthly self-care ritual. Highly recommend!',
    date: '2026-01-30',
  },
];
