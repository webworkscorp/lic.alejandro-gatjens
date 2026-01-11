
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "50672978575";
    const text = `👋 Hola Lic. Gatjens, me interesa una asesoría.\n` +
                 `--------------------------------------\n` +
                 `👤 NOMBRE: ${nombre}\n` +
                 `📝 PROYECTO: ${mensaje}\n` +
                 `--------------------------------------\n` +
                 `Enviado desde el sitio web.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="agendar" className="py-32 bg-[#020617]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-md">
            <p className="text-champagne text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Contacto</p>
            <h2 className="text-4xl serif text-white mb-6 leading-tight font-bold">Impulsa tu <br/><span className="italic font-light text-white/90">Proyecto</span></h2>
            <p className="text-smoke text-lg font-light leading-relaxed mb-6">
              Hablemos sobre tus necesidades de negocio o inversión. Recibe un criterio profesional, directo y confidencial.
            </p>
            <ul className="text-smoke text-sm space-y-2 font-light">
              <li>✓ Atención directa y personalizada</li>
              <li>✓ Respuesta en menos de 24 horas</li>
              <li>✓ Confidencialidad garantizada</li>
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-champagne/30 to-transparent"></div>
            
            <form className="space-y-10" onSubmit={handleWhatsApp}>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-champagne font-bold block">Nombre</label>
                <input 
                  type="text" 
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-champagne transition-all duration-300 font-light text-lg placeholder:text-white/40"
                  placeholder="Su nombre completo"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-champagne font-bold block">Detalle del Proyecto</label>
                <textarea 
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-champagne transition-all duration-300 resize-none font-light text-lg placeholder:text-white/40"
                  placeholder="Describa brevemente su necesidad o inversión..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="group relative w-full py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 transition-all duration-500 hover:bg-champagne hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]"
                >
                  <span className="relative z-10">Enviar Mensaje</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Booking;