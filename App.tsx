/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0C] text-[#F5F1EA] flex flex-col selection:bg-[#AB7758] selection:text-[#0A0B0C]">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Nosotros & Propuesta */}
        <About />

        {/* 3. Carta & Vinos */}
        <MenuSection />

        {/* 4. Galería Visual */}
        <GallerySection />

        {/* 5. Formulario de Reservas */}
        <ReservationSection />

        {/* 6. Contacto, Ubicación & Horarios */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Thumb-first Sticky Action Bar for Mobile */}
      <StickyMobileBar />
    </div>
  );
}

