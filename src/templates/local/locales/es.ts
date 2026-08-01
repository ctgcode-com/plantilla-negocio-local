import type { LocalData } from '../data';

export const dataEs: LocalData = {
  brand: {
    name: 'Asadero El Roble',
    initial: 'R',
    tagline: 'Sabor de leña desde 1994',
  },
  nav: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Menú', href: '#menu' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Ubicación', href: '#ubicacion' },
  ],
  navCta: { label: 'Reservar', href: 'https://wa.me/573001234567' },
  hero: {
    eyebrow: 'Cocina a la leña · Bogotá',
    title: 'Carne, leña y memoria de familia',
    subtitle: 'Tres décadas asando los mejores cortes de res, cerdo y pollo sobre fogón de leña. Ambiente familiar, sazón del campo.',
    backgroundImage: '/images/hero-mesa-servida.avif',
    primaryCta: { label: 'Reservar por WhatsApp', href: 'https://wa.me/573001234567' },
    secondaryCta: { label: 'Ver el menú', href: '#menu' },
  },
  about: {
    eyebrow: 'Nuestra historia',
    title: 'Una receta, dos generaciones, miles de almuerzos',
    paragraphs: [
      'En 1994, Don Augusto encendió por primera vez el fogón del Roble en un pequeño local de la 80. La fórmula era simple: madera de algarrobo, cortes seleccionados y sazón aprendida en el Tolima.',
      'Treinta años después seguimos asando con leña — porque el gas no sabe igual — y atendidos por la misma familia. Tres locales, el mismo plato.',
    ],
    image: '/images/historia-salon-comedor.avif',
    imageAlt: 'Salón del restaurante con mesas de madera y bancas tapizadas',
    highlights: [
      { value: '1994', label: 'Año de fundación' },
      { value: '3', label: 'Locales en Bogotá' },
      { value: '4.8', label: 'Estrellas en Google' },
    ],
  },
  menu: {
    title: 'Lo que servimos',
    subtitle: 'Los favoritos de la casa. Pídelos en el restaurante o para llevar.',
    sections: [
      {
        category: 'Asados a la leña',
        items: [
          { name: 'Picada El Roble', description: 'Chorizo, morcilla, costilla, papa criolla y arepa. Para 2-3 personas.', price: '$72.000', featured: true },
          { name: 'Punta de anca 300g', description: 'Servida con yuca frita, ensalada de la casa y guacamole.', price: '$45.000' },
          { name: 'Costillas BBQ', description: 'Marinadas 12 horas y horneadas con salsa de la casa.', price: '$38.000' },
          { name: 'Pollo a la leña', description: 'Medio pollo marinado en hierbas con papa al carbón.', price: '$32.000' },
        ],
      },
      {
        category: 'Acompañamientos',
        items: [
          { name: 'Frijoles de la casa', description: 'Cocinados con costilla ahumada.', price: '$8.000' },
          { name: 'Yuca frita con hogao', description: 'Hogao de tomate de la huerta.', price: '$7.000' },
          { name: 'Arepa rellena', description: 'Queso costeño y mantequilla.', price: '$5.000' },
        ],
      },
      {
        category: 'Bebidas',
        items: [
          { name: 'Jugo natural del día', description: 'Lulo, mora, mango o maracuyá.', price: '$6.500' },
          { name: 'Limonada de coco', description: 'Receta de Doña Marta.', price: '$8.000', featured: true },
          { name: 'Cerveza nacional', description: 'Águila, Club, Costeña.', price: '$5.000' },
        ],
      },
    ],
  },
  gallery: {
    title: 'El Roble por dentro',
    subtitle: 'Ambiente familiar, leña al fondo, mesas largas.',
    images: [
      { src: '/images/galeria-pizza-artesanal.avif', alt: 'Pizza artesanal recién horneada sobre tabla de madera', span: 'tall' },
      { src: '/images/galeria-bowl-ensalada.avif', alt: 'Bowl de ensalada con pollo, maíz, tomate y verduras frescas' },
      { src: '/images/galeria-terraza-atardecer.avif', alt: 'Terraza del restaurante junto al agua al atardecer' },
      { src: '/images/galeria-comedor-barra.avif', alt: 'Comedor principal con la barra al fondo', span: 'wide' },
      { src: '/images/galeria-salon-mesas.avif', alt: 'Salón con mesas de madera y lámparas colgantes' },
      { src: '/images/galeria-desayuno-pancakes.avif', alt: 'Torre de pancakes con miel de arce y banano' },
    ],
  },
  hours: {
    title: 'Horario de atención',
    subtitle: 'Almuerzo y cena, todos los días excepto martes.',
    schedule: [
      { day: 'Lunes', hours: '11:30 AM – 9:00 PM' },
      { day: 'Martes', hours: 'Cerrado', closed: true },
      { day: 'Miércoles', hours: '11:30 AM – 9:00 PM' },
      { day: 'Jueves', hours: '11:30 AM – 9:00 PM' },
      { day: 'Viernes', hours: '11:30 AM – 10:00 PM' },
      { day: 'Sábado', hours: '11:00 AM – 10:00 PM' },
      { day: 'Domingo', hours: '11:00 AM – 7:00 PM' },
    ],
    note: 'Los días festivos atendemos en horario de domingo. Cerramos el 24 y 31 de diciembre.',
  },
  location: {
    title: 'Cómo llegar',
    subtitle: 'Tres locales en Bogotá. Acá te mostramos el principal.',
    address: 'Carrera 13 # 82-45, Chapinero Alto',
    cityRegion: 'Bogotá, Colombia',
    directions: 'Sobre la principal, a una cuadra del Parque de los Hippies. Parqueadero del centro comercial Andino a 2 minutos.',
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.067%2C4.660%2C-74.057%2C4.670&amp;layer=mapnik',
  },
  contact: {
    phone: '+57 (1) 555-7720',
    whatsapp: '+573001234567',
    email: 'reservas@elroble.co',
    labels: {
      whatsapp: 'Escribir por WhatsApp',
      phone: 'Llamar al restaurante',
    },
  },
  footer: {
    description: 'Asados a la leña hechos en familia. Tres locales en Bogotá desde 1994.',
    socials: [
      { type: 'instagram', url: 'https://instagram.com' },
      { type: 'facebook', url: 'https://facebook.com' },
      { type: 'whatsapp', url: 'https://wa.me/573001234567' },
    ],
    copyright: '© 2026 Asadero El Roble. Todos los derechos reservados.',
  },
};
