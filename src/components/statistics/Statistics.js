import React from 'react';
import './Statistics.css'; // CSS file for styling
import { useTranslation } from 'react-i18next';

function Statistics() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      period: t('statistics.daily'),
      quantity: " 2.300.000 kg",
    },
    {
      id: 2,
      period: t('statistics.weekly'),
      quantity: " 16.100.000 kg",
    },
    {
      id: 3,
      period: t('statistics.monthly'),
      quantity: " 64.400.000 kg",
    },
    {
      id: 4,
      period: t('statistics.yearly'),
      quantity: " 772.800.000 kg",
    }
  ];

  return (
    <div id="statistics" className="Statistics-section">
      <div className="Statistics-container">
        <h1 className="App-title Statistics-title">{t('statistics.title')}</h1>
        <p className="Statistics-subtitle">{t('statistics.subtitle1')}</p>
        <p className="Statistics-subtitle">{t('statistics.subtitle2')}</p>
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
