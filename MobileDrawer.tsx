import React from 'react';
import { X, Phone, MessageCircle, MapPin, Clock, Calendar, UtensilsCrossed, Image as ImageIcon } from 'lucide-react';
import { MiticaIsotype } from './BrandDecorations';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#0A0B0C] text-[#F5F1EA] animate-in fade-in duration-200">
      {/* Top bar inside drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#171614] border border-[#AB7758]/30 flex items-center justify-center text-[#AB7758]">
            <MiticaIsotype className="w-4 h-4" />
          </div>
          <span className="font-serif tracking-[0.25em] text-lg font-medium text-[#F5F1EA]">
            MÍTICA
          </span>
        </div>
        <button
          id="btn-close-mobile-menu"
          onClick={onClose}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#171614] text-[#F5F1EA] hover:text-[#AB7758] active:scale-95 transition-all"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main navigation links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-4">
          <button
            id="mobile-nav-carta"
            onClick={() => handleLinkClick('carta')}
            className="w-full min-h-[52px] flex items-center justify-between text-left py-3 border-b border-white/5 text-xl font-serif tracking-wider text-[#F5F1EA] active:text-[#AB7758] transition-colors"
          >
            <span className="flex items-center gap-3">
              <UtensilsCrossed className="w-5 h-5 text-[#AB7758]" />
              Carta & Vinos
            </span>
            <span className="text-xs uppercase tracking-widest text-[#AB7758] font-sans font-medium px-2 py-0.5 rounded bg-[#AB7758]/10 border border-[#AB7758]/30">
              Ver Menú
            </span>
          </button>

          <button
            id="mobile-nav-reservas"
            onClick={() => handleLinkClick('reservas')}
            className="w-full min-h-[52px] flex items-center justify-between text-left py-3 border-b border-white/5 text-xl font-serif tracking-wider text-[#F5F1EA] active:text-[#AB7758] transition-colors"
          >
            <span className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#AB7758]" />
              Reservar Mesa
            </span>
            <span className="text-xs uppercase tracking-widest text-[#AB7758] font-sans font-semibold">
              Online
            </span>
          </button>

          <button
            id="mobile-nav-nosotros"
            onClick={() => handleLinkClick('nosotros')}
            className="w-full min-h-[52px] flex items-center text-left py-3 border-b border-white/5 text-lg font-serif tracking-wider text-[#A79C8C] active:text-[#F5F1EA] transition-colors"
          >
            Nosotros & Propuesta
          </button>

          <button
            id="mobile-nav-galeria"
            onClick={() => handleLinkClick('galeria')}
            className="w-full min-h-[52px] flex items-center text-left py-3 border-b border-white/5 text-lg font-serif tracking-wider text-[#A79C8C] active:text-[#F5F1EA] transition-colors"
          >
            <span className="flex items-center gap-3">
              <ImageIcon className="w-5 h-5 text-[#7A7266]" />
              Galería de Platos y Salón
            </span>
          </button>

          <button
            id="mobile-nav-contacto"
            onClick={() => handleLinkClick('contacto')}
            className="w-full min-h-[52px] flex items-center text-left py-3 border-b border-white/5 text-lg font-serif tracking-wider text-[#A79C8C] active:text-[#F5F1EA] transition-colors"
          >
            <span className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#7A7266]" />
              Ubicación & Horarios
            </span>
          </button>
        </nav>

        {/* Quick Direct Mobile Actions */}
        <div className="pt-6 space-y-3">
          <button
            id="drawer-btn-reserve-now"
            onClick={() => handleLinkClick('reservas')}
            className="w-full min-h-[48px] bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] font-semibold tracking-wider uppercase text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#AB7758]/20 active:scale-[0.98] transition-all"
          >
            <Calendar className="w-4 h-4" />
            Reservar Mesa Ahora
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              id="drawer-btn-whatsapp"
              href={RESTAURANT_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center gap-2 bg-[#171614] border border-white/10 text-[#F5F1EA] hover:text-[#AB7758] text-xs font-medium uppercase tracking-wider rounded-lg active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#AB7758]" />
              WhatsApp
            </a>
            <a
              id="drawer-btn-call"
              href={`tel:${RESTAURANT_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="min-h-[44px] flex items-center justify-center gap-2 bg-[#171614] border border-white/10 text-[#F5F1EA] hover:text-[#AB7758] text-xs font-medium uppercase tracking-wider rounded-lg active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 text-[#AB7758]" />
              Llamar
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-[#7A7266] space-y-1">
            <div className="flex items-center gap-2 text-[#A79C8C]">
              <MapPin className="w-3.5 h-3.5 text-[#AB7758]" />
              <span>Av. Carlos F. Gauss 5447, Villa Belgrano</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#AB7758]" />
              <span>Lun a Jue 8:00 a 00:30 · Vie y Sáb 8:00 a 01:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
