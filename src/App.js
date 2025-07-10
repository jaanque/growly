import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-left">
          <img 
            draggable="false"
            src="https://i.postimg.cc/287qgkGV/image-1.webp" 
            alt="Logo de la aplicación" 
            className="App-logo"
          />
          <h1 className="App-title">ParkMi - Encuentra tu plaza</h1>
          <p className="App-subtitle">
            Parkmi te ayuda a encontrar parking rápido, sin complicaciones. Solo tienes que buscar y aparcar donde lo necesites. ¡Así de fácil!
          </p>
          <br />
          <div className="App-buttons">
            <button className="App-cta">
              Comenzar Ahora
            </button>
            <div className="App-store-section">
              <div className="App-store-buttons">
                <a href="#" className="App-store-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                </a>
                <a href="#" className="App-store-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                </a>
              </div>
              <p className="App-store-text">(próximamente)</p>
            </div>
          </div>
        </div>
        
        <div className="App-right">
          <img
            draggable="false"
            src="https://i.postimg.cc/R0DGfQn5/20250710-1816-Estacionamiento-Reservado-Digital-remix-01jzthv8thft18ty0h4e2kmp9v.png"
            alt="Imagen de la aplicación" 
            className="App-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;