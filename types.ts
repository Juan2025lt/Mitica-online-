export type TagType = 'NUEVO' | 'HAPPY HOUR' | 'RECOMENDADO' | 'ALTA GAMA';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  description?: string;
  tag?: TagType;
  image?: string;
  origin?: string;
  vintage?: string;
  details?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle?: string;
  subcategories?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'platos' | 'sushi' | 'cava' | 'salon' | 'cocteleria';
  imageUrl: string;
  caption?: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  areaPreference: 'salon' | 'sushi-bar' | 'cava' | 'cualquiera';
  specialOccasion?: string;
  notes?: string;
}

export interface RestaurantHours {
  days: string;
  time: string;
  isClosed?: boolean;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  rubro: string;
  priceRange: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    full: string;
    googleMapsUrl: string;
    mapsEmbedUrl: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappUrl: string;
    instagram: string;
    instagramUrl: string;
    facebookUrl: string;
    spotifyUrl: string;
    linkedinUrl: string;
    tripAdvisorUrl: string;
    googleBusinessUrl: string;
  };
  hours: RestaurantHours[];
  happyHour: {
    title: string;
    regular: string;
    late: string;
    discounts: string;
  };
  reputation: {
    tripAdvisorRating: number;
    tripAdvisorReviewsCount: number;
    rankingCity: string;
    rankNumber: number;
    totalRestaurants: number;
  };
  tableServiceCost: number;
}
