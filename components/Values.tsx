
import React from 'react';
import { VALUE_PILLARS } from '../constants.tsx';

const Values: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-[#050B18] border-y border-white/5">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="max-w-4xl mb-24">
            <p className="text-white/40 text-[10px] uppercase letter-spacing-extreme font-bold mb-6">Diferenciadores</p>
            <h2 className="text-5xl serif text-white mb-8">Estrategia y Precisión</h2>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
              En Sosa & Asociados, la contabilidad no es un registro del pasado, es la hoja de ruta de su futuro. Sustituimos la incertidumbre por datos accionables.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUE_PILLARS.map((pillar, index) => (
            <div key={index} className="group flex flex-col items-start p-8 border border-white/5 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-700">
              <div className="mb-8 p-4 rounded-full border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-[#050B18] transition-all duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-base text-white font-bold mb-4 tracking-tight uppercase">
                {pillar.title}
              </h3>
              <p className="text-white/50 text-sm leading-[1.8] font-light">
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
