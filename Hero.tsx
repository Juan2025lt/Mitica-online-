import React from 'react';
import { Calendar, UtensilsCrossed, Star, Clock, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { OrganicWaveTexture } from './BrandDecorations';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
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

  // Check current operational status
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTimeDec = hour + minute / 60;

  let isOpenNow = false;
  let statusText = 'Cerrado en este momento';

  if (day === 0) {
    statusText = 'Cerrado los domingos';
  } else if (day >= 1 && day <= 4) {
    // Mon-Thu: 8:00 to 00:30
    if (currentTimeDec >= 8.0 || currentTimeDec < 0.5) {
      isOpenNow = true;
      statusText = 'Abierto hoy hasta las 00:30';
    } else {
      statusText = 'Abre hoy a las 08:00';
    }
  } else {
    // Fri-Sat: 8:00 to 01:00
    if (currentTimeDec >= 8.0 || currentTimeDec < 1.0) {
      isOpenNow = true;
      statusText = 'Abierto hoy hasta la 01:00';
    } else {
      statusText = 'Abre hoy a las 08:00';
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0A0B0C]"
    >
      {/* Background Image with warm dark vignetting */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85"
          alt="Salón y Barra de Mítica en Córdoba"
          className="w-full h-full object-cover object-center scale-105 opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/75 to-[#0A0B0C]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0B0C]/50 to-[#0A0B0C]" />
      </div>

      {/* Decorative Organic Brand Wave in corner */}
      <OrganicWaveTexture position="top-right" className="top-0 right-0" />

      {/* Main Content Container - Mobile First Centered/Padded */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full my-auto text-center flex flex-col items-center">
        {/* Brand Tag / Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171614] border border-[#AB7758]/40 mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#AB7758] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.2em] text-[#AB7758] uppercase">
            Cocina de Autor · Villa Belgrano
          </span>
        </div>

        {/* High-contrast Editorial Serif Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F5F1EA] leading-[1.15] mb-5 max-w-4xl">
          El fuego, el mar y la tierra convertidos en <span className="italic font-normal text-[#F5F1EA] underline decoration-[#AB7758]/50 decoration-1 underline-offset-8">experiencia</span>
        </h1>

        {/* Subtitle with key proposal highlights */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#A79C8C] max-w-2xl font-light leading-relaxed mb-8 sm:mb-10">
          Carnes seleccionadas maduradas al fuego, barra de sushi con cocina a la vista, cava con más de 100 etiquetas de autor y coctelería en Córdoba Capital.
        </p>

        {/* Action Buttons - Stacked on mobile with 48px min height, side-by-side on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
          <button
            id="hero-btn-reservar"
            onClick={() => scrollToSection('reservas')}
            className="min-h-[50px] px-8 py-3.5 bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] font-semibold text-sm tracking-wider uppercase rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#AB7758]/25 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#0A0B0C]" />
            <span>Reservar mesa</span>
          </button>

          <button
            id="hero-btn-ver-carta"
            onClick={() => scrollToSection('carta')}
            className="min-h-[50px] px-8 py-3.5 bg-[#171614]/80 hover:bg-[#171614] text-[#F5F1EA] hover:text-[#AB7758] border border-white/15 hover:border-[#AB7758]/50 font-medium text-sm tracking-wider uppercase rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 backdrop-blur-sm"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#AB7758]" />
            <span>Explorar carta</span>
          </button>
        </div>

        {/* Happy Hour Badge Pill */}
        <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#121110] border border-white/10 text-xs text-[#A79C8C]">
          <Sparkles className="w-3.5 h-3.5 text-[#AB7758]" />
          <span>
            <strong className="text-[#F5F1EA] font-medium">Happy Hour:</strong> Lun a Sáb 18:00 a 20:00 (Cocktails 50% OFF)
          </span>
        </div>
      </div>

      {/* Franja Inferior: TripAdvisor Rating + Horarios + Ubicación tocable */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        <div className="bg-[#121110]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-xs sm:text-sm">
            {/* 1. TripAdvisor Reputation */}
            <a
              id="hero-tripadvisor-link"
              href={RESTAURANT_INFO.contact.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 sm:py-0 sm:px-4 group hover:text-[#AB7758] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#171614] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#F5F1EA] text-sm">
                    {RESTAURANT_INFO.reputation.tripAdvisorRating} / 5.0
                  </span>
                  <span className="text-[10px] text-[#A79C8C] uppercase tracking-wider">
                    TripAdvisor
                  </span>
                </div>
                <span className="text-[#A79C8C] text-xs">
                  Puesto #{RESTAURANT_INFO.reputation.rankNumber} de {RESTAURANT_INFO.reputation.totalRestaurants} en Córdoba
                </span>
              </div>
            </a>

            {/* 2. Horarios & Estado en Tiempo Real */}
            <div className="flex items-center gap-3 py-3 sm:py-0 sm:px-4">
              <div
                className={`w-10 h-10 rounded-full bg-[#171614] border flex items-center justify-center shrink-0 ${
                  isOpenNow ? 'border-emerald-500/40 text-emerald-400' : 'border-amber-500/40 text-amber-400'
                }`}
              >
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#F5F1EA]">
                    {statusText}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                    }`}
                  />
                </div>
                <span className="text-[#A79C8C] text-xs">
                  Lun a Sáb desde 08:00 hs · Dom cerrado
                </span>
              </div>
            </div>

            {/* 3. Ubicación Tocable */}
            <a
              id="hero-address-link"
              href={RESTAURANT_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 sm:py-0 sm:px-4 group hover:text-[#AB7758] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#171614] border border-[#AB7758]/40 flex items-center justify-center text-[#AB7758] shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-[#F5F1EA] group-hover:text-[#AB7758] transition-colors">
                  {RESTAURANT_INFO.address.street}
                </span>
                <span className="text-[#A79C8C] text-xs">
                  {RESTAURANT_INFO.address.neighborhood}, Córdoba (Click para abrir mapa)
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => scrollToSection('nosotros')}
            aria-label="Desplazar a Nosotros"
            className="text-[#7A7266] hover:text-[#AB7758] transition-colors p-1"
          >
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
