import './App.css';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WhyGrowly from './components/whyGrowly/WyGrowly';
import HowToUse from './components/howToUse/HowToUse';
import Statistics from './components/statistics/Statistics'; // Import the Statistics component
import Blog from './components/blog/Blog'; // Import the Blog component
import ContactForm from './components/contactForm/ContactForm'; // Import the ContactForm component
import TrustedBy from './components/trustedBy/TrustedBy'; // Import the new TrustedBy component
import Footer from './components/footer/Footer'; // Import the Footer component
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

function App() {
  const [isLogoInNavbar, setIsLogoInNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsLogoInNavbar(true);
      } else {
        setIsLogoInNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar isLogoInNavbar={isLogoInNavbar} /> {/* Navbar con logo condicional */}
      <Hero isLogoInNavbar={isLogoInNavbar} />
      <About />
      <WhyGrowly />
      { /* <HowToUse /> */ }
      <Statistics />
      { /* <Blog /> */ }
      <ContactForm /> {/* Add the ContactForm component here */}
      { /* <TrustedBy /> */ }
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;