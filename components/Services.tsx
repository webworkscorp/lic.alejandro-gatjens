
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="relative py-32 text-white overflow-hidden border-t border-white/5">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
          alt="Negocios y Estrategia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-24 relative z-10">
        <div className="mb-24">
            <p className="text-champagne uppercase text-[10px] letter-spacing-extreme font-bold mb-4 drop-shadow-sm">Servicios</p>
            <h2 className="text-5xl serif font-light mb-8 drop-shadow-md text-white">Áreas de <span className="italic text-white/80">Especialización</span></h2>
            <p className="text-white text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              Acompañamiento legal para empresas y emprendedores que buscan crecer con bases sólidas y sin riesgos innecesarios.
            </p>
        </div>

        <div className="space-y-1">
          {SERVICES.map((service, index) => (
            <div key={index} className="group py-12 border-b border-white/10 grid md:grid-cols-12 gap-8 items-start hover:bg-white/[0.05] backdrop-blur-[4px] transition-all duration-700 px-4 md:px-6 bg-black/20">
              <div className="md:col-span-1 pt-1">
                <span className="text-champagne text-base serif italic font-bold">0{index + 1}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl serif text-white group-hover:text-champagne transition-colors duration-500 mb-2 drop-shadow-sm">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-white text-base font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-2 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-700 pt-2 md:pt-0">
                <a 
                  href="#agendar" 
                  onClick={(e) => handleNav(e, 'agendar')}
                  className="text-[10px] uppercase letter-spacing-extreme text-white font-bold hover:text-champagne transition-colors duration-300 cursor-pointer"
                >
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
