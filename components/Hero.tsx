
import React from 'react';

const Hero: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-[90vh] min-h-[600px] flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Infraestructura y Negocios" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="max-w-3xl">
          <p className="text-champagne text-[10px] uppercase tracking-[0.4em] font-bold mb-6 reveal">
            Asesoría Legal Especializada
          </p>
          
          <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6 law-title font-bold reveal drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
            Protegiendo tus decisiones. <br />
            <span className="text-white/80 italic serif font-light">Impulsando tus proyectos.</span>
          </h1>

          <p className="text-white text-lg font-light leading-relaxed mb-10 reveal max-w-xl drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            Asesoría para negocios, inversiones inmobiliarias y desarrollo. Un enfoque claro, práctico y orientado a resultados reales.
          </p>
          
          <div className="flex flex-wrap gap-4 reveal" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#agendar" 
              onClick={(e) => handleNav(e, 'agendar')}
              className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-champagne hover:text-black transition-all duration-300 shadow-2xl"
            >
              Agendar Asesoría
            </a>
            <a 
              href="#servicios" 
              onClick={(e) => handleNav(e, 'servicios')}
              className="px-8 py-4 border border-white/40 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Especializaciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
