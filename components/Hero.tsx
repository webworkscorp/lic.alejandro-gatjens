
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
    <section id="inicio" className="relative h-[95vh] min-h-[600px] flex items-center bg-[#050B18] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Firma Sosa & Asociados" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="max-w-3xl">
          <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-6 reveal inline-block border-b border-white/30 pb-2">
            Sistema S.A.F.E. | Gestión Financiera
          </p>
          
          <h1 className="text-4xl md:text-7xl text-white leading-tight mb-8 law-title font-bold reveal" style={{ animationDelay: '0.2s' }}>
            Cuentas claras, <br />
            <span className="text-white/70 italic serif font-light text-3xl md:text-5xl">decisiones seguras.</span>
          </h1>

          <p className="text-white/80 text-xl font-light leading-relaxed mb-12 reveal max-w-xl" style={{ animationDelay: '0.4s' }}>
            Orden financiero y cumplimiento tributario para su negocio. Del desorden al control en 90 días.
          </p>
          
          <div className="flex flex-wrap gap-4 reveal" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#agendar" 
              onClick={(e) => handleNav(e, 'agendar')}
              className="px-10 py-5 bg-white text-[#050B18] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#0D244D] hover:text-white transition-all duration-300 shadow-2xl"
            >
              Solicitar Diagnóstico
            </a>
            <a 
              href="#proceso" 
              onClick={(e) => handleNav(e, 'proceso')}
              className="px-10 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Metodología
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
