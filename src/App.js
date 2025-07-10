import React from 'react';
import './App.css';
import Hero from './components/Hero';
import IdeaExplanation from './components/IdeaExplanation';
import ForDrivers from './components/ForDrivers';
import ForInvestors from './components/ForInvestors';
import Faq from './components/Faq';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Hero />
      <main>
        <IdeaExplanation />
        <ForDrivers />
        <ForInvestors />
        <Faq />
        <RegistrationForm />
      </main>
      {/* Podríamos añadir un Footer global aquí si fuera necesario más adelante */}
      {/* Ejemplo: <Footer /> */}
    </div>
  );
}

export default App;