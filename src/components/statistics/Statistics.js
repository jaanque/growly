import React from 'react';
import './Statistics.css'; // CSS file for styling

function Statistics() {
  const data = [
    {
      id: 1,
      period: "Diaria:",
      quantity: " 2.300.000 kg",
    },
    {
      id: 2,
      period: "Setmanal:",
      quantity: " 16.000.000 kg",
    },
    {
      id: 3,
      period: "Mensual:",
      quantity: " 70.000.000 kg",
    },
    {
      id: 4,
      period: "Anual:",
      quantity: " 850.000.000 kg",
    }
  ];

  return (
    <div id="statistics" className="Statistics-section">
      <div className="Statistics-container">
        <h1 className="App-title Statistics-title">📊 Quantitats estimades de material agrícola desaprofitat</h1>
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
