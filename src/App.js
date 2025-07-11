import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import WhyGrowly from './components/whyGrowly/WyGrowly'; // Import the new component

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <WhyGrowly /> {/* Add the new component here */}
    </div>
  );
}

export default App;