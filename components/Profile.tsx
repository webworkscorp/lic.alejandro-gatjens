
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl bg-black border border-white/5">
              <img 
                src="https://i.imgur.com/QXEOdz1.jpeg" 
                alt="Lic. Alejandro Gatjens" 
                className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-champagne/30 hidden md:block pointer-events-none"></div>
          </div>
          
          <div>
            <p className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-4">Sobre el Licenciado</p>
            <h2 className="text-4xl serif text-white mb-8 font-bold">Alejandro Gatjens</h2>
            <p className="text-smoke text-lg mb-6 leading-relaxed font-light">
              El Lic. Alejandro Gatjens ofrece asesoría jurídica enfocada en la toma de decisiones estratégicas para empresarios, inversionistas y emprendedores. Su enfoque combina criterio legal, visión comercial y comprensión real del entorno de negocios en Costa Rica.
            </p>
            <p className="text-smoke text-lg mb-10 leading-relaxed font-light">
              Cada caso se atiende con claridad, confidencialidad y una estructura orientada a prevenir riesgos, optimizar procesos y respaldar el crecimiento de cada proyecto.
            </p>
            
            <div className="p-6 border-l border-champagne/40 bg-white/5">
              <p className="text-white serif italic text-lg">
                "Aquí no solo se revisan documentos. Se construyen decisiones seguras."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
