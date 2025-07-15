import React from 'react';
import './ContactForm.css';

const ContactForm = ({ t }) => {
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
          <h2>{t.title}</h2>
          <form action="https://formsubmit.co/hola@grownly.cat" method="POST">
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t.phone}</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="userType">{t.userType}</label>
              <select id="userType" name="userType" required>
                <option value="">{t.selectType}</option>
                <option value="buyer">{t.buyer}</option>
                <option value="seller">{t.seller}</option>
              </select>
            </div>
            <button type="submit">{t.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
