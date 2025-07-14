import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="App-content About-section">
      {/* Canviem l'ordre aquí: Primer el contenidor de la imatge, després el del text */}
      <div className="App-right"> {/* Contenidor per la imatge, reutilitzant la classe original per l'estil */}
        <img
          draggable="false"
          src="https://i.postimg.cc/L5GkPckf/20250711-0803-Carga-de-Productos-Frescos-remix-01jzw177xpf7js09fhjznvrsph.png"
          alt="Descripció de la imatge per a Què es Growly"
          className="App-image About-section-image" /* Combinem les classes */
        />
      </div>
      <div className="App-left About-text-container"> {/* Contenidor pel text, amb una nova classe per estils específics si cal */}
        <h1 className="App-title">Què es Growly?</h1>
        <p className="App-subtitle">
          En la actualidad, la agricultura enfrenta serios desafíos que amenazan su viabilidad. Debido a la competencia del mercado internacional, los productos agrícolas importados suelen ser más económicos, lo que pone en jaque a nuestros agricultores locales. Sin embargo, existe una solución innovadora para mitigar esta problemática: una  plataforma que permite la venta de excedentes agrícolas.
        </p>
        <p className="App-subtitle">
          Esta ofrecerá un espacio donde los agricultores puedan vender lo que no logran comercializar, evitando así el desperdicio de alimentos. Al conectar directamente a los productores con consumidores interesados en adquirir frescura y calidad a precios accesibles, fomentamos el apoyo a nuestra economía local y reducimos el impacto medioambiental del desperdicio alimentario.
        </p>
        <p className="App-subtitle">
          Con este enfoque, no solo contribuimos a la sostenibilidad del sector agrícola, sino que también generamos conciencia sobre la importancia de consumir productos locales. La unión entre tecnología y agricultura puede ser la clave para revitalizar este noble negocio.
        </p>
        <br />
        <button className="App-button">Descobreix Growly</button>
      </div>
    </div>
  );
}

export default About;
