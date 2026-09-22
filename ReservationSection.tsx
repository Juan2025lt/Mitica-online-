import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MiticaIsotype, OrganicWaveTexture } from './BrandDecorations';
import { ReservationFormData } from '../types';

export const ReservationSection: React.FC = () => {
  // Tomorrow as default date in YYYY-MM-DD format
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    date: defaultDateStr,
    time: '21:00',
    guests: 2,
    areaPreference: 'salon',
    specialOccasion: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    // Almuerzo
    { time: '12:30', period: 'Almuerzo' },
    { time: '13:00', period: 'Almuerzo' },
    { time: '13:30', period: 'Almuerzo' },
    { time: '14:00', period: 'Almuerzo' },
    // Happy hour / Merienda
    { time: '18:30', period: 'Happy Hour' },
    { time: '19:30', period: 'Happy Hour' },
    // Cena
    { time: '20:30', period: 'Cena' },
    { time: '21:00', period: 'Cena' },
    { time: '21:30', period: 'Cena' },
    { time: '22:00', period: 'Cena' },
    { time: '22:30', period: 'Cena' },
    { time: '23:00', period: 'Cena / Late' }
  ];

  const handleGuestChange = (delta: number) => {
    setFormData((prev) => {
      const nextCount = Math.max(1, Math.min(20, prev.guests + delta));
      return { ...prev, guests: nextCount };
    });
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg('Por favor ingresá tu nombre y apellido.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Por favor ingresá un número de teléfono válido.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Por favor seleccioná una fecha.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);

    // Format human-readable date
    const [year, month, day] = formData.date.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    const areaName =
      formData.areaPreference === 'sushi-bar'
        ? 'Barra de Sushi a la vista'
        : formData.areaPreference === 'cava'
        ? 'Espacio cercano a la Cava'
        : formData.areaPreference === 'salon'
        ? 'Salón Principal'
        : 'Cualquier ubicación disponible';

    const message = `Hola Mítica! Quisiera solicitar una reserva con los siguientes datos:
- Nombre: ${formData.fullName}
- Teléfono: ${formData.phone}
- Fecha: ${formattedDate}
- Hora: ${formData.time} hs
- Personas: ${formData.guests} ${formData.guests === 1 ? 'persona' : 'personas'}
- Preferencia de área: ${areaName}
${formData.specialOccasion ? `- Ocasión: ${formData.specialOccasion}` : ''}
${formData.notes ? `- Aclaraciones: ${formData.notes}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/543512914030?text=${encodedMessage}`;

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="reservas"
      className="relative py-16 sm:py-24 bg-[#0A0B0C] text-[#F5F1EA] overflow-hidden"
    >
      <OrganicWaveTexture position="bottom-right" className="bottom-0 right-0 opacity-25" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171614] border border-[#AB7758]/30 mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#AB7758]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#AB7758] uppercase">
              Mesa & Experiencia
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F1EA] mb-3">
            Reservá tu Lugar
          </h2>
          <p className="text-xs sm:text-sm text-[#A79C8C] font-light max-w-md mx-auto">
            Completá tus datos para coordinar tu mesa directamente con nuestro equipo de anfitriones por WhatsApp o teléfono.
          </p>
        </div>

        {/* Confirmation Modal / Card if submitted */}
        {isSubmitted ? (
          <div className="bg-[#121110] border border-[#AB7758]/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl max-w-lg mx-auto animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#AB7758]/10 text-[#AB7758] border border-[#AB7758]/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#F5F1EA] mb-2">¡Solicitud Generada!</h3>
            <p className="text-xs sm:text-sm text-[#A79C8C] mb-6 leading-relaxed">
              Hemos abierto tu WhatsApp para enviar los detalles directamente a <strong className="text-[#F5F1EA]">+54 351 291-4030</strong>. Te confirmaremos la disponibilidad a la brevedad.
            </p>

            <div className="bg-[#171614] rounded-xl p-4 text-left text-xs space-y-2 mb-6 border border-white/5">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#7A7266]">Titular:</span>
                <span className="text-[#F5F1EA] font-medium">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#7A7266]">Fecha y Hora:</span>
                <span className="text-[#F5F1EA] font-medium">{formData.date} · {formData.time} hs</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#7A7266]">Comensales:</span>
                <span className="text-[#F5F1EA] font-medium">{formData.guests} personas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A7266]">Ubicación:</span>
                <span className="text-[#AB7758] font-medium">Av. Gauss 5447</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex-1 bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Reabrir WhatsApp
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="min-h-[48px] px-4 bg-[#171614] text-[#A79C8C] hover:text-[#F5F1EA] text-xs font-medium uppercase tracking-wider rounded-lg border border-white/10"
              >
                Modificar datos
              </button>
            </div>
          </div>
        ) : (
          /* Mobile-First Optimized Booking Form */
          <form
            onSubmit={handleWhatsAppBooking}
            className="bg-[#121110] border border-white/10 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6"
          >
            {errorMsg && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* 1. Comensales (Thumb-accessible +/- counter) */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium">
                Cantidad de personas
              </label>
              <div className="flex items-center justify-between bg-[#171614] border border-white/10 rounded-xl p-2 sm:p-3">
                <button
                  type="button"
                  id="btn-decrease-guests"
                  onClick={() => handleGuestChange(-1)}
                  disabled={formData.guests <= 1}
                  className="min-h-[44px] min-w-[48px] rounded-lg bg-[#0A0B0C] text-[#F5F1EA] hover:text-[#AB7758] disabled:opacity-30 disabled:pointer-events-none text-xl font-bold flex items-center justify-center active:scale-95 transition-all border border-white/5"
                  aria-label="Disminuir personas"
                >
                  -
                </button>

                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#AB7758]" />
                  <span className="font-serif text-2xl text-[#F5F1EA] font-medium min-w-[60px] text-center">
                    {formData.guests}
                  </span>
                  <span className="text-xs text-[#A79C8C] hidden sm:inline">
                    {formData.guests === 1 ? 'persona' : 'comensales'}
                  </span>
                </div>

                <button
                  type="button"
                  id="btn-increase-guests"
                  onClick={() => handleGuestChange(1)}
                  disabled={formData.guests >= 20}
                  className="min-h-[44px] min-w-[48px] rounded-lg bg-[#0A0B0C] text-[#F5F1EA] hover:text-[#AB7758] disabled:opacity-30 disabled:pointer-events-none text-xl font-bold flex items-center justify-center active:scale-95 transition-all border border-white/5"
                  aria-label="Aumentar personas"
                >
                  +
                </button>
              </div>

              {/* Quick quick buttons for popular group sizes */}
              <div className="flex items-center gap-2 mt-2 overflow-x-auto no-scrollbar py-1">
                {[2, 4, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: num })}
                    className={`min-h-[36px] px-3 py-1 rounded-md text-xs font-medium border transition-all ${
                      formData.guests === num
                        ? 'bg-[#AB7758]/20 border-[#AB7758] text-[#AB7758]'
                        : 'bg-[#171614] border-white/5 text-[#7A7266] hover:text-[#F5F1EA]'
                    }`}
                  >
                    {num} pers.
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fecha y Hora (Native Date & Time slot picker) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fecha Nativa */}
              <div>
                <label
                  htmlFor="reserva-fecha"
                  className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium"
                >
                  Fecha de reserva
                </label>
                <div className="relative">
                  <input
                    id="reserva-fecha"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="w-full min-h-[48px] px-4 bg-[#171614] border border-white/10 rounded-xl text-sm text-[#F5F1EA] focus:outline-none focus:border-[#AB7758] focus:ring-1 focus:ring-[#AB7758] transition-all"
                  />
                </div>
                <span className="text-[11px] text-[#7A7266] mt-1 block">
                  *Domingos cerrado. Lun a Sáb abierto.
                </span>
              </div>

              {/* Horario Selector */}
              <div>
                <label
                  htmlFor="reserva-hora"
                  className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium"
                >
                  Horario estimado
                </label>
                <select
                  id="reserva-hora"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full min-h-[48px] px-4 bg-[#171614] border border-white/10 rounded-xl text-sm text-[#F5F1EA] focus:outline-none focus:border-[#AB7758] focus:ring-1 focus:ring-[#AB7758] transition-all cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.time} value={slot.time} className="bg-[#171614] text-[#F5F1EA]">
                      {slot.time} hs — {slot.period}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-[#AB7758] mt-1 block">
                  Happy Hour disponible de 18:00 a 20:00 hs.
                </span>
              </div>
            </div>

            {/* 3. Preferencia de Espacio */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium">
                Preferencia de área en el restaurante
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'salon', label: 'Salón' },
                  { id: 'sushi-bar', label: 'Sushi Bar' },
                  { id: 'cava', label: 'Cercano Cava' },
                  { id: 'cualquiera', label: 'Indiferente' }
                ].map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        areaPreference: area.id as any
                      })
                    }
                    className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-sans tracking-wide transition-all border ${
                      formData.areaPreference === area.id
                        ? 'bg-[#AB7758] text-[#0A0B0C] border-[#AB7758] font-semibold'
                        : 'bg-[#171614] text-[#A79C8C] border-white/5 hover:text-[#F5F1EA]'
                    }`}
                  >
                    {area.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Nombre y Teléfono (Inputs grandes >= 44px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="reserva-nombre"
                  className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium"
                >
                  Nombre y Apellido *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#7A7266] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="reserva-nombre"
                    type="text"
                    required
                    placeholder="Ej. Sofía Rossi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full min-h-[48px] pl-10 pr-4 bg-[#171614] border border-white/10 rounded-xl text-sm text-[#F5F1EA] placeholder-[#7A7266] focus:outline-none focus:border-[#AB7758] focus:ring-1 focus:ring-[#AB7758] transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reserva-telefono"
                  className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium"
                >
                  Teléfono / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#7A7266] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="reserva-telefono"
                    type="tel"
                    required
                    placeholder="Ej. +54 9 351 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full min-h-[48px] pl-10 pr-4 bg-[#171614] border border-white/10 rounded-xl text-sm text-[#F5F1EA] placeholder-[#7A7266] focus:outline-none focus:border-[#AB7758] focus:ring-1 focus:ring-[#AB7758] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 5. Comentarios / Ocasión (Opcional) */}
            <div>
              <label
                htmlFor="reserva-notas"
                className="block text-xs uppercase tracking-widest text-[#A79C8C] mb-2 font-medium"
              >
                Ocasión especial o requerimientos (Opcional)
              </label>
              <input
                id="reserva-notas"
                type="text"
                placeholder="Ej. Aniversario, cumpleaños, intolerancia al gluten, etc."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full min-h-[48px] px-4 bg-[#171614] border border-white/10 rounded-xl text-sm text-[#F5F1EA] placeholder-[#7A7266] focus:outline-none focus:border-[#AB7758] focus:ring-1 focus:ring-[#AB7758] transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="btn-submit-booking-whatsapp"
                className="w-full min-h-[52px] bg-[#AB7758] hover:bg-[#72513D] text-[#0A0B0C] font-semibold text-sm tracking-wider uppercase rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#AB7758]/20 active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 text-[#0A0B0C]" />
                <span>Solicitar reserva vía WhatsApp</span>
              </button>
              <p className="text-[11px] text-[#7A7266] text-center mt-2.5">
                Al presionar, se preparará el mensaje formal de reserva para confirmar mesa directamente con nuestro equipo.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
