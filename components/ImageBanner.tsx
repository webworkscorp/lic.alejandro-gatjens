
import React from 'react';

const ImageBanner: React.FC = () => {
  return (
    <section className="h-[60vh] min-h-[400px] w-full relative overflow-hidden">
      <img 
        src="https://i.imgur.com/cfeuAmh.jpeg" 
        alt="Excelencia Legal" 
        className="w-full h-full object-cover grayscale-[20%] brightness-90"
      />
      {/* Overlay sutil para integrar con el diseño oscuro de la web */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-[#020617]/40"></div>
    </section>
  );
};

export default ImageBanner;
