
import React from 'react';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#050B18] py-24 text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-6 mb-8">
              <img 
                src="https://i.imgur.com/8QOAK7V.png" 
                alt="Sosa & Asociados Logo" 
                className="h-14 w-auto brightness-125"
              />
              <div className="border-l border-white/20 pl-6">
                <span className="text-2xl law-title font-bold text-white tracking-widest block uppercase">SOSA & ASOCIADOS</span>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Gestión Financiera</p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.facebook.com/share/1GB4Ktz9qt/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-white/10 hover:border-white hover:bg-white hover:text-[#050B18] transition-all duration-500 text-white/60"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-8">Ubicación</p>
            <p className="text-white text-base font-light">Costa Rica</p>
            <p className="text-white/40 text-[10px] uppercase mt-4 leading-loose tracking-widest">Servicios <br/>Financieros</p>
          </div>

          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-8">Contacto</p>
            <p className="text-white text-base font-light hover:text-white/80 transition-colors">wsosa@muguisa.com</p>
            <p className="text-white text-xl font-bold mt-4 tracking-[0.1em]">+506 8318 0766</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Sosa & Asociados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacidad</a>
            <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
