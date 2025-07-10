import React from 'react';
import './Faq.css';

function Faq() {
  return (
    <section id="faq" className="faq-section">
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <dl>
        <dt>¿Qué es Carfli?</dt>
        <dd>Una plataforma que reinventa la movilidad conectando directamente a usuarios, conductores e inversores.</dd>
        <dt>¿Cómo me uno como conductor?</dt>
        <dd>Regístrate en nuestro formulario y sigue los pasos de verificación.</dd>
        <dt>¿Cómo puedo invertir?</dt>
        <dd>Selecciona la opción de inversor en el formulario y te contactaremos con los detalles.</dd>
      </dl>
    </section>
  );
}

export default Faq;
