
import React from 'react';

const ProfessionalDivider: React.FC = () => {
  return (
    <div className="bg-[#050B18] py-16 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 flex items-center justify-center">
        <div className="w-full flex items-center gap-8 opacity-40">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-white/40"></div>
          <div className="flex-none">
            <div className="w-2.5 h-2.5 rotate-45 border border-white/60 bg-transparent"></div>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/10 to-white/40"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDivider;
