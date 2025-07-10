import React from 'react';
import './TestimonialsSection.css'; // Crearemos este archivo CSS

const TestimonialCard = ({ quote, author, location, avatar }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        {/* Idealmente, avatar sería una URL a una imagen */}
        {avatar ? <img src={avatar} alt={author} /> : <div className="avatar-placeholder">{author.charAt(0)}</div>}
      </div>
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      <p className="testimonial-author">- {author}</p>
      {location && <p className="testimonial-location">{location}</p>}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "¡ParkFast ha cambiado mi vida! Encontrar parking era una pesadilla, ahora es súper fácil y económico. ¡Totalmente recomendado!",
      author: "Laura Gómez",
      location: "Madrid",
      avatar: null, // Placeholder, se usaría una URL real
    },
    {
      quote: "La app es muy intuitiva y los precios son imbatibles. He ahorrado mucho dinero y tiempo desde que la uso para ir al trabajo.",
      author: "Carlos Ruiz",
      location: "Barcelona",
      avatar: null,
    },
    {
      quote: "Excelente servicio al cliente y una plataforma muy fiable. Perfecto para mis viajes de negocios por diferentes ciudades.",
      author: "Ana Fernández",
      location: "Valencia",
      avatar: null,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
