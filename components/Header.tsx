
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#050B18]/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-24 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => handleNav(e, 'inicio')}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <img 
            src="https://i.imgur.com/8QOAK7V.png" 
            alt="Logo Sosa & Asociados" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col border-l border-white/20 pl-4">
            <span className="text-lg md:text-xl law-title font-bold text-white tracking-[0.1em]">SOSA & ASOCIADOS</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/60">Financial Excellence</span>
          </div>
        </a>
        
        <nav className="hidden md:flex space-x-10 items-center">
          {['nosotros', 'servicios', 'proceso'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => handleNav(e, item)}
              className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.2em] transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a 
            href="#agendar" 
            onClick={(e) => handleNav(e, 'agendar')}
            className="px-6 py-2 border border-white/30 text-white hover:bg-white hover:text-[#050B18] text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-bold"
          >
            Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
