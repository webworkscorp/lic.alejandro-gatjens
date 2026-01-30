
import React from 'react';

const FePublica: React.FC = () => {
  return (
    <section className="py-32 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-8 max-w-3xl text-center">
        <div className="mb-10 inline-block">
          <div className="px-4 py-2 border border-white/30 text-[9px] text-white/60 font-bold tracking-widest uppercase">
            Excelencia Financiera Certificada
          </div>
        </div>
        <h2 className="text-white serif text-4xl mb-8 font-light">Responsabilidad Profesional</h2>
        <p className="text-white/60 text-lg serif italic leading-relaxed mb-8">
          "Garantizamos que cada estado financiero y gestión tributaria cumpla estrictamente con la normativa vigente, protegiendo su patrimonio ante todo."
        </p>
        <div className="w-12 h-px bg-white/40 mx-auto"></div>
      </div>
    </section>
  );
};

export default FePublica;
