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
  const [gananciaMensualMin, setGananciaMensualMin] = useState(0);
  const [gananciaMensualMax, setGananciaMensualMax] = useState(0);

  const precios = {
    centro: { min: 0.90, max: 2.00 },
    ciudad: { min: 0.70, max: 0.90 },
    afueras: { min: 0.60, max: 0.70 },
  };

  useEffect(() => {
    const { min, max } = precios[ubicacion];
    setPrecioPorHoraMin(min);
    setPrecioPorHoraMax(max);

    const plazas = Number(numPlazas) || 0;
    const horas = Number(horasAlquiler) || 0;

    const diariaMin = plazas * horas * min;
    const diariaMax = plazas * horas * max;
    setGananciaDiariaMin(diariaMin);
    setGananciaDiariaMax(diariaMax);

    // Asumiendo 30 días por mes para la estimación mensual
    setGananciaMensualMin(diariaMin * 30);
    setGananciaMensualMax(diariaMax * 30);

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
            <span> {precioPorHoraMin.toFixed(2)}€ - {precioPorHoraMax.toFixed(2)}€</span>
          </p>
        </div>

        <div className="earnings-display">
          <h3>Ganancias Estimadas:</h3>
          <div className="earning-item">
            <p>Diarias:</p>
            <span>{gananciaDiariaMin.toFixed(2)}€ - {gananciaDiariaMax.toFixed(2)}€</span>
          </div>
          <div className="earning-item">
            <p>Mensuales (aprox.):</p>
            <span>{gananciaMensualMin.toFixed(2)}€ - {gananciaMensualMax.toFixed(2)}€</span>
          </div>
        </div>
        <p className="disclaimer">
          *Estos cálculos son una estimación y pueden variar según la demanda, temporada y características específicas de tus plazas.
        </p>
      </div>
    </div>
  );
};

export default EarningsCalculator;
