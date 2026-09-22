import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const StickyMobileBar: React.FC = () => {
  const scrollToReservations = () => {
    const elem = document.getElementById('reservas');
    if (elem) {
      const headerOffset = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside
      id="mobile-sticky-action-bar"
      aria-label="Acciones rápidas para móvil"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#0A0B0C]/95 backdrop-blur-md border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        {/* WhatsApp Floating / Quick Action Button */}
        <a
          id="btn-sticky-whatsapp"
          href={RESTAURANT_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] min-w-[48px] rounded-xl bg-[#171614] border border-[#AB7758]/50 text-[#AB7758] hover:text-[#F5F1EA] hover:bg-[#AB7758]/20 flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-md"
          aria-label="Contactar por WhatsApp a Mítica"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Primary Copper "Reservar mesa" Button */}
        <button
          id="btn-sticky-reservar"
          onClick={scrollToReservations}
          className="flex-1 min-h-[48px] bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] font-semibold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-[#AB7758]/25"
        >
          <Calendar className="w-4 h-4 text-[#0A0B0C]" />
          <span>Reservar mesa</span>
        </button>
      </div>
    </aside>
  );
};
