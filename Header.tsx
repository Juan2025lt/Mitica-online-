import React, { useState, useEffect } from 'react';
import { Menu, Calendar } from 'lucide-react';
import { MiticaIsotype } from './BrandDecorations';
import { MobileDrawer } from './MobileDrawer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0B0C]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0A0B0C]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Isotype */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="MÍTICA - Inicio"
          >
            {/* Angular minimal "M" isotype seal */}
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#121110] border border-[#AB7758]/40 flex items-center justify-center text-[#AB7758] group-hover:border-[#AB7758] transition-colors">
              <MiticaIsotype className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif tracking-[0.35em] text-lg md:text-xl font-medium text-[#F5F1EA] group-hover:text-[#AB7758] transition-colors leading-none">
                MÍTICA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A79C8C] mt-1 font-sans">
                Cocina de Autor
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans tracking-widest uppercase">
            <button
              id="desktop-nav-nosotros"
              onClick={() => scrollToSection('nosotros')}
              className="text-[#A79C8C] hover:text-[#F5F1EA] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#AB7758] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Nosotros
            </button>
            <button
              id="desktop-nav-carta"
              onClick={() => scrollToSection('carta')}
              className="text-[#A79C8C] hover:text-[#F5F1EA] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#AB7758] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Carta
            </button>
            <button
              id="desktop-nav-galeria"
              onClick={() => scrollToSection('galeria')}
              className="text-[#A79C8C] hover:text-[#F5F1EA] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#AB7758] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Galería
            </button>
            <button
              id="desktop-nav-contacto"
              onClick={() => scrollToSection('contacto')}
              className="text-[#A79C8C] hover:text-[#F5F1EA] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#AB7758] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Contacto
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Header "Reservar mesa" button in copper - ALWAYS visible on mobile & desktop */}
            <button
              id="header-btn-reservar"
              onClick={() => scrollToSection('reservas')}
              className="min-h-[44px] px-3.5 sm:px-5 py-2.5 bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-md transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-[#AB7758]/20 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A0B0C]" />
              <span>Reservar<span className="hidden sm:inline"> mesa</span></span>
            </button>

            {/* Mobile Hamburger toggle (min 44px touch target) */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-md bg-[#171614] border border-white/10 text-[#F5F1EA] hover:text-[#AB7758] active:scale-95 transition-all flex items-center justify-center"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full screen mobile drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
};
