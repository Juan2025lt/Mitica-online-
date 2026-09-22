import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { MiticaIsotype, OrganicWaveTexture } from './BrandDecorations';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'platos', label: 'Cocina de Autor' },
    { id: 'sushi', label: 'Sushi Bar' },
    { id: 'cava', label: 'Cava & Vinos' },
    { id: 'salon', label: 'Salón' },
    { id: 'cocteleria', label: 'Coctelería' }
  ];

  const filteredItems = activeCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filteredItems.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedPhoto(filteredItems[currentIndex + 1]);
    } else {
      setSelectedPhoto(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredItems[currentIndex - 1]);
    } else {
      setSelectedPhoto(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <section
      id="galeria"
      className="relative py-16 sm:py-24 bg-[#121110] text-[#F5F1EA] overflow-hidden"
    >
      <OrganicWaveTexture position="top-left" className="top-0 left-0 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171614] border border-[#AB7758]/30 mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-[#AB7758]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#AB7758] uppercase">
              Atmósfera & Creaciones
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F1EA] mb-3">
            Galería Visual
          </h2>
          <p className="text-xs sm:text-sm text-[#A79C8C] font-light max-w-lg mx-auto">
            Un recorrido por nuestros platos, la barra de sushi a la vista, la cava y la arquitectura de nuestro espacio en Villa Belgrano.
          </p>
        </div>

        {/* Filter Pills (Scrollable on Mobile) */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-xs font-sans tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#AB7758] text-[#0A0B0C] font-semibold shadow-md shadow-[#AB7758]/20'
                    : 'bg-[#171614] text-[#A79C8C] hover:text-[#F5F1EA] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid: 1 col on mobile -> 2-3 cols on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] bg-[#171614] border border-white/10 hover:border-[#AB7758]/50 transition-all duration-300 shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
              
              {/* Zoom icon hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A0B0C]/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif text-base sm:text-lg text-[#F5F1EA] group-hover:text-[#AB7758] transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-[#A79C8C] font-light mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#0A0B0C]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Top Bar with Close button */}
          <div className="flex items-center justify-between z-10 w-full max-w-5xl mx-auto">
            <div className="flex items-center gap-2">
              <MiticaIsotype className="w-5 h-5 text-[#AB7758]" />
              <span className="text-xs uppercase tracking-widest text-[#A79C8C]">
                {selectedPhoto.category}
              </span>
            </div>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#171614] text-[#F5F1EA] hover:text-[#AB7758] border border-white/10 active:scale-95 transition-all"
              aria-label="Cerrar vista previa"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Large Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl mx-auto w-full">
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 min-h-[44px] min-w-[44px] rounded-full bg-[#0A0B0C]/80 border border-white/10 flex items-center justify-center text-[#F5F1EA] hover:text-[#AB7758] active:scale-95 transition-all"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 min-h-[44px] min-w-[44px] rounded-full bg-[#0A0B0C]/80 border border-white/10 flex items-center justify-center text-[#F5F1EA] hover:text-[#AB7758] active:scale-95 transition-all"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption Details Footer */}
          <div className="text-center max-w-lg mx-auto z-10">
            <h4 className="font-serif text-lg text-[#F5F1EA]">{selectedPhoto.title}</h4>
            {selectedPhoto.caption && (
              <p className="text-xs sm:text-sm text-[#A79C8C] mt-1">{selectedPhoto.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
