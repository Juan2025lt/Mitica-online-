import React from 'react';
import { Wine, Flame, Sparkles, Award, Utensils, Coffee, Layers } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { OrganicWaveTexture, MiticaIsotype } from './BrandDecorations';

export const About: React.FC = () => {
  return (
    <section
      id="nosotros"
      className="relative py-16 sm:py-24 bg-[#121110] text-[#F5F1EA] overflow-hidden"
    >
      {/* Decorative Wave texture in background */}
      <OrganicWaveTexture position="bottom-left" className="bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171614] border border-[#AB7758]/30 mb-4">
            <MiticaIsotype className="w-3.5 h-3.5 text-[#AB7758]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#AB7758] uppercase">
              Nuestra Esencia
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F5F1EA] leading-tight">
            Una cocina de autor donde cada plato cuenta una <span className="italic font-normal text-[#AB7758]">historia singular</span>.
          </h2>
        </div>

        {/* Narrative & Image Composition (Mobile 1 col -> Tablet/Desktop 2 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Text Description */}
          <div className="lg:col-span-6 space-y-5 text-[#A79C8C] font-light text-sm sm:text-base leading-relaxed">
            <p>
              Ubicado sobre la emblemática <strong className="text-[#F5F1EA] font-normal">Av. Carlos F. Gauss en Villa Belgrano</strong>, MÍTICA nació con una premisa innegociable: desafiar lo convencional a través de la alta cocina de autor y la reverencia al producto noble.
            </p>
            <p>
              Nuestra carta entrelaza la precisión de la cocina internacional contemporánea con cortes de carne madurados con maestría, pesca fresca seleccionada, pulpo con cocciones lentas de más de 6 horas y pastas caseras elaboradas con sémola de grano duro.
            </p>
            <p>
              En el corazón del salón conviven dos espacios protagónicos: una <strong className="text-[#F5F1EA] font-normal">barra de sushi con cocina a la vista</strong> donde el itamae crea cada pieza en tiempo real, y una <strong className="text-[#F5F1EA] font-normal">cava privada climatizada con más de 100 etiquetas</strong> que abarcan desde pequeños productores boutique hasta leyendas de alta gama como Dom Pérignon.
            </p>
            <p className="text-xs sm:text-sm text-[#7A7266] pt-2 border-t border-white/5">
              Desde las 08:00 de la mañana abrimos nuestras puertas con café de especialidad y desayunos de pastelería propia, seguidos de opciones de menú ejecutivo al mediodía, meriendas de autor y el ritual nocturno de coctelería y cena.
            </p>
          </div>

          {/* Visual Showcase (Images) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Cocina de autor en Mítica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold tracking-wider text-[#F5F1EA] bg-[#0A0B0C]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                  Cocina al Fuego
                </span>
              </div>
              <div className="bg-[#171614] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-center">
                <span className="text-xs text-[#AB7758] font-semibold uppercase tracking-widest mb-1">
                  Categoría
                </span>
                <span className="font-serif text-2xl text-[#F5F1EA]">
                  {RESTAURANT_INFO.priceRange}
                </span>
                <span className="text-xs text-[#7A7266] mt-1">
                  Alta cocina gastronómica
                </span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
              <div className="bg-[#171614] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-center">
                <span className="text-xs text-[#AB7758] font-semibold uppercase tracking-widest mb-1">
                  Cava Propia
                </span>
                <span className="font-serif text-2xl text-[#F5F1EA]">
                  +100
                </span>
                <span className="text-xs text-[#7A7266] mt-1">
                  Etiquetas nacionales & del mundo
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
                  alt="Barra de sushi a la vista"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold tracking-wider text-[#F5F1EA] bg-[#0A0B0C]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                  Sushi Bar a la Vista
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Strip (Mobile friendly 2x2 grid -> 4 cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
          <div className="bg-[#171614]/70 border border-white/5 rounded-xl p-4 sm:p-5">
            <div className="w-8 h-8 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center mb-3">
              <Flame className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#F5F1EA] mb-1">Cocina de Autor</h3>
            <p className="text-xs text-[#A79C8C] leading-snug">
              Carnes dry-aged, pulpo en cocción 6h, pastas frescas y pesca salvaje.
            </p>
          </div>

          <div className="bg-[#171614]/70 border border-white/5 rounded-xl p-4 sm:p-5">
            <div className="w-8 h-8 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center mb-3">
              <Utensils className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#F5F1EA] mb-1">Sushi Bar Abierto</h3>
            <p className="text-xs text-[#A79C8C] leading-snug">
              Técnica Omakase, combinados, rolls calientes y nigiris sellados.
            </p>
          </div>

          <div className="bg-[#171614]/70 border border-white/5 rounded-xl p-4 sm:p-5">
            <div className="w-8 h-8 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center mb-3">
              <Wine className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#F5F1EA] mb-1">+100 Etiquetas</h3>
            <p className="text-xs text-[#A79C8C] leading-snug">
              Cava climatizada con servicio Coravin y maridajes de sommelier.
            </p>
          </div>

          <div className="bg-[#171614]/70 border border-white/5 rounded-xl p-4 sm:p-5">
            <div className="w-8 h-8 rounded-lg bg-[#AB7758]/10 text-[#AB7758] flex items-center justify-center mb-3">
              <Coffee className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#F5F1EA] mb-1">6 Días Abiertos</h3>
            <p className="text-xs text-[#A79C8C] leading-snug">
              Lunes a Sábado desde las 8:00 hs con desayunos, almuerzos, meriendas y cena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
