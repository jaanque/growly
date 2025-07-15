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
        <h1 className="App-title">Què és Growly?</h1>
        <p className="App-subtitle">
          En l'actualitat, l'agricultura enfronta seriosos desafiaments que amenacen la seva viabilitat. A causa de la competència del mercat internacional, els productes agrícoles importats solen ser més econòmics, la qual cosa posa en perill els nostres agricultors locals. No obstant això, existeix una solució innovadora per mitigar aquesta problemàtica: una plataforma que permet la venda d'excedents agrícoles.
        </p>
        <p className="App-subtitle">
          Aquesta oferirà un espai on els agricultors puguin vendre el que no aconsegueixen comercialitzar, evitant així el malbaratament d'aliments. En connectar directament els productors amb consumidors interessats a adquirir frescor i qualitat a preus accessibles, fomentem el suport a la nostra economia local i reduïm l'impacte mediambiental del malbaratament alimentari.
        </p>
        <p className="App-subtitle">
          Amb aquest enfocament, no només contribuïm a la sostenibilitat del sector agrícola, sinó que també generem consciència sobre la importància de consumir productes locals. La unió entre tecnologia i agricultura pot ser la clau per revitalitzar aquest noble negoci.
        </p>
        <br />
        <button className="App-button">Descobreix Growly</button>
      </div>
    </div>
  );
}

export default About;
