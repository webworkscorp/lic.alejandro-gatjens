
import React from 'react';

const FePublica: React.FC = () => {
  return (
    <section className="py-32 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-8 max-w-3xl text-center">
        <div className="mb-10 inline-block">
          <div className="px-4 py-2 border border-champagne/40 text-[9px] text-champagne font-bold tracking-widest uppercase">
            Dirección Nacional de Notariado
          </div>
        </div>
        <h2 className="text-white serif text-4xl mb-8 font-light">Fe Pública Notarial</h2>
        <p className="text-smoke text-lg serif italic leading-relaxed mb-8">
          "Damos veracidad a sus actos jurídicos, garantizando que cada firma y documento cumpla estrictamente con la normativa costarricense."
        </p>
        <div className="w-12 h-px bg-champagne mx-auto"></div>
      </div>
    </section>
  );
};

export default FePublica;
