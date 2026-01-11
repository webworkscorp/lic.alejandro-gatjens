
import React from 'react';
import { METHODOLOGY } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="proceso" className="relative py-32 overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="mb-20">
          <p className="text-white text-[10px] uppercase tracking-widest font-bold mb-4 drop-shadow-sm">Método</p>
          <h2 className="text-4xl serif text-white drop-shadow-md">Proceso de Trabajo</h2>
          <p className="text-smoke mt-4 font-light">Cada paso está pensado para brindar orden, seguridad y claridad.</p>
        </div>
        
        {/* Ajuste de grid para soportar 5 pasos elegantemente */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {METHODOLOGY.map((step, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white/[0.02] border border-white/10 hover:border-champagne/50 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="text-[12px] text-champagne font-bold mb-4 block">0{index + 1}</span>
              <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {step.icon}
              </div>
              <h3 className="text-lg text-white mb-3 font-semibold">
                {step.title}
              </h3>
              <p className="text-smoke text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
