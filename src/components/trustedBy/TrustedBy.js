import React from 'react';
import './TrustedBy.css'; // CSS file to be created

function TrustedBy() {
  const farmerNames = [
    "FINCA SOLRADIANT",
    "ECOHUERTA VERDA",
    "MAS LA PLANA",
    "CAN PAGESET",
    "HORTA ECOLÒGICA TERRA VIVA",
    "GRANJA LES FEIXES",
    "AGRICULTORS UNITS DEL VALLÈS",
    "BIOCAMP SCCL",
    "PASTURES DEL MONTSENY",
    "FRUITES CAL FRUITÓS",
    "VERDURES DE L'EMPORDÀ",
    "RAMADERS DEL PIRINEU",
    "OLIVERS CENTENARIS COOP.",
    "VINYA L'ARBOÇAR",
    "MEL DE MIL FLORS"
  ];

  // For a smooth infinite scroll, we duplicate the content for the animation.
  // Using three copies can sometimes help smooth transitions.
  const displayNames = [...farmerNames, ...farmerNames, ...farmerNames];


  return (
    <div id="trusted-by" className="TrustedBy-section">
      <div className="TrustedBy-container">
        <h1 className="App-title TrustedBy-title TrustedBy-text">
          Uneix-te als més de 100.548 agricultors que confien en nosaltres
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
