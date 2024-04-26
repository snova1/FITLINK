import React, { useState } from 'react';
import '../hojas-de-estilo/RegisterAlly.css';
import Header from '../componentes/Header';
import Footer from '../Footer';

function RegisterAlly() {
  const [allyData, setAllyData] = useState({
    nombreEstablecimiento: '',
    email: '',
    password: '',
    diasAtencion: '',
    horariosAtencion: '',
    telefono: '',
    ciudad: '',
    direccion: '',
    coordenadas: ''
  });

  const handleChange = (e) => {
    setAllyData({ ...allyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ally Data:', allyData);
    // Aquí se maneja la lógica para procesar los datos del formulario
  };

  return (
    <div className="RegisterAlly">
        <Header />
        <div className="ally-container">
        <form className="ally-form" onSubmit={handleSubmit}>
            <h2>Registro de Aliado</h2>
            {Object.entries(allyData).map(([key, value]) => (
            <input
                key={key}
                type={key === 'password' ? 'password' : 'text'}
                name={key}
                placeholder={key[0].toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                value={value}
                onChange={handleChange}
                required
            />
            ))}
            <span>Introduce las coordenadas en formato de Google Maps</span>
            <label>
            <input type="checkbox" required />
            Acepto los <a href="/TyC">Términos y Condiciones</a> y las <a href="/PoliticasDePrivacidad">Políticas de Privacidad</a>
            </label>
            <button type="submit">Registrarse</button>
        </form>
        </div>
        <Footer />
    </div>
  );
}

export default RegisterAlly;
