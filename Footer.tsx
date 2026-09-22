import React from 'react';
import { ChevronUp, MapPin, Phone, Instagram } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MiticaIsotype } from './BrandDecorations';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0B0C] border-t border-white/10 text-[#F5F1EA] py-12 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5 text-center md:text-left">
          {/* Brand Logo & Isotype */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#171614] border border-[#AB7758]/40 flex items-center justify-center text-[#AB7758]">
              <MiticaIsotype className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif tracking-[0.35em] text-xl font-medium text-[#F5F1EA] block">
                MÍTICA
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A79C8C] block font-sans">
                Cocina de Autor · Sushi Bar · Cava
              </span>
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs text-[#A79C8C]">
            <a
              href={RESTAURANT_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#AB7758] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#AB7758]" />
              <span>{RESTAURANT_INFO.address.street}, Villa Belgrano</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 hover:text-[#AB7758] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#AB7758]" />
              <span>{RESTAURANT_INFO.contact.phone}</span>
            </a>
            <a
              href={RESTAURANT_INFO.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#AB7758] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#AB7758]" />
              <span>{RESTAURANT_INFO.contact.instagram}</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="min-h-[44px] min-w-[44px] rounded-full bg-[#171614] border border-white/10 text-[#A79C8C] hover:text-[#AB7758] flex items-center justify-center transition-colors active:scale-95"
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7266] gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} MÍTICA Restaurant. Todos los derechos reservados.</p>
          <p>Cocina de autor de alta gama en Córdoba, Argentina.</p>
        </div>
      </div>
    </footer>
  );
};
