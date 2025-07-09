import './App.css';

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
      
      {/* Sección de ejemplo para scroll */}
      <div id="next-section" className="next-section">
        <div className="next-content">
          <h2>Welcome to the Future</h2>
          <p>This is the next section where users will land after clicking the button.</p>
        </div>
      </div>
    </div>
  );
}

export default App;