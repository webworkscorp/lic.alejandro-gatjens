
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Profile from './components/Profile.tsx';
import Values from './components/Values.tsx';
import Methodology from './components/Methodology.tsx';
import Services from './components/Services.tsx';
import ProfessionalDivider from './components/ProfessionalDivider.tsx';
import Booking from './components/Booking.tsx';
import Footer from './components/Footer.tsx';
import PrivacyProtocol from './components/PrivacyProtocol.tsx';
import FePublica from './components/FePublica.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Header />
      <main>
        <Hero />
        <Values />
        <Methodology />
        
        <ProfessionalDivider />
        
        <Services />
        <FePublica />
        
        <Profile />
        <PrivacyProtocol />
        
        <div 
          className="relative bg-fixed bg-center bg-cover"
          style={{ 
            backgroundImage: "linear-gradient(rgba(5, 11, 24, 0.95), rgba(5, 11, 24, 0.95)), url('https://i.imgur.com/07kdqxi.jpeg')" 
          }}
        >
          <Booking />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
