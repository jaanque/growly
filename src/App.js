import './App.css';

function App() {
  return (
    <div className="App">
      {/* Sección Hero */}
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

      {/* Sección ¿Qué es? */}
      <div className="About-section">
        <div className="About-content">
          <div className="About-left">
            <img
              draggable="false"
              src="https://i.postimg.cc/R0DGfQn5/20250710-1816-Estacionamiento-Reservado-Digital-remix-01jzthv8thft18ty0h4e2kmp9v.png" 
              alt="Ilustración de ParkMi con personajes y coches" 
              className="About-image"
            />
          </div>
          
          <div className="About-right">
            <h2 className="About-title">¿Qué es ParkMi?</h2>
            <p className="About-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="About-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="About-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;