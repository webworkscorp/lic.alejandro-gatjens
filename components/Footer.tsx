
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-black py-16 text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="text-lg law-title font-bold text-white tracking-widest block mb-2">LIC. ALEJANDRO GATJENS</span>
            <p className="text-smoke text-[10px] uppercase tracking-[0.2em]">Asesoría Legal & Negocios</p>
          </div>
          
          <div>
            <p className="text-champagne text-[10px] uppercase tracking-widest font-bold mb-6">Ubicación</p>
            <p className="text-white text-sm font-light"></p>
          </div>

          <div>
            <p className="text-champagne text-[10px] uppercase tracking-widest font-bold mb-6">Contacto</p>
            <p className="text-white text-sm font-light mt-2">+506 7297 8575</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-[9px] uppercase tracking-widest text-white/20">
          <p>© 2026 LIC. ALEJANDRO GATJENS | Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
