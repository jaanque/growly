import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WhyGrowly from './components/whyGrowly/WyGrowly';
import HowToUse from './components/howToUse/HowToUse'; // Import the new HowToUse component

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <WhyGrowly />
      <HowToUse /> {/* Add the new HowToUse component here */}
    </div>
  );
}

export default App;