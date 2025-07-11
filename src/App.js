import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.Feature-card');
    const handlers = new Map();
    
    cards.forEach(card => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;
        
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      const handleMouseLeave = () => {
        card.style.transform = 'translateY(-8px) rotateX(0deg) rotateY(0deg)';
      };
      
      // Guardamos las referencias de los handlers
      handlers.set(card, { handleMouseMove, handleMouseLeave });
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Cleanup
    return () => {
      cards.forEach(card => {
        const cardHandlers = handlers.get(card);
        if (cardHandlers) {
          card.removeEventListener('mousemove', cardHandlers.handleMouseMove);
          card.removeEventListener('mouseleave', cardHandlers.handleMouseLeave);
        }
      });
    };
  }, []);

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
              src="https://i.postimg.cc/vmMGHzTh/20250711-0129-Estilo-Plastilina-Colorido-remix-01jzvaksa7fz7t26gscae0c4ac.png" 
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

      {/* Sección Características */}
      <div className="Features-section">
        <div className="Features-content">
          <div className="Features-header">
            <h2 className="Features-title">Características Principales</h2>
            <p className="Features-subtitle">
              Descubre todo lo que ParkMi puede hacer por ti
            </p>
          </div>
          
          <div className="Features-grid">
            <div className="Feature-card">
              <div className="Feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <circle cx="11" cy="11" r="3"/>
                </svg>
              </div>
              <h3 className="Feature-title">Búsqueda Inteligente</h3>
              <p className="Feature-description">
                Encuentra plazas disponibles en tiempo real cerca de tu destino usando nuestra tecnología de búsqueda avanzada.
              </p>
            </div>
            
            <div className="Feature-card">
              <div className="Feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="10" rx="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="Feature-title">Reserva Garantizada</h3>
              <p className="Feature-description">
                Tu plaza estará asegurada hasta tu llegada. Pago seguro y confirmación instantánea para tu tranquilidad.
              </p>
            </div>
            
            <div className="Feature-card">
              <div className="Feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="Feature-title">Navegación Precisa</h3>
              <p className="Feature-description">
                Te guiamos paso a paso hasta tu plaza exacta con indicaciones precisas y actualizadas en tiempo real.
              </p>
            </div>
            
            <div className="Feature-card">
              <div className="Feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 1v22"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="Feature-title">Precios Justos</h3>
              <p className="Feature-description">
                Transparencia total en los costos. Compara precios y elige la opción que mejor se adapte a tu presupuesto.
              </p>
            </div>
            
            <div className="Feature-card">
              <div className="Feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3 className="Feature-title">Disponible Siempre</h3>
              <p className="Feature-description">
                Servicio 24/7 con soporte continuo. Encuentra parking a cualquier hora del día o de la noche.
              </p>
            </div>
            
            <div className="Feature-card">
              <div className="Feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                  <path d="M21 3v5h-5"/>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                  <path d="M8 16H3v5"/>
                </svg>
              </div>
              <h3 className="Feature-title">Extensión Fácil</h3>
              <p className="Feature-description">
                Extiende tu tiempo de parking desde la app sin moverte del sitio. Flexibilidad total para tus planes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;