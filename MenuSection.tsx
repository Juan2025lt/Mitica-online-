import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Wine, ChevronRight, Filter, Info, UtensilsCrossed } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MiticaIsotype, OrganicWaveTexture } from './BrandDecorations';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('entradas');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'nuevo' | 'happy-hour'>('all');

  // Find active category configuration
  const currentCategoryConfig = useMemo(() => {
    return MENU_CATEGORIES.find((c) => c.id === selectedCategory) || MENU_CATEGORIES[0];
  }, [selectedCategory]);

  // Handle category switch
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubcategory('Todos');
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (item.category !== selectedCategory) {
        // If there is an active search query across the whole menu, allow searching all items
        if (!searchQuery.trim()) {
          return false;
        }
      }

      // Subcategory filter (e.g. Vinos or Destilados)
      if (
        selectedSubcategory !== 'Todos' &&
        item.subcategory &&
        item.subcategory !== selectedSubcategory
      ) {
        return false;
      }

      // Special tag filter
      if (activeFilter === 'nuevo' && item.tag !== 'NUEVO') return false;
      if (activeFilter === 'happy-hour' && item.tag !== 'HAPPY HOUR') return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesSubcat = item.subcategory?.toLowerCase().includes(query);
        const matchesDetails = item.details?.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesSubcat || matchesDetails;
      }

      return true;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery, activeFilter]);

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-AR')}`;
  };

  return (
    <section
      id="carta"
      className="relative py-16 sm:py-24 bg-[#0A0B0C] text-[#F5F1EA] overflow-hidden"
    >
      <OrganicWaveTexture position="top-right" className="top-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171614] border border-[#AB7758]/30 mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#AB7758]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#AB7758] uppercase">
              Gastronomía & Vinos
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F1EA] mb-3">
            Nuestra Carta
          </h2>
          <p className="text-xs sm:text-sm text-[#A79C8C] font-light max-w-lg mx-auto">
            Platos de autor, sushi bar a la vista, coctelería y una cava con más de 100 etiquetas seleccionadas.
          </p>
        </div>

        {/* Search & Quick Filter Controls */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
          {/* Mobile-first touch search input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#A79C8C] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Buscar platos, sushi, vinos o ingredientes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[46px] pl-11 pr-4 bg-[#171614] border border-white/10 rounded-lg text-sm text-[#F5F1EA] placeholder-[#7A7266] focus:outline-none focus:border-[#AB7758] focus:ring-1 focus:ring-[#AB7758] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A79C8C] hover:text-[#F5F1EA] px-2 py-1"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1 text-xs">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[#7A7266] flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3" /> Filtrar:
              </span>
              <button
                onClick={() => setActiveFilter('all')}
                className={`min-h-[34px] px-3 rounded-md transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#AB7758] text-[#0A0B0C] font-semibold'
                    : 'bg-[#171614] text-[#A79C8C] border border-white/5 hover:text-[#F5F1EA]'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter('nuevo')}
                className={`min-h-[34px] px-3 rounded-md transition-all ${
                  activeFilter === 'nuevo'
                    ? 'bg-[#AB7758] text-[#0A0B0C] font-semibold'
                    : 'bg-[#171614] text-[#A79C8C] border border-white/5 hover:text-[#F5F1EA]'
                }`}
              >
                Novedades
              </button>
              <button
                onClick={() => setActiveFilter('happy-hour')}
                className={`min-h-[34px] px-3 rounded-md transition-all ${
                  activeFilter === 'happy-hour'
                    ? 'bg-[#AB7758] text-[#0A0B0C] font-semibold'
                    : 'bg-[#171614] text-[#A79C8C] border border-white/5 hover:text-[#F5F1EA]'
                }`}
              >
                Happy Hour
              </button>
            </div>

            {/* Table Service Price Note */}
            <div className="text-[11px] text-[#A79C8C] shrink-0 hidden sm:flex items-center gap-1 bg-[#171614] px-2.5 py-1.5 rounded border border-white/5">
              <Info className="w-3 h-3 text-[#AB7758]" />
              <span>*Servicio de mesa: ${RESTAURANT_INFO.tableServiceCost.toLocaleString('es-AR')}</span>
            </div>
          </div>
        </div>

        {/* Categories Bar - Thumb-friendly Horizontal Scroll */}
        <div className="relative mb-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-sans tracking-wide whitespace-nowrap transition-all duration-200 shrink-0 select-none ${
                    isActive
                      ? 'bg-[#AB7758] text-[#0A0B0C] font-semibold shadow-md shadow-[#AB7758]/20 scale-100'
                      : 'bg-[#171614] text-[#A79C8C] hover:text-[#F5F1EA] hover:bg-[#1f1e1c] border border-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Subcategories (Pills for Vinos / Destilados) */}
        {currentCategoryConfig.subcategories && (
          <div className="mb-6 p-3 bg-[#121110] border border-white/5 rounded-xl">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] text-[#A79C8C] uppercase tracking-widest shrink-0 font-medium pl-1">
                Variedades:
              </span>
              {currentCategoryConfig.subcategories.map((subcat) => {
                const isSubActive = selectedSubcategory === subcat;
                return (
                  <button
                    key={subcat}
                    onClick={() => setSelectedSubcategory(subcat)}
                    className={`min-h-[36px] px-3 py-1 rounded-md text-xs tracking-wider whitespace-nowrap transition-all shrink-0 ${
                      isSubActive
                        ? 'bg-[#AB7758]/20 text-[#AB7758] border border-[#AB7758]/50 font-medium'
                        : 'bg-[#171614] text-[#7A7266] hover:text-[#F5F1EA] border border-white/5'
                    }`}
                  >
                    {subcat}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Category Description Subtitle */}
        {currentCategoryConfig.subtitle && !searchQuery && (
          <div className="flex items-center gap-2 mb-6 text-xs text-[#A79C8C] italic">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AB7758]" />
            <span>{currentCategoryConfig.subtitle}</span>
          </div>
        )}

        {/* Items Grid: Mobile 1 column -> Tablet 2 -> Desktop 3 */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#121110] rounded-xl border border-white/5 max-w-md mx-auto p-6">
            <UtensilsCrossed className="w-10 h-10 text-[#7A7266] mx-auto mb-3" />
            <p className="font-serif text-lg text-[#F5F1EA] mb-1">No encontramos coincidencias</p>
            <p className="text-xs text-[#A79C8C] mb-4">
              Probá buscando otro término o seleccioná otra categoría de la carta.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setSelectedCategory('entradas');
              }}
              className="min-h-[44px] px-4 py-2 rounded-lg bg-[#171614] border border-[#AB7758]/40 text-[#AB7758] text-xs font-semibold uppercase tracking-wider"
            >
              Restablecer carta
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="bg-[#121110] border border-white/5 hover:border-[#AB7758]/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
              >
                <div>
                  {/* Item Image if available */}
                  {item.image && (
                    <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden border border-white/10 bg-[#171614]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-60" />
                      {item.tag && (
                        <span className="absolute top-2.5 right-2.5 bg-[#AB7758] text-[#0A0B0C] text-[10px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 rounded shadow-md">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Header row: Item name & Badge if no image */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F5F1EA] group-hover:text-[#AB7758] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {!item.image && item.tag && (
                      <span className="bg-[#AB7758] text-[#0A0B0C] text-[10px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 rounded shrink-0 shadow-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Details / Subcategory / Region info */}
                  {(item.subcategory || item.details) && (
                    <div className="text-[11px] text-[#AB7758] tracking-wider uppercase font-medium mb-2">
                      {item.subcategory} {item.details && `· ${item.details}`}
                    </div>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-[#A79C8C] font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Row: Price & Table notes */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#F5F1EA]">
                    {formatPrice(item.price)}
                  </span>
                  <a
                    href="#reservas"
                    className="text-[11px] uppercase tracking-wider text-[#A79C8C] group-hover:text-[#AB7758] font-sans transition-colors flex items-center gap-1"
                  >
                    <span>Pedir en mesa</span>
                    <ChevronRight className="w-3 h-3 text-[#AB7758]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile table service notice */}
        <div className="mt-8 sm:hidden p-3.5 bg-[#121110] border border-white/5 rounded-lg text-center text-xs text-[#A79C8C]">
          <span className="text-[#AB7758] font-medium">*Servicio de mesa:</span> ${RESTAURANT_INFO.tableServiceCost.toLocaleString('es-AR')} aplicado aparte por persona.
        </div>
      </div>
    </section>
  );
};
