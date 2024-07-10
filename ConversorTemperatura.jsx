import React, { useState } from 'react';

const ConversorTemperatura = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleConvertClick = () => {
    if (!isNaN(celsius)) { // Verifica se o valor de celsius é um número
      const celsiusValue = parseFloat(celsius);
      const fahrenheitValue = celsiusValue * 1.8 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2)); // Arredonda para duas casas decimais
    } else {
      alert('Por favor, insira um valor numérico para Celsius.');
    }
  };

  return (
    <div className="conversor-temperatura">
      <h2>Conversor de Temperatura</h2>
      <label>
        Celsius:
        <input
          type="text"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </label>
      <button onClick={handleConvertClick}>Converter</button>
      {fahrenheit && (
        <p>
          {celsius}°C equivalem a {fahrenheit}°F
        </p>
      )}
    </div>
  );
};

export default ConversorTemperatura;