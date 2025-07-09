import './App.css';

function App() {
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

          <div className="cta-section">
            <div className="cta-icon">→</div>
            <span className="cta-text">Start your journey</span>
          </div>
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
    </div>
  );
}

export default App;