import './App.css';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WhyGrowly from './components/whyGrowly/WyGrowly';
import HowToUse from './components/howToUse/HowToUse';
import Statistics from './components/statistics/Statistics'; // Import the Statistics component
import ContactForm from './components/contactForm/ContactForm'; // Import the ContactForm component
import TrustedBy from './components/trustedBy/TrustedBy'; // Import the new TrustedBy component
import Footer from './components/footer/Footer'; // Import the Footer component
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

function App() {
  const [isLogoInNavbar, setIsLogoInNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define a scroll threshold (e.g., 100px).
      // This value might need to be dynamic, e.g., based on Hero section height.
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsLogoInNavbar(true);
      } else {
        setIsLogoInNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="App">
      <Navbar isLogoInNavbar={isLogoInNavbar} /> {/* Pass prop to Navbar */}
      <Hero isLogoInNavbar={isLogoInNavbar} /> {/* Pass prop to Hero */}
      <About />
      <WhyGrowly />
      <HowToUse />
      <Statistics />
      <ContactForm /> {/* Add the ContactForm component here */}
      <TrustedBy /> {/* Add the new TrustedBy component here */}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;