import React, { useState } from 'react';
import './PQRS.css';
import pqrsImage from './pqrs-image.png';
import Footer from './Footer';
import Header from './componentes/Header';
function PQRS() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="PQRS">
      <Header />
        <img src={pqrsImage} alt="PQRS" />
      <h1 className="pqrs-title">PQRS</h1>
      <p className="pqrs-info">Completa la información, una vez solicites la PQRS te enviaremos el número de radicación al correo.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre Completo"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          required
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <textarea
          name="consulta"
          value={formData.consulta}
          onChange={handleChange}
          placeholder="¿En qué te podemos ayudar?"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <Footer />
    </div>    
  );
}

export default PQRS;
