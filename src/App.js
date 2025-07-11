import './App.css';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WhyGrowly from './components/whyGrowly/WyGrowly';
import HowToUse from './components/howToUse/HowToUse';
import TrustedBy from './components/trustedBy/TrustedBy'; // Import the new TrustedBy component
import Footer from './components/footer/Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component here */}
      <Hero />
      <About />
      <WhyGrowly />
      <HowToUse />
      <TrustedBy /> {/* Add the new TrustedBy component here */}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;