import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main> {/* Envolver el contenido principal en <main> */}
        <HeroSection />
        <FeaturesSection />
        {/* Aquí podrían ir otras secciones si se añaden en el futuro */}
      </main>
      <Footer />
    </div>
  );
}

export default App;