import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id='contacto-form' className="contact-form-section">
      <div className="contact-form-wrapper">
        <div className="contact-form-image-container">
          <img
            draggable="false"
            src="https://i.postimg.cc/c4KdX882/20250711-1245-Campo-y-Reparto-remix-01jzwhanghfgg8bk2tnvzdbqhe.png"
            alt="Growly Contact Form"
            className="contact-form-image"
          />
        </div>
        <div className="contact-form-container">
          <h2>Vols formar part del futur?</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correu Electrònic</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telèfon (Opcional)</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="userType">Sóc...</label>
              <select id="userType" name="userType" required>
                <option value="">Selecciona un tipus</option>
                <option value="buyer">Comprador</option>
                <option value="seller">Venedor</option>
              </select>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
