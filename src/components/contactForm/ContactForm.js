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
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="userType">I am a...</label>
              <select id="userType" name="userType" required>
                <option value="">Select type</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
