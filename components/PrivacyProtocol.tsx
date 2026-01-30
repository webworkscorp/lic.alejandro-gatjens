
import React from 'react';

const PrivacyProtocol: React.FC = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-bold mb-8">Sigilo Notarial</p>
        <h2 className="text-white font-serif text-2xl italic leading-relaxed">
          "Su información y trámites se manejan bajo el más estricto secreto profesional y ética legal."
        </h2>
        <div className="mt-8 flex justify-center">
            <div className="w-8 h-px bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyProtocol;
