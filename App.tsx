import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InboundSection } from './components/InboundSection';
import { AcquisitionConsultancy } from './components/AcquisitionConsultancy';
import { BenefitsHeader } from './components/BenefitsHeader';
import { GrowthSystems } from './components/GrowthSystems';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <InboundSection />
        <AcquisitionConsultancy />
        <BenefitsHeader />
        <GrowthSystems />
        <HowItWorks />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;