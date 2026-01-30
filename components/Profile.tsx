
import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="py-32 bg-[#050B18]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center lg:justify-start">
            {/* Contenedor con tamaño controlado y sin recortes forzados */}
            <div className="max-w-[260px] w-full relative">
              <div className="shadow-2xl border border-white/10 bg-black overflow-hidden">
                <img 
                  src="https://i.imgur.com/mNIAbHD.jpeg" 
                  alt="Sosa & Asociados - Gestión" 
                  className="w-full h-auto block grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Detalle minimalista */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r border-b border-white/20 hidden md:block pointer-events-none"></div>
            </div>
          </div>
          
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Experiencia</p>
            <h2 className="text-4xl serif text-white mb-8 font-bold leading-tight">Más de 30 años en el sector financiero</h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed font-light">
              Sosa & Asociados facilita la gestión de su negocio. Con más de tres décadas de trayectoria, aportamos el orden necesario para la toma de decisiones basadas en datos.
            </p>
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
              Nos enfocamos en organizar estructuras tributarias y financieras, facilitando procesos de bancarización y cumplimiento ante las autoridades.
            </p>
            
            <div className="p-6 border-l border-white/20 bg-white/5">
              <p className="text-white serif italic text-lg">
                "Usted gestiona su negocio, nosotros aseguramos que los números reflejen la realidad."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
