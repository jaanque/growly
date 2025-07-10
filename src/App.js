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