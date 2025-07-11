import React, { useState, useEffect } from 'react';
import './EarningsCalculator.css';

const EarningsCalculator = () => {
  const [numPlazas, setNumPlazas] = useState(1);
  const [ubicacion, setUbicacion] = useState('centro'); // 'centro', 'ciudad', 'afueras'
  const [horasAlquiler, setHorasAlquiler] = useState(8); // 1-24 horas

  const [precioPorHoraMin, setPrecioPorHoraMin] = useState(0);
  const [precioPorHoraMax, setPrecioPorHoraMax] = useState(0);

  const [gananciaDiariaMin, setGananciaDiariaMin] = useState(0);
  const [gananciaDiariaMax, setGananciaDiariaMax] = useState(0);
  const [gananciaMensualMin, setGananciaMensualMin] = useState("0,00€");
  const [gananciaMensualMax, setGananciaMensualMax] = useState("0,00€");

  const precios = {
    centro: { min: 0.90, max: 2.00 },
    ciudad: { min: 0.70, max: 0.90 },
    afueras: { min: 0.60, max: 0.70 },
  };

  useEffect(() => {
    const { min, max } = precios[ubicacion];
    setPrecioPorHoraMin(min); // Estos pueden seguir siendo números si no se muestran directamente o se formatean en el JSX
    setPrecioPorHoraMax(max);

    const plazas = Number(numPlazas) || 0;
    const horas = Number(horasAlquiler) || 0;

    const formatCurrency = (value) => {
      return value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    };

    const diariaMinNum = plazas * horas * min;
    const diariaMaxNum = plazas * horas * max;
    setGananciaDiariaMin(formatCurrency(diariaMinNum));
    setGananciaDiariaMax(formatCurrency(diariaMaxNum));

    // Asumiendo 30 días por mes para la estimación mensual
    setGananciaMensualMin(formatCurrency(diariaMinNum * 30));
    setGananciaMensualMax(formatCurrency(diariaMaxNum * 30));

  }, [numPlazas, ubicacion, horasAlquiler]);

  const handlePlazasChange = (e) => {
    const value = e.target.value;
    // Permitir solo números y un máximo (ej. 100 plazas)
    if (/^\d*$/.test(value) && Number(value) <= 100) {
      setNumPlazas(value === '' ? '' : Number(value));
    } else if (value === '') {
        setNumPlazas('');
    }
  };

  return (
    <div className="earnings-calculator-section">
      <h2 className="earnings-title">Calcula tus Ganancias Potenciales</h2>
      <p className="earnings-subtitle">
        ¿Tienes una plaza de parking o un espacio que no usas? Descubre cuánto podrías ganar alquilándolo con ParkMi.
      </p>

      <div className="calculator-controls">
        <div className="control-group">
          <label htmlFor="numPlazas">Número de Plazas:</label>
          <input
            type="number"
            id="numPlazas"
            value={numPlazas}
            onChange={handlePlazasChange}
            min="1"
            max="100" // Límite práctico
            placeholder="Ej: 1"
          />
        </div>

        <div className="control-group">
          <label htmlFor="ubicacion">Ubicación de tus Plazas:</label>
          <select
            id="ubicacion"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          >
            <option value="centro">Centro Urbano</option>
            <option value="ciudad">Ciudad (General)</option>
            <option value="afueras">Afueras / Periferia</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="horasAlquiler">Horas de Alquiler al Día (aprox.): {horasAlquiler}h</label>
          <input
            type="range"
            id="horasAlquiler"
            value={horasAlquiler}
            onChange={(e) => setHorasAlquiler(Number(e.target.value))}
            min="1"
            max="24"
            step="1"
          />
        </div>
      </div>

      <div className="results-section">
        <div className="price-range-info">
          <p>
            Precio estimado por hora en <strong>{ubicacion.charAt(0).toUpperCase() + ubicacion.slice(1)}</strong>:
            <span> {precioPorHoraMin.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })} - {precioPorHoraMax.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
          </p>
        </div>

        <div className="earnings-display">
          <h3>Ganancias Estimadas:</h3>
          <div className="earning-item">
            <p>Diarias:</p>
            <span>{gananciaDiariaMin} - {gananciaDiariaMax}</span>
          </div>
          <div className="earning-item">
            <p>Mensuales (aprox.):</p>
            <span>{gananciaMensualMin} - {gananciaMensualMax}</span>
          </div>
        </div>
        <p className="disclaimer">
          *Estos cálculos son una estimación y pueden variar según la demanda, temporada y características específicas de tus plazas.
        </p>
        <button className="cta-calculator-button" onClick={() => alert('Redirigiendo para publicar plaza...')}>
          ¡Empieza a Alquilar tu Plaza!
        </button>
      </div>
    </div>
  );
};

export default EarningsCalculator;
