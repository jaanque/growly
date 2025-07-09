import './App.css';
import Header from './components/Header';
// import WhatIsCarfli from './components/WhatIsCarfli'; // Removed as per plan
import HowItWorks from './components/HowItWorks';
import WhyCarfli from './components/WhyCarfli';
import JoinRevolution from './components/JoinRevolution';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HowItWorks />
      <WhyCarfli />
      <JoinRevolution />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;