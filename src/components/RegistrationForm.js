import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('usuario');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log({ nombre, email, tipoUsuario });
    alert('¡Gracias por registrarte!');
  };

  return (
    <section id="registro" className="registration-form-section">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tipoUsuario">Soy un:</label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="usuario">Usuario interesado</option>
            <option value="conductor">Conductor</option>
            <option value="inversor">Inversor</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default RegistrationForm;
