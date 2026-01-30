
import React from 'react';
import { METHODOLOGY } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="proceso" className="relative py-32 overflow-hidden bg-[#050B18]">
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-white text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50">SISTEMA S.A.F.E.</p>
            <h2 className="text-5xl serif text-white">Gestión Financiera</h2>
          </div>
          <p className="text-white/50 font-light max-w-md border-l border-white/20 pl-6 leading-relaxed">
            Nuestro enfoque de trabajo para establecer orden contable y cumplimiento tributario con precisión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHODOLOGY.map((step, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white/[0.02] border border-white/5 hover:border-white/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -bottom-4 -right-4 p-4 text-white/5 font-black text-9xl pointer-events-none select-none">
                {step.title.charAt(0)}
              </div>
              <span className="text-[12px] text-white font-bold mb-8 block opacity-40">FASE 0{index + 1}</span>
              <div className="mb-8 p-3 border border-white/10 inline-block group-hover:bg-white group-hover:text-[#050B18] transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl text-white mb-4 font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
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
