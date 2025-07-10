import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutUsSection from './components/AboutUsSection'; // Nueva sección
import PricingSection from './components/PricingSection'; // Nueva sección
import TestimonialsSection from './components/TestimonialsSection'; // Nueva sección
import ContactSection from './components/ContactSection'; // Nueva sección
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutUsSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;