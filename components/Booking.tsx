
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "50683180766";
    const text = `📊 CONSULTA\n` +
                 `--------------------------------------\n` +
                 `👤 NOMBRE: ${nombre}\n` +
                 `🏢 NEGOCIO: ${negocio}\n` +
                 `📝 CONSULTA: ${mensaje}\n` +
                 `--------------------------------------\n` +
                 `Interés: Gestión S.A.F.E.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="agendar" className="py-32 bg-[#050B18]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="max-w-md">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Contacto</p>
            <h2 className="text-5xl serif text-white mb-8 leading-tight font-bold">Inicie el <br/><span className="italic font-light text-white/70">proceso</span></h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              Obtenga claridad sobre su situación fiscal y financiera con nuestro equipo de asesores.
            </p>
            <ul className="text-white/70 text-sm space-y-6 font-light">
              <li className="flex items-center gap-4">
                <span className="w-2 h-px bg-white/40"></span>
                Revisión de situación tributaria
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-px bg-white/40"></span>
                Análisis de flujo de caja
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-px bg-white/40"></span>
                Gestión de trámites bancarios
              </li>
            </ul>
          </div>

          <div className="bg-[#0D244D]/20 border border-white/10 p-10 md:p-16 shadow-2xl backdrop-blur-md relative">
            <div className="absolute -left-3 top-10 w-6 h-6 border border-white/20 bg-[#050B18] rotate-45"></div>
            
            <form className="space-y-10" onSubmit={handleWhatsApp}>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block">Nombre</label>
                <input 
                  type="text" 
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 font-light text-lg placeholder:text-white/10"
                  placeholder="Su nombre completo"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block">Negocio / Actividad</label>
                <input 
                  type="text" 
                  required
                  value={negocio}
                  onChange={(e) => setNegocio(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 font-light text-lg placeholder:text-white/10"
                  placeholder="Nombre de su negocio"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block">Consulta</label>
                <textarea 
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={2}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 resize-none font-light text-lg placeholder:text-white/10"
                  placeholder="Escriba su consulta brevemente"
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="group w-full py-6 bg-white text-[#050B18] text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center gap-4 transition-all duration-500 hover:bg-[#0D244D] hover:text-white"
                >
                  <span>Enviar Consulta</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-3" strokeWidth={2} />
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
