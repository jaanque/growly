import React from 'react';
import './TrustedBy.css'; // CSS file to be created

function TrustedBy() {
  const farmerNames = [
    "Finca SolRadiant",
    "EcoHuerta Verda",
    "Mas La Plana",
    "Can Pageset",
    "Horta Ecològica Terra Viva",
    "Granja Les Feixes",
    "Agricultors Units del Vallès",
    "BioCamp SCCL",
    "Pastures del Montseny",
    "Fruites Cal Fruitós",
    "Verdures de l'Empordà",
    "Ramaders del Pirineu",
    "Olivers Centenaris Coop.",
    "Vinya L'Arboçar",
    "Mel de Mil Flors"
  ];

  // For a smooth infinite scroll, we duplicate the content for the animation.
  // Using three copies can sometimes help smooth transitions.
  const displayNames = [...farmerNames, ...farmerNames, ...farmerNames];


  return (
    <div id="trusted-by" className="TrustedBy-section">
      <div className="TrustedBy-container">
        <h1 className="App-title TrustedBy-title TrustedBy-text">
          Uneix-te als 100+ agricultors que confien en nosaltres
        </h1>
        <div className="TrustedBy-carousel-container">
          <div className="TrustedBy-carousel-track">
            {displayNames.map((name, index) => (
              <div key={index} className="TrustedBy-carousel-item">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
