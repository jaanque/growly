import './App.css';
// Icons are now imported within their respective components
// import { FaCar, FaLightbulb, FaChartLine, FaCoins, FaDollarSign, FaRoute, FaRocket, FaUsers, FaLeaf } from 'react-icons/fa';
import Header from './components/Header';
import WhatIsCarfli from './components/WhatIsCarfli';
import HowItWorks from './components/HowItWorks';
import WhyCarfli from './components/WhyCarfli';
import JoinRevolution from './components/JoinRevolution';

function App() {
  // The handleScrollToNext function is specific to the Header button, so it's moved to Header.js
  // const handleScrollToNext = (e) => {
  //   e.preventDefault();
  //   const nextSection = document.getElementById('next-section');
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <WhatIsCarfli />
      <HowItWorks />
      <WhyCarfli />
      <JoinRevolution />
    </div>
  );
}

export default App;