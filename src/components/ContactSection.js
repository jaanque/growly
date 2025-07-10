import React, { useState } from 'react';
import './ContactSection.css'; // Crearemos este archivo CSS

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario (ej. a una API, emailjs, etc.)
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    // Resetear formulario (opcional)
    // setFormData({ name: '', email: '', subject: '', message: '' });
    // setTimeout(() => setIsSubmitted(false), 5000); // Resetear mensaje de éxito
  };

  return (
    <section className="contact-section" id="contact-section"> {/* Nuevo ID */}
      <div className="container">
        <div className="contact-content-wrapper">
          <div className="contact-info">
            <h2 className="section-title">Ponte en Contacto</h2>
            <p className="section-subtitle">
              ¿Tienes alguna pregunta o quieres saber más sobre ParkFast?
              Completa el formulario o contáctanos a través de nuestros canales.
            </p>
            <ul className="contact-details">
              <li>
                <strong>Email:</strong> <a href="mailto:info@parkfast.com">info@parkfast.com</a>
              </li>
              <li>
                <strong>Teléfono:</strong> <a href="tel:+34123456789">+34 123 456 789</a>
              </li>
              <li>
                <strong>Dirección:</strong> Calle Ficticia 123, 28080 Madrid, España (Si aplica)
              </li>
            </ul>
            {/* Podríamos añadir iconos para redes sociales aquí también si se desea */}
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="submission-success">
                <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar Mensaje</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
