import './App.css';
import { FaCar, FaLightbulb, FaChartLine } from 'react-icons/fa';

function App() {
  const handleScrollToNext = (e) => {
    e.preventDefault();
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="header-section">
        <div className="text-content">
          <h1 className="header-title">
            Carfli - Future Driven
          </h1>
          <br></br>
          <br></br>
          <p className="header-description">
            Experience the freedom of fully autonomous travel while shaping the future of urban mobility. Gain co-ownership in a fleet of self-driving vehicles and receive earnings as they move through the city.
          </p>
          <br></br>
          <br></br>

          <a href="#next-section" className="cta-button" onClick={handleScrollToNext}>
            <svg className="cta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="cta-text">Start your journey</span>
          </a>
        </div>
        <div className="image-content">
          <div className="banner-container">
            <img 
              src="https://i.ibb.co/xqYjG8N4/20250709-0419-Personas-de-Plastilina-Realista-remix-01jzpfjyqmfaescr92jx6bas71.png" 
              alt="Banner" 
              className="banner"
            />
          </div>
        </div>
      </div>
      
      {/* What is Carfli section */}
      <div id="next-section" className="next-section">
        <div className="next-content">
          <h2>What is Carfli?</h2>
          <p className="explanation-text">
            Carfli is shaping the future of urban mobility with autonomous vehicles. Join us today, co-own self-driving cars, and earn as our fleet moves through the city. Together, we're building a smarter, more sustainable way to travel.
          </p>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaCar />
              </div>
              <h3 className="feature-title">Self-Driving Cars</h3>
              <p className="feature-description">Experience fully autonomous vehicles designed for the future of transportation</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <FaLightbulb />
              </div>
              <h3 className="feature-title">Invest in the Fleet</h3>
              <p className="feature-description">Become a co-owner and help build the autonomous vehicle network</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3 className="feature-title">Earn as the Fleet Moves</h3>
              <p className="feature-description">Generate passive income as vehicles operate throughout the city</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;