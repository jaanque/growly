import React from 'react';
import './FeaturesSection.css'; // Crearemos este archivo CSS más tarde

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      {/* Idealmente, 'icon' sería un componente SVG o una imagen */}
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
      icon: '💰', // Placeholder icon
    },
    {
      title: 'Fácil y Rápido de Usar',
      description: 'Nuestra plataforma intuitiva te permite encontrar y reservar parking en segundos.',
      icon: '📱', // Placeholder icon
    },
    {
      title: 'Amplia Disponibilidad',
      description: 'Accede a una extensa red de parkings en tu ciudad y alrededores.',
      icon: '🗺️', // Placeholder icon
    },
    {
      title: 'Seguridad y Confianza',
      description: 'Todas las plazas son verificadas para tu tranquilidad y seguridad.',
      icon: '🛡️', // Placeholder icon
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
