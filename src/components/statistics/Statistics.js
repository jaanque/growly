import React from 'react';
import './Statistics.css'; // CSS file for styling

function Statistics() {
  const data = [
    {
      id: 1,
      period: "Diària --",
      quantity: " 2.300.000 kg",
    },
    {
      id: 2,
      period: "Setmanal --",
      quantity: " 16.100.000 kg",
    },
    {
      id: 3,
      period: "Mensual --",
      quantity: " 64.400.000 kg",
    },
    {
      id: 4,
      period: "Anual --",
      quantity: " 772.800.000 kg",
    }
  ];

  return (
    <div id="statistics" className="Statistics-section">
      <div className="Statistics-container">
        <h1 className="App-title Statistics-title">Quantitat de material agrícola desaprofitat</h1>
        <p className="Statistics-subtitle">Descobreix l'impacte real de les pèrdues agrícoles i la nostra missió per canviar-ho.</p>
        <p className="Statistics-subtitle">A Growly, treballem per reduir aquestes pèrdues en continuo creixement i promoure un sistema alimentari més sostenible.</p>
        <div className="Statistics-data-container">
          {data.map(item => (
            <div key={item.id} className="Statistics-text-item">
              <span className="Statistics-period">{item.period} </span>
              <span className="Statistics-quantity-bold">{item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
