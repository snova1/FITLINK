import React, { useState } from 'react';
import '../hojas-de-estilo/Register.css';
import Header from '../componentes/Header';
import Footer from '../Footer';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    edad: '',
    peso: '',
    estatura: '',
    numIdentificacion: '',
    ciudad: '',
    direccion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Aquí añades la lógica para enviar los datos a un servidor o manejarlos como necesites
  };

  return (
    <div className="Register">
      <Header />
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registro de Usuario</h2>
        {Object.entries(formData).map(([key, value]) => (
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

export default Register;