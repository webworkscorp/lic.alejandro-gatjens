
import React from 'react';
import { VALUE_PILLARS } from '../constants.tsx';

const Values: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-[#020617] border-y border-white/5">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="max-w-4xl mb-20">
            <p className="text-champagne text-[10px] uppercase letter-spacing-extreme font-bold mb-6">Diferenciadores</p>
            <h2 className="text-4xl serif text-white mb-6">¿Por qué trabajar con nosotros?</h2>
            <p className="text-smoke text-lg md:text-xl font-light leading-relaxed">
              Nos alejamos de la burocracia tradicional. Ofrecemos un modelo pensado para inversionistas y empresarios que buscan transparencia, claridad y proyección a largo plazo.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUE_PILLARS.map((pillar, index) => (
            <div key={index} className="group flex flex-col items-start">
              <div className="mb-8 p-4 rounded-full border border-champagne/10 bg-white/5 group-hover:border-champagne/40 transition-all duration-700">
                {pillar.icon}
              </div>
              <h3 className="text-base text-white font-bold mb-4 group-hover:text-champagne transition-colors">
                {pillar.title}
              </h3>
              <p className="text-smoke text-sm leading-[1.8] font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
