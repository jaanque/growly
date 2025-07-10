import React from 'react';
import './PricingSection.css'; // Crearemos este archivo CSS

const PricingCard = ({ planName, price, features, isFeatured }) => {
  return (
    <div className={`pricing-card ${isFeatured ? 'featured' : ''}`}>
      {isFeatured && <div className="featured-badge">Más Popular</div>}
      <h3>{planName}</h3>
      <div className="price">{price}<span>/mes</span></div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={`cta-button ${isFeatured ? 'featured-button' : 'standard-button'}`}>
        Empezar Ahora
      </button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      planName: 'Básico',
      price: '€9.99',
      features: [
        'Hasta 10 reservas/mes',
        'Soporte por email',
        'Acceso a parkings estándar',
        'Cancelación con 24h de antelación'
      ],
      isFeatured: false,
    },
    {
      planName: 'Pro',
      price: '€19.99',
      features: [
        'Reservas ilimitadas',
        'Soporte prioritario 24/7',
        'Acceso a parkings premium',
        'Cancelación flexible',
        'Descuentos en parkings asociados'
      ],
      isFeatured: true,
    },
    {
      planName: 'Empresas',
      price: '€49.99',
      features: [
        'Múltiples usuarios',
        'Gestor de cuentas dedicado',
        'Facturación centralizada',
        'Informes de uso detallados',
        'Integración API (opcional)'
      ],
      isFeatured: false,
    },
  ];

  return (
    <section className="pricing-section" id="pricing"> {/* Añadir ID para anclaje desde Navbar/Hero */}
      <div className="container">
        <h2 className="section-title">Planes y Precios Flexibles</h2>
        <p className="section-subtitle">
          Elige el plan que mejor se adapte a tus necesidades de aparcamiento. Sin contratos a largo plazo.
        </p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
