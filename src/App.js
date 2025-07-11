import './App.css';

function App() {
  return (
    <div className="App">
      {/* Sección Hero */}
      <div className="App-content">
        <div className="App-left">
          <img 
            draggable="false"
            src="https://i.postimg.cc/KYKQVY1B/image-2.webp" 
            alt="Logo de la aplicación" 
            className="App-logo"
          />
          <h1 className="App-title">Grobly - Menjar responsable</h1>
          <p className="App-subtitle">
            Connectem pagesos i consumidors per vendre excedents frescos a preus reduïts, evitant el malbaratament i promovent un consum més sostenible i econòmic.
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
            src="https://i.postimg.cc/2jqmwdjS/20250711-0642-Agricultor-en-Colina-remix-01jzvwm9b9ebp88vkwvtj3m4th.png"
            alt="Imagen de la aplicación" 
            className="App-image"
          />
        </div>
      </div>

      {/* Nova secció "Què es Grobly?" */}
      <div className="App-content About-section">
        {/* Canviem l'ordre aquí: Primer el contenidor de la imatge, després el del text */}
        <div className="App-right"> {/* Contenidor per la imatge, reutilitzant la classe original per l'estil */}
          <img
            draggable="false"
            src="https://i.postimg.cc/L5GkPckf/20250711-0803-Carga-de-Productos-Frescos-remix-01jzw177xpf7js09fhjznvrsph.png" 
            alt="Descripció de la imatge per a Què es Grobly" 
            className="App-image About-section-image" /* Combinem les classes */
          />
        </div>
        <div className="App-left About-text-container"> {/* Contenidor pel text, amb una nova classe per estils específics si cal */}
          <h1 className="App-title">Què es Grobly?</h1>
          <p className="App-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="App-subtitle">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;