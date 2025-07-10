import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-left">
          <img 
            src="https://i.postimg.cc/287qgkGV/image-1.webp" 
            alt="Logo de la aplicación" 
            className="App-logo"
          />
          <h1 className="App-title">Mi Aplicación</h1>
          <p className="App-subtitle">
            Descubre una nueva forma de gestionar tus tareas diarias
          </p>
          <button className="App-cta">
            Comenzar Ahora
          </button>
        </div>
        
        <div className="App-right">
          <img 
            src="https://i.postimg.cc/dV6fxygD/20250710-1750-Parkings-Privados-de-Plastilina-simple-compose-01jztgc42qem6r9np9enjx5gc7.png" 
            alt="Imagen de la aplicación" 
            className="App-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;