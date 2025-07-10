import React from 'react';
import './FeaturesSection.css'; // Crearemos este archivo CSS más tarde

// Iconos SVG como componentes funcionales
const IconPriceTag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const IconSmartphone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Precios Bajos Garantizados',
      description: 'Encuentra las tarifas más competitivas del mercado y ahorra en cada reserva.',
      icon: <IconPriceTag />,
    },
    {
      title: 'Fácil y Rápido de Usar',
      description: 'Nuestra plataforma intuitiva te permite encontrar y reservar parking en segundos.',
      icon: <IconSmartphone />,
    },
    {
      title: 'Amplia Disponibilidad',
      description: 'Accede a una extensa red de parkings en tu ciudad y alrededores.',
      icon: <IconMapPin />,
    },
    {
      title: 'Seguridad y Confianza',
      description: 'Todas las plazas son verificadas para tu tranquilidad y seguridad.',
      icon: <IconShield />,
    }
  ];

  return (
    <section className="features-section" id="features">
      <h2>¿Por qué elegir ParkFast?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
