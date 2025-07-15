import React from 'react';
import './Statistics.css'; // CSS file for styling

function Statistics({ t }) {
  const data = [
    {
      id: 1,
      period: t.daily,
      quantity: " 2.300.000 kg",
    },
    {
      id: 2,
      period: t.weekly,
      quantity: " 16.100.000 kg",
    },
    {
      id: 3,
      period: t.monthly,
      quantity: " 64.400.000 kg",
    },
    {
      id: 4,
      period: t.yearly,
      quantity: " 772.800.000 kg",
    }
  ];

  return (
    <div id="statistics" className="Statistics-section">
      <div className="Statistics-container">
        <h1 className="App-title Statistics-title">{t.title}</h1>
        <p className="Statistics-subtitle">{t.subtitle1}</p>
        <p className="Statistics-subtitle">{t.subtitle2}</p>
        <div className="Statistics-data-container">
          {data.map(item => (
            <div key={item.id} className="Statistics-text-item">
              <span className="Statistics-period">{item.period} </span>
              <span className="Statistics-quantity-bold">{item.quantity}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <a href="#contacto-form" className="App-button">{t.cta}</a>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
