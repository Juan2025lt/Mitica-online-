import { RestaurantInfo } from '../types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: 'MÍTICA',
  tagline: 'Cocina de Autor · Sushi Bar & Cava',
  rubro: 'Cocina de autor de alta gama',
  priceRange: '$$$$',
  address: {
    street: 'Av. Carlos F. Gauss 5447',
    neighborhood: 'B° Villa Belgrano',
    city: 'Córdoba Capital, Argentina',
    full: 'Av. Carlos F. Gauss 5447, B° Villa Belgrano, Córdoba Capital',
    googleMapsUrl: 'https://maps.google.com/?q=Av.+Carlos+F.+Gauss+5447,+Villa+Belgrano,+C%C3%B3rdoba',
    // Clean embed centered on Villa Belgrano Gauss coordinates
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.4259586149467!2d-64.24838612349704!3d-31.374828194247547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432997103213ab1%3A0x8ddf73ecbbcd6e87!2sAv.%20Carlos%20Federico%20Gauss%205447%2C%20X5021%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar'
  },
  contact: {
    phone: '+54 351 291-4030',
    phoneFormatted: '+54 351 291-4030',
    whatsappUrl: 'https://wa.me/543512914030?text=Hola%20M%C3%ADtica%2C%20quisiera%20consultar%20por%20una%20reserva.',
    instagram: '@mitica.gauss',
    instagramUrl: 'https://www.instagram.com/mitica.gauss',
    facebookUrl: 'https://www.facebook.com/search/top?q=mitica.gauss',
    spotifyUrl: 'https://open.spotify.com/search/mitica%20cordoba',
    linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=mitica%20cordoba',
    tripAdvisorUrl: 'https://www.tripadvisor.com.ar/Search?q=Mitica+Gauss+Cordoba',
    googleBusinessUrl: 'https://maps.google.com/?q=Mitica+Gauss+Cordoba'
  },
  hours: [
    { days: 'Lunes a Jueves', time: '08:00 a 00:30' },
    { days: 'Viernes y Sábado', time: '08:00 a 01:00' },
    { days: 'Domingo', time: 'Cerrado', isClosed: true }
  ],
  happyHour: {
    title: 'Experiencia Happy Hour',
    regular: 'Lunes a Sábado de 18:00 a 20:00 hs',
    late: 'Lunes a Jueves de 23:00 hs a cierre',
    discounts: 'Cocktails seleccionados 50% OFF · Entradas seleccionadas 20% OFF'
  },
  reputation: {
    tripAdvisorRating: 4.6,
    tripAdvisorReviewsCount: 23,
    rankingCity: 'Córdoba Capital',
    rankNumber: 62,
    totalRestaurants: 768
  },
  tableServiceCost: 1500
};
