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
import CookieBanner from './components/cookieBanner/CookieBanner';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import translations from './translations.json'; // Import translations

// Importing Vercel Analytics for tracking
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isLogoInNavbar, setIsLogoInNavbar] = useState(false);
  const [language, setLanguage] = useState('ca'); // Default language is Catalan

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

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

  const t = translations[language];

  return (
    <div className="App">
      <Navbar
        isLogoInNavbar={isLogoInNavbar}
        t={t.navbar}
        changeLanguage={changeLanguage}
      />
      <Hero isLogoInNavbar={isLogoInNavbar} t={t.hero} />
      <About t={t.about} />
      <WhyGrowly t={t.whyGrowly} />
      { /* <HowToUse /> */ }
      <Statistics t={t.statistics} />
      { /* <Blog /> */ }
      <ContactForm t={t.contactForm} /> {/* Add the ContactForm component here */}
      { /* <TrustedBy /> */ }
      <Footer t={t.footer} /> {/* Add the Footer component here */}
      <CookieBanner t={t.cookieBanner} />
    </div>
  );
}

export default App;