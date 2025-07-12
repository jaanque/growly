import React from 'react';
import './Statistics.css'; // CSS file for styling

function Statistics() {
  const data = [
    {
      id: 1,
      period: "Diaria",
      quantity: "≈ 2.300.000 kg",
      description: "Quantitat estimada de material agrícola desaprofitat diàriament."
    },
    {
      id: 2,
      period: "Setmanal",
      quantity: "≈ 16.000.000 kg",
      description: "Quantitat estimada de material agrícola desaprofitat setmanalment."
    },
    {
      id: 3,
      period: "Mensual",
      quantity: "≈ 70.000.000 kg",
      description: "Quantitat estimada de material agrícola desaprofitat mensualment."
    },
    {
      id: 4,
      period: "Anual",
      quantity: "≈ 850.000.000 kg",
      description: "Quantitat estimada de material agrícola desaprofitat anualment."
    }
  ];

  return (
    <div id="statistics" className="Statistics-section">
      <div className="Statistics-container">
        <h1 className="App-title Statistics-title">📊 Quantitats estimades de material agrícola desaprofitat</h1>
        <div className="Statistics-data-container">
          {data.map(item => (
            <div key={item.id} className="Statistics-item">
              <h3 className="Statistics-item-period">{item.period}</h3>
              <p className="Statistics-item-quantity">{item.quantity}</p>
              {/* <p className="Statistics-item-description">{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
