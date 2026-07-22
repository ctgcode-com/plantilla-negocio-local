import type { LocalData } from '../data';

export const dataEn: LocalData = {
  brand: {
    name: 'El Roble Steakhouse',
    initial: 'R',
    tagline: 'Wood-fired flavor since 1994',
  },
  nav: [
    { label: 'About Us', href: '#nosotros' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#galeria' },
    { label: 'Location', href: '#ubicacion' },
  ],
  navCta: { label: 'Book a Table', href: 'https://wa.me/573001234567' },
  hero: {
    eyebrow: 'Wood-Fired Cuisine · Bogotá',
    title: 'Prime Steaks, Wood Smoke & Family Tradition',
    subtitle: 'Three decades grilling the finest cuts of beef, pork, and chicken over open wood flames. Warm family atmosphere and authentic rustic flavor.',
    backgroundImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop',
    primaryCta: { label: 'Reserve via WhatsApp', href: 'https://wa.me/573001234567' },
    secondaryCta: { label: 'View Menu', href: '#menu' },
  },
  about: {
    eyebrow: 'Our Story',
    title: 'One recipe, two generations, thousands of family meals',
    paragraphs: [
      'In 1994, Don Augusto lit the wood stove of El Roble for the first time in a cozy spot on 80th Street. The formula was simple: native hardwood, hand-selected cuts, and recipes originating from Tolima.',
      'Thirty years later, we still cook exclusively over open wood fire—because gas simply cannot match the flavor—welcoming guests like family across three Bogotá locations.',
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop',
    highlights: [
      { value: '1994', label: 'Year Founded' },
      { value: '3', label: 'Bogotá Branches' },
      { value: '4.8', label: 'Google Rating' },
    ],
  },
  menu: {
    title: 'Our Menu',
    subtitle: 'House favorites. Available for dine-in or takeout.',
    sections: [
      {
        category: 'Wood-Fired Grills',
        items: [
          { name: 'El Roble Sampler Platter', description: 'Chorizo, blood sausage, pork ribs, Andean potatoes, and stuffed arepa. Serves 2-3.', price: '$72,000 COP', featured: true },
          { name: 'Picanha / Top Sirloin 300g', description: 'Served with crispy fried cassava, garden salad, and homemade guacamole.', price: '$45,000 COP' },
          { name: 'Smoked BBQ Ribs', description: 'Marinated 12 hours and slow roasted in our signature house sauce.', price: '$38,000 COP' },
          { name: 'Wood-Fired Half Chicken', description: 'Herb-marinated half chicken served with charcoal roasted potatoes.', price: '$32,000 COP' },
        ],
      },
      {
        category: 'Side Dishes',
        items: [
          { name: 'House Stewed Beans', description: 'Slow cooked with smoked pork rib broth.', price: '$8,000 COP' },
          { name: 'Fried Cassava with Hogao', description: 'Crispy cassava served with fresh tomato-onion Creole relish.', price: '$7,000 COP' },
          { name: 'Stuffed Arepa', description: 'Traditional corn cake stuffed with Costeño cheese & butter.', price: '$5,000 COP' },
        ],
      },
      {
        category: 'Drinks & Beverages',
        items: [
          { name: 'Fresh Tropical Juice', description: 'Lulo, blackberry, mango, or passion fruit.', price: '$6,500 COP' },
          { name: 'Coconut Lemonade', description: 'Doña Marta\'s legendary creamy coconut lemonade.', price: '$8,000 COP', featured: true },
          { name: 'Local Colombian Beers', description: 'Águila, Club Colombia, Costeña.', price: '$5,000 COP' },
        ],
      },
    ],
  },
  gallery: {
    title: 'Inside El Roble',
    subtitle: 'Family dining atmosphere, wood fire hearths, long communal tables.',
    images: [
      { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop', alt: 'Prepared table setting', span: 'tall' },
      { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80&auto=format&fit=crop', alt: 'Wood fire grilling' },
      { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop', alt: 'Signature dish' },
      { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80&auto=format&fit=crop', alt: 'Family dining room', span: 'wide' },
      { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80&auto=format&fit=crop', alt: 'House specialty' },
      { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80&auto=format&fit=crop', alt: 'Breakfast menu' },
    ],
  },
  hours: {
    title: 'Opening Hours',
    subtitle: 'Lunch and dinner daily, closed Tuesdays.',
    schedule: [
      { day: 'Monday', hours: '11:30 AM – 9:00 PM' },
      { day: 'Tuesday', hours: 'Closed', closed: true },
      { day: 'Wednesday', hours: '11:30 AM – 9:00 PM' },
      { day: 'Thursday', hours: '11:30 AM – 9:00 PM' },
      { day: 'Friday', hours: '11:30 AM – 10:00 PM' },
      { day: 'Saturday', hours: '11:00 AM – 10:00 PM' },
      { day: 'Sunday', hours: '11:00 AM – 7:00 PM' },
    ],
    note: 'On public holidays we operate on Sunday hours. Closed on December 24 & 31.',
  },
  location: {
    title: 'Location & Directions',
    subtitle: 'Three branches in Bogotá. Showing our flagship restaurant.',
    address: 'Carrera 13 # 82-45, Chapinero Alto',
    cityRegion: 'Bogotá, Colombia',
    directions: 'On the main avenue, one block from Parque de los Hippies. Parking available at Andino Mall (2-minute walk).',
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.067%2C4.660%2C-74.057%2C4.670&amp;layer=mapnik',
  },
  contact: {
    phone: '+57 (1) 555-7720',
    whatsapp: '+573001234567',
    email: 'reservas@elroble.co',
    labels: {
      whatsapp: 'Chat on WhatsApp',
      phone: 'Call Restaurant',
    },
  },
  footer: {
    description: 'Wood-fired barbecues made with family tradition. Three locations in Bogotá since 1994.',
    socials: [
      { type: 'instagram', url: 'https://instagram.com' },
      { type: 'facebook', url: 'https://facebook.com' },
      { type: 'whatsapp', url: 'https://wa.me/573001234567' },
    ],
    copyright: '© 2026 El Roble Steakhouse. All rights reserved.',
  },
};
