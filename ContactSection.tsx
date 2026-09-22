import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  ExternalLink,
  Instagram,
  Facebook,
  Music2,
  Linkedin,
  Star
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MiticaIsotype, OrganicWaveTexture } from './BrandDecorations';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative py-16 sm:py-24 bg-[#121110] text-[#F5F1EA] overflow-hidden"
    >
      <OrganicWaveTexture position="top-right" className="top-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171614] border border-[#AB7758]/30 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#AB7758]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#AB7758] uppercase">
              Ubicación & Contacto
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F1EA] mb-3">
            Visitanos en Villa Belgrano
          </h2>
          <p className="text-xs sm:text-sm text-[#A79C8C] font-light max-w-md mx-auto">
            Todos nuestros canales directos para reservas, consultas y cómo llegar a MÍTICA.
          </p>
        </div>

        {/* 2-Column Responsive Layout (Stacked on mobile -> Side-by-side on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Touch Cards & Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* 1. Direccion (Click-to-map) */}
            <a
              id="contact-card-map"
              href={RESTAURANT_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#171614] border border-white/10 hover:border-[#AB7758]/60 rounded-xl p-5 group transition-all duration-200 active:scale-[0.99] shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center shrink-0 border border-[#AB7758]/30 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#AB7758] font-medium">
                      Dirección en Córdoba
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7A7266] group-hover:text-[#AB7758] transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F5F1EA] mt-1 group-hover:text-[#AB7758] transition-colors">
                    {RESTAURANT_INFO.address.street}
                  </h3>
                  <p className="text-xs text-[#A79C8C] mt-0.5">
                    {RESTAURANT_INFO.address.neighborhood}, {RESTAURANT_INFO.address.city}
                  </p>
                  <span className="inline-block text-[11px] text-[#AB7758] underline mt-2 font-sans">
                    Tocá para abrir en Google Maps
                  </span>
                </div>
              </div>
            </a>

            {/* 2. Teléfono & WhatsApp (Click-to-call / Click-to-chat) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                id="contact-card-phone"
                href={`tel:${RESTAURANT_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="bg-[#171614] border border-white/10 hover:border-[#AB7758]/60 rounded-xl p-4 flex items-center gap-3.5 group transition-all active:scale-[0.99]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center shrink-0 border border-[#AB7758]/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A7266] block">
                    Teléfono directo
                  </span>
                  <span className="text-xs font-semibold text-[#F5F1EA] group-hover:text-[#AB7758] transition-colors">
                    {RESTAURANT_INFO.contact.phone}
                  </span>
                </div>
              </a>

              <a
                id="contact-card-whatsapp"
                href={RESTAURANT_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171614] border border-white/10 hover:border-[#AB7758]/60 rounded-xl p-4 flex items-center gap-3.5 group transition-all active:scale-[0.99]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center shrink-0 border border-[#AB7758]/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A7266] block">
                    WhatsApp Chat
                  </span>
                  <span className="text-xs font-semibold text-[#F5F1EA] group-hover:text-[#AB7758] transition-colors">
                    +54 351 291-4030
                  </span>
                </div>
              </a>
            </div>

            {/* 3. Horarios Detallados */}
            <div className="bg-[#171614] border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2.5 mb-4 text-[#AB7758]">
                <Clock className="w-4 h-4" />
                <h3 className="font-serif text-base text-[#F5F1EA]">Horarios de Atención</h3>
              </div>

              <div className="space-y-2.5 text-xs">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-[#A79C8C]">{h.days}</span>
                    <span
                      className={`font-medium ${
                        h.isClosed ? 'text-[#7A7266]' : 'text-[#F5F1EA]'
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Happy Hour Feature Card inside hours */}
              <div className="mt-4 p-3.5 rounded-lg bg-[#0A0B0C] border border-[#AB7758]/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-[#AB7758] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{RESTAURANT_INFO.happyHour.title}</span>
                </div>
                <p className="text-[11px] text-[#F5F1EA]">
                  <strong>Regular:</strong> {RESTAURANT_INFO.happyHour.regular}
                </p>
                <p className="text-[11px] text-[#F5F1EA]">
                  <strong>Late:</strong> {RESTAURANT_INFO.happyHour.late}
                </p>
                <p className="text-[11px] text-[#A79C8C] pt-1">
                  {RESTAURANT_INFO.happyHour.discounts}
                </p>
              </div>
            </div>

            {/* 4. Social Icons Strip */}
            <div className="bg-[#171614] border border-white/10 rounded-xl p-5">
              <span className="text-xs uppercase tracking-widest text-[#7A7266] block mb-3 font-medium">
                Conectá en Redes Sociales
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Instagram (Principal) */}
                <a
                  href={RESTAURANT_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3.5 rounded-lg bg-[#0A0B0C] border border-[#AB7758]/40 hover:border-[#AB7758] text-[#F5F1EA] hover:text-[#AB7758] text-xs flex items-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#AB7758]" />
                  <span>{RESTAURANT_INFO.contact.instagram}</span>
                </a>

                {/* TripAdvisor */}
                <a
                  href={RESTAURANT_INFO.contact.tripAdvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 rounded-lg bg-[#0A0B0C] border border-white/10 hover:border-emerald-500/50 text-[#A79C8C] hover:text-emerald-400 text-xs flex items-center gap-1.5 transition-colors"
                  title="TripAdvisor"
                >
                  <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  <span>TripAdvisor 4.6</span>
                </a>

                {/* Facebook */}
                <a
                  href={RESTAURANT_INFO.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-[#0A0B0C] border border-white/10 hover:border-[#AB7758] text-[#A79C8C] hover:text-[#F5F1EA] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* Spotify */}
                <a
                  href={RESTAURANT_INFO.contact.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-[#0A0B0C] border border-white/10 hover:border-[#AB7758] text-[#A79C8C] hover:text-[#F5F1EA] flex items-center justify-center transition-colors"
                  aria-label="Playlist Spotify Mítica"
                >
                  <Music2 className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={RESTAURANT_INFO.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-[#0A0B0C] border border-white/10 hover:border-[#AB7758] text-[#A79C8C] hover:text-[#F5F1EA] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="lg:col-span-7">
            <div className="bg-[#171614] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="p-4 sm:p-5 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#F5F1EA]">
                    Ubicación en Villa Belgrano
                  </h3>
                  <p className="text-xs text-[#A79C8C]">
                    Av. Carlos F. Gauss 5447, Córdoba
                  </p>
                </div>
                <a
                  href={RESTAURANT_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] px-3.5 py-1.5 bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe with dark filter */}
              <div className="relative w-full h-[360px] sm:h-[460px] bg-[#0A0B0C]">
                <iframe
                  title="Mapa de Mítica Restaurante en Villa Belgrano"
                  src={RESTAURANT_INFO.address.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-[#121110] text-xs text-[#7A7266] flex items-center justify-between">
                <span>Estacionamiento disponible en la zona</span>
                <a
                  href={RESTAURANT_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AB7758] hover:underline"
                >
                  Abrir aplicación Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
